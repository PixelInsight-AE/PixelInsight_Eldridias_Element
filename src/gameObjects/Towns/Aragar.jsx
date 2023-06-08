//towns as function components that return  the town and objects for town such as monsters and npcs

import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Aragar = () => {
  //fucntion component to make the town of Aragar
  const bossAragar = aragarBoss;
  const waveOneAragar = aragarEasy;
  const waveTwoAragar = aragarMedium;
  const waveThreeAragar = aragarHard;

  return [bossAragar, waveOneAragar, waveTwoAragar, waveThreeAragar];
};
export { Aragar };
