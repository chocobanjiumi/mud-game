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
    roomTags: ['mining'],
    zoneTags: ['mining', 'cave', 'mountain', 'volcano', 'underground'],
    materialIds: ['iron_ore', 'mithril_ore', 'magic_crystal', 'crystal_shard', 'golem_fragment', 'dragon_scale'],
  },
  herbalism: {
    name: '藥草叢',
    roomTags: ['herbalism'],
    zoneTags: ['herbalism', 'forest', 'swamp', 'plains'],
    materialIds: ['herb', 'nature_crystal', 'magic_crystal', 'dark_crystal', 'celestial_fragment', 'dragon_dust'],
  },
  logging: {
    name: '林木',
    roomTags: ['logging'],
    zoneTags: ['logging', 'forest'],
    materialIds: ['elf_wood', 'beast_hide', 'spider_silk_cloth', 'nature_crystal', 'ancient_fragment', 'celestial_fragment'],
  },
  skinning: {
    name: '獵物殘骸',
    roomTags: ['skinning'],
    zoneTags: ['skinning', 'plains', 'forest', 'cave'],
    materialIds: ['beast_hide', 'rabbit_fur', 'snake_skin', 'crystal_scale', 'dragon_scale', 'dragon_dust'],
  },
  fishing: {
    name: '魚點',
    roomTags: ['fishing'],
    zoneTags: ['fishing', 'lake', 'river', 'coast'],
    materialIds: ['small_fish', 'blue_catfish', 'rainbow_fish', 'crystal_shrimp', 'phoenix_fish', 'celestial_jellyfish'],
  },
  archaeology: {
    name: '遺跡挖掘點',
    roomTags: ['archaeology'],
    zoneTags: ['archaeology', 'ruins', 'desert'],
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

const GATHERING_NODE_DESCRIPTIONS: Record<GatheringSkill, string[]> = {
  mining: [
    '淺層土坡露出帶鏽紅斑的鐵礦脈，碎石縫裡有敲鑿痕，適合用礦鎬採下基礎鍛造礦材。',
    '山壁深處閃著銀白秘銀脈線，礦面被冷霧覆住，採集時需要沿裂縫慢慢剝離礦核與碎礦砂。',
    '水晶洞壁長出淡紫魔力晶簇，晶面會回應腳步震動，採集時要避開崩裂尖端取得完整晶材。',
    '高階礦床混著透明晶片與硬化岩殼，常出現在遺跡或火山通道旁，適合敲取精細鑲嵌素材。',
    '魔像戰場與古代礦坑留下沉重構裝碎塊，石殼中夾著發光槽線，採集時要撬出可用核心片。',
    '龍脈深處的灼熱礦床殘留鱗狀紋理，岩面帶硫磺氣味，需要耐熱工具才能剝取稀有龍系素材。',
  ],
  herbalism: [
    '平原與村外草坡間長著低矮藥草，葉面有露水與淡苦香，適合徒手採下作為初階藥劑材料。',
    '森林陰影下聚集翠綠藥草叢，根部纏著細小自然晶粒，採集時要連同濕土一起鬆開並修根。',
    '魔力污染地帶的藥草叢冒出藍紫微光，葉脈會輕輕跳動，適合採作魔法藥劑與施法材料。',
    '暗影林地的黑紫花莖藏在腐葉下，採集時會滲出冷香汁液，可用於暗屬藥水或詛咒調和。',
    '高空遺跡與聖壇旁的星白藥草吸收天光，花芯像碎星閃爍，採下後適合製作高階祝福藥劑。',
    '龍息燒灼過的灰燼土中長出金紅草芽，葉緣像細小鱗片，採集時要用骨夾夾取避免燙傷。',
  ],
  logging: [
    '新手林徑旁的筆直木幹帶淡金紋路，樹皮容易剝落，適合砍取基礎木材與簡易弓柄坯料。',
    '老森林中倒伏的厚木仍保有韌性，樹脂味混著野獸氣息，採伐時可取得耐用木板與皮帶料。',
    '蛛網密林裡的樹枝被銀絲纏住，砍伐前要先割開黏絲，可收集適合輕甲與布料的纖維。',
    '自然晶簇附著在古木節疤上，斧刃敲下時會迸出綠光，適合製作自然系法杖與護符底材。',
    '古代遺跡邊緣的枯木包著符文石片，年輪中卡著碎陶與骨粉，採伐後可取得考古與修復素材。',
    '天界殘枝像白玉一樣堅硬，枝端懸著微光羽絮，需要細鋸慢慢切下供高階聖木工藝使用。',
  ],
  skinning: [
    '平原獵物倒伏處留下完整皮毛與細骨，血跡尚未乾透，適合用剝皮刀取得基礎皮革材料。',
    '野兔與小獸巢穴旁散著柔軟絨毛，草籽仍黏在毛束裡，可細心梳下用於護具內襯與縫邊。',
    '蛇類棲地的岩縫裡留著透明蛇蛻，鱗紋完整，採集時要沿背線慢慢收起避免撕裂成碎片。',
    '水晶洞穴附近的蜥蜴殘鱗折出冷光，硬度比普通皮革高，可剝取作為冰屬護片與甲面。',
    '龍族巡行路上散落厚重鱗片與燒灼皮膜，需要耐熱手套才能撬起，可作高階護甲材料。',
    '古龍戰痕旁殘留金紅鱗粉與焦黑筋膜，採集風險極高，但可取得傳說級龍系製作素材。',
  ],
  fishing: [
    '清溪與池塘邊有銀灰小魚群貼著水草游動，水面泛起細小波紋，適合用簡易魚竿採集料理魚材。',
    '夜色河灣冒出藍鯰魚氣泡，泥底被長鬚攪動，垂釣時要穩住浮標取得耐力料理材料魚肉。',
    '雨後湖面偶爾折出七色魚影，魚群只在水光轉折處靠岸，需要精準拋線才能釣起稀有魚材。',
    '水晶洞窟冷泉附近可見透明蝦影貼著石面滑行，採集時要用細網慢撈避免碰碎甲殼。',
    '火山溫泉或灼熱溪流中浮出火紅魚鱗，水面像燃燒布匹，垂釣時要使用耐熱魚線與長竿。',
    '星光海面下漂著天界水母般的光點，觸手會避開粗糙魚鉤，需要安靜收線取得傳說水產。',
  ],
  archaeology: [
    '荒地與舊路旁露出陶片與銅銹，沙土中有半埋刻痕，適合用小刷清出基礎古代碎片與錢幣。',
    '乾燥遺跡地磚下藏著古錢與封泥，採掘時要沿石縫撬開，避免破壞能辨識年代的紋章。',
    '沙丘與墓道交界處可見化石骨片，表面包著硬砂殼，需要慢慢刷開取得完整稀有標本。',
    '高階遺跡石座壓著古代符石，符文仍有微光，採掘時要記錄方位以免破壞儀式排列痕跡。',
    '失落機關室裡埋著沉重魔像核心，周圍有斷裂齒輪與石粉，採集時要先固定殘餘能量。',
    '天界廢墟的白石臺階下藏著星光碎片，沙塵中混著羽形金屑，是高階聖物修復材料來源。',
  ],
};

export const GATHERING_NODE_DEFS: Record<string, GatheringNodeDef> = Object.fromEntries(
  Object.entries(GATHERING_SKILL_CONFIGS).flatMap(([skill, config]) =>
    LEVEL_BANDS.map(([levelMin, levelMax], index) => {
      const tier = index + 1;
      const materialId = config.materialIds[index];
      const node: GatheringNodeDef = {
        id: `${skill}_tier_${tier}`,
        name: `${config.name} Lv.${levelMin}-${levelMax}`,
        description: GATHERING_NODE_DESCRIPTIONS[skill as GatheringSkill][index],
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
