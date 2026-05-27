## Summary

- Replace `package-lock.json` with `pnpm-lock.yaml` — the project uses pnpm, so npm's lock file was wrong
- Update `build` and `launch` scripts to call `pnpm` instead of `npm run`
- Remove `check:org-assets` script and `scripts/check-org-assets.mjs` — it only checked that `@behindthemusictree/assets` was installed, which `next build` already enforces via import resolution

## Test plan

- [ ] `pnpm install` resolves cleanly from a fresh clone (with `NPM_TOKEN` set)
- [ ] `pnpm build` succeeds
- [ ] `pnpm lint` passes
