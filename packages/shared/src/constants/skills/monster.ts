import type { RawSkillDef } from './types.js';

export const MONSTER_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  怪物技能 (Monster Skills)
  // ════════════════════════════════════════════
  basic_attack: {
    id: 'basic_attack', name: '普通攻擊', englishName: 'Basic Attack',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '以爪牙或肢體本能地撲向獵物，這是每一隻怪物與生俱來的戰鬥方式。雖然缺乏技巧，但野獸的蠻力不容小覷，那粗暴的一擊足以讓毫無防備的冒險者吃足苦頭。',
  },

screech: {
    id: 'screech', name: '尖嘯', englishName: 'Screech',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 0.5,
    description: '張開醜陋的大嘴發出一聲穿透靈魂的尖銳嘯叫，聲波如同無形的利刃割裂空氣。這道超越常理的高頻音波讓所有聽到的人頭痛欲裂、耳膜生疼，嚴重時甚至會因腦震盪而短暫失去意識。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },

quick_dash: {
    id: 'quick_dash', name: '快速衝刺', englishName: 'Quick Dash',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '四肢猛地蹬地，以驚人的爆發力向側方高速衝刺，在眨眼之間脫離敵人的攻擊範圍。殘留在原地的塵土尚未落定，怪物已在數步之外警惕地觀察著對手的下一步行動。這種與生俱來的敏捷，正是弱小生物在殘酷自然中存活的本能。',
    effects: [{ type: 'dodge_up', value: 25, duration: 2 }],
  },

bite: {
    id: 'bite', name: '撕咬', englishName: 'Bite',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 1,
    damageType: 'physical', element: 'none', multiplier: 1.3,
    description: '張開佈滿尖牙的血盆大口，以驚人的咬合力狠狠咬向獵物的肉體。鋒利的犬齒輕鬆撕裂皮肉，骨骼在強大的顎力下發出不祥的嘎吱聲。鮮血從齒縫間溢出，滴落在地面上留下觸目驚心的痕跡。',
  },

howl: {
    id: 'howl', name: '嚎叫', englishName: 'Howl',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '仰起頭顱向天空發出悠長而嘹亮的嚎叫，那是宣示領地的野獸之聲。嚎叫聲中蘊含著原始的野性之力，讓自身的戰鬥本能被徹底激發，肌肉膨脹、爪牙更加鋒利。月光下的狼嚎，是獵殺開始的號角。',
    effects: [{ type: 'atk_up', value: 20, duration: 3 }],
  },

steal: {
    id: 'steal', name: '偷竊', englishName: 'Steal',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '趁人不備，以靈巧的手指悄悄摸向目標的錢袋，同時順手給對方來上一記。即便被發現了也無所謂，反正金幣已經到手了。這些狡猾的小偷最擅長在混亂中渾水摸魚，讓冒險者在戰鬥結束後才發現荷包已空。',
  },

poison_bite: {
    id: 'poison_bite', name: '毒咬', englishName: 'Poison Bite',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'nature', multiplier: 1.1,
    description: '露出滴著毒液的尖牙，以閃電般的速度咬向獵物的肢體。毒牙刺穿皮膚的瞬間，致命的毒素便隨著血液循環擴散到全身。傷口周圍迅速發黑腫脹，中毒者會感到陣陣灼痛，體力在毒素的侵蝕下持續流失。',
    effects: [{ type: 'poison', value: 5, duration: 3 }],
  },

coil: {
    id: 'coil', name: '纏繞', englishName: 'Coil',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '蛇形的身軀如同活繩般飛速纏繞上獵物的軀體，冰冷的鱗片貼緊皮膚令人毛骨悚然。強而有力的肌肉一圈圈收緊，擠壓得目標骨骼嘎嘎作響、呼吸困難。被纏繞的獵物只能眼睜睜看著自己被慢慢勒緊，動彈不得。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },

shadow_bite: {
    id: 'shadow_bite', name: '暗影撕咬', englishName: 'Shadow Bite',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'magical', element: 'dark', multiplier: 1.4,
    description: '口中湧出濃稠的暗影之力，將尖牙包裹在一層幽暗的黑霧中。被暗影強化的撕咬不僅撕裂肉體，更侵蝕靈魂。傷口處殘留的暗影能量如同毒蛇般啃噬著受傷者的神經，帶來超越肉體疼痛的深層恐懼。',
  },

shadow_dash: {
    id: 'shadow_dash', name: '暗影衝刺', englishName: 'Shadow Dash',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'dark', multiplier: 1.2,
    description: '整個身軀化為一團模糊的暗影，以超乎想像的速度朝目標突進。在暗影衝刺的過程中，實體幾乎完全消散，任何攻擊都會從身體中穿過。衝刺到達的瞬間暗影重新凝聚，伴隨著致命的一擊從意想不到的角度襲來。',
    effects: [{ type: 'dodge_up', value: 20, duration: 1 }],
  },

poison_web: {
    id: 'poison_web', name: '毒蛛網', englishName: 'Poison Web',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'nature', multiplier: 0.6,
    description: '從腹部的吐絲器中噴射出一張沾滿黏稠毒液的巨大蛛網，將獵物牢牢黏住。蛛網上的毒液滲透接觸到的每一寸皮膚，讓中者行動遲緩且持續受到毒素的侵蝕。越是掙扎，毒液就越快地被擠入傷口之中。',
    effects: [
      { type: 'slow', value: 30, duration: 2 },
      { type: 'poison', value: 4, duration: 3 },
    ],
  },

venomous_bite: {
    id: 'venomous_bite', name: '劇毒撕咬', englishName: 'Venomous Bite',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'nature', multiplier: 1.2,
    description: '毒囊中蓄滿了經過數日濃縮的劇毒液體，在咬合的瞬間全數注入獵物體內。這種強化過的毒素能迅速溶解血管壁，讓毒液以更快的速度擴散至全身。中毒者的血液逐漸變為紫黑色，每一次心跳都在將毒素推向更深處。',
    effects: [{ type: 'poison', value: 8, duration: 3 }],
  },

web_trap: {
    id: 'web_trap', name: '蛛網陷阱', englishName: 'Web Trap',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 0.5,
    description: '以精密的本能在地面織出一張幾乎透明的蛛網陷阱，絲線在光線下隱約閃爍著不祥的光芒。不慎踩入的獵物會被強韌的蛛絲牢牢纏住雙腿，越是掙扎蛛絲纏得越緊。這是蜘蛛族群千萬年進化出的完美狩獵工具。',
    effects: [{ type: 'stun', value: 1, duration: 2 }],
  },

root_bind: {
    id: 'root_bind', name: '根系束縛', englishName: 'Root Bind',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'nature', multiplier: 0.6,
    description: '地面突然龜裂，粗壯的樹根如同活物般從土壤中暴烈竄出，以蛇般的速度纏繞住獵物的雙腿。根系上的尖刺扎入肉中，牢牢地將目標釘在原地。被束縛者能感受到根系仍在不斷收緊，彷彿大地本身正試圖將其吞噬。',
    effects: [{ type: 'stun', value: 1, duration: 2 }],
  },

bark_shield: {
    id: 'bark_shield', name: '樹皮護盾', englishName: 'Bark Shield',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 4,
    damageType: 'physical', element: 'nature', multiplier: 0,
    description: '全身的樹皮在瞬間增厚數倍，原本就堅硬的外殼變得如同鋼鐵般堅不可摧。刀劍砍在上面只能留下淺淺的痕跡，火焰也難以穿透厚實的木質纖維。在樹皮護盾的保護下，即使是最猛烈的攻擊也被大幅削弱。',
    effects: [{ type: 'damage_reduction', value: 40, duration: 2 }],
  },

nature_drain: {
    id: 'nature_drain', name: '自然汲取', englishName: 'Nature Drain',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'nature', multiplier: 1.0,
    description: '伸出纏繞著藤蔓的觸手深深扎入目標體內，以自然之力直接汲取對方的生命精華。目標的臉色在肉眼可見中變得蒼白枯槁，而怪物自身的傷口卻在翠綠色的能量滋養下迅速癒合。這是寄生於自然的黑暗面——以他者之生命養自身。',
    special: { lifeSteal: 50 },
  },

shadow_storm: {
    id: 'shadow_storm', name: '暗影風暴', englishName: 'Shadow Storm',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 5,
    damageType: 'magical', element: 'dark', multiplier: 1.5,
    description: '張開雙翼或觸手，將體內積蓄的暗影之力全部釋放，形成一道遮天蔽日的黑色風暴。暗影的碎片如刀片般在風暴中旋轉，切割著一切被捲入的生命。整個戰場被黑暗吞噬，唯有痛苦的慘叫聲在風暴中迴盪。',
  },

alpha_roar: {
    id: 'alpha_roar', name: '王者咆哮', englishName: 'Alpha Roar',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.3,
    description: '以領域之王的氣魄發出一聲驚天動地的咆哮，地面在聲波中龜裂震動。這道飽含威嚴與殺意的吼聲讓所有聽到的敵人膝蓋發軟、握武器的手不自覺地顫抖。在王者的壓迫感下，無論攻擊還是防禦都大打折扣。',
    effects: [
      { type: 'atk_down', value: 15, duration: 3 },
      { type: 'def_down', value: 15, duration: 3 },
    ],
  },

shadow_devour: {
    id: 'shadow_devour', name: '暗影吞噬', englishName: 'Shadow Devour',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 4,
    damageType: 'magical', element: 'dark', multiplier: 2.0,
    description: '張開被暗影充滿的巨口，一股無形的吸力將目標拉向深淵般的黑暗。暗影的觸手從口中蔓延而出，將獵物的生命力連同靈魂碎片一併吞噬殆盡。被吞噬的能量轉化為怪物的養分，那些受害者的生命在黑暗中徹底消散。',
    special: { lifeSteal: 30 },
  },

crystal_shard: {
    id: 'crystal_shard', name: '水晶碎片', englishName: 'Crystal Shard',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 1,
    damageType: 'magical', element: 'ice', multiplier: 1.3,
    description: '從體表的水晶結構中崩裂出一枚鋒利如刀的冰晶碎片，以極高的速度射向目標。透明的水晶碎片在飛行中折射出冷冽的寒光，命中時如同冰錐般深深嵌入血肉之中。傷口周圍迅速結霜，寒意從內部向全身擴散。',
  },

ice_armor: {
    id: 'ice_armor', name: '冰甲', englishName: 'Ice Armor',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 5,
    damageType: 'magical', element: 'ice', multiplier: 0,
    description: '凝聚周圍的寒氣在體表結成一層晶瑩剔透的冰晶護甲，堅硬程度堪比精鋼。冰甲表面不斷散發著白色的寒霧，靠近者會感受到徹骨的寒冷。武器砍在冰甲上會發出清脆的碰撞聲，留下的裂痕在瞬間便被新生的冰晶填補。',
    effects: [{ type: 'def_up', value: 30, duration: 3 }],
  },

tail_whip: {
    id: 'tail_whip', name: '尾擊', englishName: 'Tail Whip',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 0.9,
    description: '粗壯如古木的尾巴在地面上拖出深深的溝痕，隨後以雷霆之勢橫掃而出。巨尾所過之處塵土飛揚、碎石四濺，站在攻擊範圍內的所有敵人都被沉重的一擊掃飛出去。這種蠻橫的範圍攻擊，正是大型怪物最令人畏懼的招式。',
  },

sonic_wave: {
    id: 'sonic_wave', name: '超聲波', englishName: 'Sonic Wave',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'none', multiplier: 0.8,
    description: '張開大嘴釋放出超越聽覺極限的高頻音波，空氣在聲波的衝擊下產生可見的震盪漣漪。這道肉眼可見的音波牆以摧枯拉朽之勢席捲所有敵人，劇烈的共振讓腦漿都在顱骨中搖晃。嚴重的腦震盪讓中招者瞬間失去意識。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },

life_drain: {
    id: 'life_drain', name: '生命吸取', englishName: 'Life Drain',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 1.0,
    description: '從暗影中伸出無形的觸手鑽入目標體內，如同無數條吸血的水蛭般瘋狂汲取生命力。目標的皮膚在肉眼可見中變得乾枯蒼白，而怪物自身卻在竊取的生命能量滋養下傷口快速癒合。這是黑暗生物最令人作嘔的獵食方式。',
    special: { lifeSteal: 100 },
  },

blind: {
    id: 'blind', name: '致盲', englishName: 'Blind',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 4,
    damageType: 'magical', element: 'dark', multiplier: 0.3,
    description: '噴出一團濃稠的墨黑液體或暗影迷霧，精準地命中目標的面部。刺鼻的液體灼燒著雙眼，讓中者在劇痛中完全喪失視覺。失去視線的敵人只能盲目地揮舞武器，攻擊的準確度急劇下降，成為砧板上任人宰割的魚肉。',
    effects: [{ type: 'atk_down', value: 30, duration: 2 }],
  },

stone_slam: {
    id: 'stone_slam', name: '巨石猛擊', englishName: 'Stone Slam',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 1.6,
    description: '高舉巨大的石拳或從地面撬起一塊巨岩，以山崩般的力量猛然砸向目標。大地在巨石落下時劇烈震動，碎裂的岩石四處飛濺。被正面命中的敵人會被壓入地面的凹坑之中，承受足以粉碎骨骼的恐怖衝擊力。',
  },

petrifying_gaze: {
    id: 'petrifying_gaze', name: '石化凝視', englishName: 'Petrifying Gaze',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 5,
    damageType: 'magical', element: 'none', multiplier: 0.5,
    description: '睜開散發著詭異光芒的魔眼，以充滿古老詛咒的目光直視獵物的雙眼。與那恐怖的視線對上的瞬間，目標的身體開始從四肢末端緩緩石化，灰色的石質如瘟疫般蔓延。若不能及時移開目光，便會化為一座栩栩如生的石像。',
    effects: [{ type: 'stun', value: 1, duration: 2 }],
  },

stone_skin: {
    id: 'stone_skin', name: '石膚術', englishName: 'Stone Skin',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '體表的皮膚在瞬間轉變為堅硬的灰色岩石，厚重的石質外殼將整個身軀包裹其中。石膚之下仍保有靈活的肌肉，但外層的防禦力已堪比城牆。刀劍砍在石膚上只能迸出點點火星，攻擊者的虎口反而被震得發麻。',
    effects: [{ type: 'damage_reduction', value: 50, duration: 2 }],
  },

crystal_prison: {
    id: 'crystal_prison', name: '水晶牢籠', englishName: 'Crystal Prison',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 6,
    damageType: 'magical', element: 'ice', multiplier: 0.5,
    description: '凝聚周圍的冰晶能量在目標腳下形成魔法陣，無數水晶柱從地面暴烈竄出，瞬間將目標封鎖在一座透明的水晶牢籠之中。被封印者能看到外面的世界，卻動彈不得，只能眼睜睜看著戰況在身外發展。水晶牢籠堅硬無比，除非以強力魔法才能擊破。',
    effects: [{ type: 'freeze', value: 1, duration: 2 }],
  },

ice_storm: {
    id: 'ice_storm', name: '冰風暴', englishName: 'Ice Storm',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 5,
    damageType: 'magical', element: 'ice', multiplier: 1.5,
    description: '以自身為風暴之眼，召喚出足以凍結一切的極寒冰風暴。漫天飛舞的冰刃在狂風中高速旋轉，溫度驟降至萬物凝結的程度。被風暴席捲的敵人全身覆上一層厚厚的冰霜，動作變得僵硬遲緩，如同即將被永凍封存的化石。',
    effects: [{ type: 'slow', value: 30, duration: 2 }],
  },

diamond_skin: {
    id: 'diamond_skin', name: '鑽石之膚', englishName: 'Diamond Skin',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 6,
    damageType: 'physical', element: 'ice', multiplier: 0,
    description: '將體內的水晶能量壓縮至極限，在全身表面形成一層擁有鑽石硬度的水晶外殼。這層晶瑩剔透的護甲折射出璀璨的七彩光芒，美麗得令人窒息。然而其恐怖的硬度足以讓任何武器在接觸的瞬間崩斷，幾乎免疫一切物理攻擊。',
    effects: [{ type: 'damage_reduction', value: 60, duration: 2 }],
  },

shatter: {
    id: 'shatter', name: '碎裂衝擊', englishName: 'Shatter',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 6,
    damageType: 'magical', element: 'ice', multiplier: 2.0,
    description: '將覆蓋全身的水晶結構注入過量的能量，使其在一瞬間全部碎裂爆炸。無數鋒利的水晶碎片如同致命的彈雨般向四面八方飛射，每一枚碎片都攜帶著極寒的冰屬性能量。這是以自身為武器的自殺式攻擊，爆發的威力足以將整個戰場化為冰晶煉獄。',
  },

crystal_resurrection: {
    id: 'crystal_resurrection', name: '水晶復活', englishName: 'Crystal Resurrection',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 10,
    damageType: 'magical', element: 'ice', multiplier: 0,
    description: '在即將消亡之際，體內深處的水晶核心爆發出耀眼的光芒，那是水晶生命體最後的秘密。蘊藏在核心中的生命能量開始重構破碎的軀體，水晶一片片重新凝聚生長，直到完整的形態再次矗立於戰場之上。每一次復活都會消耗核心的力量，但水晶的生命遠比凡人所想的更加頑強。',
    special: { healPercent: 30 },
  },

bone_strike: {
    id: 'bone_strike', name: '骨擊', englishName: 'Bone Strike',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 1,
    damageType: 'physical', element: 'dark', multiplier: 1.3,
    description: '揮舞著由怨靈附著的枯骨武器猛擊獵物，骨製的武器在揮動時發出令人不寒而慄的嘎吱聲。骨刃接觸血肉的瞬間，殘留在骨骼上的暗影能量會滲入傷口，帶來超越單純物理傷害的冰冷侵蝕。',
  },

shell_guard: {
    id: 'shell_guard', name: '甲殼防禦', englishName: 'Shell Guard',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '將四肢與頭部迅速縮入厚重的甲殼之中，只留下堅不可摧的外殼面對敵人。這層經過海水與歲月淬煉的天然護甲，硬度足以抵擋大多數攻擊。敵人的武器砍在甲殼上只會被彈開，發出金屬般清脆的碰撞聲。',
    effects: [{ type: 'damage_reduction', value: 50, duration: 1 }],
  },

water_spear: {
    id: 'water_spear', name: '水矛', englishName: 'Water Spear',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'magical', element: 'ice', multiplier: 1.4,
    description: '操控周圍的水氣凝聚成一柄閃爍著冷光的水之長矛，矛尖旋轉的水流壓力足以切割鋼鐵。水矛以超高速射出，在空氣中留下一道水霧的軌跡，命中目標時高壓水流穿透護甲直達內部。被水矛貫穿的傷口邊緣整齊得如同刀切。',
  },

fire_breath: {
    id: 'fire_breath', name: '火焰吐息', englishName: 'Fire Breath',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'fire', multiplier: 1.4,
    description: '胸腔中的火焰囊劇烈膨脹，隨後張開大口噴出一道錐形的灼熱火焰。赤紅的龍息如同熔岩瀑布般傾瀉而出，所到之處草木化灰、岩石融化。被火焰掃到的敵人身上的衣物瞬間燃燒，灼熱的餘火持續啃噬著他們的肌膚。',
    effects: [{ type: 'burn', value: 5, duration: 2 }],
  },

charge: {
    id: 'charge', name: '衝鋒', englishName: 'Charge',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '低下頭顱，四肢猛蹬地面，以驚人的加速度全力衝向目標。數百公斤的巨大體軀化為一枚不可阻擋的活體砲彈，撞擊的瞬間爆發出雷鳴般的巨響。被正面衝撞的敵人往往會被撞飛數步之遠，在劇烈的衝擊中暈頭轉向。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },

// ── 擴充怪物技能 (monsters-expansion.ts) ──
  poison_spit: {
    id: 'poison_spit', name: '毒液噴射', englishName: 'Poison Spit',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'magical', element: 'nature', multiplier: 1.0,
    description: '鼓起毒囊猛然收縮，從口中噴射出一道腐蝕性極強的綠色毒液。毒液接觸到皮膚的瞬間便開始冒出白煙，灼燒感讓人不禁慘叫。殘留在傷口上的毒素會持續腐蝕組織，讓受害者在接下來的數回合中飽受折磨。',
    effects: [{ type: 'poison', value: 6, duration: 3 }],
  },

tongue_lash: {
    id: 'tongue_lash', name: '舌鞭', englishName: 'Tongue Lash',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '以超乎想像的速度彈出又長又黏的舌頭，如同鞭子般精準地抽打遠處的獵物。舌頭前端的倒刺深深嵌入皮肉之中，帶來撕裂般的劇痛。這種攻擊射程極遠且軌跡刁鑽，即使是身手矯健的冒險者也難以閃避。',
    special: { guaranteedHit: true },
  },

toxic_cloud: {
    id: 'toxic_cloud', name: '毒霧', englishName: 'Toxic Cloud',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 4,
    damageType: 'magical', element: 'nature', multiplier: 0.6,
    description: '從體內的毒腺中蒸發出一團翻滾著紫綠色的有毒霧氣，迅速擴散覆蓋整個戰場。呼吸到毒霧的人會感到喉嚨灼熱、肺部如火燒般疼痛。這團揮之不去的毒雲會在戰場上持續瀰漫，所有暴露其中的敵人都會持續受到毒素的侵害。',
    effects: [{ type: 'poison', value: 5, duration: 4 }],
  },

shadow_root: {
    id: 'shadow_root', name: '暗影根系', englishName: 'Shadow Root',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 0.8,
    description: '從暗影浸染的土壤中喚醒被黑暗腐化的根系，漆黑的藤蔓從地面竄出纏繞住獵物。這些根系不僅會束縛目標使其動彈不得，更會持續注入暗影之力侵蝕被纏繞者的生命。根系表面流動的紫黑色光芒，是暗影腐化的明證。',
    effects: [{ type: 'stun', value: 1, duration: 2 }],
  },

dark_bark_shield: {
    id: 'dark_bark_shield', name: '暗影樹皮盾', englishName: 'Dark Bark Shield',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 4,
    damageType: 'magical', element: 'dark', multiplier: 0,
    description: '被暗影侵蝕的樹皮變得漆黑如墨，表面流動著不祥的紫色紋路。這層融合了暗影之力的護盾不僅能吸收大部分傷害，還會將攻擊者的力量以暗影反噬的形式反彈回去。膽敢觸碰的人會感到一股冰冷的暗影之力順著武器倒灌入體內。',
    effects: [
      { type: 'damage_reduction', value: 35, duration: 2 },
      { type: 'thorns', value: 15, duration: 2 },
    ],
  },

shadow_spore: {
    id: 'shadow_spore', name: '暗影孢子', englishName: 'Shadow Spore',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 4,
    damageType: 'magical', element: 'dark', multiplier: 0.4,
    description: '從腐化的菌傘中噴出一團團漆黑的暗影孢子，在空氣中如黑雪般緩緩飄散。這些肉眼難以察覺的微小孢子一旦被吸入體內，便會寄生在肌肉纖維中吸取力量。中招的敵人會感到四肢無力，揮出的每一拳都軟綿綿的。',
    effects: [{ type: 'atk_down', value: 20, duration: 3 }],
  },

swarm_assault: {
    id: 'swarm_assault', name: '蝠群突襲', englishName: 'Swarm Assault',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'dark', multiplier: 0.4,
    description: '發出一聲尖銳的信號，召喚藏身在黑暗中的大量蝙蝠同伴蜂擁而出。黑壓壓的蝠群如同一團活生生的黑雲撲向目標，尖銳的爪牙從四面八方同時撕咬。密集的多段攻擊讓目標完全被蝠群淹沒，只能在尖叫聲中承受連續的痛楚。',
    special: { hitCount: 4 },
  },

sonic_barrage: {
    id: 'sonic_barrage', name: '超聲波連擊', englishName: 'Sonic Barrage',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'none', multiplier: 0.7,
    description: '數十隻蝙蝠同時張開口腔，以精準的頻率同步發出高強度的超聲波。多道聲波在空氣中交匯疊加，形成一道足以震碎玻璃的致命音牆。密集的聲波衝擊讓所有敵人的腦袋如同被千根針同時刺入般劇痛，嚴重時甚至會瞬間昏厥。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },

crystal_slam: {
    id: 'crystal_slam', name: '水晶猛擊', englishName: 'Crystal Slam',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'ice', multiplier: 1.5,
    description: '將手臂上的水晶結構瞬間增生膨脹，形成一隻巨大的水晶拳頭。帶著冰寒之力的水晶巨拳轟然砸下，接觸點爆發出一圈冰晶衝擊波。被命中的目標不僅承受沉重的物理衝擊，更被極寒的冰屬性能量從傷口處凍結內臟。',
  },

reflect_barrier: {
    id: 'reflect_barrier', name: '反射屏障', englishName: 'Reflect Barrier',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 6,
    damageType: 'magical', element: 'ice', multiplier: 0,
    description: '在身前生成一面由純淨水晶打造的半透明屏障，其特殊的晶格結構能完美折射魔法能量。任何射向屏障的魔法攻擊都會被水晶面反射回施術者自身，以其人之道還治其人之身。不知情的法師往往會被自己的魔法打個措手不及。',
    effects: [{ type: 'thorns', value: 30, duration: 2 }],
  },

spectral_slash: {
    id: 'spectral_slash', name: '幽靈斬', englishName: 'Spectral Slash',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 2,
    damageType: 'magical', element: 'dark', multiplier: 1.6,
    description: '揮動由怨念凝聚而成的幽靈之劍，劍身上燃燒著幽藍色的冥界之火。這道半透明的斬擊能穿透物質直接斬向靈魂，無論多厚的鎧甲都無法阻擋。被冥火灼燒的傷口散發著幽藍色的光芒，帶來的不是灼熱，而是深入骨髓的冰寒。',
  },

soul_drain: {
    id: 'soul_drain', name: '靈魂汲取', englishName: 'Soul Drain',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 1.0,
    description: '伸出蒼白的手掌，以冥界的力量攫取目標的靈魂碎片。可見的藍白色靈魂能量被從目標體內抽離，如同絲線般纏繞在怪物的指間。被汲取靈魂之力的目標不僅承受傷害，更會感到魔力在急速流失，施法能力大打折扣。',
    special: { lifeSteal: 50 },
  },

phantom_charge: {
    id: 'phantom_charge', name: '幻影衝鋒', englishName: 'Phantom Charge',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'dark', multiplier: 1.8,
    description: '整個身軀化為一道半透明的幻影，以超越物理法則的速度朝目標直線突進。幻影狀態下的身軀能穿透一切物理屏障與護甲，直接將攻擊力灌注到目標的內臟之上。當幻影重新凝聚時，目標體內已是一片狼藉。',
    special: { defPiercing: 30 },
  },

death_mark: {
    id: 'death_mark', name: '死亡印記', englishName: 'Death Mark',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 5,
    damageType: 'magical', element: 'dark', multiplier: 0.3,
    description: '以暗影之力在目標的額頭上烙下一個發著幽暗紅光的骷髏印記。被標記者的靈魂護壁被撕裂了一個缺口，所有攻擊都能更輕易地傷害到其本體。死亡印記如同一個不祥的倒計時，在它消散之前，被標記者的每一秒都在鬼門關前徘徊。',
    effects: [{ type: 'mark', value: 25, duration: 3 }],
  },

ethereal_shield: {
    id: 'ethereal_shield', name: '虛靈護盾', englishName: 'Ethereal Shield',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 5,
    damageType: 'magical', element: 'dark', multiplier: 0,
    description: '凝聚徘徊在靈界邊境的幽魂能量，在身周織成一面由無數半透明靈體組成的護盾。這些遊蕩的亡魂會自發地為主人抵擋攻擊，每一次衝擊都讓幾個靈體消散。護盾表面不斷飄動的鬼火與隱約可聞的低語聲，讓靠近者不寒而慄。',
    effects: [{ type: 'shield', value: 150, duration: 3 }],
  },

charm: {
    id: 'charm', name: '魅惑', englishName: 'Charm',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 5,
    damageType: 'magical', element: 'dark', multiplier: 0.3,
    description: '以妖異的嗓音低吟蠱惑的旋律，一雙散發著魅紫色光芒的眼眸直視目標的靈魂深處。強大的精神力如同絲線般纏繞上目標的意識，令其沉溺在虛假的幻夢之中。被魅惑者眼神渙散，完全分不清敵我，只能茫然地站在原地任人擺佈。',
    effects: [{ type: 'stun', value: 1, duration: 2 }],
  },

fire_bolt: {
    id: 'fire_bolt', name: '火焰彈', englishName: 'Fire Bolt',
    classId: 'monster', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 1,
    damageType: 'magical', element: 'fire', multiplier: 1.3,
    description: '在口中或掌心凝聚一枚拳頭大小的赤紅色火焰彈，高溫讓周圍的空氣都開始扭曲。火彈以直線軌跡射向目標，拖著一條橘紅色的火焰尾跡。命中時火焰四散飛濺，雖不及高階火球術的威力，但足以灼傷粗心大意的冒險者。',
  },
};
