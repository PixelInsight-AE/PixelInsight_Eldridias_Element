import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { heroList } from "../../../src/gameObjects/heros.js";
import "./DashBoard.scss";
import { partyActions } from "../../store/slices/partySlice.js";
import { useDispatch, useSelector } from "react-redux";
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
            <h2>{hero.role}</h2>
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
const Party = ({ state, setState }) => {
  const dispatch = useDispatch();

  // ? This function will handle the selection of a hero
  const handlePartySelect = (hero) => {
    if (hero.role === "Tank") {
      dispatch(partyActions.setTank(hero));
    }
    if (hero.role === "Healer") {
      dispatch(partyActions.setHealer(hero));
    }
    if (hero.role === "Melee") {
      dispatch(partyActions.setMelee(hero));
    }
    if (hero.role === "Ranged") {
      dispatch(partyActions.setRanged(hero));
    }
  };

  //? This useEffect will update the party array when a hero state is updated

  return (
    <div>
      <AvailableHeroes
        heroList={heroList}
        handlePartySelect={handlePartySelect}
      />
    </div>
  );
};

export { Party };
