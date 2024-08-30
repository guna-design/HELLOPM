import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProgramCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    fade: false,
    swipeToSlide: true,
    adaptiveHeight: true,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl m-10 mx-auto p-4">
      <div className="text-base md:text-lg lg:text-xl xl:text-2xl flex pt-8 pb-8 justify-center items-center font-serif">
        This Program is Best Suited For
      </div>
      <Slider {...settings}>
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 max-w-xs mx-auto">
          <div className="flex items-center mb-4">
            <a href="https://www.linkedin.com/in/chandan-reddy-k/">
              <img
                className="w-12 h-12 rounded-full  border-2 border-pink-300 shadow-md object-cover"
                src="https://media.licdn.com/dms/image/v2/D5603AQFKh_OrZYmwdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679014143228?e=2147483647&v=beta&t=JhufFAeTlIm5xjI7gs5lccmbTBVN6FEGvZa5R1RVa7Q"
                alt="Shailesh's Avatar"
              />
            </a>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-pink-600">
                Chandan (cohort #2)
              </h2>
              <p className="text-sm text-gray-500">Working Professionals</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 overflow-x-hidden ">
            looking to transition into product roles from sales, testing,
            marketing, support, operations, business analysts, software
            development, consulting, program and project management. We have
            ample alumni stories of successful transitions.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 max-w-xs mx-auto">
          <div className="flex items-center mb-4">
            <a href="https://www.linkedin.com/in/shailesh-prithani-a837b111/">
              <img
                className="w-12 h-12 rounded-full  border-2 border-pink-300 shadow-md object-cover"
                src="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2"
                alt="Shailesh's Avatar"
              />
            </a>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-pink-600">
                Shailesh (cohort #7)
              </h2>
              <p className="text-sm text-gray-500">Entrepreneur</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            looking to develop a product mindset for their own ventures &
            increases their chances of creating successful products. Get the
            process, mindset and support network for your success. Entrepreneurs
            are often the first product managers in their startups.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 max-w-xs mx-auto">
          <div className="flex items-center mb-4">
            <a href="https://www.linkedin.com/in/abhishekmishra2014/">
              <img
                className="w-12 h-12 rounded-full  border-2 border-pink-300 shadow-md object-cover"
                src="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2"
                alt="Shailesh's Avatar"
              />
            </a>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-pink-600">
                Abhishek (cohort #2)
              </h2>
              <p className="text-sm text-gray-500">Founder</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300  overflow-y-hidden">
            looking to supercharge their careers with right mentorship, support
            and structured knowledge of product management. Many of our to Sr
            PM, Group PM and Product Leadership roles at companies like
            Microsoft, Freshworks, TATA etc.
          </p>
        </div>
      </Slider>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-16 text-sm text-center">
          ✨ Start your journey of becoming a top product manager
        </p>
        <button
          type="button"
          className="mt-4 items-center justify-center text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Apply Now →
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
