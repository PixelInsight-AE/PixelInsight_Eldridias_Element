import { deck } from './deck.js';
import { compareElements } from './helpers.js';
import { computer } from './computer.js';

//! PLAYER OBJECT
const controller = {
  name: 'Arno',
  mana: 15,
  isTurn: true,
  canPlayCard: true,
  turnCount: 0,
  playerGraveyard: [],
  effect: [],
  imgUrl: 'https://i.imgur.com/ej7j6r0.jpeg',
  deathCheck: function (hero, party) {
    if (hero.health <= 0) {
      console.log(`${hero.name} has fallen`);
      this.playerGraveyard.push(hero);
      hero.imgUrl = hero.deathImgUrl;
      console.log(this.playerGraveyard);
      hero.flag = true;
      this.death(party);
    }
  },
  death: function (party) {
    console.log('death function');
    let isPartyDead = false;
    // check if all party members are dead
    // if all party members are dead, end game
    for (let i = 0; i < party.length; i++) {
      if (party[i].health <= 0) {
        isPartyDead = true;
      } else {
        isPartyDead = false;
        break;
      }
    }
    if (isPartyDead) {
      console.log('Game Over');
      this.resetImgUrl(party);
    }
  },
  attack: function (hero, monster, floor) {
    if (hero.health > 100 && hero.canRegularAttack === false) {
      console.log("You can't attack again this turn with a basic attack");
    }
    if (hero.health > 0 && hero.canRegularAttack === true) {
      if (monster.health > 0) {
        console.log(`player attacked ${monster.name} with ${hero.name}`);
        monster.health -= hero.attackPower;
        console.log(
          `Damage Done :${hero.attackPower} , ${monster.name} has ${monster.health} health left`
        );
        computer.deathCheck(monster, floor);
        //hero.canRegularAttack = false;
      } else {
        console.log(`${monster.name} is already dead`);
      }
    } else {
      console.log('You cant use this action!');
    }
  },
  endTurn: function (controller, computer, hero, monster, party) {
    console.log('End turn');
    controller.isTurn = false;
    computer.isTurn = true;
    controller.mana += 1;
    controller.turnCount++;
    //this.resetStats(party);
    computer.computerTurn(hero, monster, party);
  },
  gameOver: function (hero) {
    // TODO: add a game over function
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
      computer.deathCheck(hero, monster);
      console.log(player.mana);
    } else {
      console.log('Not enough mana');
    }
    displayCurrentGame(hero, monster);
  },
  drawCards: function (playerHand, deck) {
    console.log('draw cards');
    if (playerHand.length < 10) {
      for (let i = 0; i < 2; i++) {
        let card = deck.pop();
        playerHand.push(card);
      }
    } else {
      console.log('You have too many cards in hand');
    }
  },
  // resetStats: function (party) {
  //   for (let i = 0; i < party.length; i++) {
  //     party[i].canRegularAttack = true;
  //   }
  // },
  resetImgUrl: function (party) {
    for (let i = 0; i < party.length; i++) {
      party[i].imgUrl = party[i].defaultImgUrl;
      party[i].health = party[i].maxHealth;
      party[i].flag = false;
    }
  },
};

export { controller };
