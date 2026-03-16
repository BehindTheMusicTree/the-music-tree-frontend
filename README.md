# The Music Tree Frontend

Next.js frontend for The Music Tree.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
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
cp .env.example .env.local   # if present; set variables as needed
npm run dev
```

App runs at `http://localhost:3000`.

### Environment variables

Create `.env.local` from `.env.example` (when available) and set any required `NEXT_PUBLIC_*` or API URLs. Do not commit `.env.local`.

## Scripts

| Command            | Description                    |
| ------------------ | ------------------------------ |
| `npm run dev`      | Start development server       |
| `npm run build`    | Production build               |
| `npm run start`    | Start production server        |
| `npm run launch`   | Build then start (production)  |
| `npm run lint`     | Run ESLint                     |

## Documentation

- **[CHANGELOG.md](CHANGELOG.md)** – Version history and notable changes
- **[CONTRIBUTING.md](CONTRIBUTING.md)** – Git Flow, commits, PRs, releasing
- **[docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md)** – TypeScript, React, Tailwind, naming
- **[docs/SEMANTIC_HTML.md](docs/SEMANTIC_HTML.md)** – Semantic layout elements
- **[docs/DATA_ATTRIBUTES.md](docs/DATA_ATTRIBUTES.md)** – `data-testid`, `data-page`, etc.
- **[docs/testing.md](docs/testing.md)** – Testing strategy and structure
- **[docs/VERSIONING.md](docs/VERSIONING.md)** – Tags and version format
- **[docs/SEMVER_GUIDE.md](docs/SEMVER_GUIDE.md)** – When to bump MAJOR/MINOR/PATCH

## License

See [LICENSE](LICENSE) for details.
