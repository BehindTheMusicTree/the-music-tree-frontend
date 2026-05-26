# Master Rules Index

This file is the authoritative index for all AI assistant rules in this project.
It contains no rule logic. All rule logic lives in `.cursor/rules/*.mdc`.

## Rule Domains

1. **Changelog alignment** — `.cursor/rules/changelog-alignment.mdc`
2. **Organization assets usage** — `.cursor/rules/organization-assets-usage.mdc`
3. **External product links** — `.cursor/rules/external-product-links.mdc`
4. **Sustainable web** — `.cursor/rules/sustainable-web.mdc`
5. **Translation alignment** — `.cursor/rules/translation-alignment.mdc`
6. **PR workflow** — `.cursor/rules/pr-workflow.mdc`

## Maintenance

- To add a rule: edit the relevant `.cursor/rules/<concern>.mdc` file.
- To add a concern: create `.cursor/rules/<concern>.mdc`, then register it above.
- Never add rule logic to this file, `CLAUDE.md`, `.claude/rules.md`, or `.cursor/rules.md`.
