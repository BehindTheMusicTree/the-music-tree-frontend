# Versioning Strategy

The stable application version is stored in `package.json`; see
[SEMVER_GUIDE.md](SEMVER_GUIDE.md) for choosing a version. A matching `vX.Y.Z`
tag records the release commit on `main`.

## Releasing

Release-please opens and updates a release PR on `main` from the Conventional
Commit titles merged since the last tag. The PR bumps `package.json` and
updates `CHANGELOG.md`. CI auto-merges it once required checks pass, then
creates the immutable `vX.Y.Z` tag through the shared release-tag workflow.
To hold a release, disable auto-merge on the release PR or close it.
Do not edit the version or changelog by hand, and do not create, move, or delete
release tags manually.

The workflow creates a tag only; it does not publish a package or GitHub Release.
Vercel deploys independently of this workflow.
