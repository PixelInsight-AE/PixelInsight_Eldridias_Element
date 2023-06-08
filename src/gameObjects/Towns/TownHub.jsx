import { Aragar, Elyssia } from "./index";

const TownHub = () => {
  const [aragarBoss, aragarEasy, aragarMedium, aragarHard] = Aragar();

  console.log(aragarBoss[0].name);

  return <div>town</div>;
};
export { TownHub };
