import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_004: Record<string, RoomDef> = {
celestial_broken_colonnade: {
    id: 'celestial_broken_colonnade',
    name: '破碎柱廊',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_broken_colonnade.png',
    imagePrompt: '破碎柱廊 in celestial_ruins, collapsed colonnade of glowing white pillars, star dust, torn banners and guardian patrols, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '星光走廊西側的柱廊曾由七十二根光柱撐起，如今只剩半數仍在斷續發亮。每根殘柱都刻著一段諸神戰爭紀錄，有些字句被深淵黑痕抹去，只留下焦黑空白。柱廊南端連向墜星廣場，北端通往永恆聖所，是玩家在主線外觀察天界歷史的安全但不平靜路線。巡邏守衛會在光柱亮起時重整隊形。斷柱之間還掛著沒有風也會飄動的戰旗，旗面上逐漸浮現玩家經過的足跡，讓守軍能追蹤入侵者動向。柱廊地面偶爾會投出完整神殿的昔日幻象，玩家可藉此找到隱藏聖所側門。殘柱陰影裡還藏著被撕下的審判符。',
    exits: [
      { direction: 'east', targetRoomId: 'starlight_path', description: '回到星光走廊' },
      { direction: 'south', targetRoomId: 'celestial_starfall_plaza', description: '沿斷柱回到墜星廣場' },
      { direction: 'north', targetRoomId: 'eternal_sanctuary', description: '聖所鐘聲從北方傳來' },
    ],
    monsters: [
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[柱]',
    mapX: 2,
    mapY: 36,
    guardianHints: {
      creature: '守衛會在光柱間傳送短距離，等光柱轉暗再交戰較穩。',
      treasure: '殘柱上的星塵可收集為修復聖物的材料。',
      spirit: '柱廊記錄的戰爭史與深淵裂隙的入侵時間互相呼應。',
    },
  },

celestial_scriptorium: {
    id: 'celestial_scriptorium',
    name: '聖文抄寫室',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_scriptorium.png',
    imagePrompt: '聖文抄寫室 in celestial_ruins, quiet scriptorium with floating quills of light, unfinished holy scrolls, automaton scribes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '神之圖書館北側是一排安靜抄寫桌，羽筆由光構成，仍在無人指引下把失傳神語寫到透明卷軸上。桌面上壓著未完成的末日預言，墨跡在金色與黑色之間反覆變化，似乎無法決定世界結局。幾台神造抄寫機械在桌間巡行，會修正任何被污染的文字，也會攻擊試圖偷走卷軸的人。東側卷軸軌道可看見流明檔案庫光頁，但傳送軌已停擺，需回神之圖書館走光頁階梯。這裡可承接知識、解謎與任務目標。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'south', targetRoomId: 'divine_library', description: '書架階梯回到神之圖書館' },
      { direction: 'north', targetRoomId: 'judgment_hall', description: '成文律法通向審判大廳' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'lumen_scribe_construct', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[抄]',
    mapX: 5,
    mapY: 35,
    guardianHints: {
      creature: '抄寫機械會修復同伴護盾，先打斷羽筆光束。',
      treasure: '未完成預言卷軸可作為後續主線線索。',
      spirit: '抄寫室仍在書寫末日，表示天界命運尚未固定。',
    },
  },

celestial_lumen_archive: {
    id: 'celestial_lumen_archive',
    name: '流明檔案庫',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_lumen_archive.png',
    imagePrompt: '流明檔案庫 in celestial_ruins, archive of suspended light pages and golden memory crystals, divine constructs guarding knowledge, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '流明檔案庫不是普通房間，而是一座由懸浮光頁組成的立體迷宮。每片光頁都記錄一段神祇、天使或凡人英雄的記憶，靠近時會把畫面直接投進腦海。檔案庫中央封著數枚金色記憶晶，記載戰神沉睡前最後下達的命令。深淵污染已在部分光頁邊緣形成黑斑，若不整理檔案，審判大廳的法則會繼續失準。南側可看見聖文抄寫室的卷軸軌道，但資料回流已被鎖住，需回神之圖書館再進入抄寫室。檔案庫東側的光頁偶爾會翻到空白頁，等待玩家把本次試煉的見聞寫入天界記錄。若錯誤觸碰污染光頁，整座檔案庫會把玩家過去的任務選擇重播成審判證據。中央記憶晶也會短暫鎖住出口。',
    exits: [
      { direction: 'west', targetRoomId: 'divine_library', description: '光頁階梯回到神之圖書館' },
      { direction: 'north', targetRoomId: 'judgment_hall', description: '律法檔案指向審判大廳' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'lumen_scribe_construct', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[檔]',
    mapX: 5,
    mapY: 36,
    guardianHints: {
      creature: '檔案守衛會依照光頁記錄預判動作，改變攻擊節奏可打亂它。',
      treasure: '金色記憶晶可能保存戰神弱點或天界密令。',
      spirit: '檔案庫若被污染，天界的審判與歷史都會被改寫。',
    },
  },

celestial_fountain_of_oaths: {
    id: 'celestial_fountain_of_oaths',
    name: '誓約之泉',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_fountain_of_oaths.png',
    imagePrompt: '誓約之泉 in celestial_ruins, sacred fountain of glowing oath water beside angel garden, floating vow ribbons, white flowers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain water, clear lantern light',
    description:
      '天使花園東側的泉池更小也更莊嚴，水面漂浮著由光織成的誓約緞帶，每一條都寫著曾守護天界者的名字。泉水會映出來者最想守護的事物，也會照見未履行的承諾。許多緞帶已被黑色細線纏住，代表有人在深淵入侵時背棄誓言。這裡可作為治療、任務與事件點，但任何虛假的誓言都會喚醒守泉熾天使。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'west', targetRoomId: 'angel_garden', description: '泉水回流到天使花園' },
      { direction: 'north', targetRoomId: 'celestial_seraph_roost', description: '泉畔白階通往熾天使棲台' },
      { direction: 'east', targetRoomId: 'celestial_sundial_court', description: '水光指向日晷庭' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'oathbound_seraph', maxCount: 1, respawnSeconds: 95 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[誓]',
    mapX: 4,
    mapY: 37,
    guardianHints: {
      creature: '熾天使會保護誓約緞帶，避免在泉邊使用範圍攻擊。',
      treasure: '未污染的誓約緞帶可作為淨化任務道具。',
      spirit: '泉水反映承諾，說明天界力量建立在誓約而非單純光明上。',
    },
  },

celestial_seraph_roost: {
    id: 'celestial_seraph_roost',
    name: '熾天使棲台',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_seraph_roost.png',
    imagePrompt: '熾天使棲台 in celestial_ruins, high white roost with layered golden wings, radiant perches, clouds and seraph sentries, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '誓約之泉北方的高台由層層白石羽翼托起，熾天使會在此休整、療傷與監視王座殿。棲台四周漂浮著金色羽片，每一片都能記錄一次守護行動。部分羽片變得灰暗，顯示天使內部也有人在深淵戰爭中墮落。這裡視野極好，能看見天使花園、王座側門與黎明武庫的光線交會，因此守軍反應極快。高台邊緣有幾處空巢，裡面只剩折斷羽軸與黑色灰燼，提示墮落並非個別事件。若收集灰暗羽片並帶回誓約之泉，或許能追查第一位墮落者的行蹤。棲台鐘聲也會召回巡邏中的熾天使，讓戰鬥逐漸升級。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_fountain_of_oaths', description: '白階下到誓約之泉' },
      { direction: 'west', targetRoomId: 'celestial_throne_room', description: '羽橋連向天界王座側廊' },
      { direction: 'east', targetRoomId: 'celestial_sundial_court', description: '晨光落向日晷庭' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 3, respawnSeconds: 85 },
      { monsterId: 'oathbound_seraph', maxCount: 1, respawnSeconds: 95 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[熾]',
    mapX: 4,
    mapY: 38,
    guardianHints: {
      creature: '熾天使會在高台間換位治療，利用柱影可切斷視線。',
      treasure: '灰暗羽片可能記錄墮天使的名字與背叛原因。',
      spirit: '棲台呈現天使守護與墮落並存的狀態。',
    },
  },

celestial_penitent_steps: {
    id: 'celestial_penitent_steps',
    name: '懺悔階',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_penitent_steps.png',
    imagePrompt: '懺悔階 in celestial_ruins, long stair of white stone behind judgment hall, kneeling angel statues, golden dust and dark cracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '審判大廳北方有一段長階，每一階都刻著不同的罪名與救贖誓句。階梯兩側跪著無臉天使像，掌心托著空白石牌，等待來者寫下自己的懺悔。越往上走，天界王座的威壓越明顯，越往下看，深淵裂隙留下的黑色脈絡也越清楚。北側能望見聖物庫結界，但階頂門只接受聖所火光，需從永恆聖所進入。這裡是審判線與王座線之間的過渡房，適合放置道德選擇、任務交付或精英伏擊。每當有人說謊，石牌會自行裂開並召出執行裁決的神造機械。長階最高處還有一塊沒有刻字的石板，似乎等待玩家親手定義新的天界法則。階梯下方則回響著被赦免者的腳步聲與鎖鏈聲。',
    exits: [
      { direction: 'south', targetRoomId: 'judgment_hall', description: '長階回到審判大廳' },
      { direction: 'east', targetRoomId: 'celestial_throne_room', description: '側門通向天界王座' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'corrupted_halo_judge', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'divine_construct', maxCount: 1, respawnSeconds: 600 },
    ],
    mapSymbol: '[懺]',
    mapX: 2,
    mapY: 38,
    guardianHints: {
      creature: '墮天使會嘲弄懺悔石牌，當石牌轉黑時牠們攻勢最強。',
      treasure: '空白石牌可記錄玩家選擇，成為後續審判任務道具。',
      spirit: '懺悔階表示天界審判並非只有懲罰，也保留救贖路徑。',
    },
  },

celestial_reliquary: {
    id: 'celestial_reliquary',
    name: '天界聖物庫',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_reliquary.png',
    imagePrompt: '天界聖物庫 in celestial_ruins, reliquary vault of holy relics, glass cases, broken halos, eternal flame reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '永恆聖所北方的聖物庫被多層金白結界保護，玻璃龕中放著破碎光環、聖釘、祈禱鐘與曾屬於諸神侍者的羽甲。部分龕位已經空了，只留下被強行撬開的痕跡，說明深淵入侵時有人偷走或轉移了關鍵聖物。聖物庫中央有一座小型祭台，能把永恆之火的光引向懺悔階、黎明武庫與王座殿，但西側與東側運送門都被結界鎖住，只作為線索提示。若把受污染裝備放上祭台，結界會顯示需要補齊哪些失落聖物。玻璃龕背面還刻著聖物最後保管者的名字，可延伸成追查遺失聖物的任務。庫房深處有一道只對淨化光芒開啟的門。',
    exits: [
      { direction: 'south', targetRoomId: 'eternal_sanctuary', description: '聖火通道回到永恆聖所' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'corrupted_halo_judge', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 80 },
    ],
    npcs: ['celestial_reliquary_curator'],
    mapSymbol: '[物]',
    mapX: 2,
    mapY: 39,
    guardianHints: {
      creature: '聖物庫機械會啟動玻璃龕反射光束，站在空龕旁可避開連線。',
      treasure: '破碎光環與聖釘可用於淨化或重鑄神器。',
      spirit: '空龕暗示天界內部可能在戰前已經失序。',
    },
  },

celestial_sundial_court: {
    id: 'celestial_sundial_court',
    name: '日晷庭',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_sundial_court.png',
    imagePrompt: '日晷庭 in celestial_ruins, open courtyard with giant golden sundial, moving beams of holy light, white marble and star shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '誓約之泉東側是一座開闊日晷庭，巨大的金色指針懸浮在半空，投下的影子不是時間，而是天界曾經的戰役順序。白石地面被分成十二個光區，每個光區會在不同時刻啟動守護法陣。深淵污染讓其中兩個光區變成黑影，導致巡邏路線出現危險空窗。這裡能作為事件點、定時戰鬥點，也能讓玩家理解天界防線如何運作。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_fountain_of_oaths', description: '水光小徑回到誓約之泉' },
      { direction: 'north', targetRoomId: 'celestial_armory_of_dawn', description: '晨光指向黎明武庫' },
      { direction: 'south', targetRoomId: 'celestial_lumen_archive', description: '影子階梯連向流明檔案庫' },
    ],
    monsters: [
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[晷]',
    mapX: 5,
    mapY: 37,
    guardianHints: {
      creature: '日晷光區會改變守衛抗性，觀察影子位置再選元素。',
      treasure: '金色指針脫落的細片可用於時間或光屬性裝備。',
      spirit: '日晷庭把戰役順序當作時間，顯示天界以使命衡量日夜。',
    },
  },

celestial_armory_of_dawn: {
    id: 'celestial_armory_of_dawn',
    name: '黎明武庫',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_armory_of_dawn.png',
    imagePrompt: '黎明武庫 in celestial_ruins, divine armory of dawn spears, radiant shields, white gold racks and sleeping constructs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '天界王座東側的武庫保存著黎明長槍、光盾與諸神戰車的殘件，所有兵器都被擺放在白金架上，像等待最後一次出征。武庫深處有幾台尚未啟動的神造兵器，胸口核心隨日晷庭光線一明一暗。部分武器架空缺，旁邊留下墮天使羽毛與深淵灼痕。東側聖物運送門仍映出聖物庫光影，但結界只允許聖所火光通過。這裡是精英戰鬥與裝備線核心，也能解釋戰神神槍的來源。武庫地面刻著武器借用誓約，若沒有完成審判或聖所任務，任何兵器都會化成灼熱光束反擊。最深處的空架標著戰神之槍，仍殘留足以壓迫整座房間的戰意。牆上還標示通往觀測所的軍用星軌。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_throne_room', description: '武庫門回到天界王座' },
      { direction: 'south', targetRoomId: 'celestial_sundial_court', description: '晨光坡道下到日晷庭' },
      { direction: 'north', targetRoomId: 'celestial_astral_observatory', description: '武庫後門通往天象觀測所' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 3, respawnSeconds: 600 },
      { monsterId: 'dawn_armory_colossus', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[武]',
    mapX: 5,
    mapY: 38,
    guardianHints: {
      creature: '神造兵器會依照武器架啟動，先破壞空缺架旁的黑痕。',
      treasure: '黎明長槍殘件可作為神器重鑄素材。',
      spirit: '武庫顯示戰神曾為最終戰役留下大量準備。',
    },
  },

celestial_astral_observatory: {
    id: 'celestial_astral_observatory',
    name: '天象觀測所',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_astral_observatory.png',
    imagePrompt: '天象觀測所 in celestial_ruins, celestial observatory of golden astrolabes, star maps, open dome and divine constellations, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '神之間西側的星軌門通向天象觀測所，穹頂整片敞開，能看見不屬於凡間夜空的神聖星座。金色星盤層層旋轉，把深淵裂隙、龍谷墜星坑與天界王座的位置連成一條明亮弧線。觀測所內散落著戰神沉睡前的星圖批註，提到只有當凡人、龍族與天界試煉全部交會時，最終封印才會鬆動。觀測台下方還有一張被燒焦的星圖，標出深淵信標曾試圖對準的天界薄弱點。若調整星盤角度，玩家能短暫看見其他 zone 的危機投影與未來任務線。星盤核心也記錄著戰神甦醒的倒數，並標出封印失敗後的墜落軌道。',
    exits: [
      { direction: 'east', targetRoomId: 'god_chamber', description: '星軌門回到神之間' },
      { direction: 'south', targetRoomId: 'celestial_armory_of_dawn', description: '觀測台階回到黎明武庫' },
      { direction: 'north', targetRoomId: 'celestial_final_seal', description: '星圖終點指向最終封印' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'divine_construct', maxCount: 1, respawnSeconds: 600 },
    ],
    mapSymbol: '[象]',
    mapX: 2,
    mapY: 40,
    guardianHints: {
      creature: '觀測所熾天使會借星盤轉移位置，注意地面光弧。',
      treasure: '星圖批註能揭示最終封印開啟條件。',
      spirit: '觀測所把前面區域全部串成一條命運線。',
    },
  },

celestial_final_seal: {
    id: 'celestial_final_seal',
    name: '最終封印',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_final_seal.png',
    imagePrompt: '最終封印 in celestial_ruins, final divine seal of radiant rings and black abyss cracks, war god light, floating relics, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '神之間東側的光裂縫後方懸著最終封印，數十道金白圓環互相咬合，把一枚黑色裂核鎖在中央。封印周圍漂浮著來自聖所、審判大廳、武庫與觀測所的象徵物，每件都代表解開或加固封印的一種條件。戰神的氣息從南方傳來，與裂核深處的深淵低鳴互相衝撞。這裡是天界遺跡的大型事件鉤子，可承接最終戰後的世界狀態選擇。圓環每轉動一次，凡間、龍谷與深淵的幻象便會輪流浮現，提醒玩家封印結果會影響所有區域。封印中心還有一個空白插槽，大小正好能放入戰神神槍或被淨化的聖物核心。',
    exits: [
      { direction: 'west', targetRoomId: 'god_chamber', description: '光裂縫回到神之間' },
      { direction: 'south', targetRoomId: 'celestial_astral_observatory', description: '星軌下行到天象觀測所' },
    ],
    monsters: [
      { monsterId: 'god_of_war', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'dawn_armory_colossus', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
    ],
    mapSymbol: '[封]',
    mapX: 4,
    mapY: 40,
    guardianHints: {
      creature: '封印守衛會在圓環轉動時獲得護盾，等待裂核脈動後再攻擊。',
      treasure: '封印圓環碎屑可作為最高階神聖材料。',
      spirit: '最終封印不是單純關門，而是決定深淵、天界與凡間如何重新平衡。',
    },
  },

// ─── Area 13: 老舊農場 (Lv 3-8) ─────────────────────────

  old_farmland_crossroads: {
    id: 'old_farmland_crossroads',
    name: '舊農路口',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_crossroads.png',
    imagePrompt: '舊農路口 in old_farmland, entrance traffic node with muddy cart road, leaning signpost, wheat stubble, village path and soft cloudy light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '村外舊農路在此分成數條泥濘小徑，歪斜木牌上還能辨認出穀倉、農舍和舊井的方向。田壟長滿雜草，乾裂車轍裡積著昨夜雨水，遠處傳來田鼠啃咬木板的細碎聲。這裡是老舊農場的入口與安全錨點，旅人可從路口判斷各支線位置，也能沿西側小路回到新手村外圍農田。木牌背面還有被雨水泡軟的分區圖，標出北側荒草麥田、東側鼠患水溝與南側舊車道。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'village_farmland',
        description: '西側小路要沿泥濘車轍繞過兩片荒田，穿過舊籬笆缺口後才回到新手村外圍農田',
        edgeKind: 'distant_route',
        edgeNote: '舊農路口到新手村外圍農田跨過荒田與籬笆缺口，實際路程長於相鄰一格。',
      },
      { direction: 'north', targetRoomId: 'old_farmland_overgrown_field', description: '北側田壟雜草叢生', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'old_farmland_rat_ditch', description: '東邊水溝傳來窸窣聲' },
      { direction: 'south', targetRoomId: 'old_farmland_cart_shortcut', description: '南側舊車道可繞過農田', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'barn_rat_swarm', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[路]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '田鼠會從車轍旁的小洞鑽出，先清理洞口可減少伏擊。',
      treasure: '路口木牌背面夾著一張被雨水泡軟的農場分區圖。',
      spirit: '這裡曾是農夫每日集合分工的地方，木牌上的刻痕記錄著幾十年的收成。',
    },
  },

old_farmland_overgrown_field: {
    id: 'old_farmland_overgrown_field',
    name: '荒草麥田',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_overgrown_field.png',
    imagePrompt: '荒草麥田 in old_farmland, overgrown wheat rows, tall weeds, rat holes, broken irrigation stakes and grey morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '舊麥田多年無人收割，麥稈和野草長到腰間，田埂幾乎被掩埋。風一吹過，草浪下方就會露出一排排田鼠洞，偶爾還有黑鴉停在斷裂灌溉樁上觀察。泥土仍保留肥力，旅人能在草叢中採集野菜或找回遺失農具，但每次翻動田壟都可能驚動藏在根部的鼠群。北側稻草人影子會在草浪間若隱若現，東面塌陷穀倉則傳來乾草與木樑的霉味。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_crossroads', description: '沿田埂回到舊農路口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'old_farmland_scarecrow_watch', description: '田中央有一座破稻草人', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'old_farmland_collapsed_barn', description: '東方可見塌陷穀倉' },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'mildew_harvestling', maxCount: 1, respawnSeconds: 45 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[麥]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '草浪異常晃動處通常藏著田鼠群。',
      treasure: '灌溉樁下壓著一把生鏽但仍可用的鐮刀。',
      spirit: '荒草沒有完全吞沒麥穗，似乎仍有微弱豐收祝福殘留。',
    },
  },

old_farmland_rat_ditch: {
    id: 'old_farmland_rat_ditch',
    name: '鼠患水溝',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_rat_ditch.png',
    imagePrompt: '鼠患水溝 in old_farmland, muddy drainage ditch with rat tunnels, broken boards, weeds and dull water reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '農路東側的排水溝已被泥沙堵住，淺水散發潮濕腐味，兩岸木板被啃出許多缺口。田鼠沿著水溝築巢，把掉落穀粒和破布拖進洞中，讓整段溝渠像一條會蠕動的灰色帶子。旅人可清理堵塞處恢復灌溉，也能在漂浮雜物裡找到小型材料，但必須留意水面下的史萊姆泡泡。西側木板回到路口，東面堵塞水流則指向乾涸灌溉渠。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_crossroads', description: '跨過木板回到路口' },
      { direction: 'north', targetRoomId: 'old_farmland_collapsed_barn', description: '水溝延伸到塌穀倉旁', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'old_farmland_irrigation_channel', description: '堵塞水流通往灌溉渠' },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'ditch_sludge', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[溝]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '水面冒出綠色泡泡時通常代表史萊姆正在靠近。',
      treasure: '堵塞木板後方卡著一只被泥包住的小錢袋。',
      spirit: '排水溝若被清通，整片老農場會短暫恢復過去的水聲。',
    },
  },

old_farmland_scarecrow_watch: {
    id: 'old_farmland_scarecrow_watch',
    name: '稻草人看守地',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_scarecrow_watch.png',
    imagePrompt: '稻草人看守地 in old_farmland, eerie scarecrow in tall wheat, crow feathers, patched coat, dusk field and hidden rat holes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain field, clear lantern light',
    description:
      '荒草麥田中央立著一座破稻草人，草帽被雨水壓歪，外套袖口掛滿黑鴉羽毛。它原本只是農夫用來趕鳥的工具，如今卻總在沒人看見時換個角度，彷彿仍努力守住這片田。稻草人腳下有許多被啄開的田鼠洞和亮晶晶的小物，搜索時可找到作物種子，也可能驚動盤旋的黑鴉群。南側草浪能退回荒草麥田，東面破井在田邊投下陰影。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_overgrown_field', description: '穿過草浪回到荒草麥田', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'old_farmland_well', description: '破井在田邊投下陰影', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'old_farmland_harvest_circle', description: '北側作物排成奇怪圓形', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'straw_watchman', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 35 },
    ],
    mapSymbol: '[草]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會在稻草人影子變長時集體俯衝。',
      treasure: '稻草人口袋裡藏著一包仍可發芽的老種子。',
      spirit: '稻草人像是在執行最後命令，守護已經荒廢的收成。',
    },
  },

old_farmland_collapsed_barn: {
    id: 'old_farmland_collapsed_barn',
    name: '塌陷穀倉',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_collapsed_barn.png',
    imagePrompt: '塌陷穀倉 in old_farmland, collapsed wooden barn with hay piles, broken beams, rat nests and shafts of dusty light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '穀倉屋頂塌了一半，陽光從破洞照進堆滿霉味的乾草與碎木樑。牆邊舊穀袋被咬破，穀粒灑了一地，引來田鼠、黑鴉和偶爾鑽入的野狼。穀倉後門通往南瓜地，東側有一條去舊井的小徑。玩家可在乾草堆裡找材料或任務物品，但不穩的木樑會在戰鬥中掉落。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_overgrown_field', description: '回到荒草麥田' },
      { direction: 'south', targetRoomId: 'old_farmland_rat_ditch', description: '水溝從倉牆旁流過', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'old_farmland_well',
        description: '東側舊井需繞過塌落木樑與濕泥小徑，從穀倉外牆缺口旁才能抵達',
        edgeKind: 'distant_route',
        edgeNote: '塌陷穀倉到舊井需要繞過塌落木樑與濕泥小徑，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'old_farmland_pumpkin_patch',
        description: '北側後門被南瓜藤纏住，必須沿穀倉背牆繞過倒塌屋頂後才進入南瓜地',
        edgeKind: 'distant_route',
        edgeNote: '塌陷穀倉到膨脹南瓜地需要繞過倒塌屋頂與藤蔓，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[倉]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '野狼會從倒塌後門進入，留意乾草堆後方的低吼。',
      treasure: '最高的乾草堆裡可能藏著農夫留下的鑰匙圈。',
      spirit: '穀倉仍保留豐收季的標記，只是歡慶聲已被鼠鳴取代。',
    },
  },

old_farmland_well: {
    id: 'old_farmland_well',
    name: '舊井',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_well.png',
    imagePrompt: '舊井 in old_farmland, mossy stone well beside fields, cracked bucket, dark water, weeds and pale afternoon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '田邊舊井的石圈長滿青苔，吊桶繩索已經斷裂，只剩半截泡在黑水裡。靠近井口能聽見水滴聲和微弱回音，像有人在井底敲擊石壁。井旁泥地有野獸腳印和孩子刻下的舊塗鴉，顯示這裡曾是農場居民取水與閒聊的地方。如今井水被魔化作物根鬚污染，偶爾會冒出綠色史萊姆。西側小徑繞回塌陷穀倉，南側暗渠沿乾裂渠壁接向灌溉渠。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'old_farmland_collapsed_barn',
        description: '西側小徑沿井邊濕泥繞過塌落木樑，穿過穀倉外牆缺口才回到塌陷穀倉',
        edgeKind: 'distant_route',
        edgeNote: '舊井回塌陷穀倉需要沿濕泥小徑繞過塌落木樑，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'old_farmland_irrigation_channel',
        description: '南側井水暗渠先穿過堵塞木閘與泥溝，沿乾裂渠壁下行才接到灌溉渠',
        edgeKind: 'distant_route',
        edgeNote: '舊井到乾涸灌溉渠需要沿堵塞暗渠與乾裂渠壁下行，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'old_farmland_mildew_orchard',
        description: '北側果園隔著被污染的樹根坡，必須沿井畔石階繞上霉斑果樹間入口',
        edgeKind: 'distant_route',
        edgeNote: '舊井到霉斑果園需要沿井畔石階與污染樹根坡上行，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'ditch_sludge', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[井]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '井水變綠時史萊姆會從井壁滑出。',
      treasure: '斷裂吊桶底部卡著一枚舊銅戒。',
      spirit: '井底敲擊聲可能來自被根鬚困住的舊水脈。',
    },
  },

old_farmland_pumpkin_patch: {
    id: 'old_farmland_pumpkin_patch',
    name: '膨脹南瓜地',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_pumpkin_patch.png',
    imagePrompt: '膨脹南瓜地 in old_farmland, oversized pumpkins among vines, gnawed gourds, crow shadows and damp orange light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '穀倉後方的南瓜地長得異常茂盛，藤蔓爬過田埂，幾顆南瓜大得像小木桶。表皮有被啃咬和抓裂的痕跡，裂縫裡散出甜膩又帶霉味的氣息，引來田鼠和黑鴉爭食。南瓜地可作為採集點，玩家能取得食材或任務種子，但過度膨脹的南瓜受到魔力刺激，碰撞時可能噴出刺激性孢子。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'old_farmland_collapsed_barn',
        description: '南側回穀倉要穿過糾結南瓜藤，沿倒塌屋頂邊緣繞回後門缺口旁邊',
        edgeKind: 'distant_route',
        edgeNote: '膨脹南瓜地回塌陷穀倉需要穿過南瓜藤與倒塌屋頂邊緣，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'old_farmland_mildew_orchard',
        description: '東側藤蔓小路需繞過幾顆膨脹南瓜與腐果溝，才會進入霉斑果園內側',
        edgeKind: 'distant_route',
        edgeNote: '膨脹南瓜地到霉斑果園需要沿藤蔓小路繞過腐果溝，屬於長路徑。',
      },
      { direction: 'north', targetRoomId: 'old_farmland_root_cellar', description: '南瓜藤遮住地窖入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'thorn_pumpkin', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'barn_rat_swarm', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[瓜]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '膨脹南瓜破裂會驚動附近田鼠。',
      treasure: '最大南瓜底下壓著一只生鏽小盒。',
      spirit: '南瓜藤像在守住地下入口，似乎被舊農場意志引導。',
    },
  },

old_farmland_mildew_orchard: {
    id: 'old_farmland_mildew_orchard',
    name: '霉斑果園',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_mildew_orchard.png',
    imagePrompt: '霉斑果園 in old_farmland, old orchard with spotted fruit, bent apple trees, crow nests and green mildew haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '舊果園的蘋果樹和梨樹彎得很低，枝頭掛滿帶霉斑的果實，地上腐果吸引黑鴉與田鼠。樹幹上有農夫刻下的採收記號，旁邊卻長出不自然的綠色菌膜，顯示井水污染已蔓延到根部。旅人可在果園採集尚未腐壞的果子或藥用樹皮，也能找到通往蜂箱行列與舊井的小路。西側藤蔓繞回南瓜地，南側樹根坡道會下到青苔井畔。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'old_farmland_pumpkin_patch',
        description: '西側藤蔓小路穿過腐果溝與低矮籬笆，繞回被膨脹南瓜擋住的田埂',
        edgeKind: 'distant_route',
        edgeNote: '霉斑果園回膨脹南瓜地需要穿過腐果溝與籬笆，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'old_farmland_well',
        description: '南側樹根坡道沿污染水痕下滑，經過幾段青苔石階後才回到舊井邊',
        edgeKind: 'distant_route',
        edgeNote: '霉斑果園回舊井需要沿污染樹根坡與青苔石階下行，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'old_farmland_beehive_rows',
        description: '東側蜂箱行列隔著密果樹與嗡鳴蜂道，必須繞過低枝才能靠近入口',
        edgeKind: 'distant_route',
        edgeNote: '霉斑果園到蜂箱行列需要穿過密果樹與蜂道，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'mildew_harvestling', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[果]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會從高枝俯衝，站在樹幹旁可限制角度。',
      treasure: '仍保持金色的果實可能帶有舊祝福。',
      spirit: '果園霉斑沿著水脈擴散，源頭可能不只舊井。',
    },
  },

old_farmland_granary: {
    id: 'old_farmland_granary',
    name: '小糧倉',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_granary.png',
    imagePrompt: '小糧倉 in old_farmland, small grain storage hut with sacks, cracked floor, rat nests and dusty sunbeam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '水渠旁的小糧倉比主穀倉完整，但木門已被啃出洞，地板下傳來密集奔跑聲。牆邊堆著幾袋發霉穀物，最上方的袋子被人重新縫過，像是有人最近翻找過。糧倉可作為任務與資源點，玩家能回收穀袋、種子或老農具；若踩到鬆動地板，藏在底下的田鼠群會立刻湧出。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_irrigation_channel', description: '木梯回到灌溉渠旁' },
      { direction: 'north', targetRoomId: 'old_farmland_abandoned_farmhouse', description: '糧倉後方通往農舍', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'old_farmland_toolshed', description: '東側有一間工具棚' },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 3, respawnSeconds: 30 },
    ],
    mapSymbol: '[糧]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '地板下聲音越密集，代表田鼠越接近出口。',
      treasure: '重新縫過的穀袋裡可能藏著老農夫的帳本。',
      spirit: '小糧倉記錄著歉收年份，最近一頁卻被撕掉了。',
    },
  },

old_farmland_irrigation_channel: {
    id: 'old_farmland_irrigation_channel',
    name: '乾涸灌溉渠',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_irrigation_channel.png',
    imagePrompt: '乾涸灌溉渠 in old_farmland, cracked irrigation channel with weeds, slime puddles, wooden sluice and muddy banks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain fantasy terrain, clear lantern light',
    description:
      '灌溉渠原本把井水送往整片農場，如今大半乾涸，只剩幾處綠色水窪和裂開木閘。渠底的泥土留下不同方向的怪物拖痕，表示史萊姆和田鼠都把這裡當成安全通道。若修好木閘，可以讓水流重新接到南瓜地與果園，也可能把躲在水窪中的史萊姆一起沖出來。西側堵塞水溝回到鼠患水溝，北側渠壁上行可抵達舊井，東面小糧倉仍能看見破木梯。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_rat_ditch', description: '水溝堵塞處在西邊' },
      {
        direction: 'north',
        targetRoomId: 'old_farmland_well',
        description: '北側水渠源頭要沿乾裂渠壁上行，穿過堵塞木閘與泥溝後才回到舊井',
        edgeKind: 'distant_route',
        edgeNote: '乾涸灌溉渠回舊井需要沿乾裂渠壁與堵塞暗渠上行，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'old_farmland_granary', description: '水渠旁有小糧倉' },
    ],
    monsters: [
      { monsterId: 'ditch_sludge', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[渠]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '史萊姆會藏在最綠的水窪中。',
      treasure: '木閘旁有被水沖出的銅製水位牌。',
      spirit: '水渠修復後，農場短暫像重新活過來一樣發出水聲。',
    },
  },

old_farmland_abandoned_farmhouse: {
    id: 'old_farmland_abandoned_farmhouse',
    name: '荒廢農舍',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_abandoned_farmhouse.png',
    imagePrompt: '荒廢農舍 in old_farmland, abandoned farmhouse with sagging porch, dusty table, broken windows and creeping vines, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '農舍木門半開，門廊下的搖椅仍朝著田地，像主人只是暫時離開。屋內桌上留著發黃餐具和一盞熄滅油燈，牆上掛著褪色全家畫像。藤蔓從窗戶爬進來，根鬚壓住地板通往地下根窖的縫隙。這裡是農場任務線的核心房，玩家可調查日記、家書與失蹤農夫留下的線索。日記最後幾頁反覆提到收成圓陣、舊石界碑與一場失敗的豐收儀式，桌腳旁還有被田鼠怪物咬碎的求救信。若玩家先修復水渠或清理根窖，屋內某些隱藏抽屜會變得更容易發現。火爐灰燼裡還壓著半枚焦黑護符，與稻草人胸口的布片圖案相同。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_granary', description: '後門回到小糧倉', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'old_farmland_root_cellar',
        description: '西側屋後根道低矮潮濕，必須繞過塌陷地板與纏牆根鬚才到地下根窖',
        edgeKind: 'distant_route',
        edgeNote: '荒廢農舍到地下根窖需要穿過低矮根道與塌陷地板，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'old_farmland_chicken_coop', description: '窗外就是破雞舍', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 1, respawnSeconds: 30 },
      { monsterId: 'ditch_sludge', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[舍]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '地板下的抓聲通常是田鼠，但偶爾會有史萊姆黏在樑柱上。',
      treasure: '全家畫像後方藏著農舍鑰匙和半張地契。',
      spirit: '餐桌擺設保持離家當晚的樣子，暗示一家人走得非常匆忙。',
    },
  },

old_farmland_beehive_rows: {
    id: 'old_farmland_beehive_rows',
    name: '蜂箱行列',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_beehive_rows.png',
    imagePrompt: '蜂箱行列 in old_farmland, rows of old beehives under fruit trees, buzzing insects, wax frames and golden haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '果園東側排列著十幾只舊蜂箱，木箱裂縫滲出深色蜂蠟，空氣裡充滿嗡鳴與甜味。部分蜂箱已空，部分卻住進過度活躍的野蜂，牠們被霉斑果香吸引，對任何接近者都非常敏感。玩家可採集蜂蠟、蜂蜜或修理蜂箱，也能找到通往防風樹列的窄徑。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'old_farmland_mildew_orchard',
        description: '西側果樹小路要穿過嗡鳴蜂道與密集低枝，才會回到霉斑果園內側',
        edgeKind: 'distant_route',
        edgeNote: '蜂箱行列回霉斑果園需要穿過蜂道與低枝果樹，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'old_farmland_chicken_coop', description: '東側破籬笆通往雞舍' },
      { direction: 'north', targetRoomId: 'old_farmland_windbreak_trees', description: '北側有一排防風樹', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'mildew_harvestling', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[蜂]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會啄破蜂箱引發混亂，先趕走牠們較安全。',
      treasure: '最舊蜂箱底部有一塊凝固金色蜂蠟。',
      spirit: '蜂箱仍按古老節氣排列，可能與豐收儀式有關。',
    },
  },

old_farmland_toolshed: {
    id: 'old_farmland_toolshed',
    name: '破工具棚',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_toolshed.png',
    imagePrompt: '破工具棚 in old_farmland, broken toolshed with rusty hoes, saws, seed boxes, cracked lantern and dust light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '小糧倉東側的工具棚門板只剩一半，裡面掛著生鏽鋤頭、木柄鐮刀、破鋸和幾只標著年份的種子盒。棚頂漏雨，雨水把地面沖出小溝，卻也讓某些舊種子重新發芽。東側可看見舊車道車輪印，但木車堵住棚外岔口，需從舊農路口南側進入車道。這裡適合放置修理、採集與任務道具，工具箱旁有史萊姆怪物黏痕與鼠群咬印，玩家若能找齊工具，也許能重開灌溉渠或修復農場捷徑。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_granary', description: '回到小糧倉' },
      { direction: 'south', targetRoomId: 'old_farmland_fill_n4_1', description: '南側廢棄農道通往破雞舍' },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 1, respawnSeconds: 30 },
      { monsterId: 'ditch_sludge', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[棚]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '工具箱裡有史萊姆黏液痕，打開前先聽聲音。',
      treasure: '年份最早的種子盒裡有保存良好的古老種子。',
      spirit: '工具棚記錄農夫日常，修好它等於修復農場的第一步。',
    },
  },

old_farmland_moonlit_pasture: {
    id: 'old_farmland_moonlit_pasture',
    name: '月光牧草地',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_moonlit_pasture.png',
    imagePrompt: '月光牧草地 in old_farmland, quiet pasture with broken fence, silver grass, wolf tracks and pale moonlit clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '農場東北角是一片被破柵欄圍住的牧草地，草葉在白天也泛著微弱銀光，像記住了長年照落的月色。地上有羊蹄印、野狼腳印和拖曳乾草的痕跡，顯示過去圈養的牲畜早已不在。南側能看見破雞舍的屋頂，北側能望見舊石界碑，但牧草地邊界的柵門都已塌死，實際需從防風樹列繞行。這裡視野開闊，適合低等精英遭遇；玩家可沿牧草地調查防風樹列與收成儀式圈線索。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_windbreak_trees', description: '草坡回到防風樹列' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'mildew_harvestling', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[牧]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '野狼會沿破柵欄繞側，背靠水槽可避免被包夾。',
      treasure: '銀色草叢裡有被遺落的牧鈴。',
      spirit: '牧草地像被固定在某個月夜，可能與北方石界碑有關。',
    },
  },

old_farmland_root_cellar: {
    id: 'old_farmland_root_cellar',
    name: '地下根窖',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_root_cellar.png',
    imagePrompt: '地下根窖 in old_farmland, underground root cellar with shelves, turnips, creeping roots, damp lantern light and slime puddles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain root, clear lantern light',
    description:
      '地下根窖藏在南瓜藤與農舍地板下方，入口木門半陷在濕土裡，門縫透出腐根與冷泥味。階梯兩側堆著舊蘿蔔箱、破陶罐和被啃空的麻袋，牆面還留有農夫用粉筆記下的儲糧日期。根窖深處盤著受污染的作物根鬚，偶爾會把地面上的南瓜藤拉緊。這裡是農舍線索與危險地點，南側可回南瓜地，北面則接近荒廢農舍的地板裂縫。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'old_farmland_abandoned_farmhouse',
        description: '東側低矮根道要穿過潮濕根鬚與塌陷地板下方，才能回到荒廢農舍後門',
        edgeKind: 'distant_route',
        edgeNote: '地下根窖回荒廢農舍需要穿過潮濕根道與塌陷地板，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'old_farmland_pumpkin_patch', description: '低矮土洞通往南瓜地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'ditch_sludge', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'barn_rat_swarm', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[窖]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '水窪沒有倒影時通常藏著史萊姆。',
      treasure: '密封箱裡可能保存農夫一家最後的求救信。',
      spirit: '根鬚向著收成儀式圈生長，像在吸取那裡的力量。',
    },
  },

old_farmland_chicken_coop: {
    id: 'old_farmland_chicken_coop',
    name: '破雞舍',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_chicken_coop.png',
    imagePrompt: '破雞舍 in old_farmland, ruined chicken coop with straw nests, broken wire, feathers, rats and cloudy farmyard light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '農舍東側的雞舍早已沒有家禽，只剩破網、乾草窩和滿地羽毛。幾個巢箱裡堆著田鼠偷來的穀粒，屋樑上則有黑鴉築巢。雞舍連接工具棚和蜂箱行列，東側破柵欄後可望見牧草地但洞口太窄無法直接通過。玩家可搜索巢箱取得小材料，但要注意腳下破網會絆住移動。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_abandoned_farmhouse', description: '窗邊小路回到農舍', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'old_farmland_fill_n4_1', description: '北側廢棄農道回到工具棚' },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[雞]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會從屋樑投下碎木，先清理高處較安全。',
      treasure: '最深巢箱裡藏著一枚被羽毛包住的舊徽章。',
      spirit: '雞舍仍留有每天清晨開門的刮痕，顯示農場曾非常規律。',
    },
  },

old_farmland_windbreak_trees: {
    id: 'old_farmland_windbreak_trees',
    name: '防風樹列',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_windbreak_trees.png',
    imagePrompt: '防風樹列 in old_farmland, row of old windbreak trees, tangled roots, crow nests, fence shadows and green field haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain field, clear lantern light',
    description:
      '農場北側種著一排老防風樹，樹幹被歲月吹得向同一方向傾斜，根部盤住石界碑與蜂箱小路。鳥巢、乾草和舊繩子掛在枝間，黑鴉會利用樹影遮蔽行蹤。這裡能阻擋平原強風，也把農場和更北方荒野分隔開來。玩家可調查根部裂縫，找到石界碑與牧草地之間的隱藏路線。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_beehive_rows', description: '樹根小路回到蜂箱行列', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'old_farmland_moonlit_pasture', description: '樹影外是月光牧草地' },
      { direction: 'north', targetRoomId: 'old_farmland_stone_marker', description: '樹根纏住一座石界碑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'straw_watchman', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[樹]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '黑鴉會在樹影最密處伏擊。',
      treasure: '樹根下埋著一串生鏽風鈴。',
      spirit: '防風樹列像一堵活牆，守住農場最後邊界。',
    },
  },

old_farmland_stone_marker: {
    id: 'old_farmland_stone_marker',
    name: '舊石界碑',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_stone_marker.png',
    imagePrompt: '舊石界碑 in old_farmland, ancient boundary stone wrapped in roots, faded harvest runes, pasture wind and crow shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '防風樹列北端立著一座舊石界碑，碑面刻著農場邊界、灌溉權和豐收祝禱。字跡大多被苔蘚覆蓋，但仍能看出幾個近期被重新描深的符號。東側能望見月光牧草地，北側倒伏草痕與野狼怪物足跡指向收成圓陣，但界碑周圍根鬚封住兩條舊路，需從防風樹列或稻草人看守地繞行。這裡是探索點與事件點，可揭示農場荒廢並非單純天災，而與收成儀式有關。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_windbreak_trees', description: '樹根小路回到防風樹列', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'straw_watchman', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[碑]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '野狼會沿倒伏草圈奔跑，預判牠們會回到界碑旁。',
      treasure: '苔蘚下刻著一段舊農場地契密語。',
      spirit: '界碑曾用來界定土地，如今像在界定某種封印範圍。',
    },
  },

old_farmland_harvest_circle: {
    id: 'old_farmland_harvest_circle',
    name: '收成圓陣',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_harvest_circle.png',
    imagePrompt: '收成圓陣 in old_farmland, eerie crop circle of wheat and pumpkins, old harvest runes, scarecrow shadows and moonlit soil, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '農場最北側的作物並非自然生長，而是被排列成一個巨大的收成圓陣。麥穗、南瓜藤、果枝和草繩交錯成古老符號，中心插著一把生鏽鐮刀。圓陣周圍安靜得不自然，連黑鴉都只敢停在邊緣，亡靈怪物的冷霧貼著麥穗流動。東側倒伏草痕可對應舊石界碑，但根鬚封住界碑方向，需從稻草人看守地重新繞回。這裡是老舊農場的大型事件鉤子，可能與豐收祝福失控、農夫失蹤和魔化作物來源有關。玩家若在此完成調查，能串起舊井、根窖、界碑與稻草人的線索。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_scarecrow_watch', description: '草影回到稻草人看守地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'harvest_wight', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'straw_watchman', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[陣]',
    mapX: 1,
    mapY: 4,
    guardianHints: {
      creature: '圓陣中心的鐮刀反光時，附近怪物會一起被吸引過來。',
      treasure: '生鏽鐮刀可能是啟動或關閉豐收祝福的關鍵道具。',
      spirit: '收成圓陣像一場沒有完成的儀式，等待有人決定祝福要延續還是停止。',
    },
  },

old_farmland_cart_shortcut: {
    id: 'old_farmland_cart_shortcut',
    name: '舊車道捷徑',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_cart_shortcut.png',
    imagePrompt: '舊車道捷徑 in old_farmland, shortcut cart track with broken wagon, muddy ruts, low fences and village road light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain village, clear lantern light',
    description:
      '路口南側的舊車道繞過大部分田地，兩側低矮籬笆倒了一半，泥地上還留著深深車輪印。斷掉的木車橫在路中央，車斗裡堆著空麻袋和幾只被啃破的木箱。東側車輪印指向工具棚但木車卡住岔口，需回舊農路口再走小糧倉路線。這裡是交通與捷徑節點，玩家清理木車後可快速往返路口和村外小路，也能作為低等玩家撤退時的安全路線。',
    exits: [
      { direction: 'north', targetRoomId: 'old_farmland_crossroads', description: '車道回到舊農路口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'village_outskirts',
        description: '西側舊車道先繞過斷木車與低矮籬笆，穿過荒田邊界後才回到村外小路',
        edgeKind: 'distant_route',
        edgeNote: '舊車道捷徑回村外小路需要跨過荒田邊界與斷木車，實際路程長於相鄰一格。',
      },
    ],
    monsters: [
      { monsterId: 'barn_rat_swarm', maxCount: 1, respawnSeconds: 30 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[捷]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '木車底下常有田鼠躲藏，推車前先敲擊木板。',
      treasure: '破木箱裡可能還有未送出的作物訂單。',
      spirit: '捷徑保留農場與村莊的連結，清理它能讓老路重新被人使用。',
    },
  },

// ─── Area 14: 低語溪谷 (Lv 5-12) ────────────────────────

  whispering_valley_entrance: {
    id: 'whispering_valley_entrance',
    name: '溪谷入口',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_entrance.png',
    imagePrompt: '溪谷入口 in whispering_valley, narrow valley entrance with clear creek, leaning trail marker, reeds and cool morning mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain valley, clear lantern light',
    description:
      '老舊農場北方的小徑在兩面岩壁間收窄，清澈溪水沿石縫流出，風穿過谷口時會發出像低聲說話的聲音。入口木牌標著釣點、草藥坡與瀑布方向，是低語溪谷的交通節點與安全錨點。玩家可在此確認退路，也能沿南側小徑回到老農場界碑。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'old_farmland_stone_marker',
        description: '南向小徑沿岩壁外緣回到老農場石界碑，路程比相鄰房間更長，谷風會提醒玩家已離開溪谷',
        edgeKind: 'distant_route',
        edgeNote: '溪谷入口南側需沿岩壁外緣走回廢田界碑，實際路程長於相鄰一格。',
      },
      { direction: 'north', targetRoomId: 'whispering_valley_reed_bank', description: '溪水流向蘆葦岸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'whispering_valley_mossy_footbridge', description: '苔石小橋跨過溪水' },
      { direction: 'west', targetRoomId: 'whispering_valley_ranger_post', description: '西側木棚像巡林哨站' },
    ],
    monsters: [
      { monsterId: 'clearwater_slime', maxCount: 1, respawnSeconds: 35 },
      { monsterId: 'reedbank_lurker', maxCount: 1, respawnSeconds: 40 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '溪水邊的綠色泡泡常是史萊姆出沒的訊號。',
      treasure: '入口木牌背面刻著溪谷老巡林人的記號。',
      spirit: '谷口的低語聲像是在警告外來者不要驚擾溪水。',
    },
  },

whispering_valley_reed_bank: {
    id: 'whispering_valley_reed_bank',
    name: '蘆葦岸',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_reed_bank.png',
    imagePrompt: '蘆葦岸 in whispering_valley, creek bank of tall reeds, dragonflies, muddy animal tracks and filtered green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain fantasy terrain, clear lantern light',
    description:
      '溪谷入口北側長滿及肩蘆葦，細長葉片在風裡彼此摩擦，像無數人在輕聲交談。泥岸上留著田鼠、野狼和巡林靴印，溪面則偶爾泛起史萊姆經過的圓形波紋。玩家可採集蘆葦、尋找魚餌或沿岸追蹤腳印，但視線會被草葉遮住。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_entrance', description: '沿岸回到溪谷入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'whispering_valley_clear_stream', description: '溪水變得更清澈', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'whispering_valley_fishing_bend', description: '水流轉向釣魚灣' },
    ],
    monsters: [
      { monsterId: 'reedbank_lurker', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'clearwater_slime', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[葦]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '蘆葦突然分開時通常有田鼠或史萊姆穿過。',
      treasure: '最密的蘆葦叢裡藏著一枚舊魚鉤。',
      spirit: '蘆葦會把谷風放大成低語，是溪谷名字的來源之一。',
    },
  },

whispering_valley_clear_stream: {
    id: 'whispering_valley_clear_stream',
    name: '清溪淺灘',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_clear_stream.png',
    imagePrompt: '清溪淺灘 in whispering_valley, shallow clear stream over smooth stones, minnows, slime bubbles and bright green valley light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain valley, clear lantern light',
    description:
      '溪水在此變淺，能看見鵝卵石、魚苗和幾片被水流打磨得發亮的藥草葉。淺灘兩側岩壁回音很強，腳步聲會被放大成遠處低語。玩家可在這裡釣小魚、清洗採集物或搜索水底亮點，但過於靠近水泡會驚動潛伏的史萊姆。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_reed_bank', description: '水流回到蘆葦岸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'whispering_valley_echo_rocks', description: '上游有回音岩群', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'whispering_valley_herb_slope', description: '東側斜坡長滿草藥' },
    ],
    monsters: [
      { monsterId: 'clearwater_slime', maxCount: 3, respawnSeconds: 35 },
    ],
    mapSymbol: '[溪]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '水泡連成一線時，史萊姆正沿淺灘滑行。',
      treasure: '水底最亮的鵝卵石可能是天然冰晶。',
      spirit: '淺灘回音會重複玩家最後一句話，像溪谷在回應。',
    },
  },

whispering_valley_mossy_footbridge: {
    id: 'whispering_valley_mossy_footbridge',
    name: '苔石小橋',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_mossy_footbridge.png',
    imagePrompt: '苔石小橋 in whispering_valley, moss-covered stone footbridge over creek, ferns, wet rocks and soft mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '一座低矮石橋橫跨溪水，橋面長滿濕滑青苔，欄杆上刻著巡林人留下的箭頭。橋下水聲被石拱壓成低沉耳語，偶爾會把上游的動靜提前送到腳邊。這裡是溪谷東西兩側的交通節點，玩家可從橋上前往草藥坡、冷泉或回到谷口。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_entrance', description: '石橋西側回到入口' },
      { direction: 'east', targetRoomId: 'whispering_valley_cold_spring', description: '橋東有冷泉冒霧' },
      { direction: 'south', targetRoomId: 'whispering_valley_fishing_bend', description: '南側溪岸小徑通往釣魚灣' },
    ],
    monsters: [
      { monsterId: 'clearwater_slime', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'echo_wisp', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '青苔突然隆起時可能是史萊姆偽裝。',
      treasure: '橋欄缺口裡塞著巡林人的舊哨笛。',
      spirit: '橋拱會把溪水聲變成像人聲的警告。',
    },
  },

whispering_valley_herb_slope: {
    id: 'whispering_valley_herb_slope',
    name: '草藥斜坡',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_herb_slope.png',
    imagePrompt: '草藥斜坡 in whispering_valley, sloped bank with medicinal herbs, dew, small flowers, spider threads and green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '溪谷東坡長滿薄荷、冷葉草與銀邊蕨，清晨露珠讓整面斜坡閃閃發亮。草藥之間有細細蛛絲和小獸腳印，顯示這裡不只有採集者來過。玩家可按藥性採集草藥，也能順著坡頂前往回音岩群或冰蕨叢；若採錯未成熟草株，附近蜘蛛會被震動吸引。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_clear_stream', description: '斜坡下方是清溪淺灘' },
      { direction: 'north', targetRoomId: 'whispering_valley_fishing_bend', description: '北側溪岸小徑回到釣魚灣' },
      { direction: 'south', targetRoomId: 'whispering_valley_fallen_log', description: '南側採集坡面通往倒木淺橋' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'ice_fern_weaver', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[藥]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '蛛絲上露珠密集處常有蜘蛛伏著。',
      treasure: '銀邊蕨下可能長著稀有冷葉草。',
      spirit: '草藥依溪水溫度分布，說明谷中有冷泉暗流。',
    },
  },

whispering_valley_fishing_bend: {
    id: 'whispering_valley_fishing_bend',
    name: '釣魚灣',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_fishing_bend.png',
    imagePrompt: '釣魚灣 in whispering_valley, quiet bend of creek with flat stones, fishing line, reeds and silver fish ripples, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '溪水在蘆葦岸東側轉出一個平靜彎灣，幾塊扁平石頭正好能坐下垂釣。水面有銀色魚影穿梭，岸邊還插著被遺忘的竹釣竿。這裡是明顯資源點，玩家可釣魚、找魚餌或修補舊竿，但腐木下的田鼠和水邊史萊姆會干擾安靜作業。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_reed_bank', description: '回到蘆葦岸' },
      { direction: 'east', targetRoomId: 'whispering_valley_mist_pool', description: '彎灣深處起了霧', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'whispering_valley_mossy_footbridge', description: '北側溪岸小徑回到苔石小橋' },
      { direction: 'south', targetRoomId: 'whispering_valley_herb_slope', description: '南側濕石小徑通往草藥斜坡' },
    ],
    monsters: [
      { monsterId: 'reedbank_lurker', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'clearwater_slime', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[釣]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '釣線突然繃直可能不是魚，而是史萊姆拖動。',
      treasure: '舊竹竿握柄裡藏著一枚小魚形護符。',
      spirit: '釣魚灣的安靜和其他低語聲形成反差，像溪谷特意留下喘息處。',
    },
  },

whispering_valley_echo_rocks: {
    id: 'whispering_valley_echo_rocks',
    name: '回音岩群',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_echo_rocks.png',
    imagePrompt: '回音岩群 in whispering_valley, clustered echo rocks beside stream, carved marks, moss, birds and sound wave mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '上游岩壁崩落形成一片奇特岩群，每塊岩石都能把聲音折成不同方向。站在中央說話，回音會像從四面八方的陌生人嘴裡傳回。岩面刻有巡林記號與更古老的溪谷符號，玩家可藉回音尋找隱藏通道，也可能被黑鴉和野狼利用聲音誤導。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_clear_stream', description: '下坡回到清溪淺灘', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'whispering_valley_ice_fern_patch',
        description: '往東的冷聲穿過折音石縫與冷霧岔路，最後接到冰蕨叢，需要靠霜痕辨路',
        edgeKind: 'distant_route',
        edgeNote: '回音岩群東側要穿過折音石縫與冷霧岔路，才會接到冰蕨叢。',
      },
      {
        direction: 'north',
        targetRoomId: 'whispering_valley_waterfall_base',
        description: '循上游回音繞過多塊崩落岩，才會抵達瀑布底部，途中回聲常讓方向感混亂',
        edgeKind: 'distant_route',
        edgeNote: '回音岩群北側需循著上游水聲繞過多塊崩落岩，瀑布並非相鄰一格。',
      },
    ],
    monsters: [
      { monsterId: 'echo_wisp', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'creek_wolf_stalker', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[音]',
    mapX: 0,
    mapY: 3,
    guardianHints: {
      creature: '野狼會利用回音繞後，觀察真正的腳印比聽聲音可靠。',
      treasure: '最大岩石底部有一枚被回音震出的冰晶。',
      spirit: '古老符號像是在教人用聲音與溪谷溝通。',
    },
  },

whispering_valley_willow_camp: {
    id: 'whispering_valley_willow_camp',
    name: '柳樹營地',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_willow_camp.png',
    imagePrompt: '柳樹營地 in whispering_valley, small camp under willow trees, cold fire pit, bedroll, ranger supplies and creek mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain camp, clear lantern light',
    description:
      '冷泉北側有一處臨時營地，幾棵柳樹把枝條垂成天然簾幕，冷掉的火坑旁放著巡林人的舊背包和簡易草藥架。營地看似安全，卻有被匆忙翻找過的痕跡，地上留下朝蜘蛛洞方向的怪物拖痕。玩家可在此取得任務線索、補給或休息資訊，也能通往山谷東側支線。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'whispering_valley_cold_spring',
        description: '西側柳枝小路繞過垂枝與冷泉外圍後才回到泉邊，濕土與拖痕會顯示這是長路',
        edgeKind: 'distant_route',
        edgeNote: '柳樹營地西側小路會繞過低垂柳枝與冷泉外圍，實際距離長於一格。',
      },
      {
        direction: 'north',
        targetRoomId: 'whispering_valley_spider_grotto',
        description: '北側拖痕穿過灌木與岩縫回到蛛網岩洞',
      },
      { direction: 'south', targetRoomId: 'whispering_valley_old_shrine', description: '南側營地後方有舊石龕' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'ice_fern_weaver', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '蜘蛛拖痕越新，代表伏擊點越近。',
      treasure: '舊背包裡有未寄出的巡林報告。',
      spirit: '柳樹像刻意遮住營地，保護曾在此避難的人。',
    },
  },
};
