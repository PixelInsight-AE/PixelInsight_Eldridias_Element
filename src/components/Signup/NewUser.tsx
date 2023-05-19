import { useState } from "react";
const NewUserSignUp = () => {
  //? New User State and error handlers. Will be passed to the backend and cleared out.
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    firstName: "",
    lastName: "",
    birthday: "",
    errors: {
      passwordConfirm: "",
      username: "",
      password: "",
      email: "",
      birthday: "",
      firstName: "",
      lastName: "",
    },
  });
  //? age check funtion. can be modified to check for any age.
  const checkAge = (date) => {
    const currentDate = new Date();
    const userBirthday = new Date(date);
    const thirteenYearsAgo = new Date(
      currentDate.getFullYear() - 13,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    return thirteenYearsAgo >= userBirthday;
  };

  //? Handles changes to the form and checks for errors.
  const handleChange = (e) => {
    const { name, value } = e.target;

    //! Regex for email validation.
    const emailRegex = /\S+@\S+\.\S+/;

    //! Checks if user is at least 13 years old.
    const isAboveThirteen = name === "birthday" ? checkAge(value) : true;

    //! Sets the state of the new user and checks for errors.
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors, //!! This is the key to the whole thing. It keeps the other errors from being overwritten.
        passwordConfirm:
          (name === "password" && prevState.passwordConfirm !== value) ||
          (name === "passwordConfirm" && prevState.password !== value)
            ? "Passwords do not match"
            : "",
        username:
          name === "username" && value.length < 3 && value.length > 0
            ? "Username must be at least 3 characters"
            : "",
        email:
          name === "email" && value.length > 0 && !emailRegex.test(value)
            ? "Email must be valid email address"
            : "",
        birthday:
          name === "birthday" && value.length > 0 && !isAboveThirteen
            ? "You must be at least 13 years old to sign up"
            : "",
      },
    }));
  };

  //? Handles the submit for the form. Checks for errors and submits to the backend for user creation.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect all error messages
    const errorMessages = Object.values(newUser.errors).filter(
      (err) => err.length > 0
    );

    if (errorMessages.length === 0) {
      console.log("Submitting form");
      //signUpFunction(newUser);
    } else {
      console.log("Errors in form:", errorMessages);
    }
  };

  return (
    <div id="new-user">
      <h2>New User's Sign-Up here</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username: <span className="error">{newUser.errors.username}</span>
        </label>

        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />
        <label htmlFor="email">
          Email: <span className="error">{newUser.errors.email}</span>
        </label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />

        <label htmlFor="passwordConfirm">
          Confirm Password:{" "}
          <span className="error">{newUser.errors.passwordConfirm}</span>
        </label>
        <input
          type="password"
          name="passwordConfirm"
          value={newUser.passwordConfirm}
          onChange={handleChange}
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleChange}
        />
        <label htmlFor="birthday">
          Birthday: <span className="error">{newUser.errors.birthday}</span>
        </label>
        <input
          type="date"
          name="birthday"
          value={newUser.birthday}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export { NewUserSignUp };
