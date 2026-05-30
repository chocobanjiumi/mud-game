// Player progression and collection command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, sendToSession } from '../../ws/handler.js';
import { getCharacterById, getInventory, removeInventoryItem, addInventoryItem, saveCharacter } from '../../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import { worldEventMgr, achievementMgr, petMgr, questMgr, classQuest2Mgr, skillTreeMgr, leaderboardMgr, isInCombat } from '../state.js';
import { PET_DEFS } from '../pet.js';
import { getBossKillCount, getFishCodex, getMonsterCodex } from '../collection-log.js';
import { equipAppearance, getAppearanceCollection, unlockAppearance } from '../appearance.js';
import { FISH_TABLE } from '../fishing.js';
import { MONSTERS } from '../../data/monsters.js';
import { getChar } from './cmd-helpers.js';

// ─── 排行榜 ───

export function cmdLeaderboard(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase() || 'level';
  const validCategories: Record<string, 'level' | 'pvp' | 'dungeon_speed'> = {
    level: 'level', lv: 'level',
    pvp: 'pvp',
    dungeon: 'dungeon_speed', speed: 'dungeon_speed',
    my: 'level', // 顯示個人排名
  };

  if (sub === 'my' || sub === 'me') {
    const text = leaderboardMgr.formatPlayerRanking(char.id, char.name);
    sendSystem(session.sessionId, text);
    return;
  }

  const category = validCategories[sub];
  if (!category) {
    sendSystem(session.sessionId, '排行榜指令：leaderboard level/pvp/dungeon/my');
    return;
  }

  const text = leaderboardMgr.formatLeaderboard(category);
  sendSystem(session.sessionId, text);

  // Also send structured data for the UI panel
  leaderboardMgr.sendLeaderboard(char.id, category);
}

// ─── 成就/稱號指令 ───

export function cmdAchievement(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  if (sub === 'equip') {
    const achId = args[1];
    if (!achId) {
      sendError(session.sessionId, '用法：achievement equip <成就ID>');
      return;
    }
    const result = achievementMgr.equipTitle(char.id, achId);
    if (result.ok) {
      sendSystem(session.sessionId, result.message);
    } else {
      sendError(session.sessionId, result.message);
    }
    return;
  }

  // 預設：列出所有成就
  const achievements = achievementMgr.getAchievements(char.id);
  const completed = achievements.filter(a => a.completedAt !== null);

  sendSystem(session.sessionId, `═══ 成就列表 （${completed.length}/${achievements.length} 完成）═══`);

  const categories: Record<string, string> = {
    combat: '戰鬥', exploration: '探索', social: '社交',
    collection: '收集', crafting: '製作',
  };

  for (const [catId, catName] of Object.entries(categories)) {
    const catAchs = achievements.filter(a => a.category === catId);
    const catDone = catAchs.filter(a => a.completedAt !== null).length;
    sendSystem(session.sessionId, '');
    sendSystem(session.sessionId, `── ${catName} (${catDone}/${catAchs.length}) ──`);
    for (const a of catAchs) {
      const status = a.completedAt ? '✓' : `${a.progress}/${a.requiredProgress}`;
      const titleText = a.completedAt ? ` → 「${a.title}」` : '';
      sendSystem(session.sessionId, `  [${status}] ${a.name}（${a.description}）${titleText}`);
    }
  }
}

export function cmdTitle(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const title = achievementMgr.getEquippedTitle(char.id);
  if (title) {
    sendSystem(session.sessionId, `你當前的稱號：「${title}」`);
  } else {
    sendSystem(session.sessionId, '你尚未裝備任何稱號。使用 achievement equip <成就ID> 來裝備。');
  }
}

export function cmdCodex(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase() ?? 'monster';
  if (sub === 'fish' || sub === 'fishing') {
    const entries = getFishCodex(char.id);
    sendSystem(session.sessionId, `═══ 釣魚圖鑑 (${entries.length}/${FISH_TABLE.length}) ═══`);
    if (entries.length === 0) {
      sendSystem(session.sessionId, '尚未捕獲任何魚類。');
      return;
    }
    for (const entry of entries.slice(0, 20)) {
      const def = FISH_TABLE.find(fish => fish.id === entry.fishId);
      sendSystem(session.sessionId, `  ${def?.name ?? entry.fishId} x${entry.catchCount}`);
    }
    return;
  }

  if (sub === 'boss') {
    sendSystem(session.sessionId, `Boss 擊殺次數：${getBossKillCount(char.id)}`);
    return;
  }

  const entries = getMonsterCodex(char.id);
  sendSystem(session.sessionId, `═══ 怪物圖鑑 (${entries.length}) ═══`);
  if (entries.length === 0) {
    sendSystem(session.sessionId, '尚未擊殺任何怪物。');
    return;
  }
  for (const entry of entries.slice(0, 20)) {
    const def = MONSTERS[entry.monsterId];
    const bossTag = entry.isBoss ? ' BOSS' : '';
    sendSystem(session.sessionId, `  ${def?.name ?? entry.monsterId}${bossTag} x${entry.killCount}`);
  }
}

export function cmdAppearance(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase() ?? 'list';
  if (sub === 'equip') {
    const appearanceId = args[1];
    if (!appearanceId) {
      sendError(session.sessionId, '用法：appearance equip <外觀ID>');
      return;
    }
    const result = equipAppearance(char.id, appearanceId);
    if (result.ok) sendSystem(session.sessionId, result.message);
    else sendError(session.sessionId, result.message);
    return;
  }

  const entries = getAppearanceCollection(char.id);
  const unlockedCount = entries.filter(entry => entry.unlocked).length;
  sendSystem(session.sessionId, `═══ 外觀收藏 (${unlockedCount}/${entries.length}) ═══`);
  for (const entry of entries) {
    const status = entry.unlocked ? (entry.equipped ? '已裝備' : '已解鎖') : `未解鎖：${entry.source}`;
    sendSystem(session.sessionId, `  [${status}] ${entry.id} — ${entry.name}（${entry.slot}）`);
  }
}

// ─── 寵物指令 ───

export function cmdPet(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'list': {
      const pets = petMgr.getPlayerPets(char.id);
      if (pets.length === 0) {
        sendSystem(session.sessionId, '你還沒有任何寵物。馴獸師可使用 tame 馴服，其他職業可使用寵物蛋。');
        return;
      }
      sendSystem(session.sessionId, `═══ 我的寵物 (${pets.length}) ═══`);
      for (const p of pets) {
        const summonMark = p.isSummoned ? ' [已召喚]' : '';
        const def = PET_DEFS[p.petType];
        sendSystem(session.sessionId,
          `  ${p.name}（${def?.name ?? p.petType}）Lv${p.level} HP:${p.hp}/${p.maxHp} ATK:${p.atk} DEF:${p.def} 幸福:${p.happiness}/100${summonMark}`
        );
        sendSystem(session.sessionId, `    ID: ${p.id}`);
      }
      break;
    }
    case 'info': {
      const petId = args[1];
      if (!petId) { sendError(session.sessionId, '用法：pet info <petId>'); return; }
      const pet = petMgr.getPetInfo(char.id, petId);
      if (!pet) { sendError(session.sessionId, '找不到這隻寵物。'); return; }
      const def = PET_DEFS[pet.petType];
      sendSystem(session.sessionId, `═══ ${pet.name} ═══`);
      sendSystem(session.sessionId, `  類型：${def?.name ?? pet.petType}（${def?.description ?? ''}）`);
      sendSystem(session.sessionId, `  等級：Lv${pet.level}  EXP：${pet.exp}/${pet.level * 50 + pet.level * pet.level * 10}`);
      sendSystem(session.sessionId, `  HP：${pet.hp}/${pet.maxHp}  ATK：${pet.atk}  DEF：${pet.def}`);
      sendSystem(session.sessionId, `  幸福度：${pet.happiness}/100`);
      sendSystem(session.sessionId, `  狀態：${pet.isSummoned ? '已召喚' : '休息中'}`);
      break;
    }
    case 'summon': {
      const petId = args[1];
      if (!petId) { sendError(session.sessionId, '用法：pet summon <petId>'); return; }
      const result = petMgr.summonPet(char.id, petId);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'dismiss': {
      const result = petMgr.dismissPet(char.id);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'feed': {
      const petId = args[1];
      const itemId = args[2];
      if (!petId || !itemId) { sendError(session.sessionId, '用法：pet feed <petId> <itemId>'); return; }
      // 檢查是否持有該物品
      const inv = getInventory(char.id);
      const hasItem = inv.find(i => i.itemId === itemId && i.quantity > 0);
      if (!hasItem) { sendError(session.sessionId, `你沒有物品 ${itemId}。`); return; }
      // 消耗物品
      removeInventoryItem(char.id, itemId, 1);
      const result = petMgr.feedPet(char.id, petId, itemId);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else {
        // 退還物品
        addInventoryItem(char.id, itemId, 1);
        sendError(session.sessionId, result.message);
      }
      break;
    }
    case 'rename': {
      const petId = args[1];
      const newName = args.slice(2).join(' ');
      if (!petId || !newName) { sendError(session.sessionId, '用法：pet rename <petId> <name>'); return; }
      const result = petMgr.renamePet(char.id, petId, newName);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    default:
      // 無子命令，顯示簡略列表
      cmdPet(session, ['list']);
      break;
  }
}

export function cmdTame(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法馴服寵物！');
    return;
  }

  // 找到當前房間可馴服的寵物類型
  const availablePets = Object.values(PET_DEFS).filter(d => d.tameZones.includes(char.roomId));
  if (availablePets.length === 0) {
    sendError(session.sessionId, '這個區域沒有可馴服的野生寵物。');
    return;
  }

  // 隨機選一個可馴服的寵物
  const targetPet = availablePets[Math.floor(Math.random() * availablePets.length)];
  const result = petMgr.tamePet(char.id, targetPet.id, char.roomId, char.level, char.classId);

  if (result.ok) {
    sendSystem(session.sessionId, result.message);
    unlockAppearance(char.id, 'portrait_pet_keeper');
    // 二轉任務：馴服寵物鉤子
    classQuest2Mgr.onPetTamed(char.id);
  } else {
    sendError(session.sessionId, result.message);
  }
}
