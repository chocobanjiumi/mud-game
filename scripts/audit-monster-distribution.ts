import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { Direction, MonsterDef, RoomDef, ZoneDef } from '@game/shared';
import { ROOMS, ZONES } from '../server/src/data/rooms.js';
import { MONSTERS } from '../server/src/data/monsters.js';
import { getRoomGatheringTags } from '../server/src/game/gathering.js';

type EncounterPolicy = 'safe' | 'road' | 'wilds' | 'resource_guarded' | 'elite_pocket' | 'boss_lair' | 'instance_entrance';
type IssueSeverity = 'error' | 'warning' | 'accepted';

interface MonsterRoomRecord {
  roomId: string;
  zoneId: string;
  roomName: string;
  worldX?: number;
  worldY?: number;
  zoneLevelRange: [number, number];
  zoneType: ZoneDef['type'];
  policy: EncounterPolicy;
  isFillRoom: boolean;
  hasGathering: boolean;
  monsterCount: number;
  monsterIds: string[];
  monsters: {
    id: string;
    name: string;
    level: number;
    family: string;
    element: string;
    isElite: boolean;
    isBoss: boolean;
  }[];
  monsterLevels: number[];
  minMonsterLevel?: number;
  maxMonsterLevel?: number;
  monsterFamilies: string[];
  hasElite: boolean;
  hasBoss: boolean;
  descriptionHasMonsterCue: boolean;
}

interface MonsterDistributionIssue {
  id: string;
  zoneId: string;
  roomId?: string;
  severity: IssueSeverity;
  kind:
    | 'monster.reference.missing'
    | 'safe_room.has_monsters'
    | 'low_zone.high_monster'
    | 'zone_level.out_of_range'
    | 'adjacent.level_spike'
    | 'fill_room.monster_policy'
    | 'boss_on_road'
    | 'monster_cue.missing'
    | 'terrain_family.mismatch';
  message: string;
  details?: Record<string, unknown>;
}

const write = process.argv.includes('--write');
const strict = process.argv.includes('--strict');
const outPath = resolve(process.cwd(), 'reports/monster-distribution-audit.json');

const CARDINALS: Direction[] = ['north', 'south', 'east', 'west'];
const DELTA: Record<Direction, { dx: number; dy: number }> = {
  north: { dx: 0, dy: -1 },
  south: { dx: 0, dy: 1 },
  east: { dx: 1, dy: 0 },
  west: { dx: -1, dy: 0 },
};

const WORLD_ZONE_IDS = new Set([
  'starter_village',
  'starter_village_ext',
  'plains',
  'old_farmland',
  'whispering_valley',
  'wildgrass_hills',
  'lakeside_town',
  'kingsroad_market',
  'arena_quarter',
  'eastern_coast',
  'mist_harbor',
  'saltwind_flats',
  'bloodsalt_coast',
  'sapphire_lake',
  'moonlit_fen',
  'serpent_delta',
  'dark_forest',
  'blackwood',
  'amber_forest',
  'emerald_canopy',
  'silverpine_range',
  'storm_highlands',
  'frostbite_pass',
  'redrock_badlands',
  'glass_dunes',
  'thundersteppe',
  'ember_march',
  'volcano_zone',
  'ironwood_fort',
  'royal_hunting_grounds',
  'kingdom_frontier',
  'pilgrim_road',
  'marsh_of_mirrors',
  'frozen_wastes',
]);

const SAFE_SERVICE_PATTERN = /傳送|銀行|商店|旅店|酒館|公會|職業|市場|拍賣|鐵匠|裁縫|神殿|禮拜堂|法院|港埠|祠堂|廣場|城門|補給|service|portal|bank|shop|inn|market/u;
const SAFE_COMBAT_EXCEPTION_PATTERN = /訓練|地窖|競技|下水道|封鎖|黑市|盜賊|伏擊|危險|任務|arena|cellar|sewer|blocked/u;
const ROAD_PATTERN = /路|道|徑|橋|門|口|邊界|border|route|road|connector|棧道|石階|小徑/u;
const MONSTER_CUE_PATTERN = /怪|魔物|野獸|敵|守衛|首領|王|足跡|爪痕|巢|屍|骨|吼|嚎|巡邏|伏擊|啃|血|毒|蛛網|焦痕|冰霜|雷擊|腐化|污染|盜匪|海盜|亡靈|蛇|狼|蟲|獸|元素|構造|警戒/u;

const TERRAIN_FAMILIES: Record<string, Set<MonsterDef['family']>> = {
  forest: new Set(['beast', 'insect', 'plant', 'humanoid', 'undead', 'elemental']),
  swamp: new Set(['aquatic', 'beast', 'plant', 'insect', 'undead', 'aberration', 'humanoid']),
  water: new Set(['aquatic', 'beast', 'humanoid', 'undead', 'elemental']),
  coast: new Set(['aquatic', 'humanoid', 'undead', 'beast', 'elemental']),
  mountain: new Set(['beast', 'elemental', 'construct', 'humanoid', 'dragon']),
  snow: new Set(['beast', 'elemental', 'undead', 'construct', 'dragon']),
  desert: new Set(['beast', 'insect', 'humanoid', 'construct', 'undead', 'elemental']),
  volcanic: new Set(['elemental', 'construct', 'beast', 'dragon', 'humanoid', 'undead']),
  town: new Set(['humanoid', 'beast', 'construct', 'ooze']),
  plains: new Set(['beast', 'humanoid', 'plant', 'ooze', 'insect']),
  war: new Set(['humanoid', 'construct', 'beast', 'undead', 'elemental']),
};

const ZONE_TERRAIN_OVERRIDES: Record<string, Set<MonsterDef['family']>> = {
  starter_village: TERRAIN_FAMILIES.town,
  starter_village_ext: new Set(['beast', 'humanoid', 'plant', 'ooze', 'insect', 'undead', 'construct']),
  plains: new Set(['beast', 'humanoid', 'plant', 'ooze', 'insect']),
  old_farmland: new Set(['beast', 'humanoid', 'plant', 'ooze', 'insect', 'undead', 'construct']),
  whispering_valley: new Set(['aquatic', 'beast', 'plant', 'insect', 'ooze', 'elemental', 'aberration']),
};

const coordIndex = new Map<string, RoomDef>();
for (const room of Object.values(ROOMS)) {
  if (typeof room.worldX === 'number' && typeof room.worldY === 'number') {
    coordIndex.set(coordKey(room.worldX, room.worldY), room);
  }
}

const records = Object.values(ROOMS)
  .filter(room => WORLD_ZONE_IDS.has(room.zone))
  .sort((a, b) => a.zone.localeCompare(b.zone) || a.id.localeCompare(b.id))
  .map(buildRecord);

const issues: MonsterDistributionIssue[] = [];
for (const record of records) {
  auditRoom(record);
}
auditAdjacentLevelSpikes(records);
auditTerrainFamilies(records);

const zones = [...new Set(records.map(record => record.zoneId))]
  .sort()
  .map(zoneId => buildZoneSummary(zoneId, records.filter(record => record.zoneId === zoneId)));

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    rooms: records.length,
    zones: zones.length,
    roomsWithMonsters: records.filter(record => record.monsterCount > 0).length,
    monsterSpawns: records.reduce((sum, record) => sum + record.monsterCount, 0),
    fillRoomsWithMonsters: records.filter(record => record.isFillRoom && record.monsterCount > 0).length,
    safeRoomsWithMonsters: issues.filter(issue => issue.kind === 'safe_room.has_monsters').length,
    lowZoneHighMonsterIssues: issues.filter(issue => issue.kind === 'low_zone.high_monster').length,
    adjacentLevelSpikeIssues: issues.filter(issue => issue.kind === 'adjacent.level_spike').length,
    terrainFamilyMismatchIssues: issues.filter(issue => issue.kind === 'terrain_family.mismatch').length,
    issues: issues.length,
    errors: issues.filter(issue => issue.severity === 'error').length,
    warnings: issues.filter(issue => issue.severity === 'warning').length,
    accepted: issues.filter(issue => issue.severity === 'accepted').length,
    byIssueKind: countBy(issues, issue => issue.kind),
  },
  zones,
  worldCoordinateHotspots: records
    .filter(record => typeof record.worldX === 'number' && typeof record.worldY === 'number')
    .map(record => ({
      roomId: record.roomId,
      zoneId: record.zoneId,
      worldX: record.worldX,
      worldY: record.worldY,
      policy: record.policy,
      minMonsterLevel: record.minMonsterLevel ?? null,
      maxMonsterLevel: record.maxMonsterLevel ?? null,
      monsterIds: record.monsterIds,
      issueKinds: issues
        .filter(issue => issue.roomId === record.roomId)
        .map(issue => issue.kind),
    }))
    .sort((a, b) => (a.worldY - b.worldY) || (a.worldX - b.worldX) || a.roomId.localeCompare(b.roomId)),
  records,
  issues,
};

if (write) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`);
}

console.log('# Monster Distribution Audit');
console.log(`Generated: ${report.generatedAt}`);
console.log(`World rooms checked: ${report.summary.rooms}`);
console.log(`Zones checked: ${report.summary.zones}`);
console.log(`Rooms with monsters: ${report.summary.roomsWithMonsters}`);
console.log(`Monster spawns: ${report.summary.monsterSpawns}`);
console.log(`Issues: ${report.summary.issues}`);
console.log(`Errors: ${report.summary.errors}`);
console.log(`Warnings: ${report.summary.warnings}`);
console.log(`By issue kind: ${JSON.stringify(report.summary.byIssueKind)}`);
if (write) console.log(`Report written: ${outPath}`);

if (strict && report.summary.errors > 0) {
  process.exitCode = 1;
}

function buildRecord(room: RoomDef): MonsterRoomRecord {
  const zone = ZONES[room.zone];
  const monsters = (room.monsters ?? []).map(spawn => MONSTERS[spawn.monsterId]).filter(Boolean);
  const monsterLevels = monsters.map(monster => monster.level);
  return {
    roomId: room.id,
    zoneId: room.zone,
    roomName: room.name,
    worldX: room.worldX,
    worldY: room.worldY,
    zoneLevelRange: zone?.levelRange ?? [1, 60],
    zoneType: zone?.type ?? 'wilds',
    policy: inferPolicy(room, zone, monsters),
    isFillRoom: room.id.includes('_fill_'),
    hasGathering: getRoomGatheringTags(room).size > 0,
    monsterCount: room.monsters?.reduce((sum, spawn) => sum + spawn.maxCount, 0) ?? 0,
    monsterIds: room.monsters?.map(spawn => spawn.monsterId) ?? [],
    monsters: monsters.map(monster => ({
      id: monster.id,
      name: monster.name,
      level: monster.level,
      family: monster.family,
      element: monster.element,
      isElite: Boolean(monster.isElite),
      isBoss: Boolean(monster.isBoss),
    })),
    monsterLevels,
    minMonsterLevel: monsterLevels.length ? Math.min(...monsterLevels) : undefined,
    maxMonsterLevel: monsterLevels.length ? Math.max(...monsterLevels) : undefined,
    monsterFamilies: [...new Set(monsters.map(monster => monster.family))].sort(),
    hasElite: monsters.some(monster => monster.isElite),
    hasBoss: monsters.some(monster => monster.isBoss),
    descriptionHasMonsterCue: MONSTER_CUE_PATTERN.test(room.description),
  };
}

function inferPolicy(room: RoomDef, zone: ZoneDef | undefined, monsters: MonsterDef[]): EncounterPolicy {
  if (monsters.some(monster => monster.isBoss)) return 'boss_lair';
  if (monsters.some(monster => monster.isElite)) return 'elite_pocket';
  if (room.instanceTemplateId || /副本|instance/i.test(room.description)) return 'instance_entrance';
  if (getRoomGatheringTags(room).size > 0 && monsters.length > 0) return 'resource_guarded';
  if (zone?.type === 'town' || zone?.tags.includes('safe')) {
    if (!SAFE_COMBAT_EXCEPTION_PATTERN.test(`${room.name}${room.description}`)) return 'safe';
  }
  if ((zone?.type === 'town' || zone?.tags.includes('safe')) && SAFE_SERVICE_PATTERN.test(`${room.name}${room.description}`)) return 'safe';
  if (ROAD_PATTERN.test(`${room.name}${room.description}`) || room.id.includes('_fill_')) return 'road';
  return 'wilds';
}

function auditRoom(record: MonsterRoomRecord): void {
  const zone = ZONES[record.zoneId];
  const room = ROOMS[record.roomId];
  if (!zone || !room) return;

  for (const monsterId of record.monsterIds) {
    if (!MONSTERS[monsterId]) {
      addIssue('monster.reference.missing', record, 'error', `房間引用不存在的怪物 ${monsterId}`, { monsterId });
    }
  }
  if (record.monsterCount === 0) return;

  if (record.policy === 'safe') {
    addIssue('safe_room.has_monsters', record, 'error', 'safe / town / service 房間仍配置怪物', { monsterIds: record.monsterIds });
  }

  if (zone.levelRange[1] <= 10 && (record.maxMonsterLevel ?? 0) > zone.levelRange[1] + 3) {
    addIssue('low_zone.high_monster', record, 'error', '低等區出現超出容許值的高等怪物', {
      zoneLevelRange: zone.levelRange,
      maxMonsterLevel: record.maxMonsterLevel,
    });
  }

  if ((record.minMonsterLevel ?? zone.levelRange[0]) < zone.levelRange[0] - 5 || (record.maxMonsterLevel ?? zone.levelRange[1]) > zone.levelRange[1] + 8) {
    addIssue('zone_level.out_of_range', record, 'warning', '怪物等級超出 zone levelRange 緩衝', {
      zoneLevelRange: zone.levelRange,
      minMonsterLevel: record.minMonsterLevel,
      maxMonsterLevel: record.maxMonsterLevel,
    });
  }

  if (record.isFillRoom && !['resource_guarded', 'elite_pocket', 'boss_lair'].includes(record.policy)) {
    addIssue('fill_room.monster_policy', record, 'warning', 'fill room 出怪但 policy 不是明確採集守衛、elite 或 boss 點', {
      policy: record.policy,
      monsterIds: record.monsterIds,
    });
  }

  if (record.hasBoss && ['safe', 'road', 'instance_entrance'].includes(record.policy)) {
    addIssue('boss_on_road', record, 'error', 'boss / elite 被放在安全房、主路或入口房', {
      policy: record.policy,
      monsterIds: record.monsterIds,
    });
  }

  if (!record.descriptionHasMonsterCue) {
    addIssue('monster_cue.missing', record, 'warning', '有怪房 description 缺少怪物痕跡或遭遇提示', {
      monsterIds: record.monsterIds,
    });
  }
}

function auditAdjacentLevelSpikes(allRecords: MonsterRoomRecord[]): void {
  const byRoom = new Map(allRecords.map(record => [record.roomId, record]));
  const seen = new Set<string>();

  for (const record of allRecords) {
    if (record.monsterCount === 0 || typeof record.maxMonsterLevel !== 'number') continue;
    const room = ROOMS[record.roomId];
    if (!room) continue;
    const neighbors = new Set<string>();
    for (const exit of room.exits) {
      if (exit.targetRoomId) neighbors.add(exit.targetRoomId);
    }
    if (typeof room.worldX === 'number' && typeof room.worldY === 'number') {
      for (const dir of CARDINALS) {
        const delta = DELTA[dir];
        const neighbor = coordIndex.get(coordKey(room.worldX + delta.dx, room.worldY + delta.dy));
        if (neighbor) neighbors.add(neighbor.id);
      }
    }
    for (const neighborId of neighbors) {
      const neighbor = byRoom.get(neighborId);
      if (!neighbor || neighbor.monsterCount === 0 || typeof neighbor.maxMonsterLevel !== 'number') continue;
      const pairKey = [record.roomId, neighbor.roomId].sort().join('::');
      if (seen.has(pairKey)) continue;
      seen.add(pairKey);
      const diff = Math.abs(record.maxMonsterLevel - neighbor.maxMonsterLevel);
      if (diff <= 8) continue;
      const warningText = `${ROOMS[record.roomId]?.description ?? ''} ${ROOMS[neighbor.roomId]?.description ?? ''}`;
      if (/警告|危險|封鎖|高危|不要|不可|邊界|守衛|warning|danger/i.test(warningText)) continue;
      addIssue('adjacent.level_spike', record, 'warning', '相鄰可達房間怪物等級差距過大且缺少 warning / blocker 線索', {
        fromRoomId: record.roomId,
        fromMaxLevel: record.maxMonsterLevel,
        toRoomId: neighbor.roomId,
        toMaxLevel: neighbor.maxMonsterLevel,
        diff,
      });
    }
  }
}

function auditTerrainFamilies(allRecords: MonsterRoomRecord[]): void {
  for (const record of allRecords) {
    if (record.monsterCount === 0) continue;
    const allowed = allowedFamiliesForZone(ZONES[record.zoneId]);
    if (!allowed) continue;
    const mismatches = record.monsterFamilies.filter(family => !allowed.has(family as MonsterDef['family']));
    if (mismatches.length === 0) continue;
    addIssue('terrain_family.mismatch', record, 'warning', '怪物 family 與 zone 地貌標籤不一致，需人工確認或調整', {
      allowedFamilies: [...allowed].sort(),
      monsterFamilies: record.monsterFamilies,
      mismatches,
    });
  }
}

function allowedFamiliesForZone(zone: ZoneDef | undefined): Set<MonsterDef['family']> | undefined {
  if (!zone) return undefined;
  const override = ZONE_TERRAIN_OVERRIDES[zone.id];
  if (override) return override;
  const text = `${zone.id} ${zone.name} ${zone.description} ${zone.tags.join(' ')} ${zone.primaryElements.join(' ')}`;
  if (/火山|熔岩|硫磺|volcano|lava|fire/u.test(text)) return TERRAIN_FAMILIES.volcanic;
  if (/雪|冰|霜|frozen|frost|snow|ice/u.test(text)) return TERRAIN_FAMILIES.snow;
  if (/高原|隘口|mine|礦|mountain|highland/u.test(text)) return TERRAIN_FAMILIES.mountain;
  if (/沙|荒地|玻砂|desert|dune|badland/u.test(text)) return TERRAIN_FAMILIES.desert;
  if (/海|岸|港|潮|鹽|coast|harbor|salt/u.test(text)) return TERRAIN_FAMILIES.coast;
  if (/沼|濕地|湖|河|溪|水|delta|fen|marsh|lake/u.test(text)) return TERRAIN_FAMILIES.swamp;
  if (/森林|林|樹|forest|wood|canopy/u.test(text)) return TERRAIN_FAMILIES.forest;
  if (zone.type === 'town' || /市集|城鎮|競技|market|town|arena/u.test(text)) return TERRAIN_FAMILIES.town;
  if (/戰|邊境|要塞|fort|frontier/u.test(text)) return TERRAIN_FAMILIES.war;
  if (/平原|農田|草|plains|farmland/u.test(text)) return TERRAIN_FAMILIES.plains;
  return undefined;
}

function buildZoneSummary(zoneId: string, zoneRecords: MonsterRoomRecord[]) {
  const monsterRecords = zoneRecords.filter(record => record.monsterCount > 0);
  const monsterLevels = monsterRecords.flatMap(record => record.monsterLevels);
  return {
    zoneId,
    zoneName: ZONES[zoneId]?.name ?? zoneId,
    zoneLevelRange: ZONES[zoneId]?.levelRange ?? [1, 60],
    roomCount: zoneRecords.length,
    roomsWithMonsters: monsterRecords.length,
    roomsWithoutMonsters: zoneRecords.length - monsterRecords.length,
    fillRooms: zoneRecords.filter(record => record.isFillRoom).length,
    fillRoomsWithMonsters: zoneRecords.filter(record => record.isFillRoom && record.monsterCount > 0).length,
    minMonsterLevel: monsterLevels.length ? Math.min(...monsterLevels) : null,
    maxMonsterLevel: monsterLevels.length ? Math.max(...monsterLevels) : null,
    averageMonsterLevel: monsterLevels.length ? round(monsterLevels.reduce((sum, level) => sum + level, 0) / monsterLevels.length) : null,
    eliteCount: monsterRecords.reduce((sum, record) => sum + (record.hasElite ? 1 : 0), 0),
    bossCount: monsterRecords.reduce((sum, record) => sum + (record.hasBoss ? 1 : 0), 0),
    monsterFamilies: [...new Set(monsterRecords.flatMap(record => record.monsterFamilies))].sort(),
    issueCount: issues.filter(issue => issue.zoneId === zoneId).length,
    highSeverityIssueCount: issues.filter(issue => issue.zoneId === zoneId && issue.severity === 'error').length,
  };
}

function addIssue(kind: MonsterDistributionIssue['kind'], record: MonsterRoomRecord, severity: IssueSeverity, message: string, details?: Record<string, unknown>): void {
  issues.push({
    id: `${record.zoneId}/${record.roomId}/${kind}`,
    zoneId: record.zoneId,
    roomId: record.roomId,
    severity,
    kind,
    message,
    details,
  });
}

function countBy<T>(items: T[], getKey: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of items) {
    const key = getKey(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

function coordKey(x: number, y: number): string {
  return `${x},${y}`;
}

function round(value: number): number {
  return Math.round(value * 10) / 10;
}
