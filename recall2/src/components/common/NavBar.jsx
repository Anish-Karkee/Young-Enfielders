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

  return (
    <div className="sticky top-0 z-10">
    <div className="w-full py-3 border-b sticky top-0 z-50 bg-white">
      <div className="flex justify-between px-20 items-center font-semibold">

        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <h1 className="text-1.5xl">YOUNG ENFEILDERS</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex xl:gap-10 md:gap-8 gap-6">
          <NavLink to="/" end className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/testimonial" className={linkClasses}>Testimonial</NavLink>
          <NavLink to="/gallery" className={linkClasses}>Gallery</NavLink>
          <NavLink to="/product" className={linkClasses}>Product</NavLink>
        </div>
                    {/* {isOpen && (
              <div className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                <NavLink to="/testimonial" onClick={() => setIsOpen(false)}>Testimonial</NavLink>
                <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
                <NavLink to="/product" onClick={() => setIsOpen(false)}>Product</NavLink>

                <Link to="/contact">
                  <Button text="Contact Us" color="bg-black text-blue-300" />
                </Link>
                <Link to="/login">
                  <Button text="Login" color="bg-black text-blue-300" />
                </Link>
              </div>
            )} */}

         {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          

        {/* Contact Button */}
        <div className="hidden lg:flex px-8 gap-4">
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
         
      </div>
    </div>
    </div>
  )
}

export default NavBar
