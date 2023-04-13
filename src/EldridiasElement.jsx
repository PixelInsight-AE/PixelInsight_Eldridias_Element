import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { controller } from "./vanillaJsFiles/controller.js";
import { computer } from "./vanillaJsFiles/computerPlayer.js";
import {
  bulwark,
  sorceress,
  shadow,
  beastMaster,
  hogarth,
  gunslinger,
} from "./vanillaJsFiles/heros.js";
import { magicPlayingCards } from "./vanillaJsFiles/magicCards.js";
import { allElementalCards } from "./vanillaJsFiles/elementCards.js";
import { Home } from "./components/UI/Home.jsx";
import {
  Dashboard,
  Catalog,
  Shop,
  OverView,
} from "./components/UI/DashBoard.jsx";
import { Party } from "./components/UI/DashBoard_Party.jsx";
import { DeckBuilder } from "./components/UI/DashBoard_Deck.jsx";
import { GameComponent } from "./components/UI/GameComponent.jsx";
import {
  waveOne,
  waveTwo,
  waveThree,
  bossOne,
  floorOne,
} from "./vanillaJsFiles/floors.js";
import { StoryBoard } from "./components/UI/GameComponent_StoryBoard.jsx";
import { storyOne } from "./vanillaJsFiles/storyboard.js";
//console.log(controller);

function EldridiasElement() {
  const [story, setStory] = useState(storyOne);
  const [playerController, setPlayerController] = useState(controller);
  const [computerController, setComputerController] = useState(computer);
  const [tank, setTank] = useState(bulwark);
  const [melee, setMelee] = useState(beastMaster);
  const [ranged, setRanged] = useState(gunslinger);
  const [healer, setHealer] = useState(hogarth);
  const [party, setParty] = useState([tank, melee, ranged, healer]);
  const [boss, setBoss] = useState(bossOne);
  const [currentWave, setCurrentWave] = useState(0);
  const [floor, setFloor] = useState(floorOne[currentWave]);
  const [maxFloor, setMaxFloor] = useState(1);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [currency, setCurrency] = useState(500);
  const [inventory, setInventory] = useState([]);
  const [deck, setDeck] = useState([
    ...magicPlayingCards,
    ...allElementalCards,
  ]);

  // ! Like our error said, in V6 we need to nest all Route elements inside of a Routes component.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            playerController={playerController}
            currency={currency}
            setCurrency={setCurrency}
            inventory={inventory}
            setInventory={setInventory}
            floor={floor}
            setFloor={setFloor}
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
            maxFloor={maxFloor}
            setMaxFloor={setMaxFloor}
            party={party}
            boss={boss}
            computerController={computerController}
          />
        }
      />
      <Route
        path="/dashboard/overview"
        element={
          <OverView
            currency={currency}
            setCurrency={setCurrency}
            inventory={inventory}
            setInventory={setInventory}
            controller={playerController}
            floor={floor}
            setFloor={setFloor}
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
            maxFloor={maxFloor}
            setMaxFloor={setMaxFloor}
            party={party}
            computerController={computerController}
          />
        }
      />
      <Route
        path="/dashboard/party"
        element={
          <Party
            tank={tank}
            setTank={setTank}
            melee={melee}
            setMelee={setMelee}
            ranged={ranged}
            setRanged={setRanged}
            healer={healer}
            setHealer={setHealer}
            party={party}
            setParty={setParty}
          />
        }
      />
      <Route path="/dashboard/deck" element={<DeckBuilder deck={deck} />} />
      <Route path="/dashboard/catalog" element={<Catalog party={party} />} />
      <Route path="/dashboard/shop" element={<Shop />} />
      <Route
        path="/dashboard/play"
        element={
          <GameComponent
            playerController={playerController}
            computerController={computerController}
            boss={boss}
            party={party}
            deck={deck}
            floor={floor}
            setFloor={setFloor}
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
            maxFloor={maxFloor}
            setMaxFloor={setMaxFloor}
            currency={currency}
            setCurrency={setCurrency}
            inventory={inventory}
            setInventory={setInventory}
            currentWave={currentWave}
            setCurrentWave={setCurrentWave}
          />
        }
      />
      <Route
        path="/dashboard/story"
        element={<StoryBoard party={party} story={story} />}
      />
    </Routes>
  );
}

export default EldridiasElement;

// party and set party hoo
