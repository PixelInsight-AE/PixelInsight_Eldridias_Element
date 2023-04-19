import { Header } from "./Home_Header";
import Snowfall from "react-snowfall";
import { HeroOne } from "./Home_HeroOne";
import { HeroTwo } from "./Home_HeroTwo";
import { HeroThree } from "./Home_HeroThree";
import { HeroFour } from "./Home_HeroFour";
import { HeroFive } from "./Home_HeroFive";
import { HeroSix } from "./Home_HeroSix";
import "./Home.scss";

const Home = (props) => {
  return (
    <main id="background">
      <Snowfall snowflakeCount={250} />
      <Header />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix />
    </main>
  );
};

export { Home, Header, HeroOne, HeroTwo };

/**
 * TODO: Also display element cards on the scrollable row
 */
