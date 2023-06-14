import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { battleActions } from "../../store/slices/battleSlice.js";
const ClickableMonsters = (props) => {
  const { currentTown, monsters } = props;
  const dispatch = useDispatch();

  console.log(currentTown);

  return (
    <div id="ClickableMonsters">
      {monsters.map((mob) => (
        <div
          onClick={() => dispatch(battleActions.setTargetMonster(mob))}
          key={mob.id}
        >
          <img src={mob.imgUrl} alt={mob.name} />
        </div>
      ))}
    </div>
  );
};

const ClickableHeros = () => {
  const party = useSelector((state) => state.partyManager);
  const dispatch = useDispatch();

  // TODO: Add tabIndex to divs and modify keypress handler inside playercontrolls
  return (
    <div id="ClickableHeros">
      <div
        onClick={() => {
          dispatch(battleActions.setTargetHero(party.melee));
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
          dispatch(battleActions.setTargetHero(party.healer));
        }}
        id="healer"
      >
        <img src={party.healer.imgUrl} alt={party.healer.name} />
      </div>
      <div
        tabIndex={2}
        onClick={() => {
          dispatch(battleActions.setTargetHero(party.ranged));
        }}
        id="ranged"
      >
        <img src={party.ranged.imgUrl} alt={party.ranged.name} />
      </div>
    </div>
  );
};

export { ClickableMonsters, ClickableHeros };
