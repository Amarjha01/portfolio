import hiremeimg1 from '../assets/hiremeimg1.svg'

const Hireme = () => {
  return (
    <div className='container pt-10'>
         <div className="hire-me h-96 w-full rounded-3xl md:h-[700px] md:max-h-[700px]">
        <div className="hire-me-content h-72 w-10/12 md:h-[600px] md:max:h-[600px]">
          <div className="hire-me-img md:right-14 right-5 md:w-[550px] md:max-w-[550px] md:h-[550px] md:max-h-[550px]">
            <img src={hiremeimg1} alt="hiremeimg1" className=''/>
          </div>
          <div className="hire-me-texts">
            <div className="inline-block">
              <p className="p7 text-lg md:text-6xl">
                Why<span className="text-orange-700"> Hire Me </span>?
              </p>
            </div>
            <div className="text-sm md:text-3xl w-40 md:w-96 md:max-w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="hire-me-btn text-2xl font-medium h-16 w-32 rounded-2xl top-5 left-5  md:text-3xl  md:h-24 md:w-48 md:rounded-3xl md:left-44 md:top-10 cursor-pointer hover:bg-green-700 hover:text-white">Hire Me</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hireme