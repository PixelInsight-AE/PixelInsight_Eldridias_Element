import { ClickableHeros, ClickableMonsters } from "./_Clickables";
import { BattleHero, BattleMonster } from "./_Battle_station";
import { Link } from "react-router-dom";
import { VictoryComponent } from "./_LootBox";
import { useEffect } from "react";
const Battlefield = (props) => {
  const {
    battle,
    handleMonsterClick,
    handleHeroClick,
    currentTown,
    monsters,
    handleHealthChange,
  } = props;

  useEffect(() => {
    console.log(currentTown.boss[0].imgUrl);
    if (currentTown.boss[0].health <= 0) {
      currentTown.handleBossDeath();
    }
  }, [currentTown.boss[0].health]);

  return (
    <div id="Battlefield">
      <ClickableHeros handleHeroClick={handleHeroClick} />
      <BattleHero battle={battle} handleHeroClick={handleHeroClick} />

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
