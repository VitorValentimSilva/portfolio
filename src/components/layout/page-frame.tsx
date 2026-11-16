import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import type { Content } from "@/content";

export function PageFrame({ c, altHref, children }: { c: Content; altHref: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader c={c} altHref={altHref} />
      <main id="conteudo">{children}</main>
      <SiteFooter c={c} />
      <WhatsAppFab c={c} />
    </>
  );
}
