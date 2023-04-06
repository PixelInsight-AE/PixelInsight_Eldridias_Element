// import bootstrap oly to this file
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="party-stats-container">
        {party.map((hero) => (
          <div id="party-stats" key={hero.name}>
            <h2>
              {hero.name} - {hero.health}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
const EnemyStats = (props) => {
  const { floor, boss } = props;
  return (
    <div id="right-side-container">
      <div id="enemy-status-container">
        <div id="boss-status">
          <BossCard boss={boss} />
        </div>
        <div id="mob-status">
          <MonsterStats floor={floor} />
        </div>
      </div>
    </div>
  );
};
const MonsterStats = (props) => {
  const { floor } = props;
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

const Battlefield = (props) => {
  const {
    floor,
    party,
    handleMonsterClick,
    handleHeroClick,
    selectedHero,
    selectedMonster,
  } = props;
  return (
    <div id="middle-container">
      <DisplayCurrentBattle
        selectedHero={selectedHero}
        selectedMonster={selectedMonster}
      />
      <h1>Middle container / battlefield and message box</h1>
      <div id="message-box">
        <h2>Here goes the dynamic messages, .... has died... and so on</h2>
      </div>
      <div id="enemy-battlefield">
        <Wave handleMonsterClick={handleMonsterClick} floor={floor} />
      </div>
      <div id="battle-animation-container">
        <h2>In here go the animations</h2>
      </div>
      <div id="party-battlefield">
        <PartyOfHeros handleHeroClick={handleHeroClick} party={party} />
      </div>
    </div>
  );
};

const Wave = (props) => {
  const { floor, handleMonsterClick } = props;
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
        <h1>
          {selectedHero.name} - {selectedHero.health}
        </h1>
      </div>
      <div className="battle-monster">
        <h1>
          {selectedMonster.name} - {selectedMonster.health}
        </h1>
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
    // deck,
    // setFloor,
    // currency,
    // setCurrency,
    // inventory,
    // setInventory,
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
        />
        <EnemyStats floor={floor} boss={boss} />
        <PlayerControlls
          party={party}
          playerController={playerController}
          computerController={computerController}
          selectedHero={selectedHero}
          selectedMonster={selectedMonster}
          setSelectedMonster={setSelectedMonstersHp}
          setSelectedHerosHp={setSelectedHerosHp}
        />
      </div>
    </>
  );
};

const PlayerControlls = (props) => {
  const {
    party,
    playerController,
    computerController,
    selectedHero,
    selectedMonster,
    setSelectedMonster,
    setSelectedHerosHp,
  } = props;
  const handleAttack = () => {
    playerController.attack(selectedHero, selectedMonster);
    setSelectedMonster(selectedMonster.health);
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
