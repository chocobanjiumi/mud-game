import { useCallback, useEffect, useRef } from 'react';
import { Arinova } from '@arinova-ai/spaces-sdk';
import { useGameStore } from './stores/gameStore';
import { useWebSocket } from './hooks/useWebSocket';
import LoginScreen from './components/LoginScreen';
import GameScreen from './components/GameScreen';

// Initialize Arinova SDK on app load
const ARINOVA_APP_ID = import.meta.env.VITE_ARINOVA_APP_ID || 'mud-game';
const ARINOVA_BASE_URL = import.meta.env.VITE_ARINOVA_BASE_URL || 'https://api.chat-staging.arinova.ai';
Arinova.init({ appId: ARINOVA_APP_ID, baseUrl: ARINOVA_BASE_URL });

export default function App() {
  const screen = useGameStore((s) => s.screen);
  const { sendCommand, login, createCharacter, sendShopOpen, sendPurchase, sendGetTransactions, sendChat } = useWebSocket();

  const handleLogin = useCallback(
    (userId: string, accessToken?: string) => {
      // Store the access token for agent API calls
      if (accessToken) {
        useGameStore.getState().setAccessToken(accessToken);
      }
      login(userId, undefined, accessToken);
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
