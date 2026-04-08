import Image from "next/image";
import type { ProjectDemoDef, RichEnvLinkTarget } from "@/data/projects";
import {
  getAudiometaWebUrl,
  getGrowTheMusicTreeUrl,
  getHearTheMusicTreeApiUrl,
} from "@/lib/subdomain-urls";

function resolveDemoHref(demo: ProjectDemoDef): string {
  if (demo.hrefSource === "static") return demo.href;
  return resolveEnvDemoHref(demo.env);
}

function resolveEnvDemoHref(env: RichEnvLinkTarget): string {
  if (env === "audiometaWeb") return getAudiometaWebUrl();
  if (env === "gtmtWeb") return getGrowTheMusicTreeUrl();
  return getHearTheMusicTreeApiUrl();
}

export function ProjectDemoSection({
  demos,
  demosHeading,
  opensInNewTab,
}: {
  demos: ProjectDemoDef[];
  demosHeading: string;
  opensInNewTab: string;
}) {
  if (!demos.length) return null;

  return (
    <section className="mb-8" aria-labelledby="demos-heading">
      <h2
        id="demos-heading"
        className="mb-5 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        {demosHeading}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {demos.map((demo, index) => {
          const href = resolveDemoHref(demo);
          const key = `${demo.title}-${index}`;
          return (
            <li
              key={key}
              className="flex flex-col rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {demo.imageSrc ? (
                <div className="mb-3 overflow-hidden rounded-lg border border-zinc-100 dark:border-zinc-800">
                  <Image
                    src={demo.imageSrc}
                    alt={demo.imageAlt ?? demo.title}
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ) : null}
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {demo.title}
              </h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {demo.description}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
              >
                {demo.ctaLabel}
                <span className="sr-only"> {opensInNewTab}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
