import { Aragar, Elyssia, Thorgar, Introduction } from "./index";
import { useState } from "react";

const TownHub = () => {
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

  return { currentTown, handleTownSelect, monstersToDisplay, setEncounter };
};
export { TownHub };
