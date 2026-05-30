import type { ItemDef } from '../../types/item.js';

export const EXTRA_MATERIALS_ITEM_DEFS: Record<string, ItemDef> = {
cinder_crust: {
    id: 'cinder_crust', name: '焦泉礦殼', type: 'material',
    description: '焦泉與火靈盆地邊緣剝落的黑色礦殼，遇冷後仍會散出淡淡熱氣。可作為耐火護具與火成藥劑材料。',
    buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['redrock_badlands', 'monster_drop', 'gathering'], zoneTags: ['redrock_badlands'],
  },

blackflag_token: {
    id: 'blackflag_token', name: '黑旗令牌', type: 'material',
    description: '黑旗盜匪用來辨識哨塔、營地與伏擊峽谷小隊的鐵牌，背面刻有粗糙路線記號。',
    buyPrice: 0, sellPrice: 26,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['redrock_badlands', 'monster_drop', 'salvage'], zoneTags: ['redrock_badlands'],
  },

desert_scout_spyglass: {
    id: 'desert_scout_spyglass', name: '荒地斥候望遠鏡', type: 'material',
    description: '被沙塵刮花的短筒望遠鏡，鏡片邊緣刻著距離標線。可用來偵查黑旗瞭望點與碎岩脊高處伏兵。',
    buyPrice: 0, sellPrice: 42,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['redrock_badlands', 'monster_drop', 'recon'], zoneTags: ['redrock_badlands'],
  },

blackwater_silt: {
    id: 'blackwater_silt', name: '黑水沉泥', type: 'material',
    description: '沉沒墓窟水渠與骨泥盆地沉積的冰冷黑泥，混著細碎骨粉與墓蠟。可用來判讀水位、封印與黑水污染來源。',
    buyPrice: 0, sellPrice: 34,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['sunken_catacombs', 'monster_drop', 'gathering'], zoneTags: ['sunken_catacombs'],
  },

coffin_chain_link: {
    id: 'coffin_chain_link', name: '石棺銅鏈節', type: 'material',
    description: '漂棺室與石棺漂流帶拆下的青銅鏈節，表面有潮汐符號與長年碰撞造成的缺口。',
    buyPrice: 0, sellPrice: 38,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['sunken_catacombs', 'monster_drop', 'salvage'], zoneTags: ['sunken_catacombs'],
  },

funeral_lamp_oil: {
    id: 'funeral_lamp_oil', name: '長明燈油', type: 'material',
    description: '長明燈龕殘留的藍白燈油，遇到黑水會浮出細小火星。可作為辨識真出口與淨化亡靈的媒介。',
    buyPrice: 0, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['sunken_catacombs', 'gathering', 'quest'], zoneTags: ['sunken_catacombs'],
  },

tidewheel_gear: {
    id: 'tidewheel_gear', name: '水閘齒輪', type: 'material',
    description: '水閘控制室與蛇形排水道回收的青銅齒輪，齒面刻著古代潮汐表。它能修復墓窟水位機關。',
    buyPrice: 0, sellPrice: 42,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['sunken_catacombs', 'monster_drop', 'salvage'], zoneTags: ['sunken_catacombs'],
  },

stormcharged_grass: {
    id: 'stormcharged_grass', name: '蓄雷草', type: 'material',
    description: '雷鳴草原暴雨後仍帶著微弱電光的長草，草莖會順著下一次雷暴方向彎曲。游牧者用它編成避雷繩與風向標。',
    buyPrice: 0, sellPrice: 44,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['thundersteppe', 'monster_drop', 'gathering'], zoneTags: ['thundersteppe'],
  },

thunder_eagle_plume: {
    id: 'thunder_eagle_plume', name: '雷鷹電羽', type: 'material',
    description: '雷鷹巢峰掉落的藍白羽毛，羽軸仍存著細小電弧。可用來製作抗風箭羽、避雷符與偵查信物，是草原風暴線索。',
    buyPrice: 0, sellPrice: 56,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['thundersteppe', 'monster_drop', 'gathering'], zoneTags: ['thundersteppe'],
  },

fulgurite_shard: {
    id: 'fulgurite_shard', name: '雷熔玻片', type: 'material',
    description: '風暴玻岩與世界王火坑邊緣採得的黑藍玻片，由雷擊瞬間熔化草土凝成。內部封著細小氣泡與焦草紋。',
    buyPrice: 0, sellPrice: 62,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['thundersteppe', 'monster_drop', 'hidden_cache'], zoneTags: ['thundersteppe'],
  },

stormhoof_plate: {
    id: 'stormhoof_plate', name: '雷蹄甲片', type: 'material',
    description: '雷蹄渡口附近巨獸蹄甲剝落的硬片，邊緣帶著被電流磨圓的裂痕。可加固靴底、盾面與坐騎護具。',
    buyPrice: 0, sellPrice: 52,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['thundersteppe', 'monster_drop'], zoneTags: ['thundersteppe'],
  },

fused_glass_sand: {
    id: 'fused_glass_sand', name: '熔融玻砂', type: 'material',
    description: '琉璃沙丘表層刮下的透明砂粒，日照下會像水一樣流動。工匠用它調製耐熱釉料與折光粉。',
    buyPrice: 0, sellPrice: 58,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['glass_dunes', 'monster_drop', 'gathering'], zoneTags: ['glass_dunes'],
  },

mirror_shard_plate: {
    id: 'mirror_shard_plate', name: '鏡砂甲片', type: 'material',
    description: '玻砂獸與沙蜥背上剝落的反光甲片，邊緣薄如刀刃。可用於製作遮光面罩、反射護甲與陷阱標記。',
    buyPrice: 0, sellPrice: 64,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['glass_dunes', 'monster_drop'], zoneTags: ['glass_dunes'],
  },

obsidian_well_salt: {
    id: 'obsidian_well_salt', name: '黑曜井鹽', type: 'material',
    description: '黑曜井和鹽風切谷沉澱出的黑白鹽晶，含有微弱火脈氣味。旅人用它保存水袋，也用來測試幻影邊界。',
    buyPrice: 0, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['glass_dunes', 'gathering', 'service'], zoneTags: ['glass_dunes'],
  },

prism_lens_core: {
    id: 'prism_lens_core', name: '稜鏡透核', type: 'material',
    description: '稜鏡拱與晶魔像場回收的多面透核，能把烈日切成七道可見光線。古王朝曾用它校準日輪熔臺。',
    buyPrice: 0, sellPrice: 78,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['glass_dunes', 'monster_drop', 'salvage'], zoneTags: ['glass_dunes'],
  },

lantern_fungus_oil: {
    id: 'lantern_fungus_oil', name: '菌燈油', type: 'material',
    description: '菌燈庭園榨出的淡綠燈油，燃燒時不冒煙，適合地底旅店、碼頭與卷宗庫使用，也能標記暗河夜航路線。',
    buyPrice: 90, sellPrice: 45,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['underground_city', 'gathering', 'service'], zoneTags: ['underground_city'],
  },

grave_bell_clapper: {
    id: 'grave_bell_clapper', name: '墓鐘舌片', type: 'material',
    description: '無人鐘樓落下的裂銅鐘舌，敲擊時只會發出像遠處哭聲的悶響。守夜人用它判斷詛咒霧是否正在靠近。',
    buyPrice: 0, sellPrice: 72,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['cursed_graveyard', 'monster_drop', 'salvage'], zoneTags: ['cursed_graveyard'],
  },

grave_bone_shard: {
    id: 'grave_bone_shard', name: '墓園骨片', type: 'material',
    description: '沉墓地與骨橋上散落的灰白骨片，表面刻著墓園鐘聲震出的細紋。可用來追蹤骸兵葬列與骨橋結構。',
    buyPrice: 0, sellPrice: 58,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['cursed_graveyard', 'monster_drop', 'salvage'], zoneTags: ['cursed_graveyard'],
  },

black_mist_residue: {
    id: 'black_mist_residue', name: '黑霧殘渣', type: 'material',
    description: '黑霧池與瘟疫坑邊緣凝成的黏冷殘渣，會沿瓶壁逆流。可用來辨識詛咒濃度與亡靈聚集方向。',
    buyPrice: 0, sellPrice: 68,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['cursed_graveyard', 'monster_drop', 'gathering'], zoneTags: ['cursed_graveyard'],
  },

cracked_saint_lens: {
    id: 'cracked_saint_lens', name: '破聖像透片', type: 'material',
    description: '破聖像眼窩裡拆下的乳白玻片，月光穿過時會短暫照出被詛咒者生前的輪廓。',
    buyPrice: 0, sellPrice: 76,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['cursed_graveyard', 'monster_drop', 'salvage'], zoneTags: ['cursed_graveyard'],
  },

highland_stormfeather: {
    id: 'highland_stormfeather', name: '高原風暴羽', type: 'material',
    description: '風暴高原鷹群與獅鷲巢穴掉落的灰藍羽毛，羽緣永遠順著強風顫動。可用來製作抗風箭羽與高空信標。',
    buyPrice: 0, sellPrice: 82,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['storm_highlands', 'monster_drop', 'gathering'], zoneTags: ['storm_highlands'],
  },

stormgoat_horn: {
    id: 'stormgoat_horn', name: '暴風山羊角', type: 'material',
    description: '山羊岩階附近巨角獸折落的螺旋角，角根有被雷雨反覆洗出的黑紋。高原嚮導用它固定攀繩。',
    buyPrice: 0, sellPrice: 74,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['storm_highlands', 'monster_drop'], zoneTags: ['storm_highlands'],
  },

stormglass_ore: {
    id: 'stormglass_ore', name: '風暴玻礦', type: 'material',
    description: '斷烽臺與風暴玻礦脈採得的黑亮礦石，內部封著細小閃電紋。鍛造時會發出像遠雷的低鳴。',
    buyPrice: 0, sellPrice: 90,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['storm_highlands', 'monster_drop', 'mining'], zoneTags: ['storm_highlands'],
  },

blackbark_charcoal: {
    id: 'blackbark_charcoal', name: '黑木炭皮', type: 'material',
    description: '黑木林炭樹剝落的焦黑樹皮，摸起來冰冷卻會吞掉火光。獵人用它塗抹箭桿與路標，避免夜裡被樹影發現。',
    buyPrice: 0, sellPrice: 84,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['blackwood', 'monster_drop', 'gathering'], zoneTags: ['blackwood'],
  },

umbral_spider_silk: {
    id: 'umbral_spider_silk', name: '幽影蛛絲', type: 'material',
    description: '織網岔口和毒蕨林採得的暗色蛛絲，離開陰影後會短暫變透明。可用於陷阱、縫線與消音弓弦。',
    buyPrice: 0, sellPrice: 78,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['blackwood', 'monster_drop', 'gathering'], zoneTags: ['blackwood'],
  },

nightfern_venom: {
    id: 'nightfern_venom', name: '夜蕨毒液', type: 'material',
    description: '毒蕨林和黑苔床滲出的墨綠毒液，會讓火把光圈慢慢縮小。女巫用它調配迷路藥與破影箭毒。',
    buyPrice: 0, sellPrice: 82,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['blackwood', 'monster_drop', 'gathering'], zoneTags: ['blackwood'],
  },

royal_timeglass: {
    id: 'royal_timeglass', name: '王都時砂玻', type: 'material',
    description: '失落王都停鐘廣場與時裂長廊散落的細碎玻砂，每一粒都像封著崩壞前一秒的光。可用來校準時間裂隙。',
    buyPrice: 0, sellPrice: 96,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['lost_capital', 'monster_drop', 'salvage'], zoneTags: ['lost_capital'],
  },

marble_gargoyle_eye: {
    id: 'marble_gargoyle_eye', name: '白石像鬼眼', type: 'material',
    description: '王都雕像庭園與日輪禮拜堂的白石守衛眼核，內部有光暗交錯的裂紋。它能辨識王都仍在運作的守衛命令。',
    buyPrice: 0, sellPrice: 88,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['lost_capital', 'monster_drop', 'salvage'], zoneTags: ['lost_capital'],
  },

senate_wax_tablet: {
    id: 'senate_wax_tablet', name: '議政蠟版', type: 'material',
    description: '市政檔案館與議政廢廳回收的黑金蠟版，上面還留著王都崩壞前最後一道投票刻痕。',
    buyPrice: 0, sellPrice: 92,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['lost_capital', 'monster_drop', 'archive'], zoneTags: ['lost_capital'],
  },

sky_rune_shard: {
    id: 'sky_rune_shard', name: '浮空符文片', type: 'material',
    description: '浮空群島符文錨臺和斷方尖碑剝落的白金碎片，仍帶著讓石塊懸浮的微弱推力。站在浮空群島入口使用時，可定位副本雲橋，不會消耗。',
    buyPrice: 0, sellPrice: 110,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['sky_isles', 'monster_drop', 'salvage'], zoneTags: ['sky_isles'],
  },

cloudsilver_plume: {
    id: 'cloudsilver_plume', name: '雲銀長羽', type: 'material',
    description: '雷鷹巢島與雲上草甸掉落的銀白長羽，羽軸會吸附雲霧。可用於高階飛行符、箭羽與神殿祭旗，是浮島探索材料。',
    buyPrice: 0, sellPrice: 104,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['sky_isles', 'monster_drop', 'gathering'], zoneTags: ['sky_isles'],
  },

halo_prism_core: {
    id: 'halo_prism_core', name: '光環稜核', type: 'material',
    description: '光環庭院與天鏡池中凝出的多面光核，能把雷光折成柔和白環。它是雲神殿機關的主要能源。',
    buyPrice: 0, sellPrice: 122,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['sky_isles', 'monster_drop', 'salvage'], zoneTags: ['sky_isles'],
  },

// ============ 魚類素材 (Fishing) ============

  // ─── Common (Lv 1-5) ───
  small_fish: {
    id: 'small_fish', name: '小魚', type: 'material',
    description: '掌心大小的銀灰小魚，鱗片還帶著溪水亮光，尾鰭薄得幾乎透明，是初階料理常用魚材。', buyPrice: 0, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },

river_carp: {
    id: 'river_carp', name: '河鯉', type: 'material',
    description: '河水中常見的銀灰鯉魚，鱗片濕亮，腹部飽滿，是市集與旅店都收的料理魚材。', buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },

mud_loach: {
    id: 'mud_loach', name: '泥鰍', type: 'material',
    description: '滑溜泥鰍身上覆著細泥，背線呈深褐色，放在竹簍中仍會不停翻動，可熬成耐力湯底。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },

freshwater_shrimp: {
    id: 'freshwater_shrimp', name: '淡水蝦', type: 'material',
    description: '清澈溪流中的透明小蝦，細腳仍帶著水草碎屑，煮熟後會變成淡淡粉紅色。', buyPrice: 0, sellPrice: 8,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },

// ─── Uncommon (Lv 5-10) ───
  silver_trout: {
    id: 'silver_trout', name: '銀鱒魚', type: 'material',
    description: '銀鱒魚鱗片閃著溪光，游速極快，需要穩定釣技才能拉上岸，是敏捷料理的鮮美主材。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },

spotted_bass: {
    id: 'spotted_bass', name: '斑點鱸魚', type: 'material',
    description: '鱸魚銀白魚身佈滿深色斑點，魚鰭有力，離水後仍會拍打出響亮水聲，適合烤成補給餐。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },

blue_catfish: {
    id: 'blue_catfish', name: '藍鯰魚', type: 'material',
    description: '夜間活動的藍鯰魚有長鬚與深藍背光，魚皮滑亮，腹部帶著河泥氣味，可作夜行藥膳。', buyPrice: 0, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },

golden_crab: {
    id: 'golden_crab', name: '金色螃蟹', type: 'material',
    description: '金黃色硬殼螃蟹有細小白斑，蟹鉗像打磨過的銅扣，腹甲仍沾著濕沙，可剝取堅韌殼片。', buyPrice: 0, sellPrice: 45,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },

// ─── Rare (Lv 10-18) ───
  rainbow_fish: {
    id: 'rainbow_fish', name: '彩虹魚', type: 'material',
    description: '珍稀小魚的鱗片會折出七色光帶，魚尾近乎透明，像把一段彩虹封在水中。', buyPrice: 0, sellPrice: 80,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },

crystal_shrimp: {
    id: 'crystal_shrimp', name: '水晶蝦', type: 'material',
    description: '水晶蝦身體近乎透明，只在水晶洞窟冷泉附近出沒，甲殼可磨成折光粉與精緻料理。', buyPrice: 0, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },

dragon_koi: {
    id: 'dragon_koi', name: '龍錦鯉', type: 'material',
    description: '龍錦鯉有金紅鱗片與細長龍鬚，額前凸起小角，游動時像拖著火色綢帶，可入高級宴席。', buyPrice: 0, sellPrice: 120,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },

moonlight_eel: {
    id: 'moonlight_eel', name: '月光鰻', type: 'material',
    description: '細長月光鰻身體泛著乳白冷光，只在月夜浮出水面，鰭邊像薄銀絲，是月系藥劑材料。', buyPrice: 0, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },

// ─── Epic (Lv 18-25) ───
  abyssal_angler: {
    id: 'abyssal_angler', name: '深淵鮟鱇', type: 'material',
    description: '來自深海的鮟鱇魚頭頂燈籠散發幽藍光芒，魚油可製成深水照明與暗潮誘餌。', buyPrice: 0, sellPrice: 300,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },

phoenix_fish: {
    id: 'phoenix_fish', name: '鳳凰魚', type: 'material',
    description: '鳳凰魚鱗片如火焰般燃燒，離水後仍有暖光脈動，可用於火焰料理與復甦儀式。', buyPrice: 0, sellPrice: 400,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },

frost_salmon: {
    id: 'frost_salmon', name: '霜之鮭魚', type: 'material',
    description: '霜白鮭魚背部覆著細冰晶，銀藍魚鱗間冒著冷霧，魚鰓像凍住的紅葉，可製寒抗餐。', buyPrice: 0, sellPrice: 350,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },

thunder_ray: {
    id: 'thunder_ray', name: '雷鰩', type: 'material',
    description: '雷鰩寬扁魚身上有藍白電紋，尾刺仍會噼啪作響，捕捉後必須用乾木夾固定。', buyPrice: 0, sellPrice: 380,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },

// ─── Legendary (Lv 25-30) ───
  sea_dragon_fry: {
    id: 'sea_dragon_fry', name: '海龍幼魚', type: 'material',
    description: '海龍幼魚身披青金細鱗，頭側長著柔軟鬚角，周圍海水會因牠的呼吸微微發亮。', buyPrice: 0, sellPrice: 800,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
  },

celestial_jellyfish: {
    id: 'celestial_jellyfish', name: '天界水母', type: 'material',
    description: '半透明天界水母像一盞漂浮星燈，細長觸手閃爍銀白光點，離水後仍緩慢脈動。', buyPrice: 0, sellPrice: 1000,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
  },

void_squid: {
    id: 'void_squid', name: '虛空烏賊', type: 'material',
    description: '深紫烏賊的觸腕像墨色絲帶般扭曲，透明外膜下閃著細小星點與裂縫光。', buyPrice: 0, sellPrice: 1200,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
  },

world_serpent_scale: {
    id: 'world_serpent_scale', name: '世界蛇之鱗', type: 'material',
    description: '世界蛇之鱗據說由環世巨蛇脫落，墨綠鱗面刻著環形紋，可作傳說護甲核心。', buyPrice: 0, sellPrice: 2000,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
  },

// ─── 星隕坑材料與星核聖物 (Lv 48-58) ───
  stariron_nodule: {
    id: 'stariron_nodule', name: '星鐵核粒', type: 'material',
    description: '星鐵散地挖出的銀黑核粒，表面會隨天空星位改變亮度，是打造高階星鐵裝備的基礎礦材。',
    buyPrice: 2400, sellPrice: 1200, stackable: true, maxStack: 99, levelReq: 48, rarity: 'epic',
  },

radiant_glass_sand: {
    id: 'radiant_glass_sand', name: '輻光玻砂', type: 'material',
    description: '隕星高熱把坑壁熔成的發光玻砂，握在手中會留下淡金光痕，可用於折射護符與照明粉。',
    buyPrice: 2600, sellPrice: 1300, stackable: true, maxStack: 99, levelReq: 49, rarity: 'epic',
  },

magnetized_meteorite: {
    id: 'magnetized_meteorite', name: '磁化隕鐵', type: 'material',
    description: '磁化尖塔周圍吸附出的隕鐵塊，能牽動金屬工具與雷光，是穩定重力井前最重要的導電材料。',
    buyPrice: 3000, sellPrice: 1500, stackable: true, maxStack: 99, levelReq: 50, rarity: 'legendary',
  },

comet_shard: {
    id: 'comet_shard', name: '彗星碎片', type: 'material',
    description: '彗片礦井中剝落的冷白晶片，邊緣拖著細小星尾，常被觀測者用來校準星圖與遠距傳訊。',
    buyPrice: 3200, sellPrice: 1600, stackable: true, maxStack: 99, levelReq: 51, rarity: 'legendary',
  },

gravity_lens: {
    id: 'gravity_lens', name: '重力透鏡', type: 'material',
    description: '重力井內凝結出的透明弧片，透過它觀察物體時距離會被拉長或壓縮，是研究星核裂縫的關鍵材料。',
    buyPrice: 3600, sellPrice: 1800, stackable: true, maxStack: 99, levelReq: 53, rarity: 'legendary',
  },

// ─── 時間廢墟材料與零分核心 (Lv 50-60) ───
  reversed_hourglass_sand: {
    id: 'reversed_hourglass_sand', name: '倒流沙漏砂', type: 'material',
    description: '沙漏廣場中逆向流動的銀砂，離開容器後仍會向上漂浮，可用於校準時間線儀式。',
    buyPrice: 2800, sellPrice: 1400, stackable: true, maxStack: 99, levelReq: 50, rarity: 'epic',
  },

broken_clock_gear: {
    id: 'broken_clock_gear', name: '碎鐘齒輪', type: 'material',
    description: '碎鐘路與停擺鐘塔剝落的黑銅齒輪，齒痕會重複敲出同一秒鐘的回音，可修復時間機關。',
    buyPrice: 3000, sellPrice: 1500, stackable: true, maxStack: 99, levelReq: 51, rarity: 'epic',
  },

memory_reef_pearl: {
    id: 'memory_reef_pearl', name: '記憶礁珠', type: 'material',
    description: '倒流河岸沖上記憶礁的灰白珠核，內部封著陌生人的過去與還未發生的告別。',
    buyPrice: 3400, sellPrice: 1700, stackable: true, maxStack: 99, levelReq: 52, rarity: 'legendary',
  },

paradox_splinter: {
    id: 'paradox_splinter', name: '悖論裂片', type: 'material',
    description: '悖論迴廊中互相否定的時線碎片，邊緣會不斷變成剛裂開與早已風化兩種狀態。',
    buyPrice: 3800, sellPrice: 1900, stackable: true, maxStack: 99, levelReq: 54, rarity: 'legendary',
  },

causality_thread: {
    id: 'causality_thread', name: '因果絲線', type: 'material',
    description: '因果井底部拉出的透明絲線，能短暫把原因與結果縫在一起，是零分核心前最危險的媒介。',
    buyPrice: 4200, sellPrice: 2100, stackable: true, maxStack: 99, levelReq: 56, rarity: 'legendary',
  },

// ─── 星界荒原材料與黑星聖物 (Lv 52-60) ───
  astral_starsand: {
    id: 'astral_starsand', name: '星界星砂', type: 'material',
    description: '現實邊界上漂浮的銀黑砂粒，會在掌心排成陌生星座，是星界荒原最常見也最不穩定的材料。',
    buyPrice: 3200, sellPrice: 1600, stackable: true, maxStack: 99, levelReq: 52, rarity: 'epic',
  },

anchor_stone_chip: {
    id: 'anchor_stone_chip', name: '錨石碎片', type: 'material',
    description: '錨石丘剝落的灰白石片，能短暫固定飄移地平線，避免採集者被虛空裂縫拉離現實。',
    buyPrice: 3400, sellPrice: 1700, stackable: true, maxStack: 99, levelReq: 53, rarity: 'epic',
  },

voidglass_mirror: {
    id: 'voidglass_mirror', name: '虛玻鏡片', type: 'material',
    description: '鏡面虛空中剝離出的黑色鏡片，映出的不是臉，而是另一條現實邊界上的倒影。',
    buyPrice: 3800, sellPrice: 1900, stackable: true, maxStack: 99, levelReq: 54, rarity: 'legendary',
  },

pale_star_relic: {
    id: 'pale_star_relic', name: '蒼白星遺物', type: 'material',
    description: '蒼白小祠供奉的無名星骸碎片，光線微弱卻能壓住黑暗低語，是通過黑星門的穩定材料，採集時需避開虛空裂縫與現實錨點失衡。',
    buyPrice: 4200, sellPrice: 2100, stackable: true, maxStack: 99, levelReq: 55, rarity: 'legendary',
  },

black_star_sigil: {
    id: 'black_star_sigil', name: '黑星印記', type: 'material',
    description: '黑星門浮現的暗色印記，邊緣像被星光燒穿，可用來辨識荒原核心是否仍連著現實，也是星界封印與黑域入口的重要線索。',
    buyPrice: 4600, sellPrice: 2300, stackable: true, maxStack: 99, levelReq: 57, rarity: 'legendary',
  },

// ─── 終焉戰場材料與終末軍旗聖物 (Lv 55-60) ───
  broken_warbanner: {
    id: 'broken_warbanner', name: '破旗殘布', type: 'material',
    description: '終戰入口與破旗原上撕裂的軍旗殘布，布面仍記著最後一輪衝鋒的方向，靠近黑焰時會自行收緊。',
    buyPrice: 3600, sellPrice: 1800, stackable: true, maxStack: 99, levelReq: 55, rarity: 'epic',
    sourceTags: ['drop', 'shop'], zoneTags: ['final_battleground'],
  },

kingbone_oath_shard: {
    id: 'kingbone_oath_shard', name: '王骨誓片', type: 'material',
    description: '王骨石堆與誓約石圈剝落的骨白碎片，表面刻著未完成的王令，只有在戰場完全無風時才會顯字。',
    buyPrice: 4000, sellPrice: 2000, stackable: true, maxStack: 99, levelReq: 56, rarity: 'legendary',
    sourceTags: ['drop', 'shop'], zoneTags: ['final_battleground'],
  },

blackflame_ember: {
    id: 'blackflame_ember', name: '黑焰餘燼', type: 'material',
    description: '黑焰前線與餘火泥地中尚未熄滅的黑色火種，火心沒有熱度，卻會把周圍的影子燒成灰。',
    buyPrice: 4400, sellPrice: 2200, stackable: true, maxStack: 99, levelReq: 57, rarity: 'legendary',
    sourceTags: ['drop', 'shop'], zoneTags: ['final_battleground'],
  },

fallen_halo_fragment: {
    id: 'fallen_halo_fragment', name: '墜天光環碎片', type: 'material',
    description: '墜天坑與斷光橋附近拾得的白金碎環，光線像被戰場切斷，能短暫壓住黑焰與暗影腐蝕。',
    buyPrice: 4800, sellPrice: 2400, stackable: true, maxStack: 99, levelReq: 58, rarity: 'legendary',
    sourceTags: ['drop'], zoneTags: ['final_battleground'],
  },

godscar_blood_crystal: {
    id: 'godscar_blood_crystal', name: '神傷血晶', type: 'material',
    description: '神傷核心與裂世縫中凝成的暗紅晶體，內部封著神血與魔神黑火互相撕裂後留下的微弱脈動。',
    buyPrice: 5400, sellPrice: 2700, stackable: true, maxStack: 99, levelReq: 59, rarity: 'legendary',
    sourceTags: ['drop'], zoneTags: ['final_battleground'],
  },

// ─── 月光濕地材料與夢水物品 (Lv 8-16) ───
  moonflower_petal: {
    id: 'moonflower_petal', name: '月花瓣', type: 'material',
    description: '月花岸與夜花小林採得的銀白花瓣，離水後仍會在夜裡微微發光，是濕地藥師常用的鎮定材料。',
    buyPrice: 220, sellPrice: 110, stackable: true, maxStack: 99, levelReq: 8, rarity: 'uncommon',
    sourceTags: ['drop', 'shop'], zoneTags: ['moonlit_fen'],
  },

silver_reed_fiber: {
    id: 'silver_reed_fiber', name: '銀蘆纖維', type: 'material',
    description: '白蘆迷道與蘆葦入口割下的堅韌纖維，表面覆著月光般的細粉，可用來縫補防水斗篷與簡易護符。',
    buyPrice: 260, sellPrice: 130, stackable: true, maxStack: 99, levelReq: 9, rarity: 'uncommon',
    sourceTags: ['drop', 'shop'], zoneTags: ['moonlit_fen'],
  },

firefly_lantern_gland: {
    id: 'firefly_lantern_gland', name: '螢燈腺', type: 'material',
    description: '螢火池成群飛蟲留下的柔亮光腺，放入瓶中能短暫照出水面下的根系與隱藏氣泡。',
    buyPrice: 320, sellPrice: 160, stackable: true, maxStack: 99, levelReq: 10, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['moonlit_fen'],
  },

// ─── 朝聖古道材料與聖路補給 (Lv 12-22) ───
  pilgrim_bell_charm: {
    id: 'pilgrim_bell_charm', name: '朝聖鈴符', type: 'material',
    description: '鐘鈴小祠與祈願階上遺落的小鈴符，搖動時聲音很輕，卻能讓路邊殘響短暫安靜下來。',
    buyPrice: 420, sellPrice: 210, stackable: true, maxStack: 99, levelReq: 12, rarity: 'uncommon',
    sourceTags: ['drop', 'shop'], zoneTags: ['pilgrim_road'],
  },

worn_caravan_seal: {
    id: 'worn_caravan_seal', name: '磨損商隊印', type: 'material',
    description: '商隊車轍與廢棄旅舍附近拾得的舊貨印，印面被砂石磨平，仍能辨出通往聖地的補給徽記。',
    buyPrice: 520, sellPrice: 260, stackable: true, maxStack: 99, levelReq: 14, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['pilgrim_road'],
  },

white_marker_lime: {
    id: 'white_marker_lime', name: '白石灰粉', type: 'material',
    description: '白石路標與聖徒橋剝落的微亮灰粉，灑在斷石道上能短暫顯出真正的朝聖路徑。',
    buyPrice: 640, sellPrice: 320, stackable: true, maxStack: 99, levelReq: 16, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['pilgrim_road'],
  },

// ─── 鐵木要塞軍需與鍛坊物資 (Lv 18-30) ───
  ironwood_plank: {
    id: 'ironwood_plank', name: '鐵木板材', type: 'material',
    description: '鐵木要塞梁柱與林圃中切下的深色板材，質地沉重，敲擊時會發出接近黑鐵的低鳴。',
    buyPrice: 900, sellPrice: 450, stackable: true, maxStack: 99, levelReq: 18, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['ironwood_fort'],
  },

fort_supply_token: {
    id: 'fort_supply_token', name: '要塞補給牌', type: 'material',
    description: '軍需行列與補給隧道使用的鐵木小牌，背面刻著領取箭矢、乾糧與火油的簡略記號。',
    buyPrice: 1100, sellPrice: 550, stackable: true, maxStack: 99, levelReq: 20, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['ironwood_fort'],
  },

scout_signal_fuse: {
    id: 'scout_signal_fuse', name: '斥候信管', type: 'material',
    description: '信號塔與斥候棲臺使用的短火信管，點燃後會燒出不同顏色的煙，方便邊境守軍判讀敵情。',
    buyPrice: 1350, sellPrice: 675, stackable: true, maxStack: 99, levelReq: 22, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['ironwood_fort'],
  },

// ─── 琥珀森林材料與採集加工物 (Lv 20-32) ───
  golden_resin_chunk: {
    id: 'golden_resin_chunk', name: '金脂塊', type: 'material',
    description: '琥珀森林古木滲出的金色樹脂凝塊，半透明表面封著細小氣泡，是基礎採集與加工材料。',
    buyPrice: 1200, sellPrice: 600, stackable: true, maxStack: 99, levelReq: 20, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['amber_forest'],
  },

amber_vein_shard: {
    id: 'amber_vein_shard', name: '琥珀脈晶', type: 'material',
    description: '琥珀脈徑與玻璃根橋中敲下的硬質脈晶，內部有金色紋路緩慢流動，可用來校準採集工具。',
    buyPrice: 1500, sellPrice: 750, stackable: true, maxStack: 99, levelReq: 22, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['amber_forest'],
  },

waxwing_chitin: {
    id: 'waxwing_chitin', name: '封蠟蟲甲', type: 'material',
    description: '封蠟蜂巢與燼甲蟲丘附近昆蟲留下的硬甲，邊緣帶著樹脂封蠟，可耐熱也能防潮。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 99, levelReq: 24, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['amber_forest'],
  },

smoke_resin_spore: {
    id: 'smoke_resin_spore', name: '煙脂孢子', type: 'material',
    description: '煙菌坡與焦木林列飄出的灰金孢子，遇熱會釋放甜澀煙味，是火性藥劑與誘蟲餌的原料。',
    buyPrice: 2100, sellPrice: 1050, stackable: true, maxStack: 99, levelReq: 26, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['amber_forest'],
  },

// ─── 銀松山脈礦材與採集工具 (Lv 24-36) ───
  silverpine_mica: {
    id: 'silverpine_mica', name: '銀松雲母', type: 'material',
    description: '銀松山脈岩壁間剝落的銀白雲母片，夜裡會反射星光，是山脈最常見的礦材。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 99, levelReq: 24, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['silverpine_range'],
  },

frost_herb_bundle: {
    id: 'frost_herb_bundle', name: '霜草束', type: 'material',
    description: '寒草岩層與霜草岩棚採得的藍白藥草，葉面結著不會融化的細霜，可用於抗寒藥劑。',
    buyPrice: 2100, sellPrice: 1050, stackable: true, maxStack: 99, levelReq: 25, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['silverpine_range'],
  },

iceglass_ore: {
    id: 'iceglass_ore', name: '冰玻礦', type: 'material',
    description: '冰玻洞與晶石碎坡中採出的透明礦石，硬度接近水晶，握在手中會吸走多餘熱度。',
    buyPrice: 2500, sellPrice: 1250, stackable: true, maxStack: 99, levelReq: 28, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['silverpine_range'],
  },

starwatch_silver_ore: {
    id: 'starwatch_silver_ore', name: '觀星銀礦', type: 'material',
    description: '觀星脊與高山礦核出產的星點銀礦，礦面像夜空般散著微光，是高階鍛造與觀測器材材料。',
    buyPrice: 3100, sellPrice: 1550, stackable: true, maxStack: 99, levelReq: 32, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['silverpine_range'],
  },

// ─── 鹽風灘生態材料與潮汐補給 (Lv 14-24) ───
  flatsalt_crystal: {
    id: 'flatsalt_crystal', name: '白灘鹽晶', type: 'material',
    description: '退潮後在白波鹽面凝出的透明鹽晶，邊緣鋒利，常被漁夫磨成驅霧粉與防潮藥鹽。',
    buyPrice: 520, sellPrice: 260, stackable: true, maxStack: 99, levelReq: 14, rarity: 'uncommon',
    sourceTags: ['drop', 'shop'], zoneTags: ['saltwind_flats'],
  },

brine_crab_shell: {
    id: 'brine_crab_shell', name: '鹽霜厚蟹殼', type: 'material',
    description: '蟹行淺灘大型鹽蟹留下的厚殼，殼面覆著白色鹽霜，可做成耐鹽護片與海岸盾邊。',
    buyPrice: 680, sellPrice: 340, stackable: true, maxStack: 99, levelReq: 16, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['saltwind_flats'],
  },

fogbell_clapper: {
    id: 'fogbell_clapper', name: '霧鐘舌', type: 'material',
    description: '霧鐘桿與潮望廢墟間掉落的銅鐘舌，敲響時能短暫穿透鹽霧，指引退潮石道。',
    buyPrice: 850, sellPrice: 425, stackable: true, maxStack: 99, levelReq: 18, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['saltwind_flats'],
  },

// ─── 荊棘迷宮植物材料與祭壇物 (Lv 26-38) ───
  redthorn_spine: {
    id: 'redthorn_spine', name: '紅刺棘針', type: 'material',
    description: '荊棘迷宮外環與紅刺牆上剝下的硬棘，尖端滲著暗紅汁液，會在迷宮轉向時微微震動。',
    buyPrice: 1900, sellPrice: 950, stackable: true, maxStack: 99, levelReq: 26, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['thornmaze'],
  },

blackroot_vine: {
    id: 'blackroot_vine', name: '黑根藤索', type: 'material',
    description: '黑根隧道與活牆裡抽出的深色藤索，韌性極高，切斷後仍會朝最近的土壤爬動。',
    buyPrice: 2300, sellPrice: 1150, stackable: true, maxStack: 99, levelReq: 28, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['thornmaze'],
  },

moonvine_loop: {
    id: 'moonvine_loop', name: '月藤環', type: 'material',
    description: '月藤橋與靜鹿空地附近自然彎成的銀綠藤環，月光下會顯示短暫安全路徑。',
    buyPrice: 2900, sellPrice: 1450, stackable: true, maxStack: 99, levelReq: 32, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['thornmaze'],
  },

// ─── 餘燼邊境熔渣材料與邊境證物 (Lv 22-34) ───
  emberglass_shard: {
    id: 'emberglass_shard', name: '燼玻碎片', type: 'material',
    description: '餘燼邊境玻璃灰原與熔裂縫裡凝成的黑紅玻片，邊緣仍有火星慢慢游動，可用於耐火護符與熔渣偵測。',
    buyPrice: 1500, sellPrice: 750, stackable: true, maxStack: 99, levelReq: 22, rarity: 'rare',
    sourceTags: ['drop', 'gathering'], zoneTags: ['ember_march'],
  },

ashline_banner_scrap: {
    id: 'ashline_banner_scrap', name: '灰線旗布', type: 'material',
    description: '倒旗坡與戰營殘址回收的焦黑軍旗殘布，布面仍能看見撤退路線與火山爆裂當晚的軍記標線。',
    buyPrice: 1700, sellPrice: 850, stackable: true, maxStack: 99, levelReq: 24, rarity: 'rare',
    sourceTags: ['drop', 'salvage'], zoneTags: ['ember_march'],
  },

slag_iron_clinker: {
    id: 'slag_iron_clinker', name: '渣鐵熔塊', type: 'material',
    description: '渣鐵橋與餘燼鍛台剝落的粗重熔塊，敲開後能看到赤亮鐵紋，是修補邊境火線裝備的核心材料。',
    buyPrice: 2100, sellPrice: 1050, stackable: true, maxStack: 99, levelReq: 26, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['ember_march'],
  },

// ─── 白骨礁沉船鑰物與潮汐證物 (Lv 28-40) ───
  reefbone_splinter: {
    id: 'reefbone_splinter', name: '礁骨裂片', type: 'material',
    description: '白骨礁巨獸肋骨與白骨橋裂縫中剝落的灰白骨片，浸過冷潮後堅硬如石，可用來辨識退潮後露出的安全骨脊。',
    buyPrice: 2400, sellPrice: 1200, stackable: true, maxStack: 99, levelReq: 28, rarity: 'rare',
    sourceTags: ['drop', 'salvage'], zoneTags: ['reef_of_bones'],
  },

black_coral_hook: {
    id: 'black_coral_hook', name: '黑珊瑚鉤', type: 'material',
    description: '黑珊瑚切口與沉船船舷上折下的彎鉤狀珊瑚，尖端會吸附幽冷海霧，是製作開鎖針與海盜詛咒媒介的材料。',
    buyPrice: 2800, sellPrice: 1400, stackable: true, maxStack: 99, levelReq: 30, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['reef_of_bones'],
  },

tidebell_clapper: {
    id: 'tidebell_clapper', name: '礁鐘舌片', type: 'material',
    description: '礁鐘柱內部掉落的青黑金屬舌片，敲擊時會回應下一次退潮方向，常被探寶者用來判斷溺亡寶庫開門時刻。',
    buyPrice: 3200, sellPrice: 1600, stackable: true, maxStack: 99, levelReq: 32, rarity: 'epic',
    sourceTags: ['drop', 'shop'], zoneTags: ['reef_of_bones'],
  },

// ─── 藍寶湖採集材料與湖心證物 (Lv 15-25) ───
  blue_silt_ore: {
    id: 'blue_silt_ore', name: '藍泥礦砂', type: 'material',
    description: '藍寶湖淺灘與礦脈小徑沉積的藍灰礦砂，洗淨後會露出細小亮點，是低階寶石加工與湖底測脈的基礎材料。',
    buyPrice: 700, sellPrice: 350, stackable: true, maxStack: 99, levelReq: 15, rarity: 'uncommon',
    sourceTags: ['drop', 'gathering'], zoneTags: ['sapphire_lake'],
  },

glassfish_scale: {
    id: 'glassfish_scale', name: '玻魚鱗片', type: 'material',
    description: '玻魚灣與鏡淺灘出現的透明魚鱗，轉動時會折出藍光，可作為水下照明粉與折射護符材料。',
    buyPrice: 950, sellPrice: 475, stackable: true, maxStack: 99, levelReq: 17, rarity: 'uncommon',
    sourceTags: ['drop'], zoneTags: ['sapphire_lake'],
  },

sapphire_lotus_petal: {
    id: 'sapphire_lotus_petal', name: '藍蓮花瓣', type: 'material',
    description: '藍葦床與睡蓮藏點採得的厚實花瓣，葉脈像細小藍寶礦線，能穩定水性藥劑與採集者的呼吸節奏。',
    buyPrice: 1200, sellPrice: 600, stackable: true, maxStack: 99, levelReq: 19, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['sapphire_lake'],
  },

class_hall_attunement_charm: {
    id: 'class_hall_attunement_charm', name: '轉職調律符', type: 'material',
    description: '轉職大廳導師常用的薄銀符片，四角分別刻著劍、書、弓與聖杖。它能短暫穩定職業法陣，避免未熟練的冒險者在試煉前被魔力震退。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 99, levelReq: 10, rarity: 'uncommon',
    sourceTags: ['service', 'shop'], zoneTags: ['lakeside_town'],
  },

// ─── 王道市集交易憑證與特色商品 (Lv 1-60) ───
  kingsroad_trade_token: {
    id: 'kingsroad_trade_token', name: '王道交易牌', type: 'material',
    description: '王道市集錢幣兌換所發放的黃銅交易牌，刻有傳送陣、商隊院與拍賣帳棚三枚標記，用於記錄合法交易與寄售排程。',
    buyPrice: 300, sellPrice: 150, stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
    sourceTags: ['shop', 'service'], zoneTags: ['kingsroad_market'],
  },

referee_seal: {
    id: 'referee_seal', name: '裁判封印', type: 'material',
    description: '裁判席使用的紅蠟封印，能標記合規武器、禁用藥劑與有效勝場。破損的封印通常意味著有人想改寫比賽結果。',
    buyPrice: 1600, sellPrice: 800, stackable: true, maxStack: 99, levelReq: 12, rarity: 'rare',
    sourceTags: ['drop', 'service'], zoneTags: ['arena_quarter'],
  },

silver_antler_tip: {
    id: 'silver_antler_tip', name: '銀角鹿尖', type: 'material',
    description: '王家獵場銀徑與白鹿林間掉落的鹿角尖，表面帶著淡淡銀光。貴族委託常用它證明獵人真的追到稀有鹿群。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 99, levelReq: 20, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['royal_hunting_grounds'],
  },

boar_trophy_tusk: {
    id: 'boar_trophy_tusk', name: '獵豬戰牙', type: 'material',
    description: '泥沼野豬與王家鬥豬撞裂樹根後留下的厚重獠牙，牙根仍帶著黑泥味，可製成獵場徽章或重弩飾件。',
    buyPrice: 1600, sellPrice: 800, stackable: true, maxStack: 99, levelReq: 18, rarity: 'uncommon',
    sourceTags: ['drop', 'shop'], zoneTags: ['royal_hunting_grounds'],
  },

falconry_jess: {
    id: 'falconry_jess', name: '獵隼足繩', type: 'material',
    description: '獵隼棲架與獅鷲崖上回收的細皮足繩，銅扣刻著王室鷹徽。它能追溯是哪一支獵隊放飛過猛禽。',
    buyPrice: 2200, sellPrice: 1100, stackable: true, maxStack: 99, levelReq: 22, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['royal_hunting_grounds'],
  },

soot_scripture_leaf: {
    id: 'soot_scripture_leaf', name: '焦黑經頁', type: 'material',
    description: '燻黑書庫和灰抄經室裡殘存的經頁，字跡被火線燒斷卻沒有完全消失。拓印師能從灰痕中復原禁儀片段。',
    buyPrice: 2600, sellPrice: 1300, stackable: true, maxStack: 99, levelReq: 36, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['ashfall_monastery'],
  },

censer_chain_link: {
    id: 'censer_chain_link', name: '斷香爐鏈節', type: 'material',
    description: '香爐廳垂落的黑鐵鏈節，孔洞裡塞滿灰與乾香。它曾用來固定驅邪香爐，如今常被煙怨靈拖著作響。',
    buyPrice: 2400, sellPrice: 1200, stackable: true, maxStack: 99, levelReq: 38, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['ashfall_monastery'],
  },

// ─── 霜咬隘口失商與極北封印 (Lv 28-38) ───
  stormglass_shard: {
    id: 'stormglass_shard', name: '暴雪玻璃片', type: 'material',
    description: '白霧盆地與藍冰橋上被狂風磨出的透明冰片，邊緣像玻璃一樣鋒利。商隊嚮導用它判斷暴風雪是否帶有魔力。',
    buyPrice: 2100, sellPrice: 1050, stackable: true, maxStack: 99, levelReq: 28, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['frostbite_pass'],
  },

blue_ice_core: {
    id: 'blue_ice_core', name: '藍冰核心', type: 'material',
    description: '冰河口與晶松林深處凝成的藍色冰核，內部有像心跳一樣的白光。工匠能用它穩定極寒附魔。',
    buyPrice: 3000, sellPrice: 1500, stackable: true, maxStack: 99, levelReq: 32, rarity: 'epic',
    sourceTags: ['drop', 'shop'], zoneTags: ['frostbite_pass'],
  },

grave_banner_cloth: {
    id: 'grave_banner_cloth', name: '墓旗殘布', type: 'material',
    description: '墓旗線上撕下的黑灰旗布，針腳裡混著骨粉與舊軍印。亡者軍陣會依旗布方向重新列隊。',
    buyPrice: 3600, sellPrice: 1800, stackable: true, maxStack: 99, levelReq: 42, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['necropolis_gate'],
  },

soul_well_residue: {
    id: 'soul_well_residue', name: '魂井沉渣', type: 'material',
    description: '魂井底部凝成的黑藍色沉渣，靠近耳邊會聽見細小軍令。死靈術士用它追蹤被徵召的亡魂。',
    buyPrice: 4400, sellPrice: 2200, stackable: true, maxStack: 99, levelReq: 44, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['necropolis_gate'],
  },

// ─── 日耀尖塔日火聖物 (Lv 45-58) ───
  sunspire_lens_shard: {
    id: 'sunspire_lens_shard', name: '日鏡碎片', type: 'material',
    description: '聚光鏡室與鏡石臺掉落的白金鏡片，能把微弱火光折成刺眼日芒。尖塔修士用它測量塔內光線是否失衡。',
    buyPrice: 5200, sellPrice: 2600, stackable: true, maxStack: 99, levelReq: 45, rarity: 'epic',
    sourceTags: ['drop'], zoneTags: ['sunspire'],
  },

hymn_gold_leaf: {
    id: 'hymn_gold_leaf', name: '聖歌金箔', type: 'material',
    description: '聖歌廊牆面剝落的薄金箔，表面仍殘留唱詩聲震出的細紋。它能修補被暗影污染的聖像。',
    buyPrice: 4800, sellPrice: 2400, stackable: true, maxStack: 99, levelReq: 46, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['sunspire'],
  },

moth_lantern_dust: {
    id: 'moth_lantern_dust', name: '蛾燈銀粉', type: 'material',
    description: '蛾燈長廊裡飄落的細銀粉，在暗處會像月屑一樣發亮。妖精工匠用它修補夢境玻璃與月影帷幕。',
    buyPrice: 3600, sellPrice: 1800, stackable: true, maxStack: 99, levelReq: 39, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['moonshadow_court'],
  },

nightbloom_petal: {
    id: 'nightbloom_petal', name: '夜花瓣', type: 'material',
    description: '夜花庭只在月影最深時綻放的花瓣，握住時能短暫聽見夢境中的掌聲，可製月影香料。',
    buyPrice: 4000, sellPrice: 2000, stackable: true, maxStack: 99, levelReq: 40, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['moonshadow_court'],
  },

// ─── 機械墳場零件與核心 (Lv 35-48) ───
  rusted_servo_joint: {
    id: 'rusted_servo_joint', name: '鏽伺服關節', type: 'material',
    description: '機械墳場常見的舊式伺服關節，齒面磨損卻仍會自行抽動。拆解工可用它修補低階機械臂。',
    buyPrice: 2800, sellPrice: 1400, stackable: true, maxStack: 99, levelReq: 35, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['machine_graveyard'],
  },

copper_coil_spool: {
    id: 'copper_coil_spool', name: '銅線線圈', type: 'material',
    description: '銅脈棚與火花軌上回收的厚銅線圈，仍殘留不穩定電荷。它是重啟古代裝置最實用的材料。',
    buyPrice: 3200, sellPrice: 1600, stackable: true, maxStack: 99, levelReq: 36, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['machine_graveyard'],
  },

// ─── 血鹽海岸海盜與血祭材料 (Lv 32-44) ───
  bloodsalt_crystal: {
    id: 'bloodsalt_crystal', name: '血鹽晶', type: 'material',
    description: '紅潮退去後留在鹽灘上的暗紅鹽晶，帶有鐵鏽與海腥味。海盜會把它磨入刀傷，血祭者則拿它標記祭品。',
    buyPrice: 2600, sellPrice: 1300, stackable: true, maxStack: 99, levelReq: 32, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['bloodsalt_coast'],
  },

red_coral_splinter: {
    id: 'red_coral_splinter', name: '紅珊瑚裂片', type: 'material',
    description: '紅珊瑚迷宮中折落的鋒利珊瑚片，會吸附附近血水並變得更硬。可用於高階毒針與血祭器具。',
    buyPrice: 3400, sellPrice: 1700, stackable: true, maxStack: 99, levelReq: 34, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['bloodsalt_coast'],
  },

// ─── 翡翠樹冠樹冠材料 (Lv 25-37) ───
  emerald_canopy_leaf: {
    id: 'emerald_canopy_leaf', name: '翡翠冠葉', type: 'material',
    description: '樹冠高處採下的厚綠葉片，葉脈帶著微弱雷光。鳥巢村落用它製作防雨披與藤橋標記。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 99, levelReq: 25, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['emerald_canopy'],
  },

storm_bough_splinter: {
    id: 'storm_bough_splinter', name: '雷枝木刺', type: 'material',
    description: '雷枝臺被閃電劈裂後留下的硬木刺，握住時會讓指節發麻。可用於製作帶電箭頭與樹冠護符。',
    buyPrice: 2200, sellPrice: 1100, stackable: true, maxStack: 99, levelReq: 28, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['emerald_canopy'],
  },

ancient_honeycomb_wax: {
    id: 'ancient_honeycomb_wax', name: '古蜂蠟', type: 'material',
    description: '古蜂巢深處凝成的琥珀色蜂蠟，混著樹脂與花粉。樹冠居民會用它封住高處裂木。',
    buyPrice: 2000, sellPrice: 1000, stackable: true, maxStack: 99, levelReq: 26, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['emerald_canopy'],
  },

// ─── 空心山礦脈與山心材料 (Lv 36-50) ───
  hollow_wind_ore: {
    id: 'hollow_wind_ore', name: '空風礦', type: 'material',
    description: '風門與螺旋礦坡間採出的多孔礦石，放在耳邊會發出低沉山鳴。礦工用它判斷空心山內部風壓是否穩定。',
    buyPrice: 4200, sellPrice: 2100, stackable: true, maxStack: 99, levelReq: 36, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['hollow_mountain'],
  },

frost_vein_crystal: {
    id: 'frost_vein_crystal', name: '霜脈晶', type: 'material',
    description: '霜脈壁和冰鏈廊中凝出的淡藍晶體，裂面像被寒風磨過。可用於穩定高階冰屬附魔與冷卻礦鑽。',
    buyPrice: 4800, sellPrice: 2400, stackable: true, maxStack: 99, levelReq: 38, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['hollow_mountain'],
  },

thunder_ore_shard: {
    id: 'thunder_ore_shard', name: '雷礦碎片', type: 'material',
    description: '雷礦橋與風暴蓄能室剝落的帶電礦片，邊緣會在黑暗中跳出細小火花。它是空心山最危險也最值錢的礦材。',
    buyPrice: 5600, sellPrice: 2800, stackable: true, maxStack: 99, levelReq: 39, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['hollow_mountain'],
  },

black_granite_plate: {
    id: 'black_granite_plate', name: '黑花崗板', type: 'material',
    description: '黑花崗切場切下的厚重石板，表面吸音且耐震。洞城工匠會把它嵌進升降臺與礦車底盤。',
    buyPrice: 5200, sellPrice: 2600, stackable: true, maxStack: 99, levelReq: 40, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['hollow_mountain'],
  },

old_drill_bit: {
    id: 'old_drill_bit', name: '舊鑽頭', type: 'material',
    description: '舊鑽巢中拆下的磨鈍鑽頭，內圈仍刻著礦隊編號。修整後可作為採礦工具的替換零件。',
    buyPrice: 0, sellPrice: 3000, stackable: true, maxStack: 30, levelReq: 41, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['hollow_mountain'],
  },

// ─── 蛇河三角洲濕地材料 (Lv 18-30) ───
  reedscale_strip: {
    id: 'reedscale_strip', name: '蘆鱗條', type: 'material',
    description: '蛇河三角洲蘆岸與鱗網場收集的長條鱗片，表面像濕蘆葉一樣有細密紋路。漁民會把它編進防水網具。',
    buyPrice: 1200, sellPrice: 600, stackable: true, maxStack: 99, levelReq: 18, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['serpent_delta'],
  },

blue_lotus_petal: {
    id: 'blue_lotus_petal', name: '藍蓮瓣', type: 'material',
    description: '藍蓮沼中只在冷霧裡張開的花瓣，花面帶著淡淡冰光。祭司用它平衡蛇毒與寒氣。',
    buyPrice: 1600, sellPrice: 800, stackable: true, maxStack: 99, levelReq: 20, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['serpent_delta'],
  },

cold_mist_vial: {
    id: 'cold_mist_vial', name: '冷霧瓶', type: 'material',
    description: '從冷水彎與冰霧水道封存的白霧小瓶，瓶壁永遠潮濕。可用於冰屬藥劑、陷阱與渡河護符。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 99, levelReq: 21, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['serpent_delta'],
  },

serpent_egg_shell: {
    id: 'serpent_egg_shell', name: '蛇卵殼', type: 'material',
    description: '蛇卵丘中破開的厚殼碎片，內側有冰藍黏膜。三角洲藥師會把它磨粉，用來中和毒液。',
    buyPrice: 1500, sellPrice: 750, stackable: true, maxStack: 99, levelReq: 22, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['serpent_delta'],
  },

// ─── 黑曜深層材料與熔爐核心 (Lv 45-55) ───
  mirror_obsidian_shard: {
    id: 'mirror_obsidian_shard', name: '鏡面黑曜碎片', type: 'material',
    description: '從鏡黑礦脈敲下的黑曜碎片，表面能映出不在身後的影子，是高階熔爐校準反光角度的基材。',
    buyPrice: 2000, sellPrice: 1000, stackable: true, maxStack: 99, levelReq: 45, rarity: 'epic',
  },

sulfur_heart_ore: {
    id: 'sulfur_heart_ore', name: '硫心礦', type: 'material',
    description: '硫磺氣袋深處凝出的黃黑礦核，敲裂時會噴出刺鼻熱霧，常被用於耐火藥劑與爆破鑽井。',
    buyPrice: 2300, sellPrice: 1150, stackable: true, maxStack: 99, levelReq: 46, rarity: 'epic',
  },

blackglass_chain_link: {
    id: 'blackglass_chain_link', name: '黑玻鏈環', type: 'material',
    description: '熔爐守衛使用的黑玻鎖鏈環，外層像玻璃般光滑，內側卻留有能吸住暗火的粗糙刻痕。',
    buyPrice: 2700, sellPrice: 1350, stackable: true, maxStack: 99, levelReq: 48, rarity: 'legendary',
  },

ancient_forge_cinder: {
    id: 'ancient_forge_cinder', name: '古爐餘燼', type: 'material',
    description: '古代熔爐底部尚未熄滅的餘燼，隔著石匣仍會緩慢升溫，是重鑄高階裝備時最穩定的火種。',
    buyPrice: 3000, sellPrice: 1500, stackable: true, maxStack: 99, levelReq: 49, rarity: 'legendary',
  },

core_drill_bit: {
    id: 'core_drill_bit', name: '核心鑽頭', type: 'material',
    description: '核心鑽井折斷的古代鑽頭，尖端混合黑曜、熔鐵與惡魔骨粉，可在世界熔爐外殼留下刻痕。',
    buyPrice: 3400, sellPrice: 1700, stackable: true, maxStack: 99, levelReq: 51, rarity: 'legendary',
  },

// ─── 深海神殿材料與聖物 (Lv 42-52) ───
  bluefire_coral: {
    id: 'bluefire_coral', name: '藍火珊瑚', type: 'material',
    description: '在水下仍燃燒幽藍聖火的珊瑚枝，表面刻著神殿祭司用來壓制潮汐低語的細小符紋。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 99, levelReq: 42, rarity: 'epic',
  },

abyssal_pearl: {
    id: 'abyssal_pearl', name: '深淵珍珠', type: 'material',
    description: '由深海神諭室的黑潮長年磨成的珍珠，內部會反射出不屬於現世的星光與影子。',
    buyPrice: 2200, sellPrice: 1100, stackable: true, maxStack: 99, levelReq: 44, rarity: 'epic',
  },

tideclock_gear: {
    id: 'tideclock_gear', name: '潮鐘齒輪', type: 'material',
    description: '古老潮鐘脫落的青銅齒輪，轉動時能短暫改變周遭水流方向，是深海機關的核心零件。',
    buyPrice: 2600, sellPrice: 1300, stackable: true, maxStack: 99, levelReq: 46, rarity: 'legendary',
  },

whalebone_relic: {
    id: 'whalebone_relic', name: '鯨骨聖片', type: 'material',
    description: '刻滿祭文的古鯨骨碎片，仍保存著神殿沉沒前最後一次大潮的低鳴，可作潮汐聖物核心。',
    buyPrice: 3000, sellPrice: 1500, stackable: true, maxStack: 99, levelReq: 48, rarity: 'legendary',
  },
};
