import { HomePage } from "@/components/sections/home-page";
import { PageFrame } from "@/components/layout/page-frame";
import { homePath } from "@/content";
import { en } from "@/content/en";
import { pt } from "@/content/pt";
import { buildMetadata, personJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(pt, { paths: { pt: "/", en: "/en" } });

export default function Page() {
  return (
    <PageFrame c={pt} altHref={homePath(en)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(pt)).replace(/</g, "\\u003c") }}
      />
      <HomePage c={pt} />
    </PageFrame>
  );
}
