import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import { GATHERING_NODE_DEFS } from '../packages/shared/src/constants/gathering.js';
import { AFFIX_BUILD_DIRECTIONS, AFFIX_POOLS, type AffixDef } from '../packages/shared/src/systems/item-instance.js';
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
  | 'instanceEntry.description'
  | 'item.description'
  | 'zone.description'
  | 'monster.description'
  | 'monsterFamily.summary'
  | 'gatheringNode.description'
  | 'gatheringMaterial.description'
  | 'equipment.description'
  | 'affix.description'
  | 'affixBuildDirection.notes'
  | 'reward.summary'
  | 'imagePrompt';

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
      `${room.id}:${exit.direction}->${exit.targetRoomId}`,
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
  addIssue(`monsterFamily:${family}`, 'monsterFamily.summary', 'summary', '', 60, '缺 monster family summary，需說明共同特徵、棲地、傷害或抗性傾向');
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
  addIssue(node.id, 'gatheringNode.description', 'description', '', 35, '缺 gathering node description，需包含資源外觀、生成環境與採集動作線索');
}

for (const affix of Object.values(AFFIX_POOLS).flat()) {
  checkText(affix.id, 'affix.description', 'displayDescription', describeAffix(affix), 18, '詞綴顯示說明需清楚說明效果方向，不可只顯示數值');
}
for (const direction of AFFIX_BUILD_DIRECTIONS) {
  checkText(direction.id, 'affixBuildDirection.notes', 'notes', direction.notes, 35, '詞綴流派說明需交代職業定位、武器限制與玩法目的');
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
    reward: {
      summaryMinCjkChars: 30,
    },
    imagePrompt: {
      roomPromptMinEnglishWords: 80,
      roomPromptMinCjkChars: 120,
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
    monsters: Object.keys(MONSTERS).length,
    monsterFamilies: monsterFamilies.size,
    gatheringNodes: Object.keys(GATHERING_NODE_DEFS).length,
    materials: Object.values(ITEM_DEFS).filter(item => item.type === 'material').length,
    equipment: Object.values(ITEM_DEFS).filter(item => item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory').length,
    affixes: Object.values(AFFIX_POOLS).flat().length,
    imagePrompts: Object.values(ROOMS).filter(room => !!room.imagePrompt).length,
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
  const cjkChars = countCjkChars(text);
  const englishWords = countEnglishWords(text);
  if (englishWords >= minimumEnglishWords || cjkChars >= 120) return;
  addMeasuredIssue(id, kind, 'imagePrompt', text, Math.max(englishWords, cjkChars), minimumEnglishWords, reason);
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
  const parts = [`獎勵包含經驗值 ${rewards.exp}`, `金幣 ${rewards.gold}`];
  if (rewards.items?.length) parts.push(`道具 ${rewards.items.map(item => `${ITEM_DEFS[item.itemId]?.name ?? item.itemId} x${item.quantity}`).join('、')}`);
  if (rewards.equipmentSlotRewards?.length) parts.push(`裝備補給 ${rewards.equipmentSlotRewards.map(item => item.slot).join('、')}`);
  if (rewards.portalUnlocks?.length) parts.push(`解鎖區域 ${rewards.portalUnlocks.map(item => ZONES[item.zoneId]?.name ?? item.zoneId).join('、')}`);
  if (rewards.zoneReputation?.length) parts.push(`區域聲望 ${rewards.zoneReputation.map(item => `${ZONES[item.zoneId]?.name ?? item.zoneId} ${item.amount}`).join('、')}`);
  if (rewards.recipes?.length) parts.push(`配方 ${rewards.recipes.join('、')}`);
  return parts.join('；');
}

function formatDungeonRewardSummary(rewards: {
  exp: number;
  gold: number;
  items?: { itemId: string; qty: number }[];
}): string {
  const parts = [`獎勵包含經驗值 ${rewards.exp}`, `金幣 ${rewards.gold}`];
  if (rewards.items?.length) parts.push(`道具 ${rewards.items.map(item => `${ITEM_DEFS[item.itemId]?.name ?? item.itemId} x${item.qty}`).join('、')}`);
  return parts.join('；');
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
