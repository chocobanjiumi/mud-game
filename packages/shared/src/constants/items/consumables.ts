import type { ItemDef } from '../../types/item.js';

export const CONSUMABLES_ITEM_DEFS: Record<string, ItemDef> = {
black_fortress_ration: {
    id: 'black_fortress_ration', name: '黑堡軍糧', type: 'consumable',
    description: '魔族軍隊壓成磚狀的高熱量軍糧，外層包著防火黑布。味道辛辣粗糙，但能快速補回血氣，常見於兵營與影市補給包。',
    buyPrice: 2600, sellPrice: 1300,
    stackable: true, maxStack: 20, levelReq: 30, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 420 },
    sourceTags: ['drop', 'shop'], zoneTags: ['demon_territory'],
  },

scaleforge_broth: {
    id: 'scaleforge_broth', name: '鱗鍛熱湯', type: 'consumable',
    description: '龍鱗鍛台旁以礦物泉水與火玻璃粉熬成的熱湯，入口灼熱卻能快速恢復體力。龍騎士在長途巡空前會喝下一小碗。',
    buyPrice: 3600, sellPrice: 1800,
    stackable: true, maxStack: 20, levelReq: 40, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 560 },
    sourceTags: ['shop', 'drop'], zoneTags: ['dragon_valley'],
  },

abyssal_stabilizer: {
    id: 'abyssal_stabilizer', name: '裂隙穩定劑', type: 'consumable',
    description: '用虛空碎片粉末、封印錨鏈灰與微量龍鱗粉調成的深紫色藥劑。喝下後能迅速恢復體力，並讓感官短暫適應錯亂重力。',
    buyPrice: 4800, sellPrice: 2400,
    stackable: true, maxStack: 20, levelReq: 50, rarity: 'epic',
    useEffect: { type: 'heal_hp', value: 680 },
    sourceTags: ['shop', 'drop'], zoneTags: ['abyss_rift'],
  },

sanctum_light_broth: {
    id: 'sanctum_light_broth', name: '聖所光湯', type: 'consumable',
    description: '以永恆之火外焰、誓約泉水與天界碎片粉末調成的金白熱湯。入口近乎無味，卻能迅速恢復體力並短暫穩住被污染的感官。',
    buyPrice: 5600, sellPrice: 2800,
    stackable: true, maxStack: 20, levelReq: 55, rarity: 'epic',
    useEffect: { type: 'heal_hp', value: 760 },
    sourceTags: ['shop', 'drop'], zoneTags: ['celestial_ruins'],
  },

// ============ 消耗品 ============
  small_hp_potion: {
    id: 'small_hp_potion', name: '小型生命藥水', type: 'consumable',
    description: '一瓶散發著淡淡草藥香氣的紅色藥水。輕輕搖晃時，液體中閃爍著微弱的光芒。飲下後能迅速恢復傷口，是冒險者隨身必備的保命良藥。', buyPrice: 20, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'heal_hp', value: 50 },
  },

medium_hp_potion: {
    id: 'medium_hp_potion', name: '中型生命藥水', type: 'consumable',
    description: '比小型藥水更為濃稠的生命藥水，深紅色的液體散發著甘甜的花香。一口飲下，溫暖的能量從胃部向全身擴散，傷口以肉眼可見的速度癒合。', buyPrice: 60, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'heal_hp', value: 150 },
  },

large_hp_potion: {
    id: 'large_hp_potion', name: '大型生命藥水', type: 'consumable',
    description: '以珍稀藥材精心熬製的高純度生命藥水，瓶身散發著耀眼的金紅色光芒。飲用後強大的治癒之力瞬間貫穿全身，即使是瀕死的重傷也能迅速恢復。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'heal_hp', value: 400 },
  },

small_mp_potion: {
    id: 'small_mp_potion', name: '小型資源藥水', type: 'consumable',
    description: '一瓶幽藍色的魔力藥水，液面上漂浮著細碎的星光微粒。飲用後一股清涼的力量從喉嚨流向丹田，讓枯竭的精神力重新充盈。', buyPrice: 25, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'heal_mp', value: 30 },
  },

medium_mp_potion: {
    id: 'medium_mp_potion', name: '中型資源藥水', type: 'consumable',
    description: '以月光花露調製的資源藥水，靛藍色的液體在瓶中微微旋轉。飲用後如同沐浴在月光之下，疲憊的心靈得到深層的滋養與恢復。', buyPrice: 75, sellPrice: 37,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'heal_mp', value: 80 },
  },

large_mp_potion: {
    id: 'large_mp_potion', name: '大型資源藥水', type: 'consumable',
    description: '以深淵水晶粉末與天界露水混合熬製的頂級資源藥水，瓶中的液體呈現夢幻般的極光色彩。飲用瞬間，洶湧的魔力之潮席捲全身，讓人重新充滿戰鬥的力量。', buyPrice: 180, sellPrice: 90,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'heal_mp', value: 200 },
  },

antidote: {
    id: 'antidote', name: '解毒劑', type: 'consumable',
    description: '一瓶翠綠色的解毒藥劑，散發著刺鼻的藥草氣味。據說是以七種解毒草藥熬製而成，飲下後體內的毒素會迅速被中和分解。', buyPrice: 15, sellPrice: 7,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'buff', value: 0, duration: 0 },
  },

status_cure: {
    id: 'status_cure', name: '淨身藥露', type: 'consumable',
    description: '一瓶透明偏銀的藥露，瓶口封著乾燥薄荷與白鹽紙籤。藥師通常建議在中毒、麻痺或受黑暗濁氣影響後立刻飲用；它的味道苦澀，只能作為緊急淨化輔助，不能取代完整治療。', buyPrice: 35, sellPrice: 17,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'buff', value: 0, duration: 0 },
  },

phoenix_feather: {
    id: 'phoenix_feather', name: '鳳凰之羽', type: 'consumable',
    description: '一片散發著金紅色光芒的神鳥羽毛，握在手中能感受到溫暖而強大的生命力脈動。傳說鳳凰浴火重生時掉落的羽毛，能將瀕死之人從死亡的邊緣拉回。', buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 10, levelReq: 1,
    useEffect: { type: 'heal_hp', value: 30 },
  },

// ============ 增益藥水 ============
  strength_potion: {
    id: 'strength_potion', name: '力量藥水', type: 'consumable',
    description: '猩紅色的濃稠藥水，散發著鐵鏽般的金屬氣味。飲下後肌肉會微微脹痛，隨即感受到力量在體內奔湧，攻擊力大幅提升。效果持續5回合。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_atk', value: 10, duration: 5 },
  },

wisdom_potion: {
    id: 'wisdom_potion', name: '智慧藥水', type: 'consumable',
    description: '以智慧之花的花蜜為主要原料的淡紫色藥水，飲用後頭腦瞬間變得清明。魔力的流動更加順暢，施法的威力隨之增強。效果持續5回合。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_matk', value: 10, duration: 5 },
  },

agility_potion: {
    id: 'agility_potion', name: '敏捷藥水', type: 'consumable',
    description: '細頸玻璃瓶中盛著淡綠藥液，瓶底沉著疾風蜥蜴尾鱗粉，搖晃時會拉出旋風般的銀線。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_dodge', value: 15, duration: 5 },
  },

fortitude_potion: {
    id: 'fortitude_potion', name: '堅韌藥水', type: 'consumable',
    description: '土褐藥液像細沙般沉在方瓶底部，瓶身綁著鐵片護符。飲下後皮膚會短暫泛出石紋。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_def', value: 10, duration: 5 },
  },

luck_potion: {
    id: 'luck_potion', name: '幸運藥水', type: 'consumable',
    description: '金色藥液中漂著星形碎晶，搖晃時會敲出清脆聲響。飲下後感官像被微光牽引。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_crit', value: 10, duration: 5 },
  },

allstat_potion: {
    id: 'allstat_potion', name: '全能藥水', type: 'consumable',
    description: '七彩藥液在圓瓶中分成細層，瓶塞繫著金線。飲下後短時間喚醒全身潛力。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'buff_all', value: 5, duration: 5 },
  },

// ============ 傳送道具 ============
  return_scroll: {
    id: 'return_scroll', name: '回城卷軸', type: 'consumable',
    description: '一張泛黃的羊皮卷軸，上面繪著複雜的傳送魔法陣。撕開卷軸的瞬間，強烈的空間魔力將使用者包裹，下一刻便回到了熟悉的村莊廣場。', buyPrice: 50, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'teleport_home', value: 0 },
  },

teleport_stone: {
    id: 'teleport_stone', name: '傳送石', type: 'consumable',
    description: '掌心大小的灰藍符石，表面刻有折線座標。捏碎後會沿記憶標記拉開傳送光門，只能返回已記錄過的安全位置。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'teleport_mark', value: 0 },
  },

memory_crystal: {
    id: 'memory_crystal', name: '記憶水晶', type: 'consumable',
    description: '透明晶簇內漂著一點銀光，可封存腳下地點的魔力痕跡，供傳送石日後追索。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'mark_location', value: 0 },
  },

// ============ 食物/料理 ============
  grilled_meat: {
    id: 'grilled_meat', name: '烤肉', type: 'consumable',
    description: '在營火上烤得滋滋作響的鮮嫩肉排，表面焦黃酥脆，內裡多汁鮮美。撕下一塊放入口中，肉香與油脂的鮮甜在舌尖炸開，讓疲憊的身體逐漸恢復活力。', buyPrice: 30, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'food_hp', value: 15, duration: 3 },
  },

stew: {
    id: 'stew', name: '燉湯', type: 'consumable',
    description: '陶碗裡盛著濃厚肉菜燉湯，表面浮著胡椒油光與切碎根莖，熱氣帶著鹽草香。', buyPrice: 60, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_hp_resource', value: 10, duration: 3 },
  },

adventure_bento: {
    id: 'adventure_bento', name: '冒險者便當', type: 'consumable',
    description: '木盒便當用麻繩綁緊，裡面排著烤肉片、鹽飯團與醃根菜，盒蓋烙有公會小徽記。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_atk', value: 3, duration: 5 },
  },

magic_dessert: {
    id: 'magic_dessert', name: '魔法甜點', type: 'consumable',
    description: '藍紫糖霜覆在小塔糕上，頂端嵌著細碎法晶，切面會滲出淡淡星光糖漿。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_matk', value: 3, duration: 5 },
  },

elf_bread: {
    id: 'elf_bread', name: '精靈麵包', type: 'consumable',
    description: '精靈族以秘傳手法烘焙的金色麵包，入口即化，帶有淡淡的蜂蜜和花朵清香。只需一小塊就能讓人恢復大量體力和精神力，是長途冒險的絕佳糧食。', buyPrice: 120, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'food_restore', value: 30 },
  },

feast: {
    id: 'feast', name: '宴會大餐', type: 'consumable',
    description: '銀盤上堆著烤禽、香草魚排、蜜漬果與金邊麵包，旁邊插著一面紅蠟封餐旗。', buyPrice: 300, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'food_feast', value: 3, duration: 10 },
  },

// ============ 寶箱與鑰匙 ============
  bronze_chest: {
    id: 'bronze_chest', name: '銅寶箱', type: 'consumable',
    description: '厚銅片包邊的小寶箱，鎖孔周圍有綠鏽與刮痕，晃動時能聽見零散物品碰撞。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'open_chest_bronze', value: 0 },
  },

silver_chest: {
    id: 'silver_chest', name: '銀寶箱', type: 'consumable',
    description: '銀白寶箱刻著細密雲紋，鎖扣嵌有藍晶粉，箱縫偶爾透出微弱魔光。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'open_chest_silver', value: 0 },
  },

gold_chest: {
    id: 'gold_chest', name: '金寶箱', type: 'consumable',
    description: '沉重金寶箱覆滿浮雕與紅蠟封印，箱角鑲著寶石，靠近時能感到封存魔力震動，需要金鑰匙才能開啟高階獎勵。', buyPrice: 1500, sellPrice: 750,
    stackable: true, maxStack: 99, levelReq: 20,
    useEffect: { type: 'open_chest_gold', value: 0 },
  },

village_lunch_bundle: {
    id: 'village_lunch_bundle', name: '村製便當包', type: 'consumable',
    description: '旅人小屋準備的簡單便當，裡面有硬麵包、起司與一小瓶溫湯。吃下後能稍微恢復體力，適合第一次出村前準備。',
    buyPrice: 120, sellPrice: 60, stackable: true, maxStack: 20, levelReq: 1, rarity: 'common',
    useEffect: { type: 'heal_hp', value: 60 },
    sourceTags: ['shop', 'town_service'], zoneTags: ['starter_village'],
  },

village_herb_salve: {
    id: 'village_herb_salve', name: '村醫藥膏', type: 'consumable',
    description: '用山坡苔膠、溪蘆碎屑和蜂蠟調成的綠色藥膏，塗上時有清涼刺感。適合初次出村的小傷，但無法處理嚴重毒素。',
    buyPrice: 180, sellPrice: 90, stackable: true, maxStack: 20, levelReq: 1, rarity: 'common',
    useEffect: { type: 'heal_hp', value: 80 },
    sourceTags: ['shop', 'crafting'], zoneTags: ['starter_village_ext'],
  },

meadow_healing_salad: {
    id: 'meadow_healing_salad', name: '草坡療傷菜包', type: 'consumable',
    description: '旅行商人用藥草斜坡的新鮮葉菜包成的簡單補給，味道清苦但能快速止血並恢復少量體力。',
    buyPrice: 420, sellPrice: 210, stackable: true, maxStack: 20, levelReq: 3, rarity: 'common',
    useEffect: { type: 'heal_hp', value: 120 },
    sourceTags: ['drop', 'shop'], zoneTags: ['plains'],
  },

dockside_seaweed_stew: {
    id: 'dockside_seaweed_stew', name: '碼頭海藻湯', type: 'consumable',
    description: '海鮮商人用海藻、鹽蟹碎肉和薑片煮成的熱湯，入口鹹鮮。它能在潮濕海風中恢復體力，但味道不適合久放。',
    buyPrice: 520, sellPrice: 260, stackable: true, maxStack: 20, levelReq: 8, rarity: 'common',
    useEffect: { type: 'heal_hp', value: 140 },
    sourceTags: ['shop'], zoneTags: ['eastern_coast'],
  },

moonwell_draught: {
    id: 'moonwell_draught', name: '月井清露', type: 'consumable',
    description: '月影井中取出的冷白露水，加入暗苔後能暫時壓住森林毒霧造成的暈眩，並恢復體力。',
    buyPrice: 1100, sellPrice: 550, stackable: true, maxStack: 20, levelReq: 10, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 180 },
    sourceTags: ['drop', 'shop'], zoneTags: ['dark_forest'],
  },

crystal_resonance_tonic: {
    id: 'crystal_resonance_tonic', name: '晶鳴穩定劑', type: 'consumable',
    description: '以回音晶粉和月白水調成的穩定劑，能壓住水晶洞窟的魔力震盪，並恢復體力。',
    buyPrice: 2200, sellPrice: 1100, stackable: true, maxStack: 20, levelReq: 20, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 260 },
    sourceTags: ['drop', 'shop'], zoneTags: ['crystal_cave'],
  },

frontier_ration_pack: {
    id: 'frontier_ration_pack', name: '邊境軍糧包', type: 'consumable',
    description: '補給營分發的壓縮軍糧與止血布包，味道普通但耐放。前線士兵會把它塞在胸甲內側，受傷時先咬開封繩。',
    buyPrice: 2400, sellPrice: 1200, stackable: true, maxStack: 20, levelReq: 25, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 360 },
    sourceTags: ['drop', 'shop', 'kingdom_war'], zoneTags: ['kingdom_frontier'],
  },

// ============ 戰鬥道具 ============
  smoke_bomb: {
    id: 'smoke_bomb', name: '煙霧彈', type: 'consumable',
    description: '一顆以火藥和特殊藥草混合製成的煙霧彈。投擲後瞬間炸開，釋放出大量嗆人的濃煙，在混亂中為逃脫創造絕佳機會。', buyPrice: 40, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'combat_escape', value: 50 },
  },

flash_bomb: {
    id: 'flash_bomb', name: '閃光彈', type: 'consumable',
    description: '一顆內含強力發光粉末的玻璃球。砸碎時會爆發出刺目的白光，足以讓任何生物暫時失去視力。在黑暗環境中效果尤為顯著。', buyPrice: 60, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'combat_blind', value: 30, duration: 1 },
  },

trap_item: {
    id: 'trap_item', name: '陷阱', type: 'consumable',
    description: '折疊好的鐵齒夾與麻繩機關藏在皮袋中，撒開後會猛然咬合，短暫困住踏入者。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'combat_stun', value: 1, duration: 1 },
  },

throwing_knife: {
    id: 'throwing_knife', name: '投擲短刀', type: 'consumable',
    description: '一把精心平衡的投擲用短刀，刀身輕薄銳利。刀柄處纏著防滑的細繩，投出後會在空中旋轉，以極高的速度命中目標。', buyPrice: 25, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'combat_damage', value: 50 },
  },

warming_fur_broth: {
    id: 'warming_fur_broth', name: '暖身毛皮湯', type: 'consumable',
    description: '雪山營地用乾肉、霜松樹脂和少量烈酒熬成的熱湯，入口辛辣，能讓四肢重新有知覺。它只適合短暫恢復，不能替代真正保暖裝備。',
    buyPrice: 900, sellPrice: 450,
    stackable: true, maxStack: 20, levelReq: 22, rarity: 'uncommon',
    useEffect: { type: 'heal_hp', value: 220 },
    sourceTags: ['shop', 'cooking'], zoneTags: ['frozen_wastes'],
  },

heatproof_miner_salve: {
    id: 'heatproof_miner_salve', name: '耐熱礦工膏', type: 'consumable',
    description: '矮人礦工用硫磺晶粉、火蜥蜴尾粉和冷卻油調成的厚膏，塗上後皮膚會微微發麻。它能短暫舒緩熱傷，但不能讓人站進岩漿。',
    buyPrice: 780, sellPrice: 390,
    stackable: true, maxStack: 20, levelReq: 15, rarity: 'uncommon',
    useEffect: { type: 'heal_hp', value: 180 },
    sourceTags: ['shop', 'crafting'], zoneTags: ['volcano_zone'],
  },

// ============ 製作系統食物成品 ============
  hp_steak: {
    id: 'hp_steak', name: '回復牛排', type: 'consumable',
    description: '厚切牛排表面烤出焦香格紋，肉汁被鹽草鎖住，熱食能迅速補回體力。', buyPrice: 25, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'food_hp', value: 20, duration: 2 },
  },

energy_drink: {
    id: 'energy_drink', name: '能量飲料', type: 'consumable',
    description: '細頸瓶中裝著淡藍魔力飲品，瓶底沉著銀砂，搖晃後能同時舒緩傷勢與精神疲勞。', buyPrice: 50, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_hp_resource', value: 15, duration: 3 },
  },

fire_soup: {
    id: 'fire_soup', name: '火焰湯', type: 'consumable',
    description: '以火蜥蜴尾與辛辣根菜熬出的紅湯，喝下後喉嚨像被爐火烘過。火山礦工常在長班前喝一碗暖身。',
    buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'food_atk', value: 5, duration: 5 },
    sourceTags: ['shop', 'cooking'], zoneTags: ['volcano_zone'],
  },

ice_cream: {
    id: 'ice_cream', name: '冰元素冰淇淋', type: 'consumable',
    description: '以冰元素核心製成的冰淇淋，食用後防禦力提升5%。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'buff_def', value: 5, duration: 5 },
  },

dreamwater_dew: {
    id: 'dreamwater_dew', name: '夢水露', type: 'consumable',
    description: '月井與夢水核心凝出的透明露珠，飲下後能恢復少量生命與資源，但也會讓視野短暫映出濕地倒影。',
    buyPrice: 420, sellPrice: 210, stackable: true, maxStack: 20, levelReq: 12, rarity: 'rare',
    useEffect: { type: 'heal_both', value: 90, value2: 45 },
    sourceTags: ['drop', 'shop'], zoneTags: ['moonlit_fen'],
  },

sunroad_ration: {
    id: 'sunroad_ration', name: '日路乾糧', type: 'consumable',
    description: '古道商隊留下的硬麥餅與鹽果乾，味道樸素但耐放，能在長途巡禮中恢復少量生命與資源。',
    buyPrice: 780, sellPrice: 390, stackable: true, maxStack: 20, levelReq: 15, rarity: 'rare',
    useEffect: { type: 'heal_both', value: 120, value2: 55 },
    sourceTags: ['drop', 'shop'], zoneTags: ['pilgrim_road'],
  },

forge_cinder_oil: {
    id: 'forge_cinder_oil', name: '鍛坊燼油', type: 'consumable',
    description: '鐵木鍛坊調配的黑紅火油，可快速恢復少量生命並提高身體溫度，常被巡牆士兵用來撐過寒夜守備。',
    buyPrice: 1500, sellPrice: 750, stackable: true, maxStack: 20, levelReq: 24, rarity: 'epic',
    useEffect: { type: 'heal_hp', value: 260 },
    sourceTags: ['drop', 'shop'], zoneTags: ['ironwood_fort'],
  },

blue_mud_saltpack: {
    id: 'blue_mud_saltpack', name: '藍泥鹽包', type: 'consumable',
    description: '以藍泥層濕鹽與乾草包成的小補給，敷在傷口上很痛，但能快速恢復少量生命。',
    buyPrice: 720, sellPrice: 360, stackable: true, maxStack: 20, levelReq: 16, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 180 },
    sourceTags: ['drop', 'shop'], zoneTags: ['saltwind_flats'],
  },

bloodsap_phial: {
    id: 'bloodsap_phial', name: '血脂小瓶', type: 'consumable',
    description: '從血脂池中封存的暗紅樹脂，少量塗抹能恢復生命，但過量會讓皮膚長出細刺。',
    buyPrice: 2600, sellPrice: 1300, stackable: true, maxStack: 20, levelReq: 30, rarity: 'epic',
    useEffect: { type: 'heal_hp', value: 300 },
    sourceTags: ['drop', 'shop'], zoneTags: ['thornmaze'],
  },

cinderbite_salve: {
    id: 'cinderbite_salve', name: '燼咬藥膏', type: 'consumable',
    description: '以焦泉礦殼、灰線草與冷卻熔渣調成的厚藥膏，能暫時舒緩火山灰灼傷，但塗抹時會像被火星咬住。',
    buyPrice: 2400, sellPrice: 1200, stackable: true, maxStack: 20, levelReq: 28, rarity: 'epic',
    useEffect: { type: 'heal_hp', value: 280 },
    sourceTags: ['drop', 'shop'], zoneTags: ['ember_march'],
  },

lakebreath_phial: {
    id: 'lakebreath_phial', name: '湖息小瓶', type: 'consumable',
    description: '以藍蓮花瓣與湖底冷泉封存的淡藍藥液，飲下後胸口像被清水洗過，能在採集後快速恢復體力。',
    buyPrice: 1600, sellPrice: 800, stackable: true, maxStack: 20, levelReq: 20, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 220 },
    sourceTags: ['drop', 'shop'], zoneTags: ['sapphire_lake'],
  },

lakeview_room_voucher: {
    id: 'lakeview_room_voucher', name: '湖景房券', type: 'consumable',
    description: '醉龍亭與湖景旅店共同承認的住宿券，紙面帶著淡淡薰衣草香。使用後像在乾淨床鋪上睡過一覺，能恢復體力，但不能在戰鬥中使用。',
    buyPrice: 1500, sellPrice: 750, stackable: true, maxStack: 20, levelReq: 10, rarity: 'uncommon',
    useEffect: { type: 'heal_hp', value: 220 },
    sourceTags: ['shop', 'service'], zoneTags: ['lakeside_town'],
  },

market_spice_pouch: {
    id: 'market_spice_pouch', name: '市集香料包', type: 'consumable',
    description: '香料棚用薄紙包好的暖香粉，混有胡椒、乾橘皮與醒神草。旅人常在長途前聞一點，讓精神從市集喧鬧中穩定下來。',
    buyPrice: 900, sellPrice: 450, stackable: true, maxStack: 20, levelReq: 1, rarity: 'uncommon',
    useEffect: { type: 'heal_mp', value: 120 },
    sourceTags: ['shop'], zoneTags: ['kingsroad_market'],
  },

market_lunch_bundle: {
    id: 'market_lunch_bundle', name: '王道午食包', type: 'consumable',
    description: '穀物拱廊與魚販石階合賣的午食包，裡面有硬麥餅、鹽魚片與酸菜。味道樸實，但能讓剛回城的冒險者迅速恢復力氣。',
    buyPrice: 800, sellPrice: 400, stackable: true, maxStack: 20, levelReq: 1, rarity: 'common',
    useEffect: { type: 'heal_hp', value: 160 },
    sourceTags: ['shop'], zoneTags: ['kingsroad_market'],
  },

practice_wrap: {
    id: 'practice_wrap', name: '練習護帶', type: 'consumable',
    description: '治療長椅旁常備的厚棉護帶，浸過止血藥粉。它不能替你贏得比賽，但能讓你在下一輪開始前把手指重新握緊。',
    buyPrice: 1200, sellPrice: 600, stackable: true, maxStack: 20, levelReq: 10, rarity: 'uncommon',
    useEffect: { type: 'heal_hp', value: 240 },
    sourceTags: ['shop', 'drop'], zoneTags: ['arena_quarter'],
  },

gamekeeper_salve: {
    id: 'gamekeeper_salve', name: '獵監傷藥', type: 'consumable',
    description: '獵場看守用松脂、乾草藥與蜂蠟調成的厚藥膏，能快速止住被獵犬、荊棘或箭羽擦出的傷口。',
    buyPrice: 1900, sellPrice: 950, stackable: true, maxStack: 20, levelReq: 18, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 260 },
    sourceTags: ['drop', 'shop'], zoneTags: ['royal_hunting_grounds'],
  },

ember_reliquary_oil: {
    id: 'ember_reliquary_oil', name: '聖物餘火油', type: 'consumable',
    description: '聖物庫保存的微溫燈油，混入骨灰後仍能燃起乾淨火光。塗在傷口旁會驅散寒意並恢復體力。',
    buyPrice: 3200, sellPrice: 1600, stackable: true, maxStack: 20, levelReq: 34, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 420 },
    sourceTags: ['drop', 'shop'], zoneTags: ['ashfall_monastery'],
  },

frostbite_salve: {
    id: 'frostbite_salve', name: '霜咬藥膏', type: 'consumable',
    description: '冷火營用藍苔、油脂與熱石灰調成的厚藥膏，能把凍傷處慢慢拉回知覺。',
    buyPrice: 2400, sellPrice: 1200, stackable: true, maxStack: 20, levelReq: 28, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 340 },
    sourceTags: ['drop', 'shop'], zoneTags: ['frostbite_pass'],
  },

charnel_ward_phial: {
    id: 'charnel_ward_phial', name: '屍橋護符瓶', type: 'consumable',
    description: '裝著淡灰護符灰的小玻璃瓶，打開後會短暫壓住屍橋與疫香爐附近的腐敗氣味，並恢復體力。',
    buyPrice: 4200, sellPrice: 2100, stackable: true, maxStack: 20, levelReq: 40, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 520 },
    sourceTags: ['drop', 'shop'], zoneTags: ['necropolis_gate'],
  },

sunfire_vial: {
    id: 'sunfire_vial', name: '日火小瓶', type: 'consumable',
    description: '裝著日火唱詩席燈焰的小瓶，打開後會釋出短暫暖光並恢復體力。瓶口若照到暗影會發出細小爆鳴。',
    buyPrice: 5600, sellPrice: 2800, stackable: true, maxStack: 20, levelReq: 45, rarity: 'epic',
    useEffect: { type: 'heal_hp', value: 620 },
    sourceTags: ['drop', 'shop'], zoneTags: ['sunspire'],
  },

dreamglass_dew: {
    id: 'dreamglass_dew', name: '夢玻露滴', type: 'consumable',
    description: '夢玻前廳與誓鏡室凝出的清亮露滴，飲下後能讓破碎夢境暫時穩定，並恢復體力。',
    buyPrice: 4600, sellPrice: 2300, stackable: true, maxStack: 20, levelReq: 38, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 500 },
    sourceTags: ['drop', 'shop'], zoneTags: ['moonshadow_court'],
  },

oilblack_coolant: {
    id: 'oilblack_coolant', name: '黑油冷卻劑', type: 'consumable',
    description: '黑油蓄池中提煉出的冷卻劑，經過淨化後能快速降溫傷口與裝備過熱處，並恢復體力。',
    buyPrice: 3600, sellPrice: 1800, stackable: true, maxStack: 20, levelReq: 35, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 420 },
    sourceTags: ['drop', 'shop'], zoneTags: ['machine_graveyard'],
  },

brineward_tonic: {
    id: 'brineward_tonic', name: '鹵血護劑', type: 'consumable',
    description: '走私者用鹽草、深海酒與少量血鹽調成的強烈護劑，能壓住冰暗湧道造成的麻痺與失血。',
    buyPrice: 3800, sellPrice: 1900, stackable: true, maxStack: 20, levelReq: 32, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 460 },
    sourceTags: ['drop', 'shop'], zoneTags: ['bloodsalt_coast'],
  },

raincatch_elixir: {
    id: 'raincatch_elixir', name: '接雨靈露', type: 'consumable',
    description: '接雨盆地收集的清亮露水，加入翡翠冠葉後能快速恢復疲憊與擦傷。',
    buyPrice: 2600, sellPrice: 1300, stackable: true, maxStack: 20, levelReq: 25, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 320 },
    sourceTags: ['drop', 'shop'], zoneTags: ['emerald_canopy'],
  },

silver_breath_tonic: {
    id: 'silver_breath_tonic', name: '銀息藥劑', type: 'consumable',
    description: '銀息井旁凝出的冷白霧水調成的藥劑，飲下後能讓肺部短暫適應空心山的風壓，並恢復大量體力。',
    buyPrice: 6200, sellPrice: 3100, stackable: true, maxStack: 20, levelReq: 36, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 560 },
    sourceTags: ['drop', 'shop'], zoneTags: ['hollow_mountain'],
  },

delta_antivenom_brew: {
    id: 'delta_antivenom_brew', name: '三角洲解毒湯', type: 'consumable',
    description: '吊腳村用青藥、蛇卵殼粉與藍蓮瓣熬成的苦湯，能壓下蛇毒與濕冷造成的虛弱，並恢復體力。',
    buyPrice: 2200, sellPrice: 1100, stackable: true, maxStack: 20, levelReq: 18, rarity: 'rare',
    useEffect: { type: 'heal_hp', value: 260 },
    sourceTags: ['drop', 'shop'], zoneTags: ['serpent_delta'],
  },
};
