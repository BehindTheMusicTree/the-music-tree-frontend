import { TeamMemberCard } from "@/components/TeamMemberCard";
import { getTeamMembersFromGithub } from "@/lib/github-org-team";

const GITHUB_ORG_URL = "https://github.com/BehindTheMusicTree";

async function TeamPage() {
  const teamMembers = await getTeamMembersFromGithub();
  const teamGridClass =
    teamMembers.length > 1
      ? "grid gap-6 sm:grid-cols-2"
      : "mx-auto grid max-w-xl gap-6";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <section aria-labelledby="team-heading">
        <h1
          id="team-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Team
        </h1>
        <p className="mb-8 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          BehindTheMusicTree is maintained by a small group; we&apos;re always
          open to collaborators.
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
            We couldn&apos;t load the team list right now. See{" "}
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
            >
              BehindTheMusicTree on GitHub
            </a>
            .
          </p>
        )}
      </section>
    </div>
  );
}

export default TeamPage;
