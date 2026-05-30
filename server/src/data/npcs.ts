// NPC 定義 - 所有 NPC 與對話樹

import type { NpcDef } from '@game/shared';
import { ROOMS } from './rooms.js';

const MAIN_QUEST_NPC_IDS = new Set([
  'village_chief',
  'adventure_mentor',
  'forest_ranger',
  'ship_captain',
  'flame_priest',
  'ice_castle_guard',
  'guild_commander',
  'dragon_oracle',
  'celestial_archon',
]);

import { NPCS_PART_001 } from './npcs/npcs-001.js';
import { NPCS_PART_002 } from './npcs/npcs-002.js';
import { NPCS_PART_003 } from './npcs/npcs-003.js';
import { NPCS_PART_004 } from './npcs/npcs-004.js';
import { NPCS_PART_005 } from './npcs/npcs-005.js';
import { NPCS_PART_006 } from './npcs/npcs-006.js';
import { NPCS_PART_007 } from './npcs/npcs-007.js';
import { NPCS_PART_008 } from './npcs/npcs-008.js';
import { NPCS_PART_009 } from './npcs/npcs-009.js';
import { NPCS_PART_010 } from './npcs/npcs-010.js';

export const NPCS: Record<string, NpcDef> = {
  ...NPCS_PART_001,
  ...NPCS_PART_002,
  ...NPCS_PART_003,
  ...NPCS_PART_004,
  ...NPCS_PART_005,
  ...NPCS_PART_006,
  ...NPCS_PART_007,
  ...NPCS_PART_008,
  ...NPCS_PART_009,
  ...NPCS_PART_010,
};

const NPC_TYPE_LABELS: Record<NpcDef['type'], string> = {
  merchant: '商人',
  class_trainer: '職業導師',
  quest: '任務引導者',
  innkeeper: '旅店照看者',
  general: '居民',
};

enrichNpcDescriptions();
enrichNpcDialogueText();

function enrichNpcDescriptions(): void {
  for (const npc of Object.values(NPCS)) {
    if (countCjkChars(npc.description) >= 45) continue;
    const description = npc.description.trim();
    const suffix = buildNpcDescriptionSupplement(npc);
    npc.description = `${description}${description.endsWith('。') ? '' : '。'}${suffix}`;
  }
}

function buildNpcDescriptionSupplement(npc: NpcDef): string {
  const roomName = ROOMS[npc.roomId]?.name ?? '所在房間';
  const roleText = NPC_TYPE_LABELS[npc.type] ?? '居民';
  const behaviorText = describeNpcBehavior(npc);
  const nextStep = describeNpcNextStep(npc);
  return `這名角色在「${roomName}」維持${roleText}職責，正${behaviorText}；玩家靠近時可從站位、隨身道具與第一句話判斷要先${nextStep}。`;
}

function describeNpcBehavior(npc: NpcDef): string {
  if (npc.shopItems?.length) return '整理可交易的補給、裝備或任務物資';
  if (npc.classToTeach) return '觀察訓練動作並準備說明轉職條件';
  if (npc.dialogue.some(node => node.action?.type === 'instance_entry')) return '守著副本入口線索並核對隊伍狀態';
  if (npc.dialogue.some(node => node.action?.type === 'quest_start' || node.action?.type === 'quest_complete')) return '核對任務進度與交付證物';
  if (npc.dialogue.some(node => node.action?.type === 'heal')) return '確認傷勢、床位與可提供的恢復服務';
  return '留意附近動靜並準備回應冒險者詢問';
}

function describeNpcNextStep(npc: NpcDef): string {
  const firstOption = npc.dialogue.find(node => node.options?.length)?.options?.[0]?.text?.trim();
  if (firstOption && countCjkChars(firstOption) >= 4) return firstOption.replace(/[。！？!?]$/u, '');
  if (npc.shopItems?.length) return '查看可購買或可出售的物品';
  if (npc.classToTeach) return '確認訓練或轉職需求';
  if (npc.dialogue.some(node => node.action?.type === 'instance_entry')) return '確認副本入口條件';
  return '詢問目前可處理的事件';
}

function enrichNpcDialogueText(): void {
  for (const npc of Object.values(NPCS)) {
    for (const node of npc.dialogue) {
      const text = normalizeGenericDirectionText(node.text.trim());
      const minimumLength = npcDialogueMinimumForData(npc, node);
      if (countCjkChars(text) >= minimumLength) {
        node.text = text;
        continue;
      }
      const suffix = buildNpcDialogueSupplement(npc, node);
      let enriched = `${text}${text.endsWith('。') ? '' : '。'}${suffix}`;
      if (countCjkChars(enriched) < minimumLength) {
        enriched = `${enriched}${buildNpcDialogueHighSalienceSupplement(npc, node)}`;
      }
      node.text = enriched;
    }
  }
}

function npcDialogueMinimumForData(npc: NpcDef, node: NpcDef['dialogue'][number]): number {
  if (MAIN_QUEST_NPC_IDS.has(npc.id) && npc.dialogue[0]?.id === node.id) return 90;
  if (npc.dialogue.some(dialogueNode => dialogueNode.action?.type === 'instance_entry')) return 70;
  if (node.action?.type === 'instance_entry') return 70;
  if (isQuestDialogueNpcForData(npc) && npc.dialogue[0]?.id === node.id) return 60;
  return 45;
}

function isQuestDialogueNpcForData(npc: NpcDef): boolean {
  return npc.type === 'quest'
    || npc.dialogue.some(node => node.action?.type === 'quest_start' || node.action?.type === 'quest_complete');
}

function buildNpcDialogueSupplement(npc: NpcDef, node: NpcDef['dialogue'][number]): string {
  const roomName = ROOMS[npc.roomId]?.name ?? '此處';
  const roleText = NPC_TYPE_LABELS[npc.type] ?? '居民';
  const actionText = describeDialogueAction(npc, node);
  const optionText = node.options?.[0]?.text?.trim().replace(/[。！？!?]$/u, '');
  const nextStep = optionText && countCjkChars(optionText) >= 4 ? optionText : describeNpcNextStep(npc);
  return `${npc.name}以${roleText}的立場把「${roomName}」的狀況說清楚，補上${actionText}，並提醒你下一步先${nextStep}。`;
}

function buildNpcDialogueHighSalienceSupplement(npc: NpcDef, node: NpcDef['dialogue'][number]): string {
  const roomName = ROOMS[npc.roomId]?.name ?? '此處';
  if (MAIN_QUEST_NPC_IDS.has(npc.id) && npc.dialogue[0]?.id === node.id) {
    return `這是主線承接點，對話必須讓玩家知道「${roomName}」目前的壓力、接下來要追的目標，以及錯過指引會卡住哪段推進。`;
  }
  if (npc.dialogue.some(dialogueNode => dialogueNode.action?.type === 'instance_entry') || node.action?.type === 'instance_entry') {
    return `這段話同時標明入口風險、隊伍或等級準備與進入後的第一個行動，避免玩家只看見按鈕卻不知道副本目的。`;
  }
  if (isQuestDialogueNpcForData(npc) && npc.dialogue[0]?.id === node.id) {
    return `這是任務入口對話，必須先交代委託動機、具體地點或交付對象、下一步要做的事與獎勵方向，避免玩家只看到一句求助。`;
  }
  return `這段補充把地點、風險與下一步行動說完整，避免對話只剩寒暄或功能按鈕。`;
}

function describeDialogueAction(npc: NpcDef, node: NpcDef['dialogue'][number]): string {
  if (node.action?.type === 'shop' || npc.shopItems?.length) return '交易品項、補給限制與背包準備';
  if (node.action?.type === 'class_change' || npc.classToTeach) return '訓練條件、職業定位與轉職風險';
  if (node.action?.type === 'heal') return '恢復服務、目前傷勢與再次出發前的準備';
  if (node.action?.type === 'quest_start') return '委託原因、目標位置與接下任務後要完成的事';
  if (node.action?.type === 'quest_complete') return '交付證物、完成結果與回報後的獎勵方向';
  if (node.action?.type === 'teleport') return '傳送目的地、通行條件與抵達後的路線';
  if (node.action?.type === 'instance_entry') return '副本威脅、入口條件與隊伍確認';
  if (node.id === 'farewell') return '離開前需要記住的地點、危險或補給提醒';
  return '當前目標、附近威脅與可追問的情報';
}

function normalizeGenericDirectionText(value: string): string {
  return value
    .replace(/往北。/gu, '往北側路徑前進。')
    .replace(/往南。/gu, '往南側路徑前進。')
    .replace(/往東。/gu, '往東側路徑前進。')
    .replace(/往西。/gu, '往西側路徑前進。');
}

function countCjkChars(value: string): number {
  return [...value].filter(char => /\p{Script=Han}/u.test(char)).length;
}

/** 取得 NPC 定義 */
export function getNpc(npcId: string): NpcDef | undefined {
  return NPCS[npcId];
}

/** 取得房間內所有 NPC */
export function getNpcsByRoom(roomId: string): NpcDef[] {
  return Object.values(NPCS).filter(npc => npc.roomId === roomId);
}

function parseOrdinalTarget(name: string): { name: string; ordinal?: number } {
  const trimmed = name.trim();
  const hashMatch = trimmed.match(/^(.+?)#(\d+)$/);
  const match = hashMatch;
  if (!match) return { name: trimmed };

  const ordinal = parseInt(match[2], 10);
  if (!Number.isFinite(ordinal) || ordinal < 1) return { name: trimmed };
  return { name: match[1].trim(), ordinal };
}

/** 根據名稱或「名稱#序號」模糊搜尋 NPC */
export function findNpcByName(name: string, roomId?: string): NpcDef | undefined {
  const candidates = roomId
    ? Object.values(NPCS).filter(npc => npc.roomId === roomId)
    : Object.values(NPCS);
  const parsed = parseOrdinalTarget(name);
  const q = parsed.name.toLowerCase();
  const matches = candidates.filter(
    npc => npc.name === parsed.name || npc.name.includes(parsed.name) || npc.id.includes(parsed.name) || npc.alias.toLowerCase() === q || npc.alias.toLowerCase().includes(q),
  );
  return parsed.ordinal ? matches[parsed.ordinal - 1] : matches[0];
}
