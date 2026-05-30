import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_006: Record<string, RoomDef> = {
wildgrass_hills_hawk_perch: {
    id: 'wildgrass_hills_hawk_perch',
    name: '鷹棲柱',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_hawk_perch.png',
    imagePrompt: '鷹棲柱 in wildgrass_hills, tall stone perch with wind hawks, nests, feathers and sweeping hill view, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '泥窪北側的石柱從草地裡孤立聳起，頂端築著幾座用枯枝、布片和細骨堆成的鷹巢。風之鷹沿著上升氣流盤旋，會在獵物露出破綻時從背光處俯衝。柱腳有許多被摔碎的甲片和閃亮小物，是猛禽從戰場或商路叼回的戰利品。玩家可攀爬石縫採集羽毛、尋找被偷走的任務物，也能從高處看見看火營與雷丘。這裡視野開闊但缺少掩體，遠程敵人與空中敵人會同時施壓。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_scout_ledge', description: '岩脊回到斥候岩臺' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_boar_wallow', description: '下方是野豬泥窪', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '煙火來自看火營' },
    ],
    monsters: [
      { monsterId: 'windscar_hawk', maxCount: 4, respawnSeconds: 90 },
      { monsterId: 'grassblade_raider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[鷹]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '鷹影消失在太陽旁時，下一次俯衝通常最危險。',
      treasure: '巢裡常有被叼回的戒指、扣環與羽毛材料。',
      spirit: '鷹棲柱讓荒草丘陵的天空也成為戰場。',
    },
  },

wildgrass_hills_stone_ring: {
    id: 'wildgrass_hills_stone_ring',
    name: '風刻石環',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_stone_ring.png',
    imagePrompt: '風刻石環 in wildgrass_hills, ancient stone ring carved by wind, grass, runes, storm light and open hilltop, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '斥候岩臺北面有一圈古老立石，石面被風砂磨得圓滑，只剩幾道像閃電與草籽交纏的符號。高草在石環內倒伏成螺旋，中央堆著乾草、獸骨和焦黑祭灰。哥布林不敢長久停留，只會把偷來的護符丟進環中換取風向庇護。這裡是探索與任務線索房，玩家可解讀符號，得知雷丘並非自然形成，而是舊祭儀引來的風暴焦點。石環偶爾會讓聲音失真，使怪物從錯誤方向靠近。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'south', targetRoomId: 'wildgrass_hills_scout_ledge', description: '下坡回到斥候岩臺', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_thunder_mound', description: '石環缺口指向雷丘' },
      { direction: 'west', targetRoomId: 'wildgrass_hills_seed_gully', description: '草籽溝在西側' },
    ],
    monsters: [
      { monsterId: 'windscar_hawk', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'stormbanner_champion', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[環]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '石環內的回聲會誤導方向，注意草葉真正倒伏處。',
      treasure: '祭灰底下埋著幾枚被風磨亮的護符。',
      spirit: '風刻石環保存著丘陵比哥布林更古老的記憶。',
    },
  },

wildgrass_hills_orchard_ruin: {
    id: 'wildgrass_hills_orchard_ruin',
    name: '果園廢址',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_orchard_ruin.png',
    imagePrompt: '果園廢址 in wildgrass_hills, abandoned hill orchard, dead fruit trees, broken fence, yellow grass and goblin tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '泥窪東面仍能看見一片舊果園的輪廓，矮牆倒塌，乾枯果樹被高草吞沒，只剩幾顆酸澀野果掛在扭曲枝頭。樹幹上刻著農戶撤離前留下的數字，旁邊卻被哥布林加上粗糙塗鴉，標記可藏箭、可埋伏和可燒毀的位置。這裡是資源與敘事房，玩家能採集野果、乾木與舊農具，也能追查荒草丘陵從農地變成戰場的過程。果園視線被樹影切碎，野豬敵群會從破籬後衝出，哥布林盜匪則躲在倒木後投石。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_boar_wallow', description: '泥路回到野豬泥窪' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_goblin_blind', description: '樹後有哥布林伏棚' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '煙味從北面傳來', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormtusk_boar', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'grassblade_raider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[園]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '倒木後的草葉抖動時，哥布林戰士正在換位。',
      treasure: '空心果樹裡藏著農戶沒帶走的銅幣袋。',
      spirit: '果園廢址提醒旅人，這裡曾經不是荒地。',
    },
  },

wildgrass_hills_goblin_blind: {
    id: 'wildgrass_hills_goblin_blind',
    name: '哥布林伏棚',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_goblin_blind.png',
    imagePrompt: '哥布林伏棚 in wildgrass_hills, crude goblin hunting blind hidden in grass and orchard debris, bows, traps, smoke, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '果園廢址東側架著幾座低矮伏棚，用乾草、破布和果樹枝偽裝成自然草堆。棚內擺著短弓、投石袋、捕獸夾和簡陋骨笛，地面還畫著附近路線的粗略地圖。東側能看見風車空殼，但伏棚後方草徑布滿捕獸夾，實際需從看火營破路前往風車。這是哥布林斥候和戰士混合出沒的伏擊房，玩家若直接穿過，會同時觸發陷阱與遠程攻擊。仔細拆除伏棚可取得巡邏線索，得知看火營、酋長脊與雷丘之間如何互相傳訊。棚後藏有一條被草蓋住的小徑，可以繞開部分主路危險。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_orchard_ruin', description: '回到果園廢址' },
      {
        direction: 'north',
        targetRoomId: 'wildgrass_hills_watchfire_camp',
        description: '北側要拆開伏棚後方草網，避過捕獸夾與煙火哨線才進入看火營邊緣',
        edgeKind: 'distant_route',
        edgeNote: '哥布林伏棚到看火營需要穿過草網陷阱與煙火哨線，屬於丘陵內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'grassblade_raider', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'stormbanner_champion', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[伏]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '骨笛響起時，附近伏棚會一起現身射擊。',
      treasure: '棚底地圖可標出一條繞往酋長脊的支路。',
      spirit: '伏棚顯示哥布林已把丘陵當作自己的獵場經營。',
    },
  },

wildgrass_hills_thunder_mound: {
    id: 'wildgrass_hills_thunder_mound',
    name: '雷擊丘',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_thunder_mound.png',
    imagePrompt: '雷擊丘 in wildgrass_hills, storm-struck mound, blackened grass, cracked stones, lightning scars and windy sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sky, clear lantern light',
    description:
      '風刻石環東側隆起一座焦黑小丘，草根像被雷火燒成細炭，石縫仍殘留淡淡藍光。每逢雲影掠過，丘頂便傳來低沉轟鳴，讓金屬裝備微微發麻。哥布林把這裡當成試膽地點，會把俘虜綁在焦木旁等待風暴裁決。這裡是大型事件前置房，玩家可收集雷痕石、調查祭儀殘留，並理解荒草丘陵的風暴力量為何逐漸失控。若在雷鳴時戰鬥，風之鷹怪群與雷丘祭司敵人會變得更躁動，整個戰場也更難掌控。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_stone_ring', description: '焦草路回到石環' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_chief_ridge', description: '雷痕延向酋長脊' },
      {
        direction: 'south',
        targetRoomId: 'wildgrass_hills_watchfire_camp',
        description: '南側焦草坡要繞過雷痕裂石與幾段鬆動土脊，才下到看火營煙火旁',
        edgeKind: 'distant_route',
        edgeNote: '雷擊丘到看火營需要沿焦草坡與雷痕裂石繞行，屬於丘陵內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'windscar_hawk', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'thunder_mound_shaman', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[雷]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '雷鳴後短暫靜默時，敵人通常會一起衝鋒。',
      treasure: '焦黑石縫裡能挖出帶電的雷痕石。',
      spirit: '雷擊丘像天空反覆敲在地面上的警告。',
    },
  },

wildgrass_hills_seed_gully: {
    id: 'wildgrass_hills_seed_gully',
    name: '種籽溝',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_seed_gully.png',
    imagePrompt: '種籽溝 in wildgrass_hills, sheltered gully full of grass seeds, seed heads, bent oak roots and warm wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '彎橡樹東側的淺溝聚滿被風吹落的草籽，金黃籽穗堆在石縫、樹根和小水窪邊，像一條細碎河流。這裡比主坡安靜，許多小動物、野豬敵群與風暴蛇都會來翻找食物，也吸引哥布林收集乾籽製作引火包。玩家可採集草籽、草藥根與乾燥纖維，完成補給或製作任務。溝底有幾處被刻意鋪平，像是舊農人曾經用來晾種的地方。若仔細尋找，還能找到通往石環的古老腳印，證明此地曾被祭儀使用。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'wildgrass_hills_bent_oak',
        description: '西側回彎橡樹要沿種籽堆與裸露樹根逆坡而上，穿過一段避風草溝',
        edgeKind: 'distant_route',
        edgeNote: '種籽溝回彎橡樹需要沿種籽堆、裸露樹根與避風草溝上行，屬於丘陵內長路徑。',
      },
      { direction: 'east', targetRoomId: 'wildgrass_hills_stone_ring', description: '舊腳印通向石環' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_broken_totem', description: '溝尾立著斷圖騰', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormgrass_serpent', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'stormtusk_boar', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[籽]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '草籽突然大片飛起時，野獸正在溝底奔跑。',
      treasure: '最乾燥的籽穗可作為火種與藥材基底。',
      spirit: '種籽溝保留著荒地重新生長的能力。',
    },
  },

wildgrass_hills_watchfire_camp: {
    id: 'wildgrass_hills_watchfire_camp',
    name: '看火營',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_watchfire_camp.png',
    imagePrompt: '看火營 in wildgrass_hills, goblin watchfire camp on hill saddle, smoke, hide tents, weapon racks and dry grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain camp, clear lantern light',
    description:
      '鷹棲柱與雷擊丘之間的鞍部搭著一座哥布林看火營，幾堆煙火用濕草悶燒，能把信號送到酋長脊和伏棚。營地用獸皮、破帆布和果園木板搭成，武器架上掛滿短矛、投石袋與偷來的銅鍋。這裡是丘陵中段的高密度戰鬥與任務房，玩家可以破壞煙火、奪取巡邏令牌，或解救被綁在木柱旁的旅人。營地四周沒有城牆，卻被高草與陷坑保護；若沒有先觀察煙向，很容易從錯誤入口闖進包圍圈。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_hawk_perch', description: '石柱在西側' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_orchard_ruin', description: '坡下是果園廢址', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_windmill_shell', description: '破路通向風車空殼' },
      {
        direction: 'north',
        targetRoomId: 'wildgrass_hills_thunder_mound',
        description: '北側焦草坡要穿過煙火外圈與幾道鬆動土脊，才抵達雷擊丘裂石下方',
        edgeKind: 'distant_route',
        edgeNote: '看火營到雷擊丘需要穿過煙火外圈、焦草坡與鬆動土脊，屬於丘陵內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'grassblade_raider', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'stormbanner_champion', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[火]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '先熄掉煙火可降低附近哥布林增援速度。',
      treasure: '巡邏令牌掛在最大帳篷的骨釘上。',
      spirit: '看火營是哥布林掌控丘陵節奏的鼓點。',
    },
  },

wildgrass_hills_windmill_shell: {
    id: 'wildgrass_hills_windmill_shell',
    name: '風車空殼',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_windmill_shell.png',
    imagePrompt: '風車空殼 in wildgrass_hills, ruined hill windmill shell, broken sails, gears, dry grass and goblin marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '看火營東側殘留一座舊風車，木翼早被強風吹斷，只剩石塔空殼和卡住的齒輪。塔內牆上刻著農戶收成記號，外牆則被哥布林塗上戰利品數量。風穿過破窗時會帶動斷齒輪發出沉重敲擊，像有人在塔內拖著鎖鏈。這裡是探索與捷徑房，玩家能修復部分機關，放下通往酋長脊的繩梯，也能找到失落農具與舊倉庫鑰匙。塔內狹窄，哥布林首領敵人會利用樓梯轉角逼近，風之鷹怪群則從破窗撲入。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '煙火營在西側' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_goblin_blind', description: '草棚伏點在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'wildgrass_hills_chief_ridge',
        description: '北側塔後繩梯要先爬過風車石殼，再沿暴露山脊貼著旗桿走到酋長脊',
        edgeKind: 'distant_route',
        edgeNote: '風車空殼到酋長脊需要攀爬塔後繩梯並穿過暴露山脊，屬於丘陵內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'stormbanner_champion', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'windscar_hawk', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[車]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '齒輪聲突然停住時，塔內敵人正在等你轉角。',
      treasure: '石塔二層藏著舊倉庫鑰匙和農具零件。',
      spirit: '風車空殼讓人看見丘陵被放棄以前的生活。',
    },
  },

wildgrass_hills_hidden_spring: {
    id: 'wildgrass_hills_hidden_spring',
    name: '隱泉',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_hidden_spring.png',
    imagePrompt: '隱泉 in wildgrass_hills, hidden spring under bent grass and stones, clear water, reeds, animal tracks, soft light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain water, clear lantern light',
    description:
      '彎橡樹北面的濕草一路引到一處被石塊遮住的泉眼，清水從岩縫滲出，形成小小水潭。潭邊有野豬、狼、鷹和哥布林混雜的足跡，代表所有生物都知道這是丘陵最穩定的水源。泉水清甜，卻在雷雨前會泛出細小氣泡，像地下也在回應雷擊丘。這裡是補給與事件房，玩家可取水、採集水草，或發現被藏在石後的求救布條。若在此休息太久，爭水的野獸會陸續靠近。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'wildgrass_hills_bent_oak',
        description: '南側回彎橡樹要沿濕草暗渠穿過碎石與低垂樹冠，最後繞到樹根背風面',
        edgeKind: 'distant_route',
        edgeNote: '隱泉回彎橡樹需要沿濕草暗渠、碎石與低垂樹冠繞行，屬於丘陵內長路徑。',
      },
      {
        direction: 'west',
        targetRoomId: 'wildgrass_hills_stream_cut',
        description: '西側泉水要順著暗溝流過蘆葦、滑石與低草窄岸，才落入較低處的溪切溝',
        edgeKind: 'distant_route',
        edgeNote: '隱泉到溪切溝需要順暗溝穿過蘆葦與滑石，屬於丘陵內長路徑。',
      },
      { direction: 'east', targetRoomId: 'wildgrass_hills_broken_totem', description: '石後小徑通向斷圖騰', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormtusk_boar', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'stormgrass_serpent', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[泉]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '水面連續冒泡時，附近生物都會變得不安。',
      treasure: '石後布條指向一名失蹤旅人的藏身處。',
      spirit: '隱泉是荒草丘陵少數還願意給予的地方。',
    },
  },

wildgrass_hills_broken_totem: {
    id: 'wildgrass_hills_broken_totem',
    name: '斷圖騰',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_broken_totem.png',
    imagePrompt: '斷圖騰 in wildgrass_hills, broken wooden totem on windy hill, charms, skulls, grass seeds and storm signs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '隱泉東側的小丘立著半截斷裂圖騰，木面刻有草籽、風線和張口獸首，頂端被雷火劈黑。哥布林在圖騰周圍插上獸骨，試圖把古老標記改造成部落戰旗，但每次大風都會把骨牌吹散。東側草脊通向風暴草冠的痕跡仍在，但斷旗與骨牌擋住上坡路，需從酋長脊進入最高草冠後再折返。這裡是精英前置與任務線索房，玩家能比較圖騰符號與石環刻痕，推斷丘陵曾有守風祭儀。斷木內部藏著空腔，裡面有一卷被油布保護的舊誓詞。取走誓詞會引來巡邏隊，也會打開通往風暴草冠的線索。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_hidden_spring', description: '石徑回到隱泉', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_seed_gully', description: '下坡是種籽溝', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_fill_3_n8', description: '東側斷旗坡道通往風暴草冠' },
    ],
    monsters: [
      { monsterId: 'stormbanner_champion', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'thunder_mound_shaman', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[騰]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '骨牌被風吹成圓圈時，巡邏隊快到了。',
      treasure: '圖騰空腔中藏著守風誓詞。',
      spirit: '斷圖騰顯示守護信仰已被部落戰旗取代。',
    },
  },

wildgrass_hills_chief_ridge: {
    id: 'wildgrass_hills_chief_ridge',
    name: '酋長脊',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_chief_ridge.png',
    imagePrompt: '酋長脊 in wildgrass_hills, ridge camp of goblin chief, banners, bone throne, storm clouds and dry grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain camp, clear lantern light',
    description:
      '雷擊丘東側的長脊被哥布林改造成首領營地，骨旗沿著稜線排列，中央有一張用野豬獠牙和舊車輪拼成的粗糙王座。從這裡可以俯瞰看火營、風車和大片高草，任何闖入者都很難避開巡邏目光。酋長會在風最大時召集戰士，讓吼聲順著山脊傳遍丘陵。王座旁堆著從旅人身上搶來的路牌、鍋具和破甲，像一座炫耀戰利品的小山。這裡是精英戰鬥房，玩家可挑戰哥布林首領、奪取部落號角，或破壞控制巡邏的旗令。若未先削弱看火營與伏棚，這場戰鬥會持續召來支援，直到旗號全被奪下為止才會停止。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_thunder_mound', description: '焦草脊回到雷擊丘' },
      {
        direction: 'south',
        targetRoomId: 'wildgrass_hills_windmill_shell',
        description: '南側要沿暴露山脊下行，再攀著塔後繩梯越過破窗，落回風車石殼內部',
        edgeKind: 'distant_route',
        edgeNote: '酋長脊回風車空殼需要沿暴露山脊下行並攀回塔後繩梯，屬於丘陵內長路徑。',
      },
      { direction: 'east', targetRoomId: 'wildgrass_hills_stormgrass_crown', description: '最高草冠在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormgrass_warlord', maxCount: 1, respawnSeconds: 1500 },
      { monsterId: 'stormbanner_champion', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'grassblade_raider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[酋]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '酋長吹響號角前打斷，可避免額外戰士加入。',
      treasure: '骨座後方掛著控制巡邏旗令的繩結。',
      spirit: '酋長脊是哥布林把恐懼變成統治的地方。',
    },
  },

wildgrass_hills_stormgrass_crown: {
    id: 'wildgrass_hills_stormgrass_crown',
    name: '風暴草冠',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_stormgrass_crown.png',
    imagePrompt: '風暴草冠 in wildgrass_hills, highest crown of storm-tossed grass, lightning sky, ancient marker stones, wild banners, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain sky, clear lantern light',
    description:
      '酋長脊東端升到荒草丘陵最高處，整片草冠被狂風壓成巨大旋渦，像一頂不停轉動的金色王冠。中央立著幾塊古老界石，石縫間有雷痕、草籽和被綁住的部落旗。當雲層低垂時，風會在草冠中心形成肉眼可見的漏斗，將聲音、灰燼與羽毛全捲向天空。界石底部還有被草根纏住的舊祭盤，盤面刻著安撫風暴的步驟，只是關鍵符號被哥布林刀痕刮壞。這裡是荒草丘陵的大型事件鉤子與最終地標，玩家可用守風誓詞安撫風暴，也可擊敗首領後拆除旗幟，讓丘陵巡邏失去統一指揮。若選擇強行採集雷草，整片草冠會引來猛禽與殘餘戰士。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'wildgrass_hills_chief_ridge',
        description: '北側山脊沿旗索與斜坡繞回酋長營地',
        edgeKind: 'distant_route',
        edgeNote: '風暴草冠回酋長脊需沿斜向山脊與旗索坡道繞行，屬於丘陵內長路徑。',
      },
      { direction: 'west', targetRoomId: 'wildgrass_hills_fill_5_n8', description: '西側草脊穿過界石陰影回往斷圖騰' },
    ],
    monsters: [
      { monsterId: 'thunder_mound_shaman', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'windscar_hawk', maxCount: 3, respawnSeconds: 90 },
      { monsterId: 'stormbanner_champion', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[冠]',
    mapX: 5,
    mapY: 3,
    guardianHints: {
      creature: '草冠中央形成漏斗時，空中敵人會連續俯衝。',
      treasure: '雷草只在界石陰影內保持完整形態。',
      spirit: '風暴草冠是整片丘陵的怒氣與生命力交會處。',
    },
  },

wildgrass_hills_old_road_cut: {
    id: 'wildgrass_hills_old_road_cut',
    name: '舊路切口',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_old_road_cut.png',
    imagePrompt: '舊路切口 in wildgrass_hills, eroded old road cut below grass hills, milestone, wagon ruts, dusk wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain road, clear lantern light',
    description:
      '防風柵門南側有一段被溪水和車輪切出的舊路，路面低於草坡，兩側土壁露出層層壓實的輪轍。半倒里程碑標著通往西境村落的方向，旁邊還有商隊臨時修車留下的鐵釘與木楔。這裡是荒草丘陵的撤離與捷徑交通房，玩家可從溪切溝繞回入口，也能在完成酋長脊事件後護送旅人離開。雖然比主坡安全，舊路仍會被流竄野獸利用；若忽視土壁上的新爪痕，回程也可能遭遇伏擊。',
    exits: [
      { direction: 'north', targetRoomId: 'wildgrass_hills_windbreak_gate', description: '坡上是防風柵門', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_fill_2_n12', description: '東側風口通道連向溪切溝' },
    ],
    monsters: [
      { monsterId: 'stormgrass_serpent', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'grassblade_raider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[路]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '土壁上出現新爪痕時，回程路線已被盯上。',
      treasure: '里程碑背面嵌著商隊留下的緊急路費。',
      spirit: '舊路切口讓丘陵仍保有一條通向人煙的脈絡。',
    },
  },

mist_harbor_fog_gate: {
    id: 'mist_harbor_fog_gate',
    name: '霧港城門',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_fog_gate.png',
    imagePrompt: '霧港城門 in mist_harbor, harbor town stone gate in heavy sea fog, wet cobbles, lanterns, gull silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '霧港城門不是高牆要塞，而是一座跨在濕滑石路上的拱門，門頂掛著被海鹽腐蝕的銅鐘。霧從港灣一路推進城內，讓旅人只能看見近處燈火與地上閃亮水痕。守門人會在這裡檢查船票、旅店名牌與貨運封條，也提醒新來者別在退潮前靠近外防波堤。這裡是霧港的入口與回程錨點，玩家可接到尋船、護送與失物任務，並從路牌判斷市集、傳送燈塔與舊海門方向。城門旁的公告板每天都會被潮氣弄皺，卻仍貼滿急件；若公告被撕下，通常代表某艘船的消息被人刻意封住。門洞下方還留著昨夜車輪壓出的深痕。',
    exits: [
      { direction: 'east', targetRoomId: 'mist_harbor_tide_plaza', description: '濕石路通向潮汐廣場' },
      { direction: 'south', targetRoomId: 'mist_harbor_sea_gate', description: '城牆坡道通往舊海門', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '霧港城門雖安全，但可疑腳印常從公告板旁消失。',
      treasure: '公告板背後夾著幾張未領取的貨運憑單。',
      spirit: '城門把陸路旅人交給海霧，也把霧港的規矩交給旅人。',
    },
  },

mist_harbor_tide_plaza: {
    id: 'mist_harbor_tide_plaza',
    name: '潮汐廣場',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_tide_plaza.png',
    imagePrompt: '潮汐廣場 in mist_harbor, wet harbor town plaza with tide clock, lantern poles, misty market arches, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '潮汐廣場鋪著深灰石板，中央立著一座以浮標、齒輪和月相盤組成的潮鐘。每當潮位改變，鐘內銅錘便敲出低沉聲響，提醒商人調整船期，也提醒漁民避開暗流。廣場四周連著魚市、海關、旅店與傳送燈塔，是霧港最常被任務、交易與找人流程使用的核心房。街邊攤販用油布蓋住貨箱，霧中能聞到鹽、焦糖、魚腥與濕繩混合的味道。玩家可在此確認城市路線、等待 NPC 會合，或從潮鐘記錄推斷某艘船是否在夜裡偷偷進港。廣場石縫裡積著退潮留下的白鹽，像一圈圈未完成的航線。每次鐘響都會讓霧裡的人群短暫停步。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_fog_gate', description: '濕路回到城門' },
      { direction: 'north', targetRoomId: 'mist_harbor_portal_lantern', description: '藍燈指向傳送燈塔', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'mist_harbor_fish_market', description: '魚腥與叫賣聲來自魚市' },
      { direction: 'south', targetRoomId: 'mist_harbor_customs_house', description: '石階通往海關廳', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[廣]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '廣場安全，但潮鐘異常會引出港務任務。',
      treasure: '潮鐘底座藏著被人刮花的船名清單。',
      spirit: '潮汐廣場是霧港的節拍器，所有行程都跟著它呼吸。',
    },
  },

mist_harbor_portal_lantern: {
    id: 'mist_harbor_portal_lantern',
    name: '傳送燈塔',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_portal_lantern.png',
    imagePrompt: '傳送燈塔 in mist_harbor, blue portal lantern tower in harbor fog, rune mirrors, wet steps, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain tower, clear lantern light',
    description:
      '潮汐廣場北側矗立著一座短塔，塔頂不是火焰，而是一盞被符文鏡片包住的藍色傳送燈。燈光穿過海霧後像水波一樣擴散，能與公共傳送網路對齊，讓旅人從遠方城市抵達霧港。塔內石階總是潮濕，牆上掛滿各地港印與傳送費率牌。這裡是霧港的主要傳送節點，玩家可使用公共傳送、設定回城位置、查詢船運目的地，也能接到修復鏡片與追查錯誤傳送記錄的任務。若燈色偏綠，代表霧港外海正在出現異常魔潮；守塔人會立刻封存當日名冊，等待可靠冒險者核對。塔底水槽會收集傳送後落下的鹽霧結晶。',
    exits: [
      { direction: 'south', targetRoomId: 'mist_harbor_tide_plaza', description: '石階回到潮汐廣場', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'mist_harbor_chart_archive', description: '塔後小門通向海圖檔案室', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'mist_harbor_lighthouse_stairs', description: '燈塔橋連往燈室階梯', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[傳]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '傳送燈塔沒有怪物，但燈色異常意味著外海副本開啟。',
      treasure: '費率牌背後壓著一枚過期港印。',
      spirit: '傳送燈把霧港從偏遠港鎮變成東海交通節點。',
    },
  },

mist_harbor_customs_house: {
    id: 'mist_harbor_customs_house',
    name: '海關廳',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_customs_house.png',
    imagePrompt: '海關廳 in mist_harbor, harbor customs hall with ledgers, wet crates, brass scales, foggy windows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '海關廳是一棟低矮石屋，窗戶常被霧水糊成乳白色，屋內卻點著明亮油燈。長桌上攤著貨運簿、關稅印章、銅秤與未拆封的潮濕木箱，港務員在此核對每一批進出霧港的船貨。這裡是服務與任務房，玩家可登記貿易貨物、查詢船名、繳納港稅，也能接到追查走私印章或尋找失蹤貨箱的委託。牆上掛著近三十日的進港表，其中幾行被墨水暈開，像有人刻意在霧夜改過紀錄。通往倉庫與船長辦公室的門永遠有人盯著。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_tide_plaza', description: '台階回到潮汐廣場', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'mist_harbor_warehouse_nine',
        description: '東側封條門後需穿過海關內廊、貨物檢查桌與濕木箱通道，才會抵達九號倉',
        edgeKind: 'distant_route',
        edgeNote: '海關廳到九號倉需穿過內廊與貨物檢查區，距離長於相鄰格。',
      },
      { direction: 'south', targetRoomId: 'mist_harbor_captains_office', description: '內廊通向船長辦公室', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[關]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '海關廳安全，但錯誤帳頁會引出走私線索。',
      treasure: '銅秤底座刻著一串倉庫暗號。',
      spirit: '海關廳把霧港的混亂壓進表格與印章裡。',
    },
  },

mist_harbor_fish_market: {
    id: 'mist_harbor_fish_market',
    name: '晨霧魚市',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_fish_market.png',
    imagePrompt: '晨霧魚市 in mist_harbor, misty fish market with wet stalls, lanterns, silver fish, shouting vendors, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain market, clear lantern light',
    description:
      '晨霧魚市從天未亮就開始吵鬧，濕木桌上堆著銀鱗魚、黑殼蟹、海草籃和仍在滴水的網袋。攤販用鐵鉤敲桶喊價，廚師、藥師與水手在霧裡互相討價還價。這裡是交易與採集交付房，玩家可購買食材、交付釣魚成果、尋找海怪目擊者，也能從異常魚獲判斷外海副本狀況。魚市後方有一條滑膩小巷通往走私者活動區，地上常混著魚血與看不清來源的黑色油跡。若某天魚市突然安靜，通常代表霧裡出了大事。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_tide_plaza', description: '叫賣聲回到廣場' },
      { direction: 'east', targetRoomId: 'mist_harbor_sailmakers_row', description: '帆布棚連向帆匠街' },
      { direction: 'north', targetRoomId: 'mist_harbor_warehouse_nine', description: '倉庫濕巷回到九號倉' },
    ],
    mapSymbol: '[魚]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '魚市安全，但異常魚獲會觸發外海調查。',
      treasure: '最大魚桶底部有被海水泡脹的走私便條。',
      spirit: '晨霧魚市是霧港醒來的第一聲。',
    },
  },

mist_harbor_sailmakers_row: {
    id: 'mist_harbor_sailmakers_row',
    name: '帆匠街',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_sailmakers_row.png',
    imagePrompt: '帆匠街 in mist_harbor, narrow sailmaker street with hanging canvas, ropes, needles, fog and harbor lamps, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain street, clear lantern light',
    description:
      '帆匠街兩側掛滿正在晾乾的帆布，厚重布面吸飽海霧，像一排排低垂白牆。工匠坐在棚下補縫破洞、測試防水蠟，也替冒險者修補背包、斗篷與船用繩索。這裡是城鎮服務房，玩家可購買繩索、修理航海裝備、委託製作帆布包，或從老帆匠口中聽到風向與失事船的傳聞。街道盡頭接著船匠塢，腳下排水溝則會把細碎布條沖向走私巷。霧重時，垂帆之間的人影很難分辨，適合秘密會面，也適合偷換貨籤。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_fish_market', description: '帆布棚回到魚市' },
      { direction: 'east', targetRoomId: 'mist_harbor_shipwright_yard', description: '木槌聲來自船匠塢' },
      { direction: 'north', targetRoomId: 'mist_harbor_guild_quay', description: '繩梯下到公會碼頭' },
      { direction: 'south', targetRoomId: 'mist_harbor_clinic_of_salt', description: '藥箱路回到鹽診所' },
    ],
    mapSymbol: '[帆]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '帆匠街安全，但霧中人影可能是任務接頭人。',
      treasure: '防水蠟桶旁有一卷品質極好的備用帆線。',
      spirit: '帆匠街修補的不只是船帆，也是霧港每天出海的信心。',
    },
  },

mist_harbor_shipwright_yard: {
    id: 'mist_harbor_shipwright_yard',
    name: '船匠塢',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_shipwright_yard.png',
    imagePrompt: '船匠塢 in mist_harbor, harbor shipwright yard with half-built boats, tar pots, cranes, foggy slips, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '船匠塢靠著內港斜坡，半修好的小船被木架支起，船腹刷著新鮮焦油，旁邊堆滿橡木板、鉚釘、桅杆和滑輪。工頭用粉筆在船殼上標出裂縫，學徒則在霧裡推動沉重吊臂。這裡是修理與交通準備房，玩家可修補船隻、委託打造渡船零件、學習外海航線需求，也能接到尋找失竊龍骨木或測試新船的任務。塢邊水面經常漂來來歷不明的碎板，若板上還有新鮮爪痕，代表某條近海航線剛剛出事。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_sailmakers_row', description: '帆匠街在西側' },
      { direction: 'south', targetRoomId: 'mist_harbor_ferry_pier', description: '滑道下到渡船棧橋', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'mist_harbor_breakwater_end', description: '外側木道通往防波堤', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[匠]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '船匠塢安全，但碎板爪痕會開啟海獸事件。',
      treasure: '焦油桶後有一批被藏起來的龍骨木樣本。',
      spirit: '船匠塢讓霧港即使被霧困住，也仍能相信下一次出航。',
    },
  },

mist_harbor_anchor_inn: {
    id: 'mist_harbor_anchor_inn',
    name: '沉錨旅店',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_anchor_inn.png',
    imagePrompt: '沉錨旅店 in mist_harbor, cozy harbor inn with anchor sign, wet cloaks, hearth, sailors in fogged windows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '沉錨旅店的招牌是一只真正的舊鐵錨，吊在門樑下隨海風輕晃。屋內爐火溫暖，牆上掛滿濕斗篷、船旗與各地酒杯，水手們圍著長桌交換航線消息。這裡是休息、存點與社交服務房，玩家可租房恢復、查看留言、接受護送船員或尋人委託，也能從吟遊者口中聽到霧港外海的副本傳說。櫃台後有一本厚厚住客簿，最近幾頁的名字被人撕掉，留下的紙屑帶著海關封蠟味。旅店後門通往鹽診所，方便受傷水手夜裡求醫。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'mist_harbor_clinic_of_salt',
        description: '東側後廊繞過旅店廚房、濕斗篷架與藥草門簾後，才會通往鹽診所，地面留有傷員水痕',
        edgeKind: 'distant_route',
        edgeNote: '沉錨旅店到鹽診所需穿過後廊與服務區，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'mist_harbor_guild_quay',
        description: '南側木階沿旅店外牆下到潮濕棧道，穿過碼頭人潮後才抵達冒險者碼頭',
        edgeKind: 'distant_route',
        edgeNote: '沉錨旅店到冒險者碼頭有木階高差與碼頭人潮，不是相鄰格。',
      },
      {
        direction: 'west',
        targetRoomId: 'mist_harbor_tide_plaza',
        description: '西側雨棚路要穿過旅店門廊、潮濕石階與攤販遮布後，才會回到潮汐廣場',
        edgeKind: 'distant_route',
        edgeNote: '沉錨旅店西返潮汐廣場需沿雨棚街與石階回繞，屬於長路徑。',
      },
    ],
    mapSymbol: '[宿]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '旅店安全，但住客簿缺頁會牽出尋人任務。',
      treasure: '舊鐵錨背面刻著一條被遺忘的航線。',
      spirit: '沉錨旅店讓每個漂泊者暫時承認自己需要靠岸。',
    },
  },

mist_harbor_clinic_of_salt: {
    id: 'mist_harbor_clinic_of_salt',
    name: '鹽診所',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_clinic_of_salt.png',
    imagePrompt: '鹽診所 in mist_harbor, small harbor clinic with salt jars, bandages, sea herbs, fogged glass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '鹽診所聞起來像海鹽、藥草和燒熱金屬。白牆上掛著繃帶、魚骨夾板、止血鉗與一排排標有潮汐日期的鹽罐，醫師相信不同潮位採來的鹽能處理不同傷口。這裡是治療與藥品服務房，玩家可購買補給、處理中毒或凍傷、交付海草藥材，也能接到尋找失蹤病患或調查奇怪海霧病的任務。診所窗台放著幾瓶發藍的霧水樣本，偶爾會自行凝結成薄冰。若玩家從外海副本回來，醫師會要求先在此檢查，避免把未知病症帶進城裡。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'mist_harbor_anchor_inn',
        description: '西返時後廊沿藥草門簾、濕斗篷架與旅店廚房回繞，才會回到沉錨旅店',
        edgeKind: 'distant_route',
        edgeNote: '鹽診所西返沉錨旅店需穿過後廊與服務區，屬於長路徑。',
      },
      { direction: 'north', targetRoomId: 'mist_harbor_sailmakers_row', description: '北側藥箱路通往帆匠街' },
      {
        direction: 'east',
        targetRoomId: 'mist_harbor_chart_archive',
        description: '東側窄梯沿診所後牆盤上二樓，穿過潮濕書架門後才會到海圖檔案室',
        edgeKind: 'distant_route',
        edgeNote: '鹽診所到海圖檔案室有窄梯高差與書架門，不是相鄰平面一格。',
      },
    ],
    mapSymbol: '[診]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '診所安全，但霧水樣本會提示外海異常。',
      treasure: '最上層鹽罐裡藏著一枚醫師用的急救徽章。',
      spirit: '鹽診所把海帶來的傷口，一個個縫回岸上的生活。',
    },
  },

mist_harbor_guild_quay: {
    id: 'mist_harbor_guild_quay',
    name: '冒險者碼頭',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_guild_quay.png',
    imagePrompt: '冒險者碼頭 in mist_harbor, adventurers guild quay with notice boards, moored skiffs, lanterns and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fantasy terrain, clear lantern light',
    description:
      '冒險者碼頭是一段專供委託船停靠的木棧道，柱子上綁滿任務牌、失物畫像、海怪懸賞與臨時招募紙。公會書記坐在防潮棚下登記隊伍，旁邊小船隨霧潮起伏，船頭掛著不同顏色的任務燈。西側可見沉錨旅店的木階，但潮濕人潮堵住回程，需從旅店方向下到碼頭。這裡是霧港最重要的任務服務房，玩家可接取外海副本、護航、搜救、釣魚與走私調查委託，也能組隊前往渡船棧橋。碼頭下方有水聲敲擊空木箱，偶爾會浮出不屬於任何登記船隻的繩結，暗示有人借公會名義私下出海。',
    exits: [
      { direction: 'south', targetRoomId: 'mist_harbor_sailmakers_row', description: '南側繩梯回到帆匠街' },
      { direction: 'east', targetRoomId: 'mist_harbor_ferry_pier', description: '棧道連向渡船棧橋' },
      {
        direction: 'north',
        targetRoomId: 'mist_harbor_smugglers_alley',
        description: '北側陰影小路沿碼頭樁影、濕滑木板與貨箱背面下滑，才會接到走私巷',
        edgeKind: 'distant_route',
        edgeNote: '冒險者碼頭到走私巷需沿棧道背面與貨箱陰影繞行，屬於長路徑。',
      },
    ],
    mapSymbol: '[會]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '碼頭安全，但未登記繩結會牽出私航事件。',
      treasure: '任務牌背面常有隊伍留下的補充線索。',
      spirit: '冒險者碼頭把霧港的不安轉換成一張張可以承接的委託。',
    },
  },

mist_harbor_smugglers_alley: {
    id: 'mist_harbor_smugglers_alley',
    name: '走私巷',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_smugglers_alley.png',
    imagePrompt: '走私巷 in mist_harbor, narrow wet smuggler alley behind fish market, crates, shadowed doors, fog lamps, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain market, clear lantern light',
    description:
      '魚市後方的走私巷狹窄潮濕，兩側堆滿標籤被刮掉的木箱、破網和空酒桶。霧在屋檐下盤旋，讓每扇半掩的門都像藏著耳朵。西側碼頭燈影若隱若現，但暗巷出口被臨檢木欄封住，只能從公會碼頭陰影小路進巷。這裡不是公開服務點，卻是許多任務線的灰色交會處，玩家可追查假港印、打聽黑市船票、尋找失蹤貨物，也可能遇到不願在廣場露面的 NPC。巷底水溝連到九號倉，退潮時能看見刻在石壁上的暗號。雖然城內禁止械鬥，走私者仍會用價格、情報與沉默威脅旅人。若帶著海關封條進巷，幾盞窗燈會同時熄滅。牆面潮痕旁還刻著只有夜航人看得懂的數字，暗門後傳來壓低的笑聲。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_sea_gate', description: '北側濕石坡回到舊海門' },
      { direction: 'south', targetRoomId: 'mist_harbor_warehouse_nine', description: '南側暗號水溝通往九號倉' },
    ],
    mapSymbol: '[私]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '走私巷沒有公開敵人，但錯誤回答會關閉交易窗口。',
      treasure: '刮標木箱內側留著下一次私航時間。',
      spirit: '走私巷是霧港不寫進港務簿的另一張地圖。',
    },
  },

mist_harbor_captains_office: {
    id: 'mist_harbor_captains_office',
    name: '船長辦公室',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_captains_office.png',
    imagePrompt: '船長辦公室 in mist_harbor, harbor captains office with maps, ship bells, ledgers, misted windows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain harbor, clear lantern light',
    description:
      '船長辦公室位在海關廳後方，牆上掛滿航線圖、舊船鐘、風暴記錄和幾把失去主人的船鑰匙。值班船長在此核准出航、調停碼頭爭議，也替冒險者安排可靠船員。這裡是 NPC 與交通任務房，玩家可申請外海通行、查詢失事船、簽署護航契約，或追問某艘沒有進港記錄卻出現在潮鐘上的船。辦公桌抽屜裡有一疊被海水泡皺的求救信，日期全都落在同一場大霧之夜。若玩家完成港務線，這裡會成為解鎖遠洋路線的關鍵地點。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_customs_house', description: '內廊回到海關廳', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'mist_harbor_chart_archive',
        description: '東側書架門後需穿過船長私藏圖櫃、狹窄檔案走廊與潮濕樓梯，才到海圖檔案室',
        edgeKind: 'distant_route',
        edgeNote: '船長辦公室到海圖檔案室需穿過圖櫃走廊與樓梯，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'mist_harbor_sea_gate',
        description: '南側港務坡道沿外牆下行，穿過鐵鏈閘與潮痕石階後，才會抵達舊海門',
        edgeKind: 'distant_route',
        edgeNote: '船長辦公室到舊海門有外牆坡道與鐵鏈閘高差，不是相鄰格。',
      },
    ],
    mapSymbol: '[長]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '辦公室安全，但船鐘無故響起時代表有幽霧船線索。',
      treasure: '失主船鑰匙中有一把能打開九號倉側門。',
      spirit: '船長辦公室決定誰能把霧港拋在身後，也決定誰必須留下。',
    },
  },

mist_harbor_lighthouse_stairs: {
    id: 'mist_harbor_lighthouse_stairs',
    name: '燈室階梯',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_lighthouse_stairs.png',
    imagePrompt: '燈室階梯 in mist_harbor, spiral lighthouse stairs with wet stone, brass rail, fog light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain stone, clear lantern light',
    description:
      '傳送燈塔北面的石橋接上一段螺旋階梯，階梯沿著老燈塔內壁向上盤繞，扶手被鹽霧磨得發亮。牆面每隔幾步就嵌著小窗，能看見霧港屋頂、內港船桅與遠處防波堤在白霧中若隱若現。東側維修門標向防波堤端，但門內落石堵住通道，需由防波堤端進入燈塔維修線。這裡是交通與探索房，玩家可前往霧望燈室，也能在階梯牆上找到歷代守燈人刻下的潮汐備忘。階梯間回音很重，適合觸發回憶、偵查或找人任務。若外海有異常，窗縫會吹進帶冰味的霧，讓牆上銅釘結霜。守燈人的腳印常停在某扇小窗前，似乎那裡能看見官方不願承認的航線。階梯越往上，海浪聲就越像低語。',
    exits: [
      { direction: 'south', targetRoomId: 'mist_harbor_portal_lantern', description: '石橋回到傳送燈塔', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'mist_harbor_fogwatch_lantern', description: '燈室迴廊通往霧望燈室', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[梯]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '階梯安全，但窗縫結霜代表冰霧潮正在逼近。',
      treasure: '扶手底部藏著守燈人留下的備用火石。',
      spirit: '燈室階梯把港鎮的喧鬧一步步留在下方。',
    },
  },

mist_harbor_fogwatch_lantern: {
    id: 'mist_harbor_fogwatch_lantern',
    name: '霧望燈室',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_fogwatch_lantern.png',
    imagePrompt: '霧望燈室 in mist_harbor, lighthouse lantern room above foggy harbor, huge lens, beacon flame, sea mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '霧望燈室位在老燈塔頂端，巨大的玻璃透鏡被銅架固定，中心燃著帶藍邊的港燈。守燈人用它穿透濃霧，替返航船隻標出內港安全水道，也觀測外海是否有幽霧船、冰潮或海怪陰影。東側外梯可俯看防波堤端，但高處梯門被鹽蝕卡死，需從防波堤端外梯上來。這裡是地標與大型事件觀測房，玩家可校準燈光、解讀遠方燈號，或在夜裡尋找失蹤船隊的回應。燈室地板刻著一圈方位線，某些刻度被反覆磨損，表示有人常把燈光轉向官方航線以外的黑暗海面。完成霧港主線時，這裡會成為選擇公開真相或掩護私航的關鍵場景，也決定哪些船能穿過霧回家。透鏡背面還殘留舊日撞擊裂紋。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_lighthouse_stairs', description: '燈室迴廊回到階梯間', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[燈]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '燈室安全，但遠方錯誤燈號可能召喚海上事件。',
      treasure: '透鏡底座有一枚被藏起來的私航方位片。',
      spirit: '霧望燈室決定霧港願意照亮哪一片海。',
    },
  },

mist_harbor_ferry_pier: {
    id: 'mist_harbor_ferry_pier',
    name: '渡船棧橋',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_ferry_pier.png',
    imagePrompt: '渡船棧橋 in mist_harbor, ferry pier with small boats, rope posts, fog, lantern reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fantasy terrain, clear lantern light',
    description:
      '渡船棧橋伸入內港水面，小船依照目的地排成幾列，船頭掛著紅、藍、白不同顏色的航燈。船夫靠在繩樁邊等潮位，腳下木板被海水泡得發黑，縫隙間能看見細碎銀魚游過。東側外棧道能看見防波堤端，但退潮後踏板斷開，需從防波堤端回到棧橋。這裡是交通服務房，玩家可搭乘短程渡船前往外島、海上副本入口或對岸倉區，也能護送 NPC、運送藥箱與追查未登記船票。渡船時刻受潮鐘控制，若霧太重，船夫會要求額外燈油或可靠護衛。棧橋末端有一只空船總是無人認領，船底卻常保持乾淨。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_shipwright_yard', description: '滑道上到船匠塢', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'mist_harbor_guild_quay', description: '棧道回到冒險者碼頭' },
    ],
    mapSymbol: '[渡]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '渡船安全，但無人認領的小船常牽出失蹤線。',
      treasure: '繩樁下方塞著一張被撕半的船票。',
      spirit: '渡船棧橋讓霧港的日常與冒險只隔一塊木板。',
    },
  },

mist_harbor_warehouse_nine: {
    id: 'mist_harbor_warehouse_nine',
    name: '九號倉',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_warehouse_nine.png',
    imagePrompt: '九號倉 in mist_harbor, sealed harbor warehouse with stacked crates, wet rope, lantern shadows, fogged skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '九號倉的門上貼滿海關封條，但封條邊緣總有新鮮割痕。倉內高高堆著木箱、油布包、鹽袋與等候驗放的遠方貨物，霧氣從天窗滲下，讓每一道箱影都像可疑人形。東側貨道與南側水溝都留下可疑拖痕，但倉內封條從這端扣死，需由舊海門或走私巷進入九號倉。這裡是倉儲服務與走私任務房，玩家可存放大宗貨物、查找遺失箱號、協助盤點，也能沿著暗號追查假封條來源。地板上有幾條拖痕通往走私巷水溝，旁邊散著不該出現在官方倉庫的黑市船票。若港務線推進，九號倉會成為揭露私航網路的重要證據點。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'mist_harbor_customs_house',
        description: '西返時封條門需穿過濕木箱通道、貨物檢查桌與海關內廊，才會回到海關廳',
        edgeKind: 'distant_route',
        edgeNote: '九號倉西返海關廳需穿過貨物檢查區與內廊，屬於長路徑。',
      },
      { direction: 'north', targetRoomId: 'mist_harbor_smugglers_alley', description: '北側暗號水溝回到走私巷' },
      { direction: 'south', targetRoomId: 'mist_harbor_fish_market', description: '南側倉庫濕巷通往魚市' },
    ],
    mapSymbol: '[倉]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '九號倉安全，但錯誤箱號會引來海關盤問。',
      treasure: '鹽袋堆後有一箱未登記的航海羅盤。',
      spirit: '九號倉保存著霧港願意承認與不願承認的貨物。',
    },
  },

mist_harbor_tidepool_shrine: {
    id: 'mist_harbor_tidepool_shrine',
    name: '潮池小祠',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_tidepool_shrine.png',
    imagePrompt: '潮池小祠 in mist_harbor, small tidepool shrine with shells, candles, sea glass, fog and moonlit water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain shrine, clear lantern light',
    description:
      '舊海門旁的岩地凹出一座天然潮池，池邊立著小小石祠，供奉無名海路守護靈。漁民會在出航前放下貝殼、海玻璃、魚骨和一小撮鹽，祈求霧中看得見回家的燈。潮池水面平靜時像鏡子，偶爾會映出不屬於當下天空的星點。這裡是任務與信仰房，玩家可替失蹤水手獻祭、解讀潮池異象，或收集特殊貝殼完成居民委託。若從霧望燈室取得方位片，再來此比對倒影，能發現某條被隱藏的夜航路線。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'mist_harbor_sea_gate',
        description: '北返時石階沿潮池邊緣與鹽蝕護欄上行，繞過小祠供桌後才會回到舊海門',
        edgeKind: 'distant_route',
        edgeNote: '潮池小祠北返舊海門需沿潮池石階上行，屬於長路徑。',
      },
    ],
    mapSymbol: '[祠]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '潮池小祠安全，但倒影異常代表夜航任務可推進。',
      treasure: '第三層貝殼下藏著一枚海玻璃護符。',
      spirit: '潮池小祠保存著水手不敢寫進航海日誌的願望。',
    },
  },

mist_harbor_chart_archive: {
    id: 'mist_harbor_chart_archive',
    name: '海圖檔案室',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_chart_archive.png',
    imagePrompt: '海圖檔案室 in mist_harbor, archive of sea charts, map tubes, brass dividers, fogged skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain sea, clear lantern light',
    description:
      '海圖檔案室夾在傳送燈塔、診所與船長辦公室之間，屋內用防潮木櫃保存各年代航線圖。長桌上擺著黃銅分規、潮汐尺、乾燥沙盤和許多被鉛筆反覆修正的霧區邊界。東側書架門通往船長辦公室的標記仍在，但檔案櫃倒塌卡住門軸，需由船長辦公室開門進入。這裡是知識與任務房，玩家可查詢副本入口、比對失蹤船位、解鎖遠洋路線，也能幫檔案員修補被霧水侵蝕的古海圖。某些圖管沒有登記號，卻被放在最容易取用的位置，內容指向官方航線以外的私航港灣。若與傳送燈塔記錄交叉檢查，能找出誰在霧夜改變過燈塔方位。檔案員會要求玩家保密，因為錯誤海圖足以毀掉整個港鎮的信用。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_portal_lantern', description: '小門回到傳送燈塔', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'south',
        targetRoomId: 'mist_harbor_clinic_of_salt',
        description: '南返時窄梯沿潮濕書架門下行，穿過診所後牆與藥罐架後才回到鹽診所',
        edgeKind: 'distant_route',
        edgeNote: '海圖檔案室南返鹽診所需沿窄梯與書架門下行，屬於長路徑。',
      },
    ],
    mapSymbol: '[圖]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '檔案室安全，但未登記圖管會開啟私航線索。',
      treasure: '沙盤底層藏著一張被折小的暗礁圖。',
      spirit: '海圖檔案室讓霧港承認，迷霧也能被一點點描出邊界。',
    },
  },

mist_harbor_sea_gate: {
    id: 'mist_harbor_sea_gate',
    name: '舊海門',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_sea_gate.png',
    imagePrompt: '舊海門 in mist_harbor, old sea gate with iron chains, wet stone arch, harbor fog and tide marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain sea, clear lantern light',
    description:
      '舊海門是內港最老的防潮門，兩扇厚木閘板被鐵鏈吊著，表面滿是潮痕、貝殼和修補鐵片。漲潮時門外海水會拍上石階，退潮時則露出通往潮池與防波堤的濕滑岩路。西側港務坡道通向船長辦公室，但舊門這端閘鏈橫倒，需從辦公室下坡抵達。這裡是交通與港務房，玩家可協助升降閘門、護送貨車通過、查看近海潮位，也能追查某些貨物為何不經海關而從舊門進城。門洞上方掛著一排退役船鈴，只在濃霧中無風自響。若鈴聲與潮鐘不一致，代表外海有船正在使用錯誤航道靠近。守門員會把此事記在潮濕小冊裡，等待有人願意查下去。閘鏈深處還卡著新鮮黑帆纖維與碎木。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_fog_gate', description: '坡道回到霧港城門', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'mist_harbor_smugglers_alley', description: '南側濕石坡通往走私巷' },
      {
        direction: 'west',
        targetRoomId: 'mist_harbor_tidepool_shrine',
        description: '西側石階沿鹽蝕護欄下到潮池邊緣，繞過小供桌後才抵達潮池小祠',
        edgeKind: 'distant_route',
        edgeNote: '舊海門到潮池小祠需下行潮池石階，屬於長路徑。',
      },
    ],
    mapSymbol: '[海]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '舊海門安全，但船鈴亂響代表有錯航事件。',
      treasure: '閘板鐵片後藏著一枚舊港務徽章。',
      spirit: '舊海門記得霧港還沒有傳送燈以前的每一次進出。',
    },
  },

mist_harbor_breakwater_end: {
    id: 'mist_harbor_breakwater_end',
    name: '防波堤端',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_breakwater_end.png',
    imagePrompt: '防波堤端 in mist_harbor, end of stone breakwater in thick fog, crashing waves, beacon posts, distant lighthouse, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain stone, clear lantern light',
    description:
      '防波堤端伸向白霧最深處，黑色礁石和人工石塊交錯堆疊，浪花不斷越過邊緣，把地面打得濕亮。這裡遠離市集喧鬧，只聽得見海浪、霧角與偶爾從燈塔傳來的金屬回音。維修工在石柱上掛著小信標，船夫則把這裡當作判斷外海能否出航的最後觀察點。這裡是交通邊界與大型事件鉤子，玩家可前往外海副本、調查漂來殘骸，或在霧望燈室指引下等待失蹤船影出現。若霧突然退開，遠處可能露出不在任何海圖上的黑帆。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_shipwright_yard', description: '木道回到船匠塢', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'south',
        targetRoomId: 'mist_harbor_ferry_pier',
        description: '南側外棧道沿防波堤低欄與濕滑繩樁回折，才會下到渡船棧橋，浪花會遮住踏板',
        edgeKind: 'distant_route',
        edgeNote: '防波堤端南返渡船棧橋需沿外棧道與繩樁下行，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'mist_harbor_lighthouse_stairs',
        description: '北側維修門穿過鹽蝕鐵梯、落石通道與燈塔內牆後，才會通向燈室階梯',
        edgeKind: 'distant_route',
        edgeNote: '防波堤端到燈室階梯需走維修門與鐵梯，距離長於相鄰格。',
      },
      {
        direction: 'east',
        targetRoomId: 'mist_harbor_fogwatch_lantern',
        description: '東側外梯沿燈塔外牆盤旋上行，穿過海霧與鹽蝕平台後才會連到霧望燈室',
        edgeKind: 'distant_route',
        edgeNote: '防波堤端到霧望燈室需沿外梯上行，不是相鄰平面一格。',
      },
    ],
    mapSymbol: '[堤]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '防波堤端安全，但黑帆出現會開啟外海事件。',
      treasure: '信標柱底部夾著一片刻有私航標記的船板。',
      spirit: '防波堤端是霧港最後一塊仍相信陸地的石頭。',
    },
  },

ancient_ruins_sunken_entrance: {
    id: 'ancient_ruins_sunken_entrance',
    name: '沉降入口',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_sunken_entrance.png',
    imagePrompt: '沉降入口 in ancient_ruins, half-buried ancient stone entrance, cracked steps, vines, dust beams and worn runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain stone, clear lantern light',
    description:
      '古代遺跡的入口半沉在乾裂荒土裡，巨石門楣傾斜下陷，只剩一段刻滿磨損符文的階梯露出地面。風把細沙吹進門縫，露出探險隊清理過的鏟痕，也露出幾具被陷阱拖回陰影裡的骸骨。東側斷裂石道在門後延入遺跡，北面測繪營地的冷灰與繩標仍能辨認。入口旁的臨時路標標著撤退方向，但最新刻痕被刮掉，像有人不希望後來者找到正確回程。',
    exits: [
      { direction: 'east', targetRoomId: 'ancient_ruins_broken_causeway', description: '斷裂石道延入遺跡' },
      { direction: 'north', targetRoomId: 'ancient_ruins_survey_camp', description: '營火痕跡通向測繪營地' },
    ],
    monsters: [
      { monsterId: 'ruin_scarab_swarm', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'glyphbound_skeleton', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '入口階梯若落下細沙，附近牆縫可能藏著骷髏巡衛。',
      treasure: '刮掉的路標背面還留著舊探險隊的撤退記號。',
      spirit: '沉降入口像遺跡露出的一道傷口，邀請也警告所有靠近者。',
    },
  },

ancient_ruins_broken_causeway: {
    id: 'ancient_ruins_broken_causeway',
    name: '斷裂石道',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_broken_causeway.png',
    imagePrompt: '斷裂石道 in ancient_ruins, broken elevated stone causeway over buried ruins, missing slabs, vines, dust and sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '沉降入口後方是一條架在塌陷廳堂上的石道，許多石板已經斷裂，只剩窄窄邊緣可供通行。下方黑暗中能看見倒塌柱頭、沙堆與被藤蔓纏住的雕像碎片。石道兩側刻有行列整齊的古文字，中段卻被重物砸毀，讓整條通道像被切斷的句子。西側入口仍有日光，東面銘文庭開成露天石庭，南方破階則下到馬賽克大廳；鬆動石板一響，聲音會沿下方空洞傳向更深的守衛防線。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_sunken_entrance', description: '石道回到沉降入口' },
      { direction: 'east', targetRoomId: 'ancient_ruins_inscription_court', description: '銘文庭在前方開闊處' },
      { direction: 'south', targetRoomId: 'ancient_ruins_mosaic_hall', description: '破階下到馬賽克大廳' },
    ],
    monsters: [
      { monsterId: 'ruin_scarab_swarm', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'glyphbound_skeleton', maxCount: 2, respawnSeconds: 100 },
    ],
    mapSymbol: '[道]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鬆動石板會吸引下層骷髏抬頭巡視。',
      treasure: '斷裂石板下卡著一枚古代青銅扣。',
      spirit: '斷裂石道讓整座遺跡像一本被撕開的書。',
    },
  },

ancient_ruins_inscription_court: {
    id: 'ancient_ruins_inscription_court',
    name: '銘文庭',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_inscription_court.png',
    imagePrompt: '銘文庭 in ancient_ruins, open court of rune-covered slabs, broken columns, sand, vines and pale light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '斷裂石道盡頭是一座露天石庭，地面鋪著多塊刻字石板，每塊石板都用不同年代的文字記錄祭祀、工程與戰爭。陽光從塌開的穹頂灑下，讓部分字跡清楚可見，另一些則被藤根與沙塵遮住。西側石道仍能看見入口方向，東面石像長廊排列著磨平臉孔的雕像，北方裂痕方尖碑把金光投進庭中。幾尊失去頭顱的守衛像圍在四周，石板順序一旦被擾亂，基座就會傳出低沉震動。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_broken_causeway', description: '石道回到入口方向' },
      { direction: 'east', targetRoomId: 'ancient_ruins_statue_gallery', description: '雕像廊從東側展開' },
      { direction: 'north', targetRoomId: 'ancient_ruins_cracked_obelisk', description: '庭外可見裂痕方尖碑' },
    ],
    monsters: [
      { monsterId: 'glyphbound_skeleton', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'oathstone_sentinel', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[銘]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '銘文順序念錯時，無頭石像會先轉向聲音來源。',
      treasure: '最老的祭祀石板下藏著一小片金箔拓本。',
      spirit: '銘文庭把文明的名字留給懂得閱讀的人。',
    },
  },

ancient_ruins_mosaic_hall: {
    id: 'ancient_ruins_mosaic_hall',
    name: '馬賽克大廳',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_mosaic_hall.png',
    imagePrompt: '馬賽克大廳 in ancient_ruins, grand hall with cracked mosaic floor, fallen pillars, dust, colored tile patterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain hall, clear lantern light',
    description:
      '破階下方的馬賽克大廳仍保留著大片彩石地面，圖案描繪日月、河流、城市與一座被光包圍的聖所。許多彩石已經鬆脫，露出底下空腔與細小機關槽。北側破階回到斷裂石道，東面彩石圖案指向機關走廊，南方塵封門洞落滿陶板灰。大廳四角躺著破碎盾牌和石像手臂，錯踩顏色時牆內齒輪會開始轉動，倒柱後方也會傳來骷髏拖步聲。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_broken_causeway', description: '破階回到斷裂石道' },
      { direction: 'east', targetRoomId: 'ancient_ruins_trap_corridor', description: '彩石圖案指向機關走廊' },
      { direction: 'south', targetRoomId: 'ancient_ruins_dust_archive', description: '塵封門洞通往資料庫' },
    ],
    monsters: [
      { monsterId: 'glyphbound_skeleton', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'ruin_scarab_swarm', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[彩]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '彩石地面若亮起白線，牆內守衛即將啟動。',
      treasure: '完整藍色彩石可作為銘文解讀的材料。',
      spirit: '馬賽克大廳讓崩壞遺跡仍短暫呈現昔日城市的秩序。',
    },
  },

ancient_ruins_statue_gallery: {
    id: 'ancient_ruins_statue_gallery',
    name: '石像長廊',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_statue_gallery.png',
    imagePrompt: '石像長廊 in ancient_ruins, long gallery of ancient statues, cracked faces, vines, shafts of light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '銘文庭東側的長廊排列著二十餘尊人物石像，從祭司、工匠、戰士到不知名的雙翼守護者皆有。石像臉部大多被刻意磨平，只有胸前徽記仍清楚可辨。西側庭院的光照不到廊底，東端守衛基座只露出巨大石足，南側側門則通向機關走廊。長廊地面鋪著細沙，沙上保存著繞開特定石像的腳印；若穿過中央軸線，石像眼窩會亮起冷光，整條長廊像活過來一樣沉重轉動。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_inscription_court', description: '長廊回到銘文庭' },
      { direction: 'east', targetRoomId: 'ancient_ruins_guardian_plinth', description: '盡頭是守衛基座' },
      { direction: 'south', targetRoomId: 'ancient_ruins_trap_corridor', description: '側門通往機關走廊' },
    ],
    monsters: [
      { monsterId: 'oathstone_sentinel', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'sunlit_crystal_lizard', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[像]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '胸前徽記完整的石像通常還能活動。',
      treasure: '缺失石手內側藏著一枚儀式戒環。',
      spirit: '石像長廊像一條被命令永久注視入侵者的歷史。',
    },
  },

ancient_ruins_trap_corridor: {
    id: 'ancient_ruins_trap_corridor',
    name: '機關走廊',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_trap_corridor.png',
    imagePrompt: '機關走廊 in ancient_ruins, narrow trap corridor with pressure plates, arrow slits, dust, bronze mechanisms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '馬賽克大廳東側的走廊狹窄筆直，地面由大小不一的石板組成，牆上布滿細小箭孔與青銅轉輪。許多機關早已失靈，但仍有壓力板能推動暗槍、落石或封門。西側彩石地面還殘留腳步回音，北面側門通往石像長廊，南側機關門連著塵封資料庫，東端青銅軌道延向構裝間。若連續踩過錯誤石板，老舊機關會把通道切成數段，甚至封住剛剛確認過的退路。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_mosaic_hall', description: '彩石地面在西側' },
      { direction: 'north', targetRoomId: 'ancient_ruins_statue_gallery', description: '側門連向石像長廊' },
      { direction: 'south', targetRoomId: 'ancient_ruins_dust_archive', description: '機關門通往塵封資料庫' },
      { direction: 'east', targetRoomId: 'ancient_ruins_construct_bay', description: '青銅軌道延向構裝間' },
    ],
    monsters: [
      { monsterId: 'ruin_scarab_swarm', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'sunlit_crystal_lizard', maxCount: 2, respawnSeconds: 100 },
    ],
    mapSymbol: '[關]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '壓力板若先下陷後回彈，第二波機關通常更危險。',
      treasure: '青銅轉輪裡可拆出完整機關齒片。',
      spirit: '機關走廊證明古代人寧願讓通道殺人，也不願秘密外流。',
    },
  },

ancient_ruins_dust_archive: {
    id: 'ancient_ruins_dust_archive',
    name: '塵封資料庫',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_dust_archive.png',
    imagePrompt: '塵封資料庫 in ancient_ruins, ruined archive with stone shelves, clay tablets, dust, broken skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '資料庫裡沒有紙書，只有一排排石架與陶板匣。許多匣子摔在地上，露出刻滿細字的泥板、封蠟和被蟲蛀空的繩索標籤。天窗破洞讓光柱照進塵埃中，細粉像星雲般慢慢旋轉。北側塵封門洞回到馬賽克大廳，南面暗格索引指向遺物藏室，東側斷裂門軸後仍能看見機關走廊的暗槍。深處藤根推開一格石架，露出星象陶板；骷髏學士徘徊在書架間，像仍在守護無人能完整閱讀的紀錄。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_mosaic_hall', description: '塵封門洞回到馬賽克大廳' },
      { direction: 'south', targetRoomId: 'ancient_ruins_relic_cache', description: '暗格索引指向遺物藏室' },
    ],
    monsters: [
      { monsterId: 'glyphbound_skeleton', maxCount: 3, respawnSeconds: 100 },
      { monsterId: 'ruin_scarab_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[庫]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '陶板架若自己滑開，骷髏學士正在附近翻找。',
      treasure: '索引暗格中藏有完整星象陶板。',
      spirit: '塵封資料庫把遺跡真正用途藏在破碎文字中。',
    },
  },

ancient_ruins_relic_cache: {
    id: 'ancient_ruins_relic_cache',
    name: '遺物藏室',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_relic_cache.png',
    imagePrompt: '遺物藏室 in ancient_ruins, hidden relic cache with sealed urns, bronze tools, glowing dust, cracked alcoves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '資料庫暗格後方藏著一間低矮石室，四壁鑿出小龕，擺放青銅工具、封口陶罐、碎裂儀器和用布包住的石片。許多遺物看似普通，卻都標有精確年代與使用場合，顯示古代學者曾把樣本分門別類保存。北側暗格回到塵封資料庫，東面低門通向倒影水池。藏室地面有新近撬痕，幾只陶罐封蠟被重新壓回原位；若錯誤開封，沉睡灰塵會驚動龕內石像，使安靜石室立刻變成狹窄戰場。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_dust_archive', description: '暗格回到塵封資料庫' },
      { direction: 'east', targetRoomId: 'ancient_ruins_reflection_pool', description: '低門通向倒影水池' },
    ],
    monsters: [
      { monsterId: 'oathstone_sentinel', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'ruin_scarab_swarm', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[藏]',
    mapX: 1,
    mapY: -3,
    guardianHints: {
      creature: '錯誤陶罐開封時，龕內石像會先落下灰塵。',
      treasure: '標有日紋的青銅尺可修復日晷露台。',
      spirit: '遺物藏室讓破碎文明以樣本方式繼續被研究。',
    },
  },

ancient_ruins_cracked_obelisk: {
    id: 'ancient_ruins_cracked_obelisk',
    name: '裂痕方尖碑',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_cracked_obelisk.png',
    imagePrompt: '裂痕方尖碑 in ancient_ruins, cracked obelisk with light runes, buried courtyard, vines, sand and sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '銘文庭北面立著一座裂開的方尖碑，碑身原本應該光滑筆直，如今卻被一道由頂到底的裂縫分成兩半。裂縫內側有微弱金光，像某種古老能量仍被困在石中。南側石階回到銘文庭，東面碑影指向守衛基座，北方斷柱路通往日晷露台。碑基周圍堆著測繪旗、碎繩與被燒黑的拓印紙，近期啟動失敗的痕跡十分清楚；金光忽明忽暗時，晶化蜥蜴會從石縫裡爬出。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_ruins_inscription_court', description: '石階回到銘文庭' },
      { direction: 'east', targetRoomId: 'ancient_ruins_guardian_plinth', description: '碑影指向守衛基座' },
      { direction: 'north', targetRoomId: 'ancient_ruins_sun_dial_patio', description: '斷柱路通往日晷露台' },
    ],
    monsters: [
      { monsterId: 'sunlit_crystal_lizard', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'crystal_lizard', maxCount: 1, respawnSeconds: 100 },
      { monsterId: 'oathstone_sentinel', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[碑]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '裂縫金光忽明忽暗時，晶化蜥蜴正在碑基下活動。',
      treasure: '碑影落點可收集少量古代光塵。',
      spirit: '裂痕方尖碑像仍在呼吸的古代儀器。',
    },
  },
};
