// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { PlayerControlls } from "./PlayerControlls.jsx";
import { Battlefield } from "./_Battefield";
import { Stats } from "./_Stats";
import { useSelector } from "react-redux";
import "./GameComponent.scss";

const GameComponent = ({ currentTown, monsters }) => {
  const party = useSelector((state) => state.partyManager);
  console.log(currentTown);

  const [battle, setBattle] = useState({
    selectedCard: "None",
    targetHero: party.healer,
    targetMonster: monsters[0],
    heroHealth: party.healer.health,
    monsterHealth: monsters[0].health,
    heroDamageAnimation: null,
    monsterDamageAnimation: null,
  });

  const handleHeroClick = (hero) => {
    setBattle((prev) => ({
      ...prev,
      targetHero: hero,
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
          handleHeroClick={handleHeroClick}
          currentTown={currentTown}
          monsters={monsters}
        />
        <PlayerControlls
          battle={battle}
          handleMonsterClick={handleMonsterClick}
        />
      </div>
    </div>
  );
};

export { GameComponent };
