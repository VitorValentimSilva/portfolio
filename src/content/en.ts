import { contact, projectLinks, skills, stacks } from "./shared";
import type { Content } from "./types";

export const en: Content = {
  lang: "en",
  htmlLang: "en",
  locale: "en_US",
  base: "/en",
  projectsPath: "/en/projects",
  seo: {
    title: "Vitor Valentim — Full stack developer for websites and web apps",
    description:
      "I build fast websites, booking systems, inventory and sales dashboards and integrations for small businesses. React, Next.js, NestJS, .NET and Blazor.",
    keywords: [
      "freelance developer",
      "full stack developer",
      "web development",
      "landing page",
      "booking system",
      "inventory system",
      "Next.js",
      "React",
      ".NET",
      "Blazor",
    ],
  },
  person: { name: "Vitor Valentim", role: "Full stack developer", location: "Presidente Prudente, Brazil · remote", initials: "VV" },
  contact: {
    ...contact,
    whatsappMessage: "Hi Vitor! I saw your portfolio and would like to talk about a project.",
  },
  nav: { projects: "Projects", services: "Services", process: "Process", about: "About", contact: "Contact" },
  ui: {
    skipToContent: "Skip to content",
    switchLanguage: "View the site in Portuguese",
    otherLanguageLabel: "PT",
    theme: { toggle: "Theme: {mode}. Click to change", light: "light", dark: "dark", system: "system" },
    viewDemo: "Live demo",
    viewCode: "Source code",
    viewProject: "View details",
    backToProjects: "Back to projects",
    features: "What it does",
    highlights: "Under the hood",
    stack: "Tech stack",
    gallery: "Screens",
    forWho: "Built for",
    talkWhatsapp: "Message on WhatsApp",
    sendEmail: "Send an email",
    menu: "Menu",
    notFoundTitle: "Page not found",
    notFoundText: "The address may have changed or does not exist.",
    goHome: "Back to home",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js and Tailwind CSS, hosted on Cloudflare.",
  },
  hero: {
    badge: "Available for freelance projects",
    title: "Websites and web apps that keep your business running",
    subtitle:
      "I'm a full stack developer. I build fast websites, booking systems, inventory and sales dashboards and integrations with WhatsApp and payments, tailored to small businesses.",
    ctaPrimary: "See projects",
    ctaSecondary: "Get in touch",
    facts: ["React · Next.js · NestJS", "C# · .NET · Blazor", "Tested code and a live demo"],
  },
  services: {
    eyebrow: "Services",
    title: "How I can help",
    description: "From a marketing site to an internal tool, with clean, fast and maintainable code.",
    items: [
      {
        icon: "globe",
        title: "Websites and landing pages",
        description:
          "Fast, mobile-first pages for clinics, restaurants and local businesses, with a WhatsApp button and solid SEO.",
      },
      {
        icon: "calendar",
        title: "Booking systems",
        description:
          "Online scheduling with real-time availability, WhatsApp confirmations and reminders, online payments and an owner dashboard.",
      },
      {
        icon: "boxes",
        title: "Dashboards and internal tools",
        description:
          "Inventory, orders, customers and PDF/Excel reports, with role-based access (owner, manager, salesperson).",
      },
      {
        icon: "plug",
        title: "APIs and integrations",
        description:
          "Connections to WhatsApp, payment providers, Google Calendar and other services, plus documented APIs for your system.",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Complete projects you can try",
    description:
      "Each one was built like a real product: mobile-friendly, covered by automated tests and loaded with demo data.",
    items: [
      {
        slug: "agendai",
        name: "Agendaí",
        tagline: "Online booking system for barbershops, salons and clinics",
        audience: "Barbershops, beauty salons, studios and clinics that still book appointments by chat.",
        summary:
          "Customers pick a service, a professional and a time slot in a few taps. The owner manages the schedule, gets paid upfront via Pix and the system sends WhatsApp reminders. One installation serves many businesses, each with its own link.",
        features: [
          "5-step booking flow with live availability",
          "WhatsApp reminders and confirmations",
          "Upfront payment via Pix (Mercado Pago)",
          "Google Calendar sync and .ics download",
          "Waitlist when a slot is full",
          "Owner dashboard with daily schedule, reports and CSV export",
          "Staff role that only sees its own schedule",
          "Multi-tenant: each business gets a subdomain or link",
        ],
        highlights: [
          "Double booking is impossible: the rule lives in the database itself",
          "Scheduling rules covered by unit tests, respecting each business's time zone",
          "Documented API (Swagger) with types generated for the frontend",
          "Demo data reset every day",
        ],
        stack: stacks.agendai,
        cover: { src: "/projects/agendai-cover.webp", alt: "Public page of the demo barbershop on Agendaí" },
        gallery: [
          { src: "/projects/agendai-booking.webp", alt: "Choosing a date and time while booking" },
          { src: "/projects/agendai-dashboard.webp", alt: "Owner dashboard with the day's summary" },
          { src: "/projects/agendai-pix.webp", alt: "Pix payment with QR code" },
        ],
        demo: { label: "Live demo", href: projectLinks.agendai.demo },
        demoNote: "Test login: demo@agendai.app · password demo1234",
        code: { label: "Source code", href: projectLinks.agendai.code },
      },
      {
        slug: "estoka",
        name: "Estoka",
        tagline: "Inventory and sales system for small businesses",
        audience: "Distributors, shops and small companies that track stock and orders in spreadsheets.",
        summary:
          "Products, customers and suppliers, sales orders that update stock automatically, barcode scanning with a phone camera, reports and a full history of every change.",
        features: [
          "Sales orders that update stock automatically",
          "Barcode scanning (USB scanner or phone camera)",
          "Dashboard with sales, margin and low-stock products",
          "PDF and Excel reports (sales, ABC analysis, stock)",
          "Role-based access: salespeople never see cost or margin",
          "Audit trail (who changed what, and when)",
          "Light and dark themes",
        ],
        highlights: [
          "Stock never goes negative, even when two salespeople sell the last unit at the same time",
          "122 automated tests against a real database, plus end-to-end browser tests",
          "Layered (Clean Architecture) design that is easy to extend",
          "Docker-ready, with OpenTelemetry monitoring and rate limiting",
        ],
        stack: stacks.estoka,
        cover: { src: "/projects/estoka-cover.webp", alt: "Estoka sales and inventory dashboard" },
        gallery: [
          { src: "/projects/estoka-order.webp", alt: "Sales order screen" },
          { src: "/projects/estoka-products.webp", alt: "Product list with stock and price" },
          { src: "/projects/estoka-dark.webp", alt: "Dashboard in dark mode" },
        ],
        demo: projectLinks.estoka.demo ? { label: "Live demo", href: projectLinks.estoka.demo } : undefined,
        demoNote: "Test login: admin@estoka.app · password Demo@1234",
        code: { label: "Source code", href: projectLinks.estoka.code },
        status: "Live demo coming soon",
      },
      {
        slug: "landing-pages",
        name: "Landing pages for local businesses",
        tagline: "One template, many businesses: a dental clinic and a restaurant",
        audience: "Clinics, restaurants, practices and local businesses that need to look good on Google and on mobile.",
        summary:
          "A complete landing page (services, team, reviews, location and WhatsApp contact) built as a template: the same codebase became the Odonto Aurora clinic and the Alecrim & Brasa restaurant just by changing copy, colors and illustration. That makes a new site faster and cheaper.",
        features: [
          "Button and form that open WhatsApp with a ready-made message",
          "Portuguese and English",
          "Light and dark themes",
          "A page for each service or dish",
          "Privacy policy and structured data for Google",
          "Subtle animations that respect reduced-motion settings",
        ],
        highlights: [
          "High Lighthouse scores (performance, accessibility, SEO) checked on every change",
          "Accessibility and layout tests across 5 screen sizes",
          "No server or database: free hosting and nothing to maintain",
          "All content lives in a single config file",
        ],
        stack: stacks.landing,
        cover: { src: "/projects/clinic-cover.webp", alt: "Odonto Aurora dental clinic landing page" },
        gallery: [
          { src: "/projects/landing-cover.webp", alt: "Alecrim & Brasa restaurant landing page" },
          { src: "/projects/landing-dark.webp", alt: "The restaurant in dark mode" },
        ],
        demo: projectLinks.landing.demo ? { label: "Live demo", href: projectLinks.landing.demo } : undefined,
        code: { label: "Source code", href: projectLinks.landing.code },
        status: "Live demo coming soon",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "A simple, transparent process",
    description: "You follow every step and test the project before the final delivery.",
    steps: [
      { title: "Discovery call", description: "I learn about your business, the problem and what needs to ship first." },
      { title: "Proposal", description: "Fixed scope, timeline and price, with no surprises along the way." },
      { title: "Weekly deliveries", description: "You get a link to try the progress and can request changes at each step." },
      { title: "Launch and support", description: "I deploy the project, hand over access and support you after launch." },
    ],
  },
  skills: {
    eyebrow: "Tech",
    title: "Tools I use every day",
    groups: [
      { title: "Frontend", items: skills.front },
      { title: "Backend", items: skills.back },
      { title: "Databases", items: skills.data },
      { title: "Tooling", items: skills.tools },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Hi, I'm Vitor Valentim",
    paragraphs: [
      "I'm a full stack developer working with JavaScript/TypeScript (React, Next.js, NestJS) and C#/.NET (ASP.NET Core, Blazor, Entity Framework).",
      "I enjoy turning manual work, like paper schedules and spreadsheet inventories, into systems that are simple to use. I care about speed, security and code that is ready to grow.",
      "I work remotely from Brazil, with clear communication and deadlines agreed upfront.",
    ],
  },
  cta: {
    title: "Have a project in mind?",
    description: "Tell me what you need. I reply quickly with a rough timeline and estimate.",
  },
};
