import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectCard } from "@/components/project/project-card";
import { sectionIds, type Content } from "@/content";

export function Projects({ c }: { c: Content }) {
  return (
    <section id={sectionIds[c.lang].projects} aria-labelledby="projects-title" className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="projects-title" {...c.projects} />
        <div className="grid grid-cols-1 gap-8">
          {c.projects.items.map((p) => (
            <ProjectCard key={p.slug} c={c} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
