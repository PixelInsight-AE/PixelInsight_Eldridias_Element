import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/DashBoard";

function Eldridia() {
  // todo add states for storyManager, battleManager, sceneManager, inventoryManager, deckManager, partyManager, heroManager, cardManager, saveManager, disabledManager.
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

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/signup" element={<h1>Signup</h1>} />
      <Route path="/signup/introduction" element={<h1>Introduction</h1>} />

      <Route path="/dashboard" element={<Dashboard />} />

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
