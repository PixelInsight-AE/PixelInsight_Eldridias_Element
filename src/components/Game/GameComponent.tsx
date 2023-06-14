// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { PlayerControlls } from "./PlayerControlls.jsx";
import { Battlefield } from "./_Battefield";
import { Stats } from "./_Stats";
import { useSelector } from "react-redux";
import "./GameComponent.scss";

const GameComponent = ({ currentTown, monsters, defeatTheBoss }) => {
  return (
    <div id="GameComponent">
      <div id="darken">
        <Stats />
        <Battlefield
          currentTown={currentTown}
          monsters={monsters}
          defeatTheBoss={defeatTheBoss}
        />
        <PlayerControlls />
      </div>
    </div>
  );
};

export { GameComponent };

// console.log(currentTown);

//   const [battle, setBattle] = useState({
//     selectedCard: "None",
//     targetHero: party.healer,
//     targetMonster: monsters[0],
//     heroDamageAnimation: null,
//     monsterDamageAnimation: null,
//   });
//   const [heroHealth, setHeroHealth] = useState(battle.targetHero.health);
//   const [monsterHealth, setMonsterHealth] = useState(
//     battle.targetMonster.health
//   );
//   const handleHealthChange = () => {
//     setHeroHealth(battle.targetHero.health);
//     setMonsterHealth(battle.targetMonster.health);
//   };

//   const handleHeroClick = (hero) => {
//     setBattle((prev) => ({
//       ...prev,
//       targetHero: hero,
//     }));
//   };
//   const handleMonsterClick = (monster) => {
//     setBattle((prev) => ({
//       ...prev,
//       targetMonster: monster,
//     }));
//   };

//   useEffect(() => {
//     setHeroHealth(battle.targetHero.health);
//     setMonsterHealth(battle.targetMonster.health);
//   }, [battle.targetHero.health, battle.targetMonster.health]);
