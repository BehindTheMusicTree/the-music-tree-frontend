# TheMusicTree Frontend

Next.js frontend for TheMusicTree.

**Canonical presentation:** The deployed site is the public portfolio for the [BehindTheMusicTree](https://github.com/BehindTheMusicTree) org. This repo is the **source of truth** for project overviews and site structure (`src/app/projects/`, homepage, etc.). Other repositories link to [themusictree.org](https://themusictree.org) and here instead of duplicating full project catalogs. Shared UI and tokens live in [`organization-assets`](https://github.com/BehindTheMusicTree/organization-assets).

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment variables](#environment-variables)
- [Shared organization assets](#shared-organization-assets)
- [Scripts](#scripts)
- [Documentation](#documentation)
- [README ecosystem guide](#readme-ecosystem-guide)
- [License](#license)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Project Structure

```
.
├── src/
│   └── app/           # Next.js App Router pages and layouts
├── docs/              # Style guide, versioning, README ecosystem patterns for sibling repos
├── .github/
│   └── pull_request_template.md
├── .env.example       # copy to `.env.local` (local env files are gitignored)
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or yarn/pnpm)

### Install and run

```bash
git clone https://github.com/BehindTheMusicTree/the-music-tree-frontend.git
cd the-music-tree-frontend
npm install
cp .env.example .env.local   # then set values; `.env.local` is never committed
npm run dev
```

App runs at `http://localhost:3000`.

Project app URLs are resolved from fixed labels (`hear-api`, `grow`, `audiometa`) on the canonical site host.

## Environment variables

Create `.env.local` from [`.env.example`](.env.example) and set required values (including server-only **`BREVO_*`** for the newsletter API). `.env.local` and other `.env*` files are listed in [`.gitignore`](.gitignore) so they are not committed; `.env.example` is the only env template tracked in git.

### `GITHUB_TOKEN` (optional)

The BehindTheMusicTree page ([`src/app/team/page.tsx`](src/app/team/page.tsx), route `/team`) loads public org members in [`src/lib/github-org-team.ts`](src/lib/github-org-team.ts). Requests use public endpoints only. With **`GITHUB_TOKEN`** set, you get a much higher GitHub REST rate limit than anonymous use. If the token is invalid, the app **retries without auth** and uses a separate fetch URL bucket so Next.js’s Data Cache (which does not include `Authorization` in the key) cannot serve a cached 401 for the anonymous request.

- **Local:** `GITHUB_TOKEN=...` in `.env.local`, or `export GITHUB_TOKEN=...` before `npm run build`.
- **Vercel:** Project → **Settings** → **Environment Variables** → add `GITHUB_TOKEN` (e.g. [classic PAT](https://github.com/settings/tokens), no scopes required for these endpoints), enable Production and Preview, then redeploy.

If someone does not appear, they must **[publicize organization membership](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/publicizing-or-hiding-organization-membership)** on GitHub; only public members are listed.

### Website Carbon (`ORG_DOMAIN`)

The footer **Website Carbon** badge lives in [`src/components/WebsiteCarbonBadge.tsx`](src/components/WebsiteCarbonBadge.tsx).

- Canonical domain comes from **`@behindthemusictree/assets`** constant **`ORG_DOMAIN`**. On **local dev** (`localhost`, `127.0.0.1`, `*.local`), the badge asks **`api.websitecarbon.com`** to measure **`https://${ORG_DOMAIN}` + current path and query** instead of `http://localhost:…`, because their API cannot score localhost URLs. On **deployed** hosts, the badge uses the **actual page URL** (`window.location.href`).

Their **`api.websitecarbon.com`** endpoint **may be unavailable** (e.g. **503**) or returns a JSON **`error`** field. This app **retries** with backoff and may show **Unavailable** or **No Result** even when Website Carbon still has a cached report on their website.

The **Website Carbon** button links to this site’s report on their site. That URL is built on the **server** from the canonical site origin resolved via **`@behindthemusictree/assets`**. Shape: `https://www.websitecarbon.com/website/` + hostname with dots as hyphens + `/`. See [`src/lib/website-carbon-results-url.ts`](src/lib/website-carbon-results-url.ts).

### `NEXT_PUBLIC_DEBUG_WEBSITE_CARBON`

Footer **Website Carbon** badge: when set to `1`, `true`, or `yes`, the browser console logs **`[WebsiteCarbon]`** lines (measured URL, API request URL, HTTP status, JSON body or errors). In **`npm run dev`**, these logs run **without** this variable (same as `NODE_ENV === "development"`). Use this on a production or preview build when you need to debug **No Result** in the host console.

### Newsletter (Brevo API)

The site uses **`NewsletterSubscribeForm`** (`type="email"`, `autoComplete="email"`) on **`/`**, **`/contact`**, and **`/newsletter`**, plus **`POST /api/newsletter`**, which calls **[Brevo](https://www.brevo.com/)** from the **server** only. Do **not** commit API keys.

| Variable                       | Purpose                                                                                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`BREVO_API_KEY`**            | Marketing API key ([Brevo → SMTP & API → API keys](https://app.brevo.com/settings/keys/api)). Permission to create/update **contacts** and use **DOI templates**.                          |
| **`BREVO_NEWSLETTER_LIST_ID`** | List id(s) from **Contacts → Lists** (comma-separated for multiple). Validated in **`next.config.ts`**.                                                                                    |
| **`BREVO_DOI_TEMPLATE_ID`**    | Numeric **[double opt-in](https://developers.brevo.com/reference/create-doi-contact)** template id.                                                                                        |
| **`BREVO_DOI_REDIRECT_PATH`**  | Path only after confirmation (e.g. **`/newsletter/confirmed`**). The app sends Brevo **canonical site origin + path**. Same value on GitHub and Vercel; validated in **`next.config.ts`**. |

Subscriptions always use **`POST /v3/contacts/doubleOptinConfirmation`** (confirmation email, then redirect).

On Vercel, set **`BREVO_*`** for **Production** and **Preview**, or run **[`.github/workflows/sync-vercel-env.yml`](.github/workflows/sync-vercel-env.yml)** (Actions → **Sync Vercel env**). For that workflow, on each GitHub **Environment** used by the jobs (**production**, **staging**): add **`BREVO_API_KEY`** under **Environment secrets** (or repository secrets), and **`BREVO_NEWSLETTER_LIST_ID`**, **`BREVO_DOI_TEMPLATE_ID`**, **`BREVO_DOI_REDIRECT_PATH`** under **Environment variables**. The workflow upserts the same names to Vercel; **`BREVO_API_KEY`** is sent with type **`sensitive`**. No separate full redirect URL is stored: canonical site origin from **`@behindthemusictree/assets`** plus **`BREVO_DOI_REDIRECT_PATH`** define the Brevo **`redirectionUrl`** at runtime.

## Shared organization assets

This project uses the shared BehindTheMusicTree asset package from [`BehindTheMusicTree/organization-assets`](https://github.com/BehindTheMusicTree/organization-assets).

- Package: `@behindthemusictree/assets`
- Purpose: reusable UI components, tokens, icons, styles, hooks, and utilities shared across org projects
- Rule of thumb: if a reusable UI/token/icon already exists in the shared package, use it here instead of duplicating local implementations

See [docs/ORGANIZATION_ASSETS.md](docs/ORGANIZATION_ASSETS.md) for import patterns and contribution flow.

## Scripts

| Command          | Description                   |
| ---------------- | ----------------------------- |
| `npm run dev`    | Start development server      |
| `npm run build`  | Production build              |
| `npm run start`  | Start production server       |
| `npm run launch` | Build then start (production) |
| `npm run lint`   | Run ESLint                    |

## Documentation

- **[CHANGELOG.md](CHANGELOG.md)** – Version history and notable changes
- **[CONTRIBUTING.md](CONTRIBUTING.md)** – Git Flow, commits, PRs, releasing
- **[docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md)** – TypeScript, React, Tailwind, naming
- **[docs/SEMANTIC_HTML.md](docs/SEMANTIC_HTML.md)** – Semantic layout elements
- **[docs/DATA_ATTRIBUTES.md](docs/DATA_ATTRIBUTES.md)** – `data-testid`, `data-page`, etc.
- **[docs/testing.md](docs/testing.md)** – Testing strategy and structure
- **[docs/VERSIONING.md](docs/VERSIONING.md)** – Tags and version format
- **[docs/SEMVER_GUIDE.md](docs/SEMVER_GUIDE.md)** – When to bump MAJOR/MINOR/PATCH
- **[docs/ORGANIZATION_ASSETS.md](docs/ORGANIZATION_ASSETS.md)** – Shared asset package usage policy and integration notes
- **[docs/ECOSYSTEM_READMES.md](docs/ECOSYSTEM_READMES.md)** – Standard “Ecosystem” blocks for other org repos (links to this site’s `/projects/…` slugs)

## README ecosystem guide

Other repositories in the org should keep long product copy on **themusictree.org** and use short, consistent README sections that point here. Templates and slug table: **[docs/ECOSYSTEM_READMES.md](docs/ECOSYSTEM_READMES.md)**.

## License

See [LICENSE](LICENSE) for details.
