import { defineRouting } from "next-intl/routing";

/** Same pattern as audiometa-frontend: default locale unprefixed (`localePrefix: as-needed`). */
export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
