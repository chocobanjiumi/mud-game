// 怪物擴充定義 - 區域 5-8 的新增怪物
// 此檔案由獨立 agent 產生，稍後透過 merge-expansion.ts 合併至主資料

import type { MonsterDef } from '@game/shared';

import { EXPANSION_MONSTERS_PART_001 } from './monsters-expansion/monsters-001.js';
import { EXPANSION_MONSTERS_PART_002 } from './monsters-expansion/monsters-002.js';
import { EXPANSION_MONSTERS_PART_003 } from './monsters-expansion/monsters-003.js';
import { EXPANSION_MONSTERS_PART_004 } from './monsters-expansion/monsters-004.js';
import { EXPANSION_MONSTERS_PART_005 } from './monsters-expansion/monsters-005.js';
import { EXPANSION_MONSTERS_PART_006 } from './monsters-expansion/monsters-006.js';
import { EXPANSION_MONSTERS_PART_007 } from './monsters-expansion/monsters-007.js';
import { EXPANSION_MONSTERS_PART_008 } from './monsters-expansion/monsters-008.js';
import { EXPANSION_MONSTERS_PART_009 } from './monsters-expansion/monsters-009.js';
import { EXPANSION_MONSTERS_PART_010 } from './monsters-expansion/monsters-010.js';
import { EXPANSION_MONSTERS_PART_011 } from './monsters-expansion/monsters-011.js';

export const EXPANSION_MONSTERS: Record<string, MonsterDef> = {
  ...EXPANSION_MONSTERS_PART_001,
  ...EXPANSION_MONSTERS_PART_002,
  ...EXPANSION_MONSTERS_PART_003,
  ...EXPANSION_MONSTERS_PART_004,
  ...EXPANSION_MONSTERS_PART_005,
  ...EXPANSION_MONSTERS_PART_006,
  ...EXPANSION_MONSTERS_PART_007,
  ...EXPANSION_MONSTERS_PART_008,
  ...EXPANSION_MONSTERS_PART_009,
  ...EXPANSION_MONSTERS_PART_010,
  ...EXPANSION_MONSTERS_PART_011,
};
