// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { PlayerControlls } from "../PlayerControlls";
import { Battlefield } from "./GameComponent_Battefield";

const GameComponent = (props) => {
  const {
    computerController,
    playerController,
    boss,
    party,
    floor,
    setFloor,
    currentFloor,
    setCurrentFloor,
    maxFloor,
    setMaxFloor,
    currentWave,
    setCurrentWave,
  } = props;

  const [selectedHero, setSelectedHero] = useState(party[0]);
  const [selectedMonster, setSelectedMonster] = useState(floor[0]);
  const [selectedHerosHp, setSelectedHerosHp] = useState(selectedHero.health);
  const [selectedMonstersHp, setSelectedMonstersHp] = useState(
    selectedMonster.health
  );

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  const handleMonsterClick = (monster) => {
    setSelectedMonster(monster);
  };

  return (
    <>
      <div id="game-container">
        <Battlefield
          floor={floor}
          party={party}
          handleMonsterClick={handleMonsterClick}
          handleHeroClick={handleHeroClick}
          selectedHero={selectedHero}
          selectedMonster={selectedMonster}
          currentWave={currentWave}
          setCurrentWave={setCurrentWave}
          computerController={computerController}
          maxFloor={maxFloor}
        />
      </div>

      <PlayerControlls
        floor={floor}
        setFloor={setFloor}
        currentFloor={currentFloor}
        setCurrentFloor={setCurrentFloor}
        maxFloor={maxFloor}
        setMaxFloor={setMaxFloor}
        party={party}
        playerController={playerController}
        computerController={computerController}
        selectedHero={selectedHero}
        selectedMonster={selectedMonster}
        setSelectedMonster={setSelectedMonstersHp}
        setSelectedHerosHp={setSelectedHerosHp}
        setCurrentWave={setCurrentWave}
        currentWave={currentWave}
      />
    </>
  );
};

export { GameComponent };
