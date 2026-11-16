"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import type { Content } from "@/content/types";

const order = ["light", "dark", "system"] as const;
type Mode = (typeof order)[number];
const icons = { light: Sun, dark: Moon, system: Monitor } satisfies Record<Mode, unknown>;
const noop = () => () => {};

/** Alterna claro → escuro → sistema. Só mostra o estado real depois de montar (evita divergência de hidratação). */
export function ThemeToggle({ labels }: { labels: Content["ui"]["theme"] }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const current: Mode = mounted && order.includes(theme as Mode) ? (theme as Mode) : "system";
  const Icon = icons[current];
  const next = order[(order.indexOf(current) + 1) % order.length];
  const label = labels.toggle.replace("{mode}", labels[current]);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      className="rounded-full"
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
    >
      <Icon aria-hidden="true" />
    </Button>
  );
}
