# Organization Assets

This frontend uses shared assets from [`BehindTheMusicTree/the-music-tree-brand`](https://github.com/BehindTheMusicTree/the-music-tree-brand) as the source of truth for cross-project UI primitives and design tokens.

## Package

- npm package: `@behindthemusictree/brand`
- repository: [BehindTheMusicTree/the-music-tree-brand](https://github.com/BehindTheMusicTree/the-music-tree-brand)

## Installation

`@behindthemusictree/brand` is public on npmjs: no registry configuration or token is needed to install it.

## What should come from shared assets

When available, prefer shared package imports for:

- reusable UI components (buttons, attribution / `TheMusicTreeByline`, layout primitives, etc.)
- design tokens (colors, spacing, radius)
- shared icons and favicon bundles
- shared styles and hooks
- generic cross-project utilities

Keep project-specific business logic and feature-specific UI in this repo.

## Integration pattern

Use subpath imports so the app only consumes what it needs:

```tsx
import { Button } from "@behindthemusictree/brand/components";
import { colors, spacing } from "@behindthemusictree/brand/tokens";
import "@behindthemusictree/brand/styles";
```

If a shared component/token is missing, add it in the `the-music-tree-brand` project first, then consume it here.

## Contribution flow

1. Check `the-music-tree-brand` for an existing asset before creating a local duplicate.
2. If missing, contribute in `the-music-tree-brand`.
3. Update package version/reference in this frontend.
4. Replace local temporary implementation with shared import.
