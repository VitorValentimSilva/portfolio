import type { Viewport } from "next";
import type { ReactNode } from "react";

import { RootShell } from "@/components/layout/root-shell";
import { en } from "@/content/en";

import "../../globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1120" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell c={en}>{children}</RootShell>;
}
