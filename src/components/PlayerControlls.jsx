import { Link } from "react-router-dom";
import { floor1 } from "../vanillaJsFiles/floors";
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
    setCurrentFloor,
    maxFloor,
    setMaxFloor,
  } = props;
  const progressCheck = () => {
    if (currentFloor == maxFloor && computerController.isBossDefeated) {
      setMaxFloor(maxFloor + 1);
      setCurrentFloor((prev) => prev + 1);

      setCurrentWave(0);
      // console.log(maxFloor);
      // console.log(currentFloor);
    }
  };
  const handleAttack = () => {
    playerController.attack(selectedHero, selectedMonster, floor);
    setSelectedMonster(selectedMonster.health);
    handleWaveChange();
  };
  const handleWaveChange = () => {
    // what happens when boss wave is defeate
    // what happens when a normal wave is defeated
    if (computerController.isWaveDefeated) {
      setCurrentWave((prev) => prev + 1);
      setFloor(floor1[currentWave + 1]);
      progressCheck();
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
