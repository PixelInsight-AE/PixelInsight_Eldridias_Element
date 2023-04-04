import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { heroList } from "../vanillaJsFiles/heros.js";

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

const Party = (props) => {
  /*   const { setTank, setMelee, setRanged, setHealer } = location.state; */
  // const handlePartySelect = (hero) => {
  //   console.log("clicked");
  //   if (hero.role === "Tank") {
  //     props.setTank(hero);
  //     console.log(tank);
  //   }
  //   if (hero.role === "Melee") {
  //     //
  //   }
  //   if (hero.role === "Ranged") {
  //     //
  //   }
  //   if (hero.role === "Healer") {
  //     //
  //   }
  // };

  return (
    <div>
      <h1>Party</h1>
      <div id="party-select-container">
        <div className="tank-select">
          <h1>Tank</h1>
          <div
            id="tank-select"
            style={{ border: props.tank && "1px solid #000" }}
          >
            {props.tank}
          </div>
        </div>
        <div className="melee-select">
          <h1>Melee</h1>
          <div
            id="melee-select"
            style={{ border: props.melee && "1px solid #000" }}
          >
            {props.melee}
          </div>
        </div>
        <div className="ranged-select">
          <h1>Ranged</h1>
          <div
            id="ranged-select"
            style={{ border: props.ranged && "1px solid #000" }}
          >
            {props.ranged}
          </div>
        </div>
        <div className="healer-select">
          <h1>Healer</h1>
          <div
            id="healer-select"
            style={{ border: props.healer && "1px solid #000" }}
          >
            {props.healer}
          </div>
        </div>
      </div>
      <div id="available-heros">
        <h2>Available Heros</h2>
        <div id="hero-list">
          {heroList.map((hero) => (
            <div
              className="hero-card"
              onClick={() => handlePartySelect(hero)}
              key={hero.name}
            >
              <div className="hero-image">
                <img src={hero.image} alt={hero.name} />
              </div>
            </div>
          ))}
        </div>
        <Link to="/dashboard">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

const Deck = () => {
  return (
    <div>
      <h1>Deck</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Catalog = () => {
  return (
    <div>
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
  const [tank, setTank] = useState(bulwark);
  const [melee, setMelee] = useState(shadow);
  const [ranged, setRanged] = useState(beastMaster);
  const [healer, setHealer] = useState(hogarth);
  const [party, setParty] = useState([tank, melee, ranged, healer]);
  return (
    <>
      <NavBar
      // tank={tank}
      // melee={melee}
      // ranged={ranged}
      // healer={healer}
      // setTank={setTank}
      // setMelee={setMelee}
      // setRanged={setRanged}
      // setHealer={setHealer}
      />
    </>
  );
};

export { Dashboard, Party, Deck, Catalog, Shop, OverView };
