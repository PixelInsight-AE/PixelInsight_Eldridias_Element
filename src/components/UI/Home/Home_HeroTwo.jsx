import { motion } from 'framer-motion';
import './Home_HeroTwo.scss';

const HeroTwo = () => {
  return (
    <section id="heroTwo">
      <div id="heroTwo-left">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 2 }}
        >
          Battle Glorious Hero's!
        </motion.h2>
        <motion.img
          initial={{ scale: 0.75, rotate: 10 }}
          whileInView={{ scale: 1.25, rotate: 0 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 2 }}
          src="https://i.imgur.com/v9lWrKm.png"
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        id="heroTwo-right"
      >
        <h1>Eldridias Element</h1>

        <p>
          Welcome to the world of Eldridia, a land of magic and mystery, where
          the elements of earth, air, water, fire, and magic reign supreme.
        </p>
        <p>
          Here, you will embark on a journey through a fantastical realm filled
          with danger and adventure.
        </p>
        <p>
          As a master of the elements, you will wield incredible power and use
          your skills to overcome challenges and defeat your foes. Will you be
          able to harness the power of Eldridia's elements and emerge
          victorious? The fate of the world is in your hands.
        </p>
      </motion.div>
    </section>
  );
};

export { HeroTwo };
