const ClickableMonsters = (props) => {
  const { handleMonsterClick, floor } = props;
  return (
    <div className="battlefield">
      {floor.map((mob) => (
        <div onClick={() => handleMonsterClick(mob)} key={mob.name}>
          <img src={mob.imgUrl} alt={mob.name} />
        </div>
      ))}
    </div>
  );
};

const ClickableHeros = (props) => {
  const { party, handleHeroClick } = props;
  return (
    <div className="battlefield">
      {party.map((hero) => (
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
