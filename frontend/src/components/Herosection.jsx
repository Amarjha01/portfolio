import heroimg from '../assets/heroimg.svg'

const Herosection = () => {
  return (
    <div className='container py-6'>
         <div className="hello">
         
            <p className="md:text-3xl text-2xl px-4 py-1 rounded-2xl border border-black">Hello!</p>
           
        </div>
        <div className=" container bg-green-00">   
        <div className="introo">
          <p className="p1">
            I'm <span className="name">Amar</span>,
          </p>
          <p className="p1 p2">Web Developer</p>
        </div>

        {/* <div className="p3">
          <p className="p3p">
            Amar's Exceptional product design ensure our website's
            success.Highly Recommended
          </p>
        </div> */}

       <div className=" container flex justify-center ">
       <div className="semicircle flex items-center">
       <div className=" w-full flex justify-center relative bottom-9 md:bottom-16">
       {<img src={heroimg} alt="" className="h-60 w-60 md:h-fit md:w-fit "/>}
       </div>
        </div>
        {/* <div className="w-full flex justify-center relative bottom-44 md:bottom-80 z-20">
          <div className="calltoaction">
            <span className="l1">
              <li className="txt">Portfolio</li>
            </span>
            <span className="l2">
              <li className="txt">Hire me</li>
            </span>
          </div>
        </div> */}
       </div>
      </div>
    </div>
  )
}

export default Herosection