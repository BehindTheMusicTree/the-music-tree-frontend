# PR Title

Dependabot Auto-Merge Workflow: Remove Approval Step

# PR Description

This pull request updates the Dependabot auto-merge workflow to remove the failing approval step. The previous configuration attempted to use `hmarr/auto-approve-action`, but GitHub Actions cannot approve pull requests it creates, resulting in workflow errors.

**Key changes:**

- Removed the `hmarr/auto-approve-action` step from `.github/workflows/dependabot-auto-merge.yml`.
- Updated documentation to reflect that auto-merge is now gated solely on successful Vercel deployment and required checks, without automated approval.

**Impact:**

- Dependabot PRs will be auto-merged only after all required checks (including Vercel deployment) pass.
- No approval is attempted by the workflow, ensuring compatibility with GitHub branch protection rules.

**Note:**
If branch protection rules require PR approval, manual approval will still be necessary unless those rules are adjusted.
