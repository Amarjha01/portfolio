import React from 'react'

const Experience = () => {
  return (
    <div className='container pt-10 md:pt-60'>
         <div className="experiences">
        <div className="p6">
          <p className='text-3xl md:text-6xl'>
            My <span className="text-amber-600 ">Work Experience</span>
          </p>
        </div>
        <div className="experience">
          <div className="companiesName text-base left-1 md:text-3xl md:left-10 ">
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
          <div className="fieldsName text-base left-5 md:text-3xl md:left-10">
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
    </div>
  )
}

export default Experience