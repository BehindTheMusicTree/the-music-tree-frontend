"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const hrefLangByLocale: Record<string, string> = {
  en: "en",
  fr: "fr",
};

type Props = {
  /** Called when the user selects a different locale (e.g. close mobile nav). */
  onNavigate?: () => void;
};

export function LanguageSwitcher({ onNavigate }: Props) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");

  return (
    <nav aria-label={t("label")} className="relative shrink-0 text-sm">
      <details className="relative">
        <summary
          className="btmt-hide-details-marker flex cursor-pointer list-none items-center gap-1 rounded-md border border-zinc-200 bg-white px-3 py-1.5 font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          aria-label={`${t("label")}: ${t(locale)}`}
        >
          <span>{t(locale)}</span>
          <span aria-hidden className="text-xs text-zinc-500 dark:text-zinc-400">
            ▾
          </span>
        </summary>
        <div className="absolute inset-e-0 z-50 mt-2 min-w-40 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-950">
          <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
            {routing.locales.map((loc) => (
              <li key={loc}>
                {loc === locale ? (
                  <span
                    className="block px-3 py-2 font-semibold text-zinc-900 dark:text-zinc-50"
                    aria-current="true"
                  >
                    {t(loc)}
                  </span>
                ) : (
                  <Link
                    href={pathname}
                    locale={loc}
                    hrefLang={hrefLangByLocale[loc] ?? loc}
                    data-track-event="language_switched"
                    data-track-label={`${locale}_to_${loc}`}
                    className="block px-3 py-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                    onClick={() => onNavigate?.()}
                  >
                    {t(loc)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </nav>
  );
}
