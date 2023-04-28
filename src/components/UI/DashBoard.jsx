import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Party } from './DashBoard_Party';
import { DeckBuilder } from './DashBoard_Deck';
import './DashBoard.scss';
import { useEffect } from 'react';
let hudDisplay;

const Shop = ({ state, setState }) => {
  return (
    <div>
      <h1>Shop</h1>
      <h2>UNDER CONSTRUCTION</h2>
    </div>
  );
};

const InventoryBuilder = ({ state, setState }) => {
  return (
    <div>
      <h1>Inventory</h1>
      <h2>UNDER CONSTRUCTION</h2>
    </div>
  );
};

const OverViewDisplay = ({ state, setState }) => {
  const setDisplay = (state) => {
    switch (state.OverView) {
      case 'party':
        hudDisplay = <Party state={state} setState={setState} />;
        break;
      case 'deck':
        hudDisplay = <DeckBuilder state={state} setState={setState} />;
        break;
      case 'shop':
        hudDisplay = <Shop state={state} setState={setState} />;
        break;
      case 'inventory':
        hudDisplay = <InventoryBuilder state={state} setState={setState} />;
        break;
      default:
        hudDisplay = <Party state={state} setState={setState} />;
        break;
    }
    return hudDisplay;
  };

  useEffect(() => {
    setDisplay(state);
  }, [state.OverView]);

  return <div id="OverViewDisplay">{hudDisplay}</div>;
};

const PartyBuilderButton = ({ state, setState }) => {
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
const DeckBuilderButton = ({ state, setState }) => {
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
const ShopButton = ({ state, setState }) => {
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
const InventoryButton = ({ state, setState }) => {
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
const OverViewHub = ({ state, setState }) => {
  return (
    <div id="OverViewHub">
      <div id="button-container">
        <PartyBuilderButton state={state} setState={setState} />
        <DeckBuilderButton state={state} setState={setState} />
        <ShopButton state={state} setState={setState} />
        <InventoryButton state={state} setState={setState} />
      </div>
      <OverViewDisplay state={state} setState={setState} />
    </div>
  );
};
const OverViewHeader = ({ state, setState }) => {
  return (
    <div id="OverViewHeader">
      <h1>OverViewHeader</h1>
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
  useEffect(() => {
    setState({
      ...state,
      party: [state.tank, state.melee, state.ranged, state.healer],
    });
  }, [state.tank, state.melee, state.ranged, state.healer]);
  return (
    <div id="Dashboard">
      <div id="top-row">
        <OverViewHeader state={state} setState={setState} />
        <OverViewMap state={state} setState={setState} />
      </div>
      <div id="ReadyUp">
        <OverviewParty state={state} setState={setState} />
      </div>
      <div id="hub">
        <OverViewHub state={state} setState={setState} />
      </div>
    </div>
  );
};

export { Dashboard };
