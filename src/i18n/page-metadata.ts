import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { GITHUB_ORG_DISPLAY_NAME } from "@/constants/github-org";
import { routing } from "@/i18n/routing";
import { absoluteUrlForLocale } from "@/lib/language-alternates";
import { pathnameForHref } from "@/lib/i18n-path";
import { getSiteOrigin } from "@/lib/site-origin";
import en from "../messages/en.json";
import fr from "../messages/fr.json";

type MetaPair = { title: string; description: string };

const PAGES: Record<string, { en: MetaPair; fr: MetaPair }> = {
  "/": {
    en: {
      title: "TheMusicTree",
      description:
        "TheMusicTree is an open-source ecosystem for understanding global music: discovery, genre reference, audio metadata, APIs, and community tools.",
    },
    fr: {
      title: "TheMusicTree",
      description:
        "TheMusicTree est un ecosysteme open source pour comprendre la musique mondiale : decouverte, reference des genres, metadonnees audio, API et outils communautaires.",
    },
  },
  "/about": {
    en: {
      title: "About Us",
      description:
        "Mission and people behind TheMusicTree: open-source music discovery, contributors from the GitHub organization, and how to explore the ecosystem.",
    },
    fr: {
      title: "A propos",
      description:
        "Mission et equipe derriere TheMusicTree : decouverte musicale open source, contributeurs de l'organisation GitHub et facons d'explorer l'ecosysteme.",
    },
  },
  "/contact": {
    en: {
      title: "Contact",
      description:
        "Reach the BehindTheMusicTree team via GitHub, discussions, email, newsletter, and social links.",
    },
    fr: {
      title: "Contact",
      description:
        "Joindre l'equipe BehindTheMusicTree via GitHub, discussions, email, newsletter et reseaux sociaux.",
    },
  },
  "/docs": {
    en: {
      title: "Docs",
      description:
        "Documentation hub for TheMusicTree: welcome guide on GitHub, contributing workflows, and links to project docs across the ecosystem.",
    },
    fr: {
      title: "Docs",
      description:
        "Hub documentation TheMusicTree : guide d'accueil sur GitHub, workflows de contribution et liens vers la doc des projets.",
    },
  },
  "/faq": {
    en: {
      title: "FAQ",
      description:
        "Frequently asked questions about contributing to TheMusicTree, choosing a project, priorities, and open access to the ecosystem.",
    },
    fr: {
      title: "FAQ",
      description:
        "Questions frequentes sur la contribution a TheMusicTree, le choix d'un projet, les priorites et l'acces ouvert a l'ecosysteme.",
    },
  },
  "/newsletter": {
    en: {
      title: en.newsletter.pageTitle,
      description: en.newsletter.pageMetaDescription,
    },
    fr: {
      title: fr.newsletter.pageTitle,
      description: fr.newsletter.pageMetaDescription,
    },
  },
  "/newsletter/confirmed": {
    en: {
      title: en.newsletter.confirmedTitle,
      description: en.newsletter.confirmedMetaDescription,
    },
    fr: {
      title: fr.newsletter.confirmedTitle,
      description: fr.newsletter.confirmedMetaDescription,
    },
  },
  "/engagement": {
    en: {
      title: "Engagement",
      description:
        "Why BehindTheMusicTree is open source, how we support music culture through genre cartography and community power, and how we approach sustainable web design for this site.",
    },
    fr: {
      title: "Engagement",
      description:
        "Pourquoi BehindTheMusicTree est open source, comment nous soutenons la culture musicale via la cartographie des genres et le pouvoir communautaire, et notre approche du web durable.",
    },
  },
  "/projects": {
    en: {
      title: "Projects",
      description:
        "Explore the BehindTheMusicTree ecosystem: open-source tools for music discovery, genre reference, audio metadata, APIs, and apps you can try today.",
    },
    fr: {
      title: "Projets",
      description:
        "Explorez l'ecosysteme BehindTheMusicTree : outils open source pour la decouverte musicale, la reference des genres, les metadonnees audio, les API et des apps a essayer.",
    },
  },
  "/contribute": {
    en: {
      title: "Contribute",
      description:
        "How to contribute to TheMusicTree: report bugs, share ideas, write code, improve docs, and collaborate respectfully across the open-source ecosystem.",
    },
    fr: {
      title: "Contribuer",
      description:
        "Comment contribuer a TheMusicTree : signaler des bugs, partager des idees, coder, ameliorer la documentation et collaborer avec respect dans l'ecosysteme open source.",
    },
  },
  "/team": {
    en: {
      title: GITHUB_ORG_DISPLAY_NAME,
      description:
        "Public members of the BehindTheMusicTree GitHub organization—people building open tools for music discovery and metadata.",
    },
    fr: {
      title: GITHUB_ORG_DISPLAY_NAME,
      description:
        "Membres publics de l'organisation GitHub BehindTheMusicTree — personnes qui construisent des outils ouverts pour la decouverte musicale et les metadonnees.",
    },
  },
};

function hreflangUrls(path: string): { en: string; fr: string; xDefault: string } {
  return {
    en: absoluteUrlForLocale("en", path),
    fr: absoluteUrlForLocale("fr", path),
    xDefault: absoluteUrlForLocale(routing.defaultLocale, path),
  };
}

export async function pageMetadata(path: string): Promise<Metadata> {
  const entry = PAGES[path];
  if (!entry) {
    throw new Error(`Missing page metadata for path: ${path}`);
  }
  const locale = await getLocale();
  const t = locale === "fr" ? entry.fr : entry.en;
  const canonicalPath = pathnameForHref(path, locale);
  const langs = hreflangUrls(path);
  const isHome = path === "/";
  const isTeam = path === "/team";
  const socialTitle =
    isHome || isTeam ? t.title : `${t.title} | TheMusicTree`;

  return {
    title: isHome ? { absolute: t.title } : t.title,
    description: t.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: langs.en,
        fr: langs.fr,
        "x-default": langs.xDefault,
      },
    },
    openGraph: {
      title: socialTitle,
      description: t.description,
      url: `${getSiteOrigin().replace(/\/$/, "")}${canonicalPath}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: t.description,
    },
  };
}
