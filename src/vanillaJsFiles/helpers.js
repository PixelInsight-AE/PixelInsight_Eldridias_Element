import {
  skeleton,
  orc,
  goblin,
  wizard,
  dragon,
  spider,
  slime,
  blackKnight,
} from "./monsters.js";

// ! Generate random monster array
// ? This function will generate a random array of monsters for each level
const generateLevel = () => {
  const monsters = [
    skeleton,
    orc,
    goblin,
    wizard,
    dragon,
    spider,
    slime,
    zombie,
    blackKnight,
  ];
  const currentLevel = [];
  for (let i = 0; i < 12; i++) {
    currentLevel.push(monsters[Math.floor(Math.random() * monsters.length)]);
  }
  return currentLevel;
};

// ! Checks if player has enough mana to play card
const checkMana = (playerParty, card) => {
  let controller = playerParty[0];
  if (controller.mana >= card.manaCost) {
    console.log(`You have enough mana to play this card ${controller.mana}`);
    return (controller.mana -= card.manaCost);
  } else {
    console.log(
      `You don't have enough mana to play this card ${controller.mana}`
    );
  }
};

// ! Function to compare elements
const compareElements = (playerParty, card) => {
  checkMana(playerParty, card);
  let dammageModifier;
  let currentHero = playerParty[playerParty.length - 1];
  let heroElement = currentHero.elementType;
  let cardElement = card.elementType;
  console.log(
    `${currentHero.name} is a  
    ${heroElement} type hero is playing a 
    ${card.name} 
  `
  );
  switch (heroElement) {
    case "Fire":
      if (cardElement === "Air") {
        dammageModifier = 1.5;
        console.log("Fire is strong against air");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Water") {
        dammageModifier = 0.5;
        console.log("Fire is weak against water");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Magic") {
        card.effect(playerParty);
      }
      break;
    case "Air":
      if (cardElement === "Earth") {
        dammageModifier = 1.5;
        console.log("Air is strong against earth");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Fire") {
        dammageModifier = 0.5;
        console.log("Air is weak against fire");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Magic") {
        card.effect(playerParty);
      }
      break;
    case "Earth":
      if (cardElement === "Water") {
        dammageModifier = 1.5;
        console.log("Earth is strong against water");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Air") {
        dammageModifier = 0.5;
        console.log("Earth is weak against air");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Magic") {
        card.effect(playerParty);
      }
      break;
    case "Water":
      if (cardElement === "Fire") {
        dammageModifier = 1.5;
        console.log("Water is strong against fire");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Earth") {
        dammageModifier = 0.5;
        console.log("Water is weak against earth");
        currentHero.attackPower *= dammageModifier;
      }
      if (cardElement === "Magic") {
        card.effect(playerParty);
      }
      break;
    default:
      break;
  }
};

// TODO: add Critical damage modifier

export { compareElements };
