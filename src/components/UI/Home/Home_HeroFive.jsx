import { motion } from 'framer-motion';
import { monsterList } from '../../../vanillaJsFiles/monsters.js';
import './Home_HeroFive.scss';

const HeroFive = (props) => {
  return (
    <section id="heroFive">
      <div id="monster-container">
        {monsterList.map((monster, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -200, rotate: -90, scale: 0.25 }}
            whileHover={{ rotate: 5, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="card-big"
            style={{
              background: `url(${monster.imgUrl}) center/cover`,
              zIndex: monsterList.length - index,
              left: `${(index / (monsterList.length - 1)) * 100}%`,
              transformOrigin: 'center center',
              transformStyle: 'preserve-3d',
              translateX: '-50%',
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileTap={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.25, delay: index * 0.2 + 0.5 }}
              className="card-title"
            ></motion.h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { HeroFive };
