import { computer } from "./computerPlayer.js";
import { displayCurrentGame } from "./index.js";
import { deck } from "./deck.js";
import { airCard, earthCard, fireCard, waterCard } from "./elementCards.js";
import { extraMana, healthBoost, revive, extraAttack } from "./magicCards.js";
import { compareElements } from "./helpers.js";
let playerUsedCards = [];
let playerGraveyard = [];
//! PLAYER OBJECT
const player = {
  PlayerName: "Arno",
  mana: 5,
  isTurn: true,
  canPlayCard: true,
  turnCount: 0,
  playingCardsInHand: [
    waterCard,
    fireCard,
    earthCard,
    airCard,
    healthBoost,
    extraMana,
    revive,
    extraAttack,
  ],
  effect: [],

  selectCard: function (playerParty, level) {
    if (this.canPlayCard === true) {
      console.log(this.playingCardsInHand);
      let cardToPlay = parseInt(prompt("Select a card to play"));
      let foundCard = false;
      for (let i = 0; i < this.playingCardsInHand.length; i++) {
        if (cardToPlay === this.playingCardsInHand[i].id) {
          let playCard = this.playingCardsInHand[i];
          compareElements(playerParty, playCard);
          playerUsedCards.push(this.playingCardsInHand.splice(i, 1));
          foundCard = true;
          break;
        }
        if (!foundCard) {
          console.log("Card not found");
        }
      }
    }
  },
  death: function (playerParty) {
    let currentHero = playerParty[playerParty.length - 1];
    if (currentHero.health <= 0) {
      console.log(`${currentHero.name} has fallen`);
      playerGraveyard.push(playerParty.pop());
      console.log(playerGraveyard);
      this.gameOver(playerParty);
      return playerGraveyard;
    }
  },
  attack: function (level, playerParty) {
    console.log(playerParty);
    let currentTarget = level[level.length - 1];
    let currentHero = playerParty[playerParty.length - 1];
    if (currentHero.canRegularAttack === false) {
      console.log("You can't attack again this turn with a basic attack");
    }
    if (currentHero.canRegularAttack === true) {
      if (level.length > 0 && currentTarget.health > 0) {
        console.log(
          `player attacked ${currentTarget.name} with ${currentHero.name}`
        );
        currentTarget.health -= currentHero.attackPower;
        console.log(
          `Damage Done :${currentHero.attackPower} , ${currentTarget.name} has ${currentTarget.health} health left`
        );
        computer.death(playerParty, level);
        currentHero.canRegularAttack = false;
      } else {
        console.log("No enemies left, level complete");
      }
    }
    displayCurrentGame(playerParty, level);
  },
  endTurn: function (playerParty, level) {
    displayCurrentGame(playerParty, level);
    console.log("End turn");
    this.isTurn = false;
    computer.isTurn = true;
    this.mana += 1;
    this.turnCount++;
    player.resetStats(playerParty);
    computer.computerTurn(playerParty, level);
  },
  gameOver: function (playerParty) {
    if (playerParty.length <= 1) {
      console.log("PARTY HAS FALLEN Game Over.");
    }
  },
  playerTurn: function () {
    console.log("=== Player's Turn ===");
  },
  specialAttack: function (level, playerParty) {
    let currentHero = playerParty[playerParty.length - 1];
    let currentTarget = level[level.length - 1];
    if (player.mana > currentHero.specialAttackCost && level.length > 0) {
      console.log(
        `player attacked ${currentTarget.name} with ${currentHero.specialAttackName} for ${currentHero.specialAttackPower} damage`
      );
      currentTarget.health -= currentHero.specialAttackPower;
      player.mana -= currentHero.specialAttackCost;
      console.log(
        `${currentTarget.name} has ${currentTarget.health} health left`
      );
      computer.death(playerParty, level);
      console.log(player.mana);
    } else {
      console.log("Not enough mana");
    }
    displayCurrentGame(playerParty, level);
  },
  drawCards: function (deck) {
    if (this.playingCardsInHand.length < 8) {
      this.playingCardsInHand.push(deck.pop());
      this.playingCardsInHand.push(deck.pop());
    } else {
      console.log("You have too many cards in hand");
    }
  },
  resetStats: function (playerParty) {
    for (let i = 0; i < playerParty.length; i++) {
      playerParty[i].canRegularAttack = true;
      playerParty[i].attackPower = playerParty[i].maxAttackPower;
    }
  },
};

export { player, playerGraveyard };
