import { Header } from "./Home_Header";
import Snowfall from "react-snowfall";
import { HeroOne } from "./Home_HeroOne";
import { HeroTwo } from "./Home_HeroTwo";
import { HeroThree } from "./Home_HeroThree";

const Home = (props) => {
  return (
    <main id="background">
      <Snowfall snowflakeCount={250} />
      <Header />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
    </main>
  );
};

export { Home, Header, HeroOne, HeroTwo };

/**
 * TODO: Also display element cards on the scrollable row
 */
