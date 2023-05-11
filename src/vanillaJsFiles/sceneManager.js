import { monsterList, monsterList2, floor1, floor2 } from './floors.js';

const sceneManager = (scene) => {
  console.log('sceneManager.js is loaded');

  switch (scene) {
    case 'gameStart':
      return floor1.monsters;
      break;
    case 'level1':
      return floor2.monsters;
      break;
    default:
      return monsterList;
  }
};

export { sceneManager };
