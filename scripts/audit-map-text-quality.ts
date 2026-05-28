import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
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
import { WEAPON_TYPE_DEFS, resolveEquipSlotForItem, type ItemDef } from '../packages/shared/src/types/item.js';
import { TALENT_FAMILY_DRAFTS } from '../client/src/content/talentTreeDrafts.js';
import { ROOMS, ZONES, getRoom } from '../server/src/data/rooms.js';
import { MONSTERS } from '../server/src/data/monsters.js';
import { NPCS } from '../server/src/data/npcs.js';
import { DUNGEON_DEFS } from '../server/src/data/dungeons.js';
import { RECIPES, type CraftingCategory, type RecipeDef } from '../server/src/game/crafting.js';
import { getRoomGatheringTags } from '../server/src/game/gathering.js';
import { ACHIEVEMENT_DEFS, formatAchievementDescription, formatAchievementTitleDescription } from '../server/src/game/achievement.js';
import { formatSystemErrorMessage } from '../server/src/game/system-messages.js';
import { QUEST_DEFS } from '../server/src/game/quest.js';
import { EXPANDED_QUEST_DEFS } from '../server/src/game/quest-system.js';
import { TUTORIAL_STEPS } from '../server/src/game/tutorial.js';
import { formatDialogueOptionLabel, isSpecificDialogueOptionLabel } from '../server/src/game/dialogue-option-labels.js';
import { MAIN_QUEST_FLOW } from '../server/src/game/main-quest-flow.js';
import { buildInstanceEntryDefs, buildZoneMapPlans, plannedMapScopeForRoom } from '../server/src/data/world-map2-plan.js';

type TextKind =
  | 'room.description'
  | 'exit.description'
  | 'npc.description'
  | 'npc.roleSummary'
  | 'npc.dialogue.text'
  | 'npc.dialogue.option'
  | 'merchant.dialogue'
  | 'merchant.buyTab.helpText'
  | 'merchant.sellTab.helpText'
  | 'merchant.transactionMessage'
  | 'partyInvite.message'
  | 'partySystem.message'
  | 'pvp.message'
  | 'duel.message'
  | 'tutorial.helpText'
  | 'onboarding.stepText'
  | 'achievement.description'
  | 'title.description'
  | 'system.errorMessage'
  | 'system.successMessage'
  | 'combatLog'
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
  | 'gatheringHint'
  | 'gatheringMaterial.description'
  | 'craftingRecipe.description'
  | 'equipment.description'
  | 'equipment.tooltip'
  | 'lootTable.summary'
  | 'dropSource.note'
  | 'affix.description'
  | 'affixBuildDirection.notes'
  | 'reward.summary'
  | 'class.summary'
  | 'race.summary'
  | 'faith.summary'
  | 'talent.node.description'
  | 'statusEffect.description'
  | 'skill.description'
  | 'skill.tooltip'
  | 'skill.upgradePreview'
  | 'nearbyCombat.actionLabel'
  | 'combatPanel.actionTooltip'
  | 'mapMarker.tooltip'
  | 'roomAction.tooltip'
  | 'wiki.article.summary'
  | 'wiki.table.rowNote'
  | 'imagePrompt'
  | 'imagePrompt.characterNpc'
  | 'imagePrompt.itemIcon'
  | 'imagePrompt.iconAtlas'
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

const WIKI_AUDIT_SECTIONS = [
  'skills',
  'classes',
  'races',
  'faiths',
  'equipment',
  'affixes',
  'zones',
  'monsters',
  'gathering',
  'crafting',
] as const;

const MERCHANT_BUY_HELP_TEXT = '購買頁會列出商人目前願意販售的商品、價格與等級需求；確認金幣足夠後按購買，物品會直接放入背包。';
const MERCHANT_SELL_HELP_TEXT = '出售頁只顯示背包中未裝備且可回收的物品；售價依物品設定結算，金幣會立即加入角色身上。';

const write = process.argv.includes('--write');
const strict = process.argv.includes('--strict');
const outPath = resolve(process.cwd(), 'reports/map-text-quality.json');
const repoRoot = process.cwd().endsWith('/server') ? resolve(process.cwd(), '..') : process.cwd();

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
  ...Object.keys(RECIPES),
  ...Object.values(AFFIX_POOLS).flat().map(affix => affix.id),
]);
const mainQuestNpcIds = new Set<string>();
for (const flow of MAIN_QUEST_FLOW) {
  mainQuestNpcIds.add(flow.acceptNpcId);
  mainQuestNpcIds.add(flow.turnInNpcId);
}
const referenceAllowList = new Set([
  'worldX',
  'worldY',
  'mapX',
  'mapY',
  'dungeonId',
  'instanceTemplateId',
  'arrivalTicks',
  'resourceCost',
  'status_atlas_01',
  'combat_action_atlas_01',
]);
const instanceEntries = buildInstanceEntryDefs(ZONES);
const instanceEntryRoomIds = new Set(instanceEntries.map(entry => entry.roomId));

for (const zone of Object.values(ZONES)) {
  checkText(zone.id, 'zone.description', 'description', zone.description, 90, 'zone summary 需包含地貌、等級定位、怪物族群、資源或服務、相鄰區域關係');
}

for (const room of Object.values(ROOMS)) {
  const zone = ZONES[room.zone];
  const plan = zonePlans.get(room.zone);
  const scope = plannedMapScopeForRoom(room, plan);
  const roomMinimum = roomMinimumLength(room.id, room.name, room.description, zone?.type, scope);
  checkText(`${room.zone}/${room.id}`, 'room.description', 'description', room.description, roomMinimum, 'room 描述字數不足或過於泛用');
  auditRoomDescriptionSemantics(room, zone, scope);
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
  checkText(`${npc.id}/roleSummary`, 'npc.roleSummary', 'roleSummary', formatNpcRoleSummaryAuditText(npc), npcRoleSummaryMinimum(npc), 'NPC roleSummary 需包含玩法用途、服務限制與玩家下一步');
  if (npc.type === 'merchant' && npc.shopItems?.length) {
    auditMerchantText(npc);
  }
  auditNpcDialogueSet(npc);
  for (const node of npc.dialogue) {
    checkText(`${npc.id}/${node.id}`, 'npc.dialogue.text', 'text', node.text, npcDialogueMinimum(npc, node), 'NPC dialogue node 文字不足');
    auditNpcDialogueNode(npc, node);
    const optionLabels: string[] = [];
    for (const [index, option] of (node.options ?? []).entries()) {
      const nextNode = npc.dialogue.find(candidate => candidate.id === option.nextId);
      const optionText = formatDialogueOptionLabel(npc, node, option, index, nextNode);
      optionLabels.push(optionText);
      checkText(`${npc.id}/${node.id}/option:${index}`, 'npc.dialogue.option', 'text', optionText, 8, 'NPC 選項文字必須顯示副本、任務或玩家行動意圖');
      if (!isSpecificDialogueOptionLabel(optionText)) {
        addIssue(`${npc.id}/${node.id}/option:${index}`, 'npc.dialogue.option', 'text', optionText, 8, 'NPC 選項文字過於泛用，需包含任務 / 副本 / 行動名稱');
      }
      if (nextNode?.action?.type === 'instance_entry' && !/副本|入口|進入|確認|準備|挑戰|洞窟|墓窟|戰場|神殿|礦坑|遺跡|裂隙|深淵|天界|龍谷/u.test(optionText)) {
        addIssue(`${npc.id}/${node.id}/option:${index}`, 'npc.dialogue.option', 'text', optionText, 8, '進入確認選項必須顯示副本名稱或玩家行動意圖');
      }
    }
    if (optionLabels.length > 0 && optionLabels.every(label => !isSpecificDialogueOptionLabel(label))) {
      addIssue(`${npc.id}/${node.id}/options`, 'npc.dialogue.option', 'text', optionLabels.join(' / '), 8, '同一 NPC 節點的主要選項不可全部是泛用選項');
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
  auditQuestDescriptionSemantics(quest, descriptionMinimum);
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
    checkText(
      `${item.id}/tooltip`,
      'equipment.tooltip',
      'tooltip',
      formatEquipmentTooltipAuditText(item),
      minimum,
      '裝備 tooltip 需包含部位、來源或掉落地、外觀材質、適合玩法或職業方向',
    );
  }
}

for (const monster of Object.values(MONSTERS)) {
  checkText(
    monster.id,
    'lootTable.summary',
    'summary',
    formatMonsterLootTableSummaryAuditText(monster),
    30,
    'loot table summary 需包含掉落來源、可能物品或部位、等級或稀有度範圍、用途方向',
  );
  for (const drop of monster.drops) {
    checkText(
      `${monster.id}/${drop.itemId}`,
      'dropSource.note',
      'note',
      formatMonsterDropSourceNoteAuditText(monster, drop),
      30,
      'drop source note 需包含掉落來源、物品名稱、機率、數量、用途方向',
    );
  }
}

for (const node of Object.values(GATHERING_NODE_DEFS)) {
  auditGatheringNodeDescription(node);
  checkText(
    `${node.id}/hint`,
    'gatheringHint',
    'hint',
    formatGatheringHintAuditText(node),
    35,
    'gathering hint 需包含材料來源、採集用途、需求技能或場景、可能產物',
  );
}

for (const recipe of Object.values(RECIPES)) {
  checkText(
    recipe.id,
    'craftingRecipe.description',
    'description',
    formatCraftingRecipeDescriptionAuditText(recipe),
    35,
    'crafting recipe description 需包含材料來源、製作用途、需求站點或技能、可能產物',
  );
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

for (const family of TALENT_FAMILY_DRAFTS) {
  for (const node of family.nodes) {
    checkText(
      node.id,
      'talent.node.description',
      'description',
      formatTalentNodeDescriptionAuditText(family, node),
      node.keystone || node.tier === 5 ? 70 : 35,
      'talent node description 需包含 build 方向、觸發條件或常駐效果、職業資源或技能關聯',
    );
  }
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

for (const entry of instanceEntries) {
  checkInstanceEntryName(entry);
  checkText(entry.id, 'instanceEntry.description', 'description', entry.description, instanceEntryDescriptionMinimum(entry), 'instance entrance 描述需說明外觀、狀態、進入方式、需求或冷卻提示');
  checkInstanceEntryDescription(entry);
  checkText(`${entry.id}/tooltip`, 'instanceEntry.tooltip', 'tooltip', formatInstanceEntryTooltipAuditText(entry), 24, 'instance entry tooltip 需列出副本名稱、建議等級、人數、需求、冷卻與鎖定資訊');
}

for (const room of Object.values(ROOMS)) {
  checkText(
    `${room.id}/marker`,
    'mapMarker.tooltip',
    'tooltip',
    formatMapMarkerTooltipAuditText(room),
    24,
    'map marker tooltip 需包含房間或入口名稱、互動方式、目的地或效果、鎖定原因',
  );
  for (const exit of room.exits) {
    checkText(
      `${room.id}/${exit.direction}`,
      'roomAction.tooltip',
      'tooltip',
      formatRoomActionTooltipAuditText(room, exit),
      24,
      'room action tooltip 需包含目前房間、方向互動、目的地或效果、鎖定原因',
    );
  }
}

auditWikiTextQuality();
auditGeneratedImagePrompts();
auditCombatActionText();
auditPartyAndPvpMessages();
auditTutorialOnboardingText();
auditAchievementAndTitleText();
auditSystemErrorMessages();
auditSystemSuccessAndCombatLogText();

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
      requiredSemanticParts: ['地形或建築主體', '方位或路徑線索', '玩法線索'],
      townServiceRequiredParts: ['服務功能', 'NPC 或設施位置', '可互動行為'],
      gatheringRoomRequiredParts: ['資源外觀', '生成環境', '採集位置'],
      npcRoomRequiredParts: ['NPC 站位', '活動區域', '玩家靠近動線'],
      monsterRoomRequiredParts: ['足跡、巢穴、屍骸、吼聲、巡邏痕跡或元素殘留'],
      instanceEntryRequiredParts: ['入口物件', '入口狀態', '進入風險或限制'],
    },
    exit: {
      normalMinCjkChars: 12,
      crossZoneMinCjkChars: 20,
      specialEdgeMinCjkChars: 28,
    },
    npc: {
      descriptionMinCjkChars: 45,
      roleSummaryMinCjkChars: 35,
      functionalRoleSummaryMinCjkChars: 45,
      dialogueNodeMinCjkChars: 45,
      instanceEntryNpcMinNodes: 3,
      requiredDialogueParts: ['NPC 立場或職責', '具體目標 / 威脅 / 線索', '玩家下一步'],
    },
    merchant: {
      dialogueMinCjkChars: 35,
      buyTabHelpTextMinCjkChars: 30,
      sellTabHelpTextMinCjkChars: 30,
      transactionSuccessMinCjkChars: 24,
      transactionFailureMinCjkChars: 30,
      requiredParts: ['商人身份或服務內容', '價格或回收規則', '背包或金幣限制', '玩家下一步'],
    },
    quest: {
      mainDescriptionMinCjkChars: 80,
      sideDescriptionMinCjkChars: 60,
      objectiveMinCjkChars: 18,
      dialogueStartMinCjkChars: 45,
      dialogueCompleteMinCjkChars: 50,
      requiredDescriptionParts: ['事件背景', '目標位置', '完成條件', '獎勵方向'],
      generatedZoneQuestRequiredParts: ['zone 中文名稱', '威脅或調查點', 'questId / zoneId 可追溯'],
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
      hintMinCjkChars: 35,
      rareNodeDescriptionMinCjkChars: 50,
      riskRelatedNodeDescriptionMinCjkChars: 45,
      rareNodeLevelMin: 31,
      requiredDescriptionParts: ['資源外觀', 'room 地貌或生成環境', '採集動作'],
      materialDescriptionMinCjkChars: 30,
    },
    crafting: {
      recipeDescriptionMinCjkChars: 35,
      requiredDescriptionParts: ['材料來源', '製作用途', '需求站點或技能', '可能產物'],
    },
    equipment: {
      descriptionMinCjkChars: 35,
      uniqueBossDescriptionMinCjkChars: 70,
      tooltipMinCjkChars: 35,
      uniqueBossTooltipMinCjkChars: 70,
    },
    loot: {
      tableSummaryMinCjkChars: 30,
      dropSourceNoteMinCjkChars: 30,
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
    combatAction: {
      actionLabelMinCjkChars: 2,
      actionTooltipMinCjkChars: 30,
      requiredParts: ['目標', '技能或行動效果', '資源變化或不消耗資源', '冷卻或 tick 狀態'],
      bannedLabels: ['攻擊', '使用', '指定'],
    },
    partyPvp: {
      partyInviteMessageMinCjkChars: 25,
      partySystemMessageMinCjkChars: 25,
      pvpMessageMinCjkChars: 25,
      duelMessageMinCjkChars: 25,
      partyRequiredParts: ['邀請者或目標玩家', '隊伍狀態', '接受 / 拒絕或失敗下一步'],
      pvpRequiredParts: ['發起者或目標', '模式', '風險或限制', '下一步'],
    },
    tutorialOnboarding: {
      tutorialHelpTextMinCjkChars: 30,
      onboardingStepTextMinCjkChars: 30,
      requiredParts: ['玩家當下目標', '操作入口', '成功條件', '失敗時下一步'],
      bannedPatterns: ['請點擊', '純 UI 操作句', '只列指令'],
    },
    achievementTitle: {
      achievementDescriptionMinCjkChars: 35,
      titleDescriptionMinCjkChars: 35,
      requiredParts: ['達成條件', '代表意義', '是否解鎖外觀 / 功能 / 數值'],
      bannedPatterns: ['完成成就', '獲得稱號'],
    },
    systemError: {
      generalErrorMinCjkChars: 12,
      numericConditionErrorMinCjkChars: 18,
      requiredParts: ['玩家剛做了什麼', '為什麼失敗', '目前狀態', '下一步能做什麼'],
      numericRequiredParts: ['目前值', '需求值'],
      normalizedAtSendErrorBoundary: true,
    },
    systemSuccessCombatLog: {
      successMessageMinCjkChars: 18,
      combatLogMinCjkChars: 22,
      requiredParts: ['實際數值', '資源名稱', '來源', '目標'],
      bannedPatterns: ['成功', '造成傷害', '獲得獎勵'],
    },
    characterCreation: {
      classSummaryMinCjkChars: 90,
      raceSummaryMinCjkChars: 70,
      faithSummaryMinCjkChars: 70,
    },
    talent: {
      nodeDescriptionMinCjkChars: 35,
      tier5NodeDescriptionMinCjkChars: 70,
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
      characterNpcPromptMinEnglishWords: 70,
      characterNpcPromptMinCjkChars: 100,
      itemIconPromptMinEnglishWords: 45,
      itemIconPromptMinCjkChars: 70,
      iconAtlasPromptMinEnglishWords: 80,
      iconAtlasPromptMinCjkChars: 120,
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
    mapAndRoomAction: {
      mapMarkerTooltipMinCjkChars: 24,
      roomActionTooltipMinCjkChars: 24,
      requiredParts: ['名稱', '互動方式', '目的地或效果', '鎖定原因或未鎖定狀態'],
    },
    wiki: {
      articleSummaryMinCjkChars: 80,
      tableRowNoteMinCjkChars: 35,
      requiredParts: ['資料來源', '中文名稱', '分類', '玩法用途', '限制或注意事項'],
    },
    bannedGenericPhrases,
  },
  counts: {
    rooms: Object.keys(ROOMS).length,
    townServiceRooms: Object.values(ROOMS).filter(room => isTownServiceRoom(room, ZONES[room.zone])).length,
    gatheringTaggedRooms: Object.values(ROOMS).filter(room => getRoomGatheringTags(room).size > 0).length,
    npcRooms: Object.values(ROOMS).filter(room => (room.npcs?.length ?? 0) > 0).length,
    monsterRooms: Object.values(ROOMS).filter(room => (room.monsters?.length ?? 0) > 0).length,
    instanceEntryRooms: instanceEntryRoomIds.size,
    npcs: Object.keys(NPCS).length,
    functionalNpcs: Object.values(NPCS).filter(npc => isFunctionalNpc(npc)).length,
    merchantNpcs: Object.values(NPCS).filter(npc => npc.type === 'merchant' && !!npc.shopItems?.length).length,
    merchantHelpTexts: Object.values(NPCS).filter(npc => npc.type === 'merchant' && !!npc.shopItems?.length).length * 2,
    merchantTransactionMessages: Object.values(NPCS).filter(npc => npc.type === 'merchant' && !!npc.shopItems?.length).length * 4,
    instanceEntryNpcs: Object.values(NPCS).filter(npc => isInstanceEntryNpc(npc)).length,
    npcDialogueNodes: Object.values(NPCS).reduce((count, npc) => count + npc.dialogue.length, 0),
    npcDialogueOptions: Object.values(NPCS).reduce((count, npc) => count + npc.dialogue.reduce((sum, node) => sum + (node.options?.length ?? 0), 0), 0),
    quests: Object.keys(questDefs).length,
    zoneGeneratedQuests: Object.values(questDefs).filter(quest => quest.id.startsWith('zone_')).length,
    dungeons: Object.keys(DUNGEON_DEFS).length,
    monsters: Object.keys(MONSTERS).length,
    monsterFamilies: monsterFamilies.size,
    gatheringNodes: Object.keys(GATHERING_NODE_DEFS).length,
    gatheringHints: Object.keys(GATHERING_NODE_DEFS).length,
    rareGatheringNodes: Object.values(GATHERING_NODE_DEFS).filter(node => isRareGatheringNode(node)).length,
    riskRelatedGatheringNodes: Object.values(GATHERING_NODE_DEFS).filter(node => isRiskRelatedGatheringNode(node)).length,
    craftingRecipes: Object.keys(RECIPES).length,
    materials: Object.values(ITEM_DEFS).filter(item => item.type === 'material').length,
    equipment: Object.values(ITEM_DEFS).filter(item => item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory').length,
    lootTables: Object.values(MONSTERS).length,
    dropSourceNotes: Object.values(MONSTERS).reduce((count, monster) => count + monster.drops.length, 0),
    affixes: Object.values(AFFIX_POOLS).flat().length,
    playableClasses: Object.values(CLASS_DEFS).filter(classDef => classDef.id !== 'monster').length,
    races: Object.keys(RACE_DEFS).length,
    faiths: Object.keys(FAITH_DEFS).length,
    talentNodes: TALENT_FAMILY_DRAFTS.reduce((count, family) => count + family.nodes.length, 0),
    talentTier5Nodes: TALENT_FAMILY_DRAFTS.reduce((count, family) => count + family.nodes.filter(node => node.keystone || node.tier === 5).length, 0),
    statusEffects: Object.keys(STATUS_EFFECT_DEFS).length,
    skills: Object.keys(SKILL_DEFS).length,
    skillUpgradePreviews: Object.values(SKILL_DEFS).reduce((count, skill) => count + Math.max(0, (getSkillUpgradeRule(skill.id)?.maxLevel ?? 1) - 1), 0),
    combatActionLabels: buildCombatActionAuditRecords().length,
    combatActionTooltips: buildCombatActionAuditRecords().length,
    partyMessages: buildPartyMessageAuditRecords().length,
    pvpMessages: buildPvpMessageAuditRecords().length,
    tutorialSteps: TUTORIAL_STEPS.length,
    achievements: Object.keys(ACHIEVEMENT_DEFS).length,
    titleDescriptions: Object.keys(ACHIEVEMENT_DEFS).length,
    systemErrorMessages: buildSystemErrorAuditRecords().length,
    systemSuccessMessages: buildSystemSuccessAuditRecords().length,
    combatLogs: buildCombatLogAuditRecords().length,
    imagePrompts: Object.values(ROOMS).filter(room => !!room.imagePrompt).length,
    characterNpcImagePrompts: countGeneratedPromptRecords(['npc', 'monster']),
    itemIconImagePrompts: countGeneratedPromptRecords(['item', 'material']),
    iconAtlasPrompts: buildIconAtlasPromptRecords().length,
    instanceEntries: instanceEntries.length,
    mapMarkerTooltips: Object.keys(ROOMS).length,
    roomActionTooltips: Object.values(ROOMS).reduce((count, room) => count + room.exits.length, 0),
    wikiArticleSummaries: WIKI_AUDIT_SECTIONS.length,
    wikiTableRowNotes: countWikiRowNotesForAudit(),
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

function auditRoomDescriptionSemantics(room: typeof ROOMS[string], zone: typeof ZONES[string] | undefined, scope: 'world' | 'instance') {
  const id = `${room.zone}/${room.id}`;
  const text = room.description;
  const minimumLength = roomMinimumLength(room.id, room.name, text, zone?.type, scope);
  const gatheringTags = getRoomGatheringTags(room);
  const hasNpcs = (room.npcs?.length ?? 0) > 0;
  const hasMonsters = (room.monsters?.length ?? 0) > 0;
  const hasInstanceEntry = instanceEntryRoomIds.has(room.id);
  const isServiceRoom = isTownServiceRoom(room, zone);

  requireRoomTextPart(
    id,
    text,
    minimumLength,
    /橋|坡|門|井|祭壇|壇|碼頭|礦道|礦坑|林徑|道路|小路|石階|階梯|水道|棧橋|廣場|市場|店|鋪|櫃台|鐵砧|藥架|倉庫|港|船塢|海岸|湖|河|溪|森林|林|丘|谷|山|洞|墓|廢墟|遺跡|塔|堡|營地|巢|田|農舍|溫室|沼|灘|峽|牆|廊|路口|渡口|裂隙|門廊|屋棚|棚架|熔岩|晶簇|空地|靶|場|屋|房|庭|院|窗|地窖|書庫|馬廄|工棚|棧道|區域|海灣|珊瑚|暗礁|礁|水域|岩石|岩壁|崖|平台|台地|樹|平原|石室|花園|果園|牧道|水洼|蜂箱|噴泉|水道|室內|大廳|殿堂|步道|走廊|長階|泉池|觀測台/u,
    'room.description 缺少地形或建築主體，必須讓實作者知道畫面要放橋、坡、門、井、祭壇、碼頭、礦道、林徑等明確場景',
  );
  requireRoomTextPart(
    id,
    text,
    minimumLength,
    /北|南|東|西|前方|後方|左側|右側|內側|外側|上方|下方|入口|出口|門口|路口|通往|連到|接向|銜接|延伸|轉入|穿過|沿著|繞過|抵達|退回|深入|折返|盡頭|上游|下游|外圍|深處|邊緣|中央|對岸|旁路|支路|岔路|前往|遠處|周圍|四周|附近|從|到|回|進|出|一側|另一側|位於|之間|旁|邊|側|上|下/u,
    'room.description 缺少方位或路徑線索，至少要提到方向詞、入口出口、通往或沿著哪條路',
  );

  if (isServiceRoom) {
    requireRoomTextPart(id, text, Math.max(50, minimumLength), /交易|購買|出售|訓練|練習|轉職|修理|休息|治療|傳送|倉庫|任務|服務|補給|委託|櫃台|貨架|鐵砧|藥架|餐桌|驛站|教官/u, '城鎮服務房間必須寫出服務功能、設施位置與玩家可做的互動');
  }

  if (hasInstanceEntry) {
    requireRoomTextPart(id, text, Math.max(65, minimumLength), /入口|門|裂隙|裂谷|傳送|渡口|船|井|祭壇|碑|封印|階梯|洞口|拱門|橋|碼頭|礦梯|通道|符文錨/u, '副本入口房間必須寫出入口物件');
    requireRoomTextPart(id, text, Math.max(65, minimumLength), /開啟|封鎖|鎖|亮起|熄滅|震動|潮濕|破損|等待|冷卻|條件|限制|警戒|守著|需要|建議|警告|唯一|危險|搖搖欲墜|深不見底|扭曲|侵蝕|穩定度|忽略|無視|突發|陷阱|崩塌|撤退|水位|退路|沒有回來/u, '副本入口房間必須寫出入口狀態、進入風險或限制');
  }

  if (gatheringTags.size > 0) {
    requireRoomTextPart(id, text, Math.max(55, minimumLength), /礦|晶|石縫|草|葉|花|藤|根|木|枝|樹|皮|鱗|魚|蝦|水草|陶片|古錢|化石|符石|殘片|殼|苔|藥材|香料|肉|酒|貝|海藻|水母|蘑菇|果|麥|蔬菜|作物|貨箱|骨|木料|石塊|金屬|鐵|銅|證詞|證物|紋章|旗幟|碎片|王冠|符文|水樣|卷宗|倒影|殘攤|軍械|禮拜堂|噴泉|鎧甲|長劍|石像|雕像|墓銘|水位|潮痕|毛皮|獸群|蹄坑|水罐|鍛爐|盔甲|物資/u, '有採集點的 room.description 必須自然提到資源外觀');
    requireRoomTextPart(id, text, Math.max(55, minimumLength), /採|挖|敲|砍|割|剝|撬|釣|收線|撈|刷|拾|採集|採掘|旁|邊|側|角|下|上|間|沿|縫|堆|掛|垂|長在|覆蓋|散落|露出|觀察/u, '有採集點的 room.description 必須說明採集位置或採集動作');
  }

  if (hasNpcs) {
    requireRoomTextPart(id, text, Math.max(55, minimumLength), /櫃台|門口|角落|路邊|廣場|桌|台|爐|架|攤|帳|棚|椅|廊|階|站在|坐在|守在|等在|靠著|巡看|整理|招呼|引導|靠近|走近|照看|告示牌|石碑|石門|營地|篝火|漁民|矮人|村醫|石橋|唯一通路/u, '有 NPC 的 room.description 必須留出 NPC 站位、活動區域或玩家靠近動線');
  }

  if (hasMonsters && !hasMonsterRoomCue(room, text)) {
    addIssue(id, 'room.description', 'description', text, Math.max(55, minimumLength), '有主要怪物族群的 room.description 必須暗示足跡、巢穴、屍骸、吼聲、巡邏痕跡、元素殘留或實際怪物中文名稱');
  }
}

function requireRoomTextPart(id: string, text: string, minimumLength: number, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, 'room.description', 'description', text, minimumLength, reason);
}

function isTownServiceRoom(room: typeof ROOMS[string], zone: typeof ZONES[string] | undefined): boolean {
  const marker = `${room.id} ${room.name} ${(room.npcs ?? []).join(' ')} ${((room as { tags?: string[] }).tags ?? []).join(' ')}`;
  return (zone?.type === 'town' && /merchant|blacksmith|herbalist|trainer|inn|market|shop|vendor|healer|mentor|chief|商|店|鋪|市集|鐵匠|藥師|導師|訓練|旅店|旅館|修理|倉庫|傳送|公會|櫃台|補給|服務/u.test(marker))
    || (zone?.type === 'town' && (room.npcs?.some(npcId => {
      const npc = NPCS[npcId];
      return !!npc && npc.type !== 'general';
    }) ?? false));
}

function hasMonsterRoomCue(room: typeof ROOMS[string], text: string): boolean {
  if (/足跡|腳印|爪痕|爪印|巢|窩|屍|骨|血|吼|叫聲|咆哮|低鳴|巡邏|埋伏|啃咬|啄食|蛀咬|殘骸|黏液|蛛絲|蛛腿|蛇蛻|毒痕|焦痕|霜痕|電弧|暗影|聖光|腐臭|鱗片|羽毛|獸毛|裂痕|戰痕|警戒|被咬|撬開|倒影|痕跡|殘留|威脅|出沒|棲息|蠕動|影子|注視|水母|魚人|海蛇|巨蟹|蝙蝠|蜥蜴|石像鬼|史萊姆|田鼠|烏鴉|黑鴉|骷髏|亡者|盜匪|海盜|魔物|生物|敵人|敵群|遊蕩|靠近|喚醒|召喚|惡魔|龍|雪人|元素|巨像|守衛|親衛|巨魔|妖精|精靈|狼|蛇|蛛|鼠|蠍|蟹|鬼|獸|深淵|薄弱處|被困|噩夢|深潮|甦醒|光脈衝|裂隙|儀式|火花|守護石像|亡靈|決鬥|PVP|裁判|衛兵|對戰|約戰|火焰|熱氣|車輪印|被啃破/u.test(text)) return true;
  return (room.monsters ?? []).some(spawn => {
    const monster = MONSTERS[spawn.monsterId];
    if (!monster) return false;
    return text.includes(monster.name) || text.includes(monster.alias);
  });
}

function npcRoleSummaryMinimum(npc: typeof NPCS[string]): number {
  return isFunctionalNpc(npc) ? 45 : 35;
}

function formatNpcRoleSummaryAuditText(npc: typeof NPCS[string]): string {
  const room = getRoom(npc.roomId);
  const typeLabel = {
    merchant: '商人',
    class_trainer: '職業導師',
    quest: '任務引導者',
    innkeeper: '旅店照看者',
    general: '居民',
  }[npc.type] ?? npc.type;
  const services = [
    npc.shopItems?.length ? `買賣 ${npc.shopItems.length} 種商品並受背包、金幣與出售規則限制` : '',
    npc.classToTeach ? `提供 ${npc.classToTeach} 相關訓練或轉職確認` : '',
    npc.dialogue.some(node => node.action?.type === 'heal') ? '提供治療或休息服務並需要玩家確認狀態' : '',
    npc.dialogue.some(node => node.action?.type === 'quest_start' || node.action?.type === 'quest_complete') ? '核對任務接取、交付證物與回報獎勵' : '',
    isInstanceEntryNpc(npc) ? '守著副本入口並確認等級、道具、隊伍或冷卻條件' : '',
    npc.dialogue.some(node => node.action?.type === 'teleport') ? '說明傳送目的地、費用或解鎖條件' : '',
  ].filter(Boolean).join('；') || '提供地點情報、區域威脅與下一步詢問方向';
  const nextStep = npc.dialogue.find(node => node.options?.length)?.options?.[0]?.text ?? '詢問目前可處理的事件';
  return `NPC「${npc.name}」位於${room?.name ?? npc.roomId}，擔任${typeLabel}。此角色負責${services}。玩家下一步應先選擇「${nextStep}」，並依對話確認限制、目標或回報方向。`;
}

function auditMerchantText(npc: typeof NPCS[string]) {
  const samples = (npc.shopItems ?? []).slice(0, 3).map(itemId => ITEM_DEFS[itemId]?.name ?? itemId);
  const firstItem = npc.shopItems?.map(itemId => ITEM_DEFS[itemId]).find(Boolean);
  const sampleList = samples.length ? samples.join('、') : '目前商品清單';
  const buyPrice = firstItem ? applyAuditBuyPrice(firstItem.buyPrice) : 0;
  const sellPrice = firstItem ? firstItem.sellPrice : 0;
  const itemName = firstItem?.name ?? '商品';
  const merchantDialogue = formatMerchantDialogueAuditText(npc, sampleList);
  const successBuy = `你向${npc.name}買入「${itemName}」x1，支付 ${buyPrice} 金幣；物品已放入背包，目前剩餘 120 金幣。`;
  const failBuy = `你想向${npc.name}購買「${itemName}」x1，但需要 ${buyPrice} 金幣，目前只有 10 金幣；下一步請先出售物品或取得更多金幣。`;
  const successSell = `你向${npc.name}賣出「${itemName}」x1，獲得 ${sellPrice} 金幣；金幣已加入角色，目前共有 130 金幣。`;
  const failSell = `你想向${npc.name}出售「${itemName}」x1，但背包目前沒有未裝備且可出售的對應物品，金幣不會結算；下一步請檢查出售頁清單。`;

  checkText(`${npc.id}/merchantDialogue`, 'merchant.dialogue', 'dialogue', merchantDialogue, 35, 'merchant dialogue 需包含商人身份、服務內容、買賣限制與玩家下一步');
  requireMerchantTextPart(`${npc.id}/merchantDialogue`, 'merchant.dialogue', 'dialogue', merchantDialogue, 35, /商人|販售|收購|買賣|交易|補給/u, 'merchant dialogue 缺少商人身份或服務內容');
  requireMerchantTextPart(`${npc.id}/merchantDialogue`, 'merchant.dialogue', 'dialogue', merchantDialogue, 35, /金幣|價格|售價|回收|收購|背包/u, 'merchant dialogue 缺少價格、回收或背包限制');
  requireMerchantTextPart(`${npc.id}/merchantDialogue`, 'merchant.dialogue', 'dialogue', merchantDialogue, 35, /下一步|購買頁|出售頁|選擇|確認/u, 'merchant dialogue 缺少玩家下一步');

  checkText(`${npc.id}/buyTabHelp`, 'merchant.buyTab.helpText', 'helpText', MERCHANT_BUY_HELP_TEXT, 30, 'merchant buy tab helpText 需說明購買目的、價格與金幣限制');
  requireMerchantTextPart(`${npc.id}/buyTabHelp`, 'merchant.buyTab.helpText', 'helpText', MERCHANT_BUY_HELP_TEXT, 30, /購買|販售|商品/u, 'buy tab helpText 缺少操作目的');
  requireMerchantTextPart(`${npc.id}/buyTabHelp`, 'merchant.buyTab.helpText', 'helpText', MERCHANT_BUY_HELP_TEXT, 30, /價格|金幣/u, 'buy tab helpText 缺少價格或金幣規則');
  requireMerchantTextPart(`${npc.id}/buyTabHelp`, 'merchant.buyTab.helpText', 'helpText', MERCHANT_BUY_HELP_TEXT, 30, /背包|放入/u, 'buy tab helpText 缺少背包限制或結果');

  checkText(`${npc.id}/sellTabHelp`, 'merchant.sellTab.helpText', 'helpText', MERCHANT_SELL_HELP_TEXT, 30, 'merchant sell tab helpText 需說明出售目的、回收規則與背包限制');
  requireMerchantTextPart(`${npc.id}/sellTabHelp`, 'merchant.sellTab.helpText', 'helpText', MERCHANT_SELL_HELP_TEXT, 30, /出售|回收/u, 'sell tab helpText 缺少操作目的');
  requireMerchantTextPart(`${npc.id}/sellTabHelp`, 'merchant.sellTab.helpText', 'helpText', MERCHANT_SELL_HELP_TEXT, 30, /售價|金幣|結算/u, 'sell tab helpText 缺少價格或回收規則');
  requireMerchantTextPart(`${npc.id}/sellTabHelp`, 'merchant.sellTab.helpText', 'helpText', MERCHANT_SELL_HELP_TEXT, 30, /背包|未裝備/u, 'sell tab helpText 缺少背包或裝備限制');

  for (const [id, text, minimum] of [
    ['buySuccess', successBuy, 24],
    ['buyFailure', failBuy, 30],
    ['sellSuccess', successSell, 24],
    ['sellFailure', failSell, 30],
  ] as const) {
    checkText(`${npc.id}/${id}`, 'merchant.transactionMessage', 'transactionMessage', text, minimum, 'merchant transactionMessage 需包含物品名稱、數量、金額、方向與下一步');
    requireMerchantTextPart(`${npc.id}/${id}`, 'merchant.transactionMessage', 'transactionMessage', text, minimum, /買入|購買|賣出|出售/u, 'transactionMessage 缺少買入 / 賣出方向');
    requireMerchantTextPart(`${npc.id}/${id}`, 'merchant.transactionMessage', 'transactionMessage', text, minimum, /「.+」x\d+/u, 'transactionMessage 缺少物品名稱與數量');
    requireMerchantTextPart(`${npc.id}/${id}`, 'merchant.transactionMessage', 'transactionMessage', text, minimum, /金幣/u, 'transactionMessage 缺少金額或金幣結果');
    if (id.endsWith('Failure')) {
      requireMerchantTextPart(`${npc.id}/${id}`, 'merchant.transactionMessage', 'transactionMessage', text, minimum, /但|目前|下一步/u, 'transactionMessage 失敗訊息缺少失敗原因與下一步');
    }
  }
}

function formatMerchantDialogueAuditText(npc: typeof NPCS[string], sampleList: string): string {
  const room = getRoom(npc.roomId);
  return `${npc.name}是位於${room?.name ?? npc.roomId}的商人，提供${sampleList}等商品買賣服務；購買需確認金幣價格與背包空間，出售只收未裝備且有回收價格的物品。玩家下一步可切換購買頁或出售頁，再確認商品與數量。`;
}

function applyAuditBuyPrice(price: number): number {
  return Math.max(0, Math.floor(price));
}

function requireMerchantTextPart(id: string, kind: TextKind, field: string, text: string, minimumLength: number, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, kind, field, text, minimumLength, reason);
}

function isFunctionalNpc(npc: typeof NPCS[string]): boolean {
  return npc.type !== 'general'
    || !!npc.shopItems?.length
    || !!npc.classToTeach
    || npc.dialogue.some(node => !!node.action);
}

function isInstanceEntryNpc(npc: typeof NPCS[string]): boolean {
  return npc.dialogue.some(node => node.action?.type === 'instance_entry');
}

function npcDialogueMinimum(npc: typeof NPCS[string], node: typeof NPCS[string]['dialogue'][number]): number {
  if (mainQuestNpcIds.has(npc.id) && npc.dialogue[0]?.id === node.id) return 90;
  if (isInstanceEntryNpc(npc) || node.action?.type === 'instance_entry') return 70;
  return 45;
}

function auditNpcDialogueSet(npc: typeof NPCS[string]) {
  if (!isInstanceEntryNpc(npc)) return;
  if (npc.dialogue.length < 3) {
    addMeasuredIssue(npc.id, 'npc.dialogue.text', 'dialogue', '', npc.dialogue.length, 3, '副本入口 NPC 至少需要介紹、條件確認、進入確認三段對話');
  }
  const fullText = npc.dialogue.map(node => node.text).join(' ');
  for (const [label, pattern] of [
    ['副本名稱或入口名', /副本|入口|裂隙|墓窟|遺跡|神殿|礦坑|洞窟|王都|戰場|深淵|天界|龍谷/u],
    ['入口原因或威脅', /威脅|危險|侵蝕|封印|怪物|首領|亡靈|惡魔|深淵|火焰|水位|陷阱|崩塌/u],
    ['玩家下一步', /進入|確認|準備|檢查|隊伍|等級|道具|回報|先/u],
  ] as const) {
    if (!pattern.test(fullText)) {
      addIssue(npc.id, 'npc.dialogue.text', 'dialogue', fullText, 70, `副本入口 NPC 對話缺少${label}`);
    }
  }
}

function auditNpcDialogueNode(npc: typeof NPCS[string], node: typeof NPCS[string]['dialogue'][number]) {
  const id = `${npc.id}/${node.id}`;
  const minimum = npcDialogueMinimum(npc, node);
  const text = node.text;

  if (isInstanceEntryNpc(npc) || node.action?.type === 'instance_entry') {
    requireNpcTextPart(id, text, minimum, /副本|入口|進入|隊伍|等級|道具|條件|冷卻|威脅|首領|危險|確認|準備|洞口|礦道|巢|水晶|退路|封蠟|深層/u, '副本相關 NPC 對話必須提到副本威脅、目標、入口或隊伍條件');
  }
  if (node.action?.type === 'quest_start' || node.action?.type === 'quest_complete') {
    requireNpcTextPart(id, text, minimum, /任務|委託|目標|地點|回報|獎勵|證物|完成|下一步|調查/u, '任務 NPC 對話必須提示目標地點、任務動機、獎勵或回報方向');
  }
}

function requireNpcTextPart(id: string, text: string, minimumLength: number, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, 'npc.dialogue.text', 'text', text, minimumLength, reason);
}

function auditQuestDescriptionSemantics(quest: (typeof questDefs)[string], minimumLength: number) {
  const id = quest.id;
  const text = quest.description;
  requireQuestDescriptionPart(id, text, minimumLength, /因|為|出現|異常|威脅|需要|失蹤|入侵|調查|前往|探索|每日|每週|委託|支援|確認|保護|守護|削弱|蒐集|收集|搜尋|完成|引導|任務會/u, 'quest.description 缺少事件背景或任務動機');
  requireQuestDescriptionPart(id, text, minimumLength, /前往|位於|入口|主路|交通點|房間|區域|附近|出沒|村|平原|森林|洞窟|海岸|火山|雪原|魔族|龍谷|深淵|天界|農場|溪谷|礦|港|遺跡|墓|草原|沙丘|王都|神殿|戰場|目標出沒區域|任務指定區域/u, 'quest.description 缺少目標位置或可追蹤路線');
  requireQuestDescriptionPart(id, text, minimumLength, /完成|擊敗|消滅|討伐|收集|採集|製作|巡查|調查|交談|回報|通關|首通|參與|貢獻|排行榜|依任務追蹤/u, 'quest.description 缺少完成條件');
  requireQuestDescriptionPart(id, text, minimumLength, /獎勵|經驗值|金幣|裝備|補給|道具|解鎖|聲望|配方|回報進度/u, 'quest.description 缺少獎勵方向');

  if (quest.id.startsWith('zone_')) {
    const zoneId = extractZoneIdFromQuest(quest.id);
    const zone = zoneId ? ZONES[zoneId] : undefined;
    if (zone && !text.includes(zone.name)) {
      addIssue(id, 'quest.description', 'description', text, minimumLength, '自動生成 zone quest description 必須保留 zone 中文名稱，方便追溯 questId / zoneId');
    }
  }
}

function extractZoneIdFromQuest(questId: string): string | undefined {
  const withoutPrefix = questId.replace(/^zone_/u, '');
  const suffixes = ['_progression', '_hidden_path', '_side_', '_daily_', '_exploration_', '_boss', '_crafting'];
  const suffix = suffixes.find(value => withoutPrefix.includes(value));
  return suffix ? withoutPrefix.slice(0, withoutPrefix.indexOf(suffix)) : undefined;
}

function requireQuestDescriptionPart(id: string, text: string, minimumLength: number, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, 'quest.description', 'description', text, minimumLength, reason);
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

function auditGatheringNodeDescription(node: typeof GATHERING_NODE_DEFS[string]) {
  const minimumLength = Math.max(
    35,
    isRareGatheringNode(node) ? 50 : 0,
    isRiskRelatedGatheringNode(node) ? 45 : 0,
  );
  checkText(
    node.id,
    'gatheringNode.description',
    'description',
    node.description,
    minimumLength,
    'gathering node description 需包含資源外觀、生成環境、採集動作；稀有或風險相關節點需補稀有原因、採集風險與用途方向',
  );

  const requirementGroups: Array<[string, RegExp]> = [
    ['資源外觀', /礦|礦脈|晶|草|葉|花|木|枝|皮毛|鱗|魚|蝦|水母|陶片|古錢|化石|符石|核心|碎片|紋理|微光|鱗片/u],
    ['room 地貌或生成環境', /土坡|山壁|洞|遺跡|火山|戰場|礦坑|龍脈|地帶|古木|巡行路|戰痕|平原|森林|林地|聖壇|灰燼土|林徑|密林|巢穴|岩縫|溪|池塘|河灣|湖面|冷泉|溫泉|海面|荒地|墓道|機關室|廢墟/u],
    ['採集動作', /採|敲|剝|撬|砍|割|梳|收起|收線|垂釣|拋線|撈|刷|採掘|切下|固定|夾取|剪下/u],
  ];
  for (const [label, pattern] of requirementGroups) {
    if (!pattern.test(node.description)) {
      addIssue(
        node.id,
        'gatheringNode.description',
        'description',
        node.description,
        minimumLength,
        `採集點描述缺少${label}，不可只寫通用材料句或 raw id`,
      );
    }
  }

  if (isRareGatheringNode(node) && !/稀有|只在|只沿|只墜落|原因|處在於|高階|傳說/u.test(node.description)) {
    addIssue(node.id, 'gatheringNode.description', 'description', node.description, 50, '稀有採集點需說明稀有原因或生成限制');
  }
  if (isRiskRelatedGatheringNode(node) && !/風險|避開|避免|留意|耐熱|燙傷|機關|污染|戰場|掠食者|獸群|活蛇|巡行|殘留|亡靈/u.test(node.description)) {
    addIssue(node.id, 'gatheringNode.description', 'description', node.description, 45, '與怪物、危險地貌或任務線索相關的採集點需提示風險或痕跡');
  }
  if (isRareGatheringNode(node) && !/用於|用途|製作|打造|材料|裝備|藥劑|料理|修復|法器|護符|供|可作/u.test(node.description)) {
    addIssue(node.id, 'gatheringNode.description', 'description', node.description, 50, '稀有採集點需說明用途方向');
  }
}

function isRareGatheringNode(node: typeof GATHERING_NODE_DEFS[string]): boolean {
  return node.levelMin >= 31;
}

function isRiskRelatedGatheringNode(node: typeof GATHERING_NODE_DEFS[string]): boolean {
  return node.skill === 'skinning'
    || /崩裂|污染|暗影|蛛|蛇|龍|魔像|戰場|火山|灼熱|燒灼|機關|巡行|古龍|亡靈/u.test(node.description);
}

function formatGatheringHintAuditText(node: typeof GATHERING_NODE_DEFS[string]): string {
  const yields = node.yields
    .slice()
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3)
    .map(yieldDef => {
      const item = ITEM_DEFS[yieldDef.itemId];
      return `${item?.name ?? readableTag(yieldDef.itemId)} ${qualityLabel(yieldDef.quality)} x${yieldDef.minQty}-${yieldDef.maxQty}`;
    })
    .join('、');
  const roomText = [...node.roomTags, ...node.zoneTags].map(tag => ZONES[tag]?.name ?? equipmentSourceLabel(tag)).join('、');
  return `採集提示「${node.name}」需要${gatheringSkillLabel(node.skill)}技能，常見於${roomText}場景。材料來源是${node.description}，採集後可能取得${yields}，用途方向包含製作、任務、交易或裝備素材。`;
}

function formatCraftingRecipeDescriptionAuditText(recipe: RecipeDef): string {
  const materials = recipe.materials.map(material => {
    const item = ITEM_DEFS[material.itemId];
    return `${item?.name ?? readableTag(material.itemId)} x${material.count}`;
  }).join('、');
  const result = getRecipeResultForAudit(recipe);
  const resultItem = result ? ITEM_DEFS[result.itemId] : undefined;
  const resultText = result
    ? `${resultItem?.name ?? readableTag(result.itemId)}${result.count > 1 ? ` x${result.count}` : ''}`
    : '依玩家選擇的裝備部位產生對應成品';
  const slotText = recipe.slotResults
    ? `可指定部位包含${Object.keys(recipe.slotResults).map(equipmentSlotLabel).join('、')}。`
    : '';
  return `配方「${recipe.name}」屬於${craftingCategoryLabel(recipe.category)}站點或技能，需求製作等級 Lv.${recipe.level}、成功率 ${recipe.successRate}%、完成後取得 ${recipe.exp} 製作經驗。材料來源包含${materials}，製作用途是產出${resultText}，${slotText}可能產物與材料數量都必須在 UI 中顯示，避免只列內部配方 id。`;
}

function getRecipeResultForAudit(recipe: RecipeDef): RecipeDef['result'] | undefined {
  return recipe.result ?? Object.values(recipe.slotResults ?? {})[0];
}

function gatheringSkillLabel(skill: string): string {
  const labels: Record<string, string> = {
    mining: '採礦',
    herbalism: '草藥學',
    logging: '伐木',
    skinning: '剝皮',
    fishing: '釣魚',
    archaeology: '考古',
  };
  return labels[skill] ?? skill;
}

function craftingCategoryLabel(category: CraftingCategory): string {
  const labels: Record<CraftingCategory, string> = {
    forge: '鍛造',
    tailoring: '裁縫',
    leatherworking: '皮革',
    jewelcrafting: '珠寶',
    alchemy: '煉金',
    enchanting: '附魔',
    cooking: '烹飪',
  };
  return labels[category] ?? category;
}

function qualityLabel(quality: string): string {
  const labels: Record<string, string> = {
    rough: '粗糙',
    normal: '普通',
    fine: '精良',
    rare: '稀有',
    perfect: '完美',
  };
  return labels[quality] ?? quality;
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
  if (kind === 'npc.roleSummary') return 'npc.roleSummary';
  if (kind.startsWith('merchant.')) return kind;
  if (kind === 'nearbyCombat.actionLabel' || kind === 'combatPanel.actionTooltip') return 'combatAction';
  if (kind === 'partyInvite.message' || kind === 'partySystem.message' || kind === 'pvp.message' || kind === 'duel.message') return 'partyPvp.message';
  if (kind === 'tutorial.helpText' || kind === 'onboarding.stepText') return 'tutorialOnboarding.text';
  if (kind === 'achievement.description' || kind === 'title.description') return 'achievementTitle.description';
  if (kind === 'system.errorMessage') return 'system.errorMessage';
  if (kind === 'system.successMessage' || kind === 'combatLog') return 'systemSuccessCombatLog';
  if (kind === 'npc.dialogue.text' || kind === 'npc.dialogue.option') return `npc:${id.split('/')[0]}`;
  if (kind === 'quest.description' || kind === 'quest.dialogueStart' || kind === 'quest.dialogueComplete' || kind === 'quest.objective') return `quest:${id.split('/')[0]}`;
  if (kind === 'dungeon.room.description') return `dungeon:${id.split('/')[0]}`;
  if (kind === 'instanceEntry.name' || kind === 'instanceEntry.tooltip') return kind;
  if (kind === 'monster.description') return 'monsters';
  if (kind === 'equipment.description') return 'equipment';
  if (kind === 'equipment.tooltip') return 'equipment.tooltip';
  if (kind === 'lootTable.summary' || kind === 'dropSource.note') return kind;
  if (kind === 'skill.description') return 'skills';
  if (kind === 'skill.tooltip' || kind === 'skill.upgradePreview') return kind;
  if (kind === 'item.tooltip') return 'item.tooltip';
  if (kind === 'gatheringHint') return 'gatheringHint';
  if (kind === 'gatheringMaterial.description') return 'materials';
  if (kind === 'craftingRecipe.description') return 'craftingRecipe.description';
  if (kind === 'mapMarker.tooltip') return 'mapMarker.tooltip';
  if (kind === 'roomAction.tooltip') return 'roomAction.tooltip';
  if (kind === 'wiki.article.summary' || kind === 'wiki.table.rowNote') return kind;
  if (kind === 'imagePrompt.characterNpc' || kind === 'imagePrompt.itemIcon' || kind === 'imagePrompt.iconAtlas') return kind;
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

function checkPrompt(id: string, kind: TextKind, text: string, minimumEnglishWords: number, reason: string, minimumCjkChars = 120) {
  recordText(id, kind, 'imagePrompt', text);
  const cjkChars = countCjkChars(text);
  const englishWords = countEnglishWords(text);
  if (englishWords >= minimumEnglishWords || cjkChars >= minimumCjkChars) return;
  addMeasuredIssue(id, kind, 'imagePrompt', text, Math.max(englishWords, cjkChars), minimumEnglishWords, reason);
}

interface GeneratedImagePromptRecord {
  assetId: string;
  targetId: string;
  category: 'npc' | 'monster' | 'item' | 'material';
  name: string;
  prompt: string;
}

function auditGeneratedImagePrompts(): void {
  for (const record of readGeneratedPromptRecords()) {
    if (record.category === 'npc' || record.category === 'monster') {
      checkPrompt(
        record.assetId,
        'imagePrompt.characterNpc',
        record.prompt,
        70,
        'character / NPC / monster prompt 需包含身份、半身或全身構圖、服裝或身體特徵、姿態、背景、安全邊界與禁止文字',
        100,
      );
      checkImagePromptRequiredTerms(record.assetId, 'imagePrompt.characterNpc', record.prompt, [
        ['輸出用途', /Output purpose|direct game portrait|portrait size|game asset/i],
        ['構圖', /half-body|full creature|upper-body|centered|bust view|portrait/i],
        ['服裝或身體特徵', /clothing|role props|anatomy|silhouette|horns|wings|limbs|Details:/i],
        ['姿態', /pose|posture|expressive face|attack posture/i],
        ['背景', /background|Zones:/i],
        ['安全邊界', /safe margins/i],
        ['禁止文字', /no text|watermark/i],
      ]);
    } else {
      checkPrompt(
        record.assetId,
        'imagePrompt.itemIcon',
        record.prompt,
        45,
        'item icon prompt 需包含物品類型、材質、輪廓、主色或光影、單一圖標構圖、背景要求與禁止文字',
        70,
      );
      checkImagePromptRequiredTerms(record.assetId, 'imagePrompt.itemIcon', record.prompt, [
        ['輸出用途', /inventory|shop|icon|game asset/i],
        ['單一圖標構圖', /single object|object centered|centered subject|no collage/i],
        ['材質或輪廓', /material|silhouette|edge highlights|Details:/i],
        ['背景要求', /backdrop|background|negative space/i],
        ['安全邊界', /safe margins/i],
        ['禁止文字', /no text|watermark/i],
      ]);
    }
  }

  for (const record of buildIconAtlasPromptRecords()) {
    checkPrompt(
      record.id,
      'imagePrompt.iconAtlas',
      record.prompt,
      80,
      'icon atlas prompt 需寫明 atlas 格數、比例、每格正方形、單格命名、視覺區分規則、安全邊界與禁止文字',
      120,
    );
    checkImagePromptRequiredTerms(record.id, 'imagePrompt.iconAtlas', record.prompt, [
      ['atlas 格數', /\b\d+x\d+\b|16 icons|16 square/i],
      ['比例', /16:10|square atlas|grid/i],
      ['每格正方形', /square cell|square icon|each cell/i],
      ['單格命名', /cell names|named cell|listed cell/i],
      ['視覺區分', /distinct|different silhouette|high contrast/i],
      ['安全邊界', /safe margins/i],
      ['禁止文字', /no text|watermark/i],
    ]);
  }
}

function checkImagePromptRequiredTerms(
  id: string,
  kind: 'imagePrompt.characterNpc' | 'imagePrompt.itemIcon' | 'imagePrompt.iconAtlas',
  prompt: string,
  requirements: Array<[string, RegExp]>,
): void {
  for (const [label, pattern] of requirements) {
    if (pattern.test(prompt)) continue;
    addMeasuredIssue(id, kind, 'imagePrompt', prompt, Math.max(countEnglishWords(prompt), countCjkChars(prompt)), 1, `image prompt 缺少${label}`);
  }
}

function readGeneratedPromptRecords(): GeneratedImagePromptRecord[] {
  const promptPath = resolve(repoRoot, 'docs/atlas/ai-prompts.jsonl');
  if (!existsSync(promptPath)) return [];
  return readFileSync(promptPath, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => JSON.parse(line) as GeneratedImagePromptRecord);
}

function countGeneratedPromptRecords(categories: GeneratedImagePromptRecord['category'][]): number {
  const categorySet = new Set(categories);
  return readGeneratedPromptRecords().filter(record => categorySet.has(record.category)).length;
}

function buildIconAtlasPromptRecords(): Array<{ id: string; prompt: string }> {
  const records: Array<{ id: string; prompt: string }> = [];
  for (const metadataPath of [
    resolve(repoRoot, 'docs/skills/starter-skill-atlas-metadata.json'),
    resolve(repoRoot, 'docs/skills/common-origin-skill-atlas-metadata.json'),
  ]) {
    if (!existsSync(metadataPath)) continue;
    const metadata = JSON.parse(readFileSync(metadataPath, 'utf8')) as {
      grid: { cols: number; rows: number; iconSize: number };
      style: string;
      atlases: Array<{ file: string; promptSummary?: string; cells: Array<{ name: string; skillId?: string; theme?: string }> }>;
    };
    for (const atlas of metadata.atlases) {
      const cellNames = atlas.cells.map(cell => `${cell.name}${cell.theme ? ` (${cell.theme})` : ''}`).join(', ');
      records.push({
        id: atlas.file,
        prompt: `Icon atlas prompt for ${atlas.file}: create a ${metadata.grid.cols}x${metadata.grid.rows} grid, 1:1 square atlas made from ${metadata.grid.cols * metadata.grid.rows} square cells, each cell exported as a ${metadata.grid.iconSize}x${metadata.grid.iconSize} square icon. Use ${metadata.style}; every named cell must stay visually distinct with a different silhouette, color accent, and readable motif. Cell names: ${cellNames}. Keep each icon centered with safe margins so cropping never cuts the symbol. Use no text, no UI label, no watermark, no frame, no collage, and no extra category badge.`,
      });
    }
  }
  records.push({
    id: 'status_atlas_01',
    prompt: 'Icon atlas prompt for status_atlas_01: create a 4x4 grid in a 16:10 source image, containing 16 square status effect icons for poison, burn, bleed, stun, freeze, fear, slow, silence, defense down, attack down, mark, shield, damage reduction, mana shield, regeneration, and mana regeneration. Each square cell is a named cell tied to one effect name, with a distinct silhouette, a different color accent, centered composition, high contrast, safe margins for cropping, no text, no UI label, no watermark, no frame, and no decorative collage outside the cells.',
  });
  records.push({
    id: 'combat_action_atlas_01',
    prompt: 'Icon atlas prompt for combat_action_atlas_01: create a 3x1 icon row inside a 16:10 source image with three square action icons for attack, defend, and flee placed on aligned square cells. Each named cell must be visually distinct: weapon strike for attack, guard shield for defend, motion or exit symbol for flee, using different silhouettes and color accents. Keep every square icon centered, readable at small size, high contrast, safe margins for cropping, no text, no UI label, no watermark, no frame, and no extra symbols outside the intended cells.',
  });
  return records;
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

function formatEquipmentTooltipAuditText(item: ItemDef): string {
  const slot = resolveEquipSlotForItem(item) ?? item.equipSlot ?? 'unknown';
  const weaponType = item.weaponType ? WEAPON_TYPE_DEFS[item.weaponType]?.name ?? item.weaponType : undefined;
  const sourceText = formatEquipmentSourceAuditText(item);
  const classText = item.classReq?.length || item.requiredClass?.length
    ? [...(item.classReq ?? []), ...(item.requiredClass ?? [])].map(classId => CLASS_DEFS[classId as keyof typeof CLASS_DEFS]?.name ?? readableTag(String(classId))).join('、')
    : '不限職業';
  return `裝備「${item.name}」tooltip 顯示部位 ${equipmentSlotLabel(slot)}${weaponType ? `、武器類型 ${weaponType}` : ''}，等級需求 Lv.${item.level ?? item.levelReq}，稀有度 ${item.rarity ?? 'common'}，來源或掉落地為${sourceText}，可用職業為${classText}，主要數值 ${formatItemStatAuditText(item.stats)}。外觀與材質說明：${item.description}；玩法方向需讓玩家判斷適合輸出、防禦、法術、輔助或坐騎配置。`;
}

function formatEquipmentSourceAuditText(item: ItemDef): string {
  const labels = [...(item.sourceTags ?? []), ...(item.zoneTags ?? [])]
    .map(tag => ZONES[tag]?.name ?? equipmentSourceLabel(tag))
    .filter((tag, index, tags) => tag && tags.indexOf(tag) === index);
  return labels.join('、') || '通用掉落或商店來源';
}

function equipmentSourceLabel(tag: string): string {
  const labels: Record<string, string> = {
    shop: '商店',
    drop: '怪物掉落',
    quest: '任務獎勵',
    craft: '製作',
    crafting: '製作',
    chest: '寶箱',
    boss: '首領掉落',
    dungeon: '副本',
    global: '全域裝備池',
    starter_progression: '前期成長裝備池',
    weapon_topup: '武器補充裝備池',
    shield_topup: '盾牌補充裝備池',
    mount: '坐騎裝備',
  };
  return labels[tag] ?? readableTag(tag);
}

function readableTag(tag: string): string {
  return tag
    .split('_')
    .filter(Boolean)
    .map(part => part.replace(/^[a-z]/, char => char.toUpperCase()))
    .join(' ');
}

function equipmentSlotLabel(slot: string): string {
  const labels: Record<string, string> = {
    meleeMainHand: '近戰主手',
    meleeOffHand: '近戰副手',
    rangedMainHand: '遠程主手',
    rangedOffHand: '遠程副手',
    weapon: '武器',
    offhand: '副手',
    head: '頭部',
    body: '身體',
    hands: '手套',
    feet: '鞋子',
    ring: '戒指',
    earring: '耳環',
    belt: '腰部',
    necklace: '項鏈',
    accessory: '飾品',
    saddle: '馬鞍',
  };
  return labels[slot] ?? slot;
}

function formatItemStatAuditText(stats: ItemDef['stats']): string {
  if (!stats || Object.keys(stats).length === 0) return '無額外數值';
  const labels: Record<string, string> = {
    atk: '攻擊',
    matk: '魔攻',
    def: '防禦',
    mdef: '魔防',
    hp: '生命',
    mp: '魔力',
    str: '力量',
    int: '智力',
    dex: '敏捷',
    vit: '體質',
    luk: '幸運',
    critRate: '暴擊',
    critDamage: '暴傷',
    hitRate: '命中',
    dodgeRate: '閃避',
    mountChargePower: '坐騎衝鋒',
    mountStability: '坐騎穩定',
    mountGuardPower: '坐騎護衛',
    mountFatigueMax: '坐騎耐力',
    mountFatigueRecovery: '坐騎恢復',
    mountedInterceptBonus: '騎乘攔截',
    mountedRetreatBonus: '騎乘撤退',
    mountedThreatBonus: '騎乘威脅',
  };
  return Object.entries(stats).map(([key, value]) => `${labels[key] ?? key}${value > 0 ? '+' : ''}${value}`).join('、');
}

function formatMonsterLootTableSummaryAuditText(monster: typeof MONSTERS[string]): string {
  const drops = monster.drops.length > 0
    ? monster.drops.slice(0, 5).map(drop => {
      const item = ITEM_DEFS[drop.itemId];
      return `${item?.name ?? readableTag(drop.itemId)} ${Math.round(drop.chance * 100)}% x${drop.minQty}-${drop.maxQty}`;
    }).join('、')
    : '沒有固定物品掉落';
  const goldText = `${monster.goldReward[0]}-${monster.goldReward[1]} 金幣`;
  const tierText = monster.isBoss ? '首領' : monster.isElite ? '菁英' : '一般怪物';
  return `${monster.name} Lv.${monster.level} 是${tierText}與${monster.family}族群掉落來源，擊敗後提供 ${monster.expReward} 經驗與 ${goldText}。掉落表包含${drops}，用途方向依物品類型可作材料、補給、任務、裝備或交易；玩家可用此摘要判斷等級區間、稀有度期待與是否值得刷取。`;
}

function formatMonsterDropSourceNoteAuditText(monster: typeof MONSTERS[string], drop: typeof MONSTERS[string]['drops'][number]): string {
  const item = ITEM_DEFS[drop.itemId];
  const itemName = item?.name ?? readableTag(drop.itemId);
  const itemUse = item ? equipmentOrItemUseLabel(item) : '未登錄物品，需補資料後才能判斷用途';
  const tierText = monster.isBoss ? '首領' : monster.isElite ? '菁英' : '一般怪物';
  return `${itemName}可由${monster.name} Lv.${monster.level} ${tierText}掉落，掉落機率約 ${Math.round(drop.chance * 100)}%，數量 ${drop.minQty}-${drop.maxQty}。此來源 note 說明掉落來源、數量與用途方向：${itemUse}，避免只在 loot table 顯示內部 item id 或單純 drop rate。`;
}

function equipmentOrItemUseLabel(item: ItemDef): string {
  if (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') {
    const slot = resolveEquipSlotForItem(item) ?? item.equipSlot ?? 'unknown';
    return `${equipmentSlotLabel(slot)}裝備，適合依數值與職業需求納入配裝`;
  }
  if (item.type === 'material') return '材料，可用於製作、任務交付或交易';
  if (item.type === 'consumable') return '消耗品，可在探索、戰鬥或補給流程中使用';
  if (item.type === 'quest') return '任務道具，用於推進事件、入口或交付條件';
  return '一般物品，可依描述判斷用途';
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

function formatMapMarkerTooltipAuditText(room: typeof ROOMS[string]): string {
  const zone = ZONES[room.zone];
  const entry = instanceEntries.find(entryDef => entryDef.roomId === room.id);
  if (entry) {
    const dungeon = entry.dungeonId ? DUNGEON_DEFS[entry.dungeonId] : undefined;
    const lockText = formatInstanceEntryLockText(entry);
    return `地圖標記「${room.name}」位於${zone?.name ?? room.zone}，點擊可查看房間詳情並操作入口「${entry.name}」。效果是進入${dungeon?.name ?? entry.instanceTemplateId}，${lockText}。`;
  }
  const exitText = room.exits.length > 0
    ? `可查看 ${room.exits.length} 個出口並選擇移動方向`
    : '目前沒有可走出口，只能查看房間資訊或返回上一層介面';
  return `地圖標記「${room.name}」位於${zone?.name ?? room.zone}，點擊可查看房間詳情、怪物、NPC 與採集資訊；${exitText}，此標記本身未鎖定。`;
}

function formatRoomActionTooltipAuditText(room: typeof ROOMS[string], exit: typeof ROOMS[string]['exits'][number]): string {
  const targetRoom = getRoom(exit.targetRoomId);
  const targetZone = exit.targetZoneId ? ZONES[exit.targetZoneId] : targetRoom ? ZONES[targetRoom.zone] : undefined;
  const targetName = targetRoom?.name ?? exit.targetZoneName ?? exit.targetRoomId;
  const edgeText = formatExitEdgeKindLabel(exit.edgeKind);
  const lockText = exit.locked
    ? `目前鎖定，${exit.keyItemId ? `需要 ${ITEM_DEFS[exit.keyItemId]?.name ?? exit.keyItemId}` : '需要滿足任務、道具或入口條件'}後才能前往`
    : '目前未鎖定，可直接嘗試移動';
  const effectText = exit.edgeKind === 'instance_entry'
    ? `效果是進入${targetZone?.name ?? '副本區域'}入口`
    : `目的地是${targetZone?.name ? `${targetZone.name}的` : ''}${targetName}`;
  return `從「${room.name}」往${formatDirectionLabel(exit.direction)}移動，互動方式是點擊房間方向按鈕；${effectText}，路徑類型為${edgeText}，${lockText}。`;
}

function formatInstanceEntryLockText(entry: InstanceEntryForAudit): string {
  const requiredItem = entry.requiredItemId ? ITEM_DEFS[entry.requiredItemId] : undefined;
  const parts: string[] = [];
  if (entry.minLevel) parts.push(`建議或需求等級 Lv.${entry.minLevel}`);
  if (requiredItem) parts.push(`需要${requiredItem.name}${entry.consumeItem ? '且使用後消耗' : '但不消耗'}`);
  if (entry.requiredQuestId) parts.push(`需要任務 ${entry.requiredQuestId} 狀態 ${entry.requiredQuestState ?? '符合條件'}`);
  if (entry.cooldownSeconds) parts.push(`入口冷卻 ${entry.cooldownSeconds} 秒`);
  if (parts.length === 0) return '入口未鎖定，玩家可直接互動';
  return `鎖定或限制原因包含${parts.join('、')}`;
}

function formatDirectionLabel(direction: string): string {
  const labels: Record<string, string> = {
    north: '北',
    south: '南',
    east: '東',
    west: '西',
  };
  return labels[direction] ?? direction;
}

function formatExitEdgeKindLabel(edgeKind: string | undefined): string {
  const labels: Record<string, string> = {
    normal: '一般道路',
    wrap: '世界邊界環繞路徑',
    bridge: '跨區橋接道路',
    long_path: '長距離道路',
    portal: '傳送或特殊通路',
    one_way: '單向通路',
    instance_entry: '副本入口',
    instance_exit: '副本出口',
  };
  return labels[edgeKind ?? 'normal'] ?? (edgeKind ?? '一般道路');
}

function auditWikiTextQuality() {
  for (const section of WIKI_AUDIT_SECTIONS) {
    checkText(
      `wiki/${section}/summary`,
      'wiki.article.summary',
      'summary',
      formatWikiArticleSummaryAuditText(section),
      80,
      'wiki article summary 需包含資料來源、玩法用途、限制或注意事項，不可只貼 raw id 或 enum 清單',
    );
  }

  for (const skill of Object.values(SKILL_DEFS)) {
    checkText(skill.id, 'wiki.table.rowNote', 'rowNote', formatWikiSkillRowNote(skill), 35, 'wiki skill row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const classDef of Object.values(CLASS_DEFS).filter(classDef => classDef.id !== 'monster')) {
    checkText(classDef.id, 'wiki.table.rowNote', 'rowNote', formatWikiClassRowNote(classDef), 35, 'wiki class row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const race of Object.values(RACE_DEFS)) {
    checkText(race.id, 'wiki.table.rowNote', 'rowNote', formatWikiRaceRowNote(race), 35, 'wiki race row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const faith of Object.values(FAITH_DEFS)) {
    checkText(faith.id, 'wiki.table.rowNote', 'rowNote', formatWikiFaithRowNote(faith), 35, 'wiki faith row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const item of Object.values(ITEM_DEFS).filter(item => item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory')) {
    checkText(item.id, 'wiki.table.rowNote', 'rowNote', formatWikiEquipmentRowNote(item), 35, 'wiki equipment row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const affix of Object.values(AFFIX_POOLS).flat()) {
    checkText(affix.id, 'wiki.table.rowNote', 'rowNote', formatWikiAffixRowNote(affix), 35, 'wiki affix row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const zone of Object.values(ZONES)) {
    checkText(zone.id, 'wiki.table.rowNote', 'rowNote', formatWikiZoneRowNote(zone), 35, 'wiki zone row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const monster of Object.values(MONSTERS)) {
    checkText(monster.id, 'wiki.table.rowNote', 'rowNote', formatWikiMonsterRowNote(monster), 35, 'wiki monster row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const node of Object.values(GATHERING_NODE_DEFS)) {
    checkText(node.id, 'wiki.table.rowNote', 'rowNote', formatWikiGatheringRowNote(node), 35, 'wiki gathering row note 需包含中文名稱、分類、來源、玩法用途');
  }
  for (const recipe of Object.values(RECIPES)) {
    checkText(recipe.id, 'wiki.table.rowNote', 'rowNote', formatWikiCraftingRowNote(recipe), 35, 'wiki crafting row note 需包含中文名稱、分類、來源、玩法用途');
  }
}

function countWikiRowNotesForAudit(): number {
  return Object.keys(SKILL_DEFS).length
    + Object.values(CLASS_DEFS).filter(classDef => classDef.id !== 'monster').length
    + Object.keys(RACE_DEFS).length
    + Object.keys(FAITH_DEFS).length
    + Object.values(ITEM_DEFS).filter(item => item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory').length
    + Object.values(AFFIX_POOLS).flat().length
    + Object.keys(ZONES).length
    + Object.keys(MONSTERS).length
    + Object.keys(GATHERING_NODE_DEFS).length
    + Object.keys(RECIPES).length;
}

function formatWikiArticleSummaryAuditText(section: typeof WIKI_AUDIT_SECTIONS[number]): string {
  const labels: Record<typeof WIKI_AUDIT_SECTIONS[number], string> = {
    skills: '技能',
    classes: '職業',
    races: '種族',
    faiths: '信仰',
    equipment: '裝備',
    affixes: '詞綴',
    zones: '區域',
    monsters: '怪物',
    gathering: '採集',
    crafting: '製作',
  };
  const source: Record<typeof WIKI_AUDIT_SECTIONS[number], string> = {
    skills: 'SKILL_DEFS、技能升級規則與職業資源設定',
    classes: 'CLASS_DEFS 的一轉與二轉前職業資料',
    races: 'RACE_DEFS 的角色創建來源資料',
    faiths: 'FAITH_DEFS 的被動、祈禱與禁忌資料',
    equipment: 'ITEM_DEFS、裝備部位、來源 tag 與數值資料',
    affixes: 'AFFIX_POOLS 與詞綴流派方向資料',
    zones: 'ZONES、ROOMS 與 world map2 規劃資料',
    monsters: 'MONSTERS、怪物 family summary 與掉落表資料',
    gathering: 'GATHERING_NODE_DEFS 與材料 ITEM_DEFS',
    crafting: 'RECIPES、材料 ITEM_DEFS 與製作等級資料',
  };
  return `Wiki「${labels[section]}」頁面摘要的資料來源是${source[section]}，用途是讓玩家不用閱讀內部 enum 也能理解分類、玩法定位、取得方式與限制。每筆資料需顯示中文名稱、資料代號、實際效果或來源，並提醒等級、職業、資源、掉落、採集、製作或入口條件等注意事項，避免只呈現 raw id 清單。`;
}

function formatWikiSkillRowNote(skill: typeof SKILL_DEFS[string]): string {
  return `資料代號 ${skill.id}，技能「${skill.name}」屬於${CLASS_DEFS[skill.classId]?.name ?? skill.classId}分類，來源為 SKILL_DEFS。用途是${skill.description}；限制包含${formatSkillResourceLine(skill)}、冷卻 ${skill.cooldown} tick。`;
}

function formatWikiClassRowNote(classDef: typeof CLASS_DEFS[keyof typeof CLASS_DEFS]): string {
  return `資料代號 ${classDef.id}，職業「${classDef.name}」分類為${classDef.tier === 1 ? '一轉職業' : '二轉或基礎職業'}，來源為 CLASS_DEFS。用途是${classDef.description}；限制是主要資源為${formatClassResourceAuditText(classDef.resourceType)}。`;
}

function formatWikiRaceRowNote(race: typeof RACE_DEFS[keyof typeof RACE_DEFS]): string {
  return `資料代號 ${race.id}，種族「${race.name}」來源為 RACE_DEFS。分類屬於角色創建選項，玩法用途是${race.description}；限制或注意事項是能力修正 ${formatBaseStatAuditText(race.statMods)}。`;
}

function formatWikiFaithRowNote(faith: typeof FAITH_DEFS[keyof typeof FAITH_DEFS]): string {
  return `資料代號 ${faith.id}，信仰「${faith.name}」來源為 FAITH_DEFS，分類領域是${faith.domains.join('、')}。用途是被動「${faith.passiveName}」與祈禱「${faith.prayerName}」；限制包含禁忌 ${faith.taboos.join('、')}。`;
}

function formatWikiEquipmentRowNote(item: ItemDef): string {
  const slot = resolveEquipSlotForItem(item) ?? item.equipSlot ?? 'unknown';
  return `資料代號 ${item.id}，裝備「${item.name}」分類為${equipmentSlotLabel(slot)}，來源為 ITEM_DEFS 與${formatEquipmentSourceAuditText(item)}。用途是${equipmentOrItemUseLabel(item)}；限制包含等級 Lv.${item.level ?? item.levelReq} 與職業 ${item.classReq?.join('、') || '不限'}。`;
}

function formatWikiAffixRowNote(affix: AffixDef): string {
  return `資料代號 ${affix.id}，詞綴「${affix.name}」分類為${affix.kind === 'prefix' ? '前綴' : affix.kind === 'suffix' ? '後綴' : affix.kind ?? '詞綴'}，來源為 AFFIX_POOLS。用途是${describeAffix(affix)}；限制是只會出現在允許部位 ${affix.appliesTo.map(equipmentSlotLabel).join('、')}。`;
}

function formatWikiZoneRowNote(zone: typeof ZONES[string]): string {
  return `資料代號 ${zone.id}，區域「${zone.name}」分類為${zoneTypeLabel(zone.type)} / ${zoneRegionLabel(zone.region)}，來源為 ZONES。用途是${zone.description}；限制包含等級 Lv.${zone.levelRange[0]}-${zone.levelRange[1]}、PVP ${pvpModeLabel(zone.pvpMode)} 與死亡懲罰 ${deathPenaltyLabel(zone.deathPenalty)}。`;
}

function formatWikiMonsterRowNote(monster: typeof MONSTERS[string]): string {
  return `資料代號 ${monster.id}，怪物「${monster.name}」分類為${monster.isBoss ? '首領' : monster.isElite ? '菁英' : '一般'} / ${monster.family}，來源為 MONSTERS。用途是戰鬥、經驗 ${monster.expReward} 與掉落來源；限制是等級 Lv.${monster.level}，玩家可用它判斷刷怪風險。`;
}

function formatWikiGatheringRowNote(node: typeof GATHERING_NODE_DEFS[string]): string {
  return `資料代號 ${node.id}，採集點「${node.name}」分類為${gatheringSkillLabel(node.skill)}，來源為 GATHERING_NODE_DEFS。用途是取得${node.yields.slice(0, 2).map(yieldDef => ITEM_DEFS[yieldDef.itemId]?.name ?? yieldDef.itemId).join('、')}並投入製作或任務；限制是場景 ${node.roomTags.map(equipmentSourceLabel).join('、')} 與等級 Lv.${node.levelMin}-${node.levelMax}。`;
}

function formatWikiCraftingRowNote(recipe: RecipeDef): string {
  const result = getRecipeResultForAudit(recipe);
  return `資料代號 ${recipe.id}，配方「${recipe.name}」分類為${craftingCategoryLabel(recipe.category)}，來源為 RECIPES。用途是製作${result ? ITEM_DEFS[result.itemId]?.name ?? result.itemId : '指定部位成品'}；限制是製作等級 Lv.${recipe.level}、材料 ${recipe.materials.length} 種與成功率 ${recipe.successRate}%。`;
}

function zoneTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    town: '城鎮',
    wilds: '野外',
    dungeon_entrance: '副本入口',
    resource: '資源區',
    pvp: '競技區',
    kingdom: '王國戰區',
    endgame: '終局區',
  };
  return labels[type] ?? readableTag(type);
}

function zoneRegionLabel(region: string): string {
  const labels: Record<string, string> = {
    central: '中央',
    east: '東部',
    west: '西部',
    north: '北部',
    south: '南部',
    underground: '地下',
    abyss: '深淵',
    celestial: '天界',
  };
  return labels[region] ?? readableTag(region);
}

function pvpModeLabel(mode: string): string {
  const labels: Record<string, string> = {
    safe: '安全',
    duel_only: '僅決鬥',
    open: '開放 PvP',
    faction: '陣營 PvP',
    kingdom_war: '王國戰爭',
  };
  return labels[mode] ?? readableTag(mode);
}

function deathPenaltyLabel(penalty: string): string {
  const labels: Record<string, string> = {
    none: '無懲罰',
    durability: '耐久損失',
    gold: '金幣損失',
    loot: '掉落風險',
  };
  return labels[penalty] ?? readableTag(penalty);
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

function formatTalentNodeDescriptionAuditText(
  family: typeof TALENT_FAMILY_DRAFTS[number],
  node: typeof TALENT_FAMILY_DRAFTS[number]['nodes'][number],
): string {
  const branch = family.branches.find(branchDef => branchDef.id === node.branch);
  const prerequisites = node.prerequisites.length > 0
    ? `前置條件為先點滿上一個 Tier 節點，同路線逐 tier 解鎖。`
    : '沒有前置節點，作為該路線的起點。';
  return `天賦「${node.name}」屬於${family.name}的${branch?.name ?? node.branch}路線，build 方向是${node.buildIntent || branch?.buildIntent || '一轉基礎成長'}。觸發或常駐規則為${node.mechanic}；UI 說明為${node.uiCopy}。此節點與職業資源、技能節奏或戰鬥判讀的關聯是${branch?.identity ?? family.coreFantasy}，${prerequisites}每級最多投入 ${node.maxRank} 點，平衡限制為${node.balanceNote}；${node.notSkillUpgradeNote}`;
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

function auditCombatActionText() {
  for (const record of buildCombatActionAuditRecords()) {
    checkText(`${record.id}/label`, 'nearbyCombat.actionLabel', 'label', record.label, 2, 'nearby combat action label 必須是具體行動，不可只寫攻擊、使用或指定');
    if (/^(攻擊|使用|指定)$/u.test(record.label)) {
      addIssue(`${record.id}/label`, 'nearbyCombat.actionLabel', 'label', record.label, 2, 'nearby combat action label 過於泛用');
    }
    checkText(`${record.id}/tooltip`, 'combatPanel.actionTooltip', 'tooltip', record.tooltip, 30, 'combatPanel action tooltip 需包含目標、效果、資源變化與冷卻或 tick 狀態');
    requireCombatActionTooltipPart(record.id, record.tooltip, /目標|自己|敵人|怪物|本房|逼近|背包|坐騎/u, 'combat action tooltip 缺少目標或作用對象');
    requireCombatActionTooltipPart(record.id, record.tooltip, /攻擊|傷害|降低|脫離|騎乘|衝鋒|守護|攔截|觸發|效果|放入|消耗/u, 'combat action tooltip 缺少行動效果');
    requireCombatActionTooltipPart(record.id, record.tooltip, /不消耗|消耗|怒氣|魔力|專注|信仰|道具|資源/u, 'combat action tooltip 缺少資源變化');
    requireCombatActionTooltipPart(record.id, record.tooltip, /tick|冷卻|結算|下一個|立刻/u, 'combat action tooltip 缺少冷卻或 tick 狀態');
  }
}

function buildCombatActionAuditRecords(): { id: string; label: string; tooltip: string }[] {
  return [
    {
      id: 'combat/melee',
      label: '近戰',
      tooltip: '以近戰武器攻擊目前目標「史萊姆」，本次行動會在下一個戰鬥 tick 結算命中與傷害，不消耗職業資源。',
    },
    {
      id: 'combat/ranged',
      label: '遠程',
      tooltip: '以遠程武器攻擊目前目標「史萊姆」，本次行動會在下一個戰鬥 tick 結算命中與傷害，不消耗職業資源。',
    },
    {
      id: 'combat/defend',
      label: '防禦',
      tooltip: '進入防禦姿態直到下一個戰鬥 tick，目標是降低即將承受的傷害，不消耗怒氣、魔力、專注或信仰。',
    },
    {
      id: 'combat/flee',
      label: '逃跑',
      tooltip: '嘗試立刻脫離目前戰鬥；成功會離開交戰狀態，失敗會在同一個 tick 承受敵人追擊傷害，不消耗職業資源。',
    },
    {
      id: 'combat/mountRide',
      label: '上馬',
      tooltip: '在戰鬥中嘗試騎上目前坐騎，下一個 tick 前可改變機動行動與後續衝鋒選項，不消耗職業資源。',
    },
    {
      id: 'combat/mountDismount',
      label: '下馬',
      tooltip: '從目前坐騎下馬，解除騎乘狀態並回到一般戰鬥行動，會在當前指令結算且不消耗職業資源。',
    },
    {
      id: 'combat/charge',
      label: '衝鋒',
      tooltip: '騎乘衝向目前目標「史萊姆」，用坐騎機動製造攻擊壓力，依戰鬥 tick 結算且不消耗職業資源。',
    },
    {
      id: 'combat/mountedGuard',
      label: '守護',
      tooltip: '命令坐騎守護自己，降低接下來承受的威脅並維持騎乘防線，依戰鬥 tick 生效且不消耗職業資源。',
    },
    {
      id: 'nearbyCombat/intercept',
      label: '攔截',
      tooltip: '騎乘攔截逼近中的目標「暗影狼」，延後它抵達本房戰鬥；此行動依逼近 tick 結算，不消耗職業資源。',
    },
    {
      id: 'combat/item',
      label: '小型生命藥水',
      tooltip: '使用背包道具「小型生命藥水」x1，目標是觸發治療效果；目前堆疊 2 個，會在指令結算時消耗道具而不是職業資源。',
    },
  ];
}

function requireCombatActionTooltipPart(id: string, text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(`${id}/tooltip`, 'combatPanel.actionTooltip', 'tooltip', text, 30, reason);
}

function auditPartyAndPvpMessages() {
  for (const record of buildPartyMessageAuditRecords()) {
    const minimum = record.kind === 'partyInvite.message' ? 25 : 25;
    checkText(record.id, record.kind, 'message', record.text, minimum, 'party message 需包含邀請者或目標、隊伍狀態、接受 / 拒絕或下一步');
    requirePartyMessagePart(record.id, record.kind, record.text, /Leader|Member|隊長|目標|玩家|對方|你/u, 'party message 缺少邀請者或目標玩家');
    requirePartyMessagePart(record.id, record.kind, record.text, /隊伍|組隊|人數|隊長|邀請|加入/u, 'party message 缺少隊伍狀態');
    requirePartyMessagePart(record.id, record.kind, record.text, /接受|拒絕|下一步|等待|重新|離隊|邀請|跟隨/u, 'party message 缺少接受、拒絕或失敗下一步');
  }
  for (const record of buildPvpMessageAuditRecords()) {
    checkText(record.id, record.kind, 'message', record.text, 25, 'pvp / duel message 需包含發起者、目標、模式、風險或限制與下一步');
    requirePvpMessagePart(record.id, record.kind, record.text, /Leader|Member|挑戰|對手|目標|你|對方/u, 'pvp message 缺少發起者或目標');
    requirePvpMessagePart(record.id, record.kind, record.text, /決鬥|競技場|PvP|一對一|配對/u, 'pvp message 缺少模式');
    requirePvpMessagePart(record.id, record.kind, record.text, /風險|死亡懲罰|ELO|經驗|金幣|物品|限制|未建立|未開戰/u, 'pvp message 缺少風險或限制');
    requirePvpMessagePart(record.id, record.kind, record.text, /下一步|接受|拒絕|等待|重新|離開|開始|輸入/u, 'pvp message 缺少下一步');
  }
}

function buildPartyMessageAuditRecords(): { id: string; kind: 'partyInvite.message' | 'partySystem.message'; text: string }[] {
  return [
    { id: 'party/inviteTarget', kind: 'partyInvite.message', text: 'Leader 邀請你加入隊伍；目前隊伍將在你接受後建立或加入既有隊伍，30 秒內輸入 "party accept" 接受，或輸入 "party decline" 拒絕。' },
    { id: 'party/inviteSent', kind: 'partyInvite.message', text: '你已向 Member 發送組隊邀請；對方 30 秒內可接受或拒絕，目前隊伍狀態會在回應後同步。' },
    { id: 'party/inviteSelfFail', kind: 'partySystem.message', text: '你正在發送組隊邀請，但目標是自己；目前隊伍狀態不變，下一步請輸入其他玩家名稱。' },
    { id: 'party/accept', kind: 'partySystem.message', text: '你已接受 Leader 的組隊邀請並加入隊伍；目前隊伍人數 2/5，下一步可跟隨隊長或準備戰鬥。' },
    { id: 'party/decline', kind: 'partySystem.message', text: '你已拒絕 Leader 的組隊邀請；目前沒有加入該隊伍，下一步可等待其他邀請或自行建立隊伍。' },
    { id: 'party/fullFail', kind: 'partySystem.message', text: '你想加入 Leader 的隊伍，但目前人數已達 5/5；下一步請等隊長空出位置後重新邀請。' },
  ];
}

function buildPvpMessageAuditRecords(): { id: string; kind: 'pvp.message' | 'duel.message'; text: string }[] {
  return [
    { id: 'duel/requestTarget', kind: 'duel.message', text: 'Leader 向你發起決鬥挑戰；模式為一對一 PvP，接受後會立即進入戰鬥並承擔死亡懲罰風險，30 秒內輸入 "duel accept" 接受或 "duel decline" 拒絕。' },
    { id: 'duel/requestSent', kind: 'duel.message', text: '你已向 Member 發起一對一決鬥挑戰；對方 30 秒內可接受或拒絕，接受後會立即開始 PvP 戰鬥並承擔死亡懲罰風險。' },
    { id: 'duel/start', kind: 'duel.message', text: '決鬥開始：Leader vs Member；模式為一對一 PvP，勝負會結算 ELO、經驗、金幣與可能物品掉落。' },
    { id: 'duel/decline', kind: 'duel.message', text: '你已拒絕 Leader 的決鬥挑戰；目前不會進入 PvP 戰鬥，也不會承擔死亡懲罰風險，下一步可繼續探索或等待新挑戰。' },
    { id: 'arena/join', kind: 'pvp.message', text: '你已加入競技場 PvP 排隊；目前排隊人數 1，系統會尋找等級接近的對手，配對後會承擔 ELO 與死亡懲罰風險，下一步可等待或輸入 arena leave 離開。' },
    { id: 'arena/matched', kind: 'pvp.message', text: '競技場配對成功；你的對手是 Member（Lv.10），模式為配對 PvP，戰鬥即將開始並會結算 ELO 與死亡懲罰。' },
    { id: 'arena/leave', kind: 'pvp.message', text: '你已離開競技場 PvP 排隊；目前不會被配對，也不會承擔競技場死亡懲罰風險，下一步可繼續探索或再次使用 arena join。' },
  ];
}

function requirePartyMessagePart(id: string, kind: 'partyInvite.message' | 'partySystem.message', text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, kind, 'message', text, 25, reason);
}

function requirePvpMessagePart(id: string, kind: 'pvp.message' | 'duel.message', text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, kind, 'message', text, 25, reason);
}

function auditTutorialOnboardingText() {
  for (const step of TUTORIAL_STEPS) {
    const id = `tutorial/step:${step.step}`;
    checkText(id, 'tutorial.helpText', 'hint', step.hint, 30, 'tutorial helpText 需包含當下目標、操作入口、成功條件與失敗時下一步');
    requireTutorialTextPart(id, step.hint, /當下目標|目標/u, 'tutorial helpText 缺少玩家當下目標');
    requireTutorialTextPart(id, step.hint, /輸入|點擊|選擇|打開|指令列|戰鬥面板|房間詳細面板|NPC 對話/u, 'tutorial helpText 缺少操作入口');
    requireTutorialTextPart(id, step.hint, /成功條件|完成條件|成功/u, 'tutorial helpText 缺少成功條件');
    requireTutorialTextPart(id, step.hint, /如果|失敗|不足|不存在|沒有|不符|阻擋|下一步/u, 'tutorial helpText 缺少失敗時下一步');
  }
}

function requireTutorialTextPart(id: string, text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, 'tutorial.helpText', 'hint', text, 30, reason);
}

function auditAchievementAndTitleText() {
  for (const def of Object.values(ACHIEVEMENT_DEFS)) {
    const achievementText = formatAchievementDescription(def);
    const titleText = formatAchievementTitleDescription(def);

    checkText(def.id, 'achievement.description', 'description', achievementText, 35, 'achievement description 需包含達成條件、代表意義、解鎖外觀 / 功能 / 數值');
    requireAchievementTextPart(def.id, 'achievement.description', 'description', achievementText, /完成條件|條件|進度/u, 'achievement description 缺少達成條件');
    requireAchievementTextPart(def.id, 'achievement.description', 'description', achievementText, /代表|里程碑|掌握|玩法目標/u, 'achievement description 缺少代表意義');
    requireAchievementTextPart(def.id, 'achievement.description', 'description', achievementText, /稱號|外觀|功能|數值|不額外/u, 'achievement description 缺少外觀 / 功能 / 數值說明');

    checkText(`${def.id}/title`, 'title.description', 'description', titleText, 35, 'title description 需包含解鎖成就、代表意義、外觀 / 功能 / 數值限制');
    requireAchievementTextPart(`${def.id}/title`, 'title.description', 'description', titleText, /稱號|解鎖|取得條件/u, 'title description 缺少稱號解鎖條件');
    requireAchievementTextPart(`${def.id}/title`, 'title.description', 'description', titleText, /代表|里程碑|身份/u, 'title description 缺少代表意義');
    requireAchievementTextPart(`${def.id}/title`, 'title.description', 'description', titleText, /外觀|功能|數值|不提供/u, 'title description 缺少外觀 / 功能 / 數值說明');
  }
}

function requireAchievementTextPart(id: string, kind: 'achievement.description' | 'title.description', field: string, text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, kind, field, text, 35, reason);
}

function auditSystemErrorMessages() {
  for (const record of buildSystemErrorAuditRecords()) {
    const text = formatSystemErrorMessage(record.text);
    const minimum = record.numeric ? 18 : 12;
    checkText(record.id, 'system.errorMessage', 'message', text, minimum, 'system errorMessage 需包含玩家剛做了什麼、失敗原因、目前狀態與下一步');
    requireSystemErrorPart(record.id, text, /你剛執行|你正在|你想|你使用|你選擇|嘗試|執行|進入|裝備/u, 'system errorMessage 缺少玩家剛做了什麼');
    requireSystemErrorPart(record.id, text, /失敗原因|但|因為|無法|不足|不存在|找不到|不符|冷卻|上鎖|缺少|沒有|不能|尚未|需要/u, 'system errorMessage 缺少為什麼失敗');
    requireSystemErrorPart(record.id, text, /目前|狀態|角色|背包|房間|戰鬥|等級|需求|剩餘|人數|金幣|未|已/u, 'system errorMessage 缺少目前狀態');
    requireSystemErrorPart(record.id, text, /下一步|請|改用|等待|前往|返回|重新|查看|輸入|使用|先/u, 'system errorMessage 缺少下一步');
    if (record.numeric) {
      requireSystemErrorPart(record.id, text, /目前[^；。]*\d+|目前等級|目前人數|目前只有|目前剩餘/u, 'numeric system errorMessage 缺少目前值');
      requireSystemErrorPart(record.id, text, /需求[^；。]*\d+|需要[^；。]*\d+|最多[^；。]*\d+|至少[^；。]*\d+/u, 'numeric system errorMessage 缺少需求值');
    }
  }
}

function buildSystemErrorAuditRecords(): { id: string; text: string; numeric?: boolean }[] {
  return [
    { id: 'command/unknown', text: '未知指令：dance。輸入 help 查看可用指令。' },
    { id: 'movement/missingDirection', text: '請指定方向：north, south, east, west' },
    { id: 'movement/lockedExit', text: '這個出口上鎖，暫時無法通過。' },
    { id: 'movement/noDirection', text: '無法往 北 移動。' },
    { id: 'combat/noTarget', text: '找不到戰鬥目標「暗影狼」。' },
    { id: 'skill/notLearned', text: '你沒有學過技能「火球術」。' },
    { id: 'skill/cooldown', text: '「火球術」冷卻中，還需 3 tick。' },
    { id: 'skill/resource', text: '資源不足，火球術目前資源 3，需求 10 點。', numeric: true },
    { id: 'equipment/missingItem', text: '背包中沒有「鐵劍」。' },
    { id: 'equipment/level', text: '你正在裝備「鐵劍」，但角色等級不足；目前等級 3，需求等級 Lv.5。下一步請先提升等級或改穿低等級裝備。', numeric: true },
    { id: 'instance/level', text: '你正在嘗試進入「水晶洞窟」，但等級不足；目前等級 3，需求等級 5。下一步：先完成同等級區域任務或提升等級後再返回入口。', numeric: true },
    { id: 'instance/partySize', text: '你正在嘗試進入「水晶洞窟」，但隊伍人數不符；目前人數 6，最多允許 5 人。下一步：調整隊伍人數後由隊長再次進入。', numeric: true },
    { id: 'instance/itemRequired', text: '你正在嘗試進入「終焉戰場軍旗裂隙」，但入口道具不足；缺少道具「終戰軍旗封印」，目前持有 0 個，需求 1 個。下一步：取得所需道具後回到此入口。', numeric: true },
    { id: 'instance/questRequired', text: '你正在嘗試進入「王城封印門」，但任務條件不足；需要「王都封印調查」達到「已完成」，目前狀態是「進行中」。下一步：先推進對應任務階段再返回入口。' },
    { id: 'quest/missingId', text: '用法：quest accept <任務ID>' },
    { id: 'merchant/noItem', text: '你正在購買商人商品，但沒有輸入物品名稱；下一步請使用 buy <物品名稱>。' },
    { id: 'gathering/noNode', text: '目前位置不存在可採集的資源點。' },
    { id: 'achievement/notComplete', text: '你尚未完成該成就，無法裝備此稱號。' },
  ];
}

function requireSystemErrorPart(id: string, text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, 'system.errorMessage', 'message', text, 12, reason);
}

function auditSystemSuccessAndCombatLogText() {
  for (const record of buildSystemSuccessAuditRecords()) {
    checkText(record.id, 'system.successMessage', 'message', record.text, 18, 'system successMessage 需包含來源、目標、實際數值、資源名稱或狀態結果');
    requireSystemSuccessPart(record.id, record.text, /你|玩家|角色|任務|商人|公會|隊伍|系統|副本/u, 'successMessage 缺少來源或行動者');
    requireSystemSuccessPart(record.id, record.text, /獲得|支付|消耗|剩餘|回復|解鎖|加入|完成|結算|目前/u, 'successMessage 缺少結果或狀態變化');
    if (/[0-9]/u.test(record.text)) {
      requireSystemSuccessPart(record.id, record.text, /經驗值|金幣|HP|道具|物品|數量|Lv|點|個|次|人/u, 'successMessage 有數值但缺少資源名稱');
    }
  }

  for (const record of buildCombatLogAuditRecords()) {
    checkText(record.id, 'combatLog', 'log', record.text, 22, 'combatLog 需包含行動者、目標、技能或攻擊方式、結果與實際數值');
    requireCombatLogPart(record.id, record.text, /玩家|史萊姆|暗影狼|祭司|戰士|法師|遊俠|目標|自己/u, 'combatLog 缺少行動者或目標');
    requireCombatLogPart(record.id, record.text, /使用|攻擊|命中|治療|閃避|逃離|道具|支援|淨化/u, 'combatLog 缺少技能或攻擊方式');
    requireCombatLogPart(record.id, record.text, /造成|回復|未造成|移除|成功|失敗|生命值|狀態|傷害|HP|判定/u, 'combatLog 缺少結果');
    if (/造成|回復|移除|成功率|傷害|HP/u.test(record.text)) {
      requireCombatLogPart(record.id, record.text, /\d+/u, 'combatLog 有傷害、治療、狀態或判定結果時必須列實際數值');
    }
  }
}

function buildSystemSuccessAuditRecords(): { id: string; text: string }[] {
  return [
    { id: 'combat/exp', text: '戰鬥結算完成：玩家擊敗史萊姆，獲得經驗值 +10，金幣 +3，背包掉落會另行列出。' },
    { id: 'merchant/buy', text: '你向武器商人買入「鐵劍」x1，支付 120 金幣；物品已放入背包，目前剩餘 380 金幣。' },
    { id: 'quest/complete', text: '任務「初出茅廬」完成，回報後結算經驗值 +50、金幣 +30，下一步請查看任務追蹤。' },
    { id: 'craft/success', text: '製作成功：你在鍛造台完成「鐵劍」x1，消耗 40 金幣與指定材料，物品已加入背包。' },
    { id: 'party/join', text: '你已接受 Leader 的組隊邀請並加入隊伍；目前隊伍人數 2/5，下一步可跟隨隊長或準備戰鬥。' },
  ];
}

function buildCombatLogAuditRecords(): { id: string; text: string }[] {
  return [
    { id: 'combat/skillDamage', text: '玩家使用火球術命中史萊姆，造成 24 點傷害，結果為普通命中。' },
    { id: 'combat/skillMiss', text: '玩家使用火球術攻擊暗影狼，但本次命中判定失敗，造成 0 點傷害且目標生命值不變。' },
    { id: 'combat/heal', text: '祭司使用治癒治療自己，實際回復 18 HP，目標生命值由 32 變為 50。' },
    { id: 'combat/flee', text: '遊俠嘗試逃離戰鬥並成功脫身，逃跑判定成功率 62%，本輪不再承受追擊傷害。' },
    { id: 'combat/item', text: '戰士使用 1 次戰鬥道具行動，行動已排入本輪結算；具體治療、傷害或狀態效果會依道具資料套用。' },
    { id: 'combat/support', text: '祭司使用淨化支援戰士，淨化結果為移除 2 個負面狀態，目標目前可繼續行動。' },
  ];
}

function requireSystemSuccessPart(id: string, text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, 'system.successMessage', 'message', text, 18, reason);
}

function requireCombatLogPart(id: string, text: string, pattern: RegExp, reason: string) {
  if (pattern.test(text)) return;
  addIssue(id, 'combatLog', 'log', text, 22, reason);
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
    || batchKey === 'gatheringHint'
    || batchKey === 'craftingRecipe.description'
    || batchKey === 'skill.tooltip'
    || batchKey === 'skill.upgradePreview'
    || batchKey === 'combatAction'
    || batchKey === 'mapMarker.tooltip'
    || batchKey === 'roomAction.tooltip'
    || batchKey === 'wiki.article.summary'
    || batchKey === 'wiki.table.rowNote'
    || batchKey === 'npc.roleSummary'
    || batchKey.startsWith('merchant.')
    || batchKey === 'partyPvp.message'
    || batchKey === 'tutorialOnboarding.text'
    || batchKey === 'achievementTitle.description'
    || batchKey === 'system.errorMessage'
    || batchKey === 'systemSuccessCombatLog'
    || batchKey === 'imagePrompt.characterNpc'
    || batchKey === 'imagePrompt.itemIcon'
    || batchKey === 'imagePrompt.iconAtlas'
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
    || batchKey === 'equipment.tooltip'
    || batchKey === 'lootTable.summary'
    || batchKey === 'dropSource.note'
    || batchKey === 'gatheringHint'
    || batchKey === 'craftingRecipe.description'
    || batchKey === 'class.summary'
    || batchKey === 'race.summary'
    || batchKey === 'faith.summary'
    || batchKey === 'talent.node.description'
    || batchKey === 'statusEffect.description'
    || batchKey === 'skills'
    || batchKey === 'skill.tooltip'
    || batchKey === 'skill.upgradePreview'
    || batchKey === 'combatAction'
    || batchKey === 'mapMarker.tooltip'
    || batchKey === 'roomAction.tooltip'
    || batchKey === 'wiki.article.summary'
    || batchKey === 'wiki.table.rowNote'
    || batchKey === 'npc.roleSummary'
    || batchKey.startsWith('merchant.')
    || batchKey === 'partyPvp.message'
    || batchKey === 'imagePrompt.characterNpc'
    || batchKey === 'imagePrompt.itemIcon'
    || batchKey === 'imagePrompt.iconAtlas'
    || batchKey === 'instanceEntry.name'
    || batchKey === 'instanceEntry.tooltip'
    || batchKey === 'instanceEntry.description';
}

function checkUnresolvedReferences(records: TextRecord[]) {
  const referencePattern = /\b[a-z][a-z0-9]+_[a-z0-9_]+\b/g;
  for (const record of records) {
    if (record.kind === 'npc.roleSummary') continue;
    if (record.kind === 'imagePrompt.characterNpc' || record.kind === 'imagePrompt.itemIcon' || record.kind === 'imagePrompt.iconAtlas') continue;
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
    `Merchant NPCs checked: ${reportData.counts.merchantNpcs}`,
    `Quests checked: ${reportData.counts.quests}`,
    `Dungeons checked: ${reportData.counts.dungeons}`,
    `Monsters checked: ${reportData.counts.monsters}`,
    `Monster families checked: ${reportData.counts.monsterFamilies}`,
    `Gathering nodes checked: ${reportData.counts.gatheringNodes}`,
    `Materials checked: ${reportData.counts.materials}`,
    `Equipment checked: ${reportData.counts.equipment}`,
    `Affixes checked: ${reportData.counts.affixes}`,
    `Combat action tooltips checked: ${reportData.counts.combatActionTooltips}`,
    `Party/PvP messages checked: ${reportData.counts.partyMessages + reportData.counts.pvpMessages}`,
    `Tutorial steps checked: ${reportData.counts.tutorialSteps}`,
    `Achievement/title descriptions checked: ${reportData.counts.achievements + reportData.counts.titleDescriptions}`,
    `System error messages checked: ${reportData.counts.systemErrorMessages}`,
    `System success/combat logs checked: ${reportData.counts.systemSuccessMessages + reportData.counts.combatLogs}`,
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
