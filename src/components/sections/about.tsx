import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { sectionIds, type Content } from "@/content";

export function About({ c }: { c: Content }) {
  return (
    <section id={sectionIds[c.lang].about} aria-labelledby="about-title" className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
        {/* TODO(Valentim): trocar as iniciais por uma foto profissional (ex.: public/foto.webp). */}
        <div
          className="reveal grid size-36 place-items-center rounded-3xl bg-gradient-to-br from-primary to-highlight font-heading text-5xl font-extrabold text-primary-foreground shadow-lift sm:size-40"
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
  );
}
