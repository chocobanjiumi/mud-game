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

class AudioManager {
  private static instance: AudioManager | null = null;
  private ctx: AudioContext | null = null;
  private masterVolume = 0.5;
  private volumes: Record<SoundCategory, number> = { bgm: 0.3, sfx: 0.7, ui: 0.5 };
  private muted = false;
  private bgmOscillator: OscillatorNode | null = null;
  private bgmGain: GainNode | null = null;

  private constructor() {}

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
    // Update live BGM gain if applicable
    if (category === 'bgm' && this.bgmGain && this.ctx) {
      const effective = this.getEffectiveVolume('bgm');
      this.bgmGain.gain.setValueAtTime(effective * 0.15, this.ctx.currentTime);
    }
  }

  setMasterVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    if (this.bgmGain && this.ctx) {
      const effective = this.getEffectiveVolume('bgm');
      this.bgmGain.gain.setValueAtTime(effective * 0.15, this.ctx.currentTime);
    }
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    if (this.bgmGain && this.ctx) {
      const effective = this.getEffectiveVolume('bgm');
      this.bgmGain.gain.setValueAtTime(effective * 0.15, this.ctx.currentTime);
    }
    return this.muted;
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
