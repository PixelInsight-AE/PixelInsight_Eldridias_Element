import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { heroList } from "../vanillaJsFiles/heros.js";

// ! SELECT COMPONENTS
const RangedSelect = (props) => {
  const { ranged, setRanged, handlePartySelect } = props;
  return (
    <div>
      <div className="ranged-select">
        <h1 className="hero-name">{ranged.name}</h1>

        <div className="hero-image">
          <img src={ranged.imgUrl} alt={ranged.name} />
        </div>
        <h2>
          LV: {ranged.heroLevel} - {ranged.elementType}
        </h2>
        <div className="stats-container">
          <div className="stats-hp">
            <h3>HP:</h3>
            <h3>{ranged.maxHealth}</h3>
          </div>
          <div className="stats-ap">
            <h3>ATK:</h3>
            <h3>{ranged.attackPower}</h3>
          </div>
          <div className="stats-df">
            <h3>DEF:</h3>
            <h3>{ranged.defense}</h3>
          </div>
        </div>
        {/*   <div>{tank.description}</div> */}
      </div>
      <div className="role-container">
        <button className="ranged-btn">Ranged</button>
      </div>
    </div>
  );
};
const HealerSelect = (props) => {
  const { healer, setHealer, handlePartySelect } = props;
  return (
    <div>
      <div className="healer-select">
        <h1 className="hero-name">{healer.name}</h1>

        <div className="hero-image">
          <img src={healer.imgUrl} alt={healer.name} />
        </div>
        <h2>
          LV: {healer.heroLevel} - {healer.elementType}
        </h2>
        <div className="stats-container">
          <div className="stats-hp">
            <h3>HP:</h3>
            <h3>{healer.maxHealth}</h3>
          </div>
          <div className="stats-ap">
            <h3>ATK:</h3>
            <h3>{healer.attackPower}</h3>
          </div>
          <div className="stats-df">
            <h3>DEF:</h3>
            <h3>{healer.defense}</h3>
          </div>
        </div>
        {/*   <div>{tank.description}</div> */}
      </div>
      <div className="role-container">
        <button className="healer-btn">Healer</button>
      </div>
    </div>
  );
};
const MeleeSelect = (props) => {
  const { melee, setMelee, handlePartySelect } = props;
  return (
    <div>
      <div className="melee-select">
        <h1 className="hero-name">{melee.name}</h1>

        <div className="hero-image">
          <img src={melee.imgUrl} alt={melee.name} />
        </div>
        <h2>
          LV: {melee.heroLevel} - {melee.elementType}
        </h2>
        <div className="stats-container">
          <div className="stats-hp">
            <h3>HP:</h3>
            <h3>{melee.maxHealth}</h3>
          </div>
          <div className="stats-ap">
            <h3>ATK:</h3>
            <h3>{melee.attackPower}</h3>
          </div>
          <div className="stats-df">
            <h3>DEF:</h3>
            <h3>{melee.defense}</h3>
          </div>
        </div>
        {/*   <div>{tank.description}</div> */}
      </div>
      <div className="role-container">
        <button className="melee-btn">Melee</button>
      </div>
    </div>
  );
};

// ? EXAMPLE FOR STYLING
const TankSelect = (props) => {
  const { tank, setTank, handlePartySelect } = props;
  return (
    <div>
      <div className="tank-select">
        <h1 className="hero-name">{tank.name}</h1>

        <div className="hero-image">
          <img src={tank.imgUrl} alt={tank.name} />
        </div>
        <h2>
          LV: {tank.heroLevel} - {tank.elementType}
        </h2>
        <div className="stats-container">
          <div className="stats-hp">
            <h3>HP:</h3>
            <h3>{tank.maxHealth}</h3>
          </div>
          <div className="stats-ap">
            <h3>ATK:</h3>
            <h3>{tank.attackPower}</h3>
          </div>
          <div className="stats-df">
            <h3>DEF:</h3>
            <h3>{tank.defense}</h3>
          </div>
        </div>
        {/*   <div>{tank.description}</div> */}
      </div>
      <div className="role-container">
        <button className="tank-btn">Tank</button>
      </div>
    </div>
  );
};

// ! ROLES TITLE/HEADER
const Roles = () => {
  return (
    <div id="roles-container">
      <h1>Tank</h1>
      <h1>Melee</h1>
      <h1>Ranged</h1>
      <h1>Healer</h1>
    </div>
  );
};

const AvailableHeroes = (props) => {
  const { heroList, hero, handlePartySelect } = props;

  return (
    <div id="available-heros">
      <h2>Available Heros</h2>
      <div id="hero-list">
        {props.heroList.map((hero) => (
          <div
            className="hero-card"
            onClick={() => props.handlePartySelect(props.hero)}
            key={props.name}
          >
            <h1 className="hero-name">{props.name}</h1>

            <div className="hero-image">
              <img src={props.imgUrl} alt={props.name} />
            </div>
            <h2>
              LV: {props.heroLevel} - {props.role}
            </h2>
            <div className="stats-container">
              <div className="stats-hp">
                <h3>HP:</h3>
                <h3>{props.maxHealth}</h3>
              </div>
              <div className="stats-ap">
                <h3>ATK:</h3>
                <h3>{props.attackPower}</h3>
              </div>
              <div className="stats-df">
                <h3>DEF:</h3>
                <h3>{props.defense}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/dashboard">
        <button>Back to Dash</button>
      </Link>
      <Link to="/">
        <button>Back to Landing</button>
      </Link>
    </div>
  );
};

//! MAIN PARTY COMPONENT
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
      {/* //! INSERT TITLE CONTAINER */}

      {/* <Roles /> */}
      <div id="party-select-container">
        <TankSelect
          tank={tank}
          setTank={setTank}
          handlePartySelect={handlePartySelect}
        />
        <MeleeSelect
          melee={melee}
          setMelee={setMelee}
          handlePartySelect={handlePartySelect}
        />
        <RangedSelect
          ranged={ranged}
          setRanged={setRanged}
          handlePartySelect={handlePartySelect}
        />
        <HealerSelect
          healer={healer}
          setHealer={setHealer}
          handlePartySelect={handlePartySelect}
        />
      </div>
      {/* <AvailableHeroes
        heroList={heroList}
        hero={hero}
        handlePartySelect={handlePartySelect(hero)}
      /> */}
      <div id="available-heros">
        <h2>Available Heros</h2>
        <div id="hero-list">
          {heroList.map((hero) => (
            <div
              className="hero-card"
              onClick={() => handlePartySelect(hero)}
              key={hero.name}
            >
              <h1 className="hero-name">{hero.name}</h1>

              <div className="hero-image">
                <img src={hero.imgUrl} alt={hero.name} />
              </div>
              <h2>
                {hero.elementType} - {hero.role}
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
          ))}
        </div>
        <Link to="/dashboard">
          <button>Back to Dash</button>
        </Link>
        <Link to="/">
          <button>Back to Landing</button>
        </Link>
      </div>
    </div>
  );
};

export { Party };
