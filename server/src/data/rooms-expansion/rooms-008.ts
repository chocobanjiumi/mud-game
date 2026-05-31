import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_008: Record<string, RoomDef> = {
redrock_badlands_outlaw_camp: {
    id: 'redrock_badlands_outlaw_camp',
    name: '盜匪營地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_outlaw_camp.png',
    imagePrompt: '盜匪營地 in redrock_badlands, outlaw camp among red rocks, tents, stolen crates, campfires, weapons and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain camp, clear lantern light',
    description:
      '盜匪營地藏在幾座紅岩屏障後方，帳篷用搶來的商隊布棚拼成，中央火堆旁堆著木箱、水桶與還沒分贓的貨物。營地四周挖有低矮壕溝，方便盜匪在 PvP 混戰時躲避遠程攻擊。這裡是高密度戰鬥與任務核心房，旅人可搶回貨物、破壞旗號、挑起不同盜匪小隊內鬥，也可能與其他旅人爭奪同一批戰利品。營地後方有路通往骨標地與伏擊峽谷，若哨塔尚未清除，增援會從岩脊快速抵達。這裡的地形與視野會直接影響旅人遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線。務必保持警戒。不要停留',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_bandit_watch', description: '旗號路回到哨塔' },
      { direction: 'east', targetRoomId: 'redrock_badlands_bone_marker', description: '戰利品路通向骨標地' },
      { direction: 'north', targetRoomId: 'redrock_badlands_rock_giant_perch', description: '北側岩臺路通向巨人棲臺' },
      {
        direction: 'south',
        targetRoomId: 'redrock_badlands_blackflag_lookout',
        description: '南側黑旗坡沿營地後方高地曲折上升，繞過落石後才到瞭望點，旗影會引導方向',
        edgeKind: 'distant_route',
        edgeNote: '盜匪營地到黑旗瞭望點有高地落差與曲折坡道，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'dust_road_raider', maxCount: 4, respawnSeconds: 95 },
      { monsterId: 'blackflag_marksman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'cinder_wolf', maxCount: 1, respawnSeconds: 105 },
    ],
    mapSymbol: '[營]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '火堆旁的骨笛響起時，營地所有盜匪都會開始集結。',
      treasure: '未分贓貨箱中可能有商隊任務物品。',
      spirit: '盜匪營地把荒地的無法無天變成了一套臨時秩序。',
    },
  },

redrock_badlands_bone_marker: {
    id: 'redrock_badlands_bone_marker',
    name: '骨標地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_bone_marker.png',
    imagePrompt: '骨標地 in redrock_badlands, bone markers and skull stakes in red desert, dust, harsh sun and warning charms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain bone, clear lantern light',
    description:
      '盜匪營地東側插滿骨頭與破槍，形成一片粗糙邊界。每根骨標都綁著不同顏色布條，代表這裡曾被哪個團伙、流放者或怪物佔過。白骨在烈日下乾裂，影子卻像指向不同路線的指針。這裡是探索與衝突提示房，旅人可解讀骨標勢力、尋找被綁在骨架上的信物，或判斷哪些路線更可能遭遇 PvP 埋伏。骨標地也是狼群與毒蛇經常出沒的獵場，盜匪則會利用白骨製造假路標。若布條方向突然改變，附近旅人或 NPC 小隊正在靠近',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_outlaw_camp', description: '戰利品路回到營地' },
      { direction: 'north', targetRoomId: 'redrock_badlands_exile_den', description: '北側碎骨路通向流放者洞穴' },
      { direction: 'south', targetRoomId: 'redrock_badlands_duel_stones', description: '骨標指向決鬥石圈' },
      {
        direction: 'east',
        targetRoomId: 'redrock_badlands_ambush_canyon',
        description: '東側碎骨坡穿過乾風與骸骨標記後，才會下切到伏擊峽谷，崖壁適合埋伏',
        edgeKind: 'distant_route',
        edgeNote: '骨標地到伏擊峽谷需要沿碎骨坡下切，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'cinder_wolf', maxCount: 3, respawnSeconds: 105 },
      { monsterId: 'redscale_viper', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'dust_road_raider', maxCount: 1, respawnSeconds: 95 },
    ],
    mapSymbol: '[骨]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '布條同時轉向時，狼群或敵對玩家可能正從背風處接近。',
      treasure: '頭骨眼眶裡常塞著盜匪傳訊紙條。',
      spirit: '骨標地是荒地用死亡畫出的地圖。',
    },
  },

redrock_badlands_viper_flats: {
    id: 'redrock_badlands_viper_flats',
    name: '毒蛇平地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_viper_flats.png',
    imagePrompt: '毒蛇平地 in redrock_badlands, flat red desert full of snake holes, thorn scrub, heat shimmer and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain desert, clear lantern light',
    description:
      '乾裂谷東側展開一片看似平坦的紅土，地面卻布滿細小蛇洞與風蝕孔。枯刺草沿著裂縫生長，任何踩斷枝條的聲音都會讓毒蛇從洞中探頭。這裡是戰鬥與素材房，旅人可收集蛇毒、蛇皮與耐旱草，或清理商隊路線上的毒蛇群。平地沒有遮蔽，適合遠程交戰，也容易讓 PvP 追擊變得直接而殘酷。若地面熱浪突然扭曲，可能不是幻象，而是地下熔岩蟲把熱氣推到表層',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'redrock_badlands_dry_gulch',
        description: '西側蛇洞路繞過荊棘、骨堆與裂土地面後，才會回到乾裂谷，毒蛇痕跡密集',
        edgeKind: 'distant_route',
        edgeNote: '毒蛇平地西返乾裂谷需要沿蛇洞與裂土繞行，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'redrock_badlands_flame_spirit_basin', description: '熱霧路通向火靈盆地' },
      { direction: 'north', targetRoomId: 'redrock_badlands_lava_worm_sink', description: '熱浪指向陷坑' },
    ],
    monsters: [
      { monsterId: 'redscale_viper', maxCount: 5, respawnSeconds: 90 },
      { monsterId: 'lava_worm', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[蛇]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '枯刺草突然停止搖晃時，毒蛇正在洞口蓄勢。',
      treasure: '最大蛇洞旁的白色蛇蛻可作為煉金材料。',
      spirit: '毒蛇平地讓荒地的平坦本身成為陷阱。',
    },
  },

redrock_badlands_red_ore_cut: {
    id: 'redrock_badlands_red_ore_cut',
    name: '紅礦切口',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_red_ore_cut.png',
    imagePrompt: '紅礦切口 in redrock_badlands, exposed red ore cut in cliff, mine scars, carts, dust, harsh sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '碎岩脊南側的山壁被人鑿開一道巨大切口，裸露出深紅礦脈與黑色火成岩。廢棄礦車歪在軌道旁，車斗裡還有盜匪沒來得及搬走的礦石。這裡是資源、爭奪與中段交通房，旅人可採集赤礦、追查盜匪供應線，也能繞往毒蛇平地、哨塔或岩石巨人棲息的高處。礦脈本身帶著熱度，敲擊聲會沿山壁傳開，引來守礦的岩石巨人或其他旅人。若採集過量，切口內會掉落碎石，短暫封住安全路線',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_splinter_ridge', description: '礦痕回到碎岩脊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'redrock_badlands_viper_flats',
        description: '西側礦痕退回時要穿過蛇洞群與鬆散紅沙，才會回到毒蛇平地，需避開塌陷洞口',
        edgeKind: 'distant_route',
        edgeNote: '紅礦切口西返毒蛇平地需要繞過蛇洞與礦渣，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'redrock_badlands_rock_giant_perch', description: '礦脈上方有巨人棲地' },
      { direction: 'south', targetRoomId: 'redrock_badlands_flame_spirit_basin', description: '熱礦路通向火靈盆地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'red_ore_golem', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'redscale_viper', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[礦]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '礦壁震動時，岩石巨人通常已經被敲擊聲喚醒。',
      treasure: '最深紅的礦脈可採出高品質赤礦。',
      spirit: '紅礦切口是荒地被貪婪挖開的傷口。',
    },
  },

redrock_badlands_burnt_wagon: {
    id: 'redrock_badlands_burnt_wagon',
    name: '焚車殘骸',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_burnt_wagon.png',
    imagePrompt: '焚車殘骸 in redrock_badlands, burned wagon wreck in red desert, black wheels, spilled crates, dust and vultures, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain desert, clear lantern light',
    description:
      '沙塵隘口北面停著一輛被燒到只剩黑骨架的商隊馬車，車輪陷在紅沙中，鐵箍因高熱扭曲。貨箱被撬開，布匹、陶罐碎片與焦黑糧袋散了一地。北側遠處可見黑旗瞭望點，但車轍被落石截斷，需由黑旗高處下到殘骸。這裡是任務線索與伏擊房，旅人可調查商隊遇襲原因、尋找失蹤護衛徽章，或判斷盜匪是否使用火焰精靈掩蓋痕跡。殘骸周圍有狼群與盜匪回收隊出沒，火焰殘味也會吸引更深處的元素生物。若旅人翻動錯誤箱子，藏在車底的盜匪會立刻發難',
    exits: [
      { direction: 'south', targetRoomId: 'redrock_badlands_dust_gate', description: '焦黑車轍回到隘口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'redrock_badlands_echo_arch', description: '風穿過東側拱岩' },
    ],
    monsters: [
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'cinder_wolf', maxCount: 3, respawnSeconds: 105 },
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[車]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '車底影子過深時，盜匪回收隊可能正躲在殘骸下。',
      treasure: '焦黑糧袋裡藏著還沒燒毀的護衛徽章。',
      spirit: '焚車殘骸讓荒地的威脅不再只是傳聞。',
    },
  },

redrock_badlands_echo_arch: {
    id: 'redrock_badlands_echo_arch',
    name: '回聲拱岩',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_echo_arch.png',
    imagePrompt: '回聲拱岩 in redrock_badlands, natural red stone arch, echoing canyon, dust, harsh sunlight and ambush ledges, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '焚車殘骸東側有一座天然紅岩拱門，風穿過拱洞時會把腳步聲放大成多重回音。拱岩下方有舊營火、斷繩與刻在岩壁上的決鬥記號，是旅人、盜匪與流放者都會短暫停留的地方。東側刻痕路可看見決鬥石圈，但拱門端被落石擋住，需從石圈方向辨認回聲路。這裡是探索與交通房，旅人可用回音判斷是否有人埋伏，也可通往碎岩脊或黑旗瞭望點。拱岩高處適合遠程壓制，因此在 open PvP 中格外危險。若回音比腳步慢太多，代表另一隊伍可能正在拱門另一側模仿你的節奏',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_burnt_wagon', description: '風道回到焚車殘骸' },
      {
        direction: 'south',
        targetRoomId: 'redrock_badlands_splinter_ridge',
        description: '南側岩路沿拱岩落石坡下切，穿過多段碎石平台後才回到碎岩脊，回音會干擾判斷',
        edgeKind: 'distant_route',
        edgeNote: '回聲拱岩南下碎岩脊有高低落差與落石坡，距離長於相鄰格。',
      },
      { direction: 'north', targetRoomId: 'redrock_badlands_blackflag_lookout', description: '拱岩上方通往黑旗瞭望點', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'blackflag_marksman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[拱]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '回音比腳步慢時，敵人可能正在另一側故意誘導。',
      treasure: '拱岩決鬥記號旁藏著一只舊銀戒。',
      spirit: '回聲拱岩讓荒地連腳步聲都能被拿來欺騙。',
    },
  },

redrock_badlands_duel_stones: {
    id: 'redrock_badlands_duel_stones',
    name: '決鬥石圈',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_duel_stones.png',
    imagePrompt: '決鬥石圈 in redrock_badlands, circle of red duel stones, blood marks, weapons, dust and open sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sky, clear lantern light',
    description:
      '骨標地東側的平地擺著一圈紅石，每塊石頭上都有刀痕、血跡與名字縮寫。這裡原本是流放者解決爭端的地方，如今也被旅人用作公開挑戰與 PvP 約戰地標。石圈中央沒有遮蔽，周圍卻有足夠高的岩塊供旁觀者或偷襲者藏身。這裡是 PvP 特色房與任務事件點，旅人可挑戰盜匪頭目、完成榮譽決鬥，或追查某名流放者最後一次露面的紀錄。若有人在石圈外插旗，附近盜匪會把它視作可以搶奪的宣戰信號。這裡的地形與視野會直接影響旅人遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線。務必保持警戒',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_bone_marker', description: '骨標路回到西側' },
      { direction: 'west', targetRoomId: 'redrock_badlands_fill_n4_23', description: '西側刻痕路通往回聲拱岩' },
      {
        direction: 'east',
        targetRoomId: 'redrock_badlands_blackflag_lookout',
        description: '東側黑旗坡先向東北升起，再繞過旗索與落石才抵達瞭望點，坡道暴露在視線中',
        edgeKind: 'distant_route',
        edgeNote: '決鬥石圈到黑旗瞭望點需沿高坡斜向繞行，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'exile_duelist', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'blackflag_marksman', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[鬥]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '石圈外插旗時，盜匪會把決鬥變成混戰。',
      treasure: '最舊血痕下刻著流放者的藏身暗號。',
      spirit: '決鬥石圈把荒地的暴力包裝成一種規則。',
    },
  },

redrock_badlands_exile_den: {
    id: 'redrock_badlands_exile_den',
    name: '流放者洞穴',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_exile_den.png',
    imagePrompt: '流放者洞穴 in redrock_badlands, exile cave hideout in red cliffs, bedrolls, stolen gear, firelight and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain cave, clear lantern light',
    description:
      '決鬥石圈南側的岩壁裂開一道洞口，洞內擺著破睡袋、水罐、簡易鍛爐與被磨掉徽記的舊盔甲。流放者不一定是盜匪，但在赤岩荒地生存久了，界線會變得模糊。西側窄路通向伏擊峽谷，但洞穴端被流放者用碎石封成單向暗口，需從峽谷方向鑽入。這裡是任務與高風險交涉房，旅人可與流放者交易情報、追查被盜物資，也可能因派系選擇觸發戰鬥。若旅人帶著盜匪營地旗號進入，流放者會立刻判定你站在敵對方',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_fill_n3_20', description: '北側熱裂邊道通向猩紅火口' },
      { direction: 'south', targetRoomId: 'redrock_badlands_bone_marker', description: '南側碎骨路回到骨標地' },
    ],
    monsters: [
      { monsterId: 'exile_duelist', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'dust_road_raider', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[放]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '流放者先看你帶的旗號，再決定是否拔刀。',
      treasure: '被磨掉徽記的舊盔甲可能屬於失蹤護衛。',
      spirit: '流放者洞穴讓人看見荒地如何把人逼成另一種敵人。',
    },
  },

redrock_badlands_rock_giant_perch: {
    id: 'redrock_badlands_rock_giant_perch',
    name: '岩巨人棲臺',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_rock_giant_perch.png',
    imagePrompt: '岩巨人棲臺 in redrock_badlands, high red rock perch with giant footprints, boulders, ore veins and dust storm sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain sky, clear lantern light',
    description:
      '紅礦切口上方是一片寬闊岩臺，地面留著巨大腳印，邊緣堆著被徒手掰碎的礦石與半埋巨石。岩石巨人會在這裡休眠，紅鱗蛇敵群也盤在溫熱礦縫旁，身體與紅岩幾乎融為一體，只有胸口裂縫偶爾透出暗色光。南側熱岩坡可看見火靈盆地，但巨人踩塌了下坡路，需由盆地熱岩坡上來。這裡是精英戰鬥與資源守門房，旅人可挑戰岩巨人、取得高品質石心與赤礦，也能從高處觀察火靈盆地和猩紅火口。戰鬥時要小心落石與其他旅人干擾，因為岩臺沒有太多遮蔽。若巨人被激怒，牠會把礦石投向下方切口，改變路線安全性',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_red_ore_cut', description: '礦脈下到紅礦切口' },
      { direction: 'north', targetRoomId: 'redrock_badlands_ambush_canyon', description: '北側岩臺路下切至伏擊峽谷' },
      { direction: 'south', targetRoomId: 'redrock_badlands_outlaw_camp', description: '南側壕溝路回到盜匪營地' },
      {
        direction: 'east',
        targetRoomId: 'redrock_badlands_scarlet_crater',
        description: '東側巨石路沿岩臺邊緣與落石斜坡前進，最後指向猩紅火口，巨人腳印清楚可見',
        edgeKind: 'distant_route',
        edgeNote: '岩巨人棲臺到猩紅火口需沿高岩臺和落石坡繞行，距離較長。',
      },
    ],
    monsters: [
      { monsterId: 'red_ore_golem', maxCount: 3, respawnSeconds: 180 },
      { monsterId: 'redscale_viper', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[巨]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '紅岩胸口裂縫發光時，那不是岩壁，而是岩石巨人醒來。',
      treasure: '巨人休眠處下方常有完整石心碎片。',
      spirit: '岩巨人棲臺像荒地自己的守礦人。',
    },
  },

redrock_badlands_flame_spirit_basin: {
    id: 'redrock_badlands_flame_spirit_basin',
    name: '火靈盆地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_flame_spirit_basin.png',
    imagePrompt: '火靈盆地 in redrock_badlands, red stone basin with flame spirits, heat shimmer, black mineral crust and orange glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain stone, clear lantern light',
    description:
      '紅礦切口南側陷成一個淺盆地，地面覆著黑色礦殼，裂縫中冒出橘紅火舌。火焰精靈像小型旋風般在盆地裡遊走，遇到金屬聲或血腥味便會變得躁動。這裡是元素戰鬥與材料房，旅人可收集火成結晶、完成耐火測試任務，也能繞往焦泉、岩巨人棲臺或熔岩蟲陷坑。盆地熱浪會扭曲視線，使其他旅人和盜匪看起來像殘影。若隊伍停留太久，地下熱流會把熔岩蟲引到盆地中心',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_red_ore_cut', description: '熱礦路回到紅礦切口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'redrock_badlands_viper_flats', description: '西側熱霧路回到毒蛇平地' },
      {
        direction: 'east',
        targetRoomId: 'redrock_badlands_rock_giant_perch',
        description: '東側熱岩坡沿巨人腳印上攀，繞過鬆動礦石後才回到巨人棲臺，落石聲很近',
        edgeKind: 'distant_route',
        edgeNote: '火靈盆地到岩巨人棲臺有明顯高度差與熱岩坡，距離長於相鄰格。',
      },
      {
        direction: 'south',
        targetRoomId: 'redrock_badlands_lava_worm_sink',
        description: '南側裂縫沿橘光地縫下切，穿過鬆散紅土後才到熔岩蟲陷坑，地底有刮擦聲',
        edgeKind: 'distant_route',
        edgeNote: '火靈盆地南下熔岩蟲陷坑需要穿過熱裂地縫，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 4, respawnSeconds: 110 },
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[火]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '熱浪突然形成旋渦時，火焰精靈正在聚集。',
      treasure: '黑色礦殼裂縫裡能取出火成結晶。',
      spirit: '火靈盆地是赤岩荒地埋在地表下的怒氣出口。',
    },
  },

redrock_badlands_lava_worm_sink: {
    id: 'redrock_badlands_lava_worm_sink',
    name: '熔岩蟲陷坑',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_lava_worm_sink.png',
    imagePrompt: '熔岩蟲陷坑 in redrock_badlands, collapsed red earth sinkhole with lava worm tunnels, heat cracks, dust and orange glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain earth, clear lantern light',
    description:
      '火靈盆地下方裂開一座陷坑，坑壁佈滿被高熱磨出的圓形通道，像有巨型蟲子反覆鑽過。地面不時下陷，露出短暫橘光與灼熱氣流。西側熱流與南側熱浪都仍可辨認，但陷坑邊緣在這端不穩，需由焦泉或毒蛇平地方向進入。這裡是高危戰鬥房，旅人可狩獵熔岩蟲、採集熱殼與火成寶石，也能利用地下通道避開部分 PvP 追擊。陷坑邊緣極不穩定，遠程交火或岩巨人震擊都可能讓地面坍塌。若聽到地下連續摩擦聲，代表熔岩蟲正在選擇出口，最好立刻離開中央區域',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'redrock_badlands_flame_spirit_basin',
        description: '北側裂縫需沿熔岩蟲鑽出的斜道上攀，才會回到火靈盆地，熱風會迎面灌入',
        edgeKind: 'distant_route',
        edgeNote: '熔岩蟲陷坑北返火靈盆地需要爬出熱裂斜道，距離長於相鄰格。',
      },
      { direction: 'south', targetRoomId: 'redrock_badlands_viper_flats', description: '南側熱浪路回到毒蛇平地' },
      {
        direction: 'east',
        targetRoomId: 'redrock_badlands_fill_n5_19',
        description: '東側地下熱道穿過蟲洞與赤色裂光，通向猩紅火口外緣',
      },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 4, respawnSeconds: 140 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[蟲]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '地下摩擦聲連成三次時，熔岩蟲會從最近裂縫衝出。',
      treasure: '剛冷卻的蟲道內壁常有火成寶石。',
      spirit: '熔岩蟲陷坑提醒旅人，荒地連地面都不可靠。',
    },
  },

redrock_badlands_ambush_canyon: {
    id: 'redrock_badlands_ambush_canyon',
    name: '伏擊峽谷',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_ambush_canyon.png',
    imagePrompt: '伏擊峽谷 in redrock_badlands, narrow ambush canyon with red walls, rope traps, hidden ledges and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '盜匪營地南面的峽谷又窄又深，岩壁上挖著許多小洞，藏有繩套、落石與簡陋弩機。谷底散著斷箭與破盾，顯示這裡長期被用作截殺路線。東側碎骨坡可看見骨標地，但峽谷端高處伏點封住回程，需由骨標地側下坡進入。這裡是 PvP 與盜匪伏擊房，旅人可拆除陷阱、反向利用高處伏點，或護送目標穿過最危險的谷段。峽谷連接營地與流放者洞穴，是許多衝突任務的交會處。若你聽見上方石子滾落，不一定是 NPC，也可能是其他旅人正在尋找開戰角度。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進',
    exits: [
      { direction: 'south', targetRoomId: 'redrock_badlands_rock_giant_perch', description: '南側岩臺路回到巨人棲臺' },
      {
        direction: 'east',
        targetRoomId: 'redrock_badlands_exile_den',
        description: '東側窄路繞過谷壁暗口後通向流放者洞穴',
        edgeKind: 'distant_route',
        edgeNote: '伏擊峽谷到流放者洞穴需穿過谷壁暗口與碎石封路，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'dust_road_raider', maxCount: 3, respawnSeconds: 95 },
      { monsterId: 'blackflag_marksman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'exile_duelist', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[伏]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '上方石子連續滾落時，伏擊者可能正在換位。',
      treasure: '拆下的弩機零件可交給商隊換賞金。',
      spirit: '伏擊峽谷把赤岩荒地的規則說得很明白：高處先開口。',
    },
  },

redrock_badlands_blackflag_lookout: {
    id: 'redrock_badlands_blackflag_lookout',
    name: '黑旗瞭望點',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_blackflag_lookout.png',
    imagePrompt: '黑旗瞭望點 in redrock_badlands, high lookout with black flag, red cliffs, spyglass, dust storm horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '回聲拱岩上方的高處插著一面黑旗，旗布被沙風磨得像刀口。從這裡可以俯瞰焚車殘骸、盜匪營地、決鬥石圈與遠處猩紅火口，是整片赤岩荒地最重要的視野點之一。東側決鬥石圈與北側火口都在視線內，但黑旗這端高坡被旗索與落石擋住，需從石圈或火口方向接近。這裡是大型 PvP 交通與情報房，旅人可控制瞭望點、標記敵對旅人動向、截聽盜匪旗號，或開啟高地路線。黑旗旁有一架破舊望遠鏡，鏡片被刻意刮花，只有在沙塵最濃時才能看見隱藏路徑。若黑旗被放倒，附近盜匪會短暫陷入混亂',
    exits: [
      { direction: 'south', targetRoomId: 'redrock_badlands_echo_arch', description: '下坡回到回聲拱岩', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'redrock_badlands_burnt_wagon',
        description: '西側下方的焦黑車轍需沿旗索高坡折返，才會接回焚車殘骸，黑旗在頭頂飄動',
        edgeKind: 'distant_route',
        edgeNote: '黑旗瞭望點西返焚車殘骸有高地落差與旗索坡，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'blackflag_marksman', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'red_ore_golem', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[旗]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '黑旗突然倒向無風方向時，附近有伏兵正在發信號。',
      treasure: '刮花望遠鏡能在沙塵中看見隱藏高地路。',
      spirit: '黑旗瞭望點讓誰掌握視野，誰就暫時掌握荒地。',
    },
  },

redrock_badlands_scarlet_crater: {
    id: 'redrock_badlands_scarlet_crater',
    name: '猩紅火口',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_scarlet_crater.png',
    imagePrompt: '猩紅火口 in redrock_badlands, scarlet volcanic crater in red badlands, glowing cracks, black flags, giant stones and heat haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '赤岩荒地最深處是一座猩紅火口，火山並未真正噴發，卻持續從裂縫吐出熱光與金屬味。黑旗、流放者刻痕、巨人腳印與熔岩蟲通道都在此交會，像所有勢力都被同一個熱源吸引。南側深洞、東側地下熱道與北側高地都能辨認，但火口裂縫在這端形成單向崩塌，需由流放者洞穴、熔岩蟲陷坑或黑旗瞭望點方向進入。這裡是區域大型事件鉤子與最終地標，旅人可爭奪火口控制權、封堵地下熱流、追查盜匪為何把搶來的赤礦運到此處，也能挑戰岩石巨人與火焰精靈混合守衛。若火口裂縫被過度採掘，整片荒地的熱流會變得不穩，使焦泉、盆地與陷坑同時暴動。這裡的地形與視野會直接影響旅人遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'redrock_badlands_rock_giant_perch',
        description: '北側巨石路需繞過火口裂縫與落石坡，才會回到岩巨人棲臺，赤光會逐漸變暗',
        edgeKind: 'distant_route',
        edgeNote: '猩紅火口西返岩巨人棲臺需要沿巨石坡繞行，距離長於相鄰格。',
      },
      { direction: 'west', targetRoomId: 'redrock_badlands_fill_n4_19', description: '西側赤色裂光路回到熔岩蟲陷坑' },
      { direction: 'south', targetRoomId: 'redrock_badlands_fill_n3_20', description: '南側熱裂邊道回到流放者洞穴' },
    ],
    monsters: [
      { monsterId: 'blackflag_warlord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'red_ore_golem', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'flame_spirit', maxCount: 3, respawnSeconds: 110 },
      { monsterId: 'lava_worm', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[口]',
    mapX: 5,
    mapY: -3,
    guardianHints: {
      creature: '火口熱光連續脈動時，巨人與火靈會同時進入警戒。',
      treasure: '裂縫邊緣可取得猩紅火成核心，但會引發熱流暴動。',
      spirit: '猩紅火口是赤岩荒地所有貪婪、流亡與戰鬥最後匯聚的地方。',
    },
  },

sunken_catacombs_tide_stair: {
    id: 'sunken_catacombs_tide_stair',
    name: '潮汐階梯',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_tide_stair.png',
    imagePrompt: '潮汐階梯 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '入口石階被黑水反覆淹沒，牆上潮痕像年輪一樣層層堆疊。這裡是沉沒墓窟入口與回程錨點，旅人可確認水位、點亮防潮燈，並從刻在階梯側面的名字判斷哪些探險隊曾經進入後沒有回來。水聲會掩蓋骷髏腳步，黑水裡偶爾還有蛇影掠過。若潮痕突然上升，代表墓窟深處的排水機關正在反向運轉，隊伍應先標記退路再深入',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '西側石壁裂縫沿鹽晶潮洞斜切而出，通往血鹽海岸的鹽玻璃洞', edgeKind: 'distant_route', edgeNote: '潮汐階梯西出血鹽海岸需穿過墓窟裂縫與鹽晶潮洞，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '潮濕石階通向淹沒前廳' },
    ],
    monsters: [
      { monsterId: 'tide_sodden_skeleton', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'blackwater_miremass', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[階]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '潮汐階梯的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '潮汐階梯附近常有被黑水沖出的墓窟線索。',
      spirit: '潮汐階梯保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_flooded_narthex: {
    id: 'sunken_catacombs_flooded_narthex',
    name: '淹沒前廳',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_flooded_narthex.png',
    imagePrompt: '淹沒前廳 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '潮汐階梯下方是半淹前廳，倒塌拱頂讓冷光落在水面，漂著破燈、腐木和碎骨。前廳四面通向骨堂、黑水渠與燈龕，是墓窟外層最重要的交通節點。旅人可在這裡判斷水流方向、尋找失蹤隊伍留下的防水記號，也會遭遇第一批真正守墓者。水面倒映出的拱門比現實完整，容易誤導隊伍走向封死通道。若前廳中央渦流變黑，附近亡靈會一同醒來',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_tide_stair', description: '階梯回到入口' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_ossuary_walk', description: '骨牆長廊在東側' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_blackwater_channel', description: '黑水渠在南側' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_lantern_niche', description: '藍火燈龕在北側' },
    ],
    monsters: [
      { monsterId: 'tide_sodden_skeleton', maxCount: 3, respawnSeconds: 100 },
      { monsterId: 'blackwater_miremass', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[廳]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '淹沒前廳的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '淹沒前廳附近常有被黑水沖出的墓窟線索。',
      spirit: '淹沒前廳保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_ossuary_walk: {
    id: 'sunken_catacombs_ossuary_walk',
    name: '骨牆長廊',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_ossuary_walk.png',
    imagePrompt: '骨牆長廊 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '前廳東側的長廊兩壁砌滿頭骨與腿骨，許多骨骼被潮水泡得發灰，仍按照古老家族紋章排列。每當水流穿過骨縫，長廊會發出像低聲合唱的回音。這裡是戰鬥與探索房，旅人可拓印紋章、尋找被錯置的遺骨，也能從骨牆缺口前往漂棺室或哀悼墓室。骷髏士兵會從骨牆中抽身而出，巨蛛則在潮濕頂部結網。若旅人亂動骨序，整條長廊會短暫封死',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '長廊回到淹沒前廳' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_floating_coffins', description: '水聲通向漂棺室' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_mourner_crypt', description: '哭者墓室在北側' },
    ],
    monsters: [
      { monsterId: 'tide_sodden_skeleton', maxCount: 3, respawnSeconds: 100 },
      { monsterId: 'coffin_chain_guard', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[骨]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '骨牆長廊的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '骨牆長廊附近常有被黑水沖出的墓窟線索。',
      spirit: '骨牆長廊保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_blackwater_channel: {
    id: 'sunken_catacombs_blackwater_channel',
    name: '黑水渠',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_blackwater_channel.png',
    imagePrompt: '黑水渠 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '前廳南側開出一條低矮水渠，黑水沿著石槽緩慢流動，水面漂著蠟封、腐布與沒入一半的墓牌。這裡是水路通道與資源房，旅人可採集黑水沉泥、尋找排水閘位置，也能避開骨牆長廊直接前往水閘控制室。水渠狹窄，戰鬥時很難展開陣形，湖蛇與史萊姆會利用水深從側面靠近。若旅人帶著錯誤光源，黑水會反射出不存在的出口，引導隊伍走入蛇形排水道',
    exits: [
      { direction: 'north', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '水渠回到前廳' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_sluice_control', description: '水流通向水閘控制室' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_bone_silt_basin', description: '沉泥坡通向骨泥盆地' },
    ],
    monsters: [
      { monsterId: 'drowned_drain_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'blackwater_miremass', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[渠]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '黑水渠的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '黑水渠附近常有被黑水沖出的墓窟線索。',
      spirit: '黑水渠保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_floating_coffins: {
    id: 'sunken_catacombs_floating_coffins',
    name: '漂棺室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_floating_coffins.png',
    imagePrompt: '漂棺室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '骨牆長廊後方是一間被水淹到腰深的墓室，數十具石棺漂在水面，彼此碰撞時發出沉悶聲響。棺蓋上刻著不同潮汐符號，部分石棺卻被從內部頂開。這裡是高密度戰鬥與任務房，旅人可辨認正確棺序、尋找任務遺骸，或用漂棺搭成臨時路線。石棺移動會改變出口位置，也會讓守墓骷髏和亡靈騎士更容易靠近。若水位突然下降，原本漂浮的棺材會變成阻擋退路的石牆。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_ossuary_walk', description: '骨牆路回到長廊' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_mourner_crypt', description: '漂棺靠向哭者墓室' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_sluice_control', description: '棺列間水路通向水閘室' },
    ],
    monsters: [
      { monsterId: 'tide_sodden_skeleton', maxCount: 3, respawnSeconds: 100 },
      { monsterId: 'coffin_chain_guard', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[棺]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '漂棺室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '漂棺室附近常有被黑水沖出的墓窟線索。',
      spirit: '漂棺室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_mourner_crypt: {
    id: 'sunken_catacombs_mourner_crypt',
    name: '哭者墓室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_mourner_crypt.png',
    imagePrompt: '哭者墓室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '漂棺室北面有一座乾燥些的墓室，牆上浮雕刻著披面哭者，她們的臉被潮氣侵蝕，只剩空洞眼眶。地面放著許多破陶碗，像曾有人定期供水或供淚。西側骨牆支路可見骨牆長廊，但哭者墓室這端墓龕滲水封住回程，需由長廊方向進入。這裡是敘事與精英前置房，旅人可解讀哭者浮雕、收集葬儀碗碎片，並找到通往嘆息禮拜堂的祈詞。若旅人靠近主墓龕，哭者浮雕會滲出黑水，召來骷髏與石像守衛。墓室聲音異常清楚，任何低語都像被死者聽見。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進',
    exits: [
      { direction: 'south', targetRoomId: 'sunken_catacombs_floating_coffins', description: '墓階回到漂棺室' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_chapel_of_sighs', description: '祈詞通向嘆息禮拜堂' },
    ],
    monsters: [
      { monsterId: 'mourner_wraith', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'tide_sodden_skeleton', maxCount: 2, respawnSeconds: 100 },
    ],
    mapSymbol: '[哭]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '哭者墓室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '哭者墓室附近常有被黑水沖出的墓窟線索。',
      spirit: '哭者墓室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_sluice_control: {
    id: 'sunken_catacombs_sluice_control',
    name: '水閘控制室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_sluice_control.png',
    imagePrompt: '水閘控制室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '黑水渠深處有一間青銅水閘室，牆上排列著三只生鏽輪盤，分別控制外層水渠、漂棺室與深潮井水位。輪盤旁刻著古代潮汐表，但後人加上的標記已被泡爛。這裡是機關與交通房，旅人可調整水位、打開鏈橋捷徑，也可能因錯誤操作讓墓窟局部淹沒。水閘室地面滑膩，史萊姆會貼著齒輪藏身，湖蛇則從排水口突襲。若三只輪盤同時震動，代表深處黑水核心正在反推機關。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_blackwater_channel', description: '水渠回到西側' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_floating_coffins', description: '水位門通向漂棺室' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_bone_silt_basin', description: '排水坡通向骨泥盆地' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_serpent_drain', description: '排水口通向蛇形水道' },
    ],
    monsters: [
      { monsterId: 'blackwater_miremass', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'drowned_drain_serpent', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[閘]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '水閘控制室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '水閘控制室附近常有被黑水沖出的墓窟線索。',
      spirit: '水閘控制室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_bone_silt_basin: {
    id: 'sunken_catacombs_bone_silt_basin',
    name: '骨泥盆地',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_bone_silt_basin.png',
    imagePrompt: '骨泥盆地 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '水閘室南側的低地沉積著厚厚骨泥，碎骨、泥沙與腐布混成灰白色淤積物。每一步都會陷入膝蓋，拔腳聲像有人在泥下拉扯。這裡是資源與危險地形房，旅人可採集骨泥、尋找被水沖下來的墓牌，也能從淤積方向推斷深潮井位置。骨泥中藏著許多未完全甦醒的骷髏，史萊姆則吸附在骨片上偽裝成泥塊。若隊伍行動太慢，骨泥會逐漸封住剛踏出的路',
    exits: [
      { direction: 'north', targetRoomId: 'sunken_catacombs_sluice_control', description: '淤泥坡回到水閘室' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_deep_tidewell', description: '沉泥流向深潮井' },
    ],
    monsters: [
      { monsterId: 'tide_sodden_skeleton', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'blackwater_miremass', maxCount: 3, respawnSeconds: 110 },
    ],
    mapSymbol: '[泥]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '骨泥盆地的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '骨泥盆地附近常有被黑水沖出的墓窟線索。',
      spirit: '骨泥盆地保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_lantern_niche: {
    id: 'sunken_catacombs_lantern_niche',
    name: '長明燈龕',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_lantern_niche.png',
    imagePrompt: '長明燈龕 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '淹沒前廳西側的牆面鑿出一排燈龕，多數油燈早已熄滅，只有中間一盞在潮濕空氣裡發出藍白小火。燈龕下方刻著回程祈文，字跡被無數濕手摸得發亮。這裡是探索與安全節點房，旅人可重新點亮長明燈，降低外層迷路風險，並取得前往嘆息禮拜堂的光源線索。燈火會吸引亡靈，也會驅散部分黑水幻象。若旅人吹熄唯一燃燈，整個前廳出口會在短時間內變得難以辨認',
    exits: [
      { direction: 'south', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '燈光回到前廳' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_chapel_of_sighs', description: '祈文路通向嘆息禮拜堂' },
    ],
    monsters: [
      { monsterId: 'mourner_wraith', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'tide_sodden_skeleton', maxCount: 2, respawnSeconds: 100 },
    ],
    mapSymbol: '[燈]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '長明燈龕的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '長明燈龕附近常有被黑水沖出的墓窟線索。',
      spirit: '長明燈龕保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_serpent_drain: {
    id: 'sunken_catacombs_serpent_drain',
    name: '蛇形排水道',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_serpent_drain.png',
    imagePrompt: '蛇形排水道 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '黑水渠東端分出一條蛇形排水道，通道窄到只能側身前進，牆面佈滿被鱗片磨出的弧形刮痕。水流在轉角處形成小漩渦，常把碎骨與蠟封捲到牆角。這裡是高風險通道房，旅人可追蹤湖蛇巢穴、取得排水機關的下層鑰記，也能繞往溺水祭壇。湖蛇會利用轉角連續突襲，史萊姆則封住低處排水口。若聽見前方水流突然消失，代表有蛇身堵住通道等待獵物靠近。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。不要貿然分散',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_sluice_control', description: '排水道回到水閘室' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_drowned_altar', description: '低水道通向溺水祭壇' },
    ],
    monsters: [
      { monsterId: 'drowned_drain_serpent', maxCount: 4, respawnSeconds: 120 },
      { monsterId: 'blackwater_miremass', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[蛇]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '蛇形排水道的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '蛇形排水道附近常有被黑水沖出的墓窟線索。',
      spirit: '蛇形排水道保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_drowned_altar: {
    id: 'sunken_catacombs_drowned_altar',
    name: '溺水祭壇',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_drowned_altar.png',
    imagePrompt: '溺水祭壇 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '蛇形排水道盡頭開成一座半圓祭壇，祭壇上方供著無臉石像，石像胸口以下全浸在黑水裡。水面漂著供花、破骨杯與被水泡白的布條。這裡是任務與精英事件房，旅人可調查墓窟為何被水淹沒，收集祭壇水樣，或用長明燈火照出石像真正面孔。若旅人取走供杯，水下會伸出骷髏手臂，亡靈騎士也會從後方水道現身。祭壇旁的階梯通向石像鎖門，是進入深層墓窟的重要門檻。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_serpent_drain', description: '水道回到蛇形排水道' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_gargoyle_lock', description: '祭壇階梯通向石像鎖門' },
    ],
    monsters: [
      { monsterId: 'drowned_oath_knight', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'tide_sodden_skeleton', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'drowned_drain_serpent', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[壇]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '溺水祭壇的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '溺水祭壇附近常有被黑水沖出的墓窟線索。',
      spirit: '溺水祭壇保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_gargoyle_lock: {
    id: 'sunken_catacombs_gargoyle_lock',
    name: '石像鎖門',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_gargoyle_lock.png',
    imagePrompt: '石像鎖門 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '溺水祭壇後方立著一扇厚重石門，門上雕著兩尊蹲伏石像，牠們的嘴裡含著青銅鎖舌。門縫不斷滲出冷水，像另一側水位更高。這裡是精英守門與機關房，旅人需要用祭壇水樣、長明燈火和水閘控制室的水位變化解除鎖舌。若順序錯誤，石像會甦醒，並把走廊重新灌水。石門兩側刻著墓窟建成時的誓詞，提到深潮井下封著不該再浮出的王冠。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。不要貿然分散。保持隊形。前進',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_drowned_altar', description: '石門回到溺水祭壇' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_chain_bridge', description: '開鎖後通向鏽鏈橋' },
    ],
    monsters: [
      { monsterId: 'sluice_gargoyle', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'drowned_oath_knight', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[鎖]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '石像鎖門的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '石像鎖門附近常有被黑水沖出的墓窟線索。',
      spirit: '石像鎖門保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_chapel_of_sighs: {
    id: 'sunken_catacombs_chapel_of_sighs',
    name: '嘆息禮拜堂',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_chapel_of_sighs.png',
    imagePrompt: '嘆息禮拜堂 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '哭者墓室上方通向一座小禮拜堂，穹頂破裂，水滴從裂縫落下，打在長椅與淺水上，形成像嘆息般的節奏。牆上壁畫描繪送葬隊伍走入地下，但最後幾幅被黑水覆蓋。南側燈龕路仍有藍火微光，但禮拜堂這端長椅倒塌擋住退路，需由長明燈龕循祈文路進入。這裡是敘事與交通房，旅人可解讀祈詞、安撫被困亡靈，並打開通往鏈橋與回音停屍間的路。禮拜堂看似安靜，實際上每排長椅下都有骷髏巡衛殘留的武器。若水滴節奏突然停止，代表亡靈騎士正在禮拜堂門外等待',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_mourner_crypt', description: '墓室回到哭者墓室' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_chain_bridge', description: '禮拜堂門通向鏽鏈橋' },
    ],
    monsters: [
      { monsterId: 'mourner_wraith', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'drowned_oath_knight', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[堂]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '嘆息禮拜堂的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '嘆息禮拜堂附近常有被黑水沖出的墓窟線索。',
      spirit: '嘆息禮拜堂保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_chain_bridge: {
    id: 'sunken_catacombs_chain_bridge',
    name: '鏽鏈橋',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_chain_bridge.png',
    imagePrompt: '鏽鏈橋 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '嘆息禮拜堂東側有一座以粗鐵鏈吊起的窄橋，橋下是看不見底的黑水井道。每次有人踏上去，鐵鏈都會發出刺耳哀鳴，聲音沿井壁傳到深處。這裡是深層交通與危險通道房，旅人可穿越到騎士墓庫，也能用水閘機關降低井道水位建立回程捷徑。橋面濕滑，骷髏會從對岸逼近，石像則可能在橋中央攔截。若橋下黑水泛起白泡，湖蛇或更深處的東西正在上升',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_chapel_of_sighs', description: '鏈橋回到禮拜堂' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_gargoyle_lock', description: '鐵鏈下到石像鎖門' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_knight_vault', description: '對岸是騎士墓庫' },
    ],
    monsters: [
      { monsterId: 'coffin_chain_guard', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'sluice_gargoyle', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'drowned_drain_serpent', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '鏽鏈橋的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '鏽鏈橋附近常有被黑水沖出的墓窟線索。',
      spirit: '鏽鏈橋保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_knight_vault: {
    id: 'sunken_catacombs_knight_vault',
    name: '騎士墓庫',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_knight_vault.png',
    imagePrompt: '騎士墓庫 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '鏽鏈橋後方是騎士墓庫，牆邊排列著浸水鎧甲與長劍，中央石棺上刻著被黑水泡糊的家族紋章。亡靈騎士在此巡邏，像仍在守護早已失去主人的誓言。這裡是精英戰鬥房，旅人可挑戰亡靈騎士、尋找淨化信物，或取得打開王冠墓室的古老徽章。墓庫地面有許多水下裂縫，會限制站位並讓湖蛇從側面加入戰鬥。若旅人帶著正確祈詞進入，騎士會短暫停手，露出可對話或淨化的窗口。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_chain_bridge', description: '鏈橋回到西側' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_crown_crypt', description: '家族徽章指向王冠墓室' },
    ],
    monsters: [
      { monsterId: 'drowned_oath_knight', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'coffin_chain_guard', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'drowned_drain_serpent', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[騎]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '騎士墓庫的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '騎士墓庫附近常有被黑水沖出的墓窟線索。',
      spirit: '騎士墓庫保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_deep_tidewell: {
    id: 'sunken_catacombs_deep_tidewell',
    name: '深潮井',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_deep_tidewell.png',
    imagePrompt: '深潮井 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '骨泥盆地深處裂開一口巨大的圓井，井壁全是潮濕墓磚，黑水在下方緩慢旋轉。井口邊緣釘著舊測深繩，繩尾早已被腐蝕斷裂。這裡是大型事件前置與水位核心房，旅人可測量深潮、投下燈火觀察黑水反應，並得知墓窟不是被外水淹沒，而是井底某物持續向上吐水。深潮井會影響所有外層房間水位，錯誤操作會讓漂棺室、鏈橋與祭壇同時變危險。井壁上偶爾浮出王冠形狀的暗影。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_bone_silt_basin', description: '沉泥回到骨泥盆地' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_sarcophagus_fleet', description: '水流推向石棺漂流帶' },
    ],
    monsters: [
      { monsterId: 'blackwater_miremass', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'drowned_drain_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'drowned_oath_knight', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '深潮井的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '深潮井附近常有被黑水沖出的墓窟線索。',
      spirit: '深潮井保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_sarcophagus_fleet: {
    id: 'sunken_catacombs_sarcophagus_fleet',
    name: '石棺漂流帶',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_sarcophagus_fleet.png',
    imagePrompt: '石棺漂流帶 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '深潮井東側水流把數十具石棺推成一列，像一支緩慢漂行的艦隊。每具石棺都以銅鏈連著下一具，鏈條撞擊水面時發出規律聲響。這裡是戰鬥與解謎房，旅人可調整石棺順序搭出路線，尋找被水流帶走的墓印，並通往回音停屍間或王冠墓室。若切斷錯誤銅鏈，整列石棺會撞向牆面，喚醒更多不死者。湖蛇也會藏在棺列陰影下，等待隊伍跳棺時失衡。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。不要貿然分散。保持隊形',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_deep_tidewell', description: '棺列回到深潮井' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_echo_mortuary', description: '石棺靠向回音停屍間' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_abyssal_cistern', description: '水流通向深淵蓄水池' },
    ],
    monsters: [
      { monsterId: 'coffin_chain_guard', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'drowned_drain_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'drowned_oath_knight', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[漂]',
    mapX: 4,
    mapY: -3,
    guardianHints: {
      creature: '石棺漂流帶的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '石棺漂流帶附近常有被黑水沖出的墓窟線索。',
      spirit: '石棺漂流帶保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_echo_mortuary: {
    id: 'sunken_catacombs_echo_mortuary',
    name: '回音停屍間',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_echo_mortuary.png',
    imagePrompt: '回音停屍間 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '石棺漂流帶北側是一間停屍間，石台排列整齊，台面上只剩水痕與被沖散的裹屍布。天花板很低，任何聲音都會貼著水面反彈，讓人分不清前後。這裡是恐怖探索與任務房，旅人可尋找指定屍布、收集死亡名冊碎片，也能找到通往王冠墓室的低門。停屍間的回音會模仿隊友聲音，誘使旅人靠近錯誤石台。若旅人點亮長明燈龕取得的藍火，真正出口會在水面倒影裡短暫顯示。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進',
    exits: [
      { direction: 'south', targetRoomId: 'sunken_catacombs_sarcophagus_fleet', description: '低門回到漂流帶' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_crown_crypt', description: '暗門通向王冠墓室' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_chain_bridge', description: '維修梯通向鏈橋' },
    ],
    monsters: [
      { monsterId: 'mourner_wraith', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'blackwater_miremass', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'sluice_gargoyle', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[停]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '回音停屍間的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '回音停屍間附近常有被黑水沖出的墓窟線索。',
      spirit: '回音停屍間保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_crown_crypt: {
    id: 'sunken_catacombs_crown_crypt',
    name: '王冠墓室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_crown_crypt.png',
    imagePrompt: '王冠墓室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '回音停屍間與騎士墓庫之間藏著一座王冠墓室，中央石棺半浸在黑水中，棺蓋上雕著一頂被鎖鏈纏住的王冠。牆上記錄這位死者並非國王，而是第一個試圖控制深潮井的人。這裡是 Boss 級地標與任務決策房，旅人可用騎士徽章、死亡名冊與深潮井水樣拼出真相，選擇封印王冠或取走它作為證據。若貪取王冠碎片，亡靈騎士與骷髏將軍會同時甦醒，墓室水位也會迅速上升。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_echo_mortuary', description: '暗門回到停屍間' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_knight_vault', description: '墓階回到騎士墓庫' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_abyssal_cistern', description: '黑水階梯通向深淵蓄水池' },
    ],
    monsters: [
      { monsterId: 'crownbound_tide_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'drowned_oath_knight', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'sluice_gargoyle', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[冠]',
    mapX: 6,
    mapY: -2,
    guardianHints: {
      creature: '王冠墓室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '王冠墓室附近常有被黑水沖出的墓窟線索。',
      spirit: '王冠墓室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

sunken_catacombs_abyssal_cistern: {
    id: 'sunken_catacombs_abyssal_cistern',
    name: '深淵蓄水池',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_abyssal_cistern.png',
    imagePrompt: '深淵蓄水池 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '沉沒墓窟最深處是一座巨大蓄水池，黑水從四面石渠匯入中央深坑，水面平滑到幾乎看不見流動。池壁鑲著破碎碑文、鐵鏈與倒掛石棺，所有水聲最後都被這裡吞掉。這裡是區域大型事件鉤子與最終地標，旅人可嘗試關閉深潮、淨化黑水，或追查王冠墓室的封印為何失效。任何操作都會改變整座墓窟水位，並引來骷髏將軍、亡靈騎士與水下生物共同反應。若黑水中央浮出王冠倒影，代表深處意志正在等待選擇。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_sarcophagus_fleet', description: '水流回到石棺漂流帶' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_crown_crypt', description: '黑水階梯回到王冠墓室' },
    ],
    monsters: [
      { monsterId: 'crownbound_tide_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'drowned_oath_knight', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'drowned_drain_serpent', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'blackwater_miremass', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[淵]',
    mapX: 5,
    mapY: -3,
    guardianHints: {
      creature: '深淵蓄水池的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '深淵蓄水池附近常有被黑水沖出的墓窟線索。',
      spirit: '深淵蓄水池保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

thundersteppe_rolling_gate: {
    id: 'thundersteppe_rolling_gate',
    name: '雷原入口',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_rolling_gate.png',
    imagePrompt: '雷原入口 in thundersteppe, vast storm grassland gate with rolling thunderclouds, wet bronze trail markers, nomad banners and distant lightning, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '雷原入口立在西境草海邊緣，兩根被雷劈黑的木柱夾住低矮石門，門後草浪在風暴下翻成銀灰色。游牧部族把銅鈴、獸骨與避雷符掛在柱上，旅人通過時能聽見每一枚鈴都用不同節奏警告天候。這裡是雷鳴草原的交通節點與安全整隊處，東面牧道能深入風暴，北面淺溝通往雷雨積水區，南面則能看見野獸踩出的奔行痕。守門人留下乾燥柴束與粗略風向記號，提醒隊伍先檢查金屬裝備、藥草與坐騎，因為草原上的路會被暴雨在一刻鐘內改寫。入口旁還刻著簡短巡邏紀錄，標出最近雷獸、狼群與商隊失蹤的位置，讓新來者能先判斷今日是否適合深入草原。',
    exits: [
      { direction: 'east', targetRoomId: 'thundersteppe_stormgrass_track', description: '銅鈴聲引向雷草牧道' },
      { direction: 'north', targetRoomId: 'thundersteppe_thunder_pool', description: '濕草坡通往雷雨水洼', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'thundersteppe_boar_run', description: '泥痕延伸到野豬衝道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [{ monsterId: 'stormgrass_strider', maxCount: 1, respawnSeconds: 100 }],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '雷原入口的銅鈴忽然同時停住時，附近野獸多半已經伏低。',
      treasure: '入口木柱下常有游牧商隊遺落的避雷符扣。',
      spirit: '雷原入口記得每支進入草原的隊伍，也記得哪些人沒有回來。',
    },
  },

thundersteppe_stormgrass_track: {
    id: 'thundersteppe_stormgrass_track',
    name: '雷草牧道',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_stormgrass_track.png',
    imagePrompt: '雷草牧道 in thundersteppe, trampled storm grass track under blue lightning, nomad hoofprints, rain-slick stones and open prairie horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '雷草牧道被無數蹄印壓成兩條深色長線，草葉尖端帶著細小電光，雨水落下後會沿著葉脈發出短暫藍亮。路旁插著半埋的陶片與繩結，標記出游牧隊伍曾經避開落雷的安全間隔。這段路視野開闊卻沒有真正的遮蔽，旅人能從雲層震動判斷下一波雷暴方向，也能在泥地裡看見雷鷹、野豬與狼群交錯的足跡。若隊伍保持低速，這裡適合偵查周邊事件；若貪快奔跑，金屬護具與濕披風很容易把天上的怒火引到身邊。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_rolling_gate', description: '牧道回到雷原入口' },
      { direction: 'east', targetRoomId: 'thundersteppe_herd_plain', description: '蹄印深入奔獸平原' },
      { direction: 'north', targetRoomId: 'thundersteppe_eagle_roost', description: '斷柱坡升向雷鷹棲柱', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormgrass_strider', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'stormwing_eagle', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[道]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '雷草牧道的草尖若朝同一方向伏倒，狼群常沿反方向包抄。',
      treasure: '牧道陶片下偶爾藏著舊商隊的銅扣與乾糧牌。',
      spirit: '雷草牧道保存著逐水草而居的部族路線記憶。',
    },
  },

thundersteppe_herd_plain: {
    id: 'thundersteppe_herd_plain',
    name: '奔獸平原',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_herd_plain.png',
    imagePrompt: '奔獸平原 in thundersteppe, broad prairie stamped by herds, storm clouds and lightning-lit grass waves, scattered bones and distant beasts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '奔獸平原是雷鳴草原最寬闊的肋骨，整片地面被獸群踏得堅硬，雨水只能在蹄坑裡聚成一面面顫抖小鏡。遠處黑影常像浪潮一樣忽然轉向，那可能是野豬群，也可能是被雷聲驚動的狼群追逐獵物。平原中央留有多條分岔蹄路，能通往游牧營地、骨原與更高的天火台地。隊伍若在這裡停留過久，震動會先從腳底傳來，接著才聽見獸群衝鋒的轟鳴；懂得觀察草浪的人，則能利用同樣震動避開最危險的奔行線。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_stormgrass_track', description: '蹄痕回到雷草牧道' },
      { direction: 'east', targetRoomId: 'thundersteppe_nomad_camp', description: '煙柱指向游牧營地' },
      { direction: 'south', targetRoomId: 'thundersteppe_charged_bonefield', description: '白骨線通往帶電骨原', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormgrass_strider', maxCount: 3, respawnSeconds: 100 },
      { monsterId: 'thunderhoof_boar', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[奔]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '奔獸平原的地面先震後響時，野豬群通常已在衝鋒。',
      treasure: '被踩實的蹄坑邊常能找到掉落的骨哨。',
      spirit: '奔獸平原記得所有遷徙，也記得被雷暴截斷的隊伍。',
    },
  },

thundersteppe_thunder_pool: {
    id: 'thundersteppe_thunder_pool',
    name: '雷雨水洼',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_thunder_pool.png',
    imagePrompt: '雷雨水洼 in thundersteppe, shallow rain pools sparking with lightning, bent reeds, storm reflections and muddy prairie banks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '雷雨水洼沿著入口北側低地展開，許多淺池被暴雨連成銀色碎帶，雷光落在水面時會沿著泥岸跳躍。池邊蘆草彎得很低，葉片上掛滿細小水珠，任何重靴踩入都會驚起一圈藍白火花。這裡適合收集雨水、洗去草原塵土，也適合觀察天空倒影裡的風暴裂縫；但濕地會放大聲音，遠處雷鷹與風暴野獸能準確聽見金屬碰撞。若有人在水洼中央看見不屬於隊伍的影子，通常代表雷暴中的舊魂正在提醒來者改變路線。',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_rolling_gate', description: '濕坡回到雷原入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'thundersteppe_eagle_roost', description: '水邊斜路通往雷鷹棲柱' },
      { direction: 'north', targetRoomId: 'thundersteppe_wind_shrine', description: '蘆草缺口通往風祭小祠', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormwing_eagle', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'stormgrass_strider', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[洼]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '雷雨水洼的倒影若先亮於天空，雷鷹多半已經盤旋。',
      treasure: '水洼泥底偶爾壓著被雨水洗出的銅片。',
      spirit: '雷雨水洼保存著風暴落地前最後一秒的倒影。',
    },
  },

thundersteppe_eagle_roost: {
    id: 'thundersteppe_eagle_roost',
    name: '雷鷹棲柱',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_eagle_roost.png',
    imagePrompt: '雷鷹棲柱 in thundersteppe, tall stone pillars used by thunder eagles, storm nests, blue lightning and sweeping prairie view, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '雷鷹棲柱是一排被古雷劈出的石柱，每根柱頂都堆著枯草、獸骨與發亮的羽毛。風從柱間穿過時會形成尖銳嘯聲，像有看不見的獵鳥正在低空掠過。這裡能俯瞰入口、牧道與北側水洼，也能看見更遠處引雷柱林反射出的白線。攀上石柱可以取得戰術視野，但雷鷹會把任何接近巢位的金屬閃光視為挑釁。若隊伍願意留下獸肉或折斷的箭鏃，偶爾能換來一根帶靜電的羽毛，作為追蹤風向與即將落雷位置的信物。',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_stormgrass_track', description: '柱影落回雷草牧道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'thundersteppe_thunder_pool', description: '濕風回到雷雨水洼' },
      { direction: 'east', targetRoomId: 'thundersteppe_split_totem', description: '斷柱線通往裂木圖騰' },
      { direction: 'north', targetRoomId: 'thundersteppe_eagle_nest_peak', description: '石柱脊線通往雷鷹巢峰', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'stormwing_eagle', maxCount: 3, respawnSeconds: 130 },
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[鷹]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '雷鷹棲柱若落下焦羽，巢主通常已經鎖定入侵者。',
      treasure: '最高石柱背風面常卡著帶電羽毛。',
      spirit: '雷鷹棲柱記得天空獵手與地面部族互相試探的年代。',
    },
  },

thundersteppe_nomad_camp: {
    id: 'thundersteppe_nomad_camp',
    name: '游牧營地',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_nomad_camp.png',
    imagePrompt: '游牧營地 in thundersteppe, storm nomad tents with rain awnings, tether posts, cooking smoke bent by wind and lightning over prairie, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '游牧營地由低矮皮帳、斜插長矛與一圈半埋石塊組成，所有繩索都用濕皮革包住，避免雷火沿著金屬扣亂竄。營地中央的火塘被挖得很深，煙霧貼著草面流動，帶出乾肉、藥草與雨水混合的味道。這裡是冒險隊在草原中段最重要的補給點，牧人會用簡短手勢交易消息，也會警告外人不要在雷鼓石圈敲錯節拍。若旅人幫忙驅散附近獸群或修補避雷樁，營地能提供臨時庇護、風向情報與通往天火台地的安全時段',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_herd_plain', description: '營地西側回到奔獸平原' },
      { direction: 'east', targetRoomId: 'thundersteppe_skyfire_mesa', description: '乾草坡升向天火台地' },
      {
        direction: 'north',
        targetRoomId: 'thundersteppe_split_totem',
        description: '北側繩結路先繞過帳棚避雷樁與濕草圈，才會抵達裂木圖騰，沿途銅鈴會提示風向',
        edgeKind: 'distant_route',
        edgeNote: '游牧營地到裂木圖騰需繞過營地外圈與避雷樁，距離長於相鄰格。',
      },
      {
        direction: 'south',
        targetRoomId: 'thundersteppe_drum_circle',
        description: '南側鼓聲要穿過低草坡、舊祭旗與雨水泥帶後，才會抵達雷鼓石圈，聲音會在草面貼地傳來',
        edgeKind: 'distant_route',
        edgeNote: '游牧營地到雷鼓石圈被低坡與祭旗路隔開，屬於長路徑。',
      },
    ],
    monsters: [{ monsterId: 'stormpack_wolf', maxCount: 1, respawnSeconds: 110 }],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '游牧營地的拴繩若同時繃直，外圍坐騎可能先看見威脅。',
      treasure: '火塘旁的乾燥石縫裡常藏著交易用銅環。',
      spirit: '游牧營地承載著雷鳴草原仍願意接納旅人的一面。',
    },
  },
};
