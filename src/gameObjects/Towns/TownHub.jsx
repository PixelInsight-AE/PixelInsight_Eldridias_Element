import { Aragar, Elyssia, Thorgar } from "./index";
import { useState } from "react";

const TownHub = () => {
  //? Towns
  const townOfAragar = Aragar();
  const townOfElyssia = Elyssia();
  const townOfThorgar = Thorgar();

  //? Town Select
  const [currentTown, setCurrentTown] = useState(townOfAragar);

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

  return { currentTown, handleTownSelect };
};
export { TownHub };
