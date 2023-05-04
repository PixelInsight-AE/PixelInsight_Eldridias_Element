import { motion } from 'framer-motion';
import { useEffect } from 'react';
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
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        end={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        id="monster-attack-animation"
      >
        {battle.monsterDamageAnimation}
      </motion.div>
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
