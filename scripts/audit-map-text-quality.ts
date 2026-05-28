import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import { ROOMS, ZONES, getRoom } from '../server/src/data/rooms.js';
import { NPCS } from '../server/src/data/npcs.js';
import { DUNGEON_DEFS } from '../server/src/data/dungeons.js';
import { QUEST_DEFS } from '../server/src/game/quest.js';
import { EXPANDED_QUEST_DEFS } from '../server/src/game/quest-system.js';
import { buildInstanceEntryDefs, buildZoneMapPlans, plannedMapScopeForRoom } from '../server/src/data/world-map2-plan.js';

type TextKind =
  | 'room.description'
  | 'exit.description'
  | 'npc.description'
  | 'npc.dialogue.text'
  | 'npc.dialogue.option'
  | 'quest.description'
  | 'quest.dialogueStart'
  | 'quest.dialogueComplete'
  | 'quest.objective'
  | 'dungeon.description'
  | 'dungeon.room.description'
  | 'instanceEntry.description'
  | 'item.description';

interface TextIssue {
  id: string;
  kind: TextKind;
  field: string;
  currentLength: number;
  minimumLength: number;
  text: string;
  reason: string;
}

const write = process.argv.includes('--write');
const strict = process.argv.includes('--strict');
const outPath = resolve(process.cwd(), 'reports/map-text-quality.json');

const zonePlans = buildZoneMapPlans(ZONES);
const issues: TextIssue[] = [];
const bannedGenericPhrases = [
  '這裡很危險',
  '你感到不安',
  '前方有敵人',
  '往北',
  '往南',
  '往東',
  '往西',
  '通往下一區',
  '進入副本',
  '無法進入',
];

for (const room of Object.values(ROOMS)) {
  const zone = ZONES[room.zone];
  const plan = zonePlans.get(room.zone);
  const scope = plannedMapScopeForRoom(room, plan);
  const roomMinimum = roomMinimumLength(room.id, room.name, room.description, zone?.type, scope);
  checkText(`${room.zone}/${room.id}`, 'room.description', 'description', room.description, roomMinimum, 'room 描述字數不足或過於泛用');

  for (const exit of room.exits) {
    const target = getRoom(exit.targetRoomId);
    const isCrossZone = !!target && target.zone !== room.zone;
    const isSpecial = !!exit.edgeKind && exit.edgeKind !== 'normal';
    const minimum = isSpecial ? 28 : isCrossZone ? 20 : 12;
    checkText(
      `${room.id}:${exit.direction}->${exit.targetRoomId}`,
      'exit.description',
      'description',
      exit.description ?? '',
      minimum,
      isSpecial ? 'special edge 描述需說明移動方式與狀態' : isCrossZone ? '跨 zone exit 描述需說明地貌銜接' : 'exit 描述字數不足',
    );
  }
}

for (const npc of Object.values(NPCS)) {
  checkText(npc.id, 'npc.description', 'description', npc.description, 45, 'NPC 描述需有外觀、位置或職能線索');
  for (const node of npc.dialogue) {
    checkText(`${npc.id}/${node.id}`, 'npc.dialogue.text', 'text', node.text, 45, 'NPC dialogue node 文字不足');
    for (const [index, option] of (node.options ?? []).entries()) {
      const optionText = option.text ?? '';
      const trimmed = optionText.trim();
      if (trimmed === '好的' || trimmed === '進入' || trimmed === '離開' || trimmed === '告辭了。') {
        addIssue(`${npc.id}/${node.id}/option:${index}`, 'npc.dialogue.option', 'text', optionText, 8, 'NPC 選項文字過於泛用');
      }
    }
  }
}

const questDefs = { ...QUEST_DEFS, ...EXPANDED_QUEST_DEFS };
for (const quest of Object.values(questDefs)) {
  const descriptionMinimum = quest.type === 'main' ? 80 : 60;
  checkText(quest.id, 'quest.description', 'description', quest.description, descriptionMinimum, '任務描述需包含背景、目標與路線提示');
  checkText(quest.id, 'quest.dialogueStart', 'dialogueStart', quest.dialogueStart ?? '', 45, '任務開始文字不足');
  checkText(quest.id, 'quest.dialogueComplete', 'dialogueComplete', quest.dialogueComplete ?? '', 50, '任務完成文字不足');
  for (const [index, objective] of quest.objectives.entries()) {
    const objectiveText = `${objective.targetName} ${objective.required}`;
    checkText(`${quest.id}/objective:${index}`, 'quest.objective', 'targetName', objectiveText, 18, 'objective 顯示文字不足');
  }
}

for (const dungeon of Object.values(DUNGEON_DEFS)) {
  checkText(dungeon.id, 'dungeon.description', 'description', dungeon.description, 80, '副本描述需包含背景、威脅與入口定位');
  for (const room of dungeon.rooms) {
    checkText(
      `${dungeon.id}/${room.id}`,
      'dungeon.room.description',
      'description',
      room.description,
      room.isBoss ? 80 : 65,
      room.isBoss ? 'Boss 房描述需有場景、威脅與戰鬥空間' : '副本房間描述字數不足',
    );
  }
}

for (const item of Object.values(ITEM_DEFS)) {
  if (!isDungeonEntryItem(item.id, item.name, item.description)) continue;
  checkText(item.id, 'item.description', 'description', item.description, 40, '副本相關道具描述需指出用途、地點或消耗規則');
}

const instanceEntries = buildInstanceEntryDefs(ZONES);
for (const entry of instanceEntries) {
  checkText(entry.id, 'instanceEntry.description', 'description', entry.description, 45, 'instance entrance 描述需說明外觀、狀態與進入方式');
}

const byKind = issues.reduce<Record<TextKind, number>>((acc, issue) => {
  acc[issue.kind] = (acc[issue.kind] ?? 0) + 1;
  return acc;
}, {} as Record<TextKind, number>);

const report = {
  generatedAt: new Date().toISOString(),
  rules: {
    room: {
      worldRoomMinCjkChars: 55,
      instanceRoomMinCjkChars: 65,
      bossEliteFinalRoomMinCjkChars: 80,
      townServiceRoomMinCjkChars: 50,
    },
    exit: {
      normalMinCjkChars: 12,
      crossZoneMinCjkChars: 20,
      specialEdgeMinCjkChars: 28,
    },
    npc: {
      descriptionMinCjkChars: 45,
      dialogueNodeMinCjkChars: 45,
    },
    quest: {
      mainDescriptionMinCjkChars: 80,
      sideDescriptionMinCjkChars: 60,
      objectiveMinCjkChars: 18,
      dialogueStartMinCjkChars: 45,
      dialogueCompleteMinCjkChars: 50,
    },
    dungeon: {
      descriptionMinCjkChars: 80,
      roomDescriptionMinCjkChars: 65,
      bossRoomDescriptionMinCjkChars: 80,
    },
    item: {
      dungeonItemDescriptionMinCjkChars: 40,
    },
    instanceEntry: {
      descriptionMinCjkChars: 45,
    },
    bannedGenericPhrases,
  },
  counts: {
    rooms: Object.keys(ROOMS).length,
    npcs: Object.keys(NPCS).length,
    quests: Object.keys(questDefs).length,
    dungeons: Object.keys(DUNGEON_DEFS).length,
    instanceEntries: instanceEntries.length,
    checkedDungeonItems: Object.values(ITEM_DEFS).filter(item => isDungeonEntryItem(item.id, item.name, item.description)).length,
    issues: issues.length,
  },
  issuesByKind: byKind,
  issues,
};

if (write) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

console.log(formatReport(report, write ? outPath : undefined));

if (strict && issues.length > 0) {
  process.exitCode = 1;
}

function roomMinimumLength(roomId: string, name: string, description: string, zoneType: string | undefined, scope: 'world' | 'instance'): number {
  const marker = `${roomId} ${name} ${description}`;
  if (/boss|elite|final|king|queen|lord|warlord|首領|菁英|王|核心|王座|終焉|決戰/i.test(marker)) return 80;
  if (zoneType === 'town') return 50;
  return scope === 'instance' ? 65 : 55;
}

function checkText(id: string, kind: TextKind, field: string, text: string, minimumLength: number, reason: string) {
  const currentLength = countCjkChars(text);
  if (currentLength < minimumLength) {
    addIssue(id, kind, field, text, minimumLength, reason);
    return;
  }
  const genericPhrase = bannedGenericPhrases.find(phrase => text.trim() === phrase || text.includes(`${phrase}。`));
  if (genericPhrase) {
    addIssue(id, kind, field, text, minimumLength, `包含過於泛用文案：「${genericPhrase}」`);
  }
}

function addIssue(id: string, kind: TextKind, field: string, text: string, minimumLength: number, reason: string) {
  issues.push({
    id,
    kind,
    field,
    currentLength: countCjkChars(text),
    minimumLength,
    text,
    reason,
  });
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

function isDungeonEntryItem(id: string, name: string, description: string): boolean {
  return /key|scroll|compass|offering|rune|dungeon|鑰|匙|卷|軸|羅盤|祭品|符文|副本|門|封印|入口/i.test(`${id} ${name} ${description}`);
}

function formatReport(reportData: typeof report, writtenPath?: string): string {
  const lines = [
    '# Map Text Quality Audit',
    `Generated: ${reportData.generatedAt}`,
    `Rooms checked: ${reportData.counts.rooms}`,
    `NPCs checked: ${reportData.counts.npcs}`,
    `Quests checked: ${reportData.counts.quests}`,
    `Dungeons checked: ${reportData.counts.dungeons}`,
    `Instance entries checked: ${reportData.counts.instanceEntries}`,
    `Dungeon/key items checked: ${reportData.counts.checkedDungeonItems}`,
    `Issues: ${reportData.counts.issues}`,
    ...Object.entries(reportData.issuesByKind).map(([kind, count]) => `${kind}: ${count}`),
  ];
  if (writtenPath) {
    lines.push(`Report written: ${writtenPath}`);
  }
  return lines.join('\n');
}
