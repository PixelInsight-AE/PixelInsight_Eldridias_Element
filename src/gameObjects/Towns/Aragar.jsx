//towns as function components that return  the town and objects for town such as monsters and npcs
import { aragarEasy, aragarHard, aragarMedium, aragarBoss } from "./Aragar";
import { useDispatch } from "react-redux";
import { townActions } from "../../store/slices/townSlice";

const Aragar = () => {
  const dispatch = useDispatch();
  const boss = aragarBoss;
  const waveOne = aragarEasy;
  const waveTwo = aragarMedium;
  const waveThree = aragarHard;
  const isEasyDefeated = false;
  const isMediumDefeated = false;
  const isHardDefeated = false;
  const townName = "Aragar";
  let isBossDefeated = false;

  // const sounds = {};
  // const images = {};
  // const aragarLoot = [
  //   allElementalCards[Math.random(0, 10) * 100],
  //   allElementalCards[Math.random(0, 10) * 100],
  //   allElementalCards[Math.random(0, 10) * 100],
  // ];
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
      dispatch(townActions.unlockTown({ town: "Elyssia" }));
    }
  };

  return {
    boss,
    waveOne,
    waveTwo,
    waveThree,
    townName,
    isBossDefeated,
    unlockNextTown,
    defeatTheBoss,
  };
};
export { Aragar };
