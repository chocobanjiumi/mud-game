// AudioManager - Singleton class using Web Audio API
// Generates placeholder sounds via oscillators (no audio files needed)

export type SoundCategory = 'bgm' | 'sfx' | 'ui';

interface SoundDef {
  type: SoundCategory;
  frequency: number;
  duration: number;
  loop?: boolean;
}

const SOUNDS: Record<string, SoundDef> = {
  // Combat
  attack_hit: { type: 'sfx', frequency: 200, duration: 0.1 },
  attack_miss: { type: 'sfx', frequency: 100, duration: 0.05 },
  critical_hit: { type: 'sfx', frequency: 400, duration: 0.15 },
  monster_die: { type: 'sfx', frequency: 300, duration: 0.2 },
  player_hurt: { type: 'sfx', frequency: 150, duration: 0.1 },
  level_up: { type: 'sfx', frequency: 600, duration: 0.5 },
  // UI
  button_click: { type: 'ui', frequency: 800, duration: 0.05 },
  menu_open: { type: 'ui', frequency: 500, duration: 0.08 },
  item_pickup: { type: 'ui', frequency: 700, duration: 0.1 },
  quest_complete: { type: 'ui', frequency: 550, duration: 0.3 },
  // BGM (simple oscillator loop)
  bgm_village: { type: 'bgm', frequency: 220, duration: 2.0, loop: true },
  bgm_combat: { type: 'bgm', frequency: 330, duration: 1.5, loop: true },
  bgm_dungeon: { type: 'bgm', frequency: 180, duration: 2.5, loop: true },
};

export type SoundId = keyof typeof SOUNDS;

export interface AudioSettingsState {
  enabled: boolean;
  masterVolume: number;
  volumes: Record<SoundCategory, number>;
}

const AUDIO_SETTINGS_KEY = 'mud.audio.settings.v1';
const DEFAULT_AUDIO_SETTINGS: AudioSettingsState = {
  enabled: true,
  masterVolume: 0.5,
  volumes: { bgm: 0.3, sfx: 0.7, ui: 0.5 },
};

function clampVolume(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.max(0, Math.min(1, value))
    : fallback;
}

function normalizeSettings(value: unknown): AudioSettingsState {
  const raw = value && typeof value === 'object' ? value as Partial<AudioSettingsState> : {};
  const rawVolumes = raw.volumes && typeof raw.volumes === 'object'
    ? raw.volumes as Partial<Record<SoundCategory, number>>
    : {};
  return {
    enabled: typeof raw.enabled === 'boolean' ? raw.enabled : DEFAULT_AUDIO_SETTINGS.enabled,
    masterVolume: clampVolume(raw.masterVolume, DEFAULT_AUDIO_SETTINGS.masterVolume),
    volumes: {
      bgm: clampVolume(rawVolumes.bgm, DEFAULT_AUDIO_SETTINGS.volumes.bgm),
      sfx: clampVolume(rawVolumes.sfx, DEFAULT_AUDIO_SETTINGS.volumes.sfx),
      ui: clampVolume(rawVolumes.ui, DEFAULT_AUDIO_SETTINGS.volumes.ui),
    },
  };
}

export function loadAudioSettings(): AudioSettingsState {
  if (typeof window === 'undefined') return DEFAULT_AUDIO_SETTINGS;
  try {
    const stored = window.localStorage.getItem(AUDIO_SETTINGS_KEY);
    return stored ? normalizeSettings(JSON.parse(stored)) : DEFAULT_AUDIO_SETTINGS;
  } catch {
    return DEFAULT_AUDIO_SETTINGS;
  }
}

class AudioManager {
  private static instance: AudioManager | null = null;
  private ctx: AudioContext | null = null;
  private masterVolume = DEFAULT_AUDIO_SETTINGS.masterVolume;
  private volumes: Record<SoundCategory, number> = { ...DEFAULT_AUDIO_SETTINGS.volumes };
  private muted = !DEFAULT_AUDIO_SETTINGS.enabled;
  private bgmOscillator: OscillatorNode | null = null;
  private bgmGain: GainNode | null = null;

  private constructor() {
    const settings = loadAudioSettings();
    this.masterVolume = settings.masterVolume;
    this.volumes = { ...settings.volumes };
    this.muted = !settings.enabled;
  }

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  private ensureContext(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private getEffectiveVolume(category: SoundCategory): number {
    if (this.muted) return 0;
    return this.masterVolume * this.volumes[category];
  }

  private persist(): void {
    if (typeof window === 'undefined') return;
    const settings: AudioSettingsState = {
      enabled: !this.muted,
      masterVolume: this.masterVolume,
      volumes: { ...this.volumes },
    };
    try {
      window.localStorage.setItem(AUDIO_SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      // Storage can be unavailable in private or embedded contexts.
    }
  }

  private updateLiveBgmGain(): void {
    if (this.bgmGain && this.ctx) {
      const effective = this.getEffectiveVolume('bgm');
      this.bgmGain.gain.setValueAtTime(effective * 0.15, this.ctx.currentTime);
    }
  }

  play(soundId: string): void {
    const def = SOUNDS[soundId];
    if (!def) return;

    const ctx = this.ensureContext();
    const volume = this.getEffectiveVolume(def.type);
    if (volume <= 0) return;

    if (def.type === 'bgm') {
      this.playBgm(def, ctx, volume);
      return;
    }

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(def.frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + def.duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + def.duration);
  }

  private playBgm(def: SoundDef, ctx: AudioContext, volume: number): void {
    this.stopBgm();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(def.frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume * 0.15, ctx.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);

    this.bgmOscillator = oscillator;
    this.bgmGain = gainNode;
  }

  stopBgm(): void {
    if (this.bgmOscillator) {
      try {
        this.bgmOscillator.stop();
      } catch {
        // already stopped
      }
      this.bgmOscillator.disconnect();
      this.bgmOscillator = null;
    }
    if (this.bgmGain) {
      this.bgmGain.disconnect();
      this.bgmGain = null;
    }
  }

  setVolume(category: SoundCategory, volume: number): void {
    this.volumes[category] = Math.max(0, Math.min(1, volume));
    if (category === 'bgm') this.updateLiveBgmGain();
    this.persist();
  }

  setMasterVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    this.updateLiveBgmGain();
    this.persist();
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    this.updateLiveBgmGain();
    this.persist();
    return this.muted;
  }

  setEnabled(enabled: boolean): void {
    this.muted = !enabled;
    this.updateLiveBgmGain();
    this.persist();
  }

  isEnabled(): boolean {
    return !this.muted;
  }

  isMuted(): boolean {
    return this.muted;
  }

  getMasterVolume(): number {
    return this.masterVolume;
  }

  getVolume(category: SoundCategory): number {
    return this.volumes[category];
  }

  getVolumes(): Record<SoundCategory, number> {
    return { ...this.volumes };
  }
}

export default AudioManager;
