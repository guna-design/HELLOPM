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

import Pagesection from "./Dashboard/Pagesection";
import ProgramCard from "./Dashboard/ProgramCard";
import Footer from "./Footer/Footer";
import FAQ from "./FreqQue/FreqQue";
import InquiryBot from "./inquiry/inquiry";

import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
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
  );
}

export default App;
