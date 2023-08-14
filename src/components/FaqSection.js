import React from "react";
import Toggle from "./Toggle";
import { LayoutGroup, motion } from "framer-motion";
import { UseScroll } from "../UseScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <motion.div
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      className="faq"
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How Do I Start">
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
        </Toggle>
        <Toggle title="Differrent Payment Methods">
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
        </Toggle>
      </LayoutGroup>
    </motion.div>
  );
};

export default FaqSection;
