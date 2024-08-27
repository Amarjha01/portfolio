import { NavLink } from "react-router-dom";
import card1 from "../assets/card1.svg";
import cardArrow from "../assets/arrow.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";

import frame from '../assets/Frame58.png'

const Services = () => {
  return (
    <div>
        <div className="container md:w-full w-auto h-auto flex justify-center items-center relative bottom-6">
      <div className="frame">
        <div className="absolute">
        <img src={frame} alt="" />
        </div>
        <div className=" container md:h-28 w-full flex justify-between items-center px-5">
          <p className="p4 md:text-6xl inline-block z-10">
            My <span className="p4p2">Services</span>
          </p>
          <p className="p5 inline-block z-10 text-xs md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. rehenderit
            repudiandae animi minus officiis cumque?
          </p>
        </div>
        <div className=" cards md:top-4 flex  gap-3 px-2 md:gap-10">
          <div className="card">
            <NavLink to="/services">
              {<img src={card1} alt="Tool" className="card01" />}
              <span className="arrow relative left-[87px] top-7 md:left-[230px] md:-top-6">
                <div className="arrowcircle md:h-[90px] md:w-[90px]">
                  <span>
                    {<img src={cardArrow} alt="Tool" />}
                  </span>
                </div>
              </span>
            </NavLink>
          </div>
          <div className="card">
            <NavLink to="/services">
              {<img src={card2} alt="Tool" className="card02" />}
              <span className="arrow relative left-[87px] top-7 md:left-[230px] md:-top-6 ">
                <div className="arrowcircle md:h-[90px] md:w-[90px]">
                  <span>
                    {<img src={cardArrow} alt="Tool"  />}
                  </span>
                </div>
              </span>
            </NavLink>
          </div>
          <div className="card">
            <NavLink to="/services">
              {<img src={card3} alt="Tool" className="card03" />}
              <span className="arrow relative left-[87px] top-7 md:left-[230px] md:-top-6">
                <div className="arrowcircle md:h-[100px] md:w-[100px]">
                  <span>
                    {<img src={cardArrow} alt="Tool" />}
                  </span>
                </div>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services