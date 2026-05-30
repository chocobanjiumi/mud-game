// 物品資料

import type { EquipSlot, ItemDef, ItemRarity, WeaponType } from '../types/item.js';
import type { ClassId } from '../types/player.js';

const EQUIPMENT_TYPES = new Set(['weapon', 'armor', 'accessory']);
const OFFHAND_WEAPON_TYPES = new Set<WeaponType>(['focus', 'grimoire', 'holy_tome', 'shield']);

function equipSlotForWeaponType(weaponType: WeaponType): EquipSlot {
  return OFFHAND_WEAPON_TYPES.has(weaponType) ? 'offhand' : 'weapon';
}

function normalizeItemDefs(defs: Record<string, ItemDef>): Record<string, ItemDef> {
  return Object.fromEntries(
    Object.entries(defs).map(([id, def]) => {
      if (!EQUIPMENT_TYPES.has(def.type)) return [id, def];
      const normalized: ItemDef = {
        ...def,
        equipSlot: def.equipSlot ?? inferEquipSlot(id),
        level: def.level ?? def.levelReq,
        weaponType: def.type === 'weapon' ? def.weaponType ?? inferWeaponType(id, def) : def.weaponType,
        sourceTags: def.sourceTags ?? inferSourceTags(id, def),
        zoneTags: def.zoneTags ?? inferZoneTags(id, def),
      };
      return [id, {
        ...normalized,
        description: enrichEquipmentDescription(id, normalized),
      }];
    }),
  );
}

function inferEquipSlot(itemId: string): EquipSlot {
  if (itemId.includes('shield')) return 'offhand';
  if (itemId.includes('ring')) return 'ring';
  if (itemId.includes('earring')) return 'earring';
  if (itemId.includes('belt')) return 'belt';
  if (itemId.includes('necklace') || itemId.includes('pendant') || itemId.includes('amulet') || itemId.includes('charm') || itemId.includes('relic')) return 'necklace';
  if (itemId.includes('helm') || itemId.includes('hat') || itemId.includes('cap')) return 'head';
  if (itemId.includes('glove') || itemId.includes('gauntlet')) return 'hands';
  if (itemId.includes('boot') || itemId.includes('greave') || itemId.includes('sandal')) return 'feet';
  if (itemId.includes('armor') || itemId.includes('mail') || itemId.includes('robe') || itemId.includes('vest') || itemId.includes('garb') || itemId.includes('plate')) return 'body';
  return 'weapon';
}

function inferWeaponType(itemId: string, def: ItemDef): WeaponType {
  const haystack = `${itemId} ${def.name} ${def.description}`.toLowerCase();

  if (itemId.includes('shield')) return 'shield';
  if (haystack.includes('crossbow') || haystack.includes('十字弓') || haystack.includes('弩')) return 'crossbow';
  if (haystack.includes('bow') || haystack.includes('弓')) return 'bow';
  if (haystack.includes('staff') || haystack.includes('法杖')) return 'staff';
  if (haystack.includes('scepter') || haystack.includes('權杖')) return 'scepter';
  if (haystack.includes('wand') || haystack.includes('魔杖')) return 'wand';
  if (haystack.includes('focus') || haystack.includes('法器')) return 'focus';
  if (haystack.includes('dagger') || haystack.includes('匕首') || haystack.includes('隱匕') || haystack.includes('裂匕')) return 'dagger';
  if (haystack.includes('blade') || haystack.includes('短刃') || haystack.includes('刺劍') || haystack.includes('彎刀') || haystack.includes('鉤刃')) return 'blade';
  if (haystack.includes('spear') || haystack.includes('長矛') || haystack.includes('短槍')) return 'spear';
  if (haystack.includes('greataxe') || haystack.includes('巨斧')) return 'greataxe';
  if (haystack.includes('axe') || haystack.includes('斧') || haystack.includes('戰鎬')) return 'axe';
  if (haystack.includes('warhammer') || haystack.includes('戰錘')) return 'warhammer';
  if (haystack.includes('hammer') || haystack.includes('鎚') || haystack.includes('錘')) return 'hammer';
  if (haystack.includes('katana') || haystack.includes('太刀')) return 'katana';
  if (haystack.includes('giant_sword') || haystack.includes('戰刃') || haystack.includes('巨劍')) return 'giant_sword';
  if (haystack.includes('sword') || haystack.includes('劍')) return 'sword';
  if (haystack.includes('grimoire') || haystack.includes('魔導書') || haystack.includes('魔典')) return 'grimoire';
  if (haystack.includes('tome') || haystack.includes('聖典') || haystack.includes('祈禱書')) return 'holy_tome';

  return 'sword';
}

function inferSourceTags(itemId: string, def: ItemDef): string[] {
  const tags = new Set<string>();
  if (def.setId) tags.add('set');
  if (def.buyPrice > 0) tags.add('shop');
  if (itemId.includes('boss') || itemId.includes('dragon') || itemId.includes('abyss') || itemId.includes('god_of_war')) tags.add('boss');
  if (itemId.includes('craft') || itemId.includes('mithril')) tags.add('crafting');
  if (tags.size === 0) tags.add('drop');
  return Array.from(tags);
}

function inferZoneTags(itemId: string, def: ItemDef): string[] {
  const haystack = `${itemId} ${def.name} ${def.description} ${def.element ?? ''}`.toLowerCase();
  const tags = new Set<string>();
  if (haystack.includes('slime') || haystack.includes('wooden') || haystack.includes('cloth') || haystack.includes('leather')) tags.add('starter_village');
  if (haystack.includes('wolf') || haystack.includes('nature')) tags.add('plains');
  if (haystack.includes('shadow') || haystack.includes('dark') || haystack.includes('abyss')) tags.add('dark_forest');
  if (haystack.includes('crystal') || haystack.includes('ice') || haystack.includes('frost')) tags.add('crystal_cave');
  if (haystack.includes('flame') || haystack.includes('fire') || haystack.includes('dragon')) tags.add('volcano_zone');
  if (haystack.includes('holy') || haystack.includes('light')) tags.add('celestial_ruins');
  if (tags.size === 0) tags.add('global');
  return Array.from(tags);
}

function enrichEquipmentDescription(itemId: string, def: ItemDef): string {
  const minimum = def.rarity === 'legendary' || def.rarity === 'mythic' || def.sourceTags?.includes('boss') ? 70 : 45;
  if (countCjkChars(def.description) >= minimum) return def.description;

  const slot = formatEquipSlotLabel(def.equipSlot ?? inferEquipSlot(itemId));
  const source = formatEquipmentSource(def.sourceTags ?? inferSourceTags(itemId, def), itemId);
  const zone = formatZoneTagLabel(def.zoneTags ?? inferZoneTags(itemId, def));
  const role = formatEquipmentRole(def.stats);
  const tier = def.levelReq >= 50 ? '終局成長' : def.levelReq >= 30 ? '高階銜接' : def.levelReq >= 15 ? '中階替換' : '前期養成';
  const detail = `${source}，常見於${zone}；作為${slot}使用時偏向${role}，適合${def.levelReq}級左右的${tier}配裝，外觀材質與掉落脈絡都能在背包提示中辨識。`;
  if (minimum >= 70) {
    return `${def.description}${detail}高稀有版本還需要在 wiki 與掉落表標明取得限制、適合職業和替換時機，避免玩家只看數值而不理解用途。`;
  }
  return `${def.description}${detail}`;
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

function formatEquipSlotLabel(slot: EquipSlot): string {
  const labels: Record<EquipSlot, string> = {
    weapon: '主手武器',
    offhand: '副手裝備',
    meleeMainHand: '近戰主手',
    meleeOffHand: '近戰副手',
    rangedMainHand: '遠程主手',
    rangedOffHand: '遠程副手',
    head: '頭部防具',
    body: '身體防具',
    hands: '手部防具',
    feet: '腳部防具',
    belt: '腰部裝備',
    necklace: '項鍊飾品',
    earring: '耳環飾品',
    ring: '戒指飾品',
    accessory: '通用飾品',
    saddle: '坐騎鞍具',
  };
  return labels[slot] ?? '裝備';
}

function formatEquipmentSource(sourceTags: string[], itemId: string): string {
  if (sourceTags.includes('boss')) return '多由首領或高危遭遇取得';
  if (sourceTags.includes('set')) return '屬於套裝進度的一部分';
  if (sourceTags.includes('crafting')) return '可由鍛造或製作流程取得';
  if (sourceTags.includes('shop')) return '可從商店、軍需或交易補給取得';
  if (sourceTags.includes('quest')) return '通常綁定任務或區域委託獎勵';
  if (itemId.includes('starter') || itemId.includes('wooden')) return '多在新手訓練與基礎補給中取得';
  return '主要來自怪物掉落、寶箱或區域戰利品';
}

function formatZoneTagLabel(zoneTags: string[]): string {
  const labels: Record<string, string> = {
    starter_village: '新手村與周邊訓練區',
    plains: '翠綠平原、獵場與農路',
    dark_forest: '暗影森林與黑木林系路線',
    crystal_cave: '水晶洞窟、礦坑與寒冷地帶',
    volcano_zone: '火山、熔爐與高熱戰場',
    celestial_ruins: '天界遺跡、聖地與信仰路線',
    final_battleground: '終焉戰場與終局副本',
    dragon_valley: '龍谷與高階龍族遭遇',
    abyss_rift: '深淵裂隙與異界副本',
    global: '多個世界區域或通用掉落池',
  };
  return zoneTags.map(tag => labels[tag] ?? '對應區域').slice(0, 2).join('、') || '通用冒險路線';
}

function formatEquipmentRole(stats: ItemDef['stats']): string {
  if (!stats) return '補齊裝備欄位與基礎屬性';
  if ((stats.atk ?? 0) > 0 && ((stats.critRate ?? 0) > 0 || (stats.dex ?? 0) > 0)) return '物理爆發、命中節奏與單體擊殺';
  if ((stats.atk ?? 0) > 0) return '物理輸出、破甲與穩定普攻';
  if ((stats.matk ?? 0) > 0 && ((stats.mp ?? 0) > 0 || (stats.int ?? 0) > 0)) return '法術輸出、魔力續航與施法成長';
  if ((stats.def ?? 0) > 0 || (stats.mdef ?? 0) > 0 || (stats.hp ?? 0) > 0 || (stats.vit ?? 0) > 0) return '防禦、生命續戰與承受傷害';
  if ((stats.dodgeRate ?? 0) > 0 || (stats.luk ?? 0) > 0) return '閃避、機動與探索收益';
  return '補齊主要屬性與階段性戰力';
}

type LegacySupplementalEquipSlot = Exclude<EquipSlot,
  'meleeMainHand' | 'meleeOffHand' | 'rangedMainHand' | 'rangedOffHand' | 'saddle'
>;
type LegacyNamedSupplementalEquipSlot = Exclude<LegacySupplementalEquipSlot, 'accessory'>;

const SUPPLEMENTAL_EQUIPMENT_TARGETS: Record<LegacySupplementalEquipSlot, number> = {
  weapon: 13,
  offhand: 0,
  head: 26,
  body: 23,
  hands: 26,
  feet: 26,
  ring: 25,
  earring: 24,
  belt: 25,
  necklace: 20,
  accessory: 0,
};

const SUPPLEMENTAL_SLOT_STATS: Record<LegacyNamedSupplementalEquipSlot, keyof NonNullable<ItemDef['stats']>> = {
  weapon: 'atk',
  offhand: 'def',
  head: 'def',
  body: 'def',
  hands: 'atk',
  feet: 'dodgeRate',
  ring: 'luk',
  earring: 'int',
  belt: 'vit',
  necklace: 'str',
};

const SUPPLEMENTAL_EQUIPMENT_ID_SLUGS: Partial<Record<LegacyNamedSupplementalEquipSlot, readonly string[]>> = {
  belt: [
    'grass_rope_buckle_belt',
    'creek_stone_belt',
    'willow_woven_sash',
    'granary_studded_belt',
    'blackmoss_hidden_belt',
    'tide_sail_waist_rope',
    'minelamp_tool_belt',
    'frosthide_waistguard',
    'redrock_copper_belt',
    'silverpine_wide_belt',
    'thundergrass_knot_belt',
    'amber_bee_belt',
    'bloodsalt_ship_belt',
    'starsand_sash',
    'moonwell_white_belt',
    'charwood_buckle_belt',
    'mistharbor_lead_belt',
    'ancient_tablet_stone_belt',
    'mirrormarsh_silver_belt',
    'redforge_rivet_belt',
    'thundersteppe_bone_belt',
    'glasssand_tie_belt',
    'undercity_copper_belt',
    'gravefrost_gray_belt',
    'storm_spike_belt',
  ],
  earring: [
    'creek_pearl_earring',
    'willow_bud_earring',
    'grain_bell_earring',
    'blackmoss_ear_cuff',
    'tide_shell_ear_ornament',
    'mineral_crystal_ear_stud',
    'frostfeather_ear_drop',
    'redsand_earring',
    'silverpine_ear_cuff',
    'thundergrass_ear_drop',
    'amber_bee_wing_earring',
    'bloodsalt_bone_earring',
    'starsand_ear_pearl',
    'moonwell_earring',
    'charwood_ear_cuff',
    'mistharbor_copper_hook_earring',
    'ancient_tablet_ear_piece',
    'mirrormarsh_silver_ear_drop',
    'redforge_ear_stud',
    'thundersteppe_bone_ear_drop',
    'glasssand_mirror_earring',
    'undercity_copper_ear_piece',
    'gravefrost_ear_pearl',
    'stormfeather_ear_drop',
  ],
  necklace: [
    'creek_stone_amulet',
    'willow_leaf_pendant',
    'grain_gold_pendant',
    'blackmoss_amulet',
    'tide_pearl_necklace',
    'mineral_crystal_pendant_chain',
    'frostfeather_amulet',
    'redrock_fire_pendant',
    'silverpine_wood_amulet',
    'thundergrass_choker',
    'amber_bee_pendant',
    'bloodsalt_bone_chain',
    'starsand_night_pendant',
    'moonwell_white_pendant',
    'charwood_ash_amulet',
    'mistharbor_compass_pendant',
    'ancient_tablet_fragment_amulet',
    'mirrormarsh_water_pendant',
    'redforge_iron_amulet',
    'thundersteppe_bone_amulet',
  ],
  ring: [
    'creeklight_copper_ring',
    'willow_leaf_ring',
    'grain_gold_ring',
    'blackmoss_hidden_ring',
    'tide_pearl_ring',
    'minelamp_iron_ring',
    'frostpattern_silver_ring',
    'redrock_fire_ring',
    'silverpine_wood_ring',
    'thundergrass_wrap_ring',
    'amber_bee_ring',
    'bloodsalt_red_ring',
    'starsand_night_ring',
    'moonwell_white_ring',
    'charwood_black_ring',
    'mistharbor_lead_ring',
    'ancient_tablet_rune_ring',
    'mirrormarsh_water_ring',
    'redforge_iron_ring',
    'thundersteppe_copper_ring',
    'glasssand_bright_ring',
    'undercity_scale_ring',
    'gravefrost_bone_ring',
    'stormneedle_ring',
    'blackwood_charcoal_ring',
  ],
  hands: [
    'hemp_rope_handguards',
    'creekstone_knuckles',
    'willow_branch_gloves',
    'granary_iron_bracers',
    'blackmoss_claw_gloves',
    'tide_rope_bracers',
    'mine_spike_gauntlets',
    'frosthide_finger_guards',
    'redrock_bracers',
    'silverpine_palmguards',
    'thundergrass_arm_wraps',
    'amber_finger_gauntlets',
    'bloodsalt_claw_gauntlets',
    'starsand_cuff_guards',
    'moonwell_white_gloves',
    'charwood_armguards',
    'mistharbor_hook_gloves',
    'ancient_tablet_palmguards',
    'mirrormarsh_wet_gloves',
    'redforge_iron_gauntlets',
    'thundersteppe_buckle_bracers',
    'glasssand_finger_guards',
    'undercity_copper_gauntlets',
    'gravefrost_bone_bracers',
    'storm_iron_fists',
    'blackwood_hunter_gloves',
  ],
  feet: [
    'grass_path_short_boots',
    'creekstone_tread_boots',
    'willow_shadow_light_boots',
    'granary_heavy_boots',
    'blackmoss_stealth_boots',
    'tide_rope_water_boots',
    'mine_spike_heavy_boots',
    'frosthare_fur_boots',
    'redrock_tread_boots',
    'silverpine_snowboots',
    'thundergrass_swift_boots',
    'amber_forest_boots',
    'bloodsalt_ship_boots',
    'starsand_walking_boots',
    'moonwell_soft_boots',
    'charwood_tread_boots',
    'mistharbor_oil_boots',
    'ancient_tablet_heavy_boots',
    'mirrormarsh_wet_boots',
    'redforge_iron_boots',
    'thundersteppe_swift_boots',
    'glasssand_walking_shoes',
    'undercity_copper_boots',
    'gravefrost_gray_boots',
    'storm_spike_boots',
    'blackwood_hunter_boots',
  ],
  head: [
    'grass_rope_leather_helm',
    'creekstone_guard_cap',
    'willow_shadow_hood',
    'granary_iron_helm',
    'blackmoss_patrol_helm',
    'tide_salt_headscarf',
    'minelamp_browguard',
    'frostneedle_fur_cap',
    'redsand_face_helm',
    'silverpine_browguard',
    'thunderfeather_cowl',
    'amber_bee_helm',
    'saltbone_circlet',
    'starsplinter_hood',
    'moonwell_white_crown',
    'charwood_faceguard',
    'mistharbor_wide_hat',
    'ancient_tablet_browband',
    'mirrormarsh_veil',
    'redforge_iron_helm',
    'thundersteppe_horn_cap',
    'glasssand_facewrap',
    'undercity_copper_crown',
    'gravefrost_helm',
    'storm_spire_helm',
    'blackwood_hunter_hat',
  ],
  body: [
    'hemp_lined_leather_armor',
    'creek_reed_breastplate',
    'willow_fence_vest',
    'grainhusk_padded_armor',
    'blackmoss_soft_armor',
    'tide_sail_chestwear',
    'mineslag_chainmail',
    'frosthare_fur_armor',
    'redsand_scale_armor',
    'silverpine_long_armor',
    'thundergrass_mantle_armor',
    'amber_dragonfly_armor',
    'bloodsalt_scale_garb',
    'starsand_robe',
    'moonwell_white_robe',
    'charwood_breastplate',
    'mistharbor_oilcoat',
    'ancient_tablet_plate',
    'mirrormarsh_water_garb',
    'redforge_heavy_armor',
    'thundersteppe_leather_armor',
    'glasssand_longcoat',
    'undercity_copper_garb',
  ],
};

interface SupplementalEquipmentArt {
  name: string;
  description: string;
}

const SUPPLEMENTAL_EQUIPMENT_ART: Record<LegacyNamedSupplementalEquipSlot, SupplementalEquipmentArt[]> = {
  weapon: [
    { name: '溪鐵短刃', description: '溪床黑鐵打成的短刃，刃背留著河砂亮紋，麻繩握柄沾有青草與冷水氣味。' },
    { name: '柳木獵刀', description: '柳木柄上纏著舊皮條的獵刀，刀尖薄而利，適合在平原草叢間迅速出手。' },
    { name: '田埂銅斧', description: '農場銅斧改磨成戰斧，斧面有穀倉火痕，木柄底端嵌著防裂鐵釘。' },
    { name: '黑松彎刀', description: '黑松炭火淬過的彎刀，刃口泛著煙灰藍光，揮動時帶出淡淡樹脂味。' },
    { name: '潮玻刺劍', description: '潮汐玻砂磨出的細刺劍，護手鑲著小貝殼，劍身在月光下像濕亮水線。' },
    { name: '礦燈鎚斧', description: '礦坑鐵鎚與斧刃拼鍛成的重武器，側面掛著裂紋礦燈片，敲擊時有悶響。' },
    { name: '霜喙長矛', description: '霜鳥喙骨綁在白木矛桿前端，矛尖覆著細冰紋，刺入時會留下冷白痕跡。' },
    { name: '赤岩戰鎬', description: '赤岩礦鎬改成的戰器，鎬尖包著紅鐵箍，揮下時會擦出短暫火星。' },
    { name: '銀松斬刀', description: '銀松木柄承托寬厚刀身，刃面刻著防滑霜紋，適合在濕雪與山路間交戰。' },
    { name: '雷草短槍', description: '槍桿以雷草纖維纏緊，青銅槍頭有細小電痕，靠近雨水時會微微發麻。' },
    { name: '琥珀弦刃', description: '琥珀森林獵人使用的弦刃，背脊嵌著樹脂珠，拉斬時會發出低低蜂鳴。' },
    { name: '血鹽鉤刃', description: '血鹽海岸船匠鍛出的鉤刃，刃根殘留紅鹽結晶，能在盾縫間拉出破口。' },
    { name: '星砂儀刃', description: '星砂混入鋼中的儀式短刃，刃面浮著細小銀點，像夜空被壓進金屬裡。' },
  ],
  offhand: [],
  head: [
    { name: '草繩皮盔', description: '硬皮帽沿用草繩縫緊，帽頂壓著曬乾苔葉，能擋住枝條與碎石。' },
    { name: '溪石護帽', description: '布帽前額縫著扁平溪石，石面被水磨得發亮，邊緣有藍灰色麻線。' },
    { name: '柳影兜帽', description: '深綠兜帽以柳葉染布裁成，帽緣垂著細繩，可遮住平原午後刺眼日光。' },
    { name: '穀倉鐵盔', description: '舊穀倉鐵片拼成的圓盔，內襯是麥秸與羊毛，外殼仍有火燎黑痕。' },
    { name: '黑苔巡盔', description: '巡林人留下的窄盔，盔側黏著黑苔，額前刻著防止迷路的短符。' },
    { name: '潮鹽頭巾', description: '粗帆布頭巾浸過鹽水後風乾，布面有白色鹽霜，可抵擋海風砂粒。' },
    { name: '礦燈額甲', description: '額甲中央嵌著破礦燈玻片，黑鐵邊框壓住皮帽，能反射洞壁微光。' },
    { name: '霜針皮帽', description: '白兔皮縫成的尖帽，帽緣插著霜草細針，呼吸間會凝出淡淡白霧。' },
    { name: '赤沙面盔', description: '赤岩沙匠打磨的半面盔，鼻梁覆著紅銅片，眼縫狹窄以避開熱風。' },
    { name: '銀松護額', description: '銀松木片與薄鐵箍組成的護額，木紋中滲著松脂，帶有冷冽清香。' },
    { name: '雷羽風帽', description: '風帽外側縫著灰藍雷羽，雨天會貼緊肩背，讓佩戴者聽見遠處悶雷。' },
    { name: '琥珀蜂盔', description: '蜂蠟封邊的輕盔鑲著琥珀片，光線穿過時會在臉側映出金色斑點。' },
    { name: '鹽骨額冠', description: '魚骨與鹽白甲片串成的額冠，繩結潮濕發硬，帶著海洞深處的腥冷。' },
    { name: '星屑兜帽', description: '深藍兜帽上灑著銀色星屑粉，帽內縫有薄薄遮光布，適合夜間行走。' },
    { name: '月井白冠', description: '白革小冠以月井水洗過，冠面有淡淡水紋，靠近暗處時泛起柔光。' },
    { name: '焦木護面', description: '焦木薄片拼成的護面，眼口刻得很窄，邊緣用黑線反覆縫牢。' },
    { name: '霧港寬帽', description: '霧港水手戴的寬帽，帽簷壓著鉛珠，能在濕風中保持低垂輪廓。' },
    { name: '古碑額環', description: '額環嵌著小塊古碑碎石，石面殘存半枚符號，夜裡會發出微弱灰光。' },
    { name: '鏡沼紗罩', description: '半透明紗罩覆在輕帽外，紗面像沼水倒影般微微晃動，難以看清表情。' },
    { name: '紅爐鐵盔', description: '紅爐邊鍛出的厚盔，頂脊有短短黑煙孔，內側襯著防燙羊皮。' },
    { name: '雷原角帽', description: '短角皮帽以雷原獸骨固定，帽頂有青白焦痕，摸上去像乾草般粗糙。' },
    { name: '玻砂遮面', description: '琉璃沙丘行者的遮面，細玻砂嵌在布層中，轉頭時會閃出碎光。' },
    { name: '地城銅冠', description: '地下城邦銅匠製作的小冠，齒邊像齒輪，冠內藏著一圈黑絨襯墊。' },
    { name: '墓霜兜盔', description: '墓園冷霜覆過的灰盔，盔沿掛著小銅鈴，走動時聲音低得像嘆息。' },
    { name: '風暴尖盔', description: '尖盔外層覆著風暴高原薄鐵，頂端避雷針彎曲，仍留著焦黑裂紋。' },
    { name: '黑木獵帽', description: '黑木獵人壓低帽簷的皮帽，側邊插著無焰短燈，帽帶沾滿炭粉。' },
  ],
  body: [
    { name: '麻襯皮甲', description: '厚麻布襯在舊皮甲內側，胸前補著兩塊鹿皮，縫線粗糙但牢靠。' },
    { name: '溪蘆胸甲', description: '溪蘆夾板排成魚鱗狀胸甲，外層刷過樹脂，彎腰時會發出輕響。' },
    { name: '柳籬護衣', description: '柳枝細條編入皮衣兩側，像一圈可彎折的籬笆，能卸開斜向砍擊。' },
    { name: '穀殼棉甲', description: '棉甲裡填入乾穀殼與羊毛，表面縫著褐色粗布，帶有曬穀場氣味。' },
    { name: '黑苔軟甲', description: '黑苔浸染的軟甲貼著身形，肩部覆有薄木片，能在林影中降低輪廓。' },
    { name: '潮帆胸衣', description: '破帆布與魚皮縫成的胸衣，繩扣結實，布面殘留白鹽與淡淡焦油味。' },
    { name: '礦渣鎖甲', description: '礦渣鐵環串成的短鎖甲，胸口掛著一片裂晶，用來照亮狹窄礦道。' },
    { name: '霜兔絨甲', description: '霜兔絨襯在淺灰皮甲內，外側綁著骨扣，呼吸時胸口會凝出細小冰珠。' },
    { name: '赤砂鱗甲', description: '赤砂鐵片層層覆在胸前，邊緣磨得圓滑，走動時像乾石互相摩擦。' },
    { name: '銀松長甲', description: '銀松木片與皮革交疊成長甲，背部縫著松針紋，聞起來有冷杉味。' },
    { name: '雷草披甲', description: '雷草纖維編進肩披，胸甲上有藍白焦痕，雨中會發出很輕的噼啪聲。' },
    { name: '琥珀蜻甲', description: '琥珀薄片嵌在輕甲胸口，像蜻翼般半透明，內部封著細小花粉。' },
    { name: '血鹽鱗衣', description: '血鹽海獸鱗片縫成的短衣，鱗面呈暗紅色，乾燥時仍有鹹腥氣。' },
    { name: '星砂法衣', description: '深藍法衣下擺壓著星砂線，行走時會拖出細微銀光，袖口縫著夜色絲帶。' },
    { name: '月井白袍', description: '白袍以月井水漂洗，胸前繡著淡銀水紋，布料在暗處像濕石般發亮。' },
    { name: '焦木胸甲', description: '焦木板與黑鐵鉚釘固定成胸甲，裂縫中殘留灰粉，貼近時有炭火味。' },
    { name: '霧港油衣', description: '霧港水手的長油衣，外層塗著防水魚油，銅扣被海霧磨成暗綠色。' },
    { name: '古碑板甲', description: '古碑碎板嵌進皮甲胸口，碑文斷裂卻仍有重量，像背著一段沉默誓詞。' },
    { name: '鏡沼水衣', description: '鏡沼採集者穿的水衣，布面覆著薄薄銀泥，能把火光映成模糊倒影。' },
    { name: '紅爐重甲', description: '紅爐鐵匠打造的短重甲，胸口有三道散熱槽，邊緣帶著灼黑錘痕。' },
    { name: '雷原皮甲', description: '雷原獸皮鞣成的護甲，肩帶綴著銅片，奔跑時會發出乾雷般的低響。' },
    { name: '玻砂長衣', description: '琉璃沙丘長衣夾著細玻砂，外表粗糙卻會折光，像一片移動熱浪。' },
    { name: '地城銅衣', description: '地下城邦銅片縫成的護衣，胸前刻有市場秤記，內襯柔軟黑絨。' },
  ],
  hands: [
    { name: '麻繩護手', description: '粗麻繩一圈圈纏在皮護手外，掌心縫著舊布，握劍時不易滑脫。' },
    { name: '溪石拳套', description: '拳套指節鑲著磨圓溪石，皮面帶著水漬，擊中時有沉悶石響。' },
    { name: '柳枝手套', description: '薄皮手套背面縫著柳枝片，能彎折卸力，指尖保留採草用的靈活度。' },
    { name: '穀倉鐵腕', description: '穀倉門鉸改成的鐵腕甲，邊緣有釘孔，內側墊著褐色粗布，適合農場與平原低階戰鬥中格擋短兵，來源與外觀都能對上穀場怪物掉落。' },
    { name: '黑苔爪套', description: '黑苔覆在爪形護手外，短刃藏於指側，出手時像樹影忽然裂開。' },
    { name: '潮繩護腕', description: '潮濕船繩編成的護腕，繩結壓著小貝片，能抵住魚叉與短刀。' },
    { name: '礦釘手甲', description: '礦釘排列在手甲指節上，黑鐵掌背刻著號碼，像從舊升降機拆下。' },
    { name: '霜皮指套', description: '霜皮指套柔軟貼手，指尖覆著白骨片，碰到金屬時會留下一層薄霜。' },
    { name: '赤岩腕甲', description: '赤岩薄片鉚在腕甲外側，紅砂填滿縫隙，格擋時會擦出乾裂火星。' },
    { name: '銀松護掌', description: '銀松木掌片覆在手套外，木紋含著松脂，能穩住弓弦與短刃。' },
    { name: '雷草臂纏', description: '雷草纖維纏成的臂帶，青銅扣上有電焦紋，揮擊時會震動發麻。' },
    { name: '琥珀指鎧', description: '琥珀小片包住指背，內裡封著飛蟲影子，握拳時會反射蜂蜜般金光。' },
    { name: '血鹽爪手', description: '血鹽浸過的爪形手甲，刃端泛紅，掌心皮革帶著乾硬海鹽。' },
    { name: '星砂袖扣', description: '星砂線固定的袖扣護手，銀點沿手背排成短星圖，施法時微微旋亮。' },
    { name: '月井白手', description: '白革手套浸過月井水，指縫繡著銀線，觸碰暗物時會亮出淡淡水紋。' },
    { name: '焦木臂甲', description: '焦木片與黑鐵環拼成臂甲，表面有燒裂紋，握緊時落下細灰。' },
    { name: '霧港鉤套', description: '霧港搬貨工用的鉤套改成護手，掌根藏著短鉤，皮革浸滿鹹霧。' },
    { name: '古碑掌甲', description: '掌甲嵌著小塊古碑，符紋殘缺卻冰冷沉重，適合推開危險石門，也能作遺跡探索時的穩定護手，常由古代遺跡守衛掉落。' },
    { name: '鏡沼濕手', description: '鏡沼濕皮縫成的手套，表面像沾著水膜，能在泥地裡抓住滑物。' },
    { name: '紅爐鐵手', description: '紅爐旁鍛出的厚手甲，指節粗大，邊緣仍留有錘打後的暗紅斑。' },
    { name: '雷原扣腕', description: '雷原銅扣固定的腕帶，扣面刻有草原閃電紋，奔跑時貼著脈搏震動。' },
    { name: '玻砂指套', description: '玻砂磨過的薄指套，指尖透明而鋒利，適合在熱風裡翻找細小遺物。' },
    { name: '地城銅手', description: '地下城邦銅匠打造的手甲，齒輪狀護片覆住手背，轉腕時會輕響。' },
    { name: '墓霜骨腕', description: '骨片與灰皮繫成的護腕，表面覆著墓霜，貼近耳邊能聽見細小低語。' },
    { name: '風暴鐵拳', description: '風暴高原鐵拳套，指節鑲著避雷銅釘，擊中硬物時會閃出藍白光。' },
    { name: '黑木獵手', description: '黑木獵人的半指手套，指腹抹著炭粉，能安靜拉弓或拈起陷阱線。' },
  ],
  feet: [
    { name: '草徑短靴', description: '短靴底部縫著乾草與薄皮，踏過泥地時聲音很輕，鞋面有補丁。' },
    { name: '溪石踏靴', description: '靴底嵌著扁溪石，能踩穩濕滑河岸，鞋跟仍帶著清水磨痕。' },
    { name: '柳影輕靴', description: '柳葉染成的輕靴貼合腳踝，鞋側縫著細枝紋，奔跑時像草影掠過。' },
    { name: '穀場厚靴', description: '厚靴以牛皮與粗布縫成，靴尖包著鐵皮，常帶著乾土與麥殼。' },
    { name: '黑苔潛靴', description: '靴底覆著黑苔與軟皮，踩在落葉上幾乎無聲，適合林間巡行。' },
    { name: '潮繩水靴', description: '水靴外層纏著船繩，靴面覆鹽白斑點，踏上海藻也不容易滑倒。' },
    { name: '礦釘重靴', description: '重靴底下打滿礦釘，皮面沾著黑粉，能牢牢咬住斜坡碎石。' },
    { name: '霜兔絨靴', description: '霜兔絨鋪在靴內，外層用白皮包覆，靴口掛著細小防風骨扣。' },
    { name: '赤岩踏靴', description: '赤岩皮靴底部夾著紅鐵片，踏過熱砂時會留下短暫焦印。' },
    { name: '銀松雪靴', description: '雪靴底面嵌著銀松木條，能分散重量，靴側散出淡淡松脂香。' },
    { name: '雷草快靴', description: '雷草纖維綁緊靴筒，步伐加快時纖維會微亮，像細電沿腿部游走。' },
    { name: '琥珀林靴', description: '林靴鞋跟封著琥珀粒，踩過樹根時發出乾淨脆響，不易被藤蔓纏住。' },
    { name: '血鹽船靴', description: '船靴皮面被血鹽染成暗紅，靴底粗糙，適合在濕滑甲板上站穩。' },
    { name: '星砂行靴', description: '行靴邊緣縫著星砂線，踏入暗處時鞋底會亮出細碎銀點。' },
    { name: '月井軟靴', description: '白革軟靴以月井水洗淨，靴尖淡亮，踩過水面會留下圓形漣漪。' },
    { name: '焦木踏靴', description: '焦木薄片嵌在靴底兩側，行走時落下一點炭灰，卻能抵住尖石。' },
    { name: '霧港油靴', description: '霧港水手油靴塗著暗色魚油，靴筒高而柔軟，銅扣被海霧染成綠色。' },
    { name: '古碑重靴', description: '重靴鞋面壓著古碑碎片，步伐沉穩，像每一步都踩在舊誓言上。' },
    { name: '鏡沼濕靴', description: '濕靴外層覆著銀泥，鞋底寬平，能在淺沼中留下模糊倒影。' },
    { name: '紅爐鐵靴', description: '紅爐鐵靴前端包著厚鐵，鞋底有散熱孔，靠近火源時會泛暗紅光。' },
    { name: '雷原疾靴', description: '疾靴以雷原獸筋縫緊，靴跟嵌著青銅片，奔跑時像敲擊遠雷。' },
    { name: '玻砂行履', description: '玻砂行履外表粗糙，鞋面藏著細小鏡片，能遮去熱風中的腳步影子。' },
    { name: '地城銅靴', description: '銅靴側邊有齒形護片，鞋底包著黑膠皮，踏在石階上聲音短促。' },
    { name: '墓霜灰靴', description: '灰靴邊緣結著墓霜，靴口掛一圈細骨珠，走動時像遠處骨鈴。' },
    { name: '風暴釘靴', description: '釘靴底部有避雷銅釘，適合攀登濕滑高原石脊，鞋跟留著焦痕。' },
    { name: '黑木獵靴', description: '黑木獵靴用炭皮染黑，靴底柔軟，能在枯枝間踏出極輕聲響。' },
  ],
  ring: [
    { name: '溪光銅戒', description: '銅戒表面磨出溪水般亮紋，戒內刻著簡短祝詞，戴上後指尖微涼。' },
    { name: '柳葉細戒', description: '細戒塑成柳葉形，葉脈鑲著綠粉，轉動時有淡淡草木香。' },
    { name: '穀金圓戒', description: '圓戒以舊穀倉金釘重鑄，外緣刻著麥穗，像一圈乾暖日光。' },
    { name: '黑苔隱戒', description: '暗綠戒面覆著薄苔，邊緣低調無光，適合藏在手套陰影下。' },
    { name: '潮珠指環', description: '指環托著一枚小潮珠，珠內有白浪紋，靠近海水時會輕輕震動。' },
    { name: '礦燈鐵戒', description: '黑鐵戒面嵌著微亮礦燈玻片，像把礦道深處的一點光扣在指上。' },
    { name: '霜紋銀戒', description: '銀戒表面爬滿霜枝紋，戴久後會在指節留下淡淡冰涼觸感。' },
    { name: '赤岩火戒', description: '火戒以赤岩粉封邊，戒面有橙紅裂紋，像尚未冷卻的細小熔石。' },
    { name: '銀松木戒', description: '銀松木芯包在薄銀外殼中，戒內散著松脂香，表面有細密年輪。' },
    { name: '雷草纏戒', description: '雷草纖維纏成戒圈，青銅結扣帶有電焦痕，雨夜會閃一瞬藍光。' },
    { name: '琥珀蜂戒', description: '琥珀戒面封著半片蜂翼，光照時像有金色粉塵在其中漂浮。' },
    { name: '血鹽紅戒', description: '暗紅鹽晶鑲在骨戒上，晶面粗糙，握拳時能感到鹽粒刺痛。' },
    { name: '星砂夜戒', description: '夜色金屬戒上撒著星砂，轉動時銀點會沿外緣慢慢移動。' },
    { name: '月井白戒', description: '白石戒面像被水長年沖刷，內側刻著月井波紋，觸感溫和。' },
    { name: '焦木黑戒', description: '焦木戒圈外包薄鐵，表面有燒裂線，聞起來像雨後熄滅的火堆。' },
    { name: '霧港鉛戒', description: '鉛灰戒面嵌著小羅盤片，指針不指北，只在霧起時微微偏轉，是霧港水手用來辨識潮向的護符，也能提示渡船與濃霧航路。' },
    { name: '古碑符戒', description: '符戒鑲著碎碑石，石面只有半個字，夜裡會浮出淡淡灰光，常被遺跡巡查者用來穩定微弱符文，適合探索封印房間。' },
    { name: '鏡沼水戒', description: '水戒像一圈凝住的銀泥，戒面能映出不太準確的倒影。' },
    { name: '紅爐鐵戒', description: '厚鐵戒由紅爐冷卻後打成，外緣有錘痕，靠近火源時溫度上升。' },
    { name: '雷原銅戒', description: '銅戒刻著草原閃電紋，戴在手上時會隨脈搏傳來細小震感。' },
    { name: '玻砂亮戒', description: '玻砂壓成的透明戒面有許多氣泡，轉動時會折出刺眼碎光。' },
    { name: '地城秤戒', description: '戒面刻著地下城邦秤記，內側藏一點黑絨，用來保護冰冷銅邊。' },
    { name: '墓霜骨戒', description: '骨戒外層覆著灰白霜紋，戒面凹痕像未完成的墓碑名字。' },
    { name: '風暴針戒', description: '針戒頂端立著短小避雷尖，雷雲靠近時會發出幾不可聞的嗡鳴。' },
    { name: '黑木炭戒', description: '炭黑木戒握在掌心會留下淡灰，戒面刻著獵人用來辨路的短線。' },
  ],
  earring: [
    { name: '溪珠耳墜', description: '小溪珠垂在銅鉤下，珠面有水磨亮點，走動時像水滴輕碰石面。' },
    { name: '柳芽耳環', description: '耳環做成嫩柳芽形，綠釉邊緣很薄，會在晨光裡泛出柔亮色。' },
    { name: '穀鈴耳墜', description: '小銅鈴包在麥穗形外殼中，聲音很低，像遠處穀場風鈴。' },
    { name: '黑苔耳扣', description: '暗色耳扣覆著乾苔粉，幾乎不反光，邊緣有一圈細小木刺。' },
    { name: '潮貝耳飾', description: '薄貝片串成耳飾，背面留著海砂刮痕，晃動時有細微潮聲。' },
    { name: '礦晶耳釘', description: '礦晶耳釘呈淡藍色，晶心有一點燈火般的亮斑，靠近石壁時更明顯。' },
    { name: '霜羽耳墜', description: '白霜羽垂在銀線下，羽梗覆有冰粉，呼吸靠近時會結成小霧。' },
    { name: '赤砂耳環', description: '赤砂玻粒鑲成的耳環，表面粗糙，轉動時像熱沙閃出紅光。' },
    { name: '銀松耳扣', description: '銀松木耳扣外包薄銀，木紋細密，帶著高山冷杉的清香。' },
    { name: '雷草耳墜', description: '雷草繩結垂著小銅片，雷雨前會輕輕震動，像在耳畔提醒風向。' },
    { name: '琥珀蜂翼', description: '半透明琥珀裡封著蜂翼紋路，耳墜在光中像一滴凝固蜂蜜。' },
    { name: '血鹽耳骨', description: '魚骨耳飾浸過血鹽，呈暗紅色，骨節間綁著細細黑線。' },
    { name: '星砂耳珠', description: '深藍耳珠裡有銀點漂浮，轉頭時像一小片夜空在耳側流動。' },
    { name: '月井耳環', description: '白石耳環磨成水滴形，表面有淡淡月紋，貼近皮膚時微微發涼。' },
    { name: '焦木耳扣', description: '焦木耳扣以黑鐵固定，邊緣有細裂，聞起來像剛熄滅的木柴。' },
    { name: '霧港銅鈎', description: '銅鈎耳飾取自霧港舊船具，鉤尖磨鈍，仍帶著鹹霧與油布味。' },
    { name: '古碑耳片', description: '耳片由古碑薄屑磨成，符痕只剩半筆，夜裡會泛出冷灰色。' },
    { name: '鏡沼銀墜', description: '銀墜表面像沼水一樣晃動，倒影總比真實動作慢一瞬。' },
    { name: '紅爐耳釘', description: '紅爐鐵珠打成的耳釘，表面有暗紅火斑，摸上去帶著餘溫。' },
    { name: '雷原骨墜', description: '雷原獸骨磨成耳墜，骨面刻著閃電紋，風大時會敲出乾脆聲。' },
    { name: '玻砂耳鏡', description: '小玻鏡鑲在耳飾中央，鏡面有熱風造成的波紋，反光銳利。' },
    { name: '地城銅片', description: '地下城邦銅片耳飾刻著小小市印，邊緣被長年摩擦得光滑。' },
    { name: '墓霜耳珠', description: '灰白耳珠像小墓燈，表面有霜點，晃動時發出低沉空響。' },
    { name: '風暴羽墜', description: '風暴鳥羽與銅線串成耳墜，羽尖焦黑，雷雲低垂時會豎起。' },
  ],
  belt: [
    { name: '草繩扣帶', description: '草繩與舊皮縫成的扣帶，銅扣磨得發亮，常掛著小刀與乾糧袋。' },
    { name: '溪石腰帶', description: '腰帶前端嵌著扁溪石，皮面有水痕，能壓穩藥瓶與短刃。' },
    { name: '柳編束帶', description: '柳枝細條編入束帶兩側，柔韌不易斷，扣環散著淡淡樹皮味。' },
    { name: '穀倉釘帶', description: '舊穀倉釘排在皮帶外側，釘頭磨平，像一串暗褐小盾。' },
    { name: '黑苔隱帶', description: '暗綠隱帶表面覆著乾苔粉，扣環不反光，適合在林地收束披風。' },
    { name: '潮帆腰索', description: '潮帆布與船索縫成腰索，末端掛著小貝扣，濕透後仍很結實。' },
    { name: '礦燈工具帶', description: '工具帶上有礦燈鉤、鐵環與裂晶袋，皮面被礦粉染成深灰。' },
    { name: '霜皮束腰', description: '束腰內襯霜兔皮，外側綁著骨扣，能把寒風擋在厚衣之外。' },
    { name: '赤岩銅帶', description: '赤岩銅扣帶著紅砂刮痕，皮帶邊緣經火烤硬化，觸感粗糙。' },
    { name: '銀松寬帶', description: '寬帶嵌著銀松木片，木片細長，能分散腰間裝備的重量。' },
    { name: '雷草結帶', description: '雷草纖維打成三重結，銅扣有電焦痕，拉緊時會發出細微震動。' },
    { name: '琥珀蜂帶', description: '蜂蠟封邊的腰帶嵌著小琥珀，扣眼周圍有金色粉末殘痕。' },
    { name: '血鹽船帶', description: '暗紅船帶以血鹽硬化，銅環上掛著短繩，常用來固定登船鉤。' },
    { name: '星砂束帶', description: '束帶邊緣縫有星砂線，夜裡像一條細銀河繞在腰間。' },
    { name: '月井白帶', description: '白革腰帶以月井水擦洗，扣面刻著圓形水紋，表面潔淨得不沾塵。' },
    { name: '焦木扣帶', description: '焦木片壓在黑皮帶外，扣環厚重，邊緣會落下極細炭粉。' },
    { name: '霧港鉛帶', description: '鉛灰腰帶帶著油布味，暗銅扣沉重，能在濕風裡壓住長衣下襬。' },
    { name: '古碑石帶', description: '石帶鑲著幾片古碑碎屑，符痕斷續，走動時會互相碰出鈍響。' },
    { name: '鏡沼銀帶', description: '銀泥塗在腰帶表面，光線下像水膜晃動，扣環映不出清楚影像。' },
    { name: '紅爐鉚帶', description: '紅爐鉚釘一排排固定在厚皮上，鉚頭有錘痕，靠近火源時微熱。' },
    { name: '雷原骨帶', description: '雷原獸骨片串成腰帶外沿，骨片刻著短閃電紋，奔跑時敲擊作響。' },
    { name: '玻砂繫帶', description: '玻砂細片縫在繫帶末端，行走時反光細碎，像熱風中的沙線。' },
    { name: '地城銅帶', description: '地下城邦銅帶刻著秤記與齒輪邊，內襯黑絨，不會磨傷腰側。' },
    { name: '墓霜灰帶', description: '灰帶上覆著冷霜般的白粉，骨扣像小墓碑，扣緊時發出短促脆聲。' },
    { name: '風暴釘帶', description: '釘帶嵌著避雷銅釘，皮面有雨水沖出的深色紋路，適合攀行高地。' },
  ],
  necklace: [
    { name: '溪石護符', description: '扁溪石鑽孔後串成護符，石面有水磨亮痕，貼在胸口微微發涼。' },
    { name: '柳葉墜飾', description: '柳葉形綠石墜在細繩下，葉脈刻得很深，像剛從枝頭摘下。' },
    { name: '穀金小墜', description: '小墜以舊金釘重鑄，外形像麥粒，表面留著溫暖的黃銅光。' },
    { name: '黑苔護符', description: '黑苔包住的木片護符，繩結粗糙，靠近樹影時顏色會變得更暗。' },
    { name: '潮珠項鍊', description: '一串潮珠與細貝殼編成項鍊，珠內有白浪紋，晃動時像聽見海聲。' },
    { name: '礦晶墜鏈', description: '裂晶懸在黑鐵細鏈中央，晶內有礦燈般的微光，照出胸前一小圈藍影。' },
    { name: '霜羽護符', description: '霜羽與白骨片串成護符，羽尖結著細冰粉，貼近皮膚仍不融化。' },
    { name: '赤岩火墜', description: '赤岩小石包在銅爪中，石心有暗紅裂紋，像一點被封住的爐火。' },
    { name: '銀松木符', description: '銀松木片刻成護符，年輪細密，繩結帶著清冷松脂香。' },
    { name: '雷草項圈', description: '雷草纖維編成細項圈，前端繫著小銅片，雷雨前會貼著喉間震動。' },
    { name: '琥珀蜂墜', description: '蜂蜜色琥珀墜中封著一點花粉，光照時像有微小翅影閃過。' },
    { name: '血鹽骨鏈', description: '骨鏈浸過血鹽後呈暗紅色，每節骨片上都有海風磨出的白邊。' },
    { name: '星砂夜墜', description: '夜色石墜裡嵌著星砂，黑底銀點密集，像一小塊被切下的星空。' },
    { name: '月井白墜', description: '白石水滴墜經月井水洗亮，表面映著淡銀波紋，貼身時平穩溫和。' },
    { name: '焦木灰符', description: '焦木片護符以黑線穿過，符面有燒裂紋，聞起來像冷掉的篝火。' },
    { name: '霧港羅盤墜', description: '小羅盤墜在鉛灰鏈上，指針被霧氣腐蝕，只會在潮聲裡緩慢偏轉，適合霧港航路與渡船任務佩戴，也能作海關線索。' },
    { name: '古碑碎符', description: '古碑碎片磨成方墜，殘缺符號橫過正面，摸起來冰冷沉重。' },
    { name: '鏡沼水墜', description: '銀泥封成的水滴墜，內部倒影始終晃動，像藏著一小片沼水。' },
    { name: '紅爐鐵符', description: '紅爐鐵片打成護符，外緣有暗紅錘痕，靠近火焰會微微發亮。' },
    { name: '雷原骨符', description: '雷原獸骨刻成護符，刻線填著青銅粉，風起時會貼著胸口低鳴。' },
  ],
};

const SUPPLEMENTAL_WEAPON_IDS = [
  'creek_iron_blade',
  'willow_hunting_blade',
  'field_copper_axe',
  'blackpine_curved_blade',
  'tidalglass_rapier_blade',
  'minelamp_greataxe',
  'frostbeak_spear',
  'redrock_warpick_axe',
  'silverpine_katana',
  'thundergrass_spear',
  'amber_string_blade',
  'bloodsalt_hook_blade',
  'starsand_ritual_blade',
] as const;

function createSupplementalEquipmentDefs(): Record<string, ItemDef> {
  const result: Record<string, ItemDef> = {};
  const levels = [1, 5, 10, 15, 20, 25, 30];

  for (const [slot, count] of Object.entries(SUPPLEMENTAL_EQUIPMENT_TARGETS) as [LegacySupplementalEquipSlot, number][]) {
    if (slot === 'accessory') continue;
    const namedSlot = slot as LegacyNamedSupplementalEquipSlot;
    for (let i = 0; i < count; i++) {
      const levelReq = levels[i % levels.length];
      const tier = Math.floor(i / levels.length) + 1;
      let id = `supplemental_${slot}_${String(i + 1).padStart(2, '0')}`;
      if (slot === 'weapon') {
        const supplementalWeaponId = SUPPLEMENTAL_WEAPON_IDS[i];
        if (!supplementalWeaponId) throw new Error(`Missing supplemental weapon id for #${i + 1}`);
        id = supplementalWeaponId;
      } else {
        id = SUPPLEMENTAL_EQUIPMENT_ID_SLUGS[namedSlot]?.[i] ?? id;
      }
      const statValue = Math.max(1, Math.floor(levelReq / 3) + tier);
      const art = SUPPLEMENTAL_EQUIPMENT_ART[namedSlot][i];
      if (!art) throw new Error(`Missing supplemental equipment art for ${slot} #${i + 1}`);
      result[id] = {
        id,
        name: art.name,
        type: slot === 'weapon' ? 'weapon' : slot === 'head' || slot === 'body' || slot === 'hands' || slot === 'feet' || slot === 'offhand' ? 'armor' : 'accessory',
        description: art.description,
        buyPrice: 80 + levelReq * 35 + tier * 20,
        sellPrice: 40 + levelReq * 17 + tier * 10,
        stackable: false,
        maxStack: 1,
        levelReq,
        equipSlot: slot,
        stats: { [SUPPLEMENTAL_SLOT_STATS[namedSlot]]: statValue },
        rarity: levelReq >= 25 ? 'rare' : levelReq >= 15 ? 'uncommon' : 'common',
        sourceTags: ['shop', 'drop', 'starter_progression'],
        zoneTags: ['starter_village', 'plains', 'global'],
      };
    }
  }

  return result;
}

function createHighLevelWeaponProgressionDefs(): Record<string, ItemDef> {
  const weaponTypes = [
    'greataxe',
    'katana',
    'staff_elemental',
    'grimoire',
    'staff_hourglass',
    'crossbow',
    'dagger',
    'whip',
    'holy_tome',
    'staff_nature',
    'warhammer',
  ] as const;
  const progressionWeaponTypes: Record<typeof weaponTypes[number], WeaponType> = {
    greataxe: 'greataxe',
    katana: 'katana',
    staff_elemental: 'staff',
    grimoire: 'grimoire',
    staff_hourglass: 'staff',
    crossbow: 'crossbow',
    dagger: 'dagger',
    whip: 'whip',
    holy_tome: 'holy_tome',
    staff_nature: 'staff',
    warhammer: 'warhammer',
  };
  const weaponIds: Record<typeof weaponTypes[number], Record<50 | 60, string>> = {
    greataxe: {
      50: 'white_ash_greataxe',
      60: 'final_flame_mountainbreaker_greataxe',
    },
    katana: {
      50: 'moonshadow_thin_katana',
      60: 'endstar_lightless_katana',
    },
    staff_elemental: {
      50: 'four_aspect_crystal_staff',
      60: 'world_furnace_core_staff',
    },
    grimoire: {
      50: 'starpage_grimoire',
      60: 'final_black_grimoire',
    },
    staff_hourglass: {
      50: 'star_etched_hourglass_staff',
      60: 'zerotick_hourglass_staff',
    },
    crossbow: {
      50: 'dragonspine_heavy_crossbow',
      60: 'final_war_starbreaker_crossbow',
    },
    dagger: {
      50: 'deepmoon_hidden_blade',
      60: 'final_shadow_rift_blade',
    },
    whip: {
      50: 'thundervine_whip',
      60: 'final_thunder_star_whip',
    },
    holy_tome: {
      50: 'corona_holy_tome',
      60: 'last_bell_holy_tome',
    },
    staff_nature: {
      50: 'emerald_root_staff',
      60: 'world_tree_remnant_staff',
    },
    warhammer: {
      50: 'oathstone_warhammer',
      60: 'final_crownbreaker_warhammer',
    },
  };
  const weaponArt: Record<typeof weaponTypes[number], Record<50 | 60, SupplementalEquipmentArt>> = {
    greataxe: {
      50: { name: '白燼巨斧', description: '白燼巨斧的斧面覆著龍谷灰晶，長柄纏黑銀皮革，劈落時會拖出乾白火粉。' },
      60: { name: '終焰斷岳斧', description: '終焰斷岳斧以神傷戰場黑鐵鍛成，斧刃中央裂著紅光，像仍在燃燒的山脈傷口。' },
    },
    katana: {
      50: { name: '月影薄太刀', description: '月影薄太刀刃身狹長如冷月，刀鍔嵌著黑月玻片，出鞘時反光像水面裂開。' },
      60: { name: '終星無明刃', description: '終星無明刃的刀身深黑無紋，刃緣卻浮著星砂銀線，斬擊後才聽見細碎風聲。' },
    },
    staff_elemental: {
      50: { name: '四相晶杖', description: '四相晶杖頂端懸著裂成四色的晶核，杖身刻滿風火霜雷符槽，光芒輪流流動。' },
      60: { name: '世界爐心杖', description: '世界爐心杖以終戰熔核封頂，黑木杖身滲出金紅脈絡，像握著一段未冷卻地脈。' },
    },
    grimoire: {
      50: { name: '星頁魔導書', description: '星頁魔導書封皮是深藍龍革，書脊嵌銀釘，翻頁時會落下像星屑般的冷光。' },
      60: { name: '終卷黑典', description: '終卷黑典以黑曜書殼封住，頁角染著灰金火痕，每次闔上都像遠處鐘聲止息，只有終戰後仍能閱讀禁咒的術者能承受。' },
    },
    staff_hourglass: {
      50: { name: '星刻沙漏杖', description: '星刻沙漏杖中央嵌著倒懸玻璃，銀砂在其中逆流，杖端環繞細小刻度環。' },
      60: { name: '零刻時杖', description: '零刻時杖的沙漏沒有上下之分，黑銀砂粒停在半空，杖身每隔一息重新刻出裂紋。' },
    },
    crossbow: {
      50: { name: '龍脊重弩', description: '龍脊重弩以白骨弩臂承托黑鋼機匣，弦槽鑲著赤晶，扣機聲像低沉龍息。' },
      60: { name: '終戰破星弩', description: '終戰破星弩的弩臂覆滿黑金鉚釘，箭槽刻著星墜刻線，瞄準時會閃出冷白光。' },
    },
    dagger: {
      50: { name: '深月隱匕', description: '深月隱匕短而無光，柄端嵌一枚黑月石，刃面只有靠近血溫時才泛起銀痕。' },
      60: { name: '終影裂匕', description: '終影裂匕像一片被折斷的黑星碎片，刃口薄到近乎透明，握柄纏著灰白誓布。' },
    },
    whip: {
      50: { name: '雷藤長鞭', description: '雷藤長鞭以風暴藤與銀線編成，鞭節嵌著細銅片，甩動時有藍白電火游走。' },
      60: { name: '終雷星鞭', description: '終雷星鞭的每一節都鑲著焦黑星鐵，揮出時像一道被撕長的雷雲裂縫。' },
    },
    holy_tome: {
      50: { name: '日冕聖典', description: '日冕聖典封面包著白金薄板，中央有圓形日紋，頁緣散出柔亮金塵。' },
      60: { name: '末鐘聖典', description: '末鐘聖典以灰白骨扣鎖住，封面刻著破鐘與光翼，翻頁時會響起遙遠禱聲。' },
    },
    staff_nature: {
      50: { name: '翡翠根杖', description: '翡翠根杖由活木根鬚自然纏成，杖頭長著透明綠晶，握持處仍有溫潤樹脈。' },
      60: { name: '世界樹殘杖', description: '世界樹殘杖保留焦黑樹皮與金綠新芽，杖心像有微弱春雷在木紋中回響。' },
    },
    warhammer: {
      50: { name: '誓石戰錘', description: '誓石戰錘的錘頭取自古代誓碑，黑鐵箍壓住裂紋，揮動時像石門落下，是守誓騎士用來破除封門與壓制重甲敵人的武器。' },
      60: { name: '終冠碎錘', description: '終冠碎錘嵌著破碎王冠金片，錘面滿是黑焰灼痕，落擊時會震出灰金火光。' },
    },
  };
  const result: Record<string, ItemDef> = {};

  for (const weaponType of weaponTypes) {
    for (const levelReq of [50, 60] as const) {
      const id = weaponIds[weaponType][levelReq];
      const newWeaponType = progressionWeaponTypes[weaponType];
      const statKey = newWeaponType === 'staff' || newWeaponType === 'grimoire' || newWeaponType === 'holy_tome'
        ? 'matk'
        : 'atk';
      const art = weaponArt[weaponType][levelReq];
      result[id] = {
        id,
        name: art.name,
        type: 'weapon',
        description: art.description,
        buyPrice: levelReq * 180,
        sellPrice: levelReq * 90,
        stackable: false,
        maxStack: 1,
        levelReq,
        equipSlot: equipSlotForWeaponType(newWeaponType),
        stats: { [statKey]: Math.floor(levelReq * 1.35) },
        rarity: levelReq >= 60 ? 'legendary' : 'epic',
        weaponType: newWeaponType,
        sourceTags: ['shop', 'drop', 'weapon_progression'],
        zoneTags: levelReq >= 60 ? ['final_battleground', 'global'] : ['dragon_valley', 'abyss_rift', 'global'],
      };
    }
  }

  return result;
}

interface WeaponTopUpArt {
  id: string;
  name: string;
  weaponType: WeaponType;
  levelReq: number;
  rarity: ItemRarity;
  stat: 'atk' | 'matk';
  classReq?: ItemDef['classReq'];
  zoneTags: string[];
  description: string;
}

function createWeaponTypeTopUpDefs(): Record<string, ItemDef> {
  const weapons: WeaponTopUpArt[] = [
    { id: 'ashwood_dueling_sword', name: '灰木決鬥劍', weaponType: 'sword', levelReq: 8, rarity: 'uncommon', stat: 'atk', classReq: ['swordsman', 'knight'], zoneTags: ['plains'], description: '灰白硬木護手托著窄直鋼刃，劍脊有練習場反覆磨出的細亮刮痕，柄尾繫著褪色紅繩，像剛從巡邏兵器架上取下。' },
    { id: 'mirrorlake_guard_sword', name: '鏡湖衛劍', weaponType: 'sword', levelReq: 18, rarity: 'rare', stat: 'atk', classReq: ['swordsman', 'knight'], zoneTags: ['crystal_cave'], description: '劍面薄而平整，反光帶著水藍波紋，十字護手嵌著小片湖晶，揮動時像把一道冷靜湖光拉成直線。' },
    { id: 'blackbanner_oath_sword', name: '黑旗誓劍', weaponType: 'sword', levelReq: 32, rarity: 'epic', stat: 'atk', classReq: ['knight', 'sword_saint'], zoneTags: ['lost_capital'], description: '深鐵劍格殘留戰旗燒焦後的黑布纖維，刃根刻著半枚誓約印，整把劍沉穩得像一段未完成的軍令。' },
    { id: 'sunlit_vanguard_sword', name: '日照前鋒劍', weaponType: 'sword', levelReq: 48, rarity: 'legendary', stat: 'atk', classReq: ['knight', 'sword_saint'], zoneTags: ['celestial_ruins'], description: '金白劍身中央開著細長光槽，護手像展開的晨翼，刃緣在暗處仍泛出微亮日線，端正而耀眼。' },
    { id: 'reedcutting_blade', name: '割蘆短刃', weaponType: 'blade', levelReq: 7, rarity: 'uncommon', stat: 'atk', classReq: ['ranger', 'swordsman'], zoneTags: ['plains'], description: '寬背薄口的短刃殘著綠褐蘆汁斑，木柄被草繩交叉纏緊，像獵人常掛在腰側的實用割刀。' },
    { id: 'glassfin_sideblade', name: '玻鰭側刃', weaponType: 'blade', levelReq: 24, rarity: 'rare', stat: 'atk', classReq: ['ranger', 'assassin'], zoneTags: ['eastern_coast'], description: '半透明青色刀身背脊像魚鰭般起伏，護手鑲著鹽白貝片，靠近光源時會折出濕亮海藍光。' },
    { id: 'emberhook_crescent_blade', name: '燼鉤月刃', weaponType: 'blade', levelReq: 42, rarity: 'epic', stat: 'atk', classReq: ['assassin', 'sword_saint'], zoneTags: ['volcano_zone'], description: '刀身彎成狹長新月，內側刃口帶焦紅裂線，柄尾垂著黑鐵環，像能從甲縫間拖出燃燒傷口。' },
    { id: 'splinter_hatchet_axe', name: '裂木手斧', weaponType: 'axe', levelReq: 5, rarity: 'common', stat: 'atk', classReq: ['swordsman', 'berserker'], zoneTags: ['starter_village'], description: '小斧面邊緣有新磨銀口，短柄保留粗糙木節與樹脂痕，像從伐木棚直接改成戰鬥用具。' },
    { id: 'boarhide_raider_axe', name: '豬皮掠斧', weaponType: 'axe', levelReq: 9, rarity: 'uncommon', stat: 'atk', classReq: ['swordsman', 'berserker'], zoneTags: ['plains'], description: '短柄包著硬化獸皮，斧背掛有破銅鈴與牙飾，斧刃寬厚偏重，是野外掠襲者的粗獷單手斧。' },
    { id: 'saltbite_boarding_axe', name: '鹽咬登船斧', weaponType: 'axe', levelReq: 15, rarity: 'rare', stat: 'atk', classReq: ['swordsman', 'ranger'], zoneTags: ['eastern_coast'], description: '斧刃前端帶鉤，鐵面被海風蝕出白斑，柄頭纏著深藍濕繩，像曾無數次勾住船舷與盾牌。' },
    { id: 'redglass_cleaver_axe', name: '紅玻劈斧', weaponType: 'axe', levelReq: 22, rarity: 'rare', stat: 'atk', classReq: ['berserker', 'knight'], zoneTags: ['volcano_zone'], description: '火山玻璃嵌進斧刃中央，透明裂層裡凝著暗紅光點，斧面寬而平，像一片熔岩剛剛冷卻。' },
    { id: 'ironroot_warden_axe', name: '鐵根守林斧', weaponType: 'axe', levelReq: 28, rarity: 'rare', stat: 'atk', classReq: ['swordsman', 'druid'], zoneTags: ['dark_forest'], description: '黑根木與鐵箍壓合成短柄，斧刃刻有葉脈般的防滑槽，沉暗而堅固，像森林守衛的武器。' },
    { id: 'copperlion_captain_axe', name: '銅獅隊長斧', weaponType: 'axe', levelReq: 34, rarity: 'epic', stat: 'atk', classReq: ['knight', 'berserker'], zoneTags: ['lost_capital'], description: '斧背鑄成咆哮獅首，銅綠沿著鬃毛紋路沉積，鋼刃仍保持明亮，像失落軍團的指揮官武器。' },
    { id: 'stormmarked_throwing_axe', name: '雷痕飛斧', weaponType: 'axe', levelReq: 40, rarity: 'epic', stat: 'atk', classReq: ['swordsman', 'ranger'], zoneTags: ['storm_highlands'], description: '窄斧面有青白閃電刻痕，柄尾嵌著配重鐵珠，輪廓顯示它既能近戰也能短距投擲。' },
    { id: 'dawnforge_bearded_axe', name: '曙鍛鬚斧', weaponType: 'axe', levelReq: 46, rarity: 'epic', stat: 'atk', classReq: ['knight', 'berserker'], zoneTags: ['celestial_ruins'], description: '下垂斧刃像金白鬍鬚，刃根包著暖色銅箍，斧面細孔透出爐火餘光，是線條漂亮的神殿鍛斧。' },
    { id: 'kingsfall_execution_axe', name: '王隕刑斧', weaponType: 'axe', levelReq: 54, rarity: 'legendary', stat: 'atk', classReq: ['berserker', 'sword_saint'], zoneTags: ['final_battleground'], description: '短柄沉重，黑鋼斧面嵌著破冠金片，刃口留有暗紅舊痕，像被縮小卻依然威嚴的處刑巨斧。' },
    { id: 'stariron_hand_axe', name: '星鐵手斧', weaponType: 'axe', levelReq: 60, rarity: 'legendary', stat: 'atk', classReq: ['berserker', 'sword_saint'], zoneTags: ['final_battleground'], description: '深藍黑色斧面內浮著銀白星砂，短柄包覆隕鐵薄片，揮動時像把一小段夜空拖進戰場。' },
    { id: 'fieldstone_carpenter_hammer', name: '田石木工錘', weaponType: 'hammer', levelReq: 1, rarity: 'common', stat: 'atk', classReq: ['swordsman', 'priest'], zoneTags: ['starter_village'], description: '短木柄接著圓鈍石錘頭，錘面有敲木樁留下的白痕，柄尾纏著麻線，像新手也能握穩的單手錘。' },
    { id: 'bronze_bell_hammer', name: '銅鐘手錘', weaponType: 'hammer', levelReq: 6, rarity: 'common', stat: 'atk', classReq: ['swordsman', 'priest'], zoneTags: ['plains'], description: '銅色錘頭被打成小鐘輪廓，側面有細小裂鈴紋，短柄包著褐皮，揮動時彷彿會帶出低低鐘音。' },
    { id: 'iron_rivet_hammer', name: '鐵鉚戰錘', weaponType: 'hammer', levelReq: 10, rarity: 'uncommon', stat: 'atk', classReq: ['swordsman', 'knight'], zoneTags: ['lost_capital'], description: '方形鐵錘頭四面釘滿短鉚，邊角被磨得發亮，握柄有工坊火印，造型明確像可破甲的單手戰錘。' },
    { id: 'pilgrim_mallet_hammer', name: '巡禮木槌', weaponType: 'hammer', levelReq: 14, rarity: 'uncommon', stat: 'atk', classReq: ['priest', 'druid'], zoneTags: ['pilgrim_road'], description: '厚木槌頭刻著路標與祈禱符，槌面包有一圈白鐵，柄端掛著布製護符，像朝聖者防身用的祝聖槌。' },
    { id: 'reefstone_hammer', name: '礁石碎錘', weaponType: 'hammer', levelReq: 18, rarity: 'rare', stat: 'atk', classReq: ['swordsman', 'inquisitor'], zoneTags: ['eastern_coast'], description: '錘頭由黑礁石與鐵箍固定，表面嵌著白色貝屑，短柄有鹽霜水痕，像能敲碎甲殼與船板。' },
    { id: 'crystalcore_hammer', name: '晶核手錘', weaponType: 'hammer', levelReq: 24, rarity: 'rare', stat: 'atk', classReq: ['knight', 'priest'], zoneTags: ['crystal_cave'], description: '透明晶核被包在鐵錘頭中央，撞擊面是霧白晶面，內部折射出淡藍光，兼具工藝感與魔法質地。' },
    { id: 'ashbrand_hammer', name: '灰印錘', weaponType: 'hammer', levelReq: 30, rarity: 'rare', stat: 'atk', classReq: ['knight', 'inquisitor'], zoneTags: ['ashfall_monastery'], description: '黑灰錘頭烙著半熄聖印，邊緣包覆暗紅銅片，短柄纏白布但已被灰燼染暗，像修道院審判武器。' },
    { id: 'stormcap_hammer', name: '雷帽手錘', weaponType: 'hammer', levelReq: 36, rarity: 'epic', stat: 'atk', classReq: ['swordsman', 'knight'], zoneTags: ['storm_highlands'], description: '圓頂錘頭像一枚青鐵雷帽，頂端插著短避雷針，錘面有白色電灼痕，輪廓小而充滿爆發感。' },
    { id: 'moonforge_hammer', name: '月鍛錘', weaponType: 'hammer', levelReq: 42, rarity: 'epic', stat: 'atk', classReq: ['priest', 'knight'], zoneTags: ['celestial_ruins'], description: '銀白錘頭被鍛成半月弧面，短柄刻著月相刻度，撞擊面泛柔和冷光，像禮儀與戰鬥兩用的聖錘。' },
    { id: 'obsidian_judge_hammer', name: '黑曜裁錘', weaponType: 'hammer', levelReq: 48, rarity: 'epic', stat: 'atk', classReq: ['inquisitor'], zoneTags: ['obsidian_depths'], description: '黑曜石錘頭呈六角柱形，裂縫裡透著暗紅火線，柄端垂著小型鐵牌，像一柄用來敲定判決的單手錘。' },
    { id: 'dawnstar_hammer', name: '曙星手錘', weaponType: 'hammer', levelReq: 54, rarity: 'legendary', stat: 'atk', classReq: ['high_priest', 'inquisitor'], zoneTags: ['sunspire'], description: '白金錘頭周圍嵌著放射狀小尖星，中心有透明日晶，短柄包白革，整體像一顆可以握在手中的晨星。' },
    { id: 'final_accord_hammer', name: '終誓定音錘', weaponType: 'hammer', levelReq: 60, rarity: 'legendary', stat: 'atk', classReq: ['knight', 'inquisitor'], zoneTags: ['final_battleground'], description: '深鐵短錘包著破誓金環，錘面有黑白兩色同心圓印，揮下時像為戰場敲下最後判決，造型莊重清晰。' },
    { id: 'chalkcircle_focus', name: '白堊圓法器', weaponType: 'focus', levelReq: 1, rarity: 'common', stat: 'matk', classReq: ['mage', 'priest'], zoneTags: ['starter_village'], description: '手掌大小的白色圓石法器，表面刻著簡單同心符圈，邊緣有粉筆般的磨痕，像初學施法者握持的副手媒介。' },
    { id: 'copper_leaf_focus', name: '銅葉法器', weaponType: 'focus', levelReq: 6, rarity: 'common', stat: 'matk', classReq: ['mage', 'priest'], zoneTags: ['plains'], description: '薄銅片被敲成葉形，中央嵌一粒綠玻璃珠，背面有皮指環可套在手上，外形輕巧且容易辨識。' },
    { id: 'riverglass_focus', name: '河玻法器', weaponType: 'focus', levelReq: 10, rarity: 'uncommon', stat: 'matk', classReq: ['mage'], zoneTags: ['plains'], description: '橢圓河玻磨成半透明淺藍色，銀絲從四角扣住晶面，內部有水泡般小光點，像一面微型施法透鏡。' },
    { id: 'smokewick_focus', name: '煙芯法器', weaponType: 'focus', levelReq: 14, rarity: 'uncommon', stat: 'matk', classReq: ['warlock', 'mage'], zoneTags: ['dark_forest'], description: '黑木小框中央夾著一縷不散的灰煙，框邊刻有細小咒文，像被封存在掌中的熄燭火。' },
    { id: 'brass_astrolabe_focus', name: '黃銅星儀法器', weaponType: 'focus', levelReq: 18, rarity: 'rare', stat: 'matk', classReq: ['mage', 'chronomancer'], zoneTags: ['lost_capital'], description: '小型黃銅星儀由三圈薄環交疊而成，中心懸著藍色星珠，拿在手中像一座可旋轉的微型天文儀。' },
    { id: 'saltmirror_focus', name: '鹽鏡法器', weaponType: 'focus', levelReq: 24, rarity: 'rare', stat: 'matk', classReq: ['priest', 'mage'], zoneTags: ['eastern_coast'], description: '圓形鹽晶磨成霧面小鏡，鏡框包著漂白木與藍線，反光像潮水薄膜，適合海岸系施法道具圖。' },
    { id: 'emberlens_focus', name: '燼透鏡法器', weaponType: 'focus', levelReq: 30, rarity: 'rare', stat: 'matk', classReq: ['archmage', 'warlock'], zoneTags: ['volcano_zone'], description: '紅黑金屬框夾住一片橙色透鏡，鏡面內有餘燼般的亮點，手柄短小，像能聚焦火焰的一手法器。' },
    { id: 'frosthalo_focus', name: '霜環法器', weaponType: 'focus', levelReq: 36, rarity: 'epic', stat: 'matk', classReq: ['mage', 'chronomancer'], zoneTags: ['frostbite_pass'], description: '冰白圓環中央懸著小六角雪晶，環面有藍色霜脈，邊緣凝著細雪，視覺上像寒氣凝成的掌中光環。' },
    { id: 'boneglyph_focus', name: '骨符法器', weaponType: 'focus', levelReq: 42, rarity: 'epic', stat: 'matk', classReq: ['warlock', 'druid'], zoneTags: ['necropolis_gate'], description: '三片薄骨牌以黑線串成三角，骨面刻著深色符槽，中央漂著微弱紫火，帶有亡靈與祭儀感。' },
    { id: 'sunpetal_focus', name: '日瓣法器', weaponType: 'focus', levelReq: 48, rarity: 'epic', stat: 'matk', classReq: ['high_priest', 'archmage'], zoneTags: ['sunspire'], description: '金白法器像八片日瓣張開，中央透明晶核散出柔光，背面有指環固定，適合作為神聖副手法器。' },
    { id: 'voidwell_focus', name: '虛井法器', weaponType: 'focus', levelReq: 54, rarity: 'legendary', stat: 'matk', classReq: ['warlock', 'chronomancer'], zoneTags: ['abyss_rift'], description: '黑銀圓盤中央是一口無底小井，邊緣漂著細碎星砂，光線靠近時像被吸入深處，造型神秘清楚。' },
    { id: 'astral_crown_focus', name: '星冠法器', weaponType: 'focus', levelReq: 60, rarity: 'legendary', stat: 'matk', classReq: ['archmage', 'high_priest'], zoneTags: ['final_battleground'], description: '小型白金星冠懸浮在掌心大小的透明底座上，冠尖各嵌一粒星晶，中心有旋轉的銀白星核。' },
    { id: 'willow_witch_wand', name: '柳巫細魔杖', weaponType: 'wand', levelReq: 1, rarity: 'common', stat: 'matk', classReq: ['mage'], zoneTags: ['starter_village'], description: '柔韌柳枝削成的單手魔杖，杖尖綁著淡綠玻珠，杖身有手刻初階符線，適合新手法師圖像。' },
    { id: 'candlewick_wand', name: '燭芯魔杖', weaponType: 'wand', levelReq: 6, rarity: 'common', stat: 'matk', classReq: ['mage'], zoneTags: ['starter_village'], description: '杖端封著一小滴凝固白蠟，木身微黑像被燭火燻過，施法時杖尖亮起一粒溫暖火星。' },
    { id: 'blueglass_apprentice_wand', name: '藍玻學徒杖', weaponType: 'wand', levelReq: 10, rarity: 'uncommon', stat: 'matk', classReq: ['mage', 'archmage'], zoneTags: ['crystal_cave'], description: '短而直的木杖嵌著圓形藍玻璃，內部氣泡像凍住的星點，銀線沿木柄纏成基礎導魔迴路。' },
    { id: 'mothwing_charm_wand', name: '蛾翼咒杖', weaponType: 'wand', levelReq: 14, rarity: 'uncommon', stat: 'matk', classReq: ['mage', 'warlock'], zoneTags: ['dark_forest'], description: '杖頭掛著兩片半透明灰白翅飾，黑木杖身點著粉末狀銀斑，像夜裡會自行抖落微光的詛咒媒介。' },
    { id: 'coppercoil_focus_wand', name: '銅線聚能杖', weaponType: 'wand', levelReq: 18, rarity: 'rare', stat: 'matk', classReq: ['mage', 'archmage'], zoneTags: ['lost_capital'], description: '短柄被細銅線密密纏繞，杖尖固定菱形透明晶片，金屬線端像齒輪觸鬚般扣住晶體。' },
    { id: 'rainpearl_wand', name: '雨珠魔杖', weaponType: 'wand', levelReq: 22, rarity: 'rare', stat: 'matk', classReq: ['mage', 'chronomancer'], zoneTags: ['eastern_coast'], description: '淺灰漂木杖頭懸著一粒永不落下的水珠珍珠，柄身刻有潮汐刻度，帶著清冷濕亮質感。' },
    { id: 'emberneedle_wand', name: '燼針魔杖', weaponType: 'wand', levelReq: 28, rarity: 'rare', stat: 'matk', classReq: ['mage', 'archmage'], zoneTags: ['volcano_zone'], description: '黑鐵細杖像一根長針，杖尖泛著橙紅熱點，握柄以耐火皮革包覆，像把火焰壓縮成極細光線。' },
    { id: 'frostvein_wand', name: '霜脈魔杖', weaponType: 'wand', levelReq: 34, rarity: 'epic', stat: 'matk', classReq: ['mage', 'chronomancer'], zoneTags: ['frostbite_pass'], description: '白木柄裡透出藍色冰脈，杖頭覆著六角霜晶，邊緣有細雪粉末，是明確的冰系單手施法武器。' },
    { id: 'inkbone_warlock_wand', name: '墨骨術士杖', weaponType: 'wand', levelReq: 40, rarity: 'epic', stat: 'matk', classReq: ['warlock'], zoneTags: ['abyss_rift'], description: '細長黑骨與銀扣拼成杖身，杖尖嵌著凝固黑墨，周圍刻滿小型禁文，精緻而危險。' },
    { id: 'sunthread_wand', name: '日線魔杖', weaponType: 'wand', levelReq: 46, rarity: 'epic', stat: 'matk', classReq: ['archmage'], zoneTags: ['celestial_ruins'], description: '白金短柄中嵌著一條筆直金光，杖頭是水滴形透明日晶，整體纖細明亮，像一束被握住的晨光。' },
    { id: 'voidtick_wand', name: '虛刻魔杖', weaponType: 'wand', levelReq: 54, rarity: 'legendary', stat: 'matk', classReq: ['chronomancer', 'warlock'], zoneTags: ['abyss_rift'], description: '黑銀杖身每隔一段就斷開一線空隙，杖頭懸著無框小沙漏，銀砂停在半空，像時間碎片。' },
    { id: 'archon_star_wand', name: '星君短魔杖', weaponType: 'wand', levelReq: 60, rarity: 'legendary', stat: 'matk', classReq: ['archmage', 'chronomancer'], zoneTags: ['final_battleground'], description: '深藍星鐵短杖環繞三枚小星晶，中心漂著白金光核，短小但華麗，是高階法師單手魔杖。' },
    { id: 'greenhorn_hunting_bow', name: '青角獵弓', weaponType: 'bow', levelReq: 6, rarity: 'common', stat: 'atk', classReq: ['ranger'], zoneTags: ['plains'], description: '淡綠角木彎成弓臂，保留天然分叉節點，弓弦粗而可靠，握把纏著淺褐皮條，剪影清楚。' },
    { id: 'featherfall_shortbow', name: '落羽短弓', weaponType: 'bow', levelReq: 12, rarity: 'uncommon', stat: 'atk', classReq: ['ranger', 'marksman'], zoneTags: ['plains'], description: '上弓臂綁著灰白鳥羽，弓身刷有防潮樹脂，短巧輕便，拉弦處有反覆磨出的光亮弧痕。' },
    { id: 'blackreed_marsh_bow', name: '黑蘆沼弓', weaponType: 'bow', levelReq: 20, rarity: 'rare', stat: 'atk', classReq: ['ranger', 'beast_master'], zoneTags: ['dark_forest'], description: '細長暗色弓臂像乾蘆葦般有節，弦旁掛著小骨珠與防水油布，帶濕地獵手的陰影氣味。' },
    { id: 'saltwind_recurve_bow', name: '鹽風反曲弓', weaponType: 'bow', levelReq: 26, rarity: 'rare', stat: 'atk', classReq: ['ranger', 'marksman'], zoneTags: ['eastern_coast'], description: '兩端向外翻起的反曲弓貼著薄薄魚骨片，白鹽霜卡在接縫裡，像能在海風中保持穩定。' },
    { id: 'amberleaf_longbow', name: '琥葉長弓', weaponType: 'bow', levelReq: 34, rarity: 'epic', stat: 'atk', classReq: ['marksman', 'beast_master'], zoneTags: ['amber_forest'], description: '弓身封入金黃樹脂與葉片脈絡，拉開時樹脂內部像有蜂蜜色光流動，優雅自然系長弓。' },
    { id: 'stormrail_warbow', name: '風暴軌弓', weaponType: 'bow', levelReq: 42, rarity: 'epic', stat: 'atk', classReq: ['marksman'], zoneTags: ['storm_highlands'], description: '弓臂嵌著兩條青鐵導軌，弦扣處有細小避雷針，弓身留下焦黑雷痕，結實而帶風暴感。' },
    { id: 'moonwell_silver_bow', name: '月井銀弓', weaponType: 'bow', levelReq: 50, rarity: 'legendary', stat: 'atk', classReq: ['marksman', 'beast_master'], zoneTags: ['celestial_ruins'], description: '銀白木與月井晶片製成，弓弦像一條淡淡水光，弓臂內側鑲著半月紋，安靜且明亮。' },
    { id: 'last_horizon_bow', name: '終境地平弓', weaponType: 'bow', levelReq: 60, rarity: 'legendary', stat: 'atk', classReq: ['marksman'], zoneTags: ['final_battleground'], description: '黑金弓臂寬大如遠方地平線，兩端浮著微小星點，拉滿時弓弦會亮成一條白色直線。' },
    { id: 'ratchet_scout_crossbow', name: '棘輪斥候弩', weaponType: 'crossbow', levelReq: 16, rarity: 'rare', stat: 'atk', classReq: ['ranger', 'marksman'], zoneTags: ['lost_capital'], description: '短小木托側面露出黃銅棘輪與細齒，弩臂塗成暗綠色，像專為斥候伏擊設計的安靜機械弩。' },
    { id: 'obsidian_winch_crossbow', name: '黑曜絞盤弩', weaponType: 'crossbow', levelReq: 36, rarity: 'epic', stat: 'atk', classReq: ['marksman'], zoneTags: ['volcano_zone'], description: '機匣由黑曜片包覆，前端裝著小型絞盤，弩槽刻有紅色導熱線，沉重、精準且破甲。' },
    { id: 'skybreak_siege_crossbow', name: '破空攻城弩', weaponType: 'crossbow', levelReq: 56, rarity: 'legendary', stat: 'atk', classReq: ['marksman'], zoneTags: ['final_battleground'], description: '像縮小的攻城器械，雙弩臂覆著黑金鋼片，中央箭槽寬到可放重矢，前端星晶亮著準線。' },
    { id: 'smokeveil_dagger', name: '煙紗匕首', weaponType: 'dagger', levelReq: 28, rarity: 'rare', stat: 'atk', classReq: ['assassin'], zoneTags: ['dark_forest'], description: '霧灰刃面幾乎沒有反光，短柄繫著細黑紗帶，是刺客袖中低調但致命的單手匕首。' },
    { id: 'nightglass_dagger', name: '夜玻匕首', weaponType: 'dagger', levelReq: 46, rarity: 'epic', stat: 'atk', classReq: ['assassin'], zoneTags: ['abyss_rift'], description: '像一片黑色玻璃碎月，刃口薄到泛紫，護手只有一圈銀絲，小巧銳利且輪廓明確。' },
    { id: 'granitejaw_greataxe', name: '花崗顎巨斧', weaponType: 'greataxe', levelReq: 18, rarity: 'rare', stat: 'atk', classReq: ['berserker'], zoneTags: ['crystal_cave'], description: '雙刃像咬合石顎，斧面嵌著灰白岩粒，長柄以鐵箍加固，厚重得像從山壁上劈下來。' },
    { id: 'bloodcoal_greataxe', name: '血煤巨斧', weaponType: 'greataxe', levelReq: 38, rarity: 'epic', stat: 'atk', classReq: ['berserker', 'sword_saint'], zoneTags: ['volcano_zone'], description: '斧刃黑中帶紅，像燃燒後未熄的煤層，長柄纏著暗紅皮革，斧背有粗大排煙孔。' },
    { id: 'worldsplitter_greataxe', name: '裂界巨斧', weaponType: 'greataxe', levelReq: 58, rarity: 'legendary', stat: 'atk', classReq: ['berserker', 'sword_saint'], zoneTags: ['final_battleground'], description: '斧面像兩片錯位黑鐵大陸，中間裂縫浮著紫白光，長柄末端懸著破碎星環。' },
    { id: 'rainstained_grimoire', name: '雨漬魔導書', weaponType: 'grimoire', levelReq: 16, rarity: 'rare', stat: 'matk', classReq: ['warlock', 'mage'], zoneTags: ['eastern_coast'], description: '深藍發黑的封皮四角包著銹銀，書頁邊緣有水痕與鹽斑，封面中央畫著半閉墨色眼睛。' },
    { id: 'boneclasp_grimoire', name: '骨扣禁書', weaponType: 'grimoire', levelReq: 36, rarity: 'epic', stat: 'matk', classReq: ['warlock'], zoneTags: ['abyss_rift'], description: '白骨扣鎖住厚重黑皮封面，書脊垂著小片符骨，縫隙滲出暗紫光，危險而清楚。' },
    { id: 'eclipse_index_grimoire', name: '蝕日索引魔導書', weaponType: 'grimoire', levelReq: 56, rarity: 'legendary', stat: 'matk', classReq: ['warlock', 'archmage'], zoneTags: ['celestial_ruins'], description: '封面嵌著黑金日輪，頁側有密密麻麻的金屬索引片，打開時像一座小型禁忌圖書館。' },
    { id: 'pilgrim_holy_tome', name: '巡禮聖典', weaponType: 'holy_tome', levelReq: 16, rarity: 'rare', stat: 'matk', classReq: ['priest', 'high_priest'], zoneTags: ['plains'], description: '米白布封上有磨亮的銅質路標聖徽，書角沾著旅塵，翻頁時有微弱晨鐘光從紙縫流出。' },
    { id: 'glasschapel_holy_tome', name: '玻璃禮拜聖典', weaponType: 'holy_tome', levelReq: 36, rarity: 'epic', stat: 'matk', classReq: ['high_priest', 'inquisitor'], zoneTags: ['celestial_ruins'], description: '封面鑲著彩窗碎片，金線把每片玻璃固定成光翼圖案，書頁邊緣泛著柔白色，聖潔而易辨識。' },
    { id: 'last_dawn_holy_tome', name: '終曉聖典', weaponType: 'holy_tome', levelReq: 56, rarity: 'legendary', stat: 'matk', classReq: ['high_priest', 'inquisitor'], zoneTags: ['final_battleground'], description: '白金書殼中央有裂開的日冕浮雕，頁緣灑著金粉，合上時像把最後一線黎明鎖進書中。' },
    { id: 'reedflute_katana', name: '蘆笛太刀', weaponType: 'katana', levelReq: 26, rarity: 'rare', stat: 'atk', classReq: ['swordsman', 'sword_saint'], zoneTags: ['plains'], description: '刀鞘以細蘆管拼成，刀身狹長帶淡淡青光，刀鍔像一枚中空笛孔，有流浪劍客的清冷感。' },
    { id: 'whitecomet_katana', name: '白彗太刀', weaponType: 'katana', levelReq: 52, rarity: 'legendary', stat: 'atk', classReq: ['sword_saint'], zoneTags: ['final_battleground'], description: '刃身極亮，刀背有拖尾般的銀白紋路，黑色刀鞘嵌著小星石，出鞘時像彗星切出夜色。' },
    { id: 'chalk_prayer_scepter', name: '白堊祈杖', weaponType: 'scepter', levelReq: 5, rarity: 'common', stat: 'matk', classReq: ['priest'], zoneTags: ['starter_village'], description: '短而樸素的權杖，杖頭是圓形白石聖徽，木柄被淺色布帶纏住，像小禮拜堂借給新祭司的聖具。' },
    { id: 'brassbell_scepter', name: '銅鈴權杖', weaponType: 'scepter', levelReq: 12, rarity: 'uncommon', stat: 'matk', classReq: ['priest'], zoneTags: ['plains'], description: '杖頭掛著三枚小銅鈴，鈴面刻著祈禱短句，柄身有深色手汗痕，揮動時像會響起祝禱聲。' },
    { id: 'rosewindow_scepter', name: '玫窗權杖', weaponType: 'scepter', levelReq: 18, rarity: 'rare', stat: 'matk', classReq: ['priest', 'high_priest'], zoneTags: ['celestial_ruins'], description: '杖頭鑲成彩窗圓盤，紅藍玻璃片被細金框分隔，短柄包著白革，像一扇縮小的教堂花窗。' },
    { id: 'saltshrine_scepter', name: '鹽祠權杖', weaponType: 'scepter', levelReq: 24, rarity: 'rare', stat: 'matk', classReq: ['priest', 'druid'], zoneTags: ['eastern_coast'], description: '漂白海木杖頭固定一枚鹽晶聖符，晶面不規則但乾淨明亮，底端綁著海藍祈願繩。' },
    { id: 'ironhalo_scepter', name: '鐵環權杖', weaponType: 'scepter', levelReq: 30, rarity: 'rare', stat: 'matk', classReq: ['inquisitor', 'high_priest'], zoneTags: ['lost_capital'], description: '杖頭是一圈厚重黑鐵光環，環內懸著銀白十字芯，柄身刻有審判條文，莊嚴而帶壓迫感。' },
    { id: 'thorncrown_scepter', name: '棘冠權杖', weaponType: 'scepter', levelReq: 38, rarity: 'epic', stat: 'matk', classReq: ['druid', 'inquisitor'], zoneTags: ['dark_forest'], description: '頂端被活木荊棘繞成小冠，刺尖泛著金綠微光，短柄覆有深色樹皮，介於自然與聖職之間。' },
    { id: 'aurora_mitre_scepter', name: '極光冠權杖', weaponType: 'scepter', levelReq: 48, rarity: 'epic', stat: 'matk', classReq: ['high_priest'], zoneTags: ['frostbite_pass'], description: '杖頭像透明小主教冠，內部浮著粉藍極光絲帶，白銀短柄上有細緻雪花聖印。' },
    { id: 'seraph_judgement_scepter', name: '熾使審判權杖', weaponType: 'scepter', levelReq: 60, rarity: 'legendary', stat: 'matk', classReq: ['inquisitor', 'high_priest'], zoneTags: ['final_battleground'], description: '白金與赤金交錯鍛成，杖頭展開六片火翼狀光刃，中央懸著小型審判日輪，終局聖職武器。' },
    { id: 'thundergrass_javelin_spear', name: '雷草投槍', weaponType: 'spear', levelReq: 22, rarity: 'rare', stat: 'atk', classReq: ['swordsman', 'knight'], zoneTags: ['thundersteppe'], description: '比長槍更輕，槍桿纏著青白草纖維，槍頭有小型倒鉤與電痕，明確表現為可投擲的遠程雙手槍。' },
    { id: 'slagbell_warhammer', name: '渣鐘戰錘', weaponType: 'warhammer', levelReq: 18, rarity: 'rare', stat: 'atk', classReq: ['knight', 'inquisitor'], zoneTags: ['volcano_zone'], description: '錘頭像被敲裂的黑鐵鐘，表面掛著紅褐礦渣，長柄末端有銅環，揮下時彷彿能砸出沉悶鐘聲。' },
    { id: 'granite_oath_warhammer', name: '花崗誓戰錘', weaponType: 'warhammer', levelReq: 38, rarity: 'epic', stat: 'atk', classReq: ['knight', 'inquisitor'], zoneTags: ['celestial_ruins'], description: '方形錘頭由灰白石與黑鐵箍固定，錘面刻著古誓約短文，樸拙厚重，像聖騎士破門武器，常見於天界遺跡的誓約石廊。' },
    { id: 'skyforge_crown_warhammer', name: '天爐冠戰錘', weaponType: 'warhammer', levelReq: 58, rarity: 'legendary', stat: 'atk', classReq: ['knight', 'inquisitor'], zoneTags: ['final_battleground'], description: '錘頭嵌著破碎王冠與白金火槽，長柄由深鐵包覆，錘面亮著像熔爐星空般的孔洞。' },
    { id: 'reedlash_whip', name: '蘆索長鞭', weaponType: 'whip', levelReq: 12, rarity: 'uncommon', stat: 'atk', classReq: ['beast_master', 'ranger'], zoneTags: ['plains'], description: '多股黑蘆纖維編成鞭身，鞭柄包著粗皮，鞭尾綁著小骨片，帶野外馴獸工具的粗糙感。' },
    { id: 'glassspine_whip', name: '玻脊長鞭', weaponType: 'whip', levelReq: 34, rarity: 'epic', stat: 'atk', classReq: ['beast_master', 'druid'], zoneTags: ['crystal_cave'], description: '每一節都嵌著透明魚脊玻片，甩動時形成一串冷亮折光，鞭柄短而精緻，華麗但危險。' },
    { id: 'cometvine_whip', name: '彗藤星鞭', weaponType: 'whip', levelReq: 56, rarity: 'legendary', stat: 'atk', classReq: ['beast_master', 'druid'], zoneTags: ['final_battleground'], description: '黑色活藤與銀星線纏成鞭身，鞭節間浮著細小光點，鞭尾像彗星拖焰般分叉。' },
  ];

  return Object.fromEntries(weapons.map((weapon) => {
    const statValue = Math.max(4, Math.floor(weapon.levelReq * 1.15));
    const stats: NonNullable<ItemDef['stats']> = weapon.stat === 'matk'
      ? { matk: statValue, int: Math.max(1, Math.floor(weapon.levelReq / 12)), mp: Math.max(5, Math.floor(weapon.levelReq * 1.2)) }
      : { atk: statValue, dex: Math.max(1, Math.floor(weapon.levelReq / 14)) };
    return [weapon.id, {
      id: weapon.id,
      name: weapon.name,
      type: 'weapon',
      description: weapon.description,
      buyPrice: Math.max(80, weapon.levelReq * 95),
      sellPrice: Math.max(40, weapon.levelReq * 45),
      stackable: false,
      maxStack: 1,
      levelReq: weapon.levelReq,
      classReq: weapon.classReq,
      equipSlot: equipSlotForWeaponType(weapon.weaponType),
      stats,
      rarity: weapon.rarity,
      weaponType: weapon.weaponType,
      sourceTags: ['drop', 'weapon_topup'],
      zoneTags: [...weapon.zoneTags, 'global'],
    } satisfies ItemDef];
  }));
}

interface ShieldTopUpArt {
  id: string;
  name: string;
  levelReq: number;
  rarity: ItemRarity;
  classReq?: ItemDef['classReq'];
  zoneTags: string[];
  stats: NonNullable<ItemDef['stats']>;
  description: string;
}

function createShieldTopUpDefs(): Record<string, ItemDef> {
  const shields: ShieldTopUpArt[] = [
    { id: 'reedbound_buckler_shield', name: '蘆縛小圓盾', levelReq: 4, rarity: 'common', classReq: ['swordsman', 'ranger'], zoneTags: ['starter_village', 'plains'], stats: { def: 4, dex: 1 }, description: '小型圓盾以交錯蘆桿與薄木片編壓成面，外圈用粗麻繩與暗色皮革束緊，中央有一枚磨亮銅釘，適合新手在草地與村道上格擋短刀和獸爪。' },
    { id: 'boarhide_round_shield', name: '豬皮圓盾', levelReq: 11, rarity: 'common', classReq: ['swordsman', 'beast_master'], zoneTags: ['plains'], stats: { def: 7, hp: 14 }, description: '厚野豬皮繃在圓形木框上，表面留有深棕鬃毛紋與幾道白色爪痕，盾心釘著低矮鐵凸，整體粗獷耐撞，像平原獵人常用的副手防具。' },
    { id: 'saltwood_kite_shield', name: '鹽木鳶盾', levelReq: 12, rarity: 'uncommon', classReq: ['knight', 'ranger'], zoneTags: ['eastern_coast'], stats: { def: 9, hp: 18 }, description: '狹長鳶形盾由漂白海木和藍灰鐵帶拼成，邊緣結著白鹽霜，盾面刻有浪線與小貝殼鉚釘，能清楚呈現海岸巡守者的防禦裝備。' },
    { id: 'ironleaf_guard_shield', name: '鐵葉護盾', levelReq: 16, rarity: 'uncommon', classReq: ['knight', 'druid'], zoneTags: ['dark_forest'], stats: { def: 11, vit: 1 }, description: '盾面像一片寬大的黑綠鐵葉，葉脈是凸起的暗鐵肋條，握把包著潮濕樹皮，邊角有青苔與細小刮痕，兼具森林守衛與金屬防護感。' },
    { id: 'crystal_rim_shield', name: '晶緣盾', levelReq: 20, rarity: 'rare', classReq: ['knight', 'mage'], zoneTags: ['crystal_cave'], stats: { def: 14, mdef: 3 }, description: '圓角盾的外框嵌著透明藍白晶簇，中央是霧面鋼板，晶體折出冷光但盾形仍厚實清楚，像礦洞守衛用來抵擋碎晶與魔法射線的副手盾。' },
    { id: 'emberglass_tower_shield', name: '燼玻塔盾', levelReq: 22, rarity: 'rare', classReq: ['knight', 'berserker'], zoneTags: ['volcano_zone'], stats: { def: 18, hp: 28 }, description: '高塔盾由黑鐵大板和暗紅火山玻璃鑲片構成，盾面有熔岩般裂光，底部留下焦黑拖痕，厚重輪廓明顯，適合表現火山前線的堅硬防具。' },
    { id: 'pilgrim_bell_shield', name: '巡禮鈴盾', levelReq: 24, rarity: 'rare', classReq: ['priest', 'knight'], zoneTags: ['pilgrim_road'], stats: { def: 16, mdef: 4, hp: 20 }, description: '米白木盾中央鑲著小銅鐘聖徽，盾緣掛有布條與祈願結，表面覆著旅塵和淡金刮痕，像朝聖護衛在長路上持用的祝聖副手盾。' },
    { id: 'stormcap_bulwark_shield', name: '雷帽壁盾', levelReq: 26, rarity: 'epic', classReq: ['knight'], zoneTags: ['storm_highlands'], stats: { def: 22, mdef: 5 }, description: '寬大壁盾以青鐵雷帽形圓頂為中心，四角插著短避雷針，盾面有白藍電灼紋與雨蝕痕，剪影沉穩厚重，能清楚傳達抗雷與守陣用途。' },
    { id: 'moonwell_aegis_shield', name: '月井聖盾', levelReq: 30, rarity: 'epic', classReq: ['high_priest', 'knight'], zoneTags: ['celestial_ruins'], stats: { def: 21, mdef: 8, mp: 18 }, description: '銀白橢圓盾像月井水面凝成，內側有半月鑲線與淡藍水光，邊框細緻乾淨，盾心是一枚透明月滴晶，適合神聖與月光主題的高階副手。' },
    { id: 'blackbanner_oath_shield', name: '黑旗誓盾', levelReq: 46, rarity: 'epic', classReq: ['knight', 'sword_saint'], zoneTags: ['lost_capital'], stats: { def: 24, vit: 3 }, description: '深鐵盾面覆著燒焦黑旗布片，中央有半枚金色誓約印，邊緣布滿舊戰場缺口但結構完整，像失落軍團留下的沉重誓約防具。' },
    { id: 'frosthalo_mirror_shield', name: '霜環鏡盾', levelReq: 50, rarity: 'legendary', classReq: ['knight', 'chronomancer'], zoneTags: ['frostbite_pass'], stats: { def: 26, mdef: 10 }, description: '冰白圓盾中央是一面淡藍霜鏡，外圈懸著六枚小雪晶，盾面可見細密冰脈與銀色刻度，冷冽而華麗，像能反射寒霜法術的傳說盾。' },
    { id: 'obsidian_judge_shield', name: '黑曜裁盾', levelReq: 52, rarity: 'legendary', classReq: ['inquisitor', 'knight'], zoneTags: ['obsidian_depths'], stats: { def: 29, hp: 45 }, description: '六角黑曜盾厚如判決石板，裂縫中透出暗紅火線，盾心垂著小鐵牌與白色審判刻痕，輪廓莊嚴壓迫，適合終局審判者副手裝備。' },
    { id: 'sunpetal_ward_shield', name: '日瓣護盾', levelReq: 54, rarity: 'legendary', classReq: ['high_priest', 'knight'], zoneTags: ['sunspire'], stats: { def: 27, mdef: 11, hp: 24 }, description: '白金盾面展成八片日瓣形裝甲，中央透明日晶柔亮，邊緣有細小光釘與金粉磨痕，整體明亮神聖但仍是可握持的實體盾牌。' },
    { id: 'voidwell_guard_shield', name: '虛井守盾', levelReq: 56, rarity: 'legendary', classReq: ['warlock', 'knight'], zoneTags: ['abyss_rift'], stats: { def: 25, mdef: 13, mp: 30 }, description: '黑銀圓盾中央像一口無底小井，周圍漂著細碎星砂與向內墜落的冷光，盾邊刻有深紫禁文，神秘但剪影清楚，適合深淵防禦主題。' },
    { id: 'skyforge_crown_shield', name: '天爐冠盾', levelReq: 58, rarity: 'legendary', classReq: ['knight', 'inquisitor'], zoneTags: ['sky_isles', 'final_battleground'], stats: { def: 31, vit: 5 }, description: '黑金塔盾嵌著破碎王冠片與白金爐槽，盾面有星孔般的冷白光點，底部包著厚重鐵靴形護角，像天空熔爐鑄出的王權防具。' },
    { id: 'final_horizon_shield', name: '終境地平盾', levelReq: 60, rarity: 'mythic', classReq: ['knight', 'high_priest'], zoneTags: ['final_battleground'], stats: { def: 36, mdef: 14, hp: 60 }, description: '黑金巨盾的上緣像一道遠方地平線，兩側浮著細小星點，中央橫過一條筆直白光，盾面布滿終戰刮痕與金色封印，是可清楚辨識的最終副手盾牌。' },
  ];

  return Object.fromEntries(shields.map((shield) => [shield.id, {
    id: shield.id,
    name: shield.name,
    type: 'armor',
    description: shield.description,
    buyPrice: Math.max(100, shield.levelReq * 105),
    sellPrice: Math.max(50, shield.levelReq * 50),
    stackable: false,
    maxStack: 1,
    levelReq: shield.levelReq,
    classReq: shield.classReq,
    equipSlot: 'offhand',
    stats: shield.stats,
    rarity: shield.rarity,
    weaponType: 'shield',
    sourceTags: ['drop', 'shield_topup'],
    zoneTags: [...shield.zoneTags, 'global'],
  } satisfies ItemDef]));
}

interface ZoneEquipmentTheme {
  id: string;
  name: string;
  level: number;
  bossOrDungeon?: boolean;
}

const ZONE_EQUIPMENT_THEMES: ZoneEquipmentTheme[] = [
  { id: 'starter_village', name: '新手村', level: 1 },
  { id: 'plains', name: '翠綠平原', level: 3 },
  { id: 'dark_forest', name: '暗影森林', level: 8 },
  { id: 'crystal_cave', name: '水晶洞窟', level: 12 },
  { id: 'lakeside_town', name: '湖畔城鎮', level: 15 },
  { id: 'starter_village_ext', name: '新手村外圍', level: 4 },
  { id: 'eastern_coast', name: '東方海岸', level: 10 },
  { id: 'volcano_zone', name: '火山地帶', level: 18 },
  { id: 'frozen_wastes', name: '冰封雪原', level: 20 },
  { id: 'demon_territory', name: '魔族領地', level: 25 },
  { id: 'dragon_valley', name: '龍谷', level: 30, bossOrDungeon: true },
  { id: 'abyss_rift', name: '深淵裂隙', level: 35, bossOrDungeon: true },
  { id: 'celestial_ruins', name: '天界遺跡', level: 38, bossOrDungeon: true },
  { id: 'old_farmland', name: '老舊農場', level: 5 },
  { id: 'whispering_valley', name: '低語溪谷', level: 7 },
  { id: 'abandoned_mines', name: '廢棄礦坑', level: 10 },
  { id: 'wildgrass_hills', name: '荒草丘陵', level: 12 },
  { id: 'mist_harbor', name: '霧港', level: 14 },
  { id: 'ancient_ruins', name: '古代遺跡', level: 16, bossOrDungeon: true },
  { id: 'marsh_of_mirrors', name: '鏡沼', level: 18 },
  { id: 'redrock_badlands', name: '赤岩荒地', level: 20 },
  { id: 'sunken_catacombs', name: '沉沒墓窟', level: 22, bossOrDungeon: true },
  { id: 'thundersteppe', name: '雷鳴草原', level: 24 },
  { id: 'glass_dunes', name: '琉璃沙丘', level: 26 },
  { id: 'underground_city', name: '地下城邦', level: 26 },
  { id: 'cursed_graveyard', name: '詛咒墓園', level: 28 },
  { id: 'storm_highlands', name: '風暴高原', level: 30 },
  { id: 'blackwood', name: '黑木林', level: 30 },
  { id: 'lost_capital', name: '失落王都', level: 32, bossOrDungeon: true },
  { id: 'sky_isles', name: '浮空群島', level: 34, bossOrDungeon: true },
  { id: 'deepsea_temple', name: '深海神殿', level: 36, bossOrDungeon: true },
  { id: 'obsidian_depths', name: '黑曜深層', level: 36 },
  { id: 'starfall_crater', name: '星隕坑', level: 38 },
  { id: 'time_ruins', name: '時間廢墟', level: 40, bossOrDungeon: true },
  { id: 'astral_wastes', name: '星界荒原', level: 42, bossOrDungeon: true },
  { id: 'final_battleground', name: '終焉戰場', level: 45, bossOrDungeon: true },
  { id: 'moonlit_fen', name: '月光濕地', level: 18 },
  { id: 'pilgrim_road', name: '朝聖古道', level: 20 },
  { id: 'ironwood_fort', name: '鐵木要塞', level: 22 },
  { id: 'amber_forest', name: '琥珀森林', level: 24 },
  { id: 'silverpine_range', name: '銀松山脈', level: 26 },
  { id: 'saltwind_flats', name: '鹽風灘', level: 28 },
  { id: 'thornmaze', name: '荊棘迷宮', level: 30 },
  { id: 'ember_march', name: '餘燼邊境', level: 32 },
  { id: 'reef_of_bones', name: '白骨礁', level: 34, bossOrDungeon: true },
  { id: 'sapphire_lake', name: '藍寶湖', level: 24 },
  { id: 'kingsroad_market', name: '王道市集', level: 18 },
  { id: 'arena_quarter', name: '競技城區', level: 20 },
  { id: 'royal_hunting_grounds', name: '王家獵場', level: 26 },
  { id: 'ashfall_monastery', name: '灰落修道院', level: 32, bossOrDungeon: true },
  { id: 'frostbite_pass', name: '霜咬隘口', level: 34 },
  { id: 'necropolis_gate', name: '死都外門', level: 38, bossOrDungeon: true },
  { id: 'sunspire', name: '日耀尖塔', level: 40, bossOrDungeon: true },
  { id: 'moonshadow_court', name: '月影庭', level: 42, bossOrDungeon: true },
  { id: 'machine_graveyard', name: '機械墳場', level: 36 },
  { id: 'bloodsalt_coast', name: '血鹽海岸', level: 30 },
  { id: 'emerald_canopy', name: '翡翠樹冠', level: 28 },
  { id: 'hollow_mountain', name: '空心山', level: 34 },
  { id: 'serpent_delta', name: '蛇河三角洲', level: 32 },
  { id: 'kingdom_frontier', name: '王國邊境', level: 30 },
];

const ZONE_THEME_BASE_SLOTS = ['head', 'body', 'hands', 'feet', 'ring', 'necklace'] as const;
const ZONE_THEME_EXTRA_SLOTS = ['weapon', 'earring', 'belt', 'ring'] as const;
const ZONE_THEME_SLOT_NAMES: Record<LegacyNamedSupplementalEquipSlot, string> = {
  weapon: '戰刃',
  offhand: '盾牌',
  head: '兜帽',
  body: '護甲',
  hands: '護手',
  feet: '長靴',
  ring: '指環',
  earring: '耳飾',
  belt: '腰帶',
  necklace: '墜飾',
};

function getZoneThemeEquipmentId(themeId: string, slot: LegacyNamedSupplementalEquipSlot, index: number): string {
  if (slot === 'weapon') return `${themeId}_giant_sword`;
  if (slot === 'belt') return `zone_${themeId}_belt`;
  if (slot === 'earring') return `zone_${themeId}_earring`;
  if (slot === 'necklace') return `zone_${themeId}_necklace`;
  if (slot === 'ring') return index >= ZONE_THEME_BASE_SLOTS.length ? `zone_${themeId}_signet` : `zone_${themeId}_ring`;
  if (slot === 'hands') return `zone_${themeId}_hands`;
  if (slot === 'feet') return `zone_${themeId}_feet`;
  if (slot === 'head') return `zone_${themeId}_head`;
  if (slot === 'body') return `zone_${themeId}_body`;
  return `zone_${themeId}_${slot}_${index + 1}`;
}

function buildZoneThemeEquipmentDescription(themeName: string, slot: LegacyNamedSupplementalEquipSlot, slotName: string): string {
  const descriptions: Partial<Record<LegacyNamedSupplementalEquipSlot, string>> = {
    head: `${slotName}的帽緣壓著${themeName}特有的塵土與細線，額前可見巡路刻痕、封蠟殘點與怪物爪擦過的異色紋理。`,
    body: `${slotName}以${themeName}常見材料加固胸腹，表面留下修補鉚釘、舊戰痕與工匠用來辨識來源的短記號。`,
    hands: `${slotName}掌背覆有${themeName}路線採得的硬片或皮革，指節處磨出亮痕，像是常被用來格擋與拖拉戰利品。`,
    feet: `${slotName}鞋底嵌著${themeName}地貌留下的砂粒、木刺或礦屑，後跟補強得很厚，方便在長路與戰鬥間站穩。`,
    ring: `${slotName}的環面刻著${themeName}委託印記，內圈留有細小磨痕，常被交給完成巡查或討伐的冒險者。`,
    necklace: `${slotName}垂著一枚取自${themeName}地標的小墜片，繩結和金屬扣保留當地工匠的粗實收邊。`,
    weapon: `${slotName}的刃脊混入${themeName}戰場或副本的金屬碎料，握柄壓著防滑皮條，出鞘時能看見暗色刮痕。`,
    earring: `${slotName}以${themeName}採得的小骨片、晶粒或銅鉤串成，擺動時會露出用來標記掉落來源的微小刻線。`,
    belt: `${slotName}扣片採用${themeName}補給線常見的厚金屬，皮面有捆綁藥袋、短刀和任務證物留下的壓痕。`,
  };
  return descriptions[slot] ?? `${themeName}${slotName}保留當地材料、工匠手法與戰鬥磨痕，能從外觀辨識來源與用途。`;
}

function createZoneThemeEquipmentDefs(): Record<string, ItemDef> {
  const result: Record<string, ItemDef> = {};

  for (const theme of ZONE_EQUIPMENT_THEMES) {
    const slots = theme.bossOrDungeon
      ? [...ZONE_THEME_BASE_SLOTS, ...ZONE_THEME_EXTRA_SLOTS]
      : ZONE_THEME_BASE_SLOTS;

    slots.forEach((slot, index) => {
      const id = getZoneThemeEquipmentId(theme.id, slot, index);
      const slotName = slot === 'ring' && index >= ZONE_THEME_BASE_SLOTS.length ? '戒璽' : ZONE_THEME_SLOT_NAMES[slot];
      const levelReq = Math.max(1, theme.level + Math.floor(index / 3));
      const type = slot === 'weapon'
        ? 'weapon'
        : ['head', 'body', 'hands', 'feet', 'offhand'].includes(slot)
          ? 'armor'
          : 'accessory';
      const stat = slot === 'weapon' || slot === 'hands'
        ? 'atk'
        : slot === 'ring' || slot === 'necklace'
          ? 'luk'
          : slot === 'earring'
            ? 'int'
            : slot === 'belt'
              ? 'vit'
              : 'def';
      result[id] = {
        id,
        name: `${theme.name}${slotName}`,
        type,
        description: buildZoneThemeEquipmentDescription(theme.name, slot, slotName),
        buyPrice: 0,
        sellPrice: 90 + levelReq * 28,
        stackable: false,
        maxStack: 1,
        levelReq,
        equipSlot: slot,
        stats: { [stat]: Math.max(2, Math.floor(levelReq / 4) + index + 1) },
        rarity: theme.bossOrDungeon && index >= ZONE_THEME_BASE_SLOTS.length ? 'rare' : levelReq >= 30 ? 'uncommon' : 'common',
        sourceTags: theme.bossOrDungeon && index >= ZONE_THEME_BASE_SLOTS.length
          ? ['drop', 'boss', 'zone_theme']
          : ['drop', 'quest', 'zone_theme'],
        zoneTags: [theme.id],
      };
    });
  }

  return result;
}

type SaddleEquipmentSeed = readonly [
  id: string,
  name: string,
  description: string,
  rarity: ItemRarity,
  levelReq: number,
  stats: ItemDef['stats'],
];

const SADDLE_EQUIPMENT_SEEDS: SaddleEquipmentSeed[] = [
  ['training_saddle', '訓練馬鞍', '厚實深棕皮革馬鞍，輪廓樸素耐用，兩側有粗麻線縫邊與木質護片。', 'common', 20, { mountStability: 3, mountFatigueMax: 5 }],
  ['oiled_leather_saddle', '油革馬鞍', '黑褐色油亮皮革馬鞍，厚鞍墊與黃銅扣具適合長時間維持騎乘。', 'common', 20, { mountFatigueRecovery: 1 }],
  ['iron_stirrup_saddle', '鐵鐙馬鞍', '深棕皮革搭配沉重鐵鐙，低重心設計讓新兵更容易完成衝鋒。', 'common', 22, { mountChargePower: 4 }],
  ['guardstrap_saddle', '護帶馬鞍', '寬版護帶式馬鞍，交叉防護皮帶與盾形壓紋強調穩固包覆。', 'uncommon', 24, { mountGuardPower: 5 }],
  ['frontline_cavalry_saddle', '前線騎兵鞍', '軍用騎兵馬鞍，深紅皮革與短旗流蘇帶著前線軍團制式感。', 'uncommon', 25, { mountChargePower: 5, mountedThreatBonus: 5 }],
  ['longmarch_saddle', '長征馬鞍', '旅行用長征馬鞍，兩側掛有卷包、水袋扣環與備用馬掌袋，適合長距離世界移動與補給巡行，不強調衝鋒爆發。', 'uncommon', 26, { mountFatigueMax: 10, mountFatigueRecovery: 1 }],
  ['towerguard_saddle', '塔衛重鞍', '厚重防衛型馬鞍，塔盾形鐵片與短鏈甲護簾讓騎手更難被撼動。', 'uncommon', 28, { mountStability: 8, mountGuardPower: 4 }],
  ['charger_saddle', '衝鋒戰鞍', '銳角輪廓的衝鋒馬鞍，黑紅皮革與前傾線條為高速突擊打造。', 'rare', 30, { mountChargePower: 10 }],
  ['interceptor_saddle', '攔截者馬鞍', '深青灰皮革搭配快速解扣與警鈴，專為急轉攔截 approaching 目標設計。', 'rare', 30, { mountedInterceptBonus: 10, mountStability: 4 }],
  ['oathkeeper_saddle', '誓守馬鞍', '象牙色守誓馬鞍，盾牌與誓言卷軸浮雕帶有聖騎士儀式感，鞍橋加高可穩住守護姿態，偏向保護隊友。', 'rare', 32, { mountGuardPower: 10, mountedThreatBonus: 4 }],
  ['silver_rein_saddle', '銀韁馬鞍', '銀白韁繩與深色皮鞍組成的精良馬鞍，能讓坐騎節奏更平穩。', 'rare', 34, { mountFatigueRecovery: 2, mountStability: 5 }],
  ['bannerlord_saddle', '軍旗領主鞍', '鞍後立有短旗扣座，整體為戰線統御與仇恨牽制打造。', 'rare', 35, { mountedThreatBonus: 10, mountGuardPower: 5 }],
  ['breakline_saddle', '破陣馬鞍', '前緣包覆斜切鋼片的破陣馬鞍，適合衝破戰線並延緩敵方接近。', 'epic', 38, { mountChargePower: 8, mountedInterceptBonus: 8 }],
  ['stormhoof_saddle', '風暴蹄馬鞍', '帶有雷紋鐵扣的突擊馬鞍。特殊：衝鋒成功延後目標下一次行動，待 mounted core 支援。', 'epic', 40, { mountChargePower: 12 }],
  ['bulwark_saddle', '堡壘馬鞍', '高鞍橋與重護片構成小型壁壘。特殊：降低騎乘狀態被強制下馬機率，待 mounted core 支援。', 'epic', 40, { mountStability: 15, mountGuardPower: 8 }],
  ['rescue_saddle', '救援馬鞍', '輕量護帶與快拆扣具兼具守護與撤離。特殊：低血目標的騎乘守護更強，待 mounted core 支援。', 'epic', 42, { mountGuardPower: 12, mountedRetreatBonus: 8 }],
  ['vanguard_saddle', '先鋒馬鞍', '前線偵騎用馬鞍，鞍側斜束帶讓第一波攔截更俐落。特殊：每戰首次攔截 fatigue 消耗降低，待 mounted core 支援。', 'epic', 44, { mountedInterceptBonus: 14, mountFatigueMax: 8 }],
  ['sunspire_saddle', '日尖塔馬鞍', '白金護片與日紋鞍墊構成的聖衛馬鞍。特殊：騎乘守護吸收隊友傷害後給予護盾，待 mounted core 支援。', 'legendary', 48, { mountGuardPower: 15, mountStability: 10 }],
  ['black_lance_saddle', '黑槍馬鞍', '黑鐵槍架與暗紅皮革組成的重突擊馬鞍。特殊：長槍衝鋒暴擊傷害提高，待 mounted core 支援。', 'legendary', 50, { mountChargePower: 18, mountedThreatBonus: 8 }],
  ['last_bastion_saddle', '最後壁壘馬鞍', '厚重護片與誓約鎖鏈固定的終線守護馬鞍。特殊：每戰一次 fatigue 滿值時進入 1 tick last_bastion 而非立即下馬，待 mounted core 支援。', 'legendary', 50, { mountStability: 12, mountGuardPower: 12, mountFatigueMax: 12 }],
];

const SADDLE_EQUIPMENT_DEFS: Record<string, ItemDef> = Object.fromEntries(SADDLE_EQUIPMENT_SEEDS.map(([id, name, description, rarity, levelReq, stats]) => [id, {
  id,
  name,
  type: 'accessory',
  description,
  buyPrice: levelReq * 90,
  sellPrice: levelReq * 45,
  stackable: false,
  maxStack: 1,
  levelReq,
  classReq: ['knight'],
  equipSlot: 'saddle',
  stats,
  rarity,
  sourceTags: ['drop', 'knight', 'mounted_combat'],
  zoneTags: ['global'],
} satisfies ItemDef])) as Record<string, ItemDef>;

import { EQUIPMENT_ITEM_DEFS } from './items/equipment.js';
import { CONSUMABLES_ITEM_DEFS } from './items/consumables.js';
import { MATERIALS_ITEM_DEFS } from './items/materials.js';
import { QUESTS_ITEM_DEFS } from './items/quests.js';

const RAW_ITEM_DEFS: Record<string, ItemDef> = {
  ...createSupplementalEquipmentDefs(),
  ...createHighLevelWeaponProgressionDefs(),
  ...createWeaponTypeTopUpDefs(),
  ...createShieldTopUpDefs(),
  ...EQUIPMENT_ITEM_DEFS,
  ...CONSUMABLES_ITEM_DEFS,
  ...MATERIALS_ITEM_DEFS,
  ...QUESTS_ITEM_DEFS,
};

export const ITEM_DEFS: Record<string, ItemDef> = normalizeItemDefs({
  ...RAW_ITEM_DEFS,
  ...createZoneThemeEquipmentDefs(),
  ...SADDLE_EQUIPMENT_DEFS,
});

/** 新手初始裝備（創建角色時給予） */
export interface StarterItemGrant {
  itemId: string;
  quantity: number;
  equipped: boolean;
}

const COMMON_STARTER_ITEMS: StarterItemGrant[] = [
  { itemId: 'cloth_armor', quantity: 1, equipped: true },
  { itemId: 'small_hp_potion', quantity: 5, equipped: false },
  { itemId: 'small_mp_potion', quantity: 3, equipped: false },
];

const STARTER_WEAPON_ITEMS_BY_CLASS: Partial<Record<ClassId, StarterItemGrant[]>> = {
  swordsman: [
    { itemId: 'wooden_sword', quantity: 1, equipped: true },
    { itemId: 'wooden_shield', quantity: 1, equipped: true },
    { itemId: 'wooden_spear', quantity: 1, equipped: true },
  ],
  mage: [
    { itemId: 'small_blade', quantity: 1, equipped: true },
    { itemId: 'willow_witch_wand', quantity: 1, equipped: true },
    { itemId: 'chalkcircle_focus', quantity: 1, equipped: true },
  ],
  ranger: [
    { itemId: 'small_blade', quantity: 1, equipped: true },
    { itemId: 'short_bow', quantity: 1, equipped: true },
  ],
  priest: [
    { itemId: 'fieldstone_carpenter_hammer', quantity: 1, equipped: true },
    { itemId: 'wooden_scepter', quantity: 1, equipped: true },
    { itemId: 'chalkcircle_focus', quantity: 1, equipped: true },
  ],
};

/** 舊預設：冒險者或未指定職業使用。 */
export const STARTER_ITEMS: StarterItemGrant[] = [
  { itemId: 'wooden_sword', quantity: 1, equipped: true },
  ...COMMON_STARTER_ITEMS,
];

export function getStarterItemsForClass(classId: ClassId): StarterItemGrant[] {
  return [
    ...(STARTER_WEAPON_ITEMS_BY_CLASS[classId] ?? [{ itemId: 'wooden_sword', quantity: 1, equipped: true }]),
    ...COMMON_STARTER_ITEMS,
  ];
}

/** NPC 商店：新手村雜貨店 */
export const SHOP_STARTER_VILLAGE = [
  'small_hp_potion', 'small_mp_potion', 'antidote',
  'iron_sword', 'oak_staff', 'short_bow', 'wooden_scepter',
  'leather_armor', 'leather_cap', 'leather_gloves', 'leather_boots',
  'wooden_ring',
];

/** NPC 商店：城鎮武器店 */
export const SHOP_TOWN_WEAPONS = [
  'steel_sword', 'oak_staff', 'long_bow', 'holy_scepter',
  'crystal_staff', 'composite_bow', 'divine_scepter',
  'flame_blade', 'storm_staff', 'shadow_bow', 'radiant_scepter',
];

/** NPC 商店：城鎮護甲店 */
export const SHOP_TOWN_ARMOR = [
  'chain_mail', 'mage_robe', 'iron_helm', 'iron_gauntlets', 'iron_boots',
  'plate_armor', 'mage_hat', 'swift_boots',
  'guardian_plate', 'archmage_robe', 'wind_runner_armor',
  'mithril_helm', 'mithril_gauntlets', 'mithril_greaves',
  'lucky_charm', 'power_amulet', 'wisdom_amulet', 'warriors_pendant', 'mage_earring',
];

/** NPC 商店：城鎮藥水店 */
export const SHOP_TOWN_POTIONS = [
  'small_hp_potion', 'medium_hp_potion', 'large_hp_potion',
  'small_mp_potion', 'medium_mp_potion', 'large_mp_potion',
  'antidote',
];

/** 根據 ID 取得物品定義 */
export function getItemDef(itemId: string): ItemDef | undefined {
  return ITEM_DEFS[itemId];
}

/** 取得指定等級範圍的裝備 */
export function getEquipmentForLevel(minLevel: number, maxLevel: number): ItemDef[] {
  return Object.values(ITEM_DEFS).filter(
    (item) =>
      (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') &&
      item.levelReq >= minLevel &&
      item.levelReq <= maxLevel,
  );
}

// ============================================================
//  裝備套裝系統
// ============================================================

export interface SetBonusTier {
  /** 需要的套裝件數 */
  pieces: number;
  /** 描述（中文） */
  description: string;
  /** 屬性加成（百分比的用 pct 後綴） */
  bonusStats?: Partial<import('../types/item.js').ItemStats>;
  /** 百分比加成 */
  bonusPct?: {
    atk?: number;
    matk?: number;
    def?: number;
    mdef?: number;
    int?: number;
    dex?: number;
    vit?: number;
    str?: number;
    critRate?: number;
    dodgeRate?: number;
    healPower?: number;
    spellPower?: number;
    critDamage?: number;
    mpCostReduction?: number;
    faithRegen?: number;
  };
}

export interface EquipmentSetDef {
  id: string;
  name: string;
  description: string;
  /** 套裝中的物品 ID 列表（武器需要玩家自選對應 weaponType 且 setId 匹配） */
  itemIds: string[];
  /** 可作為套裝武器的 weaponType 列表 */
  weaponTypes?: import('../types/item.js').WeaponType[];
  bonuses: SetBonusTier[];
}

/** 套裝武器：劍聖之裝的武器包含 mithril_katana 和 dragon_mark_katana */
// 在 ITEM_DEFS 中已經用 setId 標記了套裝部件

export const EQUIPMENT_SETS: Record<string, EquipmentSetDef> = {
  sword_saint_set: {
    id: 'sword_saint_set',
    name: '劍聖之裝',
    description: '為戰士職業打造的傳說套裝，揮劍如虹。',
    itemIds: ['mithril_katana', 'dragon_mark_katana', 'mithril_spear', 'dragon_fang_spear', 'mithril_greataxe', 'dragon_slayer_greataxe', 'sword_saint_armor', 'sword_saint_ring'],
    bonuses: [
      {
        pieces: 2,
        description: 'ATK +10%',
        bonusPct: { atk: 10 },
      },
      {
        pieces: 3,
        description: '暴擊率 +15%，STR +20',
        bonusPct: { critRate: 15 },
        bonusStats: { str: 20 },
      },
    ],
  },
  archmage_set: {
    id: 'archmage_set',
    name: '大法師之裝',
    description: '為法師職業打造的傳說套裝，魔力洪流。',
    itemIds: ['mithril_elemental_staff', 'dragon_breath_elemental_staff', 'mithril_grimoire', 'dragonblood_grimoire', 'mithril_hourglass_staff', 'dragon_time_hourglass_staff', 'archmage_set_robe', 'archmage_set_ring'],
    bonuses: [
      {
        pieces: 2,
        description: 'INT +15%',
        bonusPct: { int: 15 },
      },
      {
        pieces: 3,
        description: '法術威力 +20%，MP 消耗 -10%',
        bonusPct: { spellPower: 20, mpCostReduction: 10 },
      },
    ],
  },
  shadow_hunter_set: {
    id: 'shadow_hunter_set',
    name: '暗影獵手之裝',
    description: '為遊俠職業打造的傳說套裝，暗影無蹤。',
    itemIds: ['mithril_crossbow', 'dragon_fang_crossbow', 'mithril_blade', 'dragon_scale_blade', 'mithril_whip', 'dragon_sinew_whip', 'shadow_hunter_armor', 'shadow_hunter_ring'],
    bonuses: [
      {
        pieces: 2,
        description: 'DEX +10%',
        bonusPct: { dex: 10 },
      },
      {
        pieces: 3,
        description: '迴避率 +15%，暴擊傷害 +25%',
        bonusPct: { dodgeRate: 15, critDamage: 25 },
      },
    ],
  },
  holy_guardian_set: {
    id: 'holy_guardian_set',
    name: '聖光守護之裝',
    description: '為祭司職業打造的傳說套裝，聖光庇護。',
    itemIds: ['mithril_holy_tome', 'dragon_holy_tome', 'mithril_nature_staff', 'dragon_tree_nature_staff', 'mithril_warhammer', 'dragonbone_warhammer', 'holy_guardian_armor', 'holy_guardian_ring'],
    bonuses: [
      {
        pieces: 2,
        description: '治癒力量 +15%',
        bonusPct: { healPower: 15 },
      },
      {
        pieces: 3,
        description: 'VIT +20，信仰回復 +5/回合',
        bonusStats: { vit: 20 },
        bonusPct: { faithRegen: 5 },
      },
    ],
  },
};

/** 計算角色的套裝加成 */
export function calculateSetBonuses(equippedItemIds: string[]): {
  activeSetNames: string[];
  bonusStats: Partial<import('../types/item.js').ItemStats>;
  bonusPct: Record<string, number>;
} {
  const bonusStats: Record<string, number> = {};
  const bonusPct: Record<string, number> = {};
  const activeSetNames: string[] = [];

  for (const set of Object.values(EQUIPMENT_SETS)) {
    // Count how many items from this set are equipped
    const count = equippedItemIds.filter(id => {
      const def = ITEM_DEFS[id];
      return def?.setId === set.id || set.itemIds.includes(id);
    }).length;

    for (const tier of set.bonuses) {
      if (count >= tier.pieces) {
        if (!activeSetNames.includes(`${set.name}(${tier.pieces})`)) {
          activeSetNames.push(`${set.name}(${tier.pieces})`);
        }
        if (tier.bonusStats) {
          for (const [k, v] of Object.entries(tier.bonusStats)) {
            if (v !== undefined) bonusStats[k] = (bonusStats[k] ?? 0) + v;
          }
        }
        if (tier.bonusPct) {
          for (const [k, v] of Object.entries(tier.bonusPct)) {
            if (v !== undefined) bonusPct[k] = (bonusPct[k] ?? 0) + v;
          }
        }
      }
    }
  }

  return {
    activeSetNames,
    bonusStats: bonusStats as Partial<import('../types/item.js').ItemStats>,
    bonusPct,
  };
}
