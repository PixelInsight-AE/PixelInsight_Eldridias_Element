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
} from "../monsters";
import { magiTheLiar } from "../bossCards";

const aragarEasy = [skeleton, goblin, spider, slime];
const aragarMedium = [orc, blackWasp, blackWasp, blackWasp];
const aragarHard = [wizard, blackKnight, dragon];
const aragarBoss = [magiTheLiar];

export { aragarEasy, aragarMedium, aragarHard, aragarBoss };
