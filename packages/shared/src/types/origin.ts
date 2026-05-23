import type { BaseStats } from './player.js';

export type RaceId = 'human' | 'elf' | 'dwarf' | 'orc' | 'halfling' | 'dragonborn' | 'shadowkin';
export type GenderId = 'male' | 'female' | 'nonbinary' | 'undisclosed';
export type FaithId =
  | 'aelora'
  | 'karvos'
  | 'ithern'
  | 'mirak'
  | 'virdan'
  | 'shalan'
  | 'talorn'
  | 'oser'
  | 'brokk'
  | 'nesha';

export interface RaceDef {
  id: RaceId;
  name: string;
  description: string;
  statMods: Partial<BaseStats>;
  passiveSkillId: string;
  passiveName: string;
  passiveDescription: string;
  tags?: string[];
}

export interface GenderDef {
  id: GenderId;
  name: string;
  description: string;
  pronounSet?: string;
  honorifics?: string[];
}

export interface FaithDef {
  id: FaithId;
  name: string;
  title: string;
  domains: string[];
  description: string;
  passiveSkillId: string;
  passiveName: string;
  passiveDescription: string;
  prayerBlessingId: string;
  prayerName: string;
  prayerDescription: string;
  taboos: string[];
  tags?: string[];
}

export interface CharacterOriginSelection {
  raceId: RaceId;
  genderId: GenderId;
  faithId: FaithId;
}
