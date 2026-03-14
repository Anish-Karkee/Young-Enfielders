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
    <div className="bg-white overflow-x-hidden">

      {/* ─── HERO SECTION ─── */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left: Text */}
          <div className="w-full lg:w-2/5 flex flex-col">
            <h1 className="font-bebas-neue uppercase text-5xl sm:text-6xl font-black leading-tight text-gray-800">
              Young Enfielders{' '}
              <span className="text-blue-700">Born To Ride</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg mt-4 text-justify text-gray-700 leading-relaxed">
              Young Enfielders is a brotherhood of Royal Enfield riders based in the eastern side of Nepal,
              brought together by a shared passion for the iconic Bullet and the freedom of the open road.
              We represent discipline, respect, and the true spirit of motorcycling. More than just a bikers
              group, Young Enfielders is a community where every ride builds stronger bonds and every journey
              creates stories. From city streets to mountain highways, we ride together to keep the legacy
              of the thump alive.
            </p>

            <div className="mt-6">
              <Link to="/about">
                <Button
                  text="Read More"
                  color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-2 gap-1 sm:gap-2">
              <img src={bike}      alt="Charity ride"    className="w-full h-36 sm:h-44 md:h-52 object-cover rounded-tl-lg shadow-md" />
              <img src={enfilders} alt="Enfielders"      className="w-full h-36 sm:h-44 md:h-52 object-cover rounded-tr-lg shadow-md" />
              <img src={ann}       alt="Anniversary"     className="w-full h-36 sm:h-44 md:h-52 object-cover shadow-md" />
              <img src={mstone}    alt="Milestone"       className="w-full h-36 sm:h-44 md:h-52 object-cover shadow-md" />
              <img src={gmandu}    alt="Golimandu"       className="w-full h-36 sm:h-44 md:h-52 object-cover rounded-bl-lg shadow-md" />
              <img src={gb}        alt="Group bike ride" className="w-full h-36 sm:h-44 md:h-52 object-cover rounded-br-lg shadow-md" />
            </div>
          </div>

        </div>
      </section>

      {/* ─── JOIN SECTION ─── */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Left: Two images side by side */}
          <div className="w-full md:w-1/2 flex flex-row gap-3">
            <img
              src={badaugustus}
              alt="Bad Augustus"
              className="w-1/2 rounded-xl shadow-lg object-cover aspect-3/4"
            />
            <img
              src={ride}
              alt="Ride"
              className="w-1/2 rounded-xl shadow-lg object-cover aspect-3/4"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-bebas-neue uppercase text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Follow Your Passion
              <br />
              With Us!!
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              Anyone from anywhere can be part of our Young Enfielders, but you must meet our criteria:
            </p>

            <ul className="mt-3 mb-4 space-y-1 text-sm sm:text-base text-gray-700 text-left">
              <li>✅ Must be 18 years and above</li>
              <li>✅ You must have a valid license</li>
              <li>✅ Bike documents must be fully cleared</li>
              <li>✅ You must respect the hierarchy</li>
            </ul>

            <p className="mb-6 text-sm sm:text-base text-gray-700">
              Oh, and the best bit...{' '}
              <span className="text-orange-500 font-bold">It's free!</span>
            </p>

            <div className="flex justify-center md:justify-start">
              <Link to="/signup">
                <Button
                  text="Sign Up"
                  color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
                />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
