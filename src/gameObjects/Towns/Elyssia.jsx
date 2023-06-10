//towns as function components that return  the town and objects for town such as monsters and npcs

import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { yamiTheDreamer } from "../bossCards";
import { townActions } from "../../store/slices/townSlice";

const Elyssia = () => {
  const dispatch = useDispatch();
  //fucntion component to make the town of Aragar
  const boss = [yamiTheDreamer];
  const waveOne = aragarEasy;
  const waveTwo = aragarMedium;
  const waveThree = aragarHard;
  const townName = "Elyssia";
  let isBossDefeated = false;

  const defeatTheBoss = () => {
    isBossDefeated = true;
  };

  const unlockNextTown = () => {
    if (
      isEasyDefeated &&
      isMediumDefeated &&
      isHardDefeated &&
      isBossDefeated
    ) {
      dispatch(townActions.unlockTown({ town: "Thorgar" }));
    }
  };

  if (isBossDefeated) {
    unlockNextTown();
  }

  return {
    townName,
    boss,
    waveOne,
    waveTwo,
    waveThree,
    isBossDefeated,

    defeatTheBoss,
  };
};
export { Elyssia };
