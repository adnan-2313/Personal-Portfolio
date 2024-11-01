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
     <div className="mb-[20rem] mt-[4rem] h-[20px] border-[1px] border-gray-300  w-full flex top-0 sticky z-[20000]"></div>
    </>
  );
};

export default Navbar;
