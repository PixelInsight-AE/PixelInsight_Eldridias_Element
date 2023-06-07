import { useState, useEffect } from "react";
import "./DashBoard.scss";
import { DeckBuilder } from "./_Deck";
import { InventoryBuilder } from "./_Inventory";
import { Shop } from "./_Shop";
import { Party } from "./_Party";

const OverViewDisplay = ({ overview }) => {
  const setDisplay = (overview) => {
    switch (overview) {
      case "party":
        return <Party />;
      case "deck":
        return <DeckBuilder />;
      case "shop":
        return <Shop />;
      case "inventory":
        return <InventoryBuilder />;
      default:
        return <Party />;
    }
  };
  const hudDisplay = setDisplay(overview);
  useEffect(() => {
    console.log("overview changed");
  }, [overview]);

  return <div>{hudDisplay}</div>;
};

const OverViewHub = ({ overview }) => {
  return (
    <div id="OverViewHub">
      <div id="OverViewDisplay">
        <OverViewDisplay overview={overview} />
      </div>
    </div>
  );
};

export { OverViewHub };
