// Static world-map coordinates and connector rooms.
// Generated once from the accepted world-map layout; edit this file when the world map changes.

import type { RoomDef } from '@game/shared';

import { STATIC_WORLD_FILLER_ROOMS_PART_001 } from './world-map-static/filler-001.js';
import { STATIC_WORLD_FILLER_ROOMS_PART_002 } from './world-map-static/filler-002.js';
import { STATIC_WORLD_FILLER_ROOMS_PART_003 } from './world-map-static/filler-003.js';
import { STATIC_WORLD_FILLER_ROOMS_PART_004 } from './world-map-static/filler-004.js';
import { STATIC_WORLD_FILLER_ROOMS_PART_005 } from './world-map-static/filler-005.js';

export const STATIC_WORLD_FILLER_ROOMS: Record<string, RoomDef> = {
  ...STATIC_WORLD_FILLER_ROOMS_PART_001,
  ...STATIC_WORLD_FILLER_ROOMS_PART_002,
  ...STATIC_WORLD_FILLER_ROOMS_PART_003,
  ...STATIC_WORLD_FILLER_ROOMS_PART_004,
  ...STATIC_WORLD_FILLER_ROOMS_PART_005,
};

import { STATIC_WORLD_BRIDGE_ROOMS_PART_001 } from './world-map-static/bridges-001.js';

export const STATIC_WORLD_BRIDGE_ROOMS: Record<string, RoomDef> = {
  ...STATIC_WORLD_BRIDGE_ROOMS_PART_001,
};

import { STATIC_WORLD_ZONE_ROOM_IDS_PART_001 } from './world-map-static/zone-room-ids-001.js';
import { STATIC_WORLD_ZONE_ROOM_IDS_PART_002 } from './world-map-static/zone-room-ids-002.js';

export const STATIC_WORLD_ZONE_ROOM_IDS: Record<string, string[]> = {
  ...STATIC_WORLD_ZONE_ROOM_IDS_PART_001,
  ...STATIC_WORLD_ZONE_ROOM_IDS_PART_002,
};

import { STATIC_WORLD_ROOM_COORDINATES_PART_001 } from './world-map-static/coordinates-001.js';
import { STATIC_WORLD_ROOM_COORDINATES_PART_002 } from './world-map-static/coordinates-002.js';
import { STATIC_WORLD_ROOM_COORDINATES_PART_003 } from './world-map-static/coordinates-003.js';
import { STATIC_WORLD_ROOM_COORDINATES_PART_004 } from './world-map-static/coordinates-004.js';
import { STATIC_WORLD_ROOM_COORDINATES_PART_005 } from './world-map-static/coordinates-005.js';

export const STATIC_WORLD_ROOM_COORDINATES: Record<string, { worldX: number; worldY: number }> = {
  ...STATIC_WORLD_ROOM_COORDINATES_PART_001,
  ...STATIC_WORLD_ROOM_COORDINATES_PART_002,
  ...STATIC_WORLD_ROOM_COORDINATES_PART_003,
  ...STATIC_WORLD_ROOM_COORDINATES_PART_004,
  ...STATIC_WORLD_ROOM_COORDINATES_PART_005,
};
