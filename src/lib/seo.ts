import type { Metadata } from "next";

import { contents, siteUrl, type Content } from "@/content";

/** Metadados comuns; `paths` traz o caminho equivalente em cada idioma (para hreflang). */
export function buildMetadata(
  c: Content,
  opts: { title?: string; description?: string; paths: Record<Content["lang"], string> },
): Metadata {
  const title = opts.title ?? c.seo.title;
  const description = opts.description ?? c.seo.description;
  const path = opts.paths[c.lang];
  return {
    metadataBase: new URL(siteUrl),
    title: opts.title ? { absolute: `${opts.title} | ${c.person.name}` } : c.seo.title,
    description,
    keywords: c.seo.keywords,
    authors: [{ name: c.person.name, url: c.contact.linkedin }],
    alternates: {
      canonical: path,
      languages: {
        [contents.pt.htmlLang]: opts.paths.pt,
        [contents.en.htmlLang]: opts.paths.en,
        "x-default": opts.paths.pt,
      },
    },
    openGraph: {
      type: "website",
      locale: c.locale,
      url: path,
      siteName: c.person.name,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: c.seo.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

/** JSON-LD da pessoa (ajuda o Google a ligar o site ao LinkedIn e ao GitHub). */
export function personJsonLd(c: Content) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.person.name,
    jobTitle: c.person.role,
    url: siteUrl + (c.base || "/"),
    sameAs: [c.contact.linkedin, c.contact.github],
    knowsAbout: c.skills.groups.flatMap((g) => g.items),
  };
}
