# Local Development

## Local test login

1. Start the app with `pnpm dev`.
2. Open the client URL shown by Vite.
3. Enter any test account name with at least two valid characters.
4. If the account has no character yet, run `create <character name>` in the command input.

When no Arinova access token is supplied, the server creates a local user id with the `local:` prefix. Arinova login and the AI partner UI are intentionally disabled during this local test flow.

## Content validation

Run `pnpm validate:content` from the repository root. The validator checks world scale, zone schema, room fields, room image files and ratio, monster loot references, equipment slot coverage, and quest references.
