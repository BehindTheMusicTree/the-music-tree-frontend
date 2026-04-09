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

### Changed

- **`/contribute`**: removed **Ways to contribute**, **What makes a great contribution**, and **Next steps** (and matching **`messages.contribute`** keys **EN**/**FR**); **`contribute.intro`** is a short line only. **Docs** / welcome guide links stay on **`/docs`**.
- **Header**: language control is a **dropdown** (**`<details>`** / **`<summary>`**, same pattern as **audiometa-frontend** **`LanguageSwitcher`**): locale links use **`Link`** from **`@/i18n/navigation`** with **`hrefLang`**; analytics **`language_switched`** with **`data-track-label`** **`${from}_to_${to}`**. Copy in **`messages`** namespace **`LanguageSwitcher`**.
- **i18n**: Translatable UI strings live in **`src/messages/en.json`** and **`src/messages/fr.json`**, loaded with dynamic **`import(\`../messages/${locale}.json\`)`** in **`src/i18n/request.ts`** (same mechanism as **audiometa-frontend**). **`src/i18n/messages.ts`** exports **`Messages`** as **`typeof`** English JSON only; **`getServerI18n`** uses **`getMessages()`** from **next-intl/server** instead of a bundled TS dictionary.
- **i18n** (**audiometa-frontend** pattern): **next-intl** with **`defineRouting`**, **`localePrefix: as-needed`** (English unprefixed, French under **`/fr/...`**), **`createNextIntlPlugin`**, **`src/proxy.ts`** (required next to **`src/app`**), **`src/i18n/request.ts`**, **`src/i18n/navigation.ts`**, and **`src/app/[locale]/...`**. **`LanguageProvider`** / **`useI18n`** removed; layout uses **`NextIntlClientProvider`**; header language uses **`LanguageSwitcher`** (**`Link`** + locale from **`@/i18n/navigation`**). Internal links use **`Link`** from **`@/i18n/navigation`** with locale-agnostic **`href`s** (e.g. **`/contact`**).
- **Skip link**: localized via **`getTranslations('layout')`** in the **`[locale]`** layout.
- **Project listing cards** (home + `/projects`): localized teaser copy and **Learn more** via **`messages.projectCard`**.
- **Header**: **Contribute** comes before the language **menu** on the desktop bar (language to the right of the CTA); below **`sm`**, language stays in the top bar and the slide-down panel lists links plus **Contribute** only.
- **`/contribute` — Where to start**: intro line (**`whereToStart.intro`**, EN/FR); **`discordLabel`** / **`githubLabel`** in **`messages`** (no hardcoded pill text); tighter spacing (**`gap-4`**, **`mt-1.5`** on descriptions); **`md`**: two-column grid; **`sr-only`** **`h3`** per channel; card padding **`p-4`**; each grid cell **`flex flex-col items-center text-center`** so pills and blurbs are centered; org-asset pills use **`*SocialLinkColored`** / **`InformationLinkColored`** / **`DiscussionLinkColored`**; newsletter block (**`messages.newsletter`** **`contributeSectionTitle`** / **`contributeSectionLead`**) below the channel grid inside the same card (**`ContributeNewsletterSection`** removed).
- **`Newsletter` copy**: shared **`messages.newsletter`** (**EN** / **FR** same keys: page + confirmed + contribute section + **`linkLabel`** for footer); **`newsletterForm`** only for the control; **`page-metadata`** for **`/newsletter`** and **`/newsletter/confirmed`** sourced from those JSON files (**`footer.newsletter`** removed). **`/contribute`** newsletter signup lives inside **Where to start** (below the channel cards) via **`contributeSectionTitle`** / **`contributeSectionLead`** + **`variant="contribute"`**. **`contributeSectionLead`**: dropped **no spam** / **pas de spam** clause (EN + FR).
- **`/contribute` — Sponsor**: mini-cards **`flex flex-col items-center text-center`** (lead + CTA centered); mini-card grid (**Tipeee** first / left from **`md`**); each sponsor path shows **`tipeeeLead`** / **`githubLead`** above the control only (no body copy under buttons; section **`intro`** and old description keys removed). GitHub pill uses **`IconGitHubSponsorsColored`** + **`githubCta`** + **`GITHUB_ORG_SPONSORS_URL`**; Tipeee uses **`IconTipeeeColored`** inside **`ICON_LINK_TIPEEE_WORDMARK_CLASS`** (wide wordmark from org assets, not the square **`ICON_LINK_ICON_ONLY_CLASS`**) plus widget **`data-*`** / **`tipeee-project-cart-simple`**.
- **`/contact`**: newsletter row is only **`NewsletterSubscribeForm`** (no pill to **`/newsletter`**, no bordered / tinted card wrapper). **`NewsletterSubscribeForm`**: **`contact`** variant (bordered field), **`hero`** unchanged; **`contribute`** variant (full-width wrap, centered status) for **`/contribute`**. Icon-only social controls use shared **`ICON_LINK_ICON_ONLY_CLASS`** from **`src/constants/icon-link-pill.ts`**.

### Removed

- **Dependencies**: **`negotiator`**, **`@formatjs/intl-localematcher`**, **`@types/negotiator`** (locale negotiation handled by **next-intl** middleware).
- **`LanguageProvider`**, **`src/i18n/locale-detection.ts`**, **`src/i18n/request-locale.ts`**.

### Changed

- **Language switcher** (**`LanguageSwitcher`**): locale labels are **EN** / **FR** in both **`en`** and **`fr`** message files (not full language names); closed-state **`<summary>`** has no border (hover background only).

### Fixed

- **Hydration**: **`Header`**, **`LanguageSwitcher`**, and **`HeaderTheMusicTreeBrand`** opt out of the React Compiler (**`"use no memo"`**) to avoid SSR/client **`className`** normalization mismatches in dev/prod with **Next 16** + **`reactCompiler: true`**.
- **Build**: **`globals.css`** — hide **`<summary>`** disclosure marker with plain CSS (**`.btmt-hide-details-marker`**) instead of Tailwind **`[&::-webkit-details-marker]:hidden`**, which could emit invalid CSS under Tailwind v4 / Turbopack.
- **Header**: mobile menu **Contribute** matches content width (not full-bleed).
- **Header**: below **`sm`**, **language** stays in the top bar next to the menu control; the slide-down panel only lists primary links plus **Contribute** (no language duplicate).
- **Header**: **TheMusicTree** mark uses **`next/image`** dimensions that match **`the-music-tree-mark.svg`** (551×567), sits in a single flex group with **`z-10`**, and the horizontal lockup (**`TheMusicTreeByline`**) shows from **`xl`** up only so mid-width viewports keep the compact mark visible beside nav.
- **Root layout**: **`src/app/layout.tsx`** now includes **`<html>`** and **`<body>`** (Next.js 16 requirement); fonts and global shell classes live there. **`[locale]`** layout no longer nests a second document; **`HtmlLangSync`** sets **`document.documentElement.lang`** to match the active locale (same idea as **audiometa-frontend**).
- **`src/proxy.ts`**: Next.js only discovers **`proxy`** / **`middleware`** next to **`src/`** when the app lives under **`src/app`** (repo-root **`proxy.ts`** was ignored), which broke **`/`** and locale routing without **next-intl** handling the request. Next.js **16** also requires a default **`function proxy(request)`** (not **`export default createMiddleware(...)`** alone) or dev fails with **`adapterFn is not a function`** / **`proxy.ts` parse** errors and routes **404**.
- **FAQ JSON-LD** and **project Open Graph**: absolute page URLs use **`absoluteUrlForLocale`** so **`url`** is a full origin + path.
- **`src/i18n/messages.ts`**: removed duplicate **`en`** keys (**`footer`**, **`newsletterForm`**, **`project`**) and moved the French strings into **`fr`** so **`Messages`** is valid.
- **Project detail routes**: **`ProjectDetailTemplate`** and **`ProjectDemoSection`** no longer call **`useI18n()`** during server render; copy comes from **`getServerI18n()`** (and demo headings passed as props) so **`next build`** prerender succeeds.

### Documentation

- **[docs/community/](docs/community/README.md):** community and fundraising copy outside the site build — **[discord-welcome.md](docs/community/discord-welcome.md)** (Discord welcome / onboarding, EN), **[tipeee.md](docs/community/tipeee.md)** (full Tipeee page text for Andreas Garcia, milestones ~150–1000 €/mois, FR). Replaces **`docs/DISCORD_WELCOME.md`** (moved under **`community/`**).
- **[docs/community/tipeee.md](docs/community/tipeee.md):** description en **texte à coller** ; jalons en **liste numérotée** (Tipeee) ; tableau Markdown seulement en **notes dépôt** ; **[tipeee-description.html](docs/community/tipeee-description.html)** (aperçu **fond blanc**, liste ordonnée).
- **Positioning ([docs/community/](docs/community/README.md)):** **GrowTheMusicTree** = outil crowd-sourcé pour **cartographier tous les genres musicaux** ; **TheMusicTree** = écosystème open source plus large. Textes **tipeee** / **discord-welcome** / **README** alignés.
- **[docs/community/tipeee.md](docs/community/tipeee.md)** / **[tipeee-description.html](docs/community/tipeee-description.html):** description sans **« écosystème »** ; **Présentation** : développement / maintenance de l’outil, du **site web** et du **service en ligne** ; lien avec les contributeur·ices. Ton **grand public** : **Pourquoi ce soutien** et **jalons** allégés (pas **infra**, **issues**, **onboarding**, **roadmap**). Plus de **TheMusicTree** comme « projet plus large » dans le texte à coller ; **Liens utiles** sans intitulé **TheMusicTree** (URLs inchangées).
### Changed

- **i18n groundwork**: added centralized message dictionaries (**`src/i18n/messages.ts`**), locale routing helpers (**`src/i18n/routing.ts`**), and middleware-based locale URLs (**`/en/*`**, **`/fr/*`**). Header language switch (desktop + mobile) now changes locale-prefixed URLs and powers translated sections on **`/contribute`**.
- **Localization rollout**: localized shared UI (header nav labels, footer labels/CTA, newsletter form statuses, project section labels/status badges) and major pages (**home**, **contact**, **docs**, **faq**, **newsletter**, **newsletter confirmed**, **projects**, **team**, **about** headings, **engagement** headings/CTAs) with locale-aware internal links.
- **SEO / i18n metadata**: middleware **rewrites** `/en/*` and `/fr/*` to app routes while preserving public URLs; **`x-music-tree-locale`** request header for SSR. **`generateMetadata`** per route with locale-specific **title/description**, **hreflang** via **`alternates.languages`**, and locale **canonical**/**Open Graph** URLs. **Sitemap** lists **`/en/...`** entries with **alternates** for **`en`**, **`fr`**, **`x-default`**. FAQ JSON-LD **`url`** matches the active locale.
- **Header**: removed direct **Tipeee** and **GitHub Sponsors** support controls from desktop and mobile nav; primary support actions now live on **`/contribute`**.
- **Homepage** (`/`): **`metadata.title`** stays **TheMusicTree** via **`title.absolute`**; added **description**, **canonical**, **Open Graph** / **Twitter**. Other routes use root **`title.template`** **`%s | TheMusicTree`**.
- **Website Carbon** badge: no spacer row under the pill while loading or when the result is not **ok** (the “Cleaner than …” line only renders after a successful reading).
- **Footer**: Website Carbon caption sits closer to the badge (**`gap-1`**) and centered under the pill.
- **Website Carbon**: report URL and **`/engagement`** copy use **`NEXT_PUBLIC_SITE_ORIGIN`** only; **`websiteCarbonReportPageHref()`** replaces **`websiteCarbonReportPageHrefFromOrgUrl()`**.
- **Header**: larger nav links (**`text-base`**), **Contribute** CTA (**`text-sm`**, padding), lockup image height **48px**, and nav vertical padding (**`py-5`**). Below **`lg`**, the header shows the **TheMusicTree** **mark** only (**`the-music-tree-mark.svg`**, **`next/image`**); from **`lg`** up, the horizontal **TheMusicTreeByline** lockup (so **`sm`**–**`md`** viewports use the mark, not the lockup). **`HeaderTheMusicTreeBrand`** replaces **`HeaderTheMusicTreeLockup`** (name: not always a lockup). Below **`sm`**, primary nav and **Contribute** sit in a **menu** (toggle button, panel under the bar, **Escape** / resize to **`sm`** closes it); from **`sm`** up, links stay in the horizontal bar.
- **`@behindthemusictree/assets`** to **6.4.2**. **`/contact`**: package icon links with **`showText`** (**`InformationLink`**, **`DiscussionLink`**, **`LinkedInSocialLink`**); newsletter block with **`Link`** + **`IconWebsite`**. No GitHub profile row on **`/contact`**. Install the package from **GitHub Packages** (**`NPM_TOKEN`**) so **`dist/`** is present; the public **v6.4.2** source tarball alone does not ship a built **`dist/`**.
- **Header**: **`TheMusicTreeByline`** link target comes from the published assets package (same as org site), not **`NEXT_PUBLIC_SITE_ORIGIN`**. **`next.config.ts`**: **`transpilePackages`** includes **`@behindthemusictree/assets`**.
- **`NEXT_PUBLIC_SITE_ORIGIN`** is **required**; **`next.config.ts`** fails the build if it is missing or not an **`https://`** origin-only URL. **Sync Vercel env** upserts **`NEXT_PUBLIC_SITE_ORIGIN`** as **`https://` + `DOMAIN_NAME`** to production and preview.
- **Footer**: **Community** **Newsletter** links to **`/newsletter`** instead of an embedded **`NewsletterSubscribeForm`**.
- **Header**: add a **Tipeee** icon link (org assets **`TipeeeSocialLink`**) beside the GitHub Sponsors button in desktop nav and mobile menu.

### Added

- **`/contribute`**: **Where to start** section (server **`ContributeWhereToStartSection`**) with org-asset links and per-link descriptions; **Sponsor** in client **`ContributeSponsorSection`** trimmed to concise visitor copy with explicit **GitHub Sponsors** labeling and one Tipeee CTA. Kept English note that Tipeee checkout may be in French. **`data-track-label="contribute_tipeee_popin"`** and **`rel="noopener noreferrer"`** stay on the Tipeee anchor. **Ways to Contribute** bridge ties bullets to discussions / issues / GitHub. **Next steps** links **`/docs`** and org welcome guide. **`contributeDescription`** shared for **metadata** / **Open Graph** / **Twitter**. **`GITHUB_ORG_ISSUES_SEARCH_URL`** in **`src/constants/github-org.ts`**. Page title: **Contribute** (document title: **`%s | TheMusicTree`**). Removed **`ContributeSupportSection.tsx`** (split into the two components above).
- **`/contact`** and **`/contribute`**: shared **`ICON_LINK_PILL_CLASS`** / **`ICON_LINK_PILL_ICON_CLASS`** in **`src/constants/icon-link-pill.ts`** for `showText` + `unstyled` icon links.
- **Header**: GitHub Sponsors embed (**`BtmtSponsorButton`** from **`@behindthemusictree/assets`**) after **Contribute** at the end of the bar (desktop nav and mobile menu); **`iframe`** **`src`** from package build (**`ORG_SPONSOR_BUTTON_URL`**).
- **SEO**: **`metadataBase`** ( **`NEXT_PUBLIC_SITE_ORIGIN`** ); root **Open Graph** and **Twitter** card defaults; **`src/lib/site-origin.ts`**; **`src/app/opengraph-image.tsx`** (**1200×630**); **`src/app/sitemap.ts`** and **`src/app/robots.ts`** (public paths + **`PROJECT_SLUGS`**); **`SiteJsonLd`** (**Organization** + **WebSite**); **FAQPage** JSON-LD on **`/faq`**; **`generateMetadata`** on project detail pages (**`src/lib/project-page-metadata.ts`**); route metadata (**canonical**, descriptions, social) for **`/projects`**, **`/docs`**, **`/faq`**, **`/contact`**, **`/contribute`**; extended metadata for **`/about`**, **`/team`**, **`/engagement`**, **`/newsletter`**, **`/newsletter/confirmed`**.
- **Homepage** (`/`): hero **`h1`** **TheMusicTree**; tagline is an **`h2`** below it.
- **`/contact`**: **`DiscordSocialLink`**, **`LinkedInSocialLink`**, **`MastodonSocialLink`**, **`EmailSocialLink`**, and **`XSocialLink`** from **`@behindthemusictree/assets`** as **icon-only** controls on one row; Discord from the package default invite URL; Mastodon URL from optional **`MASTODON_URL`** when set, otherwise the package default; X/Twitter and email from package defaults.
- **Footer**: one-line note under the Website Carbon badge (public estimate; API may fail; optional **Site report** link when **`NEXT_PUBLIC_SITE_ORIGIN`** resolves).
- **Newsletter**: **`NewsletterSubscribeForm`** on **homepage**, **`/contact`**, and **`/newsletter`** (`autoComplete="email"`); **`POST /api/newsletter`** → **`src/lib/brevo-subscribe.ts`** (**Brevo** **`/v3/contacts/doubleOptinConfirmation`** only). Required **`BREVO_API_KEY`**, **`BREVO_NEWSLETTER_LIST_ID`**, **`BREVO_DOI_TEMPLATE_ID`**, **`BREVO_DOI_REDIRECT_PATH`** (**`next.config.ts`**); Brevo redirect URL is **`https://` + `DOMAIN_NAME` + path**. **`/newsletter/confirmed`** landing page after confirmation.
- **`/about`**: **Contributors** section with cards for GitHub **public org members** (same data and `TeamMemberCard` as **`/team`**, via `getTeamMembersFromGithub()`), plus page **`metadata.title`** **About Us**.

### Removed

- **Header**: **Home** primary nav link (**`/`** remains in the footer **Product** list).
- **Header**: **Docs** primary nav link (**`/docs`** remains in the footer **Product** list).
- **Homepage** (`/`): **`NewsletterSubscribeForm`** from the hero section (newsletter signup remains on **`/contact`** and **`/newsletter`**).
- **`ORG_URL`** (redundant with **`NEXT_PUBLIC_SITE_ORIGIN`**); **`sync-vercel-env`** no longer upserts it. Remove it from Vercel manually if present.
- **`NewsletterExternalLink`**, **`NEXT_PUBLIC_BREVO_NEWSLETTER_URL`**, **`src/constants/newsletter.ts`**.
- **`MASTODON_URL`** as a **required** build variable; **`src/constants/contact.ts`** (**`getMastodonProfileUrl`**) removed.

### Documentation

- **`docs/ECOSYSTEM_READMES.md`**: **`TheMusicTreeByline`** (**v6+**) uses a publish-time org URL, not a host-passed **`href`**.
- **`.env.example`**: **`MASTODON_URL`** documented as optional.

### CI

- **Sync Vercel env**: no longer upserts **`ORG_URL`** (use **`NEXT_PUBLIC_SITE_ORIGIN`** only).
- **Sync Vercel env**: **`MASTODON_URL`** is optional in the validate step; still synced when the GitHub variable is set.
- **Sync Vercel env**: validates and syncs **`BREVO_API_KEY`** (GitHub **secret** → Vercel **`sensitive`**), **`BREVO_NEWSLETTER_LIST_ID`**, **`BREVO_DOI_TEMPLATE_ID`**, **`BREVO_DOI_REDIRECT_PATH`** (GitHub **variables**) to **production** and **preview**.

### Changed

- **Brevo newsletter**: **`BREVO_DOI_TEMPLATE_ID`** and **`BREVO_DOI_REDIRECT_PATH`** are **required**; subscribe uses **double opt-in** only; Brevo **`redirectionUrl`** is built from **`DOMAIN_NAME`** + path (**`BREVO_DOI_REDIRECT_URL`** removed).

- **AudioMeta Webapp** project copy: drop framework name; describe it as a **web app** / **web companion** to AudioMeta Python.
- **`ProjectDemoSection`**: removed redundant **Quick demos** intro line under the heading.
- **Header**: add **Projects** (`/projects`); remove **How It Works** and **Roadmap** nav items. **Footer** Product column: **Projects** replaces **How It Works**; **Roadmap** and duplicate **Projects** removed from Community (GitHub remains).
- **`/how-it-works`** and **`/roadmap`** removed as pages; **`301`** redirects to **`/docs`** and **`/projects`** respectively. Homepage trust/FAQ copy updated; inline **How it works** section kept without a separate workflow page link.
- Nav and **`/about`** page title: **About** → **About Us** (header, footer, H1).

### Fixed

- **`ProductExternalLink`** (`inline` / **`prose`** / footer): **`align-middle`** on the anchor and **`1.1em`** GitHub (etc.) icon for **`prose`** so icon + label sit on the line with body copy instead of shifting up.
- Website Carbon footer badge: **retry** transient **503** / other **5xx** responses from `api.websitecarbon.com` with backoff; show **Unavailable** (with tooltip) when the API is clearly down, instead of only **No Result**.
- `ProjectBadgeStrip`: silence Next.js `next/image` dev warning for shields.io badges by using **1×1** `width` / `height` props so rendered size differs from both attributes (fixed height + `w-auto`); avoids the case where only width diverged from a wide placeholder.
- Website Carbon badge **No Result** on localhost: inlined badge + local-dev `NEXT_PUBLIC_SITE_ORIGIN` override (see `.env.example`); production still uses the current page URL.

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

- **README** and **`.env.example`**: **`NEXT_PUBLIC_SITE_ORIGIN`** and **`NEXT_PUBLIC_DEBUG_WEBSITE_CARBON`** — comments without **Optional** framing; debug var described as console logging, not an optional badge.
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
