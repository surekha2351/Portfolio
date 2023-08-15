import React, { useState } from "react";
import { Link } from 'react-scroll';

import "./Header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="Contact" className="nav__brand">
      <div className='header_left' d-flex flex-row >
        <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1687984967/WhatsApp_Image_2023-06-18_at_20.24.18_ttqi7q.jpg"
         className='image'
          alt = ""        
        />
        <h1>Develop<span>ER</span></h1>
      </div>

      </a>
      <ul className={active}>
        <li className="nav__item">
        <Link to ="about" smooth = {true} duration = {500}>

          <a href="TopContainer" className="nav__link">
          <i class="fa-solid fa-user"></i>
            About Me
          </a>
          </Link>
        </li>
        <li className="nav__item">
        <Link to ="skills" smooth = {true} duration = {500}>

          <a href="ProjectContainer" className="nav__link">
          <i class="fa-sharp fa-solid fa-gears"></i>
            Skills
          </a>
          </Link>
        </li>
        <li className="nav__item">
        <Link to ="projects" smooth = {true} duration = {500}>

          <a href="ExperienceContainer" className="nav__link">
          <i class="fa-solid fa-list-check"></i>
            Projects
          </a>
          </Link>
        </li>
        <li className="nav__item">
        <Link to ="exp" smooth = {true} duration = {500}>

          <a href="SkillContainer" className="nav__link">
          <i class="fa-solid fa-briefcase"></i>
            Experience
          </a>
          </Link>
        </li>
        <li className="nav__item">
        <Link to ="contact" smooth = {true} duration = {500}>  
          <a href="Contact" className="nav__link join ">
          <i class="fa-solid fa-address-book  solid"></i>
            Join With Me
          </a>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}


export default Header;