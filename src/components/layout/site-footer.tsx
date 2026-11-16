import { Container } from "@/components/container";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import type { Content } from "@/content";

export function SiteFooter({ c }: { c: Content }) {
  return (
    <footer className="bg-footer py-10 text-footer-foreground">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="space-y-1 text-sm">
          <p className="font-heading text-base font-bold">{c.person.name}</p>
          <p className="opacity-80">
            {c.person.role} · {c.person.location}
          </p>
          <p className="opacity-70">
            © {new Date().getFullYear()} {c.person.name}. {c.ui.rights} {c.ui.builtWith}
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href={c.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href={c.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <GitHubIcon className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
