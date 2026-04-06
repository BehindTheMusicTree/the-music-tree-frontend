import type { Metadata } from "next";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import {
  GITHUB_ORG_DISPLAY_NAME,
  GITHUB_ORG_PROFILE_URL,
} from "@/constants/github-org";
import { getTeamMembersFromGithub } from "@/lib/github-org-team";

export const metadata: Metadata = {
  title: GITHUB_ORG_DISPLAY_NAME,
  description:
    "Public members of the BehindTheMusicTree GitHub organization—people building open tools for music discovery and metadata.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: GITHUB_ORG_DISPLAY_NAME,
    description:
      "Team and maintainers visible on GitHub, with links to profiles and the broader project hub.",
    url: "/team",
  },
  twitter: {
    card: "summary_large_image",
    title: GITHUB_ORG_DISPLAY_NAME,
    description:
      "Team and maintainers visible on GitHub, with links to profiles and the broader project hub.",
  },
};

async function TeamPage() {
  const teamMembers = await getTeamMembersFromGithub();
  const teamGridClass =
    teamMembers.length > 1
      ? "grid gap-6 sm:grid-cols-2"
      : "mx-auto grid max-w-xl gap-6";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <section aria-labelledby="org-heading">
        <h1
          id="org-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {GITHUB_ORG_DISPLAY_NAME}
        </h1>
        <p className="mb-8 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          We host the projects behind{" "}
          <span className="font-medium text-zinc-800 dark:text-zinc-300">
            The Music Tree
          </span>{" "}
          on{" "}
          <ProductExternalLink
            href={GITHUB_ORG_PROFILE_URL}
            kind="github"
            variant="prose"
          >
            GitHub
          </ProductExternalLink>
          . We&apos;re a small group and always open to collaborators.
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
    </div>
  );
}

export default TeamPage;
