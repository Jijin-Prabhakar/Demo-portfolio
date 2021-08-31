import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css";

import skillImage from "../../assets/programming-is-the-skill.jpg";

const SkillContainer = () => {
  return (
    <div>
      <Element id="skills" className="skillContainer">
        <div className="skillContainer_image">
          <img src={skillImage} alt="skillContainer_image" />
        </div>
        <div className="skillContainer_text">
          <h2>SKILL SET</h2>
          <div className="skillContainer_skillSet">
            <h5>React JS</h5>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className="skillContainer_skillSet">
            <h5>Bootstrap</h5>
            <div className="skillContainer_slider skillContainer_slider2">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer_skillSet">
            <h5>JavaScript</h5>
            <div className="skillContainer_slider skillContainer_slider3">
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className="skillContainer_skillSet">
            <h5>CSS</h5>
            <div className="skillContainer_slider skillContainer_slider4">
              <LinearProgress variant="determinate" value={95} />
            </div>
          </div>
          <div className="skillContainer_skillSet">
            <h5>HTML</h5>
            <div className="skillContainer_slider skillContainer_slider5">
              <LinearProgress variant="determinate" value={95} />
            </div>
          </div>
          <div className="skillContainer_skillSet">
            <h5>Version Control - GIT HUB</h5>
            <div className="skillContainer_slider skillContainer_slider6">
              <LinearProgress variant="determinate" value={78} />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default SkillContainer;
