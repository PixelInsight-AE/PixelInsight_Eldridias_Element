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
  const { state, setState } = props;
  return (
    <div className="current-party-container">
      <h2>Current Party</h2>
      {state.party.map((hero) => (
        <div key={hero.name} className="hero-container">
          <PartyMember hero={hero} />
        </div>
      ))}
    </div>
  );
};

// ? mappping the achievements.
const OverviewAchievements = (props) => {
  const { state, setState } = props;
  return (
    <div className="achievements-container">
      <h2>Achievements</h2>
      <ul>
        {/* {achievements.map((achievement) => (
          <li></li>
        ))} */}
      </ul>
    </div>
  );
};

// ? Header for the overview page.
const OverviewHeader = (props) => {
  const { state, setState } = props;
  return (
    <div id="overview-header">
      <div className="level-container">
        <h2>Current Level</h2>
        <div>{state.currentLevel}</div>
      </div>
      <div className="currency-container">
        <h2>Currency</h2>
        <div>{state.currency}</div>
      </div>
    </div>
  );
};

// ? Start game component.
const OverviewStartGame = (props) => {
  const {  state, setState } = props;
  return (
    <div className="start-game-container">
      <h2>Start Game</h2>
      <select
        value={state.currentLevel}
        onChange={(e) => setState((state) => { return { ...state, currentLevel: e.target.value } })}>
      
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
        <option value={4}>Level 4</option>
      </select>
    </div>
  );
};

const OverView = (props) => {
  const { state, setState } = props;

 
  //set story state to current story

  return (
    <div>
      <NavBar />
      <div className="overview-container">
        <h1>Overview</h1>

        <OverviewHeader state={state} setState={setState} />
        <OverviewCurrentParty state={state} setState={setState} />
        <OverviewAchievements state={state} setState={setState} />
        <OverviewStartGame state={state} setState={setState} />

        <Link to={state.story[state.currentStory].path}>
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
  const {
    state,
    setState,
    battle,
    setBattle,
    // party,
    // floor,
    // boss,
    // story,
    // setStory,
    // currentStory,
    // setCurrentStory,
    // maxFloor,
    // setMaxFloor,
    // currentFloor,
    // setCurrentFloor,
  } = props;
  return (
    <div>
      <h1>Dashboard</h1>
      <OverView
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        // party={party}
        // floor={floor}
        // boss={boss}
        // story={story}
        // setStory={setStory}
        // currentStory={currentStory}
        // setCurrentStory={setCurrentStory}
        // maxFloor={maxFloor}
        // setMaxFloor={setMaxFloor}
        // currentFloor={currentFloor}
        // setCurrentFloor={setCurrentFloor}
      />
    </div>
  );
};

export { Dashboard, Catalog, Shop, OverView };
