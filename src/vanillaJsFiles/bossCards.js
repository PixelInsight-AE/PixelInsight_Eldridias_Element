const yamiTheDreamer = {
  name: "Yami the Dreamer",
  attackPower: 350,
  defense: 770,
  mana: 250,
  health: 10000,
  maxHealth: 10000,
  turnCount: 0,
  effect: [],
  abilities: [
    {
      dreamOfDeath: function () {
        console.log(
          "Yami the Dreamer blows the dust of the dead on the party in attempt to put them into the eternal slumber."
        );
        party[Math.random() * 4] -= attackPower;
        party[Math.random() * 4] -= attackPower;
      },
      name: "Dream of Death",
      description:
        "Yami the Dreamer blows the dust of the dead on the party in attempt to put them into the eternal slumber.",
    },
    {
      shadowOfTheVoid: function () {
        console.log(
          "Yami summons a wave of darkness that strikes her enemies from the shadows, dealing massive damage."
        );
        party[Math.random() * 4] -= attackPower;
        party[Math.random() * 4] -= attackPower;
      },
      name: "Shadow of the Void",
      description:
        "Yami summons a wave of darkness that strikes her enemies from the shadows, dealing massive damage.",
    },
    {
      nightTerror: function () {
        console.log(
          "Yami unleashes a powerful scream that causes her enemies to become paralyzed with fear."
        );
        party[Math.random() * 4] -= attackPower;
        party[Math.random() * 4] -= attackPower;
      },

      name: " Night Terror",
      description:
        "Yami unleashes a powerful scream that causes her enemies to become paralyzed with fear.",
    },
    {
      dreamEater: function () {
        console.log(
          "Yami consumes the dreams of her enemies, draining their energy and restoring her own health"
        );
        party[Math.random() * 4] -= attackPower;
        party[Math.random() * 4] -= attackPower;
      },

      name: "Dream Eater",
      description:
        "Yami consumes the dreams of her enemies, draining their energy and restoring her own health",
    },
  ],
  attack: function (party) {
    console.log(`Yami the Dreamer attacks ${party[0].name}`);
    let currentTarget = party[0];
    if (party.length > 0) {
      console.log(`Yami the Dreamer ${currentTarget.name}`);
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
      console.log("Yami the Dreamer has been defeated!");
      this.health = this.maxHealth;

      levelOne.pop();
      console.log(levelOne);
    }
  },
};

const sargarasTheDestroyer = {
  name: "Sargaras the Destroyer",
  attackPower: 1000,
  defense: 1000,
  mana: 1000,
  health: 15750,
  maxHealth: 15750,
  turnCount: 0,
  effect: [],
  abilities: [
    {
      destruction: function () {
        console.log(
          "Sargaras the Destroyer summons a wave of destruction that strikes her enemies from the shadows, dealing massive damage."
        );
        party[Math.random() * 4] -= attackPower;
        party[Math.random() * 4] -= attackPower;
      },
      name: "Destruction",
      description:
        "Sargaras the Destroyer summons a wave of destruction that strikes her enemies from the shadows, dealing massive damage.",
    },
    {
      theGreatFire: function () {
        console.log("Sargaras unleashes a powerful firestorm.");
        party[Math.random() * 4] -= attackPower;
        party[Math.random() * 4] -= attackPower;
      },

      name: "The Great Fire",
      description: "Sargaras unleashes a powerful firesorm.",
    },
    {
      voidOfTheVoid: function () {
        console.log(
          "Sargaras consumes the dreams of her enemies, draining their energy and restoring her own health"
        );
        party[Math.random() * 4] -= attackPower;
        party[Math.random() * 4] -= attackPower;
      },

      name: "Void of the Void",
      description:
        "Sargaras consumes the dreams of her enemies, draining their energy and restoring her own health",
    },
  ],
  attack: function (party) {
    console.log(`Sargaras ${party[0].name}`);
    let currentTarget = party[0];
    if (party.length > 0) {
      console.log(`Sargaras ${currentTarget.name}`);
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
      console.log("Sargaras has been defeated!");
      this.health = this.maxHealth;

      levelOne.pop();
      console.log(levelOne);
    }
  },
};

// some more code here to establish function

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
        let currentTarget = party[party.length - 1];
        console.log("Magi the Liar summons a Liar's Lament.");
        currentTarget.health -= attackPower * 2;
        currentTarget.attack -= attackPower * 2;
      },
      name: "Liar's Lament",
      description: "Magi the Liar summons a Liar's Lament.",
    },
    {
      daggersOfDeception: function () {
        let currentTarget = party[party.length - 1];
        console.log("Magi the Liar summons a Daggers of Deception.");
        currentTarget.health -= attackPower;
        currentTarget.attack -= attackPower;
      },
      name: "Daggers of Deception",
      description: "Magi the Liar summons a Daggers of Deception.",
    },
    {
      magicFingers: function () {
        let currentTarget = party[party.length - 1];
        console.log("Magi the Liar summons a Magic Fingers.");
        currentTarget.health -= attackPower;
        currentTarget.attack -= attackPower;
      },
      name: "Magic Fingers",
      description: "Magi the Liar summons a Magic Fingers.",
    },
    {
      magicForces: function () {
        let currentTarget = party[party.length - 1];
        console.log("Magi the Liar summons a Magic Forces.");
        currentTarget.attack -= attackPower;
        currentTarget.defense -= attackPower;
      },
      name: "Magic Forces",
      description: "Magi the Liar summons a Magic Forces.",
    },
    {
      magicShield: function () {
        let currentTarget = party[party.length - 1];

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

  attack: function (party) {
    console.log(`Magi the liar has attacked!`);
    let currentTarget = party[party.length - 1];
    if (party.length > 0) {
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

export { magiTheLiar, yamiTheDreamer, sargarasTheDestroyer };
