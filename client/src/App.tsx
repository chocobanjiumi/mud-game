import { useCallback } from 'react';
import { Arinova } from '@arinova-ai/spaces-sdk';
import { useGameStore } from './stores/gameStore';
import { useWebSocket } from './hooks/useWebSocket';
import LoginScreen from './components/LoginScreen';
import GameScreen from './components/GameScreen';

// Initialize Arinova SDK on app load
const ARINOVA_APP_ID = import.meta.env.VITE_ARINOVA_APP_ID || 'mud-game';
Arinova.init({ appId: ARINOVA_APP_ID });

export default function App() {
  const screen = useGameStore((s) => s.screen);
  const { sendCommand, login, createCharacter } = useWebSocket();

  const handleLogin = useCallback(
    (userId: string, accessToken?: string) => {
      login(userId, undefined, accessToken);
    },
    [login],
  );

  const handleCreateCharacter = useCallback(
    (name: string, userId: string) => {
      createCharacter(name, userId);
    },
    [createCharacter],
  );

  const handleCommand = useCallback(
    (command: string) => {
      // Add the command to terminal as echo
      useGameStore.getState().addTerminalLine(`> ${command}`, 'command');
      sendCommand(command);
    },
    [sendCommand],
  );

  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} onCreateCharacter={handleCreateCharacter} />;
  }

  return <GameScreen onCommand={handleCommand} />;
}
