import { motion } from 'framer-motion';
import { variants } from './variants';

const HeroTwo_left = () => {
  return (
    <div id="heroTwo-left">
      <motion.h2
        variants={variants.heroTwo.heroLeft.h2}
        initial="hidden"
        animate="visible"
        whileHover="whileHover"
        transition={variants.heroTwo.heroLeft.h2.transition}
        >
        Battle Glorious Hero's!
      </motion.h2>
      <motion.img
        variants={variants.heroTwo.heroLeft.img}
        initial="hidden"
        animate="visible"
        whileHover="whileHover"
        transition={variants.heroTwo.heroLeft.img.transition}
        src="https://i.imgur.com/v9lWrKm.png"
        alt=""
        />
    </div>
  );
};

const HeroTwo_right = () => {
  return (
    <motion.div
    variants={variants.heroTwo.heroRight}
    initial="hidden"
    animate="visible"
    whileHover="whileHover"
    transition={variants.heroTwo.heroRight.transition} // ? Why do I have to target dot notation only for transition??? Figure this out.....
    // ! This is because the transition is an object, and the other two are not.
    id="heroTwo-right"
    >
        <h1>Eldridias Element</h1>
        <p>
          Welcome to the world of Eldridia, a land of magic and mystery, where
          the elements of earth, air, water, fire, and magic reign supreme.
        </p>
        <p>
          Here, you will embark on a journey through a fantastical realm filled
          with danger and adventure.
        </p>
        <p>
          As a master of the elements, you will wield incredible power and use
          your skills to overcome challenges and defeat your foes. Will you be
          able to harness the power of Eldridia's elements and emerge
          victorious? The fate of the world is in your hands.
        </p>
      </motion.div>
  );
};


// ! This is the HeroTwo component, which is the second hero component on the home page.



const HeroTwo = () => {
  return (
    <section id="heroTwo">
      <HeroTwo_left />
      <HeroTwo_right  />
    </section>
  );
};

export { HeroTwo };

// ? abstracted all animation to the variants file, and imported it here.
// ? I also abstracted the left and right side of the heroTwo component to their own components.