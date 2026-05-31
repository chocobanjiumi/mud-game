import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_009: Record<string, RoomDef> = {
thundersteppe_split_totem: {
    id: 'thundersteppe_split_totem',
    name: '裂木圖騰',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_split_totem.png',
    imagePrompt: '裂木圖騰 in thundersteppe, lightning-split wooden totem bound with bronze rings, storm grass and nomad offerings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '裂木圖騰像一棵被劈開後仍站立的黑樹，內側木紋閃著焦金色，銅環把兩半軀幹勉強束在一起。圖騰腳下堆滿羽毛、獸牙、破箭與小陶杯，顯示游牧者仍把這裡當成詢問風暴意志的地方。旅人若繞行圖騰三圈，可以聽見不同方向傳來的雷聲回覆；但若拔走祭品，附近雷鷹與狼群會被同一股怒意驅動。這裡也是北線與中線交會處，能通往棲柱、營地與引雷柱林，適合做為隊伍重新決定路線的高風險節點',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_eagle_roost', description: '焦木影子回到雷鷹棲柱' },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_nomad_camp',
        description: '南返時繩結路沿濕草圈與避雷樁外緣下行，才回到游牧營地，帳棚煙柱會逐漸變清楚',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_lightning_rod_field',
        description: '東側銅環反光會先穿過祭品石與焦草斜坡，才接到引雷柱林，雷弧聲會越來越密',
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
      '帶電骨原鋪滿被風雨磨白的長骨，許多骨骸仍保持奔跑姿勢，像是在最後一刻被整片天空按倒。靜電沿著肋骨和角鞘滑動，旅人靠近時能聞到焦草與濕泥混在一起的味道。這裡是野獸群躲避風暴失敗後留下的警示，也吸引狼群與雷鷹前來搜尋容易撕開的屍塊。骨堆之間藏有舊戰矛、破碎鞍具與少量被雷煉硬的骨片；但每一次翻動都可能讓積蓄電荷找到新的出口，讓整片骨原像活物般發出尖銳顫音',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_herd_plain', description: '骨線回到奔獸平原' },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_boar_run',
        description: '南側碎骨坡沿帶電骨堆下滑，繞過白骨脊與泥槽缺口後才落向野豬衝道',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_wolf_scarp',
        description: '東側狼爪痕穿過靜電骨堆與斜草邊線後，才會抵達狼群崖坡，低嚎會被雷聲拉長',
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
      '野豬衝道是一條被獠牙與厚蹄硬生生犁出的泥路，兩側灌木全被撞斷，枝葉上沾著濕泥和深色血痕。雷聲會讓草原野豬變得格外暴躁，牠們沿著這條低地來回衝撞，把任何擋路物都當成挑戰。東側碎骨坡可看見帶電骨原，但泥槽這端被衝斷，需由骨原高處落下。旅人可以順著衝道快速繞開中線平原，也能在泥壁上觀察最近的獸群規模；但站位錯誤時，隊伍會在狹窄泥槽裡承受連續衝鋒。老獵人把破盾牌插在彎道外側，提醒來者轉角前先聽地面，不要只聽天空',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_rolling_gate', description: '泥痕回到雷原入口' },
      { direction: 'south', targetRoomId: 'thundersteppe_rain_shadow_gully', description: '低地水線落向雨影溝' },
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
      '天火台地高出周圍草原一截，邊緣岩層被雷火劈成玻璃般的黑亮裂紋，雨水落上去會瞬間蒸成白霧。從這裡能看見游牧營地的煙柱、南側雷鼓石圈以及更遠處的風暴玻岩。台地中央有一圈舊灰，據說是雷獸曾經降落並把草根燒穿的痕跡。旅人若在雷暴間隙攀上台地，可以掌握草原大半路線；若在雲底壓低時逗留，整座高地會像巨大的引雷器，把天空火線直接拉到腳下',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_nomad_camp', description: '乾草坡回到游牧營地' },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_stormglass_outcrop',
        description: '東側黑亮裂紋沿台地邊緣繞過引雷裸岩，才會抵達風暴玻岩，雨水在裂面上一路發白',
      },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_drum_circle',
        description: '南側鼓點要沿台地背風坡下降，穿過舊灰圈與祭旗殘布後才會抵達雷鼓石圈',
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
      '風祭小祠藏在水洼北端的蘆草後方，幾塊刻紋石片圍住矮小木架，架上繫滿褪色布條與鳥羽。每當風向改變，布條會先後抬起，像有人用無聲語言指出草原上可以行走的縫隙。祠旁沒有守衛，只有被雨水洗亮的供杯和幾枚壓住紙符的小石頭。旅人若在此獻上羽毛或乾草，可獲得短暫順風與避雷提示；若粗暴翻動祭物，北面的引雷柱林會傳來尖銳共鳴，讓雷鷹誤以為有人挑釁巢域',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_thunder_pool', description: '蘆草水線回到雷雨水洼' },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_lightning_rod_field',
        description: '東側布條路穿過蘆草缺口與濕石祭線後，才會進入引雷柱林，柱腳雷弧會逐漸變亮',
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
      '引雷柱林由數十根石柱與青銅長釘組成，柱身刻著粗糙刻度，用來記錄每一季雷暴落點。雷光擊中其中一根柱子後，會沿地下濕根傳到其他柱腳，形成短暫而危險的藍色蛛網。北側布條路通向風祭小祠，但柱林這端雷弧封住回程，需從小祠順風進入。這裡既是游牧者研究天候的地標，也是雷鳴草原最容易誤傷旅人的區域。懂行的人會沿著燒焦草圈外緣移動，藉柱影避開空中視線；不懂的人若站在兩根柱子之間，很可能在下一次雷鳴前就被靜電抬起頭髮，成為整片柱林的導線。柱腳附近還留有許多焦黑小旗，代表曾有隊伍在此測量風暴路徑，旅人可藉旗面破損方向推測安全出口與下一波雷擊間隔',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_split_totem',
        description: '西返時銅環反光穿過焦草斜坡與祭品石後，才回到裂木圖騰，圖騰裂光會在雨裡閃動',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_eagle_nest_peak',
        description: '東側柱影沿高風脊線拉長，需繞過多根青銅引雷釘後，才會抵達雷鷹巢峰下方',
      },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_thunderhoof_crossing',
        description: '南側焦草缺口沿地下雷弧下切，穿過濕根與燒焦草圈後才接到雷蹄渡口',
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
      '狼群崖坡不高，卻足以讓草原風在坡面形成迴旋，掩蓋多數腳步聲。坡底有幾處半塌洞穴，洞口散落白骨、濕毛與被拖行的草束，顯示狼群常把獵物趕到這裡再分食。南側能看見雨影溝，但崖坡小徑塌成單向滑坡，需由雨影溝側坡升上來。雷鳴時狼嚎會被拉長成像人的呼喊，讓初來者誤判數量與方向。若旅人能找到主狼留下的爪印，便可推測牠們下一次巡獵會繞向渡口還是衝道',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_charged_bonefield',
        description: '西返時狼爪痕沿斜草邊線繞過半塌洞穴，才回到帶電骨原，骨堆靜電會先在遠處作響',
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
      { direction: 'north', targetRoomId: 'thundersteppe_boar_run', description: '泥槽回到野豬衝道' },
      { direction: 'east', targetRoomId: 'thundersteppe_wolf_scarp', description: '側坡升向狼群崖坡' },
      { direction: 'south', targetRoomId: 'thundersteppe_drum_circle', description: '低聲鼓點通往雷鼓石圈' },
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
      '雷鼓石圈由十二塊中空巨石圍成，雨水打在石面會發出低沉鼓聲，與遠處雷鳴互相呼應。游牧祭司曾在這裡用節拍引導獸群遷徙，也用錯拍警告營地準備迎戰。西側低溝能聽見雨影溝滴水，但石圈端鼓聲會干擾方向，需由雨影溝低聲鼓點進入。石圈中央鋪著被踩實的灰泥，幾面舊皮鼓倒扣在防雨坑裡，鼓皮仍殘留淡淡電光。旅人若按正確節奏敲擊，可能暫時干擾狼群與野豬的巡行；若敲錯，整座石圈會把聲音傳向風暴玻岩，召來高處雷鷹與更深處的龍雷回聲',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'thundersteppe_nomad_camp',
        description: '北返時鼓聲沿低草坡與祭旗殘布回傳，穿過泥帶後才看見游牧營地的低矮皮帳',
      },
      { direction: 'west', targetRoomId: 'thundersteppe_wolf_scarp', description: '西側草線回到狼群崖坡' },
      { direction: 'east', targetRoomId: 'thundersteppe_thunderhoof_crossing', description: '東側溪岸草路通往雷蹄渡口' },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_stormglass_outcrop',
        description: '南側鼓聲沿低草坡與黑玻反光繞向風暴玻岩',
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
      '風暴玻岩像一片從草原脊背長出的黑色浪花，表面由無數雷擊熔出的玻璃層疊而成，雨水滑過時會反射出破碎天空。岩縫裡能找到細小發光砂粒，也能聽見地下電流沿著濕根游動的嗡鳴。南側回聲可辨認雷鼓石圈，但玻岩低處裂邊太滑，需由石圈回聲引路上來。這裡連接天火台地與更深處的龍雷風眼，是高階隊伍辨認最終事件路線的重要地標。旅人若在岩面放置金屬物，能短暫看見即將落雷的位置；但玻岩也會把遠處龍息般的風暴聲放大，讓膽怯坐騎直接掙脫繩索。岩面低處刻著幾道舊箭頭，指向能避開玻裂邊緣的窄路，也暗示這裡曾是前往火坑前最後一次重整隊形的位置',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_skyfire_mesa',
        description: '西返時黑亮裂紋沿裸岩與濕滑台地邊緣回繞，才會登上天火台地，雨水會在腳邊蒸白',
      },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_dragonstorm_eye',
        description: '東側玻岩脈動穿過多層黑玻裂架與風牆外緣後，才會指向龍雷風眼，遠處龍形閃電會短暫現身',
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
      '雷鷹巢峰是棲柱群最高的一截，峰頂被巨巢覆蓋，枯枝、骨架與亮羽在狂風中互相摩擦，發出像刀刃刮過金屬的聲音。從這裡向下看，雷鳴草原的路線像濕皮革上的刻線，入口、圖騰、柱林與渡口都清楚可見。雷鷹把巢峰視為天空領地，任何靠近者都必須承受俯衝與落雷同時壓下的威脅。若旅人能在不毀巢的情況下取回任務物，游牧營地會承認隊伍懂得尊重草原獵手，而不是只會掠奪',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_eagle_roost', description: '石柱脊線回到雷鷹棲柱' },
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_lightning_rod_field',
        description: '西側高空柱影沿巢峰脊線下落，繞過雷鷹巢枝與青銅引雷釘後才回到引雷柱林',
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
      },
      { direction: 'west', targetRoomId: 'thundersteppe_drum_circle', description: '西側溪岸草路回到雷鼓石圈' },
      {
        direction: 'east',
        targetRoomId: 'thundersteppe_dragonstorm_eye',
        description: '東側電流溪線穿過渡口深蹄印與風牆外圍後，才會抵達龍雷風眼，隊伍必須拉開距離前進',
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
      '龍雷風眼是一片反常安靜的圓形草地，四周風暴像牆一樣旋轉，中央卻只有細雨垂直落下。草葉全朝同一方向彎曲，地面焦痕勾勒出巨大爪印，雲層深處偶爾浮現龍形閃電。南側雷蹄渡口溪線仍在風牆外閃爍，但風眼這端雷牆收縮，需由渡口電流溪線進入。這裡是雷鳴草原最終事件前的核心地標，隊伍可在此解讀風暴、追蹤雷獸或準備挑戰世界王火坑。任何大聲咒語、錯誤祭品或過量金屬都會讓風眼縮小，迫使旅人在越來越近的雷牆中快速決定。若能保持節奏與隊形，風眼會短暫露出通往火坑的安全裂縫。風眼邊緣還殘留許多半熔化的旗杆，顯示先前挑戰者曾在此分配位置、測試雷牆節奏，並把撤退標記留給後續隊伍',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'thundersteppe_stormglass_outcrop',
        description: '西返時玻岩脈動會穿過風牆外緣與黑玻裂架，才回到風暴玻岩，雷牆收縮時必須停步等待',
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
      '世界王火坑位於雷鳴草原最深處，整座坑緣被熔成黑藍色玻璃，雨水落下時先變成白霧，再沿著內壁流進仍在發光的裂縫。火坑中央沒有火，只有像心跳一樣明滅的雷核，每一次亮起都會讓遠方引雷柱林、雷鼓石圈與雷鷹巢峰同時回應。這裡是區域大型事件與世界王遭遇場，旅人需要先處理風眼節奏、渡口電流與營地支援，才能在坑邊站穩。若戰鬥拖太久，雷核會召回草原上的野獸、空中獵手與風暴龍影，迫使隊伍在輸出、走位、解場與撤退路線之間做出明確分工。火坑不只考驗等級，也考驗旅人是否真正讀懂整片草原留下的預警',
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
      '日照玻門像一片被烈日豎起的透明城閘，玻砂沿門腳堆成白亮斜坡，西側日照西門的舊路只剩半截旗影，東面鏡面沙坡反出刺眼銀光，南方半埋商隊的車桿在熱浪裡忽遠忽近。門柱上仍有失落王朝的火紋，裂縫中凝著金色砂珠，風過時會發出細薄鈴聲。地面繩標被砂掩住一半，仍能辨出進入沙丘腹地的主路，也暗示錯踏亮面便會滑向流砂。',
    exits: [
      { direction: 'east', targetRoomId: 'glass_dunes_mirror_slope', description: '玻砂路延向鏡坡' },
      { direction: 'south', targetRoomId: 'glass_dunes_buried_caravan', description: '半埋車轍通往商隊殘骸' },
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
      '鏡面沙坡由大片平滑玻砂疊成，坡面映出破碎天空與遠處日照玻門，使方向在亮光中變得難以分辨。西側門影較穩，東面碎晶採區像一排鋸齒嵌在白沙裡，北方鳴砂脊傳來低沉嗡鳴。坡底散落斷裂繩環與磨亮的獸蹄痕，部分砂殼下有空洞回聲。薄風掃過時，地面反光會露出暗色裂線，提醒只有黯淡粗糙的砂帶能承住重量。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_sun_gate', description: '反光坡面回到日照玻門' },
      { direction: 'east', targetRoomId: 'glass_dunes_shard_claim', description: '尖碎玻片指向碎晶採區' },
      { direction: 'north', targetRoomId: 'glass_dunes_singing_ridge', description: '風聲爬上鳴砂脊' },
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
      '碎晶採區布滿半透明晶片，像被巨刃刮開的礦脈斜插在沙丘上。西面鏡面沙坡的光被晶簇切碎，東側琉璃礦廊露出幽藍礦線，南方遺物坑邊緣覆著被風翻出的陶片。幾處舊木樁綁著褪色布條，旁邊有淺坑、破篩與凝成珠狀的沙滴。晶片互相敲擊時會發出清脆聲響，聲音越密集處砂層越薄，隱約可見失落王朝開採後留下的斷脈。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_mirror_slope', description: '鏡坡回到西側' },
      { direction: 'east', targetRoomId: 'glass_dunes_vein_gallery', description: '採掘繩標進入琉璃礦廊' },
      { direction: 'south', targetRoomId: 'glass_dunes_relic_pit', description: '塌砂邊緣通往遺物坑' },
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
      '鳴砂脊高出周圍沙面，細玻砂在脊線上不停滑落，形成低而持續的嗡鳴。南側坡音落向鏡面沙坡，東面耐旱藥棚的乾草架在熱風中晃動，遠處碎晶採區的白光偶爾刺入視野。脊背有一串被砂磨平的木釘，標出曾經穩定的落腳線。每當風向轉急，砂音會從悶響變成尖聲，露出下方空腔與暗色裂縫，也把埋在沙中的古代銅鈴震得微微發亮。',
    exits: [
      { direction: 'south', targetRoomId: 'glass_dunes_mirror_slope', description: '坡音落回鏡面沙坡' },
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
      '半埋商隊橫倒在日照玻門南側，幾輛木輪車被透明砂殼吞到車軸，只剩旗桿、貨箱角與乾裂獸轅露在外面。北方門影仍可辨認，東側暗水袋的低窪處泛著冷暗光，南面鹽風切谷吹來白鹽細霧，西側西緣砂路留下紅岩石粉。散落貨牌上刻著失落王朝末期的稅印，玻砂包住破布與銅扣，像時間凝住的琥珀。車底陰影比周圍涼，卻也藏著滑動流砂的輕響。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_sun_gate', description: '車轍回到日照玻門' },
      { direction: 'east', targetRoomId: 'glass_dunes_water_pocket', description: '破水囊路通往暗水袋' },
      { direction: 'south', targetRoomId: 'glass_dunes_saltwind_cut', description: '鹽風裂口通往切谷' },
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
      '琉璃礦廊是一條被晶脈撐開的窄廊，透明砂壁裡浮著藍綠光絲，像乾涸河流凝在石中。西側碎晶採區傳來晶片碎響，東面晶魔像場的沉重足印斷續延伸，北方稜鏡拱把光折成七道細線投在廊頂。廊壁有舊鑿痕與熔黑符號，部分礦線仍帶溫度，靠近時能聞到灼沙味。地面鋪著粗砂與崩落晶屑，明暗交界處可分辨通路，也能看見被掩埋的王朝工程痕跡。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_shard_claim', description: '礦脈回到碎晶採區' },
      { direction: 'east', targetRoomId: 'glass_dunes_crystal_golem_yard', description: '重腳印通往晶魔像場' },
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_prism_arch',
        description: '北側礦光要先沿琉璃礦脈爬過折射廊道，再穿出高砂脊抵達稜鏡拱，途中反光會遮蔽直路',
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
      '耐旱藥棚搭在兩道低砂丘之間，乾草架、陶盆與遮光布被玻砂磨得發白，仍頑強護住幾叢灰綠藥草。西面鳴砂脊傳來低嗡聲，東側黑曜井的冷暗光壓住熱浪，南方遺物坑露出破碎石柱。棚腳用王朝舊磚墊高，磚縫裡積著細鹽與沙根，散出苦澀草味。風掀開布角時，能看見被標記的陶片、空水罐與細小灌渠，說明此處曾是沙丘邊緣少數能保存植物的地方。',
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
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_relic_pit',
        description: '南側根鬚坡要穿過鬆動玻砂與塌陷邊緣後，才會落到遺物坑，碎陶片標示安全落腳點',
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
      '暗水袋藏在兩道玻砂脊之間，低窪處覆著黑藍色濕砂，像沙海裡一片被陰影保存的冷光。西面半埋商隊的車轍斷在坡上，東側獸刮地的爪痕伸向乾砂，南方鹽風切谷送來刺鼻鹽味。水面不大，邊緣卻凝著厚厚礦殼，倒映出的天空比實際更暗。周圍有乾裂皮袋、碎陶濾片與細小獸蹄印，顯示這處水源長年被沙丘爭奪，也被古王朝留下的石圈小心遮護。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_buried_caravan', description: '破囊路回到半埋商隊' },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_beast_scrape',
        description: '東側濕爪痕先繞過暗水袋邊緣的軟砂與破水囊，才接到獸刮地，地面會逐漸變硬',
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_saltwind_cut',
        description: '南側細水線沿玻砂裂縫下切，穿過鹽霧與斜坡後才落入鹽風切谷，水聲會被熱風吞沒',
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
      '獸刮地的玻砂被巨大爪痕翻成弧形溝槽，砂粒在溝底堆出暗紅色陰影。西面暗水袋的潮氣被熱風撕散，東側遺物坑露出半截石柱，南方玻暴盆地翻起旋轉白沙。爪痕旁有破裂鱗片與被磨碎的晶礫，幾根繩標被硬生生拖斷，纏在低矮砂柱上。此地不像普通獸徑，更像某種守護物巡行後留下的警告；只要風聲忽然中斷，遠處砂面便會浮起新的長痕。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_water_pocket',
        description: '西返時需沿濕爪痕穿過硬化玻砂與軟砂水窪，才回到暗水袋，水光會在遠處晃動',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_relic_pit',
        description: '東側碎骨路繞過巨獸磨爪石與塌砂凹地後，才會抵達遺物坑，碎骨會指向安全邊線',
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_glassstorm_basin',
        description: '南側刮痕一路下滑到風暴盆地外緣，中途要避開旋起的玻砂刃片，不能直線穿越',
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
      '遺物坑像一只被風掏空的巨大陶碗，坑壁露出王朝磚紋、熔玻碎片與半埋銅環。北方碎晶採區的晶屑順坡滾入坑中，西側獸刮地傳來低沉刮砂聲，東面海市集影的假樓影在熱浪中漂浮。坑底有幾處被砂磨亮的石板，刻痕被日光填成金色細線，似乎曾經支撐某座小殿。碎陶與玻珠混在一起，風一吹便發出細密碰撞聲，讓埋藏物的位置在聲音裡若隱若現。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_shard_claim', description: '塌砂坡回到碎晶採區' },
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_beast_scrape',
        description: '西返時碎骨路會先繞過遺物坑崩邊與獸痕凹地，才接回獸刮地，腳下玻片容易滑動',
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
      '海市集影鋪在黑曜井南側的熱浪裡，遠看像一排彩棚與石拱，近處卻只剩半埋貨攤、碎鏡片與被砂掩住的銅秤。西面遺物坑的陶片在光中閃爍，北方井口投下冷黑圓影，東側埋宮門的門額從幻影後浮出。地面散著琉璃珠、斷旗與鹽化布料，風過時會把假人聲捲成短促回音。那些影子雖不可信，卻準確貼著昔日市集街線，讓沙下建築的輪廓若隱若現。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_relic_pit', description: '幻影散回遺物坑' },
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_obsidian_well',
        description: '北側黑影水光會被海市蜃樓拉長，必須沿倒影標記繞過假攤棚，才會找到黑曜井',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_buried_palace_door',
        description: '東側破旗線穿過幻影市集邊緣與半埋石柱後，才會抵達埋宮門，旗影會干擾方向感',
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
      '稜鏡拱由七片巨大的透明晶柱互相倚住，拱內光線被切成細長色帶，落在砂面像一排古老指針。西側耐旱藥棚的灰綠草影被染成淡紫，南方琉璃礦廊亮著藍綠礦脈，東面晶魔像場傳來沉重砂震。拱腳刻著王朝測日符號，部分符線被流砂磨斷，仍能對準遠處日輪熔臺。每當熱風穿過拱洞，色帶會短暫重合，照出被掩埋的石板縫與通往礦廊的低矮坡口。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_herb_shelf', description: '西側七色坡回到耐旱藥棚' },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_vein_gallery',
        description: '南側拱影要沿折射礦光下降，繞過高砂脊與碎玻階後，才落回琉璃礦廊',
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
      '黑曜井是一口由黑色玻岩砌成的深井，井壁冷得近乎潮濕，與周圍刺眼白砂形成強烈對比。西側耐旱藥棚的乾草味被井氣壓低，南方海市集影倒映在井口像破碎市街，東面日輪熔臺散來赤金光。井沿刻有水紋與日輪交纏的古符，繩槽已被磨成光滑弧線。偶爾有水珠從井壁滲出，落下很久才傳回微弱聲響，暗示地下仍有通向王宮水道的空洞。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_herb_shelf',
        description: '西返時井繩會帶路穿過乾根棚架與遮陽繩標，才回到耐旱藥棚，黑影逐漸被草色取代',
      },
      {
        direction: 'south',
        targetRoomId: 'glass_dunes_mirage_bazaar',
        description: '南側黑影水光要穿過數段假井影與幻影攤棚，才會回到海市集影，錯看倒影會繞遠',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_solar_forge',
        description: '東側井壁熱脈沿黑曜裂縫延伸，需繞過燙裂井台後才到日輪熔臺，熱浪會逼人慢行',
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
      '玻暴盆地低陷在沙丘中央，四周斜坡覆滿透明砂片，風一入盆便繞成旋渦，把碎光捲得像暴雨。北側獸刮地的爪痕在坡口中斷，西面碎玻窄脊蜿蜒貼著盆緣，東方失朝祭壇的高階在白塵後忽明忽暗。盆底有熔玻凝成的圓形紋路，像古代儀式留下的巨大印記。每陣風過，砂面會短暫露出被掩住的青銅釘與石槽，隨即又被明亮砂浪覆蓋。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_beast_scrape',
        description: '北返時刮痕坡會逆著玻砂風暴上升，穿過刃片旋流後才回到獸刮地，腳印很快被掩埋',
      },
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_fill_3_19',
        description: '西側鹽風坡接往沙丘通道',
      },
      { direction: 'east', targetRoomId: 'glass_dunes_lost_dynasty_altar', description: '風暴裂線指向失朝祭壇' },
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
      '鹽風切谷是一道白色風口，細鹽與玻砂沿谷壁橫向刮過，把岩面磨出一層霧亮外殼。北方半埋商隊的旗桿在谷口搖晃，東面碎玻窄脊只剩窄窄一線，谷底偶爾露出暗水袋滲出的濕痕。兩側砂壁像被刀切開，嵌著褐色古磚與破碎貝形玻片。風弱時可聽見遠處車輪殘架吱響，風強時鹽霧會遮住腳下裂縫，只留下繩標與斜插石片指向可踏之處。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_buried_caravan', description: '裂谷北返半埋商隊' },
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
      '晶魔像場是一片被踩實的玻砂廣場，四周散著巨大晶質關節、斷裂石掌與深陷足印。西面稜鏡拱投來七色光帶，東側日輪熔臺的赤光照亮砂塵，北方埋宮門的門額被半透明沙浪遮住。廣場中央有一圈熔玻圓痕，像魔像曾在此待命或充能，周圍石片刻著不完整的守衛誓文。風在空殼肢體間穿行時會發出低鳴，讓這片廢場仍像有沉睡重物在緩慢呼吸。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_prism_arch', description: '西側七色反光回到稜鏡拱' },
      { direction: 'east', targetRoomId: 'glass_dunes_solar_forge', description: '東側熱光通往日輪熔臺' },
      {
        direction: 'north',
        targetRoomId: 'glass_dunes_buried_palace_door',
        description: '北側碎石階繞過晶魔像足印後通往埋宮門',
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
      '日輪熔臺高築在埋宮門南側，熔黑石臺被赤金裂紋貫穿，中央圓槽仍積著發亮的玻砂。西面晶魔像場的巨大足印停在臺階下，北方埋宮門的陰影被火光拉成長線，遠處日火坑的熱浪沿符脈回應。臺面散有破鑄模、晶質鉗爪與熔成團的銅片，顯示此地曾為王朝鍛造魔像核心。光越強，臺側符文越清楚，日輪紋與水紋彼此纏繞，像在壓制地下仍未冷卻的熱源。',
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
      '埋宮門的上半截仍露在琉璃砂中，門額刻著被日火燒裂的王朝徽紋，兩旁石獸只剩肩背與碎角。西面海市集影的幻樓貼著熱浪漂移，東側日火坑灼出紅色煙線，南方日輪熔臺映亮門縫，北方失朝祭壇的斷階壓在砂脊後。門前玻砂堆成扇形，掩住大半石階，只有幾塊深色踏石尚未被吞沒。風從門縫裡吹出乾冷回聲，像地下宮道仍保存著久遠的空間。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_mirage_bazaar',
        description: '西返時破旗線要穿過半埋石柱與幻影市集外緣，才回到海市集影，旗影會不斷重疊',
      },
      {
        direction: 'east',
        targetRoomId: 'glass_dunes_sunfire_crater',
        description: '東側宮門裂縫會沿埋宮外牆繞過坍落玻砂，才抵達日火坑，坑緣熱浪會逼人貼牆前進',
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
      '失朝祭壇立在玻暴盆地東側的高砂臺上，斷階被熱光拉長，石面刻滿失落王朝的日輪與水紋。西面盆地的旋風把白砂吹上祭階，南方埋宮門的門額半沉在沙下，東側日火坑閃著灼紅光。祭壇中央裂開一道細縫，縫內凝著琥珀色玻珠與燒黑香灰。北側假階會在正午浮現，卻只是一片折射光；真正穩固的石階沿南側門影延伸，殘缺浮雕仍指向昔日王宮的中心軸線。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_glassstorm_basin', description: '風暴裂線回到玻暴盆地' },
      { direction: 'south', targetRoomId: 'glass_dunes_buried_palace_door', description: '南側王朝碎階回到埋宮門' },
      { direction: 'east', targetRoomId: 'glass_dunes_sunfire_crater', description: '祭壇光脈通往日火坑' },
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
      '日火坑是一枚燒穿沙丘的赤色圓坑，坑壁凝成黑紅玻殼，熱氣沿裂縫噴出，使遠處景物像浸在水中。西側埋宮門的石影被火光染暗，坑緣能望見失朝祭壇延來的斷裂光脈。坑底不見明火，只有深處脈動的紅光與偶爾炸開的砂泡。周圍散著熔化銅飾與碎石符片，部分符痕仍沿著王宮方向排列，顯示這裡曾是日輪法陣的外口，也解釋為何附近玻砂始終帶著灼人餘溫。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'glass_dunes_buried_palace_door',
        description: '西返時需沿日火坑邊緣逆著熱浪貼牆繞行，穿過坍落玻砂後才回到埋宮門裂縫',
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
      '城邦升降門位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
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
      '抵達廣場位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
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
