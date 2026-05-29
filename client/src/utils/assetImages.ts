import type { RoomEntity } from '@game/shared';
import { CLASS_DEFS, GATHERING_NODE_DEFS, ITEM_DEFS } from '@game/shared';
import { ATLAS_ASSETS } from '../generated/atlasManifest';

export function getPublicAssetPath(path: string | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('/mud/') || path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('/')) return `/mud${path}`;
  return `/mud/${path}`;
}

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

export function getMonsterImagePath(monsterId: string): string | undefined {
  return getAssetPath('monster', monsterTargetId(monsterId));
}

export function getBaseClassId(classId: string | undefined): string {
  let current = classId && CLASS_DEFS[classId as keyof typeof CLASS_DEFS] ? classId : 'swordsman';
  while (current) {
    const classDef = CLASS_DEFS[current as keyof typeof CLASS_DEFS];
    if (!classDef?.parentClass || classDef.parentClass === 'adventurer') return current;
    current = classDef.parentClass;
  }
  return 'swordsman';
}

export function getClassIconPath(classId: string | undefined): string {
  return `/mud/images/wiki/origins/class_${getBaseClassId(classId)}_icon.png`;
}

export function getEntityImagePath(entity: RoomEntity): string | undefined {
  if (entity.type === 'npc') return getNpcImagePath(entity.id);
  if (entity.type === 'monster') return getMonsterImagePath(entity.id);
  if (entity.type === 'player') return getClassIconPath(entity.playerDetails?.classId);
  if (entity.type === 'item') return getItemImagePath(entity.id);
  if (entity.type === 'gathering') {
    const materialId = GATHERING_NODE_DEFS[entity.id]?.yields[0]?.itemId;
    return materialId ? getItemImagePath(materialId) : undefined;
  }
  return undefined;
}
