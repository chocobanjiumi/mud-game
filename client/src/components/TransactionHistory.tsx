import { useGameStore } from '../stores/gameStore';

function formatDate(ts: number): string {
  const d = new Date(ts);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function TransactionHistory() {
  const transactions = useGameStore((s) => s.transactionHistory);

  if (transactions.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-text-dim text-xs">
        暫無交易紀錄
      </div>
    );
  }

  return (
    <div className="shop-transaction-list">
      <div className="text-[10px] text-text-dim uppercase tracking-wider px-3 py-2 border-b border-border-dim">
        交易紀錄
      </div>
      {transactions.map((tx) => (
        <div key={tx.id} className="shop-transaction-row">
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-bright">{tx.itemName}</span>
            <span
              className="text-xs font-bold tabular-nums"
              style={{ color: tx.type === 'purchase' ? '#ff6666' : '#66ff88' }}
            >
              {tx.type === 'purchase' ? '-' : '+'}{tx.amount} AT
            </span>
          </div>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[10px] text-text-dim">
              {tx.type === 'purchase' ? '購買' : '獎勵'}
            </span>
            <span className="text-[10px] text-text-dim">{formatDate(tx.timestamp)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
