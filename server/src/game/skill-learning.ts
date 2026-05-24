import type { Character, SkillDef } from '@game/shared';
import { getLearnableSkills } from '@game/shared';
import { getCompletedQuestIds, getLearnedSkills, learnSkill } from '../db/queries.js';
import { sendToCharacter } from '../ws/handler.js';

export function grantLearnableSkills(character: Character): SkillDef[] {
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

export function grantAndNotifyLearnableSkills(character: Character): SkillDef[] {
  const newSkills = grantLearnableSkills(character);
  for (const skill of newSkills) {
    sendToCharacter(character.id, 'skill_learned', {
      skillId: skill.id,
      name: skill.name,
      description: skill.description,
      learnLevel: skill.learnLevel,
      skillType: skill.type,
      targetType: skill.targetType,
      resourceCost: skill.resourceCost,
      cooldown: skill.cooldown,
      learnedSkill: { skillId: skill.id, level: 1, currentCooldown: 0 },
    });
  }
  return newSkills;
}
