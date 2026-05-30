import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { Direction, RoomDef } from '@game/shared';
import { ROOMS, ZONES, getRoom } from '../server/src/data/rooms.js';
import {
  STATIC_WORLD_BRIDGE_ROOMS,
  STATIC_WORLD_FILLER_ROOMS,
} from '../server/src/data/world-map-static.js';
import { MONSTERS } from '../server/src/data/monsters.js';
import { NPCS } from '../server/src/data/npcs.js';
import { getRoomGatheringTags } from '../server/src/game/gathering.js';

type FillRoomGrade = 'A_main_transition' | 'B_connector' | 'C_empty_filler' | 'D_upgrade_candidate';
type FillRoomPurpose = 'route' | 'border' | 'portal' | 'service' | 'gathering' | 'monster' | 'npc_or_quest' | 'blocker';
type IssueSeverity = 'error' | 'warning';

interface FillRoomIssue {
  id: string;
  zone: string;
  severity: IssueSeverity;
  kind:
    | 'description.length'
    | 'description.terrain'
    | 'description.direction'
    | 'description.purpose'
    | 'exit.description.missing'
    | 'exit.description.length'
    | 'exit.description.generic'
    | 'exit.direction_mismatch'
    | 'dead_end.no_gameplay'
    | 'name.repeated_cluster'
    | 'description.repeated_opening'
    | 'reference.missing';
  message: string;
  current?: number;
  minimum?: number;
  text?: string;
}

interface NeighborSummary {
  byExit: Partial<Record<Direction, string>>;
  byCoordinate: Partial<Record<Direction, string>>;
}

interface FillRoomRecord {
  id: string;
  zone: string;
  name: string;
  grade: FillRoomGrade;
  purposes: FillRoomPurpose[];
  worldX?: number;
  worldY?: number;
  mapX: number;
  mapY: number;
  neighbors: NeighborSummary;
  crossZoneBoundary: boolean;
  mainRoute: boolean;
  deadEnd: boolean;
  hasMonsters: boolean;
  hasGathering: boolean;
  hasNpcs: boolean;
  hasQuestCue: boolean;
  hasServiceCue: boolean;
  hasLockedExit: boolean;
  descriptionLength: number;
  exitCount: number;
  missingExitDescriptions: number;
  shortExitDescriptions: number;
  issues: FillRoomIssue[];
}

const write = process.argv.includes('--write');
const strict = process.argv.includes('--strict');
const outPath = resolve(process.cwd(), 'reports/fill-room-quality.json');

const DIRECTIONS: Direction[] = ['north', 'south', 'east', 'west'];
const OPPOSITE: Record<Direction, Direction> = {
  north: 'south',
  south: 'north',
  east: 'west',
  west: 'east',
};
const DELTA: Record<Direction, { dx: number; dy: number }> = {
  north: { dx: 0, dy: -1 },
  south: { dx: 0, dy: 1 },
  east: { dx: 1, dy: 0 },
  west: { dx: -1, dy: 0 },
};

const staticFillerIds = new Set(Object.keys(STATIC_WORLD_FILLER_ROOMS));
const staticBridgeIds = new Set(Object.keys(STATIC_WORLD_BRIDGE_ROOMS));
const coordIndex = new Map<string, RoomDef>();

for (const room of Object.values(ROOMS)) {
  if (typeof room.worldX === 'number' && typeof room.worldY === 'number') {
    coordIndex.set(coordKey(room.worldX, room.worldY), room);
  }
}

const fillRooms = Object.values(ROOMS)
  .filter(room => isFillRoom(room))
  .sort((a, b) => a.zone.localeCompare(b.zone) || a.id.localeCompare(b.id));

const records: FillRoomRecord[] = fillRooms.map(buildFillRoomRecord);
const issues = records.flatMap(record => record.issues);
issues.push(...findRepeatedNameClusterIssues(records));
issues.push(...findRepeatedOpeningIssues(records));

for (const issue of issues) {
  const record = records.find(candidate => candidate.id === issue.id);
  if (record && !record.issues.includes(issue)) record.issues.push(issue);
}

const byZone = new Map<string, FillRoomRecord[]>();
for (const record of records) {
  const list = byZone.get(record.zone) ?? [];
  list.push(record);
  byZone.set(record.zone, list);
}

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    fillRooms: records.length,
    zones: byZone.size,
    staticFillerRooms: staticFillerIds.size,
    staticBridgeRooms: staticBridgeIds.size,
    issues: issues.length,
    errors: issues.filter(issue => issue.severity === 'error').length,
    warnings: issues.filter(issue => issue.severity === 'warning').length,
    byGrade: countBy(records, record => record.grade),
    byPurpose: countPurposes(records),
    byIssueKind: countBy(issues, issue => issue.kind),
  },
  zones: [...byZone.entries()].map(([zoneId, zoneRecords]) => ({
    zoneId,
    zoneName: ZONES[zoneId]?.name ?? zoneId,
    fillRooms: zoneRecords.length,
    issues: zoneRecords.reduce((count, record) => count + record.issues.length, 0),
    records: zoneRecords,
  })),
  issues,
};

if (write) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

console.log(formatReport(report, write ? outPath : undefined));

if (strict && report.summary.errors > 0) {
  process.exitCode = 1;
}

function isFillRoom(room: RoomDef): boolean {
  return room.id.includes('_fill_')
    || staticFillerIds.has(room.id)
    || staticBridgeIds.has(room.id)
    || /_bridge$|_portal$|_shelter$|_supply$|border_trail|frozen_divide|storm_pass/u.test(room.id);
}

function buildFillRoomRecord(room: RoomDef): FillRoomRecord {
  const neighbors = buildNeighbors(room);
  const crossZoneBoundary = hasCrossZoneBoundary(room, neighbors);
  const purposes = inferPurposes(room, crossZoneBoundary);
  const grade = inferGrade(room, purposes, crossZoneBoundary);
  const deadEnd = room.exits.filter(exit => !exit.locked).length <= 1;
  const hasGathering = getRoomGatheringTags(room).size > 0;
  const hasMonsters = (room.monsters?.length ?? 0) > 0;
  const hasNpcs = (room.npcs?.length ?? 0) > 0;
  const marker = `${room.id} ${room.name} ${room.description}`;
  const hasQuestCue = /任務|委託|告示|目標|證物|回報|調查/u.test(marker);
  const hasServiceCue = /傳送|補給|商|店|鋪|倉庫|治療|旅店|訓練|修理|服務|村|棚|亭/u.test(marker);
  const hasLockedExit = room.exits.some(exit => exit.locked);
  const descriptionLength = countCjkChars(room.description);
  const missingExitDescriptions = room.exits.filter(exit => !(exit.description ?? '').trim()).length;
  const shortExitDescriptions = room.exits.filter(exit => {
    const target = getRoom(exit.targetRoomId);
    const minimum = target && target.zone !== room.zone ? 20 : 12;
    return countCjkChars(exit.description ?? '') < minimum;
  }).length;

  const record: FillRoomRecord = {
    id: room.id,
    zone: room.zone,
    name: room.name,
    grade,
    purposes,
    worldX: room.worldX,
    worldY: room.worldY,
    mapX: room.mapX,
    mapY: room.mapY,
    neighbors,
    crossZoneBoundary,
    mainRoute: grade === 'A_main_transition' || purposes.includes('route'),
    deadEnd,
    hasMonsters,
    hasGathering,
    hasNpcs,
    hasQuestCue,
    hasServiceCue,
    hasLockedExit,
    descriptionLength,
    exitCount: room.exits.length,
    missingExitDescriptions,
    shortExitDescriptions,
    issues: [],
  };

  auditFillRoom(record, room);
  return record;
}

function buildNeighbors(room: RoomDef): NeighborSummary {
  const byExit: Partial<Record<Direction, string>> = {};
  const byCoordinate: Partial<Record<Direction, string>> = {};

  for (const exit of room.exits) {
    if (DIRECTIONS.includes(exit.direction)) byExit[exit.direction] = exit.targetRoomId;
  }

  if (typeof room.worldX === 'number' && typeof room.worldY === 'number') {
    for (const direction of DIRECTIONS) {
      const delta = DELTA[direction];
      const neighbor = coordIndex.get(coordKey(room.worldX + delta.dx, room.worldY + delta.dy));
      if (neighbor) byCoordinate[direction] = neighbor.id;
    }
  }

  return { byExit, byCoordinate };
}

function hasCrossZoneBoundary(room: RoomDef, neighbors: NeighborSummary): boolean {
  for (const exit of room.exits) {
    const target = getRoom(exit.targetRoomId);
    if (target && target.zone !== room.zone) return true;
  }
  for (const roomId of Object.values(neighbors.byCoordinate)) {
    const target = getRoom(roomId);
    if (target && target.zone !== room.zone) return true;
  }
  return false;
}

function inferPurposes(room: RoomDef, crossZoneBoundary: boolean): FillRoomPurpose[] {
  const purposes = new Set<FillRoomPurpose>();
  const marker = `${room.id} ${room.name} ${room.description}`;
  if (crossZoneBoundary || /border|bridge|分界|邊|界|橋|門|渡口/u.test(marker)) purposes.add('border');
  if (/portal|傳送/u.test(marker)) purposes.add('portal');
  if (/supply|shelter|補給|避風|棚|亭|村/u.test(marker)) purposes.add('service');
  if (room.exits.length === 0) purposes.add('blocker');
  if (getRoomGatheringTags(room).size > 0) purposes.add('gathering');
  if ((room.monsters?.length ?? 0) > 0) purposes.add('monster');
  if ((room.npcs?.length ?? 0) > 0 || /任務|NPC|委託|告示|村民|守衛/u.test(marker)) purposes.add('npc_or_quest');
  if (room.exits.some(exit => exit.locked)) purposes.add('blocker');
  if (room.exits.filter(exit => !exit.locked).length >= 2 || staticBridgeIds.has(room.id)) purposes.add('route');
  if (purposes.size === 0) purposes.add('route');
  return [...purposes].sort();
}

function inferGrade(room: RoomDef, purposes: FillRoomPurpose[], crossZoneBoundary: boolean): FillRoomGrade {
  if (purposes.some(purpose => ['portal', 'service', 'gathering', 'monster', 'npc_or_quest'].includes(purpose))) {
    return 'D_upgrade_candidate';
  }
  if (crossZoneBoundary || staticBridgeIds.has(room.id) || room.exits.length >= 3) return 'A_main_transition';
  if (room.exits.filter(exit => !exit.locked).length <= 1) return 'C_empty_filler';
  return 'B_connector';
}

function auditFillRoom(record: FillRoomRecord, room: RoomDef): void {
  const minimumDescription = 120;
  if (record.descriptionLength < minimumDescription) {
    addIssue(record, 'error', 'description.length', `description 中文字數不足，${record.crossZoneBoundary ? 'border fill room' : 'fill room'} 需要更具體的地貌與路線用途`, record.descriptionLength, minimumDescription, room.description);
  }
  if (!/橋|坡|門|井|祭壇|碼頭|礦道|林徑|道路|小路|石階|階梯|水道|棧橋|廣場|市場|店|倉庫|港|海岸|湖|河|溪|森林|林|丘|谷|山|洞|廢墟|塔|堡|營地|田|沼|灘|峽|牆|廊|路口|渡口|裂隙|門廊|棚|熔岩|晶|空地|場|庭|院|棧道|海灣|礁|岩|崖|平台|樹|平原|泉|草|雪|冰|沙|灰|巷|街|岸|草坡/u.test(room.description)) {
    addIssue(record, 'error', 'description.terrain', 'description 缺少明確地形或建築主體', record.descriptionLength, minimumDescription, room.description);
  }
  if (!/北|南|東|西|前方|後方|左側|右側|入口|出口|路口|通往|連到|接向|銜接|延伸|轉入|穿過|沿著|繞過|抵達|退回|深入|折返|邊緣|中央|旁路|支路|岔路|附近|旁|側/u.test(room.description)) {
    addIssue(record, 'error', 'description.direction', 'description 缺少方向或路徑線索', record.descriptionLength, minimumDescription, room.description);
  }
  if (!/路|通道|邊界|分界|過渡|主路|補給|傳送|採集|巡邏|危險|封|阻|守|可在此|提醒|路牌|腳印|痕跡|安全|接回|前往/u.test(room.description)) {
    addIssue(record, 'warning', 'description.purpose', 'description 沒有說清楚這個 fill room 是純路線、border、blocker 或玩法房', record.descriptionLength, minimumDescription, room.description);
  }

  if (record.deadEnd && !record.hasGathering && !record.hasMonsters && !record.hasNpcs && !record.hasLockedExit && !record.purposes.includes('blocker') && !record.purposes.includes('portal') && !record.purposes.includes('service')) {
    addIssue(record, 'warning', 'dead_end.no_gameplay', '只有一個可通行出口且沒有玩法用途，應刪除、block、升級或明確標為路線端點');
  }

  for (const exit of room.exits) {
    const target = getRoom(exit.targetRoomId);
    const text = exit.description ?? '';
    const length = countCjkChars(text);
    const minimum = target && target.zone !== room.zone ? 20 : 12;
    const idSuffix = `${exit.direction}->${exit.targetRoomId}`;
    if (!text.trim()) {
      addIssue(record, 'error', 'exit.description.missing', `exit ${idSuffix} 缺 description`, 0, minimum);
    } else if (length < minimum) {
      addIssue(record, 'error', 'exit.description.length', `exit ${idSuffix} description 中文字數不足`, length, minimum, text);
    }
    if (/^(往|向)?[東西南北]$|^返回$|^通往/u.test(text.trim())) {
      addIssue(record, 'warning', 'exit.description.generic', `exit ${idSuffix} description 過於泛用，需寫出路徑材質或地貌銜接`, length, minimum, text);
    }
    if (target && isNormalEdge(exit.edgeKind) && hasCoordinate(room) && hasCoordinate(target)) {
      const delta = DELTA[exit.direction];
      const expectedX = room.worldX + delta.dx;
      const expectedY = room.worldY + delta.dy;
      if (target.worldX !== expectedX || target.worldY !== expectedY) {
        addIssue(record, 'error', 'exit.direction_mismatch', `普通 exit ${idSuffix} 座標不在 ${exit.direction} 相鄰格`, undefined, undefined, text);
      }
    }
  }

  for (const spawn of room.monsters ?? []) {
    if (!MONSTERS[spawn.monsterId]) {
      addIssue(record, 'error', 'reference.missing', `monsters 引用不存在的 monsterId: ${spawn.monsterId}`);
    }
  }
  for (const npcId of room.npcs ?? []) {
    if (!NPCS[npcId]) {
      addIssue(record, 'error', 'reference.missing', `npcs 引用不存在的 npcId: ${npcId}`);
    }
  }
}

function findRepeatedNameClusterIssues(allRecords: FillRoomRecord[]): FillRoomIssue[] {
  const issues: FillRoomIssue[] = [];
  const byZoneAndName = new Map<string, FillRoomRecord[]>();
  for (const record of allRecords) {
    const key = `${record.zone}/${record.name}`;
    const list = byZoneAndName.get(key) ?? [];
    list.push(record);
    byZoneAndName.set(key, list);
  }

  for (const list of byZoneAndName.values()) {
    const fillIds = new Set(list.map(record => record.id));
    const visited = new Set<string>();
    for (const start of list) {
      if (visited.has(start.id)) continue;
      const cluster: FillRoomRecord[] = [];
      const queue = [start];
      visited.add(start.id);
      while (queue.length > 0) {
        const current = queue.shift()!;
        cluster.push(current);
        for (const neighborId of Object.values(current.neighbors.byCoordinate)) {
          if (!neighborId || !fillIds.has(neighborId) || visited.has(neighborId)) continue;
          const neighbor = list.find(record => record.id === neighborId);
          if (!neighbor) continue;
          visited.add(neighbor.id);
          queue.push(neighbor);
        }
      }
      if (cluster.length >= 3) {
        for (const record of cluster) {
          issues.push(makeIssue(record, 'warning', 'name.repeated_cluster', `同 zone 內有 ${cluster.length} 個相鄰 fill room 連續使用「${record.name}」，需要改成更具體地貌名稱`));
        }
      }
    }
  }
  return issues;
}

function findRepeatedOpeningIssues(allRecords: FillRoomRecord[]): FillRoomIssue[] {
  const issues: FillRoomIssue[] = [];
  const byZoneOpening = new Map<string, FillRoomRecord[]>();
  for (const record of allRecords) {
    const room = ROOMS[record.id];
    const opening = compact(room.description).slice(0, 18);
    if (opening.length < 8) continue;
    const key = `${record.zone}/${opening}`;
    const list = byZoneOpening.get(key) ?? [];
    list.push(record);
    byZoneOpening.set(key, list);
  }
  for (const list of byZoneOpening.values()) {
    if (list.length < 3) continue;
    for (const record of list) {
      issues.push(makeIssue(record, 'warning', 'description.repeated_opening', `同 zone 有 ${list.length} 個 fill room 使用相同描述開頭，需避免模板句`));
    }
  }
  return issues;
}

function addIssue(
  record: FillRoomRecord,
  severity: IssueSeverity,
  kind: FillRoomIssue['kind'],
  message: string,
  current?: number,
  minimum?: number,
  text?: string,
): void {
  record.issues.push(makeIssue(record, severity, kind, message, current, minimum, text));
}

function makeIssue(
  record: FillRoomRecord,
  severity: IssueSeverity,
  kind: FillRoomIssue['kind'],
  message: string,
  current?: number,
  minimum?: number,
  text?: string,
): FillRoomIssue {
  return {
    id: record.id,
    zone: record.zone,
    severity,
    kind,
    message,
    current,
    minimum,
    text,
  };
}

function isNormalEdge(edgeKind: RoomDef['exits'][number]['edgeKind']): boolean {
  return !edgeKind || edgeKind === 'normal';
}

function hasCoordinate(room: RoomDef): room is RoomDef & { worldX: number; worldY: number } {
  return typeof room.worldX === 'number' && typeof room.worldY === 'number';
}

function coordKey(worldX: number, worldY: number): string {
  return `${worldX},${worldY}`;
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /\p{Script=Han}/u.test(char)).length;
}

function compact(text: string): string {
  return text.replace(/\s+/g, '');
}

function countBy<T>(values: T[], selector: (value: T) => string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const value of values) {
    const key = selector(value);
    result[key] = (result[key] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
}

function countPurposes(values: FillRoomRecord[]): Record<string, number> {
  const result: Record<string, number> = {};
  for (const record of values) {
    for (const purpose of record.purposes) {
      result[purpose] = (result[purpose] ?? 0) + 1;
    }
  }
  return Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
}

function formatReport(report: typeof report, outputPath: string | undefined): string {
  const lines = [
    '# Fill Room Quality Audit',
    `Generated: ${report.generatedAt}`,
    `Fill rooms: ${report.summary.fillRooms}`,
    `Zones: ${report.summary.zones}`,
    `Issues: ${report.summary.issues}`,
    `Errors: ${report.summary.errors}`,
    `Warnings: ${report.summary.warnings}`,
    `By grade: ${JSON.stringify(report.summary.byGrade)}`,
    `By issue kind: ${JSON.stringify(report.summary.byIssueKind)}`,
  ];
  const worstZones = [...report.zones]
    .sort((a, b) => b.issues - a.issues || a.zoneId.localeCompare(b.zoneId))
    .slice(0, 12);
  lines.push('Worst zones:');
  for (const zone of worstZones) {
    lines.push(`- ${zone.zoneId}: ${zone.issues} issue(s), ${zone.fillRooms} fill room(s)`);
  }
  if (outputPath) lines.push(`Snapshot written: ${outputPath}`);
  return lines.join('\n');
}
