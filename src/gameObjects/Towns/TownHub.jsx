import { Aragar, Elyssia } from "./index";

const TownHub = () => {
  const townOfAragar = Aragar();
  const townOfElyssia = Elyssia();
  return { townOfAragar, townOfElyssia };
};
export { TownHub };
