import { IoMdArrowDropdown } from "react-icons/io";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <header className="z-[6] pt-[0] w-full max-w-[1200px] p-[2rem_0rem] relative mt-[30px] 
    flex justify-between items-center max-min-tab:pr-[2rem]">
      <h1 className="font-playwrite text-[#14e9b3] max-xl:ml-[40px] text-xl">AdnanKhan</h1>
      <div className="font-DMSANS  flex items-center text-lg gap-10">
        {/* <h3 className="text-gray-600 cursor-pointer">Download Resume</h3> */}

        <div className="border-[1px] bg-[#041718] max-min-tab:hidden  border-[#ffffff1a] p-[0.7rem_1.5rem] w-[55%]  rounded-[3.75rem] flex justify-start items-center overflow-hidden">
          <div className=" w-[0.5rem] h-[0.5rem]  rounded-[50%] bg-[#18ffb0]"></div>
          <Marquee>
            <div className="">
              <span className="text-white  text-[0.9rem]">
                Available for work
              </span>
            </div>
          </Marquee>
        </div>
        <div className="text-gray-400 cursor:pointer flex items-center">
          EN <IoMdArrowDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
