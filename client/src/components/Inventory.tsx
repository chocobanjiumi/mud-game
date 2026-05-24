import { useMemo, useState } from 'react';
import { useGameStore } from '../stores/gameStore';
import { ITEM_DEFS, type EquipmentSlots, type InventoryItem, type ItemType } from '@game/shared';
import { getItemImagePath } from '../utils/assetImages';

const EQUIP_SLOT_LABELS: Record<string, string> = {
  weapon: '武器',
  head: '頭部',
  body: '身體',
  hands: '手部',
  feet: '足部',
  ring: '戒指',
  earring: '耳環',
  belt: '腰帶',
  necklace: '項鍊',
  accessory: '舊飾品',
};

type InventoryFilter = 'all' | ItemType;

const INVENTORY_FILTERS: { id: InventoryFilter; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'weapon', label: '武器' },
  { id: 'armor', label: '防具' },
  { id: 'accessory', label: '飾品' },
  { id: 'consumable', label: '消耗品' },
  { id: 'material', label: '材料' },
  { id: 'quest', label: '任務' },
];

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

export default function Inventory() {
  const showInventory = useGameStore((s) => s.showInventory);
  const toggleInventory = useGameStore((s) => s.toggleInventory);
  const inventory = useGameStore((s) => s.inventory);
  const equipment = useGameStore((s) => s.equipment);
  const inventoryCapacity = useGameStore((s) => s.inventoryCapacity);
  const gold = useGameStore((s) => s.gold);
  const setTooltipItem = useGameStore((s) => s.setTooltipItem);
  const setTooltipPosition = useGameStore((s) => s.setTooltipPosition);

  if (!showInventory) return null;

  return (
    <InventoryView
      inventory={inventory}
      equipment={equipment}
      inventoryCapacity={inventoryCapacity}
      gold={gold}
      onClose={toggleInventory}
      setTooltipItem={setTooltipItem}
      setTooltipPosition={setTooltipPosition}
    />
  );
}

export function InventoryView({
  inventory,
  equipment,
  inventoryCapacity,
  gold,
  onClose,
  setTooltipItem,
  setTooltipPosition,
}: {
  inventory: InventoryItem[];
  equipment: EquipmentSlots | null;
  inventoryCapacity: number;
  gold: number;
  onClose: () => void;
  setTooltipItem: ReturnType<typeof useGameStore.getState>['setTooltipItem'];
  setTooltipPosition: ReturnType<typeof useGameStore.getState>['setTooltipPosition'];
}) {
  const [activeFilter, setActiveFilter] = useState<InventoryFilter>('all');
  const [openItemKey, setOpenItemKey] = useState<string | null>(null);
  const equipSlots = equipment
    ? (Object.entries(equipment) as [string, string | null][])
    : [];
  const carriedItems = useMemo(() => inventory.filter((item) => !item.equipped), [inventory]);
  const filterCounts = useMemo(() => {
    const counts = new Map<InventoryFilter, number>();
    counts.set('all', carriedItems.length);
    for (const item of carriedItems) {
      const type = ITEM_DEFS[item.itemId]?.type;
      if (!type) continue;
      counts.set(type, (counts.get(type) ?? 0) + 1);
    }
    return counts;
  }, [carriedItems]);
  const visibleItems = useMemo(() => {
    if (activeFilter === 'all') return carriedItems;
    return carriedItems.filter((item) => ITEM_DEFS[item.itemId]?.type === activeFilter);
  }, [activeFilter, carriedItems]);

  return (
    <div className="inventory-overlay" onClick={onClose}>
      <div className="inventory-modal panel-enter" onClick={(event) => event.stopPropagation()}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border-dim">
        <span className="text-xs font-bold text-text-terminal">背包</span>
        <button
          onClick={onClose}
          className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
        >
          [關閉]
        </button>
      </div>

      {/* Gold */}
      <div className="px-3 py-1 border-b border-border-dim text-xs flex items-center gap-1">
        <span className="text-text-amber">$</span>
        <span className="text-text-amber font-bold">{gold.toLocaleString()}</span>
        <span className="text-text-dim ml-auto">
          {inventory.length}/{inventoryCapacity}
        </span>
      </div>

      {/* Equipment section */}
      <div className="px-3 py-2 border-b border-border-dim">
        <div className="text-[10px] text-text-dim mb-1 uppercase tracking-wider">裝備欄</div>
        <div className="space-y-0.5">
          {equipSlots.map(([slot, itemId]) => (
            <div key={slot} className="flex items-center gap-1 text-xs">
              <span className="text-text-dim w-10 shrink-0">
                {EQUIP_SLOT_LABELS[slot] ?? slot}
              </span>
              <span className={itemId ? 'text-text-bright' : 'text-text-dim'}>
                {itemId ? (ITEM_DEFS[itemId]?.name ?? itemId) : '-- 空 --'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory items */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="text-[10px] text-text-dim uppercase tracking-wider">物品列表</div>
          <div className="text-[10px] text-text-dim">{visibleItems.length}/{carriedItems.length}</div>
        </div>
        <div className="inventory-tabs" role="tablist" aria-label="背包分類">
          {INVENTORY_FILTERS.map((filter) => {
            const active = activeFilter === filter.id;
            const count = filterCounts.get(filter.id) ?? 0;
            return (
              <button
                key={filter.id}
                type="button"
                className={`inventory-tab ${active ? 'inventory-tab-active' : ''}`}
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setOpenItemKey(null);
                }}
              >
                <span>{filter.label}</span>
                <b>{count}</b>
              </button>
            );
          })}
        </div>
        {carriedItems.length === 0 ? (
          <div className="text-xs text-text-dim italic text-center py-4">
            背包是空的
          </div>
        ) : visibleItems.length === 0 ? (
          <div className="text-xs text-text-dim italic text-center py-4">
            這個分類沒有物品
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-0.5">
            {visibleItems
              .map((item, i) => {
                const def = ITEM_DEFS[item.itemId];
                const itemName = def?.name ?? item.itemId;
                const imagePath = getItemImagePath(item.itemId);
                const itemKey = `${item.itemId}-${item.itemInstanceId ?? i}`;
                const itemType = def?.type;
                const canEquip = itemType === 'weapon' || itemType === 'armor' || itemType === 'accessory';
                const canUse = itemType === 'consumable';
                const actions = [
                  ...(canEquip ? [{ label: '裝備', command: `equip ${item.itemId}`, tone: 'primary' as const }] : []),
                  ...(canUse ? [{ label: '使用', command: `use ${item.itemId}`, tone: 'primary' as const }] : []),
                  { label: '丟棄', command: `drop ${item.itemId}`, tone: 'danger' as const },
                ];
                return (
                  <div
                    key={itemKey}
                    className={`inventory-item-row ${openItemKey === itemKey ? 'inventory-item-row-open' : ''}`}
                    title={`${itemName} x${item.quantity}`}
                    onClick={() => setOpenItemKey(openItemKey === itemKey ? null : itemKey)}
                    onMouseEnter={(event) => {
                      if (!def) return;
                      setTooltipPosition({ x: event.clientX, y: event.clientY });
                      setTooltipItem({
                        id: def.id,
                        name: def.name,
                        description: def.description,
                        rarity: def.rarity ?? 'common',
                        quality: item.quality,
                        affixes: item.affixes,
                        fixedEffects: item.fixedEffects,
                        levelReq: def.levelReq,
                        stats: def.stats,
                        equipSlot: def.equipSlot,
                        type: def.type,
                        sourceTags: def.sourceTags,
                        bound: false,
                      });
                    }}
                    onMouseMove={(event) => setTooltipPosition({ x: event.clientX, y: event.clientY })}
                    onMouseLeave={() => setTooltipItem(null)}
                  >
                    <div className="inventory-item-main">
                      <span className="min-w-0 flex items-center gap-2">
                        {imagePath && <img src={imagePath} alt="" className="asset-thumb" loading="lazy" />}
                        <span className="text-text-bright group-hover:text-text-terminal truncate">
                          {itemName}
                        </span>
                      </span>
                      <span className="inventory-item-meta">
                        {item.quantity > 1 ? `x${item.quantity}` : ITEM_DEFS[item.itemId]?.type ?? ''}
                      </span>
                    </div>
                    {openItemKey === itemKey && (
                      <div className="inventory-item-actions" onClick={(event) => event.stopPropagation()}>
                        {actions.map((action) => (
                          <button
                            key={`${itemKey}-${action.label}`}
                            type="button"
                            className={`inventory-item-action inventory-item-action-${action.tone}`}
                            onClick={() => {
                              sendCommand(action.command, `${action.label} ${itemName}`);
                              setOpenItemKey(null);
                            }}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
