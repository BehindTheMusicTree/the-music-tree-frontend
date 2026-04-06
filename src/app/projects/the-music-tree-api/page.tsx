import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export function generateMetadata() {
  return projectDetailMetadata("the-music-tree-api");
}

function TheMusicTreeApiPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("the-music-tree-api")} />
  );
}

export default TheMusicTreeApiPage;
