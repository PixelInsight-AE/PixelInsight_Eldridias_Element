import { motion } from "framer-motion";

const SelectedHeroStats = (props) => {
  const { battle } = props;
  return (
    <>
      <motion.div
        initial={{ opacity: 50, x: -225 }}
        whileHover={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
        id="SelectedHeroStats"
      >
        <h2>{battle.targetHero.name}</h2>
        <div className="selected-icons">
          <img src={battle.targetHero.elementIcon} alt="" />
          <img src={battle.targetHero.weaponIcon} alt="" />
          <img src={battle.targetHero.defaultImgUrl} alt="" />
        </div>
        <div className="selected-stats">
          <p className="hp">|HP: {battle.targetHero.health}|</p>
          <p className="def">|DEF:{battle.targetHero.defense}|</p>
          <p className="atk">|ATK:{battle.targetHero.attackPower}|</p>
        </div>
      </motion.div>
    </>
  );
};

const SelectedMonsterStats = (props) => {
  const { battle } = props;
  return (
    //! need to fix overflow x on the mosnter stat div right side
    <motion.div
      initial={{ opacity: 50, x: 225 }}
      whileHover={{ opacity: 100, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
      id="SelectedMonsterStats"
    >
      <h2>{battle.targetMonster.name}</h2>
      <div className="selected-icons">
        <img src={battle.targetMonster.elementIcon} alt="" />
        <img src={battle.targetMonster.weaponIcon} alt="" />
        <img src={battle.targetMonster.defaultImgUrl} alt="" />
      </div>
      <div className="selected-stats">
        <p className="hp">|HP: {battle.targetMonster.health}|</p>
        <p className="def">|DEF:{battle.targetMonster.defense}|</p>
        <p className="atk">|ATK:{battle.targetMonster.attackPower}|</p>
      </div>
    </motion.div>
  );
};

const PartyStatusBar = (props) => {
  const { battle } = props;
  return (
    <div id="PlayerStatusBar">
      <h2>
        {battle.targetHero.name} HP: {battle.targetHero.health}
      </h2>
      <h3>{battle.selectedCard.name}</h3>
    </div>
  );
};

const EnemyStatusBar = (props) => {
  const { battle } = props;
  return (
    <div id="EnemyStatusBar">
      <h2>
        {battle.targetMonster.name} HP - {battle.targetMonster.health}
      </h2>
    </div>
  );
};
const Stats = (props) => {
  const { battle } = props;
  return (
    <div id="Stats">
      <PartyStatusBar battle={battle} />
      <SelectedHeroStats battle={battle} />
      <EnemyStatusBar battle={battle} />
      <SelectedMonsterStats battle={battle} />
    </div>
  );
};

export { Stats };

// TODO: Ensure user can not see monster stats when scrolling... Overflow: hidden?
