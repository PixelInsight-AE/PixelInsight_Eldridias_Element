const ClickableMonsters = (props) => {
  const { handleMonsterClick, state, setState } = props;
  return (
    <div className="battlefield">
      {state.floor.map((mob) => (
        <div onClick={() => handleMonsterClick(mob)} key={mob.name}>
          <img src={mob.imgUrl} alt={mob.name} />
        </div>
      ))}
    </div>
  );
};

const ClickableHeros = (props) => {
  const { state, setState, handleHeroClick } = props;
  return (
    <div className="battlefield">
      {state.party.map((hero) => (
        <div
          className="hero-click"
          onClick={() => handleHeroClick(hero)}
          key={hero.name}
        >
          <img src={hero.imgUrl} alt="hero.name" />
        </div>
      ))}
    </div>
  );
};

export { ClickableMonsters, ClickableHeros };
