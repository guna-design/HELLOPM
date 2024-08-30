import React from 'react';
// import dashboardImage from '../assets/vecteezy_concept-selling-products-online-check-business-growth_26398627.jpg';


const Dashboard = () => {
  return (
   <>
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 py-14">
    
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80" aria-hidden="true">
      <div
        className="relative aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[45deg] bg-gradient-to-r from-[#a1c4fd] via-[#c2e9fb] to-[#fcb69f] opacity-50 sm:left-[calc(50%-40rem)] sm:w-[80rem]"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      ></div>
    </div>

    <div className="max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
      <div className="relative z-10 lg:max-w-2xl lg:w-full">
        <div className="mt-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Become a Confident <span className="text-red-500">Product Manager</span>
            </h1>
            <div className="hidden pt-6 sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-gray-700 font-semibold ring-1 ring-gray-300 hover:ring-gray-400 transition duration-200 ease-in-out">
                Personalized Program to Accelerate Your Career in Product Management.
              </div>
            </div>

            {/* Date & Icon Section */}
            <div className="relative mx-20">
              <div className="pl-2 mt-0 flex items-center justify-center gap-3">
                <div className="relative hidden md:flex w-8 h-8 bg-pink-600 rounded-full items-center justify-center shadow-lg animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
                  </svg>
                </div>
                <span className="pt-10 text-lg font-medium">
                  34th Cohort Starts from <span className="text-pink-600 font-serif font-extrabold">22nd September</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-pink-500 hover:text-white transition-transform duration-300 transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-6 text-black border border-black rounded-md py-2.5 px-4 hover:text-pink-600 hover:border-pink-600 transition-colors duration-300"
              >
                Schedule a 1:1 Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover hidden md:block md:h-auto lg:w-full lg:h-full rounded-lg shadow-lg"
          src="https://img.freepik.com/free-vector/isometric-time-management-concept-illustrated_52683-55734.jpg?t=st=1724731659~exp=1724735259~hmac=3359ec79298ced3f80fc4b8e97f1a6735529648fbb285c34802858c19bd211ce&w=740"
          alt="Hero"
        />
      </div>
    </div>
  </div>

  </>
  );
};

export default Dashboard;
