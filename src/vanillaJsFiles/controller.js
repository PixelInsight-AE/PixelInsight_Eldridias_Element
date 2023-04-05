import { deck } from "./deck.js";
import { compareElements } from "./helpers.js";

//! PLAYER OBJECT
const controller = {
  name: "Arno",
  mana: 5,
  isTurn: true,
  canPlayCard: true,
  turnCount: 0,
  playerGraveyard: [],
  playerUsedCards: [],
  playingCardsInHand: [],
  effect: [],
  imgUrl: "https://i.imgur.com/ej7j6r0.jpeg",

  selectCard: function (hero, monster) {
    if (this.canPlayCard === true) {
      console.log(this.playingCardsInHand);
      let cardToPlay = parseInt(prompt("Select a card to play"));
      let foundCard = false;
      for (let i = 0; i < this.playingCardsInHand.length; i++) {
        if (cardToPlay === this.playingCardsInHand[i].id) {
          let playCard = this.playingCardsInHand[i];
          compareElements(hero, playCard);
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
  death: function (hero) {
    console.log("death function");
    if (currentHero.health <= 0) {
      console.log(`${currentHero.name} has fallen`);
      playerGraveyard.push(hero.pop());
      console.log(playerGraveyard);
      this.gameOver(hero);
    }
  },
  attack: function (hero, monster, computer) {
    console.log("Attack Clicked");

    if (hero.canRegularAttack === false) {
      console.log("You can't attack again this turn with a basic attack");
    }
    if (hero.canRegularAttack === true) {
      if (monster.health > 0) {
        console.log(`player attacked ${monster.name} with ${hero.name}`);
        monster.health -= hero.attackPower;
        console.log(
          `Damage Done :${hero.attackPower} , ${monster.name} has ${monster.health} health left`
        );
        //computer.death(hero, monster);
        hero.canRegularAttack = false;
      } else {
        console.log("No enemies left, monster complete");
      }
    }
  },
  endTurn: function (controller, computer, hero, monster) {
    console.log("End turn");
    controller.isTurn = false;
    computer.isTurn = true;
    controller.mana += 1;
    controller.turnCount++;

    computer.computerTurn(hero, monster);
  },
  gameOver: function (hero) {
    if (hero.length <= 1) {
      console.log("PARTY HAS FALLEN Game Over.");
    }
  },
  playerTurn: function () {
    console.log("=== Player's Turn ===");
  },
  specialAttack: function (monster, hero) {
    let currentHero = hero[hero.length - 1];
    let currentTarget = monster[monster.length - 1];
    if (player.mana > currentHero.specialAttackCost && monster.length > 0) {
      console.log(
        `player attacked ${currentTarget.name} with ${currentHero.specialAttackName} for ${currentHero.specialAttackPower} damage`
      );
      currentTarget.health -= currentHero.specialAttackPower;
      player.mana -= currentHero.specialAttackCost;
      console.log(
        `${currentTarget.name} has ${currentTarget.health} health left`
      );
      computer.death(hero, monster);
      console.log(player.mana);
    } else {
      console.log("Not enough mana");
    }
    displayCurrentGame(hero, monster);
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
  resetStats: function (hero) {
    for (let i = 0; i < hero.length; i++) {
      hero[i].canRegularAttack = true;
      hero[i].attackPower = hero[i].maxAttackPower;
    }
  },
};

export { controller };
