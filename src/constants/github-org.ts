/** GitHub organization slug (API + profile URL). */
export const GITHUB_ORG_SLUG = "behindthemusictree";

export const GITHUB_ORG_PROFILE_URL = `https://github.com/${GITHUB_ORG_SLUG}`;

/** Organization Discussions tab (`/orgs/…/discussions`, not `/{org}/discussions`). */
export const GITHUB_ORG_DISCUSSIONS_URL = `https://github.com/orgs/${GITHUB_ORG_SLUG}/discussions`;

/** Open issues across organization repositories (GitHub search). */
export const GITHUB_ORG_ISSUES_SEARCH_URL = `https://github.com/search?q=org%3A${GITHUB_ORG_SLUG}+is%3Aissue&type=issues`;

/**
 * Association welcome guide: rendered from the org profile README
 * (maintained in the GitHub `.github` repo, e.g. `profile/README.md`).
 * Single source of truth—link here instead of duplicating on the marketing site.
 */
export const GITHUB_ORG_WELCOME_GUIDE_URL = GITHUB_ORG_PROFILE_URL;

/** Display name for prose (GitHub org page title). */
export const GITHUB_ORG_DISPLAY_NAME = "BehindTheMusicTree";
