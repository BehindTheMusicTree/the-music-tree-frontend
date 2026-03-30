import Link from "next/link";
import Image from "next/image";
import { IconWebsite } from "@/components/icons/SocialIcons";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { StatusBadge } from "@/components/StatusBadge";

const GITHUB = "https://github.com/BehindTheMusicTree/audiometa-frontend";
const LIVE = "https://audiometa-frontend.vercel.app";

const features = [
  "Read and edit audio metadata (ID3, Vorbis, RIFF) in the browser",
  "Next.js web UI complementing the AudioMeta Python library",
  "Documentation experience via published docs bundle",
];

function AudiometaWebappPage() {
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
      <div className="mb-4 flex items-center gap-3">
        <Image
          src="/project-icons/audiometa.svg"
          alt="AudioMeta Webapp icon"
          width={36}
          height={36}
          className="h-9 w-9 rounded-sm"
        />
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          AudioMeta Webapp
        </h1>
      </div>
      <p className="mb-8 leading-relaxed text-zinc-600 dark:text-zinc-400">
        Browser-based interface for exploring and editing audio file metadata.
        Pairs with{" "}
        <Link
          href="/projects/audiometa"
          className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
        >
          AudioMeta Python
        </Link>{" "}
        for the same formats and use cases, without leaving the web.
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
          Metadata engine and PyPI package:{" "}
          <Link
            href="/projects/audiometa"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            AudioMeta Python
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="links-heading">
        <h2 id="links-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Links
        </h2>
        <ul className="flex flex-wrap gap-4">
          <li>
            <ProductExternalLink
              href={GITHUB}
              kind="github"
              variant="inline"
              presentation="icon"
            />
          </li>
          <li>
            <a
              href={LIVE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
            >
              <IconWebsite className="h-4 w-4" />
              <span>Live app</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AudiometaWebappPage;
