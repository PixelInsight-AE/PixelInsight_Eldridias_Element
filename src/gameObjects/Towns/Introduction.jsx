import React, { useState } from "react";
import { motion } from "framer-motion";
import { img } from "/src/assets/imgur.js";
import "./Introduction.scss";

const Introduction = () => {
  const [slide, setSlide] = useState(0);

  // import the slides (abstract out after story is finished, include pixel_styles before anything else for scss)

  // ? cinematics will be done fully with framer motion, by utilising scale, opacity, and position to create a 3d effect
  // ? It will be mostly ken-burns and transitions between slides, with some animations for the characters
  // ? Tge visual appeal should come from the audio in tandem with the framer movement.
  const slides = {
    one: (
      <motion.div
        className="introduction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 10 }}
          className="gobble"
          src={img.enemies.gobble}
          alt="Gobblegut"
        />
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.25 }}
          transition={{ duration: 10 }}
          className="hogarth"
          src={img.heros.hogarth}
          alt="Hogarth"
        />
        <img className="gobble2" src={img.enemies.gobble} alt="Gobblegut" />
      </motion.div>
    ),
  };
  // switch case for each slide
  return (
    <div className="introduction">
      <div className="slide">{slides.one}</div>
    </div>
  );
};
export { Introduction };
