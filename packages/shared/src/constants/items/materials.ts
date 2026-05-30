import type { ItemDef } from '../../types/item.js';
import { EXTRA_MATERIALS_ITEM_DEFS } from './materials-extra.js';

const BASE_MATERIALS_ITEM_DEFS: Record<string, ItemDef> = {
// ============ 素材 - 高階區域掉落 ============

  demon_horn: {
    id: 'demon_horn', name: '惡魔之角', type: 'material',
    description: '從魔族身上取得的漆黑角質，散發著微弱的暗黑氣息。要塞斥候會把角尖磨成傳訊哨，熔爐工匠則用它穩定暗火溫度。',
    buyPrice: 0, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'crafting'], zoneTags: ['demon_territory'],
  },

hellhound_fang: {
    id: 'hellhound_fang', name: '地獄犬牙', type: 'material',
    description: '地獄犬的獠牙，即使脫落仍帶著灼人的熱度。魔族馴犬兵會把犬牙鑲在項圈和骨笛上，用來壓制戰獸的火性。',
    buyPrice: 0, sellPrice: 65,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'crafting'], zoneTags: ['demon_territory'],
  },

blood_river_slag: {
    id: 'blood_river_slag', name: '血河魔渣', type: 'material',
    description: '血河與熔岩下水道沉積的暗紅礦渣，冷卻後仍會滲出硫磺味。魔族把它磨入兵刃表面，使傷口更難癒合。',
    buyPrice: 1200, sellPrice: 600,
    stackable: true, maxStack: 99, levelReq: 30, rarity: 'rare',
    sourceTags: ['drop', 'shop', 'gather'], zoneTags: ['demon_territory'],
  },

infernal_chain_link: {
    id: 'infernal_chain_link', name: '煉獄鎖環', type: 'material',
    description: '從鎖鏈庭院與拷問室拆下的黑鐵鎖環，內側刻著封魂符線。它既是刑具零件，也是要塞結界管路的導魔節點。',
    buyPrice: 0, sellPrice: 850,
    stackable: true, maxStack: 99, levelReq: 32, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['demon_territory'],
  },

war_forge_blank: {
    id: 'war_forge_blank', name: '戰爭熔胚', type: 'material',
    description: '戰爭熔爐尚未淬火的兵器胚料，表面流著暗紅紋路。若在詛咒儀式完成前奪走，可用來反推魔族軍械的弱點。',
    buyPrice: 0, sellPrice: 1800,
    stackable: true, maxStack: 50, levelReq: 36, rarity: 'epic',
    sourceTags: ['drop', 'quest', 'crafting'], zoneTags: ['demon_territory'],
  },

dragon_fang: {
    id: 'dragon_fang', name: '龍牙', type: 'material',
    description: '巨龍的鋒利牙齒，比任何金屬都要堅硬。龍谷工匠只採集自然脫落或戰鬥後留下的碎牙，避免觸犯古龍律法。',
    buyPrice: 0, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'crafting'], zoneTags: ['dragon_valley'],
  },

cloudstone_shard: {
    id: 'cloudstone_shard', name: '雲石碎片', type: 'material',
    description: '天空之橋與風棲岩棚剝落的半透明雲石，內部有白銀色氣旋緩慢流動。龍騎士用它校準鞍具浮力，也可作為風屬護符材料。',
    buyPrice: 1800, sellPrice: 900,
    stackable: true, maxStack: 99, levelReq: 40, rarity: 'rare',
    sourceTags: ['drop', 'gather'], zoneTags: ['dragon_valley'],
  },

fireglass_scale: {
    id: 'fireglass_scale', name: '火玻璃鱗片', type: 'material',
    description: '在火玻璃台被龍息重新燒合的黑金色鱗片，邊緣像玻璃般鋒利。它保留火焰幼龍的熱力，適合用於抗火裝備與符刃鑲嵌。',
    buyPrice: 2200, sellPrice: 1100,
    stackable: true, maxStack: 99, levelReq: 42, rarity: 'rare',
    sourceTags: ['drop', 'crafting'], zoneTags: ['dragon_valley'],
  },

thunder_roost_crystal: {
    id: 'thunder_roost_crystal', name: '雷巢晶簇', type: 'material',
    description: '雷巢避雷石上長出的藍白晶簇，握住時能感覺微弱電流沿掌心跳動。風暴巨龍會用它淬鍊犄角與鱗片。',
    buyPrice: 2600, sellPrice: 1300,
    stackable: true, maxStack: 99, levelReq: 45, rarity: 'epic',
    sourceTags: ['drop', 'gather'], zoneTags: ['dragon_valley'],
  },

starfall_meteorite: {
    id: 'starfall_meteorite', name: '墜星隕鐵', type: 'material',
    description: '墜星坑封印邊緣剝落的銀藍隕鐵，表面有紫黑裂紋。古龍天衛會把它用於封印深淵裂縫，冒險者也能用它鑄造高階聖物。',
    buyPrice: 0, sellPrice: 2400,
    stackable: true, maxStack: 50, levelReq: 48, rarity: 'epic',
    sourceTags: ['drop', 'quest', 'crafting'], zoneTags: ['dragon_valley'],
  },

void_shard: {
    id: 'void_shard', name: '虛空碎片', type: 'material',
    description: '從深淵裂隙中取得的時空碎片，在手中不斷閃爍著紫光。穩定者會把它鑲入封印錨，深淵熔爐則會把它熔成割裂空間的刃片。',
    buyPrice: 0, sellPrice: 120,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'crafting'], zoneTags: ['abyss_rift'],
  },

abyss_anchor_link: {
    id: 'abyss_anchor_link', name: '深淵錨鏈環', type: 'material',
    description: '封印錨階斷裂後留下的巨大鏈環碎片，一側刻著龍語，另一側刻著古代術士符。它仍能短暫固定不穩定的空間落點。',
    buyPrice: 0, sellPrice: 1600,
    stackable: true, maxStack: 50, levelReq: 50, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['abyss_rift'],
  },

mirror_memory_splinter: {
    id: 'mirror_memory_splinter', name: '鏡湖記憶片', type: 'material',
    description: '虛空鏡湖破裂倒影凝成的黑銀碎片，表面會顯示持有者可能做過的另一個選擇。它適合用於精神抗性與記憶追蹤任務。',
    buyPrice: 0, sellPrice: 1800,
    stackable: true, maxStack: 50, levelReq: 50, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['abyss_rift'],
  },

nightmare_fruit: {
    id: 'nightmare_fruit', name: '噩夢果實', type: 'material',
    description: '噩夢果園黑晶樹上結出的半透明果實，果肉裡浮現沉睡者的臉。若處理得當，可作精神防護藥劑；若處理失敗，會讓恐懼反噬。',
    buyPrice: 0, sellPrice: 2100,
    stackable: true, maxStack: 30, levelReq: 52, rarity: 'epic',
    sourceTags: ['drop', 'gather'], zoneTags: ['abyss_rift'],
  },

time_splinter: {
    id: 'time_splinter', name: '時間碎片', type: 'material',
    description: '時間碎片庫封存室中剝落的銀紫晶片，內部凍結著一秒鐘尚未完成的動作。它能用於冷卻、傳送與回溯相關法器。',
    buyPrice: 0, sellPrice: 2300,
    stackable: true, maxStack: 50, levelReq: 52, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['abyss_rift'],
  },

rift_metal_blank: {
    id: 'rift_metal_blank', name: '裂界金屬胚', type: 'material',
    description: '裂隙熔爐中尚未成形的維度金屬胚料，邊緣在固體、液體與光影之間閃爍。若讓深淵工匠完成，它會變成切開空間的刃片。',
    buyPrice: 0, sellPrice: 2800,
    stackable: true, maxStack: 30, levelReq: 54, rarity: 'epic',
    sourceTags: ['drop', 'crafting'], zoneTags: ['abyss_rift'],
  },

celestial_fragment: {
    id: 'celestial_fragment', name: '天界碎片', type: 'material',
    description: '天界遺跡中散落的神聖碎片，散發著溫暖的金色光芒。它能修補守衛核心，也能作為淨化深淵污染的基礎材料。',
    buyPrice: 0, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'crafting'], zoneTags: ['celestial_ruins'],
  },

starfall_plaza_shard: {
    id: 'starfall_plaza_shard', name: '墜星廣場碎片', type: 'material',
    description: '墜星廣場白金石板中嵌入的星辰碎片，邊緣仍有防禦法陣的金色紋路。它能用於星光裝備與天界防線修復。',
    buyPrice: 0, sellPrice: 2600,
    stackable: true, maxStack: 50, levelReq: 55, rarity: 'epic',
    sourceTags: ['drop', 'gather'], zoneTags: ['celestial_ruins'],
  },

lumen_memory_crystal: {
    id: 'lumen_memory_crystal', name: '流明記憶晶', type: 'material',
    description: '流明檔案庫中封存神祇命令的金色記憶晶，靠近時會把片段直接投進腦海。它能校正審判大廳被污染的法則。',
    buyPrice: 0, sellPrice: 3000,
    stackable: true, maxStack: 30, levelReq: 56, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['celestial_ruins'],
  },

broken_halo_relic: {
    id: 'broken_halo_relic', name: '破碎光環聖物', type: 'material',
    description: '天界聖物庫空龕中殘留的破碎光環，光芒不再完整卻仍能驅散深淵黑斑。它是淨化裝備與修補最終封印的核心聖物。',
    buyPrice: 0, sellPrice: 3600,
    stackable: true, maxStack: 20, levelReq: 57, rarity: 'legendary',
    sourceTags: ['drop', 'quest', 'crafting'], zoneTags: ['celestial_ruins'],
  },

dawn_armory_core: {
    id: 'dawn_armory_core', name: '黎明武庫核心', type: 'material',
    description: '神造兵器胸口拆下的白金光核，會隨日晷庭光線一明一暗。若重新啟動，它能驅動黎明長槍或高階神聖護盾。',
    buyPrice: 0, sellPrice: 4200,
    stackable: true, maxStack: 20, levelReq: 58, rarity: 'legendary',
    sourceTags: ['drop', 'crafting'], zoneTags: ['celestial_ruins'],
  },

dark_crystal: {
    id: 'dark_crystal', name: '暗影結晶', type: 'material',
    description: '暗影哨兵體內凝結的黑色結晶，表面不斷流轉著幽暗的光紋。是鍛造暗屬性裝備的稀有素材。',
    buyPrice: 0, sellPrice: 80,
    stackable: true, maxStack: 99, levelReq: 1,
  },

golem_core: {
    id: 'golem_core', name: '守衛核心', type: 'material',
    description: '水晶守衛的動力核心，蘊含著古老的魔力迴路。可用於製作高階防具或強化石。',
    buyPrice: 0, sellPrice: 120,
    stackable: true, maxStack: 99, levelReq: 1,
  },

// ============ 素材 ============
  slime_jelly: {
    id: 'slime_jelly', name: '史萊姆凝膠', type: 'material',
    description: '從史萊姆體內凝聚出的半透明凝膠，觸感冰涼而富有彈性。在陽光下會折射出彩虹般的光澤，是煉金術中常用的基礎材料。', buyPrice: 0, sellPrice: 5,
    stackable: true, maxStack: 99, levelReq: 1,
  },

wolf_pelt: {
    id: 'wolf_pelt', name: '狼皮', type: 'material',
    description: '一張厚實的灰色狼皮，毛髮粗硬而有光澤。剝取時保存完好，沒有破損，是製作皮甲的上等原料。空氣中還殘留著荒野的氣息。', buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },

goblin_ear: {
    id: 'goblin_ear', name: '哥布林耳朵', type: 'material',
    description: '從哥布林頭上割下的尖長耳朵，已經用鹽巴醃製防腐。冒險者公會接受這些作為討伐任務的完成證明，帶回後可以換取報酬。', buyPrice: 0, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
  },

bat_wing: {
    id: 'bat_wing', name: '蝙蝠翅膀', type: 'material',
    description: '經過陰乾處理的蝙蝠翅膀，薄如紙片的翼膜在光線下呈現半透明的暗紫色。煉金術士們用它來調製夜視藥水和飛行藥劑。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
  },

crystal_shard: {
    id: 'crystal_shard', name: '水晶碎片', type: 'material',
    description: '一片拇指大小的水晶碎片，內部蘊含著凝固的魔力光點。握在手中時會微微發熱，彷彿有什麼力量正在其中沉睡。是鍛造魔法裝備的重要素材。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },

shadow_essence: {
    id: 'shadow_essence', name: '暗影精華', type: 'material',
    description: '一團被封印在玻璃瓶中的暗影能量，深邃的黑紫色漩渦在瓶內不斷翻攪。靠近時會感到一陣莫名的寒意，彷彿暗影正在窺探你的靈魂。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },

herb: {
    id: 'herb', name: '藥草', type: 'material',
    description: '路邊常見的野生藥草，葉片翠綠而帶有鋸齒。雖然樸素不起眼，卻是煉製各種藥水的基礎原料。嚼碎後塗在傷口上也有輕微的止血效果。', buyPrice: 5, sellPrice: 2,
    stackable: true, maxStack: 99, levelReq: 1,
  },

slime_gel: {
    id: 'slime_gel', name: '黏亮史萊姆膠', type: 'material',
    description: '從野外史萊姆表層刮下的黏亮膠質，帶著青草與濕泥氣味，拉開時會牽出半透明細絲。', buyPrice: 0, sellPrice: 5,
    stackable: true, maxStack: 99, levelReq: 1,
  },

rabbit_fur: {
    id: 'rabbit_fur', name: '兔毛', type: 'material',
    description: '野兔腹部梳下的柔軟毛皮，灰白絨毛間還沾著草籽，適合填入護具內襯與旅行斗篷邊。', buyPrice: 0, sellPrice: 8,
    stackable: true, maxStack: 99, levelReq: 1,
  },

rabbit_meat: {
    id: 'rabbit_meat', name: '兔肉', type: 'material',
    description: '剛處理好的野兔肉，肉色淡粉，外層用寬葉包起，帶有清淡草香，可作為野外料理食材。', buyPrice: 0, sellPrice: 6,
    stackable: true, maxStack: 99, levelReq: 1,
  },

wolf_fang: {
    id: 'wolf_fang', name: '狼牙', type: 'material',
    description: '從平原狼口中取下的尖牙，牙根泛黃，齒尖仍有冷亮鋒芒，常被鑲進短刃或護符。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
  },

snake_venom: {
    id: 'snake_venom', name: '蛇毒', type: 'material',
    description: '裝在細玻璃管中的淡綠蛇毒，液面浮著油亮虹膜，煉金師會用蠟封住管口保存毒性。', buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },

snake_skin: {
    id: 'snake_skin', name: '蛇皮', type: 'material',
    description: '完整剝下的蛇皮薄而透明，鱗紋排列細密，在火光下會泛出灰綠色反光，可縫成防潮皮帶。', buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
  },

shadow_pelt: {
    id: 'shadow_pelt', name: '暗影狼皮', type: 'material',
    description: '暗影狼背部剝下的漆黑毛皮，毛尖像吸收光線般黯淡，內側殘留冷紫色脈紋。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },

spider_silk: {
    id: 'spider_silk', name: '蜘蛛絲', type: 'material',
    description: '巨型蜘蛛吐出的銀白絲束，細如髮絲卻難以扯斷，捲起來會反射月光，是輕甲縫線材料。', buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
  },

spider_venom: {
    id: 'spider_venom', name: '蜘蛛毒液', type: 'material',
    description: '封在黑玻璃小瓶中的蜘蛛毒液，呈濃紫色，瓶壁凝著細小氣泡與苦澀藥味。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },

spider_eye: {
    id: 'spider_eye', name: '蜘蛛眼', type: 'material',
    description: '巨型蜘蛛取下的黑亮複眼，表面分出許多小鏡面，能映出破碎而重疊的影像。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },

ancient_bark: {
    id: 'ancient_bark', name: '古樹皮', type: 'material',
    description: '古樹精身上剝落的厚樹皮，年輪像符文般捲曲，裂縫裡滲著淡金樹脂，可作盾面補強，也能作自然系裝備的基底。', buyPrice: 0, sellPrice: 22,
    stackable: true, maxStack: 99, levelReq: 1,
  },

nature_crystal: {
    id: 'nature_crystal', name: '自然水晶', type: 'material',
    description: '翠綠水晶內封著細小葉脈，晶面摸起來溫潤，靠近藥草時會發出微弱光點。', buyPrice: 0, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 1,
  },

treant_sap: {
    id: 'treant_sap', name: '樹精樹液', type: 'material',
    description: '樹精傷口流出的琥珀色樹液，黏稠而帶木香，靜置後會凝成半透明膠珠，常用來黏合木器。', buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
  },

alpha_fang: {
    id: 'alpha_fang', name: '狼王之牙', type: 'material',
    description: '暗影狼王斷落的黑白獠牙，牙根纏著灰毛與暗紫血痕，靠近火光時會吞掉邊緣亮色。', buyPrice: 0, sellPrice: 80,
    stackable: true, maxStack: 99, levelReq: 1,
  },

crystal_scale: {
    id: 'crystal_scale', name: '水晶鱗片', type: 'material',
    description: '水晶蜥蜴背上脫落的透明鱗片，邊緣鋒利，轉動時會把火光折成藍白碎線。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },

ice_crystal: {
    id: 'ice_crystal', name: '冰晶', type: 'material',
    description: '永不融化的冰晶，內部封著藍白寒光。冰元素、冰晶洞穴與極光祭壇都可能留下它，是冰屬性鍛造與城堡封印的基礎素材。',
    buyPrice: 0, sellPrice: 45,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'gathering'], zoneTags: ['frozen_wastes'],
  },

echo_crystal: {
    id: 'echo_crystal', name: '迴音水晶', type: 'material',
    description: '洞壁中採下的空心晶柱，敲擊後會回傳細長餘音，晶心有一圈圈透明波紋。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },

gargoyle_stone: {
    id: 'gargoyle_stone', name: '石像鬼之石', type: 'material',
    description: '石像鬼身上崩落的深灰石材，表面有翼爪刮痕，敲擊時聲音比普通岩石更沉。', buyPrice: 0, sellPrice: 28,
    stackable: true, maxStack: 99, levelReq: 1,
  },

stone_heart: {
    id: 'stone_heart', name: '石之心', type: 'material',
    description: '石像鬼胸腔內的圓形核心，外殼粗糙，中心卻有暗紅晶點像心跳般忽明忽暗。', buyPrice: 0, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 1,
  },

gargoyle_wing: {
    id: 'gargoyle_wing', name: '石像鬼之翼', type: 'material',
    description: '石像鬼翼膜邊緣碎落的薄石片，形狀像灰色羽骨，斷面仍留著風化紋路，可磨成護符墜片。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },

crystal_core: {
    id: 'crystal_core', name: '水晶核心', type: 'material',
    description: '拳頭大小的純淨晶核，內部有藍光緩慢旋轉，外層每一道切面都像剛被冰水洗過。', buyPrice: 0, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
  },

guardian_crystal: {
    id: 'guardian_crystal', name: '守護者水晶', type: 'material',
    description: '水晶守衛停止後留下的多面核心，晶內仍漂著金色防護符，握住時會微微抗拒。', buyPrice: 0, sellPrice: 200,
    stackable: true, maxStack: 99, levelReq: 1,
  },

stolen_pouch: {
    id: 'stolen_pouch', name: '贓物袋', type: 'material',
    description: '從盜賊身上搜到的贓物袋，破皮革裡塞著金幣、假印章與小刀套，可交給市集守衛清點。', buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
  },

toad_skin: {
    id: 'toad_skin', name: '蟾蜍皮', type: 'material',
    description: '毒蛙背部剝下的厚皮，疣瘤間滲著淡黃黏液，乾燥後仍保有驚人的韌性，適合製作防毒襯片。', buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
  },

poison_gland: {
    id: 'poison_gland', name: '毒腺', type: 'material',
    description: '毒蛙喉囊後方割下的黃綠毒腺，薄膜半透明，裡面仍有黏稠毒液緩慢晃動。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },

dark_bark: {
    id: 'dark_bark', name: '暗黑樹皮', type: 'material',
    description: '被暗影侵蝕的黑色樹皮，裂縫裡泛著紫光，摸上去像冷灰覆在指尖，可作暗屬護具素材。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },

cursed_sap: {
    id: 'cursed_sap', name: '詛咒樹液', type: 'material',
    description: '黑紫色樹液封在蠟塞瓶中，瓶底沉著細小影絲，搖晃時會形成扭曲樹紋，常用於詛咒墨水。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },

golem_fragment: {
    id: 'golem_fragment', name: '魔像碎片', type: 'material',
    description: '水晶魔像崩裂後留下的厚重碎片，一面平滑如鏡，一面仍沾著土灰與魔力刻槽。', buyPrice: 0, sellPrice: 28,
    stackable: true, maxStack: 99, levelReq: 1,
  },

spectral_essence: {
    id: 'spectral_essence', name: '幽靈精華', type: 'material',
    description: '幽靈騎士消散後凝聚的冷白精華，瓶壁會結出靈霜，可用來校準亡靈與暗屬附魔。', buyPrice: 0, sellPrice: 45,
    stackable: true, maxStack: 99, levelReq: 1,
  },

knight_sigil: {
    id: 'knight_sigil', name: '騎士徽記', type: 'material',
    description: '地底王國騎士團的殘破徽記，邊緣刻著誓詞，微弱靈魂光可用於修復古代軍裝。', buyPrice: 0, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 1,
  },

// ============ 強化素材 ============
  normal_enhance_stone: {
    id: 'normal_enhance_stone', name: '普通強化石', type: 'material',
    description: '一塊散發著淡淡魔力光芒的灰色礦石，表面刻有基礎的強化符文。將它按壓在裝備上時，符文會亮起並將礦石中的力量注入裝備，提升其性能。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 1,
  },

advanced_enhance_stone: {
    id: 'advanced_enhance_stone', name: '高級強化石', type: 'material',
    description: '一塊散發著耀眼金光的高純度強化礦石，表面的高階符文複雜而精密。只有+10以上的裝備才能承受這股強大的力量，否則會因能量過載而崩裂。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 1,
  },

blessing_scroll: {
    id: 'blessing_scroll', name: '祝福卷軸', type: 'material',
    description: '一張閃爍著聖潔光芒的卷軸，上面書寫著古老的守護咒文。在強化裝備前使用，可以在失敗時保護裝備不被破壞，是高風險強化時的安心保障。', buyPrice: 300, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 1,
  },

enhance_lucky_charm: {
    id: 'enhance_lucky_charm', name: '幸運符', type: 'material',
    description: '小小紅布符袋裡裝著銀砂與碎晶，袋口以金線縫死，強化前貼在裝備上可穩住魔力。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
  },

affix_essence: {
    id: 'affix_essence', name: '詞綴精華', type: 'material',
    description: '從帶有品質或詞綴的裝備中分解出的流動魔力，可在重骰裝備詞綴時作為穩定媒介。', buyPrice: 0, sellPrice: 80,
    stackable: true, maxStack: 99, levelReq: 1,
  },

reforge_crystal: {
    id: 'reforge_crystal', name: '重鑄水晶', type: 'material',
    description: '由裝備核心結晶化而成的材料，能承受品質重鑄時的魔力回流，是重新塑造裝備潛力的必要媒材。', buyPrice: 0, sellPrice: 120,
    stackable: true, maxStack: 99, levelReq: 1,
  },

bronze_key: {
    id: 'bronze_key', name: '銅鑰匙', type: 'material',
    description: '短柄銅鑰匙已被手汗磨亮，齒端帶著細小缺口，正好能轉開銅寶箱的舊鎖，是低階探索常見的開箱耗材。', buyPrice: 50, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },

silver_key: {
    id: 'silver_key', name: '銀鑰匙', type: 'material',
    description: '細長銀鑰匙柄端鑲著藍點玻璃，鑰齒切面平整，能貼合銀寶箱的精密鎖芯，常從中階怪物與任務獎勵取得。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 10,
  },

gold_key: {
    id: 'gold_key', name: '金鑰匙', type: 'material',
    description: '金鑰匙柄部刻著皇冠紋，鑰齒薄而複雜，插入金寶箱前會浮出一圈微光，可開啟高階寶箱並消耗一枚。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 20,
  },

// ============ 製作素材 ============
  iron_ore: {
    id: 'iron_ore', name: '鐵礦', type: 'material',
    description: '從礦脈中開採出的粗糙鐵礦石，表面佈滿暗紅色的鏽斑。雖然外表不起眼，卻是鍛造的基礎材料。敲擊時會發出沉悶的金屬聲響。', buyPrice: 20, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
  },

mithril_ore: {
    id: 'mithril_ore', name: '秘銀礦', type: 'material',
    description: '極為稀有的銀白色礦石，在微光中散發著空靈的藍色光澤。質地輕盈卻異常堅硬，是鍛造頂級裝備的夢幻素材。僅在深邃的礦洞最深處才能發現。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 15,
  },

elf_wood: {
    id: 'elf_wood', name: '精靈木', type: 'material',
    description: '精靈族森林中生長的神木木材，切面呈現出如年輪般的魔力紋路。觸摸時能感受到木質中蘊含的自然之力在緩緩流動，是製作高級法杖和弓箭的珍貴材料。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 10,
  },

spider_silk_cloth: {
    id: 'spider_silk_cloth', name: '蜘蛛絲布', type: 'material',
    description: '以巨型蜘蛛的絲線精心織就的布料，輕薄如蟬翼卻比鐵絲還要堅韌。在月光下會泛著神秘的銀色光澤，是製作法師袍的上等材料。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
  },

dragon_scale: {
    id: 'dragon_scale', name: '龍鱗片', type: 'material',
    description: '從龍族身上剝落的巨大鱗片，表面閃耀著如寶石般的虹彩光芒。觸摸時冰涼而堅硬，據說即使是最鋒利的劍也無法在上面留下劃痕。是鍛造傳說裝備的至高素材。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 25,
    sourceTags: ['drop', 'crafting'], zoneTags: ['dragon_valley'],
  },

magic_crystal: {
    id: 'magic_crystal', name: '魔力結晶', type: 'material',
    description: '由純淨魔力在特殊環境下自然凝聚而成的晶體，散發著柔和的藍白色光芒。將它握在掌心，能感受到魔力如同心跳般一收一放的節律。', buyPrice: 120, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 10,
  },

beast_hide: {
    id: 'beast_hide', name: '獸皮', type: 'material',
    description: '從荒野野獸身上剝取的厚實獸皮，散發著原始的野性氣息。經過適當的鞣製處理後，可以成為製作皮甲的優質材料。', buyPrice: 30, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },

ancient_fragment: {
    id: 'ancient_fragment', name: '古代碎片', type: 'material',
    description: '從古代遺跡中挖掘出的神秘碎片，表面刻著已經失傳的古代文字。碎片中似乎封印著遠古的力量，靠近時偶爾會聽到微弱的低語聲。', buyPrice: 300, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 20,
  },

chapel_blessing_thread: {
    id: 'chapel_blessing_thread', name: '晨光祝福線', type: 'material',
    description: '晨光禮拜堂編給旅人的細棉線，浸過草藥與清水，常被繫在包袋或劍柄上作為平安記號。',
    buyPrice: 80, sellPrice: 40, stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
    sourceTags: ['shop', 'town_service'], zoneTags: ['starter_village'],
  },

repaired_boot_lace: {
    id: 'repaired_boot_lace', name: '修補靴帶', type: 'material',
    description: '修補工棚用剩皮條剪成的靴帶，便宜但可靠。村口守衛常提醒新人，鞋帶鬆了比史萊姆更容易害人摔倒。',
    buyPrice: 60, sellPrice: 30, stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
    sourceTags: ['shop', 'crafting'], zoneTags: ['starter_village'],
  },

hillside_moss_jelly: {
    id: 'hillside_moss_jelly', name: '山坡苔膠', type: 'material',
    description: '新手村後山史萊姆體內凝出的淡綠膠質，混著苔蘚和露水氣味。村醫會用它調和外傷藥，也能作為初階煉金練習材料。',
    buyPrice: 90, sellPrice: 45, stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
    sourceTags: ['drop', 'gathering'], zoneTags: ['starter_village_ext'],
  },

creek_reed_splint: {
    id: 'creek_reed_splint', name: '溪蘆夾板', type: 'material',
    description: '小溪邊採下的筆直蘆葦，曬乾後韌性很好。村醫學徒常把它削成臨時夾板，也用來固定剛包好的草藥繃帶。',
    buyPrice: 110, sellPrice: 55, stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
    sourceTags: ['drop', 'gathering'], zoneTags: ['starter_village_ext'],
  },

orchard_waxcomb: {
    id: 'orchard_waxcomb', name: '果園蜂蠟', type: 'material',
    description: '蜂巢樹叢掉落的小塊金色蜂蠟，黏著花粉、落果汁液和細碎羽毛。修補弓弦、封存藥膏或製作新手護符都很實用。',
    buyPrice: 140, sellPrice: 70, stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
    sourceTags: ['drop', 'gathering'], zoneTags: ['starter_village_ext'],
  },

plains_sunflower_seed: {
    id: 'plains_sunflower_seed', name: '平原葵花籽', type: 'material',
    description: '翠綠平原向日葵田收下的飽滿種子，帶著淡淡青草香。旅人會把它磨成油，也會拿來餵馬與野鳥。',
    buyPrice: 160, sellPrice: 80, stackable: true, maxStack: 99, levelReq: 3, rarity: 'common',
    sourceTags: ['drop', 'shop', 'gather'], zoneTags: ['plains'],
  },

broken_bridge_rope: {
    id: 'broken_bridge_rope', name: '斷橋粗繩', type: 'material',
    description: '斷木橋附近撿回的粗麻繩，沾著溪水與泥沙。修補橋面、綁貨車或製作簡易陷阱都能派上用場。',
    buyPrice: 260, sellPrice: 130, stackable: true, maxStack: 99, levelReq: 4, rarity: 'common',
    sourceTags: ['drop', 'gather'], zoneTags: ['plains', 'starter_village_ext'],
  },

salt_crab_shell: {
    id: 'salt_crab_shell', name: '鹽蟹硬殼', type: 'material',
    description: '東方海岸巨蟹身上剝落的青白甲殼，邊緣結著細鹽。漁民會把它磨成防潮粉，造船匠則用來觀察船板受潮後的裂紋。',
    buyPrice: 300, sellPrice: 150, stackable: true, maxStack: 99, levelReq: 8, rarity: 'common',
    sourceTags: ['drop', 'gather'], zoneTags: ['eastern_coast'],
  },

moon_jelly_lantern: {
    id: 'moon_jelly_lantern', name: '月水母燈囊', type: 'material',
    description: '水母體內取出的半透明發光囊，離水後仍會微微跳光。船長常把它封在玻璃瓶裡，用來標記夜間潮道。',
    buyPrice: 420, sellPrice: 210, stackable: true, maxStack: 99, levelReq: 9, rarity: 'uncommon',
    sourceTags: ['drop'], zoneTags: ['eastern_coast'],
  },

kelp_rope_coil: {
    id: 'kelp_rope_coil', name: '海藻繩卷', type: 'material',
    description: '海藻灘收集的厚韌海藻曬乾後編成的繩卷，帶著鹽味和淡綠光澤。修網、綁船或臨時固定傷員都能派上用場。',
    buyPrice: 360, sellPrice: 180, stackable: true, maxStack: 99, levelReq: 8, rarity: 'common',
    sourceTags: ['drop', 'gather'], zoneTags: ['eastern_coast'],
  },

shadowmoss_clump: {
    id: 'shadowmoss_clump', name: '暗苔團', type: 'material',
    description: '暗影森林樹根下剝下的濕冷苔蘚，離開陰影後仍會慢慢吸光。藥草採集者常用它測量森林污染深度。',
    buyPrice: 620, sellPrice: 310, stackable: true, maxStack: 99, levelReq: 10, rarity: 'rare',
    sourceTags: ['drop', 'shop', 'gather'], zoneTags: ['dark_forest'],
  },

spider_silk_bundle: {
    id: 'spider_silk_bundle', name: '密林蛛絲束', type: 'material',
    description: '暗影森林蛛網密室收集的韌性蛛絲，帶有淡淡毒粉。可用於縫補披風、製作陷阱或固定藥草包。',
    buyPrice: 780, sellPrice: 390, stackable: true, maxStack: 99, levelReq: 10, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['dark_forest'],
  },

prism_shard: {
    id: 'prism_shard', name: '棱鏡碎片', type: 'material',
    description: '水晶洞窟棱鏡門附近剝落的透明碎片，轉動時會分出七道細光。寶石商人會用它校準切割角度，也可作折光機關材料。',
    buyPrice: 1400, sellPrice: 700, stackable: true, maxStack: 99, levelReq: 20, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['crystal_cave'],
  },

echo_crystal_dust: {
    id: 'echo_crystal_dust', name: '回音晶粉', type: 'material',
    description: '回音裂谷與鳴晶廊震落的細晶粉，裝進瓶中仍會發出輕微嗡鳴。礦工用它辨認空洞與脆弱晶壁。',
    buyPrice: 1200, sellPrice: 600, stackable: true, maxStack: 99, levelReq: 20, rarity: 'rare',
    sourceTags: ['drop', 'gather'], zoneTags: ['crystal_cave'],
  },

miner_focus_lens: {
    id: 'miner_focus_lens', name: '礦工聚光鏡', type: 'material',
    description: '廢礦工營地留下的厚晶鏡片，可把微弱燈光集中成細束。採礦者會用它檢查晶脈裂紋。',
    buyPrice: 1800, sellPrice: 900, stackable: true, maxStack: 30, levelReq: 22, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['crystal_cave'],
  },

kingdom_supply_crate: {
    id: 'kingdom_supply_crate', name: '王國補給箱', type: 'material',
    description: '封有王國軍需印記的沉重補給箱，內含糧秣、繃帶與前線修繕零件。箱角的蠟封會記錄運送路線，攜帶時必須依王國交通規則交付。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['kingdom_war', 'resource_war'], zoneTags: ['kingdom_frontier'],
  },

kingdom_iron_shipment: {
    id: 'kingdom_iron_shipment', name: '王國鐵料車契', type: 'material',
    description: '前線鐵料車隊的押運契據，附著可追蹤的國庫封印。它代表一批待送往哨塔與攻城器械場的鐵料，不能透過一般傳送規避運輸風險。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['kingdom_war', 'resource_war'], zoneTags: ['kingdom_frontier'],
  },

kingdom_banner_cache: {
    id: 'kingdom_banner_cache', name: '王國戰旗匣', type: 'material',
    description: '裝著戰旗、號角與臨時軍令的長匣，匣面刻有交戰王國的辨識符。這類資源必須沿戰線或王國路線移動，否則封印會失效。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['kingdom_war', 'resource_war'], zoneTags: ['kingdom_frontier'],
  },

frontier_spyglass_lens: {
    id: 'frontier_spyglass_lens', name: '邊境望遠鏡片', type: 'material',
    description: '望遠鏡遺跡與哨塔斥候使用的厚玻璃鏡片，邊緣刻著量距刻度。可用來校準偵查器材與投石機射界。',
    buyPrice: 3200, sellPrice: 1600, stackable: true, maxStack: 99, levelReq: 30, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['kingdom_frontier'],
  },

siege_lock_pin: {
    id: 'siege_lock_pin', name: '攻城鎖銷', type: 'material',
    description: '攻城器械場拆下的粗鐵鎖銷，表面有火藥燻黑痕。少一枚鎖銷就能讓整台弩砲偏轉半座城門，是邊境軍需線索。',
    buyPrice: 3800, sellPrice: 1900, stackable: true, maxStack: 99, levelReq: 34, rarity: 'rare',
    sourceTags: ['drop'], zoneTags: ['kingdom_frontier'],
  },

// ============ 收藏品 ============
  ancient_coin: {
    id: 'ancient_coin', name: '古代硬幣', type: 'material',
    description: '厚重古幣表面刻著已失傳的王朝文字，邊緣磨損發黑，收藏家會為完整紋章出高價。', buyPrice: 0, sellPrice: 500,
    stackable: true, maxStack: 99, levelReq: 1,
  },

rare_fossil: {
    id: 'rare_fossil', name: '稀有化石', type: 'material',
    description: '遠古生物留下的螺旋骨化石，石面呈灰白與琥珀色層紋，裂縫裡卡著細砂。', buyPrice: 0, sellPrice: 800,
    stackable: true, maxStack: 99, levelReq: 1,
  },

elf_feather: {
    id: 'elf_feather', name: '精靈羽毛', type: 'material',
    description: '細長羽毛泛著淡金與淺綠光澤，羽軸近乎透明，像仍保留著精靈林地的晨露，常被用於輕盈護符與高價收藏。', buyPrice: 0, sellPrice: 1200,
    stackable: true, maxStack: 99, levelReq: 1,
  },

dragon_dust: {
    id: 'dragon_dust', name: '龍之鱗粉', type: 'material',
    description: '龍族鱗片磨成的粉末，極為珍貴。龍鱗鍛台會用它調整藍火溫度，龍諭棲台則用它讓星圖短暫顯影。', buyPrice: 0, sellPrice: 2000,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'crafting'], zoneTags: ['dragon_valley'],
  },

ancient_runestone: {
    id: 'ancient_runestone', name: '遠古符文石', type: 'material',
    description: '灰白石塊刻著深陷符文，裂縫裡流動藍紫微光。它來自古代遺跡裂牆，可在古代遺跡入口啟動遠古符文石共鳴並開啟一次副本，使用後消耗。',
    buyPrice: 0, sellPrice: 3000,
    stackable: true, maxStack: 99, levelReq: 1,
  },

// ============ 怪物掉落素材 ============
  crab_shell: {
    id: 'crab_shell', name: '海蟹殼', type: 'material',
    description: '海蟹背甲厚實而帶青藍斑點，內側仍有鹽水氣味，打磨後能成為輕便護片。', buyPrice: 0, sellPrice: 8,
    stackable: true, maxStack: 99, levelReq: 1,
  },

salamander_tail: {
    id: 'salamander_tail', name: '火蜥蜴尾', type: 'material',
    description: '火蜥蜴尾端脫落的赤紅肉鰭，切面仍帶著溫熱火光。矮人鍛造師會把它曬乾磨粉，加入耐火藥膏或火焰湯中。',
    buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop'], zoneTags: ['volcano_zone'],
  },

ice_core: {
    id: 'ice_core', name: '冰元素核心', type: 'material',
    description: '冰元素消散後留下的藍白核心，外層凝著霜花，放在掌心也會持續散出寒霧。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },

rock_fragment: {
    id: 'rock_fragment', name: '岩石碎片', type: 'material',
    description: '岩石怪物碎裂時掉下的厚石片，斷面新鮮粗糙，灰塵中混著一點暗色礦紋。', buyPrice: 0, sellPrice: 6,
    stackable: true, maxStack: 99, levelReq: 1,
  },

fishman_fin: {
    id: 'fishman_fin', name: '魚人鰭', type: 'material',
    description: '魚人背鰭呈深藍半透明，邊緣有細齒與鹽斑，乾燥後仍帶著刺鼻海腥，可製成防潮飾片。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
  },

spider_venom_sac: {
    id: 'spider_venom_sac', name: '蜘蛛毒囊', type: 'material',
    description: '鼓脹毒囊以蛛絲綁住開口，囊壁透出紫綠色液光，稍受擠壓就會滲出苦味毒汁。', buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
  },

snowwolf_fur: {
    id: 'snowwolf_fur', name: '雪狼毛', type: 'material',
    description: '雪狼身上梳下的白色硬毛，保暖性極佳，毛根帶著淡淡冰霜氣味。毛皮商人會用它縫製防風斗篷與雪地靴內襯。',
    buyPrice: 0, sellPrice: 22,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop'], zoneTags: ['frozen_wastes'],
  },

frostpine_resin: {
    id: 'frostpine_resin', name: '霜松樹脂', type: 'material',
    description: '霜松林採得的淡藍樹脂，離火很遠也會散出清冷香氣。雪地嚮導用它封住帳縫，毛皮商則拿來防止皮革結霜。',
    buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 22, rarity: 'common',
    sourceTags: ['drop', 'gathering'], zoneTags: ['frozen_wastes'],
  },

glacier_fossil_shard: {
    id: 'glacier_fossil_shard', name: '冰河化石片', type: 'material',
    description: '冰河裂縫中剝落的古代獸骨薄片，表面被藍冰包住。城堡看守能從骨紋判斷冰之王國凍結前的災變年代。',
    buyPrice: 0, sellPrice: 44,
    stackable: true, maxStack: 99, levelReq: 23, rarity: 'uncommon',
    sourceTags: ['drop', 'gathering'], zoneTags: ['frozen_wastes'],
  },

aurora_runestone_chip: {
    id: 'aurora_runestone_chip', name: '極光符石片', type: 'material',
    description: '符石環受極光照射後裂下的紫綠石片，轉動時會浮現短暫幻象。它可用來解讀哨塔地圖與城堡外牆的舊王朝符文。',
    buyPrice: 0, sellPrice: 62,
    stackable: true, maxStack: 99, levelReq: 25, rarity: 'rare',
    sourceTags: ['drop', 'hidden_cache'], zoneTags: ['frozen_wastes'],
  },

lava_fragment: {
    id: 'lava_fragment', name: '熔岩碎片', type: 'material',
    description: '熔岩蟲與火山口冷卻後留下的黑紅碎片，裂縫中仍有暗淡熱光。可作為熔爐升溫、火屬性鍛造與祭壇供火材料。',
    buyPrice: 0, sellPrice: 28,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['drop', 'gathering'], zoneTags: ['volcano_zone'],
  },

sulfur_crystal_cluster: {
    id: 'sulfur_crystal_cluster', name: '硫磺晶簇', type: 'material',
    description: '硫磺谷與熱泉池邊長出的黃綠晶簇，靠近時有刺鼻氣味。礦工會用它檢查毒霧濃度，祭司則拿來穩定火神殿香爐。',
    buyPrice: 0, sellPrice: 34,
    stackable: true, maxStack: 99, levelReq: 15, rarity: 'uncommon',
    sourceTags: ['drop', 'gathering'], zoneTags: ['volcano_zone'],
  },

obsidian_glass_plate: {
    id: 'obsidian_glass_plate', name: '黑曜玻板', type: 'material',
    description: '黑曜石採場敲下的平整黑玻璃石板，表面能映出扭曲紅光。適合製作防熱護片、符文基底與矮人工具刻度板。',
    buyPrice: 0, sellPrice: 42,
    stackable: true, maxStack: 99, levelReq: 16, rarity: 'uncommon',
    sourceTags: ['drop', 'gathering'], zoneTags: ['volcano_zone'],
  },

fire_vent_crystal: {
    id: 'fire_vent_crystal', name: '火晶種', type: 'material',
    description: '火晶噴氣口凝成的紅色晶種，內部像有小火苗被封住。鍛造師會用它校準爐溫，火焰祭司則視為火神躁動的證據。',
    buyPrice: 0, sellPrice: 58,
    stackable: true, maxStack: 99, levelReq: 18, rarity: 'rare',
    sourceTags: ['drop', 'gathering'], zoneTags: ['volcano_zone'],
  },

blighted_wheat_stalk: {
    id: 'blighted_wheat_stalk', name: '枯疫麥稈', type: 'material',
    description: '老舊農場裡受豐收儀式污染的麥稈，外層乾脆易碎，內部仍殘留微弱生機，可作為低階煉金與農場任務材料。',
    buyPrice: 0, sellPrice: 5,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['old_farmland', 'monster_drop', 'gathering'], zoneTags: ['old_farmland'],
  },

mildew_apple: {
    id: 'mildew_apple', name: '霉斑蘋果', type: 'material',
    description: '果園裡半腐半熟的蘋果，霉斑沿果皮形成細小符紋。處理得當能萃取藥性，處理失敗則會引來更多魔化作物。',
    buyPrice: 0, sellPrice: 6,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['old_farmland', 'monster_drop', 'gathering'], zoneTags: ['old_farmland'],
  },

gnawed_pumpkin_rind: {
    id: 'gnawed_pumpkin_rind', name: '啃痕南瓜皮', type: 'material',
    description: '被鼠群與藤蔓反覆啃咬的厚南瓜皮，表面帶有甜膩黏液。農場匠人可用它測試魔化作物的成熟程度。',
    buyPrice: 0, sellPrice: 7,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['old_farmland', 'monster_drop'], zoneTags: ['old_farmland'],
  },

scarecrow_straw_bundle: {
    id: 'scarecrow_straw_bundle', name: '守田稻草束', type: 'material',
    description: '從活動稻草人身上散落的舊稻草，混著鴉羽、泥土與殘破布線。靠近時會微微指向收成圓陣。',
    buyPrice: 0, sellPrice: 9,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['old_farmland', 'monster_drop'], zoneTags: ['old_farmland'],
  },

moonlit_pasture_bell: {
    id: 'moonlit_pasture_bell', name: '月牧鈴', type: 'material',
    description: '牧草地遺落的小鈴，銀色表面映著不屬於白日的月光。搖響時能聽見遠處牲畜回欄的幻聲。',
    buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['old_farmland', 'monster_drop', 'hidden_cache'], zoneTags: ['old_farmland'],
  },

whisper_reed: {
    id: 'whisper_reed', name: '低語蘆葦', type: 'material',
    description: '低語溪谷岸邊採得的空心蘆葦，風吹過時會留下短促回音。巡林人常用它判斷水道方向與附近怪物動靜。',
    buyPrice: 0, sellPrice: 8,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['whispering_valley', 'monster_drop', 'gathering'], zoneTags: ['whispering_valley'],
  },

coldspring_dew: {
    id: 'coldspring_dew', name: '冷泉露', type: 'material',
    description: '凝在冷泉石面的藍白露水，離開溪谷後仍保持低溫。可用於舒緩毒素、保存草藥或調和冰屬性藥劑。',
    buyPrice: 0, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['whispering_valley', 'monster_drop', 'gathering'], zoneTags: ['whispering_valley'],
  },

ice_fern_frond: {
    id: 'ice_fern_frond', name: '冰蕨葉', type: 'material',
    description: '冰蕨叢裡採下的霜藍葉片，葉脈會把聲音震成細小水珠。藥師可用它製作抗寒與鎮定類藥材。',
    buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['whispering_valley', 'monster_drop', 'gathering'], zoneTags: ['whispering_valley'],
  },

echo_stone_chip: {
    id: 'echo_stone_chip', name: '回音石片', type: 'material',
    description: '從回音岩群或低語裂縫震落的小石片，貼近耳邊能聽見延遲的水聲。適合作為聲音儀式與符文材料。',
    buyPrice: 0, sellPrice: 14,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['whispering_valley', 'monster_drop', 'hidden_cache'], zoneTags: ['whispering_valley'],
  },

tarnished_ore_chunk: {
    id: 'tarnished_ore_chunk', name: '失光礦塊', type: 'material',
    description: '廢棄礦坑裡採得的灰銀礦塊，表面像被礦難當晚的黑霧熏暗。敲擊時聲音沉悶，可用於鍛造與事故調查。',
    buyPrice: 0, sellPrice: 16,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['abandoned_mines', 'monster_drop', 'gathering'], zoneTags: ['abandoned_mines'],
  },

mine_timber_splinter: {
    id: 'mine_timber_splinter', name: '礦坑支木片', type: 'material',
    description: '從活動木支架或坍塌樑木上取下的硬木片，內側仍留有白色安全符號與黑色礦粉。',
    buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['abandoned_mines', 'monster_drop', 'salvage'], zoneTags: ['abandoned_mines'],
  },

bat_guano_salt: {
    id: 'bat_guano_salt', name: '蝠糞硝鹽', type: 'material',
    description: '蝙蝠棲洞裡結成的刺鼻硝鹽，混有礦粉與蟲殼碎片。經處理後可作為火藥、肥料或煉金催化物。',
    buyPrice: 0, sellPrice: 11,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['abandoned_mines', 'monster_drop', 'gathering'], zoneTags: ['abandoned_mines'],
  },

drowned_lantern_oil: {
    id: 'drowned_lantern_oil', name: '沉燈油', type: 'material',
    description: '從淹沒橫巷與沉軌段撈起的黑色燈油，遇火仍能短暫燃亮，火光中會浮現礦工最後的影子。',
    buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['abandoned_mines', 'monster_drop', 'salvage'], zoneTags: ['abandoned_mines'],
  },

safety_lamp_lens: {
    id: 'safety_lamp_lens', name: '安全燈鏡片', type: 'material',
    description: '舊安全燈上拆下的厚玻璃鏡片，邊緣刻有三次點燈的礦工規範。可作為修復燈具與辨識毒霧的工具零件。',
    buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['abandoned_mines', 'salvage', 'hidden_cache'], zoneTags: ['abandoned_mines'],
  },

stormgrass_seed: {
    id: 'stormgrass_seed', name: '風暴草籽', type: 'material',
    description: '荒草丘陵高處採得的金色草籽，表面帶有細小雷痕。風大時會在掌心輕跳，可用於風暴儀式與草藥調和。',
    buyPrice: 0, sellPrice: 14,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['wildgrass_hills', 'monster_drop', 'gathering'], zoneTags: ['wildgrass_hills'],
  },

windcut_feather: {
    id: 'windcut_feather', name: '切風羽', type: 'material',
    description: '猛禽在強風中脫落的硬羽，羽緣鋒利，能切開乾草。獵人常把它綁在箭尾，讓箭矢在側風中保持穩定。',
    buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['wildgrass_hills', 'monster_drop'], zoneTags: ['wildgrass_hills'],
  },

thunder_scar_stone: {
    id: 'thunder_scar_stone', name: '雷痕石', type: 'material',
    description: '雷擊丘裂石中敲下的黑藍石片，內部偶爾閃過微光。可作為雷屬性裝備、祭儀與地圖標記材料。',
    buyPrice: 0, sellPrice: 22,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['wildgrass_hills', 'monster_drop', 'hidden_cache'], zoneTags: ['wildgrass_hills'],
  },

boar_tusk_plate: {
    id: 'boar_tusk_plate', name: '硬獠牙板', type: 'material',
    description: '荒草巨豬撞裂木盾後留下的厚牙片，帶有泥味和草根刮痕。可用來加固皮甲、陷阱或部落戰旗。',
    buyPrice: 0, sellPrice: 16,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['wildgrass_hills', 'monster_drop'], zoneTags: ['wildgrass_hills'],
  },

fog_lantern_wick: {
    id: 'fog_lantern_wick', name: '霧燈燈芯', type: 'material',
    description: '霧港燈塔與碼頭燈常用的耐鹽燈芯，浸過鯨油與海草灰。點燃後火光偏藍，能在濃霧中保持穩定。',
    buyPrice: 24, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['mist_harbor', 'shop', 'service'], zoneTags: ['mist_harbor'],
  },

tideglass_shard: {
    id: 'tideglass_shard', name: '潮玻璃碎片', type: 'material',
    description: '霧港潮池與防波堤旁撿到的磨圓玻璃，顏色隨潮位變深。海圖師會用它校準霧夜航線。',
    buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['mist_harbor', 'gathering', 'quest'], zoneTags: ['mist_harbor'],
  },

salt_cured_fish: {
    id: 'salt_cured_fish', name: '鹽漬霧魚', type: 'material',
    description: '魚市用粗鹽與霧港海草醃成的銀魚，耐放且腥味很低。水手常把它當航海口糧或交換小費。',
    buyPrice: 18, sellPrice: 9,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['mist_harbor', 'shop', 'food'], zoneTags: ['mist_harbor'],
  },

sun_dial_pin: {
    id: 'sun_dial_pin', name: '日晷校準釘', type: 'material',
    description: '古代遺跡日晷露台遺留的黃銅校準釘，尖端仍帶有微弱白光。考古隊可用它重建日影槽順序。',
    buyPrice: 0, sellPrice: 34,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['ancient_ruins', 'monster_drop', 'archaeology'], zoneTags: ['ancient_ruins'],
  },

moon_gate_tablet: {
    id: 'moon_gate_tablet', name: '月門陶板', type: 'material',
    description: '刻著月相步序的薄陶板，邊緣被水池磨圓。只有與倒影水池對照時，才能看懂其中缺失的符號，可協助解析月門機關。',
    buyPrice: 0, sellPrice: 36,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['ancient_ruins', 'monster_drop', 'archaeology'], zoneTags: ['ancient_ruins'],
  },

construct_gear: {
    id: 'construct_gear', name: '構裝齒輪', type: 'material',
    description: '青銅構裝體胸腔中的小齒輪，齒面刻有古代編號。仍能按固定節奏轉動，可用於修復守衛基座。',
    buyPrice: 0, sellPrice: 42,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['ancient_ruins', 'monster_drop', 'salvage'], zoneTags: ['ancient_ruins'],
  },

lightseal_dust: {
    id: 'lightseal_dust', name: '光封塵', type: 'material',
    description: '封印階梯與內聖所附近漂浮的白色光塵，裝入玻璃瓶後仍會沿著日月符號排列，可用於修補遺跡封印與聖光儀式。',
    buyPrice: 0, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['ancient_ruins', 'monster_drop', 'gathering'], zoneTags: ['ancient_ruins'],
  },

silver_algae: {
    id: 'silver_algae', name: '銀面藻', type: 'material',
    description: '只在鏡沼銀色水面邊緣生長的細藻，離水後仍會反射不存在的月光。藥師用它穩定解毒藥與幻覺藥劑。',
    buyPrice: 0, sellPrice: 22,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['marsh_of_mirrors', 'gathering', 'monster_drop'], zoneTags: ['marsh_of_mirrors'],
  },

mirror_moss: {
    id: 'mirror_moss', name: '鏡苔', type: 'material',
    description: '貼著泥炭小洲與月光堤道石縫生長的濕苔，葉面像細小鏡片。可用來標記真實路線，避免被倒影誤導。',
    buyPrice: 0, sellPrice: 24,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['marsh_of_mirrors', 'gathering', 'quest'], zoneTags: ['marsh_of_mirrors'],
  },

black_reed_fiber: {
    id: 'black_reed_fiber', name: '黑蘆纖維', type: 'material',
    description: '鏡沼深處黑蘆剝下的韌性纖維，浸水後不會腐爛。探路人會把它編成不受倒影干擾的路繩。',
    buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['marsh_of_mirrors', 'monster_drop', 'salvage'], zoneTags: ['marsh_of_mirrors'],
  },

glasswater_film: {
    id: 'glasswater_film', name: '玻璃水膜', type: 'material',
    description: '從破碎倒影與玻璃水核心邊緣刮下的透明水膜，薄得像不存在。它能短暫保存某一刻的正確倒影。',
    buyPrice: 0, sellPrice: 36,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['marsh_of_mirrors', 'monster_drop', 'hidden_cache'], zoneTags: ['marsh_of_mirrors'],
  },

red_ore_chunk: {
    id: 'red_ore_chunk', name: '赤鐵礦塊', type: 'material',
    description: '赤岩荒地礦脈中敲下的深紅礦塊，內部帶著乾熱金屬味。商隊與盜匪都把它視為鍛造與交易的硬通貨。',
    buyPrice: 0, sellPrice: 28,
    stackable: true, maxStack: 99, levelReq: 1,
    sourceTags: ['redrock_badlands', 'monster_drop', 'gathering'], zoneTags: ['redrock_badlands'],
  },
};

export const MATERIALS_ITEM_DEFS: Record<string, ItemDef> = {
  ...BASE_MATERIALS_ITEM_DEFS,
  ...EXTRA_MATERIALS_ITEM_DEFS,
};
