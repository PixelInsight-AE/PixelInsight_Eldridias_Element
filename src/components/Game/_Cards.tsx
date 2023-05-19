const PlayingCards = ({ setState, state, battle, setBattle }) => {
  const handleClick = (e, card) => {
    e.preventDefault();
    setBattle({
      ...battle,
      selectedCard: card,
    });
  };
  return (
    <div className="playing-cards">
      {state.playerHand.length ? (
        <MappedPlayingCards
          handleClick={handleClick}
          state={state}
          setState={setState}
          battle={battle}
          setBattle={setBattle}
        />
      ) : (
        <h2>You Need Some Cards to Do Battle!</h2>
      )}
    </div>
  );
};
const MappedPlayingCards = ({ state, handleClick }) => {
  return (
    <div id="PlayingCards">
      {state.playerHand.map((card) => {
        return (
          <div
            onClick={(e) => handleClick(e, card)}
            className="PlayingCard"
            key={card.id}
          >
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
