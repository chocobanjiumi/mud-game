import { useEffect, useState } from 'react';
import { useGameStore } from '../stores/gameStore';

export default function RoomImage() {
  const room = useGameStore((s) => s.room);
  const [useFallback, setUseFallback] = useState(false);
  const [hideImage, setHideImage] = useState(false);

  useEffect(() => {
    setUseFallback(false);
    setHideImage(false);
  }, [room?.id]);

  if (!room) return null;

  if (hideImage) return null;

  const roomImage = room.image ?? `${room.id}.png`;
  const zoneImage = `${room.zone.replaceAll('_', '-')}.png`;
  const imagePath = useFallback
    ? `/mud/images/zones/${zoneImage}`
    : `/mud/images/rooms/${roomImage}`;

  return (
    <div className="room-image-panel overflow-hidden bg-bg-secondary">
      <div className="px-3 py-2 border-b border-border-dim flex items-center justify-between">
        <span className="text-xs font-bold text-text-terminal truncate">{room.name}</span>
        <span className="text-[10px] text-text-dim shrink-0">場景</span>
      </div>
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
    </div>
  );
}
