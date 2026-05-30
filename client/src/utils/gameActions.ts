import { useGameStore, type LeaderboardTab } from '../stores/gameStore';

export function runCommand(command: string, echo?: string): void {
  useGameStore.getState().runCommand(command, echo);
}

export function requestOpenShop(): void {
  useGameStore.getState().requestOpenShop();
}

export function requestLeaderboard(category: LeaderboardTab): void {
  useGameStore.getState().requestLeaderboard(category);
}
