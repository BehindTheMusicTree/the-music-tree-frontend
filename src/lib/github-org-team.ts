import { GITHUB_ORG_SLUG } from "@/constants/github-org";
import {
  teamMemberOverrides,
  type TeamMember,
  type TeamMemberOverride,
} from "@/data/team";

type GithubPublicMember = {
  login: string;
};

type GithubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
};

/** Separates Next.js fetch Data Cache entries: `Authorization` is not part of the key. */
type FetchBucket = "auth" | "anon";

const DEFAULT_BIO =
  "Public member of the BehindTheMusicTree organization on GitHub.";
const DEFAULT_ROLE = "Contributor";

/** GitHub rejects requests without a descriptive User-Agent (often HTTP 403). */
const GITHUB_USER_AGENT =
  "TheMusicTree-Frontend/1.0 (+https://github.com/BehindTheMusicTree/the-music-tree-frontend)";

function githubApiUrl(path: string, bucket: FetchBucket): string {
  const sep = path.includes("?") ? "&" : "?";
  return `https://api.github.com${path}${sep}nck=${bucket}`;
}

async function githubFetchJson<T>(
  path: string,
  bucket: FetchBucket,
  bearer?: string,
): Promise<T> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": GITHUB_USER_AGENT,
  };
  const token = bearer?.trim();
  if (token && bucket === "auth") {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(githubApiUrl(path, bucket), {
    headers,
    next: { revalidate: 3600 },
  });

  if (res.status === 401 && bucket === "auth" && token) {
    return githubFetchJson<T>(path, "anon");
  }

  // Token present but forbidden for this call — try anonymous bucket (same cache separation as 401).
  if (res.status === 403 && bucket === "auth" && token) {
    return githubFetchJson<T>(path, "anon");
  }

  if (!res.ok) {
    throw new Error(`GitHub API ${path}: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

/**
 * Public GitHub REST endpoints. Uses `GITHUB_TOKEN` when set (higher rate limits);
 * on 401, retries anonymously using a different URL bucket so the Data Cache cannot
 * reuse a failed authed response for the anonymous case.
 */
async function githubFetch<T>(path: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN?.trim();
  if (token) {
    return githubFetchJson<T>(path, "auth", token);
  }
  return githubFetchJson<T>(path, "anon");
}

function mergeLinks(
  profileUrl: string,
  override?: TeamMemberOverride,
): TeamMember["links"] {
  const base = [{ label: "GitHub", href: profileUrl }];
  const extra = override?.links ?? [];
  return [...base, ...extra];
}

function userToTeamMember(user: GithubUser): TeamMember {
  const login = user.login;
  const override = teamMemberOverrides[login];
  const name = user.name?.trim() || login;
  const bio =
    override?.bio ??
    (user.bio?.trim() ? user.bio.trim() : DEFAULT_BIO);
  const role = override?.role ?? DEFAULT_ROLE;

  return {
    githubLogin: login,
    name,
    role,
    bio,
    imageSrc: user.avatar_url,
    links: mergeLinks(user.html_url, override),
  };
}

/**
 * Public members of the org plus profile details (name, bio, avatar).
 * Optional `GITHUB_TOKEN` increases rate limits; invalid tokens fall back to anonymous.
 */
export async function getTeamMembersFromGithub(): Promise<TeamMember[]> {
  try {
    const publicMembers = await githubFetch<GithubPublicMember[]>(
      `/orgs/${GITHUB_ORG_SLUG}/public_members`,
    );

    const users = await Promise.all(
      publicMembers.map((m) => githubFetch<GithubUser>(`/users/${m.login}`)),
    );

    return users
      .map(userToTeamMember)
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "[github-org-team] Failed to load public org members:",
        err,
      );
    }
    return [];
  }
}
