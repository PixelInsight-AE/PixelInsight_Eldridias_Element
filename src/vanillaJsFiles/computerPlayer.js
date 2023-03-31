import { player } from "./player.js";
import { displayCurrentGame } from "./index.js";

const computer = {
  name: "Computer",
  isTurn: false,
  gameOver: function (playerParty) {
    if (playerParty.length <= 1) {
      console.log("PARTY HAS FALLEN Game Over.");
    }
  },
  computerTurn: function (playerParty, level) {
    if (this.isTurn === true) {
      console.log("=== Computer's Turn ===");
      this.attack(playerParty, level);
    }
    this.isTurn = true;
    player.playerTurn();
  },
  attack: function (playerParty, level) {
    let currentHero = playerParty[playerParty.length - 1];
    let currentMonster = level[level.length - 1];
    if (currentHero.health >= 0) {
      console.log(`${currentMonster.name} has attacked!`);
      currentHero.health -= currentMonster.attackPower;
      console.log(
        `${currentHero.name} has taken damage! for ${currentMonster.attackPower}`
      );
      player.death(playerParty);
      console.log(`${currentHero.name} has ${currentHero.health} health left!`);
    }
    displayCurrentGame(playerParty, level);
  },
  death: function (playerParty, level) {
    let currentMonster = level[level.length - 1];
    if (currentMonster.health <= 0) {
      console.log(
        `${currentMonster.name} has died, you ruinded hes family dinner!`
      );
      currentMonster.health = currentMonster.maxHealth;
      level.pop();
      console.log(level);
    }
  },
};

export { computer };
