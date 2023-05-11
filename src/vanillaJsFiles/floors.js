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
const monsterList = [skeleton, orc, goblin, spider];
const monsterList2 = [wizard, slime, blackKnight, blackWasp, dragon];
// TODO : Function to move from mob to boss
// TODO : Function to move from boss to next floor
// TODO : Function to display all revelant messages from floor
// TODO : Function to drop loot and add to inventory

const floor1 = {
  id: 1,
  name: 'Plains of Eldridia',
  monsters: [skeleton, orc, goblin, spider],
  boss: magiTheLiar,
  bossDialogue: [
    'I am Magi the Liar! Prepare to die!',
    'You will never defeat me!',
    'I will destroy you!',
  ],
  recommendedLevel: 1,
  environment: 'Plains',
  music: 'song........',
  loot: 'loot........',
  dropRates: {
    /* ! drop rates for rarity of loot */
  },
  victory: 'You have defeated Magi the Liar!',
  defeat: 'You have been defeated by Magi the Liar!',
  nextFloor: 2,
};

const floor2 = {
  id: 2,
  name: 'Forest of Eldridia',
  monsters: monsterList,
  boss: yamiTheDreamer,
  recommendedLevel: 2,
  environment: 'Forest',
  music: 'song........',
  loot: 'loot........',
  dropRates: {
    /* ! drop rates for rarity of loot */
  },
  victory: 'You have defeated Yami the Dreamer!',
  defeat: 'You have been defeated by Yami the Dreamer!',
  nextFloor: 3,
};

export { monsterList, monsterList2, floor1, floor2 };
