import { useGameStore } from '../stores/gameStore';
import type { SkillLearnedNotice } from '../stores/gameStore';
import { getPublicAssetPath } from '../utils/assetImages';

const targetLabels: Record<string, string> = {
  single_enemy: '單體敵人',
  all_enemies: '所有敵人',
  self: '自己',
  single_ally: '單體隊友',
  all_allies: '所有隊友',
};

const usageLabels = {
  combat: '戰鬥',
  field: '平時',
  both: '兩者',
};

export default function SkillLearnedModal() {
  const notice = useGameStore((s) => s.skillLearnedNotices[0]);
  const remaining = useGameStore((s) => Math.max(0, s.skillLearnedNotices.length - 1));
  const dismiss = useGameStore((s) => s.dismissSkillLearnedNotice);

  if (!notice) return null;

  return <SkillLearnedModalView notice={notice} remaining={remaining} onDismiss={dismiss} />;
}

export function SkillLearnedModalView({
  notice,
  remaining,
  onDismiss,
}: {
  notice: SkillLearnedNotice;
  remaining: number;
  onDismiss: () => void;
}) {
  const iconPath = getPublicAssetPath(notice.iconPath) ?? '/mud/images/skills/icons/starter_blank_01.png';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-lg rounded-md border border-border-glow bg-bg-secondary p-5 text-text-bright shadow-2xl shadow-black/50">
        <div className="mb-2 text-xs uppercase tracking-wide text-text-dim">Skill Learned</div>
        <div className="flex items-center gap-4">
          <img
            src={iconPath}
            alt=""
            className="h-20 w-20 rounded border border-border-glow object-cover"
            onError={(event) => {
              event.currentTarget.src = '/mud/images/skills/icons/starter_blank_01.png';
            }}
          />
          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-text-terminal text-glow">{notice.name}</h2>
            <div className="mt-1 text-xs text-text-dim">{notice.skillId}</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
          <InfoCell label="等級" value={`Lv.${notice.learnLevel}`} />
          <InfoCell label="型態" value={notice.skillType === 'passive' ? '被動' : '主動'} />
          <InfoCell label="場景" value={usageLabels[notice.usageContext]} />
          <InfoCell label="目標" value={targetLabels[notice.targetType] ?? notice.targetType} />
          <InfoCell label="消耗/CD" value={`${notice.resourceCost} / ${notice.cooldown}`} />
        </div>

        {notice.description && (
          <p className="mt-4 max-h-40 overflow-y-auto text-sm leading-6 text-text-dim">{notice.description}</p>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border-dim pt-4">
          <div className="text-xs text-text-dim">
            {remaining > 0 ? `還有 ${remaining} 個新技能` : '技能已加入快捷列與技能列表'}
          </div>
          <button
            type="button"
            onClick={onDismiss}
            className="rounded-md bg-text-terminal px-4 py-2 font-bold text-bg-primary transition-colors hover:bg-text-bright"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary px-3 py-2">
      <div className="text-[11px] text-text-dim">{label}</div>
      <div className="mt-1 font-bold text-text-bright">{value}</div>
    </div>
  );
}
