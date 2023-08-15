import React from "react";
import "./Contact.css";
import { IconButton } from "@mui/material";
import {
  GitHub,
  Instagram,
  LinkedIn,
  
} from "@mui/icons-material";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact ME</h1>
      <div className="contact__container ">
        <p1>
          <span>Surekha Yerrabatti</span>
        </p1>
        <div className="name">
          <span className="email">
            <p2 className="p2">Email: </p2>yarrabattisurekha3260@gmail.com
          </span>
        </div>

        <div>
          <p5>
            <span className="phone" id="phone1">
              9059XXXXXX
            </span>
          </p5>
        </div>

        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/surekhayerrabatti"
            className="icon"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>

          <a href="https://www.instagram.com/Surekha_Yerrabatti2351/">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>

          
          <a href="https://github.com/surekha2351">
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        </div>
      </div>
      <div>
      <a href="https://myquotes00.ccbp.tech/"  rel="noopener noreferrer" className="me" >
        <h1 class="lift-animation">
          <p className="para">"Self-belief and hard work will always earn you success...😎"</p>
          <cite>~Surekha🫰</cite>
        </h1>
      </a> 
      

      </div>
      
      
    </Element>
  );
};
export default Contact;