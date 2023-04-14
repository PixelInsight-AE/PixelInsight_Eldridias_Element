import { Link } from "react-router-dom";
//import { story } from "../../vanillaJsFiles/storyboard";
import { useState } from "react";
import { NavBar } from "./NavBar";

const StoryBoard = (props) => {
  const { party, story, currentStory, setCurrentStory } = props;
  const handleNext = () => {
    console.log("next");
    if (currentStory < story.length - 1) {
      setCurrentStory(currentStory + 1);
    }
    if (currentStory == story.length - 1) {
      console.log("finished story");

      //make button appear to start game
    }
  };
  const handleBack = () => {
    console.log("back");
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    }
  };
  console.log(story[currentStory].id);
  console.log(story[currentStory].title);
  console.log(story[currentStory].image);
  console.log(story[currentStory].playerText);
  console.log(story[currentStory].npcText);
  console.log(story[currentStory].path);
  return (
    <>
      <div
        className="storyboard-background"
        style={{
          backgroundImage: `url(${story[currentStory].image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div id="storyBoard">
          <div id="story-board-card">
            {story[currentStory].playerText ? (
              <div id="player-box">
                <div id="player-box-image">
                  <span>{party[0].name}</span>
                  <img
                    className="player-image story-board-images"
                    src={party[0].imgUrl}
                    alt="blankfornow"
                  />
                </div>
                <div id="player-box-text">{story[currentStory].playerText}</div>
              </div>
            ) : (
              <div></div>
            )}

            <div></div>
            {story[currentStory].npcText ? (
              <div id="npc-box">
                <div id="npc-box-text">{story[currentStory].npcText}</div>
                <div id="npc-box-image">
                  <span>npc name here</span>
                  <img
                    className="npc-image story-board-images"
                    src="https://i.imgur.com/PcpghWi.png"
                    alt="blankfornow"
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <Link to="/dashboard">
              <button className="storyboard-exit-button">Exit</button>
            </Link>
            {story[currentStory].pathIsValid ? (
              <Link to={story[currentStory].path}>
                <button
                  onClick={handleNext}
                  className="storyboard-start-button"
                >
                  Start
                </button>
              </Link>
            ) : null}
          </div>
          <div id="storyboard-navigation">
            <button onClick={handleBack}>Back</button>
            {story[currentStory].pathIsValid ? (
              <p></p>
            ) : (
              <button onClick={handleNext}>Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { StoryBoard };
