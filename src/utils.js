class Hero {
  constructor(
    name,
    attackPower,
    health,
    maxHealth,
    flag,
    defense,
    description,
    role,
    elementType,
    specialAttackName,
    specialAttackCost,
    specialAttackPower,
    canRegularAttack,
    imgUrl,
    heroLevel,
    maxHeroLevel,
    heroExperience,
    maxAttackPower,
    id,
    effects
  ) {
    this.name = name;
    this.attackPower = attackPower;
    this.health = health;
    this.maxHealth = maxHealth;
    this.flag = flag;
    this.defense = defense;
    this.description = description;
    this.role = role;
    this.elementType = elementType;
    this.specialAttackName = specialAttackName;
    this.specialAttackCost = specialAttackCost;
    this.specialAttackPower = specialAttackPower;
    this.canRegularAttack = canRegularAttack;
    this.imgUrl = imgUrl;
    this.heroLevel = heroLevel;
    this.maxHeroLevel = maxHeroLevel;
    this.heroExperience = heroExperience;
    this.maxAttackPower = maxAttackPower;
    this.id = id;
    this.effects = [];
  }
}

class Monster {
  constructor(
    name,
    description,
    message,
    elementType,
    role,
    attackPower,
    defense,
    mana,
    health,
    maxHealth,
    flag,
    imgUrl
  ) {
    this.name = name;
    this.description = description;
    this.message = message;
    this.elementType = elementType;
    this.role = role;
    this.attackPower = attackPower;
    this.defense = defense;
    this.mana = mana;
    this.health = health;
    this.maxHealth = maxHealth;
    this.flag = flag;
    this.imgUrl = imgUrl;
  }
}

class ElementCard {
  constructor(
    id,
    name,
    descriptions,
    keyWords,
    elementType,
    attackPower,
    defense,
    manaCost,
    effect,
    healpower,
    rarity,
    cardLevel,
    maxCardLevel,
    duration,
    imgUrl
  ) {
    this.id = id;
    this.name = name;
    this.descriptions = descriptions;
    this.elementType = elementType;
    this.attackPower = attackPower;
    this.defense = defense;
    this.manaCost = manaCost;
    this.effect = effect;
    this.healpower = healpower;
    this.rarity = rarity;
    this.cardLevel = cardLevel;
    this.maxCardLevel = maxCardLevel;
    this.duration = duration;
    this.imgUrl = imgUrl;
  }
}

class MagicCard {
  constructor(
    id,
    name,
    descriptions,
    keyWords,
    rarity,
    cardLevel,
    maxCardLevel,
    imgUrl,
    effect,
    manaCost,
    duration,
    healpower,
    elementType
  ) {
    this.id = id;
    this.name = name;
    this.descriptions = descriptions;
    this.keyWords = keyWords;
    this.rarity = rarity;
    this.cardLevel = cardLevel;
    this.maxCardLevel = maxCardLevel;
    this.imgUrl = imgUrl;
    this.effect = effect;
    this.manaCost = manaCost;
    this.duration = duration;
    this.healpower = healpower;
    this.elementType = elementType;
  }
}

export { Hero, Monster, ElementCard, MagicCard };
