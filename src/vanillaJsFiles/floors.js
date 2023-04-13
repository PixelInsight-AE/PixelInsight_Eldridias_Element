import {
  magiTheLiar,
  yamiTheDreamer,
  sargarasTheDestroyer,
} from "./bossCards.js";
import {
  skeleton,
  orc,
  goblin,
  spider,
  wizard,
  slime,
  blackKnight,
  blackWasp,
  dragon,
} from "./monsters.js";
const lootBox = [
  {
    name: "Loot Box",
    currency: 1000,
  },
];

const waveOne = [skeleton, orc, goblin, spider, wizard];
const waveTwo = [slime, blackKnight, blackWasp, dragon];
const waveThree = [dragon, blackKnight, blackWasp, slime];
const bossOne = [magiTheLiar];

const floorOne = [waveOne, bossOne, lootBox];

export { waveOne, waveTwo, waveThree, bossOne, floorOne };
