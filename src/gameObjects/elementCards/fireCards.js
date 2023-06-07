import { ElementCard } from "../../gameLogic/constructor.js";
import {
  fireCardFunction,
  fireballCardFunction,
  lavaCardFunction,
  rainOfFireCardFunction,
  volcanoCardFunction,
  ashRainCardFunction,
  ignitionStrikeCardFunction,
  pyroclasmCardFunction,
  fireWhipCardFunction,
  burningMeteorCardFunction,
} from "../../gameLogic/elementalCardFunctions/fireCardFunctions.js";

const fireCard = new ElementCard(
  200,
  "Fire Card",
  "A card that can be used to summon a fire elemental.",
  "Fire",
  "Fire",
  100,
  100,
  1, //manaCost
  fireCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 1 fire

const fireballCard = new ElementCard(
  201,
  "Fireball Card",
  "A card that can be used to summon a fireball elemental.",
  "Fireball",
  "Fire",
  100,
  100,
  1,
  fireballCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 2 fire

const lavaCard = new ElementCard(
  202,
  "Lava Card",
  "A card that can be used to summon a lava elemental.",
  "Lava",
  "Fire",
  100,
  100,
  1,
  lavaCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 3 fire

const rainOfFireCard = new ElementCard(
  203,
  "Rain of Fire Card",
  "A card that can be used to summon a rain of fire elemental.",
  "Rain of Fire",
  "Fire",
  100,
  100,
  1,
  rainOfFireCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 4 fire

const volcanoCard = new ElementCard(
  204,
  "Volcano Card",
  "A card that can be used to summon a volcano elemental.",
  "Volcano",
  "Fire",
  100,
  100,
  2,
  volcanoCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 5 fire

const ashRainCard = new ElementCard(
  205,
  "Ash Rain Card",
  "A card that can be used to summon an ash rain elemental.",
  "Ash Rain",
  "Fire",
  100,
  100,
  2,
  ashRainCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 6 fire

const ignitionStrikeCard = new ElementCard(
  206,
  "Ignition Strike Card",
  "A card that can be used to summon an ignition strike elemental.",
  "Ignition Strike",
  "Fire",
  100,
  100,
  2,
  ignitionStrikeCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 7 fire

const pyroclasmCard = new ElementCard(
  207,
  "Pyroclasm Card",
  "A card that can be used to summon a pyroclasm elemental.",
  "Pyroclasm",
  "Fire",
  100,
  100,
  3,
  pyroclasmCardFunction,
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 8 fire

const fireWhipCard = new ElementCard(
  208,
  "Fire Whip Card",
  "A card that can be used to summon a fire whip elemental.",
  "Fire Whip",
  "Fire",
  100,
  100,
  3,
  fireWhipCardFunction,
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 9 fire

const burningMeteorCard = new ElementCard(
  209,
  "Burning Meteor Card",
  "A card that can be used to summon a burning meteor elemental.",
  "Burning Meteor",
  "Fire",
  100,
  100,
  5,
  burningMeteorCardFunction,
  0,
  "Legendary",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 10 fire
const allFireCards = [
  fireCard,
  fireballCard,
  lavaCard,
  rainOfFireCard,
  volcanoCard,
  ashRainCard,
  ignitionStrikeCard,
  pyroclasmCard,
  fireWhipCard,
  burningMeteorCard,
];
export {
  allFireCards,
  fireCard,
  fireballCard,
  lavaCard,
  rainOfFireCard,
  volcanoCard,
  ashRainCard,
  ignitionStrikeCard,
  pyroclasmCard,
  fireWhipCard,
  burningMeteorCard,
};
