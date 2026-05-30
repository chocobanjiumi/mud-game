import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_021: Record<string, RoomDef> = {
royal_hunting_grounds_permit_lodge: {
    id: 'royal_hunting_grounds_permit_lodge',
    name: '狩獵許可屋',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_permit_lodge.png',
    imagePrompt: '狩獵許可屋 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '狩獵許可屋位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_horn_gate', description: '回到獵角門' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_hounds_yard', description: '獵犬院在東側' },
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_boar_wallows', description: '野豬泥塘在南側' },
    ],
    monsters: [
      { monsterId: 'royal_hunt_hound_pack', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'thornwood_gamekeeper', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[許]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '狩獵許可屋的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '狩獵許可屋的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '狩獵許可屋保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_deer_run: {
    id: 'royal_hunting_grounds_deer_run',
    name: '鹿徑',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_deer_run.png',
    imagePrompt: '鹿徑 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '鹿徑位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_horn_gate', description: '回到獵角門', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'royal_hunting_grounds_boar_wallows',
        description: '東側鹿徑需穿過低枝、獸蹄岔路與泥塘外圍，才會抵達野豬泥塘，蹄印會逐漸變深',
        edgeKind: 'distant_route',
        edgeNote: '鹿徑到野豬泥塘需沿獸道繞過低枝與泥塘外圍，距離長於相鄰格。',
      },
      {
        direction: 'north',
        targetRoomId: 'royal_hunting_grounds_silver_trail',
        description: '北側銀葉獵徑要沿鹿群常走的緩坡上行，穿過銀葉灌叢後才接上主獵徑',
        edgeKind: 'distant_route',
        edgeNote: '鹿徑到銀葉獵徑有緩坡與灌叢高差，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'silvertrail_stag', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'royal_hunt_hound_pack', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[鹿]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '鹿徑的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '鹿徑的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '鹿徑保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_boar_wallows: {
    id: 'royal_hunting_grounds_boar_wallows',
    name: '野豬泥塘',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_boar_wallows.png',
    imagePrompt: '野豬泥塘 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '野豬泥塘位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'royal_hunting_grounds_deer_run',
        description: '西返時需沿泥塘外緣避開深泥與野豬撞出的樹根，才會回到鹿徑，淺蹄印會重新出現',
        edgeKind: 'distant_route',
        edgeNote: '野豬泥塘西返鹿徑需繞過深泥與樹根障礙，屬於長路徑。',
      },
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_permit_lodge', description: '北側泥塘邊路回到狩獵許可屋' },
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_noble_blind', description: '南側泥塘邊路通往貴族隱棚' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_falcon_perch', description: '獵鷹棲臺在東側' },
    ],
    monsters: [
      { monsterId: 'mudtusk_boar', maxCount: 3, respawnSeconds: 140 },
    ],
    mapSymbol: '[豬]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '野豬泥塘的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '野豬泥塘的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '野豬泥塘保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_falcon_perch: {
    id: 'royal_hunting_grounds_falcon_perch',
    name: '獵鷹棲臺',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_falcon_perch.png',
    imagePrompt: '獵鷹棲臺 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '獵鷹棲臺位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_boar_wallows', description: '回到野豬泥塘' },
      {
        direction: 'east',
        targetRoomId: 'royal_hunting_grounds_herb_copse',
        description: '東側獵鷹視線沿矮林邊緣延伸，需繞過棲臺木梯與捕鳥網後才進入草藥矮林',
        edgeKind: 'distant_route',
        edgeNote: '獵鷹棲臺到草藥矮林需繞過木梯與捕鳥網，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'royal_hunting_grounds_stag_mirror',
        description: '北側要沿棲臺背後的石階與水鏡邊小路上行，才會抵達鹿影水鏡，鷹哨會逐漸變遠',
        edgeKind: 'distant_route',
        edgeNote: '獵鷹棲臺到鹿影水鏡有石階與水鏡邊小路，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'crown_falcon_swarm', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'greenwood_poacher', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[鷹]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '獵鷹棲臺的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '獵鷹棲臺的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '獵鷹棲臺保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_noble_blind: {
    id: 'royal_hunting_grounds_noble_blind',
    name: '貴族隱棚',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_noble_blind.png',
    imagePrompt: '貴族隱棚 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain gate, clear lantern light',
    description:
      '貴族隱棚位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_boar_wallows', description: '北側泥塘邊路回到野豬泥塘' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_stag_mirror', description: '鹿影水鏡在東側' },
    ],
    monsters: [
      { monsterId: 'greenwood_poacher', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'crown_falcon_swarm', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[棚]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '貴族隱棚的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '貴族隱棚的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '貴族隱棚保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_silver_trail: {
    id: 'royal_hunting_grounds_silver_trail',
    name: '銀葉獵徑',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_silver_trail.png',
    imagePrompt: '銀葉獵徑 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '銀葉獵徑位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'royal_hunting_grounds_deer_run',
        description: '南返時銀葉坡道沿灌叢下行，穿過鹿群磨亮的樹根後才回到鹿徑，落葉會遮住分岔腳印',
        edgeKind: 'distant_route',
        edgeNote: '銀葉獵徑南返鹿徑需沿灌叢坡道下行，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'royal_hunting_grounds_noble_blind',
        description: '東側銀葉獵徑穿過兩排靜音獵簾與低垂枝葉後，才會抵達貴族隱棚',
        edgeKind: 'distant_route',
        edgeNote: '銀葉獵徑到貴族隱棚被獵簾與低枝隔開，距離長於相鄰格。',
      },
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_old_oak_stand', description: '古橡木群在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'silvertrail_stag', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'old_oak_warden', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[銀]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '銀葉獵徑的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '銀葉獵徑的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '銀葉獵徑保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_hounds_yard: {
    id: 'royal_hunting_grounds_hounds_yard',
    name: '獵犬院',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_hounds_yard.png',
    imagePrompt: '獵犬院 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '獵犬院位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_permit_lodge', description: '回到狩獵許可屋' },
      {
        direction: 'north',
        targetRoomId: 'royal_hunting_grounds_boar_wallows',
        description: '北側需穿過獵犬訓練樁、嗅跡圍欄與泥塘缺口，才會回到野豬泥塘，犬吠會標示出口',
        edgeKind: 'distant_route',
        edgeNote: '獵犬院北返野豬泥塘需穿過訓練區與泥塘缺口，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_arrow_range', description: '箭靶場在東側' },
    ],
    monsters: [
      { monsterId: 'royal_hunt_hound_pack', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'thornwood_gamekeeper', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[犬]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '獵犬院的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '獵犬院的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '獵犬院保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_herb_copse: {
    id: 'royal_hunting_grounds_herb_copse',
    name: '草藥矮林',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_herb_copse.png',
    imagePrompt: '草藥矮林 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '草藥矮林位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'royal_hunting_grounds_falcon_perch',
        description: '西返時要穿過草藥矮林邊的捕鳥網與棲臺木梯陰影，才會回到獵鷹棲臺',
        edgeKind: 'distant_route',
        edgeNote: '草藥矮林西返獵鷹棲臺需繞過捕鳥網與木梯，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'royal_hunting_grounds_gamekeeper_camp',
        description: '東側藥草小徑繞過採集棚、藥籃與看守巡邏繩後，才會抵達獵場看守營',
        edgeKind: 'distant_route',
        edgeNote: '草藥矮林到獵場看守營被採集棚與巡邏繩隔開，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'thornwood_gamekeeper', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'silvertrail_stag', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[草]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '草藥矮林的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '草藥矮林的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '草藥矮林保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_stag_mirror: {
    id: 'royal_hunting_grounds_stag_mirror',
    name: '鹿影水鏡',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_stag_mirror.png',
    imagePrompt: '鹿影水鏡 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '鹿影水鏡位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_noble_blind', description: '回到貴族隱棚' },
      {
        direction: 'south',
        targetRoomId: 'royal_hunting_grounds_falcon_perch',
        description: '南返時水鏡邊小路沿石階下行，穿過鷹哨陰影後才回到獵鷹棲臺，羽毛會標示轉角',
        edgeKind: 'distant_route',
        edgeNote: '鹿影水鏡南返獵鷹棲臺需沿石階與水鏡邊路下行，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'royal_hunting_grounds_royal_marker',
        description: '東側水鏡反光沿界線木牌延伸，需繞過淺池與王室封繩後才抵達王室界碑',
        edgeKind: 'distant_route',
        edgeNote: '鹿影水鏡到王室界碑需繞過淺池與封繩，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'silvertrail_stag', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'greenwood_poacher', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '鹿影水鏡的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '鹿影水鏡的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '鹿影水鏡保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_old_oak_stand: {
    id: 'royal_hunting_grounds_old_oak_stand',
    name: '古橡木群',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_old_oak_stand.png',
    imagePrompt: '古橡木群 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '古橡木群位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_silver_trail', description: '回到銀葉獵徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_hidden_poacher_path', description: '偷獵者小徑在東側' },
    ],
    monsters: [
      { monsterId: 'old_oak_warden', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'silvertrail_stag', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'thornwood_gamekeeper', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[橡]',
    mapX: 0,
    mapY: 3,
    guardianHints: {
      creature: '古橡木群的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '古橡木群的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '古橡木群保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_gamekeeper_camp: {
    id: 'royal_hunting_grounds_gamekeeper_camp',
    name: '獵場看守營',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_gamekeeper_camp.png',
    imagePrompt: '獵場看守營 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '獵場看守營位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'royal_hunting_grounds_herb_copse',
        description: '西返時看守營外的巡邏繩與藥籃小徑會引回草藥矮林，途中需避開告警鈴線',
        edgeKind: 'distant_route',
        edgeNote: '獵場看守營西返草藥矮林需沿巡邏繩與藥籃小徑回繞，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_arrow_range', description: '箭靶場在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_trophy_pavilion', description: '獵物陳列亭在東側' },
    ],
    monsters: [
      { monsterId: 'thornwood_gamekeeper', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'royal_hunt_hound_pack', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[營]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '獵場看守營的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '獵場看守營的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '獵場看守營保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_arrow_range: {
    id: 'royal_hunting_grounds_arrow_range',
    name: '箭靶場',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_arrow_range.png',
    imagePrompt: '箭靶場 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '箭靶場位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_hounds_yard', description: '回到獵犬院' },
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_gamekeeper_camp', description: '獵場看守營在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_wolf_cut', description: '狼切道在東側' },
    ],
    monsters: [
      { monsterId: 'greenwood_poacher', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'crown_falcon_swarm', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[靶]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '箭靶場的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '箭靶場的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '箭靶場保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_wolf_cut: {
    id: 'royal_hunting_grounds_wolf_cut',
    name: '狼切道',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_wolf_cut.png',
    imagePrompt: '狼切道 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '狼切道位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_arrow_range', description: '回到箭靶場' },
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_trophy_pavilion', description: '獵物陳列亭在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_griffon_ledge', description: '獅鷲岩棚在東側' },
    ],
    monsters: [
      { monsterId: 'royal_hunt_hound_pack', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'greenwood_poacher', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[狼]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '狼切道的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '狼切道的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '狼切道保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_royal_marker: {
    id: 'royal_hunting_grounds_royal_marker',
    name: '王室界碑',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_royal_marker.png',
    imagePrompt: '王室界碑 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '王室界碑位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'royal_hunting_grounds_stag_mirror',
        description: '西返時王室封繩沿淺池邊緣回繞，穿過界線木牌後才回到鹿影水鏡',
        edgeKind: 'distant_route',
        edgeNote: '王室界碑西返鹿影水鏡需繞過淺池與界線木牌，屬於長路徑。',
      },
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_moonlit_clearing', description: '月光空地在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'royal_hunting_grounds_trophy_pavilion',
        description: '東側界碑路穿過王室封條、石鹿座與陳列亭外廊後，才會抵達獵物陳列亭',
        edgeKind: 'distant_route',
        edgeNote: '王室界碑到獵物陳列亭需穿過封條與外廊，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'thornwood_gamekeeper', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'old_oak_warden', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[界]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '王室界碑的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '王室界碑的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '王室界碑保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_hidden_poacher_path: {
    id: 'royal_hunting_grounds_hidden_poacher_path',
    name: '偷獵者小徑',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_hidden_poacher_path.png',
    imagePrompt: '偷獵者小徑 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '偷獵者小徑位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_old_oak_stand', description: '回到古橡木群' },
      {
        direction: 'east',
        targetRoomId: 'royal_hunting_grounds_moonlit_clearing',
        description: '東側偷獵者暗徑穿過倒伏蕨葉、舊陷阱與月光林隙後，才會抵達月光空地',
        edgeKind: 'distant_route',
        edgeNote: '偷獵者小徑到月光空地需穿過暗徑陷阱與林隙，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'greenwood_poacher', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'crown_falcon_swarm', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[偷]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '偷獵者小徑的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '偷獵者小徑的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '偷獵者小徑保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_moonlit_clearing: {
    id: 'royal_hunting_grounds_moonlit_clearing',
    name: '月光空地',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_moonlit_clearing.png',
    imagePrompt: '月光空地 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '月光空地位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'royal_hunting_grounds_hidden_poacher_path',
        description: '西返時月光林隙會退回倒伏蕨葉與舊陷阱之間，沿暗徑才會回到偷獵者小徑',
        edgeKind: 'distant_route',
        edgeNote: '月光空地西返偷獵者小徑需沿暗徑與陷阱路回繞，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_royal_marker', description: '回到王室界碑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_fill_n6_n4', description: '東側月光草線通往白鹿林' },
    ],
    monsters: [
      { monsterId: 'silvertrail_stag', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'old_oak_warden', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[月]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '月光空地的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '月光空地的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '月光空地保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_griffon_ledge: {
    id: 'royal_hunting_grounds_griffon_ledge',
    name: '獅鷲岩棚',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_griffon_ledge.png',
    imagePrompt: '獅鷲岩棚 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '獅鷲岩棚位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_wolf_cut', description: '回到狼切道' },
      {
        direction: 'north',
        targetRoomId: 'royal_hunting_grounds_trophy_pavilion',
        description: '北側需沿獅鷲岩棚背風石階上行，繞過羽骨標記後才會抵達獵物陳列亭',
        edgeKind: 'distant_route',
        edgeNote: '獅鷲岩棚到獵物陳列亭有岩棚石階高差，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'griffon_ledge_matriarch', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'crown_falcon_swarm', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[岩]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '獅鷲岩棚的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '獅鷲岩棚的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '獅鷲岩棚保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_trophy_pavilion: {
    id: 'royal_hunting_grounds_trophy_pavilion',
    name: '獵物陳列亭',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_trophy_pavilion.png',
    imagePrompt: '獵物陳列亭 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '獵物陳列亭位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_gamekeeper_camp', description: '回到獵場看守營' },
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_wolf_cut', description: '回到狼切道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_white_stag_grove', description: '白鹿林在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'thornwood_gamekeeper', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'griffon_ledge_matriarch', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[亭]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '獵物陳列亭的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '獵物陳列亭的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '獵物陳列亭保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

royal_hunting_grounds_white_stag_grove: {
    id: 'royal_hunting_grounds_white_stag_grove',
    name: '白鹿林',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_white_stag_grove.png',
    imagePrompt: '白鹿林 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '白鹿林位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'west', targetRoomId: 'royal_hunting_grounds_fill_n6_n4', description: '西側月光草線回到月光空地' },
      { direction: 'south', targetRoomId: 'royal_hunting_grounds_trophy_pavilion', description: '回到獵物陳列亭', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'white_stag_avatar', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'old_oak_warden', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'silvertrail_stag', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[白]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '白鹿林的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '白鹿林的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '白鹿林保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },

// ─── 灰落修道院擴充 (Lv 34-46) ─────────────────────────

  ashfall_monastery_ash_gate: {
    id: 'ashfall_monastery_ash_gate',
    name: '灰門',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_ash_gate.png',
    imagePrompt: '灰門 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '灰門位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'east', targetRoomId: 'ashfall_monastery_bell_court', description: '鐘庭在東側' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_scorched_cloister', description: '焦黑迴廊在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_ash_novice', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'ashfall_cinder_bell_imp', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '灰門的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '灰門的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '灰門殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_bell_court: {
    id: 'ashfall_monastery_bell_court',
    name: '鐘庭',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_bell_court.png',
    imagePrompt: '鐘庭 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '鐘庭位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_ash_gate', description: '回到灰門' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_cinder_garden', description: '餘燼庭園在東側' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_broken_font', description: '破聖水盤在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_cinder_bell_imp', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'ashfall_ash_novice', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[鐘]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鐘庭的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '鐘庭的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '鐘庭殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_scorched_cloister: {
    id: 'ashfall_monastery_scorched_cloister',
    name: '焦黑迴廊',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_scorched_cloister.png',
    imagePrompt: '焦黑迴廊 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '焦黑迴廊位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'south', targetRoomId: 'ashfall_monastery_ash_gate', description: '回到灰門' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_broken_font', description: '破聖水盤在東側' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_penitent_cells', description: '懺悔小室在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_scorched_cloister_monk', maxCount: 2, respawnSeconds: 250 },
      { monsterId: 'ashfall_ash_novice', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[廊]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '焦黑迴廊的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '焦黑迴廊的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '焦黑迴廊殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_cinder_garden: {
    id: 'ashfall_monastery_cinder_garden',
    name: '餘燼庭園',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_cinder_garden.png',
    imagePrompt: '餘燼庭園 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '餘燼庭園位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_bell_court', description: '回到鐘庭' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_ember_chapel', description: '餘火小禮拜堂在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_cinder_bell_imp', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'ashfall_scorched_cloister_monk', maxCount: 1, respawnSeconds: 250 },
    ],
    mapSymbol: '[園]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '餘燼庭園的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '餘燼庭園的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '餘燼庭園殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_broken_font: {
    id: 'ashfall_monastery_broken_font',
    name: '破聖水盤',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_broken_font.png',
    imagePrompt: '破聖水盤 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '破聖水盤位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_scorched_cloister', description: '回到焦黑迴廊' },
      { direction: 'south', targetRoomId: 'ashfall_monastery_bell_court', description: '回到鐘庭' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_blackened_library', description: '燻黑書庫在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_broken_font_penitent', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'ashfall_ash_novice', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[盤]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '破聖水盤的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '破聖水盤的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '破聖水盤殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_penitent_cells: {
    id: 'ashfall_monastery_penitent_cells',
    name: '懺悔小室',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_penitent_cells.png',
    imagePrompt: '懺悔小室 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '懺悔小室位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'south', targetRoomId: 'ashfall_monastery_scorched_cloister', description: '回到焦黑迴廊' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_ash_scriptorium', description: '灰抄經室在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_ash_novice', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'ashfall_broken_font_penitent', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[室]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '懺悔小室的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '懺悔小室的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '懺悔小室殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_blackened_library: {
    id: 'ashfall_monastery_blackened_library',
    name: '燻黑書庫',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_blackened_library.png',
    imagePrompt: '燻黑書庫 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '燻黑書庫位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_broken_font', description: '回到破聖水盤' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_fallen_refectory', description: '墮落食堂在東側' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_firelit_apocrypha', description: '火照外典室在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_blackened_librarian', maxCount: 2, respawnSeconds: 280 },
      { monsterId: 'ashfall_broken_font_penitent', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[書]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '燻黑書庫的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '燻黑書庫的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '燻黑書庫殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_ember_chapel: {
    id: 'ashfall_monastery_ember_chapel',
    name: '餘火小禮拜堂',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_ember_chapel.png',
    imagePrompt: '餘火小禮拜堂 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '餘火小禮拜堂位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'south', targetRoomId: 'ashfall_monastery_cinder_garden', description: '回到餘燼庭園' },
      { direction: 'west', targetRoomId: 'ashfall_monastery_blackened_library', description: '燻黑書庫在西側' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_saint_mosaic', description: '聖者碎像在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_ember_chapel_cantor', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'ashfall_scorched_cloister_monk', maxCount: 1, respawnSeconds: 250 },
      { monsterId: 'ashfall_cinder_bell_imp', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[禮]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '餘火小禮拜堂的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '餘火小禮拜堂的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '餘火小禮拜堂殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_fallen_refectory: {
    id: 'ashfall_monastery_fallen_refectory',
    name: '墮落食堂',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_fallen_refectory.png',
    imagePrompt: '墮落食堂 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '墮落食堂位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_blackened_library', description: '回到燻黑書庫' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_censer_hall', description: '香爐廳在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_scorched_cloister_monk', maxCount: 2, respawnSeconds: 250 },
      { monsterId: 'ashfall_ember_chapel_cantor', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[食]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '墮落食堂的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '墮落食堂的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '墮落食堂殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_ash_scriptorium: {
    id: 'ashfall_monastery_ash_scriptorium',
    name: '灰抄經室',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_ash_scriptorium.png',
    imagePrompt: '灰抄經室 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '灰抄經室位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_penitent_cells', description: '回到懺悔小室' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_smoke_ambulatory', description: '煙霧步廊在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_blackened_librarian', maxCount: 1, respawnSeconds: 280 },
      { monsterId: 'ashfall_ash_novice', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[抄]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '灰抄經室的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '灰抄經室的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '灰抄經室殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_smoke_ambulatory: {
    id: 'ashfall_monastery_smoke_ambulatory',
    name: '煙霧步廊',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_smoke_ambulatory.png',
    imagePrompt: '煙霧步廊 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '煙霧步廊位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_ash_scriptorium', description: '回到灰抄經室' },
      { direction: 'south', targetRoomId: 'ashfall_monastery_blackened_library', description: '回到燻黑書庫' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_censer_hall', description: '香爐廳在東側' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_crypt_stairs', description: '地下墓階在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_censer_wraith', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'ashfall_blackened_librarian', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[煙]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '煙霧步廊的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '煙霧步廊的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '煙霧步廊殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_crypt_stairs: {
    id: 'ashfall_monastery_crypt_stairs',
    name: '地下墓階',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_crypt_stairs.png',
    imagePrompt: '地下墓階 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '地下墓階位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'south', targetRoomId: 'ashfall_monastery_smoke_ambulatory', description: '回到煙霧步廊' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_bone_ossuary', description: '骨灰藏室在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_ossuary_bonekeeper', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'ashfall_censer_wraith', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[階]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '地下墓階的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '地下墓階的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '地下墓階殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_bone_ossuary: {
    id: 'ashfall_monastery_bone_ossuary',
    name: '骨灰藏室',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_bone_ossuary.png',
    imagePrompt: '骨灰藏室 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain ash, clear lantern light',
    description:
      '骨灰藏室位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_crypt_stairs', description: '回到地下墓階' },
      { direction: 'south', targetRoomId: 'ashfall_monastery_censer_hall', description: '回到香爐廳' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_reliquary_vault', description: '聖物庫在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_ossuary_bonekeeper', maxCount: 2, respawnSeconds: 420 },
    ],
    mapSymbol: '[骨]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '骨灰藏室的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '骨灰藏室的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '骨灰藏室殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_censer_hall: {
    id: 'ashfall_monastery_censer_hall',
    name: '香爐廳',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_censer_hall.png',
    imagePrompt: '香爐廳 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '香爐廳位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_smoke_ambulatory', description: '回到煙霧步廊' },
      { direction: 'south', targetRoomId: 'ashfall_monastery_fallen_refectory', description: '回到墮落食堂' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_bone_ossuary', description: '骨灰藏室在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_censer_wraith', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'ashfall_ember_chapel_cantor', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[香]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '香爐廳的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '香爐廳的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '香爐廳殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_saint_mosaic: {
    id: 'ashfall_monastery_saint_mosaic',
    name: '聖者碎像',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_saint_mosaic.png',
    imagePrompt: '聖者碎像 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '聖者碎像位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'south', targetRoomId: 'ashfall_monastery_ember_chapel', description: '回到餘火小禮拜堂' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_shadow_belfry', description: '暗影鐘樓在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_shadow_belfry_tollkeeper', maxCount: 1, respawnSeconds: 450 },
      { monsterId: 'ashfall_broken_font_penitent', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '聖者碎像的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '聖者碎像的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '聖者碎像殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_firelit_apocrypha: {
    id: 'ashfall_monastery_firelit_apocrypha',
    name: '火照外典室',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_firelit_apocrypha.png',
    imagePrompt: '火照外典室 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '火照外典室位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'south', targetRoomId: 'ashfall_monastery_blackened_library', description: '回到燻黑書庫' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_dual_altar', description: '雙相祭壇在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_blackened_librarian', maxCount: 2, respawnSeconds: 280 },
      { monsterId: 'ashfall_dual_altar_absolver', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[典]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '火照外典室的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '火照外典室的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '火照外典室殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_shadow_belfry: {
    id: 'ashfall_monastery_shadow_belfry',
    name: '暗影鐘樓',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_shadow_belfry.png',
    imagePrompt: '暗影鐘樓 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '暗影鐘樓位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_saint_mosaic', description: '回到聖者碎像' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_dual_altar', description: '雙相祭壇在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_shadow_belfry_tollkeeper', maxCount: 1, respawnSeconds: 450 },
      { monsterId: 'ashfall_censer_wraith', maxCount: 2, respawnSeconds: 300 },
    ],
    mapSymbol: '[樓]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '暗影鐘樓的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '暗影鐘樓的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '暗影鐘樓殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_reliquary_vault: {
    id: 'ashfall_monastery_reliquary_vault',
    name: '聖物庫',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_reliquary_vault.png',
    imagePrompt: '聖物庫 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '聖物庫位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_bone_ossuary', description: '回到骨灰藏室' },
      { direction: 'north', targetRoomId: 'ashfall_monastery_dual_altar', description: '雙相祭壇在北側' },
    ],
    monsters: [
      { monsterId: 'ashfall_reliquary_sentinel', maxCount: 2, respawnSeconds: 450 },
      { monsterId: 'ashfall_ossuary_bonekeeper', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[庫]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '聖物庫的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '聖物庫的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '聖物庫殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_dual_altar: {
    id: 'ashfall_monastery_dual_altar',
    name: '雙相祭壇',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_dual_altar.png',
    imagePrompt: '雙相祭壇 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '雙相祭壇位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_firelit_apocrypha', description: '回到火照外典室' },
      { direction: 'south', targetRoomId: 'ashfall_monastery_reliquary_vault', description: '回到聖物庫' },
      { direction: 'east', targetRoomId: 'ashfall_monastery_ashen_sanctum', description: '灰燼聖所深處在東側' },
    ],
    monsters: [
      { monsterId: 'ashfall_dual_altar_absolver', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'ashfall_reliquary_sentinel', maxCount: 1, respawnSeconds: 450 },
      { monsterId: 'ashfall_shadow_belfry_tollkeeper', maxCount: 1, respawnSeconds: 450 },
    ],
    mapSymbol: '[壇]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '雙相祭壇的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '雙相祭壇的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '雙相祭壇殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

ashfall_monastery_ashen_sanctum: {
    id: 'ashfall_monastery_ashen_sanctum',
    name: '灰燼聖所',
    zone: 'ashfall_monastery' as RoomDef['zone'],
    image: 'ashfall_monastery_ashen_sanctum.png',
    imagePrompt: '灰燼聖所 in ashfall_monastery, ash covered monastery dungeon entrance with burned cloisters, broken holy font, ember chapel, blackened library, crypt stairs and fallen saints, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '灰燼聖所位於火山灰覆蓋卻仍有鐘聲迴盪的灰落修道院內，焦黑迴廊、破聖水盤、餘火禮拜堂、燻黑書庫與地下骨灰室共同構成光暗交錯的危險入口。這裡是高階隊伍地下城入口與精英巡邏區，玩家可以 inspect 鐘繩灰痕、聖像裂紋、香爐煙向和外典封條來判斷墮落儀式，也能 search 懺悔小室、抄經室、聖物庫與雙相祭壇尋找修道院線索。若隊伍忽略鐘聲節奏、灰燼火線與暗影修士伏擊，詛咒祭司、巫妖、魔族戰士與大惡魔會切斷退路；若穩定沿鐘庭、墓階與聖物庫推進，則能抵達灰燼聖所並帶回聖光殘響記錄與灰燼封印。',
    exits: [
      { direction: 'west', targetRoomId: 'ashfall_monastery_dual_altar', description: '回到雙相祭壇' },
    ],
    monsters: [
      { monsterId: 'ashfall_fallen_abbot', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'ashfall_dual_altar_absolver', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'ashfall_reliquary_sentinel', maxCount: 1, respawnSeconds: 450 },
    ],
    mapSymbol: '[聖]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '灰燼聖所的灰燼若逆著鐘聲揚起，附近墮落修士或魔族巡邏正在靠近。',
      treasure: '灰燼聖所的外典封條、聖像裂縫或香爐底座旁可能藏著修道院線索。',
      spirit: '灰燼聖所殘留修士祈禱、墮落儀式與聖光殘響互相撕扯的記憶。',
    },
  },

// ─── 霜咬隘口擴充 (Lv 28-38) ───────────────────────────

  frostbite_pass_snow_gate: {
    id: 'frostbite_pass_snow_gate',
    name: '雪門',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_snow_gate.png',
    imagePrompt: '雪門 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '雪門位於通往極北且長年結冰的霜咬隘口，雪門、商隊路標、藍冰橋、白霧盆地、冰河口與失蹤貨車共同標出危險的高寒通道。這裡是高密度野外遭遇與精英巡邏區，玩家可以 inspect 雪面足跡、斷裂繩標、冰橋裂紋和風向旗來判斷暴風雪間隙，也能 search 埋雪貨車、冷火營、失商藏點與冰石堆原尋找商隊線索。若隊伍忽略白霧回流、雪怪抓痕與冰龍吐息，雪狼、雪人、霜巨人與冰元素會在窄路包抄；若穩定沿路標、骨橇道與北行山脊推進，則能抵達極北封門並帶回失蹤商隊記錄、冰橋測量與避風路線標記與雪盲防護記錄。',
    exits: [
      { direction: 'east', targetRoomId: 'frostbite_pass_caravan_marker', description: '商隊路標在東側' },
      { direction: 'north', targetRoomId: 'frostbite_pass_frozen_switchback', description: '凍結折路在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'frostbite_whiteout_wolf_pack', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'frostbite_sleet_harrier', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '雪門的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '雪門的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '雪門殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },
};
