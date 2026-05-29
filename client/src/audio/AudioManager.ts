// AudioManager - Singleton class using MP3 BGM and Web Audio API SFX.

export type SoundCategory = 'bgm' | 'sfx' | 'ui';

interface SoundDef {
  type: SoundCategory;
  frequency?: number;
  duration?: number;
  src?: string;
  srcs?: string[];
  loop?: boolean;
}

const SOUNDS: Record<string, SoundDef> = {
  // Combat
  attack_hit: { type: 'sfx', src: '/mud/audio/sfx/attacks/attack_hit_1.wav' },
  attack_miss: {
    type: 'sfx',
    srcs: [
      '/mud/audio/sfx/attacks/attack_slash_1.ogg',
      '/mud/audio/sfx/attacks/attack_slash_2.ogg',
      '/mud/audio/sfx/attacks/attack_slash_3.ogg',
    ],
  },
  critical_hit: { type: 'sfx', src: '/mud/audio/sfx/attacks/attack_crit_1.ogg' },
  monster_die: { type: 'sfx', src: '/mud/audio/sfx/attacks/monster_die_1.wav' },
  player_hurt: { type: 'sfx', src: '/mud/audio/sfx/attacks/player_hurt_1.wav' },
  level_up: { type: 'sfx', frequency: 600, duration: 0.5 },
  // UI
  button_click: { type: 'ui', frequency: 800, duration: 0.05 },
  menu_open: { type: 'ui', frequency: 500, duration: 0.08 },
  item_pickup: { type: 'ui', frequency: 700, duration: 0.1 },
  quest_complete: { type: 'ui', frequency: 550, duration: 0.3 },
  // BGM
  bgm_temple: { type: 'bgm', src: '/mud/audio/bgm/bgm_temple.mp3', loop: true },
  bgm_town: { type: 'bgm', src: '/mud/audio/bgm/bgm_town.mp3', loop: true },
  bgm_wilderness: { type: 'bgm', src: '/mud/audio/bgm/bgm_wilderness.mp3', loop: true },
  bgm_combat_normal: { type: 'bgm', src: '/mud/audio/bgm/bgm_combat_normal.mp3', loop: true },
  bgm_village: { type: 'bgm', src: '/mud/audio/bgm/bgm_town.mp3', loop: true },
  bgm_combat: { type: 'bgm', src: '/mud/audio/bgm/bgm_combat_normal.mp3', loop: true },
  bgm_dungeon: { type: 'bgm', src: '/mud/audio/bgm/bgm_wilderness.mp3', loop: true },
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
  volumes: { bgm: 0.6, sfx: 0.7, ui: 0.5 },
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
  private bgmAudio: HTMLAudioElement | null = null;
  private currentBgmId: string | null = null;
  private desiredBgmId: string | null = null;
  private pendingBgmId: string | null = null;
  private unlockListenersAttached = false;

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
    const effective = this.getEffectiveVolume('bgm');
    if (this.bgmAudio) {
      this.bgmAudio.volume = effective;
    }
    if (this.bgmGain && this.ctx) {
      this.bgmGain.gain.setValueAtTime(effective * 0.15, this.ctx.currentTime);
    }
  }

  play(soundId: string): void {
    const def = SOUNDS[soundId];
    if (!def) return;
    if (def.type === 'bgm') {
      this.desiredBgmId = soundId;
    }

    const volume = this.getEffectiveVolume(def.type);
    if (volume <= 0) return;

    if (def.type === 'bgm') {
      this.playBgm(soundId, def, volume);
      return;
    }

    const src = this.pickSource(def);
    if (src) {
      this.playSfxFile(src, volume);
      return;
    }

    const ctx = this.ensureContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(def.frequency ?? 440, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (def.duration ?? 0.1));

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + (def.duration ?? 0.1));
  }

  private pickSource(def: SoundDef): string | null {
    if (def.srcs?.length) {
      return def.srcs[Math.floor(Math.random() * def.srcs.length)];
    }
    return def.src ?? null;
  }

  private playSfxFile(src: string, volume: number): void {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.preload = 'auto';
    const promise = audio.play();
    if (promise) {
      promise.catch(() => {
        // Short SFX can be dropped if the browser has not unlocked audio yet.
      });
    }
  }

  private playBgm(soundId: string, def: SoundDef, volume: number): void {
    if (this.currentBgmId === soundId && this.bgmAudio && !this.bgmAudio.paused) {
      this.bgmAudio.volume = volume;
      return;
    }

    if (def.src) {
      this.playBgmFile(soundId, def, volume);
      return;
    }

    const ctx = this.ensureContext();
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
    this.currentBgmId = soundId;
  }

  private playBgmFile(soundId: string, def: SoundDef, volume: number): void {
    this.stopBgm();

    const audio = new Audio(def.src);
    audio.loop = Boolean(def.loop);
    audio.volume = volume;
    audio.preload = 'auto';

    this.bgmAudio = audio;
    this.currentBgmId = soundId;
    this.pendingBgmId = null;

    const promise = audio.play();
    if (promise) {
      promise.catch(() => {
        this.pendingBgmId = soundId;
        this.attachUnlockListeners();
      });
    }
  }

  unlock(): void {
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }

    const target = this.pendingBgmId ?? this.desiredBgmId;
    if (!target) return;

    this.pendingBgmId = null;
    if (this.bgmAudio && this.currentBgmId === target && this.bgmAudio.paused) {
      const promise = this.bgmAudio.play();
      if (promise) {
        promise.catch(() => {
          this.pendingBgmId = target;
          this.attachUnlockListeners();
        });
      }
      return;
    }

    this.play(target);
  }

  private attachUnlockListeners(): void {
    if (this.unlockListenersAttached || typeof window === 'undefined') return;
    this.unlockListenersAttached = true;

    const retry = () => {
      this.unlockListenersAttached = false;
      window.removeEventListener('pointerdown', retry);
      window.removeEventListener('keydown', retry);
      window.removeEventListener('touchstart', retry);

      const pending = this.pendingBgmId;
      if (!pending) return;
      this.pendingBgmId = null;
      this.unlock();
    };

    window.addEventListener('pointerdown', retry, { once: true });
    window.addEventListener('keydown', retry, { once: true });
    window.addEventListener('touchstart', retry, { once: true });
  }

  stopBgm(): void {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmAudio.removeAttribute('src');
      this.bgmAudio.load();
      this.bgmAudio = null;
    }
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
    this.currentBgmId = null;
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
