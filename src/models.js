const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  birthday: {
    type: Date,
    required: [true, "Birthday is required"],
  },
  first_name: {
    type: String,
    required: [false],
  },
  last_name: {
    type: String,
    required: [false],
  },
});

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  saveState: {
    heroUnlocks: {
      bulwark: true,
      hogarth: true,
      beastMaster: true,
      sorcceress: true,
      druid: false,
      paladin: false,
      shadow: false,
      seer: false,
      storm: false,
      sentinel: false,
      nightshade: false,
      gunslinger: false,
    },
    heroManager: {
      bulwark: {
        currentLevel: 1,
      },
      hogarth: {
        currentLevel: 1,
      },
      beastMaster: {
        currentLevel: 1,
      },
      sorcceress: {
        currentLevel: 1,
      },
      druid: {
        currentLevel: 1,
      },
      paladin: {
        currentLevel: 1,
      },
      shadow: {
        currentLevel: 1,
      },
      seer: {
        currentLevel: 1,
      },
      storm: {
        currentLevel: 1,
      },
      sentinel: {
        currentLevel: 1,
      },
      nightshade: {
        currentLevel: 1,
      },
      gunslinger: {
        currentLevel: 1,
      },
    },
    inventoryManager: {
      orbs: 0,
      inventory: [],
    },
    storyManager: {
      currentScene: "proloug",
    },
    ManagerManager: {
      Aragar: true,
      Delfith: false,
      Elyssia: false,
    },
    cardManager: {
      airCard: true,
      cloudCard: true,
      lightningCard: true,
      windCard: true,
      rainCard: true,
      featherCard: true,
      skyDiveCard: true,
      gustCannonCard: true,
      aerialAssaultCard: true,
      hurricaneCard: true,
      fireCard: true,
      fireballCard: true,
      lavaCard: true,
      rainOfFireCard: true,
      volcanoCard: true,
      ashRainCard: true,
      ignitionStrikeCard: true,
      pyroclasmCard: true,
      fireWhipCard: true,
      burningMeteorCard: true,
      earthCard: true,
      rockCard: true,
      sandCard: true,
      treeCard: true,
      leafCard: true,
      quakeStrikeCard: true,
      tremorCard: true,
      avalancheCard: true,
      dustDevilCard: true,
      earthQuakeCard: true,
      waterCard: true,
      aquaSlashCard: true,
      waterFallCard: true,
      iceCard: true,
      blizzardCard: true,
      iceSpikeCard: true,
      oceanCurrentCard: true,
      highTideCard: true,
      coralCrushCard: true,
      tsunamiCard: true,
      shieldCard: true,
      disarmCard: true,
      entangleCard: true,
      poisonCard: true,
      majorHealCard: true,
      attackPowerCard: true,
      healthBoostCard: true,
      extraManaCard: true,
      reviveCard: true,
      extraAttackCard: true,
    },
  },
});
