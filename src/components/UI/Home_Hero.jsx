import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <section className="hero">
      <div id="hero-content-wrapper">
        <h2>Eldridia's Element</h2>
        <p>
          Enter a world of magic and adventure, where you can collect and trade
          powerful cards featuring epic heroes and fearsome monsters.
        </p>
        <Link to="/dashboard">
          {/* // ! Links are working anywhere you import them!  */}
          <button>Play Now!</button>
        </Link>
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

export { Hero, HeroDivider, SubHero };
