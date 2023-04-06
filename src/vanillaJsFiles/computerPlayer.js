import { controller } from "./controller.js";

const computer = {
  name: "Computer",
  isTurn: false,
  monsterGraveyard: [],
  gameOver: function (hero) {
    if (hero.length <= 1) {
      console.log("PARTY HAS FALLEN Game Over.");
    }
  },
  attack: function (hero, monster) {
    if (monster.health > 0 && hero.health > 0) {
      console.log(
        `${monster.name} attacked ${hero.name} with ${monster.name} for ${monster.attackPower} damage`
      );
      hero.health -= monster.attackPower;
      controller.death(hero);
    }
  },
  death: function (monster) {
    if (monster.health <= 0) {
      console.log(`${monster.name} has died, you ruinded hes family dinner!`);
      this.monsterGraveyard.push(monster);
      monster.flag = true;
      monster.imgUrl = monster.deathImgUrl;
      console.log(this.monsterGraveyard);
    }
  },
  computerTurn: function (hero, monster, controller) {
    console.log("=== Computer's Turn ===");
    this.attack(hero, monster);
  },
};

export { computer };
