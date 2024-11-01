import Header from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Navbar from "./Components/NavbarSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectSection from "./Components/ProjectSection";
import EducationSection from "./Components/EducationSection";
import FooterSection from "./Components/FooterSection";
import { useEffect, useState } from "react";
import img from "./Utils/web logo.png";
import logo from "./Utils/A_logo-transformed.png"
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="relative overflow-hidden bg-custom-hsla antialiased z-[10] flex flex-col justify-center items-center mb-[100vh]">
        <div
          className="z-[5] bg-[#2cf8ff] blur-[200px] rounded-[50%] w-[20rem] h-[20rem] block absolute 
        inset-[-4%_auto_auto_-13%] max-md:inset-[-1%_auto_auto_-23%] max-phone:blur-[150px] max-sm:w-[15rem] max-sm:h-[15rem] "
        ></div>
        <div
          className="z-[5] bg-[#2cf8ff] blur-[120px] rounded-[50%] w-[20rem] h-[20rem] block absolute mt-[9rem] 
        opacity-[0.5] inset-[0%_0%_auto_auto] max-lg:w-[8rem]  max-lg:inset-[12%_8%_auto_auto] max-lg:h-[15rem]   "
        ></div>
        <Header />
        <HeroSection />
        <Navbar />
        <AboutSection />
        <div className="absolute border-[1px] backdrop-filter-[40px] overflow-hidden bg-[#000000c0] border-gray-700 p-[10px]
           right-[38rem] z-[1000] font-montserrat text-white top-[90rem] text-xl rounded-[50%] ">
          <img
            src={img}
            alt=""
            loading="lazy"
            className="h-[8.125rem] w-[8.125rem]  top-0 animate-[spin_10s_linear_infinite]"
          />
          <img src={logo} className="absolute h-[2.3rem] w-[2.3rem]  top-[3.2rem] left-14 "/>
          {/* <span className="absolute left-[3rem] text-[0.8rem] top-[4rem]">HIRE ME</span> */}
          <div className="bg-[#2cf8ff] blur-[40px] top-[2rem] left-[2rem] opacity-50 absolute rounded-[50%] w-[5.25rem] h-[5.25rem] z-1 "></div>
        </div>
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
      </div>
      <FooterSection />
    </>
  );
};

export default App;
