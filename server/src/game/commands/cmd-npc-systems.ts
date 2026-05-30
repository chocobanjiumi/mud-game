// Say, NPC dialogue, and shop command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, sendToSession, getSessionByCharacterId } from '../../ws/handler.js';
import { addInventoryItem, getInventory, removeInventoryItem, saveCharacter } from '../../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import type { Character, DialogueNode, DialogueOption, NpcDef } from '@game/shared';
import { world, questMgr, tutorialMgr } from '../state.js';
import { findNpcByName, getNpcsByRoom } from '../../data/npcs.js';
import { getRoom, ZONES } from '../../data/rooms.js';
import { buildInstanceEntryDefs } from '../../data/world-map2-plan.js';
import { applyShopBuyOriginDiscount } from '../origin-effects.js';
import { formatDialogueOptionLabel } from '../dialogue-option-labels.js';
import { MAIN_QUEST_FLOW } from '../main-quest-flow.js';
import { addRewardItemToInventory } from '../item-instance-rewards.js';
import { recordGoldProduced } from '../economy-stats.js';
import { startNpcDialogueInstanceEntry } from './cmd-group-systems.js';
import { cmdInventory, sendInventoryPayload } from './cmd-inventory-systems.js';
import { activeDialogues, getChar, getInstanceEntryAvailability, sendQuestUpdate } from './cmd-helpers.js';

export function cmdSay(session: WsSession, message: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!message) { sendError(session.sessionId, '用法：say <訊息>'); return; }

  sendToSession(session.sessionId, 'chat', {
    senderId: char.id, senderName: char.name, message, channel: 'room',
  });
}

// 追蹤玩家目前的 NPC 對話狀態

export function mainQuestVirtualNodeId(kind: 'start' | 'active' | 'complete', questId: string): string {
  return `__mainquest_${kind}:${questId}`;
}

export function resolveDialogueNode(npc: NpcDef, nodeId: string): DialogueNode | undefined {
  const virtual = /^__mainquest_(start|active|complete):(.+)$/.exec(nodeId);
  if (!virtual) return npc.dialogue.find(d => d.id === nodeId);

  const [, kind, questId] = virtual;
  const entry = MAIN_QUEST_FLOW.find(flow => flow.questId === questId);
  if (!entry) return undefined;
  if (kind === 'start' && entry.acceptNpcId === npc.id) {
    return {
      id: nodeId,
      text: entry.offerText,
      action: { type: 'quest_start', data: { questId } },
    };
  }
  if (kind === 'complete' && entry.turnInNpcId === npc.id) {
    return {
      id: nodeId,
      text: entry.completeText,
      action: { type: 'quest_complete', data: { questId } },
    };
  }
  if (kind === 'active' && (entry.acceptNpcId === npc.id || entry.turnInNpcId === npc.id)) {
    return {
      id: nodeId,
      text: entry.activeText,
    };
  }
  return undefined;
}

export function buildDialogueOptions(npc: NpcDef, node: DialogueNode, char: Character | null): DialogueOption[] {
  const baseOptions = (node.options ?? []).filter(option => isDialogueOptionVisible(option, char));
  if (!char || npc.dialogue[0]?.id !== node.id) return baseOptions;

  const questOptions: DialogueOption[] = [];
  for (const entry of MAIN_QUEST_FLOW) {
    const status = questMgr.getQuestStatus(char, entry.questId);
    if (status === 'ready' && entry.turnInNpcId === npc.id) {
      questOptions.push({
        text: entry.turnInOptionText,
        nextId: mainQuestVirtualNodeId('complete', entry.questId),
      });
    } else if (status === 'active' && (entry.acceptNpcId === npc.id || entry.turnInNpcId === npc.id)) {
      questOptions.push({
        text: '詢問目前任務進度',
        nextId: mainQuestVirtualNodeId('active', entry.questId),
      });
    } else if (status === 'available' && entry.acceptNpcId === npc.id) {
      questOptions.push({
        text: entry.startOptionText,
        nextId: mainQuestVirtualNodeId('start', entry.questId),
      });
    }
  }

  return [...questOptions, ...baseOptions];
}

export function isDialogueOptionVisible(option: DialogueOption, char: Character | null): boolean {
  const condition = option.condition;
  if (!condition) return true;
  if (!char) return false;
  switch (condition.type as string) {
    case 'level':
      return char.level >= Number(condition.value);
    case 'class':
      return char.classId === String(condition.value);
    case 'gold':
      return char.gold >= Number(condition.value);
    case 'quest':
    case 'questCompleted':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'completed';
    case 'questAvailable':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'available';
    case 'questActive':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'active';
    case 'questReadyToComplete':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'ready';
    case 'item':
      return getInventory(char.id).some(item => item.itemId === String(condition.value) && item.quantity > 0);
    default:
      return true;
  }
}

export function showDialogueNode(session: WsSession, npc: NpcDef, nodeId: string): void {
  const char = getChar(session);
  const node = resolveDialogueNode(npc, nodeId);
  if (!node) {
    sendSystem(session.sessionId, `${npc.name}沉默了。`);
    activeDialogues.delete(session.sessionId);
    return;
  }

  // 執行 action
  if (node.action) {
    if (char) {
      switch (node.action.type) {
        case 'shop':
          sendNpcShopListing(session, char, npc);
          break;
        case 'heal':
          char.hp = char.maxHp;
          char.mp = char.maxMp;
          saveCharacter(char);
          sendSystem(session.sessionId, `${npc.name}為你治療了傷勢。HP 和 MP 已完全恢復！`);
          break;
        case 'quest_start': {
          const questId = node.action.data?.questId as string;
          if (questId) {
            const result = questMgr.startQuest(char.id, questId, char);
            sendSystem(session.sessionId, result.message);
            if (result.success) {
              tutorialMgr.advanceStep(char.id, 'quest');
            }
            sendQuestUpdate(session, result.success ? 'accepted' : 'sync');
          }
          break;
        }
        case 'quest_complete': {
          const questId = node.action.data?.questId as string;
          if (questId) {
            const result = questMgr.completeQuest(char.id, questId, char);
            sendSystem(session.sessionId, result.message);
            if (result.rewards) {
              saveCharacter(char);
            }
            sendQuestUpdate(session, result.success ? 'completed' : 'sync');
          }
          break;
        }
        case 'instance_entry': {
          const entryId = node.action.data?.entryId as string;
          if (entryId && startNpcDialogueInstanceEntry(session, char, npc, entryId)) {
            return;
          }
          break;
        }
      }
    }
  }

  const options = buildDialogueOptions(npc, node, char);
  const optionPayloads = options.map((option, index) => {
    const lock = getDialogueOptionLockReason(npc, option, char);
    const nextNode = resolveDialogueNode(npc, option.nextId);
    const label = formatDialogueOptionLabel(npc, node, option, index, nextNode);
    return {
      index: index + 1,
      text: label,
      command: `talk ${npc.id} ${index + 1}`,
      disabled: Boolean(lock),
      disabledReason: lock,
    };
  });
  let dialogueText = `【${npc.name}】：${node.text}`;
  if (options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      const lock = optionPayloads[i]?.disabledReason;
      dialogueText += `\n  ${i + 1}. ${optionPayloads[i]?.text ?? options[i].text}${lock ? `（鎖定：${lock}）` : ''}`;
    }
    // 記錄對話狀態
    activeDialogues.set(session.sessionId, { npcId: npc.id, nodeId, options });
  } else {
    // 沒有選項，對話結束
    activeDialogues.delete(session.sessionId);
  }
  if (node.action?.type === 'shop' && char) {
    sendInventoryPayload(session, char);
  }
  sendToSession(session.sessionId, 'npc_dialogue' as any, {
    npcId: npc.id,
    npcName: npc.name,
    npcTitle: npc.title,
    npcType: npc.type,
    nodeId: node.id,
    text: node.text,
    options: optionPayloads,
    shopItems: node.action?.type === 'shop' && char ? buildNpcShopItems(char, npc) : undefined,
  });
  sendNarrative(session.sessionId, dialogueText, 'npc');
}

export function getDialogueOptionLockReason(npc: NpcDef, option: DialogueOption, char: Character | null): string | undefined {
  if (!char) return undefined;
  const nextNode = resolveDialogueNode(npc, option.nextId);
  if (nextNode?.action?.type !== 'instance_entry') return undefined;
  const entryId = nextNode.action.data?.entryId as string | undefined;
  if (!entryId) return '此對話選項缺少副本入口資料。下一步：補上 dialogue action 的 entryId。';
  const entry = buildInstanceEntryDefs(ZONES).find(candidate => candidate.id === entryId);
  if (!entry) return `副本入口「${entryId}」不存在。下一步：補上 InstanceEntryDef 後再對話。`;
  if (entry.npcId && entry.npcId !== npc.id) return `此入口綁定 NPC「${entry.npcId}」，不是目前 NPC。下一步：尋找正確 NPC。`;
  if (entry.roomId !== char.roomId) {
    const requiredRoomName = getRoom(entry.roomId)?.name ?? entry.roomId;
    return `需要在「${requiredRoomName}」啟動。下一步：前往指定入口房間後再對話。`;
  }
  const availability = getInstanceEntryAvailability(char, entry);
  return availability.ok ? undefined : availability.message;
}

/** shop <NPC> — 直接開啟商人 NPC 的商店（跳到 shop 對話節點） */
export function cmdShop(session: WsSession, npcName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!npcName) { sendError(session.sessionId, '用法：shop <NPC名稱>'); return; }

  const npc = findNpcByName(npcName.split(/\s+/)[0], char.roomId);
  if (!npc) {
    sendError(session.sessionId, `這裡沒有名為「${npcName}」的 NPC。`);
    return;
  }
  if (npc.type !== 'merchant' || !npc.shopItems?.length) {
    sendError(session.sessionId, `${npc.name}不是商人。`);
    return;
  }

  // 找到 shop 對話節點並直接顯示
  const shopNode = npc.dialogue.find(d => d.action?.type === 'shop');
  if (shopNode) {
    showDialogueNode(session, npc, shopNode.id);
  } else {
    sendNpcShopListing(session, char, npc);
  }
}

export function sendNpcShopListing(
  session: WsSession,
  char: Character,
  npc: NpcDef,
): void {
  const items = buildNpcShopItems(char, npc).map(item => ({
    ...item,
    statsText: item.stats
      ? Object.entries(item.stats)
        .filter(([, value]) => typeof value === 'number' && value !== 0)
        .map(([key, value]) => `${key}+${value}`)
        .join(' ')
      : '',
  }));

  sendSystem(session.sessionId, `${npc.name}展示可購買商品，價格會依角色出身折扣結算；請確認金幣與背包空間後再輸入 buy 指令。`);
  if (items.length === 0) {
    sendSystem(session.sessionId, '  目前沒有可販售商品，請稍後再回到這名商人或尋找其他補給商。');
    return;
  }

  for (const item of items) {
    const detail = [
      `${item.price} 金幣`,
      `Lv.${item.levelReq}`,
      item.type,
      item.statsText,
    ].filter(Boolean).join(' / ');
    sendSystem(session.sessionId, `  ${item.name} — ${detail}`);
  }
  sendSystem(session.sessionId, '輸入 buy <物品名稱> 購買指定商品；輸入 sell <物品名稱> [數量] 出售背包中未裝備且有回收價格的物品。');
}

export function buildNpcShopItems(char: Character, npc: NpcDef): {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: string;
  levelReq: number;
  stats?: Record<string, number>;
  command: string;
}[] {
  return npc.shopItems
    ?.map((itemId) => {
      const def = ITEM_DEFS[itemId];
      if (!def) return null;
      const stats = def.stats
        ? Object.fromEntries(
          Object.entries(def.stats)
            .filter(([, value]) => typeof value === 'number' && value !== 0),
        ) as Record<string, number>
        : undefined;
      return {
        id: itemId,
        name: def.name,
        description: def.description,
        price: applyShopBuyOriginDiscount(char, def.buyPrice),
        type: String(def.type),
        rarity: def.rarity ?? 'common',
        levelReq: def.levelReq,
        stats: stats && Object.keys(stats).length > 0 ? stats : undefined,
        command: `buy ${def.name}`,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null) ?? [];
}

/** buy <物品名稱> — 從當前房間的商人 NPC 購買物品 */
export function cmdBuy(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '你正在購買商人商品，但沒有輸入物品名稱；下一步請使用 buy <物品名稱>。'); return; }

  // 找到房間中的商人 NPC
  const npcsInRoom = getNpcsByRoom(char.roomId);
  const merchant = npcsInRoom.find(n => n.type === 'merchant' && n.shopItems?.length);
  if (!merchant) {
    sendError(session.sessionId, '你正在購買商品，但目前房間沒有可交易商人；下一步請移動到有商人的房間再嘗試。');
    return;
  }

  // 搜尋物品（支援名稱和 ID）
  const query = itemName.toLowerCase();
  const matchId = merchant.shopItems!.find(id => {
    const def = ITEM_DEFS[id];
    return id === itemName || def?.name === itemName || def?.name.includes(itemName) || id.includes(query);
  });
  if (!matchId) {
    sendError(session.sessionId, `你想向${merchant.name}購買「${itemName}」，但這名商人的商品清單沒有該物品；下一步請查看購買頁現有商品。`);
    return;
  }

  const def = ITEM_DEFS[matchId];
  if (!def) { sendError(session.sessionId, `你正在購買「${matchId}」，但物品資料無法讀取；下一步請改買其他商品或回報資料異常。`); return; }

  const price = applyShopBuyOriginDiscount(char, def.buyPrice);
  if (char.gold < price) {
    sendError(session.sessionId, `你想向${merchant.name}購買「${def.name}」x1，但需要 ${price} 金幣，目前只有 ${char.gold} 金幣；下一步請先出售物品或取得更多金幣。`);
    return;
  }

  char.gold -= price;
  saveCharacter(char);
  addRewardItemToInventory(char, matchId, 1, ['shop']);
  sendSystem(session.sessionId, `你向${merchant.name}買入「${def.name}」x1，支付 ${price} 金幣；物品已放入背包，目前剩餘 ${char.gold} 金幣。`);
  cmdInventory(session);
}

/** sell <物品名稱|instanceId> [數量] — 向當前房間商人出售背包物品 */
export function cmdSell(session: WsSession, input: string): void {
  const char = getChar(session);
  if (!char) return;
  const { itemName, quantity } = parseItemNameAndQuantity(input);
  if (!itemName) { sendError(session.sessionId, '你正在出售背包物品，但沒有輸入物品名稱或實例 id；下一步請使用 sell <物品名稱|instanceId> [數量]。'); return; }

  const merchant = getNpcsByRoom(char.roomId).find(n => n.type === 'merchant');
  if (!merchant) {
    sendError(session.sessionId, '你正在出售背包物品，但目前房間沒有商人收購；下一步請移動到商人所在房間再開啟出售頁。');
    return;
  }

  const query = itemName.toLowerCase();
  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    if (item.equipped) return false;
    const def = ITEM_DEFS[item.itemId];
    return Boolean(def)
      && (
        item.itemInstanceId === itemName
        || item.itemId === itemName
        || item.itemId.toLowerCase().includes(query)
        || def?.name === itemName
        || def?.name.includes(itemName)
      );
  });
  if (!match) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${itemName}」，但背包中沒有未裝備且可出售的對應物品，金幣不會結算；下一步請檢查出售頁清單。`);
    return;
  }

  const def = ITEM_DEFS[match.itemId];
  if (!def || def.sellPrice <= 0) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${def?.name ?? itemName}」，但該物品沒有金幣回收價格；下一步請保留、使用或改選其他可出售物品。`);
    return;
  }
  if (match.itemInstanceId && quantity !== 1) {
    sendError(session.sessionId, `你想出售裝備實例「${def.name}」x${quantity}，但裝備實例一次只能出售 1 件；下一步請改用 sell ${match.itemInstanceId}。`);
    return;
  }
  if (quantity <= 0 || quantity > match.quantity) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${def.name}」x${quantity}，但背包目前只有 ${match.quantity} 個；下一步請降低數量或改選其他物品。`);
    return;
  }

  const removed = removeInventoryItem(char.id, match.itemId, quantity, match.itemInstanceId);
  if (!removed) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${def.name}」x${quantity}，但背包內容在結算前已改變；下一步請重新開啟出售頁確認數量。`);
    return;
  }

  const earned = def.sellPrice * quantity;
  char.gold += earned;
  saveCharacter(char);
  recordGoldProduced(earned);
  sendSystem(session.sessionId, `你向${merchant.name}出售了「${def.name}」x${quantity}，獲得 ${earned} 金幣。（目前：${char.gold}）`);
  cmdInventory(session);
}

export function parseItemNameAndQuantity(input: string): { itemName: string; quantity: number } {
  const trimmed = input.trim();
  if (!trimmed) return { itemName: '', quantity: 1 };
  const parts = trimmed.split(/\s+/);
  const last = parts[parts.length - 1];
  const quantity = Number.parseInt(last, 10);
  if (parts.length > 1 && Number.isInteger(quantity) && quantity > 0 && String(quantity) === last) {
    return { itemName: parts.slice(0, -1).join(' '), quantity };
  }
  return { itemName: trimmed, quantity: 1 };
}

export function cmdTalk(session: WsSession, npcName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!npcName) { sendError(session.sessionId, '用法：talk <NPC名稱> 或 talk <NPC> <選項編號>'); return; }

  // 解析 "talk elder 1" 格式
  const parts = npcName.split(/\s+/);
  const name = parts[0];
  const choiceNum = parts.length > 1 ? parseInt(parts[parts.length - 1], 10) : NaN;

  // 如果有數字且有進行中的對話，嘗試選擇選項
  if (!isNaN(choiceNum)) {
    const active = activeDialogues.get(session.sessionId);
    if (active) {
      const npc = findNpcByName(name, char.roomId);
      if (npc && npc.id === active.npcId) {
        if (choiceNum >= 1 && choiceNum <= active.options.length) {
          const chosen = active.options[choiceNum - 1];
          const lock = getDialogueOptionLockReason(npc, chosen, char);
          if (lock) {
            const activeNode = resolveDialogueNode(npc, active.nodeId);
            const label = activeNode
              ? formatDialogueOptionLabel(npc, activeNode, chosen, choiceNum - 1, resolveDialogueNode(npc, chosen.nextId))
              : chosen.text;
            sendError(session.sessionId, `「${label}」目前無法選擇：${lock}`);
            return;
          }
          showDialogueNode(session, npc, chosen.nextId);
          questMgr.updateProgress(char.id, 'talk', npc.id);
          return;
        } else {
          sendError(session.sessionId, `請輸入 1-${active.options.length} 的選項。`);
          return;
        }
      }
    }
  }

  // 在當前房間中搜尋 NPC
  const npc = findNpcByName(name, char.roomId);
  if (!npc) {
    sendSystem(session.sessionId, `這裡沒有名為「${name}」的 NPC。`);
    return;
  }

  // 顯示 NPC 的第一段對話
  const greeting = npc.dialogue?.[0];
  if (greeting) {
    showDialogueNode(session, npc, greeting.id);
  } else {
    sendSystem(session.sessionId, `${npc.name}向你點了點頭，但沒有說話。`);
  }

  // 觸發任務進度（交談）
  questMgr.updateProgress(char.id, 'talk', npc.id);

  // 教學系統：對話鉤子
  tutorialMgr.advanceStep(char.id, 'talk');
}
