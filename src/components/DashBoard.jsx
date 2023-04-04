import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { heroList } from "../vanillaJsFiles/heros.js";
import {
  bulwark,
  sorceress,
  hogarth,
  druidess,
  beastMaster,
  shadow,
} from "../vanillaJsFiles/heros.js";

const OverView = (props) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currency, setCurrency] = useState(500);
  const [achievements, setAchievements] = useState([
    "Achievement 1",
    "Achievement 2",
    "Achievement 3",
  ]);

  const startGame = () => {
    // start game logic here
  };

  // ! PLACEHOLDER DATA!
  return (
    <div>
      <NavBar />
      <div className="overview-container">
        <h1>Overview</h1>
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

        {/* Needs to be changed to party after that component is made */}
        <h2>Current Party</h2>
        <div className="party-container"></div>

        <div className="achievements-container">
          <h2>Achievements</h2>
          <ul>
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>

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
          <button onClick={startGame}>Start</button>
        </div>
      </div>

      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Catalog = () => {
  return (
    <div>
      <NavBar />
      <h1>Catalog</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <NavBar />
      <h1>Shop</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

// ! For now I simply placed a back button to navigate back to the landing page.
// ? Navbar will be added to each component later.
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <OverView />
    </div>
  );
};

export { Dashboard, Catalog, Shop, OverView };
