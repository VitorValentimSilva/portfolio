import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { whatsappUrl, type Content } from "@/content";

/** Botões de contato; WhatsApp e e-mail só aparecem quando preenchidos em `content/shared.ts`. */
export function ContactButtons({ c, onPrimary = false }: { c: Content; onPrimary?: boolean }) {
  const wa = whatsappUrl(c);
  // Sobre o bloco índigo, os botões secundários usam a cor do texto do primário (tokens, nos dois temas).
  const outline = onPrimary
    ? "border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground dark:border-primary-foreground/40 dark:bg-primary-foreground/10 dark:hover:bg-primary-foreground/20"
    : undefined;
  return (
    <div className="flex flex-wrap gap-3">
      {wa && (
        <Button asChild size="xl" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            {c.ui.talkWhatsapp}
          </a>
        </Button>
      )}
      {c.contact.email && (
        <Button asChild size="xl" variant="outline" className={outline}>
          <a href={`mailto:${c.contact.email}`}>
            <Mail aria-hidden="true" />
            {c.ui.sendEmail}
          </a>
        </Button>
      )}
      <Button asChild size="xl" variant="outline" className={outline}>
        <a href={c.contact.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          LinkedIn
        </a>
      </Button>
      <Button asChild size="xl" variant="outline" className={outline}>
        <a href={c.contact.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
          GitHub
        </a>
      </Button>
    </div>
  );
}
