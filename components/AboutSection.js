import React from "react";
import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div className="container">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work To Make</h2>
          </div>
          <div className="hide">
            <h2>
              Your<span> Dreams</span> Come
            </h2>
          </div>
          <div className="hide">
            <h2> True</h2>
          </div>
        </div>
        <p className="paragraph">
          Contact us for any photograpghy or videography ideas that you have we
          have prof with amazing skillz
        </p>
        <button>Contact us</button>
      </div>
      <div className = "image-container">
        <img src={home1} alt="" />
      </div>
    </div>
  );
};
export default AboutSection;
