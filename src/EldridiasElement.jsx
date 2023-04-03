import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { controller } from "./vanillaJsFiles/controller.js";
import {
  bulwark,
  hogarth,
  sorceress,
  beastMaster,
  heroList,
} from "./vanillaJsFiles/heros.js";
import { MainHome } from "./components/Home.jsx";

const OverView = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currency, setCurrency] = useState(0);
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
        <div className="party-container">
          {heroList.slice(0, 5).map((hero) => (
            <div key={hero.name} className="hero-card">
              <div>{hero.name}</div>
              <img src={hero.imgUrl} alt="" />
              <div className="hero-info">
                <div>Level {hero.heroLevel}</div>
              </div>
            </div>
          ))}
        </div>

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

// ! Empty components for now
/* const OverView = () => {
  return (
    <div>
      <NavBar />
      <h1>OverView</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
}; */

const Party = () => {
  return (
    <div>
      <NavBar />
      <h1>Party</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Deck = () => {
  return (
    <div>
      <NavBar />
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
const Dashboard = () => {
  return <NavBar />;
};

function EldridiasElement() {
  const [party, setParty] = useState([
    controller,
    bulwark,
    hogarth,
    sorceress,
    beastMaster,
  ]);

  console.log(party[party.length - 1].name);

  // ! Like our error said, in V6 we need to nest all Route elements inside of a Routes component.
  return (
    <Routes>
      <Route path="/" element={<MainHome party={party} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/overview" element={<OverView />} />
      <Route path="/dashboard/party" element={<Party />} />
      <Route path="/dashboard/deck" element={<Deck />} />
      <Route path="/dashboard/catalog" element={<Catalog />} />
      <Route path="/dashboard/shop" element={<Shop />} />
    </Routes>
  );
}

export default EldridiasElement;

// party and set party hoo
