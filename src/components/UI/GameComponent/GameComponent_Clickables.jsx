const ClickableMonsters = (props) => {
  const { handleMonsterClick, state, setState, levelManager, setLevelManager } = props;
  return (
    <div className="battlefield">
      {levelManager.wave.map((mob) => (
        <div onClick={() => handleMonsterClick(mob)} key={mob.id}>
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
