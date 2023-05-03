const ClickableMonsters = (props) => {
  const { handleMonsterClick, levelManager } = props;

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
  const { state, setBattle, battle } = props;
  const handleMeleeClick = () => {
    setBattle({
      ...battle,
      targetHero: state.party[1],
    });
  };
  const handleHealerClick = () => {
    setBattle({
      ...battle,
      targetHero: state.party[2],
    });
  };
  const handleRangedClick = () => {
    setBattle({
      ...battle,
      targetHero: state.party[3],
    });
  };

  return (
    <div id="ClickableHeros">
      <div onClick={handleMeleeClick} id="melee">
        <img src={state.melee.imgUrl} alt="" />
      </div>
      <div onClick={handleHealerClick} id="healer">
        <img src={state.healer.imgUrl} alt="" />
      </div>
      <div onClick={handleRangedClick} id="ranged">
        <img src={state.ranged.imgUrl} alt="" />
      </div>
    </div>
  );
};

export { ClickableMonsters, ClickableHeros };
