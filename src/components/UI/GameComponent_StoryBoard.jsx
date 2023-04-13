import { Link } from "react-router-dom";
import { storyOne } from "../../vanillaJsFiles/storyboard";
import { useState } from "react";
import { NavBar } from "./NavBar";

const StoryBoard = (props) => {
  const [currentPart, setCurrentPart] = useState(0);
  const { party, story } = props;
  const handleNext = () => {
    console.log("next");
    if (currentPart < story.length - 1) {
      setCurrentPart(currentPart + 1);
    }
    if (currentPart == story.length - 1) {
      console.log("finished story");
      //make button appear to start game
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
      <div>
        <NavBar />
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
            <Link to="/dashboard">
              <button>Exit</button>
            </Link>

            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
            {currentPart == story.length - 1 ? (
              <Link to="/dashboard/play">
                <button>Start</button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export { StoryBoard };
