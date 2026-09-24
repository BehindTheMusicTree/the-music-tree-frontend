This file must not contain rule logic.

## Stack

- Framework: Next.js (App Router), React, Tailwind CSS v4 — always latest
- i18n: next-intl — locales `en` (default, unprefixed) and `fr` (`/fr/...`)
- Org assets: `@behindthemusictree/assets` (private GitHub Packages, requires `NPM_TOKEN`)
- Syntax highlighting: Shiki (for project code snippet sections)
- Analytics: Vercel Analytics + SpeedInsights

## Critical paths

- `src/app/[locale]/` — all user-facing routes
- `src/components/` — shared UI components
- `src/data/projects/` — `ProjectDefinition` for each of the 7 ecosystem projects
- `src/i18n/` — routing config, server helpers, i18n-aware `Link`
- `src/messages/en.json` + `src/messages/fr.json` — translations (always in sync)
- `src/lib/` — Brevo, GitHub API wrappers, URL helpers
- `src/constants/` — `GITHUB_ORG_SLUG`, shared Tailwind class constants
- `.claude/rules/` — agent rules, one file per concern, loaded natively by Claude Code (authoritative, never duplicate)
- `CHANGELOG.md` — update on every notable change

## Conventions

- Server components by default — `"use client"` only for interactivity
- Internal links: `@/i18n/navigation` `Link` — never `next/link` directly
- External product links: `<ProductExternalLink>` — never raw `<a>` for GitHub/PyPI/website
- Team member socials: `<TeamMemberSocialLinks>` — never raw `<a>`
- Route slugs: kebab-case; register every new route in `sitemap.ts`
- Analytics events: `data-track-event` + `data-track-label` on interactive elements
- Org asset imports: resolve `.src` when import is an object — `typeof x === "string" ? x : x.src`
- Page metadata: call `pageMetadata(path)` inside every route's `generateMetadata()`

## Environment variables

- `BREVO_API_KEY`, `BREVO_NEWSLETTER_LIST_ID`, `BREVO_DOI_TEMPLATE_ID`, `BREVO_DOI_REDIRECT_PATH` — required, validated at build time in `next.config.ts` (fail fast on invalid)
- `GITHUB_TOKEN` — optional, raises GitHub API rate limit for `/team` page
- `NEXT_PUBLIC_SITE_ORIGIN` — optional local override for canonical origin
- `AUDIO_FINGERPRINTER_GITHUB_REPO_URL` — optional, synced to Vercel via `sync-vercel-env.yml`

## Code examples

### Server component with i18n
```tsx
import { Link } from "@/i18n/navigation";
import { getServerI18n } from "@/i18n/server";

export default async function MyPage() {
  const { messages } = await getServerI18n();
  return <Link href="/about">{messages.layout.nav.about}</Link>;
}
```

### Page metadata
```tsx
import { pageMetadata } from "@/i18n/page-metadata";
export async function generateMetadata() { return pageMetadata("/my-route"); }
```

### External product link
```tsx
<ProductExternalLink href={GH_MY_REPO} kind="github" variant="prose">
  View on GitHub
</ProductExternalLink>
```

### Translation key (both locales required simultaneously)
```json
// en.json — add key here
{ "mySection": { "title": "My Title" } }
// fr.json — add matching key in same commit
{ "mySection": { "title": "Mon titre" } }
```

### ProjectDefinition (src/data/projects/my-project.ts)
```ts
export const myProject = {
  slug: "my-project",
  name: "My Project",
  status: "active",
  overview: [{ type: "text", text: "..." }],
  outboundLinks: [{ source: "static", kind: "github", href: GH_URL }],
} satisfies ProjectDefinition;
```

## Forbidden

- `next/link` directly — always use `@/i18n/navigation` `Link`
- Raw `<a>` for GitHub/PyPI/website links — always `<ProductExternalLink>`
- Adding a translation key to `en.json` without the matching key in `fr.json`
- Importing from `@behindthemusictree/assets` without `pnpm run check:org-assets` passing
- Adding a route without updating `sitemap.ts`
- Adding an ecosystem project without a `ProjectDefinition` in `src/data/projects/`
- Notable changes without a `CHANGELOG.md` entry
- Rule logic in this file — belongs in `.claude/rules/*.md`

## Glossary

- **DOI**: Double Opt-In — Brevo newsletter double-confirmation flow
- **ProjectDefinition**: typed data for each ecosystem project (`src/data/projects/types.ts`)
- **RichSegment**: inline text, internal slug link, or env-resolved URL within project copy
- **Locale**: `"en" | "fr"` — English is default and served without prefix
- **BehindTheMusicTree**: open-source org owning all projects (`GITHUB_ORG_SLUG`)
- **Org assets**: `@behindthemusictree/assets` — shared brand, icons, tokens (GitHub Packages)

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
