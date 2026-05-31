import type { RoomEntity } from '@game/shared';
import { CLASS_DEFS, GATHERING_NODE_DEFS, ITEM_DEFS } from '@game/shared';
import { ATLAS_ASSETS } from '../generated/atlasManifest';

// 圖片改由 Cloudflare R2 提供（WebP）。可用 VITE_IMAGE_BASE_URL 覆寫（例如自訂網域）。
export const IMAGE_BASE = (
  import.meta.env.VITE_IMAGE_BASE_URL ?? 'https://pub-a8d7f8030985459091c358bcd3b64ca1.r2.dev'
).replace(/\/+$/, '');

/** 將本地風格圖片路徑（/mud/images/.. 或 /images/.. 或裸路徑）轉成 R2 的 WebP URL。 */
export function assetUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  const matched = path.match(/images\/(.+)$/);
  const rest = (matched ? matched[1] : path.replace(/^\/+/, '').replace(/^mud\//, '').replace(/^images\//, ''))
    .replace(/\.(png|jpe?g)$/i, '.webp');
  return `${IMAGE_BASE}/${rest}`;
}

/** 技能空白圖示後備（R2 WebP）。 */
export const BLANK_SKILL_ICON = `${IMAGE_BASE}/skills/icons/starter_blank_01.webp`;

export function getPublicAssetPath(path: string | undefined): string | undefined {
  return assetUrl(path);
}

function monsterTargetId(entityId: string): string {
  return entityId.replace(/_\d+$/, '');
}

function getAssetPath(category: keyof typeof ATLAS_ASSETS, targetId: string): string | undefined {
  return assetUrl((ATLAS_ASSETS[category] as Record<string, string | undefined>)[targetId]);
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
  return `${IMAGE_BASE}/wiki/origins/class_${getBaseClassId(classId)}_icon.webp`;
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
