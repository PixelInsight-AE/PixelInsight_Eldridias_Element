import { ClickableHeros, ClickableMonsters } from './GameComponent_Clickables';
import { BattleHero, BattleMonster } from './GameComponent_Battle_station';
import { Link } from 'react-router-dom';
import { VictoryMessageLootBox } from './GameComponent_LootBox';

const Battlefield = (props) => {
  const {
    state,
    setState,
    battle,
    setBattle,
    handleMonsterClick,
    levelManager,
  } = props;
  return (
    <div id="Battlefield">
      <ClickableHeros battle={battle} setBattle={setBattle} state={state} />
      <BattleHero state={state} setBattle={setBattle} battle={battle} />
      <VictoryMessageLootBox state={state} setState={setState} />
      <BattleMonster battle={battle} />
      <ClickableMonsters
        levelManager={levelManager}
        handleMonsterClick={handleMonsterClick}
        battle={battle}
        setBattle={setBattle}
      />
    </div>
  );
};

export { Battlefield };
