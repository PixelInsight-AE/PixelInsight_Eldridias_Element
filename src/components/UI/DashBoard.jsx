import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Shop } from "./DashBoard_Shop";
import { Catalog } from "./DashBoard_Catalog";

// ? Party member to be mapped into the current party component.
const PartyMember = (props) => {
  const { hero } = props;
  return (
    <div className="healer-select">
      <h1 className="hero-name">{hero.name}</h1>

      <div className="hero-image">
        <img src={hero.imgUrl} alt={hero.name} />
      </div>
      <h2>
        LV: {hero.heroLevel} - {hero.elementType}
      </h2>
      <div className="stats-container">
        <div className="stats-hp">
          <h3>HP:</h3>
          <h3>{hero.maxHealth}</h3>
        </div>
        <div className="stats-ap">
          <h3>ATK:</h3>
          <h3>{hero.attackPower}</h3>
        </div>
        <div className="stats-df">
          <h3>DEF:</h3>
          <h3>{hero.defense}</h3>
        </div>
      </div>
    </div>
  );
};

// ? Holding the current party.
const OverviewCurrentParty = (props) => {
  const { party } = props;
  return (
    <div className="current-party-container">
      <h2>Current Party</h2>
      {party.map((hero) => (
        <div key={hero.name} className="hero-container">
          <PartyMember hero={hero} />
        </div>
      ))}
    </div>
  );
};

// ? mappping the achievements.
const OverviewAchievements = (props) => {
  const { achievements } = props;
  return (
    <div className="achievements-container">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

// ? Header for the overview page.
const OverviewHeader = (props) => {
  const { currentLevel, currency } = props;
  return (
    <div id="overview-header">
      <div className="level-container">
        <h2>Current Level</h2>
        <div>{currentLevel}</div>
      </div>
      <div className="currency-container">
        <h2>Currency</h2>
        <div>{currency}</div>
      </div>
    </div>
  );
};

// ? Start game component.
const OverviewStartGame = (props) => {
  const { currentLevel, setCurrentLevel } = props;
  return (
    <div className="start-game-container">
      <h2>Start Game</h2>
      <select
        value={currentLevel}
        onChange={(e) => setCurrentLevel(parseInt(e.target.value))}
      >
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
        <option value={4}>Level 4</option>
      </select>
    </div>
  );
};

const OverView = (props) => {
  const { party, story, setStory, currentStory, setCurrentStory } = props;
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currency, setCurrency] = useState(500);
  const [achievements, setAchievements] = useState([
    "Achievement 1",
    "Achievement 2",
    "Achievement 3",
  ]);
  //set story state to current story

  return (
    <div>
      <NavBar />
      <div className="overview-container">
        <h1>Overview</h1>

        <OverviewHeader currentLevel={currentLevel} currency={currency} />
        <OverviewCurrentParty party={party} />
        <OverviewAchievements achievements={achievements} />
        <OverviewStartGame
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />

        <Link to={story[currentStory].path}>
          <button>Start Game</button>
        </Link>
      </div>

      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Dashboard = (props) => {
  const { party, floor, boss, story, setStory, currentStory, setCurrentStory } =
    props;
  return (
    <div>
      <h1>Dashboard</h1>
      <OverView
        party={party}
        floor={floor}
        boss={boss}
        story={story}
        setStory={setStory}
        currentStory={currentStory}
        setCurrentStory={setCurrentStory}
      />
    </div>
  );
};

export { Dashboard, Catalog, Shop, OverView };
