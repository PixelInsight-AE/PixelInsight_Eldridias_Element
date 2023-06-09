//towns as function components that return  the town and objects for town such as monsters and npcs
import { allElementalCards } from "../elementCards";
import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Aragar = () => {
  const bossAragar = aragarBoss;
  const waveOneAragar = aragarEasy;
  const waveTwoAragar = aragarMedium;
  const waveThreeAragar = aragarHard;
  const name = "Aragar";
  const townUnlocked = true;
  const aragarLoot = [
    allElementalCards[Math.random(0, 10) * 100],
    allElementalCards[Math.random(0, 10) * 100],
    allElementalCards[Math.random(0, 10) * 100],
  ];

  return {
    bossAragar,
    waveOneAragar,
    waveTwoAragar,
    waveThreeAragar,
    name,
    townUnlocked,
    aragarLoot,
  };
};
export { Aragar };
