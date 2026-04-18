import Image from "next/image";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { ProjectBadgeStrip } from "@/components/ProjectBadgeStrip";
import { ProjectCodeSnippetsSection } from "@/components/ProjectCodeSnippetsSection";
import { ProjectDemoSection } from "@/components/ProjectDemoSection";
import { ProjectRichParagraph } from "@/components/ProjectRichParagraph";
import { StatusBadge } from "@/components/StatusBadge";
import { Link } from "@/i18n/navigation";
import { getServerI18n } from "@/i18n/server";
import type { OutboundLinkDef, ProjectDefinition } from "@/data/projects";
import {
  getAudiometaWebUrl,
  getGrowTheMusicTreeUrl,
  getHearTheMusicTreeApiUrl,
} from "@/lib/subdomain-urls";

function resolveOutboundHref(def: OutboundLinkDef): string {
  if (def.source === "static") return def.href;
  if (def.env === "audiometaWeb") return getAudiometaWebUrl();
  if (def.env === "gtmtWeb") return getGrowTheMusicTreeUrl();
  return getHearTheMusicTreeApiUrl();
}

export async function ProjectDetailTemplate({
  project,
}: {
  project: ProjectDefinition;
}) {
  const { messages } = await getServerI18n();
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/projects"
        className="mb-6 inline-block text-sm font-medium text-zinc-600 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← {messages.project.allProjects}
      </Link>
      <header className="mb-10 flex flex-col items-center text-center">
        <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
          {project.iconSrcDark ? (
            <>
              <Image
                src={project.iconSrc}
                alt={project.iconAlt}
                width={112}
                height={112}
                className="h-full w-full rounded-xl object-contain dark:hidden"
                priority
              />
              <Image
                src={project.iconSrcDark}
                alt=""
                width={112}
                height={112}
                className="hidden h-full w-full rounded-xl object-contain dark:block"
                priority
                aria-hidden
              />
            </>
          ) : (
            <Image
              src={project.iconSrc}
              alt={project.iconAlt}
              width={112}
              height={112}
              className={
                project.invertIconInDark
                  ? "h-full w-full rounded-xl object-contain dark:invert"
                  : "h-full w-full rounded-xl object-contain"
              }
              priority
            />
          )}
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {project.name}
        </h1>
        <div
          className="mt-6 flex w-full max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2"
          role="group"
          aria-label={messages.project.releaseStatusAria}
        >
          {project.badges?.length ? (
            <ProjectBadgeStrip badges={project.badges} />
          ) : null}
          <StatusBadge status={project.status} />
        </div>
      </header>

      {project.heroEmbed ? (
        <section className="mb-10" aria-labelledby="hero-presentation-heading">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="aspect-video w-full">
              <iframe
                src={project.heroEmbed.src}
                title={project.heroEmbed.title}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            {project.heroEmbed.caption ? (
              <div className="border-t border-zinc-200 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 sm:px-5">
                <h2
                  id="hero-presentation-heading"
                  className="font-semibold text-zinc-900 dark:text-zinc-50"
                >
                  {project.heroEmbed.title}
                </h2>
                <p className="mt-1 leading-relaxed">
                  {project.heroEmbed.caption}
                </p>
              </div>
            ) : (
              <h2 id="hero-presentation-heading" className="sr-only">
                {project.heroEmbed.title}
              </h2>
            )}
          </div>
        </section>
      ) : null}

      <ProjectRichParagraph segments={project.overview} />
      {project.overviewExtended?.length ? (
        <ProjectRichParagraph segments={project.overviewExtended} />
      ) : null}

      {project.slug === "audiometa-webapp" ? (
        <section className="mb-10 rounded-xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-800 sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Try it now
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Open the app in your browser and start editing your audio metadata
            immediately. No installation required.
          </p>
          <a
            href={getAudiometaWebUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 font-semibold text-white transition-all hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-white"
          >
            Launch AudioMeta Webapp
            <span aria-hidden="true">→</span>
            <span className="sr-only">{messages.project.opensInNewTab}</span>
          </a>
        </section>
      ) : null}

      {project.demos?.length ? (
        <ProjectDemoSection
          demos={project.demos}
          demosHeading={messages.project.demosHeading}
          opensInNewTab={messages.project.opensInNewTab}
        />
      ) : null}

      {project.codeSnippets?.length ? (
        <ProjectCodeSnippetsSection
          snippets={project.codeSnippets}
          sourceUrl={project.codeSnippetsSourceUrl}
        />
      ) : null}

      <section className="mb-8" aria-labelledby="audience-heading">
        <h2
          id="audience-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {messages.project.audienceHeading}
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.audience}
        </p>
      </section>

      <section className="mb-8" aria-labelledby="features-heading">
        <h2
          id="features-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {messages.project.featuresHeading}
        </h2>
        <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8" aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {messages.project.relatedHeading}
        </h2>
        <ProjectRichParagraph
          segments={project.related}
          className="leading-relaxed text-zinc-600 dark:text-zinc-400"
        />
      </section>

      {project.documentationLinks?.length ? (
        <section className="mb-8" aria-labelledby="documentation-heading">
          <h2
            id="documentation-heading"
            className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
          >
            {messages.project.documentationHeading}
          </h2>
          <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {messages.project.documentationIntro}
          </p>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
            {project.documentationLinks.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="links-heading">
        <h2
          id="links-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {messages.project.linksHeading}
        </h2>
        <ul className="flex flex-wrap gap-4">
          {project.outboundLinks.map((def, index) => {
            const href = resolveOutboundHref(def);
            return (
              <li key={`${def.source}-${index}`}>
                <ProductExternalLink
                  href={href}
                  kind={def.kind}
                  variant="inline"
                  presentation="icon"
                  iconSrc={def.iconSrc}
                >
                  {def.children}
                </ProductExternalLink>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
