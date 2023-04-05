import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { controller } from "./vanillaJsFiles/controller.js";
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
import { Home } from "./components/Home.jsx";
import { Dashboard, Catalog, Shop, OverView } from "./components/DashBoard.jsx";
import { Party } from "./components/DashBoard_Party.jsx";
import { DeckBuilder } from "./components/DashBoard_Deck.jsx";
import { GameComponent } from "./components/GameComponent.jsx";
import {
  waveOne,
  waveTwo,
  waveThree,
  bossOne,
  floorOne,
} from "./vanillaJsFiles/floors.js";
//console.log(controller);
function EldridiasElement() {
  const [playerController, setPlayerController] = useState(controller);
  const [tank, setTank] = useState(bulwark);
  const [melee, setMelee] = useState(beastMaster);
  const [ranged, setRanged] = useState(gunslinger);
  const [healer, setHealer] = useState(hogarth);
  const [party, setParty] = useState([tank, melee, ranged, healer]);
  const [boss, setBoss] = useState(bossOne);
  const [floor, setFloor] = useState(waveOne);
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
            party={party}
            boss={boss}
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
            party={party}
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
      <Route path="/dashboard/catalog" element={<Catalog />} />
      <Route path="/dashboard/shop" element={<Shop />} />
      <Route
        path="/dashboard/play"
        element={
          <GameComponent
            playerController={playerController}
            boss={boss}
            party={party}
            deck={deck}
            floor={floor}
            setFloor={setFloor}
            currency={currency}
            setCurrency={setCurrency}
            inventory={inventory}
            setInventory={setInventory}
          />
        }
      />
    </Routes>
  );
}

export default EldridiasElement;

// party and set party hoo
