import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './GameComponent_StoryBoard.scss';
import { TypeAnimation } from 'react-type-animation';

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

const StoryBoard_Content = ({ story, currentStory }) => {
  return (
    <div id="StoryBoard_Content">
      {story[currentStory].playerText ? (
        <div id="player-text">
          <PlayerImg story={story} currentStory={currentStory} />
        </div>
      ) : (
        <div id="npc-text">
          <NpcImg story={story} currentStory={currentStory} />
        </div>
      )}
      <StoryBoard_Dialog story={story} currentStory={currentStory} />
    </div>
  );
};
const StoryBoard_Dialog = (props) => {
  const { story, currentStory } = props;
  return (
    <div id="StoryBoard_Text">
      <p>
        {story[currentStory].playerText}
        {story[currentStory].npcText}
      </p>
    </div>
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

// ? Framer Motion Varient, (Object to store re-useable animation values) used in both PlayerImg and NpcImg
const imgVariants = {
  initial: { opacity: 0, scale: 0.75 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, type: 'spring' },
  whileHover: { scale: 1.2 },
};

const NpcImg = ({ story, currentStory }) => {
  return (
    <motion.img
      src={story[currentStory].npcImg}
      alt="blankfornow"
      id="npc-img"
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring' }}
      whileHover={{ scale: 1.2 }}
    />
  );
};
const PlayerImg = ({ story, currentStory }) => {
  return (
    <motion.img
      src={story[currentStory].playerImg}
      alt="blankfornow"
      id="player-img"
      variants={imgVariants}
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
