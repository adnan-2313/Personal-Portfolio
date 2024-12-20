import { useState } from "react";
import Marquee from "react-fast-marquee";
import resume from "../Utils/ADNAN KHAN FRONT END RESUME.pdf";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "#home", label: "ABOUT" },
  { id: "#skills", label: "SKILLS" },
  { id: "#projects", label: "PROJECTS" },
  { id: "#education", label: "EDUCATION" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="z-[2000] pt-[0] w-full max-w-[1330px] md:px-8 top-0 h-[80px] backdrop-blur-lg fixed flex justify-between items-center max-min-tab:pr-[2rem]">
        <h1 className="font-playwrite text-[#14e9b3] max-xl:ml-[40px] text-xl">
          AdnanKhan
        </h1>

        <nav className="font-DMSANS max-lg:hidden">
          <ul className="w-full flex text-[#ccf8de96] gap-x-8">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={id}
                  className={`nav ${activeSection === id ? "active" : ""}`}
                  onClick={() => handleSetActive(id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="font-DMSANS flex items-center text-lg gap-10">
          <div className="border-[1px] bg-[#041718] max-min-tab:hidden border-[#ffffff1a] p-[0.7rem_1.5rem] w-[65%] rounded-[3.75rem] flex justify-start items-center overflow-hidden">
            <div className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#18ffb0]"></div>
            <Marquee gradient={false} pauseOnHover={true}>
              <a href={resume} download>
                <span className="text-white text-[0.9rem]">
                  Download Resume
                </span>
              </a>
            </Marquee>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <div
            className={`text-[#18ffb0] font-light  text-2xl cursor-pointer transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={handleClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {!isOpen ? <Menu /> : <X />}
          </div>
        </div>

        {/* Mobile Navigation */}
      </header>
      <nav
        className={`z-50 left-0 w-full top-20 fixed right-16 shadow-[0px_2px_10px_rgba(0,0,0,0.3)]  md:hidden bg-opacity-10 bg-black backdrop-blur-lg overflow-hidden transition-all duration-300  ${
          isOpen ? "max-h-screen " : "max-h-0 "
        } w-full flex justify-center overflow-hidden font-montserrat`}
        role="navigation"
      >
        <ul className="flex flex-col gap-4 p-4 w-full items-center">
          {navLinks.map(({ id, label }) => (
            <li
              key={id}
              className="text-white flex justify-between text-xl  hover:text-blue-300 text-md  py-4 font-medium cursor-pointer"
            >
              <a
                href={id}
                className={`nav ${activeSection === id ? "active" : ""}`}
                onClick={() => handleSetActive(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
