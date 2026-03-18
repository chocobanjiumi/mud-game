import { useCallback, useEffect, useRef } from 'react';
import { Arinova } from '@arinova-ai/spaces-sdk';
import { useGameStore } from './stores/gameStore';
import { useWebSocket } from './hooks/useWebSocket';
import LoginScreen from './components/LoginScreen';
import GameScreen from './components/GameScreen';

// Initialize Arinova SDK on app load (v0.1.3 constructor pattern)
const ARINOVA_APP_ID = import.meta.env.VITE_ARINOVA_APP_ID || 'mud-game-671a1dd6';
const ARINOVA_ENDPOINT = import.meta.env.VITE_ARINOVA_BASE_URL || 'https://api.chat-staging.arinova.ai';
export const arinova = new Arinova({
  appId: ARINOVA_APP_ID,
  endpoint: ARINOVA_ENDPOINT,
  scope: 'profile agents economy',
  redirectUri: window.location.origin + '/mud/',
});

export default function App() {
  const screen = useGameStore((s) => s.screen);
  const { sendCommand, login, createCharacter, sendShopOpen, sendPurchase, sendGetTransactions, sendChat } = useWebSocket();

  const handleLogin = useCallback(
    (userId: string, accessToken?: string) => {
      console.log('[MUD] handleLogin called:', { userId, accessToken: accessToken ? '***' : 'none', wsConnection: useGameStore.getState().connection });
      if (accessToken) {
        useGameStore.getState().setAccessToken(accessToken);
      }
      // Wait for WS to be connected before sending login
      const doLogin = () => {
        console.log('[MUD] doLogin — sending login command now');
        login(userId, undefined, accessToken);
      };

      const conn = useGameStore.getState().connection;
      if (conn === 'connected') {
        console.log('[MUD] WS already connected, sending login immediately');
        doLogin();
      } else {
        console.log('[MUD] WS not connected yet (state:', conn, '), setting up subscribe + polling');
        // Use both subscribe AND polling for reliability
        let resolved = false;
        const unsub = useGameStore.subscribe((state) => {
          if (!resolved && state.connection === 'connected') {
            resolved = true;
            unsub();
            console.log('[MUD] WS connected (via subscribe), sending login');
            doLogin();
          }
        });
        // Also poll every 500ms as fallback
        const pollInterval = setInterval(() => {
          const s = useGameStore.getState().connection;
          console.log('[MUD] polling WS state:', s);
          if (!resolved && s === 'connected') {
            resolved = true;
            unsub();
            clearInterval(pollInterval);
            console.log('[MUD] WS connected (via poll), sending login');
            doLogin();
          }
        }, 500);
        // Cleanup after 30 seconds
        setTimeout(() => {
          if (!resolved) {
            console.error('[MUD] WS never connected after 30s, giving up');
          }
          unsub();
          clearInterval(pollInterval);
        }, 30000);
      }
    },
    [login],
  );

  const handleCommand = useCallback(
    (command: string) => {
      // Add the command to terminal as echo
      useGameStore.getState().addTerminalLine(`> ${command}`, 'command');
      sendCommand(command);
    },
    [sendCommand],
  );

  // Show agent select modal after login success for authenticated users
  const prevScreenRef = useRef(screen);
  useEffect(() => {
    if (prevScreenRef.current === 'login' && screen === 'game') {
      const state = useGameStore.getState();
      if (state.accessToken && !state.selectedAgent) {
        state.setShowAgentSelect(true);
      }
    }
    prevScreenRef.current = screen;
  }, [screen]);

  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <GameScreen
      onCommand={handleCommand}
      onOpenShop={sendShopOpen}
      onPurchase={sendPurchase}
      onGetTransactions={sendGetTransactions}
      onSendChat={sendChat}
    />
  );
}
