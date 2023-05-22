import { img } from "../assets/imgur.js";
const mainStory = {
  introduction: {
    id: 0,
    hasViewed: false,
    chapterTitle: "Eldridia's Elements",
    content: [
      "As the first sparks ignited I knew... The birth of what was to come would be the greatest of all my creations.",
      "In my infinite wisdom I created the elements, and with them I created the world.",
      "I created the world with the elements in balance, and with the elements in balance the world was at peace.",
      "I have given my creations free will, but at what cost? As now some of my own creations are seeking to disrupt the very balance i have created, and desecrate the very land on which they stand.",
      "That child of mine that seeks to destroy me must be stopped. But I'll shall not interfere directly. Let things unfold.....",
    ],
    paths: ["/dashboard/story"],
    backgrounds: ["https://i.imgur.com/CrcBLo1.jpg"],
    images: ["https://i.imgur.com/ZHLh0zg.png"],
    speakers: {
      narrator: img.mainCharacters.narrator,
      villian: img.mainCharacters.villian,
      eldrida: img.mainCharacters.eldrida,
    },
    isReward: false,
    rewards: [],
    animations: [],
    storyPath: ["Introduction"],
    music: [],
    pathIsValid: false,
  },
  prolouge: {
    id: 1,
    hasViewed: false,
    chapterTitle: "The Changing Winds",
    content:
      "Since the beginning of time the elements always have been in balance, But A great evil has fallen upon the world. Some one is trying to become Eldridias and in so doing turning the world into Chaos.",
    path: "/dashboard/story",
    background: "https://i.imgur.com/CrcBLo1.jpg",
    image: "https://i.imgur.com/ZHLh0zg.png",
    nameOfSpeaker: "Narrator",
    isReward: false,
    rewards: [],
    animations: [],
    storyPath: "Introduction",
    music: [],
    pathIsValid: false,
  },
};
export { mainStory };

//TODO: Condense this with arrays for content
