import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

const Catalog = (props) => {
  return (
    <div>
      <NavBar />
      <h1>Catalog</h1>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

export { Catalog };
