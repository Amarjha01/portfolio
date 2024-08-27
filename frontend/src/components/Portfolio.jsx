import cardArrow from "../assets/arrow.svg";
import portfolioimg from "../assets/portfoliocardimg1.svg";

const Portfolio = () => {
  return (
    <div className="container">
          <div className="portfolio  ">
        <div className="portfolioHeading h-40 w-full flex justify-between px-3">
          <p className=" w-48 text-xl md:text-6xl md:w-[550px]">
            Lets have a look at my
            <span className="text-orange-600"> portfolio</span>
          </p>
          <div className="see-all">See All</div>
        </div>
        {/* <div className="portfoliocards bg-black">
          <div className="portfoliococard bg-red-800 px-3 ">
            <img src={portfolioimg} alt="" className="h-60 md:h-96 " />
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
        </div> */}
        </div>
    </div>
  )
}

export default Portfolio