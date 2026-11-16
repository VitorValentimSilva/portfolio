// Servidor estático mínimo para testar o `out/` como a Cloudflare Pages serve (/rota → rota.html, 404.html).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT ?? 3000);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml", ".json": "application/json" };

async function resolve(p) {
  const candidates = [p, `${p}.html`, path.join(p, "index.html")];
  for (const c of candidates) {
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
    const file = requested === root || requested.startsWith(root + path.sep) ? await resolve(requested) : null;
    const target = file ?? path.join(root, "404.html");
    res.writeHead(file ? 200 : 404, { "content-type": types[path.extname(target)] ?? "application/octet-stream" });
    res.end(await readFile(target));
  } catch {
    if (!res.headersSent) res.writeHead(500);
    res.end();
  }
}).listen(port, "127.0.0.1", () => console.log(`http://localhost:${port}`));
