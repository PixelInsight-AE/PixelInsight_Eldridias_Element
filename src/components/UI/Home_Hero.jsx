import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = (props) => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="hero-content-wrapper"
      >
        <h2>Eldridia's Element</h2>
        <p>
          Enter a world of magic and adventure, where you can collect and trade
          powerful cards featuring epic heroes and fearsome monsters.
        </p>

        <Link to="/dashboard">
          {/* // ! Links are working anywhere you import them!  */}
          <button>Play Now!</button>
        </Link>
      </motion.div>
    </section>
  );
};

const HeroDivider = () => {
  return (
    <section id="hero-divider">
      <div id="divider-left">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Battle Glorious Hero's!
        </motion.h2>
        <motion.img
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 2 }}
          src="https://i.imgur.com/v9lWrKm.png"
          alt=""
        />
      </div>
      <div id="divider-right">
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
      </div>
    </section>
  );
};

const PlayingCardsHero = (props) => {
  return (
    <section id="playingCardsHero">
      <div id="playingCards">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
          drag
          dragConstraints={{ left: 200, right: 200, top: 100, bottom: 100 }}
          className="card-big"
        >
          <h2 className="card-title">BullWark</h2>
          <img src="https://i.imgur.com/OEIQ1ee.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
          drag
          dragConstraints={{ left: 200, right: 200, top: 100, bottom: 100 }}
          className="card-big"
        >
          <h2 className="card-title">Sorceress</h2>
          <img src="https://i.imgur.com/cLQfh6c.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
          drag
          dragConstraints={{ left: 200, right: 200, top: 100, bottom: 100 }}
          className="card-big"
        >
          <h2 className="card-title">Hogarth</h2>
          <img src="https://i.imgur.com/N4X30zf.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
          drag
          dragConstraints={{ left: 200, right: 200, top: 100, bottom: 100 }}
          className="card-big"
        >
          <h2 className="card-title">Seer</h2>
          <img src="https://i.imgur.com/rjbFnVY.png" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

const CardAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1>animated</h1>
      <TypeAnimation
        className="type-animation"
        sequence={[
          "Follow me on social media",
          1000,
          "You can connect with me!",
          2000,
          "O",
          1000,
          "On Facebook",
          500,
          "Or on Instagram",
          2000,
          // "Connect with me through social media",
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="h3"
        cursor={false}
        repeat={Infinity}
        style={{
          fontFamily: "Dancing Script",
          fontSize: "2em",
          display: "block",
        }}
      />
    </motion.div>
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

export { Hero, HeroDivider, PlayingCardsHero, SubHero, CardAnimation };
