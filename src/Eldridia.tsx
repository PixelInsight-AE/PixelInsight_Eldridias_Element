import { Routes, Route, useNavigate } from "react-router-dom";
import { useLockout } from "../src/hooks/useLockout";
import { SignUp } from "./components/Signup/Signup";
import { Home } from "./components/Home/Home";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoryBoard, Dashboard } from "./../src/components/index.js";
import { GameComponent } from "./components/Game/GameComponent.js";
import { TownHub } from "../src/gameObjects/Towns/TownHub.jsx";
function Eldridia() {
  const { lockout } = useLockout();
  const { currentTown, handleTownSelect, monstersToDisplay, setEncounter } =
    TownHub();
  const [disabledManager, setDisabledManager] = useState({
    partyBuilder: true,
    inventory: true,
    deckBuilder: true,
    shop: true,
    tankSelect: true,
    healerSelect: true,
    meleeSelect: true,
    rangedSelect: true,
  });

  // useEffect(() => {
  //   const currentPath = window.location.pathname;
  //   lockout(currentPath);
  // }, [lockout]);

  //basic auto save feature here with useEffect
  useEffect(() => {
    //fetch game save data
    //depe
    return () => {
      //save game data
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/introduction" element={<h1></h1>} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            currentTown={currentTown}
            setEncounter={setEncounter}
            handleTownSelect={handleTownSelect}
          />
        }
      />
      <Route path="/game" element={<h1>Game</h1>} />
      <Route path="/game/story" element={<StoryBoard />} />
      <Route
        path="/game/play"
        element={
          <GameComponent
            currentTown={currentTown}
            monsters={monstersToDisplay}
            handleTownSelect={handleTownSelect}
          />
        }
      />
      <Route path="/account" element={<h1>Account</h1>} />
      <Route path="/account/profile" element={<h1>Profile</h1>} />
      <Route path="/account/settings" element={<h1>Settings</h1>} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Eldridia;

// ? All good and cleaned up.
// todo get rid of UI folder
