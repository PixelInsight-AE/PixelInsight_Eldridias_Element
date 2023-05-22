import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/Signup/Signup";
import { Home } from "./components/Home/Home";
import { useEffect, useState } from "react";
import { authUser } from "./../src/gameLogic/backendCalls/auth.js";
import { getCSRF } from "./../src/gameLogic/backendCalls/getCSRF.js";
import { mainStory } from "./../src/gameObjects/index.js";
import { img } from "./../src/assets/imgur.js";
function Eldridia() {
  const [user, setUser] = useState({
    username: "",
    isAuthenticated: false,
  });
  console.log(mainStory);

  const [state, setState] = useState({
    storyManager: {
      story: mainStory, // main story object here//,
    },
    battleManager: {},
    sceneManager: {},
    inventoryManager: {},
    deckManager: {},
    partyManager: {},
    heroManager: {},
    cardManager: {},
    saveManager: {},
    disabledManager: {},
  });

  useEffect(() => {
    //? This is where we will fetch all the data from the backend.
    //? We will then pass it down to the components that need it.
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/signup/introduction" element={<h1>Introduction</h1>} />

      <Route path="/dashboard" element={<h1>dash</h1>} />

      <Route path="/game" element={<h1>Game</h1>} />
      <Route path="/game/story" element={<h1>Story</h1>} />
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
const [battleManager, setBattleManager] = useState({});
const [sceneManager, setSceneManager] = useState({});

const [inventoryManager, setInventoryManager] = useState({});
const [deckManager, setDeckManager] = useState({});
const [partyManager, setPartyManager] = useState({});
const [heroManager, setHeroManager] = useState({});
const [cardManager, setCardManager] = useState({});

const [saveManager, setSaveManager] = useState({});
const [disabledManager, setDisabledManager] = useState({}); 
*/
