import Link from "next/link";
import Image from "next/image";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { StatusBadge } from "@/components/StatusBadge";

const GITHUB = "https://github.com/BehindTheMusicTree/hear-the-music-tree-api";

const features = [
  "Smart, adaptive playlists",
  "Universal format and tag support",
  "Secure cloud storage",
  "Cross-platform sync and export",
  "Genre intelligence from GrowTheMusicTree",
];

function HearTheMusicTreePage() {
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
      <div className="mb-4 flex items-center gap-3">
        <Image
          src="/project-icons/hear-the-music-tree.svg"
          alt="HearTheMusicTree app icon"
          width={36}
          height={36}
          className="h-9 w-9 rounded-sm"
        />
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          HearTheMusicTree
        </h1>
      </div>
      <p className="mb-8 leading-relaxed text-zinc-600 dark:text-zinc-400">
        A cloud-based audio file manager built for collectors, DJs, and music
        lovers. Powered by genre intelligence from GrowTheMusicTree.
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
          Built around{" "}
          <Link
            href="/projects/grow-the-music-tree"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            GrowTheMusicTree
          </Link>{" "}
          for genre intelligence. For browser-based tag editing, see the{" "}
          <Link
            href="/projects/audiometa-webapp"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            AudioMeta web app
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="links-heading">
        <h2 id="links-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Links
        </h2>
        <ProductExternalLink
          href={GITHUB}
          kind="github"
          variant="inline"
          presentation="icon"
        />
      </section>
    </div>
  );
}

export default HearTheMusicTreePage;
