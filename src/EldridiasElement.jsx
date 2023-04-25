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
  paladin,
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
  bossTwo,
  floor1,
  floor2,
} from "./vanillaJsFiles/floors.js";
import { StoryBoard } from "./components/UI/GameComponent_StoryBoard.jsx";
import { storyOne } from "./vanillaJsFiles/storyboard.js";
//console.log(controller);

function EldridiasElement() {
  const [state, setState] = useState({
    controller: controller,
    computer: computer,
    tank: bulwark,
    melee: beastMaster,
    ranged: gunslinger,
    healer: hogarth,
    party: [
      bulwark,
      beastMaster,
      gunslinger,
      hogarth,
    ],
    boss: bossTwo,
    currentWave: 0,
    maxFloor: 1,
    currentFloor: 1,
    floor: floor1[0],
    currency: 500,
    inventory: [],
    deck: [...magicPlayingCards, ...allElementalCards],
    story: storyOne,
    currentStory: 0,
    currentLevel: 0,
  });

  // ! Like our error said, in V6 we need to nest all Route elements inside of a Routes component.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard state={state} setState={setState}/>
        }
      />
      <Route
        path="/dashboard/overview"
        element={
          <OverView state={state} setState={setState} />
        }
      />
      <Route
        path="/dashboard/party"
        element={
          <Party state={state} setState={setState} />
        }
      />
      <Route path="/dashboard/deck" element={<DeckBuilder state={state} setState={setState}  />} />
      <Route path="/dashboard/catalog" element={<Catalog state={state} setState={setState}  />} />
      <Route path="/dashboard/shop" element={<Shop />} />
      <Route
        path="/dashboard/play"
        element={<GameComponent state={state} setState={setState} />}
      />
      <Route path="/dashboard/story" element={<StoryBoard state={state} setState={setState} />} />
    </Routes>
  );
}

export default EldridiasElement;

// party and set party hoo
