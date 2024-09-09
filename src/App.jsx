import Header from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Navbar from "./Components/NavbarSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectSection from "./Components/ProjectSection";
import EducationSection from "./Components/EducationSection";
import FooterSection from "./Components/FooterSection";

const App = () => {
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
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
      </div>
      <FooterSection />
    </>
  );
};

export default App;
