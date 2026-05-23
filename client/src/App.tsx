import { useCallback } from 'react';
import { Arinova } from '@arinova-ai/spaces-sdk';
import { useGameStore } from './stores/gameStore';
import { useWebSocket } from './hooks/useWebSocket';
import LoginScreen from './components/LoginScreen';
import CreateCharacterScreen from './components/CreateCharacterScreen';
import GameScreen from './components/GameScreen';
import type { CreateCharacterPayload } from '@game/shared';

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
      } else {
        useGameStore.getState().setAccessToken(null);
        useGameStore.getState().setArinovaUser({ id: userId, name: userId });
      }
      // Wait for WS to be connected before sending login
      const doLogin = () => {
        login(userId, undefined, accessToken);
      };

      const conn = useGameStore.getState().connection;
      if (conn === 'connected') {
        doLogin();
      } else {
        let resolved = false;
        const unsub = useGameStore.subscribe((state) => {
          if (!resolved && state.connection === 'connected') {
            resolved = true;
            unsub();
            doLogin();
          }
        });
        // Poll as fallback
        const pollInterval = setInterval(() => {
          if (!resolved && useGameStore.getState().connection === 'connected') {
            resolved = true;
            unsub();
            clearInterval(pollInterval);
            doLogin();
          }
        }, 500);
        setTimeout(() => {
          unsub();
          clearInterval(pollInterval);
        }, 30000);
      }
    },
    [login],
  );

  const handleCommand = useCallback(
    (command: string, friendlyEcho?: string) => {
      // Add the command to terminal as echo
      useGameStore.getState().addTerminalLine(`> ${friendlyEcho ?? command}`, 'command');
      // Intercept legacy create command and open the full creation flow.
      const createMatch = command.match(/^create\s+(.+)$/i);
      if (createMatch) {
        useGameStore.getState().setScreen('create');
        return;
      }
      sendCommand(command);
    },
    [sendCommand, createCharacter],
  );

  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (screen === 'create') {
    return <CreateCharacterScreen onCreate={(payload: CreateCharacterPayload) => createCharacter(payload)} />;
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
