import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { controller } from "./vanillaJsFiles/controller.js";
import {
  bulwark,
  hogarth,
  sorceress,
  beastMaster,
} from "./vanillaJsFiles/heros.js";
import { MainHome } from "./components/Home.jsx";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

function EldridiasElement() {
  const [party, setParty] = useState([
    controller,
    bulwark,
    hogarth,
    sorceress,
    beastMaster,
  ]);

  console.log(party[party.length - 1].name);

  return (
    <div id="app">
      <MainHome party={party} />
    </div>
  );
}

export default EldridiasElement;

// party and set party hoo
