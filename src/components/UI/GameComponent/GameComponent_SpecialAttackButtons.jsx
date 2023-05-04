import './GameComponent.scss';

// todo: few abstractions to far maybe?...
const TankButton = ({ state, handleHeroClick }) => {
  return (
    <div id="TankButton" className="hero-button">
      <img src={state.tank.imgUrl} alt="Tank Atk BTN" />
    </div>
  );
};
const MeleeButton = ({ state, handleHeroClick }) => {
  return (
    <div id="MeleeButton" className="hero-button">
      <img src={state.melee.imgUrl} alt="Melee Atk BTN" />
    </div>
  );
};
const RangedButton = ({ state, handleHeroClick }) => {
  return (
    <div id="RangedButton" className="hero-button">
      <img src={state.ranged.imgUrl} alt="Ranged Attack BTN" />
    </div>
  );
};
const HealerButton = ({ state, handleHeroClick }) => {
  return (
    <div id="HealerButton" className="hero-button">
      <img src={state.healer.imgUrl} alt="Healer Atk BTN" />
    </div>
  );
};

const ManaTracker = ({ state }) => {
  // todo: release h1 ervywhere habit pls XD
  return (
    <div id="ManaTracker" className="hero-button">
      <h2>{state.controller.mana}</h2>
    </div>
  );
};
const HeroSpecialAttackButtons = ({
  state,
  setState,
  battle,
  setBattle,
  handleHeroClick,
}) => {
  return (
    <div id="HeroSpecialAttackButtons">
      <TankButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <MeleeButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <RangedButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <HealerButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <ManaTracker
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
      />
      <TankButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <MeleeButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <RangedButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
      <HealerButton
        state={state}
        setState={setState}
        battle={battle}
        setBattle={setBattle}
        handleHeroClick={handleHeroClick}
      />
    </div>
  );
};

export { HeroSpecialAttackButtons };
