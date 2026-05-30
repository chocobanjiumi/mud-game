// Travel access, cost, and cooldown helpers

import { getInventory, getKingdomById, getMemberKingdom, isQuestCompleted, isZoneUnlocked, removeInventoryItem, unlockZone, updateKingdom } from '../../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import type { Character, TravelNodeDef, ZoneDef } from '@game/shared';
import { getRoom, getZone, ZONES } from '../../data/rooms.js';
import { getTravelNodes } from '../../data/travel.js';
import { applyTravelGoldOriginDiscount } from '../origin-effects.js';
import { recordGoldSpent } from '../economy-stats.js';
import { getCarriedKingdomResourceItemIds, getInventorySlotLoad } from '../inventory-capacity.js';
import { getPvpTravelLockRemainingSeconds } from '../pvp-travel-lock.js';

const travelCooldowns = new Map<string, number>();

export function canAccessZone(char: Character, zoneId: string, grantWhenRequirementsMet = true): { ok: true } | { ok: false; message: string } {
  const zone = getZone(zoneId);
  if (!zone) return { ok: false, message: `未知區域：${zoneId}` };
  if (!zone.unlock) return { ok: true };
  if (isZoneUnlocked(char.id, zoneId)) return { ok: true };

  const unlock = zone.unlock;
  if (unlock.requiredLevel && char.level < unlock.requiredLevel) {
    return { ok: false, message: `${zone.name} 需要等級 ${unlock.requiredLevel} 才能進入。` };
  }
  if (unlock.requiredQuestId && !isQuestCompleted(char.id, unlock.requiredQuestId)) {
    return { ok: false, message: `${zone.name} 需要先完成任務 ${unlock.requiredQuestId}。` };
  }
  if (unlock.requiredItemId && !getInventory(char.id).some(item => item.itemId === unlock.requiredItemId && item.quantity > 0)) {
    const itemName = ITEM_DEFS[unlock.requiredItemId]?.name ?? unlock.requiredItemId;
    return { ok: false, message: `${zone.name} 需要持有 ${itemName}。` };
  }
  if (unlock.requiredZoneId && !isZoneUnlocked(char.id, unlock.requiredZoneId)) {
    const requiredZone = getZone(unlock.requiredZoneId);
    return { ok: false, message: `${zone.name} 需要先探索 ${requiredZone?.name ?? unlock.requiredZoneId}。` };
  }

  if (grantWhenRequirementsMet) {
    unlockZone(char.id, zoneId, 'requirements');
  }
  return { ok: true };
}

export function findPortalZone(query: string): ZoneDef | undefined {
  const normalized = query.trim().toLowerCase();
  return Object.values(ZONES).find(zone => {
    if (!zone.portal) return false;
    return zone.id.toLowerCase() === normalized
      || zone.name.toLowerCase() === normalized
      || zone.portal.id.toLowerCase() === normalized
      || zone.portal.name.toLowerCase() === normalized;
  });
}

export function getPortalCost(char: Character, zone: ZoneDef): number {
  if (!zone.portal) return 10 + zone.levelRange[0] * 3;
  if (zone.portal.cost === 0) return 0;
  if (char.level <= 10 && zone.levelRange[0] <= 10) return Math.min(zone.portal.cost, 5);
  return 10 + zone.levelRange[0] * 3;
}

export function findTravelNode(query: string): TravelNodeDef | undefined {
  const normalized = query.trim().toLowerCase();
  return getTravelNodes().find(node => {
    const zone = getZone(node.zoneId);
    return node.id.toLowerCase() === normalized
      || node.name.toLowerCase() === normalized
      || zone?.id.toLowerCase() === normalized
      || zone?.name.toLowerCase() === normalized;
  });
}

export function getTravelNodesByActivationRoom(roomId: string): TravelNodeDef[] {
  return getTravelNodes().filter(node => node.requiresActivation && node.activateRoomId === roomId);
}

export function canAccessTravelNode(
  char: Character,
  node: TravelNodeDef,
  grantWhenRequirementsMet = true,
): { ok: true } | { ok: false; message: string } {
  const zoneAccess = canAccessZone(char, node.zoneId, grantWhenRequirementsMet);
  if (!zoneAccess.ok) return zoneAccess;

  if (node.unlock?.requiredLevel && char.level < node.unlock.requiredLevel) {
    return { ok: false, message: `${node.name} 需要等級 ${node.unlock.requiredLevel} 才能使用。` };
  }
  if (node.unlock?.requiredQuestId && !isQuestCompleted(char.id, node.unlock.requiredQuestId)) {
    return { ok: false, message: `${node.name} 需要先完成任務 ${node.unlock.requiredQuestId}。` };
  }
  if (node.unlock?.requiredItemId && !getInventory(char.id).some(item => item.itemId === node.unlock?.requiredItemId && item.quantity > 0)) {
    const itemName = ITEM_DEFS[node.unlock.requiredItemId]?.name ?? node.unlock.requiredItemId;
    return { ok: false, message: `${node.name} 需要持有 ${itemName}。` };
  }

  return { ok: true };
}

export function getTravelCostAmount(char: Character, node: TravelNodeDef): number {
  const zone = getZone(node.zoneId);
  if (!zone) return 0;
  const base = getPortalCost(char, zone);
  if (node.cost.type === 'gold') {
    let amount: number;
    if (node.cost.amount !== undefined) {
      if (char.level <= 10 && zone.levelRange[0] <= 10) amount = Math.min(node.cost.amount, 5);
      else amount = node.kind === 'zone_entrance' ? 10 + zone.levelRange[0] * 3 : node.cost.amount;
    } else {
      amount = Math.ceil(base * (node.cost.multiplier ?? 1));
    }
    return applyTravelGoldOriginDiscount(char, amount);
  }
  if (node.cost.type === 'kingdom_treasury') return node.cost.amount;
  if (node.cost.type === 'item') return node.cost.quantity;
  return base;
}

export function formatTravelCost(char: Character, node: TravelNodeDef): string {
  const amount = getTravelCostAmount(char, node);
  if (node.cost.type === 'kingdom_treasury') return `${amount} 王國國庫金幣`;
  if (node.cost.type === 'item') {
    const itemName = ITEM_DEFS[node.cost.itemId]?.name ?? node.cost.itemId;
    return `${amount} 個 ${itemName}`;
  }
  return `${amount} 金幣`;
}

export function payTravelCost(char: Character, node: TravelNodeDef): { ok: true; message: string } | { ok: false; message: string } {
  const amount = getTravelCostAmount(char, node);
  if (amount <= 0) return { ok: true, message: '未花費金幣。' };

  if (node.cost.type === 'kingdom_treasury') {
    const member = getMemberKingdom(char.id);
    if (!member) return { ok: false, message: '你不是王國成員，無法使用王國交通。' };
    const kingdom = getKingdomById(member.kingdom_id);
    if (!kingdom || kingdom.treasury_gold < amount) {
      return { ok: false, message: `王國國庫不足。需要 ${amount} 金幣。` };
    }
    updateKingdom(member.kingdom_id, { treasury_gold: kingdom.treasury_gold - amount });
    return { ok: true, message: `消耗王國國庫 ${amount} 金幣。` };
  }

  if (node.cost.type === 'item') {
    const itemCost = node.cost;
    const hasItem = getInventory(char.id).some(item => item.itemId === itemCost.itemId && item.quantity >= amount);
    if (!hasItem) {
      const itemName = ITEM_DEFS[itemCost.itemId]?.name ?? itemCost.itemId;
      return { ok: false, message: `缺少 ${amount} 個 ${itemName}。` };
    }
    removeInventoryItem(char.id, itemCost.itemId, amount);
    const itemName = ITEM_DEFS[itemCost.itemId]?.name ?? itemCost.itemId;
    return { ok: true, message: `消耗 ${amount} 個 ${itemName}。` };
  }

  if (char.gold < amount) {
    return { ok: false, message: `金幣不足。需要 ${amount} 金幣。` };
  }
  char.gold -= amount;
  recordGoldSpent(amount);
  return { ok: true, message: `花費 ${amount} 金幣。` };
}

export function canTravelFromCurrentRoom(char: Character, node: TravelNodeDef): { ok: true } | { ok: false; message: string } {
  const room = getRoom(char.roomId);
  const zone = room ? getZone(room.zone) : undefined;
  if (!room || !zone) return { ok: true };

  const isPvpDangerZone = zone.pvpMode === 'open' || zone.pvpMode === 'faction' || zone.pvpMode === 'kingdom_war';
  if (!isPvpDangerZone) return { ok: true };

  const safeEntryRoom = zone.rooms[0];
  const safeExit = room.id === safeEntryRoom || node.kind === 'danger_evac';
  if (safeExit) return { ok: true };

  const contestedRoom = zone.tags.includes('resource_war')
    || zone.tags.includes('world_boss')
    || !!room.monsters?.length
    || !!room.groundItems?.length;
  if (contestedRoom) {
    return { ok: false, message: 'PvP 爭奪、資源或 Boss 區域不能直接傳送離開。請撤回安全入口或使用危險撤離點。' };
  }

  return { ok: true };
}

export function canUseInventoryRestrictedTravel(char: Character, node?: TravelNodeDef): { ok: true } | { ok: false; message: string } {
  if (node?.kind === 'danger_evac') return { ok: true };

  const load = getInventorySlotLoad(getInventory(char.id));
  if (!load.overloaded) return { ok: true };

  return {
    ok: false,
    message: `背包超重（${load.slots}/${load.capacity} 格），無法使用一般傳送。請整理背包或使用危險撤離點。`,
  };
}

export function canUseKingdomCargoRestrictedTravel(char: Character, node?: TravelNodeDef): { ok: true } | { ok: false; message: string } {
  if (node?.kind === 'kingdom_route' || node?.kind === 'danger_evac') return { ok: true };

  const carriedItemIds = getCarriedKingdomResourceItemIds(getInventory(char.id));
  if (carriedItemIds.length === 0) return { ok: true };

  const names = carriedItemIds
    .map(itemId => ITEM_DEFS[itemId]?.name ?? itemId)
    .join('、');
  return {
    ok: false,
    message: `你正攜帶王國資源（${names}），無法使用一般傳送。請走王國路線、交付資源或使用危險撤離點。`,
  };
}

export function canUsePvpDamageRestrictedTravel(char: Character): { ok: true } | { ok: false; message: string } {
  const remaining = getPvpTravelLockRemainingSeconds(char.id);
  if (remaining <= 0) return { ok: true };

  return {
    ok: false,
    message: `剛受到 PvP 傷害，${remaining} 秒內無法傳送逃跑。請先脫離戰線或等待傷害鎖定結束。`,
  };
}

export function getTravelCooldownRemaining(characterId: string): number {
  const readyAt = travelCooldowns.get(characterId);
  if (!readyAt) return 0;
  const remainingMs = readyAt - Date.now();
  if (remainingMs <= 0) {
    travelCooldowns.delete(characterId);
    return 0;
  }
  return Math.ceil(remainingMs / 1000);
}

export function setTravelCooldown(characterId: string, cooldownSeconds: number): void {
  if (cooldownSeconds <= 0) return;
  travelCooldowns.set(characterId, Date.now() + cooldownSeconds * 1000);
}

