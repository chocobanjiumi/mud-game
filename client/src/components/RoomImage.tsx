import { useEffect, useState } from 'react';
import type { RoomEntity, RoomEntityAction } from '@game/shared';
import { useGameStore } from '../stores/gameStore';
import { getEntityImagePath } from '../utils/assetImages';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

function actionClass(action: RoomEntityAction): string {
  if (action.disabled) return 'scene-monster-action opacity-45 cursor-not-allowed';
  if (action.tone === 'danger') return 'scene-monster-action scene-monster-action-danger';
  if (action.tone === 'primary') return 'scene-monster-action scene-monster-action-primary';
  return 'scene-monster-action';
}

export default function RoomImage() {
  const room = useGameStore((s) => s.room);
  const setSelectedEntity = useGameStore((s) => s.setSelectedEntity);
  const [useFallback, setUseFallback] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [openMonsterId, setOpenMonsterId] = useState<string | null>(null);

  useEffect(() => {
    setUseFallback(false);
    setHideImage(false);
    setOpenMonsterId(null);
  }, [room?.id]);

  useEffect(() => {
    if (!openMonsterId) return;
    const close = () => setOpenMonsterId(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [openMonsterId]);

  if (!room) return null;

  const roomImage = room.image ?? `${room.id}.png`;
  const zoneImage = `${room.zone.replaceAll('_', '-')}.png`;
  const imagePath = useFallback
    ? `/mud/images/zones/${zoneImage}`
    : `/mud/images/rooms/${roomImage}`;
  const monsterEntities = getMonsterEntities(room);
  const openMonster = monsterEntities.find((monster) => monster.id === openMonsterId);

  return (
    <div className="room-image-panel bg-bg-secondary">
      <div className="px-3 py-2 border-b border-border-dim flex items-center justify-between">
        <span className="text-xs font-bold text-text-terminal truncate">{room.name}</span>
        <span className="text-[10px] text-text-dim shrink-0">場景</span>
      </div>
      {!hideImage && (
        <img
          src={imagePath}
          alt={room.name}
          className="room-image-media w-full object-cover bg-bg-primary"
          onError={() => {
            if (useFallback) {
              setHideImage(true);
            } else {
              setUseFallback(true);
            }
          }}
        />
      )}

      {monsterEntities.length > 0 && (
        <div className="scene-monster-strip">
          <div className="scene-monster-strip-head">
            <span>怪物</span>
            <span>{monsterEntities.length}</span>
          </div>
          <div className="scene-monster-list">
            {monsterEntities.map((monster) => {
              const image = getEntityImagePath(monster);
              const active = monster.id === openMonsterId;
              return (
                <button
                  key={monster.id}
                  type="button"
                  className={`scene-monster-avatar ${active ? 'scene-monster-avatar-active' : ''}`}
                  title={monster.label}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedEntity(monster);
                    setOpenMonsterId(active ? null : monster.id);
                  }}
                >
                  {image ? (
                    <img src={image} alt="" loading="lazy" />
                  ) : (
                    <span>{monster.label.slice(0, 1)}</span>
                  )}
                  {typeof monster.hp === 'number' && typeof monster.maxHp === 'number' && (
                    <b style={{ width: `${Math.max(0, Math.min(100, (monster.hp / Math.max(1, monster.maxHp)) * 100))}%` }} />
                  )}
                </button>
              );
            })}
          </div>

          {openMonster && (
            <div className="scene-monster-menu" onClick={(event) => event.stopPropagation()}>
              <div className="scene-monster-menu-title">
                <span className="truncate">{openMonster.label}</span>
                {openMonster.subtitle && <small>{openMonster.subtitle}</small>}
              </div>
              <div className="scene-monster-menu-actions">
                {openMonster.actions.map((action) => (
                  <button
                    key={`${openMonster.id}-${action.label}-${action.command}`}
                    type="button"
                    className={actionClass(action)}
                    disabled={action.disabled}
                    title={action.reason}
                    onClick={() => {
                      if (action.disabled) return;
                      sendCommand(action.command, `${action.label} ${openMonster.label}`);
                      setOpenMonsterId(null);
                    }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function getMonsterEntities(room: NonNullable<ReturnType<typeof useGameStore.getState>['room']>): RoomEntity[] {
  const entities = room.entities?.filter((entity) => entity.type === 'monster') ?? [];
  if (entities.length > 0) return entities;

  return room.monsters.map((monster) => ({
    id: monster.id,
    type: 'monster',
    label: monster.label ?? monster.name,
    subtitle: `Lv.${monster.level}`,
    hp: monster.hp,
    maxHp: monster.maxHp,
    actions: [
      { label: '查看', command: `look ${monster.id}` },
      { label: '攻擊', command: `attack ${monster.id}`, tone: 'danger' },
    ],
  }));
}
