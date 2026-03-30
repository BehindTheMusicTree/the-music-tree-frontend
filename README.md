# TheMusicTree Frontend

Next.js frontend for TheMusicTree.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment variables](#environment-variables)
- [Shared organization assets](#shared-organization-assets)
- [Scripts](#scripts)
- [Documentation](#documentation)
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
├── docs/              # Style guide, versioning
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
git clone https://github.com/YOUR-ORG/the-music-tree-frontend.git
cd the-music-tree-frontend
npm install
cp .env.example .env.local   # then set values; `.env.local` is never committed
npm run dev
```

App runs at `http://localhost:3000`.

Audiometa has a webapp at `AUDIOMETA_SUBDOMAIN_NAME.DOMAIN_NAME`.

## Environment variables

Create `.env.local` from [`.env.example`](.env.example) and set any required `NEXT_PUBLIC_*` or API URLs. `.env.local` and other `.env*` files are listed in [`.gitignore`](.gitignore) so they are not committed; `.env.example` is the only env template tracked in git.

### `GITHUB_TOKEN` (optional)

The BehindTheMusicTree page ([`src/app/team/page.tsx`](src/app/team/page.tsx), route `/team`) loads public org members in [`src/lib/github-org-team.ts`](src/lib/github-org-team.ts). Requests use public endpoints only. With **`GITHUB_TOKEN`** set, you get a much higher GitHub REST rate limit than anonymous use. If the token is invalid, the app **retries without auth** and uses a separate fetch URL bucket so Next.js’s Data Cache (which does not include `Authorization` in the key) cannot serve a cached 401 for the anonymous request.

- **Local:** `GITHUB_TOKEN=...` in `.env.local`, or `export GITHUB_TOKEN=...` before `npm run build`.
- **Vercel:** Project → **Settings** → **Environment Variables** → add `GITHUB_TOKEN` (e.g. [classic PAT](https://github.com/settings/tokens), no scopes required for these endpoints), enable Production and Preview, then redeploy.

If someone does not appear, they must **[publicize organization membership](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/publicizing-or-hiding-organization-membership)** on GitHub; only public members are listed.

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

## License

See [LICENSE](LICENSE) for details.
