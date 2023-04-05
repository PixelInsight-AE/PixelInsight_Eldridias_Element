import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

const DeckDisplayCard = (props) => {
  const { card } = props;
  return (
    <div className="display-card">
      <h1 className="card-name">{card.name}</h1>
      <div className="card-image">
        <img src={card.imgUrl} alt={card.name} />
      </div>
      <h3>{card.rarity}</h3>
      <h2>
        {card.cardLevel} -{" "}
        <img className="element-icon" src={card.elementIcon} /> -{" "}
        {card.attackPower}
      </h2>
    </div>
  );
};

const DeckBuilder = (props) => {
  const { deck } = props;
  return (
    <div>
      <NavBar />
      <h1>Deck</h1>
      <div id="deck-grid">
        {deck.map((card) => (
          <div key={card.id}>
            <DeckDisplayCard card={card} />
          </div>
        ))}
      </div>
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

export { DeckBuilder, DeckDisplayCard };
