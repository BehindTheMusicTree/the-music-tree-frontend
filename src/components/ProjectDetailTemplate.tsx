import Image from "next/image";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { ProjectBadgeStrip } from "@/components/ProjectBadgeStrip";
import { ProjectCodeSnippetsSection } from "@/components/ProjectCodeSnippetsSection";
import { ProjectDemoSection } from "@/components/ProjectDemoSection";
import { ProjectRichParagraph } from "@/components/ProjectRichParagraph";
import { StatusBadge } from "@/components/StatusBadge";
import { Link } from "@/i18n/navigation";
import { getServerI18n } from "@/i18n/server";
import type {
  OutboundLinkDef,
  ProjectDefinition,
} from "@/data/projects";
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
        <Image
          src={project.iconSrc}
          alt={project.iconAlt}
          width={112}
          height={112}
          className="h-28 w-28 rounded-xl object-contain sm:h-32 sm:w-32"
          priority
        />
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

      <ProjectRichParagraph segments={project.overview} />
      {project.overviewExtended?.length ? (
        <ProjectRichParagraph segments={project.overviewExtended} />
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
