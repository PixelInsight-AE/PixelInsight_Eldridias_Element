import { motion } from 'framer-motion';
import { heroList } from '/src/vanillaJsFiles/heros.js';
import {

  wizard,
} from '/src/gameObjects/monsters.js';

const HeroFour = (props) => {
  return (
    <section id="heroFour">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        id="heroFour-left"
      >
        <h1>Defeat your enemies!</h1>
        <p>
          In the game of strategy and cunning, rise to the challenge and
          vanquish your foes! Outwit and outplay your opponents, leaving them in
          awe of your tactical prowess. Utilize cunning maneuvers, formidable
          skills, and strategic planning to bring about their downfall. With
          unwavering determination, crush your enemies and claim victory as your
          own. Show no mercy, seize the moment, and emerge triumphant. Let the
          thrill of competition fuel your fire as you rise above all obstacles
          and defeat your enemies, leaving a trail of defeated foes in your
          wake. Are you ready to embrace the challenge and become a legend in
          the annals of this epic card game? Prove your mettle, conquer your
          adversaries, and etch your name in history as the ultimate conqueror!
        </p>
      </motion.div>
      <div id="heroFour-right">
        <motion.img
          initial={{ opacity: 0, scale: 0, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 3 }}
          src={wizard.imgUrl}
          alt=""
          id="wizard"
        />
      </div>
    </section>
  );
};

export { HeroFour };