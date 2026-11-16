import { en } from "./en";
import { pt } from "./pt";
import type { Content, Lang } from "./types";

export const contents: Record<Lang, Content> = { pt, en };
export const getContent = (lang: Lang) => contents[lang];

/** URL pública: variável explícita > URL do deploy da Cloudflare Pages > localhost. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.CF_PAGES_URL ??
  "http://localhost:3000"
).replace(/\/$/, "");

export const homePath = (c: Content) => c.base || "/";
export const projectPath = (c: Content, slug: string) => `${c.projectsPath}/${slug}`;
/** Âncora da home que funciona em qualquer página. */
export const anchor = (c: Content, id: string) => `${c.base}/#${id}`;

export const whatsappUrl = (c: Content) =>
  c.contact.whatsapp ? `https://wa.me/${c.contact.whatsapp}?text=${encodeURIComponent(c.contact.whatsappMessage)}` : "";

export const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? "");

export type { Content, Lang, Project } from "./types";

/** Ids das seções (aparecem na URL, então ficam no idioma da página). */
export const sectionIds = {
  pt: {
    services: "servicos",
    projects: "projetos",
    process: "como-trabalho",
    skills: "tecnologias",
    about: "sobre",
    contact: "contato",
  },
  en: {
    services: "services",
    projects: "projects",
    process: "process",
    skills: "tech",
    about: "about",
    contact: "contact",
  },
} satisfies Record<Lang, Record<string, string>>;
