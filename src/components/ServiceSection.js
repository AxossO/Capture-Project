import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { motion } from "framer-motion";
import { UseScroll } from "../UseScroll";
import { scrollAnime } from "../animation";

const ServiceSection = () => {
  const [element, controls] = UseScroll();

  return (
    <motion.div
      variants={scrollAnime}
      ref={element}
      animate={controls}
      initial="hidden"
      className="service"
    >
      <div className="description">
        <h2>
          High <span>quailty</span> service
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Effient</h3>
            </div>
            <p>lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Money</h3>
            </div>
            <p>lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </motion.div>
  );
};

export default ServiceSection;
