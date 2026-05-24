import type { RoomEntity } from '@game/shared';
import { ITEM_DEFS, SKILL_DEFS } from '@game/shared';
import { getEntityImagePath } from '../utils/assetImages';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

function pct(value: number): string {
  return `${Math.round(value * 1000) / 10}%`;
}

function labelForElement(element: string): string {
  const labels: Record<string, string> = {
    none: '無',
    fire: '火',
    ice: '冰',
    lightning: '雷',
    nature: '自然',
    dark: '暗',
    light: '光',
  };
  return labels[element] ?? element;
}

export default function MonsterDetailModal({
  monster,
  onClose,
}: {
  monster: RoomEntity;
  onClose: () => void;
}) {
  const details = monster.monsterDetails;
  const imagePath = getEntityImagePath(monster);
  const attackAction = monster.actions.find(action => action.label === '攻擊' && !action.disabled);

  return (
    <div className="monster-detail-overlay" onMouseDown={onClose}>
      <section className="monster-detail-modal" onMouseDown={(event) => event.stopPropagation()}>
        <header className="monster-detail-header">
          <div className="min-w-0">
            <div className="monster-detail-title">{monster.label}</div>
            <div className="monster-detail-subtitle">
              {details ? `${details.alias} · Lv.${details.level}` : monster.subtitle}
            </div>
          </div>
          <button type="button" className="monster-detail-close" onClick={onClose}>關閉</button>
        </header>

        <div className="monster-detail-body">
          <aside className="monster-detail-portrait-frame">
            {imagePath ? (
              <img className="monster-detail-portrait" src={imagePath} alt="" />
            ) : (
              <div className="monster-detail-portrait monster-detail-portrait-fallback">{monster.label.slice(0, 1)}</div>
            )}
            <div className="monster-detail-hp">
              <div>
                <span>HP</span>
                <b>{monster.hp ?? details?.hp ?? 0}/{monster.maxHp ?? details?.maxHp ?? 0}</b>
              </div>
              <i style={{ width: `${Math.max(0, Math.min(100, (((monster.hp ?? details?.hp ?? 0) / Math.max(1, monster.maxHp ?? details?.maxHp ?? 1)) * 100)))}%` }} />
            </div>
            {attackAction && (
              <button
                type="button"
                className="monster-detail-attack"
                onClick={() => {
                  sendCommand(attackAction.command, `攻擊 ${monster.label}`);
                  onClose();
                }}
              >
                攻擊
              </button>
            )}
          </aside>

          <main className="monster-detail-info">
            {details ? (
              <>
                <div className="monster-detail-grid">
                  <Info label="分類" value={details.isBoss ? 'Boss' : details.isElite ? '菁英' : '一般'} />
                  <Info label="屬性" value={labelForElement(details.element)} />
                  <Info label="AI" value={details.aiType} />
                  <Info label="行為" value={details.behaviorType ?? '-'} />
                  <Info label="MP" value={`${details.mp}/${details.maxMp}`} />
                  <Info label="經驗" value={String(details.expReward)} />
                  <Info label="金幣" value={`${details.goldReward[0]}-${details.goldReward[1]}`} />
                  <Info label="ID" value={details.monsterId} />
                </div>

                <section className="monster-detail-section">
                  <h3>能力值</h3>
                  <div className="monster-detail-stats">
                    <Info label="STR" value={String(details.stats.str)} />
                    <Info label="INT" value={String(details.stats.int)} />
                    <Info label="DEX" value={String(details.stats.dex)} />
                    <Info label="VIT" value={String(details.stats.vit)} />
                    <Info label="LUK" value={String(details.stats.luk)} />
                  </div>
                </section>

                <section className="monster-detail-section">
                  <h3>技能</h3>
                  <div className="monster-detail-tags">
                    {details.skills.length > 0
                      ? details.skills.map(skillId => <span key={skillId}>{SKILL_DEFS[skillId]?.name ?? skillId}</span>)
                      : <em>無</em>}
                  </div>
                </section>

                <section className="monster-detail-section">
                  <h3>掉落</h3>
                  <div className="monster-detail-drops">
                    {details.drops.length > 0
                      ? details.drops.map(drop => (
                        <div key={drop.itemId}>
                          <span>{ITEM_DEFS[drop.itemId]?.name ?? drop.itemId}</span>
                          <b>{pct(drop.chance)} · x{drop.minQty}-{drop.maxQty}</b>
                        </div>
                      ))
                      : <em>無</em>}
                  </div>
                </section>

                <section className="monster-detail-section">
                  <h3>描述</h3>
                  <p>{details.description}</p>
                </section>
              </>
            ) : (
              <div className="monster-detail-empty">目前只有基本資訊。</div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="monster-detail-kv">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}
