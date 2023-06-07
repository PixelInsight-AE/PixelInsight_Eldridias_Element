import { ElementCard } from "../../gameLogic/constructor.js";
import {
  dustDevilCardFunction,
  avalancheCardFunction,
  earthQuakeCardFunction,
  earthCardFunction,
  rockCardFunction,
  sandCardFunction,
  treeCardFunction,
  leafCardFunction,
  tremorCardFunction,
  quakeStrikeCardFunction,
} from "../../gameLogic/elementalCardFunctions/earthCardFunctions.js";
const earthCard = new ElementCard(
  400,
  "Earth Card",
  "A card that can be used to summon an earth elemental.",
  "Earth",
  "Earth",
  100,
  100,
  1,
  earthCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 1 earth

const rockCard = new ElementCard(
  401,
  "Rock Card",
  "A card that can be used to summon a rock elemental.",
  "Rock",
  "Earth",
  100,
  100,
  1,
  rockCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 2 earth

const sandCard = new ElementCard(
  402,
  "Sand Card",
  "A card that can be used to summon a sand elemental.",
  "Sand",
  "Earth",
  100,
  100,
  1,
  sandCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 3 earth

const treeCard = new ElementCard(
  403,
  "Tree Card",
  "A card that can be used to summon a tree elemental.",
  "Tree",
  "Earth",
  100,
  100,
  1,
  treeCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 4 earth

const leafCard = new ElementCard(
  404,
  "Leaf Card",
  "A card that can be used to summon a leaf elemental.",
  "Leaf",
  "Earth",
  100,
  100,
  2,
  leafCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 5 earth

const quakeStrikeCard = new ElementCard(
  405,
  "Quake Strike Card",
  "A card that can be used to summon a quake strike elemental.",
  "Quake Strike",
  "Earth",
  100,
  100,
  2,
  quakeStrikeCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 6 earth

const tremorCard = new ElementCard(
  406,
  "Tremor Card",
  "A card that can be used to summon a tremor elemental.",
  "Tremor",
  "Earth",
  100,
  100,
  2,
  tremorCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 7 earth

const avalancheCard = new ElementCard(
  407,
  "Avalanche Card",
  "A card that can be used to summon an avalanche elemental.",
  "Avalanche",
  "Earth",
  100,
  100,
  3,
  avalancheCardFunction,
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 8 earth

const dustDevilCard = new ElementCard(
  408,
  "Dust Devil Card",
  "A card that can be used to summon a dust devil elemental.",
  "Dust Devil",
  "Earth",
  100,
  100,
  3,
  dustDevilCardFunction,
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 9 earth

const earthQuakeCard = new ElementCard(
  409,
  "Earth Quake Card",
  "A card that can be used to summon an earth quake elemental.",
  "Earth Quake",
  "Earth",
  100,
  100,
  2,
  earthQuakeCardFunction,
  0,
  "Legendary",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 10 earth

const allEarthCards = [
  earthCard,
  rockCard,
  sandCard,
  treeCard,
  leafCard,
  quakeStrikeCard,
  tremorCard,
  avalancheCard,
  dustDevilCard,
  earthQuakeCard,
];

export {
  allEarthCards,
  earthCard,
  rockCard,
  sandCard,
  treeCard,
  leafCard,
  quakeStrikeCard,
  tremorCard,
  avalancheCard,
  dustDevilCard,
  earthQuakeCard,
};
