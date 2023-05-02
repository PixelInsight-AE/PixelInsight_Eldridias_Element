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
const monsterList = [
  skeleton,
  orc,
  goblin,
  spider,
];
const monsterList2 = [
  
  wizard,
  slime,
  blackKnight,
  blackWasp,
  dragon,
];

const lootBox = [
  {
    name: 'Loot Box',
    currency: 1000,
  },
];

//! COMMENT FOR Object.assign used to create shallow copys of objects
//! fixes GOBBLE ISSUE!!!!!!!
// const waveGenerator = (list, amount) => {
//   let wave = [];
//   for (let i = 0; i < amount; i++) {
//     const monster = list[Math.floor(Math.random() * monsterList.length)];
//     wave.push(Object.assign({}, monster));
//   }
//   return wave;
// };
const waveGenerator = (list, amount) => {
  let wave = [];
  for (let i = 0; i < amount; i++) {
    const monster = { ...list[Math.floor(Math.random() * list.length)], id: i };
    wave.push(monster);
  }
  return wave;
};

const waveOne = waveGenerator(monsterList, 6);
const waveTwo = [slime, blackKnight, blackWasp, dragon];
const waveThree = [dragon, blackKnight, blackWasp, slime];
const bossOne = [magiTheLiar];
const bossTwo = [yamiTheDreamer];
const floor1 = [waveOne, bossOne, [lootBox]];
const floor2 = [waveTwo, bossTwo, lootBox];
export { waveOne, waveTwo, waveThree, bossOne, bossTwo, floor1, floor2, waveGenerator, monsterList, monsterList2 };
