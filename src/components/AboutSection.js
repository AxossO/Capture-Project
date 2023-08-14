import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { titleAnime } from "../animation";
import { fade } from "../animation";
import { imgAnime } from "../animation";
import Wave from "./wave";
const AboutSection = () => {
  return (
    <div className="container">
      <div className="description">
        <div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnime}>We Work To Make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnime}>
              Your<span> Dreams</span> Come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnime}> True</motion.h2>
          </div>
        </div>
        <motion.p variants={fade} className="paragraph">
          Contact us for any photograpghy or videography ideas that you have we
          have prof with amazing skillz
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </div>
      <div className="image-container">
        <motion.img variants={imgAnime} src={home1} alt="" />
      </div>
      <Wave />
    </div>
  );
};
export default AboutSection;
