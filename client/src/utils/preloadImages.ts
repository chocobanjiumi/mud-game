import { useEffect } from 'react';
import type { RoomInfo } from '../stores/gameTypes';
import { assetUrl, getMonsterImagePath } from './assetImages';

// 已預載過的 URL，避免重複建立 Image。
const preloaded = new Set<string>();

function warm(url: string | undefined): void {
  if (!url || preloaded.has(url)) return;
  preloaded.add(url);
  const img = new Image();
  img.decoding = 'async';
  // 低優先度，不與「當前房間」圖片搶頻寬。
  (img as HTMLImageElement & { fetchPriority?: 'high' | 'low' | 'auto' }).fetchPriority = 'low';
  img.src = url;
}

/**
 * 預載入相鄰（東南西北）房間的場景圖，以及已偵察到 / 接近中怪物的頭像，
 * 讓玩家移動到下一個房間時圖片已在快取中。
 */
export function preloadAdjacentAssets(room: RoomInfo | null | undefined): void {
  if (!room) return;

  // 1) 相鄰房間場景圖：以出口的目標房間 id 推測檔名（rooms/<id>.webp）。
  //    多數房間圖檔名即房間 id；猜錯只會是一次無害的 404 預載，實際進房時仍會正確載入。
  for (const exit of room.exits ?? []) {
    if (exit.targetRoomId) warm(assetUrl(`rooms/${exit.targetRoomId}.png`));
  }

  // 2) 怪物頭像：相鄰房間（已偵察）與接近中的怪物。
  const nearby = room.nearbyCombat;
  if (nearby) {
    for (const neighbor of nearby.neighbors) {
      for (const monster of neighbor.monsters ?? []) warm(getMonsterImagePath(monster.monsterId));
    }
    for (const approaching of nearby.approaching) warm(getMonsterImagePath(approaching.monsterId));
  }
}

/** 在房間切換（或相鄰怪物資訊更新）時預載相鄰房間素材。 */
export function useAdjacentPreload(room: RoomInfo | null | undefined): void {
  const neighborKey = room?.nearbyCombat?.neighbors
    .map(neighbor => `${neighbor.roomId ?? ''}:${neighbor.monsters?.length ?? 0}`)
    .join('|');
  useEffect(() => {
    preloadAdjacentAssets(room);
    // 僅在房間 id 或相鄰怪物可見性改變時重跑；warm() 內部已去重。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.id, neighborKey]);
}
