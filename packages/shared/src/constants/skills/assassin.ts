import type { RawSkillDef } from './types.js';

export const ASSASSIN_SKILL_DEFS: Record<string, RawSkillDef> = {
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
};
