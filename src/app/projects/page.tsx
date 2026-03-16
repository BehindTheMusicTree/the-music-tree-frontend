import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    name: "AudioMeta Python",
    description:
      "Unified Python library for reading and writing audio metadata (ID3v1, ID3v2, Vorbis, RIFF). The foundational library that powers the rest of our ecosystem.",
    href: "/projects/audiometa",
    status: "active" as const,
  },
  {
    name: "GrowTheMusicTree",
    description:
      "Interactive map of global music genres. Community-driven genre tree, personalized music journeys, and intelligent genre detection. API access via TheMusicTreeAPI.",
    href: "/projects/grow-the-music-tree",
    status: "wip" as const,
  },
  {
    name: "TheMusicTreeAPI",
    description:
      "RESTful API for genre hierarchy and metadata, intelligent genre detection and classification, personalized user profiling, and data-driven recommendations. Built with Django REST Framework and PostgreSQL.",
    href: "/projects/the-music-tree-api",
    status: "wip" as const,
  },
  {
    name: "HearTheMusicTree",
    description:
      "Cloud-based audio file manager for collectors, DJs, and music lovers. Smart playlists, universal format and tag support, secure cloud storage, cross-platform sync and export. Powered by GrowTheMusicTree and AudioMeta Python.",
    href: "/projects/hear-the-music-tree",
    status: "wip" as const,
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Projects
      </h1>
      <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
        An ecosystem of interconnected open-source projects for music
        discovery, genre reference, and audio metadata.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
