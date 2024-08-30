import React, { useState } from 'react';
import 'animate.css';

const benefitsData = [
  {
    benefit: 'Curriculum',
    mostBootcamps: 'Interview-Focused & Theoretical Content',
    helloPM: '360-degree curriculum covering all facets of Product Management including growth, analytics, UX, problem solving, execution, and technology.'
  },
  {
    benefit: 'Instructor Expertise',
    mostBootcamps: 'Instructors often come from academic backgrounds with limited practical industry experience.',
    helloPM: 'Instructors are seasoned product leaders and entrepreneurs from top companies (MAANG, leading tech startups, top consulting firms), providing real-world insights and guidance.'
  },
  {
    benefit: '1:1 Personalized Support',
    mostBootcamps: 'Limited availability of personalized support.',
    helloPM: 'Built for personalized support through 1:1 calls, personalized assignment feedback, mocks, and tailored career roadmaps with mentors.'
  },
  {
    benefit: 'Community & P2P Learning',
    mostBootcamps: 'Limited to Slack and email groups.',
    helloPM: 'Active WhatsApp, Slack, and email groups. Group assignments, offline & online events, and cross-cohort contests for peer-to-peer learning.'
  },
  {
    benefit: 'Hands-on, Practical Learning',
    mostBootcamps: 'Limited to one course assignment/capstone project.',
    helloPM: '5 hands-on projects, a capstone project, and contests using real-world problems, facilitated by case studies, examples, and 1:1 Feedback.'
  },
  {
    benefit: 'Post Completion Support',
    mostBootcamps: 'Support for a period of one year through email and WhatsApp.',
    helloPM: 'Support for two years after program completion. Weekly live office hours and on-demand mentorship even after completing the program.'
  },
  {
    benefit: 'Offline Events & Meetups',
    mostBootcamps: 'One immersive event per batch.',
    helloPM: 'Regular immersive events & networking sessions across the globe including major hubs like San Francisco, Delhi NCR, Pune, Mumbai, Bangalore, Hyderabad.'
  },
  {
    benefit: 'Flexible Schedule',
    mostBootcamps: 'Available in self-paced programs. Re-admission required in live programs.',
    helloPM: 'Made for the flexibility of working professionals. Transfer between cohorts without any charges. Regular office hours for doubts and help.'
  },
  {
    benefit: 'Industry Connects',
    mostBootcamps: 'One-time connect after program completion.',
    helloPM: 'Industry connects throughout the programs through live sessions with top CXOs and founders. Case study contests with real companies. Strong alumni network across top product companies. Available during the program and two years post-completion.'
  },
  {
    benefit: 'Placement Assistance',
    mostBootcamps: 'Limited to job boards and limited mock interviews.',
    helloPM: 'Resume review, portfolio creation, mock interviews with experts, & interview preparation. Profile sharing & recommendations to product companies and alumni network post-program completion.'
  }
];

const TabContent = ({ data, animationClass }) => {
  return (
    <div className={`p-4 bg-gray-50 rounded-lg ${animationClass} shadow-md mt-4`}>
      <h3 className="font-bold text-lg mb-2 text-gray-700">{data.benefit}</h3>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h4 className="text-purple-800 font-medium">Most Bootcamps</h4>
          <p className="text-gray-600">{data.mostBootcamps}</p>
        </div>
        <div className="md:w-1/2">
          <h4 className="text-purple-800 font-medium">HelloPM Immersive Bootcamp</h4>
          <p className="text-gray-600">{data.helloPM}</p>
        </div>
      </div>
    </div>
  );
};

const BenefitsTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate__animated animate__fadeIn');

  // Function to handle tab change with animation
  const handleTabChange = (index) => {
    setAnimationClass('animate__animated animate__fadeOut');
    setTimeout(() => {
      setSelectedTab(index);
      setAnimationClass('animate__animated animate__fadeIn');
    }, 300); // time
  };

  return (
    <div className="py-16 max-w-4xl mx-auto p-4">
      <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl flex justify-center items-center font-serif pb-10">
        Why Choose HelloPM?
      </h2>

     {/* desktop view */}
      <div className="hidden md:flex flex-wrap justify-center md:space-y-0 md:space-x-2 grid-cols-3 grid-rows-3 gap-1 sm:gap-0 md:gap-4 lg:gap-6 xl:gap-8 items-center">
        {benefitsData.map((item, index) => (
          <button
            key={index}
            className={`py-2 px-4 w-full md:w-auto text-center rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none ${
              selectedTab === index
                ? 'bg-purple-100 text-purple-800 shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-purple-200'
            }`}
            onClick={() => handleTabChange(index)}
          >
            {item.benefit}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="relative">
          <select
            className="w-full p-3 text-purple-800 bg-purple-100 border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            value={selectedTab}
            onChange={(e) => handleTabChange(Number(e.target.value))}
          >
            {benefitsData.map((item, index) => (
              <option key={index} value={index}>
                {item.benefit}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TabContent data={benefitsData[selectedTab]} animationClass={animationClass} />
    </div>
  );
};

export default BenefitsTabs;
