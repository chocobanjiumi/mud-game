// 技能定義 - 所有職業的技能資料

import type { ClassId } from '../types/player.js';
import type { SkillDef } from '../types/skill.js';
import { CLASS_DEFS } from './classes.js';

/** 所有技能定義 */
export const SKILL_DEFS: Record<string, SkillDef> = {
  // ════════════════════════════════════════════
  //  冒險者 (Lv 1-9)
  // ════════════════════════════════════════════
  slash: {
    id: 'slash', name: '揮砍', englishName: 'Slash',
    classId: 'adventurer', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '握緊手中的武器，以最基本的戰鬥技巧朝敵人劈去。刀刃劃過空氣發出清脆的破風聲，雖然招式樸實無華，卻是每位冒險者踏上征途的第一課。在無數次揮砍中磨練出的肌肉記憶，往往比花俏的技巧更加可靠。',
  },
  guard: {
    id: 'guard', name: '防禦', englishName: 'Guard',
    classId: 'adventurer', learnLevel: 2, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '將武器橫於胸前，雙腳紮穩馬步，全神貫注地迎接即將到來的攻擊。厚重的護甲與堅定的意志形成一道無形的壁壘，能將下一次攻擊的衝擊力削減大半。在危急時刻，一次恰到好處的防禦往往比閃避更能保住性命。',
    effects: [{ type: 'damage_reduction', value: 50, duration: 1 }],
  },
  first_aid: {
    id: 'first_aid', name: '急救', englishName: 'First Aid',
    classId: 'adventurer', learnLevel: 4, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 3,
    damageType: 'magical', element: 'none', multiplier: 0,
    description: '撕下衣物的布條迅速包紮傷口，用冒險途中學會的草藥知識止住流血。雖然比不上祭司的神聖治癒，但在荒野中無人援助時，這份急救技能就是活下去的關鍵。傷口處傳來微微的刺痛，提醒著你戰鬥尚未結束。',
    special: { healPercent: 15 },
  },
  inspect: {
    id: 'inspect', name: '觀察', englishName: 'Inspect',
    classId: 'adventurer', learnLevel: 6, type: 'active',
    targetType: 'single_enemy', resourceCost: 5, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '屏住呼吸，以銳利的目光審視敵人的一舉一動，尋找護甲的裂縫與動作的破綻。經驗豐富的冒險者能在瞬息之間看穿對手的弱點，將隱藏的情報化為致勝的籌碼。知己知彼，方能百戰不殆。',
  },
  survival: {
    id: 'survival', name: '求生本能', englishName: 'Survival',
    classId: 'adventurer', learnLevel: 8, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '當生命垂危之際，身體深處沉睡的本能被喚醒，感官變得異常敏銳。瀕死的恐懼反而化為求生的動力，讓你能以匪夷所思的反應速度閃過致命的攻擊。這是刻在冒險者骨子裡的生存法則——只要還有一口氣在，就絕不倒下。',
    special: { hpThreshold: 20, dodgeBonus: 15 },
  },

  // ════════════════════════════════════════════
  //  劍士 (Lv 10-29)
  // ════════════════════════════════════════════
  power_strike: {
    id: 'power_strike', name: '重擊', englishName: 'Power Strike',
    classId: 'swordsman', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 1,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '集中全身力量於武器之上，以雷霆萬鈞之勢劈出致命的一擊。刀鋒劃破空氣時發出尖銳的嘯聲，強大的衝擊力甚至能震裂敵人的護甲。消耗較多體力，但造成的傷害足以讓任何敵人心生畏懼。',
  },
  blade_aura: {
    id: 'blade_aura', name: '劍氣', englishName: 'Blade Aura',
    classId: 'swordsman', learnLevel: 13, type: 'active',
    targetType: 'all_enemies', resourceCost: 15, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '將內勁灌注於劍身，猛然揮出一道凌厲的劍氣。半透明的氣刃如新月般劃過空氣，所過之處塵土飛揚，前方的敵人無一倖免。劍氣消散後，空氣中仍殘留著令人窒息的殺意。',
  },
  iron_wall: {
    id: 'iron_wall', name: '鐵壁', englishName: 'Iron Wall',
    classId: 'swordsman', learnLevel: 16, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '多年的盾牌訓練使身體與盾牌融為一體，每一次格擋都精準而沉穩。鋼鐵般的臂力將盾牌化為銅牆鐵壁，任何正面的攻擊都會被堅固的盾面彈開。手持盾牌時，你便是隊伍中最堅不可摧的堡壘。',
    special: { defBonus: 20, requireShield: true },
  },
  taunt: {
    id: 'taunt', name: '挑釁', englishName: 'Taunt',
    classId: 'swordsman', learnLevel: 19, type: 'active',
    targetType: 'single_enemy', resourceCost: 10, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '用充滿蔑視的語氣和挑釁的姿態激怒敵人，讓對方在盛怒之下失去理智。被挑釁的敵人會不顧一切地將攻擊目標鎖定在你身上，完全無視你身後脆弱的隊友。這是身為前排戰士最重要的職責——以自己的血肉之軀守護夥伴。',
    effects: [{ type: 'taunt', value: 1, duration: 2 }],
  },
  war_cry: {
    id: 'war_cry', name: '戰吼', englishName: 'War Cry',
    classId: 'swordsman', learnLevel: 23, type: 'active',
    targetType: 'all_allies', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '仰天發出震撼大地的怒吼，聲浪在戰場上迴盪。這道飽含戰意的吼聲如同戰鼓擂動，讓每一位聽到的戰友熱血沸騰、士氣高漲。在戰吼的激勵下，全隊的攻擊力得到顯著提升，彷彿回應著共赴生死的決心。',
    effects: [{ type: 'atk_up', value: 10, duration: 5 }],
  },
  counter_stance: {
    id: 'counter_stance', name: '反擊架勢', englishName: 'Counter Stance',
    classId: 'swordsman', learnLevel: 27, type: 'active',
    targetType: 'self', resourceCost: 12, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '半蹲身軀，將武器斜持於身側，雙眼緊盯敵人的每一個動作。這是劍士在千百次戰鬥中領悟的以守代攻之術，當敵人的攻擊落下的瞬間，蓄勢已久的反擊便如毒蛇般迅猛地刺出。',
    effects: [{ type: 'counter', value: 100, duration: 1 }],
  },

  // ════════════════════════════════════════════
  //  法師 (Lv 10-29)
  // ════════════════════════════════════════════
  fireball: {
    id: 'fireball', name: '火球術', englishName: 'Fireball',
    classId: 'mage', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', resourceCost: 12, cooldown: 1,
    damageType: 'magical', element: 'fire', multiplier: 1.6,
    description: '雙手凝聚灼熱的魔力，在掌心形成一顆赤紅色的火焰球體。隨著咒語完成，火球如流星般射向敵人，在命中的瞬間爆發出猛烈的火焰。空氣中殘留的高溫讓周圍的草木都微微枯萎。',
  },
  frost_nova: {
    id: 'frost_nova', name: '冰霜新星', englishName: 'Frost Nova',
    classId: 'mage', learnLevel: 13, type: 'active',
    targetType: 'all_enemies', resourceCost: 18, cooldown: 3,
    damageType: 'magical', element: 'ice', multiplier: 1.0,
    description: '以自身為中心釋放一道刺骨的冰霜衝擊波，寒氣瞬間向四面八方擴散。凜冽的冰晶如暴風般席捲周圍所有敵人，被命中者的四肢開始結霜僵硬，行動變得遲緩而笨拙。地面上凝結的薄冰在光線下折射出冷冽的寒光。',
    effects: [{ type: 'slow', value: 30, duration: 2 }],
  },
  mana_shield: {
    id: 'mana_shield', name: '魔力盾', englishName: 'Mana Shield',
    classId: 'mage', learnLevel: 16, type: 'active',
    targetType: 'self', resourceCost: 5, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將體內的魔力凝聚成一層淡藍色的半透明護盾，如氣泡般包裹全身。當敵人的攻擊落下時，護盾會閃爍著吸收衝擊，以消耗魔力的代價保護脆弱的肉體。對於體質薄弱的法師而言，這道魔力屏障就是最後的生命防線。',
    effects: [{ type: 'mana_shield', value: 100, duration: 3 }],
  },
  lightning: {
    id: 'lightning', name: '雷擊', englishName: 'Lightning',
    classId: 'mage', learnLevel: 19, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 2,
    damageType: 'magical', element: 'lightning', multiplier: 2.0,
    description: '高舉法杖指向蒼穹，烏雲在頭頂迅速聚集，空氣中充滿了令人汗毛直豎的電荷。一道耀眼的閃電從雲層中劈下，以摧枯拉朽之勢貫穿目標。雷電的穿透力能無視部分魔法防禦，在敵人身上留下焦黑的灼痕。',
    special: { mdefPiercing: 20 },
  },
  meditation: {
    id: 'meditation', name: '冥想', englishName: 'Meditation',
    classId: 'mage', learnLevel: 23, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '閉上雙眼，讓意識沉入體內的魔力之泉，感受魔力如涓涓細流般緩緩恢復。常年的冥想修行讓法師與周圍的魔素形成共鳴，即使在激烈的戰鬥中，也能持續從空氣中汲取魔力補充消耗。',
    special: { mpRegenPercent: 3 },
  },
  elemental_mastery: {
    id: 'elemental_mastery', name: '元素精通', englishName: 'Elemental Mastery',
    classId: 'mage', learnLevel: 27, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '長年鑽研元素魔法的奧義，終於領悟了火、冰、雷三系元素之間的深層聯繫。這份對元素本質的理解讓每一道魔法都更加精準凝練，釋放出的元素之力比一般法師更為純粹強大。手指間不經意流轉的元素光芒，正是精通者的印記。',
    special: { elementalDamageBonus: 15 },
  },

  // ════════════════════════════════════════════
  //  遊俠 (Lv 10-29)
  // ════════════════════════════════════════════
  precise_shot: {
    id: 'precise_shot', name: '精準射擊', englishName: 'Precise Shot',
    classId: 'ranger', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 1,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '單眼瞇起，弓弦拉至耳際，箭尖穩穩指向目標的要害。屏息之間，手指鬆開弦弦，箭矢劃出一道幾乎看不見的軌跡，精準地命中獵物的弱點。這一箭融合了獵手多年的經驗與直覺，絕無落空的可能。',
    special: { guaranteedHit: true },
  },
  quick_step: {
    id: 'quick_step', name: '快速移動', englishName: 'Quick Step',
    classId: 'ranger', learnLevel: 13, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '腳尖輕點地面，身體如疾風般向側方閃移，在敵人的攻擊範圍外留下一道殘影。遊俠天生的敏捷在這一刻發揮到極致，每一步都恰到好處地避開致命的軌跡。輕盈的步法讓敵人的攻擊一再撲空，徒留揮舞的拳影。',
    effects: [{ type: 'dodge_up', value: 30, duration: 2 }],
  },
  poison_arrow: {
    id: 'poison_arrow', name: '毒箭', englishName: 'Poison Arrow',
    classId: 'ranger', learnLevel: 16, type: 'active',
    targetType: 'single_enemy', resourceCost: 12, cooldown: 2,
    damageType: 'physical', element: 'nature', multiplier: 1.0,
    description: '從箭袋中抽出一支箭頭泛著詭異紫光的毒箭，箭尖上塗抹的致命毒液在微光中閃爍。箭矢射入敵人體內後，毒素便沿著血管迅速擴散，讓中箭者在持續的劇痛中逐漸失去戰鬥力。毒液的配方是每位遊俠不傳之秘。',
    effects: [{ type: 'poison', value: 5, duration: 3 }],
  },
  trap: {
    id: 'trap', name: '陷阱', englishName: 'Trap',
    classId: 'ranger', learnLevel: 19, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.3,
    description: '俯身在地面巧妙地布設一個隱蔽的機關陷阱，落葉與泥土完美掩蓋了一切痕跡。當粗心的敵人踏入陷阱範圍，鋼製的機關猛然合攏，尖銳的倒刺深深刺入肉體，劇烈的疼痛讓獵物動彈不得。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },
  critical_edge: {
    id: 'critical_edge', name: '致命一擊', englishName: 'Critical Edge',
    classId: 'ranger', learnLevel: 23, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在無數次狩獵中練就了一雙能洞察致命要害的鷹眼，每一次出手都精準地瞄向敵人防禦最薄弱之處。這種近乎本能的殺招讓遊俠的攻擊頻頻命中要害，造成毀滅性的暴擊傷害。刀鋒所至之處，鮮血必隨之迸濺。',
    special: { critBonus: 12 },
  },
  barrage: {
    id: 'barrage', name: '連射', englishName: 'Barrage',
    classId: 'ranger', learnLevel: 27, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 0.6,
    description: '以驚人的手速連續從箭袋中抽出三支箭矢，弓弦來不及完全回彈便再次被拉滿。三道箭影幾乎同時射出，密集的箭矢如暴雨般傾瀉在目標身上，讓敵人在連續的衝擊中無法喘息。旁觀者甚至分不清這是三箭還是一箭。',
    special: { hitCount: 3 },
  },

  // ════════════════════════════════════════════
  //  祭司 (Lv 10-29)
  // ════════════════════════════════════════════
  heal: {
    id: 'heal', name: '治癒', englishName: 'Heal',
    classId: 'priest', learnLevel: 10, type: 'active',
    targetType: 'single_ally', resourceCost: 15, cooldown: 1,
    damageType: 'magical', element: 'light', multiplier: 2.0,
    description: '雙手散發出溫暖的聖光，如春風般撫過傷口。金色的光芒滲入肌膚，加速細胞再生，讓撕裂的傷口在眨眼間癒合。被治癒者會感到一陣舒適的暖意從傷處擴散到全身。',
    special: { isHeal: true },
  },
  purify: {
    id: 'purify', name: '淨化', englishName: 'Purify',
    classId: 'priest', learnLevel: 13, type: 'active',
    targetType: 'single_ally', resourceCost: 12, cooldown: 2,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '低聲吟誦古老的祈禱文，一圈圈聖潔的光環從雙手擴散而出，包裹住受詛咒的同伴。純淨的神聖之力如清泉般洗滌體內的毒素與邪氣，那些纏繞在身上的黑暗詛咒在聖光下如晨霧般消散無蹤。',
    special: { removeDebuffs: true },
  },
  holy_light: {
    id: 'holy_light', name: '神聖之光', englishName: 'Holy Light',
    classId: 'priest', learnLevel: 16, type: 'active',
    targetType: 'single_enemy', resourceCost: 18, cooldown: 2,
    damageType: 'magical', element: 'light', multiplier: 1.5,
    description: '高舉聖杖向天際祈求神明的力量，一道耀眼的金色光柱從天而降，灼燒被選中的邪惡存在。這道蘊含神聖意志的光芒對亡靈與不死生物有著致命的殺傷力，能將黑暗中遊蕩的亡魂徹底淨化。即使是普通敵人，也會在聖光的炙烤下痛苦不堪。',
    special: { undeadMultiplier: 2 },
  },
  blessing: {
    id: 'blessing', name: '祝福', englishName: 'Blessing',
    classId: 'priest', learnLevel: 19, type: 'active',
    targetType: 'single_ally', resourceCost: 20, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '虔誠地向神明祈禱，將神恩化為一道溫暖的光芒灑落在同伴身上。受到祝福的戰士會感到力量湧入四肢百骸，無論是揮劍的臂力、抵禦攻擊的韌性，還是施展魔法的專注力都得到了神聖的強化。金色的光環在受祝福者身周緩緩旋轉，彰顯著神明的庇佑。',
    effects: [
      { type: 'atk_up', value: 5, duration: 10 },
      { type: 'def_up', value: 5, duration: 10 },
      { type: 'matk_up', value: 5, duration: 10 },
      { type: 'mdef_up', value: 5, duration: 10 },
    ],
  },
  mass_heal: {
    id: 'mass_heal', name: '群體治癒', englishName: 'Mass Heal',
    classId: 'priest', learnLevel: 23, type: 'active',
    targetType: 'all_allies', resourceCost: 30, cooldown: 4,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '張開雙臂仰望蒼穹，口中吟誦著遠古的聖歌，柔和的聖光如春雨般從天空灑落。金色的光芒沐浴著每一位隊友，溫暖的治癒之力撫平他們身上大大小小的傷口。雖然每人分到的治癒量不如單體治癒，但在危急關頭能穩住全隊的生命線。',
    special: { isHeal: true },
  },
  divine_grace: {
    id: 'divine_grace', name: '神佑', englishName: 'Divine Grace',
    classId: 'priest', learnLevel: 27, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '多年的侍奉與祈禱讓祭司與神明之間建立了深厚的羈絆，神恩如泉水般源源不斷地流淌。這份特殊的眷顧使得每一次治癒都更加強效，金色的聖光比常人更為濃郁耀眼。被神佑之手觸碰的傷口，癒合速度遠超常理。',
    special: { healBonus: 20 },
  },

  // ════════════════════════════════════════════
  //  騎士 (Lv 30+) - 劍士系二轉
  // ════════════════════════════════════════════
  sacred_shield: {
    id: 'sacred_shield', name: '聖盾術', englishName: 'Sacred Shield',
    classId: 'knight', learnLevel: 30, type: 'active',
    targetType: 'self', resourceCost: 25, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '向天舉盾高聲禱告，一面由凝實聖光編織而成的金色護盾浮現於身前。這面承載著信仰之力的聖盾能夠吸收大量傷害，每一次敵人的攻擊都會讓護盾表面泛起聖潔的漣漪。直到聖光消散之前，騎士便是不可撼動的活堡壘。',
    effects: [{ type: 'shield', value: 200, duration: 4 }],
  },
  guardian_oath: {
    id: 'guardian_oath', name: '守護之誓', englishName: 'Guardian Oath',
    classId: 'knight', learnLevel: 33, type: 'active',
    targetType: 'single_ally', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '單膝跪地，將劍插入地面，以騎士的榮耀起誓守護身後的戰友。從這一刻起，所有指向被守護者的攻擊都會被騎士以肉身擋下。鮮血浸透了鎧甲，但騎士的背影始終如山嶽般屹立不搖。',
    special: { redirectDamage: true, duration: 3 },
  },
  judgment: {
    id: 'judgment', name: '制裁之錘', englishName: 'Judgment',
    classId: 'knight', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', resourceCost: 22, cooldown: 3,
    damageType: 'physical', element: 'light', multiplier: 1.8,
    description: '以神聖之力加持手中的武器，讓其化為灼熱的審判之錘。沉重的一擊落下時大地震顫，金色的衝擊波從落點向四周擴散。被制裁之錘擊中的敵人不僅承受巨大的傷害，更會在聖光的衝擊下陷入短暫的暈眩。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },
  unyielding: {
    id: 'unyielding', name: '不屈意志', englishName: 'Unyielding',
    classId: 'knight', learnLevel: 40, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '鋼鐵般的意志在死亡邊緣爆發出驚人的求生力量，即使承受足以致命的重創也絕不倒下。在那生死一線之間，騎士咬緊牙關用最後一絲力氣撐住身軀，鮮血從盔甲的縫隙中滲出，但雙腿依然穩穩站立。只要信念不滅，騎士便永不會倒。',
    effects: [{ type: 'unyielding', value: 1, duration: 10 }],
  },

  // ════════════════════════════════════════════
  //  狂戰士 (Lv 30+) - 劍士系二轉
  // ════════════════════════════════════════════
  frenzy: {
    id: 'frenzy', name: '狂暴', englishName: 'Frenzy',
    classId: 'berserker', learnLevel: 30, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '放棄一切防禦意識，讓積壓在胸中的殺意徹底釋放。血紅的鬥氣從全身噴薄而出，瞳孔染上猩紅的血色，肌肉膨脹到幾乎撐裂護甲。在狂暴狀態下，攻擊力暴增但防禦大幅下降，化身為只知進攻不知退卻的戰場修羅。',
    effects: [
      { type: 'atk_up', value: 40, duration: 5 },
      { type: 'def_down', value: 30, duration: 5 },
    ],
  },
  bloodthirst: {
    id: 'bloodthirst', name: '嗜血斬', englishName: 'Bloodthirst',
    classId: 'berserker', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 18, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.6,
    description: '以嗜血的渴望驅動巨斧劈向敵人，鋒利的刃口深深沒入血肉之中。濺出的鮮血彷彿被一股無形的力量牽引，化為絲絲紅色能量回流到狂戰士體內。每一刀都是對生命的掠奪，越是浴血奮戰，狂戰士越是生龍活虎。',
    special: { lifeSteal: 30 },
  },
  whirlwind: {
    id: 'whirlwind', name: '旋風斬', englishName: 'Whirlwind',
    classId: 'berserker', learnLevel: 36, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '以雙腳為軸心開始高速旋轉，手中的巨武器化為一道死亡的圓弧。狂暴的旋風斬將周圍所有靠近的敵人統統捲入刃風之中，血花在旋轉中四散飛濺。當旋轉停止時，狂戰士的腳下已是一片狼藉。',
  },
  death_gaze: {
    id: 'death_gaze', name: '死亡凝視', englishName: 'Death Gaze',
    classId: 'berserker', learnLevel: 40, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '瀕死之際，狂戰士的雙眼會散發出令人膽寒的死亡光芒，那是對生命最後的瘋狂執念。鮮血越是流失，體內的狂暴之力反而越發高漲，彷彿死神本身在為其加持。站在生死邊緣的狂戰士，正是戰場上最危險的存在。',
    special: { maxAtkBonus: 50 },
  },

  // ════════════════════════════════════════════
  //  劍聖 (Lv 30+) - 劍士系二轉
  // ════════════════════════════════════════════
  iaijutsu: {
    id: 'iaijutsu', name: '拔刀術', englishName: 'Iaijutsu',
    classId: 'sword_saint', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.8,
    description: '一手按住刀柄，身體微微前傾，在電光石火之間完成拔刀、斬擊、收刀的一連串動作。這道快到肉眼無法捕捉的一刀，在敵人意識到危險之前便已劃破咽喉。鋒利的刀刃歸鞘時發出清脆的聲響，鮮血才從傷口噴湧而出。',
    special: { priority: true },
  },
  afterimage: {
    id: 'afterimage', name: '殘影', englishName: 'Afterimage',
    classId: 'sword_saint', learnLevel: 33, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '劍聖的身法已臻化境，閃避敵人攻擊時會在原地留下一道虛幻的殘影。趁敵人被殘影迷惑的空隙，劍聖已悄然繞到最佳攻擊位置，下一刀必定精準命中要害。殘影消散的瞬間，致命的暴擊已然落下。',
    special: { guaranteedCritAfterDodge: true },
  },
  peerless_combo: {
    id: 'peerless_combo', name: '無雙連斬', englishName: 'Peerless Combo',
    classId: 'sword_saint', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', resourceCost: 30, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.5,
    description: '踏前一步進入絕對的攻擊領域，手中的劍化為五道接連不斷的閃光。每一斬都比上一斬更快、更準、更致命，暴擊的機率隨著連斬的節奏不斷攀升。當最後一斬落下時，五道劍痕在敵人身上交織成一個無雙的印記。',
    special: { hitCount: 5, critRatePerHit: 10 },
  },
  clear_mind: {
    id: 'clear_mind', name: '明鏡止水', englishName: 'Clear Mind',
    classId: 'sword_saint', learnLevel: 40, type: 'active',
    targetType: 'self', resourceCost: 25, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '閉上雙眼，讓心緒如止水般歸於寧靜，周圍的一切聲響都變得清晰而緩慢。在這種超然的意識狀態下，劍聖能預知敵人攻擊的軌跡，每一次閃避都行雲流水般優雅。氣息與天地相通，每次避開攻擊時傷口都在自然癒合。',
    effects: [{ type: 'dodge_up', value: 50, duration: 3 }],
    special: { healOnDodge: 5 },
  },

  // ════════════════════════════════════════════
  //  大法師 (Lv 30+) - 法師系二轉
  // ════════════════════════════════════════════
  meteor: {
    id: 'meteor', name: '隕石術', englishName: 'Meteor',
    classId: 'archmage', learnLevel: 30, type: 'active',
    targetType: 'all_enemies', resourceCost: 40, cooldown: 6,
    damageType: 'magical', element: 'fire', multiplier: 3.0,
    description: '展開魔法陣開始漫長而危險的詠唱，扭曲空間從天際彼端召喚一顆燃燒的巨大隕石。大地在隕石逼近時劇烈震動，灼熱的氣浪讓空氣都開始扭曲。隕石墜落的瞬間，毀滅性的衝擊波與漫天火雨吞噬戰場上的一切。',
    special: { castTime: 2 },
  },
  blizzard: {
    id: 'blizzard', name: '暴風雪', englishName: 'Blizzard',
    classId: 'archmage', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', resourceCost: 30, cooldown: 4,
    damageType: 'magical', element: 'ice', multiplier: 1.5,
    description: '揮動法杖攪動天象，召喚出席捲整個戰場的暴風雪。刺骨的寒風夾帶著鋒利的冰晶呼嘯而過，能見度瞬間降至零點。被暴風雪籠罩的敵人在刺骨寒冷中瑟瑟發抖，四肢逐漸麻木僵硬，行動變得極其遲緩。',
    effects: [{ type: 'slow', value: 40, duration: 2 }],
  },
  arcane_burst: {
    id: 'arcane_burst', name: '魔力爆發', englishName: 'Arcane Burst',
    classId: 'archmage', learnLevel: 36, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 8,
    damageType: 'magical', element: 'none', multiplier: 2.5,
    description: '將體內積蓄的龐大魔力在一瞬間全部引爆，純粹的奧術能量如洪水般傾瀉而出。爆發的魔力化為耀眼的白色光柱直衝雲霄，周圍的空間都在劇烈的能量波動中扭曲碎裂。這是大法師以半數魔力為代價換來的毀滅性一擊。',
    special: { consumeMpPercent: 50 },
  },
  elemental_heart: {
    id: 'elemental_heart', name: '元素之心', englishName: 'Elemental Heart',
    classId: 'archmage', learnLevel: 40, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在魔法修行的巔峰，大法師的心臟已與元素之力完全融合，化為一顆跳動的元素核心。體內的魔力容量遠超常人，冥想時更能以驚人的速度從天地間汲取魔素。胸口隱隱散發的元素光芒，是登峰造極之術者的證明。',
    special: { mpMaxBonus: 20, meditationDouble: true },
  },

  // ════════════════════════════════════════════
  //  暗黑術士 (Lv 30+) - 法師系二轉
  // ════════════════════════════════════════════
  drain_life: {
    id: 'drain_life', name: '生命汲取', englishName: 'Drain Life',
    classId: 'warlock', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 0.8,
    description: '伸出蒼白的手指，一道幽暗的紫黑色光線連接上目標的身軀。目標的生命力如同被看不見的水蛭般持續吸取，化為絲絲暗紅色的能量回流到術士體內。被汲取者面色逐漸蒼白，而暗黑術士的氣色卻越發紅潤。',
    special: { isDoT: true, lifeSteal: 100, duration: 3, tickMultiplier: 0.8 },
  },
  fear: {
    id: 'fear', name: '恐懼', englishName: 'Fear',
    classId: 'warlock', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 22, cooldown: 5,
    damageType: 'pure', element: 'dark', multiplier: 0,
    description: '直視目標的雙眼，將深淵中最可怖的夢魘直接灌入其意識深處。被恐懼籠罩的敵人瞳孔驟縮，渾身劇烈顫抖，眼前浮現出令人崩潰的幻象。極度的恐懼讓目標完全喪失戰鬥意志，只能蜷縮在原地瑟瑟發抖。',
    effects: [{ type: 'fear', value: 1, duration: 2 }],
  },
  shadow_blast: {
    id: 'shadow_blast', name: '暗影爆破', englishName: 'Shadow Blast',
    classId: 'warlock', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', resourceCost: 28, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 2.0,
    description: '凝聚掌中翻湧的暗影之力，將其壓縮至極限後猛然轟出。黑色的能量球在命中目標的瞬間炸裂開來，暗影碎片四散穿透一切。若目標正承受持續性詛咒的折磨，暗影爆破會引發恐怖的連鎖反應，造成遠超預期的毀滅性傷害。',
    special: { dotBonusDamage: 50 },
  },
  soul_pact: {
    id: 'soul_pact', name: '靈魂契約', englishName: 'Soul Pact',
    classId: 'warlock', learnLevel: 40, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '與冥界簽訂的禁忌契約，以靈魂為籌碼換取黑暗的力量。每當一個生命在術士手中消逝，靈魂的殘餘能量便自動被契約吸收，轉化為術士的生命與魔力。殺戮越多，力量越強——這正是踏入黑暗之道的代價與恩賜。',
    special: { killHealPercent: 10 },
  },

  // ════════════════════════════════════════════
  //  時空術士 (Lv 30+) - 法師系二轉
  // ════════════════════════════════════════════
  time_slow: {
    id: 'time_slow', name: '時間減速', englishName: 'Time Slow',
    classId: 'chronomancer', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '伸出手指在空氣中劃出一個精密的時間符文，扭曲目標周圍的時間之流。被影響的敵人彷彿陷入了琥珀之中，每一個動作都變得如蝸牛般遲緩。在他們眼中，世界正以正常速度運轉，卻不知自己早已被甩在時間的洪流之後。',
    effects: [{ type: 'slow', value: 100, duration: 2 }],
  },
  haste: {
    id: 'haste', name: '加速術', englishName: 'Haste',
    classId: 'chronomancer', learnLevel: 33, type: 'active',
    targetType: 'single_ally', resourceCost: 25, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將手掌按在隊友背上，注入加速的時間之力。受術者周圍的時間流驟然加快，在旁人眼中其動作快得如同鬼魅的殘影。一個回合的時間裡，被加速的隊友能完成兩次完整的行動，彷彿時間為其獨自停留。',
    effects: [{ type: 'speed_up', value: 100, duration: 1 }],
  },
  rewind: {
    id: 'rewind', name: '時光倒流', englishName: 'Rewind',
    classId: 'chronomancer', learnLevel: 36, type: 'active',
    targetType: 'single_ally', resourceCost: 35, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '逆轉時間的禁忌魔法，在空氣中編織出金色的時間齒輪倒轉旋轉。目標的身體開始發出朦朧的光芒，傷口一一癒合，流失的鮮血逆流回體內。三個回合前的狀態在時空的逆流中被完美重現，彷彿那些傷害從未發生過。',
    special: { rewindRounds: 3 },
  },
  time_stop: {
    id: 'time_stop', name: '時間停止', englishName: 'Time Stop',
    classId: 'chronomancer', learnLevel: 40, type: 'active',
    targetType: 'all_enemies', resourceCost: 50, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '展開最強大的時空禁術，巨大的魔法陣覆蓋整個戰場，所有時間齒輪戛然而止。萬物靜止，飛鳥凝固在半空，飄落的樹葉懸停不動。敵人被完全封印在凝固的時間中，如同被封存在永恆的一瞬，任人宰割。',
    effects: [{ type: 'freeze', value: 1, duration: 1 }],
  },

  // ════════════════════════════════════════════
  //  神射手 (Lv 30+) - 遊俠系二轉
  // ════════════════════════════════════════════
  piercing_arrow: {
    id: 'piercing_arrow', name: '穿甲箭', englishName: 'Piercing Arrow',
    classId: 'marksman', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', resourceCost: 18, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '取出特製的鎢鋼箭頭穿甲箭，將弓弦拉到極限後鬆手。箭矢以超越音速的速度射出，尖銳的箭頭旋轉著撕裂空氣，輕而易舉地貫穿厚重的鎧甲。即使是全身板甲的重裝騎士，在這一箭面前也形同紙糊。',
    special: { defPiercing: 50 },
  },
  eagle_eye: {
    id: 'eagle_eye', name: '鷹眼', englishName: 'Eagle Eye',
    classId: 'marksman', learnLevel: 33, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '如同翱翔天際的雄鷹般銳利的雙眼，能在千步之外看清獵物的每一個致命弱點。這雙神射手之眼賦予了命中要害時更為驚人的殺傷力，暴擊的箭矢宛如天降神罰。傳說中的神射手甚至能射穿龍鱗上的裂縫。',
    special: { critDamageBonus: 50 },
  },
  arrow_rain: {
    id: 'arrow_rain', name: '箭雨', englishName: 'Arrow Rain',
    classId: 'marksman', learnLevel: 36, type: 'active',
    targetType: 'all_enemies', resourceCost: 30, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.6,
    description: '將多支箭矢同時搭上弓弦，以極高的仰角射向天空。箭矢在最高點如流星般散開，化為遮天蔽日的箭雨傾瀉而下。密集的箭矢持續不斷地落在敵陣之中，讓所有暴露在外的敵人無處可逃，戰場瞬間化為死亡之雨的刑場。',
    special: { isDoT: true, duration: 3, tickMultiplier: 0.6 },
  },
  headshot: {
    id: 'headshot', name: '一擊必殺', englishName: 'Headshot',
    classId: 'marksman', learnLevel: 40, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 8,
    damageType: 'physical', element: 'none', multiplier: 3.0,
    description: '調整呼吸，讓心跳降至最低，以超越極限的專注力瞄準目標的致命要害。時間彷彿在這一瞬凝固，弓弦鬆開的刹那，箭矢帶著必殺的意志劃破長空。命中要害時，即使是龐大的怪物也會應聲倒下——這便是神射手畢生絕技的真諦。',
    special: { instantKillChance: 5 },
  },

  // ════════════════════════════════════════════
  //  刺客 (Lv 30+) - 遊俠系二轉
  // ════════════════════════════════════════════
  stealth: {
    id: 'stealth', name: '潛行', englishName: 'Stealth',
    classId: 'assassin', learnLevel: 30, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '壓低身軀融入周圍的陰影之中，呼吸、心跳、甚至氣息都被完全抹消。在隱身狀態下，刺客如同一縷幽魂般在敵人之間穿行，無人能察覺其存在。而從暗處發動的第一擊，必定精準命中要害造成致命的暴擊。',
    effects: [{ type: 'stealth', value: 1, duration: 3 }],
  },
  backstab: {
    id: 'backstab', name: '背刺', englishName: 'Backstab',
    classId: 'assassin', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 2.5,
    description: '從目標的盲區悄無聲息地逼近，在其毫無防備的瞬間將匕首深深刺入後背的要害。刀刃精準地切斷了脊椎旁的神經與血管，受害者甚至來不及發出慘叫便已癱倒。這是刺客最為致命的暗殺絕技，唯有從隱身中才能施展。',
    special: { requiresStealth: true },
  },
  deadly_poison: {
    id: 'deadly_poison', name: '致命毒藥', englishName: 'Deadly Poison',
    classId: 'assassin', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', resourceCost: 22, cooldown: 5,
    damageType: 'physical', element: 'nature', multiplier: 0.5,
    description: '從腰間暗格中取出一瓶冒著詭異紫煙的劇毒藥劑，小心翼翼地塗抹在武器的刃口上。這種由稀有毒草與魔獸毒腺調配的致命毒藥，一旦滲入血液便無藥可解。中毒者的面色會逐漸發青，生命力被一點一滴地蠶食殆盡。',
    special: { isDoT: true, maxHpPercent: 8, duration: 4 },
  },
  shadow_step: {
    id: 'shadow_step', name: '暗影步', englishName: 'Shadow Step',
    classId: 'assassin', learnLevel: 40, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 6,
    damageType: 'physical', element: 'dark', multiplier: 1.5,
    description: '身形化為一縷暗影，穿越空間的縫隙瞬間出現在目標身後。在敵人驚愕回頭的瞬間，冰冷的刀刃已劃過其要害，殘留的暗影能量將刺客的身形再次吞沒。一擊即走，來去無蹤——這便是暗影步的恐怖之處。',
    effects: [{ type: 'stealth', value: 1, duration: 2 }],
  },

  // ════════════════════════════════════════════
  //  馴獸師 (Lv 30+) - 遊俠系二轉
  // ════════════════════════════════════════════
  tame: {
    id: 'tame', name: '馴服', englishName: 'Tame',
    classId: 'beast_master', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', resourceCost: 30, cooldown: 10,
    damageType: 'pure', element: 'nature', multiplier: 0,
    description: '放下武器，以平靜而堅定的眼神直視野獸的雙眼，發出只有馴獸師才懂的低沉呢喃。那是超越語言的心靈溝通，傳達著信任與友善的訊息。若野獸接受了這份羈絆，牠便會成為忠實的戰鬥夥伴，生死相隨。',
    special: { tameChance: 30 },
  },
  feral_roar: {
    id: 'feral_roar', name: '野性咆哮', englishName: 'Feral Roar',
    classId: 'beast_master', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', resourceCost: 18, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '向夥伴發出信號，馴服的野獸隨即仰天發出震懾靈魂的咆哮。那飽含野性之力的吼聲在戰場上回盪，敵人在原始的恐懼中不由自主地後退。與此同時，這道咆哮也激發了夥伴體內沉睡的野性本能，攻擊力大幅飆升。',
    effects: [
      { type: 'atk_up', value: 30, duration: 3 },
      { type: 'fear', value: 1, duration: 1 },
    ],
  },
  pack_hunt: {
    id: 'pack_hunt', name: '協同攻擊', englishName: 'Pack Hunt',
    classId: 'beast_master', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', resourceCost: 22, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '與戰鬥夥伴心意相通，以完美的默契從兩個方向同時撲向獵物。馴獸師的利刃與野獸的尖牙在同一瞬間撕裂目標，毫無喘息的連續攻擊讓敵人腹背受敵。人獸合一的狩獵技巧，正是馴獸師最強大的戰鬥方式。',
    special: { hitCount: 2 },
  },
  beast_soul: {
    id: 'beast_soul', name: '野獸之魂', englishName: 'Beast Soul',
    classId: 'beast_master', learnLevel: 40, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '與馴服的野獸建立了超越生死的靈魂羈絆，彼此的生命力相互流通共鳴。馴獸師能繼承夥伴一部分強大的身體素質，而當夥伴在戰鬥中倒下時，這份羈絆會自動觸發，以馴獸師的生命力為代價將夥伴從死亡邊緣拉回。',
    special: { petStatInherit: 20, petAutoRevive: true },
  },

  // ════════════════════════════════════════════
  //  神官 (Lv 30+) - 祭司系二轉
  // ════════════════════════════════════════════
  resurrection: {
    id: 'resurrection', name: '復活', englishName: 'Resurrection',
    classId: 'high_priest', learnLevel: 30, type: 'active',
    targetType: 'single_ally', resourceCost: 40, cooldown: 10,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '跪在倒下的戰友身旁，以最虔誠的心向神明獻上復活的禱詞。耀眼的聖光從天際傾瀉而下，將已逝者的靈魂從冥界的入口牽引回來。隨著金色光柱的消散，戰友緩緩睜開雙眼，帶著半數的生命力重返戰場。',
    special: { revive: true, reviveHpPercent: 50 },
  },
  sanctuary: {
    id: 'sanctuary', name: '聖域', englishName: 'Sanctuary',
    classId: 'high_priest', learnLevel: 33, type: 'active',
    targetType: 'all_allies', resourceCost: 35, cooldown: 6,
    damageType: 'magical', element: 'light', multiplier: 0,
    description: '在腳下刻畫出巨大的神聖法陣，金色的結界向四周擴展形成一片受神庇佑的聖域。踏入聖域的每一位隊友都能感受到持續不斷的治癒之力，傷口在聖潔的光芒中緩緩癒合。這片淨土在戰火中宛如沙漠中的綠洲，是隊伍最堅實的後盾。',
    effects: [{ type: 'regen', value: 8, duration: 5 }],
  },
  divine_shield: {
    id: 'divine_shield', name: '神聖護盾', englishName: 'Divine Shield',
    classId: 'high_priest', learnLevel: 36, type: 'active',
    targetType: 'single_ally', resourceCost: 30, cooldown: 8,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '以最高位的聖術在目標身周編織出一面金光萬丈的神聖護盾，其神性之力足以隔絕世間一切傷害。在護盾存續的短暫時間內，無論是物理的刀劍還是魔法的烈焰都無法觸及受保護者分毫。這是神官能給予的最極致的守護。',
    effects: [{ type: 'invincible', value: 1, duration: 1 }],
  },
  angel_wings: {
    id: 'angel_wings', name: '天使之翼', englishName: 'Angel Wings',
    classId: 'high_priest', learnLevel: 40, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '背後浮現出一對由純淨聖光凝聚而成的天使之翼，散發著慈悲而神聖的光輝。這份天使的恩賜讓治癒之力永不浪費——當治癒量超過傷口所需時，多餘的聖光會自動凝結為一層保護性的光盾覆蓋在受術者身上。',
    special: { overhealToShield: true },
  },

  // ════════════════════════════════════════════
  //  德魯伊 (Lv 30+) - 祭司系二轉
  // ════════════════════════════════════════════
  thorns: {
    id: 'thorns', name: '荊棘術', englishName: 'Thorns',
    classId: 'druid', learnLevel: 30, type: 'active',
    targetType: 'single_ally', resourceCost: 18, cooldown: 4,
    damageType: 'magical', element: 'nature', multiplier: 0,
    description: '吟誦自然的古語，召喚帶刺的荊棘藤蔓纏繞在隊友的鎧甲之上。這些活生生的植物荊棘會在受到近身攻擊時自動反擊，尖銳的刺棘刺入攻擊者的肉體。膽敢近身的敵人會發現，每一拳打出都像是在擁抱一叢帶毒的荊棘叢。',
    effects: [{ type: 'thorns', value: 20, duration: 4 }],
  },
  wrath_of_nature: {
    id: 'wrath_of_nature', name: '自然之怒', englishName: 'Wrath of Nature',
    classId: 'druid', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 3,
    damageType: 'magical', element: 'nature', multiplier: 1.5,
    description: '高舉橡木法杖與大地共鳴，喚醒沉睡在土壤深處的自然之怒。巨大的藤蔓從地面暴烈竄出，鋒利的葉片如刀刃般斬向所有敵人，大地本身都在為德魯伊的憤怒而震動。自然的力量是溫柔的，但當它發怒時，萬物都要為之顫慄。',
  },
  regeneration: {
    id: 'regeneration', name: '再生', englishName: 'Regeneration',
    classId: 'druid', learnLevel: 36, type: 'active',
    targetType: 'single_ally', resourceCost: 22, cooldown: 4,
    damageType: 'magical', element: 'nature', multiplier: 0,
    description: '將大自然蓬勃的生命力注入隊友體內，讓其獲得如同森林般旺盛的再生能力。翠綠色的光芒在受術者的皮膚下流動，每一個傷口都在以肉眼可見的速度生長出新的組織。這份自然的恩賜會持續守護著受術者，直到所有的傷痛都被治癒。',
    effects: [{ type: 'regen', value: 8, duration: 5 }],
  },
  shapeshift: {
    id: 'shapeshift', name: '變身', englishName: 'Shapeshift',
    classId: 'druid', learnLevel: 40, type: 'active',
    targetType: 'self', resourceCost: 30, cooldown: 10,
    damageType: 'pure', element: 'nature', multiplier: 0,
    description: '以德魯伊秘傳的變形術改寫自身的生命形態，化身為大自然中最強大的野獸。變為巨熊時，厚實的毛皮與龐大的體型帶來驚人的防禦力；化為蒼鷹時，銳利的爪牙與疾風般的速度讓敵人無從招架。人與獸的界線在德魯伊面前不過是一念之差。',
    special: { forms: ['bear', 'eagle'] },
  },

  // ════════════════════════════════════════════
  //  審判者 (Lv 30+) - 祭司系二轉
  // ════════════════════════════════════════════
  sacred_flame: {
    id: 'sacred_flame', name: '聖火', englishName: 'Sacred Flame',
    classId: 'inquisitor', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', resourceCost: 18, cooldown: 2,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '掌心燃起一團不滅的聖火，將其投向被判定為異端的目標。這團帶有審判意志的白色火焰附著在敵人身上持續灼燒，任何水與魔法都無法將其撲滅。更為可怕的是，聖火會汙染傷口使其難以癒合，大幅削弱任何治癒效果。',
    effects: [
      { type: 'burn', value: 5, duration: 3 },
      { type: 'heal_reduction', value: 50, duration: 3 },
    ],
  },
  divine_punishment: {
    id: 'divine_punishment', name: '天譴', englishName: 'Divine Punishment',
    classId: 'inquisitor', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 22, cooldown: 3,
    damageType: 'magical', element: 'light', multiplier: 1.5,
    description: '以審判者的威嚴宣判神明的天譴，一道刺目的聖光從天而降貫穿罪人。這道懲罰之光會根據目標已受的傷來加重刑罰——傷勢越重，天譴的力量越發猛烈。對於那些苟延殘喘的敵人而言，天譴便是壓垮駱駝的最後一根稻草。',
    special: { lostHpDamagePercent: 30 },
  },
  heresy_trial: {
    id: 'heresy_trial', name: '異端審判', englishName: 'Heresy Trial',
    classId: 'inquisitor', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '手持聖典高聲宣讀異端審判的判詞，一個燃燒著聖火的烙印浮現在目標的額頭上。被標記為異端者在審判之光下無所遁形，身上的一切防禦都被削弱，承受的傷害大幅增加。這道烙印是最嚴厲的宗教制裁，直到贖罪完畢才會消散。',
    effects: [{ type: 'mark', value: 25, duration: 4 }],
  },
  wrath_of_god: {
    id: 'wrath_of_god', name: '神怒', englishName: 'Wrath of God',
    classId: 'inquisitor', learnLevel: 40, type: 'active',
    targetType: 'all_enemies', resourceCost: 45, cooldown: 8,
    damageType: 'magical', element: 'light', multiplier: 2.0,
    description: '張開雙臂向蒼穹呼喚神明最猛烈的怒火，天空中裂開一道金色的縫隙。灼熱的神聖之光如瀑布般從天際傾瀉而下，焚燒戰場上一切不潔之物。那些已被標記為異端的目標會在神怒之中承受雙倍的懲罰，化為灰燼是他們唯一的歸宿。',
    special: { markedMultiplier: 2 },
  },
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

// ─── 工具函式 ───

/** 按職業取得可學技能 */
export function getSkillsForClass(classId: ClassId): SkillDef[] {
  return Object.values(SKILL_DEFS).filter((s) => s.classId === classId);
}

/** 取得角色可用的所有技能（含前置職業的技能） */
export function getAllAvailableSkills(classId: ClassId): SkillDef[] {
  const classDef = CLASS_DEFS[classId];
  const skills = getSkillsForClass(classId);

  if (classDef?.parentClass) {
    skills.push(...getAllAvailableSkills(classDef.parentClass));
  }

  return skills;
}

/** 取得角色在指定等級可學的技能 */
export function getLearnableSkills(classId: ClassId, level: number): SkillDef[] {
  return getAllAvailableSkills(classId).filter((s) => s.learnLevel <= level);
}

/** 根據 ID 取得技能定義 */
export function getSkillDef(skillId: string): SkillDef | undefined {
  return SKILL_DEFS[skillId];
}
