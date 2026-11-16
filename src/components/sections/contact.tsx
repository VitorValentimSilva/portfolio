import { ContactButtons } from "@/components/common/contact-buttons";
import { Container } from "@/components/common/container";
import { sectionIds, type Content } from "@/content";

export function Contact({ c }: { c: Content }) {
  return (
    <section id={sectionIds[c.lang].contact} aria-labelledby="contact-title" className="pb-24 sm:pb-28">
      <Container>
        <div className="reveal flex flex-col gap-6 rounded-3xl bg-primary p-6 text-primary-foreground shadow-lift sm:p-12">
          <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">
            {c.cta.title}
          </h2>
          <p className="max-w-2xl text-lg opacity-90">{c.cta.description}</p>
          <ContactButtons c={c} onPrimary />
        </div>
      </Container>
    </section>
  );
}
