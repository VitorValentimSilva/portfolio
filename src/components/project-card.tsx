import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GitHubIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { projectPath, type Content, type Project } from "@/content";

type Props = { c: Content; project: Project; priority?: boolean };

export function ProjectCard({ c, project: p, priority }: Props) {
  const href = projectPath(c, p.slug);
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-shadow hover:shadow-lift lg:flex-row lg:odd:flex-row-reverse">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-muted lg:w-[55%] lg:shrink-0" tabIndex={-1}>
        <Image
          src={p.cover.src}
          alt={p.cover.alt}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">
            <Link href={href} className="hover:text-primary">
              {p.name}
            </Link>
          </h3>
          <p className="font-medium text-primary">{p.tagline}</p>
        </div>
        <p className="text-pretty text-muted-foreground">{p.summary}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label={c.ui.stack}>
          {p.stack.slice(0, 6).map((s) => (
            <li key={s} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Button asChild className="rounded-full">
            <Link href={href}>
              {c.ui.viewProject}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          {p.demo ? (
            <Button asChild variant="outline" className="rounded-full">
              <a href={p.demo.href} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden="true" />
                {p.demo.label}
              </a>
            </Button>
          ) : (
            p.status && <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">{p.status}</span>
          )}
          <Button asChild variant="ghost" className="rounded-full">
            <a href={p.code.href} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              {p.code.label}
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
