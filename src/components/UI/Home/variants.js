const variants = {
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
};

export { variants };