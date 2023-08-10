import AboutSection from "../components/AboutSection";
import React from "react";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
