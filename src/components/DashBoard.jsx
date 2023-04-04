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

const RangedSelect = (props) => {
  const { ranged, setRanged, handlePartySelect } = props;
  return (
    <div className="ranged-select">
      <h1>Ranged</h1>
      <div>
        {ranged.name} - {ranged.currentLevel}
      </div>
      <div>{ranged.maxHealth}</div>
      <div>
        {ranged.attackPower}-{ranged.defense}
      </div>
      <div className="hero-image">
        <img src={ranged.imgUrl} alt={ranged.name} />
      </div>
      <div>{ranged.elementType}</div>

      <div>{ranged.description}</div>
    </div>
  );
};

const HealerSelect = (props) => {
  const { healer, setHealer, handlePartySelect } = props;
  return (
    <div className="healer-select">
      <h1>Healer</h1>
      <div>
        {healer.name} - {healer.currentLevel}
      </div>
      <div>{healer.maxHealth}</div>
      <div>
        {healer.attackPower}-{healer.defense}
      </div>
      <div className="hero-image">
        <img src={healer.imgUrl} alt={healer.name} />
      </div>
      <div>{healer.elementType}</div>
      <div>{healer.description}</div>
    </div>
  );
};

const MeleeSelect = (props) => {
  const { melee, setMelee, handlePartySelect } = props;
  return (
    <div className="melee-select">
      <h1>Melee</h1>
      <div>
        {melee.name} - {melee.currentLevel}
      </div>
      <div>{melee.maxHealth}</div>
      <div>
        {melee.attackPower}-{melee.defense}
      </div>
      <div className="hero-image">
        <img src={melee.imgUrl} alt={melee.name} />
      </div>
      <div>{melee.elementType}</div>
      <div>{melee.description}</div>
    </div>
  );
};

const TankSelect = (props) => {
  const { tank, setTank, handlePartySelect } = props;
  return (
    <div className="tank-select">
      <h1>Tank</h1>
      <div>
        {tank.name} - {tank.currentLevel}
      </div>
      <div>{tank.maxHealth}</div>
      <div>
        {tank.attackPower}-{tank.defense}
      </div>
      <div className="hero-image">
        <img src={tank.imgUrl} alt={tank.name} />
      </div>
      <div>{tank.elementType}</div>
      <div>{tank.description}</div>
    </div>
  );
};

const Party = ({
  tank,
  setTank,
  melee,
  setMelee,
  ranged,
  setRanged,
  healer,
  setHealer,
  party,
  setParty,
}) => {
  const handlePartySelect = (hero) => {
    console.log("clicked");
    if (hero.role === "Tank") {
      setTank(hero);
    }
    if (hero.role === "Melee") {
      setMelee(hero);
    }
    if (hero.role === "Ranged") {
      setRanged(hero);
    }
    if (hero.role === "Healer") {
      setHealer(hero);
    }
  };

  useEffect(() => {
    setParty([tank, melee, ranged, healer]);
  }, [tank, melee, ranged, healer]);

  setTimeout(() => {
    console.log(party);
  }, 1000);

  return (
    <div>
      <NavBar />
      <h1>Party</h1>
      <div id="party-select-container">
        <TankSelect
          tank={tank}
          setTank={setTank}
          handlePartySelect={handlePartySelect}
        />
        <div className="melee-select">
          <MeleeSelect
            melee={melee}
            setMelee={setMelee}
            handlePartySelect={handlePartySelect}
          />
        </div>
        <div className="ranged-select">
          <RangedSelect
            ranged={ranged}
            setRanged={setRanged}
            handlePartySelect={handlePartySelect}
          />
        </div>
        <div className="healer-select">
          <HealerSelect
            healer={healer}
            setHealer={setHealer}
            handlePartySelect={handlePartySelect}
          />
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
// ? Navbar will be added to each component later.
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <OverView />
    </div>
  );
};

export { Dashboard, Party, Deck, Catalog, Shop, OverView };
