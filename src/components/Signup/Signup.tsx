import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExistingUserSignIn } from "./_ExistingUser";
import { SignUpHeader } from "./_SignUpHeader";
import { NewUserSignUp } from "./_NewUser";
import { Header } from "../../components/Home/_Header";
import Snowfall from "react-snowfall";
import "./Signup.scss";

const SignUp = () => {
  return (
    <div id="SignUp">
      <SignUpHeader />
      <ExistingUserSignIn />
      <NewUserSignUp />
      <Link to="/">Back</Link>
    </div>
  );
};

export { SignUp };
