import { notFound } from "next/navigation";
import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug, PROJECT_SLUGS } from "@/data/projects";
import type { ProjectDefinition, ProjectSlug } from "@/data/projects";
import { getServerI18n } from "@/i18n/server";
import {
  projectWithRepoUrlOverride,
  resolveAudioFingerprinterGithubRepoUrl,
} from "@/lib/project-overrides";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

function isProjectSlug(slug: string): slug is ProjectSlug {
  return (PROJECT_SLUGS as readonly string[]).includes(slug);
}

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isProjectSlug(slug)) {
    notFound();
  }
  return projectDetailMetadata(slug);
}

async function resolveProject(slug: ProjectSlug): Promise<ProjectDefinition> {
  const project = getProjectBySlug(slug);

  if (slug === "audio-fingerprinter") {
    return projectWithRepoUrlOverride(
      project,
      resolveAudioFingerprinterGithubRepoUrl(),
    );
  }

  if (slug === "audiometa-webapp") {
    const { messages } = await getServerI18n();
    return {
      ...project,
      heroEmbed: project.heroEmbed
        ? {
            ...project.heroEmbed,
            title: messages.project.audiometaWebappHero.title,
            caption: messages.project.audiometaWebappHero.caption,
          }
        : undefined,
    };
  }

  return project;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isProjectSlug(slug)) {
    notFound();
  }

  const project = await resolveProject(slug);
  return <ProjectDetailTemplate project={project} />;
}
