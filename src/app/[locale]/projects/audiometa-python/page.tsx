import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export async function generateMetadata() {
  return projectDetailMetadata("audiometa-python");
}

export default async function AudiometaPythonPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("audiometa-python")} />
  );
}
