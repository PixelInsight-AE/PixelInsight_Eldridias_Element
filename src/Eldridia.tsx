import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/Signup/Signup";
import { Home } from "./components/Home/Home";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  mainStory,
  bulwark,
  beastMaster,
  hogarth,
  sorceress,
  gunslinger,
} from "./../src/gameObjects/index.js";
import { img } from "./../src/assets/imgur.js";
import { StoryBoard, Dashboard } from "./../src/components/index.js";
function Eldridia() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [sceneManager, setSceneManager] = useState({});
  const [levelManager, setLevelManager] = useState({
    boss: "blankfornow",
    currentLevel: 1,
    maxFloor: 1,
    currentFloor: 1,
    location: "blankfornow",
    wave: null,
  });
  const [battleManager, setBattleManager] = useState({
    selectedCard: "None",
    targetHero: null,
    targetMonster: null,
    heroHealth: null,
    monsterHealth: null,
    heroDamageAnimation: null,
    monsterDamageAnimation: null,
  });
  const [inventoryManager, setInventoryManager] = useState({
    orbs: 0,
  });
  const [gameManager, setGameManager] = useState({
    currentScene: "StoryBoard",
    overview: "party",
    controller: null,
    // currentIndex: 0,
  });
  const [deckManager, setDeckManager] = useState({});
  const [partyManager, setPartyManager] = useState({
    tank: bulwark,
    melee: beastMaster,
    ranged: gunslinger,
    healer: hogarth,
    party: [bulwark, beastMaster, hogarth, gunslinger],
  });
  const [heroManager, setHeroManager] = useState({});
  const [cardManager, setCardManager] = useState({});

  const [saveManager, setSaveManager] = useState({});
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

  useEffect(() => {
    //? This is where we will fetch all the data from the backend.
    //? We will then pass it down to the components that need it.
  }, []);
  console.log(isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/signup/introduction" element={<h1>Introduction</h1>} />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            sceneManager={sceneManager}
            levelManager={levelManager}
            battleManager={battleManager}
            inventoryManager={inventoryManager}
            deckManager={deckManager}
            partyManager={partyManager}
            heroManager={heroManager}
            cardManager={cardManager}
            saveManager={saveManager}
            disabledManager={disabledManager}
            gameManager={gameManager}
          />
        }
      />

      <Route path="/game" element={<h1>Game</h1>} />
      <Route path="/game/story" element={<StoryBoard />} />
      <Route path="/game/play" element={<h1>Play</h1>} />

      <Route path="/account" element={<h1>Account</h1>} />
      <Route path="/account/profile" element={<h1>Profile</h1>} />
      <Route path="/account/settings" element={<h1>Settings</h1>} />
    </Routes>
  );
}

export default Eldridia;

// ? All good and cleaned up.
// todo get rid of UI folder
/* 
const [storyManager, setStoryManager] = useState({});

*/
