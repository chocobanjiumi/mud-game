import { useState, useCallback } from 'react';
import { useGameStore } from '../stores/gameStore';
import AudioManager from '../audio/AudioManager';
import type { SoundCategory } from '../audio/AudioManager';

const CATEGORY_LABELS: { key: SoundCategory; label: string }[] = [
  { key: 'bgm', label: 'BGM' },
  { key: 'sfx', label: '音效' },
  { key: 'ui', label: 'UI' },
];

export default function AudioSettings() {
  const audioSettingsOpen = useGameStore((s) => s.audioSettingsOpen);
  const setAudioSettingsOpen = useGameStore((s) => s.setAudioSettingsOpen);
  const audioEnabled = useGameStore((s) => s.audioEnabled);
  const setAudioEnabled = useGameStore((s) => s.setAudioEnabled);
  const audioVolumes = useGameStore((s) => s.audioVolumes);
  const setAudioVolumes = useGameStore((s) => s.setAudioVolumes);

  const audio = AudioManager.getInstance();

  const [masterVol, setMasterVol] = useState(audio.getMasterVolume());

  const handleMasterChange = useCallback(
    (val: number) => {
      setMasterVol(val);
      audio.setMasterVolume(val);
    },
    [audio],
  );

  const handleCategoryChange = useCallback(
    (cat: SoundCategory, val: number) => {
      audio.setVolume(cat, val);
      setAudioVolumes({ ...audioVolumes, [cat]: val });
    },
    [audio, audioVolumes, setAudioVolumes],
  );

  const handleMuteToggle = useCallback(() => {
    const muted = audio.toggleMute();
    setAudioEnabled(!muted);
  }, [audio, setAudioEnabled]);

  if (!audioSettingsOpen) return null;

  return (
    <div className="audio-settings-panel">
      <div className="audio-settings-header">
        <span className="text-text-terminal font-bold text-xs">音效設定</span>
        <button
          className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
          onClick={() => setAudioSettingsOpen(false)}
        >
          [X]
        </button>
      </div>

      <div className="audio-settings-body">
        {/* Mute toggle */}
        <label className="audio-settings-row">
          <input
            type="checkbox"
            checked={audioEnabled}
            onChange={handleMuteToggle}
            className="audio-checkbox"
          />
          <span className="text-text-bright text-xs">{audioEnabled ? '音效開啟' : '靜音'}</span>
        </label>

        {/* Master volume */}
        <div className="audio-settings-slider-row">
          <span className="text-text-dim text-xs w-12">主音量</span>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(masterVol * 100)}
            onChange={(e) => handleMasterChange(Number(e.target.value) / 100)}
            className="audio-slider"
          />
          <span className="text-text-bright text-xs w-8 text-right tabular-nums">
            {Math.round(masterVol * 100)}
          </span>
        </div>

        {/* Per-category volumes */}
        {CATEGORY_LABELS.map(({ key, label }) => (
          <div key={key} className="audio-settings-slider-row">
            <span className="text-text-dim text-xs w-12">{label}</span>
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round((audioVolumes[key] ?? 0.5) * 100)}
              onChange={(e) => handleCategoryChange(key, Number(e.target.value) / 100)}
              className="audio-slider"
            />
            <span className="text-text-bright text-xs w-8 text-right tabular-nums">
              {Math.round((audioVolumes[key] ?? 0.5) * 100)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
