const BattleHero = (props) => {
  const { battle, setBattle, state, setState } = props;

  const handleTankClick = () => {
    setBattle({
      ...battle,
      targetHero: state.party[0],
    });
  };
  return (
    <div onClick={handleTankClick} id="BattleHero">
      <div id="monster-attack-animation">{battle.monsterDamageAnimation}</div>
      <img src={state.tank.imgUrl} alt="" />
    </div>
  );
};

const BattleMonster = (props) => {
  const { battle } = props;
  return (
    <div id="BattleMonster">
      <div id="hero-attack-animation">{battle.heroDamageAnimation}</div>
      <img src={battle.targetMonster.imgUrl} alt="" />
    </div>
  );
};

export { BattleMonster, BattleHero };
