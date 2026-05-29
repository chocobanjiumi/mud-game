import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RoomDef, ZoneDef } from '@game/shared';
import { ROOMS, ZONES } from '../server/src/data/rooms.js';

type Severity = 'error' | 'warning';
type IssueKind =
  | 'asset.missing'
  | 'asset.not_png'
  | 'asset.too_small'
  | 'asset.ratio'
  | 'image.missing'
  | 'prompt.missing'
  | 'prompt.room_name'
  | 'prompt.room_id'
  | 'prompt.zone'
  | 'prompt.function'
  | 'prompt.terrain'
  | 'prompt.direction'
  | 'prompt.style'
  | 'prompt.forbidden'
  | 'instance.exemption';

interface RoomImageIssue {
  severity: Severity;
  kind: IssueKind;
  roomId: string;
  zoneId: string;
  message: string;
  assetPath?: string;
}

interface RoomImageRecord {
  roomId: string;
  roomName: string;
  zoneId: string;
  zoneName: string;
  zoneType: ZoneDef['type'];
  image?: string;
  imagePrompt?: string;
  assetPath: string;
  assetExists: boolean;
  assetWidth?: number;
  assetHeight?: number;
  worldRoom: boolean;
  instanceOnly: boolean;
  phase5Target: boolean;
  issues: RoomImageIssue[];
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOM_IMAGE_DIR = path.join(ROOT, 'client/public/images/rooms');
const OUT_PATH = path.join(ROOT, 'server/reports/room-image-audit.json');
const STYLE_PHRASE = 'dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text';
const MIN_WIDTH = 960;
const MIN_HEIGHT = 1536;
const EXPECTED_RATIO = 10 / 16;
const WRITE = process.argv.includes('--write');
const STRICT = process.argv.includes('--strict');

const FUNCTION_PATTERN = /room function (connector|portal|border road|town service|resource path|danger pocket|entrance|main route|combat|resource|hidden|elite|boss)/i;
const TERRAIN_PATTERN = /橋|坡|門|井|祭壇|碼頭|礦道|林徑|棧道|路|小徑|通道|巷|橋|城|村|亭|棚|樹|林|沼|湖|河|溪|海|岸|崖|礁|沙|丘|岩|山|雪|冰|火|熔|灰|草|田|水|terrain [a-z ]+/i;
const DIRECTION_PATTERN = /北|南|東|西|上|下|入口|出口|旁|側|盡頭|中央|通往|連到|路徑|坡道|水道|城門|north|south|east|west|up|down/i;
const FORBIDDEN_PATTERN = /\b(modern|sci[- ]?fi|science fiction|cartoon|chibi|placeholder|template|abstract background|only fog|solid color|color block)\b|現代|科幻|卡通|Q版|佔位|模板|抽象|純霧|色塊/i;

const records = Object.values(ROOMS)
  .sort((a, b) => a.zone.localeCompare(b.zone) || a.id.localeCompare(b.id))
  .map(buildRecord);
const issues = records.flatMap(record => record.issues);
const worldRecords = records.filter(record => record.worldRoom);
const phase5Targets = records.filter(record => record.phase5Target);

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    rooms: records.length,
    worldRooms: worldRecords.length,
    instanceOnlyRooms: records.filter(record => record.instanceOnly).length,
    phase5Targets: phase5Targets.length,
    missingPrompt: worldRecords.filter(record => !record.imagePrompt).length,
    missingImageField: worldRecords.filter(record => !record.image).length,
    missingAsset: worldRecords.filter(record => !record.assetExists).length,
    issues: issues.length,
    errors: issues.filter(issue => issue.severity === 'error').length,
    warnings: issues.filter(issue => issue.severity === 'warning').length,
    byIssueKind: countBy(issues, issue => issue.kind),
    byZone: summarizeByZone(worldRecords),
  },
  phase5Targets: phase5Targets.map(record => ({
    roomId: record.roomId,
    roomName: record.roomName,
    zoneId: record.zoneId,
    zoneName: record.zoneName,
    assetPath: record.assetPath,
    missingPrompt: !record.imagePrompt,
    missingImageField: !record.image,
    missingAsset: !record.assetExists,
    issues: record.issues,
  })),
  instanceExemptions: records
    .filter(record => record.instanceOnly)
    .map(record => ({
      roomId: record.roomId,
      zoneId: record.zoneId,
      reason: `instance-only room in ${record.zoneType} zone; Phase 5 tracks world rooms first`,
    })),
  issues,
};

if (WRITE) {
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

console.log(formatReport());

if (STRICT && report.summary.errors > 0) {
  process.exitCode = 1;
}

function buildRecord(room: RoomDef): RoomImageRecord {
  const zone = ZONES[room.zone];
  const zoneType = zone?.type ?? 'wilds';
  const assetPath = path.join(ROOM_IMAGE_DIR, room.image ?? `${room.id}.png`);
  const relativeAssetPath = relative(assetPath);
  const instanceOnly = isInstanceOnly(room, zone);
  const worldRoom = !instanceOnly;
  const assetSize = fs.existsSync(assetPath) ? readPngSize(assetPath) : undefined;
  const issues: RoomImageIssue[] = [];
  const base = { roomId: room.id, zoneId: room.zone };

  if (worldRoom) {
    if (!room.image) {
      issues.push({ ...base, severity: 'error', kind: 'image.missing', message: 'world room is missing image field', assetPath: relativeAssetPath });
    }
    if (!fs.existsSync(assetPath)) {
      issues.push({ ...base, severity: 'error', kind: 'asset.missing', message: 'world room image asset is missing', assetPath: relativeAssetPath });
    } else if (!assetSize) {
      issues.push({ ...base, severity: 'error', kind: 'asset.not_png', message: 'room image asset must be a PNG file', assetPath: relativeAssetPath });
    } else {
      if (assetSize.width < MIN_WIDTH || assetSize.height < MIN_HEIGHT) {
        issues.push({
          ...base,
          severity: 'error',
          kind: 'asset.too_small',
          message: `room image should be at least ${MIN_WIDTH}x${MIN_HEIGHT}, found ${assetSize.width}x${assetSize.height}`,
          assetPath: relativeAssetPath,
        });
      }
      const ratio = assetSize.width / assetSize.height;
      if (Math.abs(ratio - EXPECTED_RATIO) > 0.02) {
        issues.push({
          ...base,
          severity: 'error',
          kind: 'asset.ratio',
          message: `room image ratio must be close to 10:16, found ${assetSize.width}x${assetSize.height}`,
          assetPath: relativeAssetPath,
        });
      }
    }

    auditPrompt(room, zone, issues);
  } else if (!room.image || !room.imagePrompt || !fs.existsSync(assetPath)) {
    issues.push({
      ...base,
      severity: 'warning',
      kind: 'instance.exemption',
      message: `instance-only room is exempt from Phase 5 world-room image gate (${zoneType})`,
      assetPath: relativeAssetPath,
    });
  }

  return {
    roomId: room.id,
    roomName: room.name,
    zoneId: room.zone,
    zoneName: zone?.name ?? room.zone,
    zoneType,
    image: room.image,
    imagePrompt: room.imagePrompt,
    assetPath: relativeAssetPath,
    assetExists: fs.existsSync(assetPath),
    assetWidth: assetSize?.width,
    assetHeight: assetSize?.height,
    worldRoom,
    instanceOnly,
    phase5Target: worldRoom && (!room.image || !room.imagePrompt || !fs.existsSync(assetPath)),
    issues,
  };
}

function auditPrompt(room: RoomDef, zone: ZoneDef | undefined, issues: RoomImageIssue[]): void {
  const base = { roomId: room.id, zoneId: room.zone };
  const prompt = room.imagePrompt ?? '';
  const zoneName = zone?.name ?? room.zone;

  if (!prompt) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.missing', message: 'world room is missing imagePrompt' });
    return;
  }

  if (!prompt.includes(room.name)) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.room_name', message: 'imagePrompt must include room Chinese name' });
  }
  if (!prompt.includes(room.id)) {
    issues.push({ ...base, severity: 'warning', kind: 'prompt.room_id', message: 'Phase 5 target prompts should include room id' });
  }
  if (!prompt.includes(room.zone) && !prompt.includes(zoneName)) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.zone', message: 'imagePrompt must include zone id or zone name' });
  }
  if (!FUNCTION_PATTERN.test(prompt)) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.function', message: 'imagePrompt must include room function' });
  }
  if (!TERRAIN_PATTERN.test(prompt)) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.terrain', message: 'imagePrompt must include main terrain or architecture cue' });
  }
  if (!DIRECTION_PATTERN.test(prompt) && isPhase5LikelyRoom(room)) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.direction', message: 'Phase 5 target prompt must include visible direction or path cue' });
  }
  if (!prompt.includes(STYLE_PHRASE)) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.style', message: 'imagePrompt missing required style phrase' });
  }
  if (FORBIDDEN_PATTERN.test(prompt)) {
    issues.push({ ...base, severity: 'error', kind: 'prompt.forbidden', message: 'imagePrompt contains forbidden placeholder, UI, modern, cartoon, or abstract terms' });
  }
}

function isPhase5LikelyRoom(room: RoomDef): boolean {
  return /_fill_|_bridge$|_portal$|_shelter$|_supply$|border_trail|frozen_divide|storm_pass/u.test(room.id);
}

function isInstanceOnly(room: RoomDef, zone: ZoneDef | undefined): boolean {
  if (typeof room.worldX === 'number' && typeof room.worldY === 'number') return false;
  return zone?.type === 'dungeon' || zone?.type === 'instance';
}

function readPngSize(filePath: string): { width: number; height: number } | undefined {
  const buffer = fs.readFileSync(filePath);
  if (buffer.length < 24) return undefined;
  if (buffer.readUInt32BE(0) !== 0x89504e47 || buffer.readUInt32BE(4) !== 0x0d0a1a0a) return undefined;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function summarizeByZone(zoneRecords: RoomImageRecord[]): Record<string, {
  zoneName: string;
  rooms: number;
  missingPrompt: number;
  missingImageField: number;
  missingAsset: number;
  phase5Targets: number;
  errors: number;
  warnings: number;
}> {
  const result: Record<string, {
    zoneName: string;
    rooms: number;
    missingPrompt: number;
    missingImageField: number;
    missingAsset: number;
    phase5Targets: number;
    errors: number;
    warnings: number;
  }> = {};

  for (const record of zoneRecords) {
    const current = result[record.zoneId] ?? {
      zoneName: record.zoneName,
      rooms: 0,
      missingPrompt: 0,
      missingImageField: 0,
      missingAsset: 0,
      phase5Targets: 0,
      errors: 0,
      warnings: 0,
    };
    current.rooms += 1;
    if (!record.imagePrompt) current.missingPrompt += 1;
    if (!record.image) current.missingImageField += 1;
    if (!record.assetExists) current.missingAsset += 1;
    if (record.phase5Target) current.phase5Targets += 1;
    current.errors += record.issues.filter(issue => issue.severity === 'error').length;
    current.warnings += record.issues.filter(issue => issue.severity === 'warning').length;
    result[record.zoneId] = current;
  }

  return result;
}

function countBy<T>(items: T[], keyOf: (item: T) => string): Record<string, number> {
  return items.reduce<Record<string, number>>((counts, item) => {
    const key = keyOf(item);
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});
}

function relative(filePath: string): string {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function formatReport(): string {
  const lines = [
    '# Room Image Audit',
    `Generated: ${report.generatedAt}`,
    `Rooms: ${report.summary.rooms}`,
    `World rooms: ${report.summary.worldRooms}`,
    `Instance-only rooms: ${report.summary.instanceOnlyRooms}`,
    `Phase 5 targets: ${report.summary.phase5Targets}`,
    `Missing imagePrompt: ${report.summary.missingPrompt}`,
    `Missing image field: ${report.summary.missingImageField}`,
    `Missing asset: ${report.summary.missingAsset}`,
    `Issues: ${report.summary.issues}`,
    `Errors: ${report.summary.errors}`,
    `Warnings: ${report.summary.warnings}`,
  ];
  if (WRITE) lines.push(`Report written: ${OUT_PATH}`);
  return lines.join('\n');
}
