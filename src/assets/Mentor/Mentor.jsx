import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";
import GuestMentor from "./GuestMentor";

const cards = [
  {
    name: "Ankit Shukla",
    image: "https://hellopm.co/wp-content/uploads/2023/04/ankit_dp-min.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2022/06/ankit_companies.png",
    ],
    description:
      "Previously in product & growth leadership roles at Scaler, INDmoney, and SHEROES for 8 years. Grew InterviewBit (Scaler) from 250K to 3.5M monthly active users in a year. Grew INDmoney from 10K to 500K users in a year. Will be leading the product thinking and growth modules in the program.",
  },
  {
    name: "Gagan Mahajan",
    image: "https://hellopm.co/wp-content/uploads/2023/04/gagan_dp-min.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2022/06/gagan_companies.png",
    ],
    description:
      "Currently working as a Director of Product Management at Meesho. Built and scaled popular products such as Meesho Ecommerce, Grofers (now BlinkIT), and SHEROES from scratch to more than a million users. Will be taking sessions on product roadmaps, OKRs, working with different stakeholders, and prioritization.",
  },
  {
    name: "Naivedya Jain",
    image: "https://hellopm.co/wp-content/uploads/2023/04/naivedya_dp-min.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2022/06/naivedya_companies.png",
    ],
    description:
      "Extensive experience of leading both B2B and B2C products in fintech space. Worked at leading fintechs like PayTM and INDmoney as a product manager to create the lending vertical from scratch, generated leads worth more than USD 50mn in a single quarter. Will be taking sessions on wireframing and PM tools.",
  },
  {
    name: "Sugat Nayak",
    image: "https://hellopm.co/wp-content/uploads/2023/04/sugat_dp-min.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2023/04/sugat_companies.png",
    ],
    description:
      "Currently working as a Product Manager at Meta (Facebook) - London. Popular for his videos around cracking interviews at companies like Google, Uber, Amazon etc. Sugat will lead the module on 'Cracking into PM Roles'.",
  },
  {
    name: "Vennela Miryala",
    image: "https://hellopm.co/wp-content/uploads/2023/04/vennella_dp-min.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2023/04/venella_companies.png",
    ],
    description:
      "An entrepreneur and product leader. Worked in leadership product roles at Meesho, Lending Kart, and Zaggle. Known for her solid user empathy and storytelling skills. Vennela will be leading sessions on Storytelling for product managers, and user and market research.",
  },
  {
    name: "Vishal Baghla",
    image: "https://hellopm.co/wp-content/uploads/2023/04/vishal_dp-min.png",
    companyLogos: [
      "https://hellopm.co/wp-content/uploads/2023/04/vishal_companies.png",
    ],
    description:
      "AVP product management at Ambition Box. 8+ years of product and data experience. Setup data team and Led data product management at INDmoney and Alvarez in the past. Will be taking sessions on Product Analytics.",
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
    updateItemsPerSlide();
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

function Mentor() {
  return (
    <>
      <div className="bg-pink-50 w-full flex flex-col items-center p-6">
        <div className="w-full mb-6 flex flex-col lg:flex-row lg:items-center">
          <div className="flex-1 text-center ">
            <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl text-pink-800 font-serif">
              Meet Your Instructors & Mentors
            </h2>
            <p className="mb-10 m-3 font-medium md:text-base xl:text-lg text-sm pt-5 text-gray-500">
              A highly curated pool of senior product leaders. Each of our
              mentors has at least 7 years of experience.
            </p>
          </div>
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
        </div>
      </div>

      <GuestMentor />
    </>
  );
}

export default Mentor;
