import type { Character, SkillDef } from '@game/shared';
import { CLASS_DEFS, SKILL_DEFS, getLearnableSkills } from '@game/shared';
import { forgetSkill, getCompletedQuestIds, getLearnedSkills, learnSkill } from '../db/queries.js';
import { sendToCharacter } from '../ws/handler.js';

export function grantLearnableSkills(character: Character): SkillDef[] {
  removeLegacyAdventurerSkills(character);

  const learnedIds = new Set(getLearnedSkills(character.id).map(skill => skill.skillId));
  const completedQuestIds = getCompletedQuestIds(character.id);
  const newSkills = getLearnableSkills(character.classId, character.level, completedQuestIds)
    .filter(skill => !skill.id.startsWith('race_') && !skill.id.startsWith('faith_'))
    .filter(skill => !learnedIds.has(skill.id));

  for (const skill of newSkills) {
    learnSkill(character.id, skill.id);
    learnedIds.add(skill.id);
  }

  return newSkills;
}

export function removeLegacyAdventurerSkills(character: Character): string[] {
  if (character.classId === 'adventurer' || CLASS_DEFS[character.classId]?.tier === 0) return [];

  const removed: string[] = [];
  for (const learned of getLearnedSkills(character.id)) {
    const skill = SKILL_DEFS[learned.skillId];
    if (skill?.classId !== 'adventurer') continue;
    forgetSkill(character.id, learned.skillId);
    removed.push(learned.skillId);
  }
  return removed;
}

export function grantAndNotifyLearnableSkills(character: Character): SkillDef[] {
  const newSkills = grantLearnableSkills(character);
  for (const skill of newSkills) {
    sendToCharacter(character.id, 'skill_learned', {
      skillId: skill.id,
      name: skill.name,
      description: skill.fullDescription,
      learnLevel: skill.learnLevel,
      skillType: skill.type,
      usageContext: (skill as SkillDef & { usageContext?: 'combat' | 'field' | 'both' }).usageContext ?? 'combat',
      targetType: skill.targetType,
      resourceCost: skill.resourceCost,
      cooldown: skill.cooldown,
      iconPath: skill.iconPath,
      learnedSkill: { skillId: skill.id, level: 1, currentCooldown: 0 },
    });
  }
  return newSkills;
}
