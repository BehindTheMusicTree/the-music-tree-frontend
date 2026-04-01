import { ProjectCard } from "@/components/ProjectCard";
import { projectTeasers } from "@/data/project-teasers";

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Projects
      </h1>
      <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
        An ecosystem of interconnected open-source projects for music
        discovery, genre reference, and audio metadata.
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
