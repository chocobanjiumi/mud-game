import { beforeEach, describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Character, CombatantState, RoomEntity } from '@game/shared';
import CreateCharacterScreen from '../components/CreateCharacterScreen';
import { RoomPanelView } from '../components/RoomPanel';
import { SelectedTargetPanelView } from '../components/SelectedTargetPanel';
import { buildObjectiveSuggestions, ObjectivePanelView } from '../components/ObjectivePanel';
import { CombatPanelView } from '../components/CombatPanel';
import { useGameStore } from '../stores/gameStore';

const slimeEntity: RoomEntity = {
  id: 'monster_green_slime_a',
  type: 'monster',
  label: '史萊姆#1',
  subtitle: 'slime · Lv.1',
  hp: 30,
  maxHp: 30,
  actions: [
    { label: '查看', command: 'look monster_green_slime_a' },
    { label: '攻擊', command: 'attack monster_green_slime_a', tone: 'danger' },
  ],
};

const corpseEntity: RoomEntity = {
  id: 'green_slime_corpse_1',
  type: 'corpse',
  label: '史萊姆#1 屍體',
  subtitle: '可搜刮',
  actions: [
    { label: '搜刮', command: 'loot green_slime_corpse_1', tone: 'primary' },
  ],
};

function enemy(overrides: Partial<CombatantState> = {}): CombatantState {
  return {
    id: 'enemy-1',
    name: '史萊姆',
    isPlayer: false,
    isAi: false,
    hp: 24,
    maxHp: 30,
    mp: 0,
    maxMp: 0,
    resource: 0,
    maxResource: 0,
    resourceType: 'mp',
    level: 1,
    classId: 'monster',
    activeEffects: [],
    isDead: false,
    ...overrides,
  };
}

beforeEach(() => {
  useGameStore.setState({
    room: {
      id: 'training_ground',
      zone: 'starter_village',
      name: '訓練場',
      description: '木樁旁有史萊姆緩慢蠕動。',
      exits: [],
      players: [],
      npcs: [],
      items: [],
      monsters: [],
      entities: [slimeEntity, corpseEntity],
    },
    selectedEntity: null,
    activeQuests: [],
    combat: null,
    inCombat: false,
    selectedCombatTargetId: null,
    skills: [],
    inventory: [],
    character: null,
  });
});

describe('key UI component rendering', () => {
  it('renders the character creation wizard entry step', () => {
    const html = renderToStaticMarkup(<CreateCharacterScreen onCreate={() => undefined} />);
    expect(html).toContain('建立角色');
    expect(html).toContain('角色預覽');
  });

  it('renders room entities and selected target actions without showing internal ids as labels', () => {
    const state = useGameStore.getState();
    const roomHtml = renderToStaticMarkup(
      <RoomPanelView room={state.room!} selectedEntity={null} setSelectedEntity={() => undefined} />,
    );
    expect(roomHtml).toContain('附近物件');
    expect(roomHtml).toContain('史萊姆#1');
    expect(roomHtml).toContain('搜刮');
    expect(roomHtml).not.toContain('monster_green_slime_a</span>');

    const targetHtml = renderToStaticMarkup(
      <SelectedTargetPanelView entity={slimeEntity} setSelectedEntity={() => undefined} />,
    );
    expect(targetHtml).toContain('怪物');
    expect(targetHtml).toContain('HP');
    expect(targetHtml).toContain('攻擊');
  });

  it('renders objective suggestions from current room actions', () => {
    const state = useGameStore.getState();
    const suggestions = buildObjectiveSuggestions({
      room: state.room,
      quests: state.activeQuests,
      inCombat: state.inCombat,
      combat: state.combat,
      selectedCombatTargetId: state.selectedCombatTargetId,
      skills: state.skills,
    });
    const html = renderToStaticMarkup(<ObjectivePanelView suggestions={suggestions} />);
    expect(html).toContain('推薦');
    expect(html).toContain('搜刮 史萊姆#1 屍體');
  });

  it('renders combat targets and action bar', () => {
    useGameStore.setState({
      inCombat: true,
      combat: {
        combatId: 'combat-1',
        round: 2,
        playerTeam: [],
        enemyTeam: [enemy()],
        turnTimer: 30,
        log: [],
      },
      character: { resource: 10, resourceType: 'mp' } as Character,
    });

    const state = useGameStore.getState();
    const html = renderToStaticMarkup(
      <CombatPanelView
        combat={state.combat}
        inCombat={state.inCombat}
        selectedTargetId={state.selectedCombatTargetId}
        setSelectedTargetId={() => undefined}
        skills={state.skills}
        character={state.character}
        inventory={state.inventory}
      />,
    );
    expect(html).toContain('戰鬥');
    expect(html).toContain('普攻');
    expect(html).toContain('防禦');
    expect(html).toContain('逃跑');
  });
});
