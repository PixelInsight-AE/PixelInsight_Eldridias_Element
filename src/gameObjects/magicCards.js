const shieldCard = new MagicCard(
  100,
  "Shield Bash",
  "A card that can be used to gain a shield.",
  "Shield",
  "UnCommon",
  1,
  100,
  "https://i.imgur.com/TNmls10.png",
  shieldBash,
  2,
  0,
  0,
  "Magic",
  "https://i.imgur.com/uFSzmC8.png"
);
const disarmCard = new MagicCard(
  101,
  "Disarm",
  "A card that can be used to disarm your opponent.",
  "Disarm",
  "Common",
  1,
  100,
  "https://i.imgur.com/TNmls10.png",
  disarmEnemy,
  1,
  0,
  0,
  "Magic",
  "https://i.imgur.com/uFSzmC8.png"
);
const entangleCard = new MagicCard(
  102,
  "Entangle",
  "A card that can be used to entangle your opponent.",
  "Entangle",
  "UnCommon",
  1,
  100,
  "https://i.imgur.com/TNmls10.png",
  entangleFunction,
  2,
  0,
  0,
  "Magic",
  "https://i.imgur.com/uFSzmC8.png"
);
const poisonCard = new MagicCard(
  103, //id
  "Poison", //name
  "A card that can be used to poison your opponent.", //descriptions
  "Poison", //keyWords
  "UnCommon", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.imgur.com/TNmls10.png", //imgUrl
  poisonFunction,
  2, //manaCost
  0, //duration
  0, //healing power
  "Magic", //type
  "https://i.imgur.com/uFSzmC8.png"
);
const majorHealCard = new MagicCard(
  104, //id
  "Major Heal", //name
  "A card that can be used to heal your hero.", //descriptions
  "Major Heal", //keyWords
  "Rare", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.imgur.com/TNmls10.png", //imgUrl
  majorHealFunction,
  3, //manaCost
  0, //duration
  100, //healing power
  "Magic", //type
  "https://i.imgur.com/uFSzmC8.png"
);
const attackPowerCard = new MagicCard(
  105, //id
  "Attack Power Boost", //name
  "A card that can be used to increase your attack power.", //descriptions
  "Attack Power", //keyWords
  "Common", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.imgur.com/TNmls10.png", //imgUrl
  attackPowerFunction,
  1, //manaCost
  0, //duration
  0, //healing power
  "Magic", //type
  "https://i.imgur.com/uFSzmC8.png"
);
const healthBoostCard = new MagicCard(
  106, //id
  "Health Boost", //name
  "A card that can be used to boost your health.", //descriptions
  "Health Boost", //keyWords
  "Common", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.imgur.com/TNmls10.png", //imgUrl
  healthBoostFunction, //effect
  1,
  0,
  100,
  "Magic",
  "https://i.imgur.com/uFSzmC8.png"
);
const extraManaCard = new MagicCard(
  107,
  "Extra Mana",
  "A card that can be used to gain extra mana.",
  "Extra Mana",
  "Common",
  1,
  100,
  "https://i.imgur.com/TNmls10.png",
  extraManaFunction, //effect
  1,
  0,
  0,
  "Magic",
  "https://i.imgur.com/uFSzmC8.png"
);
const reviveCard = new MagicCard(
  108,
  "Revive",
  "A card that can be used to Prevent Death Once!",
  "Revive",
  "Legendary",
  1,
  100,
  "https://i.imgur.com/TNmls10.png",
  backFromTheDead,
  5,
  0,
  0,
  "Magic",
  "https://i.imgur.com/uFSzmC8.png"
);
const extraAttackCard = new MagicCard(
  109,
  "Extra Attack",
  "A card that can be used to gain an extra attack.",
  "Extra Attack",
  "Rare",
  1,
  100,
  "https://i.imgur.com/TNmls10.png",
  extraAttackFunction,
  3,
  0,
  0,
  "Magic",
  "https://i.imgur.com/uFSzmC8.png"
);

const magicPlayingCards = [
  shieldCard,
  disarmCard,
  entangleCard,
  poisonCard,
  majorHealCard,
  attackPowerCard,
  healthBoostCard,
  extraManaCard,
  reviveCard,
  extraAttackCard,
];

export {
  shieldCard,
  disarmCard,
  entangleCard,
  poisonCard,
  majorHealCard,
  attackPowerCard,
  healthBoostCard,
  extraManaCard,
  reviveCard,
  extraAttackCard,
  magicPlayingCards,
};
