import type { Metadata } from "next";
import { resolveRequestLocale } from "@/i18n/request-locale";
import { getProjectBySlug } from "@/data/projects";
import type { ProjectSlug } from "@/data/projects";
import { getSiteOrigin } from "@/lib/site-origin";
import { withLocalePrefix } from "@/i18n/routing";

export async function projectDetailMetadata(slug: ProjectSlug): Promise<Metadata> {
  const p = getProjectBySlug(slug);
  const path = `/projects/${slug}`;
  const locale = await resolveRequestLocale();
  const origin = getSiteOrigin();
  const canonicalPath = withLocalePrefix(path, locale);
  const enUrl = `${origin}${withLocalePrefix(path, "en")}`;
  const frUrl = `${origin}${withLocalePrefix(path, "fr")}`;
  return {
    title: p.name,
    description: p.summary,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: enUrl,
        fr: frUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: p.name,
      description: p.summary,
      url: canonicalPath,
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: p.name,
      description: p.summary,
    },
  };
}
