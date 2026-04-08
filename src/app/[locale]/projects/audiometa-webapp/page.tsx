import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export async function generateMetadata() {
  return projectDetailMetadata("audiometa-webapp");
}

export default async function AudiometaWebappPage() {
  return (
    <ProjectDetailTemplate project={getProjectBySlug("audiometa-webapp")} />
  );
}
