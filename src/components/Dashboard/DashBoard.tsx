import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TownHub } from "../../gameObjects/Towns/TownHub";
import { useEffect } from "react";
import { OverViewHub } from "./_Hub";
import { mainStory } from "./../../gameObjects/storyboard";
import { useSelector, useDispatch } from "react-redux";
import { GameManager } from "../../gameLogic/GameManager";
import { useTownUnlock } from "../../hooks/useTownUnlock";

const OverViewHeader = () => {
  const orbs = useSelector((state) => state.inventoryManager.orbs);
  const story = useSelector((state) => state.storyManager.story);
  const index = useSelector((state) => state.storyManager.currentSceneIndex);
  const currentPlayer = useSelector((state) => state.auth.username);
  return (
    <div id="OverviewHeader">
      <h1>
        Current Chapter: {story[index].chapterTitle} - {currentPlayer}
      </h1>
      <h2>Orbs: {orbs}</h2>
    </div>
  );
};

const OverViewMap = () => {
  const { viewTownList } = useTownUnlock();
  const townsArray = viewTownList();
  return (
    <div id="OverViewMap">
      <h1>OverViewMap</h1>
      {/* dropdown with the towns array to select from */}
      <select>
        {townsArray.map((town) => (
          <option value={town}>{town}</option>
        ))}
      </select>
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
            key={hero.id}
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
          <GameManager />
          <OverViewHeader />
          <OverviewParty />
        </div>
        <div className="top-right">
          <OverViewMap />
          <TownHub />
        </div>
      </div>
      <div id="bottom">
        <div id="OverViewNavBar">
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
