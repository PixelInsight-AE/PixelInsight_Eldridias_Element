//towns as function components that return  the town and objects for town such as monsters and npcs
import { allElementalCards } from "../elementCards";
import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useSelector, useDispatch } from "react-redux";
import { townActions } from "../../store/townSlice";
import { useEffect } from "react";
import { img } from "../../assets/imgur";
const Aragar = () => {
  const dispatch = useDispatch();
  const boss = aragarBoss;
  const waveOne = aragarEasy;
  const waveTwo = aragarMedium;
  const waveThree = aragarHard;
  const townName = "Aragar";
  const isBossDefeated = false;

  // const sounds = {};
  // const images = {};
  // const aragarLoot = [
  //   allElementalCards[Math.random(0, 10) * 100],
  //   allElementalCards[Math.random(0, 10) * 100],
  //   allElementalCards[Math.random(0, 10) * 100],
  // ];

  const unlockNextTown = () => {
    dispatch(townActions.unlockTown("Elyssia"));
  };

  return {
    boss,
    waveOne,
    waveTwo,
    waveThree,
    townName,
    isBossDefeated,
    unlockNextTown,
  };
};
export { Aragar };
