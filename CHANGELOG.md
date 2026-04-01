# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). See [docs/SEMVER_GUIDE.md](docs/SEMVER_GUIDE.md) for when to bump MAJOR, MINOR, or PATCH.

## Table of Contents

- [Changelog Best Practices](#changelog-best-practices)
- [Unreleased](#unreleased)
- [0.1.0](#010)

## Changelog Best Practices

- Add entries to the **`[Unreleased]`** section when opening or updating a PR.
- Group changes under: **Added**, **Changed**, **Fixed**, **Removed**, **Documentation**, **CI**, etc.
- Use ISO 8601 dates: YYYY-MM-DD.
- During releases, move `[Unreleased]` content into a new versioned section. See [docs/VERSIONING.md](docs/VERSIONING.md).

## [Unreleased]

### Added

- Dependency: `@behindthemusictree/assets` (git tag `v1.1.1`); `check:org-assets` runs before `next build`.
- Site icon from org assets: `src/app/icon.svg`; metadata icons in root layout.
- Project cards and project detail pages use app icons from `public/project-icons/` (sourced from organization-assets favicons).
- Docs: `docs/ORGANIZATION_ASSETS.md`; Cursor rule for shared asset usage.
- Project links: HearTheMusicTree **API**, GrowTheMusicTree **Web app**, AudioMeta **Web app** / **Live app** from env-driven URLs.
- `src/lib/subdomain-urls.ts`: resolves `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, and `AUDIOMETA_SUBDOMAIN` with optional `DOMAIN_NAME` composition.
- **Live app** link on AudioMeta Webapp uses `IconWebsite`; optional **Web app** link on AudioMeta Python.
- GitHub → Vercel env sync workflow syncs `DOMAIN_NAME`, `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, `AUDIOMETA_SUBDOMAIN`, `MASTODON_URL` (production and preview).
- New open-source depth pages: `/docs`, `/how-it-works`, `/roadmap`, `/faq`, and `/for-teachers`.
- Client analytics tracker for CTA clicks (`data-track-event`) and scroll depth milestones (25/50/75/100).

### Changed

- Renamed GrowTheMusicTree env key `GTMT_SUBDOMAIN` → `GTMT_FRONT_SUBDOMAIN` (app + Vercel sync).
- Required env for `next dev` / `next build`: `DOMAIN_NAME`, `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, `AUDIOMETA_SUBDOMAIN`, `MASTODON_URL` (validated in `next.config.ts`).
- `.env.example` documents the above, `MASTODON_URL`, and optional `GITHUB_TOKEN`.
- `ProjectCard` optional icon props with safe rendering (avoids empty `Image` `src` on the homepage teaser grid).
- Reworked homepage into a multi-section landing flow with section-level links to docs, workflow, FAQ, roadmap, and contribution paths.
- Updated header and footer navigation to the new hybrid structure and unified primary CTA (`Contribute`).
- `/docs` Association Welcome Guide links to the GitHub org profile README (`GITHUB_ORG_WELCOME_GUIDE_URL`) instead of duplicating content on the marketing site.
- Contact page: removed consulting from the “Open to” line.
- Contact page: Discussions row links to `GITHUB_ORG_DISCUSSIONS_URL` (org Discussions tab).
- Contact page: clarified that “Issues” means GitHub Issues per org repository.
- Contact Mastodon link reads full profile URL from `MASTODON_URL` (set as GitHub Environment variable for the Vercel sync workflow).

### Fixed

- Homepage project teasers no longer triggered React/Next warnings for empty image `src`.
- Tailwind: set PostCSS `base` to the repo root; pin `tailwindcss` in `turbopack.resolveAlias` to `node_modules/tailwindcss/index.css` so `next dev` does not resolve imports from a parent workspace path (e.g. `$HOME/package.json` + `./git`).

## [0.1.0]

### Added

- Initial Next.js app (App Router, TypeScript, Tailwind).
- Contributing and docs: CONTRIBUTING.md, README, CHANGELOG, PR template, docs (STYLE_GUIDE, SEMANTIC_HTML, VERSIONING, SEMVER_GUIDE, DATA_ATTRIBUTES, testing).
- Scripts: `dev`, `build`, `start`, `launch` (build and run). VS Code launch config for dev and build-and-run.

[Unreleased]: https://github.com/YOUR-ORG/the-music-tree-frontend/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/YOUR-ORG/the-music-tree-frontend/releases/tag/v0.1.0
