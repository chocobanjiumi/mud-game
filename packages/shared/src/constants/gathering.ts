// 採集節點資料

import type { GatheringMaterialQuality, GatheringNodeDef, GatheringSkill } from '../types/gathering.js';

export const GATHERING_MATERIAL_QUALITIES: GatheringMaterialQuality[] = [
  'rough',
  'normal',
  'fine',
  'rare',
  'perfect',
];

const GATHERING_SKILL_CONFIGS: Record<GatheringSkill, {
  name: string;
  roomTags: string[];
  zoneTags: string[];
  materialIds: string[];
}> = {
  mining: {
    name: '礦脈',
    roomTags: ['mining', 'gathering'],
    zoneTags: ['cave', 'mountain', 'volcano'],
    materialIds: ['iron_ore', 'mithril_ore', 'magic_crystal', 'crystal_shard', 'golem_fragment', 'dragon_scale'],
  },
  herbalism: {
    name: '藥草叢',
    roomTags: ['gathering'],
    zoneTags: ['forest', 'swamp', 'plains'],
    materialIds: ['herb', 'nature_crystal', 'magic_crystal', 'dark_crystal', 'celestial_fragment', 'dragon_dust'],
  },
  logging: {
    name: '林木',
    roomTags: ['gathering'],
    zoneTags: ['forest', 'plains'],
    materialIds: ['elf_wood', 'beast_hide', 'spider_silk_cloth', 'nature_crystal', 'ancient_fragment', 'celestial_fragment'],
  },
  skinning: {
    name: '獵物殘骸',
    roomTags: ['gathering'],
    zoneTags: ['plains', 'forest', 'cave'],
    materialIds: ['beast_hide', 'rabbit_fur', 'snake_skin', 'crystal_scale', 'dragon_scale', 'dragon_dust'],
  },
  fishing: {
    name: '魚點',
    roomTags: ['fishing', 'gathering'],
    zoneTags: ['lake', 'river', 'coast'],
    materialIds: ['small_fish', 'blue_catfish', 'rainbow_fish', 'crystal_shrimp', 'phoenix_fish', 'celestial_jellyfish'],
  },
  archaeology: {
    name: '遺跡挖掘點',
    roomTags: ['gathering'],
    zoneTags: ['ruins', 'desert', 'cave'],
    materialIds: ['ancient_fragment', 'ancient_coin', 'rare_fossil', 'ancient_runestone', 'golem_core', 'celestial_fragment'],
  },
};

const LEVEL_BANDS = [
  [1, 10],
  [11, 20],
  [21, 30],
  [31, 40],
  [41, 50],
  [51, 60],
] as const;

const QUALITY_WEIGHTS: Record<GatheringMaterialQuality, number> = {
  rough: 45,
  normal: 30,
  fine: 16,
  rare: 7,
  perfect: 2,
};

export const GATHERING_NODE_DEFS: Record<string, GatheringNodeDef> = Object.fromEntries(
  Object.entries(GATHERING_SKILL_CONFIGS).flatMap(([skill, config]) =>
    LEVEL_BANDS.map(([levelMin, levelMax], index) => {
      const tier = index + 1;
      const materialId = config.materialIds[index];
      const node: GatheringNodeDef = {
        id: `${skill}_tier_${tier}`,
        name: `${config.name} Lv.${levelMin}-${levelMax}`,
        skill: skill as GatheringSkill,
        levelMin,
        levelMax,
        roomTags: config.roomTags,
        zoneTags: config.zoneTags,
        yields: GATHERING_MATERIAL_QUALITIES.map((quality) => ({
          itemId: materialId,
          quality,
          minQty: quality === 'perfect' ? 1 : 1,
          maxQty: quality === 'rough' || quality === 'normal' ? 3 : 2,
          weight: QUALITY_WEIGHTS[quality],
        })),
      };

      return [node.id, node];
    }),
  ),
);

export function getGatheringNodesForSkill(skill: GatheringSkill): GatheringNodeDef[] {
  return Object.values(GATHERING_NODE_DEFS).filter(node => node.skill === skill);
}
