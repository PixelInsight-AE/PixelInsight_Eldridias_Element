import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/overview">OverView</Link>
          </li>
          <li>
            <Link to="/dashboard/party">Party</Link>
          </li>
          <li>
            <Link to="/dashboard/deck">Deck</Link>
          </li>
          <li>
            <Link to="/dashboard/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/dashboard/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { NavBar };
