import { bulwark, hogarth, beastMaster, sorceress, player } from "./heros.js";
import { skeleton, orc, goblin, wizard } from "./monsters.js";
import { magiTheLiar } from "./bossCards.js";
import { deck } from "./deck.js";
import { playerGraveyard } from "./player.js";

let playerParty = [player, hogarth, beastMaster, sorceress, bulwark];

let levelOne = [magiTheLiar, goblin, skeleton, orc];

//! Event Listeners
const attackButton = document.getElementById("attackBtn");
attackButton.addEventListener("click", () => {
  player.attack(levelOne, playerParty);
});

const specialAttackBtn = document.getElementById("specialAttackBtn");
specialAttackBtn.addEventListener("click", () => {
  player.specialAttack(levelOne, playerParty);
});

const healBtn = document.getElementById("healBtn");
healBtn.addEventListener("click", () => {
  player.selectCard(playerParty, levelOne);
});

const endTurn = document.getElementById("endTurn");
endTurn.addEventListener("click", () => {
  player.endTurn(playerParty, levelOne);
});

const drawCards = document.getElementById("drawCards");
drawCards.addEventListener("click", () => {
  player.drawCards(deck);
});

const displayCurrentGame = (levelOne, playerParty) => {
  let currentHero = levelOne[levelOne.length - 1];
  let currentMonster = playerParty[playerParty.length - 1];
  $("#enemy-name").text(currentMonster.name);
  $("#enemy-health").text(currentMonster.health);
  $("#enemy-message").text(currentMonster.message);
  $("#hero-name").text(currentHero.name);
  $("#hero-health").text(currentHero.health);
  $("#hero-message").text(currentHero.message);
  $("#hero-mana").text(player.mana);
};

window.onload = () => {
  console.log("=== Game Started ===");
  console.log("=== Player ===");
  console.log(playerParty);
  console.log(`Player Mana:${player.mana}`);
  console.log("=== Opponents ===");
  console.log(levelOne);
  displayCurrentGame(levelOne, playerParty);

  console.log(playerGraveyard);
};
/**
 * 
 * todo: Fix naming conventions in modules
 *  

 * TODO: add basic dom for name and current health
 * TODO: add basic dom for mana
 * 
*/

export { playerParty, levelOne, displayCurrentGame };
