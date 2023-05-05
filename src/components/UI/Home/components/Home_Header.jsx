import { motion } from 'framer-motion';
import { variants } from '../variants';

const Header = () => {
  return (
    <motion.header
      variants={variants.header}
      initial="hidden"
      animate="visible"
      transition={variants.header.transition}
      id="home-header"
    >
      <motion.h1
        variants={variants.header.h1}
        initial="hidden"
        animate="visible"
        transition={variants.header.h1.transition}
      >
        adventure awaits!
      </motion.h1>
      <motion.button
        variants={variants.header.button}
        initial="hidden"
        visible="visible"
        whileHover="whileHover"
        id="signUp-btn"
      >
        sign up!
      </motion.button>
      <motion.button
        variants={variants.header.button}
        initial="hidden"
        visible="visible"
        whileHover="whileHover"
        id="login-btn"
      >
        log in!
      </motion.button>
    </motion.header>
  );
};

export { Header };
