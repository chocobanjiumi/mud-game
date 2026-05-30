import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_017: Record<string, RoomDef> = {
amber_forest_smoke_mycology: {
    id: 'amber_forest_smoke_mycology',
    name: '煙菌坡',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_smoke_mycology.png',
    imagePrompt: '煙菌坡 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '煙菌坡被灰白孢霧長年覆住，菌傘從焦黑樹皮和金色樹脂縫裡層層冒出，像一串正在冒煙的燈。東側樹脂落溝的低窪液池在霧後反光，西北方向的玻璃根橋只剩模糊冷亮輪廓，實際路線被封蠟根牆和孢霧切得很繞。坡面有採菌刀留下的短痕，也有被菌絲拖走的靴印；孢子落到樹脂上會形成細小圓斑，顯示煙菌人曾在附近緩慢巡行。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'amber_forest_sapfall_gully',
        description: '東側回程要穿過煙菌孢霧與低窪樹脂池，沿封蠟根牆繞回樹脂落溝',
        edgeKind: 'distant_route',
        edgeNote: '煙菌坡回樹脂落溝需要穿越孢霧與樹脂池，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'smoke_resin_myconid', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'amber_sapling_lurker', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[菌]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '煙菌坡的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '煙菌坡的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '煙菌坡保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_charcoal_stand: {
    id: 'amber_forest_charcoal_stand',
    name: '焦木林列',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_charcoal_stand.png',
    imagePrompt: '焦木林列 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '焦木林列是一排被舊火燒空的黑色樹樁，外層焦皮裂開，裡面卻滲出新鮮琥珀光。西側樹脂落溝的黏稠坡路沿根脈爬上來，北方日陷空地有刺眼金光落在炭灰上，南側獸痕樹皮則傳來粗糙刮擦聲。樹樁間堆著灰燼、甲殼碎片和半熔的採集鉤，熱氣從地底樹脂脈冒出，使這片燒毀林列仍像剛熄火不久。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'amber_forest_sapfall_gully',
        description: '西側回程沿焦黑根脈爬回樹脂溝，途中要避開黏稠樹液坡與斷裂木炭坑',
        edgeKind: 'distant_route',
        edgeNote: '焦木林列回樹脂落溝需要沿根脈爬升並穿越樹液坡，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'amber_forest_suntrap_clearing',
        description: '北側必須穿過焦黑樹樁列再爬上琥珀斜坡，才能安全回到日陷空地邊緣',
        edgeKind: 'distant_route',
        edgeNote: '焦木林列回日陷空地需要穿越焦木樹樁與琥珀斜坡，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'amber_forest_beast_scrape',
        description: '南側焦木灰坡通往獸痕樹皮',
      },
    ],
    monsters: [
      { monsterId: 'ember_carapace_beetle', maxCount: 1, respawnSeconds: 280 },
      { monsterId: 'smoke_resin_myconid', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[焦]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '焦木林列的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '焦木林列的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '焦木林列保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_glowing_hollow: {
    id: 'amber_forest_glowing_hollow',
    name: '發光樹洞',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_glowing_hollow.png',
    imagePrompt: '發光樹洞 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '發光樹洞開在一株中空巨木腹部，內壁被琥珀薄膜覆住，封存昆蟲像星點一樣在樹洞深處閃爍。南方玻璃根橋的冷亮根脈伸到洞口下方，東面燼甲蟲丘透出熱紅微光，北側古脂巨樹的根影則壓在洞頂。洞內有舊獵棚繩結、乾掉蜂蠟和被樹脂封住的短箭，光線雖美，卻把樹精和蜂群的影子投得格外巨大。',
    exits: [
      { direction: 'south', targetRoomId: 'amber_forest_glassroot_bridge', description: '回到玻璃根橋', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'amber_forest_ember_beetle_mound', description: '燼甲蟲丘在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'amber_forest_elder_resin_tree', description: '古脂巨樹在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'elder_resin_treant', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'sealed_wax_wasp', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[洞]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '發光樹洞的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '發光樹洞的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '發光樹洞保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_ember_beetle_mound: {
    id: 'amber_forest_ember_beetle_mound',
    name: '燼甲蟲丘',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_ember_beetle_mound.png',
    imagePrompt: '燼甲蟲丘 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '燼甲蟲丘由焦黑樹脂和空甲殼堆成，丘面布滿細小通風孔，孔中不斷冒出帶火星的暖氣。西側日陷空地的金光照在灰線上，北面獸痕樹皮的刮痕向丘底延伸，東側樹上獵棚則用高枝繩標穿過灼熱空氣。丘邊散著紅亮甲片和被咬斷的蜂刺，地下偶爾傳來甲殼摩擦聲，像整座土丘正慢慢翻身，熱浪裡還混著燒焦蜂蠟的甜味。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'amber_forest_suntrap_clearing',
        description: '西側焦黑灰線回到日陷空地',
      },
      {
        direction: 'north',
        targetRoomId: 'amber_forest_beast_scrape',
        description: '北側熱樹脂裂口回到獸痕樹皮',
      },
      {
        direction: 'east',
        targetRoomId: 'amber_forest_hunter_blind',
        description: '東側樹冠繩標接到樹上獵棚',
      },
    ],
    monsters: [
      { monsterId: 'ember_carapace_beetle', maxCount: 2, respawnSeconds: 280 },
      { monsterId: 'sealed_wax_wasp', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[蟲]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '燼甲蟲丘的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '燼甲蟲丘的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '燼甲蟲丘保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_hunter_blind: {
    id: 'amber_forest_hunter_blind',
    name: '樹上獵棚',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_hunter_blind.png',
    imagePrompt: '樹上獵棚 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '樹上獵棚架在兩株琥珀木之間，木板被樹脂黏住，邊緣掛著褪色繩標和幾支封在金脂裡的短箭。西側燼甲蟲丘的熱氣從枝縫升上來，東面石化花圃透出冷白花光，兩種光在棚底交錯。棚內鋪著觀察獸道用的炭粉圖，圖上標出獸痕樹皮、蜂巢與花圃方向；但欄杆上新的螳螂切痕說明這處高點早已不只屬於獵人。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'amber_forest_ember_beetle_mound',
        description: '西側樹冠繩標回到燼甲蟲丘',
      },
      {
        direction: 'east',
        targetRoomId: 'amber_forest_petrified_bloom',
        description: '東側高枝通往石化花圃',
      },
    ],
    monsters: [
      { monsterId: 'suntrap_bloom_mantis', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'ember_carapace_beetle', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[棚]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '樹上獵棚的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '樹上獵棚的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '樹上獵棚保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_petrified_bloom: {
    id: 'amber_forest_petrified_bloom',
    name: '石化花圃',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_petrified_bloom.png',
    imagePrompt: '石化花圃 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '石化花圃裡的花朵全被琥珀與灰白石質固定在盛放瞬間，花瓣邊緣像薄刀一樣反射冷光。西側樹上獵棚的高枝繩標落到花圃邊，南方封存遺物坑的金色坑壁隔著根影可見，北方深琥珀核心被厚重根牆包住，只剩透明長廊透出暗金心光。花圃泥土硬得像瓷，卻有螳螂足痕和石化守衛的深重腳印壓在花徑之間。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'amber_forest_hunter_blind',
        description: '西側石化藤蔓高枝回到樹上獵棚',
      },
      { direction: 'south', targetRoomId: 'amber_forest_relic_pit', description: '回到封存遺物坑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'amber_forest_deep_amber_core',
        description: '北側核心被厚重琥珀根牆包住，必須循花圃背後的透明根脈長廊進入',
        edgeKind: 'distant_route',
        edgeNote: '石化花圃到深琥珀核心需要穿越透明根脈長廊，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'petrified_resin_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'suntrap_bloom_mantis', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[花]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '石化花圃的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '石化花圃的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '石化花圃保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_elder_resin_tree: {
    id: 'amber_forest_elder_resin_tree',
    name: '古脂巨樹',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_elder_resin_tree.png',
    imagePrompt: '古脂巨樹 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '古脂巨樹的樹幹粗得像一座塔，樹皮下方有厚厚金脂緩慢流動，封住數代採集者刻下的日期與求救符。南側發光樹洞的冷光從根洞間滲上來，東面深琥珀核心透出更深的暗金脈動。巨樹周圍的根脈像肋骨般拱起，某些地方還能看見被封存的昆蟲、骨片與古舊繩結；每當樹冠晃動，地面樹脂都會浮出一圈圈年輪般的波紋。',
    exits: [
      { direction: 'south', targetRoomId: 'amber_forest_glowing_hollow', description: '回到發光樹洞', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'amber_forest_deep_amber_core', description: '根脈通往深琥珀核心', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'elder_resin_treant', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'petrified_resin_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[古]',
    mapX: 1,
    mapY: 4,
    guardianHints: {
      creature: '古脂巨樹的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '古脂巨樹的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '古脂巨樹保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_deep_amber_core: {
    id: 'amber_forest_deep_amber_core',
    name: '深琥珀核心',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_deep_amber_core.png',
    imagePrompt: '深琥珀核心 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '深琥珀核心埋在透明根脈長廊盡頭，一顆巨大的暗金樹脂心懸在根網中央，內部封著昆蟲、葉片、獸骨與像人影般的模糊輪廓。南側石化花圃的冷白花光被核心染成蜂蜜色，西面古脂巨樹的根脈則像血管般接入核心外殼。地面上所有採集繩標都在此處停止，周圍只剩緩慢脈動與甲殼摩擦聲，深琥珀母體留下的裂紋沿核心表面一明一暗。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'amber_forest_petrified_bloom',
        description: '南側回花圃要沿透明根脈長廊退出，穿過厚重琥珀根牆後才看見石化花徑',
        edgeKind: 'distant_route',
        edgeNote: '深琥珀核心回石化花圃需要沿透明根脈長廊退出，屬於長路徑。',
      },
      { direction: 'west', targetRoomId: 'amber_forest_elder_resin_tree', description: '根脈回到古脂巨樹', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'deep_amber_matriarch', maxCount: 1, respawnSeconds: 1500 },
      { monsterId: 'elder_resin_treant', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'petrified_resin_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[核]',
    mapX: 5,
    mapY: 2,
    guardianHints: {
      creature: '深琥珀核心的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '深琥珀核心的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '深琥珀核心保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

// ─── 銀松山脈擴充 (Lv 24-36) ───────────────────────────

  silverpine_range_entry_claim: {
    id: 'silverpine_range_entry_claim',
    name: '山脈入口界樁',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_entry_claim.png',
    imagePrompt: '山脈入口界樁 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '山脈入口界樁位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'east', targetRoomId: 'silverpine_range_vein_path', description: '銀脈山徑在東側' },
      { direction: 'north', targetRoomId: 'silverpine_range_snowline_gate', description: '雪線門在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'silverpine_snowstalker', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'mica_cliff_lizard', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '山脈入口界樁的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '山脈入口界樁的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '山脈入口界樁殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_vein_path: {
    id: 'silverpine_range_vein_path',
    name: '銀脈山徑',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_vein_path.png',
    imagePrompt: '銀脈山徑 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '銀脈山徑位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_entry_claim', description: '回到山脈入口界樁' },
      { direction: 'east', targetRoomId: 'silverpine_range_herb_shelf', description: '寒草岩層在東側' },
      { direction: 'north', targetRoomId: 'silverpine_range_moonneedle_pines', description: '月針松林在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'mica_cliff_lizard', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'silverpine_snowstalker', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[脈]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '銀脈山徑的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '銀脈山徑的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '銀脈山徑殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_herb_shelf: {
    id: 'silverpine_range_herb_shelf',
    name: '寒草岩層',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_herb_shelf.png',
    imagePrompt: '寒草岩層 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '寒草岩層位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_vein_path', description: '回到銀脈山徑' },
      { direction: 'east', targetRoomId: 'silverpine_range_water_pocket', description: '融雪水窪在東側' },
      { direction: 'north', targetRoomId: 'silverpine_range_mica_switchback', description: '雲母折道在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'frost_herb_witch', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'silver_sap_treant', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '寒草岩層的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '寒草岩層的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '寒草岩層殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_water_pocket: {
    id: 'silverpine_range_water_pocket',
    name: '融雪水窪',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_water_pocket.png',
    imagePrompt: '融雪水窪 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '融雪水窪位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_herb_shelf', description: '回到寒草岩層' },
      { direction: 'east', targetRoomId: 'silverpine_range_beast_scrape', description: '獸痕雪坡在東側' },
      { direction: 'north', targetRoomId: 'silverpine_range_frost_herb_ledge', description: '霜草岩棚在北側' },
    ],
    monsters: [
      { monsterId: 'frost_herb_witch', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'iceglass_golem', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[水]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '融雪水窪的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '融雪水窪的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '融雪水窪殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_beast_scrape: {
    id: 'silverpine_range_beast_scrape',
    name: '獸痕雪坡',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_beast_scrape.png',
    imagePrompt: '獸痕雪坡 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '獸痕雪坡位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_water_pocket', description: '回到融雪水窪' },
      { direction: 'east', targetRoomId: 'silverpine_range_relic_pit', description: '古礦遺坑在東側' },
      { direction: 'north', targetRoomId: 'silverpine_range_goat_track', description: '山羊窄徑在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'silverpine_snowstalker', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'avalanche_yeti', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[獸]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '獸痕雪坡的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '獸痕雪坡的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '獸痕雪坡殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_relic_pit: {
    id: 'silverpine_range_relic_pit',
    name: '古礦遺坑',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_relic_pit.png',
    imagePrompt: '古礦遺坑 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '古礦遺坑位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_beast_scrape', description: '回到獸痕雪坡' },
      { direction: 'south', targetRoomId: 'silverpine_range_crystal_scree', description: '晶石碎坡在南側' },
    ],
    monsters: [
      { monsterId: 'iceglass_golem', maxCount: 1, respawnSeconds: 320 },
      { monsterId: 'mica_cliff_lizard', maxCount: 2, respawnSeconds: 130 },
    ],
    mapSymbol: '[遺]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '古礦遺坑的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '古礦遺坑的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '古礦遺坑殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_snowline_gate: {
    id: 'silverpine_range_snowline_gate',
    name: '雪線木門',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_snowline_gate.png',
    imagePrompt: '雪線木門 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '雪線木門位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'south', targetRoomId: 'silverpine_range_entry_claim', description: '回到山脈入口界樁', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'silverpine_range_moonneedle_pines', description: '月針松林在東側' },
    ],
    monsters: [
      { monsterId: 'silverpine_snowstalker', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'silver_sap_treant', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '雪線木門的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '雪線木門的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '雪線木門殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_moonneedle_pines: {
    id: 'silverpine_range_moonneedle_pines',
    name: '月針松林',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_moonneedle_pines.png',
    imagePrompt: '月針松林 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '月針松林位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_snowline_gate', description: '回到雪線木門' },
      { direction: 'south', targetRoomId: 'silverpine_range_vein_path', description: '落回銀脈山徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'silverpine_range_mica_switchback', description: '雲母折道在東側' },
      { direction: 'north', targetRoomId: 'silverpine_range_windcut_bridge', description: '風切木橋在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'windcut_eagle', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'silverpine_snowstalker', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[松]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '月針松林的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '月針松林的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '月針松林殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_mica_switchback: {
    id: 'silverpine_range_mica_switchback',
    name: '雲母折道',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_mica_switchback.png',
    imagePrompt: '雲母折道 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '雲母折道位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_moonneedle_pines', description: '回到月針松林' },
      { direction: 'south', targetRoomId: 'silverpine_range_herb_shelf', description: '回到寒草岩層', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'silverpine_range_old_miner_camp', description: '舊礦工營在東側' },
    ],
    monsters: [
      { monsterId: 'mica_cliff_lizard', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'iceglass_golem', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[折]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '雲母折道的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '雲母折道的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '雲母折道殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_frost_herb_ledge: {
    id: 'silverpine_range_frost_herb_ledge',
    name: '霜草岩棚',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_frost_herb_ledge.png',
    imagePrompt: '霜草岩棚 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '霜草岩棚位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'south', targetRoomId: 'silverpine_range_water_pocket', description: '回到融雪水窪' },
      { direction: 'east', targetRoomId: 'silverpine_range_avalanche_bowl', description: '雪崩凹地在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'frost_herb_witch', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'silver_sap_treant', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[棚]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '霜草岩棚的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '霜草岩棚的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '霜草岩棚殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_goat_track: {
    id: 'silverpine_range_goat_track',
    name: '山羊窄徑',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_goat_track.png',
    imagePrompt: '山羊窄徑 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '山羊窄徑位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'south', targetRoomId: 'silverpine_range_beast_scrape', description: '回到獸痕雪坡', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'silverpine_range_eagle_spire',
        description: '東側山羊窄徑要貼著碎石壁橫移，穿過一段結冰岩脊才到鷹巢尖峰',
        edgeKind: 'distant_route',
        edgeNote: '山羊窄徑到鷹巢尖峰需要沿碎石壁、結冰岩脊與高處風口橫移，屬於銀松山脈長路徑。',
      },
      { direction: 'west', targetRoomId: 'silverpine_range_old_miner_camp', description: '舊礦工營在西側' },
    ],
    monsters: [
      { monsterId: 'avalanche_yeti', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'windcut_eagle', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[徑]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '山羊窄徑的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '山羊窄徑的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '山羊窄徑殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_crystal_scree: {
    id: 'silverpine_range_crystal_scree',
    name: '晶石碎坡',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_crystal_scree.png',
    imagePrompt: '晶石碎坡 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '晶石碎坡位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'north', targetRoomId: 'silverpine_range_relic_pit', description: '回到古礦遺坑' },
      { direction: 'west', targetRoomId: 'silverpine_range_goat_track', description: '山徑回到山羊窄徑' },
      { direction: 'south', targetRoomId: 'silverpine_range_eagle_spire', description: '南側晶石碎坡接往鷹巢尖峰' },
    ],
    monsters: [
      { monsterId: 'iceglass_golem', maxCount: 1, respawnSeconds: 320 },
      { monsterId: 'mica_cliff_lizard', maxCount: 2, respawnSeconds: 130 },
    ],
    mapSymbol: '[晶]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '晶石碎坡的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '晶石碎坡的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '晶石碎坡殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_windcut_bridge: {
    id: 'silverpine_range_windcut_bridge',
    name: '風切木橋',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_windcut_bridge.png',
    imagePrompt: '風切木橋 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '風切木橋位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'north', targetRoomId: 'silverpine_range_moonneedle_pines', description: '回到月針松林' },
      { direction: 'east', targetRoomId: 'silverpine_range_fill_n6_n11', description: '風削石階通往冰玻洞側裂縫' },
      { direction: 'south', targetRoomId: 'silverpine_range_silver_sap_grove', description: '銀脂松圃在南側' },
    ],
    monsters: [
      { monsterId: 'windcut_eagle', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'iceglass_golem', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '風切木橋的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '風切木橋的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '風切木橋殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_old_miner_camp: {
    id: 'silverpine_range_old_miner_camp',
    name: '舊礦工營',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_old_miner_camp.png',
    imagePrompt: '舊礦工營 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '舊礦工營位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'west', targetRoomId: 'silverpine_range_mica_switchback', description: '回到雲母折道' },
      { direction: 'east', targetRoomId: 'silverpine_range_goat_track', description: '山羊窄徑在東側' },
      { direction: 'north', targetRoomId: 'silverpine_range_water_pocket', description: '北側雪水路回到融雪水窪' },
      { direction: 'south', targetRoomId: 'silverpine_range_iceglass_cavern', description: '南側廢軌坡進入冰玻洞' },
    ],
    monsters: [
      { monsterId: 'mica_cliff_lizard', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'avalanche_yeti', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '舊礦工營的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '舊礦工營的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '舊礦工營殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_iceglass_cavern: {
    id: 'silverpine_range_iceglass_cavern',
    name: '冰玻洞',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_iceglass_cavern.png',
    imagePrompt: '冰玻洞 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '冰玻洞位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'north', targetRoomId: 'silverpine_range_old_miner_camp', description: '北側廢軌坡回到舊礦工營' },
      { direction: 'west', targetRoomId: 'silverpine_range_fill_n6_n11', description: '西側側裂縫通往風切木橋' },
      { direction: 'east', targetRoomId: 'silverpine_range_avalanche_bowl', description: '東側滑冰斜廊通往雪崩凹地' },
    ],
    monsters: [
      { monsterId: 'iceglass_golem', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'starwatch_frost_giant', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[洞]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '冰玻洞的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '冰玻洞的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '冰玻洞殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_eagle_spire: {
    id: 'silverpine_range_eagle_spire',
    name: '鷹巢尖峰',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_eagle_spire.png',
    imagePrompt: '鷹巢尖峰 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '鷹巢尖峰位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'silverpine_range_goat_track',
        description: '西側回山羊窄徑要離開尖峰鳥巢，沿結冰岩脊貼著碎石壁橫移下撤',
        edgeKind: 'distant_route',
        edgeNote: '鷹巢尖峰回山羊窄徑需要沿結冰岩脊、高處風口與碎石壁撤回，屬於銀松山脈長路徑。',
      },
      { direction: 'north', targetRoomId: 'silverpine_range_crystal_scree', description: '北側晶石碎坡回到採集線' },
      { direction: 'south', targetRoomId: 'silverpine_range_starwatch_ridge', description: '南側雪脊通往觀星脊' },
    ],
    monsters: [
      { monsterId: 'windcut_eagle', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'starwatch_frost_giant', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[鷹]',
    mapX: 5,
    mapY: 2,
    guardianHints: {
      creature: '鷹巢尖峰的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '鷹巢尖峰的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '鷹巢尖峰殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_silver_sap_grove: {
    id: 'silverpine_range_silver_sap_grove',
    name: '銀脂松圃',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_silver_sap_grove.png',
    imagePrompt: '銀脂松圃 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '銀脂松圃位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'north', targetRoomId: 'silverpine_range_windcut_bridge', description: '回到風切木橋' },
      { direction: 'east', targetRoomId: 'silverpine_range_fill_n6_n10', description: '東側銀脂雪道通往觀星脊' },
    ],
    monsters: [
      { monsterId: 'silver_sap_treant', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'frost_herb_witch', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[脂]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '銀脂松圃的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '銀脂松圃的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '銀脂松圃殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_avalanche_bowl: {
    id: 'silverpine_range_avalanche_bowl',
    name: '雪崩凹地',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_avalanche_bowl.png',
    imagePrompt: '雪崩凹地 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '雪崩凹地位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。南側霜草岩棚被新雪崩掩住，只能從霜草岩棚東側踏入凹地。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'silverpine_range_iceglass_cavern',
        description: '西側回冰玻洞要沿雪崩凹地邊緣上行，穿過滑冰斜廊、碎冰滑坡與冰霧裂口',
        edgeKind: 'distant_route',
        edgeNote: '雪崩凹地回冰玻洞需要沿雪坡邊緣、滑冰斜廊與冰霧裂口上行，屬於銀松山脈長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'silverpine_range_starwatch_ridge',
        description: '東側要跨過雪崩凹地的硬雪脊，繞過鬆雪坑與星標石才上到觀星脊',
        edgeKind: 'distant_route',
        edgeNote: '雪崩凹地到觀星脊需要跨過硬雪脊、鬆雪坑與星標石，屬於銀松山脈長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'avalanche_yeti', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'starwatch_frost_giant', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[崩]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '雪崩凹地的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '雪崩凹地的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '雪崩凹地殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_starwatch_ridge: {
    id: 'silverpine_range_starwatch_ridge',
    name: '觀星脊',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_starwatch_ridge.png',
    imagePrompt: '觀星脊 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '觀星脊位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'silverpine_range_eagle_spire',
        description: '北側雪脊回到鷹巢尖峰',
      },
      { direction: 'west', targetRoomId: 'silverpine_range_fill_n4_n10', description: '西側銀脂雪道回到松圃' },
      { direction: 'south', targetRoomId: 'silverpine_range_high_mine_core', description: '高山礦核在南側' },
    ],
    monsters: [
      { monsterId: 'starwatch_frost_giant', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'windcut_eagle', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[星]',
    mapX: 5,
    mapY: 3,
    guardianHints: {
      creature: '觀星脊的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '觀星脊的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '觀星脊殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

silverpine_range_high_mine_core: {
    id: 'silverpine_range_high_mine_core',
    name: '高山礦核',
    zone: 'silverpine_range' as RoomDef['zone'],
    image: 'silverpine_range_high_mine_core.png',
    imagePrompt: '高山礦核 in silverpine_range, silver pine mountain range with moonlit pines, mica cliffs, snow paths, rare ore veins, frost herbs, old miner camp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '高山礦核位於銀松山脈的高寒資源線上，銀葉松、雲母岩層、融雪水痕、礦車殘軌與夜裡反光的星霜共同標出崎嶇採集路線。這裡是高階採礦與藥草區，玩家可以 inspect 雪面足跡、礦脈裂縫、松脂結晶和風向旗來判斷路況，也能 search 石棚、舊礦工營、冰玻洞與觀星脊尋找稀有礦石和寒地草藥。若隊伍忽略雪崩聲、鷹巢陰影與冰霜元素凝結，雪狼、霜巨人、晶化守衛與冰龍幼崽會封鎖窄徑；若穩定維持繩標、火把與採集負重，則能抵達高山礦核並帶回銀松礦樣、霜草束、冰晶標本與完整巡山記錄，並確認回程繩橋仍可通行。',
    exits: [
      { direction: 'north', targetRoomId: 'silverpine_range_starwatch_ridge', description: '回到觀星脊' },
    ],
    monsters: [
      { monsterId: 'high_mine_crystal_wyrm', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'starwatch_frost_giant', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'iceglass_golem', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[核]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '高山礦核的雪面若出現反光裂痕，附近巡邏獸群或冰霜元素可能正在靠近。',
      treasure: '高山礦核的礦脈、松脂或冰縫旁可能藏著銀松山脈高階採集材料。',
      spirit: '高山礦核殘留礦工、獵人與巡山者在寒夜裡留下的路標記憶。',
    },
  },

// ─── 鹽風灘擴充 (Lv 14-24) ─────────────────────────────

  saltwind_flats_tide_gate: {
    id: 'saltwind_flats_tide_gate',
    name: '退潮入口樁',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_tide_gate.png',
    imagePrompt: '退潮入口樁 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain coast, clear lantern light',
    description:
      '退潮入口樁位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'east', targetRoomId: 'saltwind_flats_white_ripple', description: '白波鹽面在東側' },
      { direction: 'north', targetRoomId: 'saltwind_flats_mist_marker', description: '霧中路標在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'saltflat_crystal_scuttler', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'saltgrass_reedstalker', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '退潮入口樁的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '退潮入口樁的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '退潮入口樁殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_white_ripple: {
    id: 'saltwind_flats_white_ripple',
    name: '白波鹽面',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_white_ripple.png',
    imagePrompt: '白波鹽面 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '白波鹽面位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'west', targetRoomId: 'saltwind_flats_tide_gate', description: '回到退潮入口樁' },
      { direction: 'east', targetRoomId: 'saltwind_flats_brine_pool', description: '鹽水潮池在東側' },
      { direction: 'north', targetRoomId: 'saltwind_flats_saltgrass_strip', description: '鹽草帶在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'saltflat_crystal_scuttler', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'saltgrass_reedstalker', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[鹽]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '白波鹽面的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '白波鹽面的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '白波鹽面殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_brine_pool: {
    id: 'saltwind_flats_brine_pool',
    name: '鹽水潮池',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_brine_pool.png',
    imagePrompt: '鹽水潮池 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '鹽水潮池位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'west', targetRoomId: 'saltwind_flats_white_ripple', description: '回到白波鹽面' },
      {
        direction: 'east',
        targetRoomId: 'saltwind_flats_driftwood_post',
        description: '東側要穿過鹽草帶外緣與潮後白鹽裂面，繞過幾根倒伏漂木才抵達哨柱',
        edgeKind: 'distant_route',
        edgeNote: '鹽草帶到漂木哨柱需要穿過鹽草外緣、白鹽裂面與倒伏漂木，屬於鹽風灘長路徑。',
      },
      { direction: 'south', targetRoomId: 'saltwind_flats_crab_march', description: '蟹行淺灘在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'brinepool_crab_guard', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'fishbone_murkling', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[池]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '鹽水潮池的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '鹽水潮池的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '鹽水潮池殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_saltgrass_strip: {
    id: 'saltwind_flats_saltgrass_strip',
    name: '鹽草帶',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_saltgrass_strip.png',
    imagePrompt: '鹽草帶 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '鹽草帶位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'south', targetRoomId: 'saltwind_flats_white_ripple', description: '回到白波鹽面', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'saltwind_flats_driftwood_post', description: '漂木哨柱在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'saltwind_flats_pirate_blind', description: '海盜隱棚在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'saltgrass_reedstalker', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'pirate_mist_scout', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[草]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '鹽草帶的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '鹽草帶的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '鹽草帶殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_driftwood_post: {
    id: 'saltwind_flats_driftwood_post',
    name: '漂木哨柱',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_driftwood_post.png',
    imagePrompt: '漂木哨柱 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '漂木哨柱位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'saltwind_flats_brine_pool',
        description: '西側回鹽水潮池要離開漂木哨柱，穿過倒伏漂木、白鹽裂面與潮後水線',
        edgeKind: 'distant_route',
        edgeNote: '漂木哨柱回鹽水潮池需要穿過倒伏漂木、白鹽裂面與潮後水線，屬於鹽風灘長路徑。',
      },
      { direction: 'north', targetRoomId: 'saltwind_flats_bone_pier', description: '魚骨棧橋在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'saltwind_flats_shallow_cut', description: '淺水裂道在東側' },
    ],
    monsters: [
      { monsterId: 'pirate_mist_scout', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'saltgrass_reedstalker', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[哨]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '漂木哨柱的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '漂木哨柱的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '漂木哨柱殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_crab_march: {
    id: 'saltwind_flats_crab_march',
    name: '蟹行淺灘',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_crab_march.png',
    imagePrompt: '蟹行淺灘 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '蟹行淺灘位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'north', targetRoomId: 'saltwind_flats_brine_pool', description: '回到鹽水潮池', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'saltwind_flats_blue_mud_shelf', description: '藍泥層在東側' },
    ],
    monsters: [
      { monsterId: 'brinepool_crab_guard', maxCount: 3, respawnSeconds: 100 },
      { monsterId: 'blue_mud_saltback', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[蟹]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '蟹行淺灘的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '蟹行淺灘的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '蟹行淺灘殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_mist_marker: {
    id: 'saltwind_flats_mist_marker',
    name: '霧中路標',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_mist_marker.png',
    imagePrompt: '霧中路標 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '霧中路標位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'south', targetRoomId: 'saltwind_flats_tide_gate', description: '回到退潮入口樁', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'saltwind_flats_saltgrass_strip', description: '鹽草帶在東側' },
      { direction: 'north', targetRoomId: 'saltwind_flats_glass_salt_field', description: '玻璃鹽田在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'saltgrass_reedstalker', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'glasssalt_elemental', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[霧]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '霧中路標的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '霧中路標的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '霧中路標殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_bone_pier: {
    id: 'saltwind_flats_bone_pier',
    name: '魚骨棧橋',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_bone_pier.png',
    imagePrompt: '魚骨棧橋 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '魚骨棧橋位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'south', targetRoomId: 'saltwind_flats_driftwood_post', description: '回到漂木哨柱', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'saltwind_flats_pirate_blind',
        description: '西側要沿魚骨棧橋下方濕鹽樁繞行，穿過低霧暗記才找到海盜隱棚',
        edgeKind: 'distant_route',
        edgeNote: '魚骨棧橋到海盜隱棚需要沿濕鹽樁與低霧暗記繞行，屬於鹽風灘長路徑。',
      },
      { direction: 'east', targetRoomId: 'saltwind_flats_fisher_cache', description: '漁夫藏點在東側' },
    ],
    monsters: [
      { monsterId: 'fishbone_murkling', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'pirate_mist_scout', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[骨]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '魚骨棧橋的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '魚骨棧橋的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '魚骨棧橋殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_pirate_blind: {
    id: 'saltwind_flats_pirate_blind',
    name: '海盜隱棚',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_pirate_blind.png',
    imagePrompt: '海盜隱棚 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain coast, clear lantern light',
    description:
      '海盜隱棚位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。西側鹽草帶與北側玻璃鹽田都被潮霧遮成單向入口，必須從鹽草帶或玻璃鹽田進入隱棚。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'saltwind_flats_bone_pier',
        description: '東側要離開海盜隱棚草網，沿低霧中的濕鹽樁繞過暗記後走到魚骨棧橋側面',
        edgeKind: 'distant_route',
        edgeNote: '海盜隱棚到魚骨棧橋需要穿過草網、低霧與濕鹽樁，屬於鹽風灘長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'pirate_mist_scout', maxCount: 3, respawnSeconds: 90 },
      { monsterId: 'fishbone_murkling', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[棚]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '海盜隱棚的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '海盜隱棚的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '海盜隱棚殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_glass_salt_field: {
    id: 'saltwind_flats_glass_salt_field',
    name: '玻璃鹽田',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_glass_salt_field.png',
    imagePrompt: '玻璃鹽田 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '玻璃鹽田位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'south', targetRoomId: 'saltwind_flats_mist_marker', description: '回到霧中路標', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'saltwind_flats_pirate_blind', description: '海盜隱棚在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'saltwind_flats_salt_crystal_nest', description: '鹽晶巢在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glasssalt_elemental', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'saltflat_crystal_scuttler', maxCount: 3, respawnSeconds: 70 },
    ],
    mapSymbol: '[晶]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '玻璃鹽田的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '玻璃鹽田的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '玻璃鹽田殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_shallow_cut: {
    id: 'saltwind_flats_shallow_cut',
    name: '淺水裂道',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_shallow_cut.png',
    imagePrompt: '淺水裂道 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '淺水裂道位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'west', targetRoomId: 'saltwind_flats_driftwood_post', description: '回到漂木哨柱' },
      { direction: 'east', targetRoomId: 'saltwind_flats_sea_serpent_track', description: '海蛇痕在東側' },
      {
        direction: 'south',
        targetRoomId: 'saltwind_flats_wrecked_skiff',
        description: '南側要沿淺水裂道滑過藍泥水線與鹽殼碎坡，才抵達散滿木板的破舟灘',
        edgeKind: 'distant_route',
        edgeNote: '淺水裂道到破舟灘需要沿藍泥水線、鹽殼碎坡與破舟木板下行，屬於鹽風灘長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'lowtide_serpent', maxCount: 1, respawnSeconds: 280 },
      { monsterId: 'fishbone_murkling', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[裂]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '淺水裂道的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '淺水裂道的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '淺水裂道殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_fisher_cache: {
    id: 'saltwind_flats_fisher_cache',
    name: '漁夫藏點',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_fisher_cache.png',
    imagePrompt: '漁夫藏點 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain coast, clear lantern light',
    description:
      '漁夫藏點位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'west', targetRoomId: 'saltwind_flats_bone_pier', description: '回到魚骨棧橋' },
      {
        direction: 'east',
        targetRoomId: 'saltwind_flats_lowtide_causeway',
        description: '東側要越過漁夫藏點外的鹽殼箱、乾網繩與退潮碎石，才接上退潮石道',
        edgeKind: 'distant_route',
        edgeNote: '漁夫藏點到退潮石道需要穿過鹽殼箱、乾網繩與退潮碎石，屬於鹽風灘長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'pirate_mist_scout', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'fishbone_murkling', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[藏]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '漁夫藏點的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '漁夫藏點的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '漁夫藏點殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },
};
