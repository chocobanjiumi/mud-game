// 合併主資料與擴充資料
// 使用此模組取代直接引用 ROOMS / MONSTERS，即可包含所有擴充內容

import { ROOMS } from './rooms.js';
import { EXPANSION_ROOMS } from './rooms-expansion.js';
import { MONSTERS } from './monsters.js';
import { EXPANSION_MONSTERS } from './monsters-expansion.js';

export const ALL_ROOMS = { ...ROOMS, ...EXPANSION_ROOMS };
export const ALL_MONSTERS = { ...MONSTERS, ...EXPANSION_MONSTERS };
