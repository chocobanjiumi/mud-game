// 通用採集系統 — mining/herbalism/logging/skinning/fishing/archaeology

import {
  GATHERING_NODE_DEFS,
  ITEM_DEFS,
  type GatheringMaterialQuality,
  type GatheringNodeDef,
  type RoomDef,
  type ZoneDef,
} from '@game/shared';
import { addInventoryItem } from '../db/queries.js';

const GATHERING_COOLDOWN_MS = 5_000;
const gatheringCooldowns = new Map<string, number>();
const materialQualityLedger = new Map<string, Partial<Record<GatheringMaterialQuality, number>>>();
const SPECIFIC_GATHERING_TAGS = new Set(['mining', 'herbalism', 'logging', 'skinning', 'fishing', 'archaeology']);

const QUALITY_LABELS: Record<GatheringMaterialQuality, string> = {
  rough: '粗糙',
  normal: '普通',
  fine: '優良',
  rare: '稀有',
  perfect: '完美',
};

export interface GatherResult {
  ok: boolean;
  message: string;
  gathered?: {
    nodeId: string;
    itemId: string;
    quantity: number;
    quality: GatheringMaterialQuality;
  };
}

export class GatheringManager {
  getAvailableNodes(room: RoomDef, zone?: ZoneDef, level = 60): GatheringNodeDef[] {
    const roomTags = getRoomGatheringTags(room);
    const hasSpecificRoomGathering = [...roomTags].some(tag => SPECIFIC_GATHERING_TAGS.has(tag));
    const zoneTags = new Set([
      zone?.id,
      zone?.type,
      zone?.region,
      ...(zone?.tags ?? []),
    ].filter((tag): tag is string => !!tag));

    return Object.values(GATHERING_NODE_DEFS)
      .filter(node => node.levelMin <= level)
      .filter(node =>
        node.roomTags.some(tag => roomTags.has(tag))
        || (!hasSpecificRoomGathering && node.zoneTags.some(tag => room.zone === tag || zoneTags.has(tag))),
      )
      .sort((a, b) => a.levelMin - b.levelMin || a.id.localeCompare(b.id));
  }

  gather(
    characterId: string,
    room: RoomDef,
    zone?: ZoneDef,
    nodeId?: string,
    level = 60,
    random: () => number = Math.random,
  ): GatherResult {
    const availableNodes = this.getAvailableNodes(room, zone, level);
    const node = nodeId
      ? availableNodes.find(candidate => candidate.id === nodeId)
      : availableNodes[0];

    if (!node) {
      const available = availableNodes.map(candidate => candidate.id).join(', ');
      return {
        ok: false,
        message: nodeId
          ? `此處無法採集 ${nodeId}。${available ? `可採集：${available}` : ''}`
          : '此處沒有可採集的資源。',
      };
    }

    const now = Date.now();
    const lastGathered = gatheringCooldowns.get(characterId) ?? 0;
    const remaining = GATHERING_COOLDOWN_MS - (now - lastGathered);
    if (remaining > 0) {
      return { ok: false, message: `採集工具還在冷卻中，請等待 ${Math.ceil(remaining / 1000)} 秒。` };
    }
    gatheringCooldowns.set(characterId, now);

    const yieldDef = rollYield(node, random);
    const quantity = rollQuantity(yieldDef.minQty, yieldDef.maxQty, random);
    addInventoryItem(characterId, yieldDef.itemId, quantity);
    recordMaterialQuality(characterId, yieldDef.itemId, yieldDef.quality, quantity);

    const itemName = ITEM_DEFS[yieldDef.itemId]?.name ?? yieldDef.itemId;
    return {
      ok: true,
      message: `你在「${node.name}」採集到 ${QUALITY_LABELS[yieldDef.quality]} ${itemName} x${quantity}。`,
      gathered: {
        nodeId: node.id,
        itemId: yieldDef.itemId,
        quantity,
        quality: yieldDef.quality,
      },
    };
  }

  resetCooldown(characterId: string): void {
    gatheringCooldowns.delete(characterId);
  }
}

export function getRoomGatheringTags(room: RoomDef): Set<string> {
  const roomTags = new Set((room as RoomDef & { tags?: string[] }).tags ?? []);
  const signature = `${room.id} ${room.name} ${(room as RoomDef & { mapSymbol?: string }).mapSymbol ?? ''}`.toLowerCase();

  if (matchesAny(signature, ['mine', 'mining', 'vein', 'ore', 'lode', 'quarry', 'crystal', '礦', '脈', '晶'])) {
    roomTags.add('mining');
  }
  if (matchesAny(signature, ['herb', 'moss', 'fern', 'bloom', 'flower', '藥', '草', '苔', '花'])) {
    roomTags.add('herbalism');
  }
  if (matchesAny(signature, ['forest', 'wood', 'tree', 'grove', 'log', 'canopy', 'oak', 'pine', 'willow', '林', '木', '樹'])) {
    roomTags.add('logging');
  }
  if (matchesAny(signature, ['beast_scrape', 'fur', 'hide', 'skin', 'den', 'nest', 'burrow', 'wallow', '獵', '獸', '巢', '穴', '皮'])) {
    roomTags.add('skinning');
  }
  if (matchesAny(signature, ['fish', 'fishing', 'water', 'river', 'lake', 'pond', 'pool', 'creek', 'dock', 'reef', 'tide', '水', '湖', '河', '溪', '池', '泉', '魚', '釣'])) {
    roomTags.add('fishing');
  }
  if (matchesAny(signature, ['relic', 'ruin', 'ancient', 'fossil', 'runestone', 'crypt', 'tomb', '遺', '古', '碑', '墓', '化石'])) {
    roomTags.add('archaeology');
  }

  roomTags.delete('gathering');
  return roomTags;
}

function matchesAny(value: string, patterns: string[]): boolean {
  return patterns.some(pattern => value.includes(pattern));
}

export function consumeGatheredMaterialQualities(
  characterId: string,
  materials: { itemId: string; count: number }[],
): GatheringMaterialQuality[] {
  const consumed: GatheringMaterialQuality[] = [];
  for (const material of materials) {
    let remaining = material.count;
    for (const quality of ['perfect', 'rare', 'fine', 'normal', 'rough'] as GatheringMaterialQuality[]) {
      if (remaining <= 0) break;
      const key = materialQualityKey(characterId, material.itemId);
      const ledger = materialQualityLedger.get(key);
      const available = ledger?.[quality] ?? 0;
      if (available <= 0) continue;
      const used = Math.min(available, remaining);
      ledger![quality] = available - used;
      consumed.push(...Array<GatheringMaterialQuality>(used).fill(quality));
      remaining -= used;
    }
  }
  return consumed;
}

function recordMaterialQuality(
  characterId: string,
  itemId: string,
  quality: GatheringMaterialQuality,
  quantity: number,
): void {
  const key = materialQualityKey(characterId, itemId);
  const ledger = materialQualityLedger.get(key) ?? {};
  ledger[quality] = (ledger[quality] ?? 0) + quantity;
  materialQualityLedger.set(key, ledger);
}

function materialQualityKey(characterId: string, itemId: string): string {
  return `${characterId}:${itemId}`;
}

function rollYield(node: GatheringNodeDef, random: () => number): GatheringNodeDef['yields'][number] {
  const totalWeight = node.yields.reduce((sum, yieldDef) => sum + yieldDef.weight, 0);
  let roll = random() * totalWeight;
  for (const yieldDef of node.yields) {
    roll -= yieldDef.weight;
    if (roll <= 0) return yieldDef;
  }
  return node.yields[node.yields.length - 1];
}

function rollQuantity(minQty: number, maxQty: number, random: () => number): number {
  if (maxQty <= minQty) return minQty;
  return minQty + Math.floor(random() * (maxQty - minQty + 1));
}
