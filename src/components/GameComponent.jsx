// import bootstrap oly to this file

const BossCard = (props) => {
  const { boss } = props;
  return (
    <div className="boss-card">
      <h1 className="boss-name">{boss.name}</h1>
      {/*       <div className="boss-image">
        <img src={boss.imgUrl} alt={boss.name} />
      </div> */}
      <h2>
        HP:{boss.health} MP: {boss.mana}
      </h2>
    </div>
  );
};

const TankHero = (props) => {
  const { tank } = props;
  return (
    <div className="tank-card">
      <h1 className="tank-name">{tank.name}</h1>
      {/*       <div className="tank-image">
        <img src={tank.imgUrl} alt={tank.name} />
      </div> */}
      <h2>{tank.health}</h2>
    </div>
  );
};

const MeleeHero = (props) => {
  const { melee } = props;
  return (
    <div className="melee-card">
      <h1 className="melee-name">{melee.name}</h1>
      {/*       <div className="melee-image">
        <img src={melee.imgUrl} alt={melee.name} />
      </div> */}
      <h2>{melee.health}</h2>
    </div>
  );
};

const RangedHero = (props) => {
  const { ranged } = props;
  return (
    <div className="ranged-card">
      <h1 className="ranged-name">{ranged.name}</h1>
      {/*       <div className="ranged-image">
        <img src={ranged.imgUrl} alt={ranged.name} />
      </div> */}
      <h2>{ranged.health}</h2>
    </div>
  );
};

const HealerHero = (props) => {
  const { healer } = props;
  return (
    <div className="healer-card">
      <h1 className="healer-name">{healer.name}</h1>
      {/*       <div className="healer-image">
        <img src={healer.imgUrl} alt={healer.name} />
      </div> */}
      <h2>{healer.health}</h2>
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

const Wave = (props) => {
  const { floor } = props;
  return (
    <div className="battlefield">
      {floor.map((mob) => (
        <div key={mob.name}>
          <h1>{mob.name}</h1>
          <img src={mob.imgUrl} alt={mob.name} />
          <h2>HP:{mob.health}</h2>
        </div>
      ))}
    </div>
  );
};

const PartyHeros = (props) => {
  const { party } = props;
  return (
    <div className="battlefield">
      {party.map((hero) => (
        <div key={hero.name}>
          <h1>{hero.name}</h1>
          <img src={hero.imgUrl} alt="hero.name" />
          <h2>HP: {hero.health}</h2>
        </div>
      ))}
    </div>
  );
};

const GameComponent = (props) => {
  const {
    playerController,
    boss,
    party,
    deck,
    floor,
    setFloor,
    currency,
    setCurrency,
    inventory,
    setInventory,
  } = props;
  const tank = party[0];
  const melee = party[1];
  const ranged = party[2];
  const healer = party[3];

  return (
    <>
      <div id="game-container">
        <div id="left-side-container">
          <div id="party-status-container">
            <div id="tank-status">
              <TankHero tank={tank} />
            </div>
            <div id="melee-status">
              <MeleeHero melee={melee} />
            </div>
            <div id="ranged-status">
              <RangedHero ranged={ranged} />
            </div>
            <div id="healer-status">
              <HealerHero healer={healer} />
            </div>
          </div>
        </div>

        <div id="middle-container">
          <h1>Middle container / battlefield and message box</h1>
          <div id="message-box">
            <h2>Here goes the dynamic messages, .... has died... and so on</h2>
          </div>
          <div id="enemy-battlefield">
            <Wave floor={floor} />
          </div>
          <div id="battle-animation-container">
            <h2>In here go the animations</h2>
          </div>
          <div id="party-battlefield">
            <PartyHeros party={party} />
          </div>
        </div>

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
      </div>

      <div id="controls-container"></div>
    </>
  );
};

export { GameComponent };
