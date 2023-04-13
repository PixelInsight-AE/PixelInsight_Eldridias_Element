import { Link } from "react-router-dom";
import { floorOne } from "../vanillaJsFiles/floors";
const PlayerControlls = (props) => {
  const {
    floor,
    setFloor,
    party,
    playerController,
    computerController,
    selectedHero,
    selectedMonster,
    setSelectedMonster,
    setSelectedHerosHp,
    currentWave,
    setCurrentWave,
    currentFloor,
    maxFloor,
    setMaxFloor,
  } = props;
  const progressCheck = () => {
    console.log(maxFloor);
    if (currentFloor == maxFloor && computerController.isBossDefeated) {
      console.log("floor one done");
      setMaxFloor((prev) => prev + 1);
      console.log(maxFloor);
    }
  };
  const handleAttack = () => {
    playerController.attack(selectedHero, selectedMonster, floor);
    setSelectedMonster(selectedMonster.health);
    handleWaveChange();
  };
  const handleWaveChange = () => {
    // what happens when boss wave is defeated
    if (floor.length <= 1) {
      console.log("boss wave !!");
      progressCheck();
    }
    // what happens when a normal wave is defeated
    if (computerController.isWaveDefeated) {
      console.log("wave change ran");
      setCurrentWave((prev) => prev + 1);
      setFloor(floorOne[currentWave + 1]);
      computerController.isWaveDefeated = false;
    }
  };
  const handleEndTurn = () => {
    playerController.endTurn(
      playerController,
      computerController,
      selectedHero,
      selectedMonster,
      party
    );
    setSelectedHerosHp(selectedHero.health);
  };

  return (
    <div id="controls-container">
      <button onClick={() => handleAttack()}>Attack</button>
      <button
        onClick={() => playerController.heal(selectedHero, selectedMonster)}
      >
        Heal
      </button>
      <button onClick={() => handleEndTurn()}>End Turn</button>
      <Link to="/dashboard">
        <button>Surrender</button>
      </Link>
    </div>
  );
};

export { PlayerControlls };
