---
paths:
  - "**/*"
---

# Sustainable web design

Align with [Sustainable Web Design](https://sustainablewebdesign.org/) ideas: **lean delivery**, **efficient runtime**, **clear information architecture**, and **honest measurement** (estimates are not precision science).

## Bundles and React

- Prefer **server-first** patterns; add `"use client"` only where interaction or browser APIs require it.
- **Scope** heavy dependencies (e.g. rich syntax highlighting, large viewers) to the routes or components that need them; use **dynamic import** when it avoids loading cost on every page.

## Assets

- Use **`next/image`** with appropriate **sizes** and **intrinsic dimensions**; avoid huge hero or decorative assets without optimization.
- Keep **`next/font`** usage minimal (subsets, only weights in use); do not add full font families casually.

## CSS and shared UI

- Follow existing **Tailwind** usage; do not add parallel CSS frameworks.
- Prefer **`@behindthemusictree/brand`** for shared primitives so sibling repos do not duplicate heavy UI (see `organization-assets-usage.md`).

## Third parties

- Treat **analytics, badges, embeds, and iframes** as ongoing cost (bytes, CPU, requests). Add or upgrade them only with a clear product reason.

## Claims and transparency

- The footer **Website Carbon** badge is a public estimate; `api.websitecarbon.com` can be unavailable. The server-built report link uses the hostname derived from the brand package (`src/lib/site-origin.ts`). Keep `/engagement` and related documentation accurate when changing footprint behavior or copy.

## Accessibility

- **Skip links**, **landmarks**, and **semantic HTML** help people and often reduce wasted interaction; preserve them when editing layout.
