import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_009: Record<string, RoomDef> = {
thundersteppe_split_totem: {
    id: 'thundersteppe_split_totem',
    name: '裂木圖騰',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_split_totem.png',
    imagePrompt: '裂木圖騰 in thundersteppe, lightning-split wooden totem bound with bronze rings, storm grass and nomad offerings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '裂木圖騰像一棵被劈開後仍站立的黑樹，內側木紋閃著焦金色，銅環把兩半軀幹勉強束在一起。圖騰腳下堆滿羽毛、獸牙、破箭與小陶杯，顯示游牧者仍把這裡當成詢問風暴意志的地方。玩家若繞行圖騰三圈，可以聽見不同方向傳來的雷聲回覆；但若拔走祭品，附近雷鷹與狼群會被同一股怒意驅動。這裡也是北線與中線交會處，能通往棲柱、營地與引雷柱林，適合做為隊伍重新決定路線的高風險節點。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_eagle_roost', description: '焦木影子回到雷鷹棲柱' },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_nomad_camp',
        description: '南返時繩結路沿濕草圈與避雷樁外緣下行，才回到游牧營地，帳棚煙柱會逐漸變清楚',
        edgeKind: 'distant_route',
        edgeNote: '裂木圖騰南返游牧營地需沿營地外圈繞行，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_lightning_rod_field',
        description: '東側銅環反光會先穿過祭品石與焦草斜坡，才接到引雷柱林，雷弧聲會越來越密',
        edgeKind: 'distant_route',
        edgeNote: '裂木圖騰到引雷柱林需穿過焦草斜坡與祭品區，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'stormwing_eagle', maxCount: 1, respawnSeconds: 130 },
      { monsterId: 'stormpack_wolf', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[圖]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '裂木圖騰的銅環若無風自鳴，周圍獵手已被祭意驚動。',
      treasure: '圖騰裂縫中偶爾夾著被雷火淬亮的獸牙。',
      spirit: '裂木圖騰保存著部族向風暴借路的古老儀式。',
    },
  },

thundersteppe_charged_bonefield: {
    id: 'thundersteppe_charged_bonefield',
    name: '帶電骨原',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_charged_bonefield.png',
    imagePrompt: '帶電骨原 in thundersteppe, bleached bones crackling with static, storm-lit prairie, scavenger tracks and low thunderclouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '帶電骨原鋪滿被風雨磨白的長骨，許多骨骸仍保持奔跑姿勢，像是在最後一刻被整片天空按倒。靜電沿著肋骨和角鞘滑動，玩家靠近時能聞到焦草與濕泥混在一起的味道。這裡是野獸群躲避風暴失敗後留下的警示，也吸引狼群與雷鷹前來搜尋容易撕開的屍塊。骨堆之間藏有舊戰矛、破碎鞍具與少量被雷煉硬的骨片；但每一次翻動都可能讓積蓄電荷找到新的出口，讓整片骨原像活物般發出尖銳顫音。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_herd_plain', description: '骨線回到奔獸平原', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_boar_run',
        description: '南側碎骨坡沿帶電骨堆下滑，繞過白骨脊與泥槽缺口後才落向野豬衝道',
        edgeKind: 'distant_route',
        edgeNote: '帶電骨原到野豬衝道需下行碎骨坡與泥槽缺口，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_wolf_scarp',
        description: '東側狼爪痕穿過靜電骨堆與斜草邊線後，才會抵達狼群崖坡，低嚎會被雷聲拉長',
        edgeKind: 'distant_route',
        edgeNote: '帶電骨原到狼群崖坡被骨堆與斜草邊線隔開，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'stormpack_wolf', maxCount: 3, respawnSeconds: 110 },
      { monsterId: 'stormwing_eagle', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[骨]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '帶電骨原的骨堆若一起顫響，狼群多半正在壓低身形靠近。',
      treasure: '粗大肋骨內側可能藏有雷煉骨片。',
      spirit: '帶電骨原記得獸群沒能跑贏雷暴的那一夜。',
    },
  },

thundersteppe_boar_run: {
    id: 'thundersteppe_boar_run',
    name: '野豬衝道',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_boar_run.png',
    imagePrompt: '野豬衝道 in thundersteppe, churned muddy boar trail through storm grass, broken shrubs, tusk marks and lightning rain, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain trail, clear lantern light',
    description:
      '野豬衝道是一條被獠牙與厚蹄硬生生犁出的泥路，兩側灌木全被撞斷，枝葉上沾著濕泥和深色血痕。雷聲會讓草原野豬變得格外暴躁，牠們沿著這條低地來回衝撞，把任何擋路物都當成挑戰。東側碎骨坡可看見帶電骨原，但泥槽這端被衝斷，需由骨原高處落下。玩家可以順著衝道快速繞開中線平原，也能在泥壁上觀察最近的獸群規模；但站位錯誤時，隊伍會在狹窄泥槽裡承受連續衝鋒。老獵人把破盾牌插在彎道外側，提醒來者轉角前先聽地面，不要只聽天空。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_rolling_gate', description: '泥痕回到雷原入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'thundersteppe_rain_shadow_gully', description: '低地水線落向雨影溝', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'thunderhoof_boar', maxCount: 4, respawnSeconds: 120 },
      { monsterId: 'stormpack_wolf', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[豬]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '野豬衝道的泥水若先向外震開，衝鋒已在轉角後成形。',
      treasure: '破盾牌後方常夾著獵人匆忙丟下的鐵扣。',
      spirit: '野豬衝道記得草原用蹄聲回應雷聲的方式。',
    },
  },

thundersteppe_skyfire_mesa: {
    id: 'thundersteppe_skyfire_mesa',
    name: '天火台地',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_skyfire_mesa.png',
    imagePrompt: '天火台地 in thundersteppe, raised mesa scorched by lightning, storm horizon, glowing cracks and wind-torn grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '天火台地高出周圍草原一截，邊緣岩層被雷火劈成玻璃般的黑亮裂紋，雨水落上去會瞬間蒸成白霧。從這裡能看見游牧營地的煙柱、南側雷鼓石圈以及更遠處的風暴玻岩。台地中央有一圈舊灰，據說是雷獸曾經降落並把草根燒穿的痕跡。玩家若在雷暴間隙攀上台地，可以掌握草原大半路線；若在雲底壓低時逗留，整座高地會像巨大的引雷器，把天空火線直接拉到腳下。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_nomad_camp', description: '乾草坡回到游牧營地' },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_stormglass_outcrop',
        description: '東側黑亮裂紋沿台地邊緣繞過引雷裸岩，才會抵達風暴玻岩，雨水在裂面上一路發白',
        edgeKind: 'distant_route',
        edgeNote: '天火台地到風暴玻岩需沿台地邊緣與裸岩繞行，不是相鄰格。',
      },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_drum_circle',
        description: '南側鼓點要沿台地背風坡下降，穿過舊灰圈與祭旗殘布後才會抵達雷鼓石圈',
        edgeKind: 'distant_route',
        edgeNote: '天火台地到雷鼓石圈有台地高差與祭旗路，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'stormwing_eagle', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'stormglass_colossus', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[火]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '天火台地的玻岩若連續泛白，雷鷹與巨物都會暫避高處。',
      treasure: '舊灰圈下偶爾有被雷火燒硬的石核。',
      spirit: '天火台地記得雷獸曾把天空短暫拖到地上的瞬間。',
    },
  },

thundersteppe_wind_shrine: {
    id: 'thundersteppe_wind_shrine',
    name: '風祭小祠',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_wind_shrine.png',
    imagePrompt: '風祭小祠 in thundersteppe, small prairie wind shrine with cloth strips, rain pools, carved stones and storm clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain shrine, clear lantern light',
    description:
      '風祭小祠藏在水洼北端的蘆草後方，幾塊刻紋石片圍住矮小木架，架上繫滿褪色布條與鳥羽。每當風向改變，布條會先後抬起，像有人用無聲語言指出草原上可以行走的縫隙。祠旁沒有守衛，只有被雨水洗亮的供杯和幾枚壓住紙符的小石頭。玩家若在此獻上羽毛或乾草，可獲得短暫順風與避雷提示；若粗暴翻動祭物，北面的引雷柱林會傳來尖銳共鳴，讓雷鷹誤以為有人挑釁巢域。',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_thunder_pool', description: '蘆草水線回到雷雨水洼', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_lightning_rod_field',
        description: '東側布條路穿過蘆草缺口與濕石祭線後，才會進入引雷柱林，柱腳雷弧會逐漸變亮',
        edgeKind: 'distant_route',
        edgeNote: '風祭小祠到引雷柱林需穿過蘆草祭線，距離長於相鄰格。',
      },
    ],
    monsters: [{ monsterId: 'stormwing_eagle', maxCount: 2, respawnSeconds: 130 }],
    mapSymbol: '[祠]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '風祭小祠的布條若逆風貼地，空中獵手通常正降低高度。',
      treasure: '供杯底部可能壓著牧人留下的風向石。',
      spirit: '風祭小祠保留著草原人向風詢問路徑的習慣。',
    },
  },

thundersteppe_lightning_rod_field: {
    id: 'thundersteppe_lightning_rod_field',
    name: '引雷柱林',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_lightning_rod_field.png',
    imagePrompt: '引雷柱林 in thundersteppe, field of bronze and stone lightning rods, crackling storm arcs, wet prairie grass and ritual markers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain field, clear lantern light',
    description:
      '引雷柱林由數十根石柱與青銅長釘組成，柱身刻著粗糙刻度，用來記錄每一季雷暴落點。雷光擊中其中一根柱子後，會沿地下濕根傳到其他柱腳，形成短暫而危險的藍色蛛網。北側布條路通向風祭小祠，但柱林這端雷弧封住回程，需從小祠順風進入。這裡既是游牧者研究天候的地標，也是雷鳴草原最容易誤傷旅人的區域。懂行的人會沿著燒焦草圈外緣移動，藉柱影避開空中視線；不懂的人若站在兩根柱子之間，很可能在下一次雷鳴前就被靜電抬起頭髮，成為整片柱林的導線。柱腳附近還留有許多焦黑小旗，代表曾有隊伍在此測量風暴路徑，玩家可藉旗面破損方向推測安全出口與下一波雷擊間隔。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_split_totem',
        description: '西返時銅環反光穿過焦草斜坡與祭品石後，才回到裂木圖騰，圖騰裂光會在雨裡閃動',
        edgeKind: 'distant_route',
        edgeNote: '引雷柱林西返裂木圖騰需穿越焦草斜坡，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_eagle_nest_peak',
        description: '東側柱影沿高風脊線拉長，需繞過多根青銅引雷釘後，才會抵達雷鷹巢峰下方',
        edgeKind: 'distant_route',
        edgeNote: '引雷柱林到雷鷹巢峰需沿高風脊與柱林邊緣繞行，不是相鄰格。',
      },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_thunderhoof_crossing',
        description: '南側焦草缺口沿地下雷弧下切，穿過濕根與燒焦草圈後才接到雷蹄渡口',
        edgeKind: 'distant_route',
        edgeNote: '引雷柱林到雷蹄渡口有下切濕根與雷弧路，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'rodfield_stormcaller', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'stormwing_eagle', maxCount: 2, respawnSeconds: 130 },
    ],
    mapSymbol: '[柱]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '引雷柱林若有柱腳先亮，雷鷹通常會跟著弧光俯衝。',
      treasure: '舊刻度旁能刮下少量雷蝕青銅粉。',
      spirit: '引雷柱林記錄著草原人試圖讀懂天空脾氣的努力。',
    },
  },

thundersteppe_wolf_scarp: {
    id: 'thundersteppe_wolf_scarp',
    name: '狼群崖坡',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_wolf_scarp.png',
    imagePrompt: '狼群崖坡 in thundersteppe, low prairie scarp with wolf dens, storm grass, claw marks and lightning on horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '狼群崖坡不高，卻足以讓草原風在坡面形成迴旋，掩蓋多數腳步聲。坡底有幾處半塌洞穴，洞口散落白骨、濕毛與被拖行的草束，顯示狼群常把獵物趕到這裡再分食。南側能看見雨影溝，但崖坡小徑塌成單向滑坡，需由雨影溝側坡升上來。雷鳴時狼嚎會被拉長成像人的呼喊，讓初來者誤判數量與方向。若玩家能找到主狼留下的爪印，便可推測牠們下一次巡獵會繞向渡口還是衝道。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_charged_bonefield',
        description: '西返時狼爪痕沿斜草邊線繞過半塌洞穴，才回到帶電骨原，骨堆靜電會先在遠處作響',
        edgeKind: 'distant_route',
        edgeNote: '狼群崖坡西返帶電骨原需繞過洞穴與斜草線，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'thundersteppe_drum_circle', description: '東側低聲鼓點通往雷鼓石圈' },
    ],
    monsters: [
      { monsterId: 'stormpack_wolf', maxCount: 4, respawnSeconds: 110 },
      { monsterId: 'thunderhoof_boar', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[狼]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '狼群崖坡的回聲若像人聲，狼群正利用坡面包圍獵物。',
      treasure: '塌洞最深處偶爾拖有商隊遺失的皮袋。',
      spirit: '狼群崖坡記得獵物在雷聲中迷失方向的恐懼。',
    },
  },

thundersteppe_rain_shadow_gully: {
    id: 'thundersteppe_rain_shadow_gully',
    name: '雨影溝',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_rain_shadow_gully.png',
    imagePrompt: '雨影溝 in thundersteppe, narrow gully sheltered from storm rain, slick clay walls, sparse grass and distant lightning glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '雨影溝切在草原南側，兩邊黏土壁擋住大半斜雨，只留下上方天空像一條發亮裂口。溝底比外面安靜許多，水滴從草根滲下，形成不規則的細流與泥泡。這裡能讓隊伍短暫躲避落雷，也能繞到狼群崖坡和雷鼓石圈下方；但狹窄地形會放大任何伏擊風險，尤其是野豬從上方滑落時幾乎沒有閃避空間。牆面刻著幾道舊記號，指出哪些泥層會在暴雨後崩落，哪些可以當作臨時攀爬點。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_boar_run', description: '泥槽回到野豬衝道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'thundersteppe_wolf_scarp', description: '側坡升向狼群崖坡', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'thundersteppe_drum_circle', description: '低聲鼓點通往雷鼓石圈', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormpack_wolf', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'thunderhoof_boar', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[溝]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '雨影溝若忽然沒有滴水聲，坡上多半有東西擋住了雨線。',
      treasure: '黏土壁舊刻痕旁可能露出被沖刷的骨哨。',
      spirit: '雨影溝保存著旅人躲雷時壓低呼吸的記憶。',
    },
  },

thundersteppe_drum_circle: {
    id: 'thundersteppe_drum_circle',
    name: '雷鼓石圈',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_drum_circle.png',
    imagePrompt: '雷鼓石圈 in thundersteppe, ring of drum stones on prairie, storm clouds, wet hides, ritual markings and lightning, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '雷鼓石圈由十二塊中空巨石圍成，雨水打在石面會發出低沉鼓聲，與遠處雷鳴互相呼應。游牧祭司曾在這裡用節拍引導獸群遷徙，也用錯拍警告營地準備迎戰。西側低溝能聽見雨影溝滴水，但石圈端鼓聲會干擾方向，需由雨影溝低聲鼓點進入。石圈中央鋪著被踩實的灰泥，幾面舊皮鼓倒扣在防雨坑裡，鼓皮仍殘留淡淡電光。玩家若按正確節奏敲擊，可能暫時干擾狼群與野豬的巡行；若敲錯，整座石圈會把聲音傳向風暴玻岩，召來高處雷鷹與更深處的龍雷回聲。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'thundersteppe_nomad_camp',
        description: '北返時鼓聲沿低草坡與祭旗殘布回傳，穿過泥帶後才看見游牧營地的低矮皮帳',
        edgeKind: 'distant_route',
        edgeNote: '雷鼓石圈北返游牧營地需穿過祭旗路與低草坡，屬於長路徑。',
      },
      { direction: 'west', targetRoomId: 'thundersteppe_wolf_scarp', description: '西側草線回到狼群崖坡' },
      { direction: 'east', targetRoomId: 'thundersteppe_thunderhoof_crossing', description: '東側溪岸草路通往雷蹄渡口' },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_stormglass_outcrop',
        description: '南側鼓聲沿低草坡與黑玻反光繞向風暴玻岩',
        edgeKind: 'distant_route',
        edgeNote: '雷鼓石圈到風暴玻岩需沿鼓聲與黑玻反光繞行，屬於草原內特殊長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'rodfield_stormcaller', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'stormpack_wolf', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'stormwing_eagle', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[鼓]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '雷鼓石圈若在無雨時自響，附近獸群可能已被節拍牽動。',
      treasure: '倒扣皮鼓內偶爾藏著祭司留下的骨槌。',
      spirit: '雷鼓石圈記得草原人用聲音與雷暴交涉的年代。',
    },
  },

thundersteppe_stormglass_outcrop: {
    id: 'thundersteppe_stormglass_outcrop',
    name: '風暴玻岩',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_stormglass_outcrop.png',
    imagePrompt: '風暴玻岩 in thundersteppe, black fulgurite outcrop shining in rain, storm grass, lightning reflections and cracked stone shelves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '風暴玻岩像一片從草原脊背長出的黑色浪花，表面由無數雷擊熔出的玻璃層疊而成，雨水滑過時會反射出破碎天空。岩縫裡能找到細小發光砂粒，也能聽見地下電流沿著濕根游動的嗡鳴。南側回聲可辨認雷鼓石圈，但玻岩低處裂邊太滑，需由石圈回聲引路上來。這裡連接天火台地與更深處的龍雷風眼，是高階隊伍辨認最終事件路線的重要地標。玩家若在岩面放置金屬物，能短暫看見即將落雷的位置；但玻岩也會把遠處龍息般的風暴聲放大，讓膽怯坐騎直接掙脫繩索。岩面低處刻著幾道舊箭頭，指向能避開玻裂邊緣的窄路，也暗示這裡曾是前往火坑前最後一次重整隊形的位置。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_skyfire_mesa',
        description: '西返時黑亮裂紋沿裸岩與濕滑台地邊緣回繞，才會登上天火台地，雨水會在腳邊蒸白',
        edgeKind: 'distant_route',
        edgeNote: '風暴玻岩西返天火台地需沿台地邊緣攀回，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_dragonstorm_eye',
        description: '東側玻岩脈動穿過多層黑玻裂架與風牆外緣後，才會指向龍雷風眼，遠處龍形閃電會短暫現身',
        edgeKind: 'distant_route',
        edgeNote: '風暴玻岩到龍雷風眼需穿過黑玻裂架與風牆外緣，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'stormglass_colossus', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'stormwing_eagle', maxCount: 2, respawnSeconds: 130 },
    ],
    mapSymbol: '[玻]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '風暴玻岩的反光若出現爪形，龍雷風眼可能正在甦醒。',
      treasure: '玻岩裂縫可採到少量雷熔砂。',
      spirit: '風暴玻岩記得每次天空把草原燒成玻璃的瞬間。',
    },
  },

thundersteppe_eagle_nest_peak: {
    id: 'thundersteppe_eagle_nest_peak',
    name: '雷鷹巢峰',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_eagle_nest_peak.png',
    imagePrompt: '雷鷹巢峰 in thundersteppe, high storm eagle nest on stone peak, blue lightning feathers, vast prairie below and violent clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '雷鷹巢峰是棲柱群最高的一截，峰頂被巨巢覆蓋，枯枝、骨架與亮羽在狂風中互相摩擦，發出像刀刃刮過金屬的聲音。從這裡向下看，雷鳴草原的路線像濕皮革上的刻線，入口、圖騰、柱林與渡口都清楚可見。雷鷹把巢峰視為天空領地，任何靠近者都必須承受俯衝與落雷同時壓下的威脅。若玩家能在不毀巢的情況下取回任務物，游牧營地會承認隊伍懂得尊重草原獵手，而不是只會掠奪。',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_eagle_roost', description: '石柱脊線回到雷鷹棲柱', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_lightning_rod_field',
        description: '西側高空柱影沿巢峰脊線下落，繞過雷鷹巢枝與青銅引雷釘後才回到引雷柱林',
        edgeKind: 'distant_route',
        edgeNote: '雷鷹巢峰西返引雷柱林需要沿巢峰脊線下行，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'stormwing_eagle', maxCount: 4, respawnSeconds: 130 },
      { monsterId: 'rodfield_stormcaller', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[巢]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '雷鷹巢峰若飄下熱羽，下一次俯衝通常已經開始。',
      treasure: '巢緣偶爾能取到不傷巢體的落羽。',
      spirit: '雷鷹巢峰記得天空領主如何審視所有地面來客。',
    },
  },

thundersteppe_thunderhoof_crossing: {
    id: 'thundersteppe_thunderhoof_crossing',
    name: '雷蹄渡口',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_thunderhoof_crossing.png',
    imagePrompt: '雷蹄渡口 in thundersteppe, shallow storm stream crossing with hoofprints, sparking water, prairie reeds and lightning-lit banks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain water, clear lantern light',
    description:
      '雷蹄渡口跨過一條季節性暴雨溪，溪水不深，卻因上游雷擊而帶著刺痛電流。渡口兩側布滿巨大蹄印，某些蹄坑內的水會在無風時自行旋轉，像仍記得雷獸踏過時的重量。這裡是北線柱林、南側狼坡與最深處龍雷風眼之間的關鍵通道，隊伍常在此決定是否繼續向東。渡水時必須拉開間距，避免一人觸電拖倒全隊；若能找到最古老的三枚蹄印，便可避開水下最強的電流脈絡。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'thundersteppe_lightning_rod_field',
        description: '北返時焦草缺口沿濕根雷弧上行，穿過燒焦草圈後才回到引雷柱林，柱腳會先亮起',
        edgeKind: 'distant_route',
        edgeNote: '雷蹄渡口北返引雷柱林需沿濕根雷弧上行，屬於長路徑。',
      },
      { direction: 'west', targetRoomId: 'thundersteppe_drum_circle', description: '西側溪岸草路回到雷鼓石圈' },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_dragonstorm_eye',
        description: '東側電流溪線穿過渡口深蹄印與風牆外圍後，才會抵達龍雷風眼，隊伍必須拉開距離前進',
        edgeKind: 'distant_route',
        edgeNote: '雷蹄渡口到龍雷風眼需沿帶電溪線穿過風牆外圍，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'thunderhoof_matriarch', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'thunderhoof_boar', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'stormwing_eagle', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[蹄]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '雷蹄渡口的蹄坑若同時旋轉，雷獸餘威可能喚來獵食者。',
      treasure: '最深蹄印底部偶爾沉著被電流磨圓的石珠。',
      spirit: '雷蹄渡口保存著巨獸踏水時留下的沉重記憶。',
    },
  },

thundersteppe_dragonstorm_eye: {
    id: 'thundersteppe_dragonstorm_eye',
    name: '龍雷風眼',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_dragonstorm_eye.png',
    imagePrompt: '龍雷風眼 in thundersteppe, circular storm eye over prairie, dragon-shaped lightning, spiraling grass and black clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '龍雷風眼是一片反常安靜的圓形草地，四周風暴像牆一樣旋轉，中央卻只有細雨垂直落下。草葉全朝同一方向彎曲，地面焦痕勾勒出巨大爪印，雲層深處偶爾浮現龍形閃電。南側雷蹄渡口溪線仍在風牆外閃爍，但風眼這端雷牆收縮，需由渡口電流溪線進入。這裡是雷鳴草原最終事件前的核心地標，隊伍可在此解讀風暴、追蹤雷獸或準備挑戰世界王火坑。任何大聲咒語、錯誤祭品或過量金屬都會讓風眼縮小，迫使玩家在越來越近的雷牆中快速決定。若能保持節奏與隊形，風眼會短暫露出通往火坑的安全裂縫。風眼邊緣還殘留許多半熔化的旗杆，顯示先前挑戰者曾在此分配位置、測試雷牆節奏，並把撤退標記留給後續隊伍。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_stormglass_outcrop',
        description: '西返時玻岩脈動會穿過風牆外緣與黑玻裂架，才回到風暴玻岩，雷牆收縮時必須停步等待',
        edgeKind: 'distant_route',
        edgeNote: '龍雷風眼西返風暴玻岩需穿過風牆與黑玻裂架，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'thundersteppe_worldboss_crater', description: '風眼裂縫通往世界王火坑' },
    ],
    monsters: [
      { monsterId: 'dragonstorm_avatar', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'stormwing_eagle', maxCount: 2, respawnSeconds: 130 },
    ],
    mapSymbol: '[眼]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '龍雷風眼的雨若忽然橫飛，深處風暴意志已經注意到隊伍。',
      treasure: '爪形焦痕內可找到少量風暴玻砂。',
      spirit: '龍雷風眼記得每次草原與天空互相撕開的中心點。',
    },
  },

thundersteppe_worldboss_crater: {
    id: 'thundersteppe_worldboss_crater',
    name: '世界王火坑',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_worldboss_crater.png',
    imagePrompt: '世界王火坑 in thundersteppe, massive lightning crater for world boss encounter, scorched prairie rim, storm dragon clouds and molten glass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '世界王火坑位於雷鳴草原最深處，整座坑緣被熔成黑藍色玻璃，雨水落下時先變成白霧，再沿著內壁流進仍在發光的裂縫。火坑中央沒有火，只有像心跳一樣明滅的雷核，每一次亮起都會讓遠方引雷柱林、雷鼓石圈與雷鷹巢峰同時回應。這裡是區域大型事件與世界王遭遇場，玩家需要先處理風眼節奏、渡口電流與營地支援，才能在坑邊站穩。若戰鬥拖太久，雷核會召回草原上的野獸、空中獵手與風暴龍影，迫使隊伍在輸出、走位、解場與撤退路線之間做出明確分工。火坑不只考驗等級，也考驗玩家是否真正讀懂整片草原留下的預警。',
    exits: [{ direction: 'west', targetRoomId: 'thundersteppe_dragonstorm_eye', description: '風眼裂縫回到龍雷風眼' }],
    monsters: [
      { monsterId: 'dragonstorm_avatar', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'stormwing_eagle', maxCount: 3, respawnSeconds: 130 },
      { monsterId: 'stormpack_wolf', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '世界王火坑的雷核若連跳三次，下一波召喚會從多個方向同時抵達。',
      treasure: '坑緣冷卻玻璃內可能封著雷核碎屑。',
      spirit: '世界王火坑記得草原把所有怒雷集中於一點的時刻。',
    },
  },

glass_dunes_sun_gate: {
    id: 'glass_dunes_sun_gate',
    name: '日照玻門',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_sun_gate.png',
    imagePrompt: '日照玻門 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '日照玻門位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'east', targetRoomId: 'glass_dunes_mirror_slope', description: '玻砂路延向鏡坡' },
      { direction: 'south', targetRoomId: 'glass_dunes_buried_caravan', description: '半埋車轍通往商隊殘骸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glass_sand_skink', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '日照玻門的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '日照玻門的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '日照玻門保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_mirror_slope: {
    id: 'glass_dunes_mirror_slope',
    name: '鏡面沙坡',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_mirror_slope.png',
    imagePrompt: '鏡面沙坡 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '鏡面沙坡位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_sun_gate', description: '反光坡面回到日照玻門' },
      { direction: 'east', targetRoomId: 'glass_dunes_shard_claim', description: '尖碎玻片指向碎晶採區' },
      { direction: 'north', targetRoomId: 'glass_dunes_singing_ridge', description: '風聲爬上鳴砂脊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glass_sand_skink', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'mirrorsand_stalker', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[坡]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鏡面沙坡的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '鏡面沙坡的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '鏡面沙坡保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_shard_claim: {
    id: 'glass_dunes_shard_claim',
    name: '碎晶採區',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_shard_claim.png',
    imagePrompt: '碎晶採區 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '碎晶採區位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_mirror_slope', description: '鏡坡回到西側' },
      { direction: 'east', targetRoomId: 'glass_dunes_vein_gallery', description: '採掘繩標進入琉璃礦廊' },
      { direction: 'south', targetRoomId: 'glass_dunes_relic_pit', description: '塌砂邊緣通往遺物坑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'shardback_scarab', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[採]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '碎晶採區的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '碎晶採區的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '碎晶採區保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_singing_ridge: {
    id: 'glass_dunes_singing_ridge',
    name: '鳴砂脊',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_singing_ridge.png',
    imagePrompt: '鳴砂脊 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '鳴砂脊位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'south', targetRoomId: 'glass_dunes_mirror_slope', description: '坡音落回鏡面沙坡', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'glass_dunes_herb_shelf', description: '東側耐旱草線通往耐旱藥棚' },
    ],
    monsters: [
      { monsterId: 'mirage_wraith', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[鳴]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '鳴砂脊的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '鳴砂脊的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '鳴砂脊保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_buried_caravan: {
    id: 'glass_dunes_buried_caravan',
    name: '半埋商隊',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_buried_caravan.png',
    imagePrompt: '半埋商隊 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '半埋商隊位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_sun_gate', description: '車轍回到日照玻門', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'glass_dunes_water_pocket', description: '破水囊路通往暗水袋' },
      { direction: 'south', targetRoomId: 'glass_dunes_saltwind_cut', description: '鹽風裂口通往切谷', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'mirrorsand_stalker', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'glass_sand_skink', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[車]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '半埋商隊的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '半埋商隊的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '半埋商隊保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_vein_gallery: {
    id: 'glass_dunes_vein_gallery',
    name: '琉璃礦廊',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_vein_gallery.png',
    imagePrompt: '琉璃礦廊 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '琉璃礦廊位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_shard_claim', description: '礦脈回到碎晶採區' },
      { direction: 'east', targetRoomId: 'glass_dunes_crystal_golem_yard', description: '重腳印通往晶魔像場', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_prism_arch',
        description: '北側礦光要先沿琉璃礦脈爬過折射廊道，再穿出高砂脊抵達稜鏡拱，途中反光會遮蔽直路',
        edgeKind: 'distant_route',
        edgeNote: '琉璃礦廊到稜鏡拱需沿礦脈高差繞行，不是相鄰平面一格。',
      },
    ],
    monsters: [
      { monsterId: 'shardback_scarab', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'prism_golem_warden', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[礦]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '琉璃礦廊的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '琉璃礦廊的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '琉璃礦廊保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_herb_shelf: {
    id: 'glass_dunes_herb_shelf',
    name: '耐旱藥棚',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_herb_shelf.png',
    imagePrompt: '耐旱藥棚 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '耐旱藥棚位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_singing_ridge',
        description: '西側耐旱草線回到鳴砂脊',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_obsidian_well',
        description: '東側藥棚背後的遮陽繩標先穿過乾根棚架，才會抵達黑曜井，井口黑影在遠處閃動',
        edgeKind: 'distant_route',
        edgeNote: '耐旱藥棚到黑曜井被棚架與乾根斜坡隔開，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_relic_pit',
        description: '南側根鬚坡要穿過鬆動玻砂與塌陷邊緣後，才會落到遺物坑，碎陶片標示安全落腳點',
        edgeKind: 'distant_route',
        edgeNote: '耐旱藥棚到遺物坑有塌坡與高低差，不是相鄰平面一格。',
      },
    ],
    monsters: [
      { monsterId: 'glass_sand_skink', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'mirage_wraith', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[藥]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '耐旱藥棚的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '耐旱藥棚的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '耐旱藥棚保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_water_pocket: {
    id: 'glass_dunes_water_pocket',
    name: '暗水袋',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_water_pocket.png',
    imagePrompt: '暗水袋 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '暗水袋位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_buried_caravan', description: '破囊路回到半埋商隊' },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_beast_scrape',
        description: '東側濕爪痕先繞過暗水袋邊緣的軟砂與破水囊，才接到獸刮地，地面會逐漸變硬',
        edgeKind: 'distant_route',
        edgeNote: '暗水袋到獸刮地需要避開軟砂水窪，距離長於相鄰格。',
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_saltwind_cut',
        description: '南側細水線沿玻砂裂縫下切，穿過鹽霧與斜坡後才落入鹽風切谷，水聲會被熱風吞沒',
        edgeKind: 'distant_route',
        edgeNote: '暗水袋到鹽風切谷有下切裂谷與鹽霧坡道，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'glass_sand_skink', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'mirrorsand_stalker', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[水]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '暗水袋的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '暗水袋的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '暗水袋保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_beast_scrape: {
    id: 'glass_dunes_beast_scrape',
    name: '獸刮地',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_beast_scrape.png',
    imagePrompt: '獸刮地 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '獸刮地位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_water_pocket',
        description: '西返時需沿濕爪痕穿過硬化玻砂與軟砂水窪，才回到暗水袋，水光會在遠處晃動',
        edgeKind: 'distant_route',
        edgeNote: '獸刮地西返暗水袋要穿過硬砂與軟砂交界，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_relic_pit',
        description: '東側碎骨路繞過巨獸磨爪石與塌砂凹地後，才會抵達遺物坑，碎骨會指向安全邊線',
        edgeKind: 'distant_route',
        edgeNote: '獸刮地到遺物坑被磨爪石與凹地隔開，距離長於相鄰格。',
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_glassstorm_basin',
        description: '南側刮痕一路下滑到風暴盆地外緣，中途要避開旋起的玻砂刃片，不能直線穿越',
        edgeKind: 'distant_route',
        edgeNote: '獸刮地到玻暴盆地需沿刮痕坡道下行，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'mirrorsand_stalker', maxCount: 3, respawnSeconds: 130 },
      { monsterId: 'glass_sand_skink', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[刮]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '獸刮地的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '獸刮地的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '獸刮地保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_relic_pit: {
    id: 'glass_dunes_relic_pit',
    name: '遺物坑',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_relic_pit.png',
    imagePrompt: '遺物坑 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '遺物坑位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_shard_claim', description: '塌砂坡回到碎晶採區', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_beast_scrape',
        description: '西返時碎骨路會先繞過遺物坑崩邊與獸痕凹地，才接回獸刮地，腳下玻片容易滑動',
        edgeKind: 'distant_route',
        edgeNote: '遺物坑西返獸刮地需繞過坑緣與獸痕凹地，不是相鄰格。',
      },
      { direction: 'east', targetRoomId: 'glass_dunes_mirage_bazaar', description: '幻影旗影指向海市集' },
    ],
    monsters: [
      { monsterId: 'shardback_scarab', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'mirage_wraith', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[遺]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '遺物坑的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '遺物坑的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '遺物坑保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_mirage_bazaar: {
    id: 'glass_dunes_mirage_bazaar',
    name: '海市集影',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_mirage_bazaar.png',
    imagePrompt: '海市集影 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '海市集影位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_relic_pit', description: '幻影散回遺物坑' },
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_obsidian_well',
        description: '北側黑影水光會被海市蜃樓拉長，必須沿倒影標記繞過假攤棚，才會找到黑曜井',
        edgeKind: 'distant_route',
        edgeNote: '海市集影到黑曜井有幻影攤棚與倒影路標，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_buried_palace_door',
        description: '東側破旗線穿過幻影市集邊緣與半埋石柱後，才會抵達埋宮門，旗影會干擾方向感',
        edgeKind: 'distant_route',
        edgeNote: '海市集影到埋宮門被幻影市集與半埋石柱隔開，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'mirage_wraith', maxCount: 3, respawnSeconds: 150 },
    ],
    mapSymbol: '[市]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '海市集影的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '海市集影的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '海市集影保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_prism_arch: {
    id: 'glass_dunes_prism_arch',
    name: '稜鏡拱',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_prism_arch.png',
    imagePrompt: '稜鏡拱 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '稜鏡拱位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_herb_shelf', description: '西側七色坡回到耐旱藥棚' },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_vein_gallery',
        description: '南側拱影要沿折射礦光下降，繞過高砂脊與碎玻階後，才落回琉璃礦廊',
        edgeKind: 'distant_route',
        edgeNote: '稜鏡拱南返琉璃礦廊需要下行折射廊道，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'glass_dunes_crystal_golem_yard', description: '東側七色反光通往晶魔像場' },
    ],
    monsters: [
      { monsterId: 'prism_golem_warden', maxCount: 1, respawnSeconds: 190 },
      { monsterId: 'mirage_wraith', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[拱]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '稜鏡拱的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '稜鏡拱的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '稜鏡拱保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_obsidian_well: {
    id: 'glass_dunes_obsidian_well',
    name: '黑曜井',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_obsidian_well.png',
    imagePrompt: '黑曜井 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '黑曜井位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_herb_shelf',
        description: '西返時井繩會帶路穿過乾根棚架與遮陽繩標，才回到耐旱藥棚，黑影逐漸被草色取代',
        edgeKind: 'distant_route',
        edgeNote: '黑曜井西返耐旱藥棚需穿過棚架與乾根坡，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_mirage_bazaar',
        description: '南側黑影水光要穿過數段假井影與幻影攤棚，才會回到海市集影，錯看倒影會繞遠',
        edgeKind: 'distant_route',
        edgeNote: '黑曜井到海市集影受假井影與幻影攤棚干擾，不是相鄰格。',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_solar_forge',
        description: '東側井壁熱脈沿黑曜裂縫延伸，需繞過燙裂井台後才到日輪熔臺，熱浪會逼人慢行',
        edgeKind: 'distant_route',
        edgeNote: '黑曜井到日輪熔臺需沿熱脈裂縫繞行，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'mirage_wraith', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'solar_forge_elemental', maxCount: 1, respawnSeconds: 200 },
    ],
    mapSymbol: '[井]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '黑曜井的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '黑曜井的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '黑曜井保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_glassstorm_basin: {
    id: 'glass_dunes_glassstorm_basin',
    name: '玻暴盆地',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_glassstorm_basin.png',
    imagePrompt: '玻暴盆地 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '玻暴盆地位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_beast_scrape',
        description: '北返時刮痕坡會逆著玻砂風暴上升，穿過刃片旋流後才回到獸刮地，腳印很快被掩埋',
        edgeKind: 'distant_route',
        edgeNote: '玻暴盆地北返獸刮地需要逆風上坡，屬於長路徑。',
      },
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_fill_3_19',
        description: '西側鹽風坡接往沙丘通道',
      },
      { direction: 'east', targetRoomId: 'glass_dunes_lost_dynasty_altar', description: '風暴裂線指向失朝祭壇', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glass_sand_skink', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'solar_forge_elemental', maxCount: 1, respawnSeconds: 200 },
    ],
    mapSymbol: '[暴]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '玻暴盆地的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '玻暴盆地的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '玻暴盆地保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_saltwind_cut: {
    id: 'glass_dunes_saltwind_cut',
    name: '鹽風切谷',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_saltwind_cut.png',
    imagePrompt: '鹽風切谷 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '鹽風切谷位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_buried_caravan', description: '裂谷北返半埋商隊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_fill_3_19',
        description: '東側碎玻窄脊通往沙丘通道',
      },
    ],
    monsters: [
      { monsterId: 'mirrorsand_stalker', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'shardback_scarab', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[鹽]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '鹽風切谷的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '鹽風切谷的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '鹽風切谷保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_crystal_golem_yard: {
    id: 'glass_dunes_crystal_golem_yard',
    name: '晶魔像場',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_crystal_golem_yard.png',
    imagePrompt: '晶魔像場 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '晶魔像場位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_prism_arch', description: '西側七色反光回到稜鏡拱' },
      { direction: 'east', targetRoomId: 'glass_dunes_solar_forge', description: '東側熱光通往日輪熔臺' },
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_buried_palace_door',
        description: '北側碎石階繞過晶魔像足印後通往埋宮門',
        edgeKind: 'distant_route',
        edgeNote: '晶魔像場到埋宮門需要沿碎石階斜向上行，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'prism_golem_warden', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'shardback_scarab', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '晶魔像場的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '晶魔像場的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '晶魔像場保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_solar_forge: {
    id: 'glass_dunes_solar_forge',
    name: '日輪熔臺',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_solar_forge.png',
    imagePrompt: '日輪熔臺 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '日輪熔臺位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_crystal_golem_yard', description: '西側熱光回到晶魔像場' },
      { direction: 'north', targetRoomId: 'glass_dunes_buried_palace_door', description: '北側熔臺光線通往埋宮門' },
    ],
    monsters: [
      { monsterId: 'solar_forge_elemental', maxCount: 2, respawnSeconds: 200 },
      { monsterId: 'prism_golem_warden', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[熔]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '日輪熔臺的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '日輪熔臺的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '日輪熔臺保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_buried_palace_door: {
    id: 'glass_dunes_buried_palace_door',
    name: '埋宮門',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_buried_palace_door.png',
    imagePrompt: '埋宮門 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '埋宮門位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。北側碎石階可看見晶魔像場，但宮門這端被滑落玻砂封住，需由魔像場側階梯接近。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_mirage_bazaar',
        description: '西返時破旗線要穿過半埋石柱與幻影市集外緣，才回到海市集影，旗影會不斷重疊',
        edgeKind: 'distant_route',
        edgeNote: '埋宮門西返海市集影需穿過石柱群與幻影市集，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_sunfire_crater',
        description: '東側宮門裂縫會沿埋宮外牆繞過坍落玻砂，才抵達日火坑，坑緣熱浪會逼人貼牆前進',
        edgeKind: 'distant_route',
        edgeNote: '埋宮門到日火坑需沿坍落宮牆繞行，不是相鄰格。',
      },
      { direction: 'south', targetRoomId: 'glass_dunes_solar_forge', description: '南側熔臺光線回到日輪熔臺' },
      { direction: 'north', targetRoomId: 'glass_dunes_lost_dynasty_altar', description: '北側王朝碎階通往失朝祭壇' },
    ],
    monsters: [
      { monsterId: 'lost_dynasty_sentinel', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'prism_golem_warden', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[宮]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '埋宮門的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '埋宮門的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '埋宮門保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_lost_dynasty_altar: {
    id: 'glass_dunes_lost_dynasty_altar',
    name: '失朝祭壇',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_lost_dynasty_altar.png',
    imagePrompt: '失朝祭壇 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '失朝祭壇位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。北側祭階可看見日輪熔臺，但祭壇這端被熱光折射成假階，需由熔臺光線下來。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_glassstorm_basin', description: '風暴裂線回到玻暴盆地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'glass_dunes_buried_palace_door', description: '南側王朝碎階回到埋宮門' },
      { direction: 'east', targetRoomId: 'glass_dunes_sunfire_crater', description: '祭壇光脈通往日火坑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'lost_dynasty_sentinel', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'solar_forge_elemental', maxCount: 1, respawnSeconds: 200 },
    ],
    mapSymbol: '[壇]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '失朝祭壇的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '失朝祭壇的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '失朝祭壇保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

glass_dunes_sunfire_crater: {
    id: 'glass_dunes_sunfire_crater',
    name: '日火坑',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_sunfire_crater.png',
    imagePrompt: '日火坑 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '日火坑位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。南側祭壇光脈仍可辨認，但坑緣玻砂持續坍落，需由失朝祭壇方向踏著光脈進入。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_buried_palace_door',
        description: '西返時需沿日火坑邊緣逆著熱浪貼牆繞行，穿過坍落玻砂後才回到埋宮門裂縫',
        edgeKind: 'distant_route',
        edgeNote: '日火坑西返埋宮門需繞過坑緣熱浪與坍落玻砂，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'sunfire_glasswyrm', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'lost_dynasty_sentinel', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'solar_forge_elemental', maxCount: 2, respawnSeconds: 200 },
    ],
    mapSymbol: '[火]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '日火坑的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '日火坑的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '日火坑保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

underground_city_gate_lift: {
    id: 'underground_city_gate_lift',
    name: '城邦升降門',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_gate_lift.png',
    imagePrompt: '城邦升降門 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '城邦升降門位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'east', targetRoomId: 'underground_city_arrival_plaza', description: '升降橋通往抵達廣場' },
      { direction: 'north', targetRoomId: 'underground_city_lower_stairs', description: '拱門通往下層螺旋街' },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '城邦升降門的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '城邦升降門的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '城邦升降門記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_arrival_plaza: {
    id: 'underground_city_arrival_plaza',
    name: '抵達廣場',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_arrival_plaza.png',
    imagePrompt: '抵達廣場 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '抵達廣場位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_gate_lift', description: '升降橋回到城邦升降門' },
      { direction: 'east', targetRoomId: 'underground_city_portal_hall', description: '藍光拱道通往傳送廳' },
      { direction: 'south', targetRoomId: 'underground_city_market_terrace', description: '石階下到市場露臺' },
    ],
    mapSymbol: '[場]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '抵達廣場的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '抵達廣場的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '抵達廣場記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },
};
