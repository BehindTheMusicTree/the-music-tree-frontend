# Shared organization assets

This project should consume reusable assets from `@behindthemusictree/brand` (source: `BehindTheMusicTree/the-music-tree-brand`) whenever possible.

## Do

- Prefer shared package imports for brand assets and tokens; use `@behindthemusictree/ui` for generic UI primitives.
- Use subpath imports (for example: `@behindthemusictree/brand/components`, `@behindthemusictree/brand/tokens/theme.css`, `@behindthemusictree/brand/styles`).
- Keep this repo focused on product-specific pages, features, and business logic.

## Don't

- Do not create or keep local duplicates of reusable cross-project primitives that already exist in the shared package.
- Do not introduce one-off local design tokens when a shared token exists.

## Missing asset flow

If a needed shared asset does not exist yet:

1. Add it in `BehindTheMusicTree/the-music-tree-brand`.
2. Update this frontend to consume it from `@behindthemusictree/brand`.
