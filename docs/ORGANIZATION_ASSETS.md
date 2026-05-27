# Organization Assets

This frontend uses shared assets from [`BehindTheMusicTree/organization-assets`](https://github.com/BehindTheMusicTree/organization-assets) as the source of truth for cross-project UI primitives and design tokens.

## Package

- npm package: `@behindthemusictree/assets`
- repository: [BehindTheMusicTree/organization-assets](https://github.com/BehindTheMusicTree/organization-assets)

## Authentication

`@behindthemusictree/assets` is hosted on **GitHub Packages**, which requires authentication even for read access. The repo's `.npmrc` only sets the registry redirect:

```
@behindthemusictree:registry=https://npm.pkg.github.com
```

The auth token is **not** committed. Each developer must configure it once at the user level:

```bash
# Add to ~/.npmrc (create the file if it doesn't exist)
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Generate a PAT at **GitHub → Settings → Developer settings → Personal access tokens** with the **`read:packages`** scope. This applies to all repos on your machine that pull from `npm.pkg.github.com`.

In CI/CD, inject the token as an environment variable: `NPM_TOKEN=<secret>` — then add the auth line to the job's `.npmrc` or use `npm config set`:

```yaml
- run: npm config set //npm.pkg.github.com/:_authToken $NPM_TOKEN
  env:
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

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
