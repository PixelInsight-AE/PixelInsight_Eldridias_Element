import { ClickableHeros, ClickableMonsters } from './GameComponent_Clickables';
import { PartyStats, MonsterStats } from './GameComponent_Stats';
import { BattleHero, BattleMonster } from './GameComponent_Battle_station';
import { Link } from 'react-router-dom';
import { PartyStatusBar, EnemyStatusBar } from './GameComponent_StatusBars';
import { VictoryMessageLootBox } from './GameComponent_LootBox';

const Battlefield = (props) => {
  const {
    state,
    setState,
    battle,
    setBattle,
    handleMonsterClick,
    levelManager,
    setLevelManager,
  } = props;
  return (
    <div id="Battlefield">
      <div id="left-container">
        <PartyStatusBar state={state} />
        <ClickableHeros battle={battle} setBattle={setBattle} state={state} />
      </div>
      <div id="party-battlefield">
        <BattleHero state={state} setBattle={setBattle} battle={battle} />
      </div>

      <div id="middle-container">
        <VictoryMessageLootBox state={state} setState={setState} />
      </div>

      <div id="enemy-battlefield">
        <BattleMonster battle={battle} />
      </div>
      <div id="right-container">
        <EnemyStatusBar battle={battle} />
        <ClickableMonsters
          levelManager={levelManager}
          handleMonsterClick={handleMonsterClick}
          battle={battle}
          setBattle={setBattle}
        />
      </div>
    </div>
  );
};

export { Battlefield };
