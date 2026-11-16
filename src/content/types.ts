export type Lang = "pt" | "en";

export type Link = { label: string; href: string };

export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  /** Frase curta que vende o projeto (em linguagem de cliente). */
  tagline: string;
  /** Para quem serve. */
  audience: string;
  summary: string;
  features: string[];
  /** Decisões técnicas em linguagem simples. */
  highlights: string[];
  stack: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  demo?: Link;
  /** Login de teste mostrado na página do projeto. */
  demoNote?: string;
  code: Link;
  /** Exibido quando a demo ainda não está publicada. */
  status?: string;
};

export type Service = { icon: "globe" | "calendar" | "boxes" | "plug"; title: string; description: string };

export type Step = { title: string; description: string };

export type Content = {
  lang: Lang;
  htmlLang: string;
  locale: string;
  /** Prefixo das rotas deste idioma ("" para pt, "/en" para en). */
  base: string;
  projectsPath: string;
  seo: { title: string; description: string; keywords: string[] };
  person: { name: string; role: string; location: string; initials: string };
  contact: { whatsapp: string; whatsappMessage: string; email: string; linkedin: string; github: string };
  nav: { projects: string; services: string; process: string; about: string; contact: string };
  ui: {
    skipToContent: string;
    switchLanguage: string;
    otherLanguageLabel: string;
    theme: { toggle: string; light: string; dark: string; system: string };
    viewDemo: string;
    viewCode: string;
    viewProject: string;
    backToProjects: string;
    features: string;
    highlights: string;
    stack: string;
    gallery: string;
    forWho: string;
    talkWhatsapp: string;
    sendEmail: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    whatsappFab: string;
    notFoundTitle: string;
    notFoundText: string;
    goHome: string;
    rights: string;
    builtWith: string;
  };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; facts: string[] };
  services: { eyebrow: string; title: string; description: string; items: Service[] };
  projects: { eyebrow: string; title: string; description: string; items: Project[] };
  process: { eyebrow: string; title: string; description: string; steps: Step[] };
  skills: { eyebrow: string; title: string; groups: { title: string; items: string[] }[] };
  about: { eyebrow: string; title: string; paragraphs: string[] };
  cta: { title: string; description: string };
};
