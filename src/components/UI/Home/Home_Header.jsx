import { motion } from 'framer-motion';
import './Home_Header.scss'; // ? Keep each component's SCSS truly separate

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3 }}
      id="home-header"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100, color: 'white' }}
        animate={{ opacity: 1, x: 0, color: 'lightBlue' }}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        adventure awaits!
      </motion.h1>
      <motion.button
        initial={{ scale: 1, backgroundColor: 'white' }}
        whileHover={{ scale: 1.1, backgroundColor: 'pink' }}
        id="signUp-btn"
      >
        sign up!
      </motion.button>
      <motion.button
        initial={{ scale: 1, backgroundColor: 'white' }}
        whileHover={{ scale: 1.1, backgroundColor: 'pink' }}
        id="login-btn"
      >
        log in!
      </motion.button>
    </motion.header>
  );
};

export { Header };
