import React from "react";
import "./components.css";
const Portfoliocard = ({portfoliocardtext1,portfoliocardtext2p2,image}) => {
  return (
    <>
    <div>
     <div className="portfoliocardNavicon"></div>
      <div className="portfoliocard">
        <span className="portfoliocardImg">{image}</span>
        <div className="portfoliocardtexts">
          {<p className="portfoliocardtext1">{portfoliocardtext1}</p>}
          <div className="portfoliocardtext2">
           { <span><p className="portfoliocardtext2p1">{portfoliocardtext1}</p></span>}
            <span>
              <p className="portfoliocardtext2p2">
                {portfoliocardtext2p2}
              </p>
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Portfoliocard;
