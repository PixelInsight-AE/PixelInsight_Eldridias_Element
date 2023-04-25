import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { heroList } from "../../vanillaJsFiles/heros.js";

// ! SELECT COMPONENTS

/**
 * ! Hero select components
 * ? These components are used to select a hero for each party slot
 * ? They are passed the hero object, the setHero function, and the handlePartySelect function
 * ? The handlePartySelect function is used to update the party array
 */
const RangedSelect = (props) => {
  const { ranged } = props;
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
      </div>
      <div className="role-container">
        <button className="ranged-btn">Ranged</button>
      </div>
    </div>
  );
};
const HealerSelect = (props) => {
  const { healer } = props;
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
      </div>
      <div className="role-container">
        <button className="healer-btn">Healer</button>
      </div>
    </div>
  );
};
const MeleeSelect = (props) => {
  const { melee } = props;
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
      </div>
      <div className="role-container">
        <button className="melee-btn">Melee</button>
      </div>
    </div>
  );
};
const TankSelect = (props) => {
  const { tank } = props;
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
      </div>
      <div className="role-container">
        <button className="tank-btn">Tank</button>
      </div>
    </div>
  );
};

/**
 *
 * ! All available heroes
 * ? This component will display all available heroes
 * ? This component will be passed a list of heroes
 * ? This component will be passed a function to handle the selection of a hero
 *
 */

const AvailableHeroes = (props) => {
  const { heroList, handlePartySelect } = props;
  return (
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
  );
};

//! MAIN PARTY COMPONENT
/**
 * ! Main Party component
 * ? This component will display the selected heroes
 * ? This component will be passed a list of heroes
 * ? This component will be passed a list of selected heroes
 * ? This component will be passed a function to handle the selection of a hero
 */
const Party = ({
  hero,
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
  // ? This function will handle the selection of a hero
  const handlePartySelect = (hero) => {
    console.log("clicked");
    if (hero.role === "Tank") {
      setState({...state, tank: hero});
    }
    if (hero.role === "Melee") {
      setState({...state, melee: hero});
    }
    if (hero.role === "Ranged") {
      setState({...state, ranged: hero});
    }
    if (hero.role === "Healer") {
      setState({...state, healer: hero});
    }
  };
  // ? This useEffect will update the party array when a hero state is updated
  useEffect(() => {
    setParty([tank, melee, ranged, healer]);
  }, [tank, melee, ranged, healer]);
  return (
    <div>
      <NavBar />
      <div id="party-select-container">
        <TankSelect
          tank={state.tank}
          
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
      <AvailableHeroes
        heroList={heroList}
        handlePartySelect={handlePartySelect}
      />
    </div>
  );
};

export { Party };
