// Gera public/og.png (1200x630) para compartilhamento no LinkedIn/WhatsApp.
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e1b4b"/><stop offset="1" stop-color="#312e81"/></linearGradient>
  <radialGradient id="r" cx="0.85" cy="0.15" r="0.6"><stop offset="0" stop-color="#22d3ee" stop-opacity="0.35"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/><rect width="1200" height="630" fill="url(#r)"/>
  <rect x="80" y="80" width="96" height="96" rx="24" fill="#6366f1"/>
  <text x="128" y="143" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="40" font-weight="bold" fill="#fff">VV</text>
  <text x="80" y="300" font-family="DejaVu Sans, Arial, sans-serif" font-size="72" font-weight="bold" fill="#fff">Vitor Valentim</text>
  <text x="80" y="370" font-family="DejaVu Sans, Arial, sans-serif" font-size="36" fill="#c7d2fe">Desenvolvedor full stack · Full stack developer</text>
  <text x="80" y="520" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" fill="#a5f3fc">React · Next.js · NestJS · C# · .NET · Blazor</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og.png");
console.log("public/og.png ok");
