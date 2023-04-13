// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { floorOne } from "../vanillaJsFiles/floors";

const BossCard = (props) => {
  const { boss } = props;
  return (
    <div className="boss-card">
      <h1 className="boss-name">{boss.name}</h1>
      <h2>
        HP:{boss.health} MP: {boss.mana}
      </h2>
    </div>
  );
};

const PartyStats = (props) => {
  const { party } = props;
  return (
    <div id="left-side-container">
      {party.map((hero) => (
        <div className="party-stats" key={hero.name}>
          <div className="hero-stats">
            <img src={hero.imgUrl} alt="" />
            <h2>{hero.name}</h2>
          </div>
          <hr />
          <div className="hero-stats">
            <h3 className="hp">HP: {hero.health}</h3>
            <h3>ATK: {hero.attackPower}</h3>
            <h3>DEF: {hero.defense}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

const EnemyStats = (props) => {
  const { floor, boss, currentWave } = props;
  return (
    <div id="right-side-container">
      <div id="enemy-status-container">
        <div id="boss-status">
          <BossCard boss={boss} />
        </div>
        <div id="mob-status">
          <MonsterStats currentWave={currentWave} floor={floor} />
        </div>
      </div>
    </div>
  );
};
const MonsterStats = (props) => {
  const { floor, currentWave } = props;
  return (
    <div className="monster-stats-container">
      {floor.map((monster) => (
        <div className="monster-stats" key={monster.name}>
          <div className="monster-stats-top">
            <img src={monster.imgUrl} alt="" />
            <h2>{monster.name}</h2>
          </div>
          <hr />
          <div className="monster-stats-bottom">
            <h3 className="hp">HP: {monster.health}</h3>
            <h3>ATK: {monster.attackPower}</h3>
            <h3>DEF: {monster.defense}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

// ! IN PROGRESS
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
  } = props;
  return (
    <div id="middle-container">
      <div id="message-box">
        <h2></h2>
      </div>

      <div id="enemy-battlefield">
        <Wave
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
        />
      </div>
      <div id="party-battlefield">
        <PartyOfHeros handleHeroClick={handleHeroClick} party={party} />
      </div>
    </div>
  );
};

const Wave = (props) => {
  const { handleMonsterClick, floor } = props;
  return (
    <div className="battlefield">
      {floor.map((mob) => (
        <div onClick={() => handleMonsterClick(mob)} key={mob.name}>
          <img src={mob.imgUrl} alt={mob.name} />
        </div>
      ))}
    </div>
  );
};

const PartyOfHeros = (props) => {
  const { party, handleHeroClick } = props;
  return (
    <div className="battlefield">
      {party.map((hero) => (
        <div
          className="hero-click"
          onClick={() => handleHeroClick(hero)}
          key={hero.name}
        >
          <img src={hero.imgUrl} alt="hero.name" />
        </div>
      ))}
    </div>
  );
};

const DisplayCurrentBattle = (props) => {
  const { selectedHero, selectedMonster, computerController } = props;
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

const GameComponent = (props) => {
  const {
    computerController,
    playerController,
    boss,
    party,
    floor,
    setFloor,
    currentFloor,
    setCurrentFloor,
    maxFloor,
    setMaxFloor,
    // deck,
    // setFloor,
    // currency,
    // setCurrency,
    // inventory,
    // setInventory,
    currentWave,
    setCurrentWave,
  } = props;

  const [selectedHero, setSelectedHero] = useState(party[0]);
  const [selectedMonster, setSelectedMonster] = useState(floor[0]);
  const [selectedHerosHp, setSelectedHerosHp] = useState(selectedHero.health);
  const [selectedMonstersHp, setSelectedMonstersHp] = useState(
    selectedMonster.health
  );

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  const handleMonsterClick = (monster) => {
    setSelectedMonster(monster);
  };

  return (
    <>
      <div id="game-container">
        <PartyStats party={party} />
        <Battlefield
          floor={floor}
          party={party}
          handleMonsterClick={handleMonsterClick}
          handleHeroClick={handleHeroClick}
          selectedHero={selectedHero}
          selectedMonster={selectedMonster}
          currentWave={currentWave}
          setCurrentWave={setCurrentWave}
          computerController={computerController}
        />
        <EnemyStats currentWave={currentWave} floor={floor} boss={boss} />
      </div>
      <div id="cards-container"></div>
      <PlayerControlls
        floor={floor}
        setFloor={setFloor}
        currentFloor={currentFloor}
        setCurrentFloor={setCurrentFloor}
        maxFloor={maxFloor}
        setMaxFloor={setMaxFloor}
        party={party}
        playerController={playerController}
        computerController={computerController}
        selectedHero={selectedHero}
        selectedMonster={selectedMonster}
        setSelectedMonster={setSelectedMonstersHp}
        setSelectedHerosHp={setSelectedHerosHp}
        setCurrentWave={setCurrentWave}
        currentWave={currentWave}
      />
    </>
  );
};

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
  } = props;
  const progressCheck = () => {
    //silly
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

export { GameComponent };
