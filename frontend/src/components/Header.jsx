import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import './components.css';
import logo from '../assets/logo/logo3.svg';
import crossicon from '../assets/NavIcon/crossIcon.svg'
import navicon from '../assets/NavIcon/navIcon.svg'
const Header = () => {
  const [isActive, setIsActive] = useState(false);


const showMenu = ()=>{
  const navbar = document.querySelector('.navbar');
  // navbar.className = 'left-0%'
}

  useEffect(() => {
showMenu()
  },[isActive])
  
  return(
    
   <div className="container mx-auto px-2  ">
     <header>
    <div className="headerlogo  container flex  lg:hidden">
    <div className="w-full flex justify-center ">
      <img src={logo} alt="" />
    </div>
     <div className=" ">
     <img src={navicon} alt="" className="navicon w-8 relative " onClick={()=>{setIsActive(true)}} />
     {<img src={crossicon} alt="" className="crosicon" />}
     </div>
    </div>
      <div  className=" navbar lg:h-[120px] lg:pt-4 lg:flex lg:justify-center  lg:items-center  ">
        <div className="navlinks lg:bg-black lg:flex lg:rounded-[50px] lg:container lg:max-w-7xl lg:h-16  ">
          <ul className="links w-full px-[5px] py-[15px] max-w-7xl">
          <NavLink to="/" className={(e)=>{return e.isActive?"red" : ""}  } exact><li className="w-36 text-2xl">Home</li></NavLink>
          <NavLink to="/About" className={(e)=>{return e.isActive?"red" : ""}} exact><li className="w-36 text-2xl"  >About</li></NavLink>
          <NavLink to="/Services" className={(e)=>{return e.isActive?"red" : ""}} exact><li className="w-36 text-2xl">Services</li></NavLink>
          <div className="logo-1">
           {/* <img src={logo} alt="logo" /> */}
          </div>
          <NavLink to="/Resume" className={(e)=>{return e.isActive?"red" : ""}} exact><li className="w-36 text-2xl">Resume</li></NavLink>
          <NavLink to="/Projects" className={(e)=>{return e.isActive?"red" : ""}} exact><li className="w-36 text-2xl">Projects</li></NavLink>
          <NavLink to="/Contact" className={(e)=>{return e.isActive?"red" : ""}} exact><li className="w-36 text-2xl">Contact</li></NavLink>
          </ul>
          
        </div>
      </div>
    </header>
   </div>
    

  )
};

export default Header;
