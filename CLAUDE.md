# CLAUDE.md — Portfólio

Site estático (Next.js 16 `output: "export"`, Tailwind 4, shadcn/ui) publicado na Cloudflare Pages. PT-BR + EN.

- Texto só em `src/content/{pt,en,shared}.ts` (tipo em `types.ts`); nada de texto no JSX.
- Rotas: `src/app/(pt)/…` e `src/app/(en)/en/…` (dois layouts raiz). Caminhos via `homePath/projectPath/anchor` de `@/content`.
- Sem servidor: nada de `headers()`, middleware, `cookies()` ou rotas dinâmicas sem `generateStaticParams`.
  Cabeçalhos em `public/_headers`. Imagens `unoptimized`: gere WebP com `npm run images`.
- Cores só por tokens em `globals.css` (`:root` e `.dark`, contraste AA). Sem scripts/fontes de terceiros (CSP).
- Componentes: `sections/` (uma seção por arquivo), `layout/`, `project/`, `common/`, `ui/` (shadcn).
- Imagem acima da dobra: `preload` + `fetchPriority="high"` (no Next 16 `priority` está obsoleto).
- Antes de concluir: `npm run format`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm run test:e2e`
  e `npm run lhci` limpos (testes leem do DOM/conteúdo, nunca texto fixo); sem rolagem horizontal em 375/1440.
- Commits pequenos, em português. Respostas ao Valentim em pt-BR.
