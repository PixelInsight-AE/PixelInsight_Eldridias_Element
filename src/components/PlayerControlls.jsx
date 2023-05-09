import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//import { earthQuakeCard } from '../vanillaJsFiles/elementCards';
import { PlayingCards } from './UI/GameComponent/GameComponent_Cards';
import { HeroSpecialAttackButtons } from './UI/GameComponent/GameComponent_SpecialAttackButtons';

const GeneralButtons = ({
  state,
  setState,
  battle,
  setBattle,
  levelManager,
  setLevelManager,
}) => {
  // const myRef = useRef(0);
  // look right :)
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

  // TODO handle focus
  const handleKeyPress = (e) => {
    if (e.key === '1') {
      // myRef.current.tabIndex = 0;
      // myRef.current.focus();
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
      // myRef.current.tabIndex = 1;
      // myRef.current.focus();
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
      // myRef.current.tabIndex = 2;
      // myRef.current.focus();
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
      // myRef.current.tabIndex = 3;
      // myRef.current.focus();
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
      setBattle({ ...battle, selectedCard: 'None' });
    }
    if (e.key === 'h') {
      console.log('h pressed');
      battle.selectedCard.effect(
        battle,
        setBattle,
        battle.targetMonster,
        state.computer,
        levelManager.wave
      );
      setTimeout(() => {
        setBattle({ ...battle, heroDamageAnimation: null });
      }, 1000);
    }
    if (e.key === 'a') {
      const mana = state.controller.mana;
      if (battle.selectedCard && battle.selectedCard.manaCost) {
        const manaCost = battle.selectedCard.manaCost;
        if (mana >= manaCost) {
          battle.selectedCard.effect(
            battle,
            setBattle,
            battle.targetMonster,
            state.computer,
            levelManager.wave
          );

          let manaDrain = battle.selectedCard.manaCost;
          let currentMana = state.controller.mana - manaDrain;
          setState({
            ...state,
            controller: {
              ...state.controller,
              mana: currentMana,
            },
          });
        } else {
          let message = 'Not enough mana';
          console.log('Not enough mana');
          battle.heroDamageAnimation = message;
          setBattle({
            ...battle,
            heroDamageAnimation: battle.heroDamageAnimation,
          });
        }
      } else {
        state.controller.attack(
          battle.targetHero,
          battle.targetMonster,
          levelManager.wave
        );
        const damage = battle.targetHero.attackPower;
        console.log(damage);
        battle.heroDamageAnimation = damage;
        setBattle({
          ...battle,
          heroDamageAnimation: damage,
        });
      }
      setTimeout(() => {
        setBattle({
          ...battle,
          heroDamageAnimation: null,
        });
      }, 1000);

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
      handleEndTurn();
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

  useEffect(() => {
    if (battle.targetHero.health <= 0) {
      for (let i = 0; i < state.party.length; i++) {
        if (state.party[i].health > 0) {
          let newTargetHero = state.party[i];
          setBattle({ ...battle, targetHero: newTargetHero });
          break;
        }
      }
    }
  }, [battle.targetHero.health]);

  useEffect(() => {
    if (battle.targetMonster.health <= 0) {
      for (let i = 0; i < levelManager.wave.length; i++) {
        if (levelManager.wave[i].health > 0) {
          let newTargetMonster = levelManager.wave[i];
          setBattle({ ...battle, targetMonster: newTargetMonster });
          break;
        }
      }
    }
  }, [battle.targetMonster.health]);

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
          state.sceneManager[0],
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
    if (battle.targetHero.health >= 0) {
      state.computer.attack(
        battle.targetHero,
        battle.targetMonster,
        state.party
      );
      let monsterDamage = battle.targetMonster.attackPower;
      setBattle({
        ...battle,
        targetHeroHealth: battle.targetHero.health,
        targetMonsterHealth: battle.targetMonster.health,
        monsterDamageAnimation: monsterDamage,
      });
    } else {
      console.log('Hero is dead');
    }
    setTimeout(() => {
      setBattle({
        ...battle,
        monsterDamageAnimation: null,
      });
    }, 1000);
  };
  const handleAttack = () => {
    state.controller.attack(
      battle.targetHero,
      battle.targetMonster,
      levelManager.wave
    );
    let damage = battle.targetHero.attackPower;
    setBattle({
      ...battle,
      heroDamageAnimation: damage,
      targetMonsterHealth: battle.targetMonster.health,
      targetHeroHealth: battle.targetHero.health,
    });
    setTimeout(() => {
      setBattle({
        ...battle,
        heroDamageAnimation: null,
      });
    }, 1000);

    handleWaveChange();
  };
  const handleEmptyHand = () => {
    setBattle({
      ...battle,
      selectedCard: 'None',
    });
  };

  return (
    <div id="GeneralButtons">
      <button onClick={handleDrawCards}>Draw Cards</button>
      <button onClick={handleEndTurn}>End Turn</button>
      <button onClick={handleAttack}>Attack</button>
      <button onClick={handleEmptyHand}>Deselect Card</button>
      <button>
        <Link to="/dashboard" id="surrender">
          Surrender
        </Link>
      </button>
    </div>
  );
};

const PlayerControlls = ({
  state,
  setState,
  battle,
  setBattle,

  //handleMonsterClick,
  levelManager,
  setLevelManager,
}) => {
  return (
    <div id="PlayerControlls">
      <div className="border">
        <HeroSpecialAttackButtons
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
      <div id="clickable-controls">
        <PlayingCards
          state={state}
          setState={setState}
          battle={battle}
          setBattle={setBattle}
        />
      </div>
    </div>
  );
};

export { PlayerControlls };

// TODO: should be inside GameComponent folder.
// TODO: Abstract key mapping to a helper function...
