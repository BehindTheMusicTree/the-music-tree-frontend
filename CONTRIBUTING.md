# Contributing

Contributions are welcome. This document covers development workflow, commit format, and pull request process.

## Table of Contents

- [Development Workflow](#development-workflow)
- [Branching (Git Flow)](#branching-git-flow)
- [Committing](#committing)
- [Pull Requests](#pull-requests)
- [Releasing (maintainers)](#releasing-maintainers)
- [Documentation](#documentation)

## Development Workflow

1. **Clone and install**

   ```bash
   git clone https://github.com/YOUR-ORG/the-music-tree-frontend.git
   cd the-music-tree-frontend
   npm install
   ```

2. **Environment** – Copy any `.env.example` to `.env.local` and set variables as needed for local development.

3. **Branch** from `develop` for features/chores, or from `main` for hotfixes (see [Branching](#branching-git-flow)).

4. **Develop** – Follow [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) for code and styling.

5. **Test** – Run `npm run lint` and `npm run build` before opening a PR. Run `npm run test` when tests are configured.

6. **Commit** using [Conventional Commits](#committing).

7. **Open a PR** – Target `develop` for features/chores, `main` for hotfixes. Use the [PR workflow](#pull-requests).

## Branching (Git Flow)

- **`main`** – Production-ready. Only receives merges from `release/*` and `hotfix/*`. No direct commits.
- **`develop`** – Integration branch. Only receives merges from `feature/*`, `chore/*`, `dependabot/*`.
- **`feature/<name>`** – New features. Branch from `develop`, merge back into `develop`.
- **`chore/<name>`** – Maintenance, deps, tooling. Branch from `develop`, merge into `develop`.
- **`hotfix/<name>`** – Urgent production fixes. Branch from `main`, merge into `main` (and back into `develop`).
- **`release/<version>`** – Release preparation. Branch from `develop`, merge into `main` and `develop`.

When branch protection is configured (e.g. via `.github/workflows/branch-protection.yml`): PRs to `main` must be from `hotfix/` or `release/`; PRs to `develop` must be from `feature/`, `chore/`, or `dependabot/`.

## Committing

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <summary>
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `style`, `perf`, `ci`

**Rules:** Imperative mood; summary under ~70 characters; lowercase type and scope. Include issue IDs when relevant: `fix(#42): handle null`.

**Examples:**

- `feat(auth): add login form`
- `fix(ui): handle empty state`
- `docs: update setup instructions`
- `chore: update dependencies`

## Pull Requests

- **Target** – Features/chores → `develop`. Hotfixes → `main`.
- **Title** – Same format as commit messages, e.g. `feat(auth): add login form`.
- **Description** – Use [.github/pull_request_template.md](.github/pull_request_template.md). Update [CHANGELOG.md](CHANGELOG.md) under `[Unreleased]` when applicable (see changelog best practices there).
- **Checks** – Lint and build must pass. Add or update tests when applicable.

## Releasing (maintainers)

1. Create `release/vX.Y.Z` from `develop`.
2. Merge release branch into `main`, then tag: `npm version minor` (or `patch`/`major`), then `git push origin main && git push origin vX.Y.Z`.
3. Merge release branch back into `develop` and delete the release branch.

See [docs/VERSIONING.md](docs/VERSIONING.md) and [docs/SEMVER_GUIDE.md](docs/SEMVER_GUIDE.md).

## Documentation

- **Changelog** – [CHANGELOG.md](CHANGELOG.md) (version history; update `[Unreleased]` in PRs)
- **Code & UI** – [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md)
- **Semantic HTML** – [docs/SEMANTIC_HTML.md](docs/SEMANTIC_HTML.md)
- **Data attributes & testing** – [docs/DATA_ATTRIBUTES.md](docs/DATA_ATTRIBUTES.md), [docs/testing.md](docs/testing.md)
- **Versioning** – [docs/VERSIONING.md](docs/VERSIONING.md), [docs/SEMVER_GUIDE.md](docs/SEMVER_GUIDE.md)
