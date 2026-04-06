import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export function generateMetadata() {
  return projectDetailMetadata("audiometa-webapp");
}

function AudiometaWebappPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("audiometa-webapp")} />
  );
}

export default AudiometaWebappPage;
