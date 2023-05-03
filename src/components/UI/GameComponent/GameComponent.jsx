// import bootstrap oly to this file
import React, { useEffect, useState } from 'react';
import { PlayerControlls } from './../../PlayerControlls';
import { Battlefield } from './GameComponent_Battefield';
import './GameComponent.scss';

const GameComponent = (props) => {
  const { state, setState } = props;
  const [levelManager, setLevelManager] = useState({
    boss: 'blankfornow',
    currentLevel: 1,
    maxFloor: 1,
    currentFloor: 1,
    wave: state.computer.waveGenerator(state.sceneManager, state.difficulty),
  });
  const [battle, setBattle] = useState({
    targetHero: state.party[0],
    targetMonster: levelManager.wave[0],
    heroHealth: state.party[0].health,
    monsterHealth: levelManager.wave[0].health,
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

  return (
    <>
      <div id="game-container">
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
      </div>

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
    </>
  );
};

export { GameComponent };
