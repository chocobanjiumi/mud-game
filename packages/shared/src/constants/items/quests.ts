import type { ItemDef } from '../../types/item.js';

export const QUESTS_ITEM_DEFS: Record<string, ItemDef> = {
ash_watch_signal_flare: {
    id: 'ash_watch_signal_flare', name: '灰燼哨火筒', type: 'quest',
    description: '灰燼哨塔使用的短管信號火，筒身塞滿惡魔角粉與焦油布。點燃後會噴出藍白色火光，是辨認魔族偵查路線的重要證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 20, levelReq: 30, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['demon_territory'],
  },

sigil_tower_rubbing: {
    id: 'sigil_tower_rubbing', name: '符印塔拓片', type: 'quest',
    description: '從符印塔燒焦牆面拓下的惡魔符文排列，邊緣還殘留黑蠟與灰粉。它記錄了城門、召喚陣與魔王殿結界換位的節奏。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 12, levelReq: 35, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['demon_territory'],
  },

dragon_oracle_lens: {
    id: 'dragon_oracle_lens', name: '龍諭透鏡', type: 'quest',
    description: '龍諭棲台掉落的星圖水晶透鏡，破裂面仍會投出魔族要塞、深淵裂隙與墜星坑的影像。它是串連龍谷預言線的關鍵證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 12, levelReq: 45, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['dragon_valley'],
  },

skywarden_patrol_map: {
    id: 'skywarden_patrol_map', name: '天衛巡空圖', type: 'quest',
    description: '天衛營地保管的皮革巡空圖，以雲石粉標出龍騎士與風暴巨龍的換班路線。圖上也記錄了深淵入口異常擴大的日期。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 45, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['dragon_valley'],
  },

beacon_eye_core: {
    id: 'beacon_eye_core', name: '信標眼核', type: 'quest',
    description: '深淵信標外層眼狀符文剝落後凝成的核心，仍會向遙遠維度發出黑紫脈衝。它能證明裂隙入侵具有明確座標與召喚週期。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 55, rarity: 'legendary',
    sourceTags: ['boss', 'quest'], zoneTags: ['abyss_rift'],
  },

abyss_survey_scroll: {
    id: 'abyss_survey_scroll', name: '深淵測繪卷軸', type: 'quest',
    description: '黑紫羊皮上以銀砂畫出深淵裂隙的封印錨點、虛空鏡湖與信標眼方位。站在深淵裂隙入口展開時，可校準副本路線，不會消耗。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 55, rarity: 'legendary',
    sourceTags: ['quest', 'dungeon_entry'], zoneTags: ['abyss_rift'],
  },

oath_ribbon: {
    id: 'oath_ribbon', name: '誓約緞帶', type: 'quest',
    description: '誓約之泉上未被污染的光織緞帶，寫著守護者曾立下的名字與誓句。若緞帶轉黑，代表誓言已被深淵污染。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 20, levelReq: 55, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['celestial_ruins'],
  },

final_seal_splinter: {
    id: 'final_seal_splinter', name: '最終封印裂片', type: 'quest',
    description: '最終封印圓環剝落的金白裂片，內側有深淵黑核留下的細小焦痕。它能證明封印不是單純破裂，而是在等待新的平衡條件。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 60, rarity: 'legendary',
    sourceTags: ['boss', 'quest'], zoneTags: ['celestial_ruins'],
  },

// ============ 任務道具 ============
  class_change_scroll_swordsman: {
    id: 'class_change_scroll_swordsman', name: '戰士轉職卷軸', type: 'quest',
    description: '紅蠟封住的戰士誓約卷軸，羊皮紙上畫著交叉長劍與訓練場印記，邊角磨得發亮，是完成基礎試煉後交付轉職的憑證。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },

class_change_scroll_mage: {
    id: 'class_change_scroll_mage', name: '法師轉職卷軸', type: 'quest',
    description: '藍蠟封存的法師認證卷軸，紙面浮著細小星點與初階法陣，展開時有淡淡墨香，是導師確認施法資格的轉職憑證。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },

class_change_scroll_ranger: {
    id: 'class_change_scroll_ranger', name: '遊俠轉職卷軸', type: 'quest',
    description: '綠線綁起的遊俠試煉卷軸，封面壓著羽毛與箭痕，背面標著林徑巡行記號，是巡林訓練合格後使用的轉職憑證。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },

class_change_scroll_priest: {
    id: 'class_change_scroll_priest', name: '祭司轉職卷軸', type: 'quest',
    description: '白金絲帶束著的祭司祝聖卷軸，紙緣有聖堂水印，打開時會散出柔和乳白光，是聖堂認可信仰修習的轉職憑證。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },

starter_welcome_token: {
    id: 'starter_welcome_token', name: '新手村歡迎木牌', type: 'quest',
    description: '村長辦公桌旁發放的小木牌，上面刻著新手村橡樹與第一條出村道路。它不是貴重物品，卻能提醒新冒險者回到起點整理補給。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 1, rarity: 'common',
    sourceTags: ['quest', 'town_service'], zoneTags: ['starter_village'],
  },

practice_yard_chit: {
    id: 'practice_yard_chit', name: '訓練場木籌', type: 'quest',
    description: '訓練場教官用來記錄基礎練習的木籌，邊角被木劍敲得發亮。完成基礎動作後可拿去公會換取小額指引。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 30, levelReq: 1, rarity: 'common',
    sourceTags: ['quest', 'training'], zoneTags: ['starter_village'],
  },

willow_prayer_tag: {
    id: 'willow_prayer_tag', name: '柳木祈願牌', type: 'quest',
    description: '柳樹神龕上掉落的小木牌，背面寫著失蹤孩子的名字和一行歪斜路線。它能把盜匪足跡、瞭望台與墓地入口的調查串起來。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 1, rarity: 'common',
    sourceTags: ['quest', 'hidden_cache'], zoneTags: ['starter_village_ext'],
  },

plains_wolf_track_tag: {
    id: 'plains_wolf_track_tag', name: '狼跡木牌', type: 'quest',
    description: '老獵人用來標記狼群出沒方向的小木牌，背面刻著爪印深度與風向。收集後能判斷平原狼群是否靠近村路。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 30, levelReq: 5, rarity: 'common',
    sourceTags: ['drop', 'quest'], zoneTags: ['plains'],
  },

tidewatch_pearl: {
    id: 'tidewatch_pearl', name: '觀潮珍珠', type: 'quest',
    description: '珍珠床裡找到的乳白珍珠，表面有細小潮紋。交給漁夫能校準退潮時刻，也能證明有人在夜裡盜採蚌床。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 10, rarity: 'rare',
    sourceTags: ['quest', 'hidden_cache'], zoneTags: ['eastern_coast'],
  },

ranger_shadow_report: {
    id: 'ranger_shadow_report', name: '巡林暗影報告', type: 'quest',
    description: '巡林者用防水皮紙記下的暗影擴散報告，包含狼跡、蛛網密度與古樹心庭根系異常。交回後可協助判斷森林核心是否惡化。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 30, levelReq: 12, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['dark_forest'],
  },

prism_gate_rune: {
    id: 'prism_gate_rune', name: '棱鏡門符片', type: 'quest',
    description: '棱鏡門鎖槽中掉出的三角符片，表面折射出看不見的通道。它證明探索者已深入水晶洞窟核心路線。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 26, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['crystal_cave'],
  },

prisoner_parole_token: {
    id: 'prisoner_parole_token', name: '俘虜假釋牌', type: 'quest',
    description: '俘虜柵欄中流通的臨時假釋牌，一面刻著姓名，一面刻著交換條件。它能證明玩家介入了邊境俘虜線。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 30, levelReq: 40, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['kingdom_frontier'],
  },

frontier_command_seal: {
    id: 'frontier_command_seal', name: '前線指揮印', type: 'quest',
    description: '前線指揮官敗退後留下的重銅軍印，印面仍帶著火漆與血痕。它證明邊境戰圖的核心命令已被奪下。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 60, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['kingdom_frontier'],
  },

frozen_watch_badge: {
    id: 'frozen_watch_badge', name: '冰哨徽章', type: 'quest',
    description: '結冰哨塔兵器架上找到的舊王朝徽章，背面刻著哨塔、符石環與城門的巡邏順序。帶給看守能證明玩家已查過外牆警戒線。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 24, rarity: 'rare',
    sourceTags: ['quest', 'hidden_cache'], zoneTags: ['frozen_wastes'],
  },

forge_calibration_tongs: {
    id: 'forge_calibration_tongs', name: '校爐火鉗', type: 'quest',
    description: '鍛造大廳用來測試熔爐風口的黑鐵火鉗，柄端刻著礦工頭目的記號。帶回它能證明玩家已進入火晶噴氣口並確認爐溫異常。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 15, rarity: 'rare',
    sourceTags: ['quest', 'hidden_cache'], zoneTags: ['volcano_zone'],
  },

rusted_farm_key: {
    id: 'rusted_farm_key', name: '生鏽農舍鑰匙', type: 'quest',
    description: '刻著農場姓氏的舊鑰匙，齒痕被泥與鏽蝕遮住，但仍能開啟農舍或糧倉裡某些保存完好的箱櫃，是老舊農場任務線索。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['old_farmland', 'quest', 'monster_drop'], zoneTags: ['old_farmland'],
  },

ranger_badge: {
    id: 'ranger_badge', name: '巡林徽章', type: 'quest',
    description: '失蹤巡林人留下的銅徽章，背面刻著巡視路線與石堰水位記號。舊神龕似乎會回應它的金屬聲。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['whispering_valley', 'quest', 'monster_drop'], zoneTags: ['whispering_valley'],
  },

whispering_crystal: {
    id: 'whispering_crystal', name: '低語水晶', type: 'quest',
    description: '低語裂縫中凝成的藍白水晶，內部光絲像水流般移動。它記錄溪谷水聲失序的核心節奏。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['whispering_valley', 'quest', 'monster_drop'], zoneTags: ['whispering_valley'],
  },

foreman_key_tag: {
    id: 'foreman_key_tag', name: '工頭鑰匙牌', type: 'quest',
    description: '刻著工頭室、火藥室與深層倉櫃編號的銅牌，邊角有撬痕。它能證明礦難後仍有人回來翻找證據，也是開啟礦坑調查線的憑證。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['abandoned_mines', 'quest', 'monster_drop'], zoneTags: ['abandoned_mines'],
  },

core_ore_shard: {
    id: 'core_ore_shard', name: '礦核碎片', type: 'quest',
    description: '深部礦核剝落的暗紅礦片，握在手中會像心跳般發熱。它是礦工亡魂無法離開礦坑的核心線索。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['abandoned_mines', 'quest', 'monster_drop'], zoneTags: ['abandoned_mines'],
  },

goblin_signal_horn: {
    id: 'goblin_signal_horn', name: '哥布林信號角', type: 'quest',
    description: '用野豬獠牙與銅環拼成的粗糙號角，吹響後聲音會被風帶到看火營與酋長脊。它能證明丘陵巡邏由同一套旗號指揮。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['wildgrass_hills', 'quest', 'monster_drop'], zoneTags: ['wildgrass_hills'],
  },

windward_oath_strip: {
    id: 'windward_oath_strip', name: '守風誓詞布條', type: 'quest',
    description: '從斷圖騰空腔中取出的油布誓詞，字句要求旅人順風而行、逆風停步。它是安撫風暴草冠的古老線索。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['wildgrass_hills', 'quest', 'hidden_cache'], zoneTags: ['wildgrass_hills'],
  },

harbor_seal_stamp: {
    id: 'harbor_seal_stamp', name: '港務封印章', type: 'quest',
    description: '海關廳使用的銅製封印章，印面刻著霧港潮鐘與三道浪紋。若它出現在走私巷，代表港務紀錄被動過手腳。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['mist_harbor', 'quest', 'service'], zoneTags: ['mist_harbor'],
  },

ferry_token: {
    id: 'ferry_token', name: '渡船木牌', type: 'quest',
    description: '霧港渡船棧橋發出的防水木牌，背面刻著潮位時段。沒有它，船夫通常不會在濃霧裡載客出港。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['mist_harbor', 'quest', 'service'], zoneTags: ['mist_harbor'],
  },

smuggled_cargo_tag: {
    id: 'smuggled_cargo_tag', name: '走私貨牌', type: 'quest',
    description: '九號倉與走私巷之間流通的無名貨牌，木面只刻著潮汐暗號。它能指向被海關簿抹掉的私航貨箱。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['mist_harbor', 'quest', 'hidden_cache'], zoneTags: ['mist_harbor'],
  },

oracle_shard: {
    id: 'oracle_shard', name: '神諭碎片', type: 'quest',
    description: '神諭室裂晶邊緣剝落的透明碎片，內部會反覆浮現城市被白光吞沒的片段。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['ancient_ruins', 'quest', 'monster_drop'], zoneTags: ['ancient_ruins'],
  },

sealed_core_fragment: {
    id: 'sealed_core_fragment', name: '封印光核碎片', type: 'quest',
    description: '內聖所核心外層脫落的白光碎片，觸碰時能聽見守衛啟動序列。它是判斷封印是否穩定的關鍵物證。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['ancient_ruins', 'quest', 'monster_drop'], zoneTags: ['ancient_ruins'],
  },

lost_name_tag: {
    id: 'lost_name_tag', name: '失路名牌', type: 'quest',
    description: '失路石堆與沉沒小祠附近撿到的防水名牌，刻痕被泡得發白。它能證明失蹤旅人最後走向哪一條假路。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['marsh_of_mirrors', 'quest', 'monster_drop'], zoneTags: ['marsh_of_mirrors'],
  },

mirror_core_splinter: {
    id: 'mirror_core_splinter', name: '鏡核碎片', type: 'quest',
    description: '玻璃水核心外圈剝落的透明碎核，轉動時會讓周圍倒影慢半拍。它是鏡沼迷路現象的核心物證。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['marsh_of_mirrors', 'quest', 'monster_drop'], zoneTags: ['marsh_of_mirrors'],
  },

caravan_guard_badge: {
    id: 'caravan_guard_badge', name: '商隊護衛徽章', type: 'quest',
    description: '焚車殘骸附近找回的金屬徽章，邊緣被火燒黑。它能證明商隊遇襲與黑旗盜匪供應線有關。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['redrock_badlands', 'quest', 'monster_drop'], zoneTags: ['redrock_badlands'],
  },

scarlet_crater_core: {
    id: 'scarlet_crater_core', name: '猩紅火成核心', type: 'quest',
    description: '猩紅火口裂縫中凝成的火成核心，表面有黑旗刮痕與巨人指印。它是追查盜匪爭奪赤礦原因的關鍵證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['redrock_badlands', 'quest', 'monster_drop'], zoneTags: ['redrock_badlands'],
  },

drowned_knight_crest: {
    id: 'drowned_knight_crest', name: '溺水騎士徽章', type: 'quest',
    description: '騎士墓庫中亡靈騎士仍緊握的家族徽章，銀面被黑水腐蝕。它是打開王冠墓室與淨化騎士誓言的關鍵。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['sunken_catacombs', 'quest', 'monster_drop'], zoneTags: ['sunken_catacombs'],
  },

drowned_crown_fragment: {
    id: 'drowned_crown_fragment', name: '溺王冠碎片', type: 'quest',
    description: '王冠墓室與深淵蓄水池浮出的黑銀碎片，邊緣像被水流磨出細齒。它能證明深潮井下的意志仍未沉寂。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['sunken_catacombs', 'quest', 'monster_drop'], zoneTags: ['sunken_catacombs'],
  },

nomad_storm_charm: {
    id: 'nomad_storm_charm', name: '游牧避雷符', type: 'quest',
    description: '游牧營地與風祭小祠使用的皮繩護符，綁著雷鷹電羽與蓄雷草。它能證明隊伍獲得部族允許深入風眼。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['thundersteppe', 'quest', 'service'], zoneTags: ['thundersteppe'],
  },

dragonstorm_core_spark: {
    id: 'dragonstorm_core_spark', name: '龍雷核火', type: 'quest',
    description: '世界王火坑雷核邊緣迸出的藍白火星，被封在玻片裡仍會按心跳明滅。它是雷鳴草原最深風暴異常的核心證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['thundersteppe', 'quest', 'monster_drop'], zoneTags: ['thundersteppe'],
  },

sunbleached_relic_seal: {
    id: 'sunbleached_relic_seal', name: '日漂遺印', type: 'quest',
    description: '半埋商隊與遺物坑出土的古王朝封印，原本的金漆被烈日漂成白色。它能證明海市集影下方仍有真實道路。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['glass_dunes', 'quest', 'salvage'], zoneTags: ['glass_dunes'],
  },

lost_sun_disc: {
    id: 'lost_sun_disc', name: '失朝日輪盤', type: 'quest',
    description: '失朝祭壇碎裂儀盤的一角，表面刻著日火坑、埋宮門與稜鏡拱的對位線。它是重新定位宮門機關的關鍵。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['glass_dunes', 'quest', 'monster_drop'], zoneTags: ['glass_dunes'],
  },

sunfire_heartglass: {
    id: 'sunfire_heartglass', name: '日火心玻', type: 'quest',
    description: '日火坑中心凝出的赤金玻核，內部像封著一輪小太陽。它是判斷琉璃沙丘熔化異常是否仍在擴張的核心證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['glass_dunes', 'quest', 'monster_drop'], zoneTags: ['glass_dunes'],
  },

undercity_trade_token: {
    id: 'undercity_trade_token', name: '城邦交易牌', type: 'quest',
    description: '地下城邦市場露臺發放的青銅交易牌，刻有升降門、熔爐與暗河三枚印記。持有者可在正規商鋪留下交易紀錄。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['underground_city', 'quest', 'service'], zoneTags: ['underground_city'],
  },

darkriver_pass: {
    id: 'darkriver_pass', name: '暗河通行券', type: 'quest',
    description: '暗河碼頭與走私碼頭都承認的防水石片，邊緣塗著會在菌燈下發亮的渡口漆。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['underground_city', 'quest', 'service'], zoneTags: ['underground_city'],
  },

forge_heat_voucher: {
    id: 'forge_heat_voucher', name: '熔爐熱額券', type: 'quest',
    description: '熔爐廣場匠師簽發的耐火薄牌，可換取一次坩堝工坊校溫或裝備修補排程。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['underground_city', 'quest', 'crafting'], zoneTags: ['underground_city'],
  },

black_market_seal: {
    id: 'black_market_seal', name: '黑市暗印', type: 'quest',
    description: '黑市暗巷中以熱蠟壓出的半合法暗印，能證明一筆交易曾被地下城邦默許，但不會出現在公開帳冊。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['underground_city', 'quest', 'service'], zoneTags: ['underground_city'],
  },

gravekeeper_wax_seal: {
    id: 'gravekeeper_wax_seal', name: '守墓封蠟', type: 'quest',
    description: '守墓人地窖保存的黑紅封蠟，封面壓著墓園鑰匙與悼詞書頁。它能證明某座棺木本不該被重新打開。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['cursed_graveyard', 'quest', 'salvage'], zoneTags: ['cursed_graveyard'],
  },

lich_litany_page: {
    id: 'lich_litany_page', name: '巫妖悼詞頁', type: 'quest',
    description: '悼詞祭壇與巫妖陵寢散落的黑經書頁，每一行悼詞都會把讀者的呼吸短暫拖慢。它記錄著墓園詛咒的核心祈文。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['cursed_graveyard', 'quest', 'monster_drop'], zoneTags: ['cursed_graveyard'],
  },

wind_altar_chime: {
    id: 'wind_altar_chime', name: '風壇殘鈴', type: 'quest',
    description: '風神祭壇裂柱上拆下的青銅殘鈴，只在暴風眼張開時發聲。它能證明隊伍找到了進入風牆的正確節奏。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['storm_highlands', 'quest', 'salvage'], zoneTags: ['storm_highlands'],
  },

gale_king_plume: {
    id: 'gale_king_plume', name: '風王冠羽', type: 'quest',
    description: '風暴王峰獅鷲王冠上脫落的長羽，羽軸像玻璃一樣透明，內部有雲層旋轉。它是高原天空領主的核心證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['storm_highlands', 'quest', 'monster_drop'], zoneTags: ['storm_highlands'],
  },

hunter_mark_charm: {
    id: 'hunter_mark_charm', name: '獵人刻痕符', type: 'quest',
    description: '黑木林入口獵人刻在骨片上的方向符，只有在樹木換位後仍會指向真正出口。它是深入林心前必備的定位證明。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['blackwood', 'quest', 'service'], zoneTags: ['blackwood'],
  },

heartwood_shadow_core: {
    id: 'heartwood_shadow_core', name: '黑心木影核', type: 'quest',
    description: '黑心木核深處剝離的暗綠年輪核心，內部有樹影像活物一樣緩慢轉動。它能證明黑木林換位異常來自林心本身。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['blackwood', 'quest', 'monster_drop'], zoneTags: ['blackwood'],
  },

coronation_seal: {
    id: 'coronation_seal', name: '加冕封印', type: 'quest',
    description: '加冕階與王座前廳殘留的黑金封印，封面壓著空王座與失落王冠。它是進入王座儀式的通行證明。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['lost_capital', 'quest', 'salvage'], zoneTags: ['lost_capital'],
  },

empty_throne_crown: {
    id: 'empty_throne_crown', name: '空王座冠影', type: 'quest',
    description: '空王座上方凝成的半透明冠影，觸碰時會聽見整座王都同時跪下的聲音。它是王都時間停滯異常的核心證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['lost_capital', 'quest', 'monster_drop'], zoneTags: ['lost_capital'],
  },

stormwell_core: {
    id: 'stormwell_core', name: '風暴井核', type: 'quest',
    description: '風暴井底部被雷光托起的旋轉核心，內部有雲海倒流的影像。它能短暫穩定通往世界王浮島的風牆。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['sky_isles', 'quest', 'monster_drop'], zoneTags: ['sky_isles'],
  },

skycore_relic: {
    id: 'skycore_relic', name: '天空核心聖物', type: 'quest',
    description: '天空核心聖所中封存的白金聖物，外形像縮小的浮島群。它是維持整片群島高度的核心證物。',
    buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 9, levelReq: 1,
    sourceTags: ['sky_isles', 'quest', 'monster_drop'], zoneTags: ['sky_isles'],
  },

worldscar_fragment: {
    id: 'worldscar_fragment', name: '世界傷痕碎片', type: 'quest',
    description: '世界傷痕邊緣剝落的裂縫碎片，內側映著不屬於此世的星空，是進入世界王星核前的危險憑證。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 56, rarity: 'legendary',
  },

starcore_heart: {
    id: 'starcore_heart', name: '世界王星核心臟', type: 'quest',
    description: '星隕坑最深處仍在跳動的隕星心臟，光與雷在核心中交替閃爍，像一顆尚未承認墜落的星辰。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 58, rarity: 'mythic',
  },

minute_zero_key: {
    id: 'minute_zero_key', name: '零分鑰印', type: 'quest',
    description: '鐘心門深處浮現的鑰形時間印記，只有在秒針完全停下時才會顯露輪廓。站在時間廢墟入口使用可校準零分通道並開啟副本，不會消耗。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 58, rarity: 'legendary',
  },

afterimage_void_core: {
    id: 'afterimage_void_core', name: '餘影虛空核心', type: 'quest',
    description: '零分核心後方殘留的虛空核心，內部同時存在已結束與尚未開始的兩場戰鬥。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 60, rarity: 'mythic',
  },

worldcore_anchor: {
    id: 'worldcore_anchor', name: '荒原核心錨', type: 'quest',
    description: '星界荒原核心內部抽出的現實錨點，握住它時能感到大地重新擁有重量。站在星界荒原入口使用可錨定副本道路並帶隊進入，不會消耗。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 59, rarity: 'legendary',
  },

outer_dark_heart: {
    id: 'outer_dark_heart', name: '外層黑域心核', type: 'quest',
    description: '外層黑域最深處凝成的黑色心核，內部沒有光，卻能照見星界荒原通往外界的裂縫。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 60, rarity: 'mythic',
  },

final_standard_seal: {
    id: 'final_standard_seal', name: '終末軍旗印', type: 'quest',
    description: '終末軍旗統帥身上浮現的戰印，握住它時能聽見諸王軍令與魔神咆哮同時停在最後一字。站在終焉戰場入口使用可宣戰並開啟副本，不會消耗。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 60, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['final_battleground'],
  },

silence_after_war_core: {
    id: 'silence_after_war_core', name: '戰後寂地核心', type: 'quest',
    description: '戰後寂地深處留下的寂靜核心，所有戰鼓、祈禱與慘叫都在其中被壓成一枚不再震動的黑白石核。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 60, rarity: 'mythic',
    sourceTags: ['boss'], zoneTags: ['final_battleground'],
  },

lunar_altar_token: {
    id: 'lunar_altar_token', name: '月沼祭壇符片', type: 'quest',
    description: '月沼祭壇邊緣剝落的半月形符片，靠近夢水核心時會浮現一圈妖光文字。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 16, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['moonlit_fen'],
  },

sanctuary_gate_sigil: {
    id: 'sanctuary_gate_sigil', name: '聖地門印', type: 'quest',
    description: '聖地門與終點聖碑之間顯現的白金門印，只有通過古道試煉的旅人才會讓它完整發光，是進入聖地後段並證明巡禮完成的資格憑證。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 22, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['pilgrim_road'],
  },

keep_command_seal: {
    id: 'keep_command_seal', name: '內堡軍令印', type: 'quest',
    description: '高堡核心軍令台上顯現的黑鐵印記，只有壓制內堡叛亂與構裝失控後才會停止發燙。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 30, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['ironwood_fort'],
  },

resin_cutting_knife: {
    id: 'resin_cutting_knife', name: '樹脂切刀', type: 'quest',
    description: '採集工會用來切開活樹脂的薄刃工具，刀背刻有採集界樁編號，可避免採集者誤傷古木根脈。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 20, rarity: 'rare',
    sourceTags: ['quest', 'shop'], zoneTags: ['amber_forest'],
  },

deep_amber_heart: {
    id: 'deep_amber_heart', name: '深琥珀心核', type: 'quest',
    description: '深琥珀核心中取出的溫熱心核，內部封著遠古昆蟲、樹脂火光與一段仍未停止生長的金色年輪。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 32, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['amber_forest'],
  },

mountain_pick_head: {
    id: 'mountain_pick_head', name: '高山鎬頭', type: 'quest',
    description: '舊礦工營保存的重鎬頭，專門用來敲開冰玻礦與雲母脈，使用前必須先除霜，是銀松山脈採集委託與礦脈定位的重要工具。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 24, rarity: 'rare',
    sourceTags: ['quest', 'shop'], zoneTags: ['silverpine_range'],
  },

high_mine_core: {
    id: 'high_mine_core', name: '高山礦核', type: 'quest',
    description: '銀松山脈最高礦脈深處取出的寒銀核心，內部同時封著冰玻光、星光與遠古礦工的敲擊回音。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 36, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['silverpine_range'],
  },

deep_brine_pearl: {
    id: 'deep_brine_pearl', name: '深鹽眼珠', type: 'quest',
    description: '深鹽眼底部凝成的灰白鹽珠，內部封著潮汐倒影與海蛇鱗光，是鹽風灘核心證明物。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 24, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['saltwind_flats'],
  },

druid_altar_seed: {
    id: 'druid_altar_seed', name: '德魯伊祭壇種', type: 'quest',
    description: '古代德魯伊祭壇核心長出的黑綠種子，種殼上刻著會閉合迷宮的古老誓文。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 38, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['thornmaze'],
  },

heartfire_border_seal: {
    id: 'heartfire_border_seal', name: '心火邊境印', type: 'quest',
    description: '心火缺口深處凝出的赤黑印記，外圈像燒熔的邊境城牆，內圈則記錄火山灰、戰營與龍印脊共同形成的火線節點。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 34, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['ember_march'],
  },

drowned_treasure_map: {
    id: 'drowned_treasure_map', name: '溺寶殘圖', type: 'quest',
    description: '沉沒船艙與船長墓中拼出的防水羊皮殘圖，墨線在退潮時才會浮現，標出幽靈錨、寶藏龍骨與溺亡寶庫的相對位置。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 34, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['reef_of_bones'],
  },

tidebone_compass: {
    id: 'tidebone_compass', name: '潮骨羅盤', type: 'quest',
    description: '白骨礁船長墓中拼回的骨質羅盤，指針會跟著退潮鐘聲轉向幽靈錨。站在白骨礁入口使用可定位副本航道，不會消耗。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 34, rarity: 'epic',
    sourceTags: ['quest', 'dungeon_entry'], zoneTags: ['reef_of_bones'],
  },

vault_captain_seal: {
    id: 'vault_captain_seal', name: '寶庫船長印', type: 'quest',
    description: '溺亡寶庫守護者身上留下的黑銀船長印，外圈刻著船名與礁鐘方位，內側封著不死海盜守財直到退潮盡頭的誓約。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 40, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['reef_of_bones'],
  },

blueheart_lode_core: {
    id: 'blueheart_lode_core', name: '藍心礦核', type: 'quest',
    description: '藍心聖窟深處凝出的湖底礦核，內部像有微小水精靈在沉睡，是證明藍寶湖礦脈仍有生命反應的核心證物。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 25, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['sapphire_lake'],
  },

// ─── 湖畔城鎮服務票券與進階據點用品 (Lv 10-50) ───
  lakeside_adventurer_pass: {
    id: 'lakeside_adventurer_pass', name: '湖畔冒險章', type: 'quest',
    description: '湖畔公會登記後發放的銅章，背面刻著轉職大廳、競技場與傳送廣場三枚小印。持有者可證明自己已在湖畔城鎮完成進階冒險者登錄。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 10, rarity: 'common',
    sourceTags: ['quest', 'service'], zoneTags: ['lakeside_town'],
  },

arena_practice_token: {
    id: 'arena_practice_token', name: '競技練習牌', type: 'quest',
    description: '競技場入口發給訓練者的銅牌，邊緣刻著木劍、假人與治療席編號。它記錄每日練習場次，方便裁判確認挑戰是否屬於安全訓練。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 10, rarity: 'common',
    sourceTags: ['quest', 'service'], zoneTags: ['lakeside_town'],
  },

lakeside_auction_lot_ticket: {
    id: 'lakeside_auction_lot_ticket', name: '湖畔委託券', type: 'quest',
    description: '湖畔拍賣場使用的藍邊委託券，寫有寄售櫃台、估價水晶與交割窗口。它能證明某件物品已進入正式拍賣流程，而不是私下轉手的假貨。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 10, rarity: 'rare',
    sourceTags: ['quest', 'service'], zoneTags: ['lakeside_town'],
  },

caravan_waybill: {
    id: 'caravan_waybill', name: '商隊貨單', type: 'quest',
    description: '商隊院簽發的折疊貨單，列著出城方向、馱獸編號與押運人姓名。它能證明某批貨物是經王道市集合規轉運。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 1, rarity: 'common',
    sourceTags: ['quest', 'shop'], zoneTags: ['kingsroad_market'],
  },

auction_lot_ticket: {
    id: 'auction_lot_ticket', name: '拍賣貨號券', type: 'quest',
    description: '拍賣帳棚使用的厚紙貨號券，邊角蓋有紅蠟與看台章。持券者可查詢寄售貨物、估價紀錄與得標後的交割窗口。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 1, rarity: 'rare',
    sourceTags: ['quest', 'service'], zoneTags: ['kingsroad_market'],
  },

sealed_price_list: {
    id: 'sealed_price_list', name: '封蠟價目表', type: 'quest',
    description: '文書角封存的市集價目表，記錄穀物、藥草、礦材與護送費率。封蠟未破時可作為調查哄抬物價或假貨流通的證據。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 1, rarity: 'rare',
    sourceTags: ['quest', 'service'], zoneTags: ['kingsroad_market'],
  },

market_repair_chit: {
    id: 'market_repair_chit', name: '市集修補單', type: 'quest',
    description: '鍛匠列開出的修補排程單，記錄裝備狀況、估價與取件時段。若交易糾紛發生，它也是證明裝備交付狀態的文件。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 1, rarity: 'uncommon',
    sourceTags: ['quest', 'service', 'shop'], zoneTags: ['kingsroad_market'],
  },

// ─── 競技城區票券、軍需與獎章 (Lv 10-60) ───
  arena_entry_token: {
    id: 'arena_entry_token', name: '競技入場牌', type: 'quest',
    description: '競技城門發放的銅製入場牌，背面刻有座位、場次與參賽者編號。沒有它，下注所和獎品櫃台都不會承認戰績。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 10, rarity: 'common',
    sourceTags: ['quest', 'service', 'shop'], zoneTags: ['arena_quarter'],
  },

betting_house_slip: {
    id: 'betting_house_slip', name: '下注憑條', type: 'quest',
    description: '下注所蓋章的窄紙條，記錄選手、賠率與封盤時間。紙條很薄，但在競技城區比許多口頭承諾更有重量。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 10, rarity: 'common',
    sourceTags: ['quest', 'service'], zoneTags: ['arena_quarter'],
  },

champion_sash: {
    id: 'champion_sash', name: '冠軍肩帶', type: 'quest',
    description: '中央競技場冠軍試煉後授予的紅金肩帶，織線中夾著舊勝者留下的碎甲片，是證明通過正式競技試煉的榮譽物。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 25, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['arena_quarter'],
  },

// ─── 王家獵場許可與戰利品 (Lv 18-32) ───
  royal_hunt_permit: {
    id: 'royal_hunt_permit', name: '王獵許可章', type: 'quest',
    description: '許可獵屋核發的銅章，刻有王冠、角鹿與獵犬紋。持有者可合法進入指定獵徑，也能證明獵物不是盜獵所得。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 18, rarity: 'rare',
    sourceTags: ['quest', 'shop'], zoneTags: ['royal_hunting_grounds'],
  },

white_stag_oath_mark: {
    id: 'white_stag_oath_mark', name: '白鹿誓印', type: 'quest',
    description: '白鹿林深處留下的銀白印記，形狀像鹿蹄踏在王冠上。它證明獵人見過獵場守護靈，也提醒王室狩獵不該越過誓約。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 32, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['royal_hunting_grounds'],
  },

// ─── 灰落修道院封印與聖物 (Lv 34-46) ───
  ash_gray_key: {
    id: 'ash_gray_key', name: '灰門鑰片', type: 'quest',
    description: '灰落修道院灰門內側剝落的鑰片，邊緣仍有鐘庭灰燼。它能證明探索者已進入修道院，而不是只在外牆撿拾殘片。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 34, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['ashfall_monastery'],
  },

cracked_sanctum_seal: {
    id: 'cracked_sanctum_seal', name: '裂聖所封印', type: 'quest',
    description: '雙相祭壇與灰燼聖所之間裂開的封印碎片，一半帶著聖光殘響，一半被黑灰侵蝕。修道院倖存者用它判斷墮落儀式是否仍在擴散。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 12, levelReq: 42, rarity: 'epic',
    sourceTags: ['boss', 'quest'], zoneTags: ['ashfall_monastery'],
  },

ashen_vigil_offering: {
    id: 'ashen_vigil_offering', name: '灰守祭品', type: 'quest',
    description: '由焦黑經頁、裂聖所封印灰與一滴聖物餘火油封成的小祭包。站在灰落修道院入口獻上時，可開啟一次副本，使用後消耗。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 42, rarity: 'epic',
    sourceTags: ['quest', 'dungeon_entry'], zoneTags: ['ashfall_monastery'],
  },

abbot_ash_crozier_head: {
    id: 'abbot_ash_crozier_head', name: '灰院長杖首', type: 'quest',
    description: '灰燼聖所墮落院長權杖頂端的殘片，聖徽外圈已燒成黑玻璃。交回它能證明修道院深處的儀式首腦已被擊敗。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 46, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['ashfall_monastery'],
  },

lost_caravan_seal: {
    id: 'lost_caravan_seal', name: '失商貨印', type: 'quest',
    description: '埋雪貨車與失商藏點中找到的金屬貨印，背面刻著已凍裂的商隊名。它能證明失蹤貨物不是被雪崩單純吞沒。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 28, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['frostbite_pass'],
  },

polar_gate_sigil: {
    id: 'polar_gate_sigil', name: '極北封門印', type: 'quest',
    description: '極北封門守衛倒下後留下的冰藍印記，握在手中會聽見遠方風暴停止一瞬。它是通過霜咬隘口高處的證明。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 38, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['frostbite_pass'],
  },

// ─── 死都外門軍陣與亡者聖物 (Lv 40-52) ───
  black_gate_splinter: {
    id: 'black_gate_splinter', name: '黑門碎楔', type: 'quest',
    description: '半開黑門邊緣剝落的黑鐵楔片，表面刻著死都軍靴隊列的編號。它能證明探索者已越過外門引道。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 40, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['necropolis_gate'],
  },

crypt_market_token: {
    id: 'crypt_market_token', name: '墓市骨籌', type: 'quest',
    description: '墓市廊流通的薄骨籌碼，每一枚都刻著一個死者名。它不是貨幣，而是死都外門允許交易的臨時通行證。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 30, levelReq: 40, rarity: 'rare',
    sourceTags: ['drop', 'shop'], zoneTags: ['necropolis_gate'],
  },

dead_city_writ: {
    id: 'dead_city_writ', name: '死都入城令', type: 'quest',
    description: '死都門檻守將倒下後浮現的黑色令狀，字跡像軍靴踏出的裂紋。持有它才算真正打開死者之城的外門。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 52, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['necropolis_gate'],
  },

solar_trial_wax: {
    id: 'solar_trial_wax', name: '日試蠟印', type: 'quest',
    description: '黎明試煉室與餘燼試煉室使用的金紅蠟印，印面刻著尖塔階梯。集齊後能證明冒險者通過了中層試煉。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 48, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['sunspire'],
  },

day_crown_sigil: {
    id: 'day_crown_sigil', name: '日冠聖印', type: 'quest',
    description: '日冠核心守護者敗退後留下的耀白聖印，外圈像正午太陽，內圈像審判之眼。它證明尖塔頂端試煉已被完成。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 58, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['sunspire'],
  },

// ─── 月影庭夢境宮廷材料 (Lv 38-50) ───
  moonmask_shard: {
    id: 'moonmask_shard', name: '月面具碎片', type: 'quest',
    description: '假面舞廳中破碎的銀白面具片，內側仍有夢境禮儀的低語。它能證明持有者被月影庭承認為舞會賓客。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 38, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['moonshadow_court'],
  },

hidden_court_decree: {
    id: 'hidden_court_decree', name: '隱庭敕令', type: 'quest',
    description: '隱庭核心女王投影消散後留下的月黑敕令，字跡會在現實與夢境間交替。它證明月影庭的核心試煉已被通過。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 50, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['moonshadow_court'],
  },

ancient_cpu_key: {
    id: 'ancient_cpu_key', name: '古算核鑰片', type: 'quest',
    description: '古算核庫門禁模組中拆下的細小鑰片，表面刻著已失傳的邏輯符號。它能證明探索者接近了機械墳場核心。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 20, levelReq: 42, rarity: 'epic',
    sourceTags: ['drop', 'quest'], zoneTags: ['machine_graveyard'],
  },

prime_reactor_core: {
    id: 'prime_reactor_core', name: '主反應核心', type: 'quest',
    description: '主反應殼守衛停機後浮出的高密度核心，內部仍有藍白電弧旋轉。它是機械墳場最重要的甦醒證物。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 48, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['machine_graveyard'],
  },

sharktooth_tally: {
    id: 'sharktooth_tally', name: '鯊齒記功牌', type: 'quest',
    description: '血鹽海岸海盜用鯊齒串成的記功牌，每一顆齒都代表一艘被拖上暗礁的船。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 30, levelReq: 32, rarity: 'rare',
    sourceTags: ['drop', 'quest'], zoneTags: ['bloodsalt_coast'],
  },

ritual_reef_bloodseal: {
    id: 'ritual_reef_bloodseal', name: '礁心血印', type: 'quest',
    description: '儀式礁心主祭敗退後凝成的黑紅印記，像一枚被海水反覆沖刷的傷口。它證明血祭儀式已被打斷。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 44, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['bloodsalt_coast'],
  },

high_green_court_mark: {
    id: 'high_green_court_mark', name: '高綠庭印記', type: 'quest',
    description: '高綠庭守護靈消散後留下的樹冠紋印，像鹿角與藤橋交織而成。它證明訪客獲得了樹冠層的通行認可。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 37, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['emerald_canopy'],
  },

mountain_heart_resonator: {
    id: 'mountain_heart_resonator', name: '山心共鳴核', type: 'quest',
    description: '山心核心守衛崩解後留下的中空礦核，內部回音與整座空心山同步震動。它證明探索者抵達並穩定了山腹最深處。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 50, rarity: 'legendary',
    sourceTags: ['boss'], zoneTags: ['hollow_mountain'],
  },

serpent_god_backwater_scale: {
    id: 'serpent_god_backwater_scale', name: '蛇神背水鱗', type: 'quest',
    description: '蛇神背水深處的多口河蛇敗退後留下的巨大鱗片，鱗面映著分裂的河道。它證明三角洲祭壇的失衡已被平息。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 30, rarity: 'epic',
    sourceTags: ['boss'], zoneTags: ['serpent_delta'],
  },

molten_lock_sigill: {
    id: 'molten_lock_sigill', name: '熔鎖印記', type: 'quest',
    description: '熔鎖門守衛身上剝落的赤黑印記，仍會按照古代熔爐的節拍開合，是進入黑曜心鏡的憑證，靠近熔門時會重新發熱並校準入口。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 52, rarity: 'legendary',
  },

worldforge_ember_core: {
    id: 'worldforge_ember_core', name: '世界熔爐燼核', type: 'quest',
    description: '世界熔爐核心深處凝出的暗紅燼核，內部像有一座微型火山持續呼吸，是黑曜深層最終熔爐線索。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 55, rarity: 'mythic',
  },

forbidden_altar_seal: {
    id: 'forbidden_altar_seal', name: '禁壇封印', type: 'quest',
    description: '封住禁忌祭壇的黑藍色印記，邊緣滲著鹽霜與暗影，似乎需要古神低語才能完全解讀，是深海神殿後段的危險憑證。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 50, rarity: 'legendary',
  },

tidal_throne_core: {
    id: 'tidal_throne_core', name: '潮汐王座核心', type: 'quest',
    description: '潮汐王座深處剝落的核心聖物，內部同時脈動著冰冷海潮與深暗神意。',
    buyPrice: 0, sellPrice: 0, stackable: true, maxStack: 9, levelReq: 52, rarity: 'mythic',
  },
};
