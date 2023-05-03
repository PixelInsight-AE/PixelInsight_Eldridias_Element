import { ClickableHeros, ClickableMonsters } from './GameComponent_Clickables';
import { PartyStats, MonsterStats } from './GameComponent_Stats';
import { Link } from 'react-router-dom';
import { PartyStatusBar, EnemyStatusBar } from './GameComponent_StatusBars';
const VictoryComponent = (props) => {
  const { state, setState } = props;

  const handleLevelChange = () => {
    setState({
      ...state,
      currentWave: 0,
      floor: state.computer.waveGenerator(state.sceneManager, state.difficulty),
    });
    state.computer.isBossDefeated = false;
  };
  return (
    <div>
      <h1>You Completed The Floor</h1>
      <Link to="/dashboard/story">
        <button onClick={handleLevelChange}>
          <h2>Next Floor</h2>
        </button>
      </Link>
      <Link to="/dashboard/story">
        <button onClick={handleLevelChange}>
          <h2>Return To Town</h2>
        </button>
      </Link>
    </div>
  );
};

const VictoryMessageLootBox = (props) => {
  const { state, setState } = props;

  const victoryMessage = <VictoryComponent state={state} setState={setState} />;

  return (
    <div className="battlefield">
      <div className="battle-animation">
        {state.computer.isBossDefeated ? victoryMessage : <h1>VS</h1>}
      </div>
      <div id="LootBox">
        {state.story[state.currentStory].isReward ? <h2>lootbox</h2> : null}
      </div>
    </div>
  );
};

const BattleHero = (props) => {
  const { battle, setBattle, state, setState } = props;
  const handleTankClick = () => {
    setBattle({
      ...battle,
      targetHero: state.party[0],
    });
  };
  return (
    <div onClick={handleTankClick} id="BattleHero">
      <img src={state.tank.imgUrl} alt="" />
    </div>
  );
};

const BattleMonster = (props) => {
  const { battle, setBattle, state, setState } = props;
  return (
    <div id="BattleMonster">
      <img src={battle.targetMonster.imgUrl} alt="" />
    </div>
  );
};

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
