import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Party } from './DashBoard_Party';
import { DeckBuilder } from './DashBoard_Deck';
import { InventoryBuilder } from './DashBoard_Inventory';
import './DashBoard.scss';
import { Shop } from './DashBoard_Shop';
import { useEffect } from 'react';
import { OverViewHub, OverViewNavBar } from './Dashboard_Hub';

const OverViewHeader = ({ state, setState }) => {
  return (
    <div id="OverviewHeader">
      <h1>Current Chapter: {state.story[state.currentStory].chapterTitle}</h1>
      <h2>Orbs: {state.currency}</h2>
    </div>
  );
};

const OverViewMap = ({ state, setState }) => {
  return (
    <div id="OverViewMap">
      <h1>OverViewMap</h1>
    </div>
  );
};

const PartyMemberStats = (props) => {
  const { hero } = props;
  return (
    <div>
      <h3>{hero.name}</h3>
      <h3>{hero.heroLevel}</h3>
      <h3>{hero.health}</h3>
      <h3>{hero.defense}</h3>
      <h3>{hero.attackPower}</h3>
      <h3>{hero.elementType}</h3>
    </div>
  );
};

const PartyMemberImg = (props) => {
  const { hero } = props;
  return (
    <div className="party-image">
      <img src={hero.imgUrl} alt={hero.name} />
    </div>
  );
};

const PartyMember = (props) => {
  const { hero, isModule, setIsModule } = props;
  const handleClick = () => {
    console.log('clicked');
    setIsModule(!isModule);
  };

  return (
    <div onClick={handleClick} className="PartyMember">
      {isModule ? (
        <PartyMemberStats hero={hero} />
      ) : (
        <PartyMemberImg hero={hero} />
      )}
    </div>
  );
};

const OverviewParty = (props) => {
  const { state, setState } = props;
  const [isModule, setIsModule] = useState(false);

  return (
    <div id="OverviewParty">
      {state.party.map((hero) => (
        <div key={hero.name} className="PartyMember">
          <PartyMember
            hero={hero}
            isModule={isModule}
            setIsModule={setIsModule}
          />
        </div>
      ))}
      <Link to={state.story[state.currentStory].path}>
        <button>Start Game</button>
      </Link>
    </div>
  );
};

const Dashboard = (props) => {
  const { state, setState } = props;
  return (
    <div id="Dashboard">
      <div id="top">
        <div className="top-left">
          <OverViewHeader state={state} setState={setState} />
          <OverviewParty state={state} setState={setState} />
        </div>
        <div className="top-right">
          <OverViewMap state={state} setState={setState} />
        </div>
      </div>
      <div id="bottom">
        <div id="nav-buttons">
          <OverViewNavBar state={state} setState={setState} />
        </div>
        <div>
          <OverViewHub state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
