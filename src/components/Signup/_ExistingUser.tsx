import { useEffect, useState } from "react";
import { useAuth } from "./../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const ExistingUserSignIn = () => {
  const dispatch = useDispatch();
  const testuser = useSelector((state) => state.auth.username);

  //? Existing User State and error handlers. Will be passed to the backend and cleared out.
  const [existingUser, setExistingUser] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExistingUser((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        username:
          name === "username" && value.length < 3 && value.length > 0
            ? "Enter a valid username"
            : "",
        password:
          name === "password" && value.length < 6 && value.length > 0
            ? "Enter a valid password"
            : "",
      },
    }));
  };
  //? handles submit for the login form.
  const handleSubmit = (e) => {
    e.preventDefault();
    login(existingUser);
  };
  useEffect(() => {
    console.log(testuser);
  }, [testuser]);
  return (
    <div id="ExistingUserSignIn">
      <h2>Already a Member?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username: <span className="error">{errors.username}</span>
        </label>
        <input
          type="text"
          name="username"
          value={existingUser.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={existingUser.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { ExistingUserSignIn };
