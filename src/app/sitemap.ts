import type { MetadataRoute } from "next";
import { PROJECT_SLUGS } from "@/data/projects";
import { getSiteOrigin } from "@/lib/site-origin";
import { LOCALES, withLocalePrefix } from "@/i18n/routing";

/** Public HTML routes (no trailing slash on paths; home is ""). */
const STATIC_PATHS = [
  "",
  "/about",
  "/team",
  "/newsletter",
  "/newsletter/confirmed",
  "/engagement",
  "/projects",
  "/docs",
  "/faq",
  "/contact",
  "/contribute",
] as const;

function sitemapEntry(pathSuffix: string): MetadataRoute.Sitemap[number] {
  const base = getSiteOrigin();
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc] = `${base}${withLocalePrefix(pathSuffix || "/", loc)}`;
  }
  languages["x-default"] = `${base}${withLocalePrefix(pathSuffix || "/", "en")}`;
  const displayPath = withLocalePrefix(pathSuffix || "/", "en");
  return {
    url: `${base}${displayPath}`,
    lastModified: new Date(),
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) =>
    sitemapEntry(path),
  );
  for (const slug of PROJECT_SLUGS) {
    entries.push(sitemapEntry(`/projects/${slug}`));
  }
  return entries;
}
