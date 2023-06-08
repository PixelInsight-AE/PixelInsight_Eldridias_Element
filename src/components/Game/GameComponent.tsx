// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { PlayerControlls } from "./PlayerControlls.jsx";
import { Battlefield } from "./_Battefield";
import { Stats } from "./_Stats";
import { Aragar } from "./../../gameObjects/Towns/Aragar.jsx";
import { useSelector } from "react-redux";
import "./GameComponent.scss";

const GameComponent = () => {
  const party = useSelector((state) => state.partyManager);

  const [battle, setBattle] = useState({
    selectedCard: "None",
    targetHero: party.tank,
    targetMonster: "None",
    heroHealth: party.tank.health,
    monsterHealth: "100%",
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
          battle={battle}
          handleMonsterClick={handleMonsterClick}
          handleHeroClick={handleHeroClick}
        />
        <PlayerControlls
          battle={battle}
          handleHeroClick={handleHeroClick}
          handleMonsterClick={handleMonsterClick}
        />
      </div>
    </div>
  );
};

export { GameComponent };
