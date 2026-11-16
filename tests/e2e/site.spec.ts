import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import { contents, projectPath, sectionIds } from "../../src/content";

const { pt, en } = contents;
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** Nome do botão de tema: o começo do modelo, antes de {mode}. */
const themeButton = new RegExp(`^${escape(pt.ui.theme.toggle.split("{mode}")[0])}`);
const pages = [
  { c: pt, path: "/" },
  { c: en, path: "/en" },
  ...pt.projects.items.map((p) => ({ c: pt, path: projectPath(pt, p.slug) })),
  ...en.projects.items.map((p) => ({ c: en, path: projectPath(en, p.slug) })),
];

for (const { c, path } of pages) {
  test.describe(path, () => {
    test("carrega sem erros, com idioma e título certos", async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", c.htmlLang);
      await expect(page.locator("h1")).toHaveCount(1);
      await page.waitForLoadState("networkidle");
      expect(errors).toEqual([]);
    });

    test("sem rolagem horizontal", async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });

    for (const scheme of ["light", "dark"] as const) {
      test(`acessibilidade (axe, tema ${scheme})`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: scheme, reducedMotion: "reduce" });
        await page.goto(path);
        const { violations } = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
          .analyze();
        expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
      });
    }
  });
}

test("troca de idioma leva para a página equivalente", async ({ page }) => {
  const slug = pt.projects.items[0].slug;
  await page.goto(projectPath(pt, slug));
  await page.getByRole("link", { name: pt.ui.switchLanguage }).click();
  await expect(page).toHaveURL(new RegExp(`${projectPath(en, slug)}$`));
  await expect(page.locator("html")).toHaveAttribute("lang", en.htmlLang);
});

test("tema alterna entre claro e escuro", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const html = page.locator("html");
  await page.getByRole("button", { name: themeButton }).click();
  await expect(html).toHaveClass(/(^|\s)light(\s|$)/);
  await page.getByRole("button", { name: themeButton }).click();
  await expect(html).toHaveClass(/(^|\s)dark(\s|$)/);
});

test("menu do celular abre e navega", async ({ page, isMobile }) => {
  test.skip(!isMobile, "só no celular");
  await page.goto("/");
  await page.getByRole("button", { name: pt.ui.openMenu }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await dialog.getByRole("link", { name: pt.nav.about }).click();
  await expect(dialog).toBeHidden();
  await expect(page).toHaveURL(new RegExp(`#${sectionIds.pt.about}$`));
});

test("links de WhatsApp levam o número e a mensagem", async ({ page }) => {
  test.skip(!pt.contact.whatsapp, "sem WhatsApp configurado");
  await page.goto("/");
  const hrefs = await page
    .locator('a[href^="https://wa.me/"]')
    .evaluateAll((as) => as.map((a) => a.getAttribute("href")));
  expect(hrefs.length).toBeGreaterThan(0);
  for (const h of hrefs) expect(h).toContain(`wa.me/${pt.contact.whatsapp}?text=`);
});

test("endereço inexistente responde 404", async ({ page }) => {
  const res = await page.goto("/nao-existe");
  expect(res?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: pt.ui.notFoundTitle })).toBeVisible();
});
