import React from "react";

const Navbar = () => {
  return (
    <div className="w-full mt-[5rem] flex  justify-center sticky top-0 z-50">
      <nav className="w-[78%] max-w-[1100px] bg-[rgba(2,10,7,0.8)] p-[20px_20px] flex rounded-[50px] border-gray-700 border-[0.1px]">
        <ul className="text-white flex flex-row justify-center w-full items-center text-[1rem] font-montserrat">
          <li className="flex text-[#1da1a3] justify-center w-[11rem] border-r-2">
            HOME
          </li>
          <li className="flex justify-center w-[15rem] border-r-2 cursor-pointer hover:text-[#1da1a3]">
            SKILLS
          </li>
          <li className="flex justify-center w-[15rem] border-r-2 cursor-pointer hover:text-[#1da1a3]">
            PROJECTS
          </li>
          <li className="flex w-[15rem] justify-center border-r-2 cursor-pointer hover:text-[#1da1a3]">
            EDUCATION
          </li>
          <li className="flex w-[15rem] justify-center cursor-pointer hover:text-[#1da1a3]">
            TRAINING
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
