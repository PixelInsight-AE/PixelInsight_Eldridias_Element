// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { PlayerControlls } from "./PlayerControlls.jsx";
import { Battlefield } from "./_Battefield";
import { Stats } from "./_Stats";
import { TownHub } from "./../../gameObjects/Towns/TownHub.jsx";

import { useSelector } from "react-redux";
import "./GameComponent.scss";

const GameComponent = (props) => {
  const party = useSelector((state) => state.partyManager);
  const { townOfAragar } = TownHub();
  console.log(townOfAragar);

  const [battle, setBattle] = useState({
    selectedCard: "None",
    targetHero: party.healer,
    targetMonster: townOfAragar.waveOneAragar[0],
    heroHealth: party.tank.health,
    monsterHealth: townOfAragar.waveOneAragar[0].health,
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
  useEffect(() => {
    //effect to set monster to current index one
    // const firstTarget;
    //functionToSetTarget(firstTarget);
    // setBattle((prev) => ({
    //   ...prev,
    //   targetMonster: firstTarget,
    // }));
  }, []);

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

        <Battlefield battle={battle} handleMonsterClick={handleMonsterClick} />
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
