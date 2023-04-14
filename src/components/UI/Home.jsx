import { Header } from "./Home_Header";
import Snowfall from "react-snowfall";
import {
  CardAnimation,
  Hero,
  HeroDivider,
  SubHero,
  PlayingCardsHero,
} from "./Home_Hero";

const Home = (props) => {
  return (
    <main id="homeScreen">
      <Snowfall snowflakeCount={250} />
      <Header />
      <Hero />
      <HeroDivider />
      <PlayingCardsHero />
      <CardAnimation />
      <SubHero />
    </main>
  );
};

export { Home, Header, Hero, HeroDivider, SubHero };

/**
 * TODO: Also display element cards on the scrollable row
 */
