import { motion } from 'framer-motion';


const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -100, color: 'white' }}
          animate={{ opacity: 1, x: 0, color: 'lightBlue' }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Eldridia's Element!
        </motion.h1>
      </div>
        <div>
          {/* Login form */}
          <motion.form 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          action="">
            <input type="email" name="email" id="email" placeholder='email'/>
            <input type="password" name="password" id="password" placeholder='password' />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              Login
            </motion.button>
          </motion.form>
        </div>
    </motion.header>
  );
};

export { Header };