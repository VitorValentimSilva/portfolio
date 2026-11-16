import { ArrowLeft, Check, ExternalLink, KeyRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactButtons } from "@/components/contact-buttons";
import { Container } from "@/components/container";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { anchor, sectionIds, type Content, type Project } from "@/content";

export function ProjectDetail({ c, project: p }: { c: Content; project: Project }) {
  return (
    <article className="py-12 sm:py-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <Link
            href={anchor(c, sectionIds[c.lang].projects)}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {c.ui.backToProjects}
          </Link>
          <h1 className="text-4xl font-extrabold sm:text-5xl">{p.name}</h1>
          <p className="text-xl font-medium text-primary">{p.tagline}</p>
          <p className="max-w-3xl text-lg text-pretty text-muted-foreground">{p.summary}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {p.demo ? (
              <Button asChild size="xl">
                <a href={p.demo.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden="true" />
                  {p.demo.label}
                </a>
              </Button>
            ) : (
              p.status && (
                <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">{p.status}</span>
              )
            )}
            <Button asChild size="xl" variant="outline">
              <a href={p.code.href} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                {p.code.label}
              </a>
            </Button>
          </div>
          {p.demo && p.demoNote && (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <KeyRound className="size-4" aria-hidden="true" />
              {p.demoNote}
            </p>
          )}
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border bg-muted shadow-lift">
          <Image src={p.cover.src} alt={p.cover.alt} fill priority sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover object-top" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section aria-labelledby="features" className="rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
            <h2 id="features" className="mb-5 text-2xl font-bold">
              {c.ui.features}
            </h2>
            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="flex flex-col gap-8">
            <section aria-labelledby="highlights" className="rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
              <h2 id="highlights" className="mb-5 text-2xl font-bold">
                {c.ui.highlights}
              </h2>
              <ul className="space-y-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-highlight" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="audience" className="rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
              <h2 id="audience" className="mb-3 text-2xl font-bold">
                {c.ui.forWho}
              </h2>
              <p className="text-muted-foreground">{p.audience}</p>
              <h2 className="mt-6 mb-3 text-lg font-bold">{c.ui.stack}</h2>
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {p.gallery.length > 0 && (
          <section aria-labelledby="gallery">
            <h2 id="gallery" className="mb-5 text-2xl font-bold">
              {c.ui.gallery}
            </h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {p.gallery.map((img) => (
                <li key={img.src}>
                  <figure className="flex flex-col gap-2">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border bg-muted shadow-soft">
                      <Image src={img.src} alt={img.alt} fill loading="lazy" sizes="(min-width: 768px) 540px, 100vw" className="object-cover object-top" />
                    </div>
                    <figcaption className="text-sm text-muted-foreground">{img.alt}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="project-contact" className="flex flex-col gap-4 rounded-3xl bg-muted p-6 sm:p-8">
          <h2 id="project-contact" className="text-2xl font-bold">
            {c.cta.title}
          </h2>
          <p className="text-muted-foreground">{c.cta.description}</p>
          <ContactButtons c={c} />
        </section>
      </Container>
    </article>
  );
}
