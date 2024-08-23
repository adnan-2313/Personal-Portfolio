import Header from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Navbar from "./Components/NavbarSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectSection from "./Components/ProjectSection";
import EducationSection from "./Components/EducationSection";
const App = () => {
  return (
    <div className="relative  bg-custom-hsla  antialiased   border-red-900  z-[10] flex flex-col justify-center items-center  ">
      <div className="z-[5] bg-[#2cf8ff] blur-[200px] rounded-[50%] w-[20rem] h-[20rem] block absolute inset-[-4%_auto_auto_-13%]"></div>
      <div className="z-[5] bg-[#2cf8ff] blur-[200px] rounded-[50%] w-[20rem] h-[20rem] block absolute mt-[9rem]  opacity-[0.6]   inset-[0%_0%_auto_auto]"></div>
      <Header />
      <HeroSection />
      <Navbar />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <EducationSection />
    </div>
  );
};

export default App;
