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
      if (accessToken) {
        useGameStore.getState().setAccessToken(accessToken);
      }
      // Wait for WS to be connected before sending login
      const tryLogin = () => {
        const conn = useGameStore.getState().connection;
        if (conn === 'connected') {
          login(userId, undefined, accessToken);
        } else {
          // Retry every 500ms until connected (max 30 seconds)
          const unsub = useGameStore.subscribe((state) => {
            if (state.connection === 'connected') {
              unsub();
              login(userId, undefined, accessToken);
            }
          });
          // Fallback timeout
          setTimeout(() => unsub(), 30000);
        }
      };
      tryLogin();
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
