// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { PlayerControlls } from "./PlayerControlls.jsx";
import { Battlefield } from "./_Battefield";
import { Stats } from "./_Stats";
import { TownHub } from "./../../gameObjects/Towns/TownHub.jsx";

import { useSelector } from "react-redux";
import "./GameComponent.scss";

const GameComponent = ({ currentTown, handleTownSelect }) => {
  const party = useSelector((state) => state.partyManager);
  console.log(currentTown);

  const [battle, setBattle] = useState({
    selectedCard: "None",
    targetHero: party.healer,
    targetMonster: currentTown.waveOne[0],
    heroHealth: party.tank.health,
    monsterHealth: currentTown.waveOne[0].health,
    heroDamageAnimation: null,
    monsterDamageAnimation: null,
  });

  const healthReRender = () => {
    setBattle((prev) => ({
      ...prev,
      heroHealth: battle.targetHero.health,
      monsterHealth: battle.targetMonster.health,
    }));
  };

  const handleMonsterClick = (monster) => {
    setBattle((prev) => ({
      ...prev,
      targetMonster: monster,
    }));
  };

  return (
    <div id="GameComponent">
      <div id="darken">
        <Stats battle={battle} />

        <Battlefield
          battle={battle}
          handleMonsterClick={handleMonsterClick}
          currentTown={currentTown}
        />
        <PlayerControlls
          battle={battle}
          handleMonsterClick={handleMonsterClick}
          healthReRender={healthReRender}
        />
      </div>
    </div>
  );
};

export { GameComponent };
