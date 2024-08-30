import React from 'react';

const CourseContent = () => (
  <div className="lg:flex-1 my-24 p-6 bg-white  rounded-lg shadow-md">
    <div className="mb-8 border-b pb-4">
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
        Level Up Your Product Management Skills
      </h2>
      <p className="text-lg lg:text-xl text-gray-600">
        Master the skills that top companies look for in product managers. Gain practical knowledge and build a portfolio that showcases your expertise.
      </p>
    </div>
    <div>
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
        What You'll Learn:
      </h3>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-3 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
            </svg>
          </span>
          70+ hours of live mentorship.
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
            </svg>
          </span>
          Access to expert sessions & workshops.
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
            </svg>
          </span>
          Portfolio with 5+ projects.
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
            </svg>
          </span>
          Mock Interviews & Resume Reviews.
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
            </svg>
          </span>
          Hands-on experience with 6 tools.
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
            </svg>
          </span>
          Weekly live office hours for 2 years.
        </li>
      </ul>
    </div>
  </div>
);



const CourseFees = () => (
  <div className="lg:w-96 p-6 my-4 bg-white rounded-lg shadow-md">
    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6 text-center">
      Course Fees
    </h3>
    <div className="bg-gray-100 p-6 rounded-lg">
      <p className="text-gray-700 font-medium text-center">
        15 Week Flagship Program
      </p>
      <p className="text-gray-600 mt-4 text-center text-lg">
        ₹ 50,000/-
      </p>
      <p className="text-gray-600 text-center mt-2">
        + Taxes (GST @18%) ₹ 9,000/-
      </p>
      <p className="text-gray-800 font-bold text-center mt-4 text-xl">
        Total: ₹ 59,000/-
      </p>
      <p className="text-gray-500 mt-4 text-sm text-center">
        Pay as low as ₹ 6,500 per month with no cost EMI option.
      </p>
      <p className="text-gray-500 mt-4 text-sm text-center">
        For International Candidates USD 850 (Inclusive of taxes)
      </p>
    </div>
    <div className="relative mt-8">
    <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-full shadow-lg transition duration-300 ease-in-out animate-zoomInOut">
  Apply Now →
</button>
     
    </div>
    <p className="text-sm text-purple-600 mt-4 text-center">
      Get reimbursed from your employer
    </p>
  </div>
);

const Application = () => {
  return (
    <div className="container mx-auto p-6 lg:flex lg:space-x-8">
      <CourseContent />
      <CourseFees />
    </div>
  );
};

export default Application;
