import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroOne = (props) => {
  return (
    <section id="heroOne">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}
        id="heroOne-wrapper"
      >
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.25, ease: "easeInOut" }}
        >
          Eldridia's Element
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        >
          Enter a world of magic and adventure, where you can collect and trade
          powerful cards featuring epic heroes and fearsome monsters.
        </motion.p>

        <Link to="/dashboard">
          <motion.div
            initial={{ scale: 1, x: -50, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 2,
              duration: 1,
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                y: -10,
                backgroundColor: "pink",
                duration: 0.5,
              }}
            >
              Play Now!
            </motion.button>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

const HeroTwo = () => {
  return (
    <section id="hero-divider">
      <div id="divider-left">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
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
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        id="divider-right"
      >
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
      </motion.div>
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
          transition={{ duration: 4, delay: 1.5 }}
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
          transition={{ duration: 4, delay: 1 }}
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
          transition={{ duration: 4, delay: 0.5 }}
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

export { HeroOne, HeroTwo, PlayingCardsHero, SubHero };
