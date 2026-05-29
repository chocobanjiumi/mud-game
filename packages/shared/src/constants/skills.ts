// 技能定義 - 所有職業的技能資料

import type { ClassId } from '../types/player.js';
import type { SkillAttackSource, SkillDef, SkillImplementationStatus, SkillScaling, SkillTag, SkillTargetType, SkillUsageContext, StatusEffectType } from '../types/skill.js';
import { CLASS_DEFS } from './classes.js';
import { FAITH_DEFS, RACE_DEFS } from './origins.js';

type RawSkillDef = Omit<SkillDef, 'tags' | 'scaling' | 'usageContext' | 'attackSource' | 'shortDescription' | 'fullDescription' | 'implementationStatus'> & Partial<Pick<SkillDef, 'tags' | 'scaling' | 'usageContext' | 'attackSource' | 'shortDescription' | 'fullDescription' | 'implementationStatus'>>;

export interface ClassBuildDef {
  id: string;
  classId: ClassId;
  name: string;
  skillTags: SkillTag[];
  affixSkillTags: SkillTag[];
  description: string;
}

const COMMON_ORIGIN_SKILL_ICON_IDS = [
  'slash',
  'guard',
  'first_aid',
  'inspect',
  'survival',
  'pack_sense',
  'field_awareness',
  'steady_hands',
  'desperate_strike',
  'race_human_adaptability',
  'race_elf_keen_senses',
  'race_dwarf_stoneblood',
  'race_orc_battleblood',
  'race_halfling_lucky_steps',
  'race_dragonborn_dragonblood',
  'race_shadowkin_shadow_affinity',
  'faith_aelora_dawn_grace',
  'faith_karvos_battle_fervor',
  'faith_ithern_whispering_pages',
  'faith_mirak_golden_road',
  'faith_virdan_forest_stride',
  'faith_shalan_moon_whisper',
  'faith_talorn_stormblood',
  'faith_oser_dead_whispers',
  'faith_brokk_forgeheart',
  'faith_nesha_forbidden_echo',
] as const;

const COMMON_ORIGIN_SKILL_ICON_PATHS: Record<string, string> = Object.fromEntries(
  COMMON_ORIGIN_SKILL_ICON_IDS.map(skillId => [skillId, `/images/skills/icons/${skillId}.png`]),
);

const STARTER_SKILL_ICON_PATHS: Record<string, string> = {
  ...COMMON_ORIGIN_SKILL_ICON_PATHS,
  warrior_slash: '/images/skills/icons/warrior_slash.png',
  iron_wall: '/images/skills/icons/iron_wall.png',
  taunt: '/images/skills/icons/taunt.png',
  blade_aura: '/images/skills/icons/blade_aura.png',
  war_cry: '/images/skills/icons/war_cry.png',
  power_strike: '/images/skills/icons/power_strike.png',
  counter_stance: '/images/skills/icons/counter_stance.png',
  magic_missile: '/images/skills/icons/magic_missile.png',
  mana_shield: '/images/skills/icons/mana_shield.png',
  fireball: '/images/skills/icons/fireball.png',
  frost_nova: '/images/skills/icons/frost_nova.png',
  elemental_mastery: '/images/skills/icons/elemental_mastery.png',
  lightning: '/images/skills/icons/lightning.png',
  meditation: '/images/skills/icons/meditation.png',
  precise_shot: '/images/skills/icons/precise_shot.png',
  quick_step: '/images/skills/icons/quick_step.png',
  ranger_scout: '/images/skills/icons/ranger_scout.png',
  poison_arrow: '/images/skills/icons/poison_arrow.png',
  trap: '/images/skills/icons/trap.png',
  critical_edge: '/images/skills/icons/critical_edge.png',
  barrage: '/images/skills/icons/barrage.png',
  holy_light: '/images/skills/icons/holy_light.png',
  heal: '/images/skills/icons/heal.png',
  blessing: '/images/skills/icons/divine_shield.png',
  purify: '/images/skills/icons/cleanse.png',
  priest_holy_bell: '/images/skills/icons/holy_bell.png',
  mass_heal: '/images/skills/icons/mass_heal.png',
  divine_grace: '/images/skills/icons/exorcism_ward.png',
};

export const CLASS_BUILD_DEFS: Partial<Record<ClassId, ClassBuildDef[]>> = {
  swordsman: [
    { id: 'swordsman_vanguard', classId: 'swordsman', name: '前衛守勢', skillTags: ['defense', 'control'], affixSkillTags: ['defense', 'control'], description: '以鐵壁、血性復甦與反擊架勢穩住前線。' },
    { id: 'swordsman_battlecry', classId: 'swordsman', name: '戰吼壓制', skillTags: ['burst', 'support'], affixSkillTags: ['burst', 'resource'], description: '用戰吼與重擊建立短爆發節奏。' },
  ],
  mage: [
    { id: 'mage_elementalist', classId: 'mage', name: '元素爆破', skillTags: ['magical', 'aoe'], affixSkillTags: ['burst', 'resource'], description: '以火、冰、雷輪轉製造範圍魔法壓力。' },
    { id: 'mage_arcane_guard', classId: 'mage', name: '魔盾迴路', skillTags: ['defense', 'resource'], affixSkillTags: ['defense', 'resource'], description: '用魔力盾與冥想拉長施法續航。' },
  ],
  ranger: [
    { id: 'ranger_marksman', classId: 'ranger', name: '精準狙擊', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '用精準射擊與專注齊射打出單體爆發。' },
    { id: 'ranger_trapper', classId: 'ranger', name: '陷阱毒箭', skillTags: ['control', 'nature'], affixSkillTags: ['control', 'resource'], description: '以陷阱、毒箭和機動性處理怪物節奏。' },
  ],
  priest: [
    { id: 'priest_shepherd', classId: 'priest', name: '聖光牧者', skillTags: ['heal', 'support'], affixSkillTags: ['defense', 'resource'], description: '專注治療、淨化與團隊增益。' },
    { id: 'priest_smite', classId: 'priest', name: '懲戒信徒', skillTags: ['light', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以聖光攻擊和祝福建立攻守節奏。' },
  ],
  knight: [
    { id: 'knight_bulwark', classId: 'knight', name: '聖盾壁壘', skillTags: ['defense', 'support'], affixSkillTags: ['defense', 'resource'], description: '以騎乘守護、聖盾術與最後堡壘築起鐵壁防線，守護隊伍安全。偏重 stability / guardPower。' },
    { id: 'knight_judicator', classId: 'knight', name: '審判騎槍', skillTags: ['light', 'interrupt', 'burst'], affixSkillTags: ['control', 'burst'], description: '以衝鋒、制裁之錘與聖裁天降打出毀滅性爆發。偏重 chargePower。' },
  ],
  berserker: [
    { id: 'berserker_bloodlust', classId: 'berserker', name: '嗜血狂怒', skillTags: ['burst', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以狂暴連擊、毀滅劈斬與修羅化身追求極致爆發。快速壓低 HP 觸發高刻度加成。' },
    { id: 'berserker_survivor', classId: 'berserker', name: '瀕死求生', skillTags: ['defense', 'resource'], affixSkillTags: ['defense', 'resource'], description: '以嗜血、血肉化盾與痛覺錨定在低血量邊緣持續戰鬥。' },
  ],
  sword_saint: [
    { id: 'sword_saint_iaijutsu', classId: 'sword_saint', name: '拔刀會心', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以拔刀術與天斷在攻勢中追求單體極限爆發，偏重攻勢→守勢的快速流轉。' },
    { id: 'sword_saint_afterimage', classId: 'sword_saint', name: '殘影連斬', skillTags: ['defense', 'control'], affixSkillTags: ['defense', 'control'], description: '以無雙連斬、空步與心斬維持三姿態完整流轉，追求持續戰鬥節奏。' },
  ],
  archmage: [
    { id: 'archmage_cataclysm', classId: 'archmage', name: '元素風暴', skillTags: ['aoe', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以三重鑄造和天啟鑄造追求元素反應的最大爆發。' },
    { id: 'archmage_arcane_engine', classId: 'archmage', name: '鑄造循環', skillTags: ['resource', 'defense'], affixSkillTags: ['resource', 'defense'], description: '以元素回流和精通維持鑄造框的高效循環。' },
  ],
  warlock: [
    { id: 'warlock_curse', classId: 'warlock', name: '魔偶攻勢', skillTags: ['summon', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以魔偶攻擊模式、雙重指令和自爆追求最大輸出。' },
    { id: 'warlock_drain', classId: 'warlock', name: '魔偶戰術', skillTags: ['summon', 'defense'], affixSkillTags: ['defense', 'resource'], description: '以魔偶防禦/充能模式和跨房派遣靈活控場。' },
  ],
  chronomancer: [
    { id: 'chronomancer_lockdown', classId: 'chronomancer', name: '次元封鎖', skillTags: ['control', 'support'], affixSkillTags: ['control', 'resource'], description: '以次元壁壘和牽引控制戰場空間。' },
    { id: 'chronomancer_paradox', classId: 'chronomancer', name: '次元攻勢', skillTags: ['burst', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以次元折疊、時空斷裂和崩塌追求跨房爆發。' },
  ],
  marksman: [
    { id: 'marksman_headshot', classId: 'marksman', name: '精準狙殺', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以瞄準和遠射追求超遠距離的致命一擊。偏重瞄準層數的累積與爆發。' },
    { id: 'marksman_suppression', classId: 'marksman', name: '箭雨壓制', skillTags: ['aoe', 'control'], affixSkillTags: ['control', 'resource'], description: '以連射、爆裂箭和追蹤箭覆蓋戰場。偏重不瞄準的快速連續火力。' },
  ],
  assassin: [
    { id: 'assassin_execution', classId: 'assassin', name: '暗殺連鎖', skillTags: ['burst', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以暗殺、影步和死神之吻追求潛行後的致命爆發。偏重單體斬殺。' },
    { id: 'assassin_poison', classId: 'assassin', name: '暗影遊擊', skillTags: ['control', 'defense'], affixSkillTags: ['control', 'resource'], description: '以煙霧彈、暗影分身和毒刃維持潛行戰術。偏重持續騷擾和生存。' },
  ],
  beast_master: [
    { id: 'beast_master_pack', classId: 'beast_master', name: '獸王合擊', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以寵物衝鋒、野性共鳴和融合追求人獸合一的爆發。' },
    { id: 'beast_master_command', classId: 'beast_master', name: '馴獸戰術', skillTags: ['control', 'support'], affixSkillTags: ['control', 'defense'], description: '以寵物防守、派遣和獸王咆哮靈活控場。' },
  ],
  high_priest: [
    { id: 'high_priest_miracle', classId: 'high_priest', name: '聖殿治癒', skillTags: ['heal', 'summon'], affixSkillTags: ['defense', 'resource'], description: '以祭壇回血、升級和神聖屏障維持全隊生命。偏重祭壇防禦面。' },
    { id: 'high_priest_ward', classId: 'high_priest', name: '獻祭制裁', skillTags: ['damage', 'light'], affixSkillTags: ['burst', 'resource'], description: '以獻祭、獻祭強化和永恆聖殿追求祭壇攻擊面。偏重獻祭傷害。' },
  ],
  druid: [
    { id: 'druid_wildshape', classId: 'druid', name: '靈界救贖', skillTags: ['heal', 'support'], affixSkillTags: ['defense', 'resource'], description: '以靈魂牽引和集體牽引在靈界中拯救隊友。偏重復活和跨界治療。' },
    { id: 'druid_regrowth', classId: 'druid', name: '靈界戰術', skillTags: ['control', 'damage'], affixSkillTags: ['control', 'resource'], description: '以靈界放逐和靈界歸還衝擊控制戰場。偏重放逐和跨界進攻。' },
  ],
  inquisitor: [
    { id: 'inquisitor_verdict', classId: 'inquisitor', name: '審判收割', skillTags: ['light', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以審判和天罰消耗罪業造成爆發傷害。偏重罪業轉傷害。' },
    { id: 'inquisitor_silence', classId: 'inquisitor', name: '赦免救贖', skillTags: ['heal', 'support'], affixSkillTags: ['defense', 'resource'], description: '以赦免和贖罪將罪業轉化為治療和資源。偏重罪業轉治療。' },
  ],
};

/** 所有技能定義 */
const RAW_SKILL_DEFS: Record<string, RawSkillDef> = {
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
  pack_sense: {
    id: 'pack_sense', name: '行囊感知', englishName: 'Pack Sense',
    classId: 'adventurer', learnLevel: 3, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '長途跋涉讓冒險者懂得如何整理裝備與分配補給。即使在混亂戰鬥中，也能迅速找到合適的道具與備用武器，讓每次整備都更有效率。',
    special: { inventoryHandlingBonus: 10 },
  },
  field_awareness: {
    id: 'field_awareness', name: '戰場感知', englishName: 'Field Awareness',
    classId: 'adventurer', learnLevel: 5, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '經歷過野外突襲與地城伏擊後，冒險者學會在危險真正出現前觀察腳步聲、風向與敵意。這份感知能提早發現破綻，也能減少被偷襲的機會。',
    special: { ambushResist: 10 },
  },
  steady_hands: {
    id: 'steady_hands', name: '穩定手法', englishName: 'Steady Hands',
    classId: 'adventurer', learnLevel: 7, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '無論是包紮、採集還是臨陣換裝，穩定的手法都能避免慌亂造成的失誤。這是所有冒險者在旅途中慢慢磨出的基本功。',
    special: { utilityActionBonus: 10 },
  },
  dirty_trick: {
    id: 'dirty_trick', name: '干擾手段', englishName: 'Dirty Trick',
    classId: 'adventurer', learnLevel: 9, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '抓起沙土、碎石或隨手可得的小物擲向敵人視線，打亂對方正在蓄勢的動作。這種手段稱不上光彩，卻常常能在怪物準備危險攻擊時爭取到活命的空隙。',
    effects: [{ type: 'slow', value: 30, duration: 1 }],
    special: { interrupt: true },
  },
  desperate_strike: {
    id: 'desperate_strike', name: '孤注一擊', englishName: 'Desperate Strike',
    classId: 'adventurer', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 2.0,
    description: '在退無可退的瞬間將全部力量壓進一次攻擊，放棄後續餘裕換取短暫而猛烈的爆發。這不是成熟職業的奧義，而是冒險者在生死邊緣逼出的決心。',
    tags: ['damage', 'single_target', 'burst', 'resource', 'physical'],
  },

  // ════════════════════════════════════════════
  //  戰士 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  warrior_slash: {
    id: 'warrior_slash', name: '斬擊', englishName: 'Slash',
    classId: 'swordsman', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '消耗 0 怒氣；本房單體攻擊，命中後獲得 8 怒氣。戰士用它穩定建立怒氣，讓後續血性復甦、橫掃與防禦技能能接上節奏。',
    shortDescription: '本房單體攻擊，命中後獲得 8 怒氣。',
    fullDescription: '消耗 0 怒氣，冷卻 0。攻擊本房目前戰鬥目標，造成 100% 物理傷害；命中後獲得 8 怒氣。適合在怒氣不足時填補 tick。',
    tags: ['damage', 'single_target', 'resource', 'physical'],
    special: { resourceGainOnHit: 8 },
  },
  power_strike: {
    id: 'power_strike', name: '破甲重擊', englishName: 'Armor Breaker',
    classId: 'swordsman', learnLevel: 12, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '消耗 35 怒氣；本房單體中高傷害，附加 3 tick 破甲 -12%。對已被控制鎖定的目標破甲效果更穩，適合在隊伍集火前先降低目標防禦。',
    shortDescription: '本房單體重擊，附加 3 tick 破甲 -12%。',
    fullDescription: '消耗 35 怒氣，冷卻 3。攻擊本房單體，造成 150% 物理傷害並附加 3 tick 破甲 -12%；對已被 taunt 狀態鎖定的目標命中時額外獲得 5 怒氣。',
    effects: [{ type: 'def_down', value: 12, duration: 3 }],
    tags: ['damage', 'single_target', 'burst', 'debuff', 'resource', 'physical'],
    special: { resourceGainOnHit: 5, bonusAgainstTaunted: true },
  },
  blade_aura: {
    id: 'blade_aura', name: '橫掃', englishName: 'Sweep',
    classId: 'swordsman', learnLevel: 5, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '消耗 25 怒氣；瞬發攻擊本房戰鬥中的最多 3 隻怪物，不消耗 tick。這是戰士處理多怪壓力的第一個範圍工具。',
    shortDescription: '瞬發攻擊本房最多 3 隻戰鬥怪物。',
    fullDescription: '消耗 25 怒氣，冷卻 0。瞬發對本房戰鬥中最多 3 隻敵人造成 80% 物理傷害；不消耗 tick，不影響相鄰房。',
    special: { maxTargets: 3, instant: true },
  },
  iron_wall: {
    id: 'iron_wall', name: '防禦架勢', englishName: 'Guard Stance',
    classId: 'swordsman', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '消耗 0 怒氣；自己進入 1 tick 防禦，受到傷害 -35%，被命中時獲得 12 怒氣。用來把敵人的攻勢轉為戰士資源。',
    shortDescription: '1 tick 內受到傷害 -35%，被命中時獲得 12 怒氣。',
    fullDescription: '消耗 0 怒氣，冷卻 2。自己獲得 1 tick 防禦架勢，受到傷害 -35%；架勢期間每次被命中獲得 12 怒氣。',
    effects: [{ type: 'damage_reduction', value: 35, duration: 1 }],
    special: { resourceGainOnDamaged: 12 },
  },
  taunt: {
    id: 'taunt', name: '血性復甦', englishName: 'Blood Resolve',
    classId: 'swordsman', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 20 怒氣；瞬發回復最大 HP 10%，戰鬥中與平時皆可使用，不消耗 tick。',
    shortDescription: '瞬發消耗 20 怒氣，回復最大 HP 10%。',
    fullDescription: '消耗 20 怒氣，冷卻 3。瞬發回復最大 HP 10%；戰鬥中不消耗 tick，平時也可使用。HP 已滿時不消耗怒氣。',
    tags: ['heal', 'defense', 'resource'],
    usageContext: 'both',
    special: { healPercent: 10, instant: true },
  },
  war_cry: {
    id: 'war_cry', name: '極限怒吼', englishName: 'Limit Roar',
    classId: 'swordsman', learnLevel: 8, type: 'active',
    targetType: 'all_enemies', resourceCost: 70, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 70 怒氣；東西南北相鄰房可移動怪物立刻進入本房並加入戰鬥，arrivalTicks = 0。這會瞬間製造高壓怪潮，但自己 2 tick 受到傷害 -25%。',
    shortDescription: '四方相鄰房拉怪進本房，arrivalTicks = 0，自己 2 tick 減傷。',
    fullDescription: '消耗 70 怒氣，冷卻 8。影響東西南北相鄰房；可移動怪物 arrivalTicks = 0 並立刻進入本房加入戰鬥。施放後自己獲得 2 tick 傷害 -25%。',
    effects: [{ type: 'damage_reduction', value: 25, duration: 2 }],
    tags: ['control', 'aoe', 'defense', 'resource'],
    special: { crossRoom: true, areaScope: 'adjacent_cardinal', arrivalTicks: 0 },
  },
  counter_stance: {
    id: 'counter_stance', name: '堅守陣線', englishName: 'Hold the Line',
    classId: 'swordsman', learnLevel: 16, type: 'active',
    targetType: 'all_allies', resourceCost: 45, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '消耗 45 怒氣；3 tick 內你受到傷害 -20%，隊友受到本房戰鬥怪物傷害 -10%。若 approaching 怪物抵達，你在首 tick 獲得額外格擋。',
    shortDescription: '3 tick 團隊減壓，你減傷 -20%，隊友受本房怪物傷害 -10%。',
    fullDescription: '消耗 45 怒氣，冷卻 6。自己 3 tick 受到傷害 -20%，隊友 3 tick 受到本房戰鬥怪物傷害 -10%；若有 approaching 怪物抵達，首 tick 額外提高你的格擋判定。',
    effects: [{ type: 'damage_reduction', value: 20, duration: 3 }],
    tags: ['support', 'defense', 'resource'],
    special: { allyDamageReduction: 10, approachingBlockBonus: true },
  },

  // ════════════════════════════════════════════
  //  法師 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  magic_missile: {
    id: 'magic_missile', name: '魔法飛彈', englishName: 'Magic Missile',
    classId: 'mage', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'none', multiplier: 1.0,
    description: '消耗 8 MP；本房單體穩定魔法傷害，命中可靠。這是法師在高消耗法術之間填補 tick 的基本攻擊。',
    shortDescription: '消耗 8 MP 的本房單體穩定魔法攻擊。',
    fullDescription: '消耗 8 MP，冷卻 0。攻擊本房單體，造成 100% 魔法傷害；命中穩定，適合填補施法空窗。',
    tags: ['damage', 'single_target', 'resource', 'magical'],
  },
  fireball: {
    id: 'fireball', name: '火球術', englishName: 'Fireball',
    classId: 'mage', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 1,
    damageType: 'magical', element: 'fire', multiplier: 1.6,
    description: '消耗 15 MP；本房或指定相鄰方向單體火傷。未偵查相鄰房時可盲放，隨機命中 1 隻未知目標；隔房命中後目標 arrivalTicks = 2。',
    shortDescription: '單體火傷；未偵查隔房可盲放隨機單體。',
    fullDescription: '消耗 15 MP，冷卻 1。攻擊本房或指定相鄰方向單體，造成 160% 火屬性魔法傷害；未偵查相鄰房時無法指定目標，會隨機命中該房 1 隻怪物。隔房命中後目標進入 approaching，arrivalTicks = 2。',
    tags: ['damage', 'single_target', 'burst', 'resource', 'magical', 'fire'],
    special: { crossRoom: true, arrivalTicks: 2, blindCrossRoomRandomTarget: true },
  },
  frost_nova: {
    id: 'frost_nova', name: '寒冰新星', englishName: 'Frost Nova',
    classId: 'mage', learnLevel: 5, type: 'active',
    targetType: 'all_enemies', resourceCost: 22, cooldown: 3,
    damageType: 'magical', element: 'ice', multiplier: 1.0,
    description: '消耗 22 MP；本房所有戰鬥怪物受冰傷並 slow 1 tick。若目標正在 approaching，arrivalTicks +1。',
    shortDescription: '本房 AoE 冰傷與 slow；approaching 目標 arrivalTicks +1。',
    fullDescription: '消耗 22 MP，冷卻 3。對本房所有戰鬥怪物造成 100% 冰屬性魔法傷害並 slow 1 tick；若命中 approaching 目標，arrivalTicks +1。',
    effects: [{ type: 'slow', value: 30, duration: 2 }],
    tags: ['damage', 'aoe', 'control', 'resource', 'magical', 'ice'],
    special: { arrivalTicksDelta: 1 },
  },
  mana_shield: {
    id: 'mana_shield', name: '魔力護盾', englishName: 'Mana Shield',
    classId: 'mage', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 12, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 12 MP；2 tick 內受到傷害的 40% 轉為 MP 消耗，並降低詠唱被小傷害打斷的風險。',
    shortDescription: '2 tick 內將 40% 傷害轉為 MP 消耗，保護施法。',
    fullDescription: '消耗 12 MP，冷卻 4。自己獲得 2 tick 魔力護盾，受到傷害的 40% 轉為 MP 消耗，並降低詠唱被小傷害打斷的機率。',
    effects: [{ type: 'mana_shield', value: 40, duration: 2 }],
    tags: ['defense', 'resource', 'magical'],
  },
  lightning: {
    id: 'lightning', name: '閃電束', englishName: 'Lightning Beam',
    classId: 'mage', learnLevel: 12, type: 'active',
    targetType: 'all_enemies', resourceCost: 28, cooldown: 3,
    damageType: 'magical', element: 'lightning', multiplier: 1.15,
    description: '消耗 28 MP；指定方向直線電傷，最多命中 3 隻。若命中相鄰房目標，目標進入 approaching，arrivalTicks = 2。',
    shortDescription: '指定方向直線電傷，最多 3 隻；隔房命中 arrivalTicks = 2。',
    fullDescription: '消耗 28 MP，冷卻 3。指定方向直線攻擊最多 3 隻，造成 115% 雷屬性魔法傷害；若命中相鄰房目標，目標進入 approaching，arrivalTicks = 2。',
    tags: ['damage', 'aoe', 'resource', 'magical', 'lightning'],
    special: { crossRoom: true, maxTargets: 3, arrivalTicks: 2 },
  },
  meditation: {
    id: 'meditation', name: '魔力回流', englishName: 'Mana Return',
    classId: 'mage', learnLevel: 16, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 18 MP；4 tick 內每次法術命中回復 6 MP，命中 approaching 目標額外回復 4 MP。用來支撐高消耗爆發窗口。',
    shortDescription: '4 tick 內法術命中回復 MP，命中 approaching 目標額外回復。',
    fullDescription: '消耗 18 MP，冷卻 6。自己獲得 4 tick 魔力回流；每次法術命中回復 6 MP，若命中 approaching 目標額外回復 4 MP。',
    tags: ['support', 'resource', 'buff', 'magical'],
    effects: [{ type: 'mana_regen', value: 6, duration: 4 }],
    special: { mpGainOnSpellHit: 6, mpGainOnApproachingHit: 4, duration: 4 },
  },
  elemental_mastery: {
    id: 'elemental_mastery', name: '暴風雪', englishName: 'Blizzard',
    classId: 'mage', learnLevel: 8, type: 'active',
    targetType: 'all_enemies', resourceCost: 40, cooldown: 8,
    damageType: 'magical', element: 'ice', multiplier: 1.2,
    description: '消耗 40 MP；東西南北相鄰房怪物受冰傷，所有存活怪物進入 approaching，arrivalTicks = 3。這是高風險四方 AoE。',
    shortDescription: '四方相鄰房冰傷，存活怪物 arrivalTicks = 3 後接近。',
    fullDescription: '消耗 40 MP，冷卻 8。影響東西南北相鄰房，對怪物造成 120% 冰屬性魔法傷害；所有存活怪物進入 approaching，arrivalTicks = 3。',
    effects: [{ type: 'slow', value: 20, duration: 2 }],
    tags: ['damage', 'aoe', 'control', 'resource', 'magical', 'ice'],
    special: { crossRoom: true, areaScope: 'adjacent_cardinal', arrivalTicks: 3 },
  },

  // ════════════════════════════════════════════
  //  遊俠 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  precise_shot: {
    id: 'precise_shot', name: '射擊', englishName: 'Shot',
    classId: 'ranger', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 10, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '消耗 10 專注；本房或指定相鄰方向單體射擊。隔房命中後目標 arrivalTicks = 1，偵查後降低遠距命中懲罰。',
    shortDescription: '單體射擊；隔房命中後目標 arrivalTicks = 1。',
    fullDescription: '消耗 10 專注，冷卻 0。攻擊本房或指定相鄰方向單體，造成 120% 物理傷害；隔房命中後目標進入 approaching，arrivalTicks = 1。',
    tags: ['damage', 'single_target', 'resource', 'physical'],
    special: { crossRoom: true, arrivalTicks: 1, focusGainOnHit: 3 },
  },
  quick_step: {
    id: 'quick_step', name: '強襲', englishName: 'Assault',
    classId: 'ranger', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.6,
    description: '消耗 35 專注；瞬發不佔 tick、無冷卻，對本房單體造成物理傷害，命中時 30% 機率暈眩 1 tick。',
    shortDescription: '瞬發單體傷害，命中時 30% 機率暈眩。',
    fullDescription: '消耗 35 專注，冷卻 0。瞬發不佔 tick，攻擊本房單體造成 160% 物理傷害；命中時有 30% 機率附加 1 tick 暈眩。',
    tags: ['damage', 'single_target', 'control', 'resource', 'physical'],
    special: { instant: true, stunChance: 30, stunDuration: 1 },
  },
  poison_arrow: {
    id: 'poison_arrow', name: '獵人標記', englishName: 'Hunter Mark',
    classId: 'ranger', learnLevel: 5, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 25 專注；預先標記本房或已偵查相鄰房單體，不驚動目標。30 秒內與該目標進入戰鬥時，標記生效 4 tick：你對目標傷害 +15%、命中 +10%，命中額外回復 3 專注。',
    shortDescription: '預先標記單體；30 秒內開戰時生效 4 tick。',
    fullDescription: '消耗 25 專注，冷卻 4。預先標記本房或已偵查相鄰房單體，不造成傷害、不產生 approaching；30 秒內與該目標進入戰鬥時，目標獲得 4 tick 標記，你對目標傷害 +15%、命中 +10%，攻擊標記目標命中時額外回復 3 專注。',
    effects: [{ type: 'mark', value: 15, duration: 4 }],
    tags: ['control', 'support', 'resource', 'single_target', 'nature'],
    special: { crossRoomRequiresScout: true, focusGainOnMarkedHit: 3 },
  },
  ranger_scout: {
    id: 'ranger_scout', name: '偵查', englishName: 'Scout',
    classId: 'ranger', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 2,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 20 專注；指定方向偵查相鄰房，刷新怪物現況。可重複偵查同一方向，用來確認重生與 approaching 壓力。',
    shortDescription: '偵查指定方向相鄰房並刷新怪物現況。',
    fullDescription: '消耗 20 專注，冷卻 2。指定方向偵查相鄰房，刷新目前怪物資訊；可重複偵查同一方向，用來確認重生、空房與 approaching 壓力。',
    tags: ['support', 'resource'],
    usageContext: 'both',
    special: { scoutDirection: true },
  },
  trap: {
    id: 'trap', name: '伏擊陷阱', englishName: 'Ambush Trap',
    classId: 'ranger', learnLevel: 8, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 1.3,
    description: '消耗 35 專注；指定出口設置 5 tick 陷阱。approaching 怪物抵達該出口時受傷並 arrivalTicks +1，觸發後回復 10 專注。',
    shortDescription: '指定出口陷阱，抵達怪物受傷且 arrivalTicks +1。',
    fullDescription: '消耗 35 專注，冷卻 5。指定出口設置陷阱 5 tick 或觸發 1 次；approaching 怪物抵達該出口時受到 130% 物理傷害、arrivalTicks +1，並回復你 10 專注。',
    effects: [{ type: 'slow', value: 25, duration: 1 }],
    tags: ['damage', 'control', 'interrupt', 'resource', 'physical'],
    usageContext: 'both',
    special: { trapExit: true, interrupt: true, arrivalTicksDelta: 1, resourceGainOnTrigger: 10 },
  },
  critical_edge: {
    id: 'critical_edge', name: '多重射擊', englishName: 'Multi Shot',
    classId: 'ranger', learnLevel: 12, type: 'active',
    targetType: 'all_enemies', resourceCost: 30, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0.75,
    description: '消耗 30 專注；攻擊本房或已偵查相鄰房最多 3 隻。對相鄰房施放時，命中怪物 arrivalTicks = 2。',
    shortDescription: '最多 3 目標射擊；隔房命中怪物 arrivalTicks = 2。',
    fullDescription: '消耗 30 專注，冷卻 3。攻擊本房或已偵查相鄰房最多 3 隻，造成 75% 物理傷害；每命中 1 隻回復 2 專注。隔房命中時目標 arrivalTicks = 2。',
    tags: ['damage', 'aoe', 'burst', 'resource', 'physical'],
    special: { maxTargets: 3, resourceGainPerHit: 2, crossRoomRequiresScout: true, arrivalTicks: 2 },
  },
  barrage: {
    id: 'barrage', name: '煙霧箭', englishName: 'Smoke Arrow',
    classId: 'ranger', learnLevel: 16, type: 'active',
    targetType: 'all_enemies', resourceCost: 28, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 28 專注；2 tick 內本房怪物命中 -12%。若指定出口，從該出口抵達的怪物首 tick 命中 -18%。',
    shortDescription: '降低本房或指定出口抵達怪物的命中。',
    fullDescription: '消耗 28 專注，冷卻 5。本房怪物 2 tick 命中 -12%；若指定出口，從該出口抵達的怪物首 tick 命中 -18%。',
    effects: [{ type: 'atk_down', value: 12, duration: 2 }],
    tags: ['control', 'defense', 'resource'],
    special: { exitAccuracyDown: 18 },
  },

  // ════════════════════════════════════════════
  //  祭司 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  heal: {
    id: 'heal', name: '治癒', englishName: 'Heal',
    classId: 'priest', learnLevel: 1, type: 'active',
    targetType: 'single_ally', resourceCost: 0, cooldown: 1,
    damageType: 'magical', element: 'light', multiplier: 2.0,
    description: '信仰 +15，條件信仰 <= 85；治療自己或隊友。低血量目標獲得額外治療，會把信仰推向慈悲端。',
    shortDescription: '信仰 +15，治療自己或隊友，低血量目標效果提高。',
    fullDescription: '信仰 +15，冷卻 1，條件信仰 <= 85。治療自己或單一隊友，基礎治療倍率 200%；目標 HP 低於 40% 時治療量提高。',
    tags: ['heal', 'support', 'resource', 'light'],
    usageContext: 'both',
    special: { isHeal: true, faithDelta: 15, faithMax: 85, lowHpHealBonus: true },
  },
  purify: {
    id: 'purify', name: '淨化', englishName: 'Purify',
    classId: 'priest', learnLevel: 5, type: 'active',
    targetType: 'single_ally', resourceCost: 0, cooldown: 2,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '友方信仰 +8，條件信仰 <= 92；移除毒、燃燒、減速等負面效果。對 undead 目標可改為信仰 -8 並造成少量光傷。',
    shortDescription: '移除友方負面效果；對 undead 可改為光傷。',
    fullDescription: '友方施放時信仰 +8、冷卻 2、條件信仰 <= 92，移除目標毒、燃燒、減速等負面效果。對 undead 目標施放時信仰 -8、條件信仰 >= 8，造成少量光傷。',
    tags: ['support', 'dispel', 'resource', 'light'],
    usageContext: 'both',
    special: { removeDebuffs: true, faithDelta: 8, faithMax: 92, undeadFaithDelta: -8, undeadDamage: true },
  },
  holy_light: {
    id: 'holy_light', name: '聖光', englishName: 'Holy Light',
    classId: 'priest', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 1,
    damageType: 'magical', element: 'light', multiplier: 1.5,
    description: '信仰 -12，條件信仰 >= 12；本房單體光屬性傷害，對暗屬性與 undead 目標效果提高。用來把信仰從慈悲端拉回中線。',
    shortDescription: '信仰 -12，本房單體光傷，對暗/undead 更強。',
    fullDescription: '信仰 -12，冷卻 1，條件信仰 >= 12。攻擊本房單體，造成 150% 光屬性魔法傷害；對暗屬性與 undead 目標傷害提高。',
    tags: ['damage', 'single_target', 'burst', 'resource', 'magical', 'light'],
    special: { faithDelta: -12, faithMin: 12, undeadMultiplier: 1.5, darkMultiplier: 1.25 },
  },
  blessing: {
    id: 'blessing', name: '懺悔', englishName: 'Contrition',
    classId: 'priest', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 10,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '瞬發不佔 tick，冷卻 10 tick；將目前信仰翻轉到另一端。例如 0 變 100，90 變 10。',
    shortDescription: '瞬發翻轉信仰軸，0 變 100、90 變 10。',
    fullDescription: '冷卻 10 tick。瞬發不佔 tick，將目前信仰改為 maxFaith - currentFaith；可在戰鬥中與平時使用。',
    tags: ['support', 'resource', 'light'],
    usageContext: 'both',
    special: { faithInvert: true, instant: true },
  },
  priest_holy_bell: {
    id: 'priest_holy_bell', name: '聖鐘震盪', englishName: 'Holy Bell Resonance',
    classId: 'priest', learnLevel: 8, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 8,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '信仰 -25，條件信仰 >= 25；本地與東西南北相鄰房暗屬性與 undead 怪物受光傷。普通怪也會被驚動，undead 目標 arrivalTicks = 2。',
    shortDescription: '本地與四方反邪惡光傷，undead 目標 arrivalTicks = 2。',
    fullDescription: '信仰 -25，冷卻 8，條件信仰 >= 25。影響本地與東西南北相鄰房；暗屬性與 undead 怪物受到 100% 光屬性魔法傷害，undead 目標 arrivalTicks = 2；普通怪可能被驚動。',
    tags: ['damage', 'aoe', 'control', 'resource', 'magical', 'light'],
    usageContext: 'both',
    special: { faithDelta: -25, faithMin: 25, crossRoom: true, areaScope: 'adjacent_cardinal', includeCurrentRoom: true, arrivalTicks: 2, undeadOnlyBonus: true },
  },
  mass_heal: {
    id: 'mass_heal', name: '群體治癒', englishName: 'Mass Heal',
    classId: 'priest', learnLevel: 12, type: 'active',
    targetType: 'all_allies', resourceCost: 0, cooldown: 4,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '信仰 +25，條件信仰 <= 75；治療全隊少量 HP。目標低於 40% HP 時治療量提高，用於怪潮抵達後穩住隊伍。',
    shortDescription: '信仰 +25，治療全隊，低血量目標效果提高。',
    fullDescription: '信仰 +25，冷卻 4，條件信仰 <= 75。治療全隊，基礎治療倍率 100%；目標 HP 低於 40% 時治療量提高。',
    tags: ['heal', 'support', 'resource', 'light'],
    special: { isHeal: true, faithDelta: 25, faithMax: 75, lowHpHealBonus: true },
  },
  divine_grace: {
    id: 'divine_grace', name: '驅邪結界', englishName: 'Exorcism Ward',
    classId: 'priest', learnLevel: 16, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 6,
    damageType: 'magical', element: 'light', multiplier: 0.8,
    description: '信仰 -18，條件信仰 >= 18；指定出口設置 4 tick 結界。暗屬性與 undead 怪物抵達時受光傷並 arrivalTicks +1，普通怪抵達時命中 -8%。',
    shortDescription: '指定出口結界，邪惡怪物抵達時受光傷且 arrivalTicks +1。',
    fullDescription: '信仰 -18，冷卻 6，條件信仰 >= 18。指定出口設置 4 tick 結界；暗屬性與 undead 怪物抵達時受到 80% 光屬性魔法傷害並 arrivalTicks +1，普通怪抵達時命中 -8%。',
    effects: [{ type: 'atk_down', value: 8, duration: 1 }],
    tags: ['damage', 'control', 'defense', 'resource', 'magical', 'light'],
    usageContext: 'both',
    special: { faithDelta: -18, faithMin: 18, trapExit: true, arrivalTicksDelta: 1, duration: 4 },
  },

  // ════════════════════════════════════════════
  //  騎士 (Lv 20+) - 戰士系二轉・坐騎戰鬥
  // ════════════════════════════════════════════

  // ── Lv 20 核心三件套（0 怒氣，純疲勞消耗，產怒氣）──
  summon_warhorse: {
    id: 'summon_warhorse', name: '召喚戰馬', englishName: 'Summon Warhorse',
    classId: 'knight', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    usageContext: 'both',
    description: '以騎士徽記呼喚忠誠的戰馬現身，馬蹄踏地的瞬間大地輕震。戰馬在場時可使用 mount / unmount 指令上下馬。戰馬被召喚時疲勞從 0 開始恢復；若因疲勞耗盡被迫解散，需等疲勞恢復至 50% 才能重新召喚。',
    shortDescription: '召喚/解散戰馬，在場時可上下馬。',
    fullDescription: '消耗 0 怒氣，冷卻 3。召喚或解散戰馬。戰馬在場時可使用 mount/unmount 上下馬。召喚時疲勞從 0 恢復，疲勞耗盡強制解散後需恢復至 50% 才可重新召喚。',
    tags: ['support', 'summon'],
    special: { summonMount: true },
  },
  knight_charge: {
    id: 'knight_charge', name: '衝鋒', englishName: 'Charge',
    classId: 'knight', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.4,
    description: '驅策戰馬猛然加速，鐵蹄轟鳴中一人一馬化為不可阻擋的衝擊波。撞擊瞬間敵人被巨大的衝量掀飛，而戰馬的氣勢則化為騎士胸中熊熊燃燒的戰意。',
    shortDescription: '騎乘限定。衝撞單體，30% 撞倒；approaching 目標傷害 ×1.3、撞倒率 50%。命中產 15 怒氣。',
    fullDescription: '消耗 0 怒氣 + 12 疲勞，冷卻 4。騎乘限定。對單體造成 140% 物理傷害 + chargePower × 2，30% 機率撞倒（暈眩 1 tick）。若目標正在 approaching：傷害 ×1.3，撞倒機率提升至 50%。命中後生成 15 怒氣。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { mountRequired: true, fatigueCost: 12, mountStatScaling: { chargePower: 2 }, knockdownChance: 0.3, approachingDamageMultiplier: 1.3, approachingKnockdownChance: 0.5, rageGain: 15 },
  },
  mounted_guard_skill: {
    id: 'mounted_guard_skill', name: '騎乘守護', englishName: 'Mounted Guard',
    classId: 'knight', learnLevel: 20, type: 'active',
    targetType: 'single_ally', resourceCost: 0, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '驅馬擋在戰友身前，戰馬以寬闊的身軀築成一道活的壁壘。每一次替戰友承受的衝擊都會轉化為騎士內心深處的守護之志，讓戰意愈加高昂。',
    shortDescription: '騎乘限定。代友方承受 50% 傷害 2 tick，guardPower 減免代受傷害。產 10 怒氣。',
    fullDescription: '消耗 0 怒氣 + 8 疲勞，冷卻 5。騎乘限定。選定一名友方，2 tick 內代其承受 50% 傷害，代受傷害按 guardPower × 2% 額外減免。使用後生成 10 怒氣。',
    tags: ['defense', 'support'],
    special: { mountRequired: true, fatigueCost: 8, redirectDamage: true, redirectRatio: 0.5, duration: 2, mountStatScaling: { guardPower: 2 }, rageGain: 10 },
  },

  // ── Lv 25-50 進階技能（消耗怒氣 ± 疲勞）──
  warhorse_cry: {
    id: 'warhorse_cry', name: '戰馬嘶鳴', englishName: 'Warhorse Cry',
    classId: 'knight', learnLevel: 25, type: 'active',
    targetType: 'all_enemies', resourceCost: 15, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '戰馬仰天長嘶，鳴聲如雷貫耳，震懾之力令敵人在恐懼中不由自主地將注意力投向騎士。正在接近的怪物更是在嘶鳴的威壓下步伐遲疑，到達的時間被延遲。',
    shortDescription: '騎乘限定。嘲諷全體 2 tick；approaching 怪物 arrivalTicks +1。',
    fullDescription: '消耗 15 怒氣 + 5 疲勞，冷卻 5。騎乘限定。嘲諷本房所有敵人 2 tick（強制攻擊騎士）。approaching 的怪物 arrivalTicks +1。',
    effects: [{ type: 'taunt', value: 1, duration: 2 }],
    tags: ['control', 'support', 'defense'],
    special: { mountRequired: true, fatigueCost: 5, arrivalTicksDelta: 1 },
  },
  sacred_shield: {
    id: 'sacred_shield', name: '聖盾術', englishName: 'Sacred Shield',
    classId: 'knight', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 25, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '向天舉盾高聲禱告，凝聚聖光編織成金色護盾浮現於身前。馬背上穩固的姿態讓聖盾的力量得到完整發揮，護盾值額外提升；若失去坐騎支撐，聖盾則因不穩而減弱。',
    shortDescription: '護盾 200 + guardPower × 8，4 tick。騎乘 +30%；下馬僅 60%。',
    fullDescription: '消耗 25 怒氣，冷卻 5。自身獲得護盾，基礎值 200 + guardPower × 8，持續 4 tick。騎乘中護盾值額外 +30%；下馬時護盾值僅有基礎值的 60%。',
    effects: [{ type: 'shield', value: 200, duration: 4 }],
    tags: ['defense', 'support', 'light'],
    special: { mountEnhanced: true, mountedShieldBonus: 0.3, dismountedShieldPenalty: 0.4, mountStatScaling: { guardPower: 8 } },
  },
  iron_trampling: {
    id: 'iron_trampling', name: '鐵蹄踐踏', englishName: 'Iron Trampling',
    classId: 'knight', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', resourceCost: 18, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '驅馬原地猛踏，鐵蹄砸碎地面掀起衝擊波，震顫傳遍整片戰場。所有敵人在劇烈的震盪中步伐踉蹌，正在接近的怪物更是被震退一步。',
    shortDescription: '騎乘限定。全體 120% 物理 + stability × 2，減速 1 tick；approaching arrivalTicks +1。',
    fullDescription: '消耗 18 怒氣 + 10 疲勞，冷卻 4。騎乘限定。對本房所有敵人造成 120% 物理傷害 + stability × 2，全體減速 1 tick。approaching 的怪物 arrivalTicks +1。',
    effects: [{ type: 'slow', value: 30, duration: 1 }],
    tags: ['damage', 'aoe', 'control', 'physical'],
    special: { mountRequired: true, fatigueCost: 10, mountStatScaling: { stability: 2 }, arrivalTicksDelta: 1 },
  },
  judgment: {
    id: 'judgment', name: '制裁之錘', englishName: 'Judgment',
    classId: 'knight', learnLevel: 37, type: 'active',
    targetType: 'single_enemy', resourceCost: 22, cooldown: 3,
    damageType: 'physical', element: 'light', multiplier: 2.0,
    description: '在馬背上高舉武器，以神聖之力加持後狠狠砸下。沉重的審判令大地震顫，金色的衝擊波從落點向四周擴散。被制裁之錘擊中的敵人陷入暈眩，若目標已處於暈眩或減速狀態，審判的力量會更加深入，將暈眩延長。',
    shortDescription: '騎乘限定。200% 物理+光 + chargePower × 2，暈眩 1 tick，打斷+驅散護盾。已暈/減速目標暈眩延至 2 tick。',
    fullDescription: '消耗 22 怒氣 + 6 疲勞，冷卻 3。騎乘限定。對單體造成 200% 物理+光傷害 + chargePower × 2，暈眩 1 tick，打斷施法，驅散護盾。若目標已處於暈眩或減速：暈眩延長至 2 tick。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'burst', 'interrupt', 'light', 'physical'],
    special: { mountRequired: true, fatigueCost: 6, interrupt: true, dispelShield: true, mountStatScaling: { chargePower: 2 }, extendedStunOnCC: 2 },
  },
  loyal_bond: {
    id: 'loyal_bond', name: '忠誠之絆', englishName: 'Loyal Bond',
    classId: 'knight', learnLevel: 41, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '騎士與戰馬之間超越言語的羈絆——在生死關頭，忠誠的戰馬會以己身替主人擋下致命一擊。騎乘中受到致命傷害時，戰馬替騎士承受這一擊，騎士存活但自動下馬，疲勞歸零。下馬時則無此效果，沒有坐騎便沒有羈絆的守護。',
    shortDescription: '騎乘中受致命傷：戰馬擋死，HP=1，自動下馬。下馬中無效。冷卻 10 tick。',
    fullDescription: '被動。騎乘中受到致命傷害時：戰馬替騎士擋下致命攻擊，騎士存活（HP = 1），自動下馬，疲勞歸零。冷卻 10 tick。下馬中受到致命傷害時無效果。',
    tags: ['defense', 'passive'],
    special: { mountRequired: true, deathSave: true, deathSaveCooldown: 10, autoDismount: true },
  },
  last_bastion: {
    id: 'last_bastion', name: '最後堡壘', englishName: 'Last Bastion',
    classId: 'knight', learnLevel: 45, type: 'active',
    targetType: 'self', resourceCost: 30, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將盾牌深插入地面，戰馬橫擋在前方，人馬化為不可逾越的鐵壁。在這道防線面前，一切攻勢都被削弱，身後的隊友在堅不可摧的守護中安然無恙。期間戰馬免疫疲勞累積，嘲諷效果的持續時間也隨之延長。',
    shortDescription: '騎乘限定。3 tick 自身受傷 -40%、隊友受傷 -25%。戰馬免疫疲勞，嘲諷持續 +1 tick。',
    fullDescription: '消耗 30 怒氣 + 15 疲勞，冷卻 8。騎乘限定。3 tick 內騎士受傷 -40%，身後隊友受傷 -25%。期間戰馬免疫疲勞累積，所有嘲諷效果持續時間 +1 tick。',
    effects: [{ type: 'damage_reduction', value: 40, duration: 3 }],
    tags: ['defense', 'support'],
    special: { mountRequired: true, fatigueCost: 15, allyDamageReduction: 25, mountFatigueImmune: true, tauntDurationBonus: 1 },
  },
  divine_verdict: {
    id: 'divine_verdict', name: '聖裁天降', englishName: 'Divine Verdict',
    classId: 'knight', learnLevel: 50, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 8,
    damageType: 'physical', element: 'light', multiplier: 3.0,
    description: '在馬背上躍向高空，全身聖光凝聚於騎槍之上，以天罰之姿俯衝而下——一擊定罪。落地的衝擊波炸開金色的裂痕，目標在聖裁之下被完全壓制。然而躍下的代價是與戰馬分離，使用後自動下馬。若目標生命垂危，聖裁之力將進一步加倍，執行最終處刑。',
    shortDescription: '騎乘限定，使用後自動下馬。300% 物理+光 + chargePower × 5，暈眩 2 tick，驅散全 buff。目標 HP < 30% 傷害 ×1.5。',
    fullDescription: '消耗 35 怒氣，冷卻 8。騎乘限定，使用後自動下馬。對單體造成 300% 物理+光傷害 + chargePower × 5，暈眩 2 tick，驅散所有 buff。若目標 HP < 30%：傷害額外 ×1.5（處刑加成）。',
    effects: [{ type: 'stun', value: 1, duration: 2 }],
    tags: ['damage', 'single_target', 'burst', 'interrupt', 'dispel', 'light', 'physical'],
    special: { mountRequired: true, autoDismount: true, mountStatScaling: { chargePower: 5 }, dispelAllBuffs: true, executeThreshold: 0.3, executeDamageMultiplier: 1.5 },
  },

  // ════════════════════════════════════════════
  //  狂戰士 (Lv 20+) - 戰士系二轉・血怒刻度
  // ════════════════════════════════════════════

  // ── Lv 20 核心（1 被動 + 3 主動，HP 消耗型）──
  blood_fury: {
    id: 'blood_fury', name: '血怒刻度', englishName: 'Blood Fury',
    classId: 'berserker', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '狂戰士的血液中流淌著遠古的戰鬥本能，傷痕越多，體內的狂暴之力就越是沸騰。血量低於不同門檻時進入對應的狂暴狀態，傷害大幅提升。回血超過門檻時自動降階。',
    shortDescription: 'HP ≤90% 傷害+10%（血怒）；≤60% +25%（狂血）；≤30% +50%（修羅）。替換式，不疊加。',
    fullDescription: '被動。HP ≤ 90%：進入「血怒」傷害 +10%；HP ≤ 60%：進入「狂血」傷害 +25%（替換血怒）；HP ≤ 30%：進入「修羅」傷害 +50%（替換狂血）。回血超過門檻時自動降階。',
    tags: ['passive', 'buff', 'damage'],
    special: { bloodFuryThresholds: { 90: 10, 60: 25, 30: 50 }, replacementBuff: true },
  },
  blood_sacrifice: {
    id: 'blood_sacrifice', name: '鮮血獻祭', englishName: 'Blood Sacrifice',
    classId: 'berserker', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以利刃割開手臂，讓鮮血噴灑在武器上。劇痛轉化為純粹的殺意，怒氣瞬間暴漲。其他戰士靠攻擊產生怒氣，狂戰士靠放自己的血。',
    shortDescription: '消耗 10% 最大 HP，立刻獲得 30 怒氣。',
    fullDescription: '消耗 10% 最大 HP，0 怒氣，冷卻 4。立刻獲得 30 怒氣。',
    tags: ['support', 'resource'],
    special: { hpCostPercent: 10, rageGain: 30 },
  },
  frenzy: {
    id: 'frenzy', name: '狂暴', englishName: 'Frenzy',
    classId: 'berserker', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '放棄一切理智，讓殺意完全接管身體。雙眼染上猩紅血色，武器在空中劃出殘影般的連續斬擊。五次瘋狂的攻擊傾瀉而出，每一擊都獨立計算命中與暴擊。',
    shortDescription: '消耗 20% 最大 HP，連續普攻 5 次。每次獨立判定命中/暴擊/產怒。',
    fullDescription: '消耗 20% 最大 HP，0 怒氣，冷卻 6。對單體連續普攻 5 次，每次獨立計算命中、暴擊與怒氣生成。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { hpCostPercent: 20, multiHit: 5 },
  },
  bloodthirst: {
    id: 'bloodthirst', name: '嗜血', englishName: 'Bloodthirst',
    classId: 'berserker', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在生命垂危之際，最原始的求生渴望覺醒。每一刀砍下時，鮮血如絲線般被吸入體內，讓狂戰士在修羅的邊緣勉強維持一線生機。',
    shortDescription: '刻度條件：HP ≤ 30%。接下來 3 次普攻附帶 5% 傷害吸血。',
    fullDescription: '消耗 0 怒氣，冷卻 8。刻度條件：HP ≤ 30%（修羅刻度）。接下來 3 次普攻附帶 5% 傷害吸血。',
    tags: ['support', 'defense'],
    special: { hpThresholdRequired: 30, lifeStealHits: 3, lifeStealPercent: 5 },
  },

  // ── Lv 25-50 進階技能（消耗怒氣 ± HP%，或有刻度條件）──
  whirlwind: {
    id: 'whirlwind', name: '旋風斬', englishName: 'Whirlwind',
    classId: 'berserker', learnLevel: 25, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '以自身為軸心旋轉巨武，劃出一圈絕命的刃風弧，刀風所及之處血肉橫飛。在狂血刻度以下時，狂暴之力灌注刀鋒，傷害進一步暴漲。',
    shortDescription: '消耗 25 怒氣 + 10% HP。全體 120% 物理。狂血刻度（≤60%）額外 +25% 傷害。',
    fullDescription: '消耗 25 怒氣 + 10% 最大 HP，冷卻 4。對本房所有敵人造成 120% 物理傷害。狂血刻度（HP ≤ 60%）以下額外 +25% 傷害。',
    tags: ['damage', 'aoe', 'physical'],
    special: { hpCostPercent: 10, hpThresholdEnhanced: { 60: { damageBonus: 25 } } },
  },
  flesh_armor: {
    id: 'flesh_armor', name: '血肉化盾', englishName: 'Flesh Armor',
    classId: 'berserker', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以怒氣強化肌肉纖維，將全身繃緊到鋼鐵般堅硬。血量越低，求生意志越強，防禦越高。滿血時幾乎毫無效果，修羅刻度時則堅不可摧。',
    shortDescription: '3 tick 減傷 = 缺失 HP% × 0.5（上限 35%）。血越低減傷越高。',
    fullDescription: '消耗 20 怒氣，冷卻 6。3 tick 獲得減傷，減傷值 = 缺失 HP% × 0.5（上限 35%）。100% HP → 0% 減傷；30% HP → 35% 減傷。',
    effects: [{ type: 'damage_reduction', value: 35, duration: 3 }],
    tags: ['defense', 'buff'],
    special: { missingHpScaling: 0.5, maxDamageReduction: 35 },
  },
  ruin_cleave: {
    id: 'ruin_cleave', name: '毀滅劈斬', englishName: 'Ruin Cleave',
    classId: 'berserker', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 30, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 2.5,
    description: '壓榨全身每一絲力量，舉起巨武斬出足以劈裂大地的一擊。在狂血刻度下必定暴擊，進入修羅刻度後傷害更是暴漲至一般人無法想像的境界。',
    shortDescription: '消耗 30 怒氣 + 15% HP。單體 250% 物理。狂血（≤60%）必暴；修羅（≤30%）傷害 ×1.5。',
    fullDescription: '消耗 30 怒氣 + 15% 最大 HP，冷卻 5。對單體造成 250% 物理傷害。狂血刻度（HP ≤ 60%）必定暴擊；修羅刻度（HP ≤ 30%）傷害額外 ×1.5。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { hpCostPercent: 15, hpThresholdEnhanced: { 60: { guaranteedCrit: true }, 30: { damageMultiplier: 1.5 } } },
  },
  pain_anchor: {
    id: 'pain_anchor', name: '痛覺錨定', englishName: 'Pain Anchor',
    classId: 'berserker', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 25, cooldown: 10,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以極致的痛楚錨定意識，在死亡邊緣咬牙撐住。只要意志不斷，就不會倒下。當效果結束時若血量已近枯竭，求生本能會自動激發嗜血的渴望。',
    shortDescription: '3 tick 內 HP 不會降到 1 以下。結束時若 HP ≤ 10%，自動觸發嗜血效果。',
    fullDescription: '消耗 25 怒氣，冷卻 10。3 tick 內 HP 不會降到 1 以下（無法被殺死）。結束時若 HP ≤ 10%：自動觸發嗜血效果（3 次普攻吸血 5%）。',
    effects: [{ type: 'unyielding', value: 1, duration: 3 }],
    tags: ['defense', 'buff'],
    special: { preventDeath: true, duration: 3, autoBloodthirstThreshold: 10 },
  },
  savage_interrupt: {
    id: 'savage_interrupt', name: '野蠻截斷', englishName: 'Savage Interrupt',
    classId: 'berserker', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '用毫無章法的暴力一擊打斷敵人的一切動作，蠻力面前任何防護都形同虛設。修羅刻度下的狂戰士連暈眩的力道都更加猛烈。',
    shortDescription: '消耗 20 怒氣 + 10% HP。150% 物理，打斷+驅散護盾+暈眩 1 tick。修羅（≤30%）暈眩延至 2 tick。',
    fullDescription: '消耗 20 怒氣 + 10% 最大 HP，冷卻 5。對單體造成 150% 物理傷害，打斷施法，驅散護盾，暈眩 1 tick。修羅刻度（HP ≤ 30%）暈眩延長至 2 tick。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'physical'],
    special: { hpCostPercent: 10, interrupt: true, dispelShield: true, hpThresholdEnhanced: { 30: { extendedStun: 2 } } },
  },
  asura_form: {
    id: 'asura_form', name: '修羅化身', englishName: 'Asura Form',
    classId: 'berserker', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 40, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '撕開身上的護甲，讓沸騰的血怒之力徹底吞噬理智。在這短暫的時間裡，狂戰士化為只知殺戮的人形災厄。攻擊暴漲、普攻雙擊，但無法接受任何治療。當修羅之力消退時，透支的代價一次清算——血量歸一。',
    shortDescription: '刻度條件：HP ≤ 60%。消耗 30% HP + 40 怒氣。4 tick 攻擊+60%、技能傷害+30%、普攻雙擊。無法被治療，結束後 HP=1。',
    fullDescription: '消耗 30% 最大 HP + 40 怒氣，冷卻 12。刻度條件：HP ≤ 60%（狂血刻度）。4 tick：攻擊 +60%，所有技能傷害 +30%，普攻變為雙擊。期間無法被治療（含吸血、隊友治療、藥水）。結束時 HP 強制設為 1。',
    effects: [{ type: 'atk_up', value: 60, duration: 4 }],
    tags: ['damage', 'burst', 'buff', 'physical'],
    special: { hpCostPercent: 30, hpThresholdRequired: 60, duration: 4, skillDamageBonus: 30, doubleStrike: true, healingBlocked: true, hpSetOnEnd: 1 },
  },

  // ════════════════════════════════════════════
  //  劍聖 (Lv 20+) - 戰士系二轉・姿態流轉
  // ════════════════════════════════════════════

  // ── Lv 20 核心（1 被動 + 3 主動，姿態流轉系統）──
  sword_flow: {
    id: 'sword_flow', name: '劍流姿態', englishName: 'Sword Flow',
    classId: 'sword_saint', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '劍聖的戰鬥如流水般自然切換攻守，每一個動作都是下一個動作的起手。三種姿態各有被動加成，技能使用後自動切入對應姿態。按照正確順序流轉（攻→技→守→攻）觸發「劍流」combo，獲得額外怒氣與冷卻減少。',
    shortDescription: '三姿態流轉。攻勢+15%傷、技勢+15%暴、守勢+15%減傷。正確 combo 產怒+回血。',
    fullDescription: '被動。三姿態：攻勢（傷害+15%）、技勢（暴擊率+15%）、守勢（減傷+15%）。技能使用後自動切入對應姿態。正確流轉（攻→技→守→攻）觸發「劍流」combo：+10 怒氣，下個技能 CD -1 tick，恢復 3% 最大 HP。完成一整圈（攻→技→守）獲得「明鏡」buff 2 tick（傷害+10%、減傷+10%）。',
    tags: ['passive', 'buff'],
    special: { stanceSystem: true, stances: { attack: { damageBonus: 15 }, technique: { critBonus: 15 }, defense: { reductionBonus: 15 } }, comboFlow: ['attack', 'technique', 'defense'], comboBonus: { rageGain: 10, cdReduction: 1, healPercent: 3 }, fullRotationBuff: { name: '明鏡', damageBonus: 10, damageReduction: 10, duration: 2 } },
  },
  flash_strike: {
    id: 'flash_strike', name: '一閃', englishName: 'Flash Strike',
    classId: 'sword_saint', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.3,
    description: '以雷霆般的速度拔刀斬出，刀光一閃而逝，敵人甚至來不及感受到疼痛。衝鋒的氣勢轉化為高昂的戰意。',
    shortDescription: '→攻勢。130% 物理，產 12 怒氣。劍流 combo（守→攻）：傷害+30%、怒氣×2。',
    fullDescription: '消耗 0 怒氣，冷卻 3。→攻勢。對單體造成 130% 物理傷害，命中生成 12 怒氣。劍流 combo（從守勢→攻勢）：傷害額外 +30%，怒氣生成加倍（24）。',
    tags: ['damage', 'single_target', 'physical'],
    special: { stanceTransition: 'attack', rageGain: 12, comboFrom: 'defense', comboBonus: { damageBonus: 30, rageGainMultiplier: 2 } },
  },
  flowing_shift: {
    id: 'flowing_shift', name: '流轉', englishName: 'Flowing Shift',
    classId: 'sword_saint', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '劍尖在空中劃出優雅的弧線，身形如流水般變換。精準的殺意凝聚於刀鋒，下一擊將帶著不可迴避的暴擊。',
    shortDescription: '→技勢。2 tick 下次攻擊必暴，產 8 怒氣。劍流 combo（攻→技）：額外下次攻擊+20%。',
    fullDescription: '消耗 0 怒氣，冷卻 3。→技勢。自身獲得 2 tick 增益：下一次攻擊必定暴擊。生成 8 怒氣。劍流 combo（從攻勢→技勢）：額外獲得「下次攻擊傷害 +20%」。',
    effects: [{ type: 'crit_up', value: 100, duration: 2 }],
    tags: ['support', 'buff'],
    special: { stanceTransition: 'technique', rageGain: 8, guaranteedNextCrit: true, comboFrom: 'attack', comboBonus: { nextAttackDamageBonus: 20 } },
  },
  still_water: {
    id: 'still_water', name: '止水', englishName: 'Still Water',
    classId: 'sword_saint', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '收劍歸鞘，氣息沉穩如止水。看似毫無破綻的靜態中蘊含著隨時反擊的殺意。受到攻擊時，劍聖會以迅雷不及掩耳的速度拔刀反擊。',
    shortDescription: '→守勢。2 tick 減傷 25%，受擊自動反擊（50%物理）。劍流 combo（技→守）：減傷35%、反擊80%。',
    fullDescription: '消耗 0 怒氣，冷卻 4。→守勢。2 tick 減傷 25%，期間受攻擊自動反擊一次（50% 物理傷害）。劍流 combo（從技勢→守勢）：減傷提升至 35%，反擊傷害提升至 80%。',
    effects: [{ type: 'damage_reduction', value: 25, duration: 2 }, { type: 'counter', value: 50, duration: 2 }],
    tags: ['defense', 'buff'],
    special: { stanceTransition: 'defense', counterAttack: 0.5, comboFrom: 'technique', comboBonus: { damageReduction: 35, counterAttack: 0.8 } },
  },

  // ── Lv 25-50 進階技能（消耗怒氣，各有姿態歸屬）──
  iaijutsu: {
    id: 'iaijutsu', name: '拔刀術', englishName: 'Iaijutsu',
    classId: 'sword_saint', learnLevel: 25, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.8,
    description: '一手按住刀柄，身體微微前傾，在電光石火之間完成拔刀、斬擊、收刀的一連串動作。這道快到肉眼無法捕捉的一刀，是劍聖先手制敵的極意。',
    shortDescription: '→攻勢。180% 物理，先制攻擊。劍流 combo（守→攻）：滿血目標傷害×1.5。',
    fullDescription: '消耗 15 怒氣，冷卻 4。→攻勢。對單體造成 180% 物理傷害，先制攻擊（本 tick 最先發動）。劍流 combo（從守勢→攻勢）：若目標滿血則傷害 ×1.5。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { stanceTransition: 'attack', priority: true, comboFrom: 'defense', comboBonus: { fullHpDamageMultiplier: 1.5 } },
  },
  peerless_combo: {
    id: 'peerless_combo', name: '無雙連斬', englishName: 'Peerless Combo',
    classId: 'sword_saint', learnLevel: 29, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.5,
    description: '劍光如暴雨傾瀉，五道斬擊在眨眼間同時落下，每一擊都比上一擊更加精準致命。連斬的節奏讓暴擊率不斷攀升。',
    shortDescription: '→技勢。5 連擊各 50% 物理、暴擊率逐擊+10%。劍流 combo（攻→技）：追加第 6 擊（100% 必暴）。',
    fullDescription: '消耗 20 怒氣，冷卻 5。→技勢。對單體連擊 5 次，每擊 50% 物理傷害，暴擊率逐擊 +10%。劍流 combo（從攻勢→技勢）：追加第 6 擊（100% 物理傷害，必定暴擊）。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { stanceTransition: 'technique', hitCount: 5, critRatePerHit: 10, comboFrom: 'attack', comboBonus: { bonusHit: { multiplier: 1.0, guaranteedCrit: true } } },
  },
  empty_step: {
    id: 'empty_step', name: '空步', englishName: 'Empty Step',
    classId: 'sword_saint', learnLevel: 33, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在攻擊落下的瞬間，身形化虛，彷彿從現實中抽離。虛實之間的身影讓敵人的攻擊盡數落空，而劍聖的傷口在虛化中自然癒合。',
    shortDescription: '→守勢。2 tick 減傷 30%，受擊恢復 5% HP。劍流 combo（技→守）：額外 1 tick 無敵。',
    fullDescription: '消耗 15 怒氣，冷卻 5。→守勢。2 tick 減傷 30%，期間受攻擊時恢復 5% 最大 HP。劍流 combo（從技勢→守勢）：額外獲得 1 tick 無敵（完全迴避下一次攻擊）。',
    effects: [{ type: 'damage_reduction', value: 30, duration: 2 }],
    tags: ['defense', 'buff'],
    special: { stanceTransition: 'defense', healOnHit: 5, comboFrom: 'technique', comboBonus: { invincibleTicks: 1 } },
  },
  heaven_splitter: {
    id: 'heaven_splitter', name: '天斷', englishName: 'Heaven Splitter',
    classId: 'sword_saint', learnLevel: 37, type: 'active',
    targetType: 'single_enemy', resourceCost: 30, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 2.6,
    description: '將全部劍勢凝於一線，從天而降的一斬足以撕裂一切防線。在技勢中發動時劍氣可穿透敵人的防禦，在正確流轉中發動則傷害與穿透同時達到極致。',
    shortDescription: '→攻勢。260% 物理。技勢中使用：無視 30% 防禦。劍流 combo（守→攻）：傷害+40%、無視 50% 防禦。',
    fullDescription: '消耗 30 怒氣，冷卻 6。→攻勢。對單體造成 260% 物理傷害。若在技勢中使用：無視 30% 防禦。劍流 combo（從守勢→攻勢）：傷害額外 +40%，無視 50% 防禦。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { stanceTransition: 'attack', techniqueStanceBonus: { armorPenetration: 30 }, comboFrom: 'defense', comboBonus: { damageBonus: 40, armorPenetration: 50 } },
  },
  mind_cut: {
    id: 'mind_cut', name: '心斬', englishName: 'Mind Cut',
    classId: 'sword_saint', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '斬向敵人的意圖本身，斷絕一切蓄力與防護。在正確的流轉中發動時，心斬的衝擊如此強烈，以至於可以立刻再次揮出。',
    shortDescription: '→技勢。150% 物理，打斷+驅散護盾+暈眩 1 tick。劍流 combo（攻→技）：暈眩 2 tick、CD 歸零。',
    fullDescription: '消耗 25 怒氣，冷卻 5。→技勢。對單體造成 150% 物理傷害，打斷施法、驅散護盾、暈眩 1 tick。劍流 combo（從攻勢→技勢）：暈眩延長至 2 tick，CD 歸零（可立刻再次使用）。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'physical'],
    special: { stanceTransition: 'technique', interrupt: true, dispelShield: true, comboFrom: 'attack', comboBonus: { extendedStun: 2, resetCooldown: true } },
  },
  mushin: {
    id: 'mushin', name: '無念無想', englishName: 'Mushin',
    classId: 'sword_saint', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 40, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '進入超越意識的境界，劍與意合一。在這極短的瞬間，劍聖的每一個動作都是完美的——所有姿態切換皆視為正確流轉，技能冷卻減半，怒氣消耗大幅降低。然而超越極限的代價是結束後短暫的虛脫。',
    shortDescription: '4 tick 所有切換 = 正確劍流 combo，技能 CD 減半，怒氣消耗 -30%。結束後 2 tick 無法用姿態技能。',
    fullDescription: '消耗 40 怒氣，冷卻 12。4 tick：所有技能視為正確流轉（所有切換觸發劍流 combo），技能冷卻減半，怒氣消耗 -30%。結束後進入「虛脫」2 tick，無法使用姿態技能。',
    effects: [{ type: 'speed_up', value: 50, duration: 4 }],
    tags: ['buff', 'burst'],
    special: { duration: 4, allCombo: true, cdReductionPercent: 50, rageCostReduction: 30, exhaustionDuration: 2 },
  },

  // ════════════════════════════════════════════
  //  元素鑄師 (Lv 20+) - 法師系二轉・鑄造框
  // ════════════════════════════════════════════

  forging_frame: {
    id: 'forging_frame', name: '鑄造框', englishName: 'Forging Frame',
    classId: 'archmage', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '元素鑄師的核心系統。每 tick 可將兩個元素技能放入鑄造框，組合產生元素反應。不同元素的組合會觸發不同的反應效果，威力遠超單獨施放。',
    shortDescription: '每 tick 放入 2 個元素技能組合反應。🔥+🧊=蒸氣爆發、🧊+⚡=凍電鏈、⚡+🔥=熔岩地帶等。',
    fullDescription: '被動。每 tick 可放入 2 個元素技能組合反應：🔥+🧊=蒸氣爆發（AoE+致盲）、🧊+⚡=凍電鏈（全體+暈眩）、⚡+🔥=熔岩地帶（DoT）、🔥+🔥=烈焰強化（單體高傷）、🧊+🧊=冰晶護甲（護盾）、⚡+⚡=雷光反擊（反擊buff）。單放1個為弱版。',
    tags: ['passive', 'buff'],
    special: { forgingFrame: true, dualCast: true, reactionTable: { 'fire+ice': 'steam_burst', 'ice+lightning': 'frozen_chain', 'lightning+fire': 'magma_field', 'fire+fire': 'flame_enhance', 'ice+ice': 'ice_armor', 'lightning+lightning': 'thunder_counter' } },
  },
  forge_fire: {
    id: 'forge_fire', name: '火元素', englishName: 'Fire Element',
    classId: 'archmage', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'fire', multiplier: 0.8,
    description: '凝聚火焰元素。單獨施放為基礎火傷；放入鑄造框與其他元素組合時，作為火屬性原料產生元素反應。',
    shortDescription: '鑄造原料。單放=80% 火傷。與🧊組合=蒸氣爆發、與⚡組合=熔岩地帶、🔥+🔥=烈焰強化。',
    fullDescription: '消耗 8 MP，無冷卻。鑄造框原料。單放=80% 火屬性魔法傷害。放入鑄造框時作為火元素原料。',
    tags: ['damage', 'single_target', 'magical', 'fire'],
    special: { forgeElement: 'fire' },
  },
  forge_ice: {
    id: 'forge_ice', name: '冰元素', englishName: 'Ice Element',
    classId: 'archmage', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'ice', multiplier: 0.8,
    description: '凝聚冰霜元素。單獨施放為基礎冰傷加微減速；放入鑄造框與其他元素組合時，作為冰屬性原料產生元素反應。',
    shortDescription: '鑄造原料。單放=80% 冰傷+微減速。與🔥組合=蒸氣爆發、與⚡組合=凍電鏈、🧊+🧊=冰晶護甲。',
    fullDescription: '消耗 8 MP，無冷卻。鑄造框原料。單放=80% 冰屬性魔法傷害 + 減速。放入鑄造框時作為冰元素原料。',
    effects: [{ type: 'slow', value: 15, duration: 1 }],
    tags: ['damage', 'single_target', 'defense', 'magical', 'ice'],
    special: { forgeElement: 'ice' },
  },
  forge_lightning: {
    id: 'forge_lightning', name: '雷元素', englishName: 'Lightning Element',
    classId: 'archmage', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'lightning', multiplier: 0.8,
    description: '凝聚雷電元素。單獨施放為基礎雷傷；放入鑄造框與其他元素組合時，作為雷屬性原料產生元素反應。',
    shortDescription: '鑄造原料。單放=80% 雷傷。與🧊組合=凍電鏈、與🔥組合=熔岩地帶、⚡+⚡=雷光反擊。',
    fullDescription: '消耗 8 MP，無冷卻。鑄造框原料。單放=80% 雷屬性魔法傷害。放入鑄造框時作為雷元素原料。',
    tags: ['damage', 'single_target', 'magical', 'lightning'],
    special: { forgeElement: 'lightning' },
  },
  elemental_mastery_passive: {
    id: 'elemental_mastery_passive', name: '元素精通', englishName: 'Elemental Mastery',
    classId: 'archmage', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '對元素鑄造的深入理解讓反應效果更加強烈，同時降低鑄造的魔力消耗。',
    shortDescription: '鑄造反應傷害 +20%，鑄造 MP 消耗 -15%。',
    fullDescription: '被動。鑄造框產生的元素反應傷害 +20%，鑄造時 MP 消耗 -15%。',
    tags: ['passive', 'buff', 'magical'],
    special: { forgeReactionBonus: 20, forgeMpReduction: 15 },
  },
  elemental_overload: {
    id: 'elemental_overload', name: '元素超載', englishName: 'Elemental Overload',
    classId: 'archmage', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將魔力灌注到鑄造框中超載運轉，下一次鑄造反應的效果將翻倍——傷害、持續時間、影響範圍全部加倍。',
    shortDescription: '下次鑄造反應效果 ×2（傷害/持續/範圍翻倍）。',
    fullDescription: '消耗 15 MP，冷卻 6。下一次鑄造框反應效果 ×2（傷害翻倍、持續翻倍、範圍翻倍）。',
    tags: ['buff', 'burst'],
    special: { nextForgeDoubled: true },
  },
  triple_forge: {
    id: 'triple_forge', name: '三重鑄造', englishName: 'Triple Forge',
    classId: 'archmage', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', resourceCost: 30, cooldown: 8,
    damageType: 'magical', element: 'none', multiplier: 3.0,
    description: '突破鑄造框的限制，本 tick 放入三個元素。火+冰+雷三元素同時共鳴，引發毀滅性的元素風暴。',
    shortDescription: '本 tick 放入 3 個元素。🔥+🧊+⚡ = 元素風暴（全體 300% 三屬傷害）。',
    fullDescription: '消耗 30 MP，冷卻 8。本 tick 鑄造框可放入 3 個元素。🔥+🧊+⚡ = 元素風暴，對全體造成 300% 三屬性魔法傷害。',
    tags: ['damage', 'aoe', 'burst', 'magical'],
    special: { tripleForge: true },
  },
  elemental_return: {
    id: 'elemental_return', name: '元素回流', englishName: 'Elemental Return',
    classId: 'archmage', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在鑄造反應中編入回流術式，讓元素反應命中時回收部分消耗的魔力。',
    shortDescription: '3 tick 鑄造反應命中時回復反應 MP 消耗的 30%。',
    fullDescription: '消耗 10 MP，冷卻 5。3 tick 內鑄造框反應命中時回復該反應 MP 消耗的 30%。',
    tags: ['support', 'resource'],
    special: { forgeMpReturn: 30, duration: 3 },
  },
  spell_forge: {
    id: 'spell_forge', name: '破法鑄造', englishName: 'Spell Forge',
    classId: 'archmage', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'magical', element: 'none', multiplier: 1.5,
    description: '鑄造框可放入「破法」作為特殊元素。破法與任意元素組合 = 打斷敵人施法、驅散護盾，並附帶該元素的傷害。',
    shortDescription: '鑄造框放入破法+元素 = 打斷+驅散+該元素傷害 150%。',
    fullDescription: '消耗 20 MP，冷卻 5。鑄造框可放入「破法」作為元素。破法+任意元素 = 打斷施法、驅散護盾、150% 該元素魔法傷害。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'magical'],
    special: { forgeElement: 'dispel', interrupt: true, dispelShield: true },
  },
  apocalypse_forge: {
    id: 'apocalypse_forge', name: '天啟鑄造', englishName: 'Apocalypse Forge',
    classId: 'archmage', learnLevel: 50, type: 'active',
    targetType: 'all_enemies', resourceCost: 60, cooldown: 12,
    damageType: 'magical', element: 'none', multiplier: 4.0,
    description: '消耗大量魔力，鑄造框放入三個相同元素。🔥🔥🔥=隕石降臨、🧊🧊🧊=絕對零度、⚡⚡⚡=雷神降臨。每種終極反應都有獨特的毀滅效果。',
    shortDescription: '60 MP。放入 3 個同元素：🔥🔥🔥=隕石（AoE 燃燒）/ 🧊🧊🧊=絕對零度（全體凍結）/ ⚡⚡⚡=雷神（全體麻痺+連鎖）。',
    fullDescription: '消耗 60 MP，冷卻 12。鑄造框放入 3 個同元素觸發終極反應：🔥🔥🔥=隕石降臨（400% 火傷+燃燒3tick）、🧊🧊🧊=絕對零度（400% 冰傷+凍結2tick）、⚡⚡⚡=雷神降臨（400% 雷傷+麻痺+全體連鎖）。',
    tags: ['damage', 'aoe', 'burst', 'magical'],
    special: { apocalypseForge: true, tripleForge: true },
  },

  // ════════════════════════════════════════════
  //  魔偶師 (Lv 20+) - 法師系二轉・魔偶系統
  // ════════════════════════════════════════════

  golem_craft: {
    id: 'golem_craft', name: '魔偶製造', englishName: 'Golem Craft',
    classId: 'warlock', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '魔偶師的核心系統。可製造並指揮一個魔偶作為獨立戰鬥實體。魔偶有自己的 HP（施法者 50%），每 tick 獨立行動，可被賦予火/冰/雷元素。',
    shortDescription: '可指揮一個魔偶。魔偶 HP=施法者50%，每 tick 獨立行動，可賦予元素、切換模式、跨房派遣。',
    fullDescription: '被動。定義魔偶系統：魔偶為獨立戰鬥實體，HP = 施法者 50%，每 tick 獨立行動。可被賦予元素（火/冰/雷）改變攻擊屬性，可切換攻擊/防禦/充能模式，可派遣到相鄰房間。被擊毀需重新召喚。',
    tags: ['passive', 'summon'],
    special: { golemSystem: true, golemHpRatio: 0.5 },
  },
  summon_golem: {
    id: 'summon_golem', name: '召喚魔偶', englishName: 'Summon Golem',
    classId: 'warlock', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以魔力塑造一個元素魔偶。可指定火（高傷）、冰（減速）或雷（連鎖）屬性。魔偶在本房自動攻擊敵人。',
    shortDescription: '召喚魔偶，指定火/冰/雷屬性。魔偶自動攻擊本房敵人。',
    fullDescription: '消耗 20 MP，冷卻 5。召喚魔偶到本房。可指定元素（火=高傷、冰=減速、雷=連鎖）改變攻擊屬性。魔偶以攻擊模式開始行動。',
    tags: ['summon', 'support'],
    special: { summonGolem: true, elementChoice: ['fire', 'ice', 'lightning'] },
  },
  golem_command: {
    id: 'golem_command', name: '魔偶指令', englishName: 'Golem Command',
    classId: 'warlock', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 2,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '切換魔偶的行為模式。攻擊模式主動出擊造成傷害；防禦模式替施法者擋傷；充能模式停止行動但為施法者回復 MP。',
    shortDescription: '切換魔偶模式：攻擊（80%魔傷/tick）/ 防禦（替你擋30%傷害）/ 充能（回復8 MP/tick）。',
    fullDescription: '消耗 0 MP，冷卻 2。切換魔偶行為模式：攻擊（每tick 對敵人造成 80% 魔法傷害）/ 防禦（替施法者承受 30% 傷害）/ 充能（不行動，施法者回復 8 MP/tick）。',
    tags: ['support', 'defense'],
    special: { golemMode: true, modes: { attack: { damage: 0.8 }, defense: { redirect: 0.3 }, charge: { mpRegen: 8 } } },
  },
  golem_dispatch: {
    id: 'golem_dispatch', name: '魔偶派遣', englishName: 'Golem Dispatch',
    classId: 'warlock', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將魔偶派遣到指定相鄰房間。魔偶在那邊自動戰鬥，可隨時召回。跨房的魔偶充當你的眼睛和拳頭。',
    shortDescription: '把魔偶派到相鄰房間自動戰鬥。可隨時召回。',
    fullDescription: '消耗 10 MP，冷卻 3。將魔偶派遣到指定相鄰房間，魔偶在該房間自動戰鬥。可再次使用召回魔偶。',
    tags: ['summon', 'support'],
    special: { golemDispatch: true, crossRoom: true },
  },
  element_infuse: {
    id: 'element_infuse', name: '元素賦予', englishName: 'Element Infuse',
    classId: 'warlock', learnLevel: 25, type: 'active',
    targetType: 'self', resourceCost: 12, cooldown: 4,
    damageType: 'magical', element: 'none', multiplier: 1.0,
    description: '戰鬥中更換魔偶的元素屬性。切換瞬間魔偶釋放舊元素的 AoE 爆發，隨即被新元素包覆。',
    shortDescription: '更換魔偶元素。切換時產生舊元素 AoE 爆發（100% 魔傷）。',
    fullDescription: '消耗 12 MP，冷卻 4。更換魔偶元素（火/冰/雷），不用重新召喚。切換瞬間產生舊元素的 AoE 爆發，對魔偶所在房間敵人造成 100% 魔法傷害。',
    tags: ['damage', 'aoe', 'magical'],
    special: { golemElementSwitch: true },
  },
  golem_enhance: {
    id: 'golem_enhance', name: '魔偶強化', englishName: 'Golem Enhancement',
    classId: 'warlock', learnLevel: 29, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '魔偶製造工藝的精進讓魔偶更加堅固強大。魔偶的 HP 上限大幅提升，攻擊模式的傷害也隨之增強。',
    shortDescription: '魔偶 HP 上限提升至施法者 80%，攻擊模式傷害 +30%。',
    fullDescription: '被動。魔偶 HP 上限從施法者 50% 提升至 80%，攻擊模式傷害 +30%。',
    tags: ['passive', 'buff', 'summon'],
    special: { golemHpRatio: 0.8, golemAttackBonus: 30 },
  },
  double_command: {
    id: 'double_command', name: '雙重指令', englishName: 'Double Command',
    classId: 'warlock', learnLevel: 33, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以強化的魔力連結驅動魔偶超頻運轉，讓魔偶在同一 tick 內執行兩次行動。',
    shortDescription: '本 tick 魔偶行動兩次（攻擊×2 / 防禦+反擊 / 充能翻倍）。',
    fullDescription: '消耗 18 MP，冷卻 5。本 tick 魔偶執行兩次行動：攻擊模式攻擊兩次、防禦模式防禦+反擊、充能模式 MP 回復翻倍。',
    tags: ['buff', 'burst'],
    special: { golemDoubleAction: true },
  },
  golem_link: {
    id: 'golem_link', name: '魔偶連結', englishName: 'Golem Link',
    classId: 'warlock', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '與魔偶建立深層魔力連結，共享視野。若魔偶在相鄰房間，你的技能可以透過魔偶施放到魔偶所在的房間。',
    shortDescription: '3 tick 共享視野。魔偶在相鄰房時，你的技能可透過魔偶跨房施放。',
    fullDescription: '消耗 20 MP，冷卻 6。3 tick 魔偶和你共享視野。魔偶在相鄰房間時，你的所有技能可透過魔偶施放到魔偶所在的房間。',
    tags: ['support', 'buff'],
    special: { golemLink: true, crossRoomCast: true, duration: 3 },
  },
  golem_detonate: {
    id: 'golem_detonate', name: '魔偶自爆', englishName: 'Golem Detonate',
    classId: 'warlock', learnLevel: 45, type: 'active',
    targetType: 'all_enemies', resourceCost: 15, cooldown: 8,
    damageType: 'magical', element: 'none', multiplier: 2.5,
    description: '引爆魔偶核心，產生毀滅性的元素爆炸。魔偶剩餘 HP 越高，爆炸傷害越大。魔偶在爆炸後銷毀。',
    shortDescription: '引爆魔偶，AoE 250% 魔傷 + 打斷（魔偶HP越高傷害越大）。魔偶銷毀。',
    fullDescription: '消耗 15 MP，冷卻 8。引爆魔偶核心造成 AoE 250% 魔法傷害 + 打斷施法。魔偶剩餘 HP 百分比越高，傷害越大（滿血=×1.5）。魔偶銷毀。',
    tags: ['damage', 'aoe', 'burst', 'interrupt', 'magical'],
    special: { golemDetonate: true, hpScaling: true, interrupt: true },
  },
  ultimate_golem: {
    id: 'ultimate_golem', name: '終極魔偶', englishName: 'Ultimate Golem',
    classId: 'warlock', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 40, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '傾注全部魔力製造一個終極魔偶。終極魔偶擁有施法者 100% 的 HP、攻擊力提升 50%、可免費切換三種元素。但這份強大無法長久維持，6 tick 後自動銷毀。',
    shortDescription: '召喚終極魔偶（HP=100%、攻擊+50%、免費切元素）。6 tick 後自動銷毀。',
    fullDescription: '消耗 40 MP，冷卻 12。召喚終極魔偶取代當前魔偶：HP=施法者 100%，攻擊 +50%，三元素切換免費（不消耗 MP、無冷卻）。6 tick 後自動銷毀。',
    tags: ['summon', 'burst', 'buff'],
    special: { ultimateGolem: true, golemHpRatio: 1.0, golemAttackBonus: 50, duration: 6 },
  },

  // ════════════════════════════════════════════
  //  次元術士 (Lv 20+) - 法師系二轉・次元門
  // ════════════════════════════════════════════

  dimensional_sense: {
    id: 'dimensional_sense', name: '次元感知', englishName: 'Dimensional Sense',
    classId: 'chronomancer', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '次元術士的核心系統。可感知相鄰房間的敵人資訊。次元門開啟後，本房所有隊友的技能都可透過門攻擊另一端的敵人，且所有透過門的技能效果 +20%。',
    shortDescription: '感知相鄰房敵人。次元門開啟後全隊可跨房戰鬥，透過門的技能效果 +20%。',
    fullDescription: '被動。可感知相鄰房間敵人資訊。次元門開啟後，本房所有隊友的技能可透過門打到另一端敵人。所有透過次元門的技能效果 +20%。',
    tags: ['passive', 'support'],
    special: { dimensionalSystem: true, gateAmplify: 20 },
  },
  open_gate: {
    id: 'open_gate', name: '開啟次元門', englishName: 'Open Gate',
    classId: 'chronomancer', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 2,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '撕裂空間，在本房與指定相鄰房間之間開啟次元門。門開啟後，本房所有隊友都可以透過門對另一端的敵人施放技能。維持消耗 5 MP/tick。',
    shortDescription: '開啟次元門連結相鄰房。全隊可跨門攻擊。維持 5 MP/tick，最多 1 扇門。',
    fullDescription: '消耗 15 MP，冷卻 2。開啟次元門連結本房與指定相鄰房間。全隊可透過門攻擊/施法到另一端。維持消耗 5 MP/tick。最多 1 扇門，再次使用關閉現有門。',
    tags: ['support'],
    special: { dimensionalGate: true, maintenanceMpPerTick: 5, maxGates: 1 },
  },
  dimensional_shot: {
    id: 'dimensional_shot', name: '次元射擊', englishName: 'Dimensional Shot',
    classId: 'chronomancer', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 12, cooldown: 3,
    damageType: 'magical', element: 'none', multiplier: 1.3,
    description: '透過次元門發射一道扭曲空間的魔力彈。穿越次元門的能量在空間裂隙中被增幅，比直接攻擊更具威力。無門時仍可對本房敵人施放。',
    shortDescription: '透過門射擊：130% × 1.2 增幅 = 156% 魔傷。無門時打本房（無增幅）。',
    fullDescription: '消耗 12 MP，冷卻 3。透過次元門對另一端單體造成 130% 魔法傷害（+20% 次元增幅 = 156%）。無次元門時對本房敵人施放（無增幅）。',
    tags: ['damage', 'single_target', 'magical'],
    special: { crossRoomViaGate: true },
  },
  dimensional_pull: {
    id: 'dimensional_pull', name: '次元牽引', englishName: 'Dimensional Pull',
    classId: 'chronomancer', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 18, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '透過次元門的引力場將另一端的敵人拽進本房，或將本房的友方傳送到另一端。被拉進的怪物以極快的速度接近。',
    shortDescription: '透過門拉一隻怪到本房（arrivalTicks=1）。或傳送友方到另一端。',
    fullDescription: '消耗 18 MP，冷卻 5。透過次元門拉一隻怪物到本房（forced approaching, arrivalTicks = 1）。或把本房一名友方傳送到門另一端。',
    tags: ['control', 'support'],
    special: { crossRoomViaGate: true, pullEnemy: true, sendAlly: true, arrivalTicks: 1 },
  },
  gate_expansion: {
    id: 'gate_expansion', name: '門幅擴張', englishName: 'Gate Expansion',
    classId: 'chronomancer', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '對次元操控的精進讓次元門更加穩定高效。增幅效果提升，維持消耗降低。',
    shortDescription: '次元門增幅從 +20% 提升到 +30%，維持 MP 降至 3/tick。',
    fullDescription: '被動。次元門增幅效果從 +20% 提升到 +30%。維持 MP 消耗從 5/tick 降至 3/tick。',
    tags: ['passive', 'support'],
    special: { gateAmplify: 30, maintenanceMpPerTick: 3 },
  },
  dimensional_barrier: {
    id: 'dimensional_barrier', name: '次元壁壘', englishName: 'Dimensional Barrier',
    classId: 'chronomancer', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '暫時將次元門轉為單向屏障——你的隊伍可以透過門攻擊，但另一端的攻擊無法穿過門傷害你們。',
    shortDescription: '2 tick 次元門變為單向屏障：我方可攻擊，敵方攻擊被阻擋。',
    fullDescription: '消耗 20 MP，冷卻 6。2 tick 內次元門變為單向防禦屏障：本房隊友可透過門攻擊另一端，但另一端的攻擊無法穿過門。',
    effects: [{ type: 'shield', value: 999, duration: 2 }],
    tags: ['defense', 'support'],
    special: { gateBarrier: true, duration: 2 },
  },
  chain_gate: {
    id: 'chain_gate', name: '連鎖次元門', englishName: 'Chain Gate',
    classId: 'chronomancer', learnLevel: 33, type: 'active',
    targetType: 'self', resourceCost: 30, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '同時撕開第二道次元門，連結到不同方向的相鄰房間。短時間內隊伍可以同時對兩個方向的敵人作戰。',
    shortDescription: '4 tick 同時開啟第 2 扇門到不同方向（維持消耗翻倍）。',
    fullDescription: '消耗 30 MP，冷卻 8。4 tick 內同時開啟第 2 扇次元門到不同方向的相鄰房間。維持消耗翻倍。4 tick 後第 2 扇門自動關閉。',
    tags: ['support'],
    special: { chainGate: true, maxGates: 2, duration: 4 },
  },
  dimensional_fold: {
    id: 'dimensional_fold', name: '次元折疊', englishName: 'Dimensional Fold',
    classId: 'chronomancer', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '折疊次元門周圍的空間，讓透過門施放的下一個技能效果翻倍——範圍翻倍或傷害翻倍。',
    shortDescription: '透過門施放的下一個技能效果 ×2（範圍翻倍或傷害翻倍）。',
    fullDescription: '消耗 18 MP，冷卻 6。透過次元門施放的下一個技能效果 ×2（範圍類技能範圍翻倍，傷害類技能傷害翻倍）。',
    tags: ['buff', 'burst'],
    special: { nextGateSpellDoubled: true },
  },
  spacetime_rupture: {
    id: 'spacetime_rupture', name: '時空斷裂', englishName: 'Spacetime Rupture',
    classId: 'chronomancer', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 5,
    damageType: 'magical', element: 'none', multiplier: 2.0,
    description: '透過次元門發射一道撕裂時空的衝擊波，切斷敵人的一切行動與防護。無次元門時仍可使用但威力減半。',
    shortDescription: '透過門：200% 魔傷 + 打斷 + 驅散。無門時威力減半。',
    fullDescription: '消耗 25 MP，冷卻 5。透過次元門對另一端造成 200% 魔法傷害 + 打斷施法 + 驅散護盾。無次元門時對本房施放，威力減半（100%）。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'magical'],
    special: { crossRoomViaGate: true, interrupt: true, dispelShield: true, noGatePenalty: 0.5 },
  },
  dimensional_collapse: {
    id: 'dimensional_collapse', name: '次元崩塌', englishName: 'Dimensional Collapse',
    classId: 'chronomancer', learnLevel: 50, type: 'active',
    targetType: 'all_enemies', resourceCost: 35, cooldown: 12,
    damageType: 'magical', element: 'none', multiplier: 3.0,
    description: '主動關閉次元門並引爆其中蘊含的空間能量。次元門維持越久，爆炸越強烈。爆炸同時波及門兩端房間的所有敵人。',
    shortDescription: '引爆次元門。門每存在 1 tick = +50% 傷害。對兩端房間所有敵人造成巨額 AoE。',
    fullDescription: '消耗 35 MP，冷卻 12。關閉次元門並引爆。基礎 300% 魔法傷害，門每存在 1 tick 額外 +50% 傷害。對門兩端房間的所有敵人造成 AoE。門引爆後需重新開啟。',
    tags: ['damage', 'aoe', 'burst', 'magical'],
    special: { gateDetonate: true, tickScaling: 50, dualRoomAoE: true },
  },

  // ════════════════════════════════════════════
  //  鷹眼獵手 (Lv 20+) - 遊俠系二轉・射程系統
  // ════════════════════════════════════════════

  hawk_eye: {
    id: 'hawk_eye', name: '鷹眼', englishName: 'Hawk Eye',
    classId: 'marksman', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '鷹眼獵手的核心系統。視野延伸至 2 個房間外，能清楚看見遠處敵人的一切。攻擊每多 1 個房間距離，傷害額外 +50%。解鎖瞄準機制。',
    shortDescription: '視野 +2 房。每多 1 房距離 = 傷害 +50%。解鎖瞄準機制。',
    fullDescription: '被動。視野延伸 2 個房間。攻擊每增加 1 房距離 = 傷害 +50%。解鎖瞄準機制：花 tick 不行動累積瞄準層，增加射程與命中。',
    tags: ['passive', 'buff', 'physical'],
    special: { rangeSystem: true, visionRange: 2, damagePerRoom: 50 },
  },
  aim: {
    id: 'aim', name: '瞄準', englishName: 'Aim',
    classId: 'marksman', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '屏息凝神，雙眼鎖定遠方的目標。花 1 tick 不做其他動作來瞄準，下次攻擊射程+1、命中+30%、傷害+50%。可連續瞄準最多 2 次累積效果。瞄準中被攻擊會打斷。',
    shortDescription: '花 1 tick 瞄準：射程+1、命中+30%、傷害+50%。可連續 2 次累積。被攻擊打斷。',
    fullDescription: '消耗 0 Focus，無冷卻。花 1 tick 不行動進行瞄準。下次攻擊射程+1 房、命中+30%、傷害+50%。可連續瞄準最多 2 次累積。被擊中時瞄準中斷。',
    tags: ['support', 'buff'],
    special: { aimStack: true, maxAimStacks: 2, rangePerStack: 1, hitPerStack: 30, damagePerStack: 50, interruptOnHit: true },
  },
  long_shot: {
    id: 'long_shot', name: '遠射', englishName: 'Long Shot',
    classId: 'marksman', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '拉弓射出一支直指遠方的箭矢。基礎射程 1 房，每層瞄準延伸射程。完全瞄準後可射到 3 個房間外，威力隨距離暴增。',
    shortDescription: '射程 1 房，150% 物理。每層瞄準 +1 射程。2 層 = 3 房射程、250%、必中。',
    fullDescription: '消耗 15 Focus，冷卻 3。射程 1 房，對單體造成 150% 物理傷害。每層瞄準增加 1 房射程。2 層瞄準 = 射程 3 房、250% 傷害、必定命中。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { baseRange: 1, aimScaling: true },
  },
  quick_shot: {
    id: 'quick_shot', name: '急射', englishName: 'Quick Shot',
    classId: 'marksman', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '不需要瞄準的快速射擊，適合近距離和應急情況。只能打到本房或相鄰 1 房的敵人，但出手極快。',
    shortDescription: '即射，本房/相鄰 1 房。100% 物理。不受瞄準影響，快速輸出。',
    fullDescription: '消耗 8 Focus，冷卻 2。即射，射程本房或相鄰 1 房。100% 物理傷害。不受瞄準影響。',
    tags: ['damage', 'single_target', 'physical'],
    special: { baseRange: 1, noAimRequired: true },
  },
  steady_stance: {
    id: 'steady_stance', name: '穩固射姿', englishName: 'Steady Stance',
    classId: 'marksman', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '長年射擊鍛鍊出的穩定姿態，讓瞄準時更難被打斷，同時在專注瞄準的狀態下自然降低受到的傷害。',
    shortDescription: '瞄準中打斷率從 100% 降至 30%。瞄準中減傷 +15%。',
    fullDescription: '被動。瞄準中被攻擊的打斷率從 100% 降至 30%。瞄準期間獲得 15% 減傷。',
    tags: ['passive', 'defense', 'buff'],
    special: { aimInterruptResist: 70, aimDamageReduction: 15 },
  },
  piercing_arrow: {
    id: 'piercing_arrow', name: '穿甲箭', englishName: 'Piercing Arrow',
    classId: 'marksman', learnLevel: 29, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.8,
    description: '取出特製箭頭，射出一支能無視護甲的穿甲箭。瞄準後射程同樣延伸。',
    shortDescription: '180% 物理，無視 50% 防禦。瞄準後射程延伸。',
    fullDescription: '消耗 20 Focus，冷卻 4。對單體造成 180% 物理傷害，無視 50% 防禦。受瞄準影響延伸射程。',
    tags: ['damage', 'single_target', 'physical'],
    special: { defPiercing: 50, aimScaling: true },
  },
  rapid_fire: {
    id: 'rapid_fire', name: '連射', englishName: 'Rapid Fire',
    classId: 'marksman', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '以極快的速度連續射出三支箭矢，每支可瞄準不同目標。不需要瞄準即可快速覆蓋多個敵人。',
    shortDescription: '即射 3 發，各 80% 物理。可打不同目標。不需要瞄準。',
    fullDescription: '消耗 25 Focus，冷卻 4。即射 3 發箭矢，各 80% 物理傷害。可分別指定不同目標。不需要瞄準。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { multiShot: 3, noAimRequired: true },
  },
  tracking_arrow: {
    id: 'tracking_arrow', name: '追蹤箭', englishName: 'Tracking Arrow',
    classId: 'marksman', learnLevel: 37, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '射出一支帶有追蹤術式的特殊箭矢，標記目標 5 tick。標記期間你的所有攻擊自動追蹤該目標，無視距離必中。',
    shortDescription: '標記目標 5 tick。標記期間你的攻擊自動追蹤、無視距離、必中。',
    fullDescription: '消耗 15 Focus，冷卻 6。標記目標 5 tick。標記期間你的所有攻擊自動命中該目標，無視距離限制。',
    tags: ['support', 'control'],
    special: { trackingMark: true, duration: 5, guaranteedHit: true, ignoreRange: true },
  },
  explosive_arrow: {
    id: 'explosive_arrow', name: '爆裂箭', englishName: 'Explosive Arrow',
    classId: 'marksman', learnLevel: 45, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 6,
    damageType: 'physical', element: 'fire', multiplier: 1.5,
    description: '射出一支裝填了爆裂符文的特殊箭矢。命中後引發劇烈爆炸，波及周圍所有敵人並打斷施法。受瞄準影響延伸射程。',
    shortDescription: '射程 1-3 房。命中 AoE 150% 物理+火 + 打斷。瞄準增幅。',
    fullDescription: '消耗 25 Focus，冷卻 6。射程 1-3 房（受瞄準影響）。命中後 AoE 爆炸造成 150% 物理+火傷害並打斷施法。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'aoe', 'burst', 'interrupt', 'physical', 'fire'],
    special: { aimScaling: true, interrupt: true },
  },
  sky_eagle_strike: {
    id: 'sky_eagle_strike', name: '天鷹一擊', englishName: 'Sky Eagle Strike',
    classId: 'marksman', learnLevel: 50, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 12,
    damageType: 'physical', element: 'none', multiplier: 5.0,
    description: '鷹眼獵手的終極絕技。需要完整 2 層瞄準。箭矢從 3 個房間外射出，攜帶著穿雲裂石之力，必中必暴。若目標 HP 低於 30%，天鷹之箭將執行最終審判。',
    shortDescription: '需 2 層瞄準。射程 3 房，500% 物理必中必暴。目標 HP ≤ 30% 則 ×1.5。',
    fullDescription: '消耗 35 Focus，冷卻 12。需 2 層瞄準才能施放。射程 3 房，500% 物理傷害，必定命中，必定暴擊。目標 HP ≤ 30% 時傷害額外 ×1.5。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { requireAimStacks: 2, baseRange: 3, guaranteedHit: true, guaranteedCrit: true, executeThreshold: 0.3, executeDamageMultiplier: 1.5 },
  },

  // ════════════════════════════════════════════
  //  幽影獵手 (Lv 20+) - 遊俠系二轉・潛行暗殺
  // ════════════════════════════════════════════

  shadow_stealth: {
    id: 'shadow_stealth', name: '暗影潛行', englishName: 'Shadow Stealth',
    classId: 'assassin', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '幽影獵手的核心系統。潛行中不可被選為目標，在房間間移動不會觸發怪物。但不能攻擊，被 AoE 命中會強制現身。從潛行中發動的攻擊必定暴擊並獲得巨額傷害加成。',
    shortDescription: '潛行中：不可被選為目標、移動不觸怪、不能攻擊。潛行攻擊必暴+高傷。被 AoE 打現身。',
    fullDescription: '被動。定義潛行系統：潛行中不可被選為目標，移動不觸發怪物。不能使用攻擊技能。被 AoE 命中強制現身。從潛行中發動攻擊必定暴擊。',
    tags: ['passive', 'buff'],
    special: { stealthSystem: true, stealthUntargetable: true, stealthNonAggro: true, aoeBreaksStealth: true },
  },
  enter_shadow: {
    id: 'enter_shadow', name: '潛入暗影', englishName: 'Enter Shadow',
    classId: 'assassin', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '壓低身軀融入暗影之中，氣息、聲音、存在感全部消失。進入潛行狀態，敵人無法察覺你的存在。',
    shortDescription: '進入潛行。不可被攻擊、移動不觸怪。不能使用攻擊技能。',
    fullDescription: '消耗 15 Focus，冷卻 6。進入潛行狀態。不可被選為目標，移動不觸發怪物，但不能使用攻擊技能。',
    effects: [{ type: 'stealth', value: 1, duration: 99 }],
    tags: ['buff', 'defense'],
    special: { enterStealth: true },
  },
  assassinate: {
    id: 'assassinate', name: '暗殺', englishName: 'Assassinate',
    classId: 'assassin', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 3.0,
    description: '從暗影中現身的瞬間，匕首已經刺穿了敵人的要害。潛行限定的致命一擊，必定暴擊且傷害暴增。攻擊後潛行解除。',
    shortDescription: '潛行限定。必暴 + 300% 物理傷害。使用後潛行解除。',
    fullDescription: '消耗 20 Focus，冷卻 4。潛行狀態限定。對單體造成 300% 物理傷害，必定暴擊。使用後潛行解除。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { requiresStealth: true, guaranteedCrit: true, breaksStealth: true },
  },
  smoke_bomb: {
    id: 'smoke_bomb', name: '煙霧彈', englishName: 'Smoke Bomb',
    classId: 'assassin', learnLevel: 20, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '擲出一顆煙霧彈，濃烈的黑煙瞬間充斥整個戰場。敵人在煙霧中失去視野，而你趁亂隱入暗影——無視潛入暗影的冷卻直接進入潛行。',
    shortDescription: 'AoE 致盲 1 tick + 立刻進入潛行（無視潛入暗影 CD）。',
    fullDescription: '消耗 25 Focus，冷卻 8。對本房所有敵人致盲 1 tick。自身立刻進入潛行狀態（無視潛入暗影的冷卻）。',
    effects: [{ type: 'silence', value: 1, duration: 1 }],
    tags: ['control', 'defense'],
    special: { aoeBlind: true, instantStealth: true },
  },
  lethal_weakness: {
    id: 'lethal_weakness', name: '致命弱點', englishName: 'Lethal Weakness',
    classId: 'assassin', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '對人體結構的透徹理解讓暗殺更加致命。暗殺傷害大幅提升，若暗殺直接擊殺目標，冷卻歸零可立刻再次暗殺。',
    shortDescription: '暗殺傷害提升至 400%。暗殺擊殺時 CD 歸零。',
    fullDescription: '被動。暗殺技能傷害從 300% 提升至 400%。暗殺直接擊殺目標時，暗殺的冷卻歸零。',
    tags: ['passive', 'burst'],
    special: { assassinateDamageBonus: 100, killResetCooldown: true },
  },
  shadow_stride: {
    id: 'shadow_stride', name: '影步', englishName: 'Shadow Stride',
    classId: 'assassin', learnLevel: 29, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '潛行中穿越暗影移動到相鄰房間的敵人背後。到達後下一次暗殺傷害額外提升。',
    shortDescription: '潛行中移動到相鄰房間敵人背後。下次暗殺傷害 +50%。',
    fullDescription: '消耗 15 Focus，冷卻 5。潛行中使用，移動到指定相鄰房間的敵人背後（保持潛行）。下一次暗殺傷害額外 +50%。',
    tags: ['mobility', 'buff'],
    special: { requiresStealth: true, crossRoom: true, nextAssassinateBonus: 50 },
  },
  poison_blade: {
    id: 'poison_blade', name: '毒刃', englishName: 'Poison Blade',
    classId: 'assassin', learnLevel: 33, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 6,
    damageType: 'pure', element: 'nature', multiplier: 0,
    description: '在武器上塗抹劇毒。接下來 3 tick 內的暗殺命中會附加致命毒素，持續侵蝕目標的生命力。',
    shortDescription: '3 tick 武器塗毒。暗殺命中附加毒 DoT（5 tick 持續傷害）。',
    fullDescription: '消耗 18 Focus，冷卻 6。武器塗毒 3 tick。期間暗殺命中時附加毒 DoT（5 tick 持續傷害，每 tick 3% 最大 HP）。',
    effects: [{ type: 'poison', value: 3, duration: 5 }],
    tags: ['buff', 'damage', 'nature'],
    special: { poisonCoating: true, duration: 3 },
  },
  shadow_clone: {
    id: 'shadow_clone', name: '暗影分身', englishName: 'Shadow Clone',
    classId: 'assassin', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '現身後在原地留下一個暗影分身。分身吸引敵人攻擊 2 tick，讓你安全撤退或重新潛行。',
    shortDescription: '留下分身 2 tick。分身吸引敵人攻擊。你可安全撤退或重新潛行。',
    fullDescription: '消耗 20 Focus，冷卻 8。在原地留下暗影分身 2 tick。分身吸引敵人攻擊（替代嘲諷），你可安全離開或重新潛行。',
    effects: [{ type: 'taunt', value: 1, duration: 2 }],
    tags: ['defense', 'control'],
    special: { shadowClone: true, duration: 2 },
  },
  chain_kill: {
    id: 'chain_kill', name: '影殺連鎖', englishName: 'Chain Kill',
    classId: 'assassin', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 30, cooldown: 10,
    damageType: 'physical', element: 'none', multiplier: 2.0,
    description: '特殊的暗殺技巧——攻擊後不現身，保持潛行繼續獵殺。傷害稍低但可以打斷施法和驅散護盾。',
    shortDescription: '潛行限定。200% 物理 + 打斷 + 驅散。使用後保持潛行。',
    fullDescription: '消耗 30 Focus，冷卻 10。潛行限定。對單體造成 200% 物理傷害，打斷施法，驅散護盾。使用後保持潛行狀態（不現身）。',
    tags: ['damage', 'single_target', 'interrupt', 'physical'],
    special: { requiresStealth: true, interrupt: true, dispelShield: true, maintainStealth: true },
  },
  deaths_kiss: {
    id: 'deaths_kiss', name: '死神之吻', englishName: "Death's Kiss",
    classId: 'assassin', learnLevel: 50, type: 'active',
    targetType: 'single_enemy', resourceCost: 40, cooldown: 15,
    damageType: 'physical', element: 'dark', multiplier: 5.0,
    description: '幽影獵手的終極暗殺。若目標 HP 低於 20%，直接斬殺（無視剩餘 HP）。Boss 類目標改為造成 500% 物理+暗傷害。只有從潛行中才能施展這一招。',
    shortDescription: '潛行限定。HP ≤ 20% 目標直接斬殺。Boss 改為 500% 傷害。',
    fullDescription: '消耗 40 Focus，冷卻 15。潛行限定。若目標 HP ≤ 20%：直接斬殺（非 Boss）。Boss 類目標造成 500% 物理+暗傷害。使用後潛行解除。',
    tags: ['damage', 'single_target', 'burst', 'physical', 'dark'],
    special: { requiresStealth: true, breaksStealth: true, executeThreshold: 0.2, instantKillNonBoss: true, bossMultiplier: 5.0 },
  },

  // ════════════════════════════════════════════
  //  馴獸師 (Lv 20+) - 遊俠系二轉・寵物捕捉
  // ════════════════════════════════════════════

  beast_instinct: {
    id: 'beast_instinct', name: '馴獸本能', englishName: 'Beast Instinct',
    classId: 'beast_master', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '馴獸師的核心系統。可捕捉 beast 型怪物作為寵物。寵物是獨立戰鬥實體，有自己的 HP 和行動，技能取決於捕捉的怪物種類。同時只能攜帶 1 隻寵物。',
    shortDescription: '可捕捉 beast 怪物當寵物。寵物獨立戰鬥，技能取決於怪物種類。同時 1 隻。',
    fullDescription: '被動。定義馴獸系統：可捕捉 beast 型怪物為寵物。寵物有自己的 HP（原怪物的 80%）和行動，技能保留原怪物的技能。同時只能攜帶 1 隻寵物。寵物死亡需 10 tick 後才能重新召喚。',
    tags: ['passive', 'summon'],
    special: { petSystem: true, petCapture: true, maxPets: 1, petDeathCooldown: 10 },
  },
  capture: {
    id: 'capture', name: '捕捉', englishName: 'Capture',
    classId: 'beast_master', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '對 beast 型怪物使用。當目標 HP 低於 30% 時可以嘗試捕捉，成功後成為你的寵物。非 beast 型怪物無法捕捉。',
    shortDescription: 'beast 型怪物 HP ≤ 30% 時捕捉為寵物。非 beast 無效。',
    fullDescription: '消耗 25 Focus，冷卻 3。對 beast 型怪物使用。HP ≤ 30% 時捕捉成功，成為你的寵物（替換現有寵物）。非 beast 型無法捕捉。失敗時不消耗冷卻。',
    tags: ['control', 'summon'],
    special: { captureTarget: 'beast', captureThreshold: 0.3 },
  },
  pet_command: {
    id: 'pet_command', name: '寵物指令', englishName: 'Pet Command',
    classId: 'beast_master', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 1,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '指揮寵物的行為模式。攻擊模式下寵物主動出擊；防守模式替你擋傷；跟隨模式不戰鬥保持安全。寵物的攻擊技能取決於捕捉的怪物種類。',
    shortDescription: '切換寵物模式：攻擊（主動出擊）/ 防守（替你擋 30% 傷害）/ 跟隨（安全模式）。',
    fullDescription: '消耗 0 Focus，冷卻 1。切換寵物行為模式：攻擊（每 tick 主動攻擊敵人，使用原怪物技能）/ 防守（替馴獸師承受 30% 傷害）/ 跟隨（不戰鬥，安全模式）。',
    tags: ['support', 'defense'],
    special: { petMode: true, modes: ['attack', 'defend', 'follow'] },
  },
  summon_pet: {
    id: 'summon_pet', name: '寵物召喚', englishName: 'Summon Pet',
    classId: 'beast_master', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    usageContext: 'both',
    description: '召喚你的寵物到身邊，或解散寵物。寵物死亡後需等待 10 tick 才能重新召喚。',
    shortDescription: '召喚/解散寵物。死亡後 10 tick 才能重召。',
    fullDescription: '消耗 10 Focus，冷卻 5。召喚或解散寵物。寵物死亡後需等 10 tick 才能重新召喚。',
    tags: ['summon', 'support'],
    special: { summonPet: true },
  },
  taming_mastery: {
    id: 'taming_mastery', name: '馴化強化', englishName: 'Taming Mastery',
    classId: 'beast_master', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '馴獸技巧的精進讓寵物更加強壯，捕捉也變得更加容易。',
    shortDescription: '寵物 HP +30%、攻擊 +20%。捕捉門檻提升至 HP ≤ 40%。',
    fullDescription: '被動。寵物 HP +30%、攻擊傷害 +20%。捕捉成功的 HP 門檻從 ≤ 30% 提升至 ≤ 40%。',
    tags: ['passive', 'buff', 'summon'],
    special: { petHpBonus: 30, petDamageBonus: 20, captureThreshold: 0.4 },
  },
  wild_resonance: {
    id: 'wild_resonance', name: '野性共鳴', englishName: 'Wild Resonance',
    classId: 'beast_master', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '與寵物建立深層心靈連結。共鳴期間你和寵物共享增益 buff——寵物暴擊時你也暴擊，你受到治療時寵物也恢復。',
    shortDescription: '3 tick 與寵物共享增益 buff。寵物暴擊你也暴擊。',
    fullDescription: '消耗 18 Focus，冷卻 6。3 tick 你和寵物共享所有增益 buff。寵物暴擊時你的下次攻擊也必暴。你受到治療時寵物恢復等量 HP。',
    tags: ['support', 'buff'],
    special: { petResonance: true, duration: 3 },
  },
  pet_charge: {
    id: 'pet_charge', name: '寵物衝鋒', englishName: 'Pet Charge',
    classId: 'beast_master', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 2.0,
    description: '命令寵物全力衝向目標，以猛獸的體重和速度造成毀滅性撞擊。',
    shortDescription: '命令寵物衝鋒，200% 物理 + 暈眩 1 tick。',
    fullDescription: '消耗 20 Focus，冷卻 5。命令寵物對單體衝鋒造成 200% 物理傷害 + 暈眩 1 tick。需要寵物存活且在本房。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'control', 'physical'],
    special: { petAction: true },
  },
  pet_dispatch: {
    id: 'pet_dispatch', name: '寵物派遣', englishName: 'Pet Dispatch',
    classId: 'beast_master', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 12, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將寵物派到相鄰房間自動戰鬥。寵物在那邊充當你的眼睛和爪牙，偵查情報並攻擊敵人。隨時可召回。',
    shortDescription: '派寵物到相鄰房間自動戰鬥+偵查。可隨時召回。',
    fullDescription: '消耗 12 Focus，冷卻 4。將寵物派遣到指定相鄰房間。寵物在該房間自動戰鬥並提供視野資訊。可再次使用召回。',
    tags: ['support', 'summon'],
    special: { petDispatch: true, crossRoom: true },
  },
  beast_king_roar: {
    id: 'beast_king_roar', name: '獸王咆哮', englishName: 'Beast King Roar',
    classId: 'beast_master', learnLevel: 45, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 8,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '你和寵物同時發出震撼戰場的咆哮。敵人在雙重威壓下陷入恐懼，施法被打斷，防護被震碎。',
    shortDescription: '你+寵物同時 AoE。150% 物理 + 恐懼 1 tick + 打斷 + 驅散。',
    fullDescription: '消耗 25 Focus，冷卻 8。你和寵物同時對本房所有敵人造成 150% 物理傷害 + 恐懼 1 tick + 打斷施法 + 驅散護盾。需要寵物存活。',
    effects: [{ type: 'fear', value: 1, duration: 1 }],
    tags: ['damage', 'aoe', 'control', 'interrupt', 'physical'],
    special: { petAction: true, interrupt: true, dispelShield: true },
  },
  beast_fusion: {
    id: 'beast_fusion', name: '野獸融合', englishName: 'Beast Fusion',
    classId: 'beast_master', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 35, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '馴獸師的終極奧義——與寵物靈魂融合。6 tick 內獲得寵物的全部能力和屬性加成，攻擊傷害翻倍，擁有寵物的所有技能。融合結束後寵物消失，需重新召喚。',
    shortDescription: '6 tick 與寵物融合：獲得寵物全能力、攻擊×2。結束後寵物消失需重召。',
    fullDescription: '消耗 35 Focus，冷卻 12。6 tick 與寵物靈魂融合：獲得寵物全部能力和屬性加成，攻擊傷害翻倍，可使用寵物技能。融合結束後寵物消失，需重新召喚。',
    effects: [{ type: 'atk_up', value: 100, duration: 6 }],
    tags: ['buff', 'burst', 'summon'],
    special: { petFusion: true, duration: 6, attackMultiplier: 2, petDisappearsAfter: true },
  },

  // ════════════════════════════════════════════
  //  神殿師 (Lv 20+) - 祭司系二轉・祭壇建造
  // ════════════════════════════════════════════

  temple_architecture: { id: 'temple_architecture', name: '聖殿建築', englishName: 'Temple Architecture', classId: 'high_priest', learnLevel: 20, type: 'passive', targetType: 'self', resourceCost: 0, cooldown: 0, damageType: 'pure', element: 'none', multiplier: 0, description: '神殿師的核心系統。可在房間中建造祭壇——一個有HP的實體結構。祭壇每tick自動治療房內所有友方。可升級祭壇強化效果，也可將敵人獻祭造成AoE傷害。', shortDescription: '可建造祭壇（有HP實體），每tick自動治療全隊。可升級，可獻祭敵人轉為AoE傷害。', fullDescription: '被動。定義祭壇系統：可建造有HP的祭壇結構。祭壇每tick治療房內全隊。可升級(Lv1-3)強化效果。可將敵人獻祭轉為AoE傷害（獻祭期間停止回血）。', tags: ['passive', 'summon', 'heal'], special: { altarSystem: true } },
  build_altar: { id: 'build_altar', name: '建造祭壇', englishName: 'Build Altar', classId: 'high_priest', learnLevel: 20, type: 'active', targetType: 'self', resourceCost: 25, cooldown: 5, damageType: 'pure', element: 'light', multiplier: 0, description: '以信仰之力在房間中建造Lv1祭壇。祭壇有自身的HP，每tick自動治療本房所有友方3%HP。離開房間時祭壇留在原地。', shortDescription: '建造Lv1祭壇（HP=你50%）。每tick全隊回3%HP。離開房間祭壇留下。', fullDescription: '消耗25信仰，冷卻5。建造Lv1祭壇（HP=施法者50%）。祭壇每tick自動治療本房所有友方3%最大HP。離開房間祭壇留下，到新房間需重建。', tags: ['summon', 'heal', 'support', 'light'], special: { buildAltar: true, altarLevel: 1, altarHpRatio: 0.5, healPercent: 3 } },
  upgrade_altar: { id: 'upgrade_altar', name: '祭壇升級', englishName: 'Upgrade Altar', classId: 'high_priest', learnLevel: 20, type: 'active', targetType: 'self', resourceCost: 20, cooldown: 3, damageType: 'pure', element: 'light', multiplier: 0, description: '消耗信仰升級現有祭壇。Lv2：回血5%+自動驅散debuff。Lv3：回血8%+驅散+阻止一次死亡。升級同時增加獻祭傷害。', shortDescription: 'Lv2（5%+驅散）/ Lv3（8%+驅散+擋死1次）。升級增加獻祭傷害。', fullDescription: '消耗20信仰/級，冷卻3。升級祭壇：Lv2（每tick回5%HP+自動驅散）/ Lv3（每tick回8%HP+驅散+擋死1次）。同時提升獻祭傷害倍率。', tags: ['support', 'heal', 'light'], special: { upgradeAltar: true } },
  sacrifice_enemy: { id: 'sacrifice_enemy', name: '獻祭', englishName: 'Sacrifice', classId: 'high_priest', learnLevel: 20, type: 'active', targetType: 'single_enemy', resourceCost: 15, cooldown: 3, damageType: 'magical', element: 'light', multiplier: 1.0, description: '將一名敵人丟到祭壇上獻祭。3tick對房內所有敵人造成持續光傷。祭壇等級越高獻祭傷害越大。獻祭期間祭壇停止回血。', shortDescription: '丟敵人到祭壇。3tick AoE光傷（祭壇等級增幅）。獻祭期間停止回血。CD3。', fullDescription: '消耗15信仰，冷卻3。將敵人獻祭給祭壇。3tick對房內全體敵人造成100%光傷/tick（Lv2×1.5、Lv3×2）。獻祭期間祭壇停止治療。', tags: ['damage', 'aoe', 'light'], special: { altarSacrifice: true, duration: 3 } },
  altar_fortify: { id: 'altar_fortify', name: '祭壇強化', englishName: 'Altar Fortify', classId: 'high_priest', learnLevel: 25, type: 'passive', targetType: 'self', resourceCost: 0, cooldown: 0, damageType: 'pure', element: 'none', multiplier: 0, description: '祭壇建造工藝的精進。祭壇HP提升至施法者80%，Lv1基礎回血從3%提升至4%。', shortDescription: '祭壇HP提升至80%，Lv1回血4%/tick。', fullDescription: '被動。祭壇HP上限從施法者50%提升至80%。Lv1祭壇回血從3%/tick提升至4%/tick。', tags: ['passive', 'buff'], special: { altarHpRatio: 0.8 } },
  holy_burst: { id: 'holy_burst', name: '神聖爆發', englishName: 'Holy Burst', classId: 'high_priest', learnLevel: 29, type: 'active', targetType: 'all_allies', resourceCost: 30, cooldown: 8, damageType: 'pure', element: 'light', multiplier: 0, description: '消耗祭壇所有等級能量，對全隊釋放大量治療並驅散所有debuff。祭壇降回Lv1。', shortDescription: '消耗祭壇等級，全隊大量治療+驅散。祭壇降回Lv1。', fullDescription: '消耗30信仰，冷卻8。消耗祭壇所有升級等級：每消耗1級治療全隊15%HP+驅散所有debuff。祭壇降回Lv1。', tags: ['heal', 'support', 'light'], special: { isHeal: true, altarBurst: true } },
  altar_link: { id: 'altar_link', name: '祭壇連結', englishName: 'Altar Link', classId: 'high_priest', learnLevel: 33, type: 'active', targetType: 'self', resourceCost: 10, cooldown: 6, damageType: 'pure', element: 'none', multiplier: 0, description: '在相鄰房間建造一座分壇，與主壇共存。分壇有Lv1效果。', shortDescription: '在相鄰房間建造分壇（Lv1效果），與主壇共存。', fullDescription: '消耗10信仰，冷卻6。在指定相鄰房間建造分壇（Lv1效果：3%回血/tick）。分壇與主壇獨立存在。', tags: ['summon', 'support'], special: { altarLink: true, crossRoom: true } },
  divine_barrier: { id: 'divine_barrier', name: '神聖屏障', englishName: 'Divine Barrier', classId: 'high_priest', learnLevel: 37, type: 'active', targetType: 'all_allies', resourceCost: 25, cooldown: 6, damageType: 'pure', element: 'light', multiplier: 0, description: '祭壇釋放神聖屏障，全隊3tick減傷30%。屏障期間祭壇不回血。', shortDescription: '祭壇釋放屏障，3tick全隊減傷30%。期間不回血。', fullDescription: '消耗25信仰，冷卻6。祭壇釋放神聖屏障3tick：全隊減傷30%。屏障期間祭壇停止治療。', effects: [{ type: 'damage_reduction', value: 30, duration: 3 }], tags: ['defense', 'support', 'light'], special: { altarBarrier: true } },
  enhanced_sacrifice: { id: 'enhanced_sacrifice', name: '獻祭強化', englishName: 'Enhanced Sacrifice', classId: 'high_priest', learnLevel: 45, type: 'active', targetType: 'all_enemies', resourceCost: 20, cooldown: 5, damageType: 'magical', element: 'light', multiplier: 1.5, description: '強化版獻祭：可同時將2名敵人丟上祭壇，傷害疊加。打斷施法+驅散護盾。', shortDescription: '獻祭2名敵人，傷害疊加。打斷+驅散。', fullDescription: '消耗20信仰，冷卻5。同時獻祭2名敵人到祭壇。AoE傷害疊加（150%×2）+打斷施法+驅散護盾。獻祭期間祭壇停止治療。', effects: [{ type: 'stun', value: 1, duration: 1 }], tags: ['damage', 'aoe', 'interrupt', 'light'], special: { altarSacrifice: true, dualSacrifice: true, interrupt: true, dispelShield: true } },
  eternal_temple: { id: 'eternal_temple', name: '永恆聖殿', englishName: 'Eternal Temple', classId: 'high_priest', learnLevel: 50, type: 'active', targetType: 'self', resourceCost: 40, cooldown: 12, damageType: 'pure', element: 'light', multiplier: 0, description: '以全部信仰之力將祭壇昇華為永恆聖殿。8tick祭壇直接升至Lv3+，HP翻倍，回血和獻祭效果全部×1.5。', shortDescription: '8tick祭壇升至Lv3+，HP翻倍，所有效果×1.5。', fullDescription: '消耗40信仰，冷卻12。8tick內祭壇直接升至Lv3+：HP翻倍、回血效果×1.5（12%/tick）、獻祭傷害×1.5。8tick後祭壇回到原等級。', tags: ['buff', 'burst', 'support'], special: { eternalTemple: true, duration: 8 } },

  // ════════════════════════════════════════════
  //  冥行者 (Lv 20+) - 祭司系二轉・靈界通道
  // ════════════════════════════════════════════

  spirit_sense: { id: 'spirit_sense', name: '靈界感知', englishName: 'Spirit Sense', classId: 'druid', learnLevel: 20, type: 'passive', targetType: 'self', resourceCost: 0, cooldown: 0, damageType: 'pure', element: 'none', multiplier: 0, description: '冥行者的核心系統。可感知靈界——看到死去隊友的靈魂和隱藏的靈體敵人。可進入靈界（免疫物理、魔傷×1.5），在靈界中拉回死者靈魂復活，或推敵人進靈界放逐。', shortDescription: '可進入靈界（免疫物理、魔傷×1.5）。靈界中可復活死者、放逐敵人。', fullDescription: '被動。定義靈界系統：可看到靈界（死去隊友靈魂、隱藏靈體）。進入靈界後免疫物理攻擊、受魔法傷害×1.5。可拉回死者靈魂復活、推敵人進靈界暫時消失。', tags: ['passive', 'support'], special: { spiritWorldSystem: true, physicalImmune: true, magicVulnerability: 1.5 } },
  spirit_crossing: { id: 'spirit_crossing', name: '靈界穿越', englishName: 'Spirit Crossing', classId: 'druid', learnLevel: 20, type: 'active', targetType: 'self', resourceCost: 20, cooldown: 5, damageType: 'pure', element: 'none', multiplier: 0, description: '穿越維度的壁壘進入靈界。靈界中免疫物理攻擊但受魔法傷害×1.5。可看到並互動死者靈魂。不能對物質世界目標施法。', shortDescription: '進入靈界。免疫物理、魔傷×1.5。可互動靈魂。不能對物質世界施法。', fullDescription: '消耗20信仰，冷卻5。進入靈界。免疫物理攻擊，魔法傷害×1.5。可看到死者靈魂並互動。不能對物質世界的目標施法。', tags: ['defense', 'support'], special: { enterSpiritWorld: true } },
  soul_pull: { id: 'soul_pull', name: '靈魂牽引', englishName: 'Soul Pull', classId: 'druid', learnLevel: 20, type: 'active', targetType: 'single_ally', resourceCost: 30, cooldown: 8, damageType: 'pure', element: 'light', multiplier: 0, description: '在靈界中使用：拉回死去隊友的靈魂=復活（HP40%）。或將一個敵人推入靈界暫時消失3tick。', shortDescription: '靈界中：拉回死者靈魂=復活HP40%。或推敵人進靈界消失3tick。', fullDescription: '消耗30信仰，冷卻8。靈界限定。拉回死去隊友靈魂=復活（HP40%）。或推一個敵人進靈界（消失3tick，回來時受光傷）。', tags: ['heal', 'control', 'support', 'light'], special: { spiritWorldRequired: true, revive: true, reviveHpPercent: 40, banishDuration: 3 } },
  spirit_return: { id: 'spirit_return', name: '靈界歸還', englishName: 'Spirit Return', classId: 'druid', learnLevel: 20, type: 'active', targetType: 'all_enemies', resourceCost: 10, cooldown: 3, damageType: 'magical', element: 'light', multiplier: 1.0, description: '從靈界回到物質世界。歸還瞬間靈界能量衝擊周圍敵人，造成光傷並使其陷入短暫恐懼。', shortDescription: '回到物質世界。衝擊周圍敵人：100%光傷+恐懼1tick。', fullDescription: '消耗10信仰，冷卻3。從靈界回到物質世界。歸還時對周圍敵人造成100%光屬性魔法傷害+恐懼1tick。', effects: [{ type: 'fear', value: 1, duration: 1 }], tags: ['damage', 'aoe', 'control', 'light'], special: { exitSpiritWorld: true } },
  spirit_ward: { id: 'spirit_ward', name: '靈界守護', englishName: 'Spirit Ward', classId: 'druid', learnLevel: 25, type: 'passive', targetType: 'self', resourceCost: 0, cooldown: 0, damageType: 'pure', element: 'none', multiplier: 0, description: '對靈界的深入理解減輕了跨界的負擔。靈界中魔傷加倍從×1.5降至×1.2，穿越冷卻-2tick。', shortDescription: '靈界魔傷×1.5降至×1.2。穿越CD-2。', fullDescription: '被動。靈界中受魔法傷害倍率從×1.5降至×1.2。靈界穿越冷卻-2tick。', tags: ['passive', 'defense'], special: { magicVulnerability: 1.2 } },
  cross_heal: { id: 'cross_heal', name: '跨界治療', englishName: 'Cross-world Heal', classId: 'druid', learnLevel: 29, type: 'active', targetType: 'single_ally', resourceCost: 20, cooldown: 4, damageType: 'pure', element: 'light', multiplier: 0, description: '突破靈界與物質世界的隔閡，在靈界中對物質世界的友方施放治療（效果-30%）。', shortDescription: '靈界中可治療物質世界友方（效果-30%）。', fullDescription: '消耗20信仰，冷卻4。靈界中使用。對物質世界友方治療20%最大HP（跨界減益30%=實際14%）。', tags: ['heal', 'support', 'light'], special: { spiritWorldRequired: true, isHeal: true, crossWorldPenalty: 0.3 } },
  spirit_banish: { id: 'spirit_banish', name: '靈界放逐', englishName: 'Spirit Banish', classId: 'druid', learnLevel: 33, type: 'active', targetType: 'single_enemy', resourceCost: 25, cooldown: 6, damageType: 'magical', element: 'light', multiplier: 0.5, description: '不用進靈界。直接將一個敵人推入靈界3tick。敵人回來時受到光傷。', shortDescription: '直接推敵人進靈界3tick（不用自己進去）。回來時受光傷。', fullDescription: '消耗25信仰，冷卻6。不需要在靈界中。直接將一個敵人推入靈界消失3tick。敵人回來時受50%光傷。', tags: ['control', 'light'], special: { banishDuration: 3 } },
  spirit_link: { id: 'spirit_link', name: '靈魂鏈接', englishName: 'Spirit Link', classId: 'druid', learnLevel: 37, type: 'active', targetType: 'single_ally', resourceCost: 20, cooldown: 6, damageType: 'pure', element: 'none', multiplier: 0, description: '在靈界中連結自己和一名友方。3tick共享HP，傷害平分，治療共享。', shortDescription: '靈界中：3tick與友方共享HP（傷害平分、治療共享）。', fullDescription: '消耗20信仰，冷卻6。靈界中使用。3tick內與一名友方共享HP池：傷害平分承受，治療雙方共享。', tags: ['defense', 'support'], special: { spiritWorldRequired: true, hpShare: true, duration: 3 } },
  mass_revival: { id: 'mass_revival', name: '集體牽引', englishName: 'Mass Revival', classId: 'druid', learnLevel: 45, type: 'active', targetType: 'all_allies', resourceCost: 40, cooldown: 10, damageType: 'magical', element: 'light', multiplier: 1.5, description: '靈界中同時拉回所有死去隊友的靈魂。AoE復活+打斷周圍敵人+驅散護盾。', shortDescription: '靈界中：AoE復活所有死者HP30%。打斷+驅散周圍敵人。', fullDescription: '消耗40信仰，冷卻10。靈界限定。同時復活所有死去隊友（HP30%）+對周圍敵人150%光傷+打斷+驅散。', effects: [{ type: 'stun', value: 1, duration: 1 }], tags: ['heal', 'aoe', 'interrupt', 'light'], special: { spiritWorldRequired: true, massRevive: true, interrupt: true, dispelShield: true } },
  spirit_unity: { id: 'spirit_unity', name: '靈肉合一', englishName: 'Spirit Unity', classId: 'druid', learnLevel: 50, type: 'active', targetType: 'self', resourceCost: 40, cooldown: 12, damageType: 'pure', element: 'light', multiplier: 0, description: '終極奧義：8tick同時存在於物質世界和靈界。可對兩界目標施法，免疫物理，魔傷無加倍。', shortDescription: '8tick同時存在兩界。可對所有目標施法，免疫物理，魔傷無加倍。', fullDescription: '消耗40信仰，冷卻12。8tick同時存在於物質世界和靈界。可對兩界所有目標施法。免疫物理攻擊，魔法傷害不加倍。', tags: ['buff', 'burst', 'support'], special: { spiritUnity: true, duration: 8, physicalImmune: true, magicVulnerability: 1.0 } },

  // ════════════════════════════════════════════
  //  裁決者 (Lv 20+) - 祭司系二轉・罪業系統
  // ════════════════════════════════════════════

  eye_of_sin: { id: 'eye_of_sin', name: '罪業之眼', englishName: 'Eye of Sin', classId: 'inquisitor', learnLevel: 20, type: 'passive', targetType: 'self', resourceCost: 0, cooldown: 0, damageType: 'pure', element: 'none', multiplier: 0, description: '裁決者的核心系統。所有敵人的行動自動累積罪業（0-10）：攻擊+1、施法+1、自我治療+2、增益自身+1。你可以看到每個敵人的罪業數。', shortDescription: '敵人行動自動累積罪業0-10（攻擊+1、施法+1、自療+2、增益+1）。', fullDescription: '被動。所有敵人的行動自動累積罪業（0-10）：攻擊+1罪、施法+1罪、自我治療+2罪、增益自身+1罪。裁決者可看到每個敵人的罪業計數。', tags: ['passive', 'debuff'], special: { sinSystem: true, sinGain: { attack: 1, cast: 1, selfHeal: 2, selfBuff: 1 }, maxSin: 10 } },
  judgment_strike: { id: 'judgment_strike', name: '審判', englishName: 'Judgment', classId: 'inquisitor', learnLevel: 20, type: 'active', targetType: 'single_enemy', resourceCost: 15, cooldown: 3, damageType: 'magical', element: 'light', multiplier: 0.5, description: '消耗目標所有罪業，每點罪業轉化為50%光屬性魔法傷害。需要目標至少3點罪業才能施放。罪業越高，審判越致命。', shortDescription: '消耗所有罪業，每點=50%光傷。需3+罪。', fullDescription: '消耗15信仰，冷卻3。消耗目標所有罪業，每點罪業=50%光屬性魔法傷害。需3+罪業才能施放。', tags: ['damage', 'single_target', 'light'], special: { sinConsume: true, sinMinRequired: 3, damagePerSin: 50 } },
  absolution: { id: 'absolution', name: '赦免', englishName: 'Absolution', classId: 'inquisitor', learnLevel: 20, type: 'active', targetType: 'single_enemy', resourceCost: 15, cooldown: 3, damageType: 'pure', element: 'light', multiplier: 0, description: '以慈悲之心赦免目標的罪業，將每點罪業轉化為全隊的治療。慈悲的收割方式。', shortDescription: '消耗所有罪業，每點=全隊3%HP治療。', fullDescription: '消耗15信仰，冷卻3。消耗目標所有罪業，每點罪業=全隊回復3%最大HP。', tags: ['heal', 'support', 'light'], special: { sinConsume: true, isHeal: true, healPerSin: 3 } },
  sin_gaze: { id: 'sin_gaze', name: '罪業注視', englishName: 'Sin Gaze', classId: 'inquisitor', learnLevel: 20, type: 'active', targetType: 'single_enemy', resourceCost: 10, cooldown: 4, damageType: 'pure', element: 'none', multiplier: 0, description: '以審判之眼凝視目標，讓其行為產生的罪業加倍累積。加速抵達審判的時刻。', shortDescription: '標記敵人5tick，期間罪業累積翻倍。', fullDescription: '消耗10信仰，冷卻4。標記一個敵人5tick。期間該敵人行動產生的罪業翻倍。', tags: ['debuff', 'control'], special: { sinGaze: true, sinMultiplier: 2, duration: 5 } },
  chain_judgment: { id: 'chain_judgment', name: '連鎖審判', englishName: 'Chain Judgment', classId: 'inquisitor', learnLevel: 25, type: 'passive', targetType: 'self', resourceCost: 0, cooldown: 0, damageType: 'pure', element: 'none', multiplier: 0, description: '審判擊殺目標時，死者剩餘的罪業溢出，50%轉移到相鄰敵人身上。', shortDescription: '審判擊殺時罪業溢出：50%轉移到其他敵人。', fullDescription: '被動。審判技能擊殺目標時，死者剩餘罪業×50%轉移到本房其他敵人。', tags: ['passive', 'damage'], special: { sinOverflow: 0.5 } },
  condemn: { id: 'condemn', name: '宣判', englishName: 'Condemn', classId: 'inquisitor', learnLevel: 29, type: 'active', targetType: 'single_enemy', resourceCost: 20, cooldown: 5, damageType: 'pure', element: 'light', multiplier: 0, description: '對罪業深重者宣判懲罰。消耗5點罪業：沉默2tick+受傷增加20%。不清空全部罪業。', shortDescription: '需5+罪。消耗5罪：沉默2tick+受傷+20%。不清空全部。', fullDescription: '消耗20信仰，冷卻5。需目標5+罪業。消耗5點罪業：沉默2tick+受到傷害增加20%持續3tick。', effects: [{ type: 'silence', value: 1, duration: 2 }], tags: ['control', 'debuff', 'light'], special: { sinConsume: true, sinMinRequired: 5, sinCost: 5 } },
  mass_gaze: { id: 'mass_gaze', name: '群體注視', englishName: 'Mass Gaze', classId: 'inquisitor', learnLevel: 33, type: 'active', targetType: 'all_enemies', resourceCost: 25, cooldown: 6, damageType: 'pure', element: 'none', multiplier: 0, description: '以審判之眼掃視全場，本房所有敵人的罪業累積翻倍3tick。', shortDescription: 'AoE版罪業注視。全體罪業累積翻倍3tick。', fullDescription: '消耗25信仰，冷卻6。本房所有敵人罪業累積翻倍3tick。', tags: ['debuff', 'aoe', 'control'], special: { sinGaze: true, sinMultiplier: 2, duration: 3, aoe: true } },
  atonement: { id: 'atonement', name: '贖罪', englishName: 'Atonement', classId: 'inquisitor', learnLevel: 37, type: 'active', targetType: 'single_enemy', resourceCost: 0, cooldown: 5, damageType: 'pure', element: 'none', multiplier: 0, description: '讀取目標的罪業，每點罪業為你回復2%HP+5%信仰。不消耗罪業。自我續航技。', shortDescription: '每點罪業=你回復2%HP+5%信仰。不消耗罪業。', fullDescription: '消耗0信仰，冷卻5。讀取目標罪業，每點=你回復2%最大HP+5%信仰。不消耗目標的罪業。', tags: ['heal', 'resource', 'support', 'defense'], special: { sinRead: true, hpPerSin: 2, faithPerSin: 5 } },
  divine_punishment: { id: 'divine_punishment', name: '天罰', englishName: 'Divine Punishment', classId: 'inquisitor', learnLevel: 45, type: 'active', targetType: 'single_enemy', resourceCost: 30, cooldown: 8, damageType: 'magical', element: 'light', multiplier: 5.0, description: '對罪業滿溢者降下天罰。需10罪。500%光傷+打斷+驅散。非Boss可直接斬殺。', shortDescription: '需10罪滿。500%光傷+打斷+驅散。非Boss斬殺。', fullDescription: '消耗30信仰，冷卻8。需10罪業。消耗所有罪業造成500%光傷+打斷施法+驅散護盾。非Boss目標可直接斬殺。', effects: [{ type: 'stun', value: 1, duration: 2 }], tags: ['damage', 'single_target', 'burst', 'interrupt', 'light'], special: { sinConsume: true, sinMinRequired: 10, interrupt: true, dispelShield: true, executeNonBoss: true } },
  final_judgment: { id: 'final_judgment', name: '末日審判', englishName: 'Final Judgment', classId: 'inquisitor', learnLevel: 50, type: 'active', targetType: 'all_enemies', resourceCost: 40, cooldown: 12, damageType: 'magical', element: 'light', multiplier: 1.0, description: '終極裁決。AoE消耗所有敵人的罪業，每點=100%光傷。全場清算，罪無可逃。', shortDescription: 'AoE消耗全體敵人罪業。每點罪=100%光傷。全場清算。', fullDescription: '消耗40信仰，冷卻12。對本房所有敵人消耗其全部罪業，每點罪業=100%光屬性魔法傷害。全場清算。', tags: ['damage', 'aoe', 'burst', 'light'], special: { sinConsume: true, damagePerSin: 100, aoe: true } },

  ...createSecondJobSkillExpansionDefs(),

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

export const SKILL_DEFS: Record<string, SkillDef> = normalizeSkillDefs({
  ...RAW_SKILL_DEFS,
  ...createOriginPassiveSkillDefs(),
});

interface SecondJobSkillExpansion {
  classId: ClassId;
  resource: readonly [string, string, string, string];
  burst: readonly [string, string, string, string];
  survival: readonly [string, string, string, string];
  answer: readonly [string, string, string, string];
  damageType: 'physical' | 'magical';
  element: 'none' | 'fire' | 'light' | 'dark' | 'nature';
  scaling: 'atk' | 'matk';
}

function createSecondJobSkillExpansionDefs(): Record<string, RawSkillDef> {
  return {};
}

function normalizeSkillDefs(defs: Record<string, RawSkillDef>): Record<string, SkillDef> {
  return Object.fromEntries(
    Object.entries(defs).map(([id, def]) => {
      let normalized: SkillDef = {
        ...def,
        tags: normalizeSkillTags(def),
        attackSource: def.attackSource ?? inferSkillAttackSource(def),
        scaling: def.scaling ?? inferSkillScaling(def),
        usageContext: def.usageContext ?? inferSkillUsageContext(def),
        questUnlock: def.questUnlock ?? getClassQuestSkillUnlock(id),
        shortDescription: def.shortDescription ?? createShortSkillDescription(def),
        fullDescription: def.fullDescription ?? '',
        implementationStatus: def.implementationStatus ?? inferImplementationStatus(def),
        iconPath: def.iconPath ?? STARTER_SKILL_ICON_PATHS[id],
      };
      normalized = {
        ...normalized,
        description: createQualitySkillDescription(normalized),
      };
      normalized.fullDescription = createMechanicSkillDescription({
        ...normalized,
        description: def.fullDescription ?? normalized.description,
      });
      return [id, normalized];
    }),
  );
}

function inferImplementationStatus(def: RawSkillDef): SkillImplementationStatus {
  if (def.classId === 'monster') return 'implemented';
  const classDef = CLASS_DEFS[def.classId];
  return classDef?.tier && classDef.tier >= 2 ? 'draft' : 'implemented';
}

function createMechanicSkillDescription(def: SkillDef): string {
  if (def.type === 'passive') {
    return [
      '類型: 被動技能。',
      `解鎖: Lv.${def.learnLevel}。`,
      `目標: ${targetTypeLabel(def)}。`,
      `範圍: ${scopeLabel(def)}。`,
      `效果: ${effectSummary(def)}。`,
      `跨房: ${crossRoomLabel(def)}。`,
      `戰術用途: ${createShortSkillDescription(def)}`
    ].join(' ');
  }

  return [
    `消耗: ${def.resourceCost} ${resourceLabelForClass(def.classId)}。`,
    `冷卻: ${def.cooldown} tick。`,
    `目標: ${targetTypeLabel(def)}。`,
    `範圍: ${scopeLabel(def)}。`,
    `效果: ${effectSummary(def)}。`,
    `持續: ${durationLabel(def)}。`,
    `跨房: ${crossRoomLabel(def)}。`,
    `資源返還: ${resourceReturnLabel(def)}。`,
    `限制: ${restrictionLabel(def)}。`,
    `風險: ${riskLabel(def)}。`,
    `戰術用途: ${createShortSkillDescription(def)}`
  ].join(' ');
}

function createQualitySkillDescription(def: SkillDef): string {
  const minimum = skillDescriptionMinimum(def);
  if (countCjkChars(def.description) >= minimum) return def.description;

  const timing = def.usageContext === 'both'
    ? '戰鬥中與非戰鬥狀態都能評估使用'
    : def.usageContext === 'field'
      ? '非戰鬥探索或進房前準備時使用'
      : '戰鬥中依目標與冷卻節奏使用';
  const resource = def.type === 'passive'
    ? '不消耗主動資源'
    : `${resourceLabelForClass(def.classId)} -${def.resourceCost}`;
  return `${def.description} ${def.name}定位為${skillRoleLabel(def)}，${timing}；資源規則為${resource}，主要效果是${effectSummary(def)}，限制是${restrictionLabel(def)}，風險是${riskLabel(def)}`;
}

function skillDescriptionMinimum(def: SkillDef): number {
  if (def.learnLevel === 8 && ['swordsman', 'mage', 'ranger', 'priest'].includes(def.classId)) return 65;
  if (def.tags.includes('defense') || def.tags.includes('mobility') || def.tags.includes('control') || def.tags.includes('heal')) return 75;
  return 45;
}

function skillRoleLabel(def: SkillDef): string {
  if (def.type === 'passive') return '常駐被動強化';
  if (def.tags.includes('heal')) return '續航與救急治療';
  if (def.tags.includes('defense')) return '承傷、防護或生存窗口';
  if (def.tags.includes('control') || def.tags.includes('interrupt')) return '控制、打斷或拖延敵方節奏';
  if (def.tags.includes('aoe')) return '清理多目標與壓制房間';
  if (def.tags.includes('burst')) return '短時間爆發輸出';
  if (def.tags.includes('cross_room')) return '跨房先手與拉怪控制';
  return '穩定輸出或基礎戰鬥行動';
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

function resourceLabelForClass(classId: SkillDef['classId']): string {
  const resourceType = CLASS_DEFS[classId]?.resourceType;
  if (resourceType === 'rage') return '怒氣';
  if (resourceType === 'focus') return '專注';
  if (resourceType === 'faith') return '信仰';
  return 'MP';
}

function targetTypeLabel(def: SkillDef): string {
  const labels: Record<SkillTargetType, string> = {
    single_enemy: '單體敵人',
    all_enemies: '所有敵人',
    self: '自己',
    single_ally: '單體隊友',
    all_allies: '所有隊友',
  };
  return labels[def.targetType];
}

function scopeLabel(def: SkillDef): string {
  if (def.special?.areaScope === 'adjacent_cardinal') return '東西南北相鄰房';
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) return '本房或指定相鄰方向';
  if (def.special?.areaScope === 'room') return '本房全房間';
  if (def.special?.areaScope === 'combat') return '目前戰鬥群體';
  if (def.targetType === 'all_enemies') return '目前戰鬥群體';
  if (def.targetType === 'all_allies') return '隊伍';
  return '本房/自身';
}

function effectSummary(def: SkillDef): string {
  const parts: string[] = [];
  if (def.multiplier > 0) {
    const percent = Math.round(def.multiplier * 100);
    parts.push(`${percent}% ${damageTypeLabel(def.damageType)}${def.element !== 'none' ? `/${def.element}` : ''}傷害`);
  }
  if (def.special?.isHeal) parts.push(`${Math.round(def.multiplier * 100)}% 治療`);
  if (def.special?.healPercent) parts.push(`回復最大 HP ${def.special.healPercent}%`);
  if (def.special?.removeDebuffs) parts.push('移除負面狀態');
  if (def.effects?.length) {
    parts.push(...def.effects.map(effect => `${effectTypeLabel(effect.type)} ${effect.value}${effect.duration > 0 ? `，持續 ${effect.duration} tick` : ''}`));
  }
  if (def.special?.interrupt) parts.push('可打斷預兆/施法');
  if (def.special?.dispelShield) parts.push('可驅散護盾');
  if (def.special?.trapExit) parts.push('設置出口陷阱');
  if (def.special?.scoutDirection) parts.push('偵查指定方向房間');
  if (parts.length === 0) return '依技能特殊規則生效';
  return parts.join('；');
}

function durationLabel(def: SkillDef): string {
  const durations = [
    ...(def.effects ?? []).map(effect => effect.duration).filter(duration => duration > 0),
    typeof def.special?.duration === 'number' ? def.special.duration : 0,
  ].filter(duration => duration > 0);
  if (durations.length === 0) return '立即';
  return `${Math.max(...durations)} tick`;
}

function crossRoomLabel(def: SkillDef): string {
  if (def.special?.areaScope === 'adjacent_cardinal') {
    const arrival = typeof def.special.arrivalTicks === 'number' ? `，命中後 arrivalTicks = ${def.special.arrivalTicks}` : '';
    return `可，影響東西南北相鄰房${arrival}`;
  }
  if (def.special?.crossRoomRequiresScout) {
    const arrival = typeof def.special.arrivalTicks === 'number' ? `，命中後 arrivalTicks = ${def.special.arrivalTicks}` : '';
    return `可，但需要先偵查目標房${arrival}`;
  }
  if (def.special?.crossRoom) {
    const arrival = typeof def.special.arrivalTicks === 'number' ? `，命中後 arrivalTicks = ${def.special.arrivalTicks}` : '';
    return `可，指定相鄰方向${arrival}`;
  }
  if (typeof def.special?.arrivalTicksDelta === 'number') {
    return `不直接跨房，但會使 approaching/陷阱目標 arrivalTicks ${signed(def.special.arrivalTicksDelta)}`;
  }
  return '否';
}

function resourceReturnLabel(def: SkillDef): string {
  const parts: string[] = [];
  for (const key of ['resourceGain', 'resourceGainOnHit', 'focusGainOnHit', 'focusGainOnMarkedHit', 'resourceGainPerHit', 'mpGainOnSpellHit', 'resourceGainOnTrigger'] as const) {
    const value = def.special?.[key];
    if (typeof value === 'number' && value > 0) parts.push(`${resourceGainLabel(key)} +${value}`);
  }
  return parts.length > 0 ? parts.join('；') : '無';
}

function restrictionLabel(def: SkillDef): string {
  const parts: string[] = [];
  if (typeof def.special?.faithMin === 'number') parts.push(`信仰至少 ${def.special.faithMin}`);
  if (typeof def.special?.faithMax === 'number') parts.push(`信仰最多 ${def.special.faithMax}`);
  if (def.special?.undeadOnlyBonus) parts.push('undead 目標有額外效果');
  if (def.special?.crossRoomRequiresScout) parts.push('跨房需先偵查');
  if (def.questUnlock) parts.push('需完成對應職業任務階段');
  return parts.length > 0 ? parts.join('；') : '無';
}

function riskLabel(def: SkillDef): string {
  if (def.special?.areaScope === 'adjacent_cardinal') return '會驚動多個相鄰房間，命中怪物可能進入 approaching。';
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) return '跨房命中會讓怪物進入 approaching 並朝本房移動。';
  if (def.special?.trapExit) return '陷阱觸發會暴露出口壓力，怪物仍會延後抵達。';
  return '無額外拉怪風險。';
}

function damageTypeLabel(type: SkillDef['damageType']): string {
  if (type === 'physical') return '物理';
  if (type === 'magical') return '魔法';
  return '純粹';
}

function effectTypeLabel(type: StatusEffectType): string {
  const labels: Partial<Record<StatusEffectType, string>> = {
    poison: '中毒',
    burn: '燃燒',
    slow: '減速',
    stun: '暈眩',
    fear: '恐懼',
    bleed: '流血',
    silence: '沉默',
    freeze: '冰凍',
    shield: '護盾',
    taunt: '嘲諷',
    mark: '標記',
    damage_reduction: '傷害減免',
    mana_shield: '魔力護盾',
    dodge_up: '閃避提升',
    crit_up: '暴擊提升',
    speed_up: '速度提升',
    atk_up: '攻擊提升',
    def_up: '防禦提升',
    matk_up: '魔攻提升',
    mdef_up: '魔防提升',
    atk_down: '攻擊降低',
    def_down: '防禦降低',
    matk_down: '魔攻降低',
    mdef_down: '魔防降低',
    regen: 'HP 回復',
    mana_regen: 'MP 回復',
    thorns: '反傷',
    next_shot_damage: '下次射擊強化',
    heal_reduction: '治療壓制',
    invincible: '無敵',
    unyielding: '不屈',
    counter: '反擊',
    stealth: '潛行',
  };
  return labels[type] ?? type;
}

function resourceGainLabel(key: string): string {
  const labels: Record<string, string> = {
    resourceGain: '使用後回復',
    resourceGainOnHit: '命中回復',
    focusGainOnHit: '命中回復專注',
    focusGainOnMarkedHit: '命中標記目標回復專注',
    resourceGainPerHit: '每命中一名目標回復',
    mpGainOnSpellHit: '法術命中回復 MP',
    resourceGainOnTrigger: '觸發回復',
  };
  return labels[key] ?? key;
}

function signed(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}

function createShortSkillDescription(def: RawSkillDef): string {
  const [firstSentence] = def.description.split(/[。.!！?？]/);
  if (firstSentence && firstSentence.trim().length > 0) return `${firstSentence.trim()}。`;
  return def.description;
}

function normalizeSkillTags(def: RawSkillDef): SkillTag[] {
  return [...new Set([...(def.tags ?? []), ...inferSkillTags(def)])];
}

function inferSkillUsageContext(def: RawSkillDef): SkillUsageContext {
  if (def.type === 'passive') return 'both';
  if (def.id === 'inspect') return 'field';
  if (def.id === 'first_aid') return 'both';
  if (def.special?.isHeal && def.targetType === 'single_ally') return 'both';
  if (def.targetType === 'single_ally' || def.targetType === 'all_allies') return 'combat';
  if (def.targetType === 'single_enemy' || def.targetType === 'all_enemies') return 'combat';
  return 'combat';
}

function getClassQuestSkillUnlock(skillId: string): SkillDef['questUnlock'] | undefined {
  const questIdBySkillId: Record<string, string> = {
    dirty_trick: 'beginner_first_steps',
    divine_verdict: 'swordsman_to_knight',
    savage_interrupt: 'swordsman_to_berserker',
    mind_cut: 'swordsman_to_sword_saint',
    apocalypse_forge: 'mage_to_archmage',
    ultimate_golem: 'mage_to_warlock',
    dimensional_collapse: 'mage_to_chronomancer',
    sky_eagle_strike: 'ranger_to_marksman',
    deaths_kiss: 'ranger_to_assassin',
    beast_fusion: 'ranger_to_beast_master',
    eternal_temple: 'priest_to_high_priest',
    spirit_unity: 'priest_to_druid',
    final_judgment: 'priest_to_inquisitor',
  };
  const questId = questIdBySkillId[skillId];
  return questId ? { questId, requiredStatus: 'completed' } : undefined;
}

function inferSkillScaling(def: RawSkillDef): SkillScaling {
  const attackSource = def.attackSource ?? inferSkillAttackSource(def);
  if (def.special?.isHeal) return { stat: 'spellPower', coefficient: def.multiplier };
  if (attackSource === 'ranged_physical') return { stat: 'rangedAtk', coefficient: def.multiplier };
  if (attackSource === 'melee') return { stat: 'meleeAtk', coefficient: def.multiplier };
  if (attackSource === 'ranged_magical') return { stat: 'spellPower', coefficient: def.multiplier };
  if (def.effects?.some(effect => effect.type === 'shield' || effect.type === 'damage_reduction')) {
    return { stat: 'def', coefficient: Math.max(1, def.multiplier) };
  }
  return { stat: 'none', coefficient: def.multiplier };
}

function inferSkillAttackSource(def: RawSkillDef): SkillAttackSource {
  if (def.type === 'passive' || def.multiplier <= 0) return 'none';
  if (def.special?.isHeal || def.damageType === 'magical') return 'ranged_magical';
  if (def.damageType === 'physical' && (
    def.special?.crossRoom
    || def.special?.crossRoomRequiresScout
    || def.special?.areaScope === 'adjacent_cardinal'
    || def.id.includes('shot')
    || def.id.includes('arrow')
    || def.id.includes('barrage')
  )) return 'ranged_physical';
  if (def.damageType === 'physical') return 'melee';
  return 'none';
}

function inferSkillTags(def: RawSkillDef): SkillTag[] {
  const tags = new Set<SkillTag>();
  tags.add(def.type === 'passive' ? 'passive' : def.damageType);
  if (def.element !== 'none') tags.add(def.element);
  if (def.multiplier > 0 || def.damageType !== 'pure') tags.add('damage');
  if (def.targetType === 'all_enemies' || def.targetType === 'all_allies') tags.add('aoe');
  if (def.targetType === 'single_enemy' || def.targetType === 'single_ally') tags.add('single_target');
  if (def.special?.isHeal) tags.add('heal');
  if (def.targetType === 'self' || def.targetType === 'single_ally' || def.targetType === 'all_allies') tags.add('support');
  if (def.effects?.some(effect => effect.type.endsWith('_up'))) tags.add('buff');
  if (def.effects?.some(effect => effect.type.endsWith('_down') || effect.type === 'mark' || effect.type === 'poison' || effect.type === 'burn' || effect.type === 'bleed')) tags.add('debuff');
  if (def.effects?.some(effect => effect.type === 'stun' || effect.type === 'slow' || effect.type === 'freeze' || effect.type === 'fear' || effect.type === 'taunt' || effect.type === 'silence')) tags.add('control');
  if (def.effects?.some(effect =>
    effect.type === 'shield'
    || effect.type === 'mana_shield'
    || effect.type === 'damage_reduction'
    || effect.type === 'counter'
    || effect.type === 'invincible'
    || effect.type === 'unyielding'
    || effect.type === 'def_up'
    || effect.type === 'mdef_up'
    || effect.type === 'dodge_up'
  )) tags.add('defense');
  if (def.special?.interrupt) tags.add('interrupt');
  if (def.special?.dispelShield || def.special?.removeDebuffs) tags.add('dispel');
  if (def.special?.summon || def.id.includes('summon')) tags.add('summon');
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout || def.special?.areaScope === 'adjacent_cardinal') tags.add('cross_room');
  if (def.cooldown >= 5 || def.multiplier >= 2) tags.add('burst');
  if (def.resourceCost > 0) tags.add('resource');
  if (def.id.includes('step') || def.id.includes('dash') || def.id.includes('charge')) tags.add('mobility');
  return [...tags];
}

function createOriginPassiveSkillDefs(): Record<string, RawSkillDef> {
  const racePassives = Object.fromEntries(
    Object.values(RACE_DEFS).map((race) => [race.passiveSkillId, {
      id: race.passiveSkillId,
      name: race.passiveName,
      englishName: race.passiveSkillId,
      classId: 'adventurer' as const,
      learnLevel: 1,
      type: 'passive' as const,
      targetType: 'self' as const,
      resourceCost: 0,
      cooldown: 0,
      damageType: 'pure' as const,
      element: race.tags?.includes('dark') ? 'dark' as const : race.tags?.includes('nature') ? 'nature' as const : 'none' as const,
      multiplier: 0,
      tags: ['passive' as const],
      scaling: { stat: 'none' as const, coefficient: 0 },
      description: race.passiveDescription,
    }]),
  );

  const faithPassives = Object.fromEntries(
    Object.values(FAITH_DEFS).map((faith) => [faith.passiveSkillId, {
      id: faith.passiveSkillId,
      name: faith.passiveName,
      englishName: faith.passiveSkillId,
      classId: 'adventurer' as const,
      learnLevel: 1,
      type: 'passive' as const,
      targetType: 'self' as const,
      resourceCost: 0,
      cooldown: 0,
      damageType: 'pure' as const,
      element: faith.tags?.includes('light') ? 'light' as const : faith.tags?.includes('dark') ? 'dark' as const : faith.tags?.includes('nature') ? 'nature' as const : 'none' as const,
      multiplier: 0,
      tags: ['passive' as const],
      scaling: { stat: 'none' as const, coefficient: 0 },
      description: faith.passiveDescription,
    }]),
  );

  return {
    ...racePassives,
    ...faithPassives,
  };
}

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
export function getLearnableSkills(classId: ClassId, level: number, completedQuestIds: string[] = []): SkillDef[] {
  const completed = new Set(completedQuestIds);
  const classDef = CLASS_DEFS[classId];
  return getAllAvailableSkills(classId).filter((s) =>
    s.implementationStatus === 'implemented'
    && (classId === 'adventurer' || classDef?.tier === 0 || s.classId !== 'adventurer')
    && s.learnLevel <= level
    && (!s.questUnlock || s.questUnlock.requiredStatus !== 'completed' || completed.has(s.questUnlock.questId)),
  );
}

/** 根據 ID 取得技能定義 */
export function getSkillDef(skillId: string): SkillDef | undefined {
  return SKILL_DEFS[skillId];
}
