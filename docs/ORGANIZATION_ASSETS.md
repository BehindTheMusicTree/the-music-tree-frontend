# Organization Assets

This frontend uses shared assets from [`BehindTheMusicTree/organization-assets`](https://github.com/BehindTheMusicTree/organization-assets) as the source of truth for cross-project UI primitives and design tokens.

## Package

- npm package: `@behindthemusictree/assets`
- repository: [BehindTheMusicTree/organization-assets](https://github.com/BehindTheMusicTree/organization-assets)

## What should come from shared assets

When available, prefer shared package imports for:

- reusable UI components (buttons, layout primitives, etc.)
- design tokens (colors, spacing, radius)
- shared icons and favicon bundles
- shared styles and hooks
- generic cross-project utilities

Keep project-specific business logic and feature-specific UI in this repo.

## Integration pattern

Use subpath imports so the app only consumes what it needs:

```tsx
import { Button } from "@behindthemusictree/assets/components";
import { colors, spacing } from "@behindthemusictree/assets/tokens";
import "@behindthemusictree/assets/styles";
```

If a shared component/token is missing, add it in the `organization-assets` project first, then consume it here.

## Contribution flow

1. Check `organization-assets` for an existing asset before creating a local duplicate.
2. If missing, contribute in `organization-assets`.
3. Update package version/reference in this frontend.
4. Replace local temporary implementation with shared import.
