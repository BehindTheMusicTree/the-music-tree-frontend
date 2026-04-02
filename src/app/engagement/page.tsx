import type { Metadata } from "next";
import Link from "next/link";
import { EngagementSectionHeading } from "@/components/EngagementSectionHeading";
import { WebsiteCarbonBadge } from "@/components/WebsiteCarbonBadge";
import { GITHUB_ORG_PROFILE_URL } from "@/constants/github-org";
import {
  WEBSITE_CARBON_SITE_HOME,
  websiteCarbonReportPageHrefFromOrgUrl,
  websiteCarbonWebsiteResultsUrl,
} from "@/lib/website-carbon-results-url";

export const metadata: Metadata = {
  title: "Engagement",
  description:
    "Why BehindTheMusicTree is open source, how we support music culture through genre cartography and community power, and how we approach sustainable web design for this site.",
};

function EngagementPage() {
  const websiteCarbonReportUrl = websiteCarbonWebsiteResultsUrl(
    process.env.ORG_URL,
  );
  const carbonBadgeReportHref = websiteCarbonReportPageHrefFromOrgUrl();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Engagement
      </h1>
      <p className="mb-12 leading-relaxed text-zinc-600 dark:text-zinc-400">
        This page describes why we committed to{" "}
        <strong className="text-zinc-800 dark:text-zinc-300">open source</strong>
        , how we support{" "}
        <strong className="text-zinc-800 dark:text-zinc-300">culture</strong>{" "}
        through exhaustive genre cartography and community-owned data, and how
        we think about{" "}
        <strong className="text-zinc-800 dark:text-zinc-300">
          environmental impact
        </strong>{" "}
        for the public site you are browsing.
      </p>

      <section className="mb-12" aria-labelledby="open-source-heading">
        <EngagementSectionHeading
          sectionId="open-source"
          headingId="open-source-heading"
        >
          Open source
        </EngagementSectionHeading>
        <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            We chose{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              open source
            </strong>{" "}
            so genre data, software, and project history stay{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              inspectable, reusable, and community-owned
            </strong>
            . Proprietary silos make it hard to verify claims or build on each
            other’s work; public repositories and licenses let anyone audit,
            fork, and improve the ecosystem without asking permission from a
            single gatekeeper.
          </p>
          <p>
            That choice also shapes how we collaborate: issues and roadmaps in
            the open, contributions reviewed on their merits, and documentation
            that lives next to the code. The{" "}
            <a
              href={GITHUB_ORG_PROFILE_URL}
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              BehindTheMusicTree organization on GitHub
            </a>{" "}
            is the hub;{" "}
            <Link
              href="/contribute"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              Contribute
            </Link>{" "}
            explains how to take part.
          </p>
        </div>
      </section>

      <section className="mb-12" aria-labelledby="culture-heading">
        <EngagementSectionHeading sectionId="culture" headingId="culture-heading">
          Culture
        </EngagementSectionHeading>
        <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Discover culture through exhaustive genre cartography.
            </strong>{" "}
            We treat the map of genres as a living chart: the more complete and
            precise it is, the easier it becomes to explore how music travels,
            splits, and reconnects across places and eras. Breadth and depth in
            that cartography are how listeners and researchers actually find
            their way into real cultural context—not only a handful of familiar
            labels.
          </p>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Keep it crowd-sourced so communities hold the power.
            </strong>{" "}
            The reference is built in the open: proposals, review, and debate
            happen where contributors can see them. That shifts agency toward the
            people who live the music—scenes, archivists, educators, and
            enthusiasts—instead of locking decisions inside a single proprietary
            product.
          </p>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Represent every culture—established and emerging.
            </strong>{" "}
            When the map is community-owned and ambitious in scope, widely known
            traditions sit alongside emerging and local forms that rarely get a
            fair slot in closed catalogs. The goal is a cartography where each
            culture can show up with the nuance it deserves, including what is
            still taking shape today.
          </p>
          <p>
            <Link
              href="/contribute"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              Contribute
            </Link>{" "}
            outlines how to take part in that map;{" "}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              Projects
            </Link>{" "}
            links the tools that turn shared data into discovery in practice.
          </p>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="environment-heading">
        <EngagementSectionHeading
          sectionId="environment"
          headingId="environment-heading"
        >
          Environment
        </EngagementSectionHeading>
        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
          We try to follow principles aligned with{" "}
          <a
            href="https://sustainablewebdesign.org/"
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
          >
            sustainable web design
          </a>
          : lean delivery, efficient runtime, durable information architecture,
          and honest measurement—so the site stays fast, maintainable, and
          transparent about its footprint.
        </p>

        <div className="mb-8">
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            The{" "}
            <a
              href="https://www.websitecarbon.com/"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              Website Carbon
            </a>{" "}
            calculator estimates emissions per page view (methodology aligns with
            common sustainable web design models). The badge below is the same
            component as in the site footer; on the live site it reflects{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">this page</strong>
            .
          </p>
          <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Their API may be unavailable, so the badge may show{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              Unavailable
            </strong>{" "}
            or{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              No Result
            </strong>{" "}
            even when their website still has a report for this site
            {websiteCarbonReportUrl ? (
              <>
                —you can{" "}
                <a
                  href={websiteCarbonReportUrl}
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
                >
                  view this site’s report on Website Carbon
                </a>
                .
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
          What we already do
        </h3>
        <ul
          className="mb-8 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400"
          aria-labelledby="already-heading"
        >
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Next.js (App Router)
            </strong>{" "}
            with server-first pages and optimized assets via{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              next/image
            </code>{" "}
            and{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              next/font
            </code>{" "}
            (subset fonts).
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Tailwind CSS
            </strong>{" "}
            for lightweight styling instead of large unused style bundles.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Shared UI
            </strong>{" "}
            via organization packages so we avoid duplicating heavy frontends
            across every repo.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Website Carbon
            </strong>{" "}
            in the footer and in this Environment section: a public estimate of
            this page’s carbon impact (see{" "}
            <a
              href={
                websiteCarbonReportUrl ?? WEBSITE_CARBON_SITE_HOME
              }
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              Website Carbon
            </a>
            ).
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Accessibility basics
            </strong>{" "}
            that also reduce friction: skip link to main content and a clear{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              main
            </code>{" "}
            landmark.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Deployment on Vercel
            </strong>{" "}
            with edge-friendly delivery for production traffic.
          </li>
        </ul>

        <h3
          id="improve-heading"
          className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Tracks for improvement
        </h3>
        <ul
          className="list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400"
          aria-labelledby="improve-heading"
        >
          <li>
            Define and revisit{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              performance budgets
            </strong>{" "}
            (e.g. Core Web Vitals and JavaScript weight on key routes) as the
            site grows.
          </li>
          <li>
            Keep{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              heavy dependencies
            </strong>{" "}
            scoped to the pages that need them (for example, rich code
            highlighting only on project pages that show snippets).
          </li>
          <li>
            Periodically review{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              images, embeds, and third-party scripts
            </strong>{" "}
            so each addition stays justified.
          </li>
          <li>
            When we have{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              verified data
            </strong>
            , document hosting and grid-carbon context (renewable share,
            region) alongside calculator estimates.
          </li>
          <li>
            Continue favoring{" "}
            <strong className="text-zinc-800 dark:text-zinc-300">
              clear structure and copy
            </strong>{" "}
            over decorative weight—fewer bytes per meaningful visit.
          </li>
        </ul>
      </section>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Questions or suggestions?{" "}
        <Link
          href="/contact"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          Contact us
        </Link>
        .
      </p>
    </div>
  );
}

export default EngagementPage;
