import { ClickableHeros, ClickableMonsters } from "./_Clickables";
import { BattleHero, BattleMonster } from "./_Battle_station";
import { Link } from "react-router-dom";
import { VictoryMessageLootBox } from "./_LootBox";

const Battlefield = (props) => {
  const { battle, handleMonsterClick, handleHeroClick, currentTown, monsters } =
    props;

  return (
    <div id="Battlefield">
      <ClickableHeros handleHeroClick={handleHeroClick} />
      <BattleHero battle={battle} handleHeroClick={handleHeroClick} />
      <VictoryMessageLootBox />
      <BattleMonster battle={battle} />
      <ClickableMonsters
        handleMonsterClick={handleMonsterClick}
        battle={battle}
        currentTown={currentTown}
        monsters={monsters}
      />
    </div>
  );
};

export { Battlefield };
