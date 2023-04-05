import { controller } from "./controller.js";

const computer = {
  name: "Computer",
  isTurn: false,
  gameOver: function (hero) {
    if (hero.length <= 1) {
      console.log("PARTY HAS FALLEN Game Over.");
    }
  },
  attack: function (hero, monster) {
    console.log("Attack Clicked");
    hero.health -= monster.attackPower;
  },
  death: function (monster) {
    console.log("death function clicked in monster.death");
    if (monster.health <= 0) {
      console.log(`${monster.name} has died, you ruinded hes family dinner!`);
      monster.health = monster.maxHealth;
    }
  },
  computerTurn: function (hero, monster) {
    console.log("=== Computer's Turn ===");
    this.attack(hero, monster, controller);
  },
};

export { computer };
