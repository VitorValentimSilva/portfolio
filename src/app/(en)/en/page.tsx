import { HomePage } from "@/components/home-page";
import { PageFrame } from "@/components/layout/page-frame";
import { homePath } from "@/content";
import { pt } from "@/content/pt";
import { en } from "@/content/en";
import { buildMetadata, personJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(en, { paths: { pt: "/", en: "/en" } });

export default function Page() {
  return (
    <PageFrame c={en} altHref={homePath(pt)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(en)).replace(/</g, "\\u003c") }}
      />
      <HomePage c={en} />
    </PageFrame>
  );
}
