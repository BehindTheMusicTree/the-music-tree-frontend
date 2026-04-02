import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

function GrowTheMusicTreePage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("grow-the-music-tree")} />
  );
}

export default GrowTheMusicTreePage;
