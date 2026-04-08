"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { HeaderTheMusicTreeBrand } from "@/components/HeaderTheMusicTreeBrand";
import { useI18n } from "@/components/LanguageProvider";
import { withLocalePrefix } from "@/i18n/routing";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/engagement", label: "Engagement" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

const navLinkClassName =
  "text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50";

const contributeClassName =
  "inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, messages, withLocalePath } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const menuId = useId();
  const switchLanguage = (nextLanguage: "en" | "fr") => {
    setLanguage(nextLanguage);
    router.replace(withLocalePrefix(pathname, nextLanguage));
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const closeIfWide = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeIfWide);
    return () => mq.removeEventListener("change", closeIfWide);
  }, []);

  return (
    <header className="relative z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5"
        aria-label="Main navigation"
      >
        <HeaderTheMusicTreeBrand />
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 sm:hidden dark:border-zinc-700 dark:text-zinc-200"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <ul className="hidden flex-wrap items-center gap-6 text-base font-medium sm:flex">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={withLocalePath(href)} className={navLinkClassName}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <div
                className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                role="group"
                aria-label={messages.header.languageLabel}
              >
                <button
                  type="button"
                  onClick={() => switchLanguage("en")}
                  aria-pressed={language === "en"}
                  className={`rounded px-2 py-1 transition-colors ${
                    language === "en"
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  EN
                </button>
                <span aria-hidden>|</span>
                <button
                  type="button"
                  onClick={() => switchLanguage("fr")}
                  aria-pressed={language === "fr"}
                  className={`rounded px-2 py-1 transition-colors ${
                    language === "fr"
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  FR
                </button>
              </div>
            </li>
            <li>
              <Link
                href={withLocalePath("/contribute")}
                data-track-event="cta_click"
                data-track-label="header_contribute"
                className={contributeClassName}
              >
                {messages.header.contribute}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id={menuId}
        className={
          menuOpen
            ? "border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:hidden"
            : "hidden"
        }
      >
        <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4 text-base font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={withLocalePath(href)}
                className={`block rounded-md py-2.5 ${navLinkClassName}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-1">
            <div
              className="mb-3 inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
              role="group"
              aria-label={messages.header.languageLabel}
            >
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                aria-pressed={language === "en"}
                className={`rounded px-2 py-1 transition-colors ${
                  language === "en"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                EN
              </button>
              <span aria-hidden>|</span>
              <button
                type="button"
                onClick={() => switchLanguage("fr")}
                aria-pressed={language === "fr"}
                className={`rounded px-2 py-1 transition-colors ${
                  language === "fr"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                FR
              </button>
            </div>
            <Link
              href={withLocalePath("/contribute")}
              data-track-event="cta_click"
              data-track-label="header_contribute"
              className={`${contributeClassName} flex w-full justify-center`}
              onClick={() => setMenuOpen(false)}
            >
              {messages.header.contribute}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
