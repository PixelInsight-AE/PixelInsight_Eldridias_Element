import { MagicCard } from "../utils.js";
const extraManaCard = (playerParty) => {
  let controller = playerParty[0];
  console.log(controller.mana);
  controller.mana += 5;
  console.log(`Playing extra mana card, you now have ${controller.mana} mana`);
};

const healthBoostCard = (playerParty) => {
  let currentHero = playerParty[playerParty.length - 1];
  if (currentHero.health - 100 > currentHero.maxHealth) {
    currentHero.health += 100;
    console.log(
      `Playing health boost card, you now have ${currentHero.health} health`
    );
  } else {
    console.log("You are already at max health");
  }
};

const extraAttackCard = (playerParty) => {
  let currentHero = playerParty[playerParty.length - 1];
  currentHero.canRegularAttack = true;
  console.log("Playing extra attack card, you can now attack again");
};

//! REVIVE CARD IS BROKEN
// TODO: FIX THIS
const backFromTheDead = (playerParty) => {
  console.log("Playing revive card");
  let currentHero = playerParty[playerParty.length - 1];
  console.log(playerGraveyard);
  if (playerParty.length > 0) {
    console.log(`${currentHero.name} has been revived`);
  } else {
    console.log("You are not dead");
  }
};
const healthBoost = new MagicCard(
  1, //id
  "Health Boost", //name
  "A card that can be used to boost your health.", //descriptions
  "Health Boost", //keyWords
  "Common", //rarity
  1, //cardLevel
  100, //maxCardLevel
  "https://i.pinimg.com", //imgUrl
  healthBoostCard, //effect
  1,
  0,
  100,
  "Magic"
);
const extraMana = new MagicCard(
  2,
  "Extra Mana",
  "A card that can be used to gain extra mana.",
  "Extra Mana",
  "Common",
  1,
  100,
  "https://i.pinimg.com",
  extraManaCard, //effect
  1,
  0,
  0,
  "Magic"
);
const revive = new MagicCard(
  3,
  "Revive",
  "A card that can be used to Prevent Death Once!",
  "Revive",
  "Common",
  1,
  100,
  "https://i.pinimg.com",
  backFromTheDead,
  1,
  0,
  0,
  "Magic"
);
const extraAttack = new MagicCard(
  4,
  "Extra Attack",
  "A card that can be used to gain an extra attack.",
  "Extra Attack",
  "Common",
  1,
  100,
  "https://i.pinimg.com",
  extraAttackCard,
  1,
  0,
  0,
  "Magic"
);
export { healthBoost, extraMana, revive, extraAttack };
