import React, { useEffect } from 'react';

import "./App.css";
import Application from "./assets/Application/Application ";
import BenefitsTabs from "./assets/ChooseHello/BenifitsData";
import ChoseHello from "./assets/Hello/ChoseHello";
import Mentor from "./assets/Mentor/Mentor";

import Curriculam from "./assets/Slider/Curriculam";

// import CustomCursor from "./Cursor/Cursor";
// import DraggableComponent from "./Cursor/Cursor";

import AlumniSlider from "./Dashboard/AluminiSlider";
import AnimiCard from "./Dashboard/AnimiCard";
import Dashboard from "./Dashboard/Dashboard";

import Pagesection from "./Dashboard/Pagesection";
import ProgramCard from "./Dashboard/ProgramCard";
import Footer from "./Footer/Footer";
import FAQ from "./FreqQue/FreqQue";
import InquiryBot from "./inquiry/inquiry";

import Navbar from "./Navbar/Navbar";

function App() {
  useEffect(() => {
    // Disable console functions
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};

    return () => {
      // Restore console functions if needed
      console.log = console.__proto__.log;
      console.warn = console.__proto__.warn;
      console.error = console.__proto__.error;
    };
  }, []);

  return (
    <div className="App">
      <>
     <Navbar />
    <Dashboard/>
     
      <Pagesection />
      <AnimiCard />
      <ProgramCard />
      <AlumniSlider />
      <ChoseHello />
      <BenefitsTabs />
      <Curriculam /> <InquiryBot/>
      <Mentor />
      {/* <DraggableComponent /> */}
      {/* <CustomCursor /> */}
      <Application />
      <FAQ />
     
      <Footer />
    </>
    </div>
  );
}

export default App;
