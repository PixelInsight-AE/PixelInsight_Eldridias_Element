import { Header } from "./Home_Header";
import Snowfall from "react-snowfall";
import { HeroOne, HeroTwo, SubHero, PlayingCardsHero } from "./Home_Hero";

const Home = (props) => {
  return (
    <main id="background">
      <Snowfall snowflakeCount={250} />
      <Header />
      <HeroOne />
      <HeroTwo />
      <PlayingCardsHero />
      <SubHero />
    </main>
  );
};

export { Home, Header, HeroOne, HeroTwo, SubHero };

/**
 * TODO: Also display element cards on the scrollable row
 */
