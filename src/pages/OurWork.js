import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import {
  fade,
  imgAnime,
  pageAnimation,
  lineAnime,
  frameAnime,
  frameContainer,
  ourWorkPageAnime,
} from "../animation";
import { motion } from "framer-motion";
import { UseScroll } from "../UseScroll";
import { ScrollTop } from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
      className="ourwork-container"
      style={{ background: "#0d181c" }}
    >
      <motion.div variants={frameContainer} className="frame">
        <motion.div variants={frameAnime} className="frame1"></motion.div>
        <motion.div variants={frameAnime} className="frame2"></motion.div>
        <motion.div variants={frameAnime} className="frame3"></motion.div>
        <motion.div variants={frameAnime} className="frame4"></motion.div>
      </motion.div>
      <div className="box">
        <motion.h1 variants={fade}>The Athlete</motion.h1>
        <motion.div variants={lineAnime} className="line"></motion.div>
        <Link to="/ourwork/the-athlete">
          <div style={{ overflow: "hidden" }}>
            <motion.img variants={imgAnime} src={athlete} alt=""></motion.img>
          </div>
        </Link>
      </div>
      <motion.div
        variants={ourWorkPageAnime}
        ref={element}
        animate={controls}
        className="box"
        style={{ overflow: "hidden" }}
      >
        <motion.h1>The Racer</motion.h1>
        <motion.div variants={lineAnime} className="line"></motion.div>
        <Link to="/ourwork/the-racer">
          <motion.img src={theracer} alt=""></motion.img>
        </Link>
      </motion.div>
      <motion.div
        variants={ourWorkPageAnime}
        ref={element2}
        animate={controls2}
        className="box"
        style={{ overflow: "hidden" }}
      >
        <motion.h1>Good Times</motion.h1>
        <motion.div variants={lineAnime} className="line"></motion.div>
        <Link to="/ourwork/good-times">
          <img src={goodtimes} alt=""></img>
        </Link>
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
};

export default OurWork;
