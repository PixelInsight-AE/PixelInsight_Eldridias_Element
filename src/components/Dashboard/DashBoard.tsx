import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { OverViewHub } from "./_Hub";
import { mainStory } from "./../../gameObjects/storyboard";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const OverViewHeader = () => {
  const orbs = useSelector((state) => state.inventoryManager.orbs);
  const story = useSelector((state) => state.storyManager.story);
  const index = useSelector((state) => state.storyManager.currentSceneIndex);

  return (
    <div id="OverviewHeader">
      <h1>Current Chapter: {story[index].chapterTitle}</h1>
      <h2>Orbs: {orbs}</h2>
    </div>
  );
};

const OverViewMap = () => {
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
    console.log("clicked");
    setIsModule(!isModule);
  };
  const generaateUUID = () => {
    return uuidv4();
  };
  return (
    <div key={generaateUUID} onClick={handleClick} className="PartyMember">
      {isModule ? (
        <PartyMemberStats hero={hero} />
      ) : (
        <PartyMemberImg hero={hero} />
      )}
    </div>
  );
};

const OverviewParty = () => {
  const [isModule, setIsModule] = useState(false);
  const party = useSelector((state) => state.partyManager);
  const partyArray = Object.values(party);
  const story = useSelector((state) => state.storyManager.story);
  const index = useSelector((state) => state.storyManager.currentSceneIndex);
  return (
    <div id="OverviewParty">
      {partyArray.map((hero) => (
        <div className="PartyMember">
          <PartyMember
            hero={hero}
            isModule={isModule}
            setIsModule={setIsModule}
          />
        </div>
      ))}
      <Link to={story[index].paths}>
        <button>Start Game</button>
      </Link>
    </div>
  );
};

const Dashboard = (props) => {
  //!! set states in here for the dashboard that are not in redux
  const [overview, setOverview] = useState("party");

  const handleSaveManager = () => {
    const dashboardSaveState = {
      orbs: orbs,
      party: party,
      deck: deck,
      inventory: inventory,
    };
    // send off data to backedn
  };
  const handleOverviewSelect = (selection) => {
    setOverview(selection);
  };

  return (
    <div id="Dashboard">
      <div id="top">
        <div className="top-left">
          <OverViewHeader />
          <OverviewParty />
        </div>
        <div className="top-right">
          <OverViewMap />
        </div>
      </div>
      <div id="bottom">
        <div id="nav-buttons">
          <button onClick={() => handleOverviewSelect("party")}>Party</button>
          <button onClick={() => handleOverviewSelect("deck")}>Deck</button>
          <button onClick={() => handleOverviewSelect("inventory")}>
            Inventory
          </button>
          <button onClick={() => handleOverviewSelect("shop")}>Shop</button>
        </div>
        <div>
          <OverViewHub overview={overview} />
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
