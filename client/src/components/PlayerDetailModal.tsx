import type { EquipmentSlots, RoomEntity } from '@game/shared';
import {
  CLASS_DEFS,
  DEFAULT_FAITH_ID,
  DEFAULT_GENDER_ID,
  DEFAULT_RACE_ID,
  FAITH_DEFS,
  GENDER_DEFS,
  ITEM_DEFS,
  RACE_DEFS,
} from '@game/shared';
import { getBaseClassId } from '../utils/assetImages';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

const resourceLabels: Record<string, string> = {
  mp: 'MP',
  rage: '怒氣',
  focus: '專注',
  faith: '信仰',
};

const equipmentSlotLabels: { key: keyof EquipmentSlots; label: string }[] = [
  { key: 'meleeMainHand', label: '近戰主手' },
  { key: 'meleeOffHand', label: '近戰副手' },
  { key: 'rangedMainHand', label: '遠程/施法主手' },
  { key: 'rangedOffHand', label: '遠程/施法副手' },
  { key: 'head', label: '頭部' },
  { key: 'body', label: '身體' },
  { key: 'hands', label: '手部' },
  { key: 'feet', label: '腳部' },
  { key: 'ring', label: '戒指' },
  { key: 'earring', label: '耳環' },
  { key: 'belt', label: '腰帶' },
  { key: 'necklace', label: '項鍊' },
  { key: 'accessory', label: '飾品' },
];

function getCharacterArtPath(classId: string | undefined, genderId: string | undefined, raceId: string | undefined): string {
  const baseClassId = getBaseClassId(classId);
  return `/mud/images/ui/characters/classes/${baseClassId}-${genderId ?? DEFAULT_GENDER_ID}-${raceId ?? DEFAULT_RACE_ID}.png`;
}

export default function PlayerDetailModal({
  player,
  onClose,
}: {
  player: RoomEntity;
  onClose: () => void;
}) {
  const details = player.playerDetails;
  const classDef = details ? CLASS_DEFS[details.classId as keyof typeof CLASS_DEFS] : undefined;
  const raceId = details?.raceId ?? DEFAULT_RACE_ID;
  const genderId = details?.genderId ?? DEFAULT_GENDER_ID;
  const faithId = details?.faithId ?? DEFAULT_FAITH_ID;
  const actionButtons = player.actions.filter(action => action.label !== '查看' && !action.disabled);

  return (
    <div className="monster-detail-overlay" onMouseDown={onClose}>
      <section className="monster-detail-modal player-detail-modal" onMouseDown={(event) => event.stopPropagation()}>
        <header className="monster-detail-header">
          <div className="min-w-0">
            <div className="monster-detail-title player-detail-title">{player.label}</div>
            <div className="monster-detail-subtitle">
              {details ? `Lv.${details.level} ${classDef?.name ?? details.classId}` : player.subtitle}
            </div>
          </div>
          <button type="button" className="monster-detail-close" onClick={onClose}>關閉</button>
        </header>

        <div className="monster-detail-body">
          <aside className="monster-detail-portrait-frame">
            {details ? (
              <img
                className="monster-detail-portrait player-detail-portrait"
                src={getCharacterArtPath(details.classId, genderId, raceId)}
                alt=""
              />
            ) : (
              <div className="monster-detail-portrait monster-detail-portrait-fallback">{player.label.slice(0, 1)}</div>
            )}
            <div className="monster-detail-hp player-detail-hp">
              <div>
                <span>HP</span>
                <b>{details?.hp ?? player.hp ?? 0}/{details?.maxHp ?? player.maxHp ?? 0}</b>
              </div>
              <i style={{ width: `${Math.max(0, Math.min(100, (((details?.hp ?? player.hp ?? 0) / Math.max(1, details?.maxHp ?? player.maxHp ?? 1)) * 100)))}%` }} />
            </div>
            {actionButtons.length > 0 && (
              <div className="player-detail-actions">
                {actionButtons.map(action => (
                  <button
                    key={`${action.label}-${action.command}`}
                    type="button"
                    onClick={() => {
                      sendCommand(action.command, `${action.label} ${player.label}`);
                      onClose();
                    }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </aside>

          <main className="monster-detail-info">
            {details ? (
              <>
                <div className="monster-detail-grid">
                  <Info label="職業" value={classDef?.name ?? details.classId} />
                  <Info label="種族" value={RACE_DEFS[raceId]?.name ?? raceId} />
                  <Info label="性別" value={GENDER_DEFS[genderId]?.name ?? genderId} />
                  <Info label="信仰" value={FAITH_DEFS[faithId]?.name ?? faithId} />
                  <Info label="MP" value={`${details.mp}/${details.maxMp}`} />
                  <Info label={resourceLabels[details.resourceType] ?? details.resourceType} value={`${details.resource}/${details.maxResource}`} />
                  <Info label="玩家 ID" value={details.id} />
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
                  <h3>裝備</h3>
                  <div className="monster-detail-drops player-detail-equipment">
                    {equipmentSlotLabels.map(({ key, label }) => {
                      const itemId = details.equipment[key];
                      return (
                        <div key={key}>
                          <span>{label}</span>
                          <b>{itemId ? ITEM_DEFS[itemId]?.name ?? itemId : '空'}</b>
                        </div>
                      );
                    })}
                  </div>
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
