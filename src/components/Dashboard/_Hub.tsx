import { useState, useEffect } from "react";
import "./DashBoard.scss";
import { DeckBuilder } from "./_Deck";
import { InventoryBuilder } from "./_Inventory";
import { Shop } from "./_Shop";
import { Party } from "./_Party";

const OverViewDisplay = ({ gameManager }) => {
  const setDisplay = (gameManager) => {
    switch (gameManager.overview) {
      case "party":
        return <Party state={state} setState={setState} />;
      case "deck":
        return <DeckBuilder state={state} setState={setState} />;
      case "shop":
        return <Shop state={state} setState={setState} />;
      case "inventory":
        return <InventoryBuilder state={state} setState={setState} />;
      default:
        return <Party state={state} setState={setState} />;
    }
  };
  const hudDisplay = setDisplay(state);
  useEffect(
    (setDisplay, state) => {
      setDisplay(state);
    },
    [hudDisplay, state.OverView]
  );

  return <div>{hudDisplay}</div>;
};
const PartyBuilderButton = ({ state, setState }) => {
  const handleClick = () => {
    console.log("clicked");

    setState({ ...state, OverView: "party" });
  };
  return (
    <div onClick={handleClick} className="party-builder-button">
      <button>Party Builder</button>
    </div>
  );
};
const DeckBuilderButton = ({ state, setState }) => {
  const handleClick = () => {
    console.log("clicked");

    setState({ ...state, OverView: "deck" });
  };
  return (
    <div onClick={handleClick} className="deck-builder-button">
      <button>Deck Builder</button>
    </div>
  );
};
const ShopButton = ({ state, setState }) => {
  const handleClick = () => {
    console.log("clicked");

    setState({ ...state, OverView: "shop" });
  };
  return (
    <div onClick={handleClick} className="shop-button">
      <button>Shop</button>
    </div>
  );
};
const InventoryButton = ({ state, setState }) => {
  const handleClick = () => {
    setState({ ...state, OverView: "inventory" });
    console.log("clicked");
  };
  return (
    <div onClick={handleClick} className="inventory-button">
      <button>Inventory</button>
    </div>
  );
};
const OverViewNavBar = ({ state, setState }) => {
  return (
    <div id="OverViewNavBar">
      <PartyBuilderButton state={state} setState={setState} />
      <DeckBuilderButton state={state} setState={setState} />
      <ShopButton state={state} setState={setState} />
      <InventoryButton state={state} setState={setState} />
    </div>
  );
};
const OverViewHub = ({ state, setState }) => {
  return (
    <div id="OverViewHub">
      <div id="OverViewDisplay">
        <OverViewDisplay state={state} setState={setState} />
      </div>
    </div>
  );
};

export { OverViewHub, OverViewNavBar };
