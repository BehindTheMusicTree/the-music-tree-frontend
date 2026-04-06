import type { Metadata } from "next";
import Link from "next/link";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import {
  GITHUB_ORG_DISPLAY_NAME,
  GITHUB_ORG_PROFILE_URL,
} from "@/constants/github-org";
import { getTeamMembersFromGithub } from "@/lib/github-org-team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mission and people behind TheMusicTree: open-source music discovery, contributors from the GitHub organization, and how to explore the ecosystem.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description:
      "Meet the association, see public contributors, and find links to projects and docs.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Meet the association, see public contributors, and find links to projects and docs.",
  },
};

async function AboutPage() {
  const teamMembers = await getTeamMembersFromGithub();
  const teamGridClass =
    teamMembers.length > 1
      ? "grid gap-6 sm:grid-cols-2"
      : "mx-auto grid max-w-xl gap-6";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About Us
      </h1>

      <section className="mb-10" aria-labelledby="mission-heading">
        <h2
          id="mission-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Our Mission
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          BehindTheMusicTree aims to create a{" "}
          <strong className="text-zinc-800 dark:text-zinc-300">
            global, authoritative reference
          </strong>{" "}
          that serves as the foundation for music discovery, exploration, and
          understanding. Through our comprehensive framework, we build tools
          that reflect the full diversity of global music culture, empowering
          communities to share and celebrate their musical traditions.
        </p>
      </section>

      <section className="mb-10" aria-labelledby="vision-heading">
        <h2
          id="vision-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Our Vision
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Building the ultimate music genre reference and transforming the way
          the world navigates and understands music—where your journey, your
          collection, and your community thrive.
        </p>
      </section>

      <section className="mb-10" aria-labelledby="impact-heading">
        <h2
          id="impact-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Our Impact
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Our work contributes to preserving and organizing our global musical
          heritage. By building tools that help people discover, understand,
          and connect with diverse music cultures worldwide, we are creating a
          more inclusive and accessible cultural landscape.
        </p>
      </section>

      <section className="mb-10" aria-labelledby="contributors-heading">
        <h2
          id="contributors-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          Contributors
        </h2>
        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
          People who choose to list themselves publicly as members of{" "}
          <ProductExternalLink
            href={GITHUB_ORG_PROFILE_URL}
            kind="github"
            variant="prose"
          >
            {GITHUB_ORG_DISPLAY_NAME}
          </ProductExternalLink>{" "}
          on GitHub. Many more contribute through issues, pull requests, and
          discussions without appearing here.
        </p>
        {teamMembers.length > 0 ? (
          <div className={teamGridClass}>
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.githubLogin ?? member.name}
                {...member}
              />
            ))}
          </div>
        ) : (
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            We couldn&apos;t load people from GitHub right now. See{" "}
            <ProductExternalLink
              href={GITHUB_ORG_PROFILE_URL}
              kind="github"
              variant="prose"
            >
              {GITHUB_ORG_DISPLAY_NAME} on GitHub
            </ProductExternalLink>
            .
          </p>
        )}
      </section>

      <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
        See also the{" "}
        <Link
          href="/team"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          {GITHUB_ORG_DISPLAY_NAME}
        </Link>{" "}
        page for how we host projects on GitHub.
      </p>
    </div>
  );
}

export default AboutPage;
