import { useGameStore } from '../stores/gameStore';
import type { AffixDef, ItemRarity, ItemStats } from '@game/shared';
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

const QUALITY_LABELS: Record<string, string> = {
  normal: '普通品質',
  fine: '優良品質',
  rare: '稀有品質',
  epic: '史詩品質',
  legendary: '傳說品質',
  mythic: '神話品質',
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
  critDamage: '暴擊傷害',
  hitRate: '命中率',
  dodgeRate: '迴避率',
};

function combineStats(
  base: Partial<ItemStats> | undefined,
  affixes: AffixDef[] | undefined,
): Record<string, number> {
  const total: Record<string, number> = { ...(base as Record<string, number> | undefined ?? {}) };
  for (const affix of affixes ?? []) {
    for (const [key, value] of Object.entries(affix.stats ?? {})) {
      total[key] = (total[key] ?? 0) + value;
    }
  }
  return total;
}

function describeAffix(affix: AffixDef): string {
  const parts: string[] = [];
  for (const [key, value] of Object.entries(affix.stats ?? {})) {
    const label = STAT_DISPLAY_NAMES[key] ?? key;
    parts.push(`${label} ${value > 0 ? '+' : ''}${value}`);
  }
  for (const [key, value] of Object.entries(affix.skillModifiers ?? {})) {
    parts.push(`${key} ${value > 0 ? '+' : ''}${value}`);
  }
  for (const [key, value] of Object.entries(affix.resourceModifiers ?? {})) {
    parts.push(`${key} ${value > 0 ? '+' : ''}${value}`);
  }
  if (affix.skillTags?.length) parts.push(`技能:${affix.skillTags.join('/')}`);
  if (affix.skillIds?.length) parts.push(`指定:${affix.skillIds.join('/')}`);
  if (affix.trigger) parts.push(`觸發:${affix.trigger}`);
  if (affix.condition) parts.push(`條件:${affix.condition}`);
  if (parts.length === 0 && affix.behavior) parts.push(affix.behavior);
  return parts.join('、');
}

export default function ItemTooltip() {
  const tooltipItem = useGameStore((s) => s.tooltipItem);
  const tooltipPosition = useGameStore((s) => s.tooltipPosition);
  const equipment = useGameStore((s) => s.equipment);
  const inventory = useGameStore((s) => s.inventory);

  if (!tooltipItem) return null;

  const rarityColor = RARITY_COLORS[tooltipItem.rarity] ?? RARITY_COLORS.common;
  const rarityLabel = RARITY_LABELS[tooltipItem.rarity] ?? '普通';
  const totalStats = combineStats(tooltipItem.stats, tooltipItem.affixes);

  // Equipment comparison: find currently equipped item in the same slot
  const isEquippable = !!tooltipItem.equipSlot;
  const isEquipped = tooltipItem.equipSlot && equipment
    ? inventory.some((item) => item.equipped && item.itemId === tooltipItem.id && ITEM_DEFS[item.itemId]?.equipSlot === tooltipItem.equipSlot)
    : false;

  // Find the equipped item's stats for comparison (compute real diff)
  let comparisonDiffs: Record<string, number> | null = null;
  if (isEquippable && !isEquipped && tooltipItem.equipSlot && equipment) {
    const equippedItemId = equipment[tooltipItem.equipSlot as keyof typeof equipment];
    if (equippedItemId && Object.keys(totalStats).length > 0) {
      const equippedItem = inventory.find((item) => item.equipped && item.itemId === equippedItemId);
      const equippedDef = ITEM_DEFS[equippedItemId];
      const equippedStats = combineStats(equippedDef?.stats, equippedItem?.affixes);
      const allKeys = new Set([...Object.keys(totalStats), ...Object.keys(equippedStats)]);
      comparisonDiffs = {};
      for (const key of allKeys) {
        const newVal = totalStats[key] ?? 0;
        const oldVal = equippedStats[key] ?? 0;
        const diff = newVal - oldVal;
        if (diff !== 0) comparisonDiffs[key] = diff;
      }
      if (Object.keys(comparisonDiffs).length === 0) comparisonDiffs = null;
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
        {tooltipItem.itemLevel && (
          <span className="text-text-dim">物品等級 Lv.{tooltipItem.itemLevel}</span>
        )}
        {tooltipItem.type && (
          <span className="text-text-dim">{tooltipItem.type}</span>
        )}
        {tooltipItem.quality && (
          <span style={{ color: rarityColor }}>{QUALITY_LABELS[tooltipItem.quality] ?? tooltipItem.quality}</span>
        )}
      </div>

      {/* Stats */}
      {Object.keys(totalStats).length > 0 && (
        <div className="item-tooltip-stats">
          {Object.entries(totalStats).map(([key, value]) => {
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

      {/* Instance affixes */}
      {tooltipItem.affixes && tooltipItem.affixes.length > 0 && (
        <div className="item-tooltip-stats">
          <div className="text-[10px] text-text-dim mb-0.5">詞綴</div>
          {(['prefix', 'suffix', 'behavior', 'fixed'] as const).map((kind) => {
            const affixes = tooltipItem.affixes?.filter(affix => (affix.kind ?? 'prefix') === kind) ?? [];
            if (affixes.length === 0) return null;
            return (
              <div key={kind} className="mb-1">
                <div className="text-[10px] text-text-amber">{kind}</div>
                {affixes.map((affix) => (
                  <div key={affix.id} className="item-tooltip-stat-line items-start gap-2">
                    <span className="text-text-bright">{affix.name}</span>
                    <span className="text-text-dim text-right">{affix.tier} {describeAffix(affix)}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {tooltipItem.fixedEffects && tooltipItem.fixedEffects.length > 0 && (
        <div className="item-tooltip-set">
          {tooltipItem.fixedEffects.join('、')}
        </div>
      )}

      <div className="item-tooltip-meta">
        <span className="text-text-dim">來源: {tooltipItem.sourceTags?.length ? tooltipItem.sourceTags.join(', ') : '未知'}</span>
        {tooltipItem.droppedBy && <span className="text-text-dim">掉落: {tooltipItem.droppedBy}</span>}
        {tooltipItem.droppedInZone && <span className="text-text-dim">區域: {tooltipItem.droppedInZone}</span>}
        <span className={tooltipItem.bound ? 'text-text-amber' : 'text-text-dim'}>
          {tooltipItem.bound ? '已綁定' : '未綁定'}
        </span>
      </div>

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
