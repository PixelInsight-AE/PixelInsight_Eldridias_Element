import { NavBar } from "./NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { heroList } from "../../vanillaJsFiles/heros";

import { Header } from "./Home_Header";
import { Hero, HeroDivider, SubHero } from "./Home_Hero";
import { CardExamples } from "./Home_CardDisplay";

const Home = (props) => {
  return (
    <main id="homeScreen">
      <Header />
      <Hero />
      <HeroDivider />
      <SubHero />
      <CardExamples />
    </main>
  );
};

export { Home, Header, Hero, HeroDivider, SubHero, CardExamples };

/**
 * TODO: Also display element cards on the scrollable row
 */
