# Versioning Strategy

The stable application version is stored in `package.json`; see
[SEMVER_GUIDE.md](SEMVER_GUIDE.md) for choosing a version. A matching `vX.Y.Z`
tag records the release commit on `main`.

## Releasing

Release-please opens and updates a release PR on `main` from the Conventional
Commit titles merged since the last tag. Merging it bumps `package.json`,
updates `CHANGELOG.md` and creates the immutable `vX.Y.Z` tag through the shared
release-tag workflow. Do not edit the version or changelog by hand, and do not
create, move, or delete release tags manually.

The workflow creates a tag only; it does not publish a package or GitHub Release.
Vercel deploys independently of this workflow.
