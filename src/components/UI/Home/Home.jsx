import Snowfall from 'react-snowfall';
import {
  Header,
  HeroOne,
  HeroTwo,
  HeroThree,
  HeroFour,
  HeroFive,
  HeroSix,
} from './components/index';
import './Home.scss';

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

export { Home };

/**
 * TODO: Also display element cards on the scrollable row
 */
