import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Dashboard,
  GameComponent,
  StoryBoard,
  Home,
} from './components/UI/index.js';
import { allElementalCards } from './vanillaJsFiles/elementalCards/index.js';
// ? taken out all unused imports, left sceneManger in here due to your comment. :)
import {
  computer,
  controller,
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
    selectedScene: 1,
    monsterAmount: 4,
    currency: 500,
    inventory: [],
    deck: [...magicPlayingCards, ...allElementalCards],
    story: storyOne,
    currentStory: 0,
  });
  const [storyManager, setStoryManager] = useState({
    sceneManager: sceneManager(state.selectedScene),
  });
  //console.log(storyManager.sceneManager);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            state={state}
            setState={setState}
            storyManager={storyManager}
            setStoryManager={setStoryManager}
          />
        }
      />
      <Route
        path="/dashboard/play"
        element={
          <GameComponent
            state={state}
            setState={setState}
            storyManager={storyManager}
            setStoryManager={setStoryManager}
          />
        }
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
