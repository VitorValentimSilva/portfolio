import { Boxes, CalendarCheck, Globe, Plug } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { sectionIds, type Content } from "@/content";
import type { Service } from "@/content/types";

const icons = { globe: Globe, calendar: CalendarCheck, boxes: Boxes, plug: Plug } satisfies Record<
  Service["icon"],
  unknown
>;

export function Services({ c }: { c: Content }) {
  return (
    <section id={sectionIds[c.lang].services} aria-labelledby="services-title" className="bg-muted/60 py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="services-title" {...c.services} />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {c.services.items.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className="reveal flex flex-col gap-3 rounded-3xl border bg-card p-6 shadow-soft">
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
  );
}
