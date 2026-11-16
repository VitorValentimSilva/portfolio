import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageFrame } from "@/components/layout/page-frame";
import { ProjectDetail } from "@/components/project-detail";
import { projectPath } from "@/content";
import { en } from "@/content/en";
import { pt } from "@/content/pt";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pt.projects.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = pt.projects.items.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata(pt, {
    title: project.name,
    description: project.tagline,
    paths: { pt: projectPath(pt, slug), en: projectPath(en, slug) },
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = pt.projects.items.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <PageFrame c={pt} altHref={projectPath(en, slug)}>
      <ProjectDetail c={pt} project={project} />
    </PageFrame>
  );
}
