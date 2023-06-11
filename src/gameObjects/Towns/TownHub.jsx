import { Aragar, Elyssia, Thorgar, Introduction } from "./index";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { townActions } from "../../store/slices/townSlice";
const TownHub = () => {
  const dispatch = useDispatch();
  //? Towns

  const townOfAragar = Aragar();
  const townOfElyssia = Elyssia();
  const townOfThorgar = Thorgar();

  //? Town Select
  const [currentTown, setCurrentTown] = useState(townOfAragar);
  const [encounter, setEncounter] = useState("waveTwo");
  let monstersToDisplay;

  if (encounter === "waveOne") {
    monstersToDisplay = currentTown.waveOne;
  }
  if (encounter === "waveTwo") {
    monstersToDisplay = currentTown.waveTwo;
  }
  if (encounter === "waveThree") {
    monstersToDisplay = currentTown.waveThree;
  }
  if (encounter === "boss") {
    monstersToDisplay = currentTown.boss;
  }

  const handleTownSelect = (town) => {
    if (town === "Aragar") {
      setCurrentTown(townOfAragar);
    }
    if (town === "Elyssia") {
      setCurrentTown(townOfElyssia);
    }
    if (town === "Thorgar") {
      setCurrentTown(townOfThorgar);
    }
  };

  // const unlockNextTown = () => {
  //   if (currentTown.townName === "Aragar") {
  //     dispatch(townActions.unlockTown({ town: "Elyssia" }));
  //   }
  //   if (currentTown.townName === "Elyssia") {
  //     dispatch(townActions.unlockTown({ town: "Thorgar" }));
  //   }
  // };

  return {
    currentTown,
    monstersToDisplay,
    handleTownSelect,
    setEncounter,
  };
};
export { TownHub };
