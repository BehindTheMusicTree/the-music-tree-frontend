import type { Metadata } from "next";
import Link from "next/link";
import { ContributeSponsorSection } from "@/components/ContributeSponsorSection";
import { ContributeWhereToStartSection } from "@/components/ContributeWhereToStartSection";
import { GITHUB_ORG_WELCOME_GUIDE_URL } from "@/constants/github-org";

const contributeDescription =
  "How to contribute to TheMusicTree: report bugs, share ideas, write code, improve docs, and collaborate respectfully across the open-source ecosystem.";

export const metadata: Metadata = {
  title: "Contribute",
  description: contributeDescription,
  alternates: { canonical: "/contribute" },
  openGraph: {
    title: "Contribute",
    description: contributeDescription,
    url: "/contribute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contribute",
    description: contributeDescription,
  },
};

function ContributePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contribute
      </h1>

      <p className="mb-10 leading-relaxed text-zinc-600 dark:text-zinc-400">
        We love collaborating with the community. Join the channels below,
        then read practical ways to help and what makes a strong contribution.
      </p>

      <ContributeWhereToStartSection />

      <ContributeSponsorSection />

      <section className="mb-10" aria-labelledby="ways-heading">
        <h2
          id="ways-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Ways to Contribute
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          Map these to the links above when it helps: use{" "}
          <strong className="font-medium text-zinc-800 dark:text-zinc-300">
            Organization discussions
          </strong>{" "}
          for ideas and open questions,{" "}
          <strong className="font-medium text-zinc-800 dark:text-zinc-300">
            GitHub issues
          </strong>{" "}
          for concrete bugs and scoped work, and{" "}
          <strong className="font-medium text-zinc-800 dark:text-zinc-300">
            GitHub
          </strong>{" "}
          to read code and open pull requests.
        </p>
        <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Report Bugs
            </strong>{" "}
            — Found an issue? Open an issue with details and steps to
            reproduce.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Share Ideas
            </strong>{" "}
            — Have a feature idea? Start a discussion or open a feature
            request.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Write Code
            </strong>{" "}
            — Check out open issues, fork repos, and submit PRs.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Improve Docs
            </strong>{" "}
            — Documentation improvements are always welcome.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Show Support
            </strong>{" "}
            — Star repositories you find useful.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Spread the Word
            </strong>{" "}
            — Tell others about projects you love.
          </li>
        </ul>
      </section>

      <section className="mb-10" aria-labelledby="great-contribution-heading">
        <h2
          id="great-contribution-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          What Makes a Great Contribution
        </h2>
        <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Clear communication
            </strong>{" "}
            — Describe what and why.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Small, focused changes
            </strong>{" "}
            — Easier to review and merge.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Tests included
            </strong>{" "}
            — Ensures quality and prevents regressions.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Documentation updates
            </strong>{" "}
            — Keep docs in sync with code.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-300">
              Respectful collaboration
            </strong>{" "}
            — We are all here to learn and build together.
          </li>
        </ul>
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Every contribution matters, no matter how small.
        </p>
      </section>

      <section aria-labelledby="next-steps-heading">
        <h2
          id="next-steps-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Next steps
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Read the{" "}
          <Link
            href="/docs"
            className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
          >
            Docs
          </Link>
          {" "}
          hub and the association&apos;s{" "}
          <a
            href={GITHUB_ORG_WELCOME_GUIDE_URL}
            className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            welcome guide on GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default ContributePage;
