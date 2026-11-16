import type { MetadataRoute } from "next";

import { contents, homePath, projectPath, siteUrl } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const { pt, en } = contents;
  const entry = (ptPath: string, enPath: string, priority: number) =>
    [ptPath, enPath].map((p) => ({
      url: siteUrl + p,
      priority,
      alternates: { languages: { "pt-BR": siteUrl + ptPath, en: siteUrl + enPath } },
    }));
  return [
    ...entry(homePath(pt), homePath(en), 1),
    ...pt.projects.items.flatMap((p) => entry(projectPath(pt, p.slug), projectPath(en, p.slug), 0.8)),
  ];
}
