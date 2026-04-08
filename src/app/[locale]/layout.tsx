import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { routing } from "@/i18n/routing";
import { getSiteOrigin } from "@/lib/site-origin";

const siteDescription =
  "An ecosystem of open-source projects for music discovery, genre reference, and audio metadata. Explore AudioMeta Python, AudioMeta Webapp, GrowTheMusicTree, TheMusicTreeAPI, and HearTheMusicTree.";

const defaultTitle = "TheMusicTree | BehindTheMusicTree Ecosystem";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(getSiteOrigin()),
    title: {
      default: defaultTitle,
      template: "%s | TheMusicTree",
    },
    description: siteDescription,
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: "/",
      siteName: "TheMusicTree",
      title: defaultTitle,
      description: siteDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: siteDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "layout" });

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLangSync />
      <SiteJsonLd />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:bg-zinc-50 dark:focus:text-zinc-900 dark:focus:ring-zinc-600"
      >
        {t("skipToContent")}
      </a>
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <Analytics />
      <AnalyticsTracker />
      <SpeedInsights />
    </NextIntlClientProvider>
  );
}
