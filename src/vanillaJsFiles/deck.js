import { waterCard, fireCard, airCard, earthCard } from "./elementCards.js";
import {
  healthBoostCard,
  extraManaCard,
  reviveCard,
  extraAttackCard,
} from "./magicCards.js";

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

const deck = createDeck();
shuffleDeck(deck);

export { deck };
