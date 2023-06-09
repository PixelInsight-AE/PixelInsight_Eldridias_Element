import { useSelector } from "react-redux";
import { useState } from "react";
const useSaveGame = () => {
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(null);
  const mana = useSelector((state) => state.playerManager.mana);
  const gameStatus = useSelector((state) => state.playerManager.gameStatus);
  const party = useSelector((state) => state.partyManager);

  const saveState = {
    tankName: tankName,
    tankExp: tankExp,
    mana: mana,
    gameStatus: gameStatus,
  };

  const saveGame = async (saveData) => {
    const token = localStorage.getItem("eldridia_token ");
    const res = await fetch("http://localhost:3333/api/save", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      Authorization: `Bearer ${token}`,
      body: JSON.stringify(saveData),
    });
    const json = await res.json();
    if (!res.ok) {
      console.log(json);
    } else {
      console.log(json);
    }
    return saveGame(saveState);
  };

  return { saveGame };
};
export { useSaveGame };
