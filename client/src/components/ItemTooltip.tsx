import { useGameStore } from '../stores/gameStore';
import type { ItemRarity } from '@game/shared';
import { ITEM_DEFS } from '@game/shared';

const RARITY_COLORS: Record<ItemRarity, string> = {
  common: '#888888',
  uncommon: '#44cc44',
  rare: '#4488ff',
  epic: '#aa44ff',
  legendary: '#ff8800',
  mythic: '#ff4444',
};

const RARITY_LABELS: Record<ItemRarity, string> = {
  common: '普通',
  uncommon: '優秀',
  rare: '稀有',
  epic: '史詩',
  legendary: '傳說',
  mythic: '神話',
};

const STAT_DISPLAY_NAMES: Record<string, string> = {
  atk: '攻擊力',
  matk: '魔攻力',
  def: '防禦力',
  mdef: '魔防力',
  hp: '生命值',
  mp: '魔力值',
  str: '力量',
  int: '智力',
  dex: '敏捷',
  vit: '體力',
  luk: '幸運',
  critRate: '暴擊率',
  dodgeRate: '迴避率',
};

export default function ItemTooltip() {
  const tooltipItem = useGameStore((s) => s.tooltipItem);
  const tooltipPosition = useGameStore((s) => s.tooltipPosition);
  const equipment = useGameStore((s) => s.equipment);
  const inventory = useGameStore((s) => s.inventory);

  if (!tooltipItem) return null;

  const rarityColor = RARITY_COLORS[tooltipItem.rarity] ?? RARITY_COLORS.common;
  const rarityLabel = RARITY_LABELS[tooltipItem.rarity] ?? '普通';

  // Equipment comparison: find currently equipped item in the same slot
  const isEquippable = !!tooltipItem.equipSlot;
  const isEquipped = tooltipItem.equipSlot && equipment
    ? equipment[tooltipItem.equipSlot as keyof typeof equipment] === tooltipItem.id
    : false;

  // Find the equipped item's stats for comparison (compute real diff)
  let comparisonDiffs: Record<string, number> | null = null;
  if (isEquippable && !isEquipped && tooltipItem.equipSlot && equipment) {
    const equippedItemId = equipment[tooltipItem.equipSlot as keyof typeof equipment];
    if (equippedItemId && tooltipItem.stats) {
      // 從 ITEM_DEFS 取得已裝備道具的數值
      const equippedDef = ITEM_DEFS[equippedItemId];
      const equippedStats = equippedDef?.stats as Record<string, number> | undefined;
      if (equippedStats) {
        const allKeys = new Set([...Object.keys(tooltipItem.stats), ...Object.keys(equippedStats)]);
        comparisonDiffs = {};
        for (const key of allKeys) {
          const newVal = (tooltipItem.stats as Record<string, number>)[key] ?? 0;
          const oldVal = equippedStats[key] ?? 0;
          const diff = newVal - oldVal;
          if (diff !== 0) comparisonDiffs[key] = diff;
        }
        if (Object.keys(comparisonDiffs).length === 0) comparisonDiffs = null;
      }
    }
  }

  // Position tooltip near cursor, clamping to viewport
  const style: React.CSSProperties = {
    left: Math.min(tooltipPosition.x + 12, window.innerWidth - 260),
    top: Math.min(tooltipPosition.y + 12, window.innerHeight - 300),
  };

  return (
    <div className="item-tooltip" style={style}>
      {/* Name with rarity color */}
      <div className="item-tooltip-name" style={{ color: rarityColor, borderBottomColor: `${rarityColor}40` }}>
        {tooltipItem.name}
      </div>

      {/* Rarity & Level */}
      <div className="item-tooltip-meta">
        <span style={{ color: rarityColor }}>{rarityLabel}</span>
        {tooltipItem.levelReq > 0 && (
          <span className="text-text-dim">需要等級 {tooltipItem.levelReq}</span>
        )}
        {tooltipItem.type && (
          <span className="text-text-dim">{tooltipItem.type}</span>
        )}
      </div>

      {/* Stats */}
      {tooltipItem.stats && Object.keys(tooltipItem.stats).length > 0 && (
        <div className="item-tooltip-stats">
          {Object.entries(tooltipItem.stats).map(([key, value]) => {
            if (value === 0 || value === undefined) return null;
            const displayName = STAT_DISPLAY_NAMES[key] ?? key;
            const isPositive = value > 0;
            return (
              <div key={key} className="item-tooltip-stat-line">
                <span className="text-text-dim">{displayName}</span>
                <span className={isPositive ? 'text-combat-heal' : 'text-combat-damage'}>
                  {isPositive ? '+' : ''}{value}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Comparison overlay - real diff vs equipped */}
      {comparisonDiffs && (
        <div className="item-tooltip-compare">
          <div className="text-[10px] text-text-dim mb-0.5">vs 已裝備</div>
          {Object.entries(comparisonDiffs).map(([key, diff]) => {
            const displayName = STAT_DISPLAY_NAMES[key] ?? key;
            return (
              <div key={key} className="item-tooltip-stat-line">
                <span className="text-text-dim">{displayName}</span>
                <span className={diff > 0 ? 'text-combat-heal' : 'text-combat-damage'}>
                  {diff > 0 ? '+' : ''}{diff}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Description */}
      {tooltipItem.description && (
        <div className="item-tooltip-desc">{tooltipItem.description}</div>
      )}

      {/* Set info */}
      {tooltipItem.setName && (
        <div className="item-tooltip-set">
          套裝: {tooltipItem.setName}
        </div>
      )}
    </div>
  );
}
