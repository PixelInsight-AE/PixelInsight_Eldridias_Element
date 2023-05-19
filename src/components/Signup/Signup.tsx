import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExistingUserSignIn } from "./ExistingUser";
import { NewUserSignUp } from "./NewUser";

import "./Signup.scss";

const SignUp = () => {
  return (
    <div id="SignUp">
      <h1>Header Here</h1>
      <ExistingUserSignIn />
      <NewUserSignUp />
    </div>
  );
};

export { SignUp };
