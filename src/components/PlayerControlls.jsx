import { Link } from 'react-router-dom';
import { floor1 } from '../vanillaJsFiles/floors';
const PlayerControlls = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="GameControlls">
      <HeroAttackButtons state={state} setState={setState} />
      <PlayingCards
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
      />
      <GeneralButtons
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
      />
    </div>
  );
};

const MappedPlayingCards = ({ state, setState }) => {
  return (
    <div id="PlayingCards">
      {state.playerHand.map((card) => {
        return (
          <div key={card.id}>
            <h1>{card.name}</h1>
            <img src={card.imgUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
};

const TankButton = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="TankButton">
      <img src="" alt="Tank Atk BTN" />
    </div>
  );
};

const HealerButton = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="HealerButton">
      <img src="" alt="Healer Atk BTN" />
    </div>
  );
};

const MeleeButton = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="MeleeButton">
      <img src="" alt="Melee Atk BTN" />
    </div>
  );
};

const RangedButton = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="RangedButton">
      <img src="" alt="Ranged Attack BTN" />
    </div>
  );
};

const HeroAttackButtons = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="HeroAttackButtons">
      <TankButton state={state} setState={setState} battle={battle} />
      <MeleeButton state={state} setState={setState} battle={battle} />
      <RangedButton state={state} setState={setState} battle={battle} />
      <HealerButton state={state} setState={setState} battle={battle} />
      <ManaTracker state={state} setState={setState} battle={battle} />
    </div>
  );
};

const ManaTracker = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="ManaTracker">
      <h1>Mana: {state.controller.mana}</h1>
    </div>
  );
};

const GeneralButtons = ({ state, setState, battle, setBattle }) => {
  const progressCheck = () => {
    if (state.currentFloor == state.maxFloor && state.computer.isBossDefeated) {
      setState({
        ...state,
        maxFloor: state.maxFloor + 1,
        currentFloor: state.currentFloor + 1,
        currentWave: 0,
      });
    }
  };
  const handleWaveChange = () => {
    // what happens when boss wave is defeate
    // what happens when a normal wave is defeated
    if (state.computer.isWaveDefeated) {
      setState({
        ...state,
        currentWave: state.currentWave + 1,
        floor: floor1[state.currentWave + 1],
      });
      progressCheck();
      state.computer.isWaveDefeated = false;
    }
  };
  const handleDrawCards = () => {
    state.controller.drawCards(state.playerHand, state.deck);
    setState({
      ...state,
      playerHand: state.playerHand,
    });
  };

  const handleEndTurn = () => {
    state.controller.endTurn(
      state.controller,
      state.computer,
      battle.targetHero,
      battle.targetMonster,
      state.party
    );
    setBattle({
      ...battle,
      targetHeroHealth: battle.targetHero.health,
      targetMonsterHealth: battle.targetMonster.health,
    });
  };
  const handleAttack = () => {
    state.controller.attack(
      battle.targetHero,
      battle.targetMonster,
      state.floor
    );
    setBattle({
      ...battle,
      targetMonsterHealth: battle.targetMonster.health,
      targetHeroHealth: battle.targetHero.health,
    });
    // setSelectedMonster(selectedMonster.health);
    handleWaveChange();
  };
  return (
    <div id="GeneralButtons">
      <button onClick={handleDrawCards}>Draw Cards</button>
      <button onClick={handleEndTurn}>End Turn</button>
      <button onClick={handleAttack}>Attack</button>
    </div>
  );
};

const PlayingCards = ({ setState, setBattle, battle, state }) => {
  console.log(state.playerHand);
  return (
    <div id="PlayingCards">
      {state.playerHand.length ? (
        <MappedPlayingCards state={state} setState={setState} />
      ) : (
        <h2>You Need Some Cards to Do Battle!</h2>
      )}
    </div>
  );
};

export { PlayerControlls };
