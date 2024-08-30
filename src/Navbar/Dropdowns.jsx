import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Dropdowns = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const dropdownRef = useRef(null);

  const autoCloseDuration = 1500;

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (!isOpen) {
      const id = setTimeout(() => {
        setIsOpen(false);
      }, autoCloseDuration);
      setTimeoutId(id);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    console.log(option);
    setIsOpen(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="flex items-center text-sm font-semibold leading-6 text-white transition-all duration-300"
      >
        <a
          href="#"
          className="relative text-base font-bold leading-6 text-white group hover:text-white"
        >
          Products
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </a>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="p-4 hover:bg-gray-100 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleOptionClick("Flagship Program")}
            >
              Flagship Program
            </div>
            <div
              className="p-4 hover:bg-gray-100 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() =>
                handleOptionClick("Tech for Product & Business Folks")
              }
            >
              Tech for Product & Business Folks
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdowns;
