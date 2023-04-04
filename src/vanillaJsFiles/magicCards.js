import { MagicCard } from "../utils.js";

// !! Card Functions !! //

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

// !!    Cards   !! //
const shieldCard = new MagicCard(
  100,
  "Shield",
  "A card that can be used to gain a shield.",
  "Shield",
  "Un-Common",
  1,
  100,
  "https://i.pinimg.com",
  shieldBash,
  2,
  0,
  0,
  "Magic"
);
const disarmCard = new MagicCard(
  101,
  "Disarm",
  "A card that can be used to disarm your opponent.",
  "Disarm",
  "Common",
  1,
  100,
  "https://i.pinimg.com",
  disarmEnemy,
  1,
  0,
  0,
  "Magic"
);
const entangleCard = new MagicCard(
  102,
  "Entangle",
  "A card that can be used to entangle your opponent.",
  "Entangle",
  "Un-Common",
  1,
  100,
  "https://i.pinimg.com",
  entangleFunction,
  2,
  0,
  0,
  "Magic"
);
const poisonCard = new MagicCard(
  103, //id
  "Poison", //name
  "A card that can be used to poison your opponent.", //descriptions
  "Poison", //keyWords
  "Un-Common", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.pinimg.com", //imgUrl
  poisonFunction,
  2, //manaCost
  0, //duration
  0, //healing power
  "Magic" //type
);
const majorHealCard = new MagicCard(
  104, //id
  "Major Heal", //name
  "A card that can be used to heal your hero.", //descriptions
  "Major Heal", //keyWords
  "Rare", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.pinimg.com", //imgUrl
  majorHealFunction,
  3, //manaCost
  0, //duration
  100, //healing power
  "Magic" //type
);
const attackPowerCard = new MagicCard(
  105, //id
  "Attack Power", //name
  "A card that can be used to increase your attack power.", //descriptions
  "Attack Power", //keyWords
  "Common", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.pinimg.com", //imgUrl
  attackPowerFunction,
  1, //manaCost
  0, //duration
  0, //healing power
  "Magic" //type
);
const healthBoostCard = new MagicCard(
  106, //id
  "Health Boost", //name
  "A card that can be used to boost your health.", //descriptions
  "Health Boost", //keyWords
  "Common", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.pinimg.com", //imgUrl
  healthBoostFunction, //effect
  1,
  0,
  100,
  "Magic"
);
const extraManaCard = new MagicCard(
  107,
  "Extra Mana",
  "A card that can be used to gain extra mana.",
  "Extra Mana",
  "Common",
  1,
  100,
  "https://i.pinimg.com",
  extraManaFunction, //effect
  1,
  0,
  0,
  "Magic"
);
const reviveCard = new MagicCard(
  108,
  "Revive",
  "A card that can be used to Prevent Death Once!",
  "Revive",
  "Legendary",
  1,
  100,
  "https://i.pinimg.com",
  backFromTheDead,
  5,
  0,
  0,
  "Magic"
);
const extraAttackCard = new MagicCard(
  109,
  "Extra Attack",
  "A card that can be used to gain an extra attack.",
  "Extra Attack",
  "Rare",
  1,
  100,
  "https://i.pinimg.com",
  extraAttackFunction,
  3,
  0,
  0,
  "Magic"
);

const magicPlayingCards = [
  shieldCard,
  disarmCard,
  entangleCard,
  poisonCard,
  majorHealCard,
  attackPowerCard,
  healthBoostCard,
  extraManaCard,
  reviveCard,
  extraAttackCard,
];

export {
  shieldCard,
  disarmCard,
  entangleCard,
  poisonCard,
  majorHealCard,
  attackPowerCard,
  healthBoostCard,
  extraManaCard,
  reviveCard,
  extraAttackCard,
  magicPlayingCards,
};
