import { useEffect, useState } from "react";
import { logInFunction } from "../../../src/gameLogic/backendCalls/login.js";
import { useNavigate } from "react-router-dom";
const ExistingUserSignIn = () => {
  //? Existing User State and error handlers. Will be passed to the backend and cleared out.
  const [existingUser, setExistingUser] = useState({
    username: "",
    password: "",
    errors: {
      username: "",
      password: "",
    },
  });
  useEffect(() => {
    console.log(existingUser);
  }, [existingUser]);

  const navigate = useNavigate();
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
    logInFunction(existingUser);
    //navigate("/");
    //move user to home page
  };
  return (
    <div id="ExistingUserSignIn">
      <h2>Already a Member?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:{" "}
          <span className="error">{existingUser.errors.username}</span>
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
