import { useState } from 'react';
import { useGameStore } from '../stores/gameStore';

export default function RoomImage() {
  const room = useGameStore((s) => s.room);
  const [hasError, setHasError] = useState(false);
  const [lastRoomId, setLastRoomId] = useState('');

  if (!room) return null;

  // Reset error state when room changes
  if (room.id !== lastRoomId) {
    setLastRoomId(room.id);
    setHasError(false);
  }

  if (hasError) return null;

  const imagePath = `/mud/images/rooms/${room.id}.png`;

  return (
    <div className="rounded border border-border-dim overflow-hidden">
      <img
        src={imagePath}
        alt={room.name}
        className="w-full h-auto"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
