import React, { useState, useEffect } from "react";
import Dropdowns from "./Dropdowns";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-white">
      <header className="relative inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 md:p-4 lg:px-8 bg-gradient-to-r from-fuchsia-500 to-pink-600 shadow-md backdrop-blur-lg">
          <div className="flex flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://hellopm.co/wp-content/uploads/2023/04/hellopm_white_logo.png"
                alt="Your Company"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 z-50">
            <Dropdowns />
            <a
              href="#"
              className="relative text-sm md:text-base lg:text-lg font-bold leading-6 text-white group hover:text-white"
            >
              Curriculum
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#"
              className="relative text-sm md:text-base lg:text-lg font-bold leading-6 text-white group hover:text-white"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#"
              className="relative text-sm md:text-base lg:text-lg font-bold leading-6 text-white group hover:text-white"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#"
              className="relative text-sm md:text-base lg:text-lg font-bold leading-6 text-white group hover:text-white"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </div>
          <div className="hidden items-center lg:flex lg:flex-1 gap-4 md:gap-6 lg:justify-end">
            <a
              href="#"
              className="text-xs  md:text-sm lg:text-base font-bold leading-6 text-white hover:text-white"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="text-xs md:text-sm lg:text-base bg-white px-3 py-1 md:px-4 md:py-1.5 rounded-full font-bold leading-6 text-black hover:bg-gray-200"
            >
              Log in &rarr;
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="w-11/12 sm:w-3/4 md:w-2/3 bg-white bg-opacity-30 backdrop-blur-md p-6 transform transition-transform duration-300 ease-in-out shadow-xl rounded-lg">
              <button
                type="button"
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label="Close mobile menu"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              <div className="space-y-6 text-center mt-16">
                <Dropdowns />
                <a
                  href="#"
                  className="block text-lg md:text-xl font-semibold text-white hover:text-pink-200 transition duration-300"
                >
                  Curriculum
                </a>
                <a
                  href="#"
                  className="block text-lg md:text-xl font-semibold text-white hover:text-pink-200 transition duration-300"
                >
                  Reviews
                </a>
                <a
                  href="#"
                  className="block text-lg md:text-xl font-semibold text-white hover:text-pink-200 transition duration-300"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="block text-lg md:text-xl font-semibold text-white hover:text-pink-200 transition duration-300"
                >
                  Contact Us
                </a>
                <div className="mt-8 space-y-4">
                  <a
                    href="#"
                    className="block text-lg md:text-xl font-semibold text-black bg-white hover:bg-gray-200 rounded-full px-6 py-3 transition duration-300"
                  >
                    Sign Up
                  </a>
                  <a
                    href="#"
                    className="block text-lg md:text-xl font-semibold text-black bg-white hover:bg-gray-200 rounded-full px-6 py-3 transition duration-300"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
