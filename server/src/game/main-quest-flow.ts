import type { NpcDef, RoomDef } from '@game/shared';
import type { QuestDef } from './quest.js';

export interface MainQuestFlowEntry {
  questId: string;
  order: number;
  acceptNpcId: string;
  turnInNpcId: string;
  acceptRoomId: string;
  turnInRoomId: string;
  prerequisiteQuestId?: string;
  recommendedLevel: number;
  nextQuestId?: string;
  startOptionText: string;
  turnInOptionText: string;
  nextHint: string;
  offerText: string;
  activeText: string;
  completeText: string;
  rewardSummary: {
    exp: number;
    gold: number;
    equipment?: string;
  };
}

export const MAIN_QUEST_FLOW: MainQuestFlowEntry[] = [
  {
    questId: 'main_01_awakening',
    order: 1,
    acceptNpcId: 'village_chief',
    turnInNpcId: 'village_chief',
    acceptRoomId: 'village_square',
    turnInRoomId: 'village_square',
    recommendedLevel: 1,
    nextQuestId: 'main_02_first_battle',
    startOptionText: '我準備好熟悉村子了。',
    turnInOptionText: '我已啟用傳送祠堂。',
    nextHint: '前往冒險者公會，找冒險者導師開始訓練。',
    offerText: '先熟悉村子。去公會、武器店、藥水店與傳送祠堂走一圈，最後啟用新手村傳送陣。',
    activeText: '傳送祠堂在村子內，啟用後回來找我。這是離村前最重要的保險。',
    completeText: '很好，你已經知道如何查看目標與移動。下一步去冒險者公會找導師。',
    rewardSummary: { exp: 50, gold: 30, equipment: '新手飾品' },
  },
  {
    questId: 'main_02_first_battle',
    order: 2,
    acceptNpcId: 'adventure_mentor',
    turnInNpcId: 'adventure_mentor',
    acceptRoomId: 'adventurer_guild',
    turnInRoomId: 'adventurer_guild',
    prerequisiteQuestId: 'main_01_awakening',
    recommendedLevel: 3,
    nextQuestId: 'main_03_forest_threat',
    startOptionText: '我要開始實戰訓練。',
    turnInOptionText: '我完成了史萊姆訓練。',
    nextHint: '回村莊廣場找村長，詢問森林異變。',
    offerText: '去訓練場擊敗綠色史萊姆，戰鬥後搜刮屍體並換上掉落裝。',
    activeText: '用 attack green_slime 進入戰鬥；勝利後記得 loot corpse。',
    completeText: '你已經懂得戰鬥、搜刮與換裝。村長那邊有森林異變的消息。',
    rewardSummary: { exp: 200, gold: 100, equipment: '低階手部或武器裝備' },
  },
  {
    questId: 'main_03_forest_threat',
    order: 3,
    acceptNpcId: 'village_chief',
    turnInNpcId: 'forest_ranger',
    acceptRoomId: 'village_square',
    // 替代表指定的 forest_entrance：現有 forest_ranger 在 firefly_trail，先以實際 NPC 所在房間交付。
    turnInRoomId: 'firefly_trail',
    prerequisiteQuestId: 'main_02_first_battle',
    recommendedLevel: 8,
    nextQuestId: 'main_04_coastal_mystery',
    startOptionText: '我去調查暗影森林。',
    turnInOptionText: '森林的狼群已被處理。',
    nextHint: '從巡林者取得線索後，前往東方海岸的海岸棧道。',
    offerText: '暗影森林的狼嚎變得不正常。去森林入口調查，並找巡林者回報。',
    activeText: '先到森林入口，再處理暗影狼群。巡林者會在螢火小徑等你的報告。',
    completeText: '污染不是單一獸群造成的。潮汐線也出現同樣氣味，去海岸找船長。',
    rewardSummary: { exp: 800, gold: 400, equipment: '森林主題防具' },
  },
  {
    questId: 'main_04_coastal_mystery',
    order: 4,
    acceptNpcId: 'forest_ranger',
    // 替代表指定的 harbor_captain：現有同功能 NPC 是 ship_captain。
    turnInNpcId: 'ship_captain',
    acceptRoomId: 'firefly_trail',
    turnInRoomId: 'coastal_boardwalk',
    prerequisiteQuestId: 'main_03_forest_threat',
    recommendedLevel: 12,
    nextQuestId: 'main_05_pirate_lord',
    startOptionText: '我去追查海岸潮汐。',
    turnInOptionText: '我帶來森林污染的線索。',
    nextHint: '調查海盜營地，擊敗海盜船長。',
    offerText: '森林污染的痕跡往海岸延伸。去海岸棧道與潮汐地帶查明原因。',
    activeText: '潮汐地帶會留下最清楚的痕跡。找到後去海岸棧道找船長。',
    completeText: '海盜在暗礁附近搬運封印碎片。下一步必須突襲海盜營地。',
    rewardSummary: { exp: 1200, gold: 600, equipment: '海岸主題飾品' },
  },
  {
    questId: 'main_05_pirate_lord',
    order: 5,
    acceptNpcId: 'ship_captain',
    turnInNpcId: 'ship_captain',
    acceptRoomId: 'coastal_boardwalk',
    turnInRoomId: 'coastal_boardwalk',
    prerequisiteQuestId: 'main_04_coastal_mystery',
    recommendedLevel: 15,
    nextQuestId: 'main_06_volcano_seal',
    startOptionText: '我會處理海盜船長。',
    turnInOptionText: '海盜船長已倒下。',
    nextHint: '前往火焰神殿入口，尋找火焰祭司。',
    offerText: '海盜營地藏著封印碎片線索。進入營地，擊敗海盜船長。',
    activeText: '海盜船長不會單獨行動，先清掉營地海盜再逼他現身。',
    completeText: '他的航海日誌提到火山封印。帶著線索去找火焰祭司。',
    rewardSummary: { exp: 1600, gold: 800, equipment: '海盜主題武器' },
  },
  {
    questId: 'main_06_volcano_seal',
    order: 6,
    // 替代表指定的 fire_priest：現有同功能 NPC 是 flame_priest。
    acceptNpcId: 'flame_priest',
    turnInNpcId: 'flame_priest',
    acceptRoomId: 'fire_temple_entrance',
    turnInRoomId: 'fire_temple_entrance',
    prerequisiteQuestId: 'main_05_pirate_lord',
    recommendedLevel: 20,
    nextQuestId: 'main_07_frozen_castle',
    startOptionText: '我要穩住火山封印。',
    turnInOptionText: '火山異動已確認。',
    nextHint: '穿越雪原，前往雪山營地尋找守衛。',
    offerText: '火山封印正在鬆動。調查火山山腳與火山口，再清除火蜥蜴。',
    activeText: '火山口附近的火蜥蜴被封印裂縫吸引，處理牠們後回神殿入口。',
    completeText: '火山只是連鎖反應之一。雪原古堡也有魔族軍勢的影子。',
    rewardSummary: { exp: 2200, gold: 1100, equipment: '火山主題手部裝備' },
  },
  {
    questId: 'main_07_frozen_castle',
    order: 7,
    // 替代表指定的 snow_guard：現有同功能 NPC 是 ice_castle_guard。
    acceptNpcId: 'ice_castle_guard',
    turnInNpcId: 'ice_castle_guard',
    acceptRoomId: 'ice_castle_gate',
    turnInRoomId: 'ice_castle_gate',
    prerequisiteQuestId: 'main_06_volcano_seal',
    recommendedLevel: 25,
    nextQuestId: 'main_08_demon_invasion',
    startOptionText: '我會調查冰封城堡。',
    turnInOptionText: '我抵達了冰封城門。',
    nextHint: '回公會大廳，向公會指揮官回報魔族線索。',
    offerText: '雪原城堡的封印也在震動。穿越暴雪之路，抵達冰封城門。',
    activeText: '暴雪會遮蔽道路，沿著雪原入口、暴雪之路、冰封城門推進。',
    completeText: '魔族軍勢已開始行動。把這個消息帶回公會大廳。',
    rewardSummary: { exp: 2800, gold: 1400, equipment: '雪原主題足部裝備' },
  },
  {
    questId: 'main_08_demon_invasion',
    order: 8,
    // guild_commander 尚未建立；Phase 4.2 若無合理現有 NPC，需新增在 guild_hall。
    acceptNpcId: 'guild_commander',
    turnInNpcId: 'guild_commander',
    acceptRoomId: 'guild_hall',
    turnInRoomId: 'guild_hall',
    prerequisiteQuestId: 'main_07_frozen_castle',
    recommendedLevel: 35,
    nextQuestId: 'main_09_dragon_alliance',
    startOptionText: '我會偵查魔族領地。',
    turnInOptionText: '魔族情報已帶回。',
    nextHint: '前往龍谷祭壇，尋找龍族神諭者。',
    offerText: '我們需要魔族領地的第一手情報。深入邊境、村落與暗黑要塞大門。',
    activeText: '不要戀戰，但必須確認魔族士兵數量與要塞動向。',
    completeText: '情報證實魔族正在召喚更高位的力量。接下來需要龍族盟友。',
    rewardSummary: { exp: 3500, gold: 1800, equipment: '魔族抗性防具' },
  },
  {
    questId: 'main_09_dragon_alliance',
    order: 9,
    acceptNpcId: 'dragon_oracle',
    turnInNpcId: 'dragon_oracle',
    // 替代表指定的 dragon_altar：現有龍谷同功能房間是 dragon_oracle_perch。
    acceptRoomId: 'dragon_oracle_perch',
    turnInRoomId: 'dragon_oracle_perch',
    prerequisiteQuestId: 'main_08_demon_invasion',
    recommendedLevel: 45,
    nextQuestId: 'main_10_final_battle',
    startOptionText: '我會取得龍族認可。',
    turnInOptionText: '龍族試煉已完成。',
    nextHint: '前往審判大廳，尋找天界執政官。',
    offerText: '龍族只承認能通過試煉的人。前往龍谷，擊敗飛龍與龍騎士。',
    activeText: '古龍聖殿是試煉核心；不要只在谷口徘徊。',
    completeText: '龍族承認你的勇氣。最後的答案在天界審判大廳。',
    rewardSummary: { exp: 4500, gold: 2300, equipment: '龍族主題武器' },
  },
  {
    questId: 'main_10_final_battle',
    order: 10,
    // celestial_archon 尚未建立；Phase 4.2 需新增在 judgment_hall。
    acceptNpcId: 'celestial_archon',
    turnInNpcId: 'celestial_archon',
    acceptRoomId: 'judgment_hall',
    turnInRoomId: 'judgment_hall',
    prerequisiteQuestId: 'main_09_dragon_alliance',
    recommendedLevel: 55,
    startOptionText: '我準備面對終焉戰場。',
    turnInOptionText: '戰神已被擊敗。',
    nextHint: '主線第一章完成；檢查終焉戰場後續內容。',
    offerText: '封印意志已失控。進入天界廢墟，直面正在甦醒的戰神。',
    activeText: '穿過天界之門抵達神之間，戰神就在那裡。',
    completeText: '封印重新穩定。你的名字會被記在第一章主線的結尾。',
    rewardSummary: { exp: 6000, gold: 3000, equipment: '主線章節畢業裝' },
  },
];

export function validateMainQuestFlow(input: {
  quests: Record<string, QuestDef>;
  npcs: Record<string, NpcDef>;
  rooms: Record<string, RoomDef>;
}): string[] {
  const errors: string[] = [];
  const seenOrders = new Set<number>();
  for (const entry of MAIN_QUEST_FLOW) {
    if (seenOrders.has(entry.order)) errors.push(`duplicate order ${entry.order}`);
    seenOrders.add(entry.order);
    if (!input.quests[entry.questId]) errors.push(`missing quest ${entry.questId}`);
    if (!input.npcs[entry.acceptNpcId]) errors.push(`missing accept npc ${entry.acceptNpcId} for ${entry.questId}`);
    if (!input.npcs[entry.turnInNpcId]) errors.push(`missing turn-in npc ${entry.turnInNpcId} for ${entry.questId}`);
    if (!input.rooms[entry.acceptRoomId]) errors.push(`missing accept room ${entry.acceptRoomId} for ${entry.questId}`);
    if (!input.rooms[entry.turnInRoomId]) errors.push(`missing turn-in room ${entry.turnInRoomId} for ${entry.questId}`);
    if (entry.prerequisiteQuestId && !input.quests[entry.prerequisiteQuestId]) errors.push(`missing prerequisite ${entry.prerequisiteQuestId} for ${entry.questId}`);
    if (entry.nextQuestId && !input.quests[entry.nextQuestId]) errors.push(`missing next quest ${entry.nextQuestId} for ${entry.questId}`);
    const reward = input.quests[entry.questId]?.rewards;
    if (reward) {
      if (reward.exp <= 0) errors.push(`missing exp reward for ${entry.questId}`);
      if (reward.gold <= 0) errors.push(`missing gold reward for ${entry.questId}`);
      if (!reward.items?.length && !reward.equipmentSlotRewards?.length) errors.push(`missing equipment reward for ${entry.questId}`);
    }
  }
  if (MAIN_QUEST_FLOW.length !== 10) errors.push(`expected 10 main quest entries, got ${MAIN_QUEST_FLOW.length}`);
  return errors;
}
