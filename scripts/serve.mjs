// Servidor estático mínimo para testar o `out/` como a Cloudflare Pages serve (/rota → rota.html, 404.html,
// texto comprimido com brotli/gzip), para que o Lighthouse meça o mesmo tamanho de produção.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { brotliCompressSync, gzipSync } from "node:zlib";

const root = path.resolve("out");
const port = Number(process.env.PORT ?? 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".json": "application/json",
};

/** Só aceita arquivos dentro de out/ (bloqueia /..%2f e o `out.html` vizinho). */
const inside = (p) => p.startsWith(root + path.sep);

async function resolve(p) {
  const candidates = [p, `${p}.html`, path.join(p, "index.html")];
  for (const c of candidates) {
    if (!inside(c)) continue;
    try {
      if ((await stat(c)).isFile()) return c;
    } catch {}
  }
  return null;
}

createServer(async (req, res) => {
  try {
    let url;
    try {
      url = decodeURIComponent(new URL(req.url, "http://x").pathname).replace(/\/$/, "") || "/";
    } catch {
      res.writeHead(400).end("Bad Request");
      return;
    }
    const requested = path.resolve(root, `.${url}`);
    // Nunca servir nada fora de out/ (ex.: /..%2fpackage.json).
    const file = requested === root || inside(requested) ? await resolve(requested) : null;
    const target = file ?? path.join(root, "404.html");
    let body = await readFile(target);
    const type = types[path.extname(target)] ?? "application/octet-stream";
    const headers = { "content-type": type, vary: "accept-encoding" };
    const accepts = String(req.headers["accept-encoding"] ?? "");
    if (/^(text|application)\/|svg/.test(type)) {
      if (/\bbr\b/.test(accepts)) [body, headers["content-encoding"]] = [brotliCompressSync(body), "br"];
      else if (/\bgzip\b/.test(accepts)) [body, headers["content-encoding"]] = [gzipSync(body), "gzip"];
    }
    res.writeHead(file ? 200 : 404, headers);
    res.end(body);
  } catch {
    if (!res.headersSent) res.writeHead(500);
    res.end();
  }
}).listen(port, "127.0.0.1", () => console.log(`http://localhost:${port}`));
