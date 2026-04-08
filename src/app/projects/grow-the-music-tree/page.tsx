import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export async function generateMetadata() {
  return projectDetailMetadata("grow-the-music-tree");
}

export default async function GrowTheMusicTreePage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("grow-the-music-tree")} />
  );
}
