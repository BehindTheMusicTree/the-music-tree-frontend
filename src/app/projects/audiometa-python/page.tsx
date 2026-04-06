import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export function generateMetadata() {
  return projectDetailMetadata("audiometa-python");
}

function AudiometaPythonPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("audiometa-python")} />
  );
}

export default AudiometaPythonPage;
