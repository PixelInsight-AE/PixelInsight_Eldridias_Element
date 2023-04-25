import { ClickableHeros, ClickableMonsters } from "./GameComponent_Clickables";
import { PartyStats, MonsterStats } from "./GameComponent_Stats";
import { Link } from "react-router-dom";
import { floor1, floor2 } from "../../vanillaJsFiles/floors";

const VictoryComponent = (props) => {
  const {    
    state,
    setState,
    battle,
    setBattle,
  } = props;

  const handleLevelChange = () => {
    
    setState({ ...state, currentWave: 0, floor: floor2[state.currentWave] });

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

const DisplayCurrentBattle = (props) =>{ 
  const {
    state,
    setState,
    battle,
    setBattle,
  } = props;


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

      <div className="battle-monster">
        <h1>{battle.targetMonster.name}</h1>
        <h2>{battle.targetMonster.health}</h2>
        <img src={battle.targetMonster.imgUrl} alt="" />
      </div>
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

  } = props;
  return (
    <>
      <div id="left-container">
        <PartyStats battle={battle} setBattle={setBattle} state={state} setState={setState} />
      </div>
      <div id="middle-container">
        <div id="message-box">
          <h2></h2>
        </div>

        <div id="enemy-battlefield">
          <ClickableMonsters
            battle={battle} 
            setBattle={setBattle}
            state={state} 
            setState={setState}
            handleMonsterClick={handleMonsterClick}
          />
        </div>
        <div id="battle-animation-container">
          <DisplayCurrentBattle
            battle={battle} 
            setBattle={setBattle}
            state={state} 
            setState={setState}
          />
        </div>
        <div id="party-battlefield">
          <ClickableHeros
          battle={battle} setBattle={setBattle} state={state} setState={setState} handleHeroClick={handleHeroClick} />
        </div>
      </div>

      <div id="right-container">
        <MonsterStats
        battle={battle} setBattle={setBattle} state={state} setState={setState}  />
      </div>
    </>
  );
};

export { Battlefield };
