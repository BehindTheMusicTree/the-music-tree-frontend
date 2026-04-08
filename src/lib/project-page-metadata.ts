import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getProjectBySlug } from "@/data/projects";
import type { ProjectSlug } from "@/data/projects";
import { absoluteUrlForLocale } from "@/lib/language-alternates";
import { pathnameForHref } from "@/lib/i18n-path";
import { routing } from "@/i18n/routing";

export async function projectDetailMetadata(slug: ProjectSlug): Promise<Metadata> {
  const p = getProjectBySlug(slug);
  const path = `/projects/${slug}`;
  const locale = await getLocale();
  const canonicalPath = pathnameForHref(path, locale);
  return {
    title: p.name,
    description: p.summary,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: absoluteUrlForLocale("en", path),
        fr: absoluteUrlForLocale("fr", path),
        "x-default": absoluteUrlForLocale(routing.defaultLocale, path),
      },
    },
    openGraph: {
      title: p.name,
      description: p.summary,
      url: absoluteUrlForLocale(locale, path),
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: p.name,
      description: p.summary,
    },
  };
}
