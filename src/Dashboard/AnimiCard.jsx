import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AnimiCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600, 
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, 
    pauseOnHover: true,
    fade: false,
    swipeToSlide: true,
    adaptiveHeight: true,
    centerMode: true,
    arrows: true,
    cssEase: "ease-in-out", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="max-w-6xl mx-auto p-4 ">
      <div className="text-base md:text-lg lg:text-xl xl:text-2xl flex pt-8 pb-8 justify-center items-center font-serif">
        Our Alumni Work At
      </div>
      <Slider {...settings}>
        {[
          "https://www.guvi.in/build/q-CI4G0KVI.webp",
          "https://www.guvi.in/build/q-CaiTJrVL.webp",
          "https://www.guvi.in/build/q-CcuApo3v.webp",
          "https://www.guvi.in/build/q-DBQNbFJb.webp",
          "https://www.guvi.in/build/q-DfxxECte.webp",
          "https://www.guvi.in/build/q-iaB_zEjn.webp",
          "https://www.guvi.in/build/q-HkA_wr5g.webp",
        ].map((src, index) => (
          <button
            key={index}
            type="button"
            className="focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg inline-flex justify-center w-full text-center p-2"
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] transition-transform duration-300 hover:scale-110 rounded-md shadow-lg" // Adjust width and scale on hover
            />
          </button>
        ))}
      </Slider>
    </div>
  );
};

export default AnimiCard;
