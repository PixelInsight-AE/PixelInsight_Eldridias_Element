import { Hero } from "../utils.js";

const bulwark = new Hero(
  "Bulwark", //name
  100, //attackPower
  1000, //health
  4500, //maxHealth
  false, //flag
  5000, //defense
  "A strong and sturdy warrior that can take a lot of damage.", //description
  "Tank", //role
  "Fire", //elementType
  "Sturdy Hammer", //specialAttackName
  1, //specialAttackCost
  200, //specialAttackPower
  true, //canRegularAttack
  "https://i.pinimg.com", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  1 //modifier
);

const hogarth = new Hero(
  "Hogarth the Healer",
  100,
  3000,
  3000,
  false,
  1500,
  "A healer that can restore health to allies.",
  "Healer",
  "Magic",
  "Healing Touch",
  1,
  100,
  true,
  "https://i.pinimg.com",
  1,
  100,
  0,
  100,
  1
);

const beastMaster = new Hero(
  "Beastmaster",
  100,
  3000,
  3000,
  false,
  3400,
  "A powerful warrior that can deal massive damage.",
  "Damage",
  "Earth",
  "Call of the Wild",
  1,
  200,
  true,
  "https://i.pinimg.com",
  1,
  100,
  0,
  100,
  1
);

const sorceress = new Hero(
  "Sorceress",
  100,
  3000,
  3000,
  false,
  2400,
  "A powerful mage that can deal massive damage.",
  "Damage",
  "Magic",
  "Fireball",
  1,
  200,
  true,
  "https://i.pinimg.com",
  1,
  100,
  0,
  100,
  1
);

export { bulwark, hogarth, beastMaster, sorceress };
