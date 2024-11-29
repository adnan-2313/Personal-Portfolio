import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header
      className="z-[2000]  pt-[0] w-full max-w-[1200px]  top-0 h-[80px]  backdrop-blur-lg  fixed
    flex justify-between items-center max-min-tab:pr-[2rem] "
    >
      <h1 className="font-playwrite text-[#14e9b3] max-xl:ml-[40px] text-xl">
        AdnanKhan
      </h1>

      <nav className="font-DMSANS max-lg:hidden">
        <ul className="w-full flex text-[#ccf8de96] gap-x-8">
          <li>
            {" "}
            <a
              href="#home"
              className="hover:text-[#14e9b3] active:text-[#14e9b3]"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#14e9b3] active:text-[#14e9b3]"
              href="#about"
            >
              SOFT SKILL
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#14e9b3] active:text-[#14e9b3]"
              href="#skills"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#14e9b3] active:text-[#14e9b3]"
              href="#projects"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#14e9b3] active:text-[#14e9b3]"
              href="#education"
            >
              EDUCATION
            </a>
          </li>
        </ul>
      </nav>
      <div className="font-DMSANS  flex items-center text-lg gap-10">
        <div className="border-[1px] bg-[#041718] max-min-tab:hidden  border-[#ffffff1a] p-[0.7rem_1.5rem] w-[65%]  rounded-[3.75rem] flex justify-start items-center overflow-hidden">
          <div className=" w-[0.5rem] h-[0.5rem]  rounded-[50%] bg-[#18ffb0]"></div>
          <Marquee>
            <div className="">
              <span className="text-white  text-[0.9rem]">
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
