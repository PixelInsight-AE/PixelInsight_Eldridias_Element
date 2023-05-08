const variants = {
  header: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    transition: { delay: 3 },
      h1: {
        hidden: { opacity: 0, x: -100, color: 'white' },
        visible: { opacity: 1, x: 0, color: 'lightBlue' },
        transition: { duration: 0.5, delay: 3.5 },
      },
      button: {
        hidden: { scale: 1, backgroundColor: 'white' },
        visible: { scale: 1, backgroundColor: 'white' },
        whileHover: { scale: 1.1, backgroundColor: 'pink' },
      }
  },
  heroOne: {
    heroOneWrapper: {
      hidden: { opacity: 0, scale: 0.25 },
      visible: { opacity: 1, scale: 1 },
      whileHover: { scale: 1.1 },
      transition: { duration: 2 },
    },
    h2: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
      transition: { duration: 2, delay: 0.25, ease },
    },
    p: {
      hidden: { opacity: 0},
      visible: { opacity: 1 },
      transition: { duration: 2, delay: 1.5, ease: 'easeInOut' },
    },
  },
  heroTwo: {
    heroRight: {
      hidden: { opacity: 0, y: 300 },
      visible: { opacity: 1, y: 0 },
      whileHover: { scale: 1.1 },
      transition: { duration: 2, delay: 0.5 },
    },
    heroLeft: {
      h2: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
        whileHover: { scale: 1.1 },
        transition: { duration: 2 },
      },
      img: {
        hidden: { scale: 0.75, rotate: 10 },
        visible: { scale: 1.25, rotate: 0 },
        whileTap: { scale: 0.9 },
        transition: { duration: 2 },
      }
    }

  },
};

export { variants };

// TODO: Create variants for all framer motion animations on the landing page here. 