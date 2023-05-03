import { ClickableHeros, ClickableMonsters } from './GameComponent_Clickables';
import { PartyStats, MonsterStats } from './GameComponent_Stats';
import { Link } from 'react-router-dom';

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

const BattleMonster = (props) => {
  const { battle, setBattle, state, setState } = props;
  return (
    <div className="battle-monster">
      <h1>{battle.targetMonster.name}</h1>
      <h2>{battle.targetMonster.health}</h2>
      <img src={battle.targetMonster.imgUrl} alt="" />
    </div>
  );
};

const DisplayCurrentBattle = (props) => {
  const { state, setState, battle, setBattle } = props;
  const loadingMessage = <h1>Select First Target</h1>;
  const victoryMessage = (
    <VictoryComponent
      state={state}
      setState={setState}
      battle={battle}
      setBattle={setBattle}
    />
  );

  return (
    <div className="battlefield">
      <div className="battle-hero">
        <h1></h1>
        <h1>{battle.targetHero.name}</h1>
        <h2>{battle.targetHero.health}</h2>
        <img src={battle.targetHero.imgUrl} alt="" />
      </div>

      <div className="battle-animation">
        {state.computer.isBossDefeated ? victoryMessage : <h1>VS</h1>}
      </div>
      {battle.targetMonster ? (
        <BattleMonster
          battle={battle}
          setBattle={setBattle}
          state={state}
          setState={setState}
        />
      ) : (
        loadingMessage
      )}
    </div>
  );
};

const Battlefield = (props) => {
  const {
    state,
    setState,
    battle,
    setBattle,
    handleHeroClick,
    handleMonsterClick,
    levelManager,
    setLevelManager,
  } = props;
  return (
    <>
      <div id="left-container">
        <PartyStats
          battle={battle}
          setBattle={setBattle}
          state={state}
          setState={setState}
        />
      </div>
      <div id="middle-container">
        <div id="message-box">
          <h2></h2>
        </div>

        <div id="enemy-battlefield">
          <ClickableMonsters
            levelManager={levelManager}
            setLevelManager={setLevelManager}
            battle={battle}
            setBattle={setBattle}
            state={state}
            setState={setState}
            handleMonsterClick={handleMonsterClick}
          />
        </div>
        <div id="battle-animation-container">
          <DisplayCurrentBattle
            levelManager={levelManager}
            setLevelManager={setLevelManager}
            battle={battle}
            setBattle={setBattle}
            state={state}
            setState={setState}
          />
        </div>
        <div id="party-battlefield">
          <ClickableHeros
            battle={battle}
            setBattle={setBattle}
            state={state}
            setState={setState}
            handleHeroClick={handleHeroClick}
          />
        </div>
      </div>

      <div id="right-container">
        <MonsterStats
          levelManager={levelManager}
          setLevelManager={setLevelManager}
          battle={battle}
          setBattle={setBattle}
          state={state}
          setState={setState}
        />
      </div>
    </>
  );
};

export { Battlefield };
