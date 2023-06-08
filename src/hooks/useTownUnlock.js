import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { townActions } from "../store/slices/townSlice";
export const useTownUnlock = () => {
  const dispatch = useDispatch();
  const towns = useSelector((state) => state.townManager);
  const viewTownList = () => {
    const townNames = Object.keys(towns);
    const townUnlocks = Object.values(towns);
    const townsArray = [];
    for (let i = 0; i < townNames.length; i++) {
      if (townUnlocks[i] === true) {
        townsArray.push(townNames[i]);
      }
    }
    return townsArray;
  };

  const unlockTown = (town) => {
    dispatch(townActions.unlockTown({ town: town }));
  };

  return { viewTownList, unlockTown };
};
