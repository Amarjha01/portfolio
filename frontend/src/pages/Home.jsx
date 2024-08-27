import "./page.css";


import { NavLink } from "react-router-dom";

import Herosection from '../components/Herosection.jsx'
import Services from '../components/Services.jsx'
import Experience from '../components/Experience.jsx'
import Hireme from '../components/Hireme.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Testimonial from '../components/Testimonials.jsx'
const Home = () => {
  return (
    <div className=" container mx-auto px-2 bg-red-30">
   <Herosection/>
     <Services/>
      <Experience/>
      <Hireme/>
     <Portfolio/>
      {/* <Testimonial/> */}
     {/* <div className="mail">
      will continue soon
     </div> */}

     {/* <div className="rollingboard"></div> */}

     {/* <div className="my-blog-posts">
      <div className="title"></div>
      <div className="see-more"></div>
      <div className="blogs">
        <div></div>
        <div></div>
        <div></div>
      </div>
     </div> */}
    </div>
  );
};

export default Home;