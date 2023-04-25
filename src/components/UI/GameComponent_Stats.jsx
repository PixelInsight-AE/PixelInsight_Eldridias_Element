const PartyStats = (props) => {
  const { state, setState } = props;
  return (
    <div id="left-side-container">
      {state.party.map((hero) => (
        <div className="party-stats" key={hero.name}>
          <div className="hero-stats">
            <img src={hero.imgUrl} alt="" />
            <h2>{hero.name}</h2>
          </div>
          <hr />
          <div className="hero-stats">
            <h3 className="hp">HP: {hero.health}</h3>
            <h3>ATK: {hero.attackPower}</h3>
            <h3>DEF: {hero.defense}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

const MonsterStats = (props) => {
  const { state, setState } = props;
  return (
    <div className="monster-stats-container">
      {state.floor.map((monster) => (
        <div className="monster-stats" key={monster.name}>
          <div className="monster-stats-top">
            <img src={monster.imgUrl} alt="" />
            <h2>{monster.name}</h2>
          </div>
          <hr />
          <div className="monster-stats-bottom">
            <h3 className="hp">HP: {monster.health}</h3>
            <h3>ATK: {monster.attackPower}</h3>
            <h3>DEF: {monster.defense}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export { MonsterStats, PartyStats };
