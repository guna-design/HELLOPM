import "./App.css";
import React, { useEffect } from 'react';
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
    // Function to disable right-click
    const handleContextMenu = (e) => e.preventDefault();

    // Function to disable specific keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === 'u' || e.key === 'I')) e.preventDefault();
    };

    // Disable console functions
    const disableConsole = () => {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
    };

    // Enable console functions (optional)
    const restoreConsole = () => {
      console.log = console.__proto__.log;
      console.warn = console.__proto__.warn;
      console.error = console.__proto__.error;
    };

    // Add event listeners for disabling context menu and keyboard shortcuts
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Disable console functions on mount
    disableConsole();

    // Clean up event listeners and optionally restore console functions on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      restoreConsole();
    };
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;