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

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const languageInPath = getLocaleFromPathname(pathname);
  const [preferredLanguage, setPreferredLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return savedLanguage === "fr" ? "fr" : "en";
  });
  const language = languageInPath ?? preferredLanguage;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setPreferredLanguage,
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
