import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUpForm = () => {
  return (
    <section id="sign-up-form">
      <form action="">
        <h2>Join the fight!</h2>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password2">Confirm Password</label>
        <input type="password" name="password2" id="password2" />
        <Link to="/signup/introduction">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Sign up!
          </motion.button>
        </Link>
      </form>
    </section>
  )
}


export { SignUpForm }; 