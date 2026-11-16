import { ArrowDown, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { anchor, sectionIds, type Content } from "@/content";

export function Hero({ c }: { c: Content }) {
  const ids = sectionIds[c.lang];
  const shots = c.projects.items.slice(0, 3).map((p) => p.cover);
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-glow-a opacity-70 blur-3xl" />
        <div className="absolute top-10 -right-24 size-[24rem] rounded-full bg-glow-b opacity-70 blur-3xl" />
      </div>
      <Container className="grid grid-cols-1 items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-20">
        <div className="flex flex-col items-start gap-6">
          <p className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-sm font-medium shadow-soft">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
            </span>
            {c.hero.badge}
          </p>
          <p className="font-heading text-lg font-semibold text-primary">
            {c.person.name} · {c.person.role}
          </p>
          <h1 id="hero-title" className="text-4xl leading-[1.1] font-extrabold sm:text-5xl xl:text-6xl">
            {c.hero.title}
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">{c.hero.subtitle}</p>
          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
            <Button asChild size="xl">
              <Link href={anchor(c, ids.projects)}>
                {c.hero.ctaPrimary}
                <ArrowDown aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href={anchor(c, ids.contact)}>{c.hero.ctaSecondary}</Link>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            {c.hero.facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="size-4 text-primary" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Colagem com os prints dos projetos (só a partir de lg, para não pesar no celular). */}
        <div aria-hidden="true" className="relative hidden aspect-[5/4] lg:block">
          {shots.map((s, i) => (
            <div
              key={s.src}
              className={[
                "absolute w-[78%] overflow-hidden rounded-2xl border bg-card shadow-lift",
                i === 0 && "top-0 right-0 z-10 rotate-2",
                i === 1 && "top-[30%] left-0 z-20 -rotate-3",
                i === 2 && "right-[4%] bottom-0 z-30 rotate-1",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={s.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, 0px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
