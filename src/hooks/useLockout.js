import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const useLockout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const lockout = (path) => {
    switch (path) {
      case !isAuthenticated && "/dashboard":
        return navigate("/");
      case !isAuthenticated && "/game":
        return navigate("/");
      case !isAuthenticated && "/game/story":
        return navigate("/");
      case !isAuthenticated && "/game/play":
        return navigate("/");
      case !isAuthenticated && "/account":
        return navigate("/");
      case !isAuthenticated && "/account/profile":
        return navigate("/");
      case !isAuthenticated && "/account/settings":
        return navigate("/");
      case !isAuthenticated && "/signup/introduction":
      default:
        return;
    }
  };

  return { lockout };
};
export { useLockout };
