import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { townActions } from "../../store/slices/townSlice.js";
const ClickableMonsters = (props) => {
  const { handleMonsterClick, currentTown, monsters } = props;

  console.log(currentTown);

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

const ClickableHeros = ({ handleHeroClick }) => {
  const party = useSelector((state) => state.partyManager);

  // TODO: Add tabIndex to divs and modify keypress handler inside playercontrolls
  return (
    <div id="ClickableHeros">
      <div
        onClick={() => {
          handleHeroClick(party.melee);
        }}
        id="melee"
      >
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
          tabIndex="0"
          src={party.melee.imgUrl}
          alt={party.melee.name}
        />
      </div>
      <div
        tabIndex={1}
        onClick={() => {
          handleHeroClick(party.healer);
        }}
        id="healer"
      >
        <img src={party.healer.imgUrl} alt={party.healer.name} />
      </div>
      <div
        tabIndex={2}
        onClick={() => {
          handleHeroClick(party.ranged);
        }}
        id="ranged"
      >
        <img src={party.ranged.imgUrl} alt={party.ranged.name} />
      </div>
    </div>
  );
};

export { ClickableMonsters, ClickableHeros };
