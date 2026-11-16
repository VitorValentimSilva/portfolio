import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/common/theme-provider";
import type { Content } from "@/content";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "optional" });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

/** `<html>` comum aos dois layouts raiz (pt e en). */
export function RootShell({ c, children }: { c: Content; children: ReactNode }) {
  return (
    <html lang={c.htmlLang} suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lift transition-transform focus:translate-y-0"
        >
          {c.ui.skipToContent}
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
