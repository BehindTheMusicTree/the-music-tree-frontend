import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import type { ProjectSlug } from "@/data/projects";

export function projectDetailMetadata(slug: ProjectSlug): Metadata {
  const p = getProjectBySlug(slug);
  const path = `/projects/${slug}`;
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: path },
    openGraph: {
      title: p.name,
      description: p.summary,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: p.name,
      description: p.summary,
    },
  };
}
