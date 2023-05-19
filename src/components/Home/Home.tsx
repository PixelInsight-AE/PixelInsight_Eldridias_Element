import Snowfall from 'react-snowfall';
import { Header } from './_Header'
import { HeroOne } from './_Hero_01';
import { HeroTwo } from './_Hero_02';
import { HeroThree } from './_Hero_03';
import { HeroFour } from './_Hero_04';
import { HeroFive } from './_Hero_05';
import { HeroSix } from './_Hero_06';

import './Home.scss';

const Home = () => {
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
