import { NavBar } from "../NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="home-header">
      <button id="signUp-btn">sign up!</button>
      <button id="login-btn">log in!</button>
    </header>
  );
};

const Hero = (props) => {
  return (
    <section className="hero">
      <div id="hero-content-wrapper">
        <h2>Eldridia's Element</h2>
        <p>
          Enter a world of magic and adventure, where you can collect and trade
          powerful cards featuring epic heroes and fearsome monsters.
        </p>
        <button>Play Now!</button>
      </div>
    </section>
  );
};

const HeroDivider = () => {
  return (
    <section className="about">
      <h2>Eldridias Element</h2>
      <p>
        Welcome to the world of Eldridia, a land of magic and mystery, where the
        elements of earth, air, water, fire, and magic reign supreme. Here, you
        will embark on a journey through a fantastical realm filled with danger
        and adventure. As a master of the elements, you will wield incredible
        power and use your skills to overcome challenges and defeat your foes.
        Will you be able to harness the power of Eldridia's elements and emerge
        victorious? The fate of the world is in your hands.
      </p>
    </section>
  );
};

const SubHero = (props) => {
  return (
    <section className="subHero">
      <div id="subHero-content-wrapper">
        <h2>Collect and Trade</h2>
        <p>
          Collect and trade powerful cards featuring epic heroes and fearsome
          monsters.
        </p>
        <button>View Cards</button>
      </div>
    </section>
  );
};

const Party = (props) => {
  const [currentHero, setCurrentHero] = useState(
    props.party[props.party.length - 1]
  );
  return (
    <div id="party">
      {props.party.map((hero) => {
        return <HeroCard key={hero.name} {...hero} />;
      })}
    </div>
  );
};

const HeroCard = (props) => {
  return (
    <div key={props.name} className="hero">
      <div className="heroName">{props.name}</div>
      <div className="heroLevel">{props.heroLevel}</div>
      <div className="heroImg">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="heroType">{props.elementType}</div>
      <div className="heroActions">
        <button className="heroActionBtn">Equip Gear</button>
      </div>
    </div>
  );
};

const MainHome = (props) => {
  return (
    <main id="homeScreen">
      <Header />
      <Hero />
      <HeroDivider />
      <SubHero />
      <Party party={props.party} />
    </main>
  );
};

export { MainHome, Party, HeroCard };

/**
 * TODO: Also display element cards on the scrollable row
 */
