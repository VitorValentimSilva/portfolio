import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { sectionIds, type Content } from "@/content";

export function Process({ c }: { c: Content }) {
  return (
    <section id={sectionIds[c.lang].process} aria-labelledby="process-title" className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="process-title" {...c.process} />
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.process.steps.map((s, i) => (
            <li key={s.title} className="reveal flex flex-col gap-3 rounded-3xl border bg-card p-6 shadow-soft">
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
  );
}
