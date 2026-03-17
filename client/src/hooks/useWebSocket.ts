import { useRef, useCallback, useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';
import type {
  ClientMessage,
  ServerMessage,
  NarrativePayload,
  RoomPayload,
  StatusPayload,
  CombatStartPayload,
  CombatActionPayload,
  CombatEndPayload,
  InventoryPayload,
  PartyPayload,
  ChatPayload,
  MapPayload,
  ShopItemsPayload,
  PurchaseResultPayload,
  TransactionHistoryPayload,
  BalanceUpdatePayload,
} from '@game/shared';

const WS_URL = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;

const RECONNECT_BASE_DELAY = 1000;
const RECONNECT_MAX_DELAY = 30000;
const PING_INTERVAL = 25000;
const PURCHASE_TIMEOUT = 10000; // 10 seconds

export function useWebSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const purchaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  const store = useGameStore;

  const handleMessage = useCallback((msg: ServerMessage) => {
    const s = store.getState();
    const p = msg.payload as Record<string, unknown>;

    switch (msg.type) {
      case 'narrative': {
        const { text, color } = p as unknown as NarrativePayload;
        s.addTerminalLine(text, color);
        break;
      }

      case 'system': {
        const text = (p.text as string) ?? JSON.stringify(p);
        s.addTerminalLine(`[系統] ${text}`, 'system');
        break;
      }

      case 'error': {
        const text = (p.message as string) ?? (p.text as string) ?? JSON.stringify(p);
        s.addTerminalLine(`[錯誤] ${text}`, 'error');
        break;
      }

      case 'room': {
        const room = p as unknown as RoomPayload;
        s.setRoom(room);
        s.addTerminalLine('');
        s.addTerminalLine(`═══ ${room.name} ═══`, 'room-title');
        s.addTerminalLine(room.description, 'room-desc');
        if (room.exits.length > 0) {
          const dirs = room.exits.map((e) => e.direction).join(', ');
          s.addTerminalLine(`出口: ${dirs}`, 'exits');
        }
        if (room.npcs.length > 0) {
          const names = room.npcs.map((n) => `${n.name}(${n.title})`).join(', ');
          s.addTerminalLine(`NPC: ${names}`, 'npc');
        }
        if (room.monsters.length > 0) {
          const names = room.monsters.map((m) => `${m.name} Lv.${m.level}`).join(', ');
          s.addTerminalLine(`怪物: ${names}`, 'monster');
        }
        if (room.players.length > 0) {
          const names = room.players.map((pl) => pl.name).join(', ');
          s.addTerminalLine(`玩家: ${names}`, 'player');
        }
        if (room.items.length > 0) {
          const names = room.items.map((i) => i.name).join(', ');
          s.addTerminalLine(`物品: ${names}`, 'item');
        }
        break;
      }

      case 'status': {
        const status = p as unknown as StatusPayload;
        s.setCharacter(status.character);
        s.setDerivedStats(status.derived);
        s.setExpToNext(status.expToNext);
        s.setActiveEffects(status.effects);
        break;
      }

      case 'login_success': {
        s.addTerminalLine('登入成功！歡迎來到冒險世界。', 'system');
        s.setScreen('game');
        break;
      }

      case 'character_list': {
        const chars = p.characters as { id: string; name: string }[] | undefined;
        if (chars && chars.length > 0) {
          // 自動登入第一個角色
          send({ type: 'login', payload: { userId: chars[0].name, characterId: chars[0].id } });
        } else {
          s.addTerminalLine('[系統] 找不到此角色，請建立新角色。', 'error');
        }
        break;
      }

      case 'combat_start': {
        const data = p as unknown as CombatStartPayload;
        s.setInCombat(true);
        s.setCombat({
          combatId: data.combatId,
          round: data.round,
          playerTeam: data.playerTeam,
          enemyTeam: data.enemyTeam,
          turnTimer: data.turnTimer,
          log: [],
        });
        s.addTerminalLine('');
        s.addTerminalLine('═══ 戰鬥開始！ ═══', 'combat');
        const enemies = data.enemyTeam.map((e) => `${e.name} Lv.${e.level}`).join(', ');
        s.addTerminalLine(`敵人: ${enemies}`, 'combat');
        break;
      }

      case 'combat_action': {
        const data = p as unknown as CombatActionPayload;
        const combat = s.combat;
        if (combat) {
          s.setCombat({
            ...combat,
            round: data.round,
            playerTeam: data.playerTeam,
            enemyTeam: data.enemyTeam,
            log: [...combat.log, ...data.log],
          });
        }
        for (const line of data.log) {
          s.addTerminalLine(line, 'combat');
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
        // Clear combat state after a short delay
        setTimeout(() => store.getState().setCombat(null), 3000);
        break;
      }

      case 'inventory': {
        const data = p as unknown as InventoryPayload;
        s.setInventory(data.items);
        s.setEquipment(data.equipment);
        s.setInventoryCapacity(data.capacity);
        s.setGold(data.gold);
        break;
      }

      case 'party': {
        const data = p as unknown as PartyPayload;
        s.setParty(data.members);
        s.setPartyLeaderId(data.leaderId);
        break;
      }

      case 'chat': {
        const data = p as unknown as ChatPayload;
        s.addChatMessage({
          senderId: data.senderId,
          senderName: data.senderName,
          message: data.message,
          channel: data.channel,
        });
        const prefix =
          data.channel === 'global'
            ? '[全域]'
            : data.channel === 'party'
              ? '[隊伍]'
              : '[區域]';
        s.addTerminalLine(`${prefix} ${data.senderName}: ${data.message}`, `chat-${data.channel}`);
        break;
      }

      case 'map': {
        const data = p as unknown as MapPayload;
        s.setMapData(data);
        break;
      }

      case 'level_up': {
        const level = p.level as number;
        s.addTerminalLine(`★ 升級了！目前等級: ${level} ★`, 'level-up');
        break;
      }

      case 'skill_learned': {
        const name = p.name as string;
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
        break;
      }

      case 'purchase_result': {
        const data = p as unknown as PurchaseResultPayload;
        // Issue 2: 清除購買超時計時器
        if (purchaseTimeoutRef.current) {
          clearTimeout(purchaseTimeoutRef.current);
          purchaseTimeoutRef.current = null;
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

      case 'pong':
        break;

      default: {
        // Unknown message type – just log it
        const text = (p.text as string) ?? JSON.stringify(p);
        s.addTerminalLine(text);
        break;
      }
    }
  }, [store]);

  const send = useCallback((msg: ClientMessage) => {
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  }, []);

  const sendCommand = useCallback(
    (text: string) => {
      send({ type: 'command', payload: text });
    },
    [send],
  );

  const connect = useCallback(() => {
    if (!mountedRef.current) return;
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) return;

    store.getState().setConnection('connecting');

    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      if (!mountedRef.current) { ws.close(); return; }
      reconnectAttemptRef.current = 0;
      store.getState().setConnection('connected');
      store.getState().addTerminalLine('[系統] 已連線至伺服器', 'system');

      // Start ping
      if (pingTimerRef.current) clearInterval(pingTimerRef.current);
      pingTimerRef.current = setInterval(() => {
        send({ type: 'ping' });
      }, PING_INTERVAL);
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data as string) as ServerMessage;
        handleMessage(msg);
      } catch {
        console.error('Failed to parse server message:', event.data);
      }
    };

    ws.onclose = () => {
      if (pingTimerRef.current) { clearInterval(pingTimerRef.current); pingTimerRef.current = null; }
      // Issue 2: 斷線時重置購買狀態
      if (purchaseTimeoutRef.current) { clearTimeout(purchaseTimeoutRef.current); purchaseTimeoutRef.current = null; }
      const currentState = store.getState();
      if (currentState.purchaseLoading) {
        currentState.setPurchaseLoading(false);
        currentState.addTerminalLine('[商店] 連線中斷，購買操作已取消。', 'error');
      }
      store.getState().setConnection('disconnected');
      store.getState().clearAgentState();

      if (!mountedRef.current) return;

      // Auto-reconnect with exponential backoff
      const attempt = reconnectAttemptRef.current++;
      const delay = Math.min(RECONNECT_BASE_DELAY * 2 ** attempt, RECONNECT_MAX_DELAY);
      store.getState().addTerminalLine(`[系統] 連線中斷，${Math.round(delay / 1000)} 秒後重新連線...`, 'error');
      reconnectTimerRef.current = setTimeout(connect, delay);
    };

    ws.onerror = () => {
      // onclose will fire after this
    };
  }, [send, handleMessage, store]);

  const disconnect = useCallback(() => {
    if (reconnectTimerRef.current) { clearTimeout(reconnectTimerRef.current); reconnectTimerRef.current = null; }
    if (pingTimerRef.current) { clearInterval(pingTimerRef.current); pingTimerRef.current = null; }
    if (purchaseTimeoutRef.current) { clearTimeout(purchaseTimeoutRef.current); purchaseTimeoutRef.current = null; }
    wsRef.current?.close();
    wsRef.current = null;
  }, []);

  const login = useCallback(
    (userId: string, characterId?: string, accessToken?: string) => {
      send({ type: 'login', payload: { userId, characterId, accessToken } });
    },
    [send],
  );

  const createCharacter = useCallback(
    (name: string, userId: string) => {
      send({ type: 'create_character', payload: { name, userId } });
    },
    [send],
  );

  const sendShopOpen = useCallback(() => {
    send({ type: 'open_shop' });
  }, [send]);

  const sendPurchase = useCallback(
    (itemId: string) => {
      store.getState().setPurchaseLoading(true);
      send({ type: 'purchase', payload: { itemId } });

      // Issue 2: 設定購買超時 — 若 10 秒內未收到回應則重置
      if (purchaseTimeoutRef.current) {
        clearTimeout(purchaseTimeoutRef.current);
      }
      purchaseTimeoutRef.current = setTimeout(() => {
        purchaseTimeoutRef.current = null;
        const s = store.getState();
        if (s.purchaseLoading) {
          s.setPurchaseLoading(false);
          s.addTerminalLine('[商店] 購買請求逾時，請稍後再試。', 'error');
        }
      }, PURCHASE_TIMEOUT);
    },
    [send, store],
  );

  const sendGetTransactions = useCallback(() => {
    send({ type: 'get_transactions' });
  }, [send]);

  // Auto-connect on mount, cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    connect();
    return () => {
      mountedRef.current = false;
      disconnect();
    };
  }, [connect, disconnect]);

  return { send, sendCommand, connect, disconnect, login, createCharacter, sendShopOpen, sendPurchase, sendGetTransactions };
}
