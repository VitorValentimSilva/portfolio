import { cn } from "@/lib/utils";

type Props = { eyebrow: string; title: string; description?: string; id: string; className?: string };

export function SectionHeading({ eyebrow, title, description, id, className }: Props) {
  return (
    <div className={cn("flex max-w-2xl flex-col items-start gap-3", className)}>
      <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground uppercase">
        <span className="size-1.5 rounded-full bg-highlight" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl leading-tight font-bold sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-base text-pretty text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}
