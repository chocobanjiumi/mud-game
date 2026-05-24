# MUD6 Regression Report

Date: 2026-05-25

Scope: `~/mud6.md` career, skill, cross-room combat, skill icon, skill-learning modal, and equipment affix backlog.

## Passed Gates

- `pnpm build`
  - Shared package TypeScript build passed.
  - Server TypeScript build passed.
  - Client production build passed.
  - Vite reported the existing large bundle warning only.
- `pnpm test`
  - 20 test files passed.
  - 440 tests passed.
- `pnpm validate:mud5`
  - 0 errors.
  - 350 existing content-quality warnings.

## Mud6 Coverage Highlights

- Starter class skill progression is covered in `server/src/__tests__/balance.test.ts`.
- Lv1 class distinction is covered by resource type and level-one active skill checks.
- Lv8-Lv20 skill pacing is covered by first-job progression gap checks.
- All implemented learnable player skills are required to have existing square PNG icons.
- Skill learned modal rendering is covered by `client/src/__tests__/ui-render.test.tsx`.
- Combat effects for starter classes are covered by `server/src/__tests__/combat.test.ts`.
- Equipment affix generation, persistence, and combat impact are covered by balance/player/combat tests.

## Non-Mud6 Content Gate Note

`pnpm validate:content` was also run during final regression. It failed with 673 errors from missing room images across broad world-content zones such as `storm_highlands`, `blackwood`, `lost_capital`, `sky_isles`, `deepsea_temple`, `sunspire`, `moonshadow_court`, and others.

Those missing world room image assets are outside the `~/mud6.md` career/skill/affix backlog. The mud6-specific implementation and regression gates above passed.
