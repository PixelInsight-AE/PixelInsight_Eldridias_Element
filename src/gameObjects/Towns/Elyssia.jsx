//towns as function components that return  the town and objects for town such as monsters and npcs

import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Elyssia = () => {
  //fucntion component to make the town of Aragar
  const elyssiaBoss = aragarBoss;
  const elyssiaWaveOne = aragarEasy;
  const elyssiaWaveTwo = aragarMedium;
  const elyssiawaveThree = aragarHard;
  const townName = "Elyssia";
  const townUnlocked = true;

  return {
    townName,
    elyssiaBoss,
    elyssiaWaveOne,
    elyssiaWaveTwo,
    elyssiawaveThree,
    townUnlocked,
  };
};
export { Elyssia };
