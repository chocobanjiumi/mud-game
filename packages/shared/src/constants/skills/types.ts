import type { SkillDef } from '../../types/skill.js';

export type RawSkillDef = Omit<SkillDef, 'tags' | 'scaling' | 'usageContext' | 'attackSource' | 'shortDescription' | 'fullDescription' | 'implementationStatus'> & Partial<Pick<SkillDef, 'tags' | 'scaling' | 'usageContext' | 'attackSource' | 'shortDescription' | 'fullDescription' | 'implementationStatus'>>;
