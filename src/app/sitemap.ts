import type { MetadataRoute } from "next";
import { PROJECT_SLUGS } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { absoluteUrlForLocale } from "@/lib/language-alternates";

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
  const path = pathSuffix === "" ? "/" : pathSuffix;
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = absoluteUrlForLocale(loc, path);
  }
  languages["x-default"] = absoluteUrlForLocale(routing.defaultLocale, path);
  return {
    url: absoluteUrlForLocale(routing.defaultLocale, path),
    lastModified: new Date(),
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map((p) =>
    sitemapEntry(p),
  );
  for (const slug of PROJECT_SLUGS) {
    entries.push(sitemapEntry(`/projects/${slug}`));
  }
  return entries;
}
