import { useGameStore } from '../stores/gameStore';

const EQUIP_SLOT_LABELS: Record<string, string> = {
  weapon: '武器',
  head: '頭部',
  body: '身體',
  hands: '手部',
  feet: '足部',
  accessory: '飾品',
};

export default function Inventory() {
  const showInventory = useGameStore((s) => s.showInventory);
  const toggleInventory = useGameStore((s) => s.toggleInventory);
  const inventory = useGameStore((s) => s.inventory);
  const equipment = useGameStore((s) => s.equipment);
  const inventoryCapacity = useGameStore((s) => s.inventoryCapacity);
  const gold = useGameStore((s) => s.gold);

  if (!showInventory) return null;

  const equipSlots = equipment
    ? (Object.entries(equipment) as [string, string | null][])
    : [];

  return (
    <div className="bg-bg-secondary border-l border-border-dim w-56 flex flex-col panel-enter">
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
                {itemId ?? '-- 空 --'}
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
              .map((item, i) => (
                <div
                  key={`${item.itemId}-${i}`}
                  className="flex items-center justify-between text-xs hover:bg-bg-tertiary px-1 py-0.5 rounded cursor-default group"
                  title={`${item.itemId} x${item.quantity}`}
                >
                  <span className="text-text-bright group-hover:text-text-terminal truncate">
                    {item.itemId}
                  </span>
                  {item.quantity > 1 && (
                    <span className="text-text-dim shrink-0 ml-1">x{item.quantity}</span>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
