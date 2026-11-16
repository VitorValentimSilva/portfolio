// Gera os prints dos projetos em WebP (1200px, recorte 16:10 a partir do topo) a partir dos repositórios irmãos.
// Uso: node scripts/optimize-images.mjs [pasta-com-os-repos]  (padrão: ..)
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.argv[2] ?? "..");
const out = path.resolve("public/projects");

/** [arquivo de saída, repo/caminho do print] */
const shots = [
  ["agendai-cover", "agendai/docs/screenshots/01-negocio-1440.png"],
  ["agendai-booking", "agendai/docs/screenshots/04-agendar-etapa-3-1440.png"],
  ["agendai-dashboard", "agendai/docs/screenshots/09-dashboard-1440.png"],
  ["agendai-pix", "agendai/docs/screenshots/16-pix-1440.png"],
  ["estoka-cover", "estoka/docs/screenshots/dashboard-desktop.png"],
  ["estoka-order", "estoka/docs/screenshots/pedido-desktop.png"],
  ["estoka-products", "estoka/docs/screenshots/produtos-desktop.png"],
  ["estoka-dark", "estoka/docs/screenshots/dashboard-desktop-escuro.png"],
  // Clínica: branch main do odonto-aurora. Restaurante: versão Alecrim & Brasa (branch restaurante).
  ["clinic-cover", "odonto-aurora/docs/screenshots/desktop.png"],
  ["landing-cover", "odonto-aurora-restaurante/docs/screenshots/desktop.png"],
  ["landing-dark", "odonto-aurora-restaurante/docs/screenshots/desktop-dark.png"],
];

await mkdir(out, { recursive: true });
for (const [name, file] of shots) {
  const img = sharp(path.join(root, file));
  const { width = 1440 } = await img.metadata();
  const height = Math.round((width * 10) / 16);
  await img
    .extract({ left: 0, top: 0, width, height })
    .resize(1200)
    .webp({ quality: 74 })
    .toFile(path.join(out, `${name}.webp`));
  console.log("ok", name);
}
