"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  links: { href: string; label: string }[];
  contact: { href: string; label: string };
  labels: { open: string; close: string; title: string; description: string };
};

/** Menu do celular (painel lateral). Recebe tudo pronto do header (Server Component). */
export function MobileMenu({ links, contact, labels }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="rounded-full md:hidden" aria-label={labels.open}>
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" closeLabel={labels.close} className="w-[85vw] max-w-sm gap-0 p-0">
        <SheetHeader className="border-b p-5">
          <SheetTitle className="text-left font-heading">{labels.title}</SheetTitle>
          <SheetDescription className="text-left">{labels.description}</SheetDescription>
        </SheetHeader>
        <nav aria-label={labels.title} className="p-3">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <SheetClose asChild>
                  <Link
                    href={l.href}
                    className="flex min-h-12 items-center rounded-xl px-4 text-base font-medium hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto border-t p-5">
          <SheetClose asChild>
            <Button asChild size="xl" className="w-full">
              <Link href={contact.href}>{contact.label}</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
