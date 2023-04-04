import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

const DeckDisplayCard = (props) => {
  const { card } = props;
  return (
    <div className="display-card">
      <h1>{card.name}</h1>
      <div className="hero-image">
        <img src={card.imgUrl} alt={card.name} />
      </div>
      <h2>
        {card.cardLevel} - {card.elementType}
      </h2>
      <h3>{card.rarity}</h3>
    </div>
  );
};

const DeckBuilder = (props) => {
  const { deck } = props;
  return (
    <div>
      <NavBar />
      <h1>Deck</h1>
      {deck.map((card) => (
        <div key={card.id}>
          <DeckDisplayCard card={card} />
        </div>
      ))}
      <Link to="/dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
};

export { DeckBuilder, DeckDisplayCard };
