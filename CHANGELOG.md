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

- **`/about`**: **Contributors** section with cards for GitHub **public org members** (same data and `TeamMemberCard` as **`/team`**, via `getTeamMembersFromGithub()`), plus page **`metadata.title`** **About Us**.

### Changed

- **AudioMeta Webapp** project copy: drop framework name; describe it as a **web app** / **web companion** to AudioMeta Python.
- **`ProjectDemoSection`**: removed redundant **Quick demos** intro line under the heading.
- **Header**: add **Projects** (`/projects`); remove **How It Works** and **Roadmap** nav items. **Footer** Product column: **Projects** replaces **How It Works**; **Roadmap** and duplicate **Projects** removed from Community (GitHub remains).
- **`/how-it-works`** and **`/roadmap`** removed as pages; **`301`** redirects to **`/docs`** and **`/projects`** respectively. Homepage trust/FAQ copy updated; inline **How it works** section kept without a separate workflow page link.
- Nav and **`/about`** page title: **About** → **About Us** (header, footer, H1).

### Fixed

- **`ProductExternalLink`** (`inline` / **`prose`** / footer): **`align-middle`** on the anchor and **`1.1em`** GitHub (etc.) icon for **`prose`** so icon + label sit on the line with body copy instead of shifting up.
- Website Carbon footer badge: **retry** transient **503** / other **5xx** responses from `api.websitecarbon.com` with backoff; show **Unavailable** (with tooltip) when the API is clearly down, instead of only **No Result**.
- `ProjectBadgeStrip`: silence Next.js `next/image` console warning when badge height is set via CSS (inline `width: "auto"` alongside intrinsic `width` / `height`).
- Website Carbon badge **No Result** on localhost: inlined badge + optional `NEXT_PUBLIC_SITE_ORIGIN` (see `.env.example`); production still uses the current page URL.

### Changed

- Website Carbon: report URL from server-only **`ORG_URL`** via **`websiteCarbonReportPageHrefFromOrgUrl()`**; **`WebsiteCarbonBadge`** takes **`reportPageHref`** from **`Footer`** / **`/engagement`** (removed **`NEXT_PUBLIC_ORG_URL`**). **`/engagement`**: API reliability sentence with inline **view this site’s report on Website Carbon** link when **`ORG_URL`** resolves.
- **`sync-vercel-env`**: upserts **`ORG_URL`** from GitHub **`vars.DOMAIN_NAME`** (same value as Vercel **`DOMAIN_NAME`**); no **`NEXT_PUBLIC_ORG_URL`**.
- **`/engagement`**: lead paragraph ties **culture** to genre cartography and community-owned data; **Culture** section reframed around exhaustive cartography for discovery, crowd-sourced community power, and representation of established and emerging cultures; metadata description updated.
- **`/engagement`**: section order **Open source** → **Culture** → **Environment**; intro and metadata match. **Open source** section (why the org chose public repositories and community ownership). Environment section: **Website Carbon** calculator badge (same component as the footer) with short visitor-facing copy.
- **`/for-teachers`** removed as a dedicated page; **`301`** redirect to **`/docs`** in `next.config.ts`. Header and footer no longer link to For Teachers. Homepage, engagement, roadmap, and GrowTheMusicTree project audience copy updated to drop teacher/educator framing.
- **@behindthemusictree/assets** pinned to `v2.3.0` (`TheMusicTreeByline` uses `the-music-tree-lockup-horizontal` only + required `href`; portfolio unchanged in header).
- Homepage hero: larger **TheMusicTree** logo only; removed adjacent **BehindTheMusicTree** label.
- Footer: one bottom band (no extra rule above the CTA); **Contribute** only as the pill CTA, not duplicated under Support.

### Documentation

- **`.cursor/rules/sustainable-web.mdc`**: agent guidance for sustainable web design (lean bundles, assets, third parties, alignment with `/engagement` and Website Carbon).
- **ECOSYSTEM_READMES.md**: UI attribution pattern using `TheMusicTreeByline` from organization-assets; **ORGANIZATION_ASSETS.md**: mention shared byline component.
- README and `.env.example`: **`NEXT_PUBLIC_SITE_ORIGIN`** — local-dev-only override for the Website Carbon footer badge; ignored on deployed hosts.
- README and `.env.example`: **`NEXT_PUBLIC_DEBUG_WEBSITE_CARBON`** — opt-in console logging for the same badge on production/preview; dev logs always.
- README and `.env.example`: required **`ORG_URL`** for Website Carbon (sync from GitHub **`DOMAIN_NAME`** on Vercel); removed **`NEXT_PUBLIC_ORG_URL`**.
- README: Website Carbon **API** may be unavailable — retries, **Unavailable** / **No Result**, and report URL from **`ORG_URL`**.

### Added

- **`EngagementSectionHeading`**: inline SVG icons for **Open source** (code brackets), **Culture** (music), **Environment** (leaf) on **`/engagement`**.
- `src/lib/website-carbon-results-url.ts`: **`websiteCarbonReportPageHrefFromOrgUrl()`** (server-only) + **`WEBSITE_CARBON_SITE_HOME`**.
- **`/engagement`**: culture (how the ecosystem supports music culture and open collaboration) and environment (sustainable web design alignment, what we already do, tracks for improvement); linked from header and footer.
- **Skip to content** link (visible on keyboard focus) and `#main-content` landmark on `<main>` for quicker access to the page body.
- Footer: [Website Carbon](https://www.websitecarbon.com/) badge (light / dark styling follows system `prefers-color-scheme`).
- AudioMeta Python **Code snippets**: library example uses **`get_full_metadata`** (README: unified + technical + headers); CLI uses **`audiometa read`** for full metadata (not only `unified`).
- Project **Code snippets**: optional `result` field (illustrative output); AudioMeta Python examples show sample stdout / CLI text below the code.
- Dependency: **shiki** for syntax-highlighted project **Code snippets** (GitHub Light / GitHub Dark, `light-dark()` so colors follow system theme like the rest of the site).
- AudioMeta Python project page: optional **Code snippets** (library + CLI), aligned with the upstream README Quick Start / CLI sections, plus link to the full README.
- Project detail pages: **Quick demos** section (`ProjectDemoSection`) from optional `demos` in project data—cards with copy + external CTA (env-resolved or static URLs); optional `imageSrc` / `imageAlt` for screenshots in `public/`.
- Project detail pages: optional shields.io **badges** from project data (PyPI version + total downloads via Pepy + Python versions + GitHub stars for AudioMeta Python; GitHub stars for other repos).
- `ProjectBadgeStrip` renders linked shields.io badges via `next/image` (`unoptimized`); `next.config.ts` allows `img.shields.io`.
- `src/data/projects/`: single source for project copy (card summary, overview, optional `overviewExtended` marketing copy, features, related projects, outbound links, audience, documentation links); `projectTeasers` is derived for the homepage and `/projects`.
- `ProjectDetailTemplate` and `ProjectRichParagraph`: shared project detail layout and internal project links from structured segments.
- Project detail pages: **Who it’s for** and **Technical documentation** sections (still `max-w-3xl`).
- Dependency: `@behindthemusictree/assets` (git tag `v2.3.0`); `check:org-assets` runs before `next build`.
- Site icon from org assets: `src/app/icon.svg`; metadata icons in root layout.
- Project cards and project detail pages use app icons from `public/project-icons/` (sourced from organization-assets favicons).
- Docs: `docs/ORGANIZATION_ASSETS.md`; Cursor rule for shared asset usage.
- Project links: HearTheMusicTree **API**, GrowTheMusicTree **Web app**, AudioMeta **Web app** / **Live app** from env-driven URLs.
- `src/lib/subdomain-urls.ts`: resolves `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, and `AUDIOMETA_SUBDOMAIN` with optional `DOMAIN_NAME` composition.
- GitHub → Vercel env sync workflow syncs `DOMAIN_NAME`, `ORG_URL` (from same GitHub `DOMAIN_NAME` var), `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, `AUDIOMETA_SUBDOMAIN`, `MASTODON_URL` (production and preview).
- New open-source depth pages: `/docs`, `/how-it-works`, `/roadmap`, `/faq`, and `/for-teachers`.
- Client analytics tracker for CTA clicks (`data-track-event`) and scroll depth milestones (25/50/75/100).

### Documentation

- `docs/ECOSYSTEM_READMES.md`: AudioMeta Python slug path `/projects/audiometa-python`.
- README: state this repo as the canonical source for org project presentation on the public site; point to themusictree.org and organization-assets.

### Changed

- AudioMeta Python project URL is **`/projects/audiometa-python`** (was `/projects/audiometa`); `next.config.ts` permanent redirect from the old path.
- AudioMeta Python **Who it’s for**: explicitly includes Python users and CLI-only users.
- Project data split into `src/data/projects/` (`types.ts`, `constants.ts`, one module per project, `index.ts` barrel); `@/data/projects` imports unchanged.
- **Quick demos** intro line: clearer, more inviting wording (no “deployment” jargon).
- AudioMeta Python: lead overview is library description only (live demo lives under **Quick demos** and links); card summary and features no longer say “used by the web app”; `overviewExtended` uses a community OSS tone.
- Project detail header: larger centered icon, title below; status pill sits in the same row as shields badges (centered, wraps on small screens).
- `next.config.ts`: allow `next/image` loads from `img.shields.io` (project badge strip).
- Project pages: optional `overviewExtended` marketing copy in project data; **Technical documentation** section clarifies READMEs hold technical depth.
- Homepage and `/projects` import `projectTeasers` from `@/data/projects` (no separate teaser file).
- Project detail routes (`/projects/*`) are thin pages that render `ProjectDetailTemplate` from the same `projects` data as listings.
- Homepage: project teaser grid section title is **Ecosystem projects** (was “Feature highlights”).
- AudioMeta **Web app** / **Live app** icon-only link buttons use the greyscale mark (`public/project-icons/audiometa-greyscale.svg` from organization-assets `v1.1.2`); full-color `audiometa.svg` stays on cards and page headers.
- `ProductExternalLink`: optional `iconSrc` for `presentation="icon"` (custom mark instead of the default glyph).
- Project **Links** sections: web / live / API outbound links use `ProductExternalLink` with `kind="website"` and the same icon-only control as GitHub and PyPI (AudioMeta Python, AudioMeta Webapp, GrowTheMusicTree, HearTheMusicTree).
- Renamed GrowTheMusicTree env key `GTMT_SUBDOMAIN` → `GTMT_FRONT_SUBDOMAIN` (app + Vercel sync).
- Required env for `next dev` / `next build`: `DOMAIN_NAME`, `ORG_URL`, `HTMT_API_SUBDOMAIN`, `GTMT_FRONT_SUBDOMAIN`, `AUDIOMETA_SUBDOMAIN`, `MASTODON_URL` (validated in `next.config.ts`).
- `.env.example` documents the above, `MASTODON_URL`, and optional `GITHUB_TOKEN`.
- `ProjectCard` optional icon props with safe rendering (avoids empty `Image` `src` on the homepage teaser grid).
- Reworked homepage into a multi-section landing flow with section-level links to docs, workflow, FAQ, roadmap, and contribution paths.
- Updated header and footer navigation to the new hybrid structure and unified primary CTA (`Contribute`).
- `/docs` Association Welcome Guide links to the GitHub org profile README (`GITHUB_ORG_WELCOME_GUIDE_URL`) instead of duplicating content on the marketing site.
- Contact page: removed consulting from the “Open to” line.
- Contact page: Discussions row links to `GITHUB_ORG_DISCUSSIONS_URL` (org Discussions tab).
- Contact page: clarified that “Issues” means GitHub Issues per org repository.
- Contact Mastodon link reads full profile URL from `MASTODON_URL` (set as GitHub Environment variable for the Vercel sync workflow).

### Removed

- `src/data/project-teasers.ts` (superseded by `src/data/projects/`).

### Fixed

- Tailwind: added `@source` in `globals.css` so utility classes are detected reliably on all build environments (avoids “classes in DOM but no `.flex` rules in CSS”).
- Homepage project teasers no longer triggered React/Next warnings for empty image `src`.
- Tailwind: set PostCSS `base` to the repo root; pin `tailwindcss` in `turbopack.resolveAlias` to `node_modules/tailwindcss/index.css` so `next dev` does not resolve imports from a parent workspace path (e.g. `$HOME/package.json` + `./git`).

## [0.1.0]

### Added

- Initial Next.js app (App Router, TypeScript, Tailwind).
- Contributing and docs: CONTRIBUTING.md, README, CHANGELOG, PR template, docs (STYLE_GUIDE, SEMANTIC_HTML, VERSIONING, SEMVER_GUIDE, DATA_ATTRIBUTES, testing).
- Scripts: `dev`, `build`, `start`, `launch` (build and run). VS Code launch config for dev and build-and-run.

[Unreleased]: https://github.com/YOUR-ORG/the-music-tree-frontend/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/YOUR-ORG/the-music-tree-frontend/releases/tag/v0.1.0
