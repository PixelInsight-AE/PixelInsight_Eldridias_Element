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
const wizard = new Monster(
  "Wizard of the North",
  "A powerful mage that can deal massive damage.",
  "It seems I was no match for you... AAArggggzz",
  "Magic",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false,
  "https://i.pinimg.com"
);
const goblin = new Monster(
  "Goble",
  "gobbbbblegoooblbbleeegggoble!",
  "Gobbbbbleeee goooobbbbllle GOB....",
  "Earth",
  "Monster",
  50,
  250,
  100,
  100,
  100,
  false,
  "https://i.pinimg.com"
);
const dragon = new Monster(
  "Dragon",
  "A powerful dragon that can deal massive damage.",
  "Raaaarrrrrrrrrrrrrrggggg",
  "Fire",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false,
  "https://i.pinimg.com"
);
const skeleton = new Monster(
  "Skeleton",
  "A powerful skeleton that can deal massive damage.",
  "",
  "Earth",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false,
  "https://i.pinimg.com"
);
const orc = new Monster(
  "Orc",
  "A powerful orc that can deal massive damage.",
  "",
  "Earth",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false,
  "https://i.pinimg.com"
);
const spider = new Monster(
  "Spider",
  "A powerful spider that can deal massive damage.",
  "screeches as it dies",
  "Earth",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false,
  "https://i.pinimg.com"
);
const slime = new Monster(
  "Slime",
  "A powerful slime that can deal massive damage.",
  "Gloooob",
  "Earth",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false
);
const zombie = new Monster(
  "Zombie",
  "A powerful zombie that can deal massive damage.",
  "I'll be baaaaacccckkkk aaarrrg!",
  "Earth",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false,
  "https://i.pinimg.com"
);
const blackKnight = new Monster(
  "Black Knight",
  "You Shall Not Pass!",
  "Tiss a flesh wound!",
  "Earth",
  "Monster",
  100,
  150,
  100,
  200,
  200,
  false,
  "https://i.pinimg.com"
);

export {
  skeleton,
  orc,
  goblin,
  wizard,
  dragon,
  spider,
  slime,
  zombie,
  blackKnight,
};
