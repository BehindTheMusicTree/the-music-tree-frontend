# PR descriptions

When writing a PR description:

1. Save it as a Markdown file in **`.github/pr-descriptions/`** — name it after the branch (e.g. `chore-migrate-to-pnpm.md`).
2. Never write PR descriptions at the repo root or any other location.
   The directory is gitignored: descriptions are never committed.
3. Structure:
   - `## Summary` — bullet list of what changed and why
   - `## Test plan` — checkbox checklist of verification steps
