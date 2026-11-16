import type { NextConfig } from "next";

/**
 * Site 100% estático (`out/`), publicado na Cloudflare Pages.
 * Cabeçalhos de segurança e cache ficam em `public/_headers` (o `headers()` do Next não vale no export).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
