import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./StoryBoard.scss";
import { img } from "./../../assets/imgur.js";
import { mainStory } from "/src/gameObjects/storyboard";
import { Header } from "./_Header.tsx";
import { Viewport } from "./_Viewport.tsx";

// todo: to be subdivided for images
const Dialog = (props) => {
  const { currentIndex } = props;
  return (
    <section id="Dialog">
      <h2>{mainStory[currentIndex].title}</h2>
      <p>{mainStory[currentIndex].content}</p>
    </section>
  );
};

const Controls = (props) => {
  const { currentIndex, setCurrentIndex } = props;

  const handleNext = () => {
    console.log(mainStory);
    if (currentIndex < mainStory.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleStart = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div id="Controls">
      <button onClick={handlePrevious}>Back</button>
      <button onClick={handleNext}>Next</button>
      {mainStory[currentIndex].pathIsValid ? (
        <Link to={mainStory[currentIndex].paths}>
          <button onClick={handleStart}>Start</button>
        </Link>
      ) : null}
    </div>
  );
};

const StoryBoard = (props) => {
  // const { state, setState } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div
      // style={{ backgroundImage: `url(${mainStory[currentIndex].backgrounds})` }}
      id="StoryBoard"
    >
      <Header />
      <main>
        <Viewport />
        <Dialog currentIndex={currentIndex} />
        <Controls
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </main>
    </div>
  );
};

export { StoryBoard };

// const StoryBoardNavigation = ({
//   handleNext,
//   handleBack,
//   handleStart,
//   storyManager,
//   setState,
// }) => {
//   const startButton = (
//     <Link to={" "}>
//       <button onClick={handleNext}>Start</button>
//     </Link>
//   );
//   const buttons = (
//     <div>
//       <button onClick={handleBack}>Back</button>
//       <button onClick={handleStart}>Next</button>
//     </div>
//   );
//   return (
//     <div id="story-board-navigation"></div>
//       {storyManager.story[storyManager.currentIndex].pathIsValid
//         ? startButton
//         : buttons}
//     </div>
//   );
// };
// const StoryBoard_LootBox = (props) => {
//   return (
//     <div id="StoryBoard_LootBox">
//       <h2>LootBox</h2>
//     </div>
//   );
// };
// const StoryBoard_PlayerContent = (props) => {
//   const { storyManager, setState } = props;

//   return (
//     <div id="StoryBoard_PlayerContent">
//       <PlayerImg storyManager={storyManager} />
//       <p> </p>
//     </div>
//   );
// };
// const StoryBoard_NpcContent = (props) => {
//   const { storyManager, setState } = props;

//   return (
//     <div id="StoryBoard_NpcContent">
//       <NpcImg storyManager={storyManager} />

//       <p> </p>
//     </div>
//   );
// };
// const StoryBoard_NarratorContent = (props) => {
//   const { storyManager, setState } = props;

//   return (
//     <div id="StoryBoard_NarratorContent">
//       <img src="" alt="blankfornow" />
//       <p>{}</p>
//     </div>
//   );
// };

// const StoryBoard_Content = ({ storyManager, setState }) => {
//   let text;
//   if (mainStory[whateverStateForIndex].introduction.speakers === img.mainCharacters.player) {
//     text = (
//       <StoryBoard_PlayerContent
//         storyManager={storyManager}
//         setState={setState}
//       />
//     );
//   } else if (
//     storyManager.story.introduction.speakers === img.mainCharacters.npc
//   ) {
//     text = <StoryBoard_NpcContent storyManager={storyManager} />;
//   } else {
//     text = <StoryBoard_NarratorContent storyManager={storyManager} />;
//   }

//   return <div id="StoryBoard_Content">{/*text*/}</div>;
// };

// const NpcImg = ({ storyManager, setState }) => {
//   return (
//     <motion.img
//       src={" "}
//       alt="blankfornow"
//       id="npc-img"
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       whileHover={{ scale: 1.2 }}
//     />
//   );
// };
// const PlayerImg = ({ storyManager, setState }) => {
//   return (
//     <motion.img
//       src={" "}
//       alt="blankfornow"
//       id="player-img"
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       whileHover={{ scale: 1.2 }}
//     />
//   );
// };

// const StoryBoard = (props) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const { storyManager, setState } = props;
//   const handleNext = () => {
//     if (storyManager.currentIndex < storyManager.story.length - 1) {
//       setState({
//         ...storyManager,
//         currentIndex: storyManager.currentIndex + 1,
//         hasViewed: true,
//       });
//     }
//   };
//   const handleBack = () => {
//     if (storyManager.currentIndex > 0) {
// /*       setState({
//         ...storyManager,
//         currentIndex: storyManager.currentIndex - 1,
//       }); */
//       setCurrentIndex(currentIndex - 1)
//     }
//   };
//   const handleStart = () => {
//     setState({
//       ...storyManager,
//       currentIndex: storyManager.currentIndex + 1,
//       hasViewed: true,
//     });
//   };
//   return (
//     <div
//       id="StoryBoard"
//       style={{
//         backgroundImage: `url(${
//           storyManager.story[storyManager.currentIndex]
//         })`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <StoryBoard_Header storyManager={storyManager} />
//       <StoryBoard_AnimationScreen />
//       {/* {storyManager.story[storyManager.currentIndex].isReward ? <StoryBoard_LootBox /> : null} */}

//       <StoryBoard_Content storyManager={storyManager} setState={setState} />

//       <StoryBoardNavigation
//         storyManager={storyManager}
//         setState={setState}
//         handleBack={handleBack}
//         handleNext={handleNext}
//         handleStart={handleStart}
//       />
//     </div>
//   );
// };
