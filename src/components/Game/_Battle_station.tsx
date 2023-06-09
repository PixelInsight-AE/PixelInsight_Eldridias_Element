import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const BattleHero = () => {
  const tank = useSelector((state) => state.partyManager.tank);

  return (
    <div id="BattleHero">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        end={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        id="monster-attack-animation"
      >
        "damage here"
      </motion.div>
      <img src={tank.imgUrl} alt={tank.name} />
    </div>
  );
};

const BattleMonster = (props) => {
  const { battle } = props;
  return (
    <div id="BattleMonster">
      <div id="hero-attack-animation"></div>
      <img src={battle.targetMonster.imgUrl} alt="" />
    </div>
  );
};

export { BattleMonster, BattleHero };
