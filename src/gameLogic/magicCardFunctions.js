const extraManaFunction = (hero) => {
  console.log("Function clicked!");
};
const healthBoostFunction = (hero) => {
  console.log("Function clicked!");
  if (hero.health - 100 > hero.maxHealth) {
    hero.health += 100;
    console.log(
      `Playing health boost card, you now have ${hero.health} health`
    );
  } else {
    console.log("You are already at max health");
  }
};
const extraAttackFunction = (hero) => {
  console.log("Function clicked!");
  hero.canRegularAttack = true;
  console.log("Playing extra attack card, you can now attack again");
};
const backFromTheDead = (hero) => {
  console.log("Playing revive card");

  console.log(playerGraveyard);
  if (hero.length > 0) {
    console.log(`${hero.name} has been revived`);
  } else {
    console.log("You are not dead");
  }
};
const shieldBash = (hero) => {
  console.log("Function clicked!");
  hero.defense += 100;
};
const disarmEnemy = (hero, monster) => {
  console.log("Function clicked!");
  monster.canAttack = false;
};
const entangleFunction = (hero, monster) => {
  //hold monster for 2 turns
  console.log("Function clicked!");
};
const attackPowerFunction = (hero) => {
  console.log("Function clicked!");
  hero.attackPower += 100;
};
const majorHealFunction = (hero) => {
  console.log("Function clicked!");
  hero.health += 1000;
};
const poisonFunction = (hero, monster) => {
  console.log("Function clicked!");
  monster.health -= 100;
};

export {
  extraManaFunction,
  healthBoostFunction,
  extraAttackFunction,
  backFromTheDead,
  shieldBash,
  disarmEnemy,
  entangleFunction,
  attackPowerFunction,
  majorHealFunction,
  poisonFunction,
};
