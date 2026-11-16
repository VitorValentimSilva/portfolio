# Portfólio — Vitor Valentim

Site de portfólio para freelance (PT-BR + EN). Estático, rápido e com custo zero de hospedagem.

- **Stack:** Next.js 16 (App Router, `output: "export"`), TypeScript, Tailwind CSS 4, shadcn/ui, next-themes.
- **Hospedagem:** Cloudflare Pages (plano grátis). Cabeçalhos de segurança e cache em `public/_headers`.
- **Rotas:** `/` e `/projetos/<slug>` (português), `/en` e `/en/projects/<slug>` (inglês). Dois layouts raiz
  (`src/app/(pt)` e `src/app/(en)`) para o `<html lang>` certo em cada idioma; 404 único em `global-not-found.tsx`.

## Conteúdo

Todo o texto fica em `src/content/` — `pt.ts`, `en.ts` e `shared.ts` (links, WhatsApp, e-mail, stacks).
Componentes não têm texto fixo. Para mostrar o botão de WhatsApp/e-mail, preencha `contact` em `shared.ts`.
Para publicar a demo de um projeto, preencha `projectLinks` em `shared.ts`.

Prints dos projetos: `npm run images` lê os PNGs de `../agendai`, `../estoka` e `../odonto-aurora` (repositórios irmãos)
e gera WebP em `public/projects/`. Imagem de compartilhamento: `node scripts/og-image.mjs` → `public/og.png`.

## Comandos

```bash
npm run dev        # http://localhost:3000
npm run lint
npm run build      # gera out/
npm run start      # serve out/ como a Cloudflare Pages (/rota → rota.html, 404.html)
```

## Deploy na Cloudflare Pages

1. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git** → este repositório.
2. Framework preset: **None**. Build command: `npm run build`. Output directory: `out`.
3. Variáveis: `NODE_VERSION=22` e, depois de ligar o domínio, `NEXT_PUBLIC_SITE_URL=https://seudominio.com.br`
   (sem ela, usa a URL `*.pages.dev` do deploy).
4. Domínio próprio: **Custom domains → Set up a domain**. Para `.com.br`, o jeito mais simples é adicionar o domínio
   na Cloudflare e trocar os servidores DNS no Registro.br pelos que a Cloudflare indicar.
