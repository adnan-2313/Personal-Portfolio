import { useState } from "react";

const menuItems = [
  {
    name: "HOME",
    link: "/",
    customStyle:
      "bg-gradient-to-tr from-[#2cf8ff] to-[#18ffb0] bg-clip-text text-transparent",
    width: "11rem",
  },
  { name: "ABOUT", link: "#About" },
  { name: "SKILLS", link: "#skills" },
  { name: "PROJECTS", link: "#projects" },
  { name: "EDUCATION", link: "#education" },
];

const Navbar = () => {
  return (
    <>
      <div className="mb-[20rem] mt-[4rem] justify-center w-full flex top-0 sticky z-[20]">
        <nav className="uppercase border-[#ffffff1a] backdrop-blur-[30px] bg-[#04130e80]    border relative z-10 flex rounded-full px-6 py-[19px] items-center">
          <ul className="flex flex-row gap-4">
            <li className="text-white text-md h-[25px] border-[#ffffff1a] border-r-[1px] flex items-center   pl-[15px] pr-[35px]">
              <a href="#home" className="">
                Home
              </a>
            </li>
            <li className="text-white cursor-pointer text-md h-[25px] flex items-center border-[#ffffff1a]  border-r-[1px] px-[35px] ">
              <a href="#about" className="">
                About Me
              </a>
            </li>
            <li className="text-white text-md h-[25px] border-r-[1px] flex items-center border-[#ffffff1a]   px-[35px] ">
              SKills
            </li>
            <li className="text-white text-md h-[25px] border-r-[1px] flex items-center border-[#ffffff1a]   px-[35px] ">
              Projects
            </li>
            <li className="text-white text-md h-[25px] flex items-center border-[#ffffff1a]   pr-[15px] pl-[35px]">
              Education
            </li>
          </ul>
        </nav>
      </div>

      {/* <div className="max-w-[60rem] -mb-[8rem] mx-auto sticky top-[2rem] bottom-[20rem]">
        <nav className="flex backdrop-blur-[30px] bg-[#04130e80] border border-[#ffffff1a] rounded-[5rem] items-center p-[0.625rem]">
          <a className="text-white tracking-[0.125rem] uppercase border border-[#ffffff0a] mx-8 py-4 text-sm font-normal leading-none transition-all duration-200">
            Home
          </a>
          <a className="text-white tracking-[0.125rem] uppercase border border-[#ffffff0a] mx-8 py-4 text-sm font-normal leading-none transition-all duration-200">
            About us
          </a>
          <a className="text-white tracking-[0.125rem] uppercase border border-[#ffffff0a] mx-8 py-4 text-sm font-normal leading-none transition-all duration-200">
            Skills
          </a>
          <a className="text-white tracking-[0.125rem] uppercase border border-[#ffffff0a] mx-8 py-4 text-sm font-normal leading-none transition-all duration-200">
            Projects
          </a>
          <a className="text-white tracking-[0.125rem] uppercase border border-[#ffffff0a] mx-8 py-4 text-sm font-normal leading-none transition-all duration-200">
            Education
          </a>
        </nav>
        <div className="w-full hidden absolute top-full left-0 right-0 overflow-hidden"></div>
      </div>
      <div className="z-[2] bg-black min-h-[7rem] block relative"></div> */}
    </>
  );
};

export default Navbar;
