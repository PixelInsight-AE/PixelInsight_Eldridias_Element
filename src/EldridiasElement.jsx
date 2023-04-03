import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { controller } from "./vanillaJsFiles/controller.js";

import { Home } from "./components/Home.jsx";
import {
  Dashboard,
  Party,
  Deck,
  Catalog,
  Shop,
  OverView,
} from "./components/DashBoard.jsx";

function EldridiasElement() {
  // ! Like our error said, in V6 we need to nest all Route elements inside of a Routes component.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
