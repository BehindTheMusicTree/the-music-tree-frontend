import { audiometaProject } from "./audiometa";
import { audiometaWebappProject } from "./audiometa-webapp";
import { growTheMusicTreeProject } from "./grow-the-music-tree";
import { hearTheMusicTreeProject } from "./hear-the-music-tree";
import { theMusicTreeApiProject } from "./the-music-tree-api";
import type { ProjectDefinition, ProjectSlug, ProjectTeaser } from "./types";
import { PROJECT_SLUGS } from "./types";

export type {
  DocumentationLink,
  OutboundLinkDef,
  ProjectBadge,
  ProjectCodeSnippet,
  ProjectDefinition,
  ProjectDemoDef,
  ProjectSlug,
  ProjectStatus,
  ProjectTeaser,
  RichEnvLinkTarget,
  RichSegment,
} from "./types";

export { PROJECT_SLUGS };

/** Listing and detail order; keep in sync with `PROJECT_SLUGS`. */
export const projects: ProjectDefinition[] = [
  audiometaProject,
  audiometaWebappProject,
  growTheMusicTreeProject,
  theMusicTreeApiProject,
  hearTheMusicTreeProject,
];

export function getProjectBySlug(slug: ProjectSlug): ProjectDefinition {
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    throw new Error(`Unknown project slug: ${slug}`);
  }
  return project;
}

export const projectTeasers: ProjectTeaser[] = projects.map((p) => ({
  name: p.name,
  description: p.summary,
  href: `/projects/${p.slug}`,
  status: p.status,
  iconSrc: p.iconSrc,
  iconAlt: p.iconAlt,
}));
