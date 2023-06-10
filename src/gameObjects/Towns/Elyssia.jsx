//towns as function components that return  the town and objects for town such as monsters and npcs

import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { yamiTheDreamer } from "../bossCards";

const Elyssia = () => {
  //fucntion component to make the town of Aragar
  const boss = [yamiTheDreamer];
  const waveOne = aragarEasy;
  const waveTwo = aragarMedium;
  const waveThree = aragarHard;
  const townName = "Elyssia";

  return {
    townName,
    boss,
    waveOne,
    waveTwo,
    waveThree,
  };
};
export { Elyssia };
