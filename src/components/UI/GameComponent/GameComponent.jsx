// import bootstrap oly to this file
import React, { useEffect, useState } from 'react';
import { PlayerControlls } from './../../PlayerControlls';
import { Battlefield } from './GameComponent_Battefield';
import { Stats } from './GameComponent_Stats';

import './GameComponent.scss';

const GameComponent = (props) => {
  const { state, setState, storyManager, setStoryManager } = props;
  const [levelManager, setLevelManager] = useState({
    boss: 'blankfornow',
    currentLevel: 1,
    maxFloor: 1,
    currentFloor: 1,
    location: 'blankfornow',
    wave: state.computer.waveGenerator(
      storyManager.sceneManager,
      state.monsterAmount
    ),
  });
  const [battle, setBattle] = useState({
    selectedCard: 'None',
    targetHero: state.party[0],
    targetMonster: levelManager.wave.length > 0 ? levelManager.wave[0] : null,
    heroHealth: state.party[0].health,
    monsterHealth: levelManager.wave[0].health,
    heroDamageAnimation: null,
    monsterDamageAnimation: null,
  });

  // todo move to battlefield, and pass down as props to clickables
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
      <div id="darken">
        <Stats battle={battle} />

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
          storyManager={storyManager}
          setStoryManager={setStoryManager}
        />
      </div>
    </div>
  );
};

export { GameComponent };
