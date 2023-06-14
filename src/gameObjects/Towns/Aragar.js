import {
  skeleton,
  goblin,
  orc,
  wizard,
  spider,
  slime,
  blackKnight,
  blackWasp,
  dragon,
  magiTheLiar,
} from "../monsters";

//import story for aragar

const aragarEasy = [skeleton, goblin, spider, slime];
const aragarMedium = [orc, blackWasp, blackWasp, blackWasp];
const aragarHard = [wizard, blackKnight, dragon];
// have to run bosases through the monster class or create a boss class if we want to attack them, creating bosses as set objects because objects are imutable
const aragarBoss = [magiTheLiar];

export { aragarEasy, aragarMedium, aragarHard, aragarBoss };
