import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ZONES, ROOMS } from '../server/src/data/rooms.js';
import { MONSTERS } from '../server/src/data/monsters.js';
import { EXPANSION_MONSTERS } from '../server/src/data/monsters-expansion.js';
import { NPCS } from '../server/src/data/npcs.js';
import { QUEST_DEFS } from '../server/src/game/quest.js';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import type { RoomDef, ZoneDef } from '../packages/shared/src/types/world.js';

type Severity = 'error' | 'warning';

interface Finding {
  severity: Severity;
  scope: string;
  message: string;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOM_IMAGE_DIR = path.join(ROOT, 'client/public/images/rooms');
const REQUIRED_ZONE_FIELDS: (keyof ZoneDef)[] = [
  'type',
  'region',
  'tags',
  'pvpMode',
  'deathPenalty',
  'dangerLevel',
  'recommendedPartySize',
  'primaryElements',
];
const REQUIRED_ROOM_FIELDS: (keyof RoomDef)[] = [
  'id',
  'zone',
  'name',
  'description',
  'exits',
  'mapX',
  'mapY',
  'image',
];
const REQUIRED_EQUIP_SLOTS = [
  'weapon',
  'head',
  'body',
  'hands',
  'feet',
  'ring',
  'earring',
  'belt',
  'necklace',
] as const;
const IMAGE_STYLE_PHRASE = 'dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text';
const MIN_NON_TOWN_COMBAT_ROOMS = 12;

const findings: Finding[] = [];
const allMonsters = { ...MONSTERS, ...EXPANSION_MONSTERS };

function add(severity: Severity, scope: string, message: string): void {
  findings.push({ severity, scope, message });
}

function chineseCharCount(value: string): number {
  return [...value].filter((char) => /\p{Script=Han}/u.test(char)).length;
}

function isSpecialRoom(room: RoomDef): boolean {
  const haystack = `${room.id} ${room.name} ${room.description}`;
  return /boss|lord|king|alpha|throne|sanctum|chamber|gate|portal|summon|core|lair|王|首領|狼王|領主|王座|聖所|核心|傳送|地標|祭壇|巢穴|城門|廣場|大廳/.test(haystack);
}

function isHiddenQuestEliteRoom(room: RoomDef): boolean {
  const haystack = `${room.id} ${room.name} ${room.description}`;
  return /hidden|secret|elite|quest|boss|lord|king|queen|core|sanctum|lair|throne|隱|秘|精英|任務|王|核心|聖所|巢穴|王座/.test(haystack);
}

function isCombatOrResourceRoom(room: RoomDef): boolean {
  const zone = ZONES[room.zone];
  return (room.monsters?.length ?? 0) > 0
    || zone?.type === 'resource'
    || (zone?.tags ?? []).some((tag) => ['gathering', 'fishing', 'mining', 'resource_war'].includes(tag));
}

function hasTrafficNode(zone: ZoneDef): boolean {
  if (zone.portal) return true;

  return Object.values(ROOMS).some((room) => {
    if (room.zone !== zone.id) return false;
    const haystack = `${room.id} ${room.name} ${room.description}`;
    return /portal|gate|entrance|harbor|dock|pass|shortcut|recall|傳送|入口|門|港|碼頭|捷徑|回程|隘口/.test(haystack);
  });
}

function roomImagePath(room: RoomDef): string {
  return path.join(ROOM_IMAGE_DIR, room.image ?? `${room.id}.png`);
}

function readPngSize(filePath: string): { width: number; height: number } | undefined {
  const buffer = fs.readFileSync(filePath);
  const pngSignature = '89504e470d0a1a0a';
  if (buffer.subarray(0, 8).toString('hex') !== pngSignature) return undefined;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function validateZones(): void {
  const zones = Object.values(ZONES);
  if (zones.length !== 60) {
    add('error', 'zones', `expected exactly 60 zones, found ${zones.length}`);
  }

  for (const zone of zones) {
    for (const field of REQUIRED_ZONE_FIELDS) {
      const value = zone[field];
      if (value === undefined || value === null || (Array.isArray(value) && value.length === 0)) {
        add('error', `zone:${zone.id}`, `missing required ZoneDef field: ${String(field)}`);
      }
    }

    if (zone.rooms.length < 20) {
      add('error', `zone:${zone.id}`, `requires at least 20 rooms, found ${zone.rooms.length}`);
    }

    if (!hasTrafficNode(zone)) {
      add('error', `zone:${zone.id}`, 'requires at least one traffic node, portal, entrance, shortcut, or recall route');
    }

    if (zone.type !== 'town') {
      const combatRooms = zone.rooms.filter((roomId) => (ROOMS[roomId]?.monsters?.length ?? 0) > 0);
      if (combatRooms.length < MIN_NON_TOWN_COMBAT_ROOMS) {
        add('error', `zone:${zone.id}`, `requires at least ${MIN_NON_TOWN_COMBAT_ROOMS} combat rooms, found ${combatRooms.length}`);
      }
    }

    for (const roomId of zone.rooms) {
      const room = ROOMS[roomId];
      if (!room) {
        add('error', `zone:${zone.id}`, `references missing room: ${roomId}`);
      } else if (room.zone !== zone.id) {
        add('error', `zone:${zone.id}`, `room ${roomId} has mismatched zone ${room.zone}`);
      }
    }
  }
}

function validateRooms(): void {
  const occupied = new Map<string, string>();

  for (const room of Object.values(ROOMS)) {
    for (const field of REQUIRED_ROOM_FIELDS) {
      const value = room[field];
      if (value === undefined || value === null || value === '') {
        add('error', `room:${room.id}`, `missing required RoomDef field: ${String(field)}`);
      }
    }

    if (!ZONES[room.zone]) {
      add('error', `room:${room.id}`, `references missing zone: ${room.zone}`);
    }

    const minDescription = isSpecialRoom(room) ? 200 : isHiddenQuestEliteRoom(room) ? 150 : isCombatOrResourceRoom(room) ? 100 : 80;
    const count = chineseCharCount(room.description);
    if (count < minDescription) {
      add('error', `room:${room.id}`, `description has ${count} Chinese chars; requires at least ${minDescription}`);
    }

    if (!room.exits || room.exits.length === 0) {
      add('error', `room:${room.id}`, 'requires at least one exit');
    }

    for (const exit of room.exits ?? []) {
      if (!ROOMS[exit.targetRoomId]) {
        add('error', `room:${room.id}`, `exit ${exit.direction} targets missing room ${exit.targetRoomId}`);
      }
    }

    const key = `${room.zone}:${room.mapX},${room.mapY}`;
    const previous = occupied.get(key);
    if (previous) {
      add('error', `room:${room.id}`, `map position overlaps ${previous} at ${key}`);
    } else {
      occupied.set(key, room.id);
    }

    const filePath = roomImagePath(room);
    if (!fs.existsSync(filePath)) {
      add('error', `room:${room.id}`, `room image missing: ${path.relative(ROOT, filePath)}`);
    } else {
      const size = readPngSize(filePath);
      if (!size) {
        add('error', `room:${room.id}`, 'room image must be a PNG file');
      } else {
        const ratio = size.width / size.height;
        const expected = 10 / 16;
        if (Math.abs(ratio - expected) > 0.02) {
          add('error', `room:${room.id}`, `room image ratio must be close to 10:16, found ${size.width}x${size.height}`);
        }
      }
    }

    if (!room.imagePrompt) {
      add('error', `room:${room.id}`, 'missing imagePrompt');
    } else {
      const zoneName = ZONES[room.zone]?.name ?? room.zone;
      if (!room.imagePrompt.includes(room.name)) add('error', `room:${room.id}`, 'imagePrompt must include room name');
      if (!room.imagePrompt.includes(room.zone) && !room.imagePrompt.includes(zoneName)) {
        add('error', `room:${room.id}`, 'imagePrompt must include zone id or zone name');
      }
      if (!room.imagePrompt.includes(IMAGE_STYLE_PHRASE)) {
        add('error', `room:${room.id}`, 'imagePrompt missing required style phrase');
      }
    }
  }
}

function validateMonstersAndItems(): void {
  for (const monster of Object.values(allMonsters)) {
    if (!Array.isArray(monster.drops)) {
      add('error', `monster:${monster.id}`, 'missing loot table');
      continue;
    }

    for (const drop of monster.drops) {
      if (!ITEM_DEFS[drop.itemId]) {
        add('error', `monster:${monster.id}`, `drop references missing item: ${drop.itemId}`);
      }
    }
  }

  for (const slot of REQUIRED_EQUIP_SLOTS) {
    const count = Object.values(ITEM_DEFS).filter((item) => item.equipSlot === slot).length;
    if (count === 0) {
      add('error', `items:${slot}`, 'requires at least one base item for this equipment slot');
    }
  }
}

function validateQuests(): void {
  for (const quest of Object.values(QUEST_DEFS)) {
    for (const objective of quest.objectives) {
      const isWildcard = objective.targetId.includes('*');
      const isSyntheticObjective = ['boss', 'pvp_win'].includes(objective.targetId);

      if (objective.type === 'kill' && !isWildcard && !isSyntheticObjective && !allMonsters[objective.targetId]) {
        add('error', `quest:${quest.id}`, `kill objective references missing monster: ${objective.targetId}`);
      }
      if (objective.type === 'collect' && !ITEM_DEFS[objective.targetId]) {
        add('error', `quest:${quest.id}`, `collect objective references missing item: ${objective.targetId}`);
      }
      if (objective.type === 'visit' && !isWildcard && !ROOMS[objective.targetId]) {
        add('error', `quest:${quest.id}`, `visit objective references missing room: ${objective.targetId}`);
      }
      if (objective.type === 'talk' && !isWildcard && !NPCS[objective.targetId]) {
        add('error', `quest:${quest.id}`, `talk objective references missing NPC: ${objective.targetId}`);
      }
    }

    for (const reward of quest.rewards.items ?? []) {
      if (!ITEM_DEFS[reward.itemId]) {
        add('error', `quest:${quest.id}`, `reward references missing item: ${reward.itemId}`);
      }
    }
  }
}

validateZones();
validateRooms();
validateMonstersAndItems();
validateQuests();

const errors = findings.filter((finding) => finding.severity === 'error');
const warnings = findings.filter((finding) => finding.severity === 'warning');

console.log(`Content validation: ${errors.length} error(s), ${warnings.length} warning(s)`);
for (const finding of findings) {
  console.log(`[${finding.severity.toUpperCase()}] ${finding.scope}: ${finding.message}`);
}

process.exitCode = errors.length > 0 ? 1 : 0;
