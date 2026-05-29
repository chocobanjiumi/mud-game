import type { FaithId } from '@game/shared';

export interface FaithAltarDef {
  faithId: FaithId;
  roomId: string;
  zoneHint: string;
  locationHint: string;
  primary: true;
  dangerNote: string;
}

export const FAITH_ALTARS: Record<FaithId, FaithAltarDef> = {
  aelora: {
    faithId: 'aelora',
    roomId: 'starter_village_chapel',
    zoneHint: '新手村',
    locationHint: '晨光禮拜堂',
    primary: true,
    dangerNote: '安全的新手核心節點。',
  },
  karvos: {
    faithId: 'karvos',
    roomId: 'arena_quarter_center_arena',
    zoneHint: '競技城區',
    locationHint: '中央競技場',
    primary: true,
    dangerNote: '受控競技戰鬥點，建議確認等級與補給。',
  },
  ithern: {
    faithId: 'ithern',
    roomId: 'glass_dunes_lost_dynasty_altar',
    zoneHint: '琉璃沙丘',
    locationHint: '失朝祭壇',
    primary: true,
    dangerNote: '高階遺跡路線，建議沿沙丘主路推進。',
  },
  mirak: {
    faithId: 'mirak',
    roomId: 'kingsroad_market_shrine_of_routes',
    zoneHint: '王道市集',
    locationHint: '路神小祠',
    primary: true,
    dangerNote: '安全交通節點。',
  },
  virdan: {
    faithId: 'virdan',
    roomId: 'elf_altar',
    zoneHint: '暗影森林',
    locationHint: '精靈祭壇',
    primary: true,
    dangerNote: '森林支線聖地，周邊有暗影生物活動。',
  },
  shalan: {
    faithId: 'shalan',
    roomId: 'moonlit_fen_lunar_altar',
    zoneHint: '月光濕地',
    locationHint: '月沼祭壇',
    primary: true,
    dangerNote: '濕地深處祭壇，建議熟悉水路後前往。',
  },
  talorn: {
    faithId: 'talorn',
    roomId: 'storm_highlands_storm_altar',
    zoneHint: '風暴高原',
    locationHint: '風神祭壇',
    primary: true,
    dangerNote: '高原雷暴危險區，建議備妥抗性與撤退路線。',
  },
  oser: {
    faithId: 'oser',
    roomId: 'bloodsalt_coast_blood_altar_ledge',
    zoneHint: '血鹽海岸',
    locationHint: '血壇岩棚',
    primary: true,
    dangerNote: '亡靈與血潮活動區，建議高等隊伍前往。',
  },
  brokk: {
    faithId: 'brokk',
    roomId: 'forge_hall',
    zoneHint: '火山地帶',
    locationHint: '鍛造大廳',
    primary: true,
    dangerNote: '火山鍛造節點，需注意火元素騷動。',
  },
  nesha: {
    faithId: 'nesha',
    roomId: 'marsh_of_mirrors_shattered_reflection',
    zoneHint: '鏡沼',
    locationHint: '破碎倒影',
    primary: true,
    dangerNote: '禁忌倒影與混沌水路，建議熟悉鏡沼後前往。',
  },
};

export function getFaithAltar(faithId: FaithId): FaithAltarDef {
  return FAITH_ALTARS[faithId];
}

export function getFaithAltarByRoomId(roomId: string): FaithAltarDef | undefined {
  return Object.values(FAITH_ALTARS).find(altar => altar.roomId === roomId);
}

export function canFollowFaithAtRoom(roomId: string, faithId: FaithId): boolean {
  return FAITH_ALTARS[faithId]?.roomId === roomId;
}
