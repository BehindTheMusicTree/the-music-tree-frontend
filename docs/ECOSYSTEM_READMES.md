# README ecosystem sections (maintainer guide)

This repository powers **[themusictree.org](https://themusictree.org)** and defines project routes under [`src/app/projects/`](../src/app/projects/). This document is the **source of truth for short “Ecosystem” (or “Related”) blocks** in other BehindTheMusicTree GitHub READMEs, so links stay aligned with real slugs and the org’s single-source-of-truth story.

It complements the GitHub org profile ([BehindTheMusicTree/.github `profile/README.md`](https://github.com/BehindTheMusicTree/.github/blob/main/profile/README.md)), which explains *where* narrative lives; this file gives *patterns and URLs*.

## Principles

1. **Public product story** (positioning, screenshots, deep copy) belongs on **themusictree.org** and in **this repo’s** project pages—not in long README prose across every codebase.
2. **Per-repo README** should cover clone, env, run, test, and contribute, plus a **short** ecosystem pointer to the org and the right `/projects/...` URL.
3. **Do not** paste the org mission paragraph or a full catalog of repos into every README; link to [themusictree.org/projects](https://themusictree.org/projects) instead.

## When to use which pattern

| Repo kind | Pattern |
|-----------|---------|
| User-facing Next app (e.g. grow-the-music-tree-frontend, audiometa-frontend) | **Standard block** with the matching project slug below |
| HTTP API / backend (e.g. the-music-tree-api, hear-the-music-tree-api) | **Standard block**; optional last line naming the main client app repo |
| Published library (e.g. AudioMeta Python) | **Standard block** (readers may arrive from PyPI) |
| Infra / Docker / shared tooling | **Minimal line** |

## Project slugs (use in `themusictree.org/projects/...`)

These paths must match [`src/app/projects/`](../src/app/projects/).

| Project | Slug path |
|---------|-----------|
| AudioMeta Python | `/projects/audiometa-python` |
| AudioMeta Webapp | `/projects/audiometa-webapp` |
| GrowTheMusicTree | `/projects/grow-the-music-tree` |
| TheMusicTreeAPI | `/projects/the-music-tree-api` |
| HearTheMusicTree | `/projects/hear-the-music-tree` |

When you add a new project page under `src/app/projects/`, **update this table** and the org profile quick-links table in the same change when possible.

## Standard block (Markdown template)

Replace `PROJECT_SLUG` with the slug segment (e.g. `grow-the-music-tree`) and set the **project page link text** to match the site heading.

```markdown
## Ecosystem

Built inside the **[BehindTheMusicTree](https://github.com/BehindTheMusicTree)** ecosystem.

Want the big picture? Explore the full project universe on **[themusictree.org](https://themusictree.org)**, and see where this project fits on **[Project name](https://themusictree.org/projects/PROJECT_SLUG)**.

The portfolio website content lives in **[the-music-tree-frontend](https://github.com/BehindTheMusicTree/the-music-tree-frontend)**; this README focuses on building, testing, deploying, and contributing to this repository.
```

## UI attribution (React)

For a consistent **“by TheMusicTree”** line with mark and link to `https://themusictree.org/`, use **`TheMusicTreeByline`** from `@behindthemusictree/assets` (see [organization-assets README](https://github.com/BehindTheMusicTree/organization-assets)). Next.js apps should set `transpilePackages: ['@behindthemusictree/assets']` and align `moduleResolution` with the package exports (e.g. `bundler` or `node16`) when TypeScript resolves subpath imports.

**Canonical GitHub names** (avoid obsolete slugs):

- GrowTheMusicTree **web app**: `BehindTheMusicTree/grow-the-music-tree-frontend`
- AudioMeta **Webapp**: `BehindTheMusicTree/audiometa-frontend`

## Minimal line (infra / tooling)

```markdown
Part of **[BehindTheMusicTree](https://github.com/BehindTheMusicTree)** — ecosystem overview at **[themusictree.org](https://themusictree.org)**.
```

## Table of Contents in READMEs

If the README has a TOC, add e.g. `- [Ecosystem](#ecosystem)`.

## Checklist for new org repos

- [ ] Add **Ecosystem** using the standard or minimal pattern.
- [ ] Use **`BehindTheMusicTree`** (correct casing) for the org URL.
- [ ] Point project links at `themusictree.org/projects/...` paths that exist in this repo.
- [ ] Add or update the project page here before advertising a new slug in READMEs.

## Related

- Maintainer doc for shared UI: [ORGANIZATION_ASSETS.md](./ORGANIZATION_ASSETS.md)
