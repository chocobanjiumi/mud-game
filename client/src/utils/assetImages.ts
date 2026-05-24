import type { RoomEntity } from '@game/shared';
import { ITEM_DEFS } from '@game/shared';
import { ATLAS_ASSETS } from '../generated/atlasManifest';

function monsterTargetId(entityId: string): string {
  return entityId.replace(/_\d+$/, '');
}

function getAssetPath(category: keyof typeof ATLAS_ASSETS, targetId: string): string | undefined {
  return (ATLAS_ASSETS[category] as Record<string, string | undefined>)[targetId];
}

export function getItemImagePath(itemId: string): string | undefined {
  const def = ITEM_DEFS[itemId];
  const category = def?.type === 'material' ? 'material' : 'item';
  return getAssetPath(category, itemId);
}

export function getNpcImagePath(npcId: string): string | undefined {
  return getAssetPath('npc', npcId);
}

export function getEntityImagePath(entity: RoomEntity): string | undefined {
  if (entity.type === 'npc') return getNpcImagePath(entity.id);
  if (entity.type === 'monster') return getAssetPath('monster', monsterTargetId(entity.id));
  if (entity.type === 'item') return getItemImagePath(entity.id);
  return undefined;
}
