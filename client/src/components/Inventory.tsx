import { useGameStore } from '../stores/gameStore';
import { ITEM_DEFS } from '@game/shared';
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

  const equipSlots = equipment
    ? (Object.entries(equipment) as [string, string | null][])
    : [];

  return (
    <div className="inventory-overlay" onClick={toggleInventory}>
      <div className="inventory-modal panel-enter" onClick={(event) => event.stopPropagation()}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border-dim">
        <span className="text-xs font-bold text-text-terminal">背包</span>
        <button
          onClick={toggleInventory}
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
        <div className="text-[10px] text-text-dim mb-1 uppercase tracking-wider">物品列表</div>
        {inventory.length === 0 ? (
          <div className="text-xs text-text-dim italic text-center py-4">
            背包是空的
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-0.5">
            {inventory
              .filter((item) => !item.equipped)
              .map((item, i) => {
                const def = ITEM_DEFS[item.itemId];
                const itemName = def?.name ?? item.itemId;
                const imagePath = getItemImagePath(item.itemId);
                return (
                  <div
                    key={`${item.itemId}-${i}`}
                    className="flex items-center justify-between text-xs hover:bg-bg-tertiary px-1 py-0.5 rounded cursor-default group"
                    title={`${itemName} x${item.quantity}`}
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
                    <span className="min-w-0 flex items-center gap-2">
                      {imagePath && <img src={imagePath} alt="" className="asset-thumb" loading="lazy" />}
                      <span className="text-text-bright group-hover:text-text-terminal truncate">
                        {itemName}
                      </span>
                    </span>
                    {item.quantity > 1 && (
                      <span className="text-text-dim shrink-0 ml-1">x{item.quantity}</span>
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
