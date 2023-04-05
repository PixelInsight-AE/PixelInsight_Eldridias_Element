import { ElementCard } from "../utils.js";

// ! FIRE CARDS
const fireCard = new ElementCard(
  200,
  "Fire Card",
  "A card that can be used to summon a fire elemental.",
  "Fire",
  "Fire",
  100,
  100,
  1, //manaCost
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
  0,
  "Uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 7 fire

const PyroclasmCard = new ElementCard(
  207,
  "Pyroclasm Card",
  "A card that can be used to summon a pyroclasm elemental.",
  "Pyroclasm",
  "Fire",
  100,
  100,
  3,
  [],
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
  [],
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
  [],
  0,
  "Legendary",
  1,
  100,
  0,
  "https://i.imgur.com/gDxoOo1.png",
  "https://i.imgur.com/2Ue37HJ.png"
); // 10 fire

// ! WATER CARDS

const waterCard = new ElementCard(
  300, //id
  "Water Card", //name
  "A card that can be used to summon a water  elemental.", //description
  "Water", //keywords
  "Water", //element type
  100, //attackPower
  100, //defense
  1, //manaCost
  [], //effect
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
  0,
  "Legendary",
  1,
  100,
  0,
  "https://i.imgur.com/KPF1V5g.png",
  "https://i.imgur.com/17dYylC.png"
); // 10 water

// ! EARTH CARDS

const earthCard = new ElementCard(
  400,
  "Earth Card",
  "A card that can be used to summon an earth elemental.",
  "Earth",
  "Earth",
  100,
  100,
  1,
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  [],
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
  5,
  [],
  0,
  "Legendary",
  1,
  100,
  0,
  "https://i.imgur.com/jBCGQPK.png",
  "https://i.imgur.com/2Iff7Gw.png"
); // 10 earth

// ! AIR CARDS

const airCard = new ElementCard(
  500,
  "Air Card",
  "A card that can be used to summon an air elemental.",
  "Air",
  "Air",
  100,
  100,
  1,
  [],
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
); // 1 air

const cloudCard = new ElementCard(
  501,
  "Cloud Card",
  "A card that can be used to summon a cloud elemental.",
  "Cloud",
  "Air",
  100,
  100,
  1,
  [],
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
); // 2 air
const lightningCard = new ElementCard(
  502,
  "Lightning Card",
  "A card that can be used to summon a lightning elemental.",
  "Lightning",
  "Air",
  100,
  100,
  1,
  [],
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
); //3 air
const windCard = new ElementCard(
  503,
  "Wind Card",
  "A card that can be used to summon a wind elemental.",
  "Wind",
  "Air",
  100,
  100,
  1,
  [],
  0,
  "Common",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
); //4 air
const rainCard = new ElementCard(
  504,
  "Rain Card",
  "A card that can be used to summon a rain elemental.",
  "Rain",
  "Air",
  100,
  100,
  2,
  [],
  0,
  "uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
);

const featherCard = new ElementCard(
  505,
  "Feather Card",
  "A card that can be used to summon a feather elemental.",
  "Feather",
  "Air",
  100,
  100,
  2,
  [],
  0,
  "uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
);

const skyDiveCard = new ElementCard(
  506,
  "Sky Dive Card",
  "A card that can be used to summon a sky dive elemental.",
  "Sky Dive",
  "Air",
  100,
  100,
  2,
  [],
  0,
  "uncommon",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
);

const gustCannonCard = new ElementCard(
  507,
  "Gust Cannon Card",
  "A card that can be used to summon a gust cannon elemental.",
  "Gust Cannon",
  "Air",
  100,
  100,
  3,
  [],
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
);

const aerialAssaultCard = new ElementCard(
  508,
  "Aerial Assault Card",
  "A card that can be used to summon an aerial assault elemental.",
  "Aerial Assault",
  "Air",
  100,
  100,
  3,
  [],
  0,
  "Rare",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
);

const hurricaneCard = new ElementCard(
  509,
  "Hurricane Card",
  "A card that can be used to summon a hurricane elemental.",
  "Hurricane",
  "Air",
  100,
  100,
  5,
  [],
  0,
  "Legendary",
  1,
  100,
  0,
  "https://i.imgur.com/VgkRpPU.png",
  "https://i.imgur.com/7GU6uHO.png"
);

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

const allFireCards = [
  fireCard,
  fireballCard,
  lavaCard,
  rainOfFireCard,
  volcanoCard,
  ashRainCard,
  ignitionStrikeCard,
  PyroclasmCard,
  fireWhipCard,
  burningMeteorCard,
];

const allAirCards = [
  airCard,
  cloudCard,
  lightningCard,
  windCard,
  rainCard,
  featherCard,
  skyDiveCard,
  gustCannonCard,
  aerialAssaultCard,
  hurricaneCard,
];

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

const allElementalCards = [
  ...allWaterCards,
  ...allFireCards,
  ...allAirCards,
  ...allEarthCards,
];
export { waterCard, fireCard, airCard, earthCard, allElementalCards };
