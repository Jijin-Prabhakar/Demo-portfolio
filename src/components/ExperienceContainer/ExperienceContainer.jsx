import React from "react";
import { Element } from "react-scroll";
import ExperienceBox from "../ExperienceBox/ExperienceBox";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="experience">
      <h1>Experience</h1>
      <div className="experienceContainer_info">
        <ExperienceBox number="+10" title="Clients" />
        <ExperienceBox
          number="30+"
          title="Projects"
          style={{ backgroundColor: "#f64c08" }}
        />
        <ExperienceBox number="6+" title="Years Teaching" />
        <ExperienceBox number="6000+" title="Students" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
