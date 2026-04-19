## Summary

This PR adds Dependabot auto-merge automation in `.github/workflows/dependabot-auto-merge.yml`.

The workflow now:

- runs for Dependabot PR activity and completed check suites
- resolves the related PR from the event context
- skips non-Dependabot PRs
- fetches Dependabot metadata to detect update type
- checks the PR head commit for Vercel check runs
- enables auto-merge only when:
  - the PR is opened by `dependabot[bot]`
  - the update is a semver patch or minor update
  - at least one Vercel check completed successfully

## Why

This keeps low-risk dependency updates moving automatically, but only after the deployment signal is healthy. It reduces manual maintenance work without allowing Dependabot PRs to merge when Vercel is failing.

## Notes

- Major updates are not auto-merged.
- This workflow enables GitHub auto-merge; repository settings must still allow auto-merge.
- No approval is created by the workflow. If branch protection requires an approving review, use a dedicated bot token or enable GitHub Actions PR approval in repository settings.
- If Vercel is also configured as a required status check in branch protection, GitHub will enforce that independently as well.

## Testing

- Reviewed the workflow logic for both `pull_request_target` and `check_suite.completed` events.
- Confirmed the Vercel gate only passes when a matching check run has `conclusion == success`.
- Confirmed non-Dependabot PRs are skipped.
