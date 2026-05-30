import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_003: Record<string, RoomDef> = {
elder_dragon_sanctum: {
    id: 'elder_dragon_sanctum',
    name: '古龍聖殿',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'elder_dragon_sanctum.png',
    imagePrompt: '古龍聖殿 in dragon_valley, sacred hall of dragon bones and crystal, star scaled elder dragon coiled in center, ancient pressure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain hall, clear lantern light',
    description:
      '隱藏在風暴之巔背後的神聖殿堂，由巨大的龍骨和水晶構成。' +
      '殿堂中央盤踞著一條體型驚人的古龍，牠的鱗片如同星空般閃耀。' +
      '空氣中充滿了遠古的威壓，連呼吸都變得沉重。這是龍谷最強大的存在。聖殿柱廊由歷代古龍的脫落角骨堆疊而成，水晶地面下能看見雲海、星光與更深處的紫黑裂隙。古龍並未立刻攻擊，而是用低沉目光審視來者，彷彿牠早已知道魔族、龍谷與深淵之間的下一場災難。四周側殿分別通往鍛台、天衛營地與墜星坑，每一條路都代表龍族仍在維持的古老職責。殿門會隨古龍呼吸緩慢開合。',
    exits: [
      { direction: 'south', targetRoomId: 'storm_peak', description: '退回風暴之巔' },
      { direction: 'east', targetRoomId: 'dragon_scale_forge', description: '側殿通往龍鱗鍛台' },
      { direction: 'west', targetRoomId: 'dragon_skywarden_camp', description: '西廊連到天衛營地' },
      { direction: 'north', targetRoomId: 'dragon_starfall_crater', description: '北門外有墜星坑' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'elder_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[聖]',
    mapX: 3,
    mapY: 29,
    guardianHints: {
      creature: '古龍擁有預知能力，普通的攻擊模式會被輕易看穿——只有隨機的戰術才能出其不意。',
      treasure: '古龍的牙齒蘊含著數千年的龍之力量，是鑄造神器級武器的終極素材。',
      spirit: '古龍是龍族的始祖之一——牠記得世界創生時的模樣，也預見了終焉的到來。',
    },
  },

dragon_egg_chamber: {
    id: 'dragon_egg_chamber',
    name: '龍蛋室',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_egg_chamber.png',
    imagePrompt: '龍蛋室 in dragon_valley, warm hidden cavern with giant glowing dragon eggs on volcanic ash beds, geothermal steam and vigilant young dragons, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain ash, clear lantern light',
    description:
      '隱蔽在岩壁深處的溫暖洞穴，地熱從地底湧出，維持著恆定的溫度。' +
      '數顆巨大的龍蛋安靜地排列在柔軟的火山灰床上，蛋殼上的紋路隱隱發光。' +
      '這是龍族孕育下一代的聖地，任何威脅都會招致所有龍族的瘋狂報復。洞穴上方有許多細小通風孔，能把風暴之巔的雷鳴轉成低沉搖籃聲。灰床旁擺著由鱗片、草藥與晶砂編成的護巢圈，說明幼龍的孵化需要火、風與星光共同維持平衡。後方隘口由護巢龍爪親自開鑿，只允許守衛在緊急時快速抵達飛龍崖。牆上還掛著破損鞍布與幼龍初次飛行的紀念鱗片，讓這裡兼具危險與神聖意味。',
    exits: [
      { direction: 'east', targetRoomId: 'dragon_nest_path', description: '小心地退回龍巢小徑' },
      { direction: 'north', targetRoomId: 'dragon_claw_pass', description: '孵化室後方有龍爪隘口' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[蛋]',
    mapX: 2,
    mapY: 25,
    guardianHints: {
      creature: '在龍蛋室中戰鬥要格外小心——傷害龍蛋會引來整個龍谷的龍族報復。',
      treasure: '已經不會孵化的化石龍蛋是極為珍貴的收藏品和煉金材料。',
      spirit: '每一顆龍蛋中都沉睡著一個嶄新的龍族靈魂——牠們的夢境構成了龍谷的魔力場。',
    },
  },

dragon_wind_roost: {
    id: 'dragon_wind_roost',
    name: '風棲岩棚',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_wind_roost.png',
    imagePrompt: '風棲岩棚 in dragon_valley, western ledge full of wind-carved nests, feathered banners, warm updrafts and young dragons resting, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '龍谷入口西側的岩棚被長年上升氣流切成弧形，岩壁上掛滿被風磨亮的龍巢與舊布旗。幼龍會在此練習短距離滑翔，牠們用爪子抓住岩脊，等待熱風將身體托起。棚底有幾處天然凹槽，積著雨水、白羽與細碎龍鱗，可供玩家觀察風向或尋找可用材料。這裡雖靠近入口，卻能很快引來巡空飛龍。',
    exits: [
      { direction: 'east', targetRoomId: 'dragon_valley_entrance', description: '沿岩棚回到龍谷入口' },
      { direction: 'north', targetRoomId: 'dragon_egg_chamber', description: '窄洞通往龍蛋室外壁' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'cloudstone_drake', maxCount: 1, respawnSeconds: 65 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 65 },
    ],
    mapSymbol: '[風]',
    mapX: 2,
    mapY: 24,
    guardianHints: {
      creature: '幼龍起飛前會先低伏身體，抓準此時後退可避開第一波火息。',
      treasure: '岩棚凹槽中的完整龍鱗可作為高階護甲材料。',
      spirit: '風棲岩棚是龍族孩童般的練習場，留下許多稚嫩爪痕。',
    },
  },

dragon_scale_spring: {
    id: 'dragon_scale_spring',
    name: '鱗光泉',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_scale_spring.png',
    imagePrompt: '鱗光泉 in dragon_valley, clear mountain spring reflecting dragon scales, blue mist, healing mineral pools and claw-carved stones, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '龍巢小徑東側藏著一眼清澈泉池，泉水從佈滿龍鱗結晶的石縫湧出，在池面折射出金、藍與紫色光斑。受傷的飛龍會在此舔舐礦物水，龍騎士也會把裂開的鞍具浸入泉中修補符文。池畔石碑刻著古龍律法，要求任何飲用泉水者都必須留下等價記憶。這裡可作為資源點，也暗示龍谷並非只有戰鬥與掠奪。',
    exits: [
      { direction: 'west', targetRoomId: 'dragon_nest_path', description: '石階回到龍巢小徑' },
      { direction: 'north', targetRoomId: 'dragon_fireglass_terrace', description: '泉水溝渠流向火玻璃台' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'fireglass_drake', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    groundItems: [
      { itemId: 'dragon_scale', description: '泉邊有一片被礦物光包覆的龍鱗' },
    ],
    mapSymbol: '[泉]',
    mapX: 4,
    mapY: 26,
    guardianHints: {
      creature: '守泉龍騎士會優先保護受傷幼龍，分散火力可以破壞防線。',
      treasure: '泉底沉著透明鱗片，能強化抗火與抗雷裝備。',
      spirit: '龍族把記憶視為泉水的交換品，這可能與牠們漫長壽命有關。',
    },
  },

dragon_claw_pass: {
    id: 'dragon_claw_pass',
    name: '龍爪隘口',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_claw_pass.png',
    imagePrompt: '龍爪隘口 in dragon_valley, narrow pass carved by huge dragon claws, broken stone teeth, egg chamber back route and cliff winds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '龍蛋室北方的隘口像被巨爪撕開，兩側岩壁留下平行深痕，足以讓成年人整個人藏進爪溝。地面散著像牙齒般尖銳的白石，踩錯位置會發出刺耳回聲，驚動飛龍崖上的巢群。這條路是龍族護巢時使用的側道，能在龍蛋室與飛龍崖之間快速移動，也讓玩家看見龍谷防衛網的內層結構。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_egg_chamber', description: '回到溫暖的龍蛋室' },
      { direction: 'east', targetRoomId: 'wyvern_cliff', description: '爪痕石階通往飛龍崖' },
      { direction: 'north', targetRoomId: 'dragon_thunder_nest', description: '雷聲沿隘口向北滾動' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[爪]',
    mapX: 2,
    mapY: 26,
    guardianHints: {
      creature: '飛龍會利用爪溝藏身突襲，留意牆面落塵可預判位置。',
      treasure: '深爪痕中卡著被磨亮的龍牙碎片。',
      spirit: '隘口不是天然裂縫，而是某條古龍為保護巢穴親手開出的道路。',
    },
  },

dragon_fireglass_terrace: {
    id: 'dragon_fireglass_terrace',
    name: '火玻璃台',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_fireglass_terrace.png',
    imagePrompt: '火玻璃台 in dragon_valley, terrace of black volcanic glass reflecting fire and clouds, dragon scorch marks, glowing cracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '天空之橋東側延伸出一片黑亮平台，地面像被龍息燒熔後重新凝固的玻璃，能倒映雲層與飛龍影子。平台下方有細小火脈游走，每隔片刻便在裂縫中閃出金紅色光線。龍騎士會在此測試坐騎的火焰吐息，也會把破裂的龍鱗放在玻璃台上重新燒合。這裡視野開闊，卻沒有遮蔽物，任何接近者都暴露在空中巡邏之下。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_bridge', description: '回到天空之橋' },
      { direction: 'south', targetRoomId: 'dragon_scale_spring', description: '沿水汽回到鱗光泉' },
      { direction: 'north', targetRoomId: 'dragon_oracle_perch', description: '火光指向觀星棲台' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'fireglass_drake', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[璃]',
    mapX: 4,
    mapY: 27,
    guardianHints: {
      creature: '火玻璃會反射龍息，站在裂縫間的暗色石帶上較安全。',
      treasure: '平台邊緣有天然火玻璃，可用於附魔武器。',
      spirit: '這裡記錄了龍族把破壞轉化為工藝的方式。',
    },
  },

dragon_thunder_nest: {
    id: 'dragon_thunder_nest',
    name: '雷巢',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_thunder_nest.png',
    imagePrompt: '雷巢 in dragon_valley, storm-charged dragon nest of black branches and lightning rods, blue sparks, cloud abyss below, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '天空之橋西側的巢穴由黑色枝幹、龍骨碎片與天然避雷石編成，巢底不斷跳動藍白電弧。風暴巨龍會在此磨亮犄角，牠們用雷電淬鍊鱗片，使整座巢穴像活物一樣發出低鳴。巢外有幾根斷裂的龍騎長槍，槍尖仍殘留焦黑煙痕。玩家若想穿越此處，必須避開週期性落雷，也可觀察雷光流向判斷風暴之巔的祭壇狀態。巢壁深處還有半埋的雲石蛋殼，代表這裡曾孵化過掌控雷雲的古老血脈。每次雷鳴後，巢口會短暫露出通往熔火高巢的安全落腳點。若停留太久，避雷石會逐漸充能並吸引更多飛龍回巢。',
    exits: [
      { direction: 'east', targetRoomId: 'sky_bridge', description: '回到天空之橋' },
      { direction: 'south', targetRoomId: 'dragon_claw_pass', description: '下坡回到龍爪隘口' },
      { direction: 'north', targetRoomId: 'dragon_molten_aerie', description: '雷雲後方連向熔火高巢' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'thunder_roost_wyrmling', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[雷]',
    mapX: 2,
    mapY: 27,
    guardianHints: {
      creature: '風暴巨龍起飛前巢底電弧會集中，提前離開中心區。',
      treasure: '避雷石上凝著雷晶，可強化雷屬性抗性。',
      spirit: '雷巢是龍族成年試煉的一部分，能承受落雷才被准許上風暴之巔。',
    },
  },

dragon_oracle_perch: {
    id: 'dragon_oracle_perch',
    name: '龍諭棲台',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_oracle_perch.png',
    imagePrompt: '龍諭棲台 in dragon_valley, high oracle perch with star maps, hanging crystal lenses, storm-lit clouds and ancient dragon runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '風暴之巔東側的棲台懸在雲海之上，周圍吊著數十片水晶透鏡，會隨風轉動並投射星圖。龍族祭司曾在此聆聽古龍夢境，把預言刻在弧形石座後方。許多刻痕已被雷火熔成模糊光帶，但仍能辨認出魔族要塞、深淵裂隙與一顆墜落星辰的圖案；北側星圖指向墜星坑，但高空裂隙不可通行，需回古龍聖殿北門。這裡是任務線索與大型事件鉤子的理想節點，也會吸引守護預言的龍騎士。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_peak', description: '回到風暴之巔' },
      { direction: 'south', targetRoomId: 'dragon_fireglass_terrace', description: '星光階梯下到火玻璃台' },
    ],
    monsters: [
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'starfall_wyrm', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    npcs: ['dragon_oracle_keeper'],
    mapSymbol: '[諭]',
    mapX: 4,
    mapY: 28,
    guardianHints: {
      creature: '龍騎士會守住預言石座，使用遠程攻擊可迫使他們離開高位。',
      treasure: '破裂透鏡中仍保有星光，可作為占星法器材料。',
      spirit: '預言把魔族與深淵連在一起，說明龍谷早已察覺外界危機。',
    },
  },

dragon_molten_aerie: {
    id: 'dragon_molten_aerie',
    name: '熔火高巢',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_molten_aerie.png',
    imagePrompt: '熔火高巢 in dragon_valley, high volcanic dragon aerie with lava vents, ember nests, red updrafts and molten rock ledges, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain lava, clear lantern light',
    description:
      '風暴之巔西側的山腹裂開，露出一座由熔岩熱流支撐的高巢。巢壁赤紅，岩石像剛從爐中取出的鐵塊，卻被龍爪雕出規整平台。火焰幼龍與風暴飛龍在此共用上升熱流，牠們的鱗片被熱風吹得發亮。這裡連接雷巢與風暴之巔，代表龍谷的火與雷力量在此交會；若破壞熱流節點，天空巡邏可能短暫失去高度優勢。',
    exits: [
      { direction: 'east', targetRoomId: 'storm_peak', description: '熱風階梯回到風暴之巔' },
      { direction: 'south', targetRoomId: 'dragon_thunder_nest', description: '雷雲縫隙回到雷巢' },
      { direction: 'north', targetRoomId: 'dragon_skywarden_camp', description: '高巢後方通向天衛營地' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'fireglass_drake', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[熔]',
    mapX: 2,
    mapY: 28,
    guardianHints: {
      creature: '熔火高巢的熱流會讓飛行敵人快速回位，先逼牠們離開熱流柱。',
      treasure: '熔岩冷卻邊緣有紅色龍晶，可用於火屬性附魔。',
      spirit: '火與雷在此共存，顯示龍族元素傳承並非彼此孤立。',
    },
  },

dragon_scale_forge: {
    id: 'dragon_scale_forge',
    name: '龍鱗鍛台',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_scale_forge.png',
    imagePrompt: '龍鱗鍛台 in dragon_valley, sacred forge built from dragon bones and crystal anvils, scale armor pieces, blue fire and hoard gate, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain crystal, clear lantern light',
    description:
      '古龍巢穴北側的石階通往龍鱗鍛台，這裡沒有普通鐵匠爐，只有嵌在龍骨中的藍色火焰與水晶砧。龍族會把自然脫落的鱗片、斷角與星砂放在砧上，鍛造成守護聖殿的甲片與符刃。牆面掛著半成品龍鱗甲，每一片都記錄著原主的元素氣息。東側可感到寶庫金光，但鑄鱗石門只留下封印紋，實際需回古龍巢穴再進寶庫；鍛台仍與古龍聖殿相連，是資源、裝備與任務獎勵的交會點。砧台下方有古龍親自留下的鍛造誓言，要求使用者不得以屠龍所得換取力量。水晶砧旁還保存著多份未完成配方，可延伸後續裝備任務。藍火會辨認材料來源，讓貪婪者只得到一團冷灰。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_dragon_lair', description: '龍牙階梯回到古龍巢穴' },
      { direction: 'west', targetRoomId: 'elder_dragon_sanctum', description: '側殿回到古龍聖殿' },
    ],
    monsters: [
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'fireglass_drake', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'ancient_wyrm', maxCount: 1, respawnSeconds: 75 },
    ],
    npcs: ['dragon_scale_artisan'],
    groundItems: [
      { itemId: 'dragon_scale', description: '水晶砧旁放著一片等待鍛造的古龍鱗' },
    ],
    mapSymbol: '[鍛]',
    mapX: 4,
    mapY: 29,
    guardianHints: {
      creature: '守鍛龍騎士會利用砧台反彈攻擊，繞到側面較容易突破。',
      treasure: '未完成的龍鱗甲片可作為高階裝備配方線索。',
      spirit: '龍族鍛造只使用自然脫落材料，象徵力量必須被允許而非掠奪。',
    },
  },

dragon_skywarden_camp: {
    id: 'dragon_skywarden_camp',
    name: '天衛營地',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_skywarden_camp.png',
    imagePrompt: '天衛營地 in dragon_valley, elite dragon knight camp on high ridge, banners, saddle racks, maps of sky patrols and cloud fires, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain camp, clear lantern light',
    description:
      '古龍聖殿西廊外是一處守衛營地，石平台上排列著龍騎士鞍具、長槍架與記錄天空巡邏線的皮革地圖。營火不是木柴燃起，而是由小型風暴晶核維持，火焰會隨天候改變顏色。天衛負責攔截從魔族領地、山外航路與深淵裂縫靠近的威脅，因此此處保留大量戰報。玩家若能突破守衛，便能取得關於龍谷防線與下一區裂隙的清楚線索。',
    exits: [
      { direction: 'east', targetRoomId: 'elder_dragon_sanctum', description: '西廊回到古龍聖殿' },
      { direction: 'south', targetRoomId: 'dragon_molten_aerie', description: '斜坡下到熔火高巢' },
    ],
    monsters: [
      { monsterId: 'dragon_knight', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'thunder_roost_wyrmling', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 65 },
    ],
    mapSymbol: '[衛]',
    mapX: 2,
    mapY: 29,
    guardianHints: {
      creature: '天衛會以長槍控制距離，利用營帳柱子可切斷衝鋒線。',
      treasure: '巡邏地圖上標出深淵入口異常擴大的日期。',
      spirit: '龍族並非避世不問外界，天衛長年監控所有重大威脅。',
    },
  },

dragon_starfall_crater: {
    id: 'dragon_starfall_crater',
    name: '墜星坑',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_starfall_crater.png',
    imagePrompt: '墜星坑 in dragon_valley, glowing meteor crater north of elder dragon sanctum, star metal shards, dragon runes, purple abyss cracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '古龍聖殿北門外的山脊被一顆遠古星辰砸出圓形巨坑，坑底仍散發銀藍色微光。星鐵碎片嵌在岩層中，周圍刻滿龍族封印符號，防止天外力量滲入地脈。西側星圖光帶能對應龍諭棲台，但坑壁斷裂無法直接橫越，需回古龍聖殿與風暴之巔路線。近年封印邊緣開始出現紫黑裂紋，與聖殿地板下通往深淵的裂隙互相呼應。這裡是龍谷的大型事件鉤子，能把古龍預言、星界材料與深淵危機串在一起。',
    exits: [
      { direction: 'south', targetRoomId: 'elder_dragon_sanctum', description: '沿封印石階回到古龍聖殿' },
      { direction: 'north', targetRoomId: 'abyss_entrance', description: '墜星裂隙延伸向深淵入口' },
    ],
    monsters: [
      { monsterId: 'ancient_wyrm', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'starfall_wyrm', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'elder_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[星]',
    mapX: 4,
    mapY: 30,
    guardianHints: {
      creature: '墜星坑中的古龍蛇會沿裂紋游動，牠們出現前星鐵會先震動。',
      treasure: '坑底星鐵是鍛造神器與封印道具的核心材料。',
      spirit: '墜星坑證明深淵裂隙並非單純地下災害，而是與星界衝擊有關。',
    },
  },

// ─── Area 11: 深淵裂隙 (Lv 50-55) ────────────────────────

  abyss_entrance: {
    id: 'abyss_entrance',
    name: '深淵入口',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyss_entrance.png',
    imagePrompt: '深淵入口 in abyss_rift, cracked stairway descending from elder dragon sanctum into purple black void, impossible geometry, dimensional hum, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '古龍聖殿地板上的裂縫延伸成一道深不見底的階梯，向下通往一片紫黑色的虛空。' +
      '空間在此處開始扭曲，牆壁岩石折成不可能的幾何形狀，裂縫邊緣還凝著微亮的時空碎片。' +
      '耳邊傳來低沉嗡鳴，像維度壁壘正被緩慢磨穿；南側仍能感到墜星坑的熱度，北方虛空迴廊吞著星光，東面花園幽香與西側錨鏈震動同時從黑暗裡傳來。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_starfall_crater', description: '裂隙邊緣回到龍谷墜星坑' },
      { direction: 'north', targetRoomId: 'void_corridor', description: '踏入扭曲的虛空' },
      { direction: 'east', targetRoomId: 'nightmare_garden', description: '一條小徑通往奇異的花園' },
      { direction: 'west', targetRoomId: 'abyss_anchor_steps', description: '破碎階梯纏著封印錨鏈' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'rift_anchor_guardian', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 75 },
    ],
    npcs: ['rift_seal_researcher'],
    mapSymbol: '[淵]',
    mapX: 3,
    mapY: 30,
    guardianHints: {
      creature: '虛空行者會瞬間移動到你身後——保持背靠牆壁可以限制牠的移動。',
      treasure: '裂縫邊緣凝結著時空碎片，是製造維度魔法道具的核心材料。',
      spirit: '這道裂縫是遠古封印被侵蝕的結果——深淵的力量正在緩慢地滲透到現實世界。',
    },
  },

void_corridor: {
    id: 'void_corridor',
    name: '虛空迴廊',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'void_corridor.png',
    imagePrompt: '虛空迴廊 in abyss_rift, floating stone corridor over endless purple void, transparent floor with star abyss below, crawling shadow shapes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '一條漂浮在虛空中的石質走廊，兩側是無盡的紫黑色虛無。' +
      '走廊地板時而凝固時而透明，腳下能看見星辰般閃爍的深淵，邊緣則有暗影生物像墨水般貼著石縫蠕動。' +
      '偶爾有扭曲光芒從虛空中射出，照亮牆面缺口，也帶來其他時間線的低語。南端入口仍有裂階輪廓，北方暗影領域吸走光線，東側時間裂縫和西側鏡湖冷光把走廊拉成四條不穩的方向。',
    exits: [
      { direction: 'south', targetRoomId: 'abyss_entrance', description: '退回深淵入口' },
      { direction: 'north', targetRoomId: 'shadow_realm', description: '走廊延伸入更深的黑暗' },
      { direction: 'east', targetRoomId: 'time_distortion', description: '空間在此分裂出另一條路' },
      { direction: 'west', targetRoomId: 'void_mirror_lake', description: '西側虛空凝成鏡湖' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'mirrorlake_reflection', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[廊]',
    mapX: 3,
    mapY: 31,
    guardianHints: {
      creature: '虛空中的暗影生物會從走廊邊緣湧出——不要站在邊緣附近。',
      treasure: '虛空中偶爾會飄過來自其他維度的物品——有些可能極為珍貴。',
      spirit: '走廊是古代術士建造的維度通道，原本是連接不同世界的橋樑。',
    },
  },

shadow_realm: {
    id: 'shadow_realm',
    name: '暗影領域',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'shadow_realm.png',
    imagePrompt: '暗影領域 in abyss_rift, realm swallowed by pure shadow, black rippling floor, ghost eyes and fading body silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '一片被純粹暗影能量籠罩的空間，所有光源在這裡都會被吞噬。' +
      '只有暗影生物的眼睛在黑暗中如幽靈般閃爍，流動地面每受壓一次，就激起漣漪般的黑色波紋。' +
      '南側虛空迴廊還保留一截透明石板輪廓，北方混沌之橋像裂開的彩色傷口，西邊暗影檔案館的書架影子則一排排浮現。黑暗不只是遮蔽視線，更像正在試探每一個能被吞掉的記憶。',
    exits: [
      { direction: 'south', targetRoomId: 'void_corridor', description: '退回虛空迴廊' },
      { direction: 'north', targetRoomId: 'chaos_bridge', description: '黑暗中有一道混沌的光芒' },
      { direction: 'west', targetRoomId: 'shadow_archive', description: '暗影書架在西側浮現' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'nightmare', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[影]',
    mapX: 3,
    mapY: 32,
    guardianHints: {
      creature: '暗影惡魔在完全黑暗中幾乎無敵——使用光明魔法或照明道具可以削弱牠們。',
      treasure: '暗影領域的核心處有一顆凝聚了純粹黑暗的暗影之心，是暗屬性魔法的終極素材。',
      spirit: '暗影領域是深淵滲透到現實的第一個據點——如果不阻止擴張，整個世界都會被吞噬。',
    },
  },

chaos_bridge: {
    id: 'chaos_bridge',
    name: '混沌之橋',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'chaos_bridge.png',
    imagePrompt: '混沌之橋 in abyss_rift, bridge of shifting chaos matter changing between stone crystal and void, elemental colors along both sides, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '一座由不斷變換形態的混沌物質構成的橋樑，橋面時而是石頭，時而是水晶，時而又像被挖空的虛無。' +
      '橋的兩側翻湧著不同顏色的能量，火、冰、雷、光與暗交替閃爍，讓每一步都踩在不同法則上。' +
      '橋面邊緣會短暫浮現先前失敗者留下的腳印，又很快被混沌抹平。南方暗影領域沉得像墨，北端深淵核心一下一下發光，西側引力井與東側記憶迷宮把橋身拉得微微扭曲。',
    exits: [
      { direction: 'south', targetRoomId: 'shadow_realm', description: '退回暗影領域' },
      { direction: 'north', targetRoomId: 'abyss_core', description: '橋的盡頭是深淵的核心' },
      { direction: 'west', targetRoomId: 'gravity_well', description: '橋下引力井正在塌縮' },
      { direction: 'east', targetRoomId: 'memory_maze', description: '東側迷霧組成記憶迷宮' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[混]',
    mapX: 3,
    mapY: 33,
    guardianHints: {
      creature: '混沌之子的屬性會隨機變化——觀察牠的顏色來判斷當前的弱點屬性。',
      treasure: '混沌物質會偶爾凝結成穩定的形態——如果能收集到就是無價之寶。',
      spirit: '混沌之橋是兩個維度碰撞的產物——它的存在本身就是一個不應該發生的奇蹟。',
    },
  },

nightmare_garden: {
    id: 'nightmare_garden',
    name: '噩夢花園',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'nightmare_garden.png',
    imagePrompt: '噩夢花園 in abyss_rift, floating garden of nightmare crystal flowers, silent blooming and withering, twisted human silhouettes in purple mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain crystal, clear lantern light',
    description:
      '一座詭異花園漂浮在虛空之中，花朵由凝固的噩夢結晶長成，每一朵都在無聲綻放與凋零，散發令人昏沉的幽香。' +
      '花叢裡偶爾浮現扭曲人影，像被夢境吞噬後殘留的意識仍在尋找出口。西側深淵入口的裂階輪廓在霧中忽明忽暗，北方花徑被扭曲時間切成斷續光帶，東面更深的果園則垂著半透明黑果。花粉落到地面時會形成短暫夢境，映出不屬於此地的天空。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_entrance', description: '回到深淵入口' },
      { direction: 'north', targetRoomId: 'time_distortion', description: '花園邊緣的空間在扭曲' },
      { direction: 'east', targetRoomId: 'nightmare_orchard', description: '花園深處長著噩夢果樹' },
    ],
    monsters: [
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[夢]',
    mapX: 4,
    mapY: 30,
    guardianHints: {
      creature: '噩夢體會入侵你的精神——堅定的意志和抗精神控制的道具是必需品。',
      treasure: '噩夢結晶花雖然危險，但是製作精神魔法道具的頂級材料。',
      spirit: '花園中的人影是真實的冒險者——找到方法喚醒他們也許能獲得盟友。',
    },
  },

abyss_core: {
    id: 'abyss_core',
    name: '深淵核心',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyss_core.png',
    imagePrompt: '深淵核心 in abyss_rift, giant dark purple sphere pulsing in collapsed void, broken gravity, warped light, chaos and shadow source, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '裂隙的最深處，一顆巨大的暗紫色球體懸浮在虛空中央，不斷脈動著。' +
      '這是深淵的核心——所有混沌和暗影力量的源頭。' +
      '核心周圍的空間已經完全崩壞，重力、時間、光線都失去了意義。碎裂石台像衛星般繞著核心旋轉，每一次脈動都會把遠處的迴廊、花園與時空區短暫拉近。核心表面浮現無數陌生眼睛，又在下一瞬間變成古代術式，說明它既是入侵錨點，也是封印失敗後扭曲的魔法裝置。脈動間隙裡能聽見古代術士留下的警告，任何對核心的衝擊都會同時震動整條裂隙。西側熔爐正把剝落碎片重新鑄成武器。',
    exits: [
      { direction: 'south', targetRoomId: 'chaos_bridge', description: '退回混沌之橋' },
      { direction: 'east', targetRoomId: 'abyss_lord_chamber', description: '核心背後是深淵領主的居所' },
      { direction: 'west', targetRoomId: 'rift_forge', description: '核心碎片落向裂隙熔爐' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 1800 },
    ],
    mapSymbol: '[核]',
    mapX: 3,
    mapY: 34,
    guardianHints: {
      creature: '核心的脈動會週期性地增強所有深淵生物——在脈動間隙攻擊效率最高。',
      treasure: '如果能從核心中取出一塊碎片，就能獲得操控維度的力量。',
      spirit: '深淵核心是另一個維度試圖入侵此世界的錨點——摧毀它可以暫時關閉裂隙。',
    },
  },

time_distortion: {
    id: 'time_distortion',
    name: '時空扭曲區',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'time_distortion.png',
    imagePrompt: '時空扭曲區 in abyss_rift, overlapping past present future ruins, branching time streams, broken clocks and dimensional light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '空間在此處嚴重扭曲，過去、現在和未來的景象交疊在一起；同一面斷牆上一半還保持千年前的繁華，一半已化為千年後的廢墟。' +
      '時間之流在腳邊分岔又匯合，一步之差就會踩過百年灰塵。西側殘影指回虛空迴廊，南面噩夢花園的花粉被倒流成種子，北方斷裂光帶通往領主之間，東側晶格門後則漂著時間碎片。地面裂縫裡卡著不同年代的武器殘影。',
    exits: [
      { direction: 'west', targetRoomId: 'void_corridor', description: '回到虛空迴廊' },
      { direction: 'south', targetRoomId: 'nightmare_garden', description: '回到噩夢花園' },
      { direction: 'north', targetRoomId: 'abyss_lord_chamber', description: '時空的盡頭指向領主之間' },
      { direction: 'east', targetRoomId: 'time_splinter_vault', description: '碎裂時間流入封存室' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'time_splinter_stalker', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[時]',
    mapX: 4,
    mapY: 31,
    guardianHints: {
      creature: '時空扭曲中的敵人可能會出現在不同的時間點——注意「已經消滅」的敵人再次出現。',
      treasure: '時空碎片中封存著其他時間線的珍貴物品，但取出它們需要極高的魔法造詣。',
      spirit: '時空扭曲是深淵力量對現實法則的最大破壞——修復這裡就能穩定整個裂隙。',
    },
  },

abyss_lord_chamber: {
    id: 'abyss_lord_chamber',
    name: '深淵領主之間',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyss_lord_chamber.png',
    imagePrompt: '深淵領主之間 in abyss_rift, enormous floating platform of solid chaos, shadow void throne, many-eyed abyss lord warping reality, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '一個懸浮在虛空中心的巨大平台，由凝固的混沌能量構成。' +
      '平台中央矗立著一座由暗影和虛空編織而成的王座，深淵領主端坐其上，' +
      '多隻眼睛同時注視著來訪者。牠的存在本身就在扭曲周圍的現實，空間在牠身邊不停裂開又癒合。王座後方懸著破碎的天界門影，腳下則能看見深淵核心的脈動倒影。每當領主抬手，平台邊緣的時鐘、鏡面與暗影柱便會重新排列，像是在為下一次維度入侵校準座標。王座側面的信標持續向外發出黑紫脈衝，北方尖塔則把這些座標刺入天界裂口；西南兩側仍殘留核心與時空區撕出的裂光。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_core', description: '退回深淵核心' },
      { direction: 'south', targetRoomId: 'time_distortion', description: '退回時空扭曲區' },
      { direction: 'east', targetRoomId: 'abyssal_beacon', description: '王座側面有深淵信標' },
      { direction: 'north', targetRoomId: 'sealbreak_spire', description: '破封尖塔刺入虛空頂端' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'abyss_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[主]',
    mapX: 4,
    mapY: 34,
    guardianHints: {
      creature: '深淵領主能同時使用多種屬性攻擊——切換抗性裝備是生存的關鍵。',
      treasure: '深淵領主的權杖中封存著操控時空的力量——這是傳說中的深淵之眼。',
      spirit: '深淵領主並非天生的怪物——牠曾是一位試圖征服維度的大魔導士，被自己的力量吞噬後墮落為此。',
    },
  },

abyss_anchor_steps: {
    id: 'abyss_anchor_steps',
    name: '封印錨階',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyss_anchor_steps.png',
    imagePrompt: '封印錨階 in abyss_rift, broken descending steps wrapped in giant sealing chains, purple void below, dragon and mage runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '深淵入口西側的階梯被數條巨大錨鏈纏住，鏈環一半刻著龍語，一半刻著古代術士的封印符。每下一層，腳下石板都會浮出不同年代的裂痕，彷彿這段階梯曾被反覆修補又反覆撕開。錨鏈末端沒入紫黑虛空，偶爾傳來沉重拖拽聲，像某種力量正試圖把整個入口拉向更深處。東面裂階仍連著入口，北端鏡湖冷光沿鏈環反射下來，使封印符忽明忽暗。',
    exits: [
      { direction: 'east', targetRoomId: 'abyss_entrance', description: '沿錨鏈回到深淵入口' },
      { direction: 'north', targetRoomId: 'void_mirror_lake', description: '階梯盡頭映著鏡湖冷光' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'rift_anchor_guardian', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[錨]',
    mapX: 2,
    mapY: 30,
    guardianHints: {
      creature: '虛空行者會沿錨鏈瞬移，站在斷鏈旁能限制牠的落點。',
      treasure: '錨鏈碎片保留封印力量，可作為抗深淵裝備材料。',
      spirit: '錨鏈證明古龍與術士曾合作封鎖裂隙，只是封印如今正在失效。',
    },
  },

void_mirror_lake: {
    id: 'void_mirror_lake',
    name: '虛空鏡湖',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'void_mirror_lake.png',
    imagePrompt: '虛空鏡湖 in abyss_rift, still black mirror lake floating in void, reflections showing impossible other selves, purple stars beneath surface, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain lake, clear lantern light',
    description:
      '虛空迴廊西側沒有真正的湖水，而是一片平滑到毫無波紋的黑色鏡面。鏡中倒影不會模仿動作，而是展示可能發生過的其他選擇：倒下的同伴、未開啟的寶箱、或從未踏入深淵的自己。湖面中央偶爾浮起星辰般的氣泡，破裂時會放出其他維度的低語。東側走廊倒影被拉得很長，南面錨階的鏈影沉入鏡底，北方暗影檔案館的書架則像從水下浮出。',
    exits: [
      { direction: 'east', targetRoomId: 'void_corridor', description: '鏡湖邊緣回到虛空迴廊' },
      { direction: 'south', targetRoomId: 'abyss_anchor_steps', description: '鏡面下方連著封印錨階' },
      { direction: 'north', targetRoomId: 'shadow_archive', description: '倒影中的書架指向暗影檔案館' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'mirrorlake_reflection', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'nightmare', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 31,
    guardianHints: {
      creature: '噩夢會從倒影裡起身，先打碎異常倒影可阻止伏擊。',
      treasure: '鏡湖氣泡凝成的黑晶可封存短暫記憶。',
      spirit: '鏡湖不預言未來，只呈現被深淵吞掉的可能性。',
    },
  },

shadow_archive: {
    id: 'shadow_archive',
    name: '暗影檔案館',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'shadow_archive.png',
    imagePrompt: '暗影檔案館 in abyss_rift, endless shelves made of shadow, floating black scrolls, dim violet lamps and whispering records, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '暗影領域西側浮現一座沒有牆壁的檔案館，書架由濃黑影子堆成，卷軸自行展開又縮回。每份檔案都記錄一名被深淵觸碰者的恐懼、願望與最後一句話，閱讀時文字會像活物一樣鑽入視野。檔案館中央放著破碎索引台，上面標示通往混沌之橋、鏡湖與記憶迷宮的路線，是理解裂隙結構的關鍵地點。',
    exits: [
      { direction: 'east', targetRoomId: 'shadow_realm', description: '離開書架回到暗影領域' },
      { direction: 'south', targetRoomId: 'void_mirror_lake', description: '書頁倒影落向虛空鏡湖' },
      { direction: 'north', targetRoomId: 'gravity_well', description: '檔案館深處通往引力井' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[檔]',
    mapX: 2,
    mapY: 32,
    guardianHints: {
      creature: '暗影惡魔會藏在書架投影中，觀察影子是否與光源方向一致。',
      treasure: '破碎索引台可提供深淵領主過去身分的線索。',
      spirit: '檔案館保存的不是紙張，而是被深淵奪走的記憶。',
    },
  },

chaos_observatory: {
    id: 'chaos_observatory',
    name: '混沌觀測台',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'chaos_observatory.png',
    imagePrompt: '混沌觀測台 in abyss_rift, tilted observatory with broken lenses aimed at impossible stars, chaos equations in violet light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '噩夢花園北方的空間突然折成一座傾斜觀測台，巨大的透鏡不朝天空，而是指向裂隙中不斷誕生又消失的假星。台面刻滿混沌方程，線條每隔幾秒就會自行重排，讓原本正確的路徑變成死路。這裡曾是術士監測裂隙脈動的工作站，如今所有儀器都被深淵反向利用，用來尋找現實防線的薄弱處。',
    exits: [
      { direction: 'south', targetRoomId: 'time_splinter_vault', description: '透鏡光束照向時間碎片庫' },
      { direction: 'west', targetRoomId: 'nightmare_garden', description: '倒轉階梯回到噩夢花園' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'time_splinter_stalker', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[觀]',
    mapX: 5,
    mapY: 30,
    guardianHints: {
      creature: '混沌之子會跟著方程顏色變屬性，先看地面線條再出手。',
      treasure: '破碎透鏡能放大裂隙能量，是高階法器材料。',
      spirit: '觀測台證明深淵曾被研究過，只是研究者最終成了入侵的座標。',
    },
  },

nightmare_orchard: {
    id: 'nightmare_orchard',
    name: '噩夢果園',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'nightmare_orchard.png',
    imagePrompt: '噩夢果園 in abyss_rift, orchard of black crystal trees bearing glowing nightmare fruit, sleeping silhouettes under roots, purple fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '噩夢花園東側的樹木長得像黑色水晶，每根枝條都掛著一顆半透明果實，果實裡浮現沉睡者的臉。果園地面柔軟得像夢境邊界，踩下去會聽見不屬於自己的回憶。部分果實已經裂開，流出銀紫色汁液並形成小型幻境，裂口周圍還有暗影抓痕。西側花霧仍能看見噩夢花園的結晶花，北方時間碎片庫的銀光則照在果皮上，使每顆果實都像封著一段被偷走的睡眠。',
    exits: [
      { direction: 'west', targetRoomId: 'nightmare_garden', description: '穿過花霧回到噩夢花園' },
      { direction: 'north', targetRoomId: 'time_splinter_vault', description: '果園北側有碎時封存室' },
    ],
    monsters: [
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[果]',
    mapX: 5,
    mapY: 31,
    guardianHints: {
      creature: '噩夢會假裝成沉睡者求救，注意果實是否仍連著黑色枝條。',
      treasure: '完整噩夢果可製成精神抗性或幻術材料。',
      spirit: '果園把恐懼培育成實體，說明深淵會利用意識作為養分。',
    },
  },

time_splinter_vault: {
    id: 'time_splinter_vault',
    name: '時間碎片庫',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'time_splinter_vault.png',
    imagePrompt: '時間碎片庫 in abyss_rift, vault of floating clock shards and frozen moments, silver purple time splinters in glass cells, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '時空扭曲區東側是一間漂浮封存室，無數鐘面碎片被關在透明晶格裡，指針指向完全不同的年代。某些晶格中封著一秒鐘的火焰、一次未完成的攻擊，或一個即將說出口的名字。封存室中央的裂鐘每敲一次，剛剛發生的選擇都像被重新排列。北側觀測廊道連向混沌觀測台，南方銀光流入噩夢果園，西側晶格廊道則回到時空扭曲區。晶格後方有多條被剪斷的時間線，末端全都指向領主王座，表示牠曾反覆尋找勝利的未來。',
    exits: [
      { direction: 'west', targetRoomId: 'time_distortion', description: '晶格廊道回到時空扭曲區' },
      { direction: 'north', targetRoomId: 'chaos_observatory', description: '觀測廊道通往混沌觀測台' },
      { direction: 'south', targetRoomId: 'nightmare_orchard', description: '碎片光流向噩夢果園' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'time_splinter_stalker', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[碎]',
    mapX: 5,
    mapY: 32,
    guardianHints: {
      creature: '虛空行者會利用時間碎片重置位置，打碎旁邊晶格可中斷瞬移。',
      treasure: '穩定的時間碎片能用於冷卻縮短或傳送道具。',
      spirit: '封存室暗示領主不是控制時間，而是在偷取別處的片段。',
    },
  },

gravity_well: {
    id: 'gravity_well',
    name: '倒重引力井',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'gravity_well.png',
    imagePrompt: '倒重引力井 in abyss_rift, inverted gravity well with stones falling upward, black spiral pit, broken chains and purple force rings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '混沌之橋西側的虛空向內塌陷成倒重引力井，碎石、影子與破裂鎖鏈不是落下，而是緩慢向上墜入黑色螺旋。井壁刻滿失敗封印的記號，每一道符號都被拉長成扭曲弧線。靠近井口時，裝備重量會忽然變輕，下一秒又像整座山壓在肩上。東側橋面被井力扯出弧度，南面暗影檔案館的書頁不斷倒飛進裂縫，北方上升碎石則被黑紫火線牽往裂隙熔爐。井心凝成的重力石在螺旋深處一明一滅。',
    exits: [
      { direction: 'east', targetRoomId: 'chaos_bridge', description: '抓住石樁回到混沌之橋' },
      { direction: 'south', targetRoomId: 'shadow_archive', description: '井壁裂縫通往暗影檔案館' },
      { direction: 'north', targetRoomId: 'rift_forge', description: '上升碎石流向裂隙熔爐' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'gravity_well_maw', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[重]',
    mapX: 2,
    mapY: 33,
    guardianHints: {
      creature: '混沌生物會在重力反轉時衝鋒，等碎石停滯再移動較安全。',
      treasure: '井心凝成的重力石可製作控制推拉效果的道具。',
      spirit: '引力井是封印崩壞後的副產物，代表現實法則正在局部失效。',
    },
  },

memory_maze: {
    id: 'memory_maze',
    name: '記憶迷宮',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'memory_maze.png',
    imagePrompt: '記憶迷宮 in abyss_rift, maze walls made of fading memories, translucent scenes, purple fog corridors and shadow hunters, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '混沌之橋東側的迷宮沒有固定牆壁，通道由來訪者的記憶片段拼成：熟悉的村口、失敗的戰鬥、未完成的承諾，全都像薄幕一樣攔在前方。每次選錯路，迷宮就會拿走一段細節，使人忘記自己為何前進。地面上的銀色線條偶爾會指向深淵核心，也可能故意轉向噩夢果園。牆上嵌著被困冒險者留下的名字，正確順序會讓某些薄幕短暫打開，露出北方迴響庭的聲光；南側則有時間碎片庫的晶格影子在記憶間閃爍。',
    exits: [
      { direction: 'west', targetRoomId: 'chaos_bridge', description: '沿銀線回到混沌之橋' },
      { direction: 'north', targetRoomId: 'echo_court', description: '迷宮盡頭傳來迴響' },
      { direction: 'south', targetRoomId: 'time_splinter_vault', description: '記憶薄幕連到時間碎片庫' },
    ],
    monsters: [
      { monsterId: 'nightmare', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[憶]',
    mapX: 4,
    mapY: 33,
    guardianHints: {
      creature: '噩夢會偽裝成熟悉人物，檢查影子是否同步可辨真偽。',
      treasure: '迷宮中心可找回被奪走的記憶碎片，可能解鎖隱藏任務。',
      spirit: '記憶迷宮證明深淵入侵不只破壞空間，也會侵蝕身份。',
    },
  },

rift_forge: {
    id: 'rift_forge',
    name: '裂隙熔爐',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'rift_forge.png',
    imagePrompt: '裂隙熔爐 in abyss_rift, forge fed by abyss core fragments, black purple flames, floating anvils and broken dimensional metal, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '深淵核心西側落下的碎片匯聚成裂隙熔爐，黑紫火焰不燃燒燃料，而是燃燒失敗的現實可能性。漂浮砧台周圍旋轉著破碎維度金屬，每一塊都在不同物質形態間閃爍。熔爐外圈堆著被切開的封印錨鏈與龍骨碎片，說明深淵軍勢正在把防線殘骸反過來變成攻城工具。砧台旁還有未完成的裂界刃，刀身每次成形都會割出一條小型傳送縫。東面火線牽回深淵核心，南側碎片流下墜入倒重引力井，爐壁則刻著供料清單與守衛編號。',
    exits: [
      { direction: 'east', targetRoomId: 'abyss_core', description: '熔爐火線回到深淵核心' },
      { direction: 'south', targetRoomId: 'gravity_well', description: '碎片流下墜入引力井' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'gravity_well_maw', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 70 },
    ],
    npcs: ['rift_forge_scavenger'],
    mapSymbol: '[爐]',
    mapX: 2,
    mapY: 34,
    guardianHints: {
      creature: '熔爐中的混沌生物會吸收火線，離開砧台區再交戰較穩。',
      treasure: '維度金屬可用於製作穿透或傳送相關裝備。',
      spirit: '裂隙熔爐把世界的失敗可能性鑄成武器，是深淵擴張的工廠。',
    },
  },

echo_court: {
    id: 'echo_court',
    name: '迴響庭',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'echo_court.png',
    imagePrompt: '迴響庭 in abyss_rift, court of floating stone benches and repeating sound waves, purple echoes of past battles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '記憶迷宮北端是一座浮空庭院，石椅、審判台與破碎鐘架圍成半圓，每一句話都會被複製成數十個不同情緒的回聲。庭院中央漂著過去戰鬥的殘響，有些影像會重演冒險者被深淵吞噬的瞬間，有些則像證詞一樣指向領主之間。西側裂鐘聲能對應時間碎片庫，但聲橋不穩，只在回音重疊時短暫浮現。南面記憶迷宮送來破碎姓名，北方深淵信標把最響亮的聲音收成座標。審判台後方刻著許多未被聽見的辯詞，暗示深淵連死亡後的聲音也會收割。',
    exits: [
      { direction: 'south', targetRoomId: 'memory_maze', description: '回聲廊道回到記憶迷宮' },
      { direction: 'north', targetRoomId: 'abyssal_beacon', description: '最響亮的回聲指向深淵信標' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'mirrorlake_reflection', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    npcs: ['echo_court_witness'],
    mapSymbol: '[響]',
    mapX: 5,
    mapY: 33,
    guardianHints: {
      creature: '虛空行者會追逐最大聲的回音，短暫沉默可讓牠失去目標。',
      treasure: '審判台下有封存證詞的聲晶，可作為任務道具。',
      spirit: '迴響庭保存失敗者的聲音，避免他們完全被深淵抹去。',
    },
  },

abyssal_beacon: {
    id: 'abyssal_beacon',
    name: '深淵信標',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyssal_beacon.png',
    imagePrompt: '深淵信標 in abyss_rift, tall beacon of black violet light broadcasting dimensional coordinates, rings of eyes and broken antennas, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '深淵領主之間東側矗立著一座黑紫光柱，外層由眼狀符文與破碎天線環繞，像在向遙遠維度發送座標。信標每次閃爍，周圍空間就會浮現其他世界的輪廓：陌生城市、倒置海洋、被黑雪覆蓋的戰場。北側光柱指向破封尖塔，但能量纜線會切碎接近者，實際仍需回到領主之間再從塔基上去。眼狀符文的開闔節奏、天線殘片的焦痕和基座暗槽裡的穩定樣本，都顯示下一波深淵增援正在被校準。西面王座陰影壓在光柱底部，南側迴響庭的聲波則被信標收束成座標脈衝。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_lord_chamber', description: '光柱基座回到領主之間' },
      { direction: 'south', targetRoomId: 'echo_court', description: '信標回聲落向迴響庭' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'beacon_eye_harrier', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'abyss_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[標]',
    mapX: 5,
    mapY: 34,
    guardianHints: {
      creature: '信標會週期性召來混沌之子，先破壞眼狀符文可降低壓力。',
      treasure: '信標核心可作為跨區傳送任務的重要材料。',
      spirit: '信標證明深淵並非無意識災害，而是有組織的維度入侵。',
    },
  },

sealbreak_spire: {
    id: 'sealbreak_spire',
    name: '破封尖塔',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'sealbreak_spire.png',
    imagePrompt: '破封尖塔 in abyss_rift, jagged spire piercing void ceiling, shattered seals, black lightning, doorway toward celestial light above, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '深淵領主王座北方有一座尖塔倒插進虛空穹頂，塔身掛滿被撕開的封印布與斷裂聖釘。黑色閃電沿塔面向上爬升，最頂端透出一線刺眼白光，那正是通往天界遺跡的裂口。東側信標光纜纏向塔身但會切碎接近者，實際仍需從領主之間進出塔基。塔內每一層都刻著領主嘗試破封的紀錄，從粗糙咒文到精密維度公式逐步演變。尖塔外壁仍殘留天界防衛反擊造成的白色灼痕，顯示上方並非安全出口，而是另一場戰爭的邊界。塔心還懸著半枚破碎聖印，正在被信標脈衝一點點染黑。',
    exits: [
      { direction: 'south', targetRoomId: 'abyss_lord_chamber', description: '沿塔基回到領主之間' },
      { direction: 'north', targetRoomId: 'celestial_gate', description: '破封裂光路通向天界之門' },
    ],
    monsters: [
      { monsterId: 'abyss_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'beacon_eye_harrier', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[塔]',
    mapX: 4,
    mapY: 35,
    guardianHints: {
      creature: '塔內敵人會借用破封閃電增幅攻擊，等黑電轉白時再前進。',
      treasure: '斷裂聖釘仍保有天界封印力量，可用於後續聖物任務。',
      spirit: '破封尖塔說明通往天界的道路不是祝福，而是深淵領主硬生生撕開的傷口。',
    },
  },

// ─── Area 12: 天界遺跡 (Lv 55-60) ────────────────────────

  celestial_gate: {
    id: 'celestial_gate',
    name: '天界之門',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_gate.png',
    imagePrompt: '天界之門 in celestial_ruins, vast white light arch above void, sacred lost glyphs, starstone floor, golden celestial ruins in distance, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '一道由純白光芒構成的巨大拱門矗立在虛空之上，門框上刻著失傳已久的神聖文字。' +
      '穿過光門的瞬間，世界從混沌的深淵轉變為金色的光輝。' +
      '腳下是由凝固的星光構成的地面，遠方的天際線上浮現著壯麗的天界廢墟。門後仍能看見深淵裂口的黑紫殘影，像一道尚未癒合的傷口貼在純白光幕上。破碎聖階兩側倒伏著天界守衛的旗杆與被燒焦的羽翼印記，提示深淵曾經衝擊到這裡。玩家踏入此處時，門框文字會逐行亮起，判斷來者是入侵者、朝聖者，還是被迫接受最終試煉的挑戰者。門前光塵會記錄第一次踏入者的名字。',
    exits: [
      { direction: 'south', targetRoomId: 'sealbreak_spire', description: '破封尖塔的裂光路回到深淵邊境' },
      { direction: 'north', targetRoomId: 'starlight_path', description: '沿著星光之路前進' },
      { direction: 'east', targetRoomId: 'divine_library', description: '光門旁有一座宏偉的建築' },
      { direction: 'west', targetRoomId: 'celestial_starfall_plaza', description: '西側廣場鋪滿墜星碎片' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'starfall_sentinel', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 90 },
    ],
    npcs: ['celestial_gate_pilgrim'],
    mapSymbol: '[門]',
    mapX: 3,
    mapY: 35,
    guardianHints: {
      creature: '墮天使會同時使用光明和黑暗魔法——純粹的單屬性防禦在這裡不夠用。',
      treasure: '神聖文字中隱藏著開啟天界寶藏的密碼——但需要極高的智力才能解讀。',
      spirit: '天界之門是諸神離開凡間時留下的最後通道——通過它就意味著踏入了神的領域。',
    },
  },

starlight_path: {
    id: 'starlight_path',
    name: '星光走廊',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'starlight_path.png',
    imagePrompt: '星光走廊 in celestial_ruins, corridor paved with solid star fragments, broken celestial halls, holy dust and guardian silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '一條由凝固的星辰碎片鋪成的走廊，每一步都踩在閃爍的星光之上。' +
      '走廊兩側是破碎的天界建築殘骸，曾經宏偉的殿堂如今只剩下斷壁殘垣。' +
      '但即便是廢墟，這裡的每一塊石頭都散發著令人敬畏的神聖之力。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_gate', description: '退回天界之門' },
      { direction: 'north', targetRoomId: 'angel_garden', description: '前方出現一片翠綠的花園' },
      { direction: 'east', targetRoomId: 'judgment_hall', description: '走廊盡頭是一座莊嚴的大廳' },
      { direction: 'west', targetRoomId: 'celestial_broken_colonnade', description: '西側柱廊只剩斷裂光柱' },
    ],
    monsters: [
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'starfall_sentinel', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[星]',
    mapX: 3,
    mapY: 36,
    guardianHints: {
      creature: '天界守衛的護盾幾乎堅不可摧——但它們需要消耗魔力維持，持久戰可以耗盡它們。',
      treasure: '星辰碎片本身就是極為珍貴的魔法材料，但強行採集會觸怒守衛。',
      spirit: '天界的廢墟記載著諸神之戰的歷史——每一面斷牆都是一個章節。',
    },
  },

angel_garden: {
    id: 'angel_garden',
    name: '天使花園',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'angel_garden.png',
    imagePrompt: '天使花園 in celestial_ruins, miraculous golden white garden amid ruins, glowing holy fountain, seraph patrols and eternal blossoms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '一片在天界廢墟中奇蹟般存活的花園，金色和白色的花朵永不凋零地綻放。' +
      '花園中央的噴泉仍在流淌著發光的聖水，空氣中充滿了治癒和安寧的氣息。' +
      '幾位熾天使在花園中巡遊，牠們的翅膀散發出溫暖的金色光芒。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'south', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'north', targetRoomId: 'celestial_throne_room', description: '花園盡頭是天界王座' },
      { direction: 'east', targetRoomId: 'celestial_fountain_of_oaths', description: '噴泉支流流向誓約之泉' },
      { direction: 'west', targetRoomId: 'eternal_sanctuary', description: '花園側面有一座寧靜的聖所' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'oathbound_seraph', maxCount: 1, respawnSeconds: 95 },
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[花]',
    mapX: 3,
    mapY: 37,
    guardianHints: {
      creature: '熾天使能治癒同伴——必須優先擊倒牠們，否則戰鬥會無限延長。',
      treasure: '聖水噴泉有恢復全部HP和MP的效果——但在花園中戰鬥會中斷治療。',
      spirit: '花園是諸神為凡人留下的最後禮物——只要它還存在，天界就不會完全消亡。',
    },
  },

divine_library: {
    id: 'divine_library',
    name: '神之圖書館',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'divine_library.png',
    imagePrompt: '神之圖書館 in celestial_ruins, enormous divine library with shelves of light, glowing books, automaton guardians and endless height, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '一座超越凡人想像的巨大圖書館，書架延伸到視線無法觸及的高度。' +
      '書冊由光線構成，翻開後會直接將知識灌入閱讀者的意識中。' +
      '圖書館中漫步著由神造兵器守護的自動機械，確保知識不被褻瀆。西側光門回到天界之門，北方書架後藏著抄寫室。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_gate', description: '回到天界之門' },
      { direction: 'north', targetRoomId: 'celestial_scriptorium', description: '書架後方是抄寫室' },
      { direction: 'east', targetRoomId: 'celestial_lumen_archive', description: '光頁階梯通向流明檔案庫' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'lumen_scribe_construct', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[書]',
    mapX: 4,
    mapY: 35,
    guardianHints: {
      creature: '神造兵器有極高的物理防禦——使用魔法攻擊或尋找它們的核心弱點更有效。',
      treasure: '某些光之書冊中記載著失傳的神聖技能——閱讀它們可能習得強大的新能力。',
      spirit: '圖書館記載著從創世到末日的所有知識——包括戰勝戰神的方法。',
    },
  },

judgment_hall: {
    id: 'judgment_hall',
    name: '審判大廳',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'judgment_hall.png',
    imagePrompt: '審判大廳 in celestial_ruins, solemn hall with divine judgment murals, glowing scales, angel juror silhouettes and white gold pillars, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain hall, clear lantern light',
    description:
      '一座莊嚴肅穆的大廳，穹頂上繪著諸神審判的壁畫。' +
      '大廳中央的天秤仍在緩慢擺動，衡量著每一個進入者的善惡。' +
      '兩排由光線構成的陪審席上坐著沉默的天使虛影，注視著到來的冒險者。每當武器出鞘，穹頂壁畫就會改變內容，把進入者過去的選擇投射成金白與黑灰兩色。大廳地面刻著數百條審判法則，其中有些已被深淵裂痕污染，導致神聖裁決不再完全公正。玩家若想通往天界王座，必須理解天秤偏移的原因，而不是單純擊倒守衛。審判席後方還有通往懺悔階的窄門，只有承認錯誤的人才會看見門縫中的白光。',
    exits: [
      { direction: 'west', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'east', targetRoomId: 'celestial_throne_room', description: '大廳盡頭通往天界王座' },
      { direction: 'north', targetRoomId: 'celestial_penitent_steps', description: '審判席後有懺悔階' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'corrupted_halo_judge', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
    ],
    npcs: ['celestial_judgment_advocate'],
    mapSymbol: '[判]',
    mapX: 4,
    mapY: 36,
    guardianHints: {
      creature: '天秤會根據戰鬥方式影響你的狀態——正大光明的戰鬥會獲得增益，卑鄙手段會遭受懲罰。',
      treasure: '天秤的底座中封存著審判之劍的碎片——集齊所有碎片可以重鑄神器。',
      spirit: '審判大廳曾是諸神裁決凡人命運的場所——在這裡做出的選擇會影響最終戰鬥。',
    },
  },

celestial_throne_room: {
    id: 'celestial_throne_room',
    name: '天界王座',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_throne_room.png',
    imagePrompt: '天界王座 in celestial_ruins, grand celestial throne hall of pure light, white platinum throne, rotating stars in ceiling, divine pressure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain hall, clear lantern light',
    description:
      '天界最宏偉的殿堂，穹頂由純淨的光線構成，無數星辰在其中旋轉。' +
      '一座由永恆白金鑄造的王座矗立在殿堂最高處，王座上空無一人，' +
      '但王座本身散發的神聖威壓足以讓凡人跪地臣服。通往最終之間的道路就在王座背後。王座階梯兩側排列著破碎冠冕與戰旗，記錄曾經挑戰神權的王國與英雄。深淵裂隙造成的黑色細紋已爬上白金扶手，讓空置王座看起來像正在等待新的審判者。只有理解審判、聖所與軍械庫留下的線索，才能判斷最終光門究竟是祝福還是試煉。王座側面的黎明武庫仍傳來機械啟動聲，表示最終防線尚未完全沉默。',
    exits: [
      { direction: 'south', targetRoomId: 'angel_garden', description: '退回天使花園' },
      { direction: 'west', targetRoomId: 'judgment_hall', description: '回到審判大廳' },
      { direction: 'east', targetRoomId: 'celestial_armory_of_dawn', description: '王座側門通往黎明武庫' },
      { direction: 'north', targetRoomId: 'god_chamber', description: '王座背後的光門通往神之間' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
    ],
    groundItems: [
      { itemId: 'celestial_fragment', description: '王座旁散落著天界碎片' },
    ],
    mapSymbol: '[座]',
    mapX: 3,
    mapY: 38,
    guardianHints: {
      creature: '王座的威壓會隨著距離增加——在王座附近戰鬥會受到持續傷害。',
      treasure: '王座上曾放置著諸神之王的權杖——現在權杖不知所蹤，但印記仍在。',
      spirit: '坐上這座王座的人將承受諸神的記憶——只有心智最堅強的人才能承受。',
    },
  },

eternal_sanctuary: {
    id: 'eternal_sanctuary',
    name: '永恆聖所',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'eternal_sanctuary.png',
    imagePrompt: '永恆聖所 in celestial_ruins, small forgotten chapel with creation mural, eternal fire, warm holy light and fallen angel shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '一座被時間遺忘的小型聖堂，穹頂上的壁畫描繪著世界創生的場景。' +
      '聖堂中央的永恆之火仍在燃燒，散發出溫暖而安詳的光芒。' +
      '這裡是天界最後的寧靜之地，據說在此祈禱可以恢復所有傷勢。聖堂長椅上覆著薄薄星塵，幾件破裂羽甲整齊擺放，像守衛臨走前仍保持儀式。永恆之火的外焰呈金色，內焰卻帶著微弱黑影，暗示深淵污染已經觸碰到最神聖的地方。玩家可在此獲得喘息，也可能面對曾守護聖所的墮天使試煉。聖火後方的暗門通往聖物庫，裡面保存著淨化污染與修復封印所需的關鍵材料。',
    exits: [
      { direction: 'east', targetRoomId: 'angel_garden', description: '回到天使花園' },
      { direction: 'north', targetRoomId: 'celestial_reliquary', description: '聖火後方藏著聖物庫' },
      { direction: 'south', targetRoomId: 'celestial_broken_colonnade', description: '側門回到破碎柱廊' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[聖]',
    mapX: 2,
    mapY: 37,
    guardianHints: {
      creature: '聖所中的墮天使比其他地方的更加強大——牠們曾是聖所的守護者。',
      treasure: '永恆之火可以淨化任何被詛咒的物品——將被污染的裝備帶來這裡試試。',
      spirit: '聖所是諸神最初祈禱的地方——在這裡虔誠祈禱可能觸發隱藏的祝福事件。',
    },
  },

god_chamber: {
    id: 'god_chamber',
    name: '神之間',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'god_chamber.png',
    imagePrompt: '神之間 in celestial_ruins, perfect circular chamber of pure light, sleeping war god in golden armor floating at center, final trial, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain chamber, clear lantern light',
    description:
      '天界遺跡的最深處，一個完美的圓形空間。牆壁、地面和天頂都由純粹的光構成。' +
      '空間正中央懸浮著一位身著金色戰甲的神祇——戰神，沉睡中的他仍散發著毀天滅地的威壓。' +
      '當冒險者踏入這片領域的瞬間，戰神的雙眼猛然睜開，億萬年的寂靜在此刻被打破。' +
      '這是這個世界最強大的存在，也是最終的挑戰。圓形空間外圍漂浮著十二面戰旗，每一面都記錄一場曾由戰神親自終結的遠古戰爭。旗影在地面形成不同武器圖案，預告戰神甦醒後可能切換的攻擊姿態。西側星軌門與東側封印裂縫同時發光，表示這場戰鬥不只決定勝負，也會決定天界遺跡是否繼續封鎖深淵。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_throne_room', description: '退回天界王座' },
      { direction: 'east', targetRoomId: 'celestial_final_seal', description: '神光裂縫通向最終封印' },
      { direction: 'west', targetRoomId: 'celestial_astral_observatory', description: '星軌門連到天象觀測所' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'god_of_war', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[神]',
    mapX: 3,
    mapY: 39,
    guardianHints: {
      creature: '戰神會隨著戰鬥進程切換三個階段——每個階段的攻擊模式和弱點完全不同。',
      treasure: '戰神的神槍是這個世界上最強大的武器——只有擊敗他才能獲得。',
      spirit: '戰神並非邪惡——他在此等待一位值得繼承神力的勇者。這場戰鬥是最終的考驗。',
    },
  },

celestial_starfall_plaza: {
    id: 'celestial_starfall_plaza',
    name: '墜星廣場',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_starfall_plaza.png',
    imagePrompt: '墜星廣場 in celestial_ruins, white gold plaza covered in fallen star shards, broken angel statues, abyss scar at gate edge, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '天界之門西側是一片廣場，地面由白金石板鋪成，卻被無數墜星碎片砸出細密裂坑。破碎天使像倒在四周，石翼仍反射著微弱星光。廣場中央有一圈尚未熄滅的防禦法陣，陣線一端連著天界之門，另一端指向破碎柱廊。這裡曾是抵禦深淵入侵的第一道防線，現在則成為玩家辨認天界戰況與收集星辰材料的入口支線。若修復法陣缺口，廣場會短暫投影出深淵攻城時的路線，揭露哪些守衛在戰前失蹤。廣場外緣還有幾座半毀傳送台，台面符號與凡間多處遺跡相同，暗示天界曾直接監看世界各地。',
    exits: [
      { direction: 'east', targetRoomId: 'celestial_gate', description: '回到天界之門' },
      { direction: 'north', targetRoomId: 'celestial_broken_colonnade', description: '裂痕道路通向破碎柱廊' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'starfall_sentinel', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[墜]',
    mapX: 2,
    mapY: 35,
    guardianHints: {
      creature: '墮天使會利用倒塌雕像遮蔽施法，先移動到廣場中央較易觀察。',
      treasure: '墜星碎片可作為神聖與星光屬性的高階材料。',
      spirit: '廣場上的防禦法陣證明天界曾主動抵抗深淵，而非單純衰敗。',
    },
  },
};
