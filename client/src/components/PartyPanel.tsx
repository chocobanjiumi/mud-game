import { useGameStore } from '../stores/gameStore';

const CLASS_NAMES: Record<string, string> = {
  adventurer: '冒險者',
  swordsman: '劍士',
  mage: '法師',
  ranger: '遊俠',
  priest: '祭司',
  knight: '騎士',
  berserker: '狂戰士',
  sword_saint: '劍聖',
  archmage: '大魔導師',
  warlock: '術士',
  chronomancer: '時空法師',
  marksman: '神射手',
  assassin: '刺客',
  beast_master: '獸王',
  high_priest: '大祭司',
  druid: '德魯伊',
  inquisitor: '審判者',
};

export default function PartyPanel() {
  const showParty = useGameStore((s) => s.showParty);
  const toggleParty = useGameStore((s) => s.toggleParty);
  const party = useGameStore((s) => s.party);
  const partyLeaderId = useGameStore((s) => s.partyLeaderId);

  if (!showParty) return null;

  return (
    <div className="bg-bg-secondary border-l border-border-dim w-52 flex flex-col panel-enter">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border-dim">
        <span className="text-xs font-bold text-text-terminal">隊伍</span>
        <button
          onClick={toggleParty}
          className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
        >
          [關閉]
        </button>
      </div>

      {/* Members */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
        {party.length === 0 ? (
          <div className="text-xs text-text-dim italic text-center py-4">
            尚未加入隊伍
          </div>
        ) : (
          party.map((member) => {
            const isLeader = member.id === partyLeaderId;
            const hpPct = member.maxHp > 0 ? (member.hp / member.maxHp) * 100 : 0;
            const className = CLASS_NAMES[member.classId] ?? member.classId;

            return (
              <div
                key={member.id}
                className="bg-bg-primary/50 rounded px-2 py-1.5 border border-border-dim/50"
              >
                {/* Name row */}
                <div className="flex items-center gap-1 text-xs">
                  {isLeader && (
                    <span className="text-text-amber text-[10px]" title="隊長">
                      ★
                    </span>
                  )}
                  <span className="text-text-bright font-bold truncate">{member.name}</span>
                  <span className="text-text-dim ml-auto shrink-0">
                    {className} Lv.{member.level}
                  </span>
                </div>

                {/* HP bar */}
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex-1 h-2 bg-hp-bg rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-hp-bar bar-transition rounded-sm"
                      style={{ width: `${hpPct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-text-dim tabular-nums w-14 text-right">
                    {member.hp}/{member.maxHp}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
