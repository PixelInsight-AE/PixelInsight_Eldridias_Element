import { monsterList } from './monsters.js';

const sceneManager = () => {
  let scene = monsterList2;
  switch (scene) {
    case state.selectedScene === 'gameStart':
      return monsterList;
      break;
    case state.selectedScene === 'level1':
      return monsterList2;
      break;
    default:
      return monsterList;
  }

  console.log('sceneManager.js is loaded');
};

export { sceneManager };
