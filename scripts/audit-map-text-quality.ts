import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import { WORLD_MAP2_INSTANCE_ENTRY_ITEMS } from '../packages/shared/src/constants/instance-entry-items.js';
import { CLASS_DEFS } from '../packages/shared/src/constants/classes.js';
import { FAITH_DEFS, RACE_DEFS } from '../packages/shared/src/constants/origins.js';
import { SKILL_DEFS } from '../packages/shared/src/constants/skills.js';
import { STATUS_EFFECT_DEFS } from '../packages/shared/src/systems/status-effects.js';
import { describeSkillLevel, getSkillUpgradeDeltas, getSkillUpgradeRule } from '../packages/shared/src/systems/skill-upgrades.js';
import { MONSTER_FAMILY_SUMMARIES } from '../packages/shared/src/constants/monsters.js';
import { GATHERING_NODE_DEFS } from '../packages/shared/src/constants/gathering.js';
import { AFFIX_BUILD_DIRECTIONS, AFFIX_POOLS, type AffixDef } from '../packages/shared/src/systems/item-instance.js';
import { WEAPON_TYPE_DEFS } from '../packages/shared/src/types/item.js';
import { ROOMS, ZONES, getRoom } from '../server/src/data/rooms.js';
import { MONSTERS } from '../server/src/data/monsters.js';
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
  | 'instanceEntry.name'
  | 'instanceEntry.description'
  | 'instanceEntry.tooltip'
  | 'item.description'
  | 'item.tooltip'
  | 'zone.description'
  | 'monster.description'
  | 'monsterFamily.summary'
  | 'gatheringNode.description'
  | 'gatheringMaterial.description'
  | 'equipment.description'
  | 'affix.description'
  | 'affixBuildDirection.notes'
  | 'reward.summary'
  | 'class.summary'
  | 'race.summary'
  | 'faith.summary'
  | 'statusEffect.description'
  | 'skill.description'
  | 'skill.tooltip'
  | 'skill.upgradePreview'
  | 'imagePrompt'
  | 'batch.repeatedOpening'
  | 'batch.repeatedCoreTerm'
  | 'reference.unresolved';

interface TextIssue {
  id: string;
  kind: TextKind;
  field: string;
  currentLength: number;
  minimumLength: number;
  text: string;
  reason: string;
}

interface TextRecord {
  id: string;
  kind: TextKind;
  field: string;
  text: string;
  batchKey: string;
}

type InstanceEntryForAudit = ReturnType<typeof buildInstanceEntryDefs>[number];

const write = process.argv.includes('--write');
const strict = process.argv.includes('--strict');
const outPath = resolve(process.cwd(), 'reports/map-text-quality.json');

const zonePlans = buildZoneMapPlans(ZONES);
const issues: TextIssue[] = [];
const textRecords: TextRecord[] = [];
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
const knownReferenceIds = new Set<string>([
  ...Object.keys(ZONES),
  ...Object.keys(ROOMS),
  ...Object.keys(MONSTERS),
  ...Object.keys(NPCS),
  ...Object.keys(ITEM_DEFS),
  ...Object.keys(DUNGEON_DEFS),
  ...Object.keys(GATHERING_NODE_DEFS),
  ...Object.keys(CLASS_DEFS),
  ...Object.keys(SKILL_DEFS),
  ...Object.keys(WEAPON_TYPE_DEFS),
  ...Object.values(AFFIX_POOLS).flat().map(affix => affix.id),
]);
const referenceAllowList = new Set([
  'worldX',
  'worldY',
  'mapX',
  'mapY',
  'dungeonId',
  'instanceTemplateId',
  'arrivalTicks',
  'resourceCost',
]);

for (const zone of Object.values(ZONES)) {
  checkText(zone.id, 'zone.description', 'description', zone.description, 90, 'zone summary 需包含地貌、等級定位、怪物族群、資源或服務、相鄰區域關係');
}

for (const room of Object.values(ROOMS)) {
  const zone = ZONES[room.zone];
  const plan = zonePlans.get(room.zone);
  const scope = plannedMapScopeForRoom(room, plan);
  const roomMinimum = roomMinimumLength(room.id, room.name, room.description, zone?.type, scope);
  checkText(`${room.zone}/${room.id}`, 'room.description', 'description', room.description, roomMinimum, 'room 描述字數不足或過於泛用');
  if (room.imagePrompt) {
    checkPrompt(`${room.zone}/${room.id}`, 'imagePrompt', room.imagePrompt, 80, 'room image prompt 需包含場景主體、視角、光線、材質、氣氛與地標');
  }

  for (const exit of room.exits) {
    const target = getRoom(exit.targetRoomId);
    const isCrossZone = !!target && target.zone !== room.zone;
    const isSpecial = !!exit.edgeKind && exit.edgeKind !== 'normal';
    const minimum = isSpecial ? 28 : isCrossZone ? 20 : 12;
    checkText(
      `${room.zone}/${room.id}:${exit.direction}->${exit.targetRoomId}`,
      'exit.description',
      'description',
      exit.description ?? '',
      minimum,
      isSpecial ? 'special edge 描述需說明移動方式與狀態' : isCrossZone ? '跨 zone exit 描述需說明地貌銜接' : 'exit 描述字數不足',
    );
  }
}

const monsterFamilies = new Set<string>();
for (const monster of Object.values(MONSTERS)) {
  monsterFamilies.add(monster.family);
  checkText(
    monster.id,
    'monster.description',
    'description',
    monster.description,
    monster.isBoss ? 80 : monster.isElite ? 50 : 35,
    monster.isBoss ? 'boss 描述需包含外觀、戰鬥特徵與所在場景關聯' : monster.isElite ? 'elite monster 描述需說明危險差異' : 'monster 描述需包含外觀、行為與棲息線索',
  );
}
for (const family of [...monsterFamilies].sort()) {
  const summary = MONSTER_FAMILY_SUMMARIES[family as keyof typeof MONSTER_FAMILY_SUMMARIES]?.summary ?? '';
  checkText(`monsterFamily:${family}`, 'monsterFamily.summary', 'summary', summary, 60, 'monster family summary 需說明共同特徵、棲地、傷害或抗性傾向');
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
for (const questId of Object.keys(questDefs)) {
  knownReferenceIds.add(questId);
}
for (const quest of Object.values(questDefs)) {
  const descriptionMinimum = quest.type === 'main' ? 80 : 60;
  checkText(quest.id, 'quest.description', 'description', quest.description, descriptionMinimum, '任務描述需包含背景、目標與路線提示');
  checkText(quest.id, 'quest.dialogueStart', 'dialogueStart', quest.dialogueStart ?? '', 45, '任務開始文字不足');
  checkText(quest.id, 'quest.dialogueComplete', 'dialogueComplete', quest.dialogueComplete ?? '', 50, '任務完成文字不足');
  checkText(`${quest.id}/reward`, 'reward.summary', 'rewards', formatQuestRewardSummary(quest.rewards), 30, '任務獎勵摘要需列出 exp、gold、equipment、unlock 等實際項目');
  for (const [index, objective] of quest.objectives.entries()) {
    const objectiveText = `${objective.targetName} ${objective.required}`;
    checkText(`${quest.id}/objective:${index}`, 'quest.objective', 'targetName', objectiveText, 18, 'objective 顯示文字不足');
  }
}

for (const dungeon of Object.values(DUNGEON_DEFS)) {
  checkText(dungeon.id, 'dungeon.description', 'description', dungeon.description, 110, '副本概述需包含進入理由、核心威脅、預期目標與主要獎勵');
  checkText(`${dungeon.id}/firstClearReward`, 'reward.summary', 'firstClearRewards', formatDungeonRewardSummary(dungeon.firstClearRewards), 30, '副本首通獎勵摘要需列出 exp、gold、equipment、unlock 等實際項目');
  checkText(`${dungeon.id}/normalReward`, 'reward.summary', 'normalRewards', formatDungeonRewardSummary(dungeon.normalRewards), 30, '副本普通獎勵摘要需列出 exp、gold、equipment、unlock 等實際項目');
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

for (const entryItem of WORLD_MAP2_INSTANCE_ENTRY_ITEMS) {
  const item = ITEM_DEFS[entryItem.itemId];
  if (!item) {
    addMeasuredIssue(entryItem.itemId, 'item.description', 'description', '', 0, 1, '副本入口道具 metadata 找不到對應 ITEM_DEFS');
    continue;
  }
  checkText(
    entryItem.itemId,
    'item.description',
    'description',
    item.description,
    40,
    '副本入口道具 description 需寫出副本名稱、使用地點、入口條件與消耗狀態',
  );
  checkDungeonEntryItemDescription(entryItem, item.description);
  checkText(
    `${entryItem.itemId}/tooltip`,
    'item.tooltip',
    'tooltip',
    formatDungeonEntryItemTooltipAuditText(entryItem),
    40,
    '副本入口道具 tooltip 需顯示副本名稱、使用地點、入口條件、消耗與冷卻',
  );
}

for (const item of Object.values(ITEM_DEFS)) {
  if (item.type === 'material') {
    checkText(item.id, 'gatheringMaterial.description', 'description', item.description, 30, '材料描述需說明來源與用途方向');
  }
  if (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') {
    const minimum = item.rarity === 'legendary' || item.rarity === 'mythic' || item.sourceTags?.includes('boss') ? 70 : 35;
    checkText(item.id, 'equipment.description', 'description', item.description, minimum, '裝備描述需提供可辨識的外觀、來源或用途方向');
  }
}

for (const node of Object.values(GATHERING_NODE_DEFS)) {
  checkText(node.id, 'gatheringNode.description', 'description', node.description, 35, 'gathering node description 需包含資源外觀、生成環境與採集動作線索');
}

for (const affix of Object.values(AFFIX_POOLS).flat()) {
  checkText(affix.id, 'affix.description', 'displayDescription', describeAffix(affix), 18, '詞綴顯示說明需清楚說明效果方向，不可只顯示數值');
}
for (const direction of AFFIX_BUILD_DIRECTIONS) {
  checkText(direction.id, 'affixBuildDirection.notes', 'notes', direction.notes, 35, '詞綴流派說明需交代職業定位、武器限制與玩法目的');
}

for (const classDef of Object.values(CLASS_DEFS).filter(classDef => classDef.id !== 'monster')) {
  checkText(
    classDef.id,
    'class.summary',
    'summary',
    formatClassSummaryAuditText(classDef),
    90,
    '職業 summary 需包含戰鬥定位、主要資源、強項、弱點、前期玩法與二轉前限制',
  );
}

for (const race of Object.values(RACE_DEFS)) {
  checkText(
    race.id,
    'race.summary',
    'summary',
    formatRaceSummaryAuditText(race),
    70,
    '種族 summary 需包含外觀或文化特徵、玩法差異、適合職業或限制、世界觀位置',
  );
}

for (const faith of Object.values(FAITH_DEFS)) {
  checkText(
    faith.id,
    'faith.summary',
    'summary',
    formatFaithSummaryAuditText(faith),
    70,
    '信仰 summary 需包含信仰領域、玩法差異、適合職業或限制、世界觀位置與禁忌',
  );
}

for (const statusEffect of Object.values(STATUS_EFFECT_DEFS)) {
  checkText(
    statusEffect.type,
    'statusEffect.description',
    'description',
    statusEffect.description,
    statusEffect.implementationStatus === 'partial' ? 55 : 30,
    'status effect 描述需包含來源、持續時間或 tick 規則、數值效果、移除方式與實作狀態',
  );
}

for (const skill of Object.values(SKILL_DEFS)) {
  checkText(
    skill.id,
    'skill.description',
    'description',
    skill.description,
    skillDescriptionMinimum(skill),
    '技能描述需包含定位、資源、可用時機、主要效果與限制或風險',
  );
  checkText(
    `${skill.id}/tooltip`,
    'skill.tooltip',
    'tooltip',
    formatSkillTooltipAuditText(skill),
    30,
    '技能 tooltip 需顯示資源正負變化、CD/tick/瞬發規則與主要效果',
  );

  const rule = getSkillUpgradeRule(skill.id);
  if (!rule) continue;
  for (let currentLevel = 1; currentLevel < rule.maxLevel; currentLevel++) {
    checkText(
      `${skill.id}/upgrade:${currentLevel}->${currentLevel + 1}`,
      'skill.upgradePreview',
      'upgradePreview',
      formatSkillUpgradePreviewAuditText(skill, currentLevel),
      28,
      '技能升級預覽需列出本級提升的實際數值、影響效果與下一級差異',
    );
  }
}

const instanceEntries = buildInstanceEntryDefs(ZONES);
for (const entry of instanceEntries) {
  checkInstanceEntryName(entry);
  checkText(entry.id, 'instanceEntry.description', 'description', entry.description, instanceEntryDescriptionMinimum(entry), 'instance entrance 描述需說明外觀、狀態、進入方式、需求或冷卻提示');
  checkInstanceEntryDescription(entry);
  checkText(`${entry.id}/tooltip`, 'instanceEntry.tooltip', 'tooltip', formatInstanceEntryTooltipAuditText(entry), 24, 'instance entry tooltip 需列出副本名稱、建議等級、人數、需求、冷卻與鎖定資訊');
}

checkRepeatedOpenings(textRecords);
checkRepeatedCoreTerms(textRecords);
checkUnresolvedReferences(textRecords);

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
      descriptionMinCjkChars: 110,
      roomDescriptionMinCjkChars: 65,
      bossRoomDescriptionMinCjkChars: 80,
    },
    zone: {
      summaryMinCjkChars: 90,
    },
    monster: {
      descriptionMinCjkChars: 35,
      eliteDescriptionMinCjkChars: 50,
      bossDescriptionMinCjkChars: 80,
      familySummaryMinCjkChars: 60,
    },
    gathering: {
      nodeDescriptionMinCjkChars: 35,
      materialDescriptionMinCjkChars: 30,
    },
    equipment: {
      descriptionMinCjkChars: 35,
      uniqueBossDescriptionMinCjkChars: 70,
    },
    affix: {
      displayDescriptionMinCjkChars: 18,
      buildDirectionNotesMinCjkChars: 35,
    },
    skill: {
      descriptionMinCjkChars: 45,
      featureSkillDescriptionMinCjkChars: 65,
      coreSkillDescriptionMinCjkChars: 75,
      tooltipMinCjkChars: 30,
      upgradePreviewMinCjkChars: 28,
    },
    characterCreation: {
      classSummaryMinCjkChars: 90,
      raceSummaryMinCjkChars: 70,
      faithSummaryMinCjkChars: 70,
    },
    statusEffect: {
      descriptionMinCjkChars: 30,
      partialDescriptionMinCjkChars: 55,
    },
    reward: {
      summaryMinCjkChars: 30,
    },
    imagePrompt: {
      roomPromptMinEnglishWords: 80,
      roomPromptMinCjkChars: 120,
    },
    batchQuality: {
      repeatedOpeningWindow: 3,
      repeatedOpeningSignatureCjkChars: 8,
      repeatedCoreTermRatio: 0.3,
      repeatedCoreTermMinimumOccurrences: 3,
      unresolvedReferencePattern: '[a-z][a-z0-9]+_[a-z0-9_]+',
    },
    item: {
      dungeonItemDescriptionMinCjkChars: 40,
      dungeonEntryTooltipMinCjkChars: 40,
    },
    instanceEntry: {
      nameMinCjkChars: 4,
      descriptionMinCjkChars: 45,
      gatedDescriptionMinCjkChars: 55,
      tooltipMinCjkChars: 24,
    },
    bannedGenericPhrases,
  },
  counts: {
    rooms: Object.keys(ROOMS).length,
    npcs: Object.keys(NPCS).length,
    quests: Object.keys(questDefs).length,
    dungeons: Object.keys(DUNGEON_DEFS).length,
    monsters: Object.keys(MONSTERS).length,
    monsterFamilies: monsterFamilies.size,
    gatheringNodes: Object.keys(GATHERING_NODE_DEFS).length,
    materials: Object.values(ITEM_DEFS).filter(item => item.type === 'material').length,
    equipment: Object.values(ITEM_DEFS).filter(item => item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory').length,
    affixes: Object.values(AFFIX_POOLS).flat().length,
    playableClasses: Object.values(CLASS_DEFS).filter(classDef => classDef.id !== 'monster').length,
    races: Object.keys(RACE_DEFS).length,
    faiths: Object.keys(FAITH_DEFS).length,
    statusEffects: Object.keys(STATUS_EFFECT_DEFS).length,
    skills: Object.keys(SKILL_DEFS).length,
    skillUpgradePreviews: Object.values(SKILL_DEFS).reduce((count, skill) => count + Math.max(0, (getSkillUpgradeRule(skill.id)?.maxLevel ?? 1) - 1), 0),
    imagePrompts: Object.values(ROOMS).filter(room => !!room.imagePrompt).length,
    instanceEntries: instanceEntries.length,
    instanceEntryItems: WORLD_MAP2_INSTANCE_ENTRY_ITEMS.length,
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
  recordText(id, kind, field, text);
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

function recordText(id: string, kind: TextKind, field: string, text: string) {
  if (!text.trim()) return;
  textRecords.push({
    id,
    kind,
    field,
    text,
    batchKey: getBatchKey(id, kind),
  });
}

function getBatchKey(id: string, kind: TextKind): string {
  if (kind === 'room.description') return `zone:${id.split('/')[0]}`;
  if (kind === 'exit.description') return `exit:${id.split('/')[0]}`;
  if (kind === 'npc.dialogue.text' || kind === 'npc.dialogue.option') return `npc:${id.split('/')[0]}`;
  if (kind === 'quest.description' || kind === 'quest.dialogueStart' || kind === 'quest.dialogueComplete' || kind === 'quest.objective') return `quest:${id.split('/')[0]}`;
  if (kind === 'dungeon.room.description') return `dungeon:${id.split('/')[0]}`;
  if (kind === 'instanceEntry.name' || kind === 'instanceEntry.tooltip') return kind;
  if (kind === 'monster.description') return 'monsters';
  if (kind === 'equipment.description') return 'equipment';
  if (kind === 'skill.description') return 'skills';
  if (kind === 'skill.tooltip' || kind === 'skill.upgradePreview') return kind;
  if (kind === 'item.tooltip') return 'item.tooltip';
  if (kind === 'gatheringMaterial.description') return 'materials';
  if (kind === 'imagePrompt') return `imagePrompt:${id.split('/')[0]}`;
  return kind;
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

function addMeasuredIssue(id: string, kind: TextKind, field: string, text: string, currentLength: number, minimumLength: number, reason: string) {
  issues.push({
    id,
    kind,
    field,
    currentLength,
    minimumLength,
    text,
    reason,
  });
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

function countEnglishWords(text: string): number {
  return (text.match(/[A-Za-z][A-Za-z0-9'-]*/g) ?? []).length;
}

function checkPrompt(id: string, kind: TextKind, text: string, minimumEnglishWords: number, reason: string) {
  recordText(id, kind, 'imagePrompt', text);
  const cjkChars = countCjkChars(text);
  const englishWords = countEnglishWords(text);
  if (englishWords >= minimumEnglishWords || cjkChars >= 120) return;
  addMeasuredIssue(id, kind, 'imagePrompt', text, Math.max(englishWords, cjkChars), minimumEnglishWords, reason);
}

function checkDungeonEntryItemDescription(entryItem: typeof WORLD_MAP2_INSTANCE_ENTRY_ITEMS[number], description: string): void {
  const missing: string[] = [];
  if (!description.includes(entryItem.dungeonName)) missing.push(`副本名稱「${entryItem.dungeonName}」`);
  if (!description.includes(entryItem.entranceRoomName)) missing.push(`使用地點「${entryItem.entranceRoomName}」`);
  const consumeText = entryItem.consumeItem ? '使用後消耗' : '不會消耗';
  if (!description.includes(consumeText)) missing.push(`消耗狀態「${consumeText}」`);
  if (!/副本|入口|通道|探索/.test(description)) missing.push('入口用途或副本用途');
  if (missing.length === 0) return;
  addMeasuredIssue(
    entryItem.itemId,
    'item.description',
    'description',
    description,
    countCjkChars(description),
    40,
    `副本入口道具描述缺少：${missing.join('、')}`,
  );
}

function formatDungeonEntryItemTooltipAuditText(entryItem: typeof WORLD_MAP2_INSTANCE_ENTRY_ITEMS[number]): string {
  const consumeText = entryItem.consumeItem ? '使用後消耗' : '不會消耗';
  const cooldownText = entryItem.cooldownSeconds ? `冷卻 ${Math.ceil(entryItem.cooldownSeconds / 60)} 分鐘` : '無額外冷卻';
  return `副本入口道具 tooltip 顯示可開啟 ${entryItem.dungeonName}，使用地點是 ${entryItem.entranceRoomName}，入口互動為 ${entryItem.entryName}，消耗狀態為${consumeText}，${cooldownText}；說明玩家需帶著對應道具到指定入口使用。`;
}

function checkInstanceEntryName(entry: InstanceEntryForAudit): void {
  checkText(entry.id, 'instanceEntry.name', 'name', entry.name, 4, '副本入口名稱需是具體物件或包含副本名稱，不能只寫入口或傳送門');
  if (/^(入口|副本入口|傳送門|門)$/u.test(entry.name.trim())) {
    addIssue(entry.id, 'instanceEntry.name', 'name', entry.name, 4, '副本入口名稱過於泛用，需使用具體物件、地標或副本名稱');
  }
}

function instanceEntryDescriptionMinimum(entry: InstanceEntryForAudit): number {
  return entry.requiredItemId || entry.cooldownSeconds ? 55 : 45;
}

function checkInstanceEntryDescription(entry: InstanceEntryForAudit): void {
  const description = entry.description;
  const missing: string[] = [];
  if (!/入口|門|裂縫|鐘|祭盤|祭壇|封印|刻痕|符文|錨|羅盤|卷軸|警示牌|軍令|旗|嚮導|測繪員|軍史官|場景物件/u.test(description)) {
    missing.push('入口外觀或具體物件');
  }
  if (!/玩家|隊伍|使用|建立|進入|開啟|確認|帶隊|引導|站在|靠近|貼近|放上|舉向|展開|插入/u.test(description)) {
    missing.push('玩家互動或進入方式');
  }

  const requiredItem = entry.requiredItemId ? ITEM_DEFS[entry.requiredItemId] : undefined;
  if (entry.requiredItemId) {
    if (!requiredItem) {
      missing.push(`需求道具 ${entry.requiredItemId} 未定義`);
    } else if (!description.includes(requiredItem.name)) {
      missing.push(`需求道具名稱「${requiredItem.name}」`);
    }
    if (entry.consumeItem && !/消耗|耗盡|燒盡|一次|使用後消失/u.test(description)) {
      missing.push('道具會消耗的提示');
    }
    if (!entry.consumeItem && !/不會被消耗|不會消耗|不消耗|仍會保留|可重複出示/u.test(description)) {
      missing.push('道具不會消耗的提示');
    }
  }

  if (entry.cooldownSeconds && !/等待|冷卻|沉寂|重新|平復|鐘聲|宣戰|校準|限制|暫時/u.test(description)) {
    missing.push('冷卻或鎖定敘事原因');
  }

  if (missing.length === 0) return;
  addMeasuredIssue(
    entry.id,
    'instanceEntry.description',
    'description',
    description,
    countCjkChars(description),
    instanceEntryDescriptionMinimum(entry),
    `副本入口描述缺少：${missing.join('、')}`,
  );
}

function formatInstanceEntryTooltipAuditText(entry: InstanceEntryForAudit): string {
  const dungeon = entry.dungeonId ? DUNGEON_DEFS[entry.dungeonId] : undefined;
  const dungeonName = dungeon?.name ?? entry.name;
  const requiredItem = entry.requiredItemId ? ITEM_DEFS[entry.requiredItemId] : undefined;
  const requirementText = requiredItem
    ? `${requiredItem.name}${entry.consumeItem ? '，使用後消耗' : '，不會消耗'}`
    : '無道具需求';
  const cooldownText = entry.cooldownSeconds ? `冷卻 ${entry.cooldownSeconds} 秒` : '無入口冷卻';
  return `入口「${entry.name}」可進入${dungeonName}，建議等級 Lv.${entry.minLevel}，人數 1-${entry.maxPartySize}，需求 ${requirementText}，${cooldownText}；若鎖定需依任務、道具或隊伍條件處理。`;
}

function formatClassSummaryAuditText(classDef: typeof CLASS_DEFS[keyof typeof CLASS_DEFS]): string {
  const parent = classDef.parentClass ? CLASS_DEFS[classDef.parentClass]?.name : undefined;
  const advanced = (classDef.advancedClasses ?? []).map(classId => CLASS_DEFS[classId]?.name ?? classId);
  const progression = classDef.tier === 0
    ? `二轉前先從冒險者熟悉基礎探索，再於 Lv.1 後選擇一轉方向，可走向${advanced.join('、')}。`
    : classDef.tier === 1
      ? `二轉前此職業必須靠一轉技能與天賦撐到 Lv.20，之後可選擇${advanced.join('、')}。`
      : `此為二轉職業，來源是${parent ?? '未知路線'}，不屬於二轉前角色創建選項。`;
  return `職業「${classDef.name}」的戰鬥定位是${classDef.description}主要資源為${formatClassResourceAuditText(classDef.resourceType)}，初始 ${classDef.initialResource}、上限 ${classDef.maxResource}。能力加成為${formatBaseStatAuditText(classDef.baseStatBonus)}，強項由主要屬性與資源循環決定，弱點則來自較低的副屬性、資源耗盡或尚未取得二轉技能前的工具不足。${progression}`;
}

function formatRaceSummaryAuditText(race: typeof RACE_DEFS[keyof typeof RACE_DEFS]): string {
  return `種族「${race.name}」在世界中的定位是${race.description}能力修正為${formatBaseStatAuditText(race.statMods)}，被動「${race.passiveName}」提供${race.passiveDescription}。玩法差異集中在${race.tags?.join('、') || '通用適應'}方向，適合與相符職業、採集或探索玩法搭配；限制來自負面能力修正或特定場景才會觸發的被動條件。`;
}

function formatFaithSummaryAuditText(faith: typeof FAITH_DEFS[keyof typeof FAITH_DEFS]): string {
  return `信仰「${faith.name}・${faith.title}」的世界觀位置是${faith.description}領域包含${faith.domains.join('、')}，被動「${faith.passiveName}」提供${faith.passiveDescription}。祈禱「${faith.prayerName}」會帶來${faith.prayerDescription}，適合重視${faith.tags?.join('、') || '信仰'}玩法的角色；限制是禁忌包含${faith.taboos.join('、')}，違背時應影響敘事或信仰互動。`;
}

function formatClassResourceAuditText(resourceType: typeof CLASS_DEFS[keyof typeof CLASS_DEFS]['resourceType']): string {
  if (resourceType === 'rage') return '怒氣，依受擊與戰鬥節奏取得，適合前線承傷與爆發生存';
  if (resourceType === 'focus') return '專注，代表遊俠短時間連續輸出的節奏，耗盡後需要等待恢復';
  if (resourceType === 'faith') return '信仰，會在慈悲與懲戒之間擺動，技能使用要管理正負方向';
  return '魔力，依 tick 穩定回復，支撐法術、治療或通用技能循環';
}

function formatBaseStatAuditText(stats: Partial<Record<'str' | 'int' | 'dex' | 'vit' | 'luk', number>>): string {
  const labels: Record<string, string> = { str: '力量', int: '智力', dex: '敏捷', vit: '體質', luk: '幸運' };
  const entries = Object.entries(stats).filter(([, value]) => typeof value === 'number' && value !== 0);
  if (entries.length === 0) return '無額外修正';
  return entries.map(([key, value]) => `${labels[key] ?? key}${value > 0 ? '+' : ''}${value}`).join('、');
}

function skillDescriptionMinimum(skill: typeof SKILL_DEFS[string]): number {
  if (skill.learnLevel === 8 && ['swordsman', 'mage', 'ranger', 'priest'].includes(skill.classId)) return 65;
  if (skill.tags.includes('defense') || skill.tags.includes('mobility') || skill.tags.includes('control') || skill.tags.includes('heal')) return 75;
  return 45;
}

function formatSkillTooltipAuditText(skill: typeof SKILL_DEFS[string]): string {
  const costLine = formatSkillResourceLine(skill);
  const cooldownLine = skill.special?.instant
    ? `冷卻 ${skill.cooldown} tick，瞬發且不消耗本回合 tick`
    : `冷卻 ${skill.cooldown} tick，依戰鬥或非戰鬥技能規則結算`;
  const effectLine = skill.fullDescription || skill.description || skill.shortDescription;
  return `技能「${skill.name}」tooltip 顯示${costLine}，${cooldownLine}；說明包含目標、主要效果與限制：${effectLine}`;
}

function formatSkillResourceLine(skill: typeof SKILL_DEFS[string]): string {
  const faithDelta = skill.special?.faithDelta;
  if (typeof faithDelta === 'number') return `信仰 ${signedNumber(faithDelta)}`;
  if (skill.special?.faithInvert) return '信仰翻轉，依目前信仰值在正負端點間切換';
  return `${skillResourceLabel(skill)} ${signedNumber(-skill.resourceCost)}`;
}

function skillResourceLabel(skill: typeof SKILL_DEFS[string]): string {
  const resourceType = CLASS_DEFS[skill.classId]?.resourceType;
  if (resourceType === 'rage') return '怒氣';
  if (resourceType === 'focus') return '專注';
  if (resourceType === 'faith') return '信仰';
  return '魔力';
}

function formatSkillUpgradePreviewAuditText(skill: typeof SKILL_DEFS[string], currentLevel: number): string {
  const deltas = getSkillUpgradeDeltas(skill, currentLevel);
  const deltaText = deltas.length > 0
    ? deltas.map(delta => `${delta.label} ${delta.before} 變為 ${delta.after}`).join('，')
    : describeSkillLevel(skill, currentLevel + 1).join('，');
  return `「${skill.name}」Lv.${currentLevel} 升到 Lv.${currentLevel + 1} 會調整 ${deltaText}；預覽讓玩家確認本級提升的數值、影響效果與下一級差異後再投入技能點。`;
}

function signedNumber(value: number): string {
  return value > 0 ? `+${value}` : `${value}`;
}

function checkRepeatedOpenings(records: TextRecord[]) {
  for (const batch of groupRecords(records)) {
    if (shouldSkipBatchRepetitionCheck(batch.key)) continue;
    const ordered = batch.records.filter(record => countCjkChars(record.text) >= 12);
    for (let index = 0; index <= ordered.length - 3; index++) {
      const window = ordered.slice(index, index + 3);
      const openings = window.map(record => getOpeningSignature(record.text));
      if (!openings[0] || openings.some(opening => opening !== openings[0])) continue;
      addMeasuredIssue(
        `${batch.key}/opening:${index}`,
        'batch.repeatedOpening',
        'text',
        window.map(record => `${record.id}: ${record.text}`).join('\n'),
        3,
        1,
        `同批生成內容連續 3 筆使用相同開頭「${openings[0]}」`,
      );
    }
  }
}

function checkRepeatedCoreTerms(records: TextRecord[]) {
  for (const batch of groupRecords(records)) {
    if (shouldSkipBatchRepetitionCheck(batch.key)) continue;
    if (shouldSkipCoreTermCheck(batch.key)) continue;
    const eligible = batch.records.filter(record => countCjkChars(record.text) >= 20);
    if (eligible.length < 6) continue;

    const termOwners = new Map<string, Set<string>>();
    const ignoredTerms = extractBatchIgnoredCoreTerms(batch.key);
    for (const record of eligible) {
      for (const term of extractCoreTerms(record.text)) {
        if (ignoredTerms.has(term) || isGenericCoreTerm(term)) continue;
        termOwners.set(term, new Set([...(termOwners.get(term) ?? []), record.id]));
      }
    }

    const repeatedTerms = [...termOwners.entries()]
      .map(([term, owners]) => ({ term, owners, ratio: owners.size / eligible.length }))
      .filter(item => item.owners.size >= 4 && item.ratio > 0.3)
      .sort((a, b) => b.ratio - a.ratio || b.owners.size - a.owners.size)
      .slice(0, 3);

    for (const { term, owners, ratio } of repeatedTerms) {
      addMeasuredIssue(
        `${batch.key}/term:${term}`,
        'batch.repeatedCoreTerm',
        'text',
        [...owners].slice(0, 12).join(', '),
        Math.round(ratio * 100),
        30,
        `同批生成內容核心詞「${term}」出現於 ${owners.size}/${eligible.length} 筆，超過 30% 門檻`,
      );
    }
  }
}

function shouldSkipBatchRepetitionCheck(batchKey: string): boolean {
  return batchKey === 'reward.summary'
    || batchKey === 'affix.description'
    || batchKey === 'item.tooltip'
    || batchKey === 'skill.tooltip'
    || batchKey === 'skill.upgradePreview'
    || batchKey === 'instanceEntry.name'
    || batchKey === 'instanceEntry.tooltip';
}

function shouldSkipCoreTermCheck(batchKey: string): boolean {
  return batchKey.startsWith('zone:')
    || batchKey.startsWith('exit:')
    || batchKey.startsWith('npc:')
    || batchKey.startsWith('quest:')
    || batchKey.startsWith('dungeon:')
    || batchKey === 'zone.description'
    || batchKey === 'monsterFamily.summary'
    || batchKey === 'dungeon.description'
    || batchKey === 'item.description'
    || batchKey === 'item.tooltip'
    || batchKey === 'equipment'
    || batchKey === 'class.summary'
    || batchKey === 'race.summary'
    || batchKey === 'faith.summary'
    || batchKey === 'statusEffect.description'
    || batchKey === 'skills'
    || batchKey === 'skill.tooltip'
    || batchKey === 'skill.upgradePreview'
    || batchKey === 'instanceEntry.name'
    || batchKey === 'instanceEntry.tooltip'
    || batchKey === 'instanceEntry.description';
}

function checkUnresolvedReferences(records: TextRecord[]) {
  const referencePattern = /\b[a-z][a-z0-9]+_[a-z0-9_]+\b/g;
  for (const record of records) {
    const references = record.text.match(referencePattern) ?? [];
    for (const reference of references) {
      if (knownReferenceIds.has(reference) || referenceAllowList.has(reference)) continue;
      addMeasuredIssue(
        `${record.id}/reference:${reference}`,
        'reference.unresolved',
        record.field,
        record.text,
        0,
        1,
        `文案引用未知 id「${reference}」，需確認已實作或標記為 future hook`,
      );
    }
  }
}

function groupRecords(records: TextRecord[]): { key: string; records: TextRecord[] }[] {
  const grouped = new Map<string, TextRecord[]>();
  for (const record of records) {
    grouped.set(record.batchKey, [...(grouped.get(record.batchKey) ?? []), record]);
  }
  return [...grouped.entries()].map(([key, batchRecords]) => ({ key, records: batchRecords }));
}

function getOpeningSignature(text: string): string {
  const normalized = text.replace(/\s+/g, '').replace(/^[「『【（(]*/, '');
  const cjk = [...normalized].filter(char => /[\u3400-\u9fff]/u.test(char)).join('');
  return cjk.slice(0, 8);
}

function extractCoreTerms(text: string): Set<string> {
  const termLength = 4;
  const normalized = text.replace(/[，。；、：「」『』（）()【】\s\dA-Za-z_-]/g, '');
  const stopTerms = new Set([
    '一名', '一個', '這裡', '這片', '玩家', '冒險', '房間', '入口', '地方', '可以',
    '需要', '使用', '任務', '副本', '道具', '怪物', '描述', '進入', '方向', '地面',
    '牆壁', '空氣', '光線', '聲音', '附近', '深處', '周圍', '之間', '正在', '不會',
    '通往', '暗示', '提醒', '提示', '回到', '看到', '說明', '提供', '支援', '玩家',
    '示玩', '玩法', '區域', '路線', '目標', '戰鬥', '採集', '資源', '裝備', '獎勵',
    '包含', '經驗', '金幣', '補給', '建議', '等級', '人數', '冷卻',
    '級的', '一級', '二級', '三級', '四級', '五級', '六級', '七級', '八級', '九級',
    '十級', '二十', '三十', '四十', '五十', '六十',
    '回報', '推進', '依任', '追蹤', '出沒', '沒區', '適合', '掉落', '常見',
    '源包', '側接', '元素',
    '務追', '位於', '穿過', '家可', '巡查', '後才', '抵達', '標需', '裡是',
    '才會', '痕跡', '繞過', '作為', '南側', '北側', '東側', '西側', '要沿',
    '側要', '隊伍', '傳送', '需在', '查目', '域依', '見於', '十到',
    '任務追蹤', '依任務追', '目標需在', '巡查目標', '目標出沒', '標出沒區',
    '出沒區域', '使用時偏', '用時偏向', '適合級左', '提示玩家', '玩家可以',
    '示玩家可', '房玩家可',
  ]);
  const terms = new Set<string>();
  for (let index = 0; index <= normalized.length - termLength; index++) {
    const term = normalized.slice(index, index + termLength);
    if (stopTerms.has(term)) continue;
    terms.add(term);
  }
  return terms;
}

function extractBatchIgnoredCoreTerms(batchKey: string): Set<string> {
  const ignored = new Set<string>();
  const zoneId = batchKey.startsWith('zone:')
    ? batchKey.slice('zone:'.length)
    : batchKey.startsWith('exit:')
      ? batchKey.slice('exit:'.length)
      : undefined;
  if (zoneId) {
    addCoreTermFragments(ignored, ZONES[zoneId]?.name ?? '');
  } else if (batchKey === 'zone.description') {
    for (const zone of Object.values(ZONES)) {
      addCoreTermFragments(ignored, zone.name);
    }
  }
  return ignored;
}

function isGenericCoreTerm(term: string): boolean {
  return term.includes('任務')
    || term.includes('追蹤')
    || term.includes('推進')
    || term.includes('回報')
    || term.includes('目標')
    || term.includes('玩家')
    || term.includes('線索')
    || term.includes('級左右')
    || term.includes('配裝')
    || term.startsWith('位於')
    || term.startsWith('於')
    || term.startsWith('此處')
    || term.startsWith('處的')
    || term.startsWith('處屬')
    || term.startsWith('屬於')
    || term.startsWith('這裡')
    || term.startsWith('裡的');
}

function addCoreTermFragments(target: Set<string>, text: string): void {
  const termLength = 4;
  const normalized = [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).join('');
  for (let index = 0; index <= normalized.length - termLength; index++) {
    target.add(normalized.slice(index, index + termLength));
  }
}

function isDungeonEntryItem(id: string, name: string, description: string): boolean {
  return /key|scroll|compass|offering|rune|dungeon|鑰|匙|卷|軸|羅盤|祭品|符文|副本|門|封印|入口/i.test(`${id} ${name} ${description}`);
}

function describeAffix(affix: AffixDef): string {
  const parts: string[] = [];
  if (affix.stats && Object.keys(affix.stats).length > 0) {
    parts.push(`提升${Object.keys(affix.stats).map(formatStatLabel).join('、')}等戰鬥屬性，讓裝備在對應部位提供明確成長方向`);
  }
  if (affix.skillModifiers && Object.keys(affix.skillModifiers).length > 0) {
    parts.push(`調整${Object.keys(affix.skillModifiers).map(formatSkillModifierLabel).join('、')}技能效果，改變施放節奏或命中後收益`);
  }
  if (affix.resourceModifiers && Object.keys(affix.resourceModifiers).length > 0) {
    parts.push(`影響${Object.keys(affix.resourceModifiers).map(formatResourceModifierLabel).join('、')}資源節奏，支援持續戰鬥與技能循環`);
  }
  if (affix.behavior) {
    parts.push(`在${formatTriggerLabel(affix.trigger)}時觸發${formatBehaviorLabel(affix.behavior)}效果`);
  }
  if (affix.classTags?.length) {
    parts.push(`偏向${affix.classTags.join('、')}職業流派`);
  }
  if (affix.weaponTypes?.length) {
    parts.push(`適合${affix.weaponTypes.join('、')}武器配置`);
  }
  return parts.join('，');
}

function formatStatLabel(stat: string): string {
  const labels: Record<string, string> = {
    str: '力量',
    int: '智力',
    vit: '體魄',
    dex: '敏捷',
    luk: '幸運',
    hp: '生命值',
    mp: '魔力',
    atk: '攻擊力',
    matk: '魔攻力',
    def: '防禦力',
    mdef: '魔防力',
    hitRate: '命中率',
    dodgeRate: '迴避率',
    critRate: '暴擊率',
    critDamage: '暴擊傷害',
  };
  return labels[stat] ?? stat;
}

function formatSkillModifierLabel(modifier: string): string {
  const labels: Record<string, string> = {
    damagePct: '傷害倍率',
    healingPct: '治療倍率',
    resourceCostPct: '資源消耗',
    arrivalTicksDelta: '抵達時間',
    rangeDelta: '射程距離',
  };
  return labels[modifier] ?? modifier;
}

function formatResourceModifierLabel(modifier: string): string {
  const labels: Record<string, string> = {
    rageGain: '怒氣取得',
    focusRegen: '專注回復',
    mpRegen: '魔力回復',
    faithDelta: '信仰變化',
  };
  return labels[modifier] ?? modifier;
}

function formatTriggerLabel(trigger: string | undefined): string {
  const labels: Record<string, string> = {
    on_cast: '施放技能',
    on_hit: '命中目標',
    on_block: '格擋攻擊',
    on_dodge: '閃避攻擊',
    on_kill: '擊殺目標',
    on_heal: '治療盟友',
  };
  return trigger ? labels[trigger] ?? trigger : '戰鬥';
}

function formatBehaviorLabel(behavior: string): string {
  const labels: Record<string, string> = {
    reduce_first_hit: '降低首波傷害',
    burst_damage: '爆發增傷',
    reduce_resource_cost: '降低資源消耗',
    heal_amplify: '放大治療',
    bonus_after_dodge: '閃避後強化',
    resource_on_kill: '擊殺回復資源',
    counter_on_block: '格擋反擊',
    cross_room_accuracy: '跨房命中強化',
    delay_approach: '延後接近時間',
    execute_low_hp: '低血處決',
  };
  return labels[behavior] ?? behavior;
}

function formatQuestRewardSummary(rewards: {
  exp: number;
  gold: number;
  items?: { itemId: string; quantity: number }[];
  portalUnlocks?: { portalId: string; zoneId: string }[];
  zoneReputation?: { zoneId: string; amount: number }[];
  recipes?: string[];
  equipmentSlotRewards?: { slot: string; levelMax?: number; sourceTags?: string[] }[];
}): string {
  const parts = [`完成後實際給予經驗值 ${rewards.exp}`, `金幣 ${rewards.gold}`];
  if (rewards.items?.length) parts.push(`固定道具 ${rewards.items.map(item => `${ITEM_DEFS[item.itemId]?.name ?? item.itemId} x${item.quantity}`).join('、')}`);
  if (rewards.equipmentSlotRewards?.length) parts.push(`依任務等級抽取${rewards.equipmentSlotRewards.map(formatEquipmentSlotReward).join('、')}裝備補給`);
  if (rewards.portalUnlocks?.length) parts.push(`解鎖可前往區域 ${rewards.portalUnlocks.map(item => ZONES[item.zoneId]?.name ?? item.zoneId).join('、')}`);
  if (rewards.zoneReputation?.length) parts.push(`調整區域聲望 ${rewards.zoneReputation.map(item => `${ZONES[item.zoneId]?.name ?? item.zoneId} ${item.amount}`).join('、')}`);
  if (rewards.recipes?.length) parts.push(`解鎖或授予製作配方 ${rewards.recipes.join('、')}`);
  parts.push('沒有列出的裝備、功能或入口不會被文案暗示為額外獎勵');
  return parts.join('；');
}

function formatDungeonRewardSummary(rewards: {
  exp: number;
  gold: number;
  items?: { itemId: string; qty: number }[];
  equipmentSlotRewards?: { slot: string; levelMax?: number; sourceTags?: string[] }[];
}): string {
  const parts = [`通關結算提供經驗值 ${rewards.exp}`, `金幣 ${rewards.gold}`];
  if (rewards.items?.length) parts.push(`掉落或結算道具 ${rewards.items.map(item => `${ITEM_DEFS[item.itemId]?.name ?? item.itemId} x${item.qty}`).join('、')}`);
  if (rewards.equipmentSlotRewards?.length) parts.push(`依副本等級抽取${rewards.equipmentSlotRewards.map(formatEquipmentSlotReward).join('、')}裝備補給`);
  parts.push('未列出的裝備、解鎖或首通效果不應在副本文案中暗示存在');
  return parts.join('；');
}

function formatEquipmentSlotReward(reward: { slot: string; levelMax?: number; sourceTags?: string[] }): string {
  const slotLabels: Record<string, string> = {
    weapon: '武器',
    offhand: '副手',
    head: '頭部',
    body: '身體',
    hands: '手部',
    feet: '腳部',
    belt: '腰部',
    necklace: '項鍊',
    earring: '耳環',
    ring: '戒指',
    accessory: '飾品',
  };
  const tags = reward.sourceTags?.length ? `，來源偏向${reward.sourceTags.map(formatRewardSourceTag).join('、')}` : '';
  return `${slotLabels[reward.slot] ?? reward.slot}${reward.levelMax ? `最高 Lv.${reward.levelMax}` : ''}${tags}`;
}

function formatRewardSourceTag(tag: string): string {
  const labels: Record<string, string> = {
    starter_progression: '新手成長',
    main_quest: '主線任務',
    zone_theme: '區域主題',
    forest: '森林探索',
    coast: '海岸探索',
    pirate: '海盜戰利品',
    fire: '火焰地帶',
    volcano: '火山地帶',
    ice: '冰雪地帶',
    frozen: '極寒地帶',
    dark: '暗影地帶',
    demon: '魔族戰利品',
    dragon: '龍族戰利品',
    celestial: '天界遺跡',
    finale: '終局戰場',
  };
  return labels[tag] ?? tag.replace(/_/g, ' ');
}

function formatReport(reportData: typeof report, writtenPath?: string): string {
  const lines = [
    '# Map Text Quality Audit',
    `Generated: ${reportData.generatedAt}`,
    `Rooms checked: ${reportData.counts.rooms}`,
    `NPCs checked: ${reportData.counts.npcs}`,
    `Quests checked: ${reportData.counts.quests}`,
    `Dungeons checked: ${reportData.counts.dungeons}`,
    `Monsters checked: ${reportData.counts.monsters}`,
    `Monster families checked: ${reportData.counts.monsterFamilies}`,
    `Gathering nodes checked: ${reportData.counts.gatheringNodes}`,
    `Materials checked: ${reportData.counts.materials}`,
    `Equipment checked: ${reportData.counts.equipment}`,
    `Affixes checked: ${reportData.counts.affixes}`,
    `Image prompts checked: ${reportData.counts.imagePrompts}`,
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
