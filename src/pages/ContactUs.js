import React from "react";
import { motion } from "framer-motion";
import { titleAnime, contactUsAnime } from "../animation";
import { ScrollTop } from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <motion.div
      variants={contactUsAnime}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#0d181c" }}
      className="contact-container"
    >
      <motion.div className="contact-title">
        <div className="hide">
          <motion.h1 variants={titleAnime}>Contact Us</motion.h1>
        </div>
      </motion.div>
      <div className="hide">
        <motion.div variants={titleAnime} className="social">
          <div className="circle"></div>
          <h2>Send Us </h2>
        </motion.div>
      </div>

      <div className="hide">
        <motion.div variants={titleAnime} className="social">
          <div className="circle"></div>
          <h2>Send Us </h2>
        </motion.div>{" "}
      </div>
      <div className="hide">
        <motion.div variants={titleAnime} className="social">
          <div className="circle"></div>
          <h2>Send Us </h2>
        </motion.div>
      </div>
      <ScrollTop />
    </motion.div>
  );
};

export default ContactUs;
