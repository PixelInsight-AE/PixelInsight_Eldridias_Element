import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2> Some dynamic content </h2>
      <Link to="/">
        <button className="exit-button">Exit</button>
      </Link>
    </header>
  );
};

export { Header };
