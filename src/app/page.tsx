import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { projectTeasers } from "@/data/projects";

function HomePage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
        <div className="mb-8 flex justify-center">
          <Image
            src="/project-icons/behind-the-music-tree.svg"
            alt="TheMusicTree logo"
            width={120}
            height={120}
            className="h-24 w-24 sm:h-32 sm:w-32"
            priority
          />
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
          community-reviewed reference that helps developers, listeners, and
          contributors navigate this complexity with confidence.
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
            Open collaboration across metadata, APIs, and discovery workflows.
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
          Ecosystem projects
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
          <li>
            Priorities discussed in the open on GitHub issues and discussions.
          </li>
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
            href="/projects"
            data-track-event="cta_click"
            data-track-label="trust_browse_projects"
            className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          >
            Browse projects
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
          <li>How are project priorities decided?</li>
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
          Join contributors improving data quality, tooling, and open access
          across the ecosystem.
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
