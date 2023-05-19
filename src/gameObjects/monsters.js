import { Monster } from "./constructor.js";
const gravestoneIMG = "https://i.imgur.com/jEiDFYT.png";
const wizard = new Monster(
  "Wizard of the North", //name
  1, //id
  "A powerful mage that can deal massive damage.", //description
  "It seems I was no match for you... AAArggggzz", //deathMessage
  "Magic", //elementType
  "Monster", //role
  100, //attackPower
  150, //defense
  100, //mana
  100, //health
  200, //maxHealth
  false, //flag
  "https://i.imgur.com/shL6XSb.png",
  "https://i.imgur.com/shL6XSb.png",
  gravestoneIMG,
  "https://i.imgur.com/uFSzmC8.png",
  [],
  []
);
const goblin = new Monster(
  "Goble",
  2,
  "gobbbbblegoooblbbleeegggoble!",
  "Gobbbbbleeee goooobbbbllle GOB....",
  "Earth",
  "Monster",
  50,
  250,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/p6y7Qsm.png",
  "https://i.imgur.com/p6y7Qsm.png",
  gravestoneIMG,
  "https://i.imgur.com/2Iff7Gw.png",
  [],
  []
);
const dragon = new Monster(
  "Dragon",
  3,
  "A powerful dragon that can deal massive damage.",
  "Raaaarrrrrrrrrrrrrrggggg",
  "Fire",
  "Monster",
  100,
  150,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/7xoGo13.png",
  "https://i.imgur.com/7xoGo13.png",
  gravestoneIMG,
  "",
  [],
  []
);
const skeleton = new Monster(
  "Skeleton",
  4,
  "A powerful skeleton that can deal massive damage.",
  "",
  "Earth",
  "Monster",
  100,
  150,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/UJ2L5j5.png",
  "https://i.imgur.com/UJ2L5j5.png",
  gravestoneIMG,
  "https://i.imgur.com/2Iff7Gw.png",
  [],
  []
);
const orc = new Monster(
  "Orc",
  5,
  "A powerful orc that can deal massive damage.",
  "",
  "Earth",
  "Monster",
  100,
  150,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/6Xp0ZCL.png",
  "https://i.imgur.com/6Xp0ZCL.png",
  gravestoneIMG,
  "https://i.imgur.com/2Iff7Gw.png",
  [],
  []
);
const spider = new Monster(
  "Spider",
  6,
  "A powerful spider that can deal massive damage.",
  "screeches as it dies",
  "Earth",
  "Monster",
  100,
  150,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/XPEgQJS.png",
  "https://i.imgur.com/XPEgQJS.png",
  gravestoneIMG,
  "https://i.imgur.com/2Iff7Gw.png",
  [],
  []
);
const slime = new Monster(
  "Slime",
  7,
  "A powerful slime that can deal massive damage.",
  "Gloooob",
  "Earth",
  "Monster",
  100,
  150,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/JfRBpmh.png",
  "https://i.imgur.com/JfRBpmh.png",
  gravestoneIMG,
  "https://i.imgur.com/2Iff7Gw.png",
  [],
  []
);
const blackWasp = new Monster(
  "Black Wasp",
  8,
  " A powerful wasp that can deal massive damage.",
  "I  am the queen of the wasps!",
  "Earth",
  "Monster",
  100,
  150,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/wBLOJNA.png",
  "https://i.imgur.com/wBLOJNA.png",

  gravestoneIMG,
  "https://i.imgur.com/2Iff7Gw.png",
  [],
  []
);
const blackKnight = new Monster(
  "Black Knight",
  9,
  "You Shall Not Pass!",
  "Tiss a flesh wound!",
  "Earth",
  "Monster",
  100,
  150,
  100,
  100,
  200,
  false,
  "https://i.imgur.com/u0f5o7s.png",
  "https://i.imgur.com/u0f5o7s.png",

  gravestoneIMG,
  "https://i.imgur.com/2Iff7Gw.png",
  [],
  []
);

const monsterList = [
  wizard,
  goblin,
  dragon,
  skeleton,
  orc,
  spider,
  slime,
  blackWasp,
  blackKnight,
];

export {
  skeleton,
  orc,
  goblin,
  wizard,
  dragon,
  spider,
  slime,
  blackWasp,
  blackKnight,
  monsterList,
};
