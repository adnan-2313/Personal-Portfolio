import Marquee from "react-fast-marquee";
import { socialMedia } from "../Utils/constant";

const date = new Date();
const year = date.getFullYear();
export default function FooterSection() {
  return (
    <footer className="fixed overflow-hidden z-[-1] w-full top-0 h-full  bg-black text-white">
      <div className="w-full h-[3rem] z-[50] bg-[#41ffd6] blur-[120px]    opacity-[1] inset-[50%_0%_0%_50%]"></div>
      <Marquee speed={190}>
        <div className="w-full overflow-y-hidden">
          <h1 className="text-[18.75rem] mt-8 w-full whitespace-nowrap max-lg:text-[15rem] max-md:text-[12rem] leading-[.8] flex-[1] block font-spaceGrotesk font-semibold">
            LET'S TALK -{" "}
          </h1>
        </div>
      </Marquee>
      <div className="sm:px-[2.5rem] max-sm:px-14  mt-[7rem] max-sm:mt-3 ">
        <div className="border-[1px] font-DMSANS uppercase border-[#fff3] flex flex-row max-sm:flex-col rounded-full max-sm:rounded-[30px] items-center overflow-hidden">
          {socialMedia.map((item) => {
            return (
              <a
                key={item.id}
                target="_blank"
                href={item.link}
                className="w-[30%]   cursor-pointer max-sm:border-b max-sm:w-full  hover:bg-[#1df7ff1a] hover:transition-all transition-all 
                sm:border-r-[1px] border-[#fff3] py-[1.5rem] max-sm: max-md:py-[1rem] 
                relative flex justify-center items-center "
              >
                <div className="w-full flex items-center relative justify-center">
                  {/* <div>{item.icon}</div> */}
                  <span className="text-[1rem] max-sm:text-xl  w-full text-center max-md:text-[0.8rem]">
                    {item.title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
        <div className="fixed max-sm:mt-2 max-sm:mx-auto bottom-0 w-full lg:pr-[80px] flex flex-row max-sm:flex-col max-sm:justify-center max-sm:items-center justify-between ">
          <span className="font-playwrite  text-[1.2rem] max-sm:text-[1rem] font-medium">
            Adnankhan
          </span>
          <span className="font-DMSANS text-gray-400">
            ©️ {year} All Right Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
