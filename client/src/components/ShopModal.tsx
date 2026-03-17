import { useState } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { ShopItem, ShopCategory } from '@game/shared';
import PurchaseConfirmModal from './PurchaseConfirmModal';
import TransactionHistory from './TransactionHistory';

const CATEGORIES: { key: ShopCategory; label: string }[] = [
  { key: 'weapon', label: '武器' },
  { key: 'armor', label: '防具' },
  { key: 'consumable', label: '消耗品' },
];

const RARITY_COLORS: Record<string, string> = {
  common: '#888888',
  uncommon: '#44cc44',
  rare: '#4488ff',
  epic: '#aa44ff',
  legendary: '#ff8800',
};

const RARITY_LABELS: Record<string, string> = {
  common: '普通',
  uncommon: '優良',
  rare: '稀有',
  epic: '史詩',
  legendary: '傳說',
};

interface ShopModalProps {
  onPurchase: (itemId: string) => void;
  onGetTransactions: () => void;
}

export default function ShopModal({ onPurchase, onGetTransactions }: ShopModalProps) {
  const shopOpen = useGameStore((s) => s.shopOpen);
  const setShopOpen = useGameStore((s) => s.setShopOpen);
  const shopItems = useGameStore((s) => s.shopItems);
  const selectedItem = useGameStore((s) => s.selectedItem);
  const setSelectedItem = useGameStore((s) => s.setSelectedItem);
  const shopCategory = useGameStore((s) => s.shopCategory);
  const setShopCategory = useGameStore((s) => s.setShopCategory);
  const balance = useGameStore((s) => s.arinovaTokenBalance) ?? 0;

  const [confirmItem, setConfirmItem] = useState<ShopItem | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  if (!shopOpen) return null;

  const filteredItems = shopItems.filter((item) => item.category === shopCategory);

  const handleClose = () => {
    setShopOpen(false);
    setSelectedItem(null);
    setShowHistory(false);
  };

  const handleBuy = (item: ShopItem) => {
    setConfirmItem(item);
  };

  const handleConfirmPurchase = () => {
    if (confirmItem) {
      onPurchase(confirmItem.id);
      setConfirmItem(null);
    }
  };

  const handleShowHistory = () => {
    onGetTransactions();
    setShowHistory(!showHistory);
  };

  return (
    <>
      {/* Overlay */}
      <div className="shop-overlay" onClick={handleClose} />

      {/* Modal */}
      <div className="shop-modal">
        {/* Header */}
        <div className="shop-header">
          <div className="flex items-center gap-3">
            <h2 className="text-text-terminal text-lg font-bold text-glow-subtle">
              商店
            </h2>
            <span className="text-xs text-text-dim">
              🪙 <span style={{ color: '#f5c542' }} className="font-bold">{balance.toLocaleString()} AT</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShowHistory}
              className="text-xs text-text-dim hover:text-text-bright transition-colors px-2 py-1 border border-border-dim rounded cursor-pointer"
            >
              {showHistory ? '返回商店' : '交易紀錄'}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="text-text-dim hover:text-text-bright text-lg cursor-pointer leading-none"
            >
              ✕
            </button>
          </div>
        </div>

        {showHistory ? (
          <TransactionHistory />
        ) : (
          <div className="shop-body">
            {/* Tabs */}
            <div className="shop-tabs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setShopCategory(cat.key);
                    setSelectedItem(null);
                  }}
                  className={`shop-tab cursor-pointer ${shopCategory === cat.key ? 'shop-tab-active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Master-Detail layout */}
            <div className="shop-content">
              {/* Left: Item list */}
              <div className="shop-item-list">
                {filteredItems.length === 0 && (
                  <div className="text-text-dim text-xs p-4 text-center">此分類暫無商品</div>
                )}
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className={`shop-item-row cursor-pointer ${selectedItem?.id === item.id ? 'shop-item-selected' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-bold"
                        style={{ color: RARITY_COLORS[item.rarity] }}
                      >
                        {item.name}
                      </span>
                      <span className="text-xs tabular-nums" style={{ color: '#f5c542' }}>
                        {item.price} AT
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <span
                        className="text-[10px]"
                        style={{ color: RARITY_COLORS[item.rarity], opacity: 0.7 }}
                      >
                        {RARITY_LABELS[item.rarity]}
                      </span>
                      <span className="text-[10px] text-text-dim">
                        Lv.{item.levelReq}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right: Detail panel */}
              <div className="shop-detail">
                {selectedItem ? (
                  <>
                    <h3
                      className="text-sm font-bold mb-1"
                      style={{ color: RARITY_COLORS[selectedItem.rarity] }}
                    >
                      {selectedItem.name}
                    </h3>
                    <div
                      className="text-[10px] mb-2 px-1.5 py-0.5 rounded inline-block"
                      style={{
                        color: RARITY_COLORS[selectedItem.rarity],
                        backgroundColor: `${RARITY_COLORS[selectedItem.rarity]}15`,
                      }}
                    >
                      {RARITY_LABELS[selectedItem.rarity]}
                    </div>
                    <p className="text-xs text-text-bright mb-3">
                      {selectedItem.description}
                    </p>
                    <div className="text-xs text-text-dim mb-1">
                      等級需求: Lv.{selectedItem.levelReq}
                    </div>
                    {selectedItem.stats && Object.keys(selectedItem.stats).length > 0 && (
                      <div className="mb-3">
                        <div className="text-[10px] text-text-dim uppercase mb-1">屬性加成</div>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                          {Object.entries(selectedItem.stats).map(([stat, value]) => (
                            <div key={stat} className="text-xs">
                              <span className="text-text-dim">{stat.toUpperCase()}</span>{' '}
                              <span className="text-combat-heal">+{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-auto pt-3 border-t border-border-dim">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-text-dim">價格</span>
                        <span className="text-sm font-bold" style={{ color: '#f5c542' }}>
                          {selectedItem.price} AT
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleBuy(selectedItem)}
                        disabled={balance < selectedItem.price}
                        className={`shop-buy-btn cursor-pointer ${
                          balance < selectedItem.price ? 'shop-buy-btn-disabled' : ''
                        }`}
                      >
                        {balance < selectedItem.price ? '餘額不足' : '購買'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-text-dim text-xs">
                    選擇一個物品查看詳情
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Purchase confirm dialog */}
      {confirmItem && (
        <PurchaseConfirmModal
          item={confirmItem}
          balance={balance}
          onConfirm={handleConfirmPurchase}
          onCancel={() => setConfirmItem(null)}
        />
      )}
    </>
  );
}
