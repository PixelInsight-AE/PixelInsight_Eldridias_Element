// import { allElementalCards } from './elementCards.js';
import { allEarthCards } from './elementalCards/earthCards.js';
import { allFireCards } from './elementalCards/fireCards.js';
import { allWaterCards } from './elementalCards/waterCards.js';
import { allAirCards } from './elementalCards/airCards.js';

import { magicPlayingCards } from './magicCards.js';

const createDeck = () => {
  const deck = [];
  for (let i = 0; i < 40; i++) {
    // deck here
  }
  return deck;
};

const shuffleDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
};

const deck = [...magicPlayingCards];

export { deck };
