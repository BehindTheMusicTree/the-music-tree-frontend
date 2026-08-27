import type { Metadata } from "next";
import { EngagementSectionHeading } from "@/components/EngagementSectionHeading";
import { WebsiteCarbonBadge } from "@/components/WebsiteCarbonBadge";
import { GITHUB_ORG_PROFILE_URL } from "@/constants/github-org";
import { pageMetadata } from "@/i18n/page-metadata";
import { Link } from "@/i18n/navigation";
import { getServerI18n } from "@/i18n/server";
import { getSiteOrigin } from "@/lib/site-origin";
import {
  WEBSITE_CARBON_SITE_HOME,
  websiteCarbonReportPageHref,
  websiteCarbonWebsiteResultsUrl,
} from "@/lib/website-carbon-results-url";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/engagement");
}

async function EngagementPage() {
  const { language } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          title: "Engagement",
          openSource: "Open source",
          culture: "Culture",
          environment: "Environnement",
          contribute: "Contribuer",
          projects: "Projets",
          already: "Ce que nous faisons deja",
          improve: "Pistes d'amelioration",
          contactQ: "Questions ou suggestions ?",
          contact: "Contactez-nous",
          introLead: "Cette page explique pourquoi nous nous sommes engages envers",
          introOpenSource: "l'open source",
          introCultureLead: ", comment nous soutenons",
          introCulture: "la culture",
          introCultureTail:
            "grace a une cartographie exhaustive des genres et des donnees detenues par la communaute, et comment nous envisageons",
          introEnvironment: "l'impact environnemental",
          introTail: "pour le site public que vous consultez.",
          osLead: "Nous avons choisi",
          osMid: "afin que les donnees de genres, le logiciel et l'historique du projet restent",
          osInspectable: "inspectables, reutilisables et detenus par la communaute",
          osTail:
            ". Les silos proprietaires rendent difficile la verification des affirmations ou la construction sur le travail d'autrui ; les depots publics et les licences permettent a chacun d'auditer, de forker et d'ameliorer l'ecosysteme sans demander la permission a un unique gardien.",
          osCollabLead:
            "Ce choix influence aussi notre facon de collaborer : issues et feuilles de route en public, contributions evaluees sur leurs merites, et documentation qui vit a cote du code. L'",
          osOrgLink: "organisation BehindTheMusicTree sur GitHub",
          osHubMid: "est le point central ;",
          osHubTail: "explique comment y participer.",
          cultureP1Strong: "Decouvrir la culture grace a une cartographie exhaustive des genres.",
          cultureP1Body:
            "Nous traitons la carte des genres comme un graphe vivant : plus elle est complete et precise, plus il devient facile d'explorer comment la musique voyage, se scinde et se reconnecte a travers les lieux et les epoques. L'etendue et la profondeur de cette cartographie permettent aux auditeurs et chercheurs de vraiment trouver leur chemin vers un contexte culturel reel — pas seulement une poignee d'etiquettes familieres.",
          cultureP2Strong: "Rester participatif pour que le pouvoir reste aux communautes.",
          cultureP2Body:
            "La reference est construite en public : propositions, revues et debats se deroulent la ou les contributeurs peuvent les voir. Cela deplace le pouvoir de decision vers les personnes qui vivent la musique — scenes, archivistes, educateurs et passionnes — plutot que de l'enfermer dans un produit proprietaire unique.",
          cultureP3Strong: "Representer chaque culture — etablie ou emergente.",
          cultureP3Body:
            "Lorsque la carte est detenue par la communaute et ambitieuse dans sa portee, les traditions largement connues cotoient des formes emergentes et locales qui trouvent rarement une place equitable dans les catalogues fermes. L'objectif est une cartographie ou chaque culture peut apparaitre avec toute la nuance qu'elle merite, y compris ce qui est encore en train de se former aujourd'hui.",
          cultureLinksLead: "explique comment participer a cette carte ;",
          cultureLinksTail: "recense les outils qui transforment les donnees partagees en decouverte concrete.",
          envIntroLead: "Nous essayons de suivre des principes alignes avec le",
          envSustainableLink: "sustainable web design",
          envIntroTail:
            " : livraison legere, execution efficace, architecture d'information durable et mesure honnete — pour que le site reste rapide, maintenable et transparent sur son empreinte.",
          carbonLead: "Le calculateur",
          carbonLink: "Website Carbon",
          carbonP1Mid:
            "estime les emissions par page vue (la methodologie s'aligne sur les modeles courants de sustainable web design). Le badge ci-dessous est le meme composant que dans le pied de page ; sur le site en production, il reflete",
          carbonThisPage: "cette page",
          carbonP2Lead: "Leur API peut etre indisponible, auquel cas le badge peut afficher",
          carbonUnavailable: "Unavailable",
          carbonOr: "ou",
          carbonNoResult: "No Result",
          carbonP2Tail: "meme quand leur site propose encore un rapport pour ce site",
          carbonDashLead: " — vous pouvez",
          carbonViewReportLink: "consulter le rapport de ce site sur Website Carbon",
          alreadyNextjsStrong: "Next.js (App Router)",
          alreadyNextjsMid: "avec des pages server-first et des assets optimises via",
          alreadyAnd: "et",
          alreadyFontsTail: "(polices allegees).",
          alreadyTailwindStrong: "Tailwind CSS",
          alreadyTailwindTail: "pour un style leger plutot que de gros bundles de styles inutilises.",
          alreadySharedUiStrong: "UI partagee",
          alreadySharedUiTail:
            "via des packages d'organisation pour eviter de dupliquer des frontends lourds dans chaque depot.",
          alreadyCarbonMid:
            "dans le pied de page et dans cette section Environnement : une estimation publique de l'impact carbone de cette page (voir",
          alreadyAccessibilityStrong: "Bases d'accessibilite",
          alreadyAccessibilityMid:
            "qui reduisent aussi la friction : lien d'evitement vers le contenu principal et une balise",
          alreadyAccessibilityTail: "claire.",
          alreadyVercelStrong: "Deploiement sur Vercel",
          alreadyVercelTail: "avec une livraison edge-friendly pour le trafic de production.",
          improveBudgetsLead: "Definir et revoir",
          improveBudgetsStrong: "les budgets de performance",
          improveBudgetsTail:
            "(ex. Core Web Vitals et poids JavaScript sur les routes cles) a mesure que le site grandit.",
          improveDepsLead: "Garder",
          improveDepsStrong: "les dependances lourdes",
          improveDepsTail:
            "limitees aux pages qui en ont besoin (par exemple, coloration syntaxique riche uniquement sur les pages de projet qui affichent des extraits de code).",
          improveReviewLead: "Revoir periodiquement",
          improveReviewStrong: "les images, embeds et scripts tiers",
          improveReviewTail: "afin que chaque ajout reste justifie.",
          improveDataLead: "Quand nous disposons de",
          improveDataStrong: "donnees verifiees",
          improveDataTail:
            ", documenter l'hebergement et le contexte carbone du reseau electrique (part renouvelable, region) en complement des estimations du calculateur.",
          improveCopyLead: "Continuer a privilegier",
          improveCopyStrong: "une structure et un texte clairs",
          improveCopyTail: "plutot que du poids decoratif — moins d'octets par visite utile.",
        }
      : {
          title: "Engagement",
          openSource: "Open source",
          culture: "Culture",
          environment: "Environment",
          contribute: "Contribute",
          projects: "Projects",
          already: "What we already do",
          improve: "Tracks for improvement",
          contactQ: "Questions or suggestions?",
          contact: "Contact us",
          introLead: "This page describes why we committed to",
          introOpenSource: "open source",
          introCultureLead: ", how we support",
          introCulture: "culture",
          introCultureTail:
            "through exhaustive genre cartography and community-owned data, and how we think about",
          introEnvironment: "environmental impact",
          introTail: "for the public site you are browsing.",
          osLead: "We chose",
          osMid: "so genre data, software, and project history stay",
          osInspectable: "inspectable, reusable, and community-owned",
          osTail:
            ". Proprietary silos make it hard to verify claims or build on each other’s work; public repositories and licenses let anyone audit, fork, and improve the ecosystem without asking permission from a single gatekeeper.",
          osCollabLead:
            "That choice also shapes how we collaborate: issues and roadmaps in the open, contributions reviewed on their merits, and documentation that lives next to the code. The",
          osOrgLink: "BehindTheMusicTree organization on GitHub",
          osHubMid: "is the hub;",
          osHubTail: "explains how to take part.",
          cultureP1Strong: "Discover culture through exhaustive genre cartography.",
          cultureP1Body:
            "We treat the map of genres as a living chart: the more complete and precise it is, the easier it becomes to explore how music travels, splits, and reconnects across places and eras. Breadth and depth in that cartography are how listeners and researchers actually find their way into real cultural context—not only a handful of familiar labels.",
          cultureP2Strong: "Keep it crowd-sourced so communities hold the power.",
          cultureP2Body:
            "The reference is built in the open: proposals, review, and debate happen where contributors can see them. That shifts agency toward the people who live the music—scenes, archivists, educators, and enthusiasts—instead of locking decisions inside a single proprietary product.",
          cultureP3Strong: "Represent every culture—established and emerging.",
          cultureP3Body:
            "When the map is community-owned and ambitious in scope, widely known traditions sit alongside emerging and local forms that rarely get a fair slot in closed catalogs. The goal is a cartography where each culture can show up with the nuance it deserves, including what is still taking shape today.",
          cultureLinksLead: "outlines how to take part in that map;",
          cultureLinksTail: "links the tools that turn shared data into discovery in practice.",
          envIntroLead: "We try to follow principles aligned with",
          envSustainableLink: "sustainable web design",
          envIntroTail:
            ": lean delivery, efficient runtime, durable information architecture, and honest measurement—so the site stays fast, maintainable, and transparent about its footprint.",
          carbonLead: "The",
          carbonLink: "Website Carbon",
          carbonP1Mid:
            "calculator estimates emissions per page view (methodology aligns with common sustainable web design models). The badge below is the same component as in the site footer; on the live site it reflects",
          carbonThisPage: "this page",
          carbonP2Lead: "Their API may be unavailable, so the badge may show",
          carbonUnavailable: "Unavailable",
          carbonOr: "or",
          carbonNoResult: "No Result",
          carbonP2Tail: "even when their website still has a report for this site",
          carbonDashLead: "—you can",
          carbonViewReportLink: "view this site’s report on Website Carbon",
          alreadyNextjsStrong: "Next.js (App Router)",
          alreadyNextjsMid: "with server-first pages and optimized assets via",
          alreadyAnd: "and",
          alreadyFontsTail: "(subset fonts).",
          alreadyTailwindStrong: "Tailwind CSS",
          alreadyTailwindTail: "for lightweight styling instead of large unused style bundles.",
          alreadySharedUiStrong: "Shared UI",
          alreadySharedUiTail:
            "via organization packages so we avoid duplicating heavy frontends across every repo.",
          alreadyCarbonMid:
            "in the footer and in this Environment section: a public estimate of this page’s carbon impact (see",
          alreadyAccessibilityStrong: "Accessibility basics",
          alreadyAccessibilityMid:
            "that also reduce friction: skip link to main content and a clear",
          alreadyAccessibilityTail: "landmark.",
          alreadyVercelStrong: "Deployment on Vercel",
          alreadyVercelTail: "with edge-friendly delivery for production traffic.",
          improveBudgetsLead: "Define and revisit",
          improveBudgetsStrong: "performance budgets",
          improveBudgetsTail:
            "(e.g. Core Web Vitals and JavaScript weight on key routes) as the site grows.",
          improveDepsLead: "Keep",
          improveDepsStrong: "heavy dependencies",
          improveDepsTail:
            "scoped to the pages that need them (for example, rich code highlighting only on project pages that show snippets).",
          improveReviewLead: "Periodically review",
          improveReviewStrong: "images, embeds, and third-party scripts",
          improveReviewTail: "so each addition stays justified.",
          improveDataLead: "When we have",
          improveDataStrong: "verified data",
          improveDataTail:
            ", document hosting and grid-carbon context (renewable share, region) alongside calculator estimates.",
          improveCopyLead: "Continue favoring",
          improveCopyStrong: "clear structure and copy",
          improveCopyTail: "over decorative weight—fewer bytes per meaningful visit.",
        };
  const websiteCarbonReportUrl =
    websiteCarbonWebsiteResultsUrl(getSiteOrigin());
  const carbonBadgeReportHref = websiteCarbonReportPageHref();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>
      <p className="mb-12 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.introLead}{" "}
        <strong className="text-zinc-800 dark:text-zinc-300">
          {copy.introOpenSource}
        </strong>
        {copy.introCultureLead}{" "}
        <strong className="text-zinc-800 dark:text-zinc-300">{copy.introCulture}</strong>{" "}
        {copy.introCultureTail}{" "}
        <strong className="text-zinc-800 dark:text-zinc-300">
          {copy.introEnvironment}
        </strong>{" "}
        {copy.introTail}
      </p>

      <section className="mb-12" aria-labelledby="open-source-heading">
        <EngagementSectionHeading
          sectionId="open-source"
          headingId="open-source-heading"
        >
          {copy.openSource}
        </EngagementSectionHeading>
        <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            {copy.osLead}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.introOpenSource}
            </strong>{" "}
            {copy.osMid}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.osInspectable}
            </strong>
            {copy.osTail}
          </p>
          <p>
            {copy.osCollabLead}{" "}
            <a
              href={GITHUB_ORG_PROFILE_URL}
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              {copy.osOrgLink}
            </a>{" "}
            {copy.osHubMid}{" "}
            <Link
              href="/contribute"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              {copy.contribute}
            </Link>{" "}
            {copy.osHubTail}
          </p>
        </div>
      </section>

      <section className="mb-12" aria-labelledby="culture-heading">
        <EngagementSectionHeading
          sectionId="culture"
          headingId="culture-heading"
        >
          {copy.culture}
        </EngagementSectionHeading>
        <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.cultureP1Strong}
            </strong>{" "}
            {copy.cultureP1Body}
          </p>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.cultureP2Strong}
            </strong>{" "}
            {copy.cultureP2Body}
          </p>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.cultureP3Strong}
            </strong>{" "}
            {copy.cultureP3Body}
          </p>
          <p>
            <Link
              href="/contribute"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              {copy.contribute}
            </Link>{" "}
            {copy.cultureLinksLead}{" "}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              {copy.projects}
            </Link>{" "}
            {copy.cultureLinksTail}
          </p>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="environment-heading">
        <EngagementSectionHeading
          sectionId="environment"
          headingId="environment-heading"
        >
          {copy.environment}
        </EngagementSectionHeading>
        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.envIntroLead}{" "}
          <a
            href="https://sustainablewebdesign.org/"
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
          >
            {copy.envSustainableLink}
          </a>
          {copy.envIntroTail}
        </p>

        <div className="mb-8">
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {copy.carbonLead}{" "}
            <a
              href="https://www.websitecarbon.com/"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              {copy.carbonLink}
            </a>{" "}
            {copy.carbonP1Mid}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.carbonThisPage}
            </strong>
            {/* eslint-disable-next-line react/jsx-no-literals -- punctuation, not translatable text */}
            {"."}
          </p>
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {copy.carbonP2Lead}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.carbonUnavailable}
            </strong>{" "}
            {copy.carbonOr}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.carbonNoResult}
            </strong>{" "}
            {copy.carbonP2Tail}
            {websiteCarbonReportUrl ? (
              <>
                {copy.carbonDashLead}{" "}
                <a
                  href={websiteCarbonReportUrl}
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
                >
                  {copy.carbonViewReportLink}
                </a>
                {/* eslint-disable-next-line react/jsx-no-literals -- punctuation, not translatable text */}
                {"."}
              </>
            ) : (
              "."
            )}
          </p>
          <div className="flex justify-start">
            <WebsiteCarbonBadge reportPageHref={carbonBadgeReportHref} />
          </div>
        </div>

        <h3
          id="already-heading"
          className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.already}
        </h3>
        <ul
          className="mb-8 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400"
          aria-labelledby="already-heading"
        >
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.alreadyNextjsStrong}
            </strong>{" "}
            {copy.alreadyNextjsMid}{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              {/* eslint-disable-next-line react/jsx-no-literals -- package name, not translatable text */}
              {"next/image"}
            </code>{" "}
            {copy.alreadyAnd}{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              {/* eslint-disable-next-line react/jsx-no-literals -- package name, not translatable text */}
              {"next/font"}
            </code>{" "}
            {copy.alreadyFontsTail}
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.alreadyTailwindStrong}
            </strong>{" "}
            {copy.alreadyTailwindTail}
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.alreadySharedUiStrong}
            </strong>{" "}
            {copy.alreadySharedUiTail}
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.carbonLink}
            </strong>{" "}
            {copy.alreadyCarbonMid}{" "}
            <a
              href={websiteCarbonReportUrl ?? WEBSITE_CARBON_SITE_HOME}
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              {copy.carbonLink}
            </a>
            {/* eslint-disable-next-line react/jsx-no-literals -- punctuation, not translatable text */}
            {")."}
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.alreadyAccessibilityStrong}
            </strong>{" "}
            {copy.alreadyAccessibilityMid}{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              {/* eslint-disable-next-line react/jsx-no-literals -- HTML landmark value, not translatable text */}
              {"main"}
            </code>{" "}
            {copy.alreadyAccessibilityTail}
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.alreadyVercelStrong}
            </strong>{" "}
            {copy.alreadyVercelTail}
          </li>
        </ul>

        <h3
          id="improve-heading"
          className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.improve}
        </h3>
        <ul
          className="list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400"
          aria-labelledby="improve-heading"
        >
          <li>
            {copy.improveBudgetsLead}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.improveBudgetsStrong}
            </strong>{" "}
            {copy.improveBudgetsTail}
          </li>
          <li>
            {copy.improveDepsLead}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.improveDepsStrong}
            </strong>{" "}
            {copy.improveDepsTail}
          </li>
          <li>
            {copy.improveReviewLead}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.improveReviewStrong}
            </strong>{" "}
            {copy.improveReviewTail}
          </li>
          <li>
            {copy.improveDataLead}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.improveDataStrong}
            </strong>
            {copy.improveDataTail}
          </li>
          <li>
            {copy.improveCopyLead}{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              {copy.improveCopyStrong}
            </strong>{" "}
            {copy.improveCopyTail}
          </li>
        </ul>
      </section>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {copy.contactQ}{" "}
        <Link
          href="/contact"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          {copy.contact}
        </Link>
        {/* eslint-disable-next-line react/jsx-no-literals -- punctuation, not translatable text */}
        {"."}
      </p>
    </div>
  );
}

export default EngagementPage;
