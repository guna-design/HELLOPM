import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "animate.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const faqData = [
    {
      question: "What is the application process?",
      answer:
        "Step 1: Make sure you have read all the program details on this page.\nStep 2: Use this link to submit your details for the application.\nStep 3: You can now complete the payment or you can schedule a 1:1 counselling call with one of our mentors.",
    },
    {
      question: "How many learners are enrolled in a cohort?",
      answer: "We enroll about 50 learners in a cohort.",
    },
    {
      question: "What is the fee structure (pricing) of the program?",
      answer:
        "The fees of the complete program will be INR 50,000/- plus 18% GST or USD 850 (for international students). The fees can be paid in one of the three ways: No cost EMIs options for up to 9 months (About Rs 6500 per month), 2 instalments of Rs 25000/- in two months (Rs 29500/- inclusive of GST) (send a mail to avail this), or lumpsum amount of Rs 50,000 + 18% GST = 59000/-. Refund Policy: All the amount paid can be refunded within 10 days of commencement of the cohort by reaching out to info@hellopm.co.",
    },
    {
      question: "What are the timings and schedule?",
      answer:
        "Two new cohorts are starting from 22nd September, 2024. Cohort 34 Timings: 12:00 PM to 2:00 PM, Saturday and Sunday - Indian Standard Time. Cohort 35 Timings: 8:00 AM to 10:00 AM Saturday and Sunday (Pacific Time) OR 8:30 PM to 10:30 PM Saturday and Sunday (Indian Standard Time) - Preferred for International Students.",
    },
    {
      question: "Can I fast track my learnings in a shorter time-period?",
      answer:
        "Yes. For people who are more aggressive about their transition and learning, we can open the access for all the recordings of our past cohorts to help them fast track their learnings.",
    },
    {
      question: "Do I get a certification after the program?",
      answer:
        "Yes, we offer a certificate of completion once you finish all assignments and score above benchmarks.",
    },
    {
      question: "What kind of job assistance will be provided in this program?",
      answer:
        "We have a dedicated module for 'Cracking into PM roles'. In this module you will get 1:1 Review and Optimization of your resume, creation of product portfolio, understanding on how to answer various product management interview questions, mock interviews, access to internal job board where referrals, open opportunities and job from our alumni are published regularly. You will also become a part of our slack group and WhatsApp group where we keep on sharing Product Management Opportunities. Mentorship help and support will also continue after the program for a period of 2 years.",
    },
    {
      question:
        "Will I be able to complete this program alongside my fulltime job?",
      answer:
        "Yes, we have designed the program to make it suitable for full-time professionals. Sessions are conducted on weekends and can also be watched later through the learning dashboard. Yes, you have to work harder than your normal week but isn't developing a strong product skillset worth the efforts?",
    },
    {
      question: "What is the selection criteria?",
      answer:
        "You do not need to have any prior product or tech experience in order to enroll for the program. Apart from a strong desire to learn and willingness to be helpful to others around you, you should have a good internet connection to participate in the program.",
    },
    {
      question: "What support can I get after the program?",
      answer:
        "All the cohort members are eligible for the following benefits after the program completion:\n1. Access to course materials (Live lectures, ppts, cheatsheets, write-ups, etc.) for this and any related program we conduct in the future.\n2. Access to community events and masterclasses conducted from time to time by HelloPM and its partners.\n3. Access to slack community.\n4. Access to product job board.\n5. Availability-based access to mentors.\n6. Access to office hours every week where you can interact with mentors.",
    },
    {
      question: "How is the program delivered?",
      answer:
        "The program will be delivered primarily through live lectures (two sessions of 2-hours each on weekends), pre-reads, some videos, and assignments. All live lectures will be recorded and made available on the learning dashboard.",
    },
    {
      question:
        "What happens if I cannot attend the live sessions? Do I get recordings?",
      answer:
        "You will have access to all the recordings of the live lectures in your dashboard on the same day. There are many other opportunities to interact through other live events with our instructors and other fellow students. You can bring all your questions to office hours which are conducted from 9 PM (IST) every Thursday.",
    },
    {
      question: "I am a student/fresher, can this program help me?",
      answer:
        "Yes. This course doesn't need prior experience in product roles (although that can be really helpful). If you are a student or fresher who is willing to work hard to get into product management, you should join this course to save hours of time with structured learning and expert mentorship.",
    },
    {
      question:
        "Will I get to ask questions directly to instructors like Ankit, Gagan, Naivedya, Sugat, Vennela, and Vishal?",
      answer:
        "Yes. During the live classes, the instructor will be available to take any of your questions related to the topic. Instructors are also available on our slack group and office hours to help you with your queries and provide mentorship.",
    },
    {
      question:
        "How much time should I set aside to participate in the course?",
      answer:
        "This is an outcome-oriented, immersive program and requires you to commit about 12-15 hours every week. 4 Hours for attending the live sessions and additional 8-12 hours to complete reading material and assignments.",
    },
    {
      question:
        "Are there any success stories? Can I connect with past alumni?",
      answer:
        "This is a proven outcome-driven program. Almost all of our past candidates were able to transition, many of them have even received multiple offers from companies. You can find our alumni here on this page. We have also included their LinkedIn profile to help you connect with them directly.",
    },
    {
      question: "I have more questions, where can I ask?",
      answer: "Please send an email to info@hellopm.co with your query.",
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        {faqData.slice(0, 5).map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left p-4 bg-purple-100 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-purple-800">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "max-h-96 opacity-100 "
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 mt-2 bg-white rounded-lg shadow-md">
                <p className="text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        {!showAll && (
          <button
            className="w-full text-center p-4 bg-purple-200 text-purple-700 rounded-lg shadow-lg mt-4"
            onClick={toggleShowAll}
          >
            Show More
          </button>
        )}

        {showAll &&
          faqData.slice(5).map((faq, index) => (
            <div key={index + 5} className="mb-4">
              <button
                className="w-full text-left p-4 bg-purple-100 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index + 5)}
              >
                <h3 className="text-lg font-semibold text-purple-800">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index + 5 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index + 5
                    ? "max-h-96 opacity-100 "
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 mt-2 bg-white rounded-lg shadow-md">
                  <p className="text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

        {showAll && (
          <button
            className="w-full text-center p-4 bg-purple-200 text-purple-700 rounded-lg shadow-lg mt-4"
            onClick={toggleShowAll}
          >
            Show Less
          </button>
        )}
        <button
          type="button"
          className="mt-4 flex-wrap items-right justify-end text-white bg-gradient-to-r from-purple-100 via-purple-500 to-purple-600 hover:bg-gradient-to-br  dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Apply Now →
        </button>
      </div>
    </>
  );
};

export default FAQ;
