import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { controller } from "./vanillaJsFiles/controller.js";
import {
  bulwark,
  hogarth,
  sorceress,
  beastMaster,
} from "./vanillaJsFiles/heros.js";
import { MainHome } from "./components/Home.jsx";

// ! For now I simply placed a back button to navigate back to the landing page.
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/">
        <button>Back</button>
      </Link>
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

  // ! Like our error said, in V6 we need to nest all Route elements inside of a Routes component.
  return (
    <Routes>
      <Route path="/" element={<MainHome party={party} />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default EldridiasElement;

// party and set party hoo
