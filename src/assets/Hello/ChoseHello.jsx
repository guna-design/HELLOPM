import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ChoseHello = () => {
    const swiperRef = useRef(null);
  
    const featuresData = [
  
     
            {
              title: "Live & Interactive Learning Sessions",
              paragraph: "100+ hours of content including 4 hours of live sessions over Zoom every week with top product leaders. Ask your questions, discuss and interact directly with people who have been there and done that.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/featuee_1_a.png"
            },
            {
              title: "Learn From Real Product Managers & Leaders",
              paragraph: "Product Management can only be taught by people who have themselves done it. Learn from product people from companies like LinkedIn, Google, Facebook, Walmart, Sealer, Microsoft, etc.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_2.png"
            },
            {
            title: "Learn From Real Product Managers & Leaders",
              paragraph: "Product Management can only be taught by people who have themselves done it. Learn from product people from companies like LinkedIn, Google, Facebook, Walmart, Sealer, Microsoft, etc.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_3.png"
            },
            {
              title: "Interview Preparation & Career Support",
              paragraph: "You will get access to 1:1 resume review, an exhaustive interview preparation module with live sessions and mock interviews. We have a referral network of 600+ alumni to help you find an opportunity.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_4.png"
            },
            {
              title: "Premium Community & Support Network",
              paragraph: "Community is the core of this program. Peer learning through live sessions, group assignments and break-out room activities. You will interact with alumni through office hours, case study and product contests.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_5.png"
            },
            {
              title: "Hands-on & Practical Learning by Doing",
              paragraph: "The best way to learn is to learn by doing. 50+ Assignments, practical and real-life examples help you learn practically by getting your hands dirty. We will help you create your own product portfolio.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_6.png"
            },
            {
              title: "Flexible Schedule & Free Transfers",
              paragraph: "Weekend sessions to accommodate working professionals. The recordings & resources will be available on the same day. You can access recordings from the past cohorts to fast-track your completion. Transfer from one cohort to another is free.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_7.png"
            },
            {
              title: "In-depth Understanding of Tools",
              paragraph: "Hands-on learning of all the top tools like Miro, Jira, Google Analytics, Figma, Whimsical, Hotjar, and more. You will gain access to these tools for free through our partner or freemium program.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_8.png"
            },
            {
              title: "Practical Case Study Based Learning",
              paragraph: "We use Harvard's case study based approach to teach all the important concepts. All the sessions are power packed with case studies to understand the real-life scenarios of all product management frameworks and concepts.",
              link: "https://hellopm.co/wp-content/uploads/2023/04/feature_9.png"
            }
          
      ];
     
  
  
    return (
      <div className="  max-w-7xl mx-auto py-32 shadow-md">
        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl  flex justify-center items-center font-serif  '">Why Choose HelloPM?</h2>
        <p className="text-center mb-10 m-3 font-medium md:text-lg xl:text-2xl text-sm pt-5 text-gray-500">
          9 Reasons That Make Us The Most Practical Program on Product Management
        </p>
  
        {/* Swiper*/}
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
              <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
                <img src={feature.link} alt={feature.title} className="w-full mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.paragraph}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
       <div className='flex justify-center items-center text-xl font-bold'>swipe to see →</div>
        
      </div>
      
    );
  };
  
  export default ChoseHello;