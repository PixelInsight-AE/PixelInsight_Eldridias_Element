import { motion } from "framer-motion";
import { heroList } from "../../vanillaJsFiles/heros.js";

const HeroThree = (props) => {
  return (
    <section id="heroThree">
      <div id="playingCards">
        {heroList.map((hero, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 4, delay: index * 0.5 }}
            className="card-big"
          >
            <h2 className="card-title">{hero.name}</h2>
            <img src={hero.imgUrl} alt="" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { HeroThree };
