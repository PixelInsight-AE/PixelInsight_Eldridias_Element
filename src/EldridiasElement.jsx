import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Dashboard,
  GameComponent,
  StoryBoard,
  Home,
} from './components/UI/index.js';

// ? taken out all unused imports, left sceneManger in here due to your comment. :) 
import {
  computer,
  controller,
  allElementalCards,
  magicPlayingCards,
  monsterList,
  monsterList2,
  bulwark,
  hogarth,
  beastMaster,
  gunslinger,
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
    party: [bulwark, beastMaster, hogarth, gunslinger],
    //! will replace monsterList with sceneManager(), which will be a switch case
    // ? Tell me about that... 
    selectedScene: 'gameStart',
    sceneManager: [monsterList, monsterList2],
    difficulty: 4,
    currency: 500,
    inventory: [],
    deck: [...magicPlayingCards, ...allElementalCards],
    story: storyOne,
    currentStory: 0,
  });

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

// ? All good and cleaned up.