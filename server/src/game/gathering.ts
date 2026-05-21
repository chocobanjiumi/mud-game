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
    const roomTags = new Set((room as RoomDef & { tags?: string[] }).tags ?? []);
    const zoneTags = new Set([
      zone?.id,
      zone?.type,
      zone?.region,
      ...(zone?.tags ?? []),
    ].filter((tag): tag is string => !!tag));

    return Object.values(GATHERING_NODE_DEFS)
      .filter(node => node.levelMin <= level)
      .filter(node =>
        node.roomTags.some(tag => roomTags.has(tag) || zoneTags.has(tag))
        || node.zoneTags.some(tag => room.zone === tag || zoneTags.has(tag)),
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
