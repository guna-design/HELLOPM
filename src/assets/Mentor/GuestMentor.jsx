import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";

const cards = [
  {
    name: "Vivek Bharadwaj",
    image: "https://hellopm.co/wp-content/uploads/2023/04/vivek.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2022/06/ankit_companies.png",
    ],
    description: "Product Management - Google, PayTM, Streamoid & Zomato.",
  },
  {
    name: "Paras Chopra",
    image: "https://hellopm.co/wp-content/uploads/2023/04/paras.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2022/06/gagan_companies.png",
    ],
    description: "Founder & Chairman - Wingify. Forbes 30 under 30.",
  },
  {
    name: "Sanyal C",
    image: "https://hellopm.co/wp-content/uploads/2023/04/sanyal.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2022/06/naivedya_companies.png",
    ],
    description: "Product Management - Amazon, PayTM, & Equitas",
  },
  {
    name: "Gurucharan R",
    image: "https://hellopm.co/wp-content/uploads/2023/04/guru.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2023/04/sugat_companies.png",
    ],
    description: "Author | Senior Product Manager - Microsoft",
  },
  {
    name: "Mikul Patel ",
    image: "https://hellopm.co/wp-content/uploads/2023/04/animesh.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2023/04/venella_companies.png",
    ],
    description: "Senior Global Product Manager - Expedia",
  },
  {
    name: "Vishal Baghla",
    image: "https://hellopm.co/wp-content/uploads/2023/04/mikul.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2023/04/vishal_companies.png",
    ],
    description: "Product Management - Microsoft & BrowserStack.",
  },
];

const Card = React.memo(({ name, description, image, companyLogos }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-pink-400 border border-transparent">
    <img
      src={image}
      alt={`${name}'s profile`}
      className="w-28 h-28 rounded-full object-cover border-4 border-pink-300 shadow-md"
    />
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <div className="flex space-x-2 justify-center mt-2">
      {companyLogos.map((logo, index) => (
        <img key={index} src={logo} alt="company logo" className="h-8" />
      ))}
    </div>
    <p className="text-gray-700 text-sm mt-2">{description}</p>
  </div>
));

const Slider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const updateItemsPerSlide = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      // Mobile view
      setItemsPerSlide(1);
    } else {
      setItemsPerSlide(3);
    }
  };

  useEffect(() => {
    updateItemsPerSlide(); // Set initial items per slide
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const groupedSlides = [];
  for (let i = 0; i < React.Children.count(children); i += itemsPerSlide) {
    groupedSlides.push(
      React.Children.toArray(children).slice(i, i + itemsPerSlide)
    );
  }

  const totalSlides = groupedSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  }, [totalSlides]);

  useEffect(() => {
    const handleResize = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden" ref={slideRef}>
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
        >
          {groupedSlides.map((group, index) => (
            <div key={index} className="w-full flex-shrink-0 flex">
              {group.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`w-${12 / itemsPerSlide}/12 p-2`}
                >
                  {slide}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#10095;
      </button>
    </div>
  );
};

function GuestMentor() {
  return (
    <>
      <div className="bg-pink-100 w-full flex flex-col items-center p-6">
        <div className="w-full mb-6 flex flex-col lg:flex-row lg:items-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Slider>
              {cards.map((card, index) => (
                <div key={index} className=" flex-shrink-0 p-2">
                  <Card
                    name={card.name}
                    description={card.description}
                    image={card.image}
                    companyLogos={card.companyLogos}
                  />
                </div>
              ))}
            </Slider>
          </Suspense>

          <div className="flex-1 text-center  ">
            <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl text-pink-800 font-serif">
              Guest Mentors
            </h2>
            <p className="mb-10 m-3 font-medium md:text-base xl:text-lg text-sm pt-5 text-gray-500">
              Top product leaders, and entrepreneurs who share their journeys
              and challenges with community members in live sessions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestMentor;
