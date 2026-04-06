import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export function generateMetadata() {
  return projectDetailMetadata("hear-the-music-tree");
}

function HearTheMusicTreePage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("hear-the-music-tree")} />
  );
}

export default HearTheMusicTreePage;
