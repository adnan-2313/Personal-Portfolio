import { useState } from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <header
      className="z-[2000] pt-[0] w-full max-w-[1330px] md:px-8 top-0 h-[80px] backdrop-blur-lg fixed
    flex justify-between items-center max-min-tab:pr-[2rem]"
    >
      <h1 className="font-playwrite text-[#14e9b3] max-xl:ml-[40px] text-xl">
        AdnanKhan
      </h1>

      <nav className="font-DMSANS max-lg:hidden">
        <ul className="w-full flex text-[#ccf8de96] gap-x-8">
          <li>
            <a
              href="#home"
              className={`nav ${activeSection === "#home" ? "active" : ""}`}
              onClick={() => handleSetActive("#home")}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav ${activeSection === "#skills" ? "active" : ""}`}
              onClick={() => handleSetActive("#skills")}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav ${activeSection === "#projects" ? "active" : ""}`}
              onClick={() => handleSetActive("#projects")}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`nav ${activeSection === "#education" ? "active" : ""}`}
              onClick={() => handleSetActive("#education")}
            >
              EDUCATION
            </a>
          </li>
        </ul>
      </nav>
      <div className="font-DMSANS flex items-center text-lg gap-10">
        <div className="border-[1px] bg-[#041718] max-min-tab:hidden border-[#ffffff1a] p-[0.7rem_1.5rem] w-[65%] rounded-[3.75rem] flex justify-start items-center overflow-hidden">
          <div className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#18ffb0]"></div>
          <Marquee>
            <div>
              <span className="text-white text-[0.9rem]">
                Available for work
              </span>
            </div>
          </Marquee>
        </div>
      </div>
    </header>
  );
};

export default Header;
