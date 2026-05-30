import type { MutableRefObject } from 'react';
import type {
  BalanceUpdatePayload,
  Character,
  CharacterListPayload,
  ChatPayload,
  CombatActionPayload,
  CombatEndPayload,
  CombatStartPayload,
  DeathNoticePayload,
  InventoryPayload,
  LeaderboardDataPayload,
  LearnedSkill,
  MapPayload,
  NarrativePayload,
  NpcDialoguePayload,
  PartyInvitePayload,
  PartyPayload,
  PurchaseResultPayload,
  RoomPayload,
  ServerMessage,
  ShopItemsPayload,
  StatusPayload,
  TransactionHistoryPayload,
} from '@game/shared';
import AudioManager from '../audio/AudioManager';
import { useGameStore } from '../stores/gameStore';
import {
  addCombatStartLines,
  addErrorLine,
  addRoomLines,
  addSystemLine,
  bgmForRoom,
  chatTerminalLine,
  hasCurrentPlayerBasicAttackHit,
} from './terminalFormatters';

export interface ServerMessageHandlerOptions {
  purchaseTimeoutRef: MutableRefObject<ReturnType<typeof setTimeout> | null>;
}

export function handleServerMessage(msg: ServerMessage, options: ServerMessageHandlerOptions): void {
  const s = useGameStore.getState();
  const p = msg.payload as Record<string, unknown>;

  switch (msg.type) {
    case 'narrative': {
      const { text, color, entities } = p as unknown as NarrativePayload;
      s.addTerminalLine(text, color, entities);
      break;
    }

    case 'system': {
      addSystemLine(s, p);
      break;
    }

    case 'error': {
      addErrorLine(s, p);
      break;
    }

    case 'room': {
      const room = p as unknown as RoomPayload;
      s.setRoom(room);
      s.addExploredRoom(room.id);
      if (!room.silent) {
        addRoomLines(s, room);
        if (!s.inCombat) {
          AudioManager.getInstance().play(bgmForRoom(room));
        }
      }
      break;
    }

    case 'status': {
      const status = p as unknown as StatusPayload;
      s.setCharacter(status.character);
      s.setGold(status.character.gold);
      s.setDerivedStats(status.derived);
      s.setExpToNext(status.expToNext);
      s.setActiveEffects(status.effects);
      if (status.skills) s.setSkills(status.skills);
      s.setSkillPoints(status.skillPoints ?? null);
      if (status.aliases) s.setAliases(status.aliases);
      break;
    }

    case 'login_success': {
      const character = p.character as unknown as Character | undefined;
      if (character) {
        s.setCharacter(character);
        s.setGold(character.gold);
      }
      s.addTerminalLine((p.message as string) ?? '登入成功！歡迎來到冒險世界。', 'system');
      s.setScreen('game');
      break;
    }

    case 'character_list': {
      const data = p as unknown as CharacterListPayload;
      s.setCharacterList(data.characters ?? []);
      s.clearGameSessionForCharacterSelect();
      s.addTerminalLine((data.message as string | undefined) ?? '請選擇一個角色。', 'system');
      break;
    }

    case 'combat_start': {
      const data = p as unknown as CombatStartPayload;
      const current = s.character;
      const self = current ? data.playerTeam.find((player) => player.id === current.id) : undefined;
      if (current && self) {
        s.setCharacter({
          ...current,
          hp: self.hp,
          maxHp: self.maxHp,
          mp: self.mp,
          maxMp: self.maxMp,
          resource: self.resource,
          maxResource: self.maxResource,
          resourceType: self.resourceType,
        });
      }
      s.setInCombat(true);
      s.setCombat({
        combatId: data.combatId,
        round: data.round,
        playerTeam: data.playerTeam,
        enemyTeam: data.enemyTeam,
        turnTimer: data.turnTimer,
        log: [],
        preferredAttackModes: data.preferredAttackModes,
      });
      addCombatStartLines(s, data);
      AudioManager.getInstance().play('bgm_combat_normal');
      break;
    }

    case 'combat_action': {
      const data = p as unknown as CombatActionPayload;
      const combat = s.combat;
      const current = s.character;
      const self = current ? data.playerTeam.find((player) => player.id === current.id) : undefined;
      if (current && self) {
        s.setCharacter({
          ...current,
          hp: self.hp,
          maxHp: self.maxHp,
          mp: self.mp,
          maxMp: self.maxMp,
          resource: self.resource,
          maxResource: self.maxResource,
          resourceType: self.resourceType,
        });
      }
      if (combat) {
        s.setCombat({
          ...combat,
          round: data.round,
          playerTeam: data.playerTeam,
          enemyTeam: data.enemyTeam,
          log: [...combat.log, ...data.log],
          preferredAttackModes: data.preferredAttackModes ?? combat.preferredAttackModes,
        });
      }
      for (const [index, line] of data.log.entries()) {
        s.addTerminalLine(line, 'combat', data.logEntities?.[index]);
      }
      for (const enemy of data.enemyTeam) {
        if (enemy.monsterPhases?.length) {
          s.addTerminalLine(`${enemy.name} Boss 階段：P${enemy.currentMonsterPhase ?? 1}`, 'combat');
        }
        if (enemy.pendingTelegraph) {
          s.addTerminalLine(`${enemy.name} 預兆：${enemy.pendingTelegraph.skillId}`, 'combat');
        }
      }
      if (hasCurrentPlayerBasicAttackHit(data.log, current?.name)) {
        AudioManager.getInstance().play('attack_hit');
      }
      break;
    }

    case 'combat_end': {
      const data = p as unknown as CombatEndPayload;
      s.setInCombat(false);
      if (s.combat) {
        s.setCombat({ ...s.combat, result: data.result, log: [...s.combat.log, ...data.log] });
      }
      for (const line of data.log) {
        s.addTerminalLine(line, 'combat');
      }
      const resultText =
        data.result === 'victory' ? '勝利！' : data.result === 'defeat' ? '戰敗...' : '逃離了戰鬥';
      s.addTerminalLine(`═══ 戰鬥結束 - ${resultText} ═══`, 'combat');
      if (data.loot) {
        if (data.loot.exp > 0) s.addTerminalLine(`獲得經驗: ${data.loot.exp}`, 'exp');
        if (data.loot.gold > 0) s.addTerminalLine(`獲得金幣: ${data.loot.gold}`, 'gold');
      }
      AudioManager.getInstance().play(s.room ? bgmForRoom(s.room) : 'bgm_town');
      setTimeout(() => useGameStore.getState().setCombat(null), 3000);
      break;
    }

    case 'death_notice': {
      const data = p as unknown as DeathNoticePayload;
      s.setDeathNotice(data);
      break;
    }

    case 'inventory': {
      const data = p as unknown as InventoryPayload;
      s.setInventory(data.items);
      s.setEquipment(data.equipment);
      s.setInventoryCapacity(data.capacity);
      s.setGold(data.gold);
      AudioManager.getInstance().play('item_pickup');
      break;
    }

    case 'party': {
      const data = p as unknown as PartyPayload;
      s.setParty(data.members);
      s.setPartyLeaderId(data.leaderId);
      s.setPendingPartyInvite(null);
      break;
    }

    case 'party_invite': {
      const data = p as unknown as PartyInvitePayload;
      s.setPendingPartyInvite(data.status === 'pending' ? data : null);
      break;
    }

    case 'chat': {
      const data = p as unknown as ChatPayload;
      const channel = data.channel as 'room' | 'party' | 'global' | 'kingdom';
      s.addChatMessage({
        senderId: data.senderId,
        senderName: data.senderName,
        message: data.message,
        channel,
      });
      s.addChatMessageToChannel({
        senderId: data.senderId,
        senderName: data.senderName,
        message: data.message,
        channel,
      });
      const line = chatTerminalLine(data);
      s.addTerminalLine(line.text, line.color);
      break;
    }

    case 'quest_update': {
      const quests = p.quests as typeof s.activeQuests | undefined;
      if (quests) {
        s.setActiveQuests(quests);
      }
      if (p.action === 'completed') {
        AudioManager.getInstance().play('quest_complete');
      }
      break;
    }

    case 'map': {
      const data = p as unknown as MapPayload;
      s.setMapData(data);
      break;
    }

    case 'npc_dialogue': {
      const data = p as unknown as NpcDialoguePayload;
      s.setNpcDialogue(data);
      break;
    }

    case 'level_up': {
      const level = p.level as number;
      s.addTerminalLine(`★ 升級了！目前等級: ${level} ★`, 'level-up');
      AudioManager.getInstance().play('level_up');
      break;
    }

    case 'skill_learned': {
      const name = p.name as string;
      const skillId = p.skillId as string | undefined;
      const learnedSkill = p.learnedSkill as LearnedSkill | undefined;
      if (skillId && learnedSkill && !s.skills.some(skill => skill.skillId === skillId)) {
        s.setSkills([...s.skills, learnedSkill]);
      }
      if (skillId) {
        s.addSkillLearnedNotice({
          skillId,
          name,
          description: (p.description as string | undefined) ?? '',
          learnLevel: (p.learnLevel as number | undefined) ?? 1,
          skillType: ((p.skillType as 'active' | 'passive' | undefined) ?? 'active'),
          usageContext: ((p.usageContext as 'combat' | 'field' | 'both' | undefined) ?? 'combat'),
          targetType: (p.targetType as string | undefined) ?? '',
          resourceCost: (p.resourceCost as number | undefined) ?? 0,
          cooldown: (p.cooldown as number | undefined) ?? 0,
          iconPath: p.iconPath as string | undefined,
        });
      }
      s.addTerminalLine(`學會了新技能: ${name}`, 'skill');
      break;
    }

    case 'class_change': {
      const className = p.className as string;
      s.addTerminalLine(`轉職成功！成為了 ${className}`, 'class-change');
      break;
    }

    case 'token_balance': {
      const balance = p.balance as number;
      if (typeof balance === 'number') {
        s.setArinovaTokenBalance(balance);
      }
      break;
    }

    case 'shop_items': {
      const data = p as unknown as ShopItemsPayload;
      s.setShopItems(data.items);
      s.setArinovaTokenBalance(data.balance);
      s.setShopOpen(true);
      AudioManager.getInstance().play('menu_open');
      break;
    }

    case 'purchase_result': {
      const data = p as unknown as PurchaseResultPayload;
      if (options.purchaseTimeoutRef.current) {
        clearTimeout(options.purchaseTimeoutRef.current);
        options.purchaseTimeoutRef.current = null;
      }
      s.setPurchaseLoading(false);
      if (data.success) {
        s.addTerminalLine(`[商店] ${data.message}`, 'system');
        if (data.newBalance !== undefined) {
          s.setArinovaTokenBalance(data.newBalance);
        }
      } else {
        s.addTerminalLine(`[商店] ${data.message}`, 'error');
      }
      break;
    }

    case 'transaction_history': {
      const data = p as unknown as TransactionHistoryPayload;
      s.setTransactionHistory(data.transactions);
      break;
    }

    case 'balance_update': {
      const data = p as unknown as BalanceUpdatePayload;
      s.setArinovaTokenBalance(data.balance);
      break;
    }

    case 'leaderboard_data': {
      const data = p as unknown as LeaderboardDataPayload;
      s.setLeaderboardData(data.category, data.entries);
      break;
    }

    case 'pong':
      break;

    default: {
      const text = (p.text as string) ?? JSON.stringify(p);
      s.addTerminalLine(text);
      break;
    }
  }
}
