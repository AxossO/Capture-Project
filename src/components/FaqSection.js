import React from "react";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <Toggle>
        <div className="question">
          <h4>How Do I Start</h4>
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>What Products do you offer?</h4>
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>Differrent Payment Methods</h4>
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>lorem ipsum dolor sit amet </p>
            <p> lorem ipsim, dolor sit amet consefctuer ness nqye</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
    </div>
  );
};

export default FaqSection;
