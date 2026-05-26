import {
  ITEM_DEFS,
  generateEquipmentInstance,
  findEquipmentBaseTypes,
  toBaseEquipmentDef,
  type Character,
  type CombatLoot,
  type EquipSlot,
  type MonsterDef,
} from '@game/shared';

export type LootMonsterTier = 'normal' | 'elite' | 'boss' | 'world_boss';

export interface EquipmentDropContext {
  monster: MonsterDef;
  tier?: LootMonsterTier;
  zoneId?: string;
  character?: Pick<Character, 'classId' | 'stats'>;
  baseItemId?: string;
  sourceTags?: string[];
  random?: () => number;
}

export function rollMonsterEquipmentDrop(context: EquipmentDropContext): CombatLoot['items'][number] | null {
  const random = context.random ?? Math.random;
  const tier = context.tier ?? (context.monster.isBoss ? 'boss' : context.monster.isElite ? 'elite' : 'normal');
  const itemLevel = rollMonsterItemLevel(context.monster.level, tier, random);
  const baseDef = context.baseItemId
    ? toBaseEquipmentDef(ITEM_DEFS[context.baseItemId])
    : selectBaseEquipmentForDrop(itemLevel, random);
  if (!baseDef) return null;

  const sourceTags = Array.from(new Set([
    'monster_drop',
    tier,
    context.monster.id,
    ...(context.zoneId ? [context.zoneId] : []),
    ...(context.sourceTags ?? []),
    ...(baseDef.sourceTags ?? []),
  ]));
  const instance = generateEquipmentInstance(baseDef, {
    luk: context.character?.stats.luk,
    classId: context.character?.classId,
    itemLevel,
    droppedBy: context.monster.id,
    droppedInZone: context.zoneId,
    sourceTags,
    qualityBonus: tier === 'boss' ? 0.08 : tier === 'elite' ? 0.03 : 0,
    random,
  });

  return {
    itemId: baseDef.id,
    quantity: 1,
    itemInstanceId: instance.itemInstanceId,
    quality: instance.quality,
    itemLevel: instance.itemLevel,
    droppedBy: instance.droppedBy,
    droppedInZone: instance.droppedInZone,
    sourceTags: instance.sourceTags,
    affixes: instance.affixes,
    fixedEffects: instance.fixedEffects,
  };
}

export function rollMonsterItemLevel(monsterLevel: number, tier: LootMonsterTier, random: () => number = Math.random): number {
  const delta = tier === 'world_boss'
    ? 3 + Math.floor(random() * 3)
    : tier === 'boss'
      ? 1 + Math.floor(random() * 3)
      : tier === 'elite'
        ? Math.floor(random() * 3)
        : -1 + Math.floor(random() * 3);
  return Math.max(1, Math.min(100, monsterLevel + delta));
}

export function selectBaseEquipmentForDrop(itemLevel: number, random: () => number = Math.random, slots?: EquipSlot[]): ReturnType<typeof toBaseEquipmentDef> {
  const candidates = findEquipmentBaseTypes({
    levelMin: Math.max(1, itemLevel - 8),
    levelMax: itemLevel + 3,
  }).filter(base => !slots || slots.includes(base.slot));
  if (candidates.length === 0) return null;
  const total = candidates.reduce((sum, base) => sum + base.dropWeight, 0);
  let roll = random() * total;
  const selected = candidates.find((base) => {
    roll -= base.dropWeight;
    return roll <= 0;
  }) ?? candidates[candidates.length - 1];
  return toBaseEquipmentDef(ITEM_DEFS[selected.baseItemId]);
}
