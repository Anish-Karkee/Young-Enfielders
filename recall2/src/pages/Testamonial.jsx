import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import rex from '../assets/images/president.png'
import carron from '../assets/images/carron1.jpeg'

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Suman R.",
    handle: "@suman_rae",
    text: `"Young Enfielders is more than just a riding group — it's a brotherhood." Riding with this group has given me unforgettable memories, lifelong friends, and the confidence to explore new roads. Every ride feels safe, organized, and full of positive energy. — Rider`,
    likes: 143,
    reposts: 24,
    date: "3:42 PM · Feb 12, 2025",
  },
  {
    img: rex,
    name: "Rex D.",
    handle: "@immortal_rex",
    text: `"The perfect blend of passion, discipline, and adventure." From short weekend rides to long tours, Young Enfielders plans everything professionally. The respect among members and love for Royal Enfield makes this group truly special. — Enfielders Owner`,
    likes: 217,
    reposts: 53,
    date: "11:28 AM · Jan 29, 2025",
  },
  {
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Carron Rai",
    handle: "@carron_enfeild",
    text: `"I joined as a solo rider, now I ride with a family." Being part of Young Enfielders changed how I see motorcycling. The support, guidance, and shared passion make every journey meaningful. Proud to ride with this team. — Member`,
    likes: 189,
    reposts: 42,
    date: "4:15 PM · Feb 3, 2025",
  },
  {
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    name: "Aashish P.",
    handle: "@peached_tea",
    text: `"Safety, unity, and pure riding spirit." What I admire most is the focus on safe riding and teamwork. Young Enfielders represents the true Royal Enfield lifestyle. — Touring Rider`,
    likes: 167,
    reposts: 36,
    date: "2:10 PM · Jan 18, 2025",
  },
  {
    img: "https://randomuser.me/api/portraits/women/43.jpg",
    name: "Nitesh S.",
    handle: "@neetes__",
    text: `"A group that truly lives the Royal Enfield lifestyle." From the iconic thump to the camaraderie on the road, Young Enfielders represents everything a biker community should be. Proud to be part of this passionate and united group. — Member`,
    likes: 201,
    reposts: 47,
    date: "10:23 AM · Feb 8, 2025",
  },
  {
    img: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Prakash M.",
    handle: "@copymuseai",
    text: `"Every ride feels purposeful and unforgettable." Young Enfielders isn't just about riding motorcycles — it's about discipline, respect, and exploring Nepal's beautiful roads together. The bond among riders makes every journey special. — Royal Enfield Rider`,
    likes: 175,
    reposts: 31,
    date: "1:35 PM · Jan 22, 2025",
  },
]

const TwitterIcon = () => (
  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const RepostIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z" />
  </svg>
)

const TestimonialPage = () => {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* ─── TESTIMONIAL CARDS ─── */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            What Riders Are Saying
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400">
            Hear from our riders who have been part of the journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="flex items-start mb-4">
                <div className="shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full object-cover" src={t.img} alt={t.name} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.handle}</p>
                </div>
                <div className="ml-auto">
                  <TwitterIcon />
                </div>
              </div>

              {/* Card Body */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{t.text}</p>

              {/* Card Footer */}
              <div className="flex items-center mt-4 text-gray-500 text-sm flex-wrap gap-y-1">
                <HeartIcon />
                <span className="mr-4">{t.likes}</span>
                <RepostIcon />
                <span className="mr-4">{t.reposts}</span>
                <span className="text-xs text-gray-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex justify-center mt-10">
          <Link to="/contact">
            <Button
              text="Contact"
              color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
            />
          </Link>
        </div>

      </section>

      {/* ─── FEATURED QUOTE ─── */}
      <section className="px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
        <figure className="flex flex-col md:flex-row bg-slate-100 dark:bg-gray-600 rounded-xl overflow-hidden shadow-md">
          <img
            className="w-full md:w-40 lg:w-48 h-48 md:h-auto object-cover"
            src={carron}
            alt="Carron Rai"
          />
          <div className="p-6 md:p-8 flex flex-col justify-center space-y-3">
            <blockquote>
              <p className="text-base sm:text-lg font-medium dark:text-slate-100 text-gray-800 italic leading-relaxed">
                "Forged with precision like a gun, driven with the force of a bullet, built to rule the road with unstoppable power."
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Carron Rai</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">Member / Rider, Young Enfielders</div>
            </figcaption>
          </div>
        </figure>
      </section>

    </div>
  )
}

export default TestimonialPage
