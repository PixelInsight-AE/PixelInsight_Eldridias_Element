import { useState, useEffect, useRef } from "react";
import { Router } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import {
  bulwark,
  hogarth,
  sorceress,
  beastMaster,
} from "./vanillaJsFiles/heros.js";

const MainHome = () => {
  return (
    <main id="homeScreen">
      <section className="hero">
        <div id="hero-content-wrapper">
          <h2>Eldridia's Element</h2>
          <p>
            Enter a world of magic and adventure, where you can collect and
            trade powerful cards featuring epic heroes and fearsome monsters.
          </p>
          <button>Play Now!</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Cards</h3>
          <p>Discover new cards and build your ultimate deck.</p>
          <button>View Cards</button>
        </div>
        <div className="feature">
          <h3>Heroes</h3>
          <p>Lead your team to victory with legendary heroes.</p>
        </div>
      </section>
      <section className="about">
        <h2>Eldridias Element</h2>
        <p>
          Welcome to the world of Eldridia, a land of magic and mystery, where
          the elements of earth, air, water, fire, and magic reign supreme.
          Here, you will embark on a journey through a fantastical realm filled
          with danger and adventure. As a master of the elements, you will wield
          incredible power and use your skills to overcome challenges and defeat
          your foes. Will you be able to harness the power of Eldridia's
          elements and emerge victorious? The fate of the world is in your
          hands.
        </p>
      </section>
    </main>
  );
};

const HeroBattleField = (props) => {
  const bulwark = new Hero(
    "Bulwark", //name
    100, //attackPower
    1000, //health
    4500, //maxHealth
    false, //flag
    5000, //defense
    "A strong and sturdy warrior that can take a lot of damage.", //description
    "Tank", //role
    "Fire", //elementType
    "Sturdy Hammer", //specialAttackName
    1, //specialAttackCost
    200, //specialAttackPower
    true, //canRegularAttack
    "https://i.pinimg.com", //imgUrl
    1, //heroLevel
    100, //maxHeroLevel
    0, //heroExperience
    100, //maxAttackPower
    1 //modifier
  );
  const hogarth = new Hero(
    "Hogarth the Healer",
    100,
    3000,
    3000,
    false,
    1500,
    "A healer that can restore health to allies.",
    "Healer",
    "Magic",
    "Healing Touch",
    1,
    100,
    true,
    "https://i.pinimg.com",
    1,
    100,
    0,
    100,
    1
  );
  const beastMaster = new Hero(
    "Beastmaster",
    100,
    3000,
    3000,
    false,
    3400,
    "A powerful warrior that can deal massive damage.",
    "Damage",
    "Earth",
    "Call of the Wild",
    1,
    200,
    true,
    "https://i.pinimg.com",
    1,
    100,
    0,
    100,
    1
  );
  const sorceress = new Hero(
    "Sorceress",
    100,
    3000,
    3000,
    false,
    2400,
    "A powerful mage that can deal massive damage.",
    "Damage",
    "Magic",
    "Fireball",
    1,
    200,
    true,
    "https://i.pinimg.com",
    1,
    100,
    0,
    100,
    1
  );
  return (
    <div id="heroBattleField">
      <HeroCard
        imgUrl={props.imgUrl}
        health={props.health}
        name={props.name}
        elementType={props.elementType}
        attackPower={props.attackPower}
      />
    </div>
  );
};

const HeroCard = (props) => {
  return (
    <div id="heroCard">
      <span id="heroImage">${props.imgUrl}</span>
      <span id="heroHp">${props.health}</span>
      <span id="heroName">${props.name}</span>
      <span id="heroElement">${props.elementType}</span>
      <span id="heroAttackPower">${props.attackPower}</span>
    </div>
  );
};

const EnemyBattleField = () => {
  return <main id="enemyBattleField"></main>;
};

const GameBoard = () => {
  const [graveYard, setGraveYard] = useState([]);
  const [party, setParty] = useState([
    hogarth,
    beastMaster,
    sorceress,
    bulwark,
  ]);
  const [level, setLevel] = useState(1);
  const [hero, setHero] = useState(party.length - 1);

  //! This is the Controller Object for game
  const controller = {
    PlayerName: "Arno",
    mana: 5,
    isTurn: true,
    canPlayCard: true,
    turnCount: 0,
    playingCardsInHand: [],
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
      if (hero.health <= 0) {
        console.log(`${currentHero.name} has fallen`);
        setGraveYard([...graveYard, party.pop()]);
        console.log(playerGraveyard);
        this.gameOver(party);
        return playerGraveyard;
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
      computer.isTurn = true;
      this.isTurn = false;
      this.mana += 1;
      this.turnCount++;
      this.resetStats(party);
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

  return (
    <main id="gameBoard">
      <NavBar />
      <HeroBattleField />
    </main>
  );
};
function EldridiasElement() {
  return (
    <div className="App">
      {/* <MainHome /> */}
      <GameBoard />
    </div>
  );
}

export default EldridiasElement;

// party and set party hook
