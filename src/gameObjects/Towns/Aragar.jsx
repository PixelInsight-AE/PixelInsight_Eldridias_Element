//towns as function components that return  the town and objects for town such as monsters and npcs
import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { townActions } from "../../store/slices/townSlice";
const Aragar = () => {
  const dispatch = useDispatch();
  const [bossDead, setBossDead] = useState(false);
  const boss = aragarBoss;
  const waveOne = aragarEasy;
  const waveTwo = aragarMedium;
  const waveThree = aragarHard;
  const townName = "Aragar";
  //const story = aragarStory;

  // const sounds = {};
  // const images = {};
  // const aragarLoot = [
  //   allElementalCards[Math.random(0, 10) * 100],
  //   allElementalCards[Math.random(0, 10) * 100],
  //   allElementalCards[Math.random(0, 10) * 100],
  // ];
  const handleBossDeath = () => {
    if (boss[0].health <= 0) {
      setBossDead(true);
    }
  };
  if (bossDead) {
    dispatch(townActions.unlockTown({ town: "Elyssia" }));
  }

  return {
    bossDead,
    handleBossDeath,
    boss,
    waveOne,
    waveTwo,
    waveThree,
    townName,
  };
};
export { Aragar };
