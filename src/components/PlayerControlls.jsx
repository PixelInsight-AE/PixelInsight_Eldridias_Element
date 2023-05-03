import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { earthQuakeCard } from '../vanillaJsFiles/elementCards';
const PlayingCards = ({ setState, state }) => {
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
const MappedPlayingCards = ({ state }) => {
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
        handleHeroClick={handleHeroClick}
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

const TankButton = ({ state, handleHeroClick }) => {
  return (
    <div id="TankButton">
      <img src={state.tank.imgUrl} alt="Tank Atk BTN" />
    </div>
  );
};
const MeleeButton = ({ state, handleHeroClick }) => {
  return (
    <div id="MeleeButton">
      <img src={state.melee.imgUrl} alt="Melee Atk BTN" />
    </div>
  );
};
const RangedButton = ({ state, handleHeroClick }) => {
  return (
    <div id="RangedButton">
      <img src={state.ranged.imgUrl} alt="Ranged Attack BTN" />
    </div>
  );
};
const HealerButton = ({ state, handleHeroClick }) => {
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
    if (e.key === '1' && e.altKey) {
      e.preventDefault();
      if (levelManager.wave[0]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[0] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '1' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand.length) {
        setBattle({ ...battle, selectedCard: state.playerHand[0] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '2') {
      setBattle({ ...battle, targetHero: state.party[1] });
    }
    if (e.key === '2' && e.altKey) {
      if (levelManager.wave[1]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[1] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '2' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[1]) {
        setBattle({ ...battle, selectedCard: state.playerHand[1] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '3') {
      setBattle({ ...battle, targetHero: state.party[2] });
    }
    if (e.key === '3' && e.altKey) {
      if (levelManager.wave[2]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[2] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '3' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[2]) {
        setBattle({ ...battle, selectedCard: state.playerHand[2] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '4') {
      setBattle({ ...battle, targetHero: state.party[3] });
    }
    if (e.key === '4' && e.altKey) {
      e.preventDefault();
      if (levelManager.wave[3]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[3] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '4' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[3]) {
        setBattle({ ...battle, selectedCard: state.playerHand[3] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '5' && e.altKey) {
      if (levelManager.wave[4]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[4] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '5' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[4]) {
        setBattle({ ...battle, selectedCard: state.playerHand[4] });
      } else {
        console.log('No Cards in hand');
        console.log(battle.selectedCard);
      }
    }
    if (e.key === '6' && e.altKey) {
      if (levelManager.wave[5]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[5] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '6' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[5]) {
        setBattle({ ...battle, selectedCard: state.playerHand[5] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '7' && e.altKey) {
      if (levelManager.wave[6]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[6] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '7' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[6]) {
        setBattle({ ...battle, selectedCard: state.playerHand[6] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '8' && e.altKey) {
      if (levelManager.wave[7]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[7] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '8' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[7]) {
        setBattle({ ...battle, selectedCard: state.playerHand[7] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '9' && e.altKey) {
      e.preventDefault();
      if (levelManager.wave[8]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[8] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '9' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[8]) {
        setBattle({ ...battle, selectedCard: state.playerHand[8] });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === '0' && e.altKey) {
      e.preventDefault();
      if (levelManager.wave[9]) {
        setBattle({ ...battle, targetMonster: levelManager.wave[9] });
      } else {
        console.log('No Monsters Left');
      }
    }
    if (e.key === '0' && e.ctrlKey) {
      e.preventDefault();
      if (state.playerHand[9]) {
        setBattle({ ...battle, selectedCard: null });
      } else {
        console.log('No Cards in hand');
      }
    }
    if (e.key === 'h') {
      console.log('h pressed');
      battle.selectedCard.effect();
    }
    if (e.key === 'a') {
      const manaCost = battle.selectedCard.manaCost;
      const mana = state.controller.mana;
      if (battle.selectedCard) {
        if (mana >= manaCost) {
          battle.selectedCard.effect(
            battle.targetHero,
            battle.targetMonster,
            state.computer,
            levelManager.wave
          );
          let manaDrain = battle.selectedCard.manaCost;
          let currentMana = state.controller.mana - manaDrain;
          console.log(currentMana, manaDrain, state.controller.mana);
          state.controller.mana = currentMana;
        } else {
          console.log('Not enough mana');
        }
      } else {
        state.controller.attack(
          battle.targetHero,
          battle.targetMonster,
          levelManager.wave
        );
      }

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
    if (state.computer.isWaveDefeated) {
      setLevelManager({
        ...levelManager,
        wave: state.computer.waveGenerator(
          state.sceneManager,
          state.difficulty
        ),
      });
      //progressCheck();
      state.computer.isWaveDefeated = false;
    } else {
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
    234;
    handleWaveChange();
  };
  return (
    <div id="GeneralButtons">
      <button onClick={handleDrawCards}>Draw Cards</button>
      <button onClick={handleEndTurn}>End Turn</button>
      <button onClick={handleAttack}>Attack</button>
      <Link to="/dashboard">
        <button>Surrender</button>
      </Link>
    </div>
  );
};

export { PlayerControlls };
