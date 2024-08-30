import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlumniSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const alumniData = [
    {
      name: "Mansi Gupta",
      title: "PM - Quintype Technologies",
      stars: 5,
      description:
        "A balance of structured concepts and real-world applications through connects with industry incumbents.",
      transition: "QA/Testing → Product Management",
      imgSrc:
        "https://hellopm.co/wp-content/uploads/2023/04/1596446164654.jpeg",
      linkedIn:
        "https://www.linkedin.com/checkpoint/challengesV2/AQFVCfzaEkBHcgAAAZGUUU8JKFQM3uJEUgL-L-AWBmddbtDcVenK3gTV4gMkVtS5CA7WuEV5vF9wc6f1G8NEbp9Kb8HR2wtGkA?original_referer=https%3A%2F%2Fhellopm.co%2F",
      Youtube: "https://www.youtube.com/watch?v=JHi70jv7YoM",
    },
    {
      name: "Mayank Joshi",
      title: "APM - Imarticus",
      stars: 5,
      description:
        "I’d strongly recommend this cohort to anyone who wants to get deeper into PM. Immense P2P learning with great mentors.",
      transition: "Sales → Product Management",
      imgSrc: "https://hellopm.co/wp-content/uploads/testimonial_images/18.png",
      linkedIn: "https://hellopm.co/wp-content/uploads/2021/03/174857.png",
    },
    {
      name: "Chetan Khunt",
      title: "PM - SpotDraft",
      stars: 5,
      description:
        "HelloPM instilled in me the core of product management. All the skills and mindsets required to be a PM were taught.",
      transition: "Development → Product Management",
      imgSrc: "https://hellopm.co/wp-content/uploads/testimonial_images/10.png",
      linkedIn: "https://hellopm.co/wp-content/uploads/2021/03/174857.png",
    },
    {
      name: "Chandan Reddy",
      title: "PM - CRED",
      stars: 5,
      description:
        "It really helped me to 10X my PM knowledge. Would definitely recommend to anyone who is aspiring to be a PM.",
      transition: "Development → Product Management",
      imgSrc: "https://hellopm.co/wp-content/uploads/testimonial_images/30.png",
      linkedIn: "https://hellopm.co/wp-content/uploads/2021/03/174857.png",
    },
    {
      name: "Anish Manoharan",
      title: "TPM - Helmut Global Germany",
      stars: 5,
      description:
        "Participating in the program was a game-changer for me. It completely shifted my perspective on Product Management and how I approach challenges",
      transition: "Development → Product Management",
      imgSrc:
        "https://hellopm.co/wp-content/uploads/2024/05/1516963608051.jpeg",
      linkedIn: "https://hellopm.co/wp-content/uploads/2021/03/174857.png",
    },
    {
      name: "Nisha Balmiki",
      title: "PM - Micro",
      stars: 5,
      description:
        "To anyone who wants to start a career or wants to upskill themselves in Product Management should consider HelloPM.",
      transition: "Customer Support → Product Management",
      imgSrc: "https://hellopm.co/wp-content/uploads/testimonial_images/12.png",
      linkedIn: "https://hellopm.co/wp-content/uploads/2021/03/174857.png",
    },
  ];

  return (
    <div className="max-w-7xl p-5 bg-purple-100 mx-auto py-10">
      <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl flex justify-center items-center font-serif ">
        Meet Our Alumni
      </h2>
      <Slider {...settings}>
        {alumniData.map((alumni, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full   border-2 border-pink-300 shadow-md object-cover"
                  src={alumni.imgSrc}
                  alt={`${alumni.name}'s Avatar`}
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                    {alumni.name}
                  </h2>
                  <p className="text-sm text-gray-500">{alumni.title}</p>
                </div>
                <a
                  href={alumni.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" ml-auto"
                >
                  <img
                    src="https://hellopm.co/wp-content/uploads/2021/03/174857.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {alumni.description}
              </p>
              <a
                href={alumni.Youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto"
              >
                <span className="flex text-xs gap-2 items-center">
                  {" "}
                  <img
                    src="https://th.bing.com/th?id=ODLS.b025e722-4d2d-48a8-8181-422e22a04d81&w=32&h=32&qlt=90&pcl=fffffa&r=0&o=6&pid=1.2"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                  WATCH THE STORY
                </span>
              </a>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {alumni.transition}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex flex-col items-center justify-center">
        <p className="mt-16 text-sm text-center">
          ✨ Read & Watch More Success Stories of Our Alumni
        </p>
        <button
          type="button"
          className="mt-4 items-center justify-center text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Read More Reviews →
        </button>
      </div>
    </div>
  );
};

export default AlumniSlider;
