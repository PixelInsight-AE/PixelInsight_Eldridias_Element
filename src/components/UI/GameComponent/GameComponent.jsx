// import bootstrap oly to this file
import React, { useEffect, useState } from 'react';
import { PlayerControlls } from './../../PlayerControlls';
import { Battlefield } from './GameComponent_Battefield';
import { PartyStats, MonsterStats } from './GameComponent_Stats';

import './GameComponent.scss';

const GameComponent = (props) => {
  const { state, setState } = props;
  const [levelManager, setLevelManager] = useState({
    boss: 'blankfornow',
    currentLevel: 1,
    maxFloor: 1,
    currentFloor: 1,
    location: 'blankfornow',
    wave: state.computer.waveGenerator(state.sceneManager[0], state.difficulty),
  });
  const [battle, setBattle] = useState({
    selectedCard: null,
    targetHero: state.party[0],
    targetMonster: levelManager.wave[0],
    heroHealth: state.party[0].health,
    monsterHealth: levelManager.wave[0].health,
    heroDamageAnimation: null,
    monsterDamageAnimation: null,
  });

  const handleHeroClick = (hero) => {
    setBattle({
      ...battle,
      targetHero: hero,
    });
  };

  const handleMonsterClick = (monster) => {
    setBattle({
      ...battle,
      targetMonster: monster,
    });
  };
  useEffect(() => {
    console.log(battle.selectedCard);
  }, [battle.selectedCard]);
  return (
    <div id="GameComponent">
      <div id="party-side">
        <PartyStats state={state} setState={setState} battle={battle} />
      </div>
      <Battlefield
        levelManager={levelManager}
        setLevelManager={setLevelManager}
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleMonsterClick={handleMonsterClick}
        handleHeroClick={handleHeroClick}
      />
      <PlayerControlls
        levelManager={levelManager}
        setLevelManager={setLevelManager}
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
        handleMonsterClick={handleMonsterClick}
      />
      <div id="monster-side">
        <MonsterStats
          levelManager={levelManager}
          setLevelManager={setLevelManager}
          battle={battle}
        />
      </div>
    </div>
  );
};

export { GameComponent };
