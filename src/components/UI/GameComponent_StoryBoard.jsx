import { Link } from "react-router-dom";
//import { story } from "../../vanillaJsFiles/storyboard";
import { useState } from "react";
import { NavBar } from "./NavBar";
import "./GameComponent_StoryBoard.scss";

const StoryBoard_Header = (props) => {
  const { story, currentStory } = props;
  console.log(story[currentStory].chapterTitle);
  return (
    <div id="StoryBoard_Header">
      <h2>{story[currentStory].chapterTitle}</h2>
      <Link to="/dashboard">
        <button className="exit-button">Exit</button>
      </Link>
    </div>
  );
};

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
        style={
          {
            // backgroundImage: `url(${story[currentStory].background})`,
          }
        }
      >
        <StoryBoard_Header story={story} currentStory={currentStory} />

        <div id="storyBoard">
          <div id="chapter-title">{story[currentStory].title}</div>
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
          </div>
          <StoryBoardNavigation
            story={story}
            currentStory={currentStory}
            handleBack={handleBack}
            handleNext={handleNext}
            handleStart={handleStart}
          />
        </div>
      </div>
    </>
  );
};

const StoryBoardNavigation = ({
  story,
  handleBack,
  handleNext,
  handleStart,
  currentStory,
}) => {
  const startButton = (
    <Link to={story[currentStory].path}>
      <button onClick={handleNext}>Start</button>
    </Link>
  );

  const buttons = (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleStart}>Next</button>
    </div>
  );

  return (
    <div id="storyboard-naviagation">
      {story[currentStory].pathIsValid ? startButton : buttons}
    </div>
  );
};
export { StoryBoard };
