"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { messages, type Language } from "@/i18n/messages";
import {
  getLocaleFromPathname,
  LOCALE_COOKIE_NAME,
  withLocalePrefix,
} from "@/i18n/routing";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  messages: (typeof messages)[Language];
  withLocalePath: (pathname: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "the-music-tree-language";

function localeFromDocumentCookie(): Language | null {
  if (typeof document === "undefined") return null;
  const prefix = `${LOCALE_COOKIE_NAME}=`;
  for (const part of document.cookie.split(";")) {
    const t = part.trim();
    if (t.startsWith(prefix)) {
      const raw = t.slice(prefix.length);
      let v: string;
      try {
        v = decodeURIComponent(raw);
      } catch {
        v = raw;
      }
      if (v === "en" || v === "fr") return v;
    }
  }
  return null;
}

/**
 * Middleware rewrites `/fr/*` to app routes, so `usePathname()` can be the internal path
 * without a locale segment while the address bar still shows `/fr/...`. Prefer
 * `window.location.pathname`, then the middleware locale cookie, then preference.
 */
function resolveActiveLanguage(
  routerPathname: string,
  preference: Language,
  serverLanguage: Language,
): Language {
  if (typeof window !== "undefined") {
    const fromBar = getLocaleFromPathname(window.location.pathname);
    if (fromBar) return fromBar;
    const fromCookie = localeFromDocumentCookie();
    if (fromCookie) return fromCookie;
    return preference;
  }
  return getLocaleFromPathname(routerPathname) ?? serverLanguage;
}

export function LanguageProvider({
  children,
  serverLanguage,
}: Readonly<{ children: ReactNode; serverLanguage: Language }>) {
  const routerPathname = usePathname();
  const [preference, setPreference] = useState<Language>(serverLanguage);
  const language = resolveActiveLanguage(routerPathname, preference, serverLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setPreference,
      messages: messages[language],
      withLocalePath: (targetPathname: string) =>
        withLocalePrefix(targetPathname, language),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function useI18n() {
  return useLanguage();
}
