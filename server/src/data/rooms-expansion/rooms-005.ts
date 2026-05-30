import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_005: Record<string, RoomDef> = {
whispering_valley_cold_spring: {
    id: 'whispering_valley_cold_spring',
    name: '冷泉',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_cold_spring.png',
    imagePrompt: '冷泉 in whispering_valley, clear cold spring steaming lightly, blue stones, mossy bridge path and healing herbs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain bridge, clear lantern light',
    description:
      '苔石小橋東側冒出一眼清冷泉水，泉面泛著淡藍光，周圍石頭比溪谷其他地方更冷。泉邊長著冰蕨幼苗和細小白花，水中偶爾有半透明史萊姆滑過。這裡是治療與資源節點，玩家可採集冷泉水或尋找冰屬性材料，但泉水過冷會讓行動變慢。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_mossy_footbridge', description: '回到苔石小橋' },
      {
        direction: 'north',
        targetRoomId: 'whispering_valley_willow_camp',
        description: '沿泉霧與柳根小徑繞行一段後才會抵達柳樹營地，營火灰燼可作為方向線索',
        edgeKind: 'distant_route',
        edgeNote: '冷泉北側需沿泉霧與柳根小徑繞行至營地，路線不是平面相鄰格。',
      },
      { direction: 'east', targetRoomId: 'whispering_valley_spider_grotto', description: '岩縫通向蜘蛛洞' },
    ],
    monsters: [
      { monsterId: 'clearwater_slime', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'ice_fern_weaver', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[泉]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '冷泉史萊姆顏色更淡，會貼著水面移動。',
      treasure: '泉底藍石可作為冰屬性材料。',
      spirit: '冷泉是溪谷低語最清晰的地方，像水脈在說話。',
    },
  },

whispering_valley_spider_grotto: {
    id: 'whispering_valley_spider_grotto',
    name: '蛛網岩洞',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_spider_grotto.png',
    imagePrompt: '蛛網岩洞 in whispering_valley, shallow grotto covered in webs, cold droplets, bones, spider silhouettes and blue cave light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain cave, clear lantern light',
    description:
      '冷泉東側的岩縫通向一座淺洞，洞頂滲水滴落在蛛網上，讓整片白網像結霜一樣閃亮。洞內散著小動物骨骸和被拖入的巡林布片，顯示蜘蛛在此築巢已有一段時間。這裡是精英感較強的戰鬥點，玩家若想救出營地線索，必須清理洞口與深處蛛群。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_cold_spring', description: '岩縫回到冷泉' },
      { direction: 'south', targetRoomId: 'whispering_valley_willow_camp', description: '南側拖痕穿過灌木回到柳樹營地' },
      {
        direction: 'east',
        targetRoomId: 'whispering_valley_mist_pool',
        description: '東側潮濕坡道先繞過塌岸與蛛絲，最後落到霧潭邊緣，滑落聲可能引來潛伏怪物',
        edgeKind: 'distant_route',
        edgeNote: '蛛網岩洞東側坡道濕滑且曲折，會先繞過塌岸再落到霧潭邊。',
      },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'ice_fern_weaver', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'clearwater_slime', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[蛛]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '巨蛛會從水滴聲最大的地方落下。',
      treasure: '蛛網深處黏著一枚巡林徽章。',
      spirit: '蛛洞連到舊神龕，像是溪谷防線被自然生物佔據。',
    },
  },

whispering_valley_fallen_log: {
    id: 'whispering_valley_fallen_log',
    name: '倒木淺橋',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_fallen_log.png',
    imagePrompt: '倒木淺橋 in whispering_valley, fallen tree across creek, moss, mushrooms, bird tracks and rushing water below, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '一棵老樹倒在釣魚灣上游，樹幹橫跨溪水，形成勉強可走的天然淺橋。樹皮長滿蘑菇和青苔，枝杈間卡著羽毛、魚骨和幾段破線。通過倒木可到達霧潭或回音岩群，但腳下濕滑，戰鬥時很容易被史萊姆逼退到水裡。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'north', targetRoomId: 'whispering_valley_herb_slope', description: '北側採集坡面回到草藥斜坡' },
      { direction: 'south', targetRoomId: 'whispering_valley_ice_fern_patch', description: '南側冷霧坡面通往冰蕨叢' },
      { direction: 'west', targetRoomId: 'whispering_valley_echo_rocks', description: '西側倒木淺橋沿濕滑樹幹橫移，穿過迴聲水灣與碎岩淺灘抵達回音岩群', edgeKind: 'distant_route', edgeNote: '倒木淺橋到回音岩群需沿濕滑樹幹與迴聲水灣橫移，實際路程長於相鄰一格。' },
      {
        direction: 'east',
        targetRoomId: 'whispering_valley_mist_pool',
        description: '跨過濕滑倒木與塌陷潭岸後才會抵達霧潭邊，腳下落差讓這段路不能視為鄰格',
        edgeKind: 'distant_route',
        edgeNote: '倒木東端要跨過濕滑樹幹與塌陷潭岸，實際路程長於相鄰一格。',
      },
    ],
    monsters: [
      { monsterId: 'clearwater_slime', maxCount: 1, respawnSeconds: 35 },
      { monsterId: 'echo_wisp', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[木]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '黑鴉會啄落樹皮讓玩家失足。',
      treasure: '倒木裂縫裡卡著一只舊魚線盒。',
      spirit: '倒木讓溪谷兩岸重新連通，像自然形成的臨時橋梁。',
    },
  },

whispering_valley_mist_pool: {
    id: 'whispering_valley_mist_pool',
    name: '霧潭',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_mist_pool.png',
    imagePrompt: '霧潭 in whispering_valley, round misty pool with dark water, reeds, pale fish shadows and spider cave slope, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain water, clear lantern light',
    description:
      '溪水在倒木與蛛洞之間積成一口圓潭，潭面常年飄著薄霧，看不清水底。西側倒木回到上游，北面濕坡通向蛛網岩洞；南側可聽見釣魚灣水聲，但潭岸塌陷後無法直接退回彎灣。霧中偶爾浮現魚影和像手指般的水草，岸邊石頭濕滑而寒冷。這裡可作為釣魚、採水與遭遇點；玩家若在霧中停留太久，會聽見不屬於同伴的低語引導自己靠近深水。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'whispering_valley_fallen_log',
        description: '沿塌岸攀回倒木東端，潮濕地形讓路程比相鄰格更長，霧氣會遮住回頭路',
        edgeKind: 'distant_route',
        edgeNote: '霧潭西側需沿塌岸攀回倒木東端，潮濕地形讓路程長於相鄰一格。',
      },
      {
        direction: 'north',
        targetRoomId: 'whispering_valley_spider_grotto',
        description: '濕坡繞進蛛網遮蔽的岩縫，上坡一段後才到岩洞，洞口前能看見密集蛛絲',
        edgeKind: 'distant_route',
        edgeNote: '霧潭北側濕坡會繞進蛛網遮蔽的岩縫，抵達洞口前有一段曲折上坡。',
      },
    ],
    monsters: [
      { monsterId: 'clearwater_slime', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'echo_wisp', maxCount: 1, respawnSeconds: 50 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[潭]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '霧最厚時，史萊姆會從水面滑向岸邊。',
      treasure: '潭底有銀色魚鱗與一塊冷晶。',
      spirit: '霧潭低語會模仿熟人聲音，不能完全相信。',
    },
  },

whispering_valley_old_shrine: {
    id: 'whispering_valley_old_shrine',
    name: '溪畔舊神龕',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_old_shrine.png',
    imagePrompt: '溪畔舊神龕 in whispering_valley, old creekside shrine with mossy stones, ribbons, candles and whispering water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain shrine, clear lantern light',
    description:
      '柳樹營地北方的溪畔藏著一座小神龕，石面覆滿青苔，幾條褪色祈願布被系在枝上。神龕供奉的不是明確神像，而是一塊被水磨圓的白石，石上刻著代表水聲、風聲與回音的三枚符號。這裡是溪谷任務線的重要地標，玩家可獻上冷泉水或找回巡林徽章，讓神龕重新回應溪谷低語。神龕後方的岩壁有許多被蛛絲遮住的舊刻痕，記錄巡林人曾用聲音安撫溪谷水脈；東側蛛洞裂縫只夠細小生物穿過，玩家需從冷泉岩縫進入蛛網岩洞。若玩家先清理蛛網岩洞，再回到此處調查，白石會短暫發光並指出隱瀑石室方向。祈願布末端還綁著幾枚小鈴，風起時會敲出與低語裂縫相同的節奏。',
    exits: [
      { direction: 'north', targetRoomId: 'whispering_valley_willow_camp', description: '北側柳樹小徑回到營地' },
      {
        direction: 'east',
        targetRoomId: 'whispering_valley_waterfall_base',
        description: '東側溪畔刻痕與水霧往上游前進，瀑布聲會逐漸變大，石龕鈴聲會在背後變弱',
        edgeKind: 'distant_route',
        edgeNote: '舊神龕東側需沿溪畔刻痕與水霧繞到瀑布底部，並非直接相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'ice_fern_weaver', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'echo_wisp', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[龕]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '蛛絲覆住神龕符號時，附近蜘蛛會更具攻擊性。',
      treasure: '白石底座下藏著巡林人留下的祈願牌。',
      spirit: '神龕似乎不是崇拜神，而是崇拜溪谷本身的聲音。',
    },
  },

whispering_valley_ice_fern_patch: {
    id: 'whispering_valley_ice_fern_patch',
    name: '冰蕨叢',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_ice_fern_patch.png',
    imagePrompt: '冰蕨叢 in whispering_valley, patch of pale blue ferns frosted by cold spring mist, dew crystals and spider silk, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '草藥坡北端突然變冷，地面長出一片淡藍冰蕨，每片葉緣都凝著霜珠。冰蕨會隨聲音微微顫動，把腳步聲傳向回音岩群和瀑布方向。這裡是稀有採集點，玩家可取得冰屬性藥草，也要小心藏在葉背的蜘蛛和被寒氣吸引的史萊姆。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'north', targetRoomId: 'whispering_valley_fallen_log', description: '北側冷霧坡面回到倒木淺橋' },
      {
        direction: 'west',
        targetRoomId: 'whispering_valley_echo_rocks',
        description: '冷聲穿過折音岩縫回到回音岩群，玩家需繞行石縫並避開會放大腳步聲的岩面',
        edgeKind: 'distant_route',
        edgeNote: '冰蕨叢西側聲音會穿過折音岩縫回到岩群，玩家實際需繞行石縫。',
      },
      { direction: 'east', targetRoomId: 'whispering_valley_hidden_cascade', description: '東側霜霧指向隱瀑', edgeKind: 'distant_route', edgeNote: '冰蕨叢東側需穿過霜霧與濕岩，才會抵達隱瀑。' },
    ],
    monsters: [
      { monsterId: 'ice_fern_weaver', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'clearwater_slime', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[蕨]',
    mapX: 1,
    mapY: 4,
    guardianHints: {
      creature: '冰蕨葉背有蛛絲時通常代表蜘蛛就在附近。',
      treasure: '霜珠最大的冰蕨可採得高品質藥材。',
      spirit: '冰蕨把聲音傳得很遠，像溪谷的聽覺器官。',
    },
  },

whispering_valley_wolf_den: {
    id: 'whispering_valley_wolf_den',
    name: '溪狼巢',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_wolf_den.png',
    imagePrompt: '溪狼巢 in whispering_valley, shallow wolf den under roots beside creek, bones, wet fur tracks and dim green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '瀑布西側的樹根下有一個低矮狼巢，入口堆著魚骨、黑鴉羽毛和濕泥腳印。溪谷野狼比平原狼更安靜，牠們會利用水聲掩蓋接近的腳步。北側狼徑氣味指向石堰，但巢後根洞塌陷，玩家需從巡林哨站小徑抵達石堰。這裡是低等精英戰鬥房，玩家若要安全前往瀑布或隱瀑，最好先處理狼巢，否則牠們會沿溪追擊。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'whispering_valley_waterfall_base',
        description: '沿根洞與水霧小徑繞行後，水聲會引到瀑布底部，狼爪印會標出危險彎道',
        edgeKind: 'distant_route',
        edgeNote: '溪狼巢東側要沿根洞與水霧小徑繞到瀑布底部，距離長於相鄰一格。',
      },
      {
        direction: 'south',
        targetRoomId: 'whispering_valley_echo_rocks',
        description: '岩間小路避開根洞與崩石後，曲折回到回音岩群，碎石坡會讓退路變慢',
        edgeKind: 'distant_route',
        edgeNote: '溪狼巢南側岩間小路需避開巢穴根洞與崩石，回到岩群前會繞行一段。',
      },
    ],
    monsters: [
      { monsterId: 'creek_wolf_stalker', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[狼]',
    mapX: -1,
    mapY: 4,
    guardianHints: {
      creature: '溪狼會在瀑布聲最大時衝出。',
      treasure: '魚骨堆下有巡林人丟失的短刀。',
      spirit: '狼巢像守住上游水路的自然關卡。',
    },
  },

whispering_valley_waterfall_base: {
    id: 'whispering_valley_waterfall_base',
    name: '瀑布底部',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_waterfall_base.png',
    imagePrompt: '瀑布底部 in whispering_valley, waterfall base with spray, slick rocks, rainbow mist and roaring hidden whispers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '溪谷上游的瀑布從灰白岩壁落下，水霧把周圍石頭和樹根都染成濕亮銀色。瀑聲很大，卻能在某些角度聽見清楚低語，像有人站在水幕後說話。這裡是溪谷中段地標，連接狼巢、舊神龕方向、隱瀑與石堰；舊神龕可在東側水霧中看見，但濕石崩塌後不能直接橫切，需從下游柳樹營地繞行。玩家可搜索水幕、採集濕苔或尋找隱藏通路。瀑布落點周圍的石頭被水流磨出三圈同心紋，與低語裂縫符號相同。若調整石堰水量，水幕會短暫分開，露出通往隱瀑石室的安全落腳點。瀑布背後還有巡林人刻下的高度標記，顯示近年水位忽高忽低，溪谷低語也隨之變得混亂。霧中可見藍白光點上下漂移。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'whispering_valley_echo_rocks',
        description: '沿下游濕石與回音水道前進一段後才回到回音岩群，瀑聲會逐步被岩群回音取代',
        edgeKind: 'distant_route',
        edgeNote: '瀑布底部南側需沿下游濕石與回音水道回到岩群，實際路程較長。',
      },
      {
        direction: 'west',
        targetRoomId: 'whispering_valley_wolf_den',
        description: '水霧後藏著狼巢小徑，需繞過樹根與濕滑岩面，魚骨與爪痕會提示接近巢穴',
        edgeKind: 'distant_route',
        edgeNote: '瀑布底部西側狼徑藏在水霧與樹根後方，通往巢穴需繞過濕滑岩面。',
      },
      {
        direction: 'north',
        targetRoomId: 'whispering_valley_hidden_cascade',
        description: '穿過瀑布水幕與內側落腳點後會進入隱瀑石室，水壓讓通行像一段短探險',
        edgeKind: 'distant_route',
        edgeNote: '瀑布底部北側需穿過水幕與內側落腳點，才會抵達隱瀑石室。',
      },
    ],
    monsters: [
      { monsterId: 'clearwater_slime', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'echo_wisp', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[瀑]',
    mapX: 0,
    mapY: 4,
    guardianHints: {
      creature: '史萊姆會借水霧隱藏透明身體。',
      treasure: '水幕後有被沖刷露出的藍白石片。',
      spirit: '瀑布是溪谷低語最強烈的地點之一。',
    },
  },

whispering_valley_hidden_cascade: {
    id: 'whispering_valley_hidden_cascade',
    name: '隱瀑石室',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_hidden_cascade.png',
    imagePrompt: '隱瀑石室 in whispering_valley, hidden chamber behind waterfall, glowing wet stone, secret cascade, fern roots and blue mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain chamber, clear lantern light',
    description:
      '穿過瀑布水幕後，岩壁內竟藏著一間狹長石室，第二道更細的隱瀑沿著裂縫落入深潭。石室牆面佈滿水蝕符號，形狀與舊神龕白石上的符文一致。東側冷霧連到冰蕨叢，但裂縫被水流沖蝕得過窄，只能從冰蕨叢方向找到入口。這裡是隱藏探索房，玩家能揭開低語來源、找到稀有水晶，也會遭遇從蛛洞和冷泉追來的怪物。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'whispering_valley_waterfall_base',
        description: '穿越內外兩層水幕後才能退回外側瀑布底部，落水聲會遮住出口位置',
        edgeKind: 'distant_route',
        edgeNote: '隱瀑石室南側需穿越內外兩層水幕，退回瀑布底部不是相鄰平面移動。',
      },
      {
        direction: 'north',
        targetRoomId: 'whispering_valley_whispering_rift',
        description: '沿水蝕符號深入狹縫暗道，最後抵達低語裂縫，藍白光絲會作為前進路標',
        edgeKind: 'distant_route',
        edgeNote: '隱瀑石室北側需沿水蝕符號深入狹縫，抵達低語裂縫前有一段暗道。',
      },
    ],
    monsters: [
      { monsterId: 'echo_wisp', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'ice_fern_weaver', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[隱]',
    mapX: 1,
    mapY: 5,
    guardianHints: {
      creature: '水聲忽然變小時，怪物通常正穿過水幕。',
      treasure: '隱瀑深潭底部有低語水晶。',
      spirit: '水蝕符號像是溪谷本身留下的語言。',
    },
  },

whispering_valley_ranger_post: {
    id: 'whispering_valley_ranger_post',
    name: '巡林哨站',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_ranger_post.png',
    imagePrompt: '巡林哨站 in whispering_valley, small wooden ranger post, map board, hanging lantern, valley trail signs and cool shade, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain valley, clear lantern light',
    description:
      '谷口西側的木棚是廢棄巡林哨站，牆上釘著溪谷路線圖、怪物出沒記錄和幾張被雨水暈開的告示。桌面還留著半瓶驅蟲油與一盞可重新點燃的舊燈。這裡是任務與交通提示房，玩家可取得溪谷路線、蛛洞警告或失蹤巡林人的初始線索。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'east', targetRoomId: 'whispering_valley_entrance', description: '木棚外就是溪谷入口' },
      { direction: 'south', targetRoomId: 'whispering_valley_fill_n7_6', description: '南側巡林小徑通往谷底通道' },
    ],
    monsters: [
      { monsterId: 'reedbank_lurker', maxCount: 1, respawnSeconds: 40 },
      { monsterId: 'echo_wisp', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[哨]',
    mapX: -1,
    mapY: 0,
    guardianHints: {
      creature: '黑鴉會啄走告示上的亮色圖釘。',
      treasure: '路線圖角落標出一條未公開的石堰小徑。',
      spirit: '哨站記錄低語變強的日期，與巡林人失蹤時間吻合。',
    },
  },

whispering_valley_stone_weir: {
    id: 'whispering_valley_stone_weir',
    name: '石堰',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_stone_weir.png',
    imagePrompt: '石堰 in whispering_valley, old stone weir across stream, shallow steps, water control stones and wolf tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '巡林小徑北端有一座矮石堰，把溪水分成幾條淺流，石塊上刻著水位線和修補記號。若移動幾塊鬆動石頭，就能改變下游冷泉與釣魚灣的水量。這裡是事件與捷徑點，玩家可修復石堰、追蹤狼群，或由西側小路快速切到瀑布附近。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'north', targetRoomId: 'whispering_valley_fill_n7_7', description: '北側蘆葦路回到谷底通道方向' },
      {
        direction: 'east',
        targetRoomId: 'whispering_valley_wolf_den',
        description: '狼徑沿淺流與根洞繞行一段，最後通向溪狼巢，途中濕泥會留下明顯爪印',
        edgeKind: 'distant_route',
        edgeNote: '石堰東側狼徑需沿淺流與根洞繞行，抵達溪狼巢不是相鄰一格。',
      },
      {
        direction: 'west',
        targetRoomId: 'whispering_valley_whispering_rift',
        description: '西側循水流聲與水位線穿過裂石暗道，才會抵達低語裂縫，石堰符號可確認路線',
        edgeKind: 'distant_route',
        edgeNote: '石堰西側需循水位線與裂石暗道前進，才會抵達低語裂縫。',
      },
    ],
    monsters: [
      { monsterId: 'creek_wolf_stalker', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'clearwater_slime', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[堰]',
    mapX: -1,
    mapY: 3,
    guardianHints: {
      creature: '狼群會沿石堰兩端夾擊。',
      treasure: '鬆動石塊下藏著巡林人的備用鑰匙。',
      spirit: '石堰控制溪谷水聲，修復後低語會變得清晰。',
    },
  },

whispering_valley_whispering_rift: {
    id: 'whispering_valley_whispering_rift',
    name: '低語裂縫',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_whispering_rift.png',
    imagePrompt: '低語裂縫 in whispering_valley, narrow glowing rift in wet valley rock, water threads, echo symbols, mist and gathered beasts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain valley, clear lantern light',
    description:
      '隱瀑石室與石堰水聲最終都指向這道狹窄岩縫，南側水蝕小徑可退回石室，西面水聲可聽見石堰但岩縫落差過大，需從巡林哨站路線抵達石堰。裂縫裡不是黑暗，而是細細流動的藍白光絲，所有溪谷低語都從這裡被水聲帶出。岩壁符號會回應舊神龕白石、巡林哨站記錄和石堰水位，像在要求玩家完成一套修復溪谷聲音的儀式。這裡是低語溪谷的大型事件鉤子與 Boss 前哨，怪物會被過強的回音吸引而來。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'whispering_valley_hidden_cascade',
        description: '沿狹窄水蝕小徑退回隱瀑石室，屬於長暗道移動，水聲會逐漸變成瀑布回音',
        edgeKind: 'distant_route',
        edgeNote: '低語裂縫南側需沿狹窄水蝕小徑退回石室，屬於長暗道而非相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'whispering_rift_voice', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'echo_wisp', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'creek_wolf_stalker', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[裂]',
    mapX: 0,
    mapY: 6,
    guardianHints: {
      creature: '回音越尖銳，代表更多怪物正被裂縫吸引。',
      treasure: '藍白光絲凝成的低語水晶可作為任務核心。',
      spirit: '低語裂縫不像深淵裂縫，它更像溪谷自身的喉嚨。',
    },
  },

// ─── Area 15: 廢棄礦坑 (Lv 10-18) ───────────────────────

  abandoned_mines_entry_claim: {
    id: 'abandoned_mines_entry_claim',
    name: '礦坑入口礦權牌',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_entry_claim.png',
    imagePrompt: '礦坑入口礦權牌 in abandoned_mines, abandoned mine entrance with old claim sign, timber supports, lantern dust and dark tunnel, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mine, clear lantern light',
    description:
      '山壁下方的礦坑入口被半塌木架撐住，旁邊斜插著一塊褪色礦權牌，上面還能看出舊礦主的名字與禁止外人進入的警告。冷風從黑暗礦道吹出，帶著礦粉、霉木和蝙蝠糞味。這裡是廢棄礦坑入口與交通錨點，玩家可確認退路、檢查繩標，或沿逃生側洞返回地表邊路。',
    exits: [
      { direction: 'east', targetRoomId: 'abandoned_mines_vein_path', description: '礦脈標記延向主礦道' },
      { direction: 'north', targetRoomId: 'abandoned_mines_lift_station', description: '舊升降台在北側' },
      { direction: 'south', targetRoomId: 'abandoned_mines_escape_adit', description: '低矮側洞像逃生通道' },
    ],
    monsters: [
      { monsterId: 'dustwing_bat', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'rust_pick_miner', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[口]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '入口木架上倒掛的蝙蝠會被燈光驚醒。',
      treasure: '礦權牌背面刻著舊礦道編號。',
      spirit: '礦權牌像墓碑一樣守著這座被遺棄的山腹。',
    },
  },

abandoned_mines_vein_path: {
    id: 'abandoned_mines_vein_path',
    name: '裸露礦脈道',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_vein_path.png',
    imagePrompt: '裸露礦脈道 in abandoned_mines, tunnel wall with exposed ore veins, pick marks, rope markers and dusty lantern glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain tunnel, clear lantern light',
    description:
      '主礦道兩側岩壁露出灰銀色礦脈，舊鑿痕密密麻麻，像有無數礦工在同一面牆上敲了多年。地上鋪著碎石與斷裂繩標，偶爾能看見新近被拖動的痕跡。玩家可在此採礦、辨認礦脈純度，也要留意從裂縫鑽出的蝙蝠與亡靈礦工。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_entry_claim', description: '繩標回到入口' },
      { direction: 'east', targetRoomId: 'abandoned_mines_herb_shelf', description: '礦道旁有潮濕岩棚' },
      { direction: 'north', targetRoomId: 'abandoned_mines_cart_yard', description: '鐵軌通往礦車場' },
    ],
    monsters: [
      { monsterId: 'dustwing_bat', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'rust_pick_miner', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[脈]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '礦脈裂縫有碎石落下時，蝙蝠通常正在移動。',
      treasure: '最亮的礦脈旁有未採完的礦晶。',
      spirit: '礦道裡的敲擊回音不像自然聲，像有人仍在工作。',
    },
  },

abandoned_mines_herb_shelf: {
    id: 'abandoned_mines_herb_shelf',
    name: '潮濕藥草岩棚',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_herb_shelf.png',
    imagePrompt: '潮濕藥草岩棚 in abandoned_mines, damp stone shelf with cave herbs, dripping roots, mushrooms and pale mineral light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain stone, clear lantern light',
    description:
      '礦道轉角有一片濕滑岩棚，地下水沿根鬚滴落，讓幾簇耐陰草藥和白色菌菇在礦粉中生長。這裡是少見的地下採集點，藥草能中和礦坑粉塵，也可作為任務材料。岩棚上方有細小蛛絲與蝙蝠抓痕，採集時若動作太大，會驚動洞頂生物。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_vein_path', description: '回到裸露礦脈道' },
      { direction: 'east', targetRoomId: 'abandoned_mines_water_pocket', description: '水聲從前方口袋洞傳來' },
      { direction: 'north', targetRoomId: 'abandoned_mines_crystal_pocket', description: '岩棚上方有晶洞微光' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
      { monsterId: 'dustwing_bat', maxCount: 1, respawnSeconds: 40 },
      { monsterId: 'oreback_crawler', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '菌菇傘面突然抖動時，蛛絲可能已被拉緊。',
      treasure: '岩棚最深處有一株泛藍的礦坑藥草。',
      spirit: '藥草沿著地下水生長，暗示水脈仍未完全污染。',
    },
  },

abandoned_mines_water_pocket: {
    id: 'abandoned_mines_water_pocket',
    name: '積水口袋洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_water_pocket.png',
    imagePrompt: '積水口袋洞 in abandoned_mines, small flooded pocket chamber, black water, broken rails, mineral reflections and hanging roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain chamber, clear lantern light',
    description:
      '礦道低處積成一座口袋洞，黑水淹過腳踝，水面倒映著斷裂鐵軌和木梁。每踩一步都會揚起礦粉和氣泡，像水下有什麼在緩慢呼吸。玩家可在此採水、搜索沉沒工具或找出通往淹沒支道的入口，但積水也讓亡靈與蝙蝠的動向更難判斷。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_herb_shelf', description: '濕滑岩棚在西側' },
      { direction: 'east', targetRoomId: 'abandoned_mines_beast_scrape', description: '濕腳印通向獸爪痕' },
      { direction: 'north', targetRoomId: 'abandoned_mines_flooded_crosscut', description: '水面延伸入淹沒橫巷' },
    ],
    monsters: [
      { monsterId: 'sump_drowned', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'rust_pick_miner', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[水]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '水面倒影多出人影時，骷髏可能正在靠近。',
      treasure: '沉水鐵軌旁壓著一把刻名礦鎬。',
      spirit: '積水保留礦坑最後一天的腳印，卻沒有離開方向。',
    },
  },

abandoned_mines_beast_scrape: {
    id: 'abandoned_mines_beast_scrape',
    name: '獸爪刮痕道',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_beast_scrape.png',
    imagePrompt: '獸爪刮痕道 in abandoned_mines, tunnel walls clawed by beasts, broken supports, scattered bones and red warning marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain tunnel, clear lantern light',
    description:
      '這段礦道牆面滿是深深爪痕，木支架被抓斷，地上散著小動物骨骸和被拖裂的礦工布條。刮痕有些新，有些已被礦粉覆蓋，顯示某種地下野獸長期把這裡當巡行通道。玩家可追蹤刮痕前往遺物坑，也可能遭遇洞穴蝙蝠和骷髏守衛的夾擊。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_water_pocket', description: '濕腳印回到積水口袋洞' },
      { direction: 'east', targetRoomId: 'abandoned_mines_relic_pit', description: '爪痕盡頭是遺物坑' },
      { direction: 'north', targetRoomId: 'abandoned_mines_bat_roost', description: '上方洞穴傳來蝙蝠聲' },
    ],
    monsters: [
      { monsterId: 'oreback_crawler', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[爪]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '爪痕越新，附近伏擊越近。',
      treasure: '碎骨堆裡有一枚未腐蝕的礦工徽章。',
      spirit: '刮痕像在標記領地，礦坑不再屬於人類。',
    },
  },

abandoned_mines_relic_pit: {
    id: 'abandoned_mines_relic_pit',
    name: '遺物坑',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_relic_pit.png',
    imagePrompt: '遺物坑 in abandoned_mines, pit of old miner relics, helmets, tools, bones, dim lantern and dark stone walls, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain stone, clear lantern light',
    description:
      '獸爪道盡頭塌成一個圓形坑洞，坑底堆著礦工頭盔、破燈、斷鎬和幾具半埋骨骸。遺物並非全都古舊，有些工具像是最近才被丟下，表面還有新鮮刮痕。這裡是任務與大型事件鉤子，玩家可尋找失蹤礦工證物，並發現礦坑深處仍有人或東西在收集遺物。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_beast_scrape', description: '爬回獸爪刮痕道' },
      { direction: 'north', targetRoomId: 'abandoned_mines_foreman_office', description: '坑壁木梯通向工頭室' },
    ],
    monsters: [
      { monsterId: 'rust_pick_miner', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'rail_wraith', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[遺]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '觸碰頭盔時，附近骷髏會像被點名般起身。',
      treasure: '坑底有一枚刻著工頭印記的懷錶。',
      spirit: '遺物坑像臨時墓地，卻缺少真正安葬儀式。',
    },
  },

abandoned_mines_lift_station: {
    id: 'abandoned_mines_lift_station',
    name: '舊升降台',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_lift_station.png',
    imagePrompt: '舊升降台 in abandoned_mines, rusted lift platform, chains, pulley wheels, deep shaft and dust beams, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '入口北側的舊升降台懸在方形井口上方，鐵鏈生鏽，滑輪卡著碎石和乾掉的油泥。平台邊緣還掛著半截安全繩，像曾有人急著逃離。這裡是礦坑交通節點，可連往礦車場與深層井道；若修好制動桿，玩家能更安全地穿梭上下層。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'south', targetRoomId: 'abandoned_mines_entry_claim', description: '回到礦坑入口' },
      { direction: 'east', targetRoomId: 'abandoned_mines_cart_yard', description: '鐵軌通向礦車場' },
    ],
    monsters: [
      { monsterId: 'dustwing_bat', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'rust_pick_miner', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[升]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '升降台鏈條震動時，上方蝙蝠群會落下。',
      treasure: '制動桿後面塞著一張深層礦道草圖。',
      spirit: '升降台仍像在等待下一班礦工下井。',
    },
  },

abandoned_mines_cart_yard: {
    id: 'abandoned_mines_cart_yard',
    name: '礦車調度場',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_cart_yard.png',
    imagePrompt: '礦車調度場 in abandoned_mines, abandoned mine cart yard, rusted rails, switch levers, ore carts and lantern haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '多條鐵軌在此交會，幾輛礦車歪在軌道上，車斗裡還殘留半車碎礦和破布。調度桿上的標牌寫著主礦道、木支廊和冶煉間，但有幾面被人刻意轉反。玩家可推動礦車打開路線，也可能讓金屬撞擊聲驚醒深處守衛。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_lift_station', description: '鐵軌回到升降台' },
      { direction: 'south', targetRoomId: 'abandoned_mines_vein_path', description: '主軌回到礦脈道' },
      { direction: 'east', targetRoomId: 'abandoned_mines_timber_gallery', description: '支軌進入木支廊' },
      { direction: 'north', targetRoomId: 'abandoned_mines_old_smelter', description: '重軌通向舊冶煉間' },
    ],
    monsters: [
      { monsterId: 'rust_pick_miner', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'rail_wraith', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[車]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '骷髏會被礦車撞擊聲吸引過來。',
      treasure: '錯置標牌背面有一串工頭密碼。',
      spirit: '調度場仍保留礦坑運作秩序，只是操作者早已不在。',
    },
  },

abandoned_mines_timber_gallery: {
    id: 'abandoned_mines_timber_gallery',
    name: '木支廊',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_timber_gallery.png',
    imagePrompt: '木支廊 in abandoned_mines, tunnel gallery held by old timber supports, sagging beams, dust and warning chalk marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain tunnel, clear lantern light',
    description:
      '礦車場東側的支廊由密集木柱撐住，梁木彎曲，表面畫著已經褪色的白色警告符號。每走幾步都能聽見木頭呻吟，碎石從頂板細縫落下。這裡是危險過渡房，玩家可加固支架或快速通過；若戰鬥拖太久，坍塌聲會引來更多洞穴生物。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_cart_yard', description: '支軌回到礦車場' },
      { direction: 'east', targetRoomId: 'abandoned_mines_echo_shaft', description: '木廊盡頭是豎井邊' },
      { direction: 'south', targetRoomId: 'abandoned_mines_crystal_pocket', description: '矮洞通向晶洞' },
    ],
    monsters: [
      { monsterId: 'timber_prop_husk', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[木]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '蜘蛛會利用木支架間隙拉網。',
      treasure: '白色警告符號下藏著加固工具。',
      spirit: '木支廊的吱呀聲像老礦坑仍在呻吟。',
    },
  },

abandoned_mines_echo_shaft: {
    id: 'abandoned_mines_echo_shaft',
    name: '回音豎井',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_echo_shaft.png',
    imagePrompt: '回音豎井 in abandoned_mines, deep vertical shaft with rope ladders, echoing darkness, hanging chains and bat silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '木支廊盡頭突然開成一座深豎井，井壁釘著舊繩梯和鐵環，往下看只能看見黑暗。任何聲音都會在井中重複數十次，像有人在下方回話。斷裂升降籠卡在半空，鐵鏈磨著岩壁，落下的灰塵像細雪。井口旁散著測深繩、壞掉滑輪和被撕裂的警示牌，牌上提醒礦工進入下層前必須先點三次安全燈。這裡連接升降台、淹沒橫巷與深部核心，是礦坑中層的重要交通點，也是蝙蝠最密集的區域。玩家必須分辨回音與真正的怪物動靜，否則很容易在窄梯上被包圍；若能穩住繩梯，也能從牆縫找到通往下層的舊維修記號。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_timber_gallery', description: '木廊回到支架區' },
      { direction: 'south', targetRoomId: 'abandoned_mines_deep_core', description: '井底平巷通往深部核心' },
      { direction: 'east', targetRoomId: 'abandoned_mines_flooded_crosscut', description: '井壁側洞有潮濕水聲' },
    ],
    monsters: [
      { monsterId: 'dustwing_bat', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '回音突然中斷時，蝙蝠群正在俯衝。',
      treasure: '井壁鐵環後藏著一盞舊安全燈。',
      spirit: '豎井把礦坑所有聲音集中起來，像山腹的喉嚨。',
    },
  },

abandoned_mines_crystal_pocket: {
    id: 'abandoned_mines_crystal_pocket',
    name: '小晶洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_crystal_pocket.png',
    imagePrompt: '小晶洞 in abandoned_mines, small crystal pocket with blue white mineral shards, pick marks, damp floor and faint glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain crystal, clear lantern light',
    description:
      '木支廊下方的矮洞通向一座小晶洞，藍白晶簇從岩壁向外生長，照亮地上細小水珠。晶洞裡的礦晶尚未完全被採走，周圍卻有許多匆忙敲擊留下的裂痕。玩家可採集晶體或研究礦脈走向，但晶光也會吸引蝙蝠與更深處的石像守衛注意。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'north', targetRoomId: 'abandoned_mines_timber_gallery', description: '矮洞回到木支廊' },
      { direction: 'south', targetRoomId: 'abandoned_mines_herb_shelf', description: '潮濕裂縫回到藥草岩棚' },
      { direction: 'east', targetRoomId: 'abandoned_mines_bat_roost', description: '晶光照向蝙蝠棲洞' },
    ],
    monsters: [
      { monsterId: 'oreback_crawler', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'timber_prop_husk', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[晶]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '晶簇震動時，晶石魔像可能正在甦醒。',
      treasure: '完整藍白晶簇可作為高價採集材料。',
      spirit: '晶洞像礦坑尚未耗盡的心跳。',
    },
  },

abandoned_mines_bat_roost: {
    id: 'abandoned_mines_bat_roost',
    name: '蝙蝠棲洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_bat_roost.png',
    imagePrompt: '蝙蝠棲洞 in abandoned_mines, cave ceiling packed with bats, guano piles, narrow ledges and crystal side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain cave, clear lantern light',
    description:
      '晶洞東側的高洞頂密密麻麻倒掛著蝙蝠，地上堆著厚厚蝙蝠糞和被啃碎的蟲殼。空氣刺鼻，任何火光或大聲響都會讓整片洞頂像黑布一樣翻動。這裡是高密度戰鬥房，也是採集蝙蝠翼和糞肥材料的地方；往南可回獸爪道，往北則有通往石像龕的窄縫。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_crystal_pocket', description: '晶洞微光在西側' },
      { direction: 'south', targetRoomId: 'abandoned_mines_beast_scrape', description: '低洞通回獸爪刮痕道' },
      { direction: 'north', targetRoomId: 'abandoned_mines_gargoyle_niche', description: '上方窄縫通向石像龕' },
    ],
    monsters: [
      { monsterId: 'dustwing_bat', maxCount: 4, respawnSeconds: 40 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[蝠]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '蝙蝠群會被火光與金屬撞擊聲激怒。',
      treasure: '糞堆下有被蝙蝠拖來的亮色礦片。',
      spirit: '蝙蝠棲洞把地表生命帶進礦坑，形成新的地下生態。',
    },
  },

abandoned_mines_flooded_crosscut: {
    id: 'abandoned_mines_flooded_crosscut',
    name: '淹沒橫巷',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_flooded_crosscut.png',
    imagePrompt: '淹沒橫巷 in abandoned_mines, flooded crosscut tunnel, waist-deep dark water, rails under surface and reflected lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain tunnel, clear lantern light',
    description:
      '回音豎井東側的橫巷被水淹沒，水面只露出幾段鐵軌和木支架頂端。牆上白漆水位線顯示這裡曾多次試圖排水，卻一次比一次失敗。玩家可沿牆邊鐵環前進，尋找沉沒支道與排水閘，也要小心骷髏在黑水中突然站起。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_echo_shaft', description: '側洞回到回音豎井' },
      { direction: 'south', targetRoomId: 'abandoned_mines_water_pocket', description: '積水流回口袋洞' },
      { direction: 'east', targetRoomId: 'abandoned_mines_sunken_rail', description: '水下鐵軌延向沉軌段' },
    ],
    monsters: [
      { monsterId: 'sump_drowned', maxCount: 3, respawnSeconds: 75 },
      { monsterId: 'dustwing_bat', maxCount: 1, respawnSeconds: 40 },
    ],
    mapSymbol: '[淹]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '水下冒出白色氣泡時，骷髏正從泥中起身。',
      treasure: '水位線旁有排水閘的缺口記號。',
      spirit: '淹沒橫巷像礦坑試圖把過去全部藏進黑水裡。',
    },
  },

abandoned_mines_foreman_office: {
    id: 'abandoned_mines_foreman_office',
    name: '工頭辦公室',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_foreman_office.png',
    imagePrompt: '工頭辦公室 in abandoned_mines, ruined foreman office with desk, ledgers, mine maps, locked cabinet and dusty lamp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '遺物坑上方的木梯通向一間嵌在岩壁裡的小辦公室，桌面散著礦道圖、薪資帳本和幾封未寄出的事故報告。牆上掛著舊班表，最後一日的名字被墨水塗黑，抽屜裡還留著工頭匆忙收起的礦核樣本標籤。門邊安全燈早已熄滅，卻仍聞得到油煙味；北側後門標著舊冶煉間，但煙道塌落後無法由辦公室直接穿過。鎖櫃上有新的撬痕，地板灰塵被拖出一道痕跡，像有人在礦坑荒廢後又回來翻找過證據。這裡是礦坑任務核心房，玩家可調查事故原因、找出失蹤礦工名冊，也能打開通往火藥室的鎖門。若仔細比對圖紙與班表，還能知道哪些支道在事故當晚被臨時封鎖。',
    exits: [
      { direction: 'south', targetRoomId: 'abandoned_mines_relic_pit', description: '木梯下到遺物坑' },
      { direction: 'west', targetRoomId: 'abandoned_mines_powder_room', description: '鐵門後是火藥室' },
    ],
    monsters: [
      { monsterId: 'rust_pick_miner', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'rail_wraith', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[工]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '工頭椅子移動時，石像守衛可能會啟動。',
      treasure: '帳本夾層裡藏著火藥室鑰匙。',
      spirit: '塗黑名冊像在掩蓋礦難真正原因。',
    },
  },

abandoned_mines_powder_room: {
    id: 'abandoned_mines_powder_room',
    name: '火藥室',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_powder_room.png',
    imagePrompt: '火藥室 in abandoned_mines, old powder room with barrels, warning signs, dry shelves and cracked stone walls, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain stone, clear lantern light',
    description:
      '工頭室西側的火藥室乾燥得異常，木桶上印著褪色爆破標記，牆面貼滿禁止明火的告示。多數火藥已經受潮結塊，但角落仍有幾包保持完整，被人用油布重新包好。這裡是事件與捷徑開路點，玩家可取得爆破材料打通堵塞礦道，也要避免戰鬥火花引發坍塌。',
    exits: [
      { direction: 'east', targetRoomId: 'abandoned_mines_foreman_office', description: '鐵門回到工頭辦公室' },
      { direction: 'west', targetRoomId: 'abandoned_mines_sunken_rail', description: '爆破標記指向沉軌段' },
    ],
    monsters: [
      { monsterId: 'rust_pick_miner', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'timber_prop_husk', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[藥]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '骷髏武器撞擊火藥桶時會造成額外危險。',
      treasure: '油布包裡有仍可使用的爆破藥包。',
      spirit: '火藥室保存太好，像有人近期仍在使用。',
    },
  },

abandoned_mines_sunken_rail: {
    id: 'abandoned_mines_sunken_rail',
    name: '沉軌段',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_sunken_rail.png',
    imagePrompt: '沉軌段 in abandoned_mines, sunken rail tunnel with tilted tracks, mud, water pools and collapsed carts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain tunnel, clear lantern light',
    description:
      '淹沒橫巷東側的鐵軌突然下陷，整段礦道像被巨手按進泥水裡。傾斜礦車半埋在泥中，車輪仍卡著未運出的礦石，軌枕之間長出白色菌絲。牆面有爆破孔和新補上的木板，顯示這裡曾被人試圖打通，卻只讓更多地下水滲入。水面偶爾泛起油亮波紋，露出沉在泥裡的工具箱與折斷信號旗，提醒玩家腳下仍有空洞。玩家可用火藥室材料清理塌方，開啟通往深部核心或舊冶煉間的捷徑，也要提防泥水裡藏著蛛網與未熄的骷髏怨念。若貿然奔跑，傾斜軌道會把聲響傳到更深處，讓潛伏敵人提前靠近。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_flooded_crosscut', description: '水軌回到淹沒橫巷' },
      { direction: 'east', targetRoomId: 'abandoned_mines_powder_room', description: '爆破門連回火藥室' },
      { direction: 'north', targetRoomId: 'abandoned_mines_deep_core', description: '沉軌盡頭通向深部核心' },
    ],
    monsters: [
      { monsterId: 'sump_drowned', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'rail_wraith', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[軌]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '泥水下的蛛網會拖慢腳步。',
      treasure: '半埋礦車裡有一塊高純度礦石。',
      spirit: '沉軌段像礦坑深處在把舊路吞回地底。',
    },
  },

abandoned_mines_old_smelter: {
    id: 'abandoned_mines_old_smelter',
    name: '舊冶煉間',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_old_smelter.png',
    imagePrompt: '舊冶煉間 in abandoned_mines, abandoned smelter chamber with cold furnace, slag piles, carts and red rust stains, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain chamber, clear lantern light',
    description:
      '礦車場北端的冶煉間已經熄火多年，冷爐膛裡堆滿黑渣，牆面被煙燻成深灰色。鐵砧旁散著半成品錠條和破裂模具，像工人突然停手離開。這裡是資源與精英戰鬥房，可回收礦渣、尋找冶煉記錄，並通往石像龕或工頭室。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'south', targetRoomId: 'abandoned_mines_cart_yard', description: '重軌回到礦車場' },
      { direction: 'east', targetRoomId: 'abandoned_mines_gargoyle_niche', description: '爐後石門通向石像龕' },
      { direction: 'north', targetRoomId: 'abandoned_mines_foreman_office', description: '煙道旁小門回到工頭室' },
    ],
    monsters: [
      { monsterId: 'timber_prop_husk', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'rust_pick_miner', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[煉]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '爐後石像眼睛發亮時，石像守衛即將活動。',
      treasure: '冷爐底部有一塊未完全熔化的異色礦錠。',
      spirit: '冶煉間停止在某個工作瞬間，像時間被礦難切斷。',
    },
  },

abandoned_mines_gargoyle_niche: {
    id: 'abandoned_mines_gargoyle_niche',
    name: '石像龕',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_gargoyle_niche.png',
    imagePrompt: '石像龕 in abandoned_mines, carved stone niches with gargoyles, mineral dust, broken offerings and cold furnace light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain stone, clear lantern light',
    description:
      '冶煉間後方的石龕排列著數尊礦坑守護像，牠們有著蝙蝠翼和石爪，表面覆滿礦粉。龕前擺著破碎供品與礦工帽，說明礦工曾把它們當作守護神。地面刻著祈求平安的短句，後半卻被尖銳爪痕刮掉，只剩深部礦核的符號反覆出現。龕壁還嵌著小小銅牌，記錄每次坍方後礦工重新獻祭的日期，最後幾面銅牌字跡明顯變得慌亂。如今部分石像眼縫透出暗光，會攻擊任何接近深層核心的人。這裡是精英守門點，也是解釋礦坑詛咒來源的重要房間。玩家若先破壞供品鏈條，可削弱石像甦醒時的壓迫感。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_old_smelter', description: '石門回到舊冶煉間' },
      { direction: 'south', targetRoomId: 'abandoned_mines_bat_roost', description: '窄縫下到蝙蝠棲洞' },
      { direction: 'east', targetRoomId: 'abandoned_mines_deep_core', description: '石像後方是深部核心' },
    ],
    monsters: [
      { monsterId: 'timber_prop_husk', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'rail_wraith', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'dustwing_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[像]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '石像眼縫發亮時先後退，牠會撲向最近目標。',
      treasure: '破碎供品中藏著礦工護符。',
      spirit: '石像原本是守護，現在卻像被深處意志重新命令。',
    },
  },

abandoned_mines_deep_core: {
    id: 'abandoned_mines_deep_core',
    name: '深部礦核',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_deep_core.png',
    imagePrompt: '深部礦核 in abandoned_mines, deep mine core with huge dark ore heart, broken rails, crystals, skeleton miners and oppressive glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain mine, clear lantern light',
    description:
      '回音豎井底部是一座巨大空洞，中央裸露著像心臟般的黑色礦核，表面一明一暗地閃著暗紅光。周圍鐵軌全部指向礦核，彷彿整座礦坑都圍繞它修建。碎裂礦燈、斷柄十字鎬和沒有寫完的求救字句散在地上，顯示礦難最後集中在此處爆發。每次礦核脈動，牆上晶簇都會回應般亮起，讓玩家看見岩層中封住的舊手印與求救符號。骷髏礦工在附近徘徊，石像守衛則守住通往出口的裂縫。這裡是廢棄礦坑的大型事件鉤子，玩家可決定採走礦核、封住它，或追查它為何讓礦工無法安息。若選擇久留，礦核會讓整座坑道的敵人更躁動。',
    exits: [
      { direction: 'north', targetRoomId: 'abandoned_mines_echo_shaft', description: '平巷回到回音豎井' },
      { direction: 'west', targetRoomId: 'abandoned_mines_gargoyle_niche', description: '石像守門通回石龕' },
      { direction: 'south', targetRoomId: 'abandoned_mines_sunken_rail', description: '沉軌段連回上層' },
      { direction: 'east', targetRoomId: 'abandoned_mines_escape_adit', description: '裂縫像通往逃生側洞' },
    ],
    monsters: [
      { monsterId: 'corebound_overseer', maxCount: 1, respawnSeconds: 1500 },
      { monsterId: 'rust_pick_miner', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'rail_wraith', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[核]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '礦核脈動時，附近骷髏會短暫變得更快。',
      treasure: '黑色礦核外層剝落的碎片價值極高。',
      spirit: '礦核像吸住所有礦工亡魂，使礦坑停在災難那天。',
    },
  },

abandoned_mines_escape_adit: {
    id: 'abandoned_mines_escape_adit',
    name: '逃生側洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_escape_adit.png',
    imagePrompt: '逃生側洞 in abandoned_mines, narrow escape adit with daylight slit, support ropes, old footprints and cold dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '礦坑入口南側與深部礦核東側都能連到這條狹窄側洞，洞壁粗糙，地上留著朝外奔跑的舊腳印。遠端有一線微弱日光，空氣比主礦道新鮮許多。這裡是逃生捷徑與交通房，玩家若從深處打通堵塞碎石，就能快速回到入口，也能發現當年礦難時有人曾試圖帶著礦核樣本逃離。',
    exits: [
      { direction: 'north', targetRoomId: 'abandoned_mines_entry_claim', description: '側洞回到礦坑入口' },
      { direction: 'west', targetRoomId: 'abandoned_mines_deep_core', description: '堵塞裂縫連向深部礦核' },
    ],
    monsters: [
      { monsterId: 'dustwing_bat', maxCount: 1, respawnSeconds: 40 },
      { monsterId: 'rust_pick_miner', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[逃]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '日光附近的蝙蝠較少，但骷髏會守住深處裂縫。',
      treasure: '舊腳印旁有一只裝著礦核碎片的皮袋。',
      spirit: '逃生側洞證明礦難發生時仍有人差點逃出生天。',
    },
  },

wildgrass_hills_windbreak_gate: {
    id: 'wildgrass_hills_windbreak_gate',
    name: '防風柵門',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_windbreak_gate.png',
    imagePrompt: '防風柵門 in wildgrass_hills, windbreak fence gate at yellow grass hills, leaning posts, road marker, sweeping clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '西境舊路在這裡穿過一排傾斜防風柵，正式進入荒草丘陵。枯黃高草被強風吹成同一方向，路牌上用焦黑字跡警告旅人不要在夜裡離開石道。柵門旁有避風凹槽、舊補給箱和被半獸人斥候削尖的木樁，是進出丘陵時最安全的錨點。玩家能在這裡整理路線、觀察風向，也能從草浪間辨認野豬踐踏痕與哥布林巡邏腳印。柵門柱上刻著近月失蹤商隊的記號，旁邊繫著還未完全褪色的求救布條，表示危險已經逼近入口。若回頭沿舊路撤離，這裡也是最快的交通節點，適合護送任務重新集合出發。',
    exits: [
      { direction: 'east', targetRoomId: 'wildgrass_hills_lower_slope', description: '石道爬向低坡' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_old_road_cut', description: '舊路切口可快速離開丘陵', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'grassblade_raider', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'stormtusk_boar', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '草浪逆風擺動時，斥候正從柵門外側靠近。',
      treasure: '補給箱底部有旅人留下的乾糧和磨刀石。',
      spirit: '防風柵門像一條界線，把平原秩序留在身後。',
    },
  },

wildgrass_hills_lower_slope: {
    id: 'wildgrass_hills_lower_slope',
    name: '低風坡',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_lower_slope.png',
    imagePrompt: '低風坡 in wildgrass_hills, rolling lower slope of yellow grass, gust trails, exposed stones and distant watchfires, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '防風柵後的低坡看似開闊，實際上到處藏著半人高的草溝。風從西面壓過丘線，把草葉刮出像水面一樣的波紋，偶爾露出白石、斷箭和小型獸骨。這裡是丘陵主路的第一段，能通往高草徑、彎橡樹與舊柵門。玩家可在坡頂觀察遠方煙火，判斷哥布林營地位置，也會被野豬與巡邏斥候測試實力。坡面沒有真正遮蔽，一旦交戰，風聲會把動靜傳得很遠。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_windbreak_gate', description: '石道回到防風柵門' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_tallgrass_lane', description: '草浪形成狹長通道' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_bent_oak', description: '坡上有一棵彎橡樹', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormtusk_boar', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'grassblade_raider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[坡]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '野豬會順著坡面衝鋒，側向閃避比後退安全。',
      treasure: '白石堆下壓著舊巡路人的銅扣。',
      spirit: '低風坡讓旅人明白，這片丘陵沒有真正安靜的時刻。',
    },
  },

wildgrass_hills_tallgrass_lane: {
    id: 'wildgrass_hills_tallgrass_lane',
    name: '高草徑',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_tallgrass_lane.png',
    imagePrompt: '高草徑 in wildgrass_hills, narrow lane through towering dry grass, hidden tracks, wind ribbons and amber light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '一條被腳步和獸蹄壓出的細徑穿過高草，兩側草葉高過肩頭，人在其中幾乎看不見十步外的同伴。風穿過草莖時發出像耳語的摩擦聲，掩蓋了哥布林斥候拉弓與野豬低吼。地面散著被折斷的標記枝，顯示這條路被多支巡邏隊反覆使用。玩家可沿路追蹤草籽、獸皮和箭羽材料，也能轉往野豬泥窪、斥候岩臺或溪切溝。這裡是典型伏擊走廊，任何火把都會在風中搖晃暴露位置。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_lower_slope', description: '草徑回到低風坡' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_boar_wallow', description: '泥味通往野豬泥窪' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_scout_ledge', description: '草坡上方有斥候岩臺', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'south',
        targetRoomId: 'wildgrass_hills_stream_cut',
        description: '南側要撥開高草並沿濕滑獸徑下切，穿過一段被草根遮住的土坡才抵達溪切溝',
        edgeKind: 'distant_route',
        edgeNote: '高草徑到溪切溝需要穿過高草伏擊走廊與濕滑下切土坡，屬於丘陵內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'grassblade_raider', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'stormgrass_serpent', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '草尖突然分開時，斥候箭矢通常已經搭上弦。',
      treasure: '倒伏草叢中能收集乾草籽與箭羽。',
      spirit: '高草徑把開闊丘陵變成一座會移動的迷宮。',
    },
  },

wildgrass_hills_boar_wallow: {
    id: 'wildgrass_hills_boar_wallow',
    name: '野豬泥窪',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_boar_wallow.png',
    imagePrompt: '野豬泥窪 in wildgrass_hills, muddy wallow among dry grass, tusk marks, trampled reeds and storm clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '高草徑東側的低洼地被野豬翻成一片爛泥，泥面插著斷草、白骨和被撞碎的木盾。濕泥保存了清楚足跡，有小豬、成年巨豬，也有哥布林試圖繞行後被追撞的痕跡。這裡是丘陵最早能感受到高密度怪物活動的戰鬥房，玩家可收集草根、硬皮與帶礦物味的泥塊。泥窪周圍視野低，野豬會從草牆後突然衝出；若能引牠撞上石塊，反而能打開通向果園廢址的短路。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_tallgrass_lane', description: '乾草徑在西側' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_orchard_ruin', description: '泥痕延向果園廢址' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_hawk_perch', description: '上方石柱有猛禽盤旋', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormtusk_boar', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'grassblade_raider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[泥]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '泥面冒泡時，野豬正在草牆後繞圈蓄勢。',
      treasure: '撞碎木盾下方有還能用的皮革扣環。',
      spirit: '泥窪記錄著丘陵生物每天為水源爭鬥的痕跡。',
    },
  },

wildgrass_hills_scout_ledge: {
    id: 'wildgrass_hills_scout_ledge',
    name: '斥候岩臺',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_scout_ledge.png',
    imagePrompt: '斥候岩臺 in wildgrass_hills, rocky scout ledge above grassland, crude signal flags, bows, wind and long view, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '高草徑北面露出一片平整岩臺，能俯瞰低坡、泥窪和遠方煙火。哥布林斥候在石縫插著破布旗，用不同顏色標示旅人隊伍、商車和巡獵野獸。岩臺邊緣留有磨平的腳印與弓弦蠟，說明這裡長期被當作監視點。玩家可奪下旗號，短暫干擾丘陵巡邏，也能從望向北方的視角找到石環與雷丘位置。這裡的戰鬥容易被高低差影響，若不先清掉弓手，往下撤退會一直受到追射。',
    exits: [
      { direction: 'south', targetRoomId: 'wildgrass_hills_tallgrass_lane', description: '下坡回到高草徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_hawk_perch', description: '岩脊延向鷹棲柱' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_stone_ring', description: '北面可見石環', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'grassblade_raider', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'windscar_hawk', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[臺]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '斥候會優先吹旗號求援，先打斷牠能降低壓力。',
      treasure: '旗桿底座藏著幾支品質較好的箭頭。',
      spirit: '岩臺讓哥布林把風與高度變成自己的眼睛。',
    },
  },

wildgrass_hills_bent_oak: {
    id: 'wildgrass_hills_bent_oak',
    name: '彎橡樹',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_bent_oak.png',
    imagePrompt: '彎橡樹 in wildgrass_hills, wind-bent lone oak on grassy hill, hanging charms, roots, amber sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sky, clear lantern light',
    description:
      '低風坡北側有一棵被長年強風吹彎的橡樹，樹冠幾乎貼著地面，根部卻牢牢抓住岩層。枝條上掛著旅人留下的布條、獸牙和小鈴，風一吹便發出細碎聲響。這裡比周圍安靜，適合短暫避風與整理採集品，也藏著通往種籽溝和隱泉的自然線索。玩家能辨認哪些布條是求平安，哪些是哥布林用來標記獵物的暗號。若夜裡停留，樹影會像低伏巨獸，容易引來巡邏狼群與斥候。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'south', targetRoomId: 'wildgrass_hills_lower_slope', description: '坡路回到低風坡', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'wildgrass_hills_seed_gully',
        description: '東側要繞過彎橡樹裸露根盤，沿避風草溝慢慢下行，穿過堆積籽穗後才進入種籽溝',
        edgeKind: 'distant_route',
        edgeNote: '彎橡樹到種籽溝需要繞過根盤與避風草溝，屬於丘陵內長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'wildgrass_hills_hidden_spring',
        description: '北側濕草痕跡要穿過低垂樹冠與碎石暗渠，才能找到被石塊遮住的隱泉',
        edgeKind: 'distant_route',
        edgeNote: '彎橡樹到隱泉需要沿濕草暗渠與碎石遮蔽繞行，屬於丘陵內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'stormgrass_serpent', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'grassblade_raider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[橡]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '鈴聲無風自響時，狼群已經繞到樹根後方。',
      treasure: '最舊的布條內側縫著一枚小銀幣。',
      spirit: '彎橡樹證明丘陵可以被風折彎，卻不一定會被折斷。',
    },
  },

wildgrass_hills_stream_cut: {
    id: 'wildgrass_hills_stream_cut',
    name: '溪切溝',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_stream_cut.png',
    imagePrompt: '溪切溝 in wildgrass_hills, narrow stream cut through grass hill, eroded banks, stepping stones, reeds and wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain fantasy terrain, clear lantern light',
    description:
      '高草徑南側突然裂出一道被溪水切開的溝谷，清水沿著褐色土壁流下，露出草根、碎石和被沖出的舊陶片。溪岸比草地低，能暫時避開遠處斥候視線，但水聲也會掩蓋靠近的腳步。這裡是資源與探索房，玩家可採集水草、沖洗泥塊，或沿濕滑踏石前往隱泉與舊路切口。溝壁上有野豬磨牙痕、風暴蛇爬痕和哥布林挖出的藏物洞，代表這條溪同時是敵群水源與偷運路線。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'wildgrass_hills_tallgrass_lane',
        description: '北側回高草徑要踩著濕滑踏石爬上土壁，再穿過高過肩頭的乾草走廊',
        edgeKind: 'distant_route',
        edgeNote: '溪切溝回高草徑需要沿踏石爬坡並穿過高草走廊，屬於丘陵內長路徑。',
      },
      { direction: 'west', targetRoomId: 'wildgrass_hills_fill_2_n12', description: '溪溝沿風口通道轉向舊路切口' },
      {
        direction: 'east',
        targetRoomId: 'wildgrass_hills_hidden_spring',
        description: '東側要逆著細水流穿過蘆葦、滑石與被草蓋住的暗溝，才接近隱泉水潭',
        edgeKind: 'distant_route',
        edgeNote: '溪切溝到隱泉需要逆流穿過蘆葦、滑石與暗溝，屬於丘陵內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'stormtusk_boar', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'stormgrass_serpent', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[溪]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '溪水突然變濁時，上游可能有野獸涉水。',
      treasure: '沖刷土壁裡露出古老陶片與草藥根。',
      spirit: '溪切溝是風景下方的另一條路，安靜卻不安全。',
    },
  },
};
