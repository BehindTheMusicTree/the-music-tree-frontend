"use client";

import { useMessages } from "next-intl";
import { ContributeNewsletterSection } from "@/components/ContributeNewsletterSection";
import { ContributeSponsorSection } from "@/components/ContributeSponsorSection";
import { ContributeWhereToStartSection } from "@/components/ContributeWhereToStartSection";
import { GITHUB_ORG_WELCOME_GUIDE_URL } from "@/constants/github-org";
import type { Messages } from "@/i18n/messages";
import { Link } from "@/i18n/navigation";

export function ContributePageContent() {
  const { contribute: copy } = useMessages() as Messages;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>

      <p className="mb-10 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.intro}
      </p>

      <ContributeNewsletterSection />

      <ContributeWhereToStartSection />

      <ContributeSponsorSection />

      <section className="mb-10" aria-labelledby="ways-heading">
        <h2
          id="ways-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.ways.heading}
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.ways.introStart}{" "}
          <strong className="font-medium text-zinc-800 dark:text-zinc-300">
            {copy.ways.introDiscussions}
          </strong>{" "}
          {copy.ways.introMiddleOne}{" "}
          <strong className="font-medium text-zinc-800 dark:text-zinc-300">
            {copy.ways.introIssues}
          </strong>{" "}
          {copy.ways.introMiddleTwo}{" "}
          <strong className="font-medium text-zinc-800 dark:text-zinc-300">
            {copy.ways.introGithub}
          </strong>{" "}
          {copy.ways.introEnd}
        </p>
        <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          {copy.ways.bullets.map((item) => (
            <li key={item.title}>
              <strong className="text-zinc-800 dark:text-zinc-300">
                {item.title}
              </strong>{" "}
              - {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10" aria-labelledby="great-contribution-heading">
        <h2
          id="great-contribution-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.greatContribution.heading}
        </h2>
        <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          {copy.greatContribution.bullets.map((item) => (
            <li key={item.title}>
              <strong className="text-zinc-800 dark:text-zinc-300">
                {item.title}
              </strong>{" "}
              - {item.text}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          {copy.greatContribution.outro}
        </p>
      </section>

      <section aria-labelledby="next-steps-heading">
        <h2
          id="next-steps-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.nextSteps.heading}
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.nextSteps.intro}{" "}
          <Link
            href="/docs"
            className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
          >
            {copy.nextSteps.docsLabel}
          </Link>{" "}
          {copy.nextSteps.middle}{" "}
          <a
            href={GITHUB_ORG_WELCOME_GUIDE_URL}
            className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            {copy.nextSteps.guideLabel}
          </a>{" "}
          {copy.nextSteps.end}
        </p>
      </section>
    </div>
  );
}
