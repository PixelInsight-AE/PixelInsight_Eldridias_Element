import { Link } from "react-router-dom";
import { floor1 } from "../vanillaJsFiles/floors";
const PlayerControlls = (props) => {
  const {
    state,
    setState,
    battle,
    setBattle
  } = props;
  const progressCheck = () => {
    if (state.currentFloor == state.maxFloor && state.computer.isBossDefeated) {
      
      setState({...state, maxFloor: state.maxFloor + 1, currentFloor: state.currentFloor + 1, currentWave: 0});
      

    }
  };
  const handleAttack = () => {
    state.controller.attack(battle.targetHero, battle.targetMonster, state.floor);
    setBattle({...battle, targetMonsterHealth: battle.targetMonster.health, targetHeroHealth: battle.targetHero.health})
    // setSelectedMonster(selectedMonster.health);
    handleWaveChange();
  };
  const handleWaveChange = () => {
    // what happens when boss wave is defeate
    // what happens when a normal wave is defeated
    if (state.computer.isWaveDefeated) {
      setState({...state, currentWave: state.currentWave + 1, floor: floor1[state.currentWave + 1]});
      
      progressCheck();
      state.computer.isWaveDefeated = false;
    }
  };
  const handleEndTurn = () => {
    state.controller.endTurn(
      state.controller,
      state.computer,
      battle.targetHero,
      battle.targetMonster,
      state.party
    );
    setBattle({...battle, targetHeroHealth: battle.targetHero.health, targetMonsterHealth: battle.targetMonster.health})
    
  };

  return (
    <div id="controls-container">
      <button onClick={() => handleAttack()}>Attack</button>
      <button
        onClick={() => state.controller.heal(selectedHero, selectedMonster)}
      >
        Heal
      </button>
      <button onClick={() => handleEndTurn()}>End Turn</button>
      <Link to="/dashboard">
        <button>Surrender</button>
      </Link>
    </div>
  );
};

export { PlayerControlls };
