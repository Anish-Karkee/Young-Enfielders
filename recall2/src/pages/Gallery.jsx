import React from 'react'
import Button from '../components/common/Button'
import gag from '../assets/images/gag.png'
import anniride2 from '../assets/images/anniride2.png'
import ktm from '../assets/images/ktmride.png'
import cig from '../assets/images/bjunction.png'
import char from '../assets/images/charity2.png'
import boob from '../assets/images/soloride.png'
import dton from '../assets/images/dtownride.png'
import kk from '../assets/images/chopper.png'

const galleryItems = [
  { src: gag,      alt: "1st Anniversary",     title: "1st Anniversary",     date: "July 2025" },
  { src: anniride2,alt: "Team Retreat",         title: "Team Retreat",        date: "May 2024" },
  { src: cig,      alt: "Strategy Workshop",    title: "Strategy Workshop",   date: "April 2023" },
  { src: char,     alt: "Charity Work",         title: "Charity Work",        date: "March 2020" },
  { src: ktm,      alt: "Creating Community",   title: "Creating Community",  date: "February 2024" },
  { src: boob,     alt: "Solo Ride",            title: "SOLO",                date: "January 2019" },
  { src: dton,     alt: "Duo Rides",            title: "Duo Rides",           date: "December 2022" },
  { src: kk,       alt: "Holiday",              title: "Holiday",             date: "November 2022" },
]

const Gallery = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Captured Moments</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-base sm:text-lg">
            A visual journey through our most memorable rides and events
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg aspect-square">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-base sm:text-xl font-bold">{item.title}</h3>
                  <p className="text-white/80 mt-1 text-sm">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-10">
          <Button
            text="Load More"
            color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
          />
        </div>

      </section>
    </div>
  )
}

export default Gallery
