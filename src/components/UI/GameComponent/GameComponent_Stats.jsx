const PartyStats = (props) => {
  const { battle } = props;
  return (
    <div id="PartyStats">
      <h1>{battle.targetHero.name}</h1>
      <h2>Health {battle.targetHero.health}</h2>
      <p>Attatck Power - {battle.targetHero.attackPower}</p>
    </div>
  );
};

const MonsterStats = (props) => {
  const { battle } = props;
  return (
    <div id="MonsterStats">
      <h1>{battle.targetMonster.name}</h1>
      <h2>Health {battle.targetMonster.health}</h2>
      <p>Attatck Power - {battle.targetMonster.attackPower}</p>
    </div>
  );
};

export { MonsterStats, PartyStats };
