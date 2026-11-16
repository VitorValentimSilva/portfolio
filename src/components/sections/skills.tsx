import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { sectionIds, type Content } from "@/content";

export function Skills({ c }: { c: Content }) {
  return (
    <section id={sectionIds[c.lang].skills} aria-labelledby="skills-title" className="bg-muted/60 py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="skills-title" eyebrow={c.skills.eyebrow} title={c.skills.title} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.skills.groups.map((g) => (
            <div key={g.title} className="reveal rounded-3xl border bg-card p-6 shadow-soft">
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
  );
}
