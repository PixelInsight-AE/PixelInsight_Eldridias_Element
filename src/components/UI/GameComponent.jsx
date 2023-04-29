// import bootstrap oly to this file
import React, { useEffect, useState } from 'react';
import { PlayerControlls } from '../PlayerControlls';
import { Battlefield } from './GameComponent_Battefield';
import { bulwark } from '../../vanillaJsFiles/heros.js';
import './GameComponent.scss';
console.log(bulwark.name);
const GameComponent = (props) => {
  const { state, setState } = props;
  const [battle, setBattle] = useState({
    targetHero: state.party[0],
    targetMonster: state.floor[0],
    heroHealth: state.party[0].health,
    monsterHealth: state.floor[0].health,
  });
  // const [selectedHero, setSelectedHero] = useState(party[0]);
  // const [selectedMonster, setSelectedMonster] = useState(floor[0]);
  // const [selectedHerosHp, setSelectedHerosHp] = useState(selectedHero.health);
  // const [selectedMonstersHp, setSelectedMonstersHp] = useState(
  //   selectedMonster.health
  // );

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
          state={state}
          setState={setState}
          battle={battle}
          setBattle={setBattle}
          handleMonsterClick={handleMonsterClick}
          handleHeroClick={handleHeroClick}
        />
      </div>

      <PlayerControlls
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
