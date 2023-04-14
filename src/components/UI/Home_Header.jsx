import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.Header
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1 }}
      id="home-header"
    >
      <button id="signUp-btn">sign up!</button>
      <button id="login-btn">log in!</button>
    </motion.Header>
  );
};

export { Header };
