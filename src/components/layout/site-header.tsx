import Link from "next/link";

import { Container } from "@/components/common/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { anchor, homePath, sectionIds, type Content } from "@/content";

type Props = { c: Content; altHref: string };

export function SiteHeader({ c, altHref }: Props) {
  const ids = sectionIds[c.lang];
  const links = [
    { href: anchor(c, ids.projects), label: c.nav.projects },
    { href: anchor(c, ids.services), label: c.nav.services },
    { href: anchor(c, ids.process), label: c.nav.process },
    { href: anchor(c, ids.about), label: c.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={homePath(c)} className="flex items-center gap-2.5 font-heading font-bold">
          <span
            className="grid size-9 place-items-center rounded-xl bg-primary text-sm text-primary-foreground shadow-soft"
            aria-hidden="true"
          >
            {c.person.initials}
          </span>
          <span className="sr-only sm:not-sr-only">{c.person.name}</span>
        </Link>

        <nav aria-label={c.ui.menu} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={altHref}
            hrefLang={c.lang === "pt" ? "en" : "pt-BR"}
            aria-label={c.ui.switchLanguage}
            title={c.ui.switchLanguage}
            className="grid h-10 min-w-10 place-items-center rounded-full px-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {c.ui.otherLanguageLabel}
          </Link>
          <ThemeToggle labels={c.ui.theme} />
          <Button asChild className="ml-1 hidden rounded-full sm:inline-flex">
            <Link href={anchor(c, ids.contact)}>{c.nav.contact}</Link>
          </Button>
          <MobileMenu
            links={[...links, { href: anchor(c, ids.contact), label: c.nav.contact }]}
            contact={{ href: anchor(c, ids.contact), label: c.hero.ctaSecondary }}
            labels={{
              open: c.ui.openMenu,
              close: c.ui.closeMenu,
              title: c.ui.menu,
              description: `${c.person.name} · ${c.person.role}`,
            }}
          />
        </div>
      </Container>
    </header>
  );
}
