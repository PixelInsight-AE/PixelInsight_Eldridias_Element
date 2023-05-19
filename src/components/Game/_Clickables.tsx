import { motion } from 'framer-motion';

const ClickableMonsters = (props) => {
  const { handleMonsterClick, levelManager, battle, setBattle } = props;
  //make array of monsters minus the target monster
  let monsters = levelManager.wave.filter(
    (monster) => monster.id !== battle.targetMonster.id
  );

  return (
    <div id="ClickableMonsters">
      {monsters.map((mob) => (
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

  // TODO: Add tabIndex to divs and modify keypress handler inside playercontrolls
  return (
    <div id="ClickableHeros">
      <div onClick={handleMeleeClick} id="melee">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
          tabIndex="0"
          src={state.melee.imgUrl}
          alt=""
        />
      </div>
      <div tabIndex={1} onClick={handleHealerClick} id="healer">
        <img src={state.healer.imgUrl} alt="" />
      </div>
      <div tabIndex={2} onClick={handleRangedClick} id="ranged">
        <img src={state.ranged.imgUrl} alt="" />
      </div>
    </div>
  );
};

export { ClickableMonsters, ClickableHeros };
