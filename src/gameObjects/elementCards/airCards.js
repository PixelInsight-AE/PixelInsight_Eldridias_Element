import { ElementCard } from './../constructor.js';
import {
  airCardFunction,
  cloudCardFunction,
  lightningCardFunction,
  windCardFunction,
  rainCardFunction,
  featherCardFunction,
  skyDiveCardFunction,
  gustCannonCardFunction,
  aerialAssaultCardFunction,
  hurricaneCardFunction,
} from '../cardFunctions/airCardFunctions.js';

const airCard = new ElementCard(
  500,
  'Air Card',
  'A card that can be used to summon an air elemental.',
  'Air',
  'Air',
  100,
  100,
  1,
  airCardFunction,
  0,
  'Common',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
); // 1 air

const cloudCard = new ElementCard(
  501,
  'Cloud Card',
  'A card that can be used to summon a cloud elemental.',
  'Cloud',
  'Air',
  100,
  100,
  1,
  cloudCardFunction,
  0,
  'Common',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
); // 2 air
const lightningCard = new ElementCard(
  502,
  'Lightning Card',
  'A card that can be used to summon a lightning elemental.',
  'Lightning',
  'Air',
  100,
  100,
  1,
  lightningCardFunction,
  0,
  'Common',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
); //3 air
const windCard = new ElementCard(
  503,
  'Wind Card',
  'A card that can be used to summon a wind elemental.',
  'Wind',
  'Air',
  100,
  100,
  1,
  windCardFunction,
  0,
  'Common',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
); //4 air
const rainCard = new ElementCard(
  504,
  'Rain Card',
  'A card that can be used to summon a rain elemental.',
  'Rain',
  'Air',
  100,
  100,
  2,
  rainCardFunction,
  0,
  'uncommon',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
);

const featherCard = new ElementCard(
  505,
  'Feather Card',
  'A card that can be used to summon a feather elemental.',
  'Feather',
  'Air',
  100,
  100,
  2,
  featherCardFunction,
  0,
  'uncommon',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
);

const skyDiveCard = new ElementCard(
  506,
  'Sky Dive Card',
  'A card that can be used to summon a sky dive elemental.',
  'Sky Dive',
  'Air',
  100,
  100,
  2,
  skyDiveCardFunction,
  0,
  'uncommon',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
);

const gustCannonCard = new ElementCard(
  507,
  'Gust Cannon Card',
  'A card that can be used to summon a gust cannon elemental.',
  'Gust Cannon',
  'Air',
  100,
  100,
  3,
  gustCannonCardFunction,
  0,
  'Rare',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
);

const aerialAssaultCard = new ElementCard(
  508,
  'Aerial Assault Card',
  'A card that can be used to summon an aerial assault elemental.',
  'Aerial Assault',
  'Air',
  100,
  100,
  3,
  aerialAssaultCardFunction,
  0,
  'Rare',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
);

const hurricaneCard = new ElementCard(
  509,
  'Hurricane Card',
  'A card that can be used to summon a hurricane elemental.',
  'Hurricane',
  'Air',
  100,
  100,
  5,
  hurricaneCardFunction,
  0,
  'Legendary',
  1,
  100,
  0,
  'https://i.imgur.com/VgkRpPU.png',
  'https://i.imgur.com/7GU6uHO.png'
);

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

export {
  allAirCards,
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
};
