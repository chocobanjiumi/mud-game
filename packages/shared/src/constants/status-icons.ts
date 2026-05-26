import type { StatusEffectType } from '../types/skill.js';

export interface AtlasIconRect {
  atlas: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const STATUS_ATLAS = '/mud/images/status/status_atlas_01.png';

const STATUS_ICON_ORDER: StatusEffectType[] = [
  'poison', 'burn', 'bleed', 'stun',
  'freeze', 'fear', 'slow', 'silence',
  'def_down', 'atk_down', 'mark', 'shield',
  'damage_reduction', 'mana_shield', 'regen', 'mana_regen',
];

export const STATUS_ICON_RECTS: Partial<Record<StatusEffectType, AtlasIconRect>> = Object.fromEntries(
  STATUS_ICON_ORDER.map((type, index) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    return [type, {
      atlas: STATUS_ATLAS,
      x: 400 + col * 200,
      y: 100 + row * 200,
      width: 200,
      height: 200,
    }];
  }),
) as Partial<Record<StatusEffectType, AtlasIconRect>>;

export function getStatusIconRect(type: StatusEffectType): AtlasIconRect | undefined {
  return STATUS_ICON_RECTS[type];
}

export function getAtlasBackgroundStyle(rect: AtlasIconRect, displaySize = 32): {
  backgroundImage: string;
  backgroundPosition: string;
  backgroundSize: string;
  width: string;
  height: string;
} {
  const scale = displaySize / rect.width;
  return {
    backgroundImage: `url(${rect.atlas})`,
    backgroundPosition: `-${rect.x * scale}px -${rect.y * scale}px`,
    backgroundSize: `${1600 * scale}px ${1000 * scale}px`,
    width: `${displaySize}px`,
    height: `${displaySize}px`,
  };
}
