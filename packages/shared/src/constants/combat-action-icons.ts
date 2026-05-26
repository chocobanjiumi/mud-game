import type { AtlasIconRect } from './status-icons.js';

export type CombatActionIconId = 'attack' | 'defend' | 'flee';

const COMBAT_ACTION_ATLAS = '/mud/images/combat/combat_action_atlas_01.png';

export const COMBAT_ACTION_ICON_RECTS: Record<CombatActionIconId, AtlasIconRect> = {
  attack: { atlas: COMBAT_ACTION_ATLAS, x: 440, y: 380, width: 240, height: 240 },
  defend: { atlas: COMBAT_ACTION_ATLAS, x: 680, y: 380, width: 240, height: 240 },
  flee: { atlas: COMBAT_ACTION_ATLAS, x: 920, y: 380, width: 240, height: 240 },
};

export function getCombatActionIconRect(action: CombatActionIconId): AtlasIconRect {
  return COMBAT_ACTION_ICON_RECTS[action];
}
