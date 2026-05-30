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
      '鏽鐵墓門半埋在濕冷墓土裡，兩扇門葉被黑鏽與舊鎖鏈咬住，只留出足以穿過的裂縫。冷月照在門楣殘缺的聖徽上，碎碑、枯藤與斷裂燭臺沿牆根堆疊，黑羽落滿通往墓園深處的小徑。東側的黑羽墓徑傳來低而斷續的鐘音，南側殘燈路則能看見守夜燈亭僅剩一點昏黃。門後霧氣像潮水反覆推回入口，使這裡同時保有撤離的輪廓與踏入詛咒墓園的壓迫感。',
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
      '黑羽墓徑被成排傾倒墓碑夾住，濕土上散著羽毛、蠟淚與被拖曳過的細長痕跡。西面可回望鏽鐵墓門殘破的輪廓，東側塌陷墓排一路沉入沉墓地，北邊無人鐘樓的影子像斷指般壓在月色下。枯枝間停滿無聲的黑鳥，霧裡偶爾浮出鈴舌撞擊銅壁的回音，讓每一步都像踩在被亡者記住的名字上。道路雖然清楚分岔，卻因碎碑和冷霧顯得逼仄而不安。',
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
      '無人鐘樓矗立在黑羽墓徑北側，樓身被雷擊裂成三道深縫，鐘繩垂到潮濕石階上卻無人牽動。南面鐘影落回黑羽墓徑，東側狹窄階道接向送葬臺階，兩條路都被鐘聲的殘響染得冰冷。樓內堆著破碎銅片、倒塌木梯與刻滿悼詞的石牌，月光從裂縫斜切進來，使鐘腔像一口懸在頭頂的空棺。每當霧氣湧入，未敲響的鐘也會自行震顫。',
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
      '守夜燈亭歪斜在墓園入口南側，鏽鐵燈架仍懸著一盞將熄未熄的冷焰，光圈只能照亮腳邊的濕草與碎骨。北面殘燈路回到鏽鐵墓門，東側枯根路鑽進枯紫杉盤結的陰影，兩邊都能聽見霧裡拖行鎖鏈的聲音。亭柱上刻著守墓人輪值的舊名，許多名字被指甲般的劃痕刮去，只剩蠟痕和焦黑手印。這裡不像避風處，更像最後一盞仍被亡者盯著的燈。',
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
      '沉墓地是一片向下塌陷的墓排，棺蓋、碑座與濕泥一起陷入黑色積水，露出的骨手像仍想抓住月光。西側塌陷墓排連回黑羽墓徑，東邊骨牆缺口通往藏骨牆，南面濕土路則滑向枯紫杉的根群。每座歪斜墓碑都被水氣磨平姓名，只剩家徽與裂開的祈禱文。霧在低處盤旋，偶爾托起浮木般的棺片，使這片墓地看似靜止，實際卻像正在緩慢吞沒整座墓園。',
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
      '送葬臺階沿著冷白石坡向東延伸，階面被無數棺輪磨出弧痕，黑色蠟油凝在扶欄與碑角之間。西側石階回望無人鐘樓，南邊白骨路貼著牆根落向藏骨牆，東面月光階則把臺階帶入月蝕墓室。殘破花圈和腐朽面紗被風推到階角，像一場從未結束的葬列停在半途。霧中偶爾浮現低聲悼詞，音節互相重疊，分不清是祈禱還是咒語。',
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
      '枯紫杉盤踞在墓園低處，樹皮呈病態暗紫，粗根穿破棺板與碑基，把沉眠者的名字絞成碎片。西側枯根路回到守夜燈亭，北面濕土路抬升至沉墓地，東邊木鍬痕則通往掘墓棚。枝椏間掛著乾硬的布條與舊鈴，風一吹便發出像牙齒相碰的細響。樹下泥土比周圍更黑，根縫間可見蠟淚、羽毛和小骨片，被冷月照得像一圈沉默的祭環。',
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
      '藏骨牆由無數白骨與墓磚砌成，顱骨空洞朝外排列，像一整面無聲旁觀的牆。西側缺口接回沉墓地，北方白骨路通向送葬臺階，東邊骨龕路則延伸至破聖像。牆縫裡塞滿乾枯聖草、碎銀釘與發黑蠟燭，部分骨面刻著細小禱文，卻被霧水泡得模糊。這裡的冷意不是來自夜風，而像是所有被移出墳墓的亡者仍在共同呼吸，將通道壓得狹長而沉重。',
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
      '掘墓棚以歪斜木樁撐在泥地上，棚頂鋪著破棺板，雨水沿著生鏽鐵鍬滴進一排空墓坑。西側木鍬痕回到枯紫杉，東面棺木路通往棺材巷，南側黑霧低地則沒入黑霧池附近的陰冷窪地。棚內掛著斷柄鏟、粗麻繩和乾硬皮圍裙，地上散落的泥靴印大小不一，像有許多不該站起來的身影曾在此等待。月光穿過木縫，使每口未用棺材都顯得剛被打開。',
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
      '月蝕墓室嵌在東側石坡內，墓門上刻著被黑影吞沒的銀月，門縫滲出冰冷藍光。西面月光階回到送葬臺階，南側裂石梯降向破聖像，東邊冷燭路則消失在冷燭迷陣的微光裡。室內石棺以圓弧排列，棺面鑲著發暗銀片，像仍在記錄某次被遮蔽的天象。牆上壁畫描繪教士、送葬者與戴冠死者，但所有眼睛都被細釘刺穿，只剩月色替它們注視通道。',
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
      '破聖像立在墓園中段的裂石臺上，半張臉已崩落，剩下的手掌仍伸向詛咒噴泉的方向。西側骨龕路回到藏骨牆，北面裂石梯通往月蝕墓室，東側乾涸水道延向詛咒噴泉。雕像腳邊堆滿碎翼、斷冠與被火燒黑的祈禱牌，石縫中滲出的黑水沿著臺階蜿蜒。冷月照亮聖袍殘紋時，陰影會在空缺的臉部聚集，令這座本該庇護亡者的像變得像一具沉默審判。',
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
      '棺材巷狹長而低陷，兩側堆滿未下葬的舊棺，棺蓋以鐵釘交錯封死，仍被內側留下細密刮痕。西邊棺木路回到掘墓棚，東側拖痕穿向黑霧池，南面腐土坡則下沉至瘟疫坑。巷中氣味混著潮木、蠟油與藥草腐敗的苦味，車輪印在泥裡反覆交疊，像無數送葬車曾在同一夜往返。霧從棺縫間冒出，使整條巷子看起來像仍在緩慢呼吸。',
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
      '黑霧池是一處沒有倒影的低窪水面，濃霧從池底翻出，貼著墓土向四周漫延。北側黑霧低地通回掘墓棚，西面拖痕接到棺材巷，東邊霧線則引向瘟疫坑。池邊插著被腐蝕的燈桿與半沉的墓牌，水面偶爾浮起白色蠟塊，又很快被黑霧吞沒。靠近時能聽見池下傳來悶響，像有人在極深處敲打棺板，讓周圍每條路都染上潮濕的寒意。',
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
      '冷燭迷陣由成百上千支灰白葬燭排成，燭火不向上燃燒，反而貼著地面拖出藍冷光線。西側冷燭路回到月蝕墓室，南邊燭淚路滑向詛咒噴泉，東面斷牆後可見禮拜堂廢墟。每排燭臺之間都夾著小型墓碑與斷裂骨串，蠟淚凝成像指節般的形狀。霧氣穿過燭陣時會折出錯亂影子，使近在眼前的通道忽遠忽近，彷彿整座墓園正在用火光重新排列道路。',
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
      '詛咒噴泉早已不再噴水，池盤中央的天使石像被黑液封住雙翼，乾裂水道向四周伸展。西側水道回到破聖像，北邊燭淚路連著冷燭迷陣，東側黑水路通往禮拜堂廢墟。池緣刻滿祈求安息的名字，卻被後來的尖刻咒文層層覆蓋，黑水只在月光最冷時微微震動。附近石板泛著濕亮光澤，像有人剛把哀悼與怨恨一起倒回這座乾涸噴泉。',
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
      '瘟疫坑陷在墓園南側低地，坑壁以黑木支架勉強撐住，底部堆滿碎棺、草藥包與發灰骨骸。北面腐土坡回到棺材巷，西側霧線連著黑霧池，東邊封蠟路通往守墓人地窖。腐土表面結著暗綠薄膜，破裂處滲出刺鼻寒氣，像舊疫病仍在土層裡保存呼吸。坑邊殘留許多臨時焚燒的痕跡，焦黑符紙與醫師面罩被泥水黏住，呈現一場倉促掩埋後留下的狼狽秩序。',
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
      '禮拜堂廢墟只剩半圈尖拱與倒塌鐘牆，月光穿過破頂，照在碎彩窗與焦黑長椅之間。西側黑水路回到詛咒噴泉，南面斷禱階降向守墓人地窖，東邊破拱門通往悼詞祭壇。地面鋪滿被踩碎的聖書頁，墨跡遇霧暈開成細長黑線，像經文仍試圖爬回牆上。祭壇基座被裂痕貫穿，殘存聖徽倒映在積水裡，庇護與詛咒在此幾乎難以分辨。',
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
      '守墓人地窖位在禮拜堂南側地下，封蠟門與鐵環門閂仍殘留多次加固的痕跡。西面封蠟路回到瘟疫坑，北側斷禱階通往禮拜堂廢墟，東邊地下橋接向骨橋。窖內牆壁掛滿守墓名冊、發霉鑰匙串與未寄出的安葬許可，木架上還排列著標示年份的骨匣。空氣中有乾蠟、冷鐵與舊紙味，深處偶爾傳來沉重甲片摩擦聲，像某位守墓者至今仍按名冊巡查死者。',
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
      '悼詞祭壇坐落在禮拜堂東側的開闊石臺，黑色經卷被釘在祭桌上，紙邊隨霧氣一張一合。西側破拱門回到禮拜堂廢墟，南面祭壇階降至骨橋，東邊黑經路直指巫妖陵寢。祭壇周圍立著多根斷裂燭柱，每根柱身都刻著同一句悼詞，卻在末尾被改寫成召喚亡者的咒句。冷月照在祭桌裂縫中，使那裡像藏著一條通往墓園心臟的黑線。',
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
      '骨橋橫跨在墓園東南側的黑霧裂谷上，橋面由肋骨、墓鐵與灰白石板拼接，行走時會發出低沉空響。西側地下橋回到守墓人地窖，北邊祭壇階通往悼詞祭壇，東端橋面則推向巫妖陵寢附近的陰影。橋下看不見谷底，只能聽見許多乾枯聲音在霧中反覆念誦姓名。斷裂欄杆上掛著舊葬布與銅鈴，冷風一過，整座橋像被迫加入遠處的悼詞。',
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
      '巫妖陵寢盤踞在墓園最東端，黑石門楣刻著倒置聖徽與月蝕紋，四周棺鏈垂落如同凝固瀑布。西側黑經路連回悼詞祭壇，除此之外只有高牆、封死墓窗與聚攏不散的冷霧。陵寢前的石階被長年蠟油染成深色，兩排空甲冑守在門旁，甲縫裡透出幽藍光點。這裡不再像普通墓室，而像整座詛咒墓園的意志被收束成一座王座，等待鐘聲與悼詞將亡者重新喚醒。',
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
