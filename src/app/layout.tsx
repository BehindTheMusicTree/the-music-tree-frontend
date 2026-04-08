import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { getServerI18n } from "@/i18n/server";
import { getSiteOrigin } from "@/lib/site-origin";
import "./globals.css";

const siteDescription =
  "An ecosystem of open-source projects for music discovery, genre reference, and audio metadata. Explore AudioMeta Python, AudioMeta Webapp, GrowTheMusicTree, TheMusicTreeAPI, and HearTheMusicTree.";

const defaultTitle = "TheMusicTree | BehindTheMusicTree Ecosystem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    locale: "en_US",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { language: serverLanguage, messages } = await getServerI18n();
  return (
    <html lang={serverLanguage}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <LanguageProvider serverLanguage={serverLanguage}>
          <SiteJsonLd />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:bg-zinc-50 dark:focus:text-zinc-900 dark:focus:ring-zinc-600"
          >
            {messages.layout.skipToContent}
          </a>
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Analytics />
        <AnalyticsTracker />
        <SpeedInsights />
      </body>
    </html>
  );
}
