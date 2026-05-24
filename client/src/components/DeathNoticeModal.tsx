import { useGameStore } from '../stores/gameStore';
import type { DeathNotice } from '../stores/gameStore';

export default function DeathNoticeModal() {
  const notice = useGameStore((s) => s.deathNotice);
  const setDeathNotice = useGameStore((s) => s.setDeathNotice);

  if (!notice) return null;

  return <DeathNoticeModalView notice={notice} onDismiss={() => setDeathNotice(null)} />;
}

export function DeathNoticeModalView({
  notice,
  onDismiss,
}: {
  notice: DeathNotice;
  onDismiss: () => void;
}) {
  const lostItems = notice.losses.items.length > 0 ? notice.losses.items.join('、') : '無';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
      <section className="w-full max-w-lg rounded-md border border-combat-damage bg-bg-secondary p-5 text-text-bright shadow-2xl shadow-black/60">
        <div className="mb-2 text-xs uppercase tracking-wide text-combat-damage">Death</div>
        <h2 className="text-2xl font-bold text-combat-damage">{notice.title}</h2>
        <p className="mt-2 text-sm leading-6 text-text-dim">{notice.message}</p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <InfoCell label="經驗損失" value={`${notice.losses.exp}`} danger={notice.losses.exp > 0} />
          <InfoCell label="金幣損失" value={`${notice.losses.gold}`} danger={notice.losses.gold > 0} />
          <InfoCell label="掉落物品" value={lostItems} danger={notice.losses.items.length > 0} />
          <InfoCell label="等級下降" value={notice.losses.levelDown ? '是' : '否'} danger={notice.losses.levelDown} />
          <InfoCell label="復活 HP" value={`${notice.recovery.hp}/${notice.recovery.maxHp}`} />
          <InfoCell label="復活 MP" value={`${notice.recovery.mp}/${notice.recovery.maxMp}`} />
        </div>

        <div className="mt-4 rounded border border-border-dim bg-bg-primary px-3 py-2 text-sm">
          <div className="text-[11px] text-text-dim">復活位置</div>
          <div className="mt-1 font-bold text-text-bright">{notice.respawn.roomName}</div>
        </div>

        <div className="mt-5 flex justify-end border-t border-border-dim pt-4">
          <button
            type="button"
            onClick={onDismiss}
            className="rounded-md bg-combat-damage px-4 py-2 font-bold text-bg-primary transition-colors hover:bg-text-bright"
          >
            確認
          </button>
        </div>
      </section>
    </div>
  );
}

function InfoCell({ label, value, danger = false }: { label: string; value: string; danger?: boolean }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary px-3 py-2">
      <div className="text-[11px] text-text-dim">{label}</div>
      <div className={`mt-1 font-bold ${danger ? 'text-combat-damage' : 'text-text-bright'}`}>{value}</div>
    </div>
  );
}
