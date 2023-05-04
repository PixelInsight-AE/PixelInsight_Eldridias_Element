import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './GameComponent_StoryBoard.scss';

const StoryBoard_Header = (props) => {
  const { state, setState } = props;
  console.log(state.story[state.currentStory].chapterTitle);
  return (
    <div id="StoryBoard_Header">
      <h2>{state.story[state.currentStory].chapterTitle}</h2>
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
  const { state, setState } = props;

  let content = state.story[state.currentStory].content;

  return (
    <div id="StoryBoard_PlayerContent">
      <PlayerImg state={state} />
      <p>{state.story[state.currentStory].content}</p>
    </div>
  );
};
const StoryBoard_NpcContent = (props) => {
  const { state, setState } = props;
  let content = state.story[state.currentStory].content;
  return (
    <div id="StoryBoard_NpcContent">
      <NpcImg state={state} />

      <p>{state.story[state.currentStory].content}</p>
    </div>
  );
};
const StoryBoard_NarratorContent = (props) => {
  const { state, setState } = props;

  return (
    <div id="StoryBoard_NarratorContent">
      <img src={state.story[state.currentStory].image} alt="blankfornow" />
      <p>{state.story[state.currentStory].content}</p>
    </div>
  );
};

const StoryBoard_Content = ({ state, setState }) => {
  let text;
  if (state.story[state.currentStory].nameOfSpeaker === 'player') {
    text = (
      <StoryBoard_PlayerContent state={state} setState={setState} />
    );
  } else if (state.story[state.currentStory].nameOfSpeaker === 'npc') {
    text = <StoryBoard_NpcContent state={state} />;
  } else {
    text = (
      <StoryBoard_NarratorContent state={state}/>
    );
  }
  useEffect(() => {}, [state.story]);
  return <div id="StoryBoard_Content">{text}</div>;
};

const StoryBoardNavigation = ({
  handleNext,
  handleBack,
  handleStart,
  state,
  setState
}) => {
  const startButton = (
    <Link to={state.story[state.currentStory].path}>
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
      {state.story[state.currentStory].pathIsValid ? startButton : buttons}
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

const NpcImg = ({ state, setState }) => {
  return (
    <motion.img
      src={state.story[state.currentStory].image}
      alt="blankfornow"
      id="npc-img"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.2 }}
    />
  );
};
const PlayerImg = ({ state, setState }) => {
  return (
    <motion.img
      src={state.story[state.currentStory].image}
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
  const { state, setState } = props;
  const handleNext = () => {
    if (state.currentStory < state.story.length - 1) {
      setState({ ...state, currentStory: state.currentStory + 1, hasViewed: true });
    }
  };
  const handleBack = () => {
    if (state.currentStory > 0) {
      setState({ ...state, currentStory: state.currentStory - 1 });
    }
  };
  const handleStart = () => {
    setState({ ...state, currentStory: state.currentStory +1, hasViewed: true });
  };
  return (
    <div id="StoryBoard"
      style={{
        backgroundImage: `url(${state.story[state.currentStory].background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <StoryBoard_Header state={state}  />
      <StoryBoard_AnimationScreen />
      {/* {state.story[state.currentStory].isReward ? <StoryBoard_LootBox /> : null} */}

      <StoryBoard_Content state={state} setState={setState}  />

      <StoryBoardNavigation
        state={state}
        setState={setState}
        handleBack={handleBack}
        handleNext={handleNext}
        handleStart={handleStart}
      />
    </div>
  );
};
export { StoryBoard };
