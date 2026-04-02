import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

function HearTheMusicTreePage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("hear-the-music-tree")} />
  );
}

export default HearTheMusicTreePage;
