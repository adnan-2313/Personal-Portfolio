import { LuDot } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <header className="w-[80%] mb-[4rem] max-w-[1300px]  flex justify-between items-center">
      <h1 className="font-kalam text-[#14e9b3] text-2xl ">AdnanKhan</h1>
      <div className="font-Montserrat font-medium flex items-center text-lg gap-10">
        <h3 className="text-gray-600 cursor-pointer">Download Resume</h3>
        <div className="border-[0.1px] bg-[#041718] border-gray-500 p-[10px_20px_10px_0px] rounded-3xl flex flex-row w-48 overflow-hidden">
          <div className="px-[8px]  text-[#14e9b3] text-[2rem] flex justify-center items-center">
            <LuDot />
          </div>
          <Marquee>
            <div className="">
              <span className="text-white text-[0.9rem]">
                Available{" "}for{" "}work
              </span>
            </div>
          </Marquee>
        </div>
        <div className="text-white cursor:pointer flex items-center">EN <IoMdArrowDropdown/></div>
      </div>
    </header>
  );
};

export default Header;
