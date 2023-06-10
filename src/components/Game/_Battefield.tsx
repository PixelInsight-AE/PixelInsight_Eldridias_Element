import { ClickableHeros, ClickableMonsters } from "./_Clickables";
import { BattleHero, BattleMonster } from "./_Battle_station";
import { Link } from "react-router-dom";
import { VictoryMessageLootBox } from "./_LootBox";

const Battlefield = (props) => {
  const { battle, handleMonsterClick, currentTown } = props;
  return (
    <div id="Battlefield">
      <ClickableHeros battle={battle} />
      <BattleHero battle={battle} />
      <VictoryMessageLootBox />
      <BattleMonster battle={battle} />
      <ClickableMonsters
        handleMonsterClick={handleMonsterClick}
        battle={battle}
        currentTown={currentTown}
      />
    </div>
  );
};

export { Battlefield };
