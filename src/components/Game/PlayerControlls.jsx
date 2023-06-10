import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GameManager } from "../../gameLogic/components/GameManager";
//import { useController } //!! need to make this hook

const GeneralButtons = ({ battle, healthReRender }) => {
  const { playTurn, endTurn, deathCheck, death, attack, specialAttack } =
    GameManager();

  const findMonsterIndex = () => {
    // for (let i = 0; i < levelManager.wave.length; i++) {
    //   if (levelManager.wave[i] === battle.targetMonster) {
    //     console.log("Monster Index: ", i);
    //     return i;
    //   }
    // }
  };

  return (
    <div id="GeneralButtons">
      <button>Draw Cards</button>
      <button>End Turn</button>
      <button
        onClick={() => {
          attack(battle.targetHero, battle.targetMonster);
        }}
      >
        Attack
      </button>
      <button>Deselect Card</button>
      <button>
        <Link to="/dashboard" id="surrender">
          Surrender
        </Link>
      </button>
    </div>
  );
};

const PlayerControlls = ({ battle, healthReRender }) => {
  return (
    <div id="PlayerControlls">
      <div className="border">
        {/* <HeroSpecialAttackButtons
          battle={battle}
        /> */}
        <GeneralButtons battle={battle} healthReRender={healthReRender} />
      </div>
      <div id="clickable-controls">
        {/* <PlayingCards
          battle={battle}
        /> */}
      </div>
    </div>
  );
};

export { PlayerControlls };

// TODO: should be inside GameComponent folder.
// TODO: Abstract key mapping to a helper function...

// TODO handle focus
// const handleKeyPress = (e) => {
//   if (e.key === "1") {
//     // myRef.current.tabIndex = 0;
//     // myRef.current.focus();
//     setBattle({ ...battle, targetHero: 0] });
//   }
//   if (e.key === "1" && e.altKey) {
//     e.preventDefault();
//     if (levelManager.wave[0]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[0] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "1" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand.length) {
//       setBattle({ ...battle, selectedCard: Hand[0] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "2") {
//     setBattle({ ...battle, targetHero: 1] });
//     // myRef.current.tabIndex = 1;
//     // myRef.current.focus();
//   }
//   if (e.key === "2" && e.altKey) {
//     if (levelManager.wave[1]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[1] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "2" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[1]) {
//       setBattle({ ...battle, selectedCard: Hand[1] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "3") {
//     setBattle({ ...battle, targetHero: 2] });
//     // myRef.current.tabIndex = 2;
//     // myRef.current.focus();
//   }
//   if (e.key === "3" && e.altKey) {
//     if (levelManager.wave[2]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[2] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "3" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[2]) {
//       setBattle({ ...battle, selectedCard: Hand[2] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "4") {
//     setBattle({ ...battle, targetHero: 3] });
//     // myRef.current.tabIndex = 3;
//     // myRef.current.focus();
//   }
//   if (e.key === "4" && e.altKey) {
//     e.preventDefault();
//     if (levelManager.wave[3]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[3] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "4" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[3]) {
//       setBattle({ ...battle, selectedCard: Hand[3] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "5" && e.altKey) {
//     if (levelManager.wave[4]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[4] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "5" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[4]) {
//       setBattle({ ...battle, selectedCard: Hand[4] });
//     } else {
//       console.log("No Cards in hand");
//       console.log(battle.selectedCard);
//     }
//   }
//   if (e.key === "6" && e.altKey) {
//     if (levelManager.wave[5]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[5] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "6" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[5]) {
//       setBattle({ ...battle, selectedCard: Hand[5] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "7" && e.altKey) {
//     if (levelManager.wave[6]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[6] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "7" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[6]) {
//       setBattle({ ...battle, selectedCard: Hand[6] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "8" && e.altKey) {
//     if (levelManager.wave[7]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[7] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "8" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[7]) {
//       setBattle({ ...battle, selectedCard: Hand[7] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "9" && e.altKey) {
//     e.preventDefault();
//     if (levelManager.wave[8]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[8] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "9" && e.ctrlKey) {
//     e.preventDefault();
//     if (Hand[8]) {
//       setBattle({ ...battle, selectedCard: Hand[8] });
//     } else {
//       console.log("No Cards in hand");
//     }
//   }
//   if (e.key === "0" && e.altKey) {
//     e.preventDefault();
//     if (levelManager.wave[9]) {
//       setBattle({ ...battle, targetMonster: levelManager.wave[9] });
//     } else {
//       console.log("No Monsters Left");
//     }
//   }
//   if (e.key === "0" && e.ctrlKey) {
//     e.preventDefault();
//     setBattle({ ...battle, selectedCard: "None" });
//   }
//   if (e.key === "h") {
//     console.log("h pressed");
//     battle.selectedCard.effect(
//       battle,
//       setBattle,
//       battle.targetMonster,
//       er,
//       levelManager.wave
//     );
//     setTimeout(() => {
//       setBattle({ ...battle, heroDamageAnimation: null });
//     }, 1000);
//   }
//   if (e.key === "a") {
//     const mana = ller.mana;
//     if (battle.selectedCard && battle.selectedCard.manaCost) {
//       const manaCost = battle.selectedCard.manaCost;
//       if (mana >= manaCost) {
//         battle.selectedCard.effect(
//           battle,
//           setBattle,
//           battle.targetMonster,
//           er,
//           levelManager.wave
//         );

//         let manaDrain = battle.selectedCard.manaCost;
//         let currentMana = ller.mana - manaDrain;
//         setState({
//           ...       controller: {
//             ...ller,
//             mana: currentMana,
//           },
//         });
//       } else {
//         let message = "Not enough mana";
//         console.log("Not enough mana");
//         battle.heroDamageAnimation = message;
//         setBattle({
//           ...battle,
//           heroDamageAnimation: battle.heroDamageAnimation,
//         });
//       }
//     } else {
//       ller.attack(
//         battle.targetHero,
//         battle.targetMonster,
//         levelManager.wave
//       );
//       const damage = battle.targetHero.attackPower;
//       console.log(damage);
//       battle.heroDamageAnimation = damage;
//       setBattle({
//         ...battle,
//         heroDamageAnimation: damage,
//       });
//     }
//     setTimeout(() => {
//       setBattle({
//         ...battle,
//         heroDamageAnimation: null,
//       });
//     }, 1000);

//     handleWaveChange();

//     setBattle({
//       ...battle,
//       targetHeroHealth: battle.targetHero.health,
//       targetMonsterHealth: battle.targetMonster.health,
//     });
//   }

//   if (e.key === "d") {

//   }
//   if (e.key === "e") {
//     handleEndTurn();
//   }
//   if (e.key === "t") {
//     if (levelManager.wave.length > 1) {
//       changeTargetMonster();
//     } else {
//       console.log("Boss is targeted");
//     }
//   }
// };

// //? useEffect to add and remove event listener for key press
// useEffect(() => {
//   window.addEventListener("keydown", handleKeyPress);
//   return () => {
//     window.removeEventListener("keydown", handleKeyPress);
//   };
// }, [battle]);

// useEffect(() => {
//   if (battle.targetHero.health <= 0) {
//     for (let i = 0; i < length; i++) {
//       if (i].health > 0) {
//         let newTargetHero = i];
//         setBattle({ ...battle, targetHero: newTargetHero });
//         break;
//       }
//     }
//   }
// }, [battle.targetHero.health]);

// useEffect(() => {
//   if (battle.targetMonster.health <= 0) {
//     for (let i = 0; i < levelManager.wave.length; i++) {
//       if (levelManager.wave[i].health > 0) {
//         let newTargetMonster = levelManager.wave[i];
//         setBattle({ ...battle, targetMonster: newTargetMonster });
//         break;
//       }
//     }
//   }
// }, [battle.targetMonster.health]);
