import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

const GITHUB = "https://github.com/BehindTheMusicTree/audiometa";
const PYPI = "https://pypi.org/project/audiometa-python/";

const features = [
  "Reading and writing audio metadata across multiple formats",
  "ID3v1, ID3v2, Vorbis, and RIFF support",
  "Foundational library that powers the rest of the ecosystem",
];

function AudiometaPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/projects"
        className="mb-6 inline-block text-sm font-medium text-zinc-600 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← All projects
      </Link>
      <div className="mb-2">
        <StatusBadge status="active" />
      </div>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        AudioMeta Python
      </h1>
      <p className="mb-8 leading-relaxed text-zinc-600 dark:text-zinc-400">
        A powerful, unified Python library for reading and writing audio
        metadata across multiple formats (ID3v1, ID3v2, Vorbis, RIFF). This is
        the foundational library that powers the rest of our ecosystem.
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

      <section aria-labelledby="links-heading">
        <h2 id="links-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Links
        </h2>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={PYPI}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
            >
              PyPI
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AudiometaPage;
