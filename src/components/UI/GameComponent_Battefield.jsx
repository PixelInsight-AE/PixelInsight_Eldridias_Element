import { ClickableHeros, ClickableMonsters } from "./GameComponent_Clickables";
import { PartyStats, MonsterStats } from "./GameComponent_Stats";
import { Link } from "react-router-dom";

const DisplayCurrentBattle = (props) => {
  const { selectedHero, selectedMonster, computerController, maxFloor } = props;
  const victoryMessage = (
    <div>
      <h1>You Completed The Floor</h1>
      <Link to="/dashboard">
        <button>
          <h2>Next Floor</h2>
        </button>
      </Link>
      <Link to="/dashboard">
        <button>
          <h2>Return To Town</h2>
        </button>
      </Link>
    </div>
  );

  return (
    <div className="battlefield">
      <div className="battle-hero">
        <h1>{selectedHero.name}</h1>
        <h2>{selectedHero.health}</h2>
        <img src={selectedHero.imgUrl} alt="" />
      </div>

      <div className="battle-animation">
        {computerController.isBossDefeated ? victoryMessage : <h1>VS</h1>}
      </div>

      <div className="battle-monster">
        <h1>{selectedMonster.name}</h1>
        <h2>{selectedMonster.health}</h2>
        <img src={selectedMonster.imgUrl} alt="" />
      </div>
    </div>
  );
};

const Battlefield = (props) => {
  const {
    floor,
    party,
    handleMonsterClick,
    handleHeroClick,
    selectedHero,
    selectedMonster,
    currentWave,
    setCurrentWave,
    computerController,
    maxFloor,
  } = props;
  return (
    <>
      <div id="left-container">
        <PartyStats party={party} />
      </div>
      <div id="middle-container">
        <div id="message-box">
          <h2></h2>
        </div>

        <div id="enemy-battlefield">
          <ClickableMonsters
            handleMonsterClick={handleMonsterClick}
            floor={floor}
            currentWave={currentWave}
            setCurrentWave={setCurrentWave}
          />
        </div>
        <div id="battle-animation-container">
          <DisplayCurrentBattle
            selectedHero={selectedHero}
            selectedMonster={selectedMonster}
            computerController={computerController}
            maxFloor={maxFloor}
          />
        </div>
        <div id="party-battlefield">
          <ClickableHeros handleHeroClick={handleHeroClick} party={party} />
        </div>
      </div>

      <div id="right-container">
        <MonsterStats floor={floor} />
      </div>
    </>
  );
};

export { Battlefield };
