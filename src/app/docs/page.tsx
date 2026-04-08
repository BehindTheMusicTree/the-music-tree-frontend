import type { Metadata } from "next";
import Link from "next/link";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { GITHUB_ORG_WELCOME_GUIDE_URL } from "@/constants/github-org";
import { getServerI18n } from "@/i18n/server";

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

export default async function DocsPage() {
  const { language, withLocalePath } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          title: "Docs",
          intro:
            "Ce hub de documentation reflete une approche associative open source : gouvernance partagee, collaboration transparente et stewardship collectif de la connaissance musicale.",
          readWelcome: "Lire le guide de bienvenue sur GitHub",
          exploreSection: "Explorer cette section",
        }
      : {
          title: "Docs",
          intro:
            "This documentation hub reflects an open-source association approach: shared governance, transparent collaboration, and collective stewardship of music knowledge.",
          readWelcome: "Read welcome guide on GitHub",
          exploreSection: "Explore this section",
        };

  const docsSections = [
    {
      title: language === "fr" ? "Guide de bienvenue de l'association" : "Association Welcome Guide",
      description:
        language === "fr"
          ? "Mission, vue d'ensemble de l'ecosysteme, valeurs et participation — maintenus une seule fois sur le profil GitHub de l'organisation, sans duplication ici."
          : "Mission, ecosystem overview, values, and how to get involved—maintained once on our GitHub organization profile, not duplicated here.",
      link: {
        kind: "external" as const,
        href: GITHUB_ORG_WELCOME_GUIDE_URL,
        label: copy.readWelcome,
      },
    },
    {
      title: language === "fr" ? "Contribuer ensemble" : "Contributing Together",
      description:
        language === "fr"
          ? "Suivez les workflows de contribution partages, les pratiques de revue et les normes de collaboration respectueuse."
          : "Follow shared contribution workflows, review practices, and respectful collaboration norms.",
      link: {
        kind: "internal" as const,
        href: withLocalePath("/contribute"),
        label: copy.exploreSection,
      },
    },
    {
      title: language === "fr" ? "Projets communautaires" : "Community Projects",
      description:
        language === "fr"
          ? "Explorez la documentation des projets sur les metadonnees, API et applications maintenus par la communaute."
          : "Explore project documentation for metadata, APIs, and apps maintained by the community.",
      link: {
        kind: "internal" as const,
        href: withLocalePath("/projects"),
        label: copy.exploreSection,
      },
    },
  ] as const;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.intro}
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
