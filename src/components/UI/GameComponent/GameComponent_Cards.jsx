const PlayingCards = ({ setState, state }) => {
  return (
    <div className="playing-cards">
      {state.playerHand.length ? (
        <MappedPlayingCards state={state} setState={setState} />
      ) : (
        <h2>You Need Some Cards to Do Battle!</h2>
      )}
    </div>
  );
};
const MappedPlayingCards = ({ state }) => {
  return (
    <div id="PlayingCards">
      {state.playerHand.map((card) => {
        return (
          <div className="PlayingCard" key={card.id}>
            <h3>{card.name}</h3>
            <img src={card.imgUrl} alt="" />
            <p>Type: {card.elementType}</p>
            <p>MP Cost: {card.manaCost}</p>
          </div>
        );
      })}
    </div>
  );
};

export { PlayingCards };
