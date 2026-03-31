import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";

const projectTeasers = [
  {
    name: "AudioMeta Python",
    description:
      "Unified Python library for reading and writing audio metadata (ID3, Vorbis, RIFF). Used on the server by the AudioMeta web app.",
    href: "/projects/audiometa",
    status: "active" as const,
    iconSrc: "/project-icons/audiometa.svg",
    iconAlt: "AudioMeta app icon",
  },
  {
    name: "AudioMeta Webapp",
    description:
      "Browser UI to read and edit audio metadata. Built with Next.js; pairs with AudioMeta Python.",
    href: "/projects/audiometa-webapp",
    status: "active" as const,
    iconSrc: "/project-icons/audiometa.svg",
    iconAlt: "AudioMeta Webapp icon",
  },
  {
    name: "GrowTheMusicTree",
    description:
      "Interactive map of global music genres. Community-driven genre tree, personalized journeys, and intelligent genre detection.",
    href: "/projects/grow-the-music-tree",
    status: "wip" as const,
    iconSrc: "/project-icons/grow-the-music-tree.svg",
    iconAlt: "GrowTheMusicTree app icon",
  },
  {
    name: "TheMusicTreeAPI",
    description:
      "RESTful API for genre hierarchy, metadata, intelligent genre detection, and data-driven recommendations.",
    href: "/projects/the-music-tree-api",
    status: "wip" as const,
    iconSrc: "/project-icons/behind-the-music-tree.svg",
    iconAlt: "TheMusicTreeAPI app icon",
  },
  {
    name: "HearTheMusicTree",
    description:
      "Cloud-based audio file manager for collectors and DJs. Smart playlists, universal format support, secure storage.",
    href: "/projects/hear-the-music-tree",
    status: "wip" as const,
    iconSrc: "/project-icons/hear-the-music-tree.svg",
    iconAlt: "HearTheMusicTree app icon",
  },
];

function HomePage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Image
            src="/project-icons/behind-the-music-tree.svg"
            alt="BehindTheMusicTree icon"
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            BehindTheMusicTree
          </span>
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Open-source ecosystem for understanding global music.
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          TheMusicTree helps communities map, preserve, and discover music
          genres through transparent, collaborative tools.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contribute"
            data-track-event="cta_click"
            data-track-label="hero_contribute"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Contribute
          </Link>
          <Link
            href="/projects"
            data-track-event="cta_click"
            data-track-label="hero_explore_projects"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-base font-medium text-zinc-800 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
          >
            Explore projects
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Why this matters
        </h2>
        <p className="max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          Music culture is rich, local, and constantly evolving, but genre data
          is often fragmented and inconsistent. We are building an open,
          community-reviewed reference that helps educators, developers, and
          listeners navigate this complexity with confidence.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="how-heading">
        <h2 id="how-heading" className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          How it works
        </h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {[
            "Contributors improve data, code, and documentation.",
            "Maintainers review and merge high-quality updates.",
            "Apps and APIs turn shared data into discovery tools.",
          ].map((step) => (
            <li
              key={step}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-4">
          <Link
            href="/how-it-works"
            data-track-event="cta_click"
            data-track-label="how_it_works_details"
            className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
          >
            See the full workflow
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Key benefits
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {[
            "Structured genre knowledge for better learning and discovery.",
            "Open governance and transparent decision-making.",
            "Reusable APIs and tools across the ecosystem.",
          ].map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="proof-heading">
        <h2 id="proof-heading" className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Social proof
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <p className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            Multiple open-source projects sharing one music data mission.
          </p>
          <p className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            Community-first contribution model through public GitHub workflows.
          </p>
          <p className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            Open collaboration across metadata, APIs, and education use cases.
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-6 pb-16"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Feature highlights
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-6">
          {projectTeasers.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Open-source trust
        </h2>
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
          <li>Open repositories and transparent issue tracking on GitHub.</li>
          <li>Community contribution guidelines and review workflows.</li>
          <li>Public roadmap for priorities and milestones.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/contribute"
            data-track-event="cta_click"
            data-track-label="trust_get_involved"
            className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          >
            Get involved
          </Link>
          <Link
            href="/roadmap"
            data-track-event="cta_click"
            data-track-label="trust_view_roadmap"
            className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          >
            View roadmap
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="faq-preview-heading">
        <h2 id="faq-preview-heading" className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          FAQ preview
        </h2>
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
          <li>How can I contribute if I am not a developer?</li>
          <li>Which project should I start with first?</li>
          <li>How are roadmap priorities decided?</li>
        </ul>
        <p className="mt-4">
          <Link
            href="/faq"
            data-track-event="cta_click"
            data-track-label="faq_preview_read_all"
            className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
          >
            Read all FAQs
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Help shape the future of open music knowledge.
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Join contributors improving data quality, tooling, and educational
          access across the ecosystem.
        </p>
        <Link
          href="/contribute"
          data-track-event="cta_click"
          data-track-label="final_contribute"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Contribute
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
