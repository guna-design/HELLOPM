import React, { useState } from "react";

const ButtonGroup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="inline-flex rounded-md shadow-sm flex-col sm:flex-row bg-white"
        role="group"
      >
        {/* Mobile View */}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-gray-200 rounded-lg hover:bg-pink-700 hover:text-gray-900 focus:z-10 focus:ring-0 transition-all ease-in-out duration-300 focus:ring-violet-500 dark:bg-pink-600 sm:rounded-s-lg"
          onClick={handleToggle}
        >
          Explore →
        </button>

        {/* Button Group */}
        <div
          className={`transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } sm:flex bg-white`}
        >
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 sm:rounded-none sm:rounded-l-lg"
          >
            Curriculum
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 sm:rounded-none"
          >
            FAQs
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 sm:rounded-none"
          >
            Pricing
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 sm:rounded-none"
          >
            Mentors
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 sm:rounded-none"
          >
            Reviews
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 sm:rounded-none sm:rounded-r-lg"
          >
            Why HelloPM
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
