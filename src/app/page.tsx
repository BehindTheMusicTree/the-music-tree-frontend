import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { projectTeasers } from "@/data/projects";
import { pageMetadata } from "@/i18n/page-metadata";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/");
}

async function HomePage() {
  const { language, withLocalePath } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          heroSubtitle: "Ecosysteme open source pour la musique mondiale.",
          heroText:
            "TheMusicTree aide les communautes a cartographier, preserver et decouvrir les genres musicaux via des outils transparents et collaboratifs.",
          ctaContribute: "Contribuer",
          ctaProjects: "Explorer les projets",
          whyHeading: "Pourquoi c'est important",
          whyText:
            "La culture musicale est riche, locale et en evolution constante, mais les donnees de genres sont souvent fragmentees et incoherentes. Nous construisons une reference ouverte, revue par la communaute, pour aider developpeurs, auditeurs et contributeurs a naviguer cette complexite.",
          howHeading: "Comment ca marche",
          howSteps: [
            "Les contributeurs ameliorent les donnees, le code et la documentation.",
            "Les mainteneurs relisent et fusionnent les mises a jour de qualite.",
            "Les applications et API transforment les donnees partagees en outils de decouverte.",
          ],
          benefitsHeading: "Benefices cles",
          benefits: [
            "Connaissance structuree des genres pour mieux apprendre et decouvrir.",
            "Gouvernance ouverte et decisions transparentes.",
            "API et outils reutilisables dans tout l'ecosysteme.",
          ],
          socialHeading: "Preuves sociales",
          social: [
            "Plusieurs projets open source partagent une meme mission de donnees musicales.",
            "Modele de contribution centre communaute via des workflows GitHub publics.",
            "Collaboration ouverte sur les metadonnees, API et workflows de decouverte.",
          ],
          projectsHeading: "Projets de l'ecosysteme",
          trustHeading: "Confiance open source",
          trustItems: [
            "Depots ouverts et suivi transparent des issues sur GitHub.",
            "Guides de contribution et workflows de revue communautaires.",
            "Priorites discutees publiquement via issues et discussions GitHub.",
          ],
          getInvolved: "Participer",
          browseProjects: "Parcourir les projets",
          faqPreview: "Apercu FAQ",
          faqItems: [
            "Comment contribuer si je ne suis pas developpeur ?",
            "Par quel projet commencer ?",
            "Comment les priorites sont-elles decidees ?",
          ],
          readFaq: "Lire toute la FAQ",
          finalHeading:
            "Aidez a faconner l'avenir de la connaissance musicale ouverte.",
          finalText:
            "Rejoignez les contributeurs qui ameliorent la qualite des donnees, les outils et l'acces ouvert a travers l'ecosysteme.",
        }
      : {
          heroSubtitle: "Open-source ecosystem for global music.",
          heroText:
            "TheMusicTree helps communities map, preserve, and discover music genres through transparent, collaborative tools.",
          ctaContribute: "Contribute",
          ctaProjects: "Explore projects",
          whyHeading: "Why this matters",
          whyText:
            "Music culture is rich, local, and constantly evolving, but genre data is often fragmented and inconsistent. We are building an open, community-reviewed reference that helps developers, listeners, and contributors navigate this complexity with confidence.",
          howHeading: "How it works",
          howSteps: [
            "Contributors improve data, code, and documentation.",
            "Maintainers review and merge high-quality updates.",
            "Apps and APIs turn shared data into discovery tools.",
          ],
          benefitsHeading: "Key benefits",
          benefits: [
            "Structured genre knowledge for better learning and discovery.",
            "Open governance and transparent decision-making.",
            "Reusable APIs and tools across the ecosystem.",
          ],
          socialHeading: "Social proof",
          social: [
            "Multiple open-source projects sharing one music data mission.",
            "Community-first contribution model through public GitHub workflows.",
            "Open collaboration across metadata, APIs, and discovery workflows.",
          ],
          projectsHeading: "Ecosystem projects",
          trustHeading: "Open-source trust",
          trustItems: [
            "Open repositories and transparent issue tracking on GitHub.",
            "Community contribution guidelines and review workflows.",
            "Priorities discussed in the open on GitHub issues and discussions.",
          ],
          getInvolved: "Get involved",
          browseProjects: "Browse projects",
          faqPreview: "FAQ preview",
          faqItems: [
            "How can I contribute if I am not a developer?",
            "Which project should I start with first?",
            "How are project priorities decided?",
          ],
          readFaq: "Read all FAQs",
          finalHeading: "Help shape the future of open music knowledge.",
          finalText:
            "Join contributors improving data quality, tooling, and open access across the ecosystem.",
        };
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
        <div className="mb-8 flex justify-center">
          <Image
            src="/project-icons/behind-the-music-tree.svg"
            alt="TheMusicTree logo"
            width={120}
            height={120}
            className="h-24 w-24 sm:h-32 sm:w-32"
            priority
          />
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          TheMusicTree
        </h1>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {copy.heroSubtitle}
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.heroText}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={withLocalePath("/contribute")}
            data-track-event="cta_click"
            data-track-label="hero_contribute"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {copy.ctaContribute}
          </Link>
          <Link
            href={withLocalePath("/projects")}
            data-track-event="cta_click"
            data-track-label="hero_explore_projects"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-base font-medium text-zinc-800 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
          >
            {copy.ctaProjects}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {copy.whyHeading}
        </h2>
        <p className="max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.whyText}
        </p>
      </section>

      <section
        className="mx-auto max-w-5xl px-6 pb-16"
        aria-labelledby="how-heading"
      >
        <h2
          id="how-heading"
          className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.howHeading}
        </h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {copy.howSteps.map((step) => (
            <li
              key={step}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section
        className="mx-auto max-w-5xl px-6 pb-16"
        aria-labelledby="benefits-heading"
      >
        <h2
          id="benefits-heading"
          className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.benefitsHeading}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {copy.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mx-auto max-w-5xl px-6 pb-16"
        aria-labelledby="proof-heading"
      >
        <h2
          id="proof-heading"
          className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.socialHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {copy.social.map((item) => (
            <p
              key={item}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-6 pb-16"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.projectsHeading}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-6">
          {projectTeasers.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-5xl px-6 pb-16"
        aria-labelledby="trust-heading"
      >
        <h2
          id="trust-heading"
          className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.trustHeading}
        </h2>
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
          {copy.trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href={withLocalePath("/contribute")}
            data-track-event="cta_click"
            data-track-label="trust_get_involved"
            className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          >
            {copy.getInvolved}
          </Link>
          <Link
            href={withLocalePath("/projects")}
            data-track-event="cta_click"
            data-track-label="trust_browse_projects"
            className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          >
            {copy.browseProjects}
          </Link>
        </div>
      </section>

      <section
        className="mx-auto max-w-5xl px-6 pb-16"
        aria-labelledby="faq-preview-heading"
      >
        <h2
          id="faq-preview-heading"
          className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.faqPreview}
        </h2>
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
          {copy.faqItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          <Link
            href={withLocalePath("/faq")}
            data-track-event="cta_click"
            data-track-label="faq_preview_read_all"
            className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
          >
            {copy.readFaq}
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {copy.finalHeading}
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {copy.finalText}
        </p>
        <Link
          href={withLocalePath("/contribute")}
          data-track-event="cta_click"
          data-track-label="final_contribute"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {copy.ctaContribute}
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
