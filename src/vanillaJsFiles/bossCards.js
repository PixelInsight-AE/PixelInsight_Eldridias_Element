const magiTheLiar = {
  name: "Magi the Liar",
  attackPower: 100,
  defense: 500,
  mana: 100,
  health: 1000,
  maxHealth: 10000,
  turnCount: 0,
  effect: [],
  abilities: [
    {
      liarsLament: function () {
        let currentTarget = playerParty[playerParty.length - 1];
        console.log("Magi the Liar summons a Liar's Lament.");
        currentTarget.health -= attackPower * 2;
        currentTarget.attack -= attackPower * 2;
      },
      name: "Liar's Lament",
      description: "Magi the Liar summons a Liar's Lament.",
    },
    {
      daggersOfDeception: function () {
        let currentTarget = playerParty[playerParty.length - 1];
        console.log("Magi the Liar summons a Daggers of Deception.");
        currentTarget.health -= attackPower;
        currentTarget.attack -= attackPower;
      },
      name: "Daggers of Deception",
      description: "Magi the Liar summons a Daggers of Deception.",
    },
    {
      magicFingers: function () {
        let currentTarget = playerParty[playerParty.length - 1];
        console.log("Magi the Liar summons a Magic Fingers.");
        currentTarget.health -= attackPower;
        currentTarget.attack -= attackPower;
      },
      name: "Magic Fingers",
      description: "Magi the Liar summons a Magic Fingers.",
    },
    {
      magicForces: function () {
        let currentTarget = playerParty[playerParty.length - 1];
        console.log("Magi the Liar summons a Magic Forces.");
        currentTarget.attack -= attackPower;
        currentTarget.defense -= attackPower;
      },
      name: "Magic Forces",
      description: "Magi the Liar summons a Magic Forces.",
    },
    {
      magicShield: function () {
        let currentTarget = playerParty[playerParty.length - 1];

        console.log("Magi the Liar summons a Magic Shield.");
        if (this.health <= 300) {
          this.health += 100;
        }

        currentTarget.attack -= attackPower;
        currentTarget.defense -= attackPower;
      },
      name: "Magic Shield",
      description: "Magi the Liar summons a Magic Shield.",
    },
  ],

  attack: function (playerParty) {
    console.log(`Magi the liar has attacked!`);
    let currentTarget = playerParty[playerParty.length - 1];
    if (playerParty.length > 0) {
      console.log(`Magi the Liar attacked ${currentTarget.name}`);
      if (currentTarget.health >= 0) {
        currentTarget.health -= this.attackPower;
        console.log(
          `${currentTarget.name}: Current Health :${currentTarget.health}`
        );
        currentTarget.death();
      }
    }
  },
  death: function () {
    if (this.health <= 0) {
      console.log("Magi the Liar is Dead!");
      this.health = this.maxHealth;
      this.maxHealth = 0;
      levelOne.pop();
      console.log(levelOne);
    }
  },
};

export { magiTheLiar };
