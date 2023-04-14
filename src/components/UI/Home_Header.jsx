import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      id="home-header"
    >
      <motion.button whileHover={{ scale: 1.1 }} id="signUp-btn">
        sign up!
      </motion.button>
      <button id="login-btn">log in!</button>
    </motion.header>
  );
};

export { Header };
