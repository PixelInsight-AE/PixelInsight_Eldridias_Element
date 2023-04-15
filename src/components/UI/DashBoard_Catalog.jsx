import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

const Catalog = (props) => {
  const { party } = props;
  return (
    <div>
      <NavBar />
      <h1>Catalog</h1>
      <StoryBoard party={party} story={story} />
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

export { Catalog };
