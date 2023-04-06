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
  attack: function (hero, monster, party) {
    if (monster.health > 0 && hero.health > 0) {
      console.log(
        `${monster.name} attacked ${hero.name} with ${monster.name} for ${monster.attackPower} damage`
      );
      hero.health -= monster.attackPower;
      controller.deathCheck(hero, party);
    }
  },
  deathCheck: function (monster, floor) {
    if (monster.health <= 0) {
      console.log(`${monster.name} has died, you ruinded hes family dinner!`);
      this.monsterGraveyard.push(monster);
      monster.flag = true;
      monster.imgUrl = monster.deathImgUrl;
      console.log(this.monsterGraveyard);
      this.death(floor);
    }
  },
  death: function (floor) {
    console.log("death function");
    let isWaveDefeated = false;
    // check if all party members are dead
    // if all party members are dead, end game
    for (let i = 0; i < floor.length; i++) {
      if (floor[i].health <= 0) {
        isWaveDefeated = true;
      } else {
        isWaveDefeated = false;
        break;
      }
    }
    if (isWaveDefeated) {
      console.log("WaveDefeated");
    }
  },
  computerTurn: function (hero, monster, party) {
    console.log("=== Computer's Turn ===");
    this.attack(hero, monster, party);
  },
};

export { computer };
