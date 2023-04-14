import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroOne = (props) => {
  return (
    <section id="heroOne">
      <motion.div
        id="heroOne-wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}
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
          transition={{ duration: 2, delay: 0.75, ease: "easeInOut" }}
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
              initial={{
                scale: 1,
                y: 0,
                backgroundColor: "white",
              }}
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

export { HeroOne };
