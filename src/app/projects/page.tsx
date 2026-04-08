import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projectTeasers } from "@/data/projects";
import { pageMetadata } from "@/i18n/page-metadata";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/projects");
}

async function ProjectsPage() {
  const { language } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          title: "Projets",
          intro:
            "Un ecosysteme de projets open source interconnectes pour la decouverte musicale, la reference de genres et les metadonnees audio.",
        }
      : {
          title: "Projects",
          intro:
            "An ecosystem of interconnected open-source projects for music discovery, genre reference, and audio metadata.",
        };
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>
      <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
        {copy.intro}
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-6">
        {projectTeasers.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
