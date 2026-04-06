import type { MetadataRoute } from "next";
import { PROJECT_SLUGS } from "@/data/projects";
import { getSiteOrigin } from "@/lib/site-origin";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  for (const slug of PROJECT_SLUGS) {
    entries.push({
      url: `${base}/projects/${slug}`,
      lastModified: new Date(),
    });
  }
  return entries;
}
