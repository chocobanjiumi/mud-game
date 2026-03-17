import type { ShopItem } from '@game/shared';
import { useGameStore } from '../stores/gameStore';

interface PurchaseConfirmModalProps {
  item: ShopItem;
  balance: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function PurchaseConfirmModal({
  item,
  balance,
  onConfirm,
  onCancel,
}: PurchaseConfirmModalProps) {
  const purchaseLoading = useGameStore((s) => s.purchaseLoading);
  const insufficient = balance < item.price;
  const balanceAfter = balance - item.price;

  return (
    <>
      <div className="purchase-confirm-overlay" onClick={onCancel} />
      <div className="purchase-confirm-modal">
        <h3 className="text-sm font-bold text-text-terminal mb-3">確認購買</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-dim">物品</span>
            <span className="text-text-bright font-bold">{item.name}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-dim">價格</span>
            <span style={{ color: '#f5c542' }} className="font-bold">{item.price} AT</span>
          </div>
          <div className="border-t border-border-dim" />
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-dim">目前餘額</span>
            <span style={{ color: '#f5c542' }}>{balance.toLocaleString()} AT</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-dim">購買後餘額</span>
            <span
              className="font-bold"
              style={{ color: insufficient ? '#ff6666' : '#f5c542' }}
            >
              {insufficient ? '不足' : `${balanceAfter.toLocaleString()} AT`}
            </span>
          </div>
        </div>

        {insufficient && (
          <div className="text-xs text-combat-damage bg-combat-damage/10 rounded px-2 py-1.5 mb-3">
            餘額不足，無法購買此物品。
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-3 py-1.5 text-xs border border-border-dim rounded text-text-dim hover:text-text-bright hover:bg-bg-tertiary transition-colors cursor-pointer"
          >
            取消
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={insufficient || purchaseLoading}
            className={`flex-1 px-3 py-1.5 text-xs rounded font-bold transition-colors cursor-pointer ${
              insufficient || purchaseLoading
                ? 'bg-bg-tertiary text-text-dim border border-border-dim cursor-not-allowed'
                : 'bg-text-terminal/20 text-text-terminal border border-text-terminal/40 hover:bg-text-terminal/30'
            }`}
          >
            {purchaseLoading ? '處理中...' : '確認購買'}
          </button>
        </div>
      </div>
    </>
  );
}
