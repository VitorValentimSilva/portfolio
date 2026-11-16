import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageFrame } from "@/components/layout/page-frame";
import { ProjectDetail } from "@/components/project/project-detail";
import { projectPath } from "@/content";
import { pt } from "@/content/pt";
import { en } from "@/content/en";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return en.projects.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = en.projects.items.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata(en, {
    title: project.name,
    description: project.tagline,
    paths: { pt: projectPath(pt, slug), en: projectPath(en, slug) },
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = en.projects.items.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <PageFrame c={en} altHref={projectPath(pt, slug)}>
      <ProjectDetail c={en} project={project} />
    </PageFrame>
  );
}
