import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

function AudiometaPythonPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("audiometa-python")} />
  );
}

export default AudiometaPythonPage;
