import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/overview">OverView</Link>
          </li>
          <li>
            <Link to="/dashboard/party">
              Party
              {/* // to={{
              //   pathname: "/dashboard/party",
              //   state: {
              //     setTank: props.setTank,
              //     setMelee: props.setMelee,
              //     setRanged: props.setRanged,
              //     setHealer: props.setHealer,
              //     tank: props.tank,
              //     melee: props.melee,
              //     ranged: props.ranged,
              //     healer: props.healer,
              //   },
              // }} */}
              Party
            </Link>
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
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export { NavBar };
