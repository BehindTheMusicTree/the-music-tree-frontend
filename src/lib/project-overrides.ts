import type { ProjectDefinition } from "@/data/projects";
import {
  GH_AUDIO_FINGERPRINTER,
  githubStarsShieldFromRepoUrl,
} from "@/data/projects/constants";

export function resolveAudioFingerprinterGithubRepoUrl(): string {
  const raw = process.env.AUDIO_FINGERPRINTER_GITHUB_REPO_URL?.trim();
  return raw || GH_AUDIO_FINGERPRINTER;
}

export function projectWithRepoUrlOverride(
  project: ProjectDefinition,
  githubRepoUrl: string,
): ProjectDefinition {
  const starsImageUrl = githubStarsShieldFromRepoUrl(githubRepoUrl);
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
      badge.href === GH_AUDIO_FINGERPRINTER && starsImageUrl
        ? {
            ...badge,
            href: githubRepoUrl,
            src: starsImageUrl,
            alt: `GitHub stars for ${githubRepoUrl}`,
          }
        : badge,
    ),
  };
}
