import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_007: Record<string, RoomDef> = {
ancient_ruins_guardian_plinth: {
    id: 'ancient_ruins_guardian_plinth',
    name: '守衛基座',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_guardian_plinth.png',
    imagePrompt: '守衛基座 in ancient_ruins, massive guardian plinth with empty statue feet, crystal sockets, dust and runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '石像長廊盡頭是一座巨大的圓形基座，基座上只剩兩只石足，原本的守衛主體不知被移往何處。周圍地面刻滿放射狀符文，幾個水晶插槽仍殘留淡淡熱度。西側石像長廊的沙痕在基座前突然中斷，東面符文軌道通往月門，南方沉重青銅軌下到構裝間。基座後方散著符號碎片和破裂插槽，錯誤排列會讓附近石像與水晶生物重新接受防線測試。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_statue_gallery', description: '長廊回到石像群' },
      { direction: 'east', targetRoomId: 'ancient_ruins_moon_gate', description: '符文軌道通向月門' },
      { direction: 'south', targetRoomId: 'ancient_ruins_construct_bay', description: '沉重軌道下到構裝間' },
    ],
    monsters: [
      { monsterId: 'oathstone_sentinel', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'bronze_trial_construct', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[座]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '符文順序錯誤時，基座會先召回最近的石像守衛。',
      treasure: '空石足內嵌著一枚守衛路徑核心。',
      spirit: '守衛基座證明遺跡的防線曾經精密如活物。',
    },
  },

ancient_ruins_reflection_pool: {
    id: 'ancient_ruins_reflection_pool',
    name: '倒影水池',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_reflection_pool.png',
    imagePrompt: '倒影水池 in ancient_ruins, still reflection pool in ruined chamber, moonlight, cracked tiles, vines and pale runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain chamber, clear lantern light',
    description:
      '遺物藏室東側的低門通向一座安靜水池，池水清澈得不合常理，倒映出的卻不是破碎穹頂，而是一輪完整明月。池邊瓷磚刻著月相與數字，部分被藤根撐裂，露出下方排水機關。西側低門回到遺物藏室，東面濕滑通道通向藤蔓迴廊，北側月相石階指向月門。水池中央沉著幾枚青銅片，只在正確月相倒影出現時浮出輪廓；若水面被攪亂，倒影中的骸骨會先一步站起。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_relic_cache', description: '低門回到遺物藏室' },
      { direction: 'east', targetRoomId: 'ancient_ruins_vine_choked_cloister', description: '濕滑通道通向藤蔓迴廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_moon_gate', description: '月相石階通向月門' },
    ],
    monsters: [
      { monsterId: 'glyphbound_skeleton', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'sunlit_crystal_lizard', maxCount: 2, respawnSeconds: 100 },
    ],
    mapSymbol: '[池]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '池水被攪動後，倒影中的骸骨會比現實先站起。',
      treasure: '正確月相下可撈起月門青銅片。',
      spirit: '倒影水池保存著遺跡仍未破碎時的天空。',
    },
  },

ancient_ruins_vine_choked_cloister: {
    id: 'ancient_ruins_vine_choked_cloister',
    name: '藤蔓迴廊',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_vine_choked_cloister.png',
    imagePrompt: '藤蔓迴廊 in ancient_ruins, cloister choked by roots and vines, broken arches, moss, hidden carvings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '倒影水池東側的迴廊被粗大藤蔓塞滿，拱門與柱廊只能在葉影間斷續看見。潮濕泥土覆蓋了原本石面，卻也保護了幾處未被風沙磨掉的壁雕。西側濕路回到倒影水池，東面藤根纏向封印階梯，北方破拱門能看見日晷露台光影，卻被根鬚從下方鎖住。藤蔓中結著透明小果，蜘蛛和晶化蜥蜴會藏在葉背；若支撐根被切斷，整排拱門可能跟著坍落。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_reflection_pool', description: '濕路回到倒影水池' },
      { direction: 'east', targetRoomId: 'ancient_ruins_sealed_stair', description: '藤根指向封印階梯' },
    ],
    monsters: [
      { monsterId: 'ruin_scarab_swarm', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'sunlit_crystal_lizard', maxCount: 2, respawnSeconds: 100 },
    ],
    mapSymbol: '[藤]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '透明小果晃動時，蜘蛛多半已經藏在葉背。',
      treasure: '藤根保護下的壁雕拓片保存最完整。',
      spirit: '藤蔓迴廊讓遺跡和荒野重新長在一起。',
    },
  },

ancient_ruins_survey_camp: {
    id: 'ancient_ruins_survey_camp',
    name: '測繪營地',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_survey_camp.png',
    imagePrompt: '測繪營地 in ancient_ruins, archaeologist survey camp beside ruins, canvas tents, map table, lanterns, dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain camp, clear lantern light',
    description:
      '入口北側搭著一處半廢棄測繪營地，帆布帳篷被沙塵打得褪色，木桌上釘著遺跡平面圖、繩尺、角度盤與幾枚紅色警示釘。營火已冷，但灰中還有最近翻動痕跡。南面坡路回到沉降入口，東側木橋接上斷裂石道，北方測量線延向日晷露台。箱子裡堆著暫定房間編號和碎拓片，最新一張地圖卻在月門附近被撕掉，像上一支測繪隊撤離前刻意隱藏了深層路線。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_ruins_sunken_entrance', description: '坡路回到沉降入口' },
      { direction: 'east', targetRoomId: 'ancient_ruins_broken_causeway', description: '木橋接上斷裂石道' },
      { direction: 'north', targetRoomId: 'ancient_ruins_sun_dial_patio', description: '測量線延向日晷露台' },
    ],
    monsters: [
      { monsterId: 'glyphbound_skeleton', maxCount: 1, respawnSeconds: 100 },
      { monsterId: 'ruin_scarab_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[營]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '營地安全度較高，但冷灰被翻動代表有人剛離開。',
      treasure: '紅色警示釘可標出尚未觸發的陷阱區。',
      spirit: '測繪營地是現代人試圖替古代迷宮重新命名的地方。',
    },
  },

ancient_ruins_sealed_stair: {
    id: 'ancient_ruins_sealed_stair',
    name: '封印階梯',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_sealed_stair.png',
    imagePrompt: '封印階梯 in ancient_ruins, sealed descending stair with stone locks, glowing dust, vines and ancient door, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '藤蔓迴廊東側藏著一段向下階梯，階梯口被三道石鎖封住，每道石鎖都刻著不同日月符號。鎖縫裡有細微光塵滲出，說明下層仍保存著某種運轉中的核心。西側藤路回到迴廊，北面封印門後通往神諭室，月符階梯的方向則與月門遙相對應。階梯旁堆著破碎護腕和被壓扁的火把，錯誤石鎖順序會讓石階縮回牆內，並放出守衛巡邏整條藤蔓迴廊。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_vine_choked_cloister', description: '藤路回到迴廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_oracle_chamber', description: '封印門後通往神諭室' },
    ],
    monsters: [
      { monsterId: 'oathstone_sentinel', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'bronze_trial_construct', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[階]',
    mapX: 4,
    mapY: -3,
    guardianHints: {
      creature: '石鎖順序錯誤時，守衛會先從藤蔓迴廊方向出現。',
      treasure: '破碎裝備中有一枚刻著月符的護腕。',
      spirit: '封印階梯讓遺跡像在要求探索者先理解，再深入。',
    },
  },

ancient_ruins_sun_dial_patio: {
    id: 'ancient_ruins_sun_dial_patio',
    name: '日晷露台',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_sun_dial_patio.png',
    imagePrompt: '日晷露台 in ancient_ruins, ruined sun dial patio with golden light, broken columns, engraved floor and desert wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain desert, clear lantern light',
    description:
      '測繪營地北面是一座暴露在天空下的露台，中央日晷只剩半根指針，地面卻完整刻著十二道光影槽。露台邊緣能俯瞰整片遺跡，塌牆與柱影在午後排列成奇異幾何。南側測量線回到營地，西面破拱門通向藤蔓迴廊，北方光影槽對準月門。東側斷柱路能看見裂痕方尖碑，但露台端石柱倒塌；光槽若被錯誤遮住，地底齒輪會響起，晶化生物也會從熱裂縫中爬出。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_ruins_survey_camp', description: '測量線回到營地' },
      { direction: 'west', targetRoomId: 'ancient_ruins_vine_choked_cloister', description: '破拱門通向藤蔓迴廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_moon_gate', description: '光影槽指向月門' },
    ],
    monsters: [
      { monsterId: 'sunlit_crystal_lizard', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'crystal_lizard', maxCount: 1, respawnSeconds: 100 },
      { monsterId: 'bronze_trial_construct', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[日]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '光槽亮起時，熱裂縫中的晶化生物會被喚醒。',
      treasure: '日晷半指針下藏著一枚黃金校準釘。',
      spirit: '日晷露台證明遺跡曾用天空來鎖住地下秘密。',
    },
  },

ancient_ruins_moon_gate: {
    id: 'ancient_ruins_moon_gate',
    name: '月門',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_moon_gate.png',
    imagePrompt: '月門 in ancient_ruins, ancient moon gate with crescent runes, stone arch, pale light, dust and vines, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '月門是一座完整石拱，拱內沒有門板，只有一層像夜空般深藍的薄光。拱柱左右刻著月相符號，符號會隨倒影水池與日晷露台的線索逐一亮起。西側符文軌道回到守衛基座，南面月相石階連著倒影水池，東方月符階梯通向封印階梯。門前地面沒有灰塵，像有東西經常從門內外通過；符號未對齊時，薄光會反射出身後守衛的影像，下一刻石像就會從基座方向醒來。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_guardian_plinth', description: '符文軌道回到守衛基座' },
      { direction: 'south', targetRoomId: 'ancient_ruins_reflection_pool', description: '月相石階回到倒影水池' },
      { direction: 'east', targetRoomId: 'ancient_ruins_sealed_stair', description: '月符階梯通向封印階梯' },
    ],
    monsters: [
      { monsterId: 'oathstone_sentinel', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'oracle_echo_wraith', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '月門反射出守衛影像時，真正的石像即將靠近。',
      treasure: '拱柱背面有一片可取下的月相石。',
      spirit: '月門讓古代遺跡的外層與深層像白晝與夜晚般分開。',
    },
  },

ancient_ruins_echoing_crypt: {
    id: 'ancient_ruins_echoing_crypt',
    name: '回音墓室',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_echoing_crypt.png',
    imagePrompt: '回音墓室 in ancient_ruins, echoing crypt with stone sarcophagi, pale dust, broken seals and shadowed alcoves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '構裝間下方側門通向一座低矮墓室，兩排石棺沿牆排列，棺蓋上刻著與資料庫陶板相同的星象符號。墓室聲音異常清晰，衣角掃過石面也會在拱頂下反覆回響。北側側門回到構裝間，東面墓道通向神諭室。許多棺蓋已有從內部推開的裂痕，主棺足端還壓著星象葬儀印；若葬儀詞順序錯亂，所有回音都會變成同一句警告，沉睡骷髏的腳步聲也會從每具石棺後方放大。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_construct_bay', description: '側門回到構裝間' },
      { direction: 'east', targetRoomId: 'ancient_ruins_oracle_chamber', description: '墓道通向神諭室' },
    ],
    monsters: [
      { monsterId: 'glyphbound_skeleton', maxCount: 3, respawnSeconds: 100 },
      { monsterId: 'oracle_echo_wraith', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[墓]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '回音變成同一句警告時，石棺內的守墓者正在醒來。',
      treasure: '主棺足端藏著一枚星象葬儀印。',
      spirit: '回音墓室讓遺跡的死者仍參與守護核心。',
    },
  },

ancient_ruins_construct_bay: {
    id: 'ancient_ruins_construct_bay',
    name: '構裝間',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_construct_bay.png',
    imagePrompt: '構裝間 in ancient_ruins, ancient construct bay with bronze rails, stone frames, crystal cores and broken machinery, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain stone, clear lantern light',
    description:
      '機關走廊東側開成一間高大的維修間，地上嵌著青銅軌道，牆邊停放著半完成的石質構裝體。它們胸口有空洞插槽，周圍堆滿破裂水晶、齒輪、石臂和刻滿編號的維修板。西側青銅軌道回到機關走廊，北面沉重軌道上到守衛基座，南側側門下到回音墓室，東方維修通道通向神諭室。天花板斷鏈被風推動時像鐘聲，核心架亮起後，沉睡構裝會依古代指令辨認入侵者。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_trap_corridor', description: '青銅軌道回到機關走廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_guardian_plinth', description: '沉重軌道上到守衛基座' },
      { direction: 'south', targetRoomId: 'ancient_ruins_echoing_crypt', description: '側門下到回音墓室' },
      { direction: 'east', targetRoomId: 'ancient_ruins_oracle_chamber', description: '維修通道通向神諭室' },
    ],
    monsters: [
      { monsterId: 'bronze_trial_construct', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'oathstone_sentinel', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[構]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '核心架亮起時，構裝體會先掃描最近的熱源。',
      treasure: '維修板上記錄著守衛基座的啟動序列。',
      spirit: '構裝間顯示古代文明曾把石頭訓練成士兵。',
    },
  },

ancient_ruins_oracle_chamber: {
    id: 'ancient_ruins_oracle_chamber',
    name: '神諭室',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_oracle_chamber.png',
    imagePrompt: '神諭室 in ancient_ruins, oracle chamber with suspended crystal, circular runes, broken seats and sacred light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain chamber, clear lantern light',
    description:
      '封印階梯下方的神諭室呈圓形，中央懸著一枚裂開的水晶，水晶下方刻著多層同心符文。周圍石座面向中央，像昔日祭司或學者曾在此聆聽天象答案。南側封印廊道回到階梯，西面維修通道連著構裝間，東方符文門通向內聖所；墓道方向仍能聽見回音墓室的低語。水晶會用斷續影像顯示城市被光吞沒、守衛轉向居民，以及最後一名祭司關閉聖所的畫面，裂晶邊緣也正慢慢滲出白光。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_ruins_sealed_stair', description: '封印廊道回到門口' },
      { direction: 'west', targetRoomId: 'ancient_ruins_construct_bay', description: '維修通道回到構裝間' },
      { direction: 'east', targetRoomId: 'ancient_ruins_inner_sanctum', description: '符文門通向內聖所' },
    ],
    monsters: [
      { monsterId: 'oracle_echo_wraith', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'bronze_trial_construct', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'glyphbound_skeleton', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[諭]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '水晶影像開始倒轉時，房間會召回全部守衛。',
      treasure: '裂晶邊緣可取得神諭碎片，但會觸發警戒。',
      spirit: '神諭室保存的不是答案，而是古代人最後一次提問。',
    },
  },

ancient_ruins_inner_sanctum: {
    id: 'ancient_ruins_inner_sanctum',
    name: '內聖所',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_inner_sanctum.png',
    imagePrompt: '內聖所 in ancient_ruins, inner sanctum with radiant sealed core, ancient pillars, floating dust, broken guardian statues, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '神諭室東側的符文門後，是整座古代遺跡最深的內聖所。高柱圍成圓環，中央地面封著一枚發白光的核心，光芒被多道斷裂石環壓住，仍讓空氣像熱浪般扭曲。西側符文門回到神諭室，除此之外沒有其他出口。四周倒著破碎守衛像、祭司面具與尚未腐朽的白色花瓣，彷彿封印完成後時間在此停住。核心脈動三次後，構裝、石像與水晶守衛會按古代防衛序列甦醒。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_oracle_chamber', description: '符文門回到神諭室' },
    ],
    monsters: [
      { monsterId: 'sanctum_seal_guardian', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'bronze_trial_construct', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'oracle_echo_wraith', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[聖]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '白光核心脈動三次後，最終守衛會按序醒來。',
      treasure: '核心外圍可取得光核碎片，但會改變封印狀態。',
      spirit: '內聖所是古代文明選擇把自己的錯誤關起來的地方。',
    },
  },

marsh_of_mirrors_reed_gate: {
    id: 'marsh_of_mirrors_reed_gate',
    name: '蘆葦入口',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_reed_gate.png',
    imagePrompt: '蘆葦入口 in marsh_of_mirrors, marsh entrance framed by tall reeds, black water, mist, warning posts and mirrored sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain marsh, clear lantern light',
    description:
      '鏡沼外圍的蘆葦高過人頭，入口只是一道被旅人踩出的濕泥缺口，兩側插著刻有警告符號的木樁。水面倒映出的天空比真實天空更暗，偶爾還會映出不存在的鳥影。這裡是進出鏡沼的交通錨點，玩家可整理解毒藥、標記回程路線，並從木樁上的缺口判斷最近有哪些隊伍進入後沒有返回。入口附近看似安靜，實際上毒蛙會藏在蘆葦根部，史萊姆則沿黑水邊緣蠕動。若霧突然變厚，回頭路會被蘆葦重新遮住。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '黑水小徑伸入沼澤' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_peat_islet', description: '較乾的泥脊通向泥炭小洲', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'mirror_mire_toad', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[葦]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '蘆葦根部鼓起氣泡時，毒蛙正在準備伏擊。',
      treasure: '警告木樁背面刻著舊探路人的安全標記。',
      spirit: '蘆葦入口像鏡沼半睜的眼睛，允許旅人進入卻不保證放人離開。',
    },
  },

marsh_of_mirrors_blackwater_path: {
    id: 'marsh_of_mirrors_blackwater_path',
    name: '黑水小徑',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_blackwater_path.png',
    imagePrompt: '黑水小徑 in marsh_of_mirrors, narrow muddy path over black marsh water, reeds, reflections, pale fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain marsh, clear lantern light',
    description:
      '蘆葦入口後方的黑水小徑只比鞋底寬些，兩側水面深得看不見底，倒影卻清楚得像玻璃。每走幾步，水中倒影就會慢半拍才跟上，讓人忍不住懷疑自己是否還在原來的位置。這裡是鏡沼的主要路線房，連接銀面池、毒蛙泥潭與歪木棧道，也是最容易迷路的第一段。玩家可沿著水邊拾取草藥與腐木，但必須記住真實路標而非倒影。毒蛙、史萊姆和水下蛇影會輪流利用黑水遮掩靠近。若失去方向，應回到蘆葦入口重新校準路線。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_reed_gate', description: '泥路回到蘆葦入口' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_silver_pool', description: '銀色水光在前方' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_frog_mire', description: '蛙鳴來自南側泥潭', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_crooked_boardwalk', description: '歪斜木棧道在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'mirror_mire_toad', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[水]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '倒影慢半拍時，水下通常有湖蛇正在移動。',
      treasure: '黑水邊的腐木內藏著解毒草根。',
      spirit: '黑水小徑讓鏡沼用最簡單的路教會旅人懷疑眼睛。',
    },
  },

marsh_of_mirrors_silver_pool: {
    id: 'marsh_of_mirrors_silver_pool',
    name: '銀面池',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_silver_pool.png',
    imagePrompt: '銀面池 in marsh_of_mirrors, silver reflective marsh pool, pale reeds, mist, moonlike surface and dark trees, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain marsh, clear lantern light',
    description:
      '黑水小徑東端展開一片平靜水池，池面泛著銀灰光澤，無論白天夜晚都像映著月亮。池邊泥土硬實，卻佈滿方向相反的足跡，像有人從倒影世界走上岸。這裡是探索與資源房，玩家可採集銀藻、觀察錯位倒影，並學會判斷鏡沼幻象的基本規則。池底偶爾浮出完整的星空圖案，與天空並不一致，暗示鏡沼深處有更強的反射核心。若玩家盯著池面太久，倒影會先一步做出不屬於本人的動作，引來毒蛙與水蛇圍攻。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '黑水小徑在西側' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_mirror_pond', description: '更深倒影通向鏡池' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_mist_blind', description: '霧幕缺口在北面', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'mirror_mire_toad', maxCount: 1, respawnSeconds: 95 },
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[銀]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '倒影先動時，下一次攻擊通常來自水面下方。',
      treasure: '銀藻只長在月影最亮的池邊。',
      spirit: '銀面池是鏡沼第一次明確告訴旅人，這裡的水會撒謊。',
    },
  },

marsh_of_mirrors_frog_mire: {
    id: 'marsh_of_mirrors_frog_mire',
    name: '毒蛙泥潭',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_frog_mire.png',
    imagePrompt: '毒蛙泥潭 in marsh_of_mirrors, muddy frog mire with toxic bubbles, reeds, green fog and huge toad silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '黑水小徑南側的泥潭被毒蛙佔據，濃綠氣泡從泥底冒出，破裂時釋放出刺鼻霧氣。泥面看似柔軟，實際下方有許多被蛙舌拖出的深洞。這裡是高密度戰鬥與採集房，玩家可收集毒腺、蛙皮與解毒草，也能完成清理毒霧或捕捉活體樣本的任務。泥潭周圍的蘆葦倒影比實物更加密集，會遮住真正安全的落腳點。若不先辨認氣泡方向，隊伍可能被毒蛙從三面同時包圍。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '泥痕回到黑水小徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_poison_bloom_bed', description: '毒花氣味往東延伸' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_spider_reeds', description: '蛛絲掛在南側蘆葦', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'mirror_mire_toad', maxCount: 4, respawnSeconds: 95 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[蛙]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '毒蛙腮幫鼓起前，泥潭氣泡會先聚成一圈。',
      treasure: '最大氣泡旁通常長著高品質解毒草。',
      spirit: '毒蛙泥潭是鏡沼把毒素變成日常呼吸的地方。',
    },
  },

marsh_of_mirrors_crooked_boardwalk: {
    id: 'marsh_of_mirrors_crooked_boardwalk',
    name: '歪木棧道',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_crooked_boardwalk.png',
    imagePrompt: '歪木棧道 in marsh_of_mirrors, crooked wooden boardwalk over marsh, broken planks, hanging moss, fog and mirrored water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain marsh, clear lantern light',
    description:
      '黑水小徑北側有一段歪斜木棧道，木板被水泡得發黑，許多地方只靠生鏽釘子勉強固定。棧道下方的水面映出完整直路，與現實裡的破洞和彎折完全不同。北側可看見泥炭小洲的測路桿，但棧道端橋板斷裂，需由小洲方向接回。這裡是交通與探索房，玩家可在較安全高度穿過沼澤，前往霧盲處與沉柳，也能修補木板建立回程捷徑。棧道柱子上綁著前人留下的布條，顏色越新，代表迷路風險越高。若踩到會回聲的空板，水下湖蛇會跟著震動追來。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '木階下回黑水小徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_mist_blind', description: '棧道伸向霧盲處' },
      {
        direction: 'west',
        targetRoomId: 'marsh_of_mirrors_sunken_willow',
        description: '西側倒木路要沿歪斜棧板、浮根與黑水缺口繞行，才會抵達沉水柳，倒影會故意縮短距離',
        edgeKind: 'distant_route',
        edgeNote: '歪木棧道到沉水柳需沿倒木與黑水缺口繞行，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'reedshade_stalker', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[棧]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '空板發出悶響時，湖蛇會從棧道陰影跟上。',
      treasure: '新布條旁常有迷路者留下的求救刻痕。',
      spirit: '歪木棧道證明在鏡沼裡，安全往往只是高度帶來的錯覺。',
    },
  },

marsh_of_mirrors_mist_blind: {
    id: 'marsh_of_mirrors_mist_blind',
    name: '霧盲處',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_mist_blind.png',
    imagePrompt: '霧盲處 in marsh_of_mirrors, dense blind fog over marsh, reed silhouettes, faint lantern, mirrored puddles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain marsh, clear lantern light',
    description:
      '銀面池與歪木棧道之間有一片霧盲處，白霧濃到伸手只能看見指尖水珠。聲音在霧裡被拉長，腳步聲可能來自同伴，也可能只是倒影模仿。這裡是迷路與任務觸發房，玩家可用蘆葦入口取得的標記校準方向，尋找被霧困住的旅人，或追蹤一盞總在遠處閃爍的假燈。霧盲處不適合久留，毒蛙與蜘蛛會利用視線阻隔進行伏擊。若玩家跟著倒影前進，可能直接走入鏡池或破碎倒影區。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_crooked_boardwalk', description: '摸索回歪木棧道' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_silver_pool', description: '銀色水光在南面', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'marsh_of_mirrors_mirror_pond',
        description: '東側遠方假燈穿過霧盲水窪與錯位蘆影後，才會通向鏡池，路線必須靠腳下水聲辨認',
        edgeKind: 'distant_route',
        edgeNote: '霧盲處到鏡池受濃霧與錯位倒影干擾，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'reedshade_stalker', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'mistglass_webspinner', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[霧]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '假燈停住時，蜘蛛通常已經在霧裡結好網。',
      treasure: '迷路旅人的腰包裡常有未寄出的求救信。',
      spirit: '霧盲處讓鏡沼不必移動地形，就能讓旅人失去方向。',
    },
  },

marsh_of_mirrors_mirror_pond: {
    id: 'marsh_of_mirrors_mirror_pond',
    name: '鏡池',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_mirror_pond.png',
    imagePrompt: '鏡池 in marsh_of_mirrors, perfect mirror pond reflecting impossible sky, black reeds, pale mist and still water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sky, clear lantern light',
    description:
      '鏡池比銀面池更平靜，水面平整得像磨亮黑玻璃，倒映出一座不存在的塔、一輪不合時令的月亮，以及站在玩家身後的陌生人影。池邊沒有蟲鳴，只有自己的呼吸被倒影重複。這裡是核心解謎前置房，玩家可觀察錯誤倒影、取得鏡水樣本，並確認鏡沼真正的力量源頭並非毒霧，而是水面下的反射核心。若玩家攻擊倒影，水面會裂成多片，直接連向破碎倒影區。鏡池周圍潛伏的湖蛇會利用玩家分神時發動突襲。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_silver_pool', description: '水光回到銀面池' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_shattered_reflection', description: '裂紋水面通向破碎倒影' },
      {
        direction: 'east',
        targetRoomId: 'marsh_of_mirrors_sunken_willow',
        description: '東側倒柳影子會沿鏡池邊緣反折，穿過錯位水面與浮根縫隙後才通向沉水柳',
        edgeKind: 'distant_route',
        edgeNote: '鏡池到沉水柳被反折倒影與浮根水面隔開，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'marsh_of_mirrors_poison_bloom_bed',
        description: '南側毒花倒影要沿鏡池裂光下沉，穿過綠霧水窪後才抵達毒花床，花影會誤導直行',
        edgeKind: 'distant_route',
        edgeNote: '鏡池到毒花床需穿過綠霧水窪與錯位花影，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'reedshade_stalker', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[鏡]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '若倒影身後多出陌生人影，湖蛇會從同一方向靠近。',
      treasure: '完整鏡水樣本只能在水面未裂時取得。',
      spirit: '鏡池是鏡沼的謊言最接近真相的地方。',
    },
  },

marsh_of_mirrors_sunken_willow: {
    id: 'marsh_of_mirrors_sunken_willow',
    name: '沉水柳',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_sunken_willow.png',
    imagePrompt: '沉水柳 in marsh_of_mirrors, sunken willow tree in black marsh water, hanging roots, mist, reflections and pale fungi, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain marsh, clear lantern light',
    description:
      '一棵巨大的柳樹半沉在沼水中，樹冠倒垂，細長枝條像濕髮般貼著水面。根部仍活著，卻從黑水中吸收了暗色汁液，樹皮上長出微微發亮的白菌。西側倒木可看見歪木棧道，東側倒影可看見鏡池，但沉水柳周圍的水下根鬚會把回程纏住，需由棧道或鏡池方向進入。這裡是自然資源與精英前置房，玩家可採集柳根、白菌與腐化樹液，也能追查暗黑樹人的活動痕跡。沉水柳的倒影比本體更完整，像另一棵樹正從水下向上生長。若砍錯枝條，水下倒影會先流血，然後引來樹人與蜘蛛守衛。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'marsh_of_mirrors_dark_treant_grove',
        description: '北側根系要穿過沉水柳下方的黑水與倒掛樹影，才會延進暗樹林，腳下真根與倒影會交錯',
        edgeKind: 'distant_route',
        edgeNote: '沉水柳到暗樹林需沿水下根系繞行，不是相鄰平面一格。',
      },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'drowned_willow_treant', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[柳]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '倒影先流血時，暗黑樹人很快會從根系中醒來。',
      treasure: '白菌附著的柳根可作為高價藥材。',
      spirit: '沉水柳讓人看見鏡沼如何把植物也分成兩個生命。',
    },
  },

marsh_of_mirrors_poison_bloom_bed: {
    id: 'marsh_of_mirrors_poison_bloom_bed',
    name: '毒花床',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_poison_bloom_bed.png',
    imagePrompt: '毒花床 in marsh_of_mirrors, bed of poisonous marsh flowers, green vapor, mirrored puddles, dark reeds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain marsh, clear lantern light',
    description:
      '毒蛙泥潭東側長滿紫綠色毒花，花瓣厚得像濕蠟，花心持續吐出淡綠霧氣。這裡的水窪倒映出花朵尚未開放時的樣子，讓採集者很難分辨哪一株已經成熟。這裡是資源與事件房，玩家可採集毒花、調配解毒材料，或完成淨化霧源的任務。毒花根部常有綠色史萊姆吸附，毒蛙也會在霧氣最濃處等待獵物暈眩。若玩家採下帶有錯誤倒影的花，毒霧會短暫變成黑色，指向鏡水核心正在污染整片沼澤。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_frog_mire', description: '毒泥路回到蛙潭' },
      {
        direction: 'north',
        targetRoomId: 'marsh_of_mirrors_mirror_pond',
        description: '北返時要沿毒花根部與綠霧水窪回溯，避開錯位花影後才會看見鏡池平整水面',
        edgeKind: 'distant_route',
        edgeNote: '毒花床北返鏡池需穿過綠霧水窪，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'marsh_of_mirrors_shattered_reflection',
        description: '東側黑霧沿毒花床邊緣擴散，穿過數片錯誤倒影後才會指向破碎倒影',
        edgeKind: 'distant_route',
        edgeNote: '毒花床到破碎倒影被黑霧與錯誤倒影隔開，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'black_reed_slime', maxCount: 3, respawnSeconds: 90 },
      { monsterId: 'mirror_mire_toad', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[花]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '毒花霧氣變黑時，附近史萊姆會立刻聚集。',
      treasure: '成熟毒花只在倒影仍閉合時可以安全採下。',
      spirit: '毒花床把鏡沼的美與毒放在同一片花瓣上。',
    },
  },

marsh_of_mirrors_spider_reeds: {
    id: 'marsh_of_mirrors_spider_reeds',
    name: '蛛網蘆叢',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_spider_reeds.png',
    imagePrompt: '蛛網蘆叢 in marsh_of_mirrors, reeds strung with spider webs, dew, black water, green fog and hidden spiders, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain water, clear lantern light',
    description:
      '毒蛙泥潭南面是一片密集蘆叢，蛛絲從蘆葉連到枯木，掛滿水珠後像一面面破碎小鏡。許多絲線不在視線正前方，而是藏在倒影裡，等旅人跨步時才拉住腳踝。這裡是戰鬥與採集房，玩家可收集蛛絲、蛛毒和被困旅人的物品，也能清出一條通往失路石堆的安全路線。蜘蛛會利用毒霧與水面反光遮掩位置，毒蛙則躲在蘆根補上第二波攻擊。若隊伍帶火，蛛網會迅速收縮，暴露隱藏巢穴。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。務必小心前進。',
    exits: [
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_frog_mire', description: '蛙鳴來自北側泥潭', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_lost_cairn', description: '蛛絲路通往失路石堆' },
    ],
    monsters: [
      { monsterId: 'mistglass_webspinner', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'mirror_mire_toad', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[蛛]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '倒影裡先出現蛛絲時，真正陷阱在腳邊。',
      treasure: '水珠最密的蛛網通常保存完整蛛絲。',
      spirit: '蛛網蘆叢讓鏡沼的每一道反光都可能變成繩索。',
    },
  },

marsh_of_mirrors_lost_cairn: {
    id: 'marsh_of_mirrors_lost_cairn',
    name: '失路石堆',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_lost_cairn.png',
    imagePrompt: '失路石堆 in marsh_of_mirrors, cairn of stones in marsh fog, charms, wet moss, reflected false paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain marsh, clear lantern light',
    description:
      '蛛網蘆叢東側有一堆人為壘起的濕石，每顆石頭都刻著方向箭頭，卻沒有兩個箭頭指向同一條路。石堆上掛著失蹤旅人的護符、魚骨、布條和被水泡白的名字牌。這裡是探索與任務房，玩家可辨認正確路標、收集失蹤者遺物，或把鏡沼裡的錯誤路線重新記錄下來。石堆倒影中有時會出現尚未壘上的新石，像在預告下一個迷路者。若玩家隨意搬動石頭，整片霧會改變方向，把隊伍推向破碎倒影或蛇道。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_spider_reeds', description: '蛛絲路回到蘆叢' },
      {
        direction: 'east',
        targetRoomId: 'marsh_of_mirrors_shattered_reflection',
        description: '東側錯誤箭頭會先繞過失路石堆與漂浮護符，才指向破碎倒影，霧中會出現多條假支路',
        edgeKind: 'distant_route',
        edgeNote: '失路石堆到破碎倒影需辨認多條假支路，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_serpent_channel', description: '低水道通向蛇道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'reedshade_stalker', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[堆]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '石堆倒影若多出新石，附近有迷路者或獵物將出現。',
      treasure: '名字牌背後常刻著最後看見的方向。',
      spirit: '失路石堆是鏡沼吞下旅人後留下的紀錄方式。',
    },
  },

marsh_of_mirrors_shattered_reflection: {
    id: 'marsh_of_mirrors_shattered_reflection',
    name: '破碎倒影',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_shattered_reflection.png',
    imagePrompt: '破碎倒影 in marsh_of_mirrors, cracked mirror-like water surface, shards of reflected sky, black reeds and eerie fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '鏡池北側的水面像被看不見的力量敲碎，分成無數不連續的倒影碎片。每一片都映出不同天色、不同隊伍位置，甚至不同時間的自己，中央黑玻祭壇刻著奈薩虛空之眼的禁忌紋。這裡是大型事件前置房，玩家可研究倒影裂紋、收集鏡片水膜，並找到通往玻璃水核心的第一組路徑規則。破碎倒影會讓怪物行動看似瞬移，毒蛙與湖蛇會從不該相連的水面突然躍出。若玩家能找出哪一片倒影沒有延遲，就能避開錯誤路線；若判斷失敗，隊伍會被送往蛇道或迷霧更深處。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_mirror_pond', description: '裂紋水面回到鏡池' },
      {
        direction: 'west',
        targetRoomId: 'marsh_of_mirrors_lost_cairn',
        description: '西返時錯誤箭頭會在破碎水面間重組，必須繞過漂浮護符與假支路後才回到失路石堆',
        edgeKind: 'distant_route',
        edgeNote: '破碎倒影西返失路石堆需穿過重組倒影與假支路，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'marsh_of_mirrors_glasswater_core',
        description: '東側無延遲倒影只在水面裂片同步時出現，隊伍要踩過連續倒影碎片才會抵達玻璃水核心',
        edgeKind: 'distant_route',
        edgeNote: '破碎倒影到玻璃水核心需穿過不連續倒影碎片，不是相鄰格。',
      },
      {
        direction: 'north',
        targetRoomId: 'marsh_of_mirrors_echo_fen',
        description: '北側回聲濕地要沿破碎水面邊緣繞過延遲倒影，才會抵達開闊淺水區',
        edgeKind: 'distant_route',
        edgeNote: '破碎倒影到回聲濕地受延遲倒影與淺水邊緣阻隔，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'hag_lantern_echo', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'black_reed_slime', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[碎]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '不連續倒影會讓湖蛇看似從另一片水面躍出。',
      treasure: '沒有延遲的倒影碎片能保存鏡片水膜。',
      spirit: '破碎倒影是鏡沼開始露出核心裂縫的地方。',
    },
  },

marsh_of_mirrors_peat_islet: {
    id: 'marsh_of_mirrors_peat_islet',
    name: '泥炭小洲',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_peat_islet.png',
    imagePrompt: '泥炭小洲 in marsh_of_mirrors, small peat islet above marsh water, moss, reeds, camp remains and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain marsh, clear lantern light',
    description:
      '蘆葦入口北面的泥炭小洲是少數不會立刻下陷的乾地，地面覆滿黑褐苔蘚，中央留著舊營火圈與幾根插成三角的測路桿。這裡是補給與交通房，玩家可短暫休息、重新整理鏡沼標記，也能從營火灰裡發現前一隊留下的未完成地圖。小洲邊緣水面不斷退縮又回來，像有什麼在測量岸線。若玩家修復測路桿，可以建立通往歪木棧道與回聲濕地的穩定捷徑；若忽略苔蘚上的蛇痕，夜裡會被湖蛇包圍。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_reed_gate', description: '泥脊回到蘆葦入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_crooked_boardwalk', description: '乾木橋通往歪木棧道' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '測路桿指向回聲濕地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'black_reed_slime', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[洲]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '苔蘚上的蛇痕若交叉成圈，湖蛇就在小洲邊緣等待。',
      treasure: '舊營火灰裡藏著一張半燒焦的鏡沼地圖。',
      spirit: '泥炭小洲讓旅人短暫相信，鏡沼仍有站穩腳步的地方。',
    },
  },

marsh_of_mirrors_dark_treant_grove: {
    id: 'marsh_of_mirrors_dark_treant_grove',
    name: '暗樹林',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_dark_treant_grove.png',
    imagePrompt: '暗樹林 in marsh_of_mirrors, grove of dark twisted treants, mirror pools, roots, purple shadow sap and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '沉水柳北面的樹林被暗色樹液污染，樹幹扭曲成像人形一樣的姿勢，根系伸入一口口小鏡池中。每棵樹都有兩個影子，一個落在地面，一個倒掛在水下。這裡是精英戰鬥與大型事件前置房，玩家可追查暗黑樹人如何被鏡水腐化，採集暗樹皮與黑色樹液，也能找到通往玻璃水核心的根系路線。暗樹林的敵人行動慢卻壓迫感強，會用根系封路，把隊伍逼到錯誤倒影旁。若玩家淨化沉水柳，這裡的部分樹根會暫時停止攻擊。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'marsh_of_mirrors_sunken_willow',
        description: '南返時根路沿暗樹林水下根脈回折，穿過倒掛樹影後才回到沉水柳，黑水會遮住真實落腳點',
        edgeKind: 'distant_route',
        edgeNote: '暗樹林南返沉水柳需沿水下根脈回折，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_glasswater_core', description: '黑根延向玻璃水核心', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '回聲濕地在西側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'drowned_willow_treant', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'reedshade_stalker', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[樹]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '地上影子與水下影子分開時，暗黑樹人會封鎖退路。',
      treasure: '黑色樹液可從未完全腐化的根節採集。',
      spirit: '暗樹林是鏡沼把森林記憶扭成怪物的地方。',
    },
  },

marsh_of_mirrors_serpent_channel: {
    id: 'marsh_of_mirrors_serpent_channel',
    name: '蛇行水道',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_serpent_channel.png',
    imagePrompt: '蛇行水道 in marsh_of_mirrors, winding serpent channel through dark marsh water, reeds, ripples and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain marsh, clear lantern light',
    description:
      '失路石堆南面的水道蜿蜒得像巨蛇身體，水面一段明亮一段漆黑，讓人難以看清深度。兩岸蘆葦低伏，像被巨大身軀反覆壓過。這裡是高風險通道與戰鬥房，玩家可沿水道繞往沉沒小祠，也能追查湖蛇巢穴與失蹤貨箱。水道中段有多處氣泡旋渦，若倒影裡先出現波紋，真正的湖蛇很快會從身旁水面竄出。毒蛙也會利用蛇道留下的空洞藏身，形成連續伏擊。安全通過後，隊伍可取得通往小祠的隱蔽路線。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_lost_cairn', description: '低水道回到失路石堆', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'marsh_of_mirrors_sinking_shrine',
        description: '東側水道沿蛇形暗流繞過氣泡旋渦與低伏蘆葦後，才會通往沉沒小祠',
        edgeKind: 'distant_route',
        edgeNote: '蛇行水道到沉沒小祠需沿蛇形暗流繞行，距離長於相鄰格。',
      },
      {
        direction: 'west',
        targetRoomId: 'marsh_of_mirrors_spider_reeds',
        description: '西側蘆葦缺口要逆著蛇形水道與蛛絲倒影回繞，才會連回蛛網蘆叢',
        edgeKind: 'distant_route',
        edgeNote: '蛇行水道西返蛛網蘆叢需穿過水道回彎與蛛絲倒影，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'mirror_mire_toad', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[蛇]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '倒影先出現波紋時，湖蛇會從相反方向竄出。',
      treasure: '旋渦邊的沉箱裡常有被水沖來的貨物。',
      spirit: '蛇行水道讓整片沼澤像一條正在呼吸的生物。',
    },
  },

marsh_of_mirrors_echo_fen: {
    id: 'marsh_of_mirrors_echo_fen',
    name: '回聲濕地',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_echo_fen.png',
    imagePrompt: '回聲濕地 in marsh_of_mirrors, open fen with echoing fog, shallow water, reeds, distant lights and mirrored ripples, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain water, clear lantern light',
    description:
      '泥炭小洲北面是一片開闊濕地，水淺卻沒有明確路線，聲音會在霧裡反覆返回。隊伍喊出的名字可能從三個方向回應，其中一個回聲甚至會多說半句。這裡是迷路事件與交通分岔房，玩家可用測路桿校準聲音來源，尋找失蹤旅人，也能分辨暗樹林、破碎倒影與月光堤道的方向。濕地看似空曠，實際上毒蛙和蜘蛛會被聲音吸引，綠色史萊姆則貼著淺水邊緣移動。若追逐錯誤回聲，隊伍會被帶進霧更厚的區域。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_peat_islet', description: '測路桿回到泥炭小洲', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_dark_treant_grove', description: '低沉回聲來自暗樹林', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_moonlit_causeway', description: '月光水線通向堤道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'reedshade_stalker', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'mirror_mire_toad', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'black_reed_slime', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[聲]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '回聲多出半句時，那不是同伴，而是鏡沼在模仿。',
      treasure: '正確回聲方向常能找到失蹤旅人的防水包。',
      spirit: '回聲濕地讓聲音也成為鏡沼的一種倒影。',
    },
  },

marsh_of_mirrors_moonlit_causeway: {
    id: 'marsh_of_mirrors_moonlit_causeway',
    name: '月光堤道',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_moonlit_causeway.png',
    imagePrompt: '月光堤道 in marsh_of_mirrors, narrow moonlit causeway across mirror marsh, pale stones, mist, black water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain marsh, clear lantern light',
    description:
      '回聲濕地北面浮出一條由白石鋪成的窄堤，石面像被月光浸過，即使陰天也會發出微亮光澤。堤道兩側水面倒映著不存在的滿月，讓石路看起來像懸在夜空上。這裡是通往鏡沼深處的交通節點，玩家可藉由白石排列判斷前往沉沒小祠、巫燈處與玻璃水核心的路線。月光堤道上的敵人不多，但一旦戰鬥，任何後退都可能踏進倒影而非真路。若玩家帶著鏡池樣本，白石會短暫顯示安全順序。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。務必小心前進。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '回聲濕地在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_fill_27_19', description: '東側鏡沼通道接向巫燈處' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_sinking_shrine', description: '白石支路通向沉沒小祠', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'marsh_of_mirrors_glasswater_core',
        description: '北側最亮石路沿月光堤道反折，穿過水面假月與黑蘆外圈後才會通向玻璃水核心',
        edgeKind: 'distant_route',
        edgeNote: '月光堤道到玻璃水核心需沿反折石路穿過黑蘆外圈，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'hag_lantern_echo', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[月]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '白石光澤忽暗時，敵人可能站在倒影路上等待。',
      treasure: '月光最亮的石縫裡可找到冷白色鏡砂。',
      spirit: '月光堤道像鏡沼短暫給出的正式邀請。',
    },
  },

marsh_of_mirrors_sinking_shrine: {
    id: 'marsh_of_mirrors_sinking_shrine',
    name: '沉沒小祠',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_sinking_shrine.png',
    imagePrompt: '沉沒小祠 in marsh_of_mirrors, sinking shrine half submerged in marsh, candles, reeds, mirror water, green fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain shrine, clear lantern light',
    description:
      '蛇行水道與月光堤道之間有一座半沉入水中的小祠，屋脊只剩一半露出，供桌卻奇異地保持乾燥。祠內擺著濕蠟燭、鏡片、解毒草和刻有陌生祈詞的石碗。這裡是任務與大型事件前置房，玩家可替失蹤者獻上名字牌，調查鏡沼過去是否曾被人祭祀，或取得通往巫燈處的護符。小祠倒影比本體完整，像另一座未沉沒的祠堂仍在水下等待香火。若玩家拿走錯誤供品，水下倒影會召來湖蛇與毒蛙阻止離開。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'marsh_of_mirrors_serpent_channel',
        description: '西返時蛇形水道要沿沉沒祠堂外牆與氣泡旋渦回繞，才會回到蛇行水道',
        edgeKind: 'distant_route',
        edgeNote: '沉沒小祠西返蛇行水道需繞過祠堂外牆與旋渦，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_moonlit_causeway', description: '白石支路回到月光堤道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'marsh_of_mirrors_hag_lantern',
        description: '北側護符路穿過半沉供桌、低霧與歪木桿倒影後，才會抵達巫燈處，燈影在水面反覆偏移',
        edgeKind: 'distant_route',
        edgeNote: '沉沒小祠到巫燈處需穿過低霧與倒影木桿，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'mirror_mire_toad', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'hag_lantern_echo', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[祠]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '供桌變濕時，水下倒影已經開始召喚湖蛇。',
      treasure: '乾燥石碗裡藏著前往巫燈處的護符。',
      spirit: '沉沒小祠讓人懷疑鏡沼曾經不是詛咒，而是信仰。',
    },
  },

marsh_of_mirrors_hag_lantern: {
    id: 'marsh_of_mirrors_hag_lantern',
    name: '巫燈處',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_hag_lantern.png',
    imagePrompt: '巫燈處 in marsh_of_mirrors, lone witch lantern over marsh water, crooked poles, fog, charms and mirror reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain marsh, clear lantern light',
    description:
      '月光堤道東側懸著一盞孤燈，燈不是掛在樹上，而是被三根歪木桿支在水面中央。燈火呈暗綠色，倒影卻是深紫色，兩種光在霧中互相拉扯。周圍掛滿骨牌、草繩、破鏡片和不知名的藥包。這裡是精英事件與任務交涉房，玩家可追查操控假燈的巫術來源，破解鏡沼迷路現象，或取得進入玻璃水核心前需要的最後警示。雖然沒有真正的女巫站在燈下，但每次玩家靠近，燈影裡都會多出一個彎腰身影。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_fill_27_19', description: '西側鏡沼通道回到月光堤道' },
      {
        direction: 'south',
        targetRoomId: 'marsh_of_mirrors_sinking_shrine',
        description: '南返時護符路沿歪木桿倒影與低霧回落，穿過半沉供桌後才回到沉沒小祠',
        edgeKind: 'distant_route',
        edgeNote: '巫燈處南返沉沒小祠需沿倒影木桿與低霧路回繞，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'marsh_of_mirrors_glasswater_core',
        description: '北側雙色燈影必須等綠光與紫影重疊時才能辨認，沿黑蘆外圈繞行後才到玻璃水核心',
        edgeKind: 'distant_route',
        edgeNote: '巫燈處到玻璃水核心需等待雙色燈影重疊並繞過黑蘆外圈，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'hag_lantern_echo', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'drowned_willow_treant', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'reedshade_stalker', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[燈]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '燈影裡多出彎腰身影時，暗樹根會從水下靠近。',
      treasure: '破鏡片串中有一片能指出核心真路。',
      spirit: '巫燈處是鏡沼用恐懼維持秩序的路標。',
    },
  },

marsh_of_mirrors_glasswater_core: {
    id: 'marsh_of_mirrors_glasswater_core',
    name: '玻璃水核心',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_glasswater_core.png',
    imagePrompt: '玻璃水核心 in marsh_of_mirrors, central glasslike water core, impossible reflections, black reeds, glowing mist and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain water, clear lantern light',
    description:
      '鏡沼最深處是一片圓形水域，水面透明如玻璃，能看見下方並不是泥底，而是一片倒置天空。黑色蘆葦圍成外圈，暗樹根、月光堤道與破碎倒影都在此交會。中央水面浮著一枚緩慢轉動的透明核心，每次轉動都會讓整片沼澤的倒影偏移。東側黑根與北側雙色燈影都能辨認，但核心周圍倒影會把回程反折，需由暗樹林或巫燈處方向進入核心。這裡是鏡沼的大型事件鉤子與最終地標，玩家可選擇穩定核心、打碎它，或取走鏡片碎核作為任務證據。任何選擇都會引來沼澤生物反應：毒蛙鳴叫、湖蛇破水、暗樹根從邊緣收攏。若隊伍沒有先取得巫燈警示與鏡池樣本，核心會顯示錯誤出口，把人送回迷霧深處。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'marsh_of_mirrors_moonlit_causeway',
        description: '南返時最亮石路會沿黑蘆外圈反折，穿過假月水面後才回到月光堤道',
        edgeKind: 'distant_route',
        edgeNote: '玻璃水核心南返月光堤道需沿黑蘆外圈與反折石路回行，屬於長路徑。',
      },
      {
        direction: 'west',
        targetRoomId: 'marsh_of_mirrors_shattered_reflection',
        description: '西側裂紋水面要等核心倒影偏移後才會連上，隊伍需踩過連續碎片回到破碎倒影',
        edgeKind: 'distant_route',
        edgeNote: '玻璃水核心西返破碎倒影需穿過偏移倒影碎片，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'glasswater_reflection_core', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'hag_lantern_echo', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'drowned_willow_treant', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[核]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '核心轉動後，所有怪物會依照倒影偏移重新站位。',
      treasure: '透明核心外圈可取下鏡片碎核，但會改變整片沼澤。',
      spirit: '玻璃水核心是鏡沼所有謊言共同映出的真相。',
    },
  },

redrock_badlands_dust_gate: {
    id: 'redrock_badlands_dust_gate',
    name: '沙塵隘口',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_dust_gate.png',
    imagePrompt: '沙塵隘口 in redrock_badlands, red rock desert pass with dust gate, warning stakes, dry wind and bandit tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain desert, clear lantern light',
    description:
      '赤岩荒地的入口是一道被紅色岩壁夾住的狹長隘口，風把細沙推成斜線，打在警告木樁與破旗上。地面同時有商隊車轍、盜匪靴印和野獸爪痕，沒有哪一種痕跡能保持完整太久。這裡是荒地的交通錨點與 PvP 風險提示房，玩家可確認補水、標記撤退路線，並從木樁上的懸賞紙判斷近期哪支盜匪團最活躍。隘口不完全安全，落單旅人常在進入後第一道轉彎就被盯上。若風聲突然變低，代表岩脊上有人正在觀察。這裡的地形與視野會直接影響玩家遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線。',
    exits: [
      { direction: 'east', targetRoomId: 'redrock_badlands_rustwash_pass', description: '紅沙路通向鏽水隘道' },
      { direction: 'north', targetRoomId: 'redrock_badlands_burnt_wagon', description: '焦黑車轍通向焚車殘骸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'redscale_viper', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[隘]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '風聲突然變低時，岩脊上的盜匪斥候正在瞄準。',
      treasure: '懸賞紙背面常有商隊留下的安全暗號。',
      spirit: '沙塵隘口把旅人從有規矩的道路推進沒有規矩的荒地。',
    },
  },

redrock_badlands_rustwash_pass: {
    id: 'redrock_badlands_rustwash_pass',
    name: '鏽水隘道',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_rustwash_pass.png',
    imagePrompt: '鏽水隘道 in redrock_badlands, dry wash stained rust red, narrow canyon path, cracked mud, dust and cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '隘口後方是一條乾涸河道，泥面被鐵鏽色礦物染成深紅，像曾有血水沿著谷底流過。兩側岩壁不高，卻足夠讓盜匪躲在上方投石或射箭。這裡是主路第一段，連接碎岩脊、乾裂谷與沙塵隘口，也是玩家第一次感受到 open PvP 壓力的地方。河道中央散著補給箱碎片和被曬裂的水袋，提醒隊伍不要把這裡當成普通通道。若沿著鏽色水痕追蹤，能找到紅礦切口與流放者活動方向。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_dust_gate', description: '紅沙路回到沙塵隘口' },
      { direction: 'east', targetRoomId: 'redrock_badlands_splinter_ridge', description: '河道爬向碎岩脊' },
      { direction: 'south', targetRoomId: 'redrock_badlands_dry_gulch', description: '乾裂谷在南側下陷', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'dust_road_raider', maxCount: 3, respawnSeconds: 95 },
      { monsterId: 'cinder_wolf', maxCount: 1, respawnSeconds: 105 },
    ],
    mapSymbol: '[鏽]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '岩壁上落下碎砂時，盜匪多半正在上方移動。',
      treasure: '破水袋旁有商隊私藏的鹽錠。',
      spirit: '鏽水隘道像荒地乾涸的血管，仍把危險送向各處。',
    },
  },

redrock_badlands_splinter_ridge: {
    id: 'redrock_badlands_splinter_ridge',
    name: '碎岩脊',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_splinter_ridge.png',
    imagePrompt: '碎岩脊 in redrock_badlands, jagged red stone ridge, narrow ledges, dust storm horizon, ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '鏽水隘道東端爬上碎岩脊，紅色石片像斷刀一樣斜插在地面，腳下每一步都會發出清脆碎裂聲。岩脊視野開闊，可以看見盜匪哨塔、紅礦切口與遠處黑旗瞭望點，但也讓行蹤暴露給所有高處敵人。這裡是交通與伏擊房，玩家可選擇繞往哨塔、進入乾谷，或沿岩脊快速穿越荒地。碎岩縫中躲著毒蛇，野狼則會利用背風處接近。若隊伍在此交戰，聲音會傳得很遠，引來其他玩家或盜匪巡邏。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_rustwash_pass', description: '碎坡回到鏽水隘道' },
      { direction: 'east', targetRoomId: 'redrock_badlands_bandit_watch', description: '岩脊通向盜匪哨塔' },
      { direction: 'south', targetRoomId: 'redrock_badlands_red_ore_cut', description: '紅色礦痕往南延伸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'redrock_badlands_echo_arch',
        description: '北面風聲穿過多段碎岩脊與落石坡，繞上高處後才抵達回聲拱岩，沿途視野開闊',
        edgeKind: 'distant_route',
        edgeNote: '碎岩脊到回聲拱岩需要沿高低落差明顯的岩脊繞行，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'redscale_viper', maxCount: 3, respawnSeconds: 90 },
      { monsterId: 'blackflag_marksman', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[脊]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '碎石聲若在背後重複，可能是狼群沿著背風處跟蹤。',
      treasure: '最高石片下卡著一枚被風吹亮的礦片。',
      spirit: '碎岩脊讓荒地所有路線都短暫暴露在同一片天空下。',
    },
  },

redrock_badlands_bandit_watch: {
    id: 'redrock_badlands_bandit_watch',
    name: '盜匪哨塔',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_bandit_watch.png',
    imagePrompt: '盜匪哨塔 in redrock_badlands, crude bandit watchtower on red cliffs, flags, ladders, dust and weapons, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '碎岩脊東側立著一座用枯木、車輪和紅岩支柱拼成的哨塔，塔頂掛著破布旗，能監視鏽水隘道與紅礦切口。盜匪會在這裡交換信號、分配伏擊位置，也會把搶來的水袋吊在塔下示眾。這裡是高衝突戰鬥房，玩家可清除哨兵、奪取旗號，或利用塔頂視野標記其他玩家與敵對隊伍動向。若沒有先解決哨塔，後續進入營地與伏擊峽谷時會更容易遭遇增援。塔梯狹窄，一旦交手很難快速撤退。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_splinter_ridge', description: '岩脊回到碎岩路' },
      { direction: 'east', targetRoomId: 'redrock_badlands_outlaw_camp', description: '旗號指向盜匪營地' },
      {
        direction: 'south',
        targetRoomId: 'redrock_badlands_red_ore_cut',
        description: '塔下礦車路沿紅岩坡折向南方，穿過斷軌與礦渣後才到紅礦切口，車輪痕可辨路',
        edgeKind: 'distant_route',
        edgeNote: '盜匪哨塔到紅礦切口要繞過塔基斷軌與礦車路，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'blackflag_marksman', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[塔]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '哨塔旗號被吹成直線時，營地增援很快會出現。',
      treasure: '塔頂水袋旁藏著盜匪巡邏名冊。',
      spirit: '盜匪哨塔是荒地把視野變成武器的地方。',
    },
  },

redrock_badlands_dry_gulch: {
    id: 'redrock_badlands_dry_gulch',
    name: '乾裂谷',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_dry_gulch.png',
    imagePrompt: '乾裂谷 in redrock_badlands, dry cracked gulch, red clay walls, bones, heat haze and thorn brush, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '鏽水隘道南側陷成一條乾裂谷，谷底泥土龜裂成大片硬殼，裂縫間有熱氣與細小蛇洞。風被谷壁擋住，空氣悶得像石窯，連遠方喊聲都變得模糊。這裡是資源與戰鬥房，玩家可採集乾土礦、蛇毒與耐旱草根，也能避開主路哨塔繞往毒蛇平地或焦泉。乾裂谷看似低調，實際常被盜匪當成藏貨線，地上骨頭多半不是野獸留下。若裂縫突然冒出熱氣，附近可能有熔岩蟲通道。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_rustwash_pass', description: '爬坡回到鏽水隘道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'redrock_badlands_viper_flats',
        description: '東側蛇洞密集處沿乾裂土坡展開，繞過荊棘與骨堆後才到毒蛇平地',
        edgeKind: 'distant_route',
        edgeNote: '乾裂谷到毒蛇平地需沿蛇洞與裂土繞行，不是直接相鄰格。',
      },
      {
        direction: 'south',
        targetRoomId: 'redrock_badlands_cinder_spring',
        description: '南側熱氣從裂谷底部升起，需沿黑色礦殼下切後才會抵達焦泉，地面持續發燙',
        edgeKind: 'distant_route',
        edgeNote: '乾裂谷南下焦泉有垂直下切與熱氣阻隔，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'redscale_viper', maxCount: 4, respawnSeconds: 90 },
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[谷]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '裂縫連續冒熱氣時，熔岩蟲可能在地下移動。',
      treasure: '乾土礦常藏在最大裂縫的陰影裡。',
      spirit: '乾裂谷像赤岩荒地張開的乾渴喉嚨。',
    },
  },

redrock_badlands_cinder_spring: {
    id: 'redrock_badlands_cinder_spring',
    name: '焦泉',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_cinder_spring.png',
    imagePrompt: '焦泉 in redrock_badlands, steaming cinder spring in red desert, black mineral crust, orange heat, dry reeds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain desert, clear lantern light',
    description:
      '乾裂谷南端有一口冒著灰白蒸汽的焦泉，泉水不多，卻含有濃烈礦味，周圍結著黑色礦殼。流放者與盜匪都會冒險來此取水，因為整片荒地沒有幾處可靠水源。這裡是資源與衝突房，玩家可採集火成礦殼、補充有限水源，或設伏爭奪水權。泉邊有燒焦腳印與破陶罐，說明地下熱流最近變得不穩。火焰精靈偶爾會在蒸汽中現身，熔岩蟲也會沿熱流靠近。任何戰鬥都可能把泉口震裂。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'redrock_badlands_dry_gulch',
        description: '北返乾谷時需攀過黑色礦殼與蒸汽裂縫，熱風會遮住回頭路，岩面也容易碎裂',
        edgeKind: 'distant_route',
        edgeNote: '焦泉回乾裂谷需要沿熱泉邊坡上切，距離長於相鄰格。',
      },
      { direction: 'east', targetRoomId: 'redrock_badlands_viper_flats', description: '東側蛇洞平地接向熱霧路' },
      {
        direction: 'south',
        targetRoomId: 'redrock_badlands_lava_worm_sink',
        description: '南側裂地沿冒煙地縫下沉，繞過鬆動紅土後才到熔岩蟲陷坑，腳下震動明顯',
        edgeKind: 'distant_route',
        edgeNote: '焦泉南下熔岩蟲陷坑有崩塌地縫阻隔，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'lava_worm', maxCount: 1, respawnSeconds: 140 },
      { monsterId: 'cinder_wolf', maxCount: 2, respawnSeconds: 105 },
    ],
    mapSymbol: '[泉]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '蒸汽變橙時，火焰精靈即將從泉口浮出。',
      treasure: '黑色礦殼可作為耐火鍛造材料。',
      spirit: '焦泉讓荒地最稀缺的水也帶著火的脾氣。',
    },
  },
};
