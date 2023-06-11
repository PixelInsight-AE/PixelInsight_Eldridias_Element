//towns as function components that return  the town and objects for town such as monsters and npcs

import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { yamiTheDreamer } from "../bossCards";
import { townActions } from "../../store/slices/townSlice";
import { useState } from "react";

const Elyssia = () => {
  const dispatch = useDispatch();
  const [bossDead, setBossDead] = useState(false);
  //fucntion component to make the town of Aragar
  const boss = [yamiTheDreamer];
  const waveOne = aragarEasy;
  const waveTwo = aragarMedium;
  const waveThree = aragarHard;
  const townName = "Elyssia";

  const handleBossDeath = () => {
    if (boss[0].health <= 0) {
      setBossDead(true);
      // boss.imgUrl = boss.deathImgUrl;
    }
  };
  if (bossDead) {
    dispatch(townActions.unlockTown({ town: "Elyssia" }));
  }

  return {
    townName,
    boss,
    waveOne,
    waveTwo,
    waveThree,
    handleBossDeath,
  };
};
export { Elyssia };
