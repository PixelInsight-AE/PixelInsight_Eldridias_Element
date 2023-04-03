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
  "https://i.imgur.com/OEIQ1ee.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  1 //id
);

const hogarth = new Hero(
  "Hogarth the Healer",
  100, //attackPower
  3000, //health
  3000, //maxHealth
  false, //flag
  1500, //defense
  "A healer that can restore health to allies.", //description
  "Healer", //role
  "Magic", //elementType
  "Healing Touch", //specialAttackName
  1, //specialAttackCost
  100, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/N4X30zf.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  2 //id
);

const beastMaster = new Hero(
  "Beastmaster", //name
  100, //attackPower
  3000, //health
  3000, //maxHealth
  false, //flag
  3400, //defense
  "A powerful warrior that can deal massive damage.", //description
  "Damage", //role
  "Earth", //elementType
  "Call of the Wild", //specialAttackName
  1, //specialAttackCost
  200, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/IMAhrX8.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  3 //id
);

const sorceress = new Hero(
  "Sorceress", //name
  100, //attackPower
  3000, //health
  3000, //maxHealth
  false, //flag
  2400, //defense
  "A powerful mage that can deal massive damage.", //description
  "Damage", //role
  "Magic", //elementType
  "Fireball", //specialAttackName
  1, //specialAttackCost
  200, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/cLQfh6c.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  4 //id
);

const heroList = [bulwark, hogarth, beastMaster, sorceress];

export { bulwark, hogarth, beastMaster, sorceress, heroList };
