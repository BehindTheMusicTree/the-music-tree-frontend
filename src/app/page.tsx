import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

const projectTeasers = [
  {
    name: "AudioMeta Python",
    description:
      "Unified Python library for reading and writing audio metadata (ID3, Vorbis, RIFF). Used on the server by the AudioMeta web app.",
    href: "/projects/audiometa",
    status: "active" as const,
  },
  {
    name: "AudioMeta Webapp",
    description:
      "Browser UI to read and edit audio metadata. Built with Next.js; pairs with AudioMeta Python.",
    href: "/projects/audiometa-webapp",
    status: "active" as const,
  },
  {
    name: "GrowTheMusicTree",
    description:
      "Interactive map of global music genres. Community-driven genre tree, personalized journeys, and intelligent genre detection.",
    href: "/projects/grow-the-music-tree",
    status: "wip" as const,
  },
  {
    name: "TheMusicTreeAPI",
    description:
      "RESTful API for genre hierarchy, metadata, intelligent genre detection, and data-driven recommendations.",
    href: "/projects/the-music-tree-api",
    status: "wip" as const,
  },
  {
    name: "HearTheMusicTree",
    description:
      "Cloud-based audio file manager for collectors and DJs. Smart playlists, universal format support, secure storage.",
    href: "/projects/hear-the-music-tree",
    status: "wip" as const,
  },
];

function HomePage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          TheMusicTree
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A global, authoritative reference for music discovery, exploration,
          and understanding. Open-source tools that reflect the full diversity
          of global music culture.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Discover the ecosystem
        </Link>
      </section>

      <section
        className="mx-auto max-w-6xl px-6 pb-20"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          className="mb-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Projects
        </h2>
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,18rem),1fr))]">
          {projectTeasers.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/contribute"
            className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          >
            Get involved
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
