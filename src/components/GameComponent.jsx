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
        <div id="monster-stats" key={monster.name}>
          <img src={monster.elementIcon} alt="" />
          <h3>
            {monster.name}-{monster.health}-
          </h3>
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
          <h1>{mob.name}</h1>
          <img src={mob.imgUrl} alt={mob.name} />
          <h2>HP:{mob.health}</h2>
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
          <h1>{hero.name}</h1>
          <img src={hero.imgUrl} alt="hero.name" />
          <h2>HP: {hero.health}</h2>
        </div>
      ))}
    </div>
  );
};

const DisplayCurrentBattle = (props) => {
  const { selectedHero, selectedMonster } = props;

  return (
    <div className="battlefield">
      <div className="battle-hero">
        <h1>{selectedHero.name}</h1>
        <h2>{selectedHero.health}</h2>
        <img src={selectedHero.imgUrl} alt="" />
      </div>

      <div className="battle-animation">
        <h1>VS</h1>
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
        />
        <PlayerControlls
          floor={floor}
          setFloor={setFloor}
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
        <EnemyStats currentWave={currentWave} floor={floor} boss={boss} />
      </div>
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

  const handleAttack = () => {
    playerController.attack(selectedHero, selectedMonster, floor);
    setSelectedMonster(selectedMonster.health);
    handleWaveChange();
  };
  const handleWaveChange = () => {
    console.log(floor);
    if (floor.length < 1) {
      console.log("boss wave !!");
    }
    // if (floor.length < 1) {
    //   console.log("boss wave !!");
    // }
    if (computerController.isWaveDefeated) {
      console.log("wave change ran");
      //setCurrentWave(currentWave + 1);
      setCurrentWave((prev) => prev + 1);
      setFloor(floorOne[currentWave + 1]);
      //setFloor((prev) => prev.slice(i, prev.length));

      console.log(floor);
      console.log(currentWave);
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
