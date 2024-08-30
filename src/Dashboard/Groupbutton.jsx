import React, { useState } from "react";

const ButtonGroup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="inline-flex rounded-md shadow-sm flex-col sm:flex-row"
        role="group"
      >
        {/*  mobile view */}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-0 transition-all ease-in-out duration-300 focus:ring-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white sm:rounded-s-lg"
          onClick={handleToggle}
        >
          Explore →
        </button>

        <div
          className={`transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } sm:flex`}
        >
          <button
            type="button"
            className="px-4  py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white sm:rounded-e-none"
          >
            Curriculum
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white sm:rounded-e-none"
          >
            FAQs
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white sm:rounded-e-none"
          >
            Pricing
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white sm:rounded-e-none"
          >
            Mentors
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white sm:rounded-e-none"
          >
            Reviews
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-violet-500 focus:text-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white sm:rounded-e-lg"
          >
            Why HelloPM
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
