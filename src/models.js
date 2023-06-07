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
    heroManager: {
      bulwark: {
        currentLevel: 1,
        unlocked: true,
      },
      hogarth: {
        currentLevel: 1,
        unlocked: true,
      },
      beastMaster: {
        currentLevel: 1,
        unlocked: true,
      },
      sorcceress: {
        currentLevel: 1,
        unlocked: true,
      },
      druid: {
        currentLevel: 1,
        unlocked: false,
      },
      paladin: {
        currentLevel: 1,
        unlocked: false,
      },
      shadow: {
        currentLevel: 1,
        unlocked: false,
      },
      seer: {
        currentLevel: 1,
        unlocked: false,
      },
      storm: {
        currentLevel: 1,
        unlocked: false,
      },
      sentinel: {
        currentLevel: 1,
        unlocked: false,
      },
      nightshade: {
        currentLevel: 1,
        unlocked: false,
      },
      gunslinger: {
        currentLevel: 1,
        unlocked: false,
      },
    },
    inventoryManager: {
      orbs: 0,
      inventory: [],
      cardInventory: [],
    },
    storyManager: {
      currentScene: "proloug",
    },
    locationManager: {
      Aragar: true,
      Delfith: false,
      Elyssia: false,
    },

    currentParty: {
      tank: "bulwark",
      melee: "beastMaster",
      healer: "hogarth",
      ranged: "sorcceress",
    },
  },
});
