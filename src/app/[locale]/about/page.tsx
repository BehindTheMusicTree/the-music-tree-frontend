import type { Metadata } from "next";
import { ProductExternalLink } from "@/components/ProductExternalLink";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import {
  GITHUB_ORG_DISPLAY_NAME,
  GITHUB_ORG_PROFILE_URL,
} from "@/constants/github-org";
import { getServerI18n } from "@/i18n/server";
import { pageMetadata } from "@/i18n/page-metadata";
import { Link } from "@/i18n/navigation";
import { getTeamMembersFromGithub } from "@/lib/github-org-team";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/about");
}

async function AboutPage() {
  const { language } = await getServerI18n();
  const teamMembers = await getTeamMembersFromGithub();
  const copy =
    language === "fr"
      ? {
          title: "A propos",
          mission: "Notre mission",
          vision: "Notre vision",
          impact: "Notre impact",
          contributors: "Contributeurs",
          missionBody:
            "BehindTheMusicTree vise a creer une reference mondiale de confiance qui sert de base a la decouverte, l'exploration et la comprehension de la musique. Avec un cadre complet, nous construisons des outils qui refletent toute la diversite des cultures musicales.",
          visionBody:
            "Construire la reference ultime des genres musicaux et transformer la facon dont le monde navigue et comprend la musique.",
          impactBody:
            "Notre travail contribue a preserver et organiser le patrimoine musical mondial. En aidant les gens a decouvrir et relier des cultures musicales diverses, nous construisons un paysage culturel plus inclusif.",
          contributorsBody:
            "Personnes qui choisissent de s'afficher publiquement comme membres de",
          teamFallback:
            "Nous n'avons pas pu charger les membres depuis GitHub pour le moment. Voir",
          seeAlso: "Voir aussi la page",
          seeAlsoEnd: "pour comprendre comment nous hebergeons les projets.",
        }
      : {
          title: "About Us",
          mission: "Our Mission",
          vision: "Our Vision",
          impact: "Our Impact",
          contributors: "Contributors",
          missionBody:
            "BehindTheMusicTree aims to create a global, authoritative reference that serves as the foundation for music discovery, exploration, and understanding. Through our comprehensive framework, we build tools that reflect the full diversity of global music culture, empowering communities to share and celebrate their musical traditions.",
          visionBody:
            "Building the ultimate music genre reference and transforming the way the world navigates and understands music—where your journey, your collection, and your community thrive.",
          impactBody:
            "Our work contributes to preserving and organizing our global musical heritage. By building tools that help people discover, understand, and connect with diverse music cultures worldwide, we are creating a more inclusive and accessible cultural landscape.",
          contributorsBody:
            "People who choose to list themselves publicly as members of",
          teamFallback:
            "We couldn't load people from GitHub right now. See",
          seeAlso: "See also the",
          seeAlsoEnd: "page for how we host projects on GitHub.",
        };
  const teamGridClass =
    teamMembers.length > 1
      ? "grid gap-6 sm:grid-cols-2"
      : "mx-auto grid max-w-xl gap-6";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>

      <section className="mb-10" aria-labelledby="mission-heading">
        <h2
          id="mission-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.mission}
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.missionBody}
        </p>
      </section>

      <section className="mb-10" aria-labelledby="vision-heading">
        <h2
          id="vision-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.vision}
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.visionBody}
        </p>
      </section>

      <section className="mb-10" aria-labelledby="impact-heading">
        <h2
          id="impact-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.impact}
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.impactBody}
        </p>
      </section>

      <section className="mb-10" aria-labelledby="contributors-heading">
        <h2
          id="contributors-heading"
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {copy.contributors}
        </h2>
        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {copy.contributorsBody}{" "}
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
            {copy.teamFallback}{" "}
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
        {copy.seeAlso}{" "}
        <Link
          href="/team"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          {GITHUB_ORG_DISPLAY_NAME}
        </Link>{" "}
        {copy.seeAlsoEnd}
      </p>
    </div>
  );
}

export default AboutPage;
