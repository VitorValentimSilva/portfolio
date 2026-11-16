import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { contents, homePath } from "@/content";

import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const { pt, en } = contents;

export const metadata: Metadata = {
  title: `404 · ${pt.person.name}`,
  robots: { index: false },
};

/** 404 único para os dois idiomas (o site tem dois layouts raiz). Vira `out/404.html`. */
export default function GlobalNotFound() {
  return (
    <html lang={pt.htmlLang} className={inter.variable}>
      <body className="grid min-h-dvh place-items-center p-6">
        <main className="flex max-w-md flex-col items-center gap-4 text-center">
          <p className="font-heading text-6xl font-extrabold text-primary">404</p>
          <h1 className="text-2xl font-bold">{pt.ui.notFoundTitle}</h1>
          <p className="text-muted-foreground">{pt.ui.notFoundText}</p>
          <p lang={en.htmlLang} className="text-sm text-muted-foreground">
            {en.ui.notFoundTitle}. {en.ui.notFoundText}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={homePath(pt)}
              className="rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
            >
              {pt.ui.goHome}
            </Link>
            <Link href={homePath(en)} lang={en.htmlLang} className="rounded-full border px-5 py-2.5 font-semibold">
              {en.ui.goHome}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
