import { describe, expect, it } from 'vitest';
import { TutorialManager, TUTORIAL_STEPS } from '../game/tutorial.js';

describe('TutorialManager text quality', () => {
  it('keeps every tutorial hint actionable enough for onboarding', () => {
    expect(TUTORIAL_STEPS.length).toBeGreaterThan(0);

    for (const step of TUTORIAL_STEPS) {
      expect(step.hint).toMatch(/當下目標|目標/u);
      expect(step.hint).toMatch(/輸入|點擊|選擇|打開|指令列|戰鬥面板|房間詳細面板|NPC 對話/u);
      expect(step.hint).toMatch(/成功條件|完成條件|成功/u);
      expect(step.hint).toMatch(/如果|失敗|不足|不存在|沒有|不符|阻擋|下一步/u);
      expect([...step.hint].filter(char => /[\u3400-\u9fff]/u.test(char)).length).toBeGreaterThanOrEqual(30);
    }
  });

  it('returns the same detailed hint through the manager API', () => {
    const tutorialMgr = new TutorialManager();

    expect(tutorialMgr.getHintMessage(0)).toBe(TUTORIAL_STEPS[0].hint);
    expect(tutorialMgr.getHintMessage(TUTORIAL_STEPS.length)).toBe('教學已結束。');
  });
});
