import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { title: "404 · Vitor Valentim", robots: { index: false } };

/** 404 único para os dois idiomas (o site tem dois layouts raiz). Vira `out/404.html`. */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="grid min-h-dvh place-items-center p-6">
        <main className="flex max-w-md flex-col items-center gap-4 text-center">
          <p className="font-heading text-6xl font-extrabold text-primary">404</p>
          <h1 className="text-2xl font-bold">Página não encontrada · Page not found</h1>
          <p className="text-muted-foreground">O endereço pode ter mudado ou não existe.</p>
          <div className="flex gap-3">
            <Link href="/" className="rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">
              Início
            </Link>
            <Link href="/en" className="rounded-full border px-5 py-2.5 font-semibold">
              Home (EN)
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
