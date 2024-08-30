import React, { useState } from "react";
import Dropdowns from "./Dropdowns";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 bg-gradient-to-r from-fuchsia-500 to-pink-600 shadow-md backdrop-blur-lg">
          <div className="flex lg:flex-1">
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
              className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 z-50">
            <Dropdowns />
            <a
              href="#"
              className="relative text-base font-bold leading-6 text-white group hover:text-white"
            >
              Curriculum
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#"
              className="relative text-base font-bold leading-6 text-white group hover:text-white"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#"
              className="relative text-base font-bold leading-6 text-white group hover:text-white"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#"
              className="relative text-base font-bold leading-6 text-white group hover:text-white"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 gap-6 lg:justify-end">
            <a
              href="#"
              className="text-sm font-bold leading-6 text-white hover:text-white"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="text-sm bg-white px-4 py-1 rounded-full font-bold leading-6 text-black hover:bg-gray-200"
            >
              Log in &rarr;
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-60 flex items-start justify-center">
            <div
              className={`fixed inset-y-0 right-0 z-50 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white bg-opacity-30 backdrop-blur-md p-6 transform transition-transform duration-500 ease-in-out shadow-xl rounded-b-lg ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                type="button"
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label="Close mobile menu"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mt-16 space-y-6">
                <a
                  href="#"
                  className="block text-xl hover:rounded-lg  font-semibold text-white hover:text-pink-200 hover:bg-gray-500 p-4 transition duration-300"
                >
                  Curriculum
                </a>
                <a
                  href="#"
                  className="block text-xl hover:rounded-lg  font-semibold text-white hover:text-pink-200 hover:bg-gray-500 p-4 transition duration-300"
                >
                  Reviews
                </a>
                <a
                  href="#"
                  className="block text-xl hover:rounded-lg  font-semibold text-white hover:text-pink-200 hover:bg-gray-500 p-4 transition duration-300"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="block text-xl hover:rounded-lg  font-semibold text-white hover:text-pink-200 hover:bg-gray-500 p-4 transition duration-300"
                >
                  Contact Us
                </a>
                <div className="mt-8 space-y-2">
                  <a
                    href="#"
                    className="block text-lg hover:rounded-lg  font-semibold text-black hover:text-white hover:bg-gray-400 p-4 transition duration-300"
                  >
                    Sign Up
                  </a>
                  <a
                    href="#"
                    className="block text-lg hover:rounded-lg  font-semibold text-black hover:text-white hover:bg-gray-400 p-4 transition duration-300"
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
