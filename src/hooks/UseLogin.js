import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/authSlice";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(null);
  const dispatch = useDispatch();

  const login = async (user) => {
    setLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3333/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
        },
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.message);
      console.log(json);
    }
    if (response.ok) {
      console.log(json);
      dispatch(authActions.setUser(json.user.username));
      dispatch(authActions.setToken(json.token));
      setLoading(false);
      //!! navigate to dash after login
      navigate("/");
    }
  };

  return { login, Loading, error };
};
