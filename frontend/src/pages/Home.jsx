import React from "react";
import "./page.css";


import { NavLink } from "react-router-dom";
import card1 from "../assets/card1.svg";
import cardArrow from "../assets/arrow.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import heroimg from '../assets/heroimg.svg'

const Home = () => {
  return (
    <>
    <div className="hello">
          <span className="p0p0">
            <p className="p0">Hello!</p>
            </span>
        </div>
      <div className="herosection">   
        <div className="introo">
          <p className="p1">
            I'm <span className="name">Amar</span>,
          </p>
          <p className="p1 p2">Web Developer</p>
        </div>

        <div className="p3">
          <p className="p3p">
            Amar's Exceptional product design ensure our website's
            success.Highly Recommended
          </p>
        </div>

        <div className="circle">
        <div className="heroimg"> 
        {<img src={heroimg} alt="" className="hero-img"/>}
        <div className="box">
          <div className="calltoaction">
            <span className="l1">
              <li className="txt">Portfolio</li>
            </span>
            <span className="l2">
              <li className="txt">Hire me</li>
            </span>
          </div>
        </div>
        </div>
        </div>
      
        
      </div>
      <div className="frame">
        <div className="frametext">
          <p className="p4">
            My <span className="p4p2">Services</span>
          </p>
          <p className="p5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. rehenderit
            repudiandae animi minus officiis cumque?
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <NavLink to="/services">
              {<img src={card1} alt="Tool" className="card01" />}
              <span className="arrow">
                <div className="arrowcircle">
                  <span>
                    {<img src={cardArrow} alt="Tool" className="arrowicon" />}
                  </span>
                </div>
              </span>
            </NavLink>
          </div>
          <div className="card">
            <NavLink to="/services">
              {<img src={card2} alt="Tool" className="card02" />}
              <span className="arrow">
                <div className="arrowcircle">
                  <span>
                    {<img src={cardArrow} alt="Tool" className="arrowicon" />}
                  </span>
                </div>
              </span>
            </NavLink>
          </div>
          <div className="card">
            <NavLink to="/services">
              {<img src={card3} alt="Tool" className="card03" />}
              <span className="arrow">
                <div className="arrowcircle">
                  <span>
                    {<img src={cardArrow} alt="Tool" className="arrowicon" />}
                  </span>
                </div>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="experiences">
        <div className="p6">
          <p>
            My <span className="p4p2">Work Experience</span>
          </p>
        </div>
        <div className="experience">
          <div className="companiesName">
            <div className="company">
              <p>Company Name</p>
            </div>
            <div className="company">
              <p>Company Name</p>
            </div>
            <div className="company">
              <p>Company Name</p>
            </div>
          </div>
          <div className="devider">
            <div className="circle2">
              <div className="circle2-1"></div>
            </div>
            <div class="dashed-line"></div>
            <div className="circle2">
              <div className="circle2-1"></div>
            </div>
            <div class="dashed-line"></div>
            <div className="circle2">
              <div className="circle2-1"></div>
            </div>
          </div>
          <div className="fieldsName">
            <div className="field">
              <p>UI/US Design</p>
            </div>
            <div className="field">
              <p>Web Development</p>
            </div>
            <div className="field">
              <p>Landing Page</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hire-me">
        <div className="hire-me-content">
          <div className="hire-me-img"></div>
          <div className="hire-me-texts">
            <div className="hire-me-heading">
              <p className="p7">
                Why <span className="p4p2">Hire Me</span>?
              </p>
            </div>
            <div className="hire-me-text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="hire-me-btn">Hire Me</div>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="portfolioHeading">
          <p className="p8">
            Lets have a look at <br /> my{" "}
          </p>
          <span className="p4p2 p8p2">portfolio</span>
          <div className="see-all">See All</div>
        </div>
        <div className="portfoliocards">
          <div className="portfoliococard">
            <div className="portfolionavIcon">
              {<img src={cardArrow} alt="Tool" className="arrowicon" />}
            </div>
            <div className="portfoliotext1">E-cat</div>
            <div className="portfoliotext2">
              <span className="portfoliotext2p1">E-cart</span>
              <p className="portfoliotext2p2">
                Fully functional e-commerce platform using MERN stack and
                DevOps. Features include user and admin accounts, product
                listings, and a secure payment gateway.
              </p>
            </div>
          </div>
          <div className="portfoliococard">
            <div className="portfolionavIcon">
              {<img src={cardArrow} alt="Tool" className="arrowicon" />}
            </div>
            <div className="portfoliotext1">College portal</div>
            <div className="portfoliotext2">
              <span className="portfoliotext2p1">College portal</span>
              <p className="portfoliotext2p2">
                Fully functional e-commerce platform using MERN stack and
                DevOps. Features include user and admin accounts, product
                listings, and a secure payment gateway.
              </p>
            </div>
          </div>
        </div>
        </div>


        <div className="testimonials">
          <div className="testimonialheading">
            <p className="testimonialp1">Testimonials That Speak To  <span className="testimonialp1p2" >My Result</span> <br /> <p className="testimonialp1p3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, sequi? adipisicing elit. Nesciunt, sequi</p></p>
          </div>
          <div className="testimonialcard">
            <div className="clintprofilng">
              <div className="clintprofileimage"></div>
              <div className="clintname">
                <p className="clintnamep1">John Doe</p>
                <p className="clintnamep2">UI/UX Designer</p>
              </div>
            </div>
         <div className="stars">
         <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
         </div>
            <div className="quotation-mark"></div>
            <div className="testimonial-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ea doloribus earum nihil enim? Cum reprehenderit quibusdam dolore inventore eos?</p></div>
          </div>
        </div>
     <div className="mail">
      {/* will continue soon */}
     </div>

     <div className="rollingboard"></div>

     <div className="my-blog-posts">
      <div className="title"></div>
      <div className="see-more"></div>
      <div className="blogs">
        <div></div>
        <div></div>
        <div></div>
      </div>
     </div>
    </>
  );
};

export default Home;
