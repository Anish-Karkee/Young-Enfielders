import React from 'react';
import { Link } from "react-router-dom"
import Button from '../components/common/Button';
import enfilders from '../assets/images/enfilders.png'
import gmandu from '../assets/images/gmandu.jpg'
import badaugustus from '../assets/images/badaugustus.png'
import ride from '../assets/images/ride.png'
import bike from '../assets/images/charity.png'
import mstone from '../assets/images/milestone.png'
import ann from '../assets/images/anniversary.png'
import gb from '../assets/images/groupbike.png'
const HomePage = () => {
  return (
    <>
      
      <div className="bg-white flex relative items-center z-0 overflow-hidden px-14">
        <div className="container mx-auto px-6 flex ">
          <div className="w-full lg:w-2/5 flex flex-col relative z-20 ">
            <span className="w-20 h-2 bg-white dark:bg-white mb-12">
            </span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none dark:text-black text-gray-800">
              Young Enfielders <span className='text-blue-700'>Born To Ride</span>
            
            </h1>
            <p className="md:text-xl sm:text-lg text-base mt-4 text-justify sm:px-2 dark:text-black">
              Young Enfielders is a brotherhood of Royal Enfield riders based in the eastern side of Nepal, brought together by a shared passion for the iconic Bullet and the freedom of the open road. We represent discipline, respect, and the true spirit of motorcycling. More than just a bikers group, Young Enfielders is a community where every ride builds stronger bonds and every journey creates stories. From city streets to mountain highways, we ride together to keep the legacy of the thump alive. Our rides are about exploration, brotherhood, and respect for the road and each other. Every journey we take strengthens our bond and reflects the spirit of freedom that defines Young Enfielders.
            </p>
            <div className="flex items-start mt-4 gap-4">
             <Link to="/about"><Button text="Read More" color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"/></Link>
            </div>
          </div>
          <div className="sm:w-2/3 lg:w-3/5 px-2 py-17">
          <div className="grid grid-cols-2 ">
           
            <img src={bike}
            alt='Ride' 
            className="w-full h-48 object-cover rounded-tl-lg shadow-lg" />
            <img src={enfilders}
            alt="Enfielders" 
            className="w-full h-48 object-cover rounded-tr-lg shadow-lg" />
            <img src={ann}
            alt='Golimandu'
            className="w-full h-48 object-cover  shadow-lg" />
             <img src={mstone}
            alt='Golimandu'
            className="w-full h-48 object-cover  shadow-lg" />
            <img src={gmandu}
            alt='Golimandu'
            className="w-full h-48 object-cover rounded-bl-lg shadow-lg" />
            <img src={gb}
            alt='Golimandu'
            className="w-full h-48 object-cover rounded-br-lg shadow-lg" />
          </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl px-18 text-right ">
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="md:w-1/2 w-full relative left-0 px-1 flex gap-4 sm:flex-col lg:flex-row">
          <img
            src={badaugustus}
            alt="Find your home"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
          <img
            src={ride}
            alt="Find your home"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full text-center md:text-left relative xl:left-120">
          <h1 className=" font-bebas-neue uppercase text-6xl font-bold mt-2 mb-6">
            Follow your passion
            <br />
            With Us!!
          </h1>

          <p className="leading-relaxed md:text-xl sm:text-lg text-base mt-4 text-justify sm:px-2 dark:text-black">
            Anyone from anywhere can be part of our young enfielders but you must meet our criteria.
            Our criteria are:
            <br/>
            - Must be 18 yeays above. 
            <br/>
            - You must have license. 
            <br/>
            - Documents of bike should be all cleared.
            <br/>
            - You must obey your hirearcy.
          </p>

          <p className="mb-8 mt-4 leading-relaxed">
            Oh, and the best bit...
            <span className="text-orange-500 font-bold"> It's free!</span>
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/signup">
              <Button
                text="Sign-Up"
                color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
              />
            </Link>
          </div>
        </div>

      </div>
    </div>

  </div>



    </>
  );
};

export default HomePage;
