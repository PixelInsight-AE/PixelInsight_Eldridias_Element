const earthQuakeCardEffect = (battle, setBattle, monster, computer, wave) => {
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

export { earthQuakeCardEffect };
