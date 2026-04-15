import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import type { ProjectDefinition } from "@/data/projects";
import { audioFingerprinterProject } from "@/data/projects/audio-fingerprinter";
import { GH_AUDIO_FINGERPRINTER } from "@/data/projects/constants";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export async function generateMetadata() {
  return projectDetailMetadata("audio-fingerprinter");
}

function resolveGithubRepoUrl(): string {
  const raw = process.env.AUDIO_FINGERPRINTER_GITHUB_REPO_URL?.trim();
  return raw || GH_AUDIO_FINGERPRINTER;
}

function projectWithRepoUrlOverride(
  project: ProjectDefinition,
  githubRepoUrl: string,
): ProjectDefinition {
  return {
    ...project,
    outboundLinks: project.outboundLinks.map((link) =>
      link.source === "static" && link.kind === "github"
        ? { ...link, href: githubRepoUrl }
        : link,
    ),
    documentationLinks: project.documentationLinks?.map((item) =>
      item.href === GH_AUDIO_FINGERPRINTER
        ? { ...item, href: githubRepoUrl }
        : item,
    ),
    badges: project.badges?.map((badge) =>
      badge.href === GH_AUDIO_FINGERPRINTER
        ? { ...badge, href: githubRepoUrl }
        : badge,
    ),
  };
}

export default async function AudioFingerprinterPage() {
  const githubRepoUrl = resolveGithubRepoUrl();
  const project = projectWithRepoUrlOverride(
    audioFingerprinterProject,
    githubRepoUrl,
  );
  return (
    <ProjectDetailTemplate project={project} />
  );
}
