import { Link } from 'react-router-dom';

import { useEffect } from 'react';
const PlayerControlls = ({
  state,
  setState,
  battle,
  setBattle,
  handleHeroClick,
  handleMonsterClick,
  levelManager,
  setLevelManager,
}) => {
  return (
    <div id="GameControlls">
      <HeroAttackButtons
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
      />
      <PlayingCards
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
      />
      <GeneralButtons
        levelManager={levelManager}
        setLevelManager={setLevelManager}
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
      <img src={state.tank.imgUrl} alt="Tank Atk BTN" />
    </div>
  );
};
const MeleeButton = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="MeleeButton">
      <img src={state.melee.imgUrl} alt="Melee Atk BTN" />
    </div>
  );
};
const RangedButton = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="RangedButton">
      <img src={state.ranged.imgUrl} alt="Ranged Attack BTN" />
    </div>
  );
};
const HealerButton = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="HealerButton">
      <img src={state.healer.imgUrl} alt="Healer Atk BTN" />
    </div>
  );
};

const HeroAttackButtons = ({
  state,
  setState,
  battle,
  setBattle,
  handleHeroClick,
}) => {
  return (
    <div id="HeroAttackButtons">
      <TankButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <MeleeButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <RangedButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <HealerButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <ManaTracker
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
      />
    </div>
  );
};

const ManaTracker = ({ state }) => {
  return (
    <div id="ManaTracker">
      <h1>Mana: {state.controller.mana}</h1>
    </div>
  );
};

const GeneralButtons = ({
  state,
  setState,
  battle,
  setBattle,
  levelManager,
  setLevelManager,
}) => {
  const findMonsterIndex = () => {
    for (let i = 0; i < levelManager.wave.length; i++) {
      if (levelManager.wave[i] === battle.targetMonster) {
        console.log('Monster Index: ', i);
        return i;
      }
    }
  };
  const changeTargetMonster = () => {
    if (findMonsterIndex() === levelManager.wave.length - 1) {
      setBattle({ ...battle, targetMonster: levelManager.wave[0] });
    } else {
      setBattle({
        ...battle,
        targetMonster: levelManager.wave[findMonsterIndex() + 1],
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === '1') {
      setBattle({ ...battle, targetHero: state.party[0] });
    }
    if (e.key === '2') {
      setBattle({ ...battle, targetHero: state.party[1] });
    }
    if (e.key === '3') {
      setBattle({ ...battle, targetHero: state.party[2] });
    }
    if (e.key === '4') {
      setBattle({ ...battle, targetHero: state.party[3] });
    }
    if (e.key === 'a') {
      state.controller.attack(
        battle.targetHero,
        battle.targetMonster,
        levelManager.wave
      );
      handleWaveChange();

      setBattle({
        ...battle,
        targetHeroHealth: battle.targetHero.health,
        targetMonsterHealth: battle.targetMonster.health,
      });
    }
    if (e.key === 'd') {
      state.controller.drawCards(state.playerHand, state.deck);
      setState({
        ...state,
        playerHand: state.playerHand,
        deck: state.deck,
      });
    }
    if (e.key === 'e') {
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
    }
    if (e.key === 't') {
      if (levelManager.wave.length > 1) {
        changeTargetMonster();
      } else {
        console.log('Boss is targeted');
      }
    }
  };

  //? useEffect to add and remove event listener for key press
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [battle]);

  const progressCheck = () => {
    if (
      levelManager.currentFloor == levelManager.maxFloor &&
      state.computer.isBossDefeated
    ) {
      setLevelManager({
        ...levelManager,
        maxFloor: levelManager.maxFloor + 1,
        currentFloor: levelManager.currentFloor + 1,
        currentWave: 0,
      });
    }
  };
  const handleWaveChange = () => {
    console.log('is wave change running?');
    if (state.computer.isWaveDefeated) {
      setLevelManager({
        ...levelManager,
        wave: state.computer.waveGenerator(
          state.sceneManager,
          state.difficulty
        ),
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
      levelManager.wave
    );
    setBattle({
      ...battle,
      targetMonsterHealth: battle.targetMonster.health,
      targetHeroHealth: battle.targetHero.health,
    });
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

const PlayingCards = ({ setState, state }) => {
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
