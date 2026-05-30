import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_010: Record<string, RoomDef> = {
underground_city_portal_hall: {
    id: 'underground_city_portal_hall',
    name: '傳送廳',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_portal_hall.png',
    imagePrompt: '傳送廳 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain city, clear lantern light',
    description:
      '傳送廳位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_arrival_plaza', description: '拱道回到抵達廣場' },
      { direction: 'east', targetRoomId: 'underground_city_council_chamber', description: '符文路通往議事廳' },
    ],
    mapSymbol: '[傳]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '傳送廳的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '傳送廳的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '傳送廳記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_council_chamber: {
    id: 'underground_city_council_chamber',
    name: '議事廳',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_council_chamber.png',
    imagePrompt: '議事廳 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '議事廳位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_portal_hall', description: '符文路回到傳送廳' },
      { direction: 'south', targetRoomId: 'underground_city_scribe_archive', description: '書吏階梯通往卷宗庫' },
    ],
    mapSymbol: '[議]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '議事廳的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '議事廳的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '議事廳記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_market_terrace: {
    id: 'underground_city_market_terrace',
    name: '市場露臺',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_market_terrace.png',
    imagePrompt: '市場露臺 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '市場露臺位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_arrival_plaza', description: '石階回到抵達廣場' },
      { direction: 'east', targetRoomId: 'underground_city_black_market', description: '布棚暗巷通往黑市' },
      { direction: 'south', targetRoomId: 'underground_city_craft_lane', description: '工具聲引向工匠巷' },
    ],
    mapSymbol: '[市]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '市場露臺的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '市場露臺的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '市場露臺記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_black_market: {
    id: 'underground_city_black_market',
    name: '黑市暗巷',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_black_market.png',
    imagePrompt: '黑市暗巷 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '黑市暗巷位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_market_terrace', description: '布棚巷回到市場露臺' },
      { direction: 'east', targetRoomId: 'underground_city_smuggler_dock', description: '暗號門通往走私碼頭' },
      { direction: 'south', targetRoomId: 'underground_city_guild_office', description: '窄梯通往公會辦事處' },
    ],
    mapSymbol: '[黑]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '黑市暗巷的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '黑市暗巷的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '黑市暗巷記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_scribe_archive: {
    id: 'underground_city_scribe_archive',
    name: '書吏卷宗庫',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_scribe_archive.png',
    imagePrompt: '書吏卷宗庫 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '書吏卷宗庫位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_council_chamber', description: '書吏階梯回到議事廳' },
      { direction: 'west', targetRoomId: 'underground_city_guild_office', description: '檔案廊通往公會辦事處' },
    ],
    mapSymbol: '[書]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '書吏卷宗庫的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '書吏卷宗庫的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '書吏卷宗庫記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_craft_lane: {
    id: 'underground_city_craft_lane',
    name: '工匠巷',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_craft_lane.png',
    imagePrompt: '工匠巷 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '工匠巷位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_market_terrace', description: '工具聲回到市場露臺' },
      { direction: 'east', targetRoomId: 'underground_city_forge_square', description: '熱浪通往熔爐廣場' },
      { direction: 'south', targetRoomId: 'underground_city_mender_shop', description: '燈牌指向修補鋪' },
    ],
    mapSymbol: '[匠]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '工匠巷的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '工匠巷的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '工匠巷記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_guild_office: {
    id: 'underground_city_guild_office',
    name: '公會辦事處',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_guild_office.png',
    imagePrompt: '公會辦事處 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '公會辦事處位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_black_market', description: '窄梯回到黑市暗巷' },
      { direction: 'east', targetRoomId: 'underground_city_scribe_archive', description: '檔案廊回到卷宗庫' },
      { direction: 'south', targetRoomId: 'underground_city_inn_cavern', description: '石燈路通往旅店洞廳' },
    ],
    mapSymbol: '[會]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '公會辦事處的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '公會辦事處的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '公會辦事處記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_forge_square: {
    id: 'underground_city_forge_square',
    name: '熔爐廣場',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_forge_square.png',
    imagePrompt: '熔爐廣場 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '熔爐廣場位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_craft_lane', description: '熱浪回到工匠巷' },
      { direction: 'east', targetRoomId: 'underground_city_crucible_workshop', description: '鐵軌通往坩堝工坊' },
      { direction: 'south', targetRoomId: 'underground_city_steam_baths', description: '蒸汽管線通往浴場' },
    ],
    mapSymbol: '[爐]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '熔爐廣場的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '熔爐廣場的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '熔爐廣場記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_mender_shop: {
    id: 'underground_city_mender_shop',
    name: '修補鋪',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_mender_shop.png',
    imagePrompt: '修補鋪 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '修補鋪位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_craft_lane', description: '燈牌回到工匠巷' },
      { direction: 'east', targetRoomId: 'underground_city_inn_cavern', description: '補給巷通往旅店洞廳' },
    ],
    mapSymbol: '[修]',
    mapX: 0,
    mapY: -2,
    guardianHints: {
      creature: '修補鋪的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '修補鋪的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '修補鋪記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_inn_cavern: {
    id: 'underground_city_inn_cavern',
    name: '旅店洞廳',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_inn_cavern.png',
    imagePrompt: '旅店洞廳 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '旅店洞廳位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_guild_office', description: '石燈路回到公會辦事處' },
      { direction: 'west', targetRoomId: 'underground_city_mender_shop', description: '補給巷回到修補鋪' },
      { direction: 'east', targetRoomId: 'underground_city_steam_baths', description: '暖霧通往蒸汽浴場' },
      { direction: 'south', targetRoomId: 'underground_city_lamp_garden', description: '幽光坡通往菌燈庭園' },
    ],
    mapSymbol: '[旅]',
    mapX: 1,
    mapY: -3,
    guardianHints: {
      creature: '旅店洞廳的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '旅店洞廳的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '旅店洞廳記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_crucible_workshop: {
    id: 'underground_city_crucible_workshop',
    name: '坩堝工坊',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_crucible_workshop.png',
    imagePrompt: '坩堝工坊 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '坩堝工坊位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_forge_square', description: '鐵軌回到熔爐廣場' },
      { direction: 'south', targetRoomId: 'underground_city_guard_barracks', description: '裝甲坡通往守備營' },
      { direction: 'east', targetRoomId: 'underground_city_gem_exchange', description: '精砂路通往寶石交易所' },
    ],
    mapSymbol: '[坩]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '坩堝工坊的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '坩堝工坊的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '坩堝工坊記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_steam_baths: {
    id: 'underground_city_steam_baths',
    name: '蒸汽浴場',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_steam_baths.png',
    imagePrompt: '蒸汽浴場 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '蒸汽浴場位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_forge_square', description: '蒸汽管線回到熔爐廣場' },
      { direction: 'west', targetRoomId: 'underground_city_inn_cavern', description: '暖霧回到旅店洞廳' },
      { direction: 'south', targetRoomId: 'underground_city_darkriver_quay', description: '排水階梯通往暗河碼頭' },
    ],
    mapSymbol: '[浴]',
    mapX: 2,
    mapY: -4,
    guardianHints: {
      creature: '蒸汽浴場的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '蒸汽浴場的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '蒸汽浴場記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_gem_exchange: {
    id: 'underground_city_gem_exchange',
    name: '寶石交易所',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_gem_exchange.png',
    imagePrompt: '寶石交易所 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '寶石交易所位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_crucible_workshop', description: '精砂路回到坩堝工坊' },
      { direction: 'south', targetRoomId: 'underground_city_lantern_bridge', description: '鑲燈橋通往燈橋' },
    ],
    mapSymbol: '[寶]',
    mapX: 4,
    mapY: -3,
    guardianHints: {
      creature: '寶石交易所的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '寶石交易所的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '寶石交易所記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_guard_barracks: {
    id: 'underground_city_guard_barracks',
    name: '守備營',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_guard_barracks.png',
    imagePrompt: '守備營 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '守備營位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_crucible_workshop', description: '裝甲坡回到坩堝工坊' },
      { direction: 'west', targetRoomId: 'underground_city_darkriver_quay', description: '巡邏道通往暗河碼頭' },
      { direction: 'east', targetRoomId: 'underground_city_lantern_bridge', description: '石盾路通往燈橋' },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: -4,
    guardianHints: {
      creature: '守備營的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '守備營的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '守備營記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_lamp_garden: {
    id: 'underground_city_lamp_garden',
    name: '菌燈庭園',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_lamp_garden.png',
    imagePrompt: '菌燈庭園 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '菌燈庭園位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_inn_cavern', description: '幽光坡回到旅店洞廳' },
      { direction: 'east', targetRoomId: 'underground_city_darkriver_quay', description: '濕石路通往暗河碼頭' },
      { direction: 'south', targetRoomId: 'underground_city_lower_stairs', description: '根鬚階梯通往下層街' },
    ],
    mapSymbol: '[菌]',
    mapX: 1,
    mapY: -4,
    guardianHints: {
      creature: '菌燈庭園的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '菌燈庭園的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '菌燈庭園記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_darkriver_quay: {
    id: 'underground_city_darkriver_quay',
    name: '暗河碼頭',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_darkriver_quay.png',
    imagePrompt: '暗河碼頭 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain city, clear lantern light',
    description:
      '暗河碼頭位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_steam_baths', description: '排水階梯回到蒸汽浴場' },
      { direction: 'west', targetRoomId: 'underground_city_lamp_garden', description: '濕石路回到菌燈庭園' },
      { direction: 'east', targetRoomId: 'underground_city_guard_barracks', description: '巡邏道回到守備營' },
      { direction: 'south', targetRoomId: 'underground_city_smuggler_dock', description: '暗流通往走私碼頭' },
    ],
    mapSymbol: '[河]',
    mapX: 2,
    mapY: -5,
    guardianHints: {
      creature: '暗河碼頭的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '暗河碼頭的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '暗河碼頭記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_smuggler_dock: {
    id: 'underground_city_smuggler_dock',
    name: '走私碼頭',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_smuggler_dock.png',
    imagePrompt: '走私碼頭 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain city, clear lantern light',
    description:
      '走私碼頭位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。北側黑市暗號門與西側暗河支流都能辨認，但碼頭這端由走私者單向管制，需從黑市或暗河碼頭進入。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'south', targetRoomId: 'underground_city_old_foundation', description: '破渠通往舊地基' },
    ],
    mapSymbol: '[私]',
    mapX: 3,
    mapY: -5,
    guardianHints: {
      creature: '走私碼頭的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '走私碼頭的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '走私碼頭記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_lower_stairs: {
    id: 'underground_city_lower_stairs',
    name: '下層螺旋街',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_lower_stairs.png',
    imagePrompt: '下層螺旋街 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '下層螺旋街位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'south', targetRoomId: 'underground_city_gate_lift', description: '拱門回到城邦升降門' },
      { direction: 'north', targetRoomId: 'underground_city_lamp_garden', description: '根鬚階梯回到菌燈庭園' },
      { direction: 'east', targetRoomId: 'underground_city_old_foundation', description: '古牆缺口通往舊地基' },
    ],
    mapSymbol: '[階]',
    mapX: 0,
    mapY: -4,
    guardianHints: {
      creature: '下層螺旋街的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '下層螺旋街的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '下層螺旋街記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_old_foundation: {
    id: 'underground_city_old_foundation',
    name: '舊城地基',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_old_foundation.png',
    imagePrompt: '舊城地基 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '舊城地基位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，旅人可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 觀察，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_smuggler_dock', description: '破渠回到走私碼頭' },
      { direction: 'west', targetRoomId: 'underground_city_lower_stairs', description: '古牆缺口回到下層螺旋街' },
    ],
    mapSymbol: '[舊]',
    mapX: 2,
    mapY: -6,
    guardianHints: {
      creature: '舊城地基的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '舊城地基的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '舊城地基記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

underground_city_lantern_bridge: {
    id: 'underground_city_lantern_bridge',
    name: '鑲燈橋',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_lantern_bridge.png',
    imagePrompt: '鑲燈橋 in underground_city, broad subterranean bridge set with lantern gems over dark river, forge glow, tiered stone streets and carved city arches, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '鑲燈橋橫跨暗河上方，北側階梯回寶石交易所，西側石盾路接守備營，橋欄嵌著一排排發光礦石。光線被水面反射成綠藍色波紋，照亮對岸守備營、寶石交易所與更深處的工坊街。這裡是地下城邦重要的交通節點，也是城鎮居民判斷河水水位、蒸汽壓力和市場人潮的觀察點。旅人可以在橋上整理路線、尋找交易消息、確認守備巡邏方向，或 觀察 橋欄刻字得知哪些舊礦道已封閉。雖然城邦內屬於安全區域，橋下暗流仍提醒旅人不要把這座城市只當成商店集合；它有自己的秩序、歷史與持續運作的地下脈搏',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_gem_exchange', description: '鑲燈階梯回到寶石交易所' },
      { direction: 'west', targetRoomId: 'underground_city_guard_barracks', description: '石盾路回到守備營' },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: -4,
    guardianHints: {
      creature: '鑲燈橋的燈石若依序轉暗，通常代表守備巡邏正在橋下換線。',
      treasure: '橋欄舊刻字旁可能藏著商旅留下的押貨暗記。',
      spirit: '鑲燈橋記錄著地下城邦用光與河聲維持秩序的方式。',
    },
  },

cursed_graveyard_iron_gate: {
    id: 'cursed_graveyard_iron_gate',
    name: '鏽鐵墓門',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_iron_gate.png',
    imagePrompt: '鏽鐵墓門 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '鏽鐵墓門籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'east', targetRoomId: 'cursed_graveyard_crow_path', description: '黑羽小徑通往墓園深處' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_watch_lantern', description: '殘燈路通往守夜燈亭' },
    ],
    monsters: [
      { monsterId: 'grave_bell_skeleton', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '鏽鐵墓門的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '鏽鐵墓門的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '鏽鐵墓門保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_crow_path: {
    id: 'cursed_graveyard_crow_path',
    name: '黑羽墓徑',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_crow_path.png',
    imagePrompt: '黑羽墓徑 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '黑羽墓徑籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_iron_gate', description: '墓徑回到鏽鐵墓門' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_sunken_graves', description: '塌陷墓排通往沉墓地' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_bell_tower', description: '鐘聲引向無人鐘樓' },
    ],
    monsters: [
      { monsterId: 'grave_bell_skeleton', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'blackfeather_wraith', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[徑]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '黑羽墓徑的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '黑羽墓徑的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '黑羽墓徑保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_bell_tower: {
    id: 'cursed_graveyard_bell_tower',
    name: '無人鐘樓',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_bell_tower.png',
    imagePrompt: '無人鐘樓 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '無人鐘樓籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'south', targetRoomId: 'cursed_graveyard_crow_path', description: '鐘影落回黑羽墓徑' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_mourner_steps', description: '石階通往送葬臺' },
    ],
    monsters: [
      { monsterId: 'blackfeather_wraith', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'grave_bell_skeleton', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[鐘]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '無人鐘樓的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '無人鐘樓的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '無人鐘樓保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_watch_lantern: {
    id: 'cursed_graveyard_watch_lantern',
    name: '守夜燈亭',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_watch_lantern.png',
    imagePrompt: '守夜燈亭 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '守夜燈亭籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'north', targetRoomId: 'cursed_graveyard_iron_gate', description: '殘燈路回到鏽鐵墓門' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_withered_yew', description: '枯根路通往枯紫杉' },
    ],
    monsters: [
      { monsterId: 'blackfeather_wraith', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[燈]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '守夜燈亭的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '守夜燈亭的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '守夜燈亭保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_sunken_graves: {
    id: 'cursed_graveyard_sunken_graves',
    name: '沉墓地',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_sunken_graves.png',
    imagePrompt: '沉墓地 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '沉墓地籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_crow_path', description: '塌陷墓排回到黑羽墓徑' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_ossuary_wall', description: '骨牆缺口通往藏骨牆' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_withered_yew', description: '濕土路通往枯紫杉' },
    ],
    monsters: [
      { monsterId: 'grave_bell_skeleton', maxCount: 4, respawnSeconds: 120 },
      { monsterId: 'grave_oath_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[沉]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '沉墓地的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '沉墓地的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '沉墓地保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_mourner_steps: {
    id: 'cursed_graveyard_mourner_steps',
    name: '送葬臺階',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_mourner_steps.png',
    imagePrompt: '送葬臺階 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '送葬臺階籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_bell_tower', description: '石階回到無人鐘樓' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_ossuary_wall', description: '白骨路通往藏骨牆' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_moon_crypt', description: '月光階通往月蝕墓室' },
    ],
    monsters: [
      { monsterId: 'grave_oath_knight', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'blackfeather_wraith', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[階]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '送葬臺階的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '送葬臺階的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '送葬臺階保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_withered_yew: {
    id: 'cursed_graveyard_withered_yew',
    name: '枯紫杉',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_withered_yew.png',
    imagePrompt: '枯紫杉 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '枯紫杉籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_watch_lantern', description: '枯根路回到守夜燈亭' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_sunken_graves', description: '濕土路回到沉墓地' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_gravedigger_shack', description: '木鍬痕通往掘墓棚' },
    ],
    monsters: [
      { monsterId: 'plague_coffin_bearer', maxCount: 1, respawnSeconds: 170 },
      { monsterId: 'blackfeather_wraith', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[杉]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '枯紫杉的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '枯紫杉的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '枯紫杉保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_ossuary_wall: {
    id: 'cursed_graveyard_ossuary_wall',
    name: '藏骨牆',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_ossuary_wall.png',
    imagePrompt: '藏骨牆 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '藏骨牆籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_sunken_graves', description: '骨牆缺口回到沉墓地' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_mourner_steps', description: '白骨路回到送葬臺階' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_saint_statue', description: '骨龕路通往破聖像' },
    ],
    monsters: [
      { monsterId: 'grave_bell_skeleton', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'broken_saint_gargoyle', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[骨]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '藏骨牆的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '藏骨牆的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '藏骨牆保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_gravedigger_shack: {
    id: 'cursed_graveyard_gravedigger_shack',
    name: '掘墓棚',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_gravedigger_shack.png',
    imagePrompt: '掘墓棚 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '掘墓棚籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_withered_yew', description: '木鍬痕回到枯紫杉' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_coffin_lane', description: '棺木路通往棺材巷' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_black_mist_pool', description: '黑霧低地通往霧池' },
    ],
    monsters: [
      { monsterId: 'grave_bell_skeleton', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'grave_oath_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[棚]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '掘墓棚的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '掘墓棚的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '掘墓棚保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_moon_crypt: {
    id: 'cursed_graveyard_moon_crypt',
    name: '月蝕墓室',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_moon_crypt.png',
    imagePrompt: '月蝕墓室 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '月蝕墓室籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_mourner_steps', description: '月光階回到送葬臺階' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_saint_statue', description: '裂石梯通往破聖像' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_candle_maze', description: '冷燭路通往燭迷陣' },
    ],
    monsters: [
      { monsterId: 'grave_oath_knight', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'moonlit_litany_lich', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '月蝕墓室的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '月蝕墓室的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '月蝕墓室保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_saint_statue: {
    id: 'cursed_graveyard_saint_statue',
    name: '破聖像',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_saint_statue.png',
    imagePrompt: '破聖像 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '破聖像籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_ossuary_wall', description: '骨龕路回到藏骨牆' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_moon_crypt', description: '裂石梯回到月蝕墓室' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_cursed_fountain', description: '乾涸水道通往詛咒噴泉' },
    ],
    monsters: [
      { monsterId: 'broken_saint_gargoyle', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'grave_oath_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '破聖像的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '破聖像的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '破聖像保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_coffin_lane: {
    id: 'cursed_graveyard_coffin_lane',
    name: '棺材巷',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_coffin_lane.png',
    imagePrompt: '棺材巷 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '棺材巷籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_gravedigger_shack', description: '棺木路回到掘墓棚' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_black_mist_pool', description: '拖痕通往黑霧池' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_plague_pit', description: '腐土坡通往瘟疫坑' },
    ],
    monsters: [
      { monsterId: 'plague_coffin_bearer', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'grave_oath_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[棺]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '棺材巷的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '棺材巷的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '棺材巷保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_black_mist_pool: {
    id: 'cursed_graveyard_black_mist_pool',
    name: '黑霧池',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_black_mist_pool.png',
    imagePrompt: '黑霧池 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '黑霧池籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'north', targetRoomId: 'cursed_graveyard_gravedigger_shack', description: '黑霧低地回到掘墓棚' },
      { direction: 'west', targetRoomId: 'cursed_graveyard_coffin_lane', description: '拖痕回到棺材巷' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_plague_pit', description: '霧線通往瘟疫坑' },
    ],
    monsters: [
      { monsterId: 'blackfeather_wraith', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'plague_coffin_bearer', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[霧]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '黑霧池的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '黑霧池的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '黑霧池保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_candle_maze: {
    id: 'cursed_graveyard_candle_maze',
    name: '冷燭迷陣',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_candle_maze.png',
    imagePrompt: '冷燭迷陣 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '冷燭迷陣籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_moon_crypt', description: '冷燭路回到月蝕墓室' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_cursed_fountain', description: '燭淚路通往詛咒噴泉' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '斷牆通往禮拜堂廢墟' },
    ],
    monsters: [
      { monsterId: 'blackfeather_wraith', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'moonlit_litany_lich', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[燭]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '冷燭迷陣的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '冷燭迷陣的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '冷燭迷陣保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_cursed_fountain: {
    id: 'cursed_graveyard_cursed_fountain',
    name: '詛咒噴泉',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_cursed_fountain.png',
    imagePrompt: '詛咒噴泉 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '詛咒噴泉籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_saint_statue', description: '乾涸水道回到破聖像' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_candle_maze', description: '燭淚路回到冷燭迷陣' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '黑水路通往禮拜堂廢墟' },
    ],
    monsters: [
      { monsterId: 'grave_oath_knight', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'broken_saint_gargoyle', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[泉]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '詛咒噴泉的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '詛咒噴泉的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '詛咒噴泉保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_plague_pit: {
    id: 'cursed_graveyard_plague_pit',
    name: '瘟疫坑',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_plague_pit.png',
    imagePrompt: '瘟疫坑 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '瘟疫坑籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'north', targetRoomId: 'cursed_graveyard_coffin_lane', description: '腐土坡回到棺材巷' },
      { direction: 'west', targetRoomId: 'cursed_graveyard_black_mist_pool', description: '霧線回到黑霧池' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_gravekeeper_vault', description: '封蠟路通往守墓人地窖' },
    ],
    monsters: [
      { monsterId: 'plague_coffin_bearer', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'gravekeeper_vaultwarden', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[疫]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '瘟疫坑的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '瘟疫坑的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '瘟疫坑保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_chapel_ruin: {
    id: 'cursed_graveyard_chapel_ruin',
    name: '禮拜堂廢墟',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_chapel_ruin.png',
    imagePrompt: '禮拜堂廢墟 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '禮拜堂廢墟籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_cursed_fountain', description: '黑水路回到詛咒噴泉' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_gravekeeper_vault', description: '斷禱階通往守墓人地窖' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_litany_altar', description: '破拱門通往悼詞祭壇' },
    ],
    monsters: [
      { monsterId: 'broken_saint_gargoyle', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'moonlit_litany_lich', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[堂]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '禮拜堂廢墟的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '禮拜堂廢墟的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '禮拜堂廢墟保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_gravekeeper_vault: {
    id: 'cursed_graveyard_gravekeeper_vault',
    name: '守墓人地窖',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_gravekeeper_vault.png',
    imagePrompt: '守墓人地窖 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '守墓人地窖籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_plague_pit', description: '封蠟路回到瘟疫坑' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '斷禱階回到禮拜堂廢墟' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_bone_bridge', description: '地下橋通往骨橋' },
    ],
    monsters: [
      { monsterId: 'gravekeeper_vaultwarden', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'grave_oath_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[窖]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '守墓人地窖的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '守墓人地窖的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '守墓人地窖保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_litany_altar: {
    id: 'cursed_graveyard_litany_altar',
    name: '悼詞祭壇',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_litany_altar.png',
    imagePrompt: '悼詞祭壇 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '悼詞祭壇籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '破拱門回到禮拜堂廢墟' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_bone_bridge', description: '祭壇階通往骨橋' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_lich_mausoleum', description: '黑經路通往巫妖陵寢' },
    ],
    monsters: [
      { monsterId: 'moonlit_litany_lich', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'gravekeeper_vaultwarden', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[壇]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '悼詞祭壇的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '悼詞祭壇的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '悼詞祭壇保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_bone_bridge: {
    id: 'cursed_graveyard_bone_bridge',
    name: '骨橋',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_bone_bridge.png',
    imagePrompt: '骨橋 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '骨橋籠罩在詛咒墓園的黑霧與冷月之下，西側地下橋回守墓人地窖，北側祭壇階接悼詞祭壇，東端通往巫妖陵寢。濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_gravekeeper_vault', description: '地下橋回到守墓人地窖' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_litany_altar', description: '祭壇階回到悼詞祭壇' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_lich_mausoleum', description: '骨橋盡頭通往巫妖陵寢' },
    ],
    monsters: [
      { monsterId: 'gravekeeper_vaultwarden', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'grave_bell_skeleton', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[橋]',
    mapX: 6,
    mapY: -1,
    guardianHints: {
      creature: '骨橋的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '骨橋的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '骨橋保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

cursed_graveyard_lich_mausoleum: {
    id: 'cursed_graveyard_lich_mausoleum',
    name: '巫妖陵寢',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_lich_mausoleum.png',
    imagePrompt: '巫妖陵寢 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '巫妖陵寢籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。南側骨橋輪廓仍在黑霧外，但陵寢這端棺鏈垂落封住回程，需由骨橋盡頭進入。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。旅人可以 觀察 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 搜索 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_litany_altar', description: '黑經路回到悼詞祭壇' },
    ],
    monsters: [
      { monsterId: 'bellgrave_lich_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'moonlit_litany_lich', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'gravekeeper_vaultwarden', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[巫]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '巫妖陵寢的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '巫妖陵寢的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '巫妖陵寢保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

storm_highlands_cliff_gate: {
    id: 'storm_highlands_cliff_gate',
    name: '峭壁入口',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_cliff_gate.png',
    imagePrompt: '峭壁入口 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '峭壁入口位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'east', targetRoomId: 'storm_highlands_windcut_path', description: '風切小徑通往高原' },
      { direction: 'north', targetRoomId: 'storm_highlands_rain_shelf', description: '雨棚岩臺通往北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'windcut_kestrel', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '峭壁入口的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '峭壁入口的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '峭壁入口保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_windcut_path: {
    id: 'storm_highlands_windcut_path',
    name: '風切小徑',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_windcut_path.png',
    imagePrompt: '風切小徑 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '風切小徑位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_cliff_gate', description: '小徑回到峭壁入口' },
      { direction: 'east', targetRoomId: 'storm_highlands_goat_ledge', description: '碎石路通往山羊岩階' },
      { direction: 'north', targetRoomId: 'storm_highlands_cloud_bridge', description: '雲橋纜索通往高空', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'windcut_kestrel', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[徑]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '風切小徑的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風切小徑的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風切小徑保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_rain_shelf: {
    id: 'storm_highlands_rain_shelf',
    name: '雨棚岩臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_rain_shelf.png',
    imagePrompt: '雨棚岩臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '雨棚岩臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'south', targetRoomId: 'storm_highlands_cliff_gate', description: '雨幕回到峭壁入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'storm_highlands_cloud_bridge', description: '濕岩路通往雲橋' },
    ],
    monsters: [
      { monsterId: 'cloudbridge_raider', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'windcut_kestrel', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[雨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '雨棚岩臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雨棚岩臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雨棚岩臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_cloud_bridge: {
    id: 'storm_highlands_cloud_bridge',
    name: '雲索橋',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_cloud_bridge.png',
    imagePrompt: '雲索橋 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '雲索橋位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'south', targetRoomId: 'storm_highlands_windcut_path', description: '纜索回到風切小徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'storm_highlands_rain_shelf', description: '濕岩路回到雨棚岩臺' },
      { direction: 'east', targetRoomId: 'storm_highlands_griffin_watch', description: '橋端通往獅鷲哨臺' },
    ],
    monsters: [
      { monsterId: 'cloudbridge_raider', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '雲索橋的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲索橋的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雲索橋保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_goat_ledge: {
    id: 'storm_highlands_goat_ledge',
    name: '山羊岩階',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_goat_ledge.png',
    imagePrompt: '山羊岩階 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '山羊岩階位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_windcut_path', description: '碎石路回到風切小徑' },
      { direction: 'east', targetRoomId: 'storm_highlands_thunder_pool', description: '凹岩路通往雷雨池' },
      { direction: 'south', targetRoomId: 'storm_highlands_basalt_spine', description: '黑岩脊向南延伸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormhorn_goat', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'windcut_kestrel', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[階]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '山羊岩階的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '山羊岩階的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '山羊岩階保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_griffin_watch: {
    id: 'storm_highlands_griffin_watch',
    name: '獅鷲哨臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_griffin_watch.png',
    imagePrompt: '獅鷲哨臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '獅鷲哨臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_cloud_bridge', description: '橋端回到雲索橋' },
      { direction: 'east', targetRoomId: 'storm_highlands_eagle_scarp', description: '羽痕通往雷鷹崖' },
      { direction: 'south', targetRoomId: 'storm_highlands_thunder_pool', description: '哨臺南側濕滑階梯沿雲霧與斷纜折落，繞過落雷濕岩後抵達雷雨池外圈', edgeKind: 'distant_route', edgeNote: '獅鷲哨臺南側要沿濕滑階梯與纜索折行到雷雨池，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'stormwatch_griffin', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'cloudbridge_raider', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[哨]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '獅鷲哨臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '獅鷲哨臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '獅鷲哨臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_thunder_pool: {
    id: 'storm_highlands_thunder_pool',
    name: '雷雨池',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_thunder_pool.png',
    imagePrompt: '雷雨池 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '雷雨池位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_goat_ledge', description: '凹岩路回到山羊岩階' },
      { direction: 'north', targetRoomId: 'storm_highlands_griffin_watch', description: '北側濕階逆著雷雨與雲霧繞過斷纜，沿滑石折坡回到獅鷲哨臺下方', edgeKind: 'distant_route', edgeNote: '雷雨池北側回哨臺需逆風攀過濕階與斷纜，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'storm_highlands_old_windmill', description: '水渠通往舊風車' },
    ],
    monsters: [
      { monsterId: 'thunderpool_eel', maxCount: 3, respawnSeconds: 150 },
      { monsterId: 'cloudbridge_raider', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[池]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '雷雨池的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷雨池的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雷雨池保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },
};
