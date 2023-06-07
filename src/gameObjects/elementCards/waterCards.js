import { ElementCard } from "../../gameLogic/constructor";
import {
  waterCardFunction,
  aquaSlashCardFunction,
  waterFallCardFunction,
  iceCardFunction,
  blizzardCardFunction,
  iceSpikeCardFunction,
  oceanCurrentCardFunction,
  highTideCardFunction,
  coralCrushCardFunction,
  tsunamiCardFunction,
} from "../../gameLogic/elementalCardFunctions/waterCardFunctions";

const waterCard = new ElementCard(
  300, //id
  "Water Card", //name
  "A card that can be used to summon a water  elemental.", //description
  "Water", //keywords
  "Water", //element type
  100, //attackPower
  100, //defense
  1, //manaCost
  waterCardFunction, //effect
  0, //healing power
  "Common", //rarity
  1, //level
  100, //max level
  0, //duration
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 1 water

const aquaSlashCard = new ElementCard(
  301,
  "Aque Slash Card",
  "A card that can be used to summon an aque slash elemental.",
  "Aque Slash",
  "Water",
  100,
  100,
  1,
  aquaSlashCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 2 water

const waterFallCard = new ElementCard(
  302,
  "Waterfall Card",
  "A card that can be used to summon a waterfall elemental.",
  "Waterfall",
  "Water",
  100,
  100,
  1,
  waterFallCardFunction,
  0,
  "Common",
  1,
  100,
  0, // duration
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); //3 water

const iceCard = new ElementCard(
  303,
  "Ice Card",
  "A card that can be used to summon an ice elemental.",
  "Ice",
  "Water",
  100,
  100,
  1,
  iceCardFunction,
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); //4 water

const blizzardCard = new ElementCard(
  304,
  "Blizzard Card",
  "A card that can be used to summon a blizzard elemental.",
  "Blizzard",
  "Water",
  100,
  100,
  2,
  blizzardCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 5 water

const iceSpikeCard = new ElementCard(
  305,
  "Ice Spike Card",
  "A card that can be used to summon an ice spike elemental.",
  "Ice Spike",
  "Water",
  100,
  100,
  2,
  iceSpikeCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 6 water

const oceanCurrentCard = new ElementCard(
  306,
  "Ocean Current Card",
  "A card that can be used to summon an ocean current elemental.",
  "Ocean Current",
  "Water",
  100,
  100,
  2,
  oceanCurrentCardFunction,
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 7 water

const highTideCard = new ElementCard(
  307,
  "High Tide Card",
  "A card that can be used to summon a high tide elemental.",
  "High Tide",
  "Water",
  100,
  100,
  3,
  highTideCardFunction,
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 8 water

const coralCrushCard = new ElementCard(
  308,
  "Coral Crush Card",
  "A card that can be used to summon a coral crush elemental.",
  "Coral Crush",
  "Water",
  100,
  100,
  3,
  coralCrushCardFunction,
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 9 water

const tsunamiCard = new ElementCard(
  309,
  "Tsunami Card",
  "A card that can be used to summon a tsunami elemental.",
  "Tsunami",
  "Water",
  100,
  100,
  5,
  tsunamiCardFunction,
  0,
  "Legendary",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 10 water

const allWaterCards = [
  waterCard,
  aquaSlashCard,
  waterFallCard,
  iceCard,
  blizzardCard,
  iceSpikeCard,
  oceanCurrentCard,
  highTideCard,
  coralCrushCard,
  tsunamiCard,
];

export {
  waterCard,
  aquaSlashCard,
  waterFallCard,
  iceCard,
  blizzardCard,
  iceSpikeCard,
  oceanCurrentCard,
  highTideCard,
  coralCrushCard,
  tsunamiCard,
  allWaterCards,
};
