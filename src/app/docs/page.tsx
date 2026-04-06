import type { Metadata } from "next";
import Link from "next/link";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { GITHUB_ORG_WELCOME_GUIDE_URL } from "@/constants/github-org";

const docsSections = [
  {
    title: "Association Welcome Guide",
    description:
      "Mission, ecosystem overview, values, and how to get involved—maintained once on our GitHub organization profile, not duplicated here.",
    link: {
      kind: "external" as const,
      href: GITHUB_ORG_WELCOME_GUIDE_URL,
      label: "Read welcome guide on GitHub",
    },
  },
  {
    title: "Contributing Together",
    description:
      "Follow shared contribution workflows, review practices, and respectful collaboration norms.",
    link: {
      kind: "internal" as const,
      href: "/contribute",
      label: "Explore this section",
    },
  },
  {
    title: "Community Projects",
    description:
      "Explore project documentation for metadata, APIs, and apps maintained by the community.",
    link: {
      kind: "internal" as const,
      href: "/projects",
      label: "Explore this section",
    },
  },
] as const;

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Documentation hub for TheMusicTree: welcome guide on GitHub, contributing workflows, and links to project docs across the ecosystem.",
  alternates: { canonical: "/docs" },
  openGraph: {
    title: "Docs",
    description:
      "Find the association welcome guide, contribution paths, and project documentation in one place.",
    url: "/docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docs",
    description:
      "Find the association welcome guide, contribution paths, and project documentation in one place.",
  },
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Docs
      </h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        This documentation hub reflects an open-source association approach:
        shared governance, transparent collaboration, and collective stewardship
        of music knowledge.
      </p>

      <div className="space-y-4">
        {docsSections.map((section) => (
          <section
            key={section.title}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {section.title}
            </h2>
            <p className="mb-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {section.description}
            </p>
            {section.link.kind === "external" ? (
              <ProductExternalLink
                href={section.link.href}
                kind="github"
                variant="prose"
                presentation="inline"
              >
                {section.link.label}
              </ProductExternalLink>
            ) : (
              <Link
                href={section.link.href}
                className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
              >
                {section.link.label}
              </Link>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
