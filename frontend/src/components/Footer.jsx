import React from "react";
import "./components.css";

import { Link } from "react-router-dom";

import logo1 from "../assets/logo/logo1.svg";
import facebookicon from "../assets/social-icon/facebook.svg";
import instagram from "../assets/social-icon/instagram.svg";
import github from "../assets/social-icon/github.svg";
import twitter from "../assets/social-icon/twitter.svg";
import linkedin from "../assets/social-icon/linkedin.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer md:rounded-t-3xl">
        <div className="footerpart1 justify-between ">
          <span className="footertitle text-3xl md:text-5xl md:font-bold left-3 md:left-14">Lets Connect There</span>
          <button className="hireme right-4 md:right-24"> Hire me</button>
          {/* <span className="arrow"></span> */}
        </div>
        <div className="flex justify-center">
        <div className=" w-5/6 h-[2px] bg-slate-500"></div>
        </div>

        <div className="footerpart2 h-80 flex items-center md:gap-32">
          <div className="logo-social-icon">
            <span className="logo-footer">{<img src={logo1} alt="logo" />}</span>
            <span className="footertext md:left-14">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              laborum laboriosam, facilis repellat voluptas reprehenderit
              debitis magnam odio saepe laudantium.
            </span>
            <span className="social-icons">
              <a
                href="https://www.facebook.com/amarkumar.jha.142/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookicon} alt="facebook" />
              </a>
             <a href="https://www.instagram.com/amarjha01/"
             target="_blank"
              rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
             </a>
              <a href="https://github.com/Amarjha01"
              target="_blank"
              rel="noopener noreferrer">
              <img src={github} alt="github" />
              </a>
              <a href="https://x.com/Amarjha01"
              target="_blank"
              rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
              </a>
             <a href="https://www.linkedin.com/in/amarjha01/"
             target="_blank"
              rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" />
             </a>
            </span>
          </div>
          <div className="footerlinks">
            <span className="footernavigation"><span className="quicknav">Quick-Navigation</span></span>
            <Link to='/'><span className="footerlink">Home</span></Link>
            <Link to='/About'><span className="footerlink">About</span></Link>
            <Link to='/Services'><span className="footerlink">Services</span></Link>
            <Link to='/Resume'><span className="footerlink">Resume</span></Link>
            <Link to='/Projects'><span className="footerlink">Projects</span></Link>
            <Link to='/Contact'><span className="footerlink">Contact</span></Link>
            </div>
            <div className="footercontact right-2 md:items-center ">
              <p className="footercontactinfo"><span className="footercontact-title" >Contact</span></p>
              <p className="footercontactinfo">+91 9199569397</p>
              <p className="footercontactinfo">amarjha.tech</p>
              <span className="footercontactinfo">Email</span>
            </div>
        </div>
        <div className="flex justify-center">
        <div className=" w-5/6 h-[2px] bg-slate-500"></div>
        </div>
        <div className=" h-28 w-full flex flex-col  items-center">
          <span className="footerpart3text top-14 ">Made with 🖤 by Amar</span>
          <span className="footerpart3text top-14">Coppyright ©️ 2024 Amar. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
