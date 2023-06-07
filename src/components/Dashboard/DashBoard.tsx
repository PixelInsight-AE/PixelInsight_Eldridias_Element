import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Party } from "./_Party";
import { DeckBuilder } from "./_Deck";
import { InventoryBuilder } from "./_Inventory";
import "./DashBoard.scss";
import { Shop } from "./_Shop";
import { useEffect } from "react";
import { OverViewHub, OverViewNavBar } from "./_Hub";
import { mainStory } from "./../../gameObjects/storyboard";

const OverViewHeader = ({ orbs }) => {
  return (
    <div id="OverviewHeader">
      <h1>Current Chapter: {mainStory[0].chapterTitle}</h1>
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
  const { partyManager } = props;
  const [isModule, setIsModule] = useState(false);

  return (
    <div id="OverviewParty">
      {partyManager.party.map((hero) => (
        <div key={hero.name} className="PartyMember">
          <PartyMember
            hero={hero}
            isModule={isModule}
            setIsModule={setIsModule}
          />
        </div>
      ))}
      <Link to={mainStory[0].path}>
        <button>Start Game</button>
      </Link>
    </div>
  );
};

const Dashboard = (props) => {
  const {
    sceneManager,
    levelManager,
    battleManager,
    inventoryManager,
    deckManager,
    partyManager,
    heroManager,
    cardManager,
    saveManager,
    disabledManager,
    gameManager,
    setGameManager,
    setSaveManager,
    setLevelManager,
    setBattleManager,
    setInventoryManager,
    setDeckManager,
    setPartyManager,
    setHeroManager,
    setCardManager,
    setDisabledManager,
  } = props;
  return (
    <div id="Dashboard">
      <div id="top">
        <div className="top-left">
          <OverViewHeader orbs={inventoryManager.orbs} />
          <OverviewParty
            partyManager={partyManager}
            setPartyManager={setPartyManager}
          />
        </div>
        <div className="top-right">
          <OverViewMap />
        </div>
      </div>
      <div id="bottom">
        <div id="nav-buttons">
          <OverViewNavBar />
        </div>
        <div>
          <OverViewHub gameManager={gameManager} />
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
