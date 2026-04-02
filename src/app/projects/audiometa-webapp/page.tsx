import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

function AudiometaWebappPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("audiometa-webapp")} />
  );
}

export default AudiometaWebappPage;
