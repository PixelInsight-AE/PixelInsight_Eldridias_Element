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

const OverView = () => {
  return (
    <div>
      <NavBar />
      <h1>OverView</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Party = () => {
  return (
    <div>
      <NavBar />
      <h1>Party</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Deck = () => {
  return (
    <div>
      <NavBar />
      <h1>Deck</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Catalog = () => {
  return (
    <div>
      <NavBar />
      <h1>Catalog</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <NavBar />
      <h1>Shop</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

// ! For now I simply placed a back button to navigate back to the landing page.
const Dashboard = () => {
  return <NavBar />;
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
      <Route path="/dashboard/overview" element={<OverView />} />
      <Route path="/dashboard/party" element={<Party />} />
      <Route path="/dashboard/deck" element={<Deck />} />
      <Route path="/dashboard/catalog" element={<Catalog />} />
      <Route path="/dashboard/shop" element={<Shop />} />
    </Routes>
  );
}

export default EldridiasElement;

// party and set party hoo
