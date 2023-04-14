import { Link } from "react-router-dom";
//import { story } from "../../vanillaJsFiles/storyboard";
import { useState } from "react";
import { NavBar } from "./NavBar";

const StoryBoard = (props) => {
  const { party, story, currentStory, setCurrentStory } = props;
  const handleNext = () => {
    if (currentStory < story.length - 1) {
      setCurrentStory(currentStory + 1);
    }
  };
  const handleBack = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    }
  };
  const handleStart = () => {
    setCurrentStory(currentStory + 1);
  };

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
          <div>{story[currentStory].title}</div>
          <div id="story-board-card">
            {story[currentStory].playerText ? (
              <div id="player-box">
                <div id="player-box-image">
                  <span>{story[currentStory].nameOfSpeaker}</span>
                  {story[currentStory].imageIcon ? (
                    <img
                      className="player-image story-board-images"
                      src={story[currentStory].imageIcon}
                      alt="blankfornow"
                    />
                  ) : (
                    <img
                      className="player-image story-board-images"
                      src={party[0].imgUrl}
                      alt="blankfornow"
                    />
                  )}
                </div>
                <div id="player-box-text">{story[currentStory].playerText}</div>
              </div>
            ) : (
              <div id="npc-box">
                <div id="npc-box-text">{story[currentStory].npcText}</div>
                <div id="npc-box-image">
                  <span>{story[currentStory].nameOfSpeaker}</span>
                  <img
                    className="npc-image story-board-images"
                    src={story[currentStory].imageIcon}
                    alt="blankfornow"
                  />
                </div>
              </div>
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
              <button onClick={handleStart}>Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { StoryBoard };
