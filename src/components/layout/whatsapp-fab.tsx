import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { whatsappUrl, type Content } from "@/content";

/** Botão flutuante de WhatsApp (respeita a área segura do iPhone). Some se não houver número. */
export function WhatsAppFab({ c }: { c: Content }) {
  const href = whatsappUrl(c);
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.ui.whatsappFab}
      title={c.ui.whatsappFab}
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid size-14 animate-in place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform duration-500 zoom-in-75 fade-in hover:scale-105 focus-visible:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
