import { waterCard, fireCard, airCard, earthCard } from "./elementCards.js";
import { healthBoost, extraMana, revive, extraAttack } from "./magicCards.js";

const createDeck = () => {
  const deck = [];
  for (let i = 0; i < 40; i++) {
    deck.push(waterCard);
    deck.push(fireCard);
    deck.push(airCard);
    deck.push(earthCard);
    deck.push(healthBoost);
    deck.push(extraMana);
    deck.push(revive);
    deck.push(extraAttack);
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
