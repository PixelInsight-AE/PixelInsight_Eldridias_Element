import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logInFunction } from "../gameLogic/backendCalls/login";
import { logOutFunction } from "../gameLogic/backendCalls/logOut";
import { signUpFunction } from "../gameLogic/backendCalls/signUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/authSlice";
const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.username);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  const signup = (user) => {
    signUpFunction(user).then((res) => {
      console.log(res);
      //navigate("/");
    });
  };

  const login = (user) => {
    logInFunction(user).then(() => {
      dispatch(authActions.setUser(user.username));
      navigate("/");
    });
  };
  const logout = () => {
    logOutFunction();
    //navigate("/");
  };

  return { login, logout, signup };
};

export { useAuth };
