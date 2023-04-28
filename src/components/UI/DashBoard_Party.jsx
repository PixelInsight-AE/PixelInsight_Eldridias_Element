import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar.jsx';
import { heroList } from '../../vanillaJsFiles/heros.js';
import {} from '../../vanillaJsFiles/heros.js';
// ! SELECT COMPONENTS

// /**
//  * ! Hero select components
//  * ? These components are used to select a hero for each party slot
//  * ? They are passed the hero object, the setHero function, and the handlePartySelect function
//  * ? The handlePartySelect function is used to update the party array
//  */
// const RangedSelect = (props) => {
//   const { state } = props;
//   return (
//     <div>
//       <div className="ranged-select">
//         <h1 className="hero-name">{state.ranged.name}</h1>

//         <div className="hero-image">
//           <img src={state.ranged.imgUrl} alt={state.ranged.name} />
//         </div>
//         <h2>
//           LV: {state.ranged.heroLevel} - {state.ranged.elementType}
//         </h2>
//         <div className="stats-container">
//           <div className="stats-hp">
//             <h3>HP:</h3>
//             <h3>{state.ranged.maxHealth}</h3>
//           </div>
//           <div className="stats-ap">
//             <h3>ATK:</h3>
//             <h3>{state.ranged.attackPower}</h3>
//           </div>
//           <div className="stats-df">
//             <h3>DEF:</h3>
//             <h3>{state.ranged.defense}</h3>
//           </div>
//         </div>
//       </div>
//       <div className="role-container">
//         <button className="ranged-btn">Ranged</button>
//       </div>
//     </div>
//   );
// };
// const HealerSelect = (props) => {
//   const { state } = props;
//   return (
//     <div>
//       <div className="healer-select">
//         <h1 className="hero-name">{state.healer.name}</h1>

//         <div className="hero-image">
//           <img src={state.healer.imgUrl} alt={state.healer.name} />
//         </div>
//         <h2>
//           LV: {state.healer.heroLevel} - {state.healer.elementType}
//         </h2>
//         <div className="stats-container">
//           <div className="stats-hp">
//             <h3>HP:</h3>
//             <h3>{state.healer.maxHealth}</h3>
//           </div>
//           <div className="stats-ap">
//             <h3>ATK:</h3>
//             <h3>{state.healer.attackPower}</h3>
//           </div>
//           <div className="stats-df">
//             <h3>DEF:</h3>
//             <h3>{state.healer.defense}</h3>
//           </div>
//         </div>
//       </div>
//       <div className="role-container">
//         <button className="healer-btn">Healer</button>
//       </div>
//     </div>
//   );
// };
// const MeleeSelect = (props) => {
//   const { state } = props;
//   return (
//     <div>
//       <div className="melee-select">
//         <h1 className="hero-name">{state.melee.name}</h1>

//         <div className="hero-image">
//           <img src={state.melee.imgUrl} alt={state.melee.name} />
//         </div>
//         <h2>
//           LV: {state.melee.heroLevel} - {state.melee.elementType}
//         </h2>
//         <div className="stats-container">
//           <div className="stats-hp">
//             <h3>HP:</h3>
//             <h3>{state.melee.maxHealth}</h3>
//           </div>
//           <div className="stats-ap">
//             <h3>ATK:</h3>
//             <h3>{state.melee.attackPower}</h3>
//           </div>
//           <div className="stats-df">
//             <h3>DEF:</h3>
//             <h3>{state.melee.defense}</h3>
//           </div>
//         </div>
//       </div>
//       <div className="role-container">
//         <button className="melee-btn">Melee</button>
//       </div>
//     </div>
//   );
// };
// const TankSelect = (props) => {
//   const { state } = props;
//   return (
//     <div>
//       <div className="tank-select">
//         <h1 className="hero-name">{state.tank.name}</h1>

//         <div className="hero-image">
//           <img src={state.tank.imgUrl} alt={state.tank.name} />
//         </div>
//         <h2>
//           LV: {state.tank.heroLevel} - {state.tank.elementType}
//         </h2>
//         <div className="stats-container">
//           <div className="stats-hp">
//             <h3>HP:</h3>
//             <h3>{state.tank.maxHealth}</h3>
//           </div>
//           <div className="stats-ap">
//             <h3>ATK:</h3>
//             <h3>{state.tank.attackPower}</h3>
//           </div>
//           <div className="stats-df">
//             <h3>DEF:</h3>
//             <h3>{state.tank.defense}</h3>
//           </div>
//         </div>
//       </div>
//       <div className="role-container">
//         <button className="tank-btn">Tank</button>
//       </div>
//     </div>
//   );
// };

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
      {/* <Link to="/dashboard">
        <button>Back to Dash</button>
      </Link>
      <Link to="/">
        <button>Back to Landing</button>
      </Link> */}
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

{
  /* <div id="party-select-container">
        <TankSelect
          state={state}
          setState={setState}
          handlePartySelect={handlePartySelect}
        />
        <MeleeSelect
          state={state}
          setState={setState}
          handlePartySelect={handlePartySelect}
        />
        <RangedSelect
          state={state}
          setState={setState}
          handlePartySelect={handlePartySelect}
        />
        <HealerSelect
          state={state}
          setState={setState}
          handlePartySelect={handlePartySelect}
        />
      </div> */
}
