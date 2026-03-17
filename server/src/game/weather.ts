// 天氣與日夜循環系統

import type { ElementType } from '@game/shared';

// ============================================================
//  天氣類型
// ============================================================

export type WeatherType = 'sunny' | 'rainy' | 'snowy' | 'foggy';
export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night';

export interface DamageModifiers {
  /** 元素傷害倍率修正 (element -> multiplier, e.g. 'fire' -> 0.8) */
  elementMultipliers: Partial<Record<ElementType, number>>;
  /** 命中率修正 (加減百分比) */
  hitRateBonus: number;
}

const WEATHER_NAMES: Record<WeatherType, string> = {
  sunny: '晴天',
  rainy: '雨天',
  snowy: '雪天',
  foggy: '霧天',
};

const TIME_NAMES: Record<TimeOfDay, string> = {
  dawn: '黎明',
  day: '白天',
  dusk: '黃昏',
  night: '夜晚',
};

const TIME_CYCLE: TimeOfDay[] = ['dawn', 'day', 'dusk', 'night'];
const WEATHER_TYPES: WeatherType[] = ['sunny', 'rainy', 'snowy', 'foggy'];

/** 天氣切換間隔：30 分鐘 */
const WEATHER_INTERVAL_MS = 30 * 60 * 1000;
/** 日夜循環間隔：15 分鐘 */
const TIME_INTERVAL_MS = 15 * 60 * 1000;

// ============================================================
//  天氣描述
// ============================================================

const WEATHER_DESCRIPTIONS: Record<WeatherType, Record<TimeOfDay, string>> = {
  sunny: {
    dawn: '晨曦灑落大地，金色的陽光驅散了夜的寒意，露珠在草葉上閃爍。',
    day: '萬里無雲的晴天，陽光溫暖地照耀著大地，微風輕拂。',
    dusk: '夕陽西沉，天空染上橙紅色的晚霞，飛鳥歸巢。',
    night: '繁星點點的晴朗夜空，月光如水般灑落，照亮了前方的道路。',
  },
  rainy: {
    dawn: '陰沉的黎明中，細雨紛飛，天地間籠罩著一層朦朧的水氣。',
    day: '傾盆大雨嘩嘩落下，雨幕遮擋了視線，地面泥濘不堪。',
    dusk: '雨勢在黃昏中稍歇，但陰雲仍舊低垂，空氣中瀰漫著潮濕的氣息。',
    night: '雨夜漆黑，雨點不斷敲打著萬物，偶爾一道閃電劃破夜空。',
  },
  snowy: {
    dawn: '白茫茫的黎明，鵝毛大雪從天而降，世界被覆蓋上一層銀白。',
    day: '紛飛的雪花在日光中閃爍，大地銀裝素裹，寒風刺骨。',
    dusk: '雪花在暮色中飄舞，橙紅的夕陽將雪地映照成淡紫色。',
    night: '寂靜的雪夜，雪花無聲落下，月光映照著白雪，宛如仙境。',
  },
  foggy: {
    dawn: '濃霧瀰漫的黎明，伸手不見五指，四周的景物都隱沒在白霧之中。',
    day: '即使日正當中，濃霧依然不散，能見度極低，萬物的輪廓都變得模糊。',
    dusk: '霧氣在黃昏中更加濃重，夕陽的光芒無法穿透迷霧，四周一片朦朧。',
    night: '霧夜深沉，月光被濃霧吞噬，只能隱約看見前方數步的距離。',
  },
};

// ============================================================
//  WeatherManager
// ============================================================

export class WeatherManager {
  private currentWeather: WeatherType = 'sunny';
  private currentTime: TimeOfDay = 'day';
  private weatherTimer: ReturnType<typeof setInterval> | null = null;
  private timeTimer: ReturnType<typeof setInterval> | null = null;

  /** 初始化並啟動計時器 */
  init(): void {
    // 隨機初始天氣
    this.currentWeather = WEATHER_TYPES[Math.floor(Math.random() * WEATHER_TYPES.length)];
    // 根據伺服器啟動時間決定初始時段
    const minutesSinceHour = new Date().getMinutes();
    const timeIndex = Math.floor(minutesSinceHour / 15) % 4;
    this.currentTime = TIME_CYCLE[timeIndex];

    // 天氣切換計時器（每 30 分鐘）
    this.weatherTimer = setInterval(() => {
      this.changeWeather();
    }, WEATHER_INTERVAL_MS);

    // 日夜循環計時器（每 15 分鐘）
    this.timeTimer = setInterval(() => {
      this.advanceTime();
    }, TIME_INTERVAL_MS);

    console.log(`[Weather] 初始化完成 - 天氣: ${WEATHER_NAMES[this.currentWeather]}, 時段: ${TIME_NAMES[this.currentTime]}`);
  }

  /** 關閉計時器 */
  shutdown(): void {
    if (this.weatherTimer) {
      clearInterval(this.weatherTimer);
      this.weatherTimer = null;
    }
    if (this.timeTimer) {
      clearInterval(this.timeTimer);
      this.timeTimer = null;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  getCurrentWeather(): WeatherType {
    return this.currentWeather;
  }

  getCurrentTimeOfDay(): TimeOfDay {
    return this.currentTime;
  }

  getWeatherName(): string {
    return WEATHER_NAMES[this.currentWeather];
  }

  getTimeName(): string {
    return TIME_NAMES[this.currentTime];
  }

  // ──────────────────────────────────────────────────────────
  //  天氣修正（戰鬥用）
  // ──────────────────────────────────────────────────────────

  /**
   * 取得天氣對傷害的修正
   * - rainy: fire -20%, water(ice) +10%
   * - snowy: ice +10%
   * - foggy: hit rate -10%
   * - sunny: no modifier
   */
  getWeatherModifiers(): DamageModifiers {
    const result: DamageModifiers = {
      elementMultipliers: {},
      hitRateBonus: 0,
    };

    switch (this.currentWeather) {
      case 'rainy':
        result.elementMultipliers.fire = -0.20;   // fire damage -20%
        result.elementMultipliers.ice = 0.10;      // water/ice damage +10%
        break;
      case 'snowy':
        result.elementMultipliers.ice = 0.10;      // ice damage +10%
        break;
      case 'foggy':
        result.hitRateBonus = -10;                 // hit rate -10%
        break;
      case 'sunny':
        // no modifier
        break;
    }

    return result;
  }

  /**
   * 取得日夜時段對傷害的修正
   * - night: dark +15%, light -15%
   * - day: light +5%
   * - dawn/dusk: no modifier
   */
  getTimeModifiers(): DamageModifiers {
    const result: DamageModifiers = {
      elementMultipliers: {},
      hitRateBonus: 0,
    };

    switch (this.currentTime) {
      case 'night':
        result.elementMultipliers.dark = 0.15;     // dark +15%
        result.elementMultipliers.light = -0.15;   // light -15%
        break;
      case 'day':
        result.elementMultipliers.light = 0.05;    // light +5%
        break;
      case 'dawn':
      case 'dusk':
        // no modifier
        break;
    }

    return result;
  }

  /**
   * 取得合併的天氣+時段修正
   * 用於戰鬥中一次性取得所有修正
   */
  getCombinedModifiers(): DamageModifiers {
    const weather = this.getWeatherModifiers();
    const time = this.getTimeModifiers();

    const combined: DamageModifiers = {
      elementMultipliers: { ...weather.elementMultipliers },
      hitRateBonus: weather.hitRateBonus + time.hitRateBonus,
    };

    // 合併元素修正
    for (const [elem, val] of Object.entries(time.elementMultipliers) as [ElementType, number][]) {
      combined.elementMultipliers[elem] = (combined.elementMultipliers[elem] ?? 0) + val;
    }

    return combined;
  }

  /**
   * 對指定元素的傷害取得倍率 (1.0 為無修正)
   * 用於快速在 damage calculation 中疊加
   */
  getElementDamageMultiplier(element: ElementType): number {
    if (element === 'none') return 1.0;
    const mods = this.getCombinedModifiers();
    const bonus = mods.elementMultipliers[element] ?? 0;
    return 1.0 + bonus;
  }

  /**
   * 取得命中率加成
   */
  getHitRateBonus(): number {
    return this.getCombinedModifiers().hitRateBonus;
  }

  // ──────────────────────────────────────────────────────────
  //  描述
  // ──────────────────────────────────────────────────────────

  /** 取得當前天氣+時段的氛圍描述文字 */
  getDescription(): string {
    return WEATHER_DESCRIPTIONS[this.currentWeather][this.currentTime];
  }

  /** 取得用於 weather 指令的完整狀態報告 */
  getStatusReport(): string {
    const weatherMods = this.getWeatherModifiers();
    const timeMods = this.getTimeModifiers();

    const lines: string[] = [
      `══ 天氣與時段 ══`,
      ``,
      `🌤 天氣：${WEATHER_NAMES[this.currentWeather]}`,
      `🕐 時段：${TIME_NAMES[this.currentTime]}`,
      ``,
      this.getDescription(),
      ``,
    ];

    // 天氣效果
    const weatherEffects: string[] = [];
    for (const [elem, val] of Object.entries(weatherMods.elementMultipliers)) {
      const pct = val > 0 ? `+${Math.round(val * 100)}%` : `${Math.round(val * 100)}%`;
      weatherEffects.push(`${this.elementChinese(elem as ElementType)}傷害 ${pct}`);
    }
    if (weatherMods.hitRateBonus !== 0) {
      const pct = weatherMods.hitRateBonus > 0 ? `+${weatherMods.hitRateBonus}%` : `${weatherMods.hitRateBonus}%`;
      weatherEffects.push(`命中率 ${pct}`);
    }
    if (weatherEffects.length > 0) {
      lines.push(`天氣效果：${weatherEffects.join('、')}`);
    } else {
      lines.push(`天氣效果：無`);
    }

    // 時段效果
    const timeEffects: string[] = [];
    for (const [elem, val] of Object.entries(timeMods.elementMultipliers)) {
      const pct = val > 0 ? `+${Math.round(val * 100)}%` : `${Math.round(val * 100)}%`;
      timeEffects.push(`${this.elementChinese(elem as ElementType)}傷害 ${pct}`);
    }
    if (timeEffects.length > 0) {
      lines.push(`時段效果：${timeEffects.join('、')}`);
    } else {
      lines.push(`時段效果：無`);
    }

    return lines.join('\n');
  }

  // ──────────────────────────────────────────────────────────
  //  內部
  // ──────────────────────────────────────────────────────────

  private changeWeather(): void {
    const prev = this.currentWeather;
    // 隨機選擇新天氣（可能與當前相同）
    this.currentWeather = WEATHER_TYPES[Math.floor(Math.random() * WEATHER_TYPES.length)];
    if (prev !== this.currentWeather) {
      console.log(`[Weather] 天氣變化：${WEATHER_NAMES[prev]} → ${WEATHER_NAMES[this.currentWeather]}`);
    }
  }

  private advanceTime(): void {
    const idx = TIME_CYCLE.indexOf(this.currentTime);
    this.currentTime = TIME_CYCLE[(idx + 1) % TIME_CYCLE.length];
    console.log(`[Weather] 時段變化：${TIME_NAMES[this.currentTime]}`);
  }

  private elementChinese(elem: ElementType): string {
    const map: Record<string, string> = {
      fire: '火',
      ice: '冰',
      lightning: '雷',
      light: '光',
      dark: '暗',
      nature: '自然',
      none: '無',
    };
    return map[elem] ?? elem;
  }
}
