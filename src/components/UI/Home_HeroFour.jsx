import { motion } from "framer-motion";
import { heroList } from "../../vanillaJsFiles/heros.js";
import "./Home_HeroFour.scss";

const HeroFour = (props) => {
  return (
    <section id="heroFour">
      <div id="heroFour-left">
        <div className="text-card">
          <h2>Defeat your enemies!</h2>

          <p>
            Welcome to the world of Eldridia, a land of magic and mystery, where
            the elements of earth, air, water, fire, and magic reign supreme.
            Here, you will embark on a journey through a fantastical realm
            filled with danger and adventure. As a master of the elements, you
            will wield incredible power and use your skills to overcome
            challenges and defeat your foes. Will you be able to harness the
            power of Eldridia's elements and emerge victorious? The fate of the
            world is in your hands.
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        id="heroFour-right"
      >
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          Countless of enemys to defeat!
        </motion.h2>
        <motion.img
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 2 }}
          src="https://i.imgur.com/v9lWrKm.png"
          alt=""
        />
      </motion.div>
    </section>
  );
};

export { HeroFour };
