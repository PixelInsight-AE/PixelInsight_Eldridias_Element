import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Dashboard,
  GameComponent,
  StoryBoard,
  Home,
} from './components/UI/index.js';
import {
  magiTheLiar,
  yamiTheDreamer,
  sargarasTheDestroyer,
  computer,
  controller,
  Hero,
  Monster,
  ElementCard,
  MagicCard,
  allElementalCards,
  magicPlayingCards,
  monsterList,
  monsterList2,
  deck,
  heroList,
  bulwark,
  hogarth,
  beastMaster,
  sorceress,
  druidess,
  gunslinger,
  paladin,
  seer,
  shadow,
  storm,
  nightshade,
  storyOne,
  sceneManager,
} from './vanillaJsFiles/index.js';

function EldridiasElement() {
  const [state, setState] = useState({
    OverView: 'party',
    controller: controller,
    computer: computer,
    playerHand: [],
    tank: bulwark,
    melee: beastMaster,
    ranged: gunslinger,
    healer: hogarth,
    party: [bulwark, beastMaster, gunslinger, hogarth],
    //! will replace monsterList with sceneManager(), which will be a switch case
    sceneManager: monsterList,
    difficulty: 4,
    currency: 500,
    inventory: [],
    deck: [...magicPlayingCards, ...allElementalCards],
    story: storyOne,
    currentStory: 0,
  });

  // ! Like our error said, in V6 we need to nest all Route elements inside of a Routes component.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={<Dashboard state={state} setState={setState} />}
      />
      <Route
        path="/dashboard/play"
        element={<GameComponent state={state} setState={setState} />}
      />
      <Route
        path="/dashboard/story"
        element={<StoryBoard state={state} setState={setState} />}
      />
    </Routes>
  );
}

export default EldridiasElement;
