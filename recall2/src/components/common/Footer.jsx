import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="px-6 md:px-12 lg:px-20 pt-12 pb-6">

        {/* Top Grid */}
        <div className="grid gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2">
            <a href="/" aria-label="Go home" className="inline-flex items-center gap-2">
              <svg className="w-8 text-gray-800" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} stroke="currentColor" fill="none">
                <rect x={3} y={1} width={7} height={12} />
                <rect x={3} y={17} width={7} height={6} />
                <rect x={14} y={1} width={7} height={6} />
                <rect x={14} y={11} width={7} height={12} />
              </svg>
              <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">Young Enfielders</span>
            </a>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-sm">
              We ride not just for destinations, but for the journey — celebrating freedom, adventure, and the iconic thump that defines our lifestyle. From local rides to long-distance tours, Young Enfielders stands for unity, respect, and the spirit of true motorcycling.
            </p>
          </div>

          {/* Contacts */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex gap-1">
              <p className="text-gray-600">Phone:</p>
              <a href="tel:9802346502" className="text-gray-800 hover:text-orange-500 transition-colors duration-200">
                9810046088
              </a>
            </div>
            <div className="flex gap-1">
              <p className="text-gray-600">Email:</p>
              <a href="mailto:youngenfielders4@gmail.com" className="text-gray-800 hover:text-orange-500 transition-colors duration-200 break-all">
                youngenfielders4@gmail.com
              </a>
            </div>
            <div className="flex gap-1">
              <p className="text-gray-600">Address:</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-orange-500 transition-colors duration-200">
                Itahari, Sunsari
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-base font-bold tracking-wide text-gray-900">Social</p>
            <div className="flex items-center mt-3 space-x-4">
             
              {/* Instagram */}
              <a href="https://www.instagram.com/young_enfielders/?hl=en" className="text-gray-500 hover:text-orange-500 transition-colors duration-200" aria-label="Instagram">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-5 w-5">
                  <circle cx={15} cy={15} r={4} />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/prince.dangi.5209" className="text-gray-500 hover:text-orange-500 transition-colors duration-200" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              A passionate Royal Enfield riders' community based in eastern Nepal, united by classic machines, brotherhood, and the open road.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse gap-3 pt-5 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-gray-500">
            © Copyright 2025 Young Enfielders. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="/" className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200">F.A.Q</a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
