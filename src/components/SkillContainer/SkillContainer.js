import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@mui/material/LinearProgress";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <div>
      <Element className="skillContainer" id="skills">
       
        <div className="skillContainer__text">
          <h2 className="skill">Skill Set</h2>
          <div className="container">
            <div className="skillContainer__skillset">
              <h5>HTML</h5>
              <h2 className="slider1">
                <LinearProgress variant="determinate" value={93} />
              </h2>
            </div>
            <div className="skillContainer__skillset">
              <h5>CSS</h5>
              <div className="skillContainer_slider skillContainer_slider2">
                <LinearProgress variant="determinate" value={93} />
              </div>
            </div>
            <div className="skillContainer__skillset">
              <h5>Javascript</h5>
              <div className="skillContainer_slider skillContainer_slider3">
                <LinearProgress variant="determinate" value={90} />
              </div>
            </div>
            <div className="skillContainer__skillset">
              <h5>React</h5>
              <div className=" skillContainer_slider4 skillContainer_slider">
                <LinearProgress variant="determinate" value={90} />
              </div>
            </div>
            <div className="skillContainer__skillset">
              <h5>SQL</h5>
              <div className="skillContainer_slider skillContainer_slider5">
                <LinearProgress variant="determinate" value={90} />
              </div>
            </div>
            <div className="skillContainer__skillset">
              <h5>Python</h5>
              <div className="skillContainer_slider skillContainer_slider6">
                <LinearProgress variant="determinate" value={85} />
              </div>
            </div>
            <div className="skillContainer__skillset">
              <h5>Redux</h5>
              <div className="skillContainer_slider skillContainer_slider6">
                <LinearProgress variant="determinate" value={80} />
              </div>
            </div>
            
          </div>
        </div>

        <h2 className=" skill2">Skill Set</h2>
        <div className="skillContainer__image">
          <img
            src="https://t4.ftcdn.net/jpg/01/31/96/99/360_F_131969925_4npM7jqii8Dlo76mRROdD0r285Oojc8d.jpg"
            alt=""
          />
        </div>
      </Element>
    </div>
  );
};

export default SkillContainer