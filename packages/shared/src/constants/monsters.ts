// 怪物資料
// 注意：所有怪物定義的唯一來源為 server/src/data/monsters.ts
// 此檔案僅保留空的匯出以維持向下相容性

import type { MonsterDef } from '../types/combat.js';

/** @deprecated 請使用 server/src/data/monsters.ts 中的 MONSTERS */
export const MONSTER_DEFS: Record<string, MonsterDef> = {};
