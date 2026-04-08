import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export async function generateMetadata() {
  return projectDetailMetadata("the-music-tree-api");
}

export default async function TheMusicTreeApiPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("the-music-tree-api")} />
  );
}
