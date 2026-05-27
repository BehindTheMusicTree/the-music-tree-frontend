import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export async function generateMetadata() {
  return projectDetailMetadata("the-music-deck");
}

export default async function TheMusicDeckPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("the-music-deck")} />
  );
}
