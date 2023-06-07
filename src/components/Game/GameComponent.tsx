// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { PlayerControlls } from "./../../PlayerControlls";
import { Battlefield } from "./GameComponent_Battefield";
import { Stats } from "./GameComponent_Stats";

import "./GameComponent.scss";

const GameComponent = () => {
  const [levelManager, setLevelManager] = useState({
    boss: "blankfornow",
    currentLevel: 1,
    maxFloor: 1,
    currentFloor: 1,
    location: "blankfornow",
    wave: state.computer.waveGenerator(state.sceneManager[0], state.difficulty),
  });
  const [battle, setBattle] = useState({
    selectedCard: "None",
    targetHero: state.party[0],
    targetMonster: levelManager.wave[0],
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
          state={state}
          battle={battle}
          handleMonsterClick={handleMonsterClick}
          handleHeroClick={handleHeroClick}
        />
        <PlayerControlls
          levelManager={levelManager}
          state={state}
          battle={battle}
          handleHeroClick={handleHeroClick}
          handleMonsterClick={handleMonsterClick}
        />
      </div>
    </div>
  );
};

export { GameComponent };
