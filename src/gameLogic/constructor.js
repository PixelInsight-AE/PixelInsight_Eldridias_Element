class Hero {
  constructor(
    name,
    attackPower,
    health,
    maxHealth,
    flag,
    elementIcon,
    defense,
    description,
    role,
    elementType,
    specialAttackName,
    specialAttackCost,
    specialAttackPower,
    canRegularAttack,
    defaultImgUrl,
    imgUrl,
    deathImgUrl,
    heroLevel,
    maxHeroLevel,
    heroExperience,
    maxAttackPower,
    id,
    buffs,
    debuffs
  ) {
    this.name = name;
    this.attackPower = attackPower;
    this.health = health;
    this.maxHealth = maxHealth;
    this.flag = flag;
    this.elementIcon = elementIcon;
    this.defense = defense;
    this.description = description;
    this.role = role;
    this.elementType = elementType;
    this.specialAttackName = specialAttackName;
    this.specialAttackCost = specialAttackCost;
    this.specialAttackPower = specialAttackPower;
    this.canRegularAttack = canRegularAttack;
    this.defaultImgUrl = defaultImgUrl;
    this.imgUrl = imgUrl;
    this.deathImgUrl = deathImgUrl;
    this.heroLevel = heroLevel;
    this.maxHeroLevel = maxHeroLevel;
    this.heroExperience = heroExperience;
    this.maxAttackPower = maxAttackPower;
    this.id = id;
    this.buffs = buffs;
    this.debuffs = debuffs;
  }
}

class Monster {
  constructor(
    name,
    id,
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
    defaultImgUrl,
    imgUrl,
    deathImgUrl,
    elementIcon,
    buffs,
    debuffs
  ) {
    this.name = name;
    this.id = id;
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
    this.defaultImgUrl = defaultImgUrl;
    this.imgUrl = imgUrl;
    this.deathImgUrl = deathImgUrl;
    this.elementIcon = elementIcon;
    this.buffs = buffs;
    this.debuffs = debuffs;
  }
}

class ElementCard {
  constructor(
    id,
    name,
    description,
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
    imgUrl,
    elementIcon,
    cardEffect
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
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
    this.elementIcon = elementIcon;
    this.cardEffect = cardEffect;
  }
}

class MagicCard {
  constructor(
    id,
    name,
    description,
    keyWords,
    rarity,
    cardLevel,
    maxCardLevel,
    imgUrl,
    effect,
    manaCost,
    duration,
    healpower,
    elementType,
    elementIcon
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
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
    this.elementIcon = elementIcon;
  }
}

export { Hero, Monster, ElementCard, MagicCard };
