import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroList } from '../../../vanillaJsFiles/heros.js';
import './DashBoard.scss';

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
  // ? This function will handle the selection of a hero
  const handlePartySelect = (hero) => {
    setState((prevState) => {
      if (hero.role === 'Tank') {
        return { ...prevState, tank: hero };
      }
      if (hero.role === 'Melee') {
        return { ...prevState, melee: hero };
      }
      if (hero.role === 'Ranged') {
        return { ...prevState, ranged: hero };
      }
      if (hero.role === 'Healer') {
        return { ...prevState, healer: hero };
      }
      return prevState;
    });
  };

  //? This useEffect will update the party array when a hero state is updated
  useEffect(() => {
    console.log('party updated', state);
    setState({
      ...state,
      party: [state.tank, state.melee, state.ranged, state.healer],
    });
  }, [state.tank, state.melee, state.ranged, state.healer]);

  return (
    <div>
      <AvailableHeroes
        heroList={heroList}
        state={state}
        setState={setState}
        handlePartySelect={handlePartySelect}
      />
    </div>
  );
};

export { Party };
