import {
  skeleton,
  orc,
  goblin,
  wizard,
  dragon,
  spider,
  slime,
  blackKnight,
} from './monsters.js';

// ! Function to compare elements
const compareElements = (hero, monster, card) => {
  let dammageModifier;

  switch (hero.elementType) {
    case 'Fire':
      if (card.elementType === 'Air') {
        dammageModifier = 1.5;
        console.log('Fire is strong against air');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Water') {
        dammageModifier = 0.5;
        console.log('Fire is weak against water');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Magic') {
        console.log('magic card');
      }
      break;
    case 'Air':
      if (card.elementType === 'Earth') {
        dammageModifier = 1.5;
        console.log('Air is strong against earth');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Fire') {
        dammageModifier = 0.5;
        console.log('Air is weak against fire');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Magic') {
        card.effect(playerParty);
      }
      break;
    case 'Earth':
      if (card.elementType === 'Water') {
        dammageModifier = 1.5;
        console.log('Earth is strong against water');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Air') {
        dammageModifier = 0.5;
        console.log('Earth is weak against air');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Magic') {
        card.effect(playerParty);
      }
      break;
    case 'Water':
      if (card.elementType === 'Fire') {
        dammageModifier = 1.5;
        console.log('Water is strong against fire');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Earth') {
        dammageModifier = 0.5;
        console.log('Water is weak against earth');
        hero.attackPower *= dammageModifier;
      }
      if (card.elementType === 'Magic') {
        card.effect(playerParty);
      }
      break;
    default:
      break;
  }
};

// TODO: add Critical damage modifier

export { compareElements };
