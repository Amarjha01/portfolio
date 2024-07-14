import React from "react";
import "./page.css";
import downloadIcon from "../assets/file-download-icon.svg";
import Portfoliocard from "../components/Portfoliocard";
import portfoliocardimg1 from "../assets/portfoliocardimg1.svg";

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="projectsection">
          <div className="project-img1">
            <div className="shade">
            {<img src={downloadIcon} className="downloadIcon" alt="Download Documentation" />}
            <p>Downloaad Documentation</p>
            </div>
            
          </div>
          <div className="project-title">College Portle</div>
          <p className="project-brief">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias accusamus odit obcaecati, corporis fuga quia cumque nesciunt! Perspiciatis recusandae velit modi repudiandae placeat blanditiis culpa enim incidunt reiciendis quidem.</p>
        </div>

        <div className="projectsection">
          <div className="project-img2">
          <div className="shade">
          {<img src={downloadIcon} className="downloadIcon" alt="Download Documentation" />}
          <p>Downloaad Documentation</p>
          </div>
          
          </div>
          <div className="project-title">E-Commerce</div>
          <p className="project-brief">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, non in numquam dolorum quasi qui dolore et! Aspernatur beatae, aperiam maxime consequuntur exercitationem labore recusandae dignissimos nesciunt qui voluptatem distinctio!</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
