import { describe, expect, it } from "vitest";
import en from "./en.json";
import fr from "./fr.json";
import { getProjectBySlug, PROJECT_SLUGS } from "@/data/projects";
import { routing } from "@/i18n/routing";

const localeMessages: Record<string, typeof en> = { en, fr };

const nonDefaultLocales = routing.locales.filter(
  (locale) => locale !== routing.defaultLocale,
);

describe("project.perProject translation completeness", () => {
  for (const locale of nonDefaultLocales) {
    describe(`locale "${locale}"`, () => {
      const perProject = localeMessages[locale].project.perProject as Record<
        string,
        Partial<(typeof fr)["project"]["perProject"][string]>
      >;

      for (const slug of PROJECT_SLUGS) {
        it(`has a complete override for "${slug}"`, () => {
          const override = perProject[slug];
          expect(override, `missing perProject["${slug}"] for locale "${locale}"`).toBeDefined();

          expect(override!.overview?.length).toBeGreaterThan(0);
          expect(override!.features?.length).toBeGreaterThan(0);
          expect(override!.related?.length).toBeGreaterThan(0);
          expect(override!.audience).toBeTruthy();

          const project = getProjectBySlug(slug);

          if (project.overviewExtended?.length) {
            expect(override!.overviewExtended?.length).toBeGreaterThan(0);
          }

          if (project.documentationLinks?.length) {
            expect(override!.documentationLinks?.length).toBe(
              project.documentationLinks.length,
            );
          }
        });
      }
    });
  }
});
