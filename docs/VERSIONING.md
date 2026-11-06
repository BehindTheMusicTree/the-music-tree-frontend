# Versioning Strategy

The stable application version is stored in `package.json`; see
[SEMVER_GUIDE.md](SEMVER_GUIDE.md) for choosing a version. A matching `vX.Y.Z`
tag records the release commit on `main`.

## Initial activation

Before the first automated release, provision the release App and tag protections
using the organization release-automation procedure and promote this policy to
`main` in a separate PR without a version change. The activation push creates no
tag, even if it includes a version bump. Promoting to `main` can deploy production
and requires separate authorization.

## Preparing a release

1. Create `release/*` from `develop`, or `hotfix/*` from `main`.
2. Update `package.json` without creating a tag, for example with
   `npm version X.Y.Z --no-git-tag-version`; move the relevant `[Unreleased]`
   entries into a nonempty dated `## [X.Y.Z] - YYYY-MM-DD` changelog section.
3. Open and merge a PR to `main`, then check the shared release-tag workflow.
   It validates the version and changelog and creates the immutable tag. Do not
   create, move, or delete release tags manually.
4. Open a back-merge PR from `main` to `develop`.

The workflow creates a tag only; it does not publish a package or GitHub Release.
Vercel deploys independently of this workflow.
