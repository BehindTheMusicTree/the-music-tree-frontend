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
- GitHub → Vercel env sync workflow syncs `DOMAIN_NAME`, `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, `AUDIOMETA_SUBDOMAIN` (production and preview); `BACKEND_BASE_URL` optional for `NEXT_PUBLIC_BACKEND_BASE_URL`.

### Changed

- Renamed GrowTheMusicTree env key `GTMT_SUBDOMAIN` → `GTMT_FRONT_SUBDOMAIN` (app + Vercel sync).
- Required env for `next dev` / `next build`: `DOMAIN_NAME`, `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, `AUDIOMETA_SUBDOMAIN` (validated in `next.config.ts`).
- `.env.example` documents the above and optional `GITHUB_TOKEN`.
- `ProjectCard` optional icon props with safe rendering (avoids empty `Image` `src` on the homepage teaser grid).

### Fixed

- Homepage project teasers no longer triggered React/Next warnings for empty image `src`.

## [0.1.0]

### Added

- Initial Next.js app (App Router, TypeScript, Tailwind).
- Contributing and docs: CONTRIBUTING.md, README, CHANGELOG, PR template, docs (STYLE_GUIDE, SEMANTIC_HTML, VERSIONING, SEMVER_GUIDE, DATA_ATTRIBUTES, testing).
- Scripts: `dev`, `build`, `start`, `launch` (build and run). VS Code launch config for dev and build-and-run.

[Unreleased]: https://github.com/YOUR-ORG/the-music-tree-frontend/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/YOUR-ORG/the-music-tree-frontend/releases/tag/v0.1.0
