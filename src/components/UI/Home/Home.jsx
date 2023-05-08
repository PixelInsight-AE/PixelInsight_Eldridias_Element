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
 * ? Done, clean as can be....
 */
