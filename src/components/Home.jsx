import { NavBar } from "../NavBar";
import { useState } from "react";

const Party = (props) => {
  const [currentHero, setCurrentHero] = useState(
    props.party[props.party.length - 1]
  );
  return (
    <div id="party">
      {props.party.map((hero) => {
        return <HeroCard {...hero} />;
      })}
    </div>
  );
};

const HeroCard = (props) => {
  return (
    <div key={props.name} className="hero">
      <div className="heroName">{props.name}</div>
      <div className="heroHealth">{props.health}</div>
      <div className="heroImg">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="heroType">{props.elementType}</div>
    </div>
  );
};

const MainHome = (props) => {
  return (
    <main id="homeScreen">
      <NavBar />
      <section className="hero">
        <div id="hero-content-wrapper">
          <h2>Eldridia's Element</h2>
          <p>
            Enter a world of magic and adventure, where you can collect and
            trade powerful cards featuring epic heroes and fearsome monsters.
          </p>
          <button>Play Now!</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Cards</h3>
          <p>Discover new cards and build your ultimate deck.</p>
          <button>View Cards</button>
        </div>
        <div className="feature">
          <h3>Heroes</h3>
          <p>Lead your team to victory with legendary heroes.</p>
        </div>
      </section>
      <section className="about">
        <h2>Eldridias Element</h2>
        <p>
          Welcome to the world of Eldridia, a land of magic and mystery, where
          the elements of earth, air, water, fire, and magic reign supreme.
          Here, you will embark on a journey through a fantastical realm filled
          with danger and adventure. As a master of the elements, you will wield
          incredible power and use your skills to overcome challenges and defeat
          your foes. Will you be able to harness the power of Eldridia's
          elements and emerge victorious? The fate of the world is in your
          hands.
        </p>
      </section>
      <Party party={props.party} />
    </main>
  );
};

export { MainHome, Party, HeroCard };
