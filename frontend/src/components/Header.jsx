import React from "react";
import { NavLink } from "react-router-dom";
import './components.css';
import logo from '../assets/logo/logo1.svg';
import crossicon from '../assets/NavIcon/crossIcon.svg'
import navicon from '../assets/NavIcon/navIcon.svg'
const Header = () => {
  return(
    <>
    <header>
    <div className="headerlogo">
      <img src={navicon} alt="" className="navicon" />
      {<img src={crossicon} alt="" className="crosicon" />}
      <div className="logo"></div>
    </div>
      <div  className="navbar">
        <div className="navlinks">
          <ul className="links">
          <NavLink to="/" className={(e)=>{return e.isActive?"red" : ""} } exact><li>Home</li></NavLink>
          <NavLink to="/About" className={(e)=>{return e.isActive?"red" : ""}} exact><li>About</li></NavLink>
          <NavLink to="/Services" className={(e)=>{return e.isActive?"red" : ""}} exact><li>Services</li></NavLink>
          <div className="logo-1">
           {/* <img src={logo} alt="logo" /> */}
          </div>
          <NavLink to="/Resume" className={(e)=>{return e.isActive?"red" : ""}} exact><li>Resume</li></NavLink>
          <NavLink to="/Projects" className={(e)=>{return e.isActive?"red" : ""}} exact><li>Projects</li></NavLink>
          <NavLink to="/Contact" className={(e)=>{return e.isActive?"red" : ""}} exact><li>Contact</li></NavLink>
          </ul>
          
        </div>
      </div>
    </header>
    
    </>
  )
  
};

export default Header;
