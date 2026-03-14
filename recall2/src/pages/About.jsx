import React from 'react'
import { Link } from "react-router-dom"
import Button from '../components/common/Button'
import pipedbike from "../assets/images/pipedbike.jpg"
import meetup from '../assets/images/meetup.png'
import president from '../assets/images/president.png'

const AboutPage = () => {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* ─── PRESIDENT SECTION ─── */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src={president}
              alt="President"
              className="rounded-lg object-cover w-full max-w-sm lg:max-w-none lg:w-full aspect-square shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center lg:text-left">
              President
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left mt-1 text-gray-800">
              MR. REX <span className="text-orange-500">Dangi</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-4 text-justify text-gray-700 leading-relaxed">
              <span className="font-serif">
                "Young Enfielders was not created just to ride motorcycles, but to build a brotherhood
                that rides with discipline, respect, and responsibility. Every ride we take represents
                our passion for Royal Enfield and our commitment to safe, meaningful riding. Together,
                we ride as one family, supporting each other on and off the road."
              </span>
              <br /><br />
              The founder &amp; Leader of Young Enfielders MR. Rex Dangi AKA IMMORTAL REX.
            </p>
          </div>

        </div>
      </section>

      {/* ─── ABOUT US SECTION ─── */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">

          {/* Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src={pipedbike}
              alt="Piped Bike"
              className="rounded-b-full object-cover w-full max-w-sm lg:max-w-none lg:w-full aspect-square shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center lg:text-left">
              About Us
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left mt-1 text-gray-800">
              We are <span className="text-orange-600">Enfielders</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-4 text-justify text-gray-700 leading-relaxed">
              Young Enfielders is a dedicated Royal Enfield bikers group based in eastern Nepal, formed
              by riders who share a deep passion for the iconic Bullet and the lifestyle it represents.
              United by the unmistakable thump of Royal Enfield engines, our group stands for freedom,
              adventure, and the true spirit of motorcycling. What began as a small circle of riders has
              grown into a close-knit brotherhood built on trust, respect, and a shared love for the open
              road. We organize regular rides, tours, and meet-ups to explore the diverse terrain of eastern
              Nepal, promoting responsible biking culture and turning fellow riders into lifelong friends.
            </p>
            <div className="mt-6">
              <Link to="/product">
                <Button
                  text="Products"
                  color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
                />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─── MISSION & VISION SECTION ─── */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src={meetup}
              alt="Meetup"
              className="rounded-lg object-cover w-full max-w-sm lg:max-w-none lg:w-full aspect-square shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">

            {/* Mission */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center lg:text-left">
                Our <span className="text-orange-600">Mission</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg mt-3 text-justify text-gray-700 leading-relaxed">
                To unite Royal Enfield enthusiasts in eastern Nepal under a culture of respect, discipline,
                and adventure, creating memorable riding experiences while promoting safe and responsible
                motorcycling. Fostering lifelong friendships through shared rides and celebrating the spirit
                of Royal Enfield and the freedom of the open road.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center lg:text-left">
                Our <span className="text-orange-600">Vision</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg mt-3 text-justify text-gray-700 leading-relaxed">
                To be the most respected and inspiring Royal Enfield bikers community in Nepal, known for
                our brotherhood, exploration of the country's landscapes, and commitment to a positive
                riding culture — promoting safe practices, respect for all road users, and encouraging
                members to explore Nepal's diverse terrains with courage and enthusiasm.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default AboutPage
