import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export function generateMetadata() {
  return projectDetailMetadata("grow-the-music-tree");
}

function GrowTheMusicTreePage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("grow-the-music-tree")} />
  );
}

export default GrowTheMusicTreePage;
