import { motion } from "framer-motion";
import { heroList } from "../../vanillaJsFiles/heros.js";

const HeroThree = (props) => {
  return (
    <section id="heroThree">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Choose your party!
      </motion.h1>
      <div id="playingCards">
        {heroList.map((hero, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -200, rotate: -90, scale: 0.25 }}
            whileHover={{ rotate: 5, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1.1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="card-big"
            style={{
              background: `url(${hero.imgUrl}) center/cover`,
              zIndex: heroList.length - index,
              left: `${(index / (heroList.length - 1)) * 100}%`,
              transformOrigin: "center center",
              transformStyle: "preserve-3d",
              translateX: "-50%",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileTap={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.25, delay: index * 0.2 + 0.5 }}
              className="card-title"
            >
              {hero.name}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { HeroThree };
