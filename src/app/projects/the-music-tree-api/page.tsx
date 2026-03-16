import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

const GITHUB = "https://github.com/BehindTheMusicTree/the-music-tree-api";

const features = [
  "RESTful API for genre hierarchy and metadata",
  "Intelligent genre detection and classification",
  "Personalized user profiling",
  "Data-driven music recommendations",
  "Built with Django REST Framework and PostgreSQL",
];

function TheMusicTreeApiPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/projects"
        className="mb-6 inline-block text-sm font-medium text-zinc-600 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← All projects
      </Link>
      <div className="mb-2">
        <StatusBadge status="wip" />
      </div>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        TheMusicTreeAPI
      </h1>
      <p className="mb-8 leading-relaxed text-zinc-600 dark:text-zinc-400">
        The RESTful API companion to GrowTheMusicTree, providing developers
        and researchers access to genre hierarchy, metadata, and intelligent
        genre detection. Built with Django REST Framework and PostgreSQL.
      </p>

      <section className="mb-8" aria-labelledby="features-heading">
        <h2 id="features-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Key features
        </h2>
        <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8" aria-labelledby="related-heading">
        <h2 id="related-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Related projects
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Used by{" "}
          <Link
            href="/projects/grow-the-music-tree"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            GrowTheMusicTree
          </Link>{" "}
          for API access to the genre hierarchy and metadata.
        </p>
      </section>

      <section aria-labelledby="links-heading">
        <h2 id="links-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Links
        </h2>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}

export default TheMusicTreeApiPage;
