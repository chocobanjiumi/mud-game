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
  const [openGatheringId, setOpenGatheringId] = useState<string | null>(null);

  useEffect(() => {
    setUseFallback(false);
    setHideImage(false);
    setOpenGatheringId(null);
  }, [room?.id]);

  useEffect(() => {
    if (!openGatheringId) return;
    const close = () => setOpenGatheringId(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [openGatheringId]);

  if (!room) return null;

  const roomImage = room.image ?? `${room.id}.png`;
  const zoneImage = `${room.zone.replaceAll('_', '-')}.png`;
  const imagePath = useFallback
    ? `/mud/images/zones/${zoneImage}`
    : `/mud/images/rooms/${roomImage}`;
  const gatheringEntities = getGatheringEntities(room);
  const openGathering = gatheringEntities.find((node) => node.id === openGatheringId);

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

      {gatheringEntities.length > 0 && (
        <div className="scene-monster-strip">
          <div className="scene-monster-strip-head">
            <span>採集點</span>
            <span>{gatheringEntities.length}</span>
          </div>
          <div className="scene-monster-list">
            {gatheringEntities.map((node) => {
              const image = getEntityImagePath(node);
              const active = node.id === openGatheringId;
              return (
                <button
                  key={node.id}
                  type="button"
                  className={`scene-monster-avatar ${active ? 'scene-monster-avatar-active' : ''}`}
                  title={node.label}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedEntity(node);
                    setOpenGatheringId(active ? null : node.id);
                  }}
                >
                  {image ? (
                    <img src={image} alt="" loading="lazy" />
                  ) : (
                    <span>{node.label.slice(0, 1)}</span>
                  )}
                </button>
              );
            })}
          </div>

          {openGathering && (
            <div className="scene-monster-menu" onClick={(event) => event.stopPropagation()}>
              <div className="scene-monster-menu-title">
                <span className="truncate">{openGathering.label}</span>
                {openGathering.subtitle && <small>{openGathering.subtitle}</small>}
              </div>
              <div className="scene-monster-menu-actions">
                {openGathering.actions.map((action) => (
                  <button
                    key={`${openGathering.id}-${action.label}-${action.command}`}
                    type="button"
                    className={actionClass(action)}
                    disabled={action.disabled}
                    title={action.reason}
                    onClick={() => {
                      if (action.disabled) return;
                      sendCommand(action.command, `${action.label} ${openGathering.label}`);
                      setOpenGatheringId(null);
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

function getGatheringEntities(room: NonNullable<ReturnType<typeof useGameStore.getState>['room']>): RoomEntity[] {
  const entities = room.entities?.filter((entity) => entity.type === 'gathering') ?? [];
  if (entities.length > 0) return entities;

  return (room.gatheringNodes ?? []).map((node) => ({
    id: node.id,
    type: 'gathering',
    label: node.name,
    subtitle: `${node.skill} Lv.${node.levelMin}`,
    actions: [{ label: '採集', command: `gather ${node.id}`, tone: 'primary' }],
  }));
}
