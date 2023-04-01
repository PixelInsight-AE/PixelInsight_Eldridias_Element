import { useState, useEffect, useRef } from "react";
import { Router } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import {
  bulwark,
  hogarth,
  sorceress,
  beastMaster,
} from "./vanillaJsFiles/heros.js";
import { MainHome } from "./components/Home.jsx";

function EldridiasElement() {
  return (
    <div className="App">
      <MainHome />
      {/*  <GameBoard /> */}
    </div>
  );
}

export default EldridiasElement;

// party and set party hook
