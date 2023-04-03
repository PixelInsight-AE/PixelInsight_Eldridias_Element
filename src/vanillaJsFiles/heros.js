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
  "Water", //elementType
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
  "Ranged", //role
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
  "Ranged", //role
  "Fire", //elementType
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

const sentinel = new Hero(
  "Sentinel", //name
  100, //attackPower
  1200, //health
  4500, //maxHealth
  false, //flag
  4500, //defense
  "A stalwart defender that can shield allies and withstand attacks.", //description
  "Tank", //role
  "Water", //elementType
  "Shield Bash", //specialAttackName
  1, //specialAttackCost
  200, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/gaNb84R.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  5 //id
);

const druidess = new Hero(
  "Druidess", //name
  100, //attackPower
  2000, //health
  3000, //maxHealth
  false, //flag
  1500, //defense
  "A mystical healer that can summon nature's power to heal allies.", //description
  "Healer", //role
  "Earth", //elementType
  "Nature's Blessing", //specialAttackName
  1, //specialAttackCost
  100, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/D4X9H4t.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  6 //id
);

const gunslinger = new Hero(
  "Gunslinger", //name
  100, //attackPower
  2500, //health
  2500, //maxHealth
  false, //flag
  1000, //defense
  "A quick and deadly marksman that can shoot down enemies from afar.", //description
  "Ranged", //role
  "Fire", //elementType
  "Trick Shot", //specialAttackName
  1, //specialAttackCost
  200, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/NkwWJLU.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  7 //id
);

const paladin = new Hero(
  "Paladin", //name
  100, //attackPower
  1500, //health
  3500, //maxHealth
  false, //flag
  3000, //defense
  "A devout warrior that can protect allies and smite enemies.", //description
  "Tank", //role
  "Water", //elementType
  "Smite", //specialAttackName
  1, //specialAttackCost
  200, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/4y4TKlR.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  8 //id
);

const shadow = new Hero(
  "Shadow", //name
  150, //attackPower
  2500, //health
  2500, //maxHealth
  false, //flag
  1500, //defense
  "A rogue that can deal high damage and evade attacks.", //description
  "Melee", //role
  "Water", //elementType
  "Shadow Strike", //specialAttackName
  2, //specialAttackCost
  300, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/n5q3fRW.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  150, //maxAttackPower
  9 //id
);

const seer = new Hero(
  "Seer", //name
  50, //attackPower
  4000, //health
  4000, //maxHealth
  false, //flag
  1200, //defense
  "A wise oracle that can see the future and predict enemy attacks.", //description
  "Healer", //role
  "Fire", //elementType
  "Precognition", //specialAttackName
  1, //specialAttackCost
  0, //specialAttackPower
  false, //canRegularAttack
  "https://i.imgur.com/mFZUrxW.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  50, //maxAttackPower
  10 //id
);

const storm = new Hero(
  "Storm", //name
  100, //attackPower
  2800, //health
  2800, //maxHealth
  false, //flag
  2000, //defense
  "A skilled fighter that can manipulate lightning.", //description
  "Melee", //role
  "Air", //elementType
  "Thunderbolt", //specialAttackName
  2, //specialAttackCost
  350, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/P5r5klM.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  100, //maxAttackPower
  11 //id
);

const nightshade = new Hero(
  "Nightshade", //name
  75, //attackPower
  3200, //health
  3200, //maxHealth
  false, //flag
  1800, //defense
  "A skilled assassin that can inflict poison damage.", //description
  "Melee", //role
  "Earth", //elementType
  "Venom Strike", //specialAttackName
  1, //specialAttackCost
  250, //specialAttackPower
  true, //canRegularAttack
  "https://i.imgur.com/GaCkNf7.png", //imgUrl
  1, //heroLevel
  100, //maxHeroLevel
  0, //heroExperience
  75, //maxAttackPower
  12 //id
);

const heroList = [
  bulwark,
  hogarth,
  beastMaster,
  sorceress,
  druidess,
  gunslinger,
  paladin,
  shadow,
  seer,
  storm,
  nightshade,
];

export {
  bulwark,
  hogarth,
  beastMaster,
  sorceress,
  druidess,
  gunslinger,
  paladin,
  shadow,
  seer,
  storm,
  nightshade,
  heroList,
};
