import React from "react";
import Experience from "../ExperienceBox/Experience";
import { Element } from "react-scroll";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <Experience number="+50" title="Websites Build"
        style={{backgroundColor:"#3399D1",color:"black"}}
         />
        <Experience
          number="+10" 
          title="Projects"
          style={{ backgroundColor: "#AAB7E1" ,color:"black"}}
          

        />
        <Experience
          number="+5"
          title="Internships"
          style={{ backgroundColor: "#DDAFDE",color:"black" }}
        />
        <Experience number="+400" title="Programs"
        style={{backgroundColor:"#F6CCE2",color:"black"}}
        
        />
      </div>
    </Element>
  );
};

export default ExperienceContainer;