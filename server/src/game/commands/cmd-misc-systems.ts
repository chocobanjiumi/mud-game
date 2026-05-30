// Miscellaneous open, debug, faith, allocation, and gathering command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, sendToSession } from '../../ws/handler.js';
import { forgetSkill, getInventory, hasDiscovery, learnSkill, recordDiscovery, saveCharacter } from '../../db/queries.js';
import {
  DEFAULT_FAITH_ID,
  DEFAULT_GENDER_ID,
  DEFAULT_RACE_ID,
  FAITH_DEFS,
  GENDER_DEFS,
  ITEM_DEFS,
  RACE_DEFS,
  calculateMaxHp,
  calculateMaxMp,
  isFaithId,
} from '@game/shared';
import type { Character, FaithId } from '@game/shared';
import { achievementMgr, classQuest2Mgr, gatheringMgr, questMgr, skillTreeMgr, world, isInCombat } from '../state.js';
import { getRoom, getZone } from '../../data/rooms.js';
import { addExperienceToCharacter, expRequiredForLevel } from '../leveling.js';
import { grantAndNotifyLearnableSkills } from '../skill-learning.js';
import { canFollowFaithAtRoom, getFaithAltar } from '../../data/faith-altars.js';
import { cmdInventory, cmdUse } from './cmd-inventory-systems.js';
import { cmdLook, cmdStatus } from './cmd-world-systems.js';
import { directionChinese, findExit, findGroundItem, getChar, normalizeCommandTarget, sendCharacterStatus } from './cmd-helpers.js';

export function cmdOpen(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!target) {
    sendError(session.sessionId, '用法：open <目標>');
    return;
  }

  const room = getRoom(char.roomId);
  if (!room) {
    sendError(session.sessionId, '你身處未知地點，無法開啟目標。');
    return;
  }

  recordDiscovery(char.id, room.zone, room.id, 'open', `${room.id}:${normalizeCommandTarget(target)}`);

  const exit = findExit(room, target);
  if (exit) {
    if (exit.locked) {
      sendError(session.sessionId, exit.keyItemId ? `這個出口上鎖，需要特定鑰匙才能開啟。` : '這個出口上鎖，暫時無法開啟。');
      return;
    }
    sendSystem(session.sessionId, `${directionChinese(exit.direction)}側出口已經打開。可用 go ${exit.direction} 通過。`);
    return;
  }

  const inventoryItem = getInventory(char.id).find(item => {
    const def = ITEM_DEFS[item.itemId];
    return item.itemId === normalizeCommandTarget(target) || def?.name === target || !!def?.name.toLowerCase().includes(normalizeCommandTarget(target));
  });
  if (inventoryItem) {
    const def = ITEM_DEFS[inventoryItem.itemId];
    if (def?.useEffect?.type.startsWith('open_chest_')) {
      cmdUse(session, def.name);
      return;
    }
    sendError(session.sessionId, `「${def?.name ?? target}」不是可開啟的物品。`);
    return;
  }

  const ground = findGroundItem(room.id, target);
  if (ground) {
    const def = ITEM_DEFS[ground.itemId];
    if (def?.useEffect?.type.startsWith('open_chest_')) {
      sendSystem(session.sessionId, `你需要先 take ${def.name}，再 open ${def.name}。`);
      return;
    }
    sendError(session.sessionId, `「${def?.name ?? target}」無法直接開啟。`);
    return;
  }

  sendError(session.sessionId, `找不到可開啟的「${target}」。`);
}

export function cmdDebug(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  if (sub === 'tp') {
    const targetRoomId = args[1];
    if (!targetRoomId) {
      sendError(session.sessionId, 'debug tp <roomId>');
      return;
    }
    const destination = getRoom(targetRoomId);
    if (!destination) {
      sendError(session.sessionId, `找不到房間：${targetRoomId}`);
      return;
    }
    const prev = char.roomId;
    char.roomId = destination.id;
    world.placePlayer(char.id, destination.id);
    saveCharacter(char);
    sendSystem(session.sessionId, `傳送：${prev} → ${destination.id}（${destination.name}）`);
    cmdLook(session);
    return;
  }

  if (sub !== 'levelup') {
    sendError(session.sessionId, 'Debug 指令：debug levelup | debug tp <roomId>');
    return;
  }

  const neededExp = Math.max(1, expRequiredForLevel(char.level + 1) - char.exp);
  const beforeLevel = char.level;
  const { expGained, levelsGained } = addExperienceToCharacter(char, neededExp);
  for (let i = 0; i < levelsGained; i++) skillTreeMgr.grantPoint(char.id, char);
  if (levelsGained > 0) grantAndNotifyLearnableSkills(char);
  saveCharacter(char);

  if (char.level > beforeLevel) {
    sendToSession(session.sessionId, 'level_up', { level: char.level });
    sendSystem(session.sessionId, `Debug 升級：Lv.${beforeLevel} → Lv.${char.level}（經驗 +${expGained}）`);
  } else {
    sendSystem(session.sessionId, `Debug 經驗：+${expGained}`);
  }
  sendCharacterStatus(session.sessionId, char);
}

export function cmdFaith(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();
  if (!sub || sub === 'info' || sub === 'status') {
    sendFaithInfo(session, char);
    return;
  }

  if (sub === 'list') {
    sendSystem(session.sessionId, '── 可信仰神祗 ──');
    for (const faith of Object.values(FAITH_DEFS)) {
      const altar = getFaithAltar(faith.id);
      const discovered = hasDiscovery(char.id, 'visit_room', altar.roomId) || char.roomId === altar.roomId;
      const location = discovered ? `${altar.zoneHint}「${altar.locationHint}」` : `${altar.zoneHint}一帶`;
      sendSystem(session.sessionId, `  ${faith.id.padEnd(8)} ${faith.name}・${faith.title} - ${faith.passiveName}；祭壇：${location}`);
    }
    sendSystem(session.sessionId, '使用 faith follow <神祗ID或名稱> 可在對應祭壇改信。改信會清空恩寵並進入祈禱冷卻。');
    return;
  }

  if (sub === 'pray') {
    const target = args.slice(1).join(' ');
    const targetFaithId = target ? resolveFaithId(target) : (char.faithId ?? DEFAULT_FAITH_ID);
    if (!targetFaithId) {
      sendError(session.sessionId, '找不到該神祗。使用 faith list 查看可選信仰。');
      return;
    }
    if (targetFaithId !== (char.faithId ?? DEFAULT_FAITH_ID)) {
      sendError(session.sessionId, '目前只能向自己的信仰祈禱。改信可使用 faith follow <神祗>。');
      return;
    }
    prayToFaith(session, char);
    return;
  }

  if (sub === 'offering') {
    cmdOffering(session, args.slice(1));
    return;
  }

  if (sub === 'renounce') {
    renounceFaith(session, char);
    return;
  }

  if (sub === 'follow' || sub === 'choose') {
    const target = args.slice(1).join(' ');
    const faithId = resolveFaithId(target);
    if (!faithId) {
      sendError(session.sessionId, '找不到該神祗。使用 faith list 查看可選信仰。');
      return;
    }
    changeFaith(session, char, faithId);
    return;
  }

  sendSystem(session.sessionId, '信仰指令：faith / faith list / faith pray / faith offering <金幣> / faith follow <神祗> / faith renounce');
}

export function sendFaithInfo(session: WsSession, char: Character): void {
  const race = RACE_DEFS[char.raceId ?? DEFAULT_RACE_ID];
  const gender = GENDER_DEFS[char.genderId ?? DEFAULT_GENDER_ID];
  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  const cooldown = getFaithCooldownRemaining(char);

  sendSystem(session.sessionId, `── ${char.name} 的出身與信仰 ──`);
  sendSystem(session.sessionId, `種族：${race.name} - ${race.passiveName}：${race.passiveDescription}`);
  sendSystem(session.sessionId, `性別：${gender.name}`);
  sendSystem(session.sessionId, `信仰：${faith.name}・${faith.title}`);
  sendSystem(session.sessionId, `被動：${faith.passiveName}：${faith.passiveDescription}`);
  sendSystem(session.sessionId, `祈禱：${faith.prayerName}：${faith.prayerDescription}`);
  sendSystem(session.sessionId, `恩寵：${char.faithFavor ?? 0}/100${cooldown > 0 ? `；祈禱冷卻 ${formatDuration(cooldown)}` : ''}`);
  const altar = getFaithAltar(faith.id);
  sendSystem(session.sessionId, `改信：需前往對應祭壇；目前信仰祭壇位置為 ${faith.name}・${faith.title}：${altar.zoneHint}「${altar.locationHint}」。`);
}

export function prayToFaith(session: WsSession, char: Character): void {
  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  const cooldown = getFaithCooldownRemaining(char);
  if (cooldown > 0) {
    sendError(session.sessionId, `祈禱尚在冷卻中，剩餘 ${formatDuration(cooldown)}。`);
    return;
  }
  const favorCost = 10;
  if ((char.faithFavor ?? 0) < favorCost) {
    sendError(session.sessionId, `恩寵不足。祈禱需要 ${favorCost} 恩寵，可用 offering <金幣> 獻祭提高恩寵。`);
    return;
  }

  const hpRestore = Math.max(1, Math.floor(char.maxHp * (faith.id === 'aelora' ? 0.25 : 0.12)));
  const mpRestore = Math.max(1, Math.floor(char.maxMp * (faith.id === 'ithern' || faith.id === 'nesha' ? 0.2 : 0.08)));
  const resourceRestore = Math.max(1, Math.floor(char.maxResource * (faith.id === 'karvos' ? 0.2 : 0.08)));
  char.hp = Math.min(char.maxHp, char.hp + hpRestore);
  char.mp = Math.min(char.maxMp, char.mp + mpRestore);
  char.resource = Math.min(char.maxResource, char.resource + resourceRestore);
  char.faithFavor = Math.max(0, (char.faithFavor ?? 0) - favorCost);
  char.faithCooldownUntil = Date.now() + 10 * 60 * 1000;
  saveCharacter(char);

  sendSystem(session.sessionId, `你向${faith.name}祈禱，消耗 ${favorCost} 恩寵並獲得「${faith.prayerName}」。HP +${hpRestore}，MP +${mpRestore}，資源 +${resourceRestore}。`);
  cmdStatus(session);
}

export function changeFaith(session: WsSession, char: Character, faithId: FaithId): void {
  const current = char.faithId ?? DEFAULT_FAITH_ID;
  if (current === faithId) {
    sendFaithInfo(session, char);
    return;
  }

  const next = FAITH_DEFS[faithId];
  if (!canFollowFaithAtRoom(char.roomId, faithId)) {
    const currentFaith = FAITH_DEFS[current];
    const altar = getFaithAltar(faithId);
    sendError(
      session.sessionId,
      `改信必須在對應祭壇完成。你目前信仰是${currentFaith.name}・${currentFaith.title}，若要改信${next.name}・${next.title}，請前往${altar.zoneHint}「${altar.locationHint}」。${altar.dangerNote}`,
    );
    return;
  }

  forgetSkill(char.id, FAITH_DEFS[current].passiveSkillId);
  learnSkill(char.id, next.passiveSkillId);
  char.faithId = faithId;
  char.faithFavor = 0;
  char.faithCooldownUntil = Date.now() + 60 * 60 * 1000;
  saveCharacter(char);

  const altar = getFaithAltar(faithId);
  sendSystem(session.sessionId, `你在${altar.locationHint}改信${next.name}・${next.title}。既有恩寵歸零，祈禱進入 1 小時冷卻。`);
  sendSystem(session.sessionId, `新的被動：${next.passiveName}：${next.passiveDescription}`);
  cmdStatus(session);
}

export function cmdOffering(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const amount = parseInt(args[0] ?? '', 10);
  if (!Number.isFinite(amount) || amount <= 0) {
    sendError(session.sessionId, '用法：offering <金幣數量>');
    return;
  }
  if (char.gold < amount) {
    sendError(session.sessionId, '金幣不足，無法獻祭。');
    return;
  }

  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  const favorGain = Math.max(1, Math.min(20, Math.floor(amount / 50)));
  char.gold -= amount;
  char.faithFavor = Math.min(100, (char.faithFavor ?? 0) + favorGain);
  saveCharacter(char);

  sendSystem(session.sessionId, `你向${faith.name}獻上 ${amount} 金幣。恩寵 +${favorGain}，目前 ${char.faithFavor}/100。`);
  cmdStatus(session);
}

export function cmdRenounce(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if ((args[0] ?? '').toLowerCase() !== 'faith') {
    sendError(session.sessionId, '用法：renounce faith');
    return;
  }

  renounceFaith(session, char);
}

export function renounceFaith(session: WsSession, char: Character): void {
  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  forgetSkill(char.id, faith.passiveSkillId);
  learnSkill(char.id, FAITH_DEFS[DEFAULT_FAITH_ID].passiveSkillId);
  char.faithId = DEFAULT_FAITH_ID;
  char.faithFavor = 0;
  char.faithCooldownUntil = Date.now() + 60 * 60 * 1000;
  saveCharacter(char);

  sendSystem(session.sessionId, `你放棄了${faith.name}的信仰。恩寵歸零，祈禱進入 1 小時冷卻。`);
  if (faith.id !== DEFAULT_FAITH_ID) {
    sendSystem(session.sessionId, `你暫時回到${FAITH_DEFS[DEFAULT_FAITH_ID].name}的庇護之下，可用 faith follow <神祗> 改信。`);
  }
  cmdStatus(session);
}

export function resolveFaithId(input: string): FaithId | null {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return null;
  if (isFaithId(normalized)) return normalized;
  return Object.values(FAITH_DEFS).find((faith) => (
    faith.name.toLowerCase() === normalized
    || faith.title.toLowerCase() === normalized
    || `${faith.name}${faith.title}`.toLowerCase() === normalized
  ))?.id ?? null;
}

export function getFaithCooldownRemaining(char: Character): number {
  return Math.max(0, (char.faithCooldownUntil ?? 0) - Date.now());
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes <= 0) return `${seconds} 秒`;
  return `${minutes} 分 ${seconds.toString().padStart(2, '0')} 秒`;
}

export function cmdAllocate(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;
  if (args.length < 2) {
    sendError(session.sessionId, '用法：allocate <屬性> <點數>  (屬性: str, int, dex, vit, luk)');
    return;
  }

  const stat = args[0].toLowerCase();
  const points = parseInt(args[1], 10);
  if (isNaN(points) || points < 1) { sendError(session.sessionId, '請輸入有效的點數。'); return; }
  if (char.freePoints < points) {
    sendError(session.sessionId, `自由屬性點不足！你還有 ${char.freePoints} 點。`);
    return;
  }

  const validStats = ['str', 'int', 'dex', 'vit', 'luk'];
  if (!validStats.includes(stat)) {
    sendError(session.sessionId, `無效的屬性。可用屬性：${validStats.join(', ')}`);
    return;
  }

  const statKey = stat as keyof typeof char.stats;
  char.stats[statKey] += points;
  char.freePoints -= points;
  char.maxHp = calculateMaxHp(char.level, char.stats.vit);
  char.maxMp = calculateMaxMp(char.level, char.stats.int);
  saveCharacter(char);

  const statNames: Record<string, string> = {
    str: '力量(STR)', int: '智力(INT)', dex: '敏捷(DEX)', vit: '體質(VIT)', luk: '幸運(LUK)',
  };
  sendSystem(session.sessionId, `${statNames[stat]} +${points}！目前: ${char.stats[statKey]}。剩餘: ${char.freePoints}`);
  cmdStatus(session);
}

// ─── 採集系統 ───

export function cmdGather(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法採集！');
    return;
  }

  const room = getRoom(char.roomId);
  if (!room) {
    sendError(session.sessionId, '目前位置不存在。');
    return;
  }

  const zone = getZone(room.zone);
  const nodeId = args[0];
  const result = gatheringMgr.gather(char.id, room, zone, nodeId, char.level);
  if (result.ok) {
    sendSystem(session.sessionId, result.message);
    if (result.gathered) {
      questMgr.updateProgress(char.id, 'gather_resource', result.gathered.itemId);
      cmdInventory(session);
    }
  } else {
    const available = gatheringMgr.getAvailableNodes(room, zone, char.level);
    if (available.length > 0) {
      sendError(session.sessionId, `${result.message}\n可用：${available.map(node => node.id).join(', ')}`);
    } else {
      sendError(session.sessionId, result.message);
    }
  }
}

// ─── 指令 registry / 幫助 ───
