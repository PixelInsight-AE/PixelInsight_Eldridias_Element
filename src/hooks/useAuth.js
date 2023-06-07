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
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  const signup = (user) => {
    signUpFunction(user).then((res) => {
      console.log(res);
      //navigate("/");
    });
  };

  const login = async (user) => {
    const res = await logInFunction(user);
    if (!res) return;

    console.log(res.user.username);
    dispatch(authActions.setUser(res.user.username));

    //!! change this to navigate to dashboard
    navigate("/");
  };
  const logout = () => {
    logOutFunction();
    //navigate("/");
  };

  return { login, logout, signup };
};

export { useAuth };
