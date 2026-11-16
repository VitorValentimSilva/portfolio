import { ArrowDown, Boxes, CalendarCheck, Check, Globe, Plug } from "lucide-react";

import { ContactButtons } from "@/components/contact-buttons";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { anchor, sectionIds, type Content } from "@/content";
import type { Service } from "@/content/types";

const serviceIcons = { globe: Globe, calendar: CalendarCheck, boxes: Boxes, plug: Plug } satisfies Record<
  Service["icon"],
  unknown
>;

export function HomePage({ c }: { c: Content }) {
  const ids = sectionIds[c.lang];
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-glow-a opacity-70 blur-3xl" />
          <div className="absolute top-10 -right-24 size-[24rem] rounded-full bg-glow-b opacity-70 blur-3xl" />
        </div>
        <Container className="flex flex-col items-start gap-6 py-20 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-sm font-medium shadow-soft">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
            </span>
            {c.hero.badge}
          </p>
          <p className="font-heading text-lg font-semibold text-primary">
            {c.person.name} · {c.person.role}
          </p>
          <h1 id="hero-title" className="max-w-3xl text-4xl leading-[1.1] font-extrabold sm:text-5xl lg:text-6xl">
            {c.hero.title}
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">{c.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="xl">
              <a href={anchor(c, ids.projects)}>
                {c.hero.ctaPrimary}
                <ArrowDown aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href={anchor(c, ids.contact)}>{c.hero.ctaSecondary}</a>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
            {c.hero.facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="size-4 text-primary" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Projetos */}
      <section id={ids.projects} aria-labelledby="projects-title" className="py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="projects-title" {...c.projects} />
          <div className="grid grid-cols-1 gap-8">
            {c.projects.items.map((p, i) => (
              <ProjectCard key={p.slug} c={c} project={p} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Serviços */}
      <section id={ids.services} aria-labelledby="services-title" className="bg-muted/60 py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="services-title" {...c.services} />
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {c.services.items.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <li key={s.title} className="flex flex-col gap-3 rounded-3xl border bg-card p-6 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-muted-foreground">{s.description}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Como trabalho */}
      <section id={ids.process} aria-labelledby="process-title" className="py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="process-title" {...c.process} />
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-3 rounded-3xl border bg-card p-6 shadow-soft">
                <span className="font-heading text-3xl font-extrabold text-primary" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Tecnologias */}
      <section id={ids.skills} aria-labelledby="skills-title" className="bg-muted/60 py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="skills-title" eyebrow={c.skills.eyebrow} title={c.skills.title} />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.skills.groups.map((g) => (
              <div key={g.title} className="rounded-3xl border bg-card p-6 shadow-soft">
                <h3 className="mb-4 text-lg font-bold">{g.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border px-3 py-1 text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sobre */}
      <section id={ids.about} aria-labelledby="about-title" className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
          {/* TODO(Valentim): trocar pelas iniciais por uma foto profissional em public/ (ex.: /foto.webp). */}
          <div
            className="grid size-40 place-items-center rounded-3xl bg-gradient-to-br from-primary to-highlight font-heading text-5xl font-extrabold text-primary-foreground shadow-lift"
            aria-hidden="true"
          >
            {c.person.initials}
          </div>
          <div className="flex flex-col gap-4">
            <SectionHeading id="about-title" eyebrow={c.about.eyebrow} title={c.about.title} />
            {c.about.paragraphs.map((p) => (
              <p key={p} className="max-w-3xl text-lg text-pretty text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Contato */}
      <section id={ids.contact} aria-labelledby="contact-title" className="pb-20 sm:pb-24">
        <Container>
          <div className="flex flex-col gap-6 rounded-3xl bg-primary p-8 text-primary-foreground shadow-lift sm:p-12">
            <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">
              {c.cta.title}
            </h2>
            <p className="max-w-2xl text-lg opacity-90">{c.cta.description}</p>
            <div className="[&_a[data-variant=outline]]:border-white/40 [&_a[data-variant=outline]]:bg-white/10 [&_a[data-variant=outline]]:text-primary-foreground [&_a[data-variant=outline]]:hover:bg-white/20">
              <ContactButtons c={c} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
