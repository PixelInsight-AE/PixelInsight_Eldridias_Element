import { ClickableHeros, ClickableMonsters } from "./_Clickables";
import { BattleHero, BattleMonster } from "./_Battle_station";
import { Link } from "react-router-dom";
import { VictoryComponent } from "./_LootBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { battleActions } from "../../store/slices/battleSlice.js";
const Battlefield = (props) => {
  const party = useSelector((state) => state.partyManager);
  const dispatch = useDispatch();
  const { currentTown, monsters } = props;

  useEffect(() => {
    console.log(currentTown.boss[0].imgUrl);
    if (currentTown.boss[0].health <= 0) {
      currentTown.handleBossDeath();
    }
  }, [currentTown.boss[0].health]);
  useEffect(() => {
    dispatch(battleActions.setTargetMonster(monsters[0]));
    dispatch(battleActions.setTargetHero(party.tank));
  }, []);
  return (
    <div id="Battlefield">
      <ClickableHeros />
      <BattleHero />

      <BattleMonster />
      <ClickableMonsters currentTown={currentTown} monsters={monsters} />
    </div>
  );
};

export { Battlefield };
