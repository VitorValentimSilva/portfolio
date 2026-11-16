# CLAUDE.md — Portfólio

Site estático (Next.js 16 `output: "export"`, Tailwind 4, shadcn/ui) publicado na Cloudflare Pages. PT-BR + EN.

- Texto só em `src/content/{pt,en,shared}.ts` (tipo em `types.ts`); nada de texto no JSX.
- Rotas: `src/app/(pt)/…` e `src/app/(en)/en/…` (dois layouts raiz). Caminhos via `homePath/projectPath/anchor` de `@/content`.
- Sem servidor: nada de `headers()`, middleware, `cookies()` ou rotas dinâmicas sem `generateStaticParams`.
  Cabeçalhos em `public/_headers`. Imagens `unoptimized`: gere WebP com `npm run images`.
- Cores só por tokens em `globals.css` (`:root` e `.dark`, contraste AA). Sem scripts/fontes de terceiros (CSP).
- Antes de concluir: `npm run lint` e `npm run build` limpos; sem rolagem horizontal em 375/1440.
- Commits pequenos, em português. Respostas ao Valentim em pt-BR.
