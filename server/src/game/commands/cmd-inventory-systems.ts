// Inventory, equipment, item use, pickup, and loot command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, sendToSession, getSessionByCharacterId, getAllSessions, broadcast, broadcastToRoom } from '../../ws/handler.js';
import { addInventoryItem, getCharacterById, getEquippedItems, getInventory, getLearnedSkills, removeInventoryItem, saveCharacter, setEquipped } from '../../db/queries.js';
import { ITEM_DEFS, SKILL_DEFS, WEAPON_TYPE_DEFS, isTwoHandWeapon, resolveEquipSlotForItem } from '@game/shared';
import type { Character, CombatLoot, MonsterDef, StatusEffectType } from '@game/shared';
import { combat, world, partyMgr, questMgr, tutorialMgr, classQuest2Mgr, achievementMgr, petMgr, isInCombat, getPlayerCombatId } from '../state.js';
import { getRoom } from '../../data/rooms.js';
import { applyHpRecovery, applyResourceRecovery } from '../recovery.js';
import { addRewardItemToInventory, formatRewardEntry } from '../item-instance-rewards.js';
import { applyInventoryHandlingBonus } from '../passive-skill-effects.js';
import { getModifiedSkillRuntime } from '../equipment-affixes.js';
import { INVENTORY_SLOT_CAPACITY } from '../inventory-capacity.js';
import { recordGoldProduced } from '../economy-stats.js';
import { getLootAnnouncementScope } from '../loot.js';
import { cmdLook } from './cmd-world-systems.js';
import { cmdStatus } from './cmd-world-systems.js';
import { parseInstanceEntryTarget, tryUseInstanceEntryItem } from './cmd-group-systems.js';
import {
  broadcastRoomState, corpseMgr, findGroundItem, getActiveQuestDropIds, getAvailableGroundItems,
  getChar, markGroundItemPicked, scheduleCorpseExpiry, sendCharacterStatus,
} from './cmd-helpers.js';

export function addLootItemToInventory(char: Character, itemOrId: string | CombatLoot['items'][number], quantity?: number): string[] {
  const item = typeof itemOrId === 'string' ? { itemId: itemOrId, quantity: quantity ?? 1 } : itemOrId;
  if (item.itemInstanceId && item.quality) {
    addInventoryItem(char.id, item.itemId, 1, false, {
      itemInstanceId: item.itemInstanceId,
      baseItemId: item.itemId,
      quality: item.quality,
      itemLevel: item.itemLevel,
      droppedBy: item.droppedBy,
      droppedInZone: item.droppedInZone,
      sourceTags: item.sourceTags,
      affixes: item.affixes,
      fixedEffects: item.fixedEffects,
    });
    const def = ITEM_DEFS[item.itemId];
    const qualityText = item.quality !== 'normal' ? `（${item.quality}）` : '';
    const levelText = item.itemLevel ? ` Lv.${item.itemLevel}` : '';
    const affixText = item.affixes?.length ? `［${item.affixes.map(affix => affix.name).join('、')}］` : '';
    return [`${def?.name ?? item.itemId}${qualityText}${levelText}${affixText}`];
  }
  return addRewardItemToInventory(char, item.itemId, item.quantity, ['monster_drop']).map(formatRewardEntry);
}

export function cmdInventory(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  sendInventoryPayload(session, char);
}

export function sendInventoryPayload(session: WsSession, char: Character): void {
  const items = getInventory(char.id);
  const itemDetails = items.map((inv) => {
    const def = ITEM_DEFS[inv.itemId];
    return {
      ...inv,
      name: def?.name ?? inv.itemId,
      type: def?.type ?? 'unknown',
    };
  });

  sendToSession(session.sessionId, 'inventory', {
    items: itemDetails,
    equipment: char.equipment,
    capacity: INVENTORY_SLOT_CAPACITY,
    gold: char.gold,
  });
}

export function cmdSkills(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const learned = getLearnedSkills(char.id);
  sendSystem(session.sessionId, '── 技能列表 ──');
  const originPassives = learned.filter(ls => ls.skillId.startsWith('race_') || ls.skillId.startsWith('faith_'));
  const classSkills = learned.filter(ls => !ls.skillId.startsWith('race_') && !ls.skillId.startsWith('faith_'));
  if (originPassives.length > 0) {
    sendSystem(session.sessionId, '天賦 / 種族 / 信仰');
    for (const ls of originPassives) {
      const def = SKILL_DEFS[ls.skillId];
      if (!def) continue;
      sendSystem(session.sessionId, `  ${def.name}（${def.englishName}）[被動] - ${def.description}`);
    }
  }
  if (classSkills.length > 0) {
    sendSystem(session.sessionId, '職業 / 戰鬥');
  }
  for (const ls of classSkills) {
    const def = SKILL_DEFS[ls.skillId];
    if (!def) continue;
    const runtime = def.type === 'active' ? getModifiedSkillRuntime(char.id, def) : null;
    const typeStr = def.type === 'passive' ? '[被動]' : `[主動 消耗:${runtime?.resourceCost ?? def.resourceCost} CD:${runtime?.cooldown ?? def.cooldown}]`;
    sendSystem(session.sessionId, `  ${def.name}（${def.englishName}）${typeStr} - ${def.description}`);
  }
}

function getItemResolvedEquipSlot(itemId: string): ReturnType<typeof resolveEquipSlotForItem> {
  return resolveEquipSlotForItem(ITEM_DEFS[itemId]);
}

export function getOffhandSlotForMainHand(slot: string): 'meleeOffHand' | 'rangedOffHand' | null {
  if (slot === 'meleeMainHand') return 'meleeOffHand';
  if (slot === 'rangedMainHand') return 'rangedOffHand';
  return null;
}

export function getMainHandSlotForOffhand(slot: string): 'meleeMainHand' | 'rangedMainHand' | null {
  if (slot === 'meleeOffHand') return 'meleeMainHand';
  if (slot === 'rangedOffHand') return 'rangedMainHand';
  return null;
}

export function cmdEquip(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：equip <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName || item.itemInstanceId === itemName);
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  if (!def?.equipSlot) { sendError(session.sessionId, `「${def?.name ?? itemName}」無法裝備。`); return; }
  if (def.levelReq > char.level) { sendError(session.sessionId, `你正在裝備「${def.name}」，但角色等級不足；目前等級 ${char.level}，需求等級 Lv.${def.levelReq}。下一步請先提升等級或改穿低等級裝備。`); return; }
  // 職業限制檢查
  if (def.classReq && def.classReq.length > 0 && !def.classReq.includes(char.classId)) {
    sendError(session.sessionId, '你的職業無法裝備此物品');
    return;
  }

  const targetSlot = getItemResolvedEquipSlot(match.itemId) ?? def.equipSlot;
  const equipped = getEquippedItems(char.id);
  for (const eq of equipped) {
    const eqDef = ITEM_DEFS[eq.itemId];
    if (!eqDef?.equipSlot || eq.itemInstanceId === match.itemInstanceId) continue;
    const equippedSlot = getItemResolvedEquipSlot(eq.itemId) ?? eqDef.equipSlot;
    const targetOffhandSlot = getOffhandSlotForMainHand(targetSlot);
    const targetMainSlot = getMainHandSlotForOffhand(targetSlot);
    const equippedOffhandSlot = getOffhandSlotForMainHand(equippedSlot);
    const shouldUnequip = equippedSlot === targetSlot
      || (targetOffhandSlot !== null && isTwoHandWeapon(def) && equippedSlot === targetOffhandSlot)
      || (targetMainSlot !== null && equippedSlot === targetMainSlot && isTwoHandWeapon(eqDef))
      || (equippedOffhandSlot !== null && equippedOffhandSlot === targetSlot && isTwoHandWeapon(eqDef));
    if (shouldUnequip) {
      setEquipped(char.id, eq.itemId, false, eq.itemInstanceId);
      sendSystem(session.sessionId, `你卸下了「${eqDef.name}」。`);
    }
  }

  setEquipped(char.id, match.itemId, true, match.itemInstanceId);
  sendSystem(session.sessionId, `你裝備了「${def.name}」。`);
  cmdInventory(session);

  // 教學系統：裝備鉤子
  tutorialMgr.advanceStep(char.id, 'equip');
}

export function cmdUnequip(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：unequip <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    if (!item.equipped) return false;
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName || item.itemInstanceId === itemName);
  });
  if (!match) { sendError(session.sessionId, `你沒有裝備「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  setEquipped(char.id, match.itemId, false, match.itemInstanceId);
  sendSystem(session.sessionId, `你卸下了「${def?.name ?? itemName}」。`);
  cmdInventory(session);
}

export function cmdUse(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：use <物品名稱>'); return; }
  const parsedItem = parseInstanceEntryTarget(itemName);

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (
      def.name === itemName
      || item.itemId === itemName
      || def.name === parsedItem.target
      || item.itemId === parsedItem.target
    );
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  if (tryUseInstanceEntryItem(session, char, match.itemId, def?.name ?? itemName, parsedItem.difficulty)) {
    return;
  }
  if (!def?.useEffect) { sendError(session.sessionId, `「${def?.name ?? itemName}」無法使用。`); return; }

  const effect = def.useEffect;
  const inCombat = isInCombat(char.id);
  const combatId = getPlayerCombatId(char.id);
  const getPlayerCombatant = () => {
    if (!combatId) return undefined;
    return combat.getCombatState(combatId)?.playerTeam.find(p => p.id === char.id);
  };
  const finishConsumableUse = () => {
    saveCharacter(char);
    cmdStatus(session);
    cmdInventory(session);
  };

  // ─── 基礎回復藥水 ───
  if (effect.type === 'heal_hp') {
    removeInventoryItem(char.id, match.itemId, 1);
    const healed = applyHpRecovery(char, applyInventoryHandlingBonus(char.id, effect.value), getPlayerCombatant());
    finishConsumableUse();
    sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healed} HP。`);
    return;
  }

  if (effect.type === 'heal_mp') {
    removeInventoryItem(char.id, match.itemId, 1);
    if (char.resourceType === 'rage') {
      sendSystem(session.sessionId, `你使用了「${def.name}」，但怒氣無法透過藥水恢復。`);
    } else {
      const healed = applyResourceRecovery(char, applyInventoryHandlingBonus(char.id, effect.value), getPlayerCombatant());
      const resourceLabel = char.resourceType === 'mp' ? 'MP' : char.resourceType === 'focus' ? '專注' : char.resourceType === 'faith' ? '信仰' : char.resourceType;
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healed} ${resourceLabel}。`);
    }
    finishConsumableUse();
    return;
  }

  if (effect.type === 'heal_both') {
    removeInventoryItem(char.id, match.itemId, 1);
    const combatant = getPlayerCombatant();
    const healedHp = applyHpRecovery(char, applyInventoryHandlingBonus(char.id, effect.value), combatant);
    const healedResource = applyResourceRecovery(char, applyInventoryHandlingBonus(char.id, effect.value2 ?? 0), combatant);
    finishConsumableUse();
    if (char.resourceType === 'rage') {
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healedHp} HP；怒氣無法透過藥水恢復。`);
    } else {
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healedHp} HP 和 ${healedResource} 資源。`);
    }
    return;
  }

  // ─── 增益藥水 ───
  if (effect.type === 'buff_atk' || effect.type === 'buff_matk' || effect.type === 'buff_dodge'
    || effect.type === 'buff_def' || effect.type === 'buff_crit' || effect.type === 'buff_all') {
    if (!inCombat || !combatId) {
      sendError(session.sessionId, '增益藥水只能在戰鬥中使用！');
      return;
    }
    const combatState = combat.getCombatState(combatId);
    if (!combatState) { sendError(session.sessionId, '戰鬥狀態異常。'); return; }
    const playerCombatant = combatState.playerTeam.find(p => p.id === char.id);
    if (!playerCombatant) { sendError(session.sessionId, '找不到你的戰鬥資料。'); return; }

    removeInventoryItem(char.id, match.itemId, 1);
    const duration = effect.duration ?? 5;
    const value = effect.value;

    const buffMapping: Record<string, { effectType: StatusEffectType; desc: string }> = {
      buff_atk:   { effectType: 'atk_up',   desc: `攻擊力提升${value}%` },
      buff_matk:  { effectType: 'matk_up',   desc: `魔法攻擊力提升${value}%` },
      buff_dodge: { effectType: 'dodge_up',  desc: `閃避率提升${value}%` },
      buff_def:   { effectType: 'def_up',    desc: `防禦力提升${value}%` },
      buff_crit:  { effectType: 'crit_up',   desc: `暴擊率提升${value}%` },
      buff_all:   { effectType: 'atk_up',    desc: `全能力提升${value}%` },
    };

    const info = buffMapping[effect.type];

    // Determine which buff effect types will be applied
    const buffTypesToApply: StatusEffectType[] = effect.type === 'buff_all'
      ? ['atk_up', 'matk_up', 'def_up', 'mdef_up', 'dodge_up', 'crit_up']
      : [info.effectType];

    // Check for existing buffs of the same type and remove them (no stacking)
    let replaced = false;
    for (const bt of buffTypesToApply) {
      const existingIdx = playerCombatant.activeEffects.findIndex(e => e.type === bt && e.source === 'potion');
      if (existingIdx !== -1) {
        playerCombatant.activeEffects.splice(existingIdx, 1);
        replaced = true;
      }
    }

    // Apply new buffs
    for (const bt of buffTypesToApply) {
      playerCombatant.activeEffects.push({
        type: bt, value, duration, source: 'potion',
        remainingDuration: duration,
      });
    }

    if (replaced) {
      sendSystem(session.sessionId, `你使用了「${def.name}」，新的${info.desc}效果覆蓋了舊的效果，持續${duration}回合！`);
    } else {
      sendSystem(session.sessionId, `你使用了「${def.name}」，${info.desc}，持續${duration}回合！`);
    }
    return;
  }

  // ─── 傳送道具 ───
  if (effect.type === 'teleport_home') {
    if (inCombat) { sendError(session.sessionId, '戰鬥中無法使用傳送道具！'); return; }
    removeInventoryItem(char.id, match.itemId, 1);
    const prevRoom = char.roomId;
    char.roomId = 'village_square';
    saveCharacter(char);
    sendSystem(session.sessionId, `你使用了「${def.name}」，一陣光芒閃過，你被傳送回了村莊廣場！`);
    return;
  }

  if (effect.type === 'teleport_mark') {
    if (inCombat) { sendError(session.sessionId, '戰鬥中無法使用傳送道具！'); return; }
    if (!char.markedLocation) {
      sendError(session.sessionId, '你還沒有標記任何位置！請先使用記憶水晶標記一個位置。');
      return;
    }
    removeInventoryItem(char.id, match.itemId, 1);
    const targetRoom = world.getRoomInfo(char.markedLocation);
    const roomName = targetRoom?.room.name ?? char.markedLocation;
    char.roomId = char.markedLocation;
    saveCharacter(char);
    sendSystem(session.sessionId, `你使用了「${def.name}」，一陣光芒閃過，你被傳送到了「${roomName}」！`);
    return;
  }

  if (effect.type === 'mark_location') {
    if (inCombat) { sendError(session.sessionId, '戰鬥中無法使用傳送道具！'); return; }
    removeInventoryItem(char.id, match.itemId, 1);
    char.markedLocation = char.roomId;
    saveCharacter(char);
    const currentRoom = world.getRoomInfo(char.roomId);
    const roomName = currentRoom?.room.name ?? char.roomId;
    sendSystem(session.sessionId, `你使用了「${def.name}」，將當前位置「${roomName}」記錄了下來。可以使用傳送石傳送至此。`);
    return;
  }

  // ─── 食物/料理 ───
  if (effect.type === 'food_hp' || effect.type === 'food_hp_resource' || effect.type === 'food_atk'
    || effect.type === 'food_matk' || effect.type === 'food_restore' || effect.type === 'food_feast') {

    // 食物buff需要戰鬥中使用（除了 food_restore 立即回復可在非戰鬥使用）
    if (effect.type === 'food_restore') {
      removeInventoryItem(char.id, match.itemId, 1);
      const hpRestore = Math.floor(char.maxHp * 0.3);
      const resRestore = Math.floor(char.maxResource * 0.3);
      char.hp = Math.min(char.maxHp, char.hp + hpRestore);
      if (char.resourceType !== 'rage') {
        char.resource = Math.min(char.maxResource, char.resource + resRestore);
      }
      saveCharacter(char);
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${hpRestore} HP 和 ${resRestore} 資源！`);
      return;
    }

    // 其他食物buff需要戰鬥中使用
    if (!inCombat || !combatId) {
      // 非戰鬥中也允許使用食物，但效果存到角色狀態（下次戰鬥時生效）
      // 簡化處理：非戰鬥中直接給予即時效果
      if (effect.type === 'food_hp') {
        removeInventoryItem(char.id, match.itemId, 1);
        const totalHeal = Math.floor(char.maxHp * (effect.value / 100) * (effect.duration ?? 3));
        char.hp = Math.min(char.maxHp, char.hp + totalHeal);
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${totalHeal} HP！`);
        return;
      }
      if (effect.type === 'food_hp_resource') {
        removeInventoryItem(char.id, match.itemId, 1);
        const totalHpHeal = Math.floor(char.maxHp * (effect.value / 100) * (effect.duration ?? 3));
        const totalResHeal = Math.floor(char.maxResource * (effect.value / 100) * (effect.duration ?? 3));
        char.hp = Math.min(char.maxHp, char.hp + totalHpHeal);
        if (char.resourceType !== 'rage') {
          char.resource = Math.min(char.maxResource, char.resource + totalResHeal);
        }
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${totalHpHeal} HP 和 ${totalResHeal} 資源！`);
        return;
      }
      // food_atk, food_matk, food_feast 非戰鬥中只給回復效果
      removeInventoryItem(char.id, match.itemId, 1);
      if (effect.type === 'food_atk') {
        const hpHeal = Math.floor(char.maxHp * 0.2);
        char.hp = Math.min(char.maxHp, char.hp + hpHeal);
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${hpHeal} HP！（攻擊力提升效果需在戰鬥中生效）`);
      } else if (effect.type === 'food_matk') {
        const resHeal = Math.floor(char.maxResource * 0.2);
        if (char.resourceType !== 'rage') {
          char.resource = Math.min(char.maxResource, char.resource + resHeal);
        }
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${resHeal} 資源！（魔攻提升效果需在戰鬥中生效）`);
      } else {
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，感覺精神奕奕！（全能力提升效果需在戰鬥中生效）`);
      }
      return;
    }

    // 戰鬥中使用食物
    const combatState = combat.getCombatState(combatId);
    if (!combatState) { sendError(session.sessionId, '戰鬥狀態異常。'); return; }
    const playerCombatant = combatState.playerTeam.find(p => p.id === char.id);
    if (!playerCombatant) { sendError(session.sessionId, '找不到你的戰鬥資料。'); return; }

    // 檢查食物buff疊加：同一時間只能有一個食物效果
    const foodSource = 'food';
    const hasFoodBuff = playerCombatant.activeEffects.some(e => e.source === foodSource);
    if (hasFoodBuff) {
      sendError(session.sessionId, '你已經有食物效果了，同一時間只能使用一種食物！');
      return;
    }

    removeInventoryItem(char.id, match.itemId, 1);
    const duration = effect.duration ?? 3;

    if (effect.type === 'food_hp') {
      // HoT: 每回合回復 15% HP
      const tickHeal = Math.floor(char.maxHp * (effect.value / 100));
      playerCombatant.activeEffects.push({
        type: 'regen', value: tickHeal, duration, source: foodSource,
        remainingDuration: duration, tickHealing: tickHeal,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，每回合回復 ${tickHeal} HP，持續${duration}回合！`);
    } else if (effect.type === 'food_hp_resource') {
      const tickHpHeal = Math.floor(char.maxHp * (effect.value / 100));
      const tickResHeal = Math.floor(char.maxResource * (effect.value / 100));
      playerCombatant.activeEffects.push({
        type: 'regen', value: tickHpHeal, duration, source: foodSource,
        remainingDuration: duration, tickHealing: tickHpHeal,
      });
      playerCombatant.activeEffects.push({
        type: 'mana_regen', value: tickResHeal, duration, source: foodSource,
        remainingDuration: duration, tickHealing: tickResHeal,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，每回合回復 ${tickHpHeal} HP 和 ${tickResHeal} 資源，持續${duration}回合！`);
    } else if (effect.type === 'food_atk') {
      // 回復 20% HP + ATK +3%
      const hpHeal = Math.floor(char.maxHp * 0.2);
      playerCombatant.hp = Math.min(playerCombatant.maxHp, playerCombatant.hp + hpHeal);
      playerCombatant.activeEffects.push({
        type: 'atk_up', value: effect.value, duration, source: foodSource,
        remainingDuration: duration,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${hpHeal} HP，攻擊力提升${effect.value}%，持續${duration}回合！`);
    } else if (effect.type === 'food_matk') {
      // 回復 20% resource + MATK +3%
      const resHeal = Math.floor(char.maxResource * 0.2);
      if (playerCombatant.resourceType !== 'rage') {
        playerCombatant.resource = Math.min(playerCombatant.maxResource, playerCombatant.resource + resHeal);
      }
      playerCombatant.activeEffects.push({
        type: 'matk_up', value: effect.value, duration, source: foodSource,
        remainingDuration: duration,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${resHeal} 資源，魔攻提升${effect.value}%，持續${duration}回合！`);
    } else if (effect.type === 'food_feast') {
      // 全屬性 +3%
      const allBuffTypes: StatusEffectType[] = ['atk_up', 'matk_up', 'def_up', 'mdef_up', 'dodge_up', 'crit_up'];
      for (const bt of allBuffTypes) {
        playerCombatant.activeEffects.push({
          type: bt, value: effect.value, duration, source: foodSource,
          remainingDuration: duration,
        });
      }
      sendSystem(session.sessionId, `你使用了「${def.name}」，全能力提升${effect.value}%，持續${duration}回合！`);
    }
    return;
  }

  // ─── 戰鬥道具 ───
  if (effect.type === 'combat_escape' || effect.type === 'combat_blind'
    || effect.type === 'combat_stun' || effect.type === 'combat_damage') {
    if (!inCombat || !combatId) {
      sendError(session.sessionId, '戰鬥道具只能在戰鬥中使用！');
      return;
    }

    if (effect.type === 'combat_escape') {
      removeInventoryItem(char.id, match.itemId, 1);
      combat.setGuaranteedFlee(combatId);
      sendSystem(session.sessionId, `你使用了「${def.name}」，煙霧瀰漫中成功逃離了戰鬥！`);
      return;
    }

    const enemy = combat.getFirstAliveEnemy(combatId);
    if (!enemy) { sendError(session.sessionId, '沒有可攻擊的敵人。'); return; }

    removeInventoryItem(char.id, match.itemId, 1);

    if (effect.type === 'combat_blind') {
      combat.applyEffectToEnemy(combatId, enemy.id, {
        type: 'slow', // slow reduces accuracy conceptually
        value: effect.value,
        duration: effect.duration ?? 1,
        source: 'item_blind',
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，${enemy.name}被閃光致盲，命中率降低${effect.value}%！`);
    } else if (effect.type === 'combat_stun') {
      combat.applyEffectToEnemy(combatId, enemy.id, {
        type: 'stun',
        value: 1,
        duration: effect.duration ?? 1,
        source: 'item_stun',
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，${enemy.name}被困住了，下回合無法行動！`);
    } else if (effect.type === 'combat_damage') {
      const result = combat.dealDamageToEnemy(combatId, enemy.id, effect.value);
      if (result) {
        let msg = `你使用了「${def.name}」，對${enemy.name}造成了 ${result.dealt} 點傷害！`;
        if (result.killed) msg += ` ${enemy.name}被擊敗了！`;
        sendSystem(session.sessionId, msg);
      }
    }
    return;
  }

  // ─── 寶箱開啟 ───
  if (effect.type === 'open_chest_bronze' || effect.type === 'open_chest_silver' || effect.type === 'open_chest_gold') {
    const chestTier = effect.type === 'open_chest_bronze' ? 'bronze'
      : effect.type === 'open_chest_silver' ? 'silver' : 'gold';
    const keyId = `${chestTier}_key`;
    const keyDef = ITEM_DEFS[keyId];
    const keyName = keyDef?.name ?? `${chestTier}鑰匙`;

    // 檢查是否有對應鑰匙
    const hasKey = inv.some(i => i.itemId === keyId && i.quantity >= 1);
    if (!hasKey) {
      sendError(session.sessionId, `你需要「${keyName}」才能打開這個寶箱！`);
      return;
    }

    // 消耗寶箱和鑰匙
    removeInventoryItem(char.id, match.itemId, 1);
    removeInventoryItem(char.id, keyId, 1);

    // 隨機掉落
    const lootTable = getChestLootTable(chestTier);
    const numItems = chestTier === 'bronze' ? 1 + Math.floor(Math.random() * 2)
      : chestTier === 'silver' ? 2 + Math.floor(Math.random() * 2)
      : 2 + Math.floor(Math.random() * 3);

    const obtainedItems: string[] = [];
    let goldReward = 0;

    for (let i = 0; i < numItems; i++) {
      const roll = Math.random();
      // 有一定機率掉金幣
      if (roll < 0.3) {
        const goldAmount = chestTier === 'bronze' ? 20 + Math.floor(Math.random() * 80)
          : chestTier === 'silver' ? 100 + Math.floor(Math.random() * 300)
          : 500 + Math.floor(Math.random() * 1000);
        goldReward += goldAmount;
      } else {
        const lootItem = lootTable[Math.floor(Math.random() * lootTable.length)];
        const grantedNames = addLootItemToInventory(char, lootItem, 1);
        const lootDef = ITEM_DEFS[lootItem];
        obtainedItems.push(...(grantedNames.length > 0 ? grantedNames : [lootDef?.name ?? lootItem]));
      }
    }

    if (goldReward > 0) {
      char.gold += goldReward;
      saveCharacter(char);
    }

    let msg = `你使用「${keyName}」打開了「${def.name}」！\n獲得了：`;
    if (obtainedItems.length > 0) msg += `\n  ${obtainedItems.join('、')}`;
    if (goldReward > 0) msg += `\n  ${goldReward} 金幣`;
    if (obtainedItems.length === 0 && goldReward === 0) msg += '\n  （空的寶箱…）';

    sendSystem(session.sessionId, msg);
    return;
  }

  // ─── 舊的 buff/teleport 相容（fallback） ───
  if (effect.type === 'buff') {
    removeInventoryItem(char.id, match.itemId, 1);
    sendSystem(session.sessionId, `你使用了「${def.name}」。`);
    return;
  }

  if (effect.type === 'teleport') {
    removeInventoryItem(char.id, match.itemId, 1);
    sendSystem(session.sessionId, `你使用了「${def.name}」。`);
    return;
  }

  // 未知效果
  sendError(session.sessionId, `「${def.name}」的效果類型不明。`);
}

/** 寶箱掉落表 */
export function getChestLootTable(tier: 'bronze' | 'silver' | 'gold'): string[] {
  if (tier === 'bronze') {
    return [
      'small_hp_potion', 'small_mp_potion', 'antidote',
      'iron_ore', 'beast_hide', 'slime_jelly',
      'grilled_meat', 'spider_silk_cloth',
    ];
  }
  if (tier === 'silver') {
    return [
      'medium_hp_potion', 'medium_mp_potion',
      'strength_potion', 'wisdom_potion', 'agility_potion', 'fortitude_potion', 'luck_potion',
      'mithril_ore', 'elf_wood', 'magic_crystal',
      'stew', 'adventure_bento', 'magic_dessert',
    ];
  }
  // gold — epic/legendary items only
  return [
    // Unique weapons (with attackDescriptions)
    'faded_grimoire', 'lava_warhammer', 'crystal_cluster_staff', 'frost_giant_greataxe',
    'sandstorm_crossbow', 'frozen_hourglass_staff', 'crimson_grimoire',
    'guardian_warhammer', 'spirit_whip',
    'dwarven_masterwork_spear', 'twilight_katana',
    'eternal_holy_tome', 'world_tree_staff',
    // Set equipment pieces
    'sword_saint_armor', 'sword_saint_ring',
    'archmage_set_robe', 'archmage_set_ring',
    'shadow_hunter_armor', 'shadow_hunter_ring',
    'holy_guardian_armor', 'holy_guardian_ring',
    // High-value materials
    'dragon_scale', 'magic_crystal', 'ancient_fragment',
    // Advanced enhancement items
    'advanced_enhance_stone', 'blessing_scroll',
  ];
}

export function cmdTake(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;

  if (!itemName) {
    sendError(session.sessionId, '用法：take <物品名稱>');
    return;
  }

  // 嘗試撿取地上物品
  const groundItems = getAvailableGroundItems(char.roomId);
  const target = itemName.toLowerCase();
  const match = groundItems.find(gi => {
    const def = ITEM_DEFS[gi.itemId];
    return def && (def.name === itemName || gi.itemId === target || def.name.toLowerCase().includes(target));
  });

  if (match) {
    const def = ITEM_DEFS[match.itemId];
    addRewardItemToInventory(char, match.itemId, 1, ['ground_item']);
    markGroundItemPicked(char.roomId, match.itemId, match.oneTime);
    questMgr.updateProgress(char.id, 'collect_item', match.itemId);
    sendNarrative(session.sessionId, `你撿起了${def?.name ?? match.itemId}。`);
    cmdInventory(session);
    broadcastRoomState(char.roomId);
    return;
  }

  sendSystem(session.sessionId, `這裡沒有可以撿取的「${itemName}」。`);
}

export function cmdLoot(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;

  const query = target?.trim() || 'corpse';
  const result = corpseMgr.lootCorpse(char.roomId, char.id, query);
  if (!result.ok) {
    sendError(session.sessionId, result.message);
    return;
  }

  const loot = result.loot;
  if (!loot || (loot.gold <= 0 && loot.items.length === 0)) {
    sendSystem(session.sessionId, result.message);
    if (result.corpse && corpseMgr.removeCorpseIfEmpty(result.corpse)) {
      broadcastRoomState(char.roomId);
    }
    return;
  }

  const personalQuestItems = loot.items.filter(item => ITEM_DEFS[item.itemId]?.type === 'quest');
  const sharedLoot = {
    gold: loot.gold,
    items: loot.items.filter(item => ITEM_DEFS[item.itemId]?.type !== 'quest'),
  };
  const distribution = partyMgr.distributeLoot(
    char.id,
    result.corpse?.participantIds ?? [char.id],
    sharedLoot,
  );

  for (const [recipientId, assignedLoot] of distribution.assignments) {
    const recipient = getCharacterById(recipientId);
    if (!recipient) continue;

    if (assignedLoot.gold > 0) {
      recipient.gold += assignedLoot.gold;
      recordGoldProduced(assignedLoot.gold);
      sendSystem(getSessionByCharacterId(recipient.id)?.sessionId ?? session.sessionId, `獲得金幣 +${assignedLoot.gold}`);
    }

    for (const item of assignedLoot.items) {
      const grantedNames = addLootItemToInventory(recipient, item);
      questMgr.updateProgress(recipient.id, 'collect_item', item.itemId);
      const def = ITEM_DEFS[item.itemId];
      const itemText = grantedNames.length > 1 ? grantedNames.join('、') : `${def?.name ?? item.itemId} x${item.quantity}`;
      sendSystem(getSessionByCharacterId(recipient.id)?.sessionId ?? session.sessionId, `獲得 ${itemText}`);
      announceLootItem(recipient, item.itemId, result.corpse?.roomId ?? char.roomId);
    }

    questMgr.updateProgress(recipient.id, 'loot_corpse', result.corpse?.monsterId ?? 'corpse');
    questMgr.updateProgress(recipient.id, 'loot_corpse', 'corpse');
    saveCharacter(recipient);
    const recipientSession = getSessionByCharacterId(recipient.id);
    if (recipientSession) cmdInventory(recipientSession);
  }

  for (const item of personalQuestItems) {
    addLootItemToInventory(char, item);
    questMgr.updateProgress(char.id, 'collect_item', item.itemId);
    const def = ITEM_DEFS[item.itemId];
    sendSystem(session.sessionId, `獲得 ${def?.name ?? item.itemId} x${item.quantity}`);
    announceLootItem(char, item.itemId, result.corpse?.roomId ?? char.roomId);
  }

  if (personalQuestItems.length > 0 && !distribution.assignments.has(char.id)) {
    questMgr.updateProgress(char.id, 'loot_corpse', result.corpse?.monsterId ?? 'corpse');
    questMgr.updateProgress(char.id, 'loot_corpse', 'corpse');
  }
  saveCharacter(char);
  cmdInventory(session);
  if (result.corpse) {
    corpseMgr.removeCorpseIfEmpty(result.corpse);
  }
  broadcastRoomState(char.roomId);
  if (distribution.assignments.size > 0) sendSystem(session.sessionId, distribution.message);
  sendSystem(session.sessionId, result.message);
}

export function announceLootItem(recipient: Character, itemId: string, roomId: string): void {
  const scope = getLootAnnouncementScope(itemId);
  if (!scope) return;

  const itemName = ITEM_DEFS[itemId]?.name ?? itemId;
  const text = `【戰利品】${recipient.name} 獲得了 ${itemName}。`;

  if (scope === 'room') {
    broadcastToRoom(roomId, 'system', { text }, characterId => getCharacterById(characterId)?.roomId ?? null);
    return;
  }

  if (scope === 'world') {
    broadcast('system', { text });
    return;
  }

  const sourceZoneId = getRoom(roomId)?.zone;
  if (!sourceZoneId) return;
  for (const onlineSession of getAllSessions()) {
    if (!onlineSession.characterId) continue;
    const onlineChar = getCharacterById(onlineSession.characterId);
    const onlineZoneId = onlineChar ? getRoom(onlineChar.roomId)?.zone : undefined;
    if (onlineZoneId === sourceZoneId) {
      sendToSession(onlineSession.sessionId, 'system', { text });
    }
  }
}

export function cmdDrop(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：drop <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName || item.itemInstanceId === itemName) && !item.equipped;
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  removeInventoryItem(char.id, match.itemId, 1, match.itemInstanceId);
  sendSystem(session.sessionId, `你丟棄了「${def?.name ?? itemName}」。`);
}
