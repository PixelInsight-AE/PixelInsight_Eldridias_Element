import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './GameComponent_StoryBoard.scss';

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

const StoryBoard_AnimationScreen = (props) => {
  return (
    <div id="StoryBoard_AnimationScreen">
      <h2>Animations</h2>
    </div>
  );
};
const StoryBoard_PlayerContent = (props) => {
  const { story, currentStory } = props;

  let content = story[currentStory].content;

  return (
    <div id="StoryBoard_PlayerContent">
      <PlayerImg story={story} currentStory={currentStory} />
      <p>{story[currentStory].content}</p>
    </div>
  );
};
const StoryBoard_NpcContent = (props) => {
  const { story, currentStory } = props;
  let content = story[currentStory].content;
  return (
    <div id="StoryBoard_NpcContent">
      <NpcImg story={story} currentStory={currentStory} />

      <p>{story[currentStory].content}</p>
    </div>
  );
};
const StoryBoard_NarratorContent = (props) => {
  const { story, currentStory } = props;

  return (
    <div id="StoryBoard_NarratorContent">
      <img src={story[currentStory].image} alt="blankfornow" />
      <p>{story[currentStory].content}</p>
    </div>
  );
};

const StoryBoard_Content = ({ story, currentStory }) => {
  let text;
  if (story[currentStory].nameOfSpeaker === 'player') {
    text = (
      <StoryBoard_PlayerContent story={story} currentStory={currentStory} />
    );
  } else if (story[currentStory].nameOfSpeaker === 'npc') {
    text = <StoryBoard_NpcContent story={story} currentStory={currentStory} />;
  } else {
    text = (
      <StoryBoard_NarratorContent story={story} currentStory={currentStory} />
    );
  }
  useEffect(() => {}, [story]);
  return <div id="StoryBoard_Content">{text}</div>;
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
    <div id="story-board-navigation">
      {story[currentStory].pathIsValid ? startButton : buttons}
    </div>
  );
};
const StoryBoard_LootBox = (props) => {
  return (
    <div id="StoryBoard_LootBox">
      <h2>LootBox</h2>
    </div>
  );
};

const NpcImg = ({ story, currentStory }) => {
  return (
    <motion.img
      src={story[currentStory].image}
      alt="blankfornow"
      id="npc-img"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.2 }}
    />
  );
};
const PlayerImg = ({ story, currentStory }) => {
  return (
    <motion.img
      src={story[currentStory].image}
      alt="blankfornow"
      id="player-img"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.2 }}
    />
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
    <div id="StoryBoard">
      <StoryBoard_Header story={story} currentStory={currentStory} />
      <StoryBoard_AnimationScreen />
      {story[currentStory].isReward ? <StoryBoard_LootBox /> : null}

      <StoryBoard_Content story={story} currentStory={currentStory} />

      <StoryBoardNavigation
        story={story}
        currentStory={currentStory}
        handleBack={handleBack}
        handleNext={handleNext}
        handleStart={handleStart}
      />
    </div>
  );
};
export { StoryBoard };
