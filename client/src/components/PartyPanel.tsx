import { useState } from 'react';
import { SKILL_DEFS, type Character, type LearnedSkill } from '@game/shared';
import { useGameStore, type PartyMember } from '../stores/gameStore';
import { getClassIconPath, getPublicAssetPath } from '../utils/assetImages';

const CLASS_NAMES: Record<string, string> = {
  adventurer: '冒險者',
  swordsman: '戰士',
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

export function PartyPanelView({
  party,
  partyLeaderId,
  skills,
  character,
  inCombat,
  expandedMemberId,
  setExpandedMemberId,
  onCommand,
  compact = false,
}: {
  party: PartyMember[];
  partyLeaderId: string | null;
  skills: LearnedSkill[];
  character: Character | null;
  inCombat: boolean;
  expandedMemberId: string | null;
  setExpandedMemberId: (memberId: string | null) => void;
  onCommand: (command: string, friendlyEcho?: string) => void;
  compact?: boolean;
}) {
  const allySkills = skills.filter((skill) => {
    const def = SKILL_DEFS[skill.skillId];
    if (!def || def.type !== 'active' || def.targetType !== 'single_ally') return false;
    return inCombat
      ? def.usageContext === 'combat' || def.usageContext === 'both'
      : def.usageContext === 'field' || def.usageContext === 'both';
  });

  return (
    <div className={compact ? 'party-content party-content-compact' : 'party-content'}>
      {party.length === 0 ? (
        <div className="text-xs text-text-dim italic text-center py-4">
          尚未加入隊伍
        </div>
      ) : (
        party.map((member) => {
          const isLeader = member.id === partyLeaderId;
          const hpPct = member.maxHp > 0 ? (member.hp / member.maxHp) * 100 : 0;
          const className = CLASS_NAMES[member.classId] ?? member.classId;
          const expanded = expandedMemberId === member.id;
          const isSelf = member.id === character?.id;

          return (
            <div
              key={member.id}
              className="party-member-row"
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className={`party-member-avatar ${expanded ? 'party-member-avatar-active' : ''}`}
                  title={`${member.name} 可用隊友技能`}
                  onClick={() => setExpandedMemberId(expanded ? null : member.id)}
                >
                  <img src={getClassIconPath(member.classId)} alt="" loading="lazy" />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1 text-xs">
                    {isLeader && (
                      <span className="text-text-amber text-[10px]" title="隊長">
                        ★
                      </span>
                    )}
                    <span className="text-text-bright font-bold truncate">{member.name}</span>
                    {member.mounted && (
                      <span className="text-text-amber text-[10px]" title="騎乘中">
                        騎乘
                      </span>
                    )}
                    <span className="text-text-dim ml-auto shrink-0">
                      {className} Lv.{member.level}
                    </span>
                  </div>

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
              </div>

              {expanded && (
                <div className="party-ally-skills">
                  <button
                    type="button"
                    className={isSelf ? 'party-ally-skill party-ally-skill-danger' : 'party-ally-skill party-ally-skill-primary'}
                    onClick={() => onCommand(isSelf ? 'party leave' : `party follow ${member.id}`, isSelf ? '離開隊伍' : `跟隨 ${member.name}`)}
                  >
                    <span>{isSelf ? '離開隊伍' : '跟隨'}</span>
                  </button>
                  {inCombat && character?.mounted && !isSelf && (
                    <button
                      type="button"
                      className="party-ally-skill party-ally-skill-primary"
                      onClick={() => onCommand(`mounted guard ${member.id}`, `騎乘守護 ${member.name}`)}
                    >
                      <span>騎乘守護</span>
                    </button>
                  )}
                  {allySkills.length === 0 ? (
                    <span className="party-ally-empty">沒有可對隊友使用的技能</span>
                  ) : (
                    allySkills.map((skill) => {
                      const def = SKILL_DEFS[skill.skillId]!;
                      const iconPath = getPublicAssetPath(def.iconPath) ?? '/mud/images/skills/icons/starter_blank_01.png';
                      const onCooldown = skill.currentCooldown > 0;
                      const lacksResource = Boolean(character && character.resource < def.resourceCost);
                      const disabled = onCooldown || lacksResource;
                      return (
                        <button
                          type="button"
                          key={skill.skillId}
                          className="party-ally-skill"
                          disabled={disabled}
                          title={onCooldown ? `冷卻中：${skill.currentCooldown}` : lacksResource ? '資源不足' : `對 ${member.name} 使用 ${def.name}`}
                          onClick={() => onCommand(`skill ${skill.skillId} ${member.id}`, `對 ${member.name} 使用 ${def.name}`)}
                        >
                          <img
                            src={iconPath}
                            alt=""
                            onError={(event) => {
                              event.currentTarget.src = '/mud/images/skills/icons/starter_blank_01.png';
                            }}
                          />
                          <span>{def.name}</span>
                          {onCooldown && <b>{skill.currentCooldown}</b>}
                        </button>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default function PartyPanel({
  onCommand,
}: {
  onCommand: (command: string, friendlyEcho?: string) => void;
}) {
  const showParty = useGameStore((s) => s.showParty);
  const toggleParty = useGameStore((s) => s.toggleParty);
  const party = useGameStore((s) => s.party);
  const partyLeaderId = useGameStore((s) => s.partyLeaderId);
  const skills = useGameStore((s) => s.skills);
  const character = useGameStore((s) => s.character);
  const inCombat = useGameStore((s) => s.inCombat);
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);

  if (!showParty && party.length === 0) return null;

  const content = (
    <PartyPanelView
      party={party}
      partyLeaderId={partyLeaderId}
      skills={skills}
      character={character}
      inCombat={inCombat}
      expandedMemberId={expandedMemberId}
      setExpandedMemberId={setExpandedMemberId}
      onCommand={onCommand}
      compact={!showParty}
    />
  );

  if (!showParty) {
    return (
      <aside className="party-dock panel-enter">
        <div className="party-dock-header">
          <span>隊伍</span>
          <button type="button" onClick={toggleParty}>展開</button>
        </div>
        {content}
      </aside>
    );
  }

  return (
    <div className="party-overlay" onClick={toggleParty}>
      <div className="party-modal panel-enter" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between px-3 py-2 border-b border-border-dim">
          <span className="text-xs font-bold text-text-terminal">隊伍</span>
          <button
            onClick={toggleParty}
            className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
          >
            [關閉]
          </button>
        </div>

        {content}
      </div>
    </div>
  );
}
