import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { storyOne } from "../../vanillaJsFiles/storyboard";
import { useState } from "react";
const story = storyOne;
const Catalog = (props) => {
  const { party } = props;
  return (
    <div>
      <NavBar />
      <h1>Catalog</h1>
      <StoryBoard party={party} story={story} />
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};
const StoryBoard = (props) => {
  const [currentPart, setCurrentPart] = useState(0);
  const { party, npc } = props;
  const handleNext = () => {
    console.log("next");
    if (currentPart < story.length - 1) {
      setCurrentPart(currentPart + 1);
    }
  };
  const handleBack = () => {
    console.log("back");
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  return (
    <>
      <div id="storyBoard">
        <div id="story-board-card">
          <div id="player-box">
            <div id="player-box-image">
              <span>{party[0].name}</span>
              <img
                className="player-image story-board-images"
                src={party[0].imgUrl}
                alt="blankfornow"
              />
            </div>
            <div id="player-box-text">{story[currentPart].playerText}</div>
          </div>
          <div id="npc-box">
            <div id="npc-box-text">{story[currentPart].npcText}</div>
            <div id="npc-box-image">
              <span>npc name here</span>
              <img
                className="npc-image story-board-images"
                src="https://i.imgur.com/PcpghWi.png"
                alt="blankfornow"
              />
            </div>
          </div>
        </div>
        <div id="storyBoard-navigation">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
};
export { Catalog };
