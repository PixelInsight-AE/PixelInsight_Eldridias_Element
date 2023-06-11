import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Howl, Howeler } from "howler";

const HeroOne = () => {
  const sound = new Howl({
    src: ["/src/assets/Music/kingdom-of-fantasy-version-60s-10817.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.5,
    onend: function () {
      console.log("Finished!");
    },
  });

  const handlePlay = () => {
    console.log("Play button clicked");
    sound.play();
  };

  const handlePause = () => {
    console.log("Pause button clicked");
    sound.stop();
  };

  return (
    <section id="heroOne" onMouseEnter={handlePlay}>
      <motion.div
        id="heroOne-wrapper"
        initial={{ opacity: 0, scale: 0.25 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 2 }}
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
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        >
          Enter a world of magic and adventure, where you can collect and trade
          powerful cards featuring epic heroes and fearsome monsters.
        </motion.p>

        <Link to="/signup">
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
        <button onClick={handlePause}>Pause</button>
      </motion.div>
    </section>
  );
};

export { HeroOne };
