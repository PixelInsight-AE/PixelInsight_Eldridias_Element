import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

const Shop = (props) => {
  return (
    <div>
      <NavBar />
      <h1>Shop</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

export { Shop };
