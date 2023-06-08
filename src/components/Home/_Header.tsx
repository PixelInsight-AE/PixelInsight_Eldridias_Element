import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { heroActions } from "./../../store/slices/heroSlice.js";
const Header = () => {
  const { login } = useLogin();

  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -100, color: "white" }}
          animate={{ opacity: 1, x: 0, color: "lightBlue" }}
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
          action=""
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            onClick={handleLogin}
          >
            Login
          </motion.button>
        </motion.form>
      </div>
      <h1></h1>
    </motion.header>
  );
};

export { Header };
