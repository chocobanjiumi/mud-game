import { useRef, useCallback, useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';
import type {
  ClientMessage,
  CreateCharacterPayload,
  ServerMessage,
} from '@game/shared';
import { handleServerMessage } from '../ws/messageHandlers';

const WS_URL = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;

const RECONNECT_BASE_DELAY = 1000;
const RECONNECT_MAX_DELAY = 30000;
const MAX_RECONNECT_ATTEMPTS = 10;
const PING_INTERVAL = 25000;
const PURCHASE_TIMEOUT = 10000; // 10 seconds

export function useWebSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const purchaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);
  const isReconnectingRef = useRef(false);
  const storedCredentialsRef = useRef<{ userId: string; characterId?: string; accessToken?: string } | null>(null);

  const store = useGameStore;

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
      const wasReconnecting = isReconnectingRef.current;
      reconnectAttemptRef.current = 0;
      isReconnectingRef.current = false;
      store.getState().setConnection('connected');

      if (wasReconnecting) {
        store.getState().addTerminalLine('[系統] 重新連線成功！', 'system');
        // 自動重新登入
        const creds = storedCredentialsRef.current;
        if (creds) {
          send({ type: 'login', payload: { userId: creds.userId, characterId: creds.characterId, accessToken: creds.accessToken } });
        }
      } else {
        store.getState().addTerminalLine('[系統] 已連線至伺服器', 'system');
      }

      // Start ping
      if (pingTimerRef.current) clearInterval(pingTimerRef.current);
      pingTimerRef.current = setInterval(() => {
        send({ type: 'ping' });
      }, PING_INTERVAL);
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data as string) as ServerMessage;
        handleServerMessage(msg, { purchaseTimeoutRef });
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

      // Auto-reconnect with exponential backoff (max 10 attempts)
      const attempt = reconnectAttemptRef.current++;
      if (attempt >= MAX_RECONNECT_ATTEMPTS) {
        store.getState().addTerminalLine('[系統] 重新連線失敗次數過多，請手動重新整理頁面。', 'error');
        isReconnectingRef.current = false;
        return;
      }
      isReconnectingRef.current = true;
      const delay = Math.min(RECONNECT_BASE_DELAY * 2 ** attempt, RECONNECT_MAX_DELAY);
      store.getState().addTerminalLine(`[系統] 連線中斷，${Math.round(delay / 1000)} 秒後重新連線...（第 ${attempt + 1}/${MAX_RECONNECT_ATTEMPTS} 次）`, 'error');
      reconnectTimerRef.current = setTimeout(connect, delay);
    };

    ws.onerror = () => {
      // onclose will fire after this
    };
  }, [send, store]);

  const disconnect = useCallback(() => {
    if (reconnectTimerRef.current) { clearTimeout(reconnectTimerRef.current); reconnectTimerRef.current = null; }
    if (pingTimerRef.current) { clearInterval(pingTimerRef.current); pingTimerRef.current = null; }
    if (purchaseTimeoutRef.current) { clearTimeout(purchaseTimeoutRef.current); purchaseTimeoutRef.current = null; }
    wsRef.current?.close();
    wsRef.current = null;
  }, []);

  const login = useCallback(
    (userId: string, characterId?: string, accessToken?: string) => {
      // 儲存登入憑證以供斷線重連使用
      storedCredentialsRef.current = { userId, characterId, accessToken };
      send({ type: 'login', payload: { userId, characterId, accessToken } });
    },
    [send],
  );

  const selectCharacter = useCallback(
    (characterId: string) => {
      const creds = storedCredentialsRef.current;
      if (!creds) {
        store.getState().addTerminalLine('[錯誤] 缺少登入資訊，請重新登入。', 'error');
        store.getState().setScreen('login');
        return;
      }

      storedCredentialsRef.current = { ...creds, characterId };
      send({
        type: 'login',
        payload: {
          userId: creds.userId,
          characterId,
          accessToken: creds.accessToken,
        },
      });
    },
    [send, store],
  );

  const listCharacters = useCallback(() => {
    const creds = storedCredentialsRef.current;
    if (creds) {
      storedCredentialsRef.current = { ...creds, characterId: undefined };
    }
    send({ type: 'list_characters' });
  }, [send]);

  const createCharacter = useCallback(
    (payload: CreateCharacterPayload) => {
      send({ type: 'create_character', payload });
    },
    [send],
  );

  const deleteCharacter = useCallback(
    (characterId: string, confirmName: string) => {
      send({ type: 'delete_character', payload: { characterId, confirmName } });
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

  const sendQuestList = useCallback(() => {
    send({ type: 'command', payload: 'quests' });
  }, [send]);

  const sendChat = useCallback(
    (channel: string, message: string) => {
      send({ type: 'command', payload: `chat ${channel} ${message}` });
    },
    [send],
  );

  const sendLeaderboardRequest = useCallback(
    (category: string) => {
      send({ type: 'command', payload: `leaderboard ${category}` });
    },
    [send],
  );

  // Auto-connect on mount, cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    connect();
    return () => {
      mountedRef.current = false;
      disconnect();
    };
  }, [connect, disconnect]);

  return { send, sendCommand, connect, disconnect, login, selectCharacter, listCharacters, createCharacter, deleteCharacter, sendShopOpen, sendPurchase, sendGetTransactions, sendQuestList, sendChat, sendLeaderboardRequest };
}
