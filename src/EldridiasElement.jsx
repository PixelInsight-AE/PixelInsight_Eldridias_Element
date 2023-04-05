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

function EldridiasElement() {
  const [tank, setTank] = useState(bulwark);
  const [melee, setMelee] = useState(beastMaster);
  const [ranged, setRanged] = useState(gunslinger);
  const [healer, setHealer] = useState(hogarth);
  const [party, setParty] = useState([tank, melee, ranged, healer]);
  const [deck, setDeck] = useState([
    ...magicPlayingCards,
    ...allElementalCards,
  ]);

  // ! Like our error said, in V6 we need to nest all Route elements inside of a Routes component.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard party={party} />} />
      <Route path="/dashboard/overview" element={<OverView party={party} />} />
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
      <Route path="/dashboard/play" element={<GameComponent />} />
    </Routes>
  );
}

export default EldridiasElement;

// party and set party hoo
