const earthCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('earthCardFunction');
};

const rockCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('rockCardFunction');
};
const sandCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('sandCardFunction');
};
const treeCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('treeCardFunction');
};
const leafCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('leafCardFunction');
};
const quakeStrikeCardFunction = (
  battle,
  setBattle,
  monster,
  computer,
  wave
) => {
  console.log('quackStrikeCardFunction');
};
const tremorCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('tremorCardFunction');
};
const avalancheCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('avalancheCardFunction');
};
const dustDevilCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('dustDevilCardFunction');
};
const earthQuakeCardFunction = (battle, setBattle, monster, computer, wave) => {
  console.log('earthQuakeCardEffect');
  const heroDamage = Math.floor(Math.random() * 10) + 1;
  if (monster.health >= 0) {
    monster.health -= heroDamage;
    console.log(`heroDamage: ${heroDamage}`);
    computer.deathCheck(monster, wave);
    battle.heroDamageAnimation = heroDamage;
    setBattle({
      ...battle,
      heroDamageAnimation: battle.heroDamageAnimation,
    });
  } else {
    console.log('monster is dead');
  }
};
export {
  earthQuakeCardFunction,
  rockCardFunction,
  sandCardFunction,
  treeCardFunction,
  leafCardFunction,
  quakeStrikeCardFunction,
  tremorCardFunction,
  avalancheCardFunction,
  dustDevilCardFunction,
  earthCardFunction,
};
