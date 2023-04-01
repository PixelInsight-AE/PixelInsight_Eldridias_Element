//import { computer } from "./computerPlayer.js";

import { deck } from "./deck.js";
import { airCard, earthCard, fireCard, waterCard } from "./elementCards.js";
import { extraMana, healthBoost, revive, extraAttack } from "./magicCards.js";
import { compareElements } from "./helpers.js";

//! PLAYER OBJECT
const controller = {
  PlayerName: "Arno",
  mana: 5,
  isTurn: true,
  canPlayCard: true,
  turnCount: 0,
  playerGraveyard: [],
  playerUsedCards: [],
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

  selectCard: function (party, level) {
    if (this.canPlayCard === true) {
      console.log(this.playingCardsInHand);
      let cardToPlay = parseInt(prompt("Select a card to play"));
      let foundCard = false;
      for (let i = 0; i < this.playingCardsInHand.length; i++) {
        if (cardToPlay === this.playingCardsInHand[i].id) {
          let playCard = this.playingCardsInHand[i];
          compareElements(party, playCard);
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
  death: function (party) {
    let currentHero = party[party.length - 1];
    if (currentHero.health <= 0) {
      console.log(`${currentHero.name} has fallen`);
      playerGraveyard.push(party.pop());
      console.log(playerGraveyard);
      this.gameOver(party);
    }
  },
  attack: function (level, party) {
    console.log(party);
    let currentTarget = level[level.length - 1];
    let currentHero = party[party.length - 1];
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
        computer.death(party, level);
        currentHero.canRegularAttack = false;
      } else {
        console.log("No enemies left, level complete");
      }
    }
    displayCurrentGame(party, level);
  },
  endTurn: function (party, level) {
    displayCurrentGame(party, level);
    console.log("End turn");
    this.isTurn = false;
    computer.isTurn = true;
    this.mana += 1;
    this.turnCount++;
    controller.resetStats(party);
    computer.computerTurn(party, level);
  },
  gameOver: function (party) {
    if (party.length <= 1) {
      console.log("PARTY HAS FALLEN Game Over.");
    }
  },
  playerTurn: function () {
    console.log("=== Player's Turn ===");
  },
  specialAttack: function (level, party) {
    let currentHero = party[party.length - 1];
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
      computer.death(party, level);
      console.log(player.mana);
    } else {
      console.log("Not enough mana");
    }
    displayCurrentGame(party, level);
  },
  drawCards: function (deck) {
    if (this.playingCardsInHand.length < 8) {
      s;
      this.playingCardsInHand.push(deck.pop());
      this.playingCardsInHand.push(deck.pop());
    } else {
      console.log("You have too many cards in hand");
    }
  },
  resetStats: function (party) {
    for (let i = 0; i < party.length; i++) {
      party[i].canRegularAttack = true;
      party[i].attackPower = party[i].maxAttackPower;
    }
  },
};

export { controller };
