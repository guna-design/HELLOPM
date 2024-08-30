import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Curriculam = () => {
  const swiperRef = useRef(null);
  const [activeCards, setActiveCards] = useState([]);

  const featuresData = [
    {
      week: "Week 1 and 2",
      title: "Introduction to Product Management & Product Thinking",
      list: [
        "Learn about responsibilities and workflow for product roles in B2B v/s B2C, Startups v/s Enterprises.",
        "Different types of Product Manager roles and Common myths about them.",
        "Different types of Product Manager roles and Common myths about them.",
        "The 6D product management process.",
        "Product thinking and how to develop product sense.",
        "Problem space v/s Solutions space.",
        "How to suggest improvements to any product.",
      ],
      header: "Case studies and examples from",
      img: "https://hellopm.co/wp-content/uploads/2023/01/module_1.png",
      outcome:
        "🎖️ Outcome: After completing this module you’ll have a clear idea of product management roles in various types of companies, and the required skillsets to excel in these roles. You'll start developing a product mindset.",
      handson:
        "✨ Hands-on assignment: Map your PM skills. Create the complete strategy to improve a given product (Example submission - Improving Linkedin learning by Cohort Member Abhishek Gupta)",
    },
    {
      week: "Week 3, and 4",
      title: "User & Market Research - Product Discovery",
      list: [
        "Learn how to discover, validate and articulate impactful user problems.",
        "Finding product opportunities with surveys, user interviews and secondary research.",
        "Converting the research into artifacts such as user personas, customer journey maps, and empathy maps.",
        "Jobs to be done (JTBD), 5 Why, Form v/s Functions.",
        "Minimum Viable Product",
        "Competitive research & market analysis.",
        "Porter's 5 forces to create a differentiated proposition.",
      ],
      header1: "Tools & Product covered",
      img1: "https://hellopm.co/wp-content/uploads/2023/05/figwhim.png",
      header: "Case studies and examples from",
      img: "https://hellopm.co/wp-content/uploads/2023/01/module_2.png",
      outcome:
        "🎖️ Outcome: You’ll have a solid methodology to conduct user research, market research, analyse competitors and learn about industry and the background of the company you are aspiring for. You’ll understand the necessity of user research and various best practices to conduct exhaustive user research and turn in into user personas and actionable user journey maps",
      handson:
        "✨ Hands-on assignment: Conduct exhaustive user and market research to help a company enter a new domain.(Example submission - How Youtube can get into Edtech by Cohort Members Jahanvi and Team)",
    },
    {
      week: "Week 5, 6 and 7",
      title: "Product Analytics",
      list: [
        "Important product metrics for various business types.",
        "North star metrics.",
        "How to decide the right metrics for any product & feature.",
        "Optimizing User Flows.",
        "Funnels.",
        "Segmentation.",
        "Cohort Analysis.",
        "A/B Testing & Experimentation.",
        "Actionable insights on improving your product with analytics.",
      ],
      header: "Case studies and examples from",
      img: "https://hellopm.co/wp-content/uploads/2023/01/module_5.png",
      header: "Tools & Products covered",
      img: "https://hellopm.co/wp-content/uploads/2021/03/w7.png",
      outcome:
        "🎖️ Outcome: You’ll develop a sense of objectivity towards features, and will be able to choose the right metrics to drive product success and measure outcomes. You’ll become familiar with two popular analytics tools Mixpanel & GA.",
      handson:
        "✨ Hands-on assignment: Find important business and product metrics for a given product in a given situation.(Example submission - Collaboration between Langy's Leadership and Zomato's Data by Rashmi and Team)",
    },
    {
      week: "Week 8 and 9",
      title: "Product Roadmap & Execution",
      list: [
        "Product Strategy and Vision.",
        "How to build your product roadmap.",
        "OKRs (Objective and Key Results).",
        "Prioritization with RICE and KANO.",
        "Visual example of roadmap.",
        "Product discovery and delivery.",
        "Agile, Scrum, and User Stories.",
        "Release and analysis.",
        "Stakeholder Management - Working with designers, developers, QAs, Sales, Marketing, Category Managers, Customer Support & Management/Senior Leadership.",
      ],
      header: "Case studies and examples from",
      img: "https://hellopm.co/wp-content/uploads/2023/01/module_4.png",
      header: "Case studies and examples from",
      img: "https://hellopm.co/wp-content/uploads/2023/01/pm_tools.png",
      outcome:
        "🎖️ Outcome: You’ll will have clear understanding of how to excel at strategic and execution responsibilities of PM and how to lead cross-departmental teams without authority. This module will help you ship the right things at the right time.",
      handson:
        "✨ Hands-on assignment: Create a product strategy, roadmap, PRD and Stakeholder Management Plan for a given vision (Example submission - Product Strategy, PRD, Roadmap and Stakeholder Management Plan for a Product Management Suite by Anjana and Team)",
    },
    {
      week: "Week 10, and 11",
      title: "Growth, User Acquisition & Product Marketing",
      list: [
        "Product Led Growth.",
        "How to solve growth and retention problems with product mindset.",
        "Growth loops and Growth flywheels.",
        "Customer Journey with AARRR (Pirate Framework).",
        "Acquisition: Network Effects, Virality & Referrals.",
        "Activation, Onboarding and creating Aha moments.",
        "Building Retention in product with various business models.",
        "Creating habit forming products with BJ Foggs Model.",
        "Pricing strategies and business models.",
        "Composition of Growth Teams.",
      ],
      header: "Case studies and examples from",
      img: "https://hellopm.co/wp-content/uploads/2023/01/module_3.png",
      outcome:
        "Outcome: You'll have an in-depth understanding of how product growth works. You'll be able to create an actionable growth & engagement plan for any product.",
      handson:
        "✨ Hands-on assignment: Create growth strategy and suggest growth features the given product (Example submission - Growth and Engagement Teardown for HealthifyMe by Aquib and Vivian)",
    },
    {
      week: "Week 12, and 13",
      title: "Technology 101 for PMs",
      list: [
        "Need of Technology for Product Managers.",
        "How internet works.",
        "3 Layer Architecture: Front-end, Databases & Backend.",
        "Popular Tech Stacks: Google, Twitter, & Product Hunt.",
        "Storage and Databases.",
        "How to use SQL as a Product Manager.",
        "System Design of Popular Apps: Instagram & Youtube.",
        "Technology behind Mobile Apps.",
        "Git, GitHub and Deployment Management.",
        "Introduction to Cloud Services & AI/ML product management.",
        "Working well with Engineers.",
      ],
      header: "Case studies and examples from",
      img: "https://hellopm.co/wp-content/uploads/2023/01/tech_101.png",
      header: "Tools & Products covered",
      img: "https://hellopm.co/wp-content/uploads/2023/01/tech_tools.png",
      outcome:
        "🎖️ Outcome: You’ll understand various parts of a digital product and will develop a general understanding of technology required to excel in your role. You’ll start to understand the language of other teams and communicate ideas visually.",
      handson:
        "✨ Hands-on assignment: Perform Tech assessment for a given product on given parameters (Example submission - Working on Tech Assessment for Reddit by Sunanda)",
    },
    {
      week: "Week 14 and 15",
      title: "Getting into a PM role",
      list: [
        "  How to break into Product Management from different backgrounds.  ",
        " Crafting the perfect resume.   ",
        "  Optimizing Linkedin profile for Networking.  ",
        "   Common interview questions. ",
        "   Product design questions. ",
        "  Guesttimate questions.  ",
        "  Metrics questions.  ",
        "   Behavioral questions. ",
        " Product strategy questions.   ",
        "  Strategies for take home product assignment case studies.  ",
        "  Creating a product portfolio.  ",
        "  Negotiating job offers.  ",
      ],

      subtitle: "Activities",
      list1: [
        "Product portfolio creation.  ",
        "Expert resume review.  ",
        " Interview practice on portal. ",
        " Mock interviews. ",
      ],
      outcome:
        "🎖️ Outcome: You'll know how to improve your resume, find right product opportunities, increase the chances of your resume getting shortlisted. Be confident about product management interviews.",
    },
    {
      week: "Tools",
      title: "Design & Wireframing Tools",
      para: "Figma, Whimsical & Draw.io",
      title: "Product Execution Management Tools",
      para: "Jira & Asana",
      title: "Product Analytics Tools",
      para: "Google Analytics 4, Mixpanel & SQL",

      outcome:
        "Outcome: You'll be well versed with all the tools of the trade, with hands-on practice and projects.",
    },
    {
      week: "Bonus Module 1",
      title: "UX and UI for Product Managers",
      list: [
        "Product design principles & best practices.  ",
        " How to create wireframes and prototypes. ",
        "The Psychology behind successful products.  ",
        " How to work effectively with designers. ",
        " How to practice product design teardowns. ",
      ],
      subtitle: "Activities and Cases",
      list1: [
        "Product Teardown on ChatGPT, Swiggy and Youtube.  ",
        "Build Wireframes with Figma. ",
        " Design Critique Exercise. ",
      ],
      outcome:
        "Outcome: You'll understand the complete product design process, how to create delightful user experiences and work effectively with designers.",
    },
    {
      week: "Bonus Module 2",
      title: "AI and ML for Product Managers",
      list: [
        " Fundamentals of LLMs, Vector Databases, and Other Tech Concepts ",
        " AI Product Development Life Cycle. ",
        " Creating your own AI Model and ChatBot. ",
        " End to end process of implementing AI in your products. ",
        " How to use AI for your productivity as a Product Manager. ",
      ],
      subtitle: "Activities and Cases",
      list1: [
        "How Generative AI Products like ChatGPT works.  ",
        "Fine-tuning learning models at Meesho.",
        " Create your own AI powered chatbot. ",
      ],
      outcome:
        "Outcome: You'll get confident with essential AI and ML related tech terms, and understand the skills needed to become an AI product Manager",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCards((prev) => [...prev, entry.target.dataset.index]);
          } else {
            setActiveCards((prev) =>
              prev.filter((index) => index !== entry.target.dataset.index)
            );
          }
        });
      },
      {
        threshold: 1,
      }
    );

    document.querySelectorAll(".scroll-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl flex justify-center items-center font-serif">
        Curriculum
      </h2>
      <p className="text-center mb-10 m-3 font-medium md:text-base xl:text-lg text-sm pt-5 text-gray-500">
        15 weeks of intensive learning in product management and growth. Learn
        the art of building and growing products that your users will love.
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {featuresData.map((feature, index) => (
          <SwiperSlide key={index}>
            <div
              className={`scroll-card bg-white p-8 rounded-lg shadow-2xl  m-2 dark:bg-gray-800 transition-all duration-700 ease-in-out max-h-64 overflow-auto scrollbar-hide ${
                activeCards.includes(index.toString()) ? "max-h-[500px]" : ""
              }`}
              data-index={index}
            >
              <h1 className="font-bold text-xl text-pink-600 dark:text-white mb-2">
                {feature.week}
              </h1>
              <h4 className="font-bold text-base text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>

              {Array.isArray(feature.list) ? (
                <ul className="list-disc list-inside font-light text-xs text-gray-600 dark:text-gray-300 mb-4">
                  {feature.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.list}
                </p>
              )}

              <h5 className="text-gray-600 text-sm font-semibold dark:text-gray-300 mb-4">
                {feature.header}
              </h5>
              <img src={feature.img} className="w-full mb-4 rounded-lg" />
              <div className="bg-gradient-to-r from-violet-300 to-pink-500 p-4 rounded-xl shadow-2xl backdrop-blur-lg bg-opacity-50">
                {feature.outcome && (
                  <p className="font-light text-xs text-white mb-2">
                    {feature.outcome}
                  </p>
                )}
                {feature.handson && (
                  <p className="text-white font-light text-xs dark:text-gray-300">
                    {feature.handson}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button
          type="button"
          className="mt-4 flex items-center justify-center w-12 h-12 text-sm font-medium text-black bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 rounded-full transition-all duration-500 ease-in-out hover:w-40 hover:rounded-lg focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 hover:scale-105 animate-pulse"
        >
          <span className="overflow-hidden whitespace-nowrap transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
            → Apply Now
          </span>
        </button>
      </Swiper>
    </div>
  );
};

export default Curriculam;
