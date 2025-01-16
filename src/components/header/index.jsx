import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navitems array
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Product", path: "/products" },
    { link: "Blog", path: "/blogs" },
    // { link: "Career", path: "/career" },
    { link: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`lg:px-14 px-2 w-4/5 mx-auto border rounded-[52px] mt-2 mb-2 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-2 bg-[#202020] duration-300 "
            : "bg-[#202020]"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-1"
          >
            <img src={logo} alt="" className="w-12 inline-block items-center" />
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-white hover:text-gray-500 first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-[#202020] ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } md:hidden`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-brandPrimary first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
