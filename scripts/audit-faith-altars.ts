import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { FAITH_ALTARS, canFollowFaithAtRoom } from '../server/src/data/faith-altars.js';
import { ROOMS, ZONES } from '../server/src/data/rooms.js';
import { FAITH_DEFS } from '../packages/shared/src/constants/origins.js';

type IssueSeverity = 'error' | 'warning';

interface FaithAltarIssue {
  severity: IssueSeverity;
  kind: string;
  faithId?: string;
  roomId?: string;
  message: string;
}

const write = process.argv.includes('--write');
const outPath = resolve(process.cwd(), 'reports/faith-altar-audit.json');
const issues: FaithAltarIssue[] = [];

const faithIds = Object.keys(FAITH_DEFS).sort();
const altarEntries = Object.values(FAITH_ALTARS).sort((a, b) => a.faithId.localeCompare(b.faithId));
const roomCounts = new Map<string, number>();

for (const altar of altarEntries) {
  roomCounts.set(altar.roomId, (roomCounts.get(altar.roomId) ?? 0) + 1);
}

for (const faithId of faithIds) {
  const faith = FAITH_DEFS[faithId as keyof typeof FAITH_DEFS];
  const altar = FAITH_ALTARS[faith.id];
  if (!altar) {
    addIssue('error', 'altar.missing', faith.id, undefined, `${faith.id} 缺少 primary faith altar`);
    continue;
  }
  if (altar.faithId !== faith.id) {
    addIssue('error', 'altar.faith_id_mismatch', faith.id, altar.roomId, `${faith.id} 的 altar faithId 不一致`);
  }
  if (roomCounts.get(altar.roomId)! > 1) {
    addIssue('error', 'altar.room_duplicate', faith.id, altar.roomId, `${altar.roomId} 被多個信仰共用為 primary altar`);
  }
  if (!canFollowFaithAtRoom(altar.roomId, faith.id)) {
    addIssue('error', 'follow.guard_broken', faith.id, altar.roomId, `canFollowFaithAtRoom 未允許 ${faith.id} 在其祭壇改信`);
  }
  for (const roomId of Object.keys(ROOMS).slice(0, 30)) {
    if (roomId === altar.roomId) continue;
    if (canFollowFaithAtRoom(roomId, faith.id)) {
      addIssue('error', 'follow.bypass', faith.id, roomId, `${faith.id} 可在非對應祭壇 ${roomId} 改信`);
      break;
    }
  }

  const room = ROOMS[altar.roomId];
  if (!room) {
    addIssue('error', 'altar.room_missing', faith.id, altar.roomId, `${faith.id} 祭壇房不存在：${altar.roomId}`);
    continue;
  }
  const zone = ZONES[room.zone];
  if (!zone) {
    addIssue('error', 'altar.zone_missing', faith.id, room.id, `${room.id} 所屬 zone 不存在：${room.zone}`);
  } else if (zone.type === 'dungeon' || zone.type === 'instance') {
    addIssue('error', 'altar.instance_zone', faith.id, room.id, `${room.id} 位於 instance-only zone，不可作為主要改信祭壇`);
  }
  if (typeof room.worldX !== 'number' || typeof room.worldY !== 'number') {
    addIssue('error', 'altar.world_coordinate_missing', faith.id, room.id, `${room.id} 缺少 worldX/worldY`);
  }
  if (room.description.length < 80) {
    addIssue('error', 'altar.description_short', faith.id, room.id, `${room.id} description 少於 80 字`);
  }
  if (!/祭壇|神殿|禮拜堂|聖壇|祠|熔爐|競技場/u.test(room.description + room.name)) {
    addIssue('error', 'altar.symbol_missing', faith.id, room.id, `${room.id} 描述缺少祭壇或神聖地標主體`);
  }
  const domainMatched = faith.domains.some(domain => room.description.includes(domain) || room.name.includes(domain));
  const titleMatched = room.description.includes(faith.name) || room.description.includes(faith.title);
  if (!domainMatched && !titleMatched) {
    addIssue('warning', 'altar.domain_cue_missing', faith.id, room.id, `${room.id} 描述缺少 ${faith.name} 或領域線索`);
  }
  if (room.exits.length === 0 || room.exits.some(exit => !exit.description || exit.description.length < 8)) {
    addIssue('error', 'altar.exit_description_missing', faith.id, room.id, `${room.id} 祭壇出口描述不足`);
  }
}

const commandSource = readFileSync(resolve(process.cwd(), 'src/game/commands.ts'), 'utf8');
if (!commandSource.includes('canFollowFaithAtRoom(char.roomId, faithId)')) {
  addIssue('error', 'faith_follow.guard_missing', undefined, undefined, '`faith follow` 未使用祭壇房間限制');
}
if (!commandSource.includes('forgetSkill(char.id, FAITH_DEFS[current].passiveSkillId)') || !commandSource.includes('learnSkill(char.id, next.passiveSkillId)')) {
  addIssue('error', 'faith_follow.passive_swap_missing', undefined, undefined, '`faith follow` 未同步切換信仰被動技能');
}

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    faiths: faithIds.length,
    altars: altarEntries.length,
    issues: issues.length,
    errors: issues.filter(issue => issue.severity === 'error').length,
    warnings: issues.filter(issue => issue.severity === 'warning').length,
  },
  altars: altarEntries.map(altar => {
    const room = ROOMS[altar.roomId];
    const faith = FAITH_DEFS[altar.faithId];
    return {
      faithId: altar.faithId,
      faithName: faith.name,
      faithTitle: faith.title,
      roomId: altar.roomId,
      roomName: room?.name ?? null,
      zoneId: room?.zone ?? null,
      zoneName: room ? ZONES[room.zone]?.name ?? null : null,
      worldX: room?.worldX ?? null,
      worldY: room?.worldY ?? null,
      locationHint: altar.locationHint,
      dangerNote: altar.dangerNote,
    };
  }),
  issues,
};

if (write) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`);
}

console.log('# Faith Altar Audit');
console.log(`Generated: ${report.generatedAt}`);
console.log(`Faiths: ${report.summary.faiths}`);
console.log(`Altars: ${report.summary.altars}`);
console.log(`Issues: ${report.summary.issues}`);
console.log(`Errors: ${report.summary.errors}`);
console.log(`Warnings: ${report.summary.warnings}`);
if (write) console.log(`Report written: ${outPath}`);

if (report.summary.errors > 0) {
  process.exitCode = 1;
}

function addIssue(severity: IssueSeverity, kind: string, faithId: string | undefined, roomId: string | undefined, message: string): void {
  issues.push({ severity, kind, faithId, roomId, message });
}
