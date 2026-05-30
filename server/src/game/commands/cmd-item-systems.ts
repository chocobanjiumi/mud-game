// Item upgrade, crafting, auction, and fishing command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendSystem, sendError } from '../../ws/handler.js';
import { getInventory } from '../../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import { CRAFTING_CATEGORIES, type CraftingCategory, type CraftingOptions } from '../crafting.js';
import type { EquipSlot, SkillTag } from '@game/shared';
import { auctionMgr, classQuest2Mgr, craftingMgr, fishingMgr, questMgr, isInCombat } from '../state.js';
import { upgradeItem, getUpgradeInfo } from '../upgrade.js';
import { disassembleEquipment, lockItemAffix, reforgeItemQuality, rerollItemAffix } from '../item-reforge.js';
import { getChar } from './cmd-helpers.js';

// ─── 強化系統 ───

export function cmdUpgrade(session: WsSession, argStr: string): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法強化裝備！');
    return;
  }

  // 解析目標欄位
  const slotArg = argStr.trim().toLowerCase();
  let slot: EquipSlot = 'weapon';
  if (slotArg === 'armor' || slotArg === 'body' || slotArg === '身體' || slotArg === '鎧甲') {
    slot = 'body';
  } else if (slotArg === 'head' || slotArg === '頭部') {
    slot = 'head';
  } else if (slotArg === 'hands' || slotArg === '手部') {
    slot = 'hands';
  } else if (slotArg === 'feet' || slotArg === '腳部') {
    slot = 'feet';
  } else if (slotArg === 'accessory' || slotArg === '飾品') {
    slot = 'accessory';
  } else if (slotArg === 'info' || slotArg === '資訊') {
    // 顯示強化資訊
    const info = getUpgradeInfo(char.id, 'weapon');
    sendSystem(session.sessionId, info);
    return;
  }

  const result = upgradeItem(char.id, slot);
  if (result.success) {
    sendSystem(session.sessionId, result.message);
    // 二轉任務：武器強化鉤子
    if (slot === 'weapon' && result.newLevel) {
      classQuest2Mgr.onWeaponEnhanced(char.id, result.newLevel);
    }
  } else {
    sendError(session.sessionId, result.message);
  }
}

export function cmdReroll(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法重骰詞綴！');
    return;
  }

  const sub = args[0]?.toLowerCase();
  if (sub !== 'affix') {
    sendError(session.sessionId, '用法：reroll affix <item_instance_id> <詞綴序號>');
    return;
  }

  const itemInstanceId = args[1];
  const affixNumber = parseInt(args[2] ?? '1', 10);
  if (!itemInstanceId) {
    sendError(session.sessionId, '用法：reroll affix <item_instance_id> <詞綴序號>');
    return;
  }

  const result = rerollItemAffix(char.id, itemInstanceId, affixNumber);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

export function cmdLock(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法鎖定詞綴！');
    return;
  }

  const sub = args[0]?.toLowerCase();
  if (sub !== 'affix') {
    sendError(session.sessionId, '用法：lock affix <item_instance_id> <詞綴序號>');
    return;
  }

  const itemInstanceId = args[1];
  const affixNumber = parseInt(args[2] ?? '1', 10);
  if (!itemInstanceId) {
    sendError(session.sessionId, '用法：lock affix <item_instance_id> <詞綴序號>');
    return;
  }

  const result = lockItemAffix(char.id, itemInstanceId, affixNumber);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

export function cmdReforge(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法重鑄裝備！');
    return;
  }

  const sub = args[0]?.toLowerCase();
  if (sub !== 'quality') {
    sendError(session.sessionId, '用法：reforge quality <item_instance_id>');
    return;
  }

  const itemInstanceId = args[1];
  if (!itemInstanceId) {
    sendError(session.sessionId, '用法：reforge quality <item_instance_id>');
    return;
  }

  const result = reforgeItemQuality(char.id, itemInstanceId);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

export function cmdDisassemble(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法分解裝備！');
    return;
  }

  const itemKey = args[0];
  if (!itemKey) {
    sendError(session.sessionId, '用法：disassemble <item_id|item_instance_id>');
    return;
  }

  const result = disassembleEquipment(char.id, itemKey);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

// ─── 製作系統 ───

export function cmdCraft(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法製作！');
    return;
  }

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'list': {
      const category = resolveCraftingCategory(args[1]);
      if (category) {
        sendSystem(session.sessionId, craftingMgr.formatRecipeList(category, char.id));
      } else {
        sendSystem(session.sessionId,
          '製作類別：\n' +
          '  craft list forge    — 鍛造配方\n' +
          '  craft list tailoring — 裁縫配方\n' +
          '  craft list leather   — 皮革配方\n' +
          '  craft list jewel     — 珠寶配方\n' +
          '  craft list alchemy  — 煉金配方\n' +
          '  craft list enchant  — 附魔配方\n' +
          '  craft list cooking  — 烹飪配方',
        );
      }
      break;
    }
    case 'forge': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft forge <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, 'forge');
      }
      break;
    }
    case 'alchemy': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft alchemy <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, 'alchemy');
        classQuest2Mgr.onLifeSkillLevel(char.id, 'alchemy', craftingMgr.getCraftingLevel(char.id, 'alchemy').level);
      }
      break;
    }
    case 'cook': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft cook <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, 'cooking');
        classQuest2Mgr.onLifeSkillLevel(char.id, 'cooking', craftingMgr.getCraftingLevel(char.id, 'cooking').level);
      }
      break;
    }
    case 'tailoring': case 'tailor': case '裁縫':
    case 'leatherworking': case 'leather': case '皮革':
    case 'jewelcrafting': case 'jewel': case 'jewelry': case '珠寶':
    case 'enchanting': case 'enchant': case '附魔': {
      const category = resolveCraftingCategory(sub);
      const recipeId = args[1];
      if (!category || !recipeId) { sendError(session.sessionId, '用法：craft <類別> <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, category);
      }
      break;
    }
    case 'info': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft info <配方ID>'); return; }
      sendSystem(session.sessionId, craftingMgr.formatRecipeInfo(recipeId, char.id));
      break;
    }
    case 'level': case 'levels': {
      sendSystem(session.sessionId, craftingMgr.formatCraftingLevels(char.id));
      break;
    }
    default: {
      if (sub) {
        const recipeId = args[0];
        const craftOptions = parseCraftOptions(args.slice(1));
        const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
        if (result.success) {
          sendSystem(session.sessionId, result.message);
          if (result.crafted) {
            const recipe = craftingMgr.getRecipeInfo(recipeId);
            questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
            classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, recipe?.category ?? 'forge');
            if (recipe?.category === 'alchemy') {
              classQuest2Mgr.onLifeSkillLevel(char.id, 'alchemy', craftingMgr.getCraftingLevel(char.id, 'alchemy').level);
            } else if (recipe?.category === 'cooking') {
              classQuest2Mgr.onLifeSkillLevel(char.id, 'cooking', craftingMgr.getCraftingLevel(char.id, 'cooking').level);
            }
          }
          break;
        }
      }
      sendSystem(session.sessionId,
        '製作系統指令：\n' +
        '  craft list [forge|tailoring|leather|jewel|alchemy|enchant|cooking] — 查看配方\n' +
        '  craft <配方ID> [slot:<slot>] [affix:<tag>] — 直接製作配方\n' +
        '  craft forge <配方ID>    — 鍛造裝備\n' +
        '  craft tailoring <配方ID> — 裁縫裝備\n' +
        '  craft leather <配方ID>  — 皮革裝備\n' +
        '  craft jewel <配方ID>    — 珠寶飾品\n' +
        '  craft alchemy <配方ID>  — 煉金製藥\n' +
        '  craft enchant <配方ID>  — 附魔媒材\n' +
        '  craft cook <配方ID>     — 烹飪料理\n' +
        '  craft info <配方ID>     — 查看配方詳情\n' +
        '  craft level             — 查看製作等級',
      );
    }
  }
}

export function parseCraftOptions(args: string[]): CraftingOptions & { slot?: EquipSlot } {
  const token = args.find(arg => arg.toLowerCase().startsWith('slot:'));
  const affixToken = args.find(arg => arg.toLowerCase().startsWith('affix:'));
  return {
    slot: token?.slice('slot:'.length) as EquipSlot | undefined,
    preferredAffixTag: affixToken?.slice('affix:'.length) as SkillTag | undefined,
  };
}

export function resolveCraftingCategory(input?: string): CraftingCategory | undefined {
  const normalized = input?.toLowerCase();
  if (!normalized) return undefined;
  const aliases: Record<string, CraftingCategory> = {
    forge: 'forge',
    '鍛造': 'forge',
    tailoring: 'tailoring',
    tailor: 'tailoring',
    '裁縫': 'tailoring',
    leatherworking: 'leatherworking',
    leather: 'leatherworking',
    '皮革': 'leatherworking',
    jewelcrafting: 'jewelcrafting',
    jewel: 'jewelcrafting',
    jewelry: 'jewelcrafting',
    '珠寶': 'jewelcrafting',
    alchemy: 'alchemy',
    '煉金': 'alchemy',
    enchanting: 'enchanting',
    enchant: 'enchanting',
    '附魔': 'enchanting',
    cooking: 'cooking',
    cook: 'cooking',
    '烹飪': 'cooking',
  };
  return aliases[normalized] ?? CRAFTING_CATEGORIES.find(category => category === normalized);
}

// ─── 拍賣系統 ───

export function cmdAuction(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法使用拍賣系統！');
    return;
  }

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'sell': {
      // auction sell <itemName> <minPrice> [buyoutPrice] [hours]
      const itemName = args[1];
      if (!itemName) { sendError(session.sessionId, '用法：auction sell <物品ID> <最低價> [直購價] [時長]'); return; }

      // Find item by ID or name
      let itemId = itemName;
      let itemInstanceId: string | undefined;
      if (!ITEM_DEFS[itemId]) {
        const found = Object.values(ITEM_DEFS).find(d => d.name === itemName);
        if (found) itemId = found.id;
        else {
          const instance = getInventory(char.id).find(i => i.itemInstanceId === itemName && !i.equipped);
          if (!instance) { sendError(session.sessionId, `找不到物品：${itemName}`); return; }
          itemId = instance.itemId;
          itemInstanceId = instance.itemInstanceId;
        }
      }

      const minPrice = parseInt(args[2]);
      if (!minPrice || minPrice < 1) { sendError(session.sessionId, '請輸入有效的最低出價。'); return; }

      const buyoutPrice = args[3] ? parseInt(args[3]) : undefined;
      const hours = args[4] ? parseInt(args[4]) : 24;

      const result = auctionMgr.listItem(char.id, itemId, 1, minPrice, buyoutPrice, hours, itemInstanceId);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'search': {
      const keyword = args.slice(1).join(' ') || undefined;
      sendSystem(session.sessionId, auctionMgr.searchAuctions(keyword));
      break;
    }
    case 'bid': {
      const auctionId = args[1];
      const amount = parseInt(args[2]);
      if (!auctionId || !amount) { sendError(session.sessionId, '用法：auction bid <拍賣ID> <金額>'); return; }
      const result = auctionMgr.placeBid(auctionId, char.id, amount);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'buyout': {
      const auctionId = args[1];
      if (!auctionId) { sendError(session.sessionId, '用法：auction buyout <拍賣ID>'); return; }
      const result = auctionMgr.buyout(auctionId, char.id);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'my': {
      sendSystem(session.sessionId, auctionMgr.getMyAuctions(char.id));
      break;
    }
    case 'cancel': {
      const auctionId = args[1];
      if (!auctionId) { sendError(session.sessionId, '用法：auction cancel <拍賣ID>'); return; }
      const result = auctionMgr.cancelAuction(auctionId, char.id);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'info': {
      const auctionId = args[1];
      if (!auctionId) { sendError(session.sessionId, '用法：auction info <拍賣ID>'); return; }
      sendSystem(session.sessionId, auctionMgr.getAuctionInfo(auctionId));
      break;
    }
    default:
      sendSystem(session.sessionId,
        '拍賣系統指令：\n' +
        '  auction sell <物品ID> <最低價> [直購價] [時長]  — 上架物品\n' +
        '  auction search [關鍵字]                         — 搜尋拍賣品\n' +
        '  auction bid <拍賣ID> <金額>                     — 出價競標\n' +
        '  auction buyout <拍賣ID>                         — 直接購買\n' +
        '  auction my                                       — 我的拍賣/出價\n' +
        '  auction cancel <拍賣ID>                         — 取消拍賣\n' +
        '  auction info <拍賣ID>                           — 查看詳情',
      );
  }
}

// ─── 釣魚系統 ───

export function cmdFish(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法釣魚！');
    return;
  }

  const sub = args[0]?.toLowerCase();

  if (sub === 'level' || sub === 'info' || sub === 'stats') {
    sendSystem(session.sessionId, fishingMgr.formatFishingLevel(char.id));
    return;
  }

  // Default: fish
  const result = fishingMgr.fish(char.id, char.roomId);
  if (result.ok) {
    sendSystem(session.sessionId, result.message);
    // 二轉任務：釣魚等級鉤子
    classQuest2Mgr.onLifeSkillLevel(char.id, 'fishing', fishingMgr.getFishingLevel(char.id).level);
  } else {
    sendError(session.sessionId, result.message);
  }
}
