import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Shop } from './DashBoard_Shop';
import { Catalog } from './DashBoard_Catalog';
import './DashBoard.scss';

const OverViewDisplay = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="OverViewDisplay">
      <h1>big box for display here</h1>
      <h2>{state.OverView}</h2>
    </div>
  );
};
const PartyBuilderButton = ({ state, setState, battle, setBattle }) => {
  const handleClick = () => {
    console.log('clicked');

    setState({ ...state, OverView: 'party' });
  };
  return (
    <div onClick={handleClick} className="party-builder-button">
      <h3>Party Builder</h3>
    </div>
  );
};
const DeckBuilderButton = ({ state, setState, battle, setBattle }) => {
  const handleClick = () => {
    console.log('clicked');

    setState({ ...state, OverView: 'deck' });
  };
  return (
    <div onClick={handleClick} className="deck-builder-button">
      <h3>Deck Builder</h3>
    </div>
  );
};
const ShopButton = ({ state, setState, battle, setBattle }) => {
  const handleClick = () => {
    console.log('clicked');

    setState({ ...state, OverView: 'shop' });
  };
  return (
    <div onClick={handleClick} className="shop-button">
      <h3>Shop</h3>
    </div>
  );
};
const InventoryButton = ({ state, setState, battle, setBattle }) => {
  const handleClick = () => {
    setState({ ...state, OverView: 'inventory' });
    console.log('clicked');
  };
  return (
    <div onClick={handleClick} className="inventory-button">
      <h3>Inventory</h3>
    </div>
  );
};
const OverViewHub = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="OverViewHub">
      <div id="button-container">
        <PartyBuilderButton
          state={state}
          setState={setState}
          battle={battle}
          setBattle={setBattle}
        />
        <DeckBuilderButton
          state={state}
          setState={setState}
          battle={battle}
          setBattle={setBattle}
        />
        <ShopButton
          state={state}
          setState={setState}
          battle={battle}
          setBattle={setBattle}
        />
        <InventoryButton
          state={state}
          setState={setState}
          battle={battle}
          setBattle={setBattle}
        />
      </div>
      <OverViewDisplay state={state} setState={setState} />
    </div>
  );
};

const OverViewHeader = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="OverViewHeader">
      <h1>OverViewHeader</h1>
    </div>
  );
};

const OverViewMap = ({ state, setState, battle, setBattle }) => {
  return (
    <div id="OverViewMap">
      <h1>OverViewMap</h1>
    </div>
  );
};

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
      {state.party.map((hero) => (
        <div key={hero.name} className="hero-container">
          <PartyMember hero={hero} />
        </div>
      ))}
    </div>
  );
};

const OverView = (props) => {
  const { state, setState } = props;
  return (
    <div id="OverView">
      <div id="top-row">
        <OverViewHeader state={state} setState={setState} />
        <OverViewMap state={state} setState={setState} />
      </div>
      <div id="hub">
        <OverViewHub state={state} setState={setState} />
        <Link to={state.story[state.currentStory].path}>
          <button>Start Game</button>
        </Link>
      </div>
    </div>
  );
};

const Dashboard = (props) => {
  const { state, setState, battle, setBattle } = props;
  return (
    <div id="Dashboard">
      <div id="top-row">
        <OverViewHeader state={state} setState={setState} />
        <OverViewMap state={state} setState={setState} />
      </div>
      <div id="ReadyUp">
        <h2>party and play goes heres</h2>
        <Link to={state.story[state.currentStory].path}>
          <button>Start Game</button>
        </Link>
      </div>
      <div id="hub">
        <OverViewHub state={state} setState={setState} />
      </div>
    </div>
  );
};

export { Dashboard, OverView };
