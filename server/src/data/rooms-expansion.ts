// 房間擴充定義 - 區域 5-8 的額外房間
// 此檔案由獨立 agent 產生，稍後透過 merge-expansion.ts 合併至主資料

import type { RoomDef } from '@game/shared';

// ============================================================
//  擴充房間定義 (Areas 5-8)
// ============================================================

import { EXPANSION_ROOMS_PART_001 } from './rooms-expansion/rooms-001.js';
import { EXPANSION_ROOMS_PART_002 } from './rooms-expansion/rooms-002.js';
import { EXPANSION_ROOMS_PART_003 } from './rooms-expansion/rooms-003.js';
import { EXPANSION_ROOMS_PART_004 } from './rooms-expansion/rooms-004.js';
import { EXPANSION_ROOMS_PART_005 } from './rooms-expansion/rooms-005.js';
import { EXPANSION_ROOMS_PART_006 } from './rooms-expansion/rooms-006.js';
import { EXPANSION_ROOMS_PART_007 } from './rooms-expansion/rooms-007.js';
import { EXPANSION_ROOMS_PART_008 } from './rooms-expansion/rooms-008.js';
import { EXPANSION_ROOMS_PART_009 } from './rooms-expansion/rooms-009.js';
import { EXPANSION_ROOMS_PART_010 } from './rooms-expansion/rooms-010.js';
import { EXPANSION_ROOMS_PART_011 } from './rooms-expansion/rooms-011.js';
import { EXPANSION_ROOMS_PART_012 } from './rooms-expansion/rooms-012.js';
import { EXPANSION_ROOMS_PART_013 } from './rooms-expansion/rooms-013.js';
import { EXPANSION_ROOMS_PART_014 } from './rooms-expansion/rooms-014.js';
import { EXPANSION_ROOMS_PART_015 } from './rooms-expansion/rooms-015.js';
import { EXPANSION_ROOMS_PART_016 } from './rooms-expansion/rooms-016.js';
import { EXPANSION_ROOMS_PART_017 } from './rooms-expansion/rooms-017.js';
import { EXPANSION_ROOMS_PART_018 } from './rooms-expansion/rooms-018.js';
import { EXPANSION_ROOMS_PART_019 } from './rooms-expansion/rooms-019.js';
import { EXPANSION_ROOMS_PART_020 } from './rooms-expansion/rooms-020.js';
import { EXPANSION_ROOMS_PART_021 } from './rooms-expansion/rooms-021.js';
import { EXPANSION_ROOMS_PART_022 } from './rooms-expansion/rooms-022.js';
import { EXPANSION_ROOMS_PART_023 } from './rooms-expansion/rooms-023.js';
import { EXPANSION_ROOMS_PART_024 } from './rooms-expansion/rooms-024.js';
import { EXPANSION_ROOMS_PART_025 } from './rooms-expansion/rooms-025.js';
import { EXPANSION_ROOMS_PART_026 } from './rooms-expansion/rooms-026.js';

export const EXPANSION_ROOMS: Record<string, RoomDef> = {
  ...EXPANSION_ROOMS_PART_001,
  ...EXPANSION_ROOMS_PART_002,
  ...EXPANSION_ROOMS_PART_003,
  ...EXPANSION_ROOMS_PART_004,
  ...EXPANSION_ROOMS_PART_005,
  ...EXPANSION_ROOMS_PART_006,
  ...EXPANSION_ROOMS_PART_007,
  ...EXPANSION_ROOMS_PART_008,
  ...EXPANSION_ROOMS_PART_009,
  ...EXPANSION_ROOMS_PART_010,
  ...EXPANSION_ROOMS_PART_011,
  ...EXPANSION_ROOMS_PART_012,
  ...EXPANSION_ROOMS_PART_013,
  ...EXPANSION_ROOMS_PART_014,
  ...EXPANSION_ROOMS_PART_015,
  ...EXPANSION_ROOMS_PART_016,
  ...EXPANSION_ROOMS_PART_017,
  ...EXPANSION_ROOMS_PART_018,
  ...EXPANSION_ROOMS_PART_019,
  ...EXPANSION_ROOMS_PART_020,
  ...EXPANSION_ROOMS_PART_021,
  ...EXPANSION_ROOMS_PART_022,
  ...EXPANSION_ROOMS_PART_023,
  ...EXPANSION_ROOMS_PART_024,
  ...EXPANSION_ROOMS_PART_025,
  ...EXPANSION_ROOMS_PART_026,
};
