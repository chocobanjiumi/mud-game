export interface InstanceEntryItemMetadata {
  zoneId: string;
  zoneName: string;
  itemId: string;
  dungeonName: string;
  entranceRoomName: string;
  consumeItem: boolean;
  cooldownSeconds?: number;
  entryName: string;
  entryDescription: string;
}

export const WORLD_MAP2_INSTANCE_ENTRY_ITEMS: readonly InstanceEntryItemMetadata[] = [
  {
    zoneId: 'ancient_ruins',
    zoneName: '古代遺跡',
    itemId: 'ancient_runestone',
    dungeonName: '古代遺跡',
    entranceRoomName: '古代遺跡入口',
    consumeItem: true,
    entryName: '遠古符文石共鳴',
    entryDescription: '遠古符文石貼近古代遺跡入口時會沿著門楣刻痕發光，石面裂紋指向封閉走廊深處；使用者必須站在遺跡入口前，讓符文耗盡光芒後開啟一次獨立探索。',
  },
  {
    zoneId: 'sky_isles',
    zoneName: '浮空群島',
    itemId: 'sky_rune_shard',
    dungeonName: '浮空群島',
    entranceRoomName: '浮空群島入口',
    consumeItem: false,
    entryName: '浮空符文片定位',
    entryDescription: '浮空符文片會在浮空群島入口的斷裂錨臺上方旋轉，將散落雲橋短暫對準副本起點；它不會被消耗，但只能在入口房間用來定位可進入的浮空群島探索。',
  },
  {
    zoneId: 'time_ruins',
    zoneName: '時間廢墟',
    itemId: 'minute_zero_key',
    dungeonName: '時間廢墟',
    entranceRoomName: '時間廢墟入口',
    consumeItem: false,
    cooldownSeconds: 300,
    entryName: '零分鑰印校時',
    entryDescription: '零分鑰印靠近時間廢墟入口時會把鐘面停在同一刻，讓入口封印露出可通行的裂縫；鑰印不會消耗，但每次校時後需要等待鐘聲重新排列才能再次開啟。',
  },
  {
    zoneId: 'astral_wastes',
    zoneName: '星界荒原',
    itemId: 'worldcore_anchor',
    dungeonName: '星界荒原',
    entranceRoomName: '星界荒原入口',
    consumeItem: false,
    cooldownSeconds: 300,
    entryName: '荒原核心錨定',
    entryDescription: '荒原核心錨插入星界荒原入口的裂地時，會把漂移地平線固定成一條可行走的黑星道路；道具不會消耗，隊長可用它帶隊進入穩定後的星界副本，但每次錨定後需要等待地平線重新校準。',
  },
  {
    zoneId: 'final_battleground',
    zoneName: '終焉戰場',
    itemId: 'final_standard_seal',
    dungeonName: '終焉戰場',
    entranceRoomName: '終焉戰場入口',
    consumeItem: false,
    cooldownSeconds: 600,
    entryName: '終末軍旗印宣戰',
    entryDescription: '終末軍旗印舉向終焉戰場入口時，殘破戰旗會回應諸王軍令並展開決戰通道；戰印不會消耗，但入口會在宣戰後沉寂一段時間，避免連續重啟終局戰場。',
  },
  {
    zoneId: 'abyss_rift',
    zoneName: '深淵裂隙',
    itemId: 'abyss_survey_scroll',
    dungeonName: '深淵裂隙',
    entranceRoomName: '深淵裂隙入口',
    consumeItem: false,
    cooldownSeconds: 300,
    entryName: '深淵測繪卷軸校準',
    entryDescription: '深淵測繪卷軸在裂隙入口展開時會把封印錨、虛空鏡湖與信標眼位置連成銀砂路線；卷軸不會消耗，但每次校準後需要等待裂隙震盪平復。',
  },
  {
    zoneId: 'reef_of_bones',
    zoneName: '白骨礁',
    itemId: 'tidebone_compass',
    dungeonName: '白骨礁',
    entranceRoomName: '白骨礁入口',
    consumeItem: false,
    entryName: '潮骨羅盤定航',
    entryDescription: '潮骨羅盤靠近白骨礁入口時會跟著礁鐘舌片震動，指針指向退潮後露出的幽靈錨航道；羅盤不會消耗，可用來帶隊進入白骨礁副本，並提醒隊伍必須從入口房間確認航向。',
  },
  {
    zoneId: 'ashfall_monastery',
    zoneName: '灰落修道院',
    itemId: 'ashen_vigil_offering',
    dungeonName: '灰落修道院',
    entranceRoomName: '灰落修道院入口',
    consumeItem: true,
    entryName: '灰守祭品獻入',
    entryDescription: '灰守祭品放上灰落修道院入口的破裂祭盤後，焦黑經頁會被餘火點燃並照出灰門內側通道；祭品會在儀式中燒盡，只開啟一次副本入口。',
  },
];

export const WORLD_MAP2_INSTANCE_ENTRY_ITEM_BY_ID: Record<string, InstanceEntryItemMetadata> = Object.fromEntries(
  WORLD_MAP2_INSTANCE_ENTRY_ITEMS.map((entry) => [entry.itemId, entry]),
);
