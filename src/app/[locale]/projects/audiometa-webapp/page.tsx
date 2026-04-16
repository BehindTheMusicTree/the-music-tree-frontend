import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";
import { getServerI18n } from "@/i18n/server";
import { projectDetailMetadata } from "@/lib/project-page-metadata";

export async function generateMetadata() {
  return projectDetailMetadata("audiometa-webapp");
}

export default async function AudiometaWebappPage() {
  const { messages } = await getServerI18n();
  const project = getProjectBySlug("audiometa-webapp");

  return (
    <ProjectDetailTemplate
      project={{
        ...project,
        heroEmbed: project.heroEmbed
          ? {
              ...project.heroEmbed,
              title: messages.project.audiometaWebappHero.title,
              caption: messages.project.audiometaWebappHero.caption,
            }
          : undefined,
      }}
    />
  );
}
