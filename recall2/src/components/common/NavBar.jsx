import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import Logo from "./Logo"
import Button from "./Button"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `relative text-black cursor-pointer transition-colors duration-200 hover:text-orange-500
     ${isActive ? "after:w-full font-bold" : "after:w-0"}
     after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-orange-500
     after:transition-all after:duration-300`

  const mobileLinkClasses = ({ isActive }) =>
    `text-black font-medium py-2 px-3 rounded-md transition-colors duration-200
     hover:text-orange-500 hover:bg-orange-50
     ${isActive ? "text-orange-500 font-bold bg-orange-50" : ""}`

  return (
    <div className="sticky top-0 z-50">
      {/* Main navbar row */}
      <div className="w-full py-3 border-b bg-white">
        <div className="flex justify-between px-6 md:px-12 lg:px-20 items-center font-semibold">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <h1 className="text-lg font-bold tracking-wide">YOUNG ENFEILDERS</h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex xl:gap-10 md:gap-8 gap-6">
            <NavLink to="/" end className={linkClasses}>Home</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/testimonial" className={linkClasses}>Testimonial</NavLink>
            <NavLink to="/gallery" className={linkClasses}>Gallery</NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-4">
            <Link to="/contact">
              <Button
                text="Contact Us"
                color="text-white bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
              />
            </Link>
            <Link to="/login">
              <Button
                text="Login"
                color="text-white bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-2xl p-1 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu — lives OUTSIDE the flex row */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md px-6 py-4 flex flex-col gap-3">
          <NavLink to="/" end className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/testimonial" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Testimonial</NavLink>
          <NavLink to="/gallery" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Gallery</NavLink>

          <div className="flex flex-col gap-3 pt-2 border-t mt-1">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button text="Contact Us" color="w-full text-white bg-black hover:scale-105 hover:shadow-lg transition duration-300" />
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button text="Login" color="w-full text-white bg-black hover:scale-105 hover:shadow-lg transition duration-300" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
