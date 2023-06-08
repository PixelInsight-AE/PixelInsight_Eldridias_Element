import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Aragar } from "./../../gameObjects/Towns/Aragar.jsx";
const ClickableMonsters = (props) => {
  const [bossAragar, waveOneAragar] = Aragar();

  //make array of monsters minus the target monster

  return (
    <div id="ClickableMonsters">
      {bossAragar.map((mob) => (
        <div onClick={() => handleMonsterClick(mob)} key={mob.id}>
          <img src={mob.imgUrl} alt={mob.name} />
        </div>
      ))}
    </div>
  );
};

const ClickableHeros = () => {
  const party = useSelector((state) => state.partyManager);

  const handleMeleeClick = () => {
    //something here
  };
  const handleHealerClick = () => {
    //somethinghere
  };
  const handleRangedClick = () => {
    //somethingHErer
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
          src={party.melee.imgUrl}
          alt={party.melee.name}
        />
      </div>
      <div tabIndex={1} onClick={handleHealerClick} id="healer">
        <img src={party.healer.imgUrl} alt={party.healer.name} />
      </div>
      <div tabIndex={2} onClick={handleRangedClick} id="ranged">
        <img src={party.ranged.imgUrl} alt={party.ranged.name} />
      </div>
    </div>
  );
};

export { ClickableMonsters, ClickableHeros };
