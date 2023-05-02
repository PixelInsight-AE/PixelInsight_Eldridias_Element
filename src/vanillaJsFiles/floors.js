import {
  magiTheLiar,
  yamiTheDreamer,
  sargarasTheDestroyer,
} from './bossCards.js';
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
} from './monsters.js';
const lootBox = [
  {
    name: 'Loot Box',
    currency: 1000,
  },
];

const waveOne = [skeleton, orc];
const waveTwo = [slime, blackKnight, blackWasp, dragon];
const waveThree = [dragon, blackKnight, blackWasp, slime];
const bossOne = [magiTheLiar];
const bossTwo = [yamiTheDreamer];
const floor1 = [waveOne, bossOne, [lootBox]];
const floor2 = [waveTwo, bossTwo, lootBox];
export { waveOne, waveTwo, waveThree, bossOne, bossTwo, floor1, floor2 };
