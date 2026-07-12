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

### Fixed

- Org assets dependency: switched from the stale `@behindthemusictree/assets` package to `@behindthemusictree/brand`, the package actually published from the org's asset source repo. `GITHUB_ORG_DISPLAY_NAME` now sources `ORG_NAME` from the package instead of a hardcoded string, and throws at import time if unset. Mark asset subpaths moved from `/brand/*` to `/marks/*` to match the new package's exports map.

## [1.0.1] - 2024-06-05

### Added

- Hear The Music Tree project page: restored GitHub outbound link
- Hear The Music Tree project page: architecture diagram showing relationships between HTMT, AudioFingerprinter, MusicBrainz, GrowTheMusicTree, and audiometa-python

## [1.0.0] - 2024-06-05

### Removed

- Hear The Music Tree project page: removed GitHub outbound link

## [0.2.0]

### Added

- Audio Fingerprinter project page (`/projects/audio-fingerprinter`) with listing card and EN/FR copy
- Contact page: open callout with two-column channel grid (issues, discussions, Discord, socials, newsletter)
- Contribute page: Where to start section with org-asset channel links and newsletter block; Sponsor section with Tipeee and GitHub Sponsors
- Header: GitHub Sponsors embed (`BtmtSponsorButton`) in desktop nav and mobile menu
- SEO: `metadataBase`, Open Graph/Twitter defaults, OG image (1200×630), sitemap, robots.txt, JSON-LD (Organization, WebSite, FAQPage), per-route `generateMetadata`
- About page: Contributors section sourced from GitHub org public members
- Newsletter: double opt-in subscribe form on homepage, `/contact`, and `/newsletter`; `/newsletter/confirmed` landing page
- Contact page: icon-only social controls (Discord, LinkedIn, Mastodon, X, email)
- Skip to content link and `#main-content` landmark
- Footer: Website Carbon badge with light/dark theme support
- Project detail pages: Quick demos, shields.io badges, Shiki code snippets, Who it’s for, Technical documentation sections
- Project data: structured `ProjectDefinition` per ecosystem project in `src/data/projects/`
- Engagement page: culture and environment sections; inline SVG section icons; linked from header and footer
- Analytics: CTA click tracking (`data-track-event`) and scroll depth milestones (25/50/75/100%)
- Pages: `/docs`, `/how-it-works`, `/roadmap`, `/faq`, `/for-teachers`

### Changed

- `@behindthemusictree/assets` 6.4.2 → 7.0.6 (adds Audio Fingerprinter brand assets)
- Audio Fingerprinter copy aligned with upstream README; dark-mode icon uses `invertIconInDark`; GitHub/README links and stars badge driven by `AUDIO_FINGERPRINTER_GITHUB_REPO_URL`
- Project cards: full-card link replaces the bottom “Learn more” link; `learnMore` i18n key removed
- Header: language switcher converted to `<details>`/`<summary>` dropdown with EN/FR labels (no border on closed state)
- i18n: messages loaded via dynamic import in `src/i18n/request.ts`; `getServerI18n` uses `getMessages()` from next-intl/server; `Messages` type derived from EN JSON only
- i18n routing: `localePrefix: as-needed` — English unprefixed, French under `/fr/...`; `NextIntlClientProvider` replaces `LanguageProvider`/`useI18n`; internal links use `@/i18n/navigation` `Link`
- SEO metadata: per-route hreflang, canonical, and Open Graph URLs; sitemap includes locale alternates
- Contact page: shorter channel descriptions; removed intro paragraph and social section blurb
- Contact page: newsletter row is plain `NewsletterSubscribeForm` (no pill link or card wrapper)
- Contribute page: removed Ways to Contribute, What Makes a Great Contribution, and Next Steps sections; intro is one line
- Newsletter form: centered email field, submit button, and status line; `contact`/`hero`/`contribute` variants
- i18n (FR): `hear-the-music-tree` teaser uses “cloud” instead of “nuage”
- Header: Contribute precedes language menu on desktop; mobile slide-down panel shows nav links and Contribute only
- Header: support controls (Tipeee, GitHub Sponsors) moved from nav to `/contribute`
- Header: Projects added to nav; How It Works and Roadmap removed; mark-only below `lg`, horizontal byline from `lg`
- Footer: Projects replaces How It Works in the Product column; Newsletter links to `/newsletter` instead of embedding the form; single bottom band with Contribute as the sole pill CTA
- Homepage: `h1` hero title with `h2` tagline; TheMusicTree logo only (removed BehindTheMusicTree label); multi-section landing flow
- Engagement page: section order Open source → Culture → Environment
- Website Carbon: report URL derived from `NEXT_PUBLIC_SITE_ORIGIN`; retries on transient 5xx; shows Unavailable on repeated failure
- `NEXT_PUBLIC_SITE_ORIGIN`: required at build time; fails if not a valid `https://` origin
- Brevo subscribe: double opt-in only; `BREVO_DOI_TEMPLATE_ID` and `BREVO_DOI_REDIRECT_PATH` now required
- AudioMeta Webapp copy: described as a web app/companion (no framework name)
- AudioMeta Python project URL changed to `/projects/audiometa-python`; permanent redirect from old path
- `ProductExternalLink` prose variant: icon vertically aligned with body text
- About/nav title: About → About Us
- `/for-teachers`: 301 redirect to `/docs`; educator framing removed from audience copy
- `/how-it-works`, `/roadmap`: 301 redirects to `/docs` and `/projects`

### Fixed

- Project cards: `dark:hidden` on default icon only applied when `iconSrcDark` is set (was hiding all icons in dark mode)
- Audio Fingerprinter dark mode: uses `invertIconInDark` instead of `iconSrcDark` (org SVGs are black-filled, invisible on dark backgrounds)
- Project cards: description falls back to project data summary when locale teaser key is missing
- Newsletter form and header components: opt out of React Compiler (`”use no memo”`) to prevent SSR/client className mismatches with Next 16 + `reactCompiler: true`
- `globals.css`: hide `<summary>` disclosure marker with plain CSS instead of Tailwind utility (invalid CSS under Tailwind v4/Turbopack)
- `src/proxy.ts`: moved next to `src/app/` so Next.js discovers it; added default export function for Next 16 compatibility
- Root layout: `<html>` and `<body>` in `src/app/layout.tsx` (Next.js 16 requirement); `[locale]` layout no longer nests a second document
- FAQ JSON-LD and project Open Graph: page URLs are fully absolute
- shields.io badges: `1×1` width/height props to silence Next.js `next/image` dev warning
- Tailwind: added `@source` directive and pinned `tailwindcss` in `turbopack.resolveAlias` to prevent parent workspace path resolution

### Removed

- `projectCard.learnMore` i18n key (EN/FR)
- `negotiator`, `@formatjs/intl-localematcher`, `@types/negotiator` (replaced by next-intl middleware)
- `LanguageProvider`, `src/i18n/locale-detection.ts`, `src/i18n/request-locale.ts`
- `ORG_URL` env var (replaced by `NEXT_PUBLIC_SITE_ORIGIN`)
- `NewsletterExternalLink`, `NEXT_PUBLIC_BREVO_NEWSLETTER_URL`, `src/constants/newsletter.ts`
- `MASTODON_URL` as a required build variable
- Homepage: `NewsletterSubscribeForm` from hero section
- Header: Home and Docs primary nav links
- `src/data/project-teasers.ts` (superseded by `src/data/projects/`)

### Documentation

- `docs/community/`: Discord welcome and Tipeee page copy (`discord-welcome.md`, `tipeee.md`, `tipeee-description.html`)
- `docs/ECOSYSTEM_READMES.md`: TheMusicTreeByline usage, AudioMeta Python slug
- `.cursor/rules/translation-alignment.mdc`: FR terminology rule (cloud vs nuage)
- `.cursor/rules/sustainable-web.mdc`: guidance for sustainable web design
- README and `.env.example`: updated env var documentation

### CI

- Dependabot auto-merge: removed `hmarr/auto-approve-action`; auto-merge now gated on Vercel deployment and required checks only
- Sync Vercel env: removed `ORG_URL`; added `BREVO_*` variables; `MASTODON_URL` optional; `AUDIO_FINGERPRINTER_GITHUB_REPO_URL` optional

## [0.1.0]

### Added

- Initial Next.js app (App Router, TypeScript, Tailwind).
- Contributing and docs: CONTRIBUTING.md, README, CHANGELOG, PR template, docs (STYLE_GUIDE, SEMANTIC_HTML, VERSIONING, SEMVER_GUIDE, DATA_ATTRIBUTES, testing).
- Scripts: `dev`, `build`, `start`, `launch` (build and run). VS Code launch config for dev and build-and-run.

[Unreleased]: https://github.com/YOUR-ORG/the-music-tree-frontend/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/YOUR-ORG/the-music-tree-frontend/releases/tag/v0.1.0
