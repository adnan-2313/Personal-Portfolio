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
          <h1 className="md:text-[18.75rem] mt-8 w-full whitespace-nowrap  text-[13rem] leading-[.8] flex-[1] block font-spaceGrotesk font-semibold">
            LET'S TALK -{" "}
          </h1>
        </div>
      </Marquee>
      <div className="sm:px-[2.5rem] px-[1rem]  sm:mt-[7rem] mt-[4rem]   ">
        <div className="border-[1px] font-DMSANS uppercase  border-[#fff3] flex flex-row max-sm:flex-col rounded-full max-sm:rounded-[20px] items-center overflow-hidden">
          {socialMedia.map((item) => {
            return (
              <a
                key={item.id}
                target="_blank"
                href={item.link}
                className="w-[30%]   cursor-pointer  max-sm:border-b max-sm:w-full  hover:bg-[#1df7ff1a] hover:transition-all transition-all 
                sm:border-r-[1px] border-[#fff3] py-[1.5rem] max-sm:py-[1.5rem] max-md:py-[1rem] 
                relative flex justify-center items-center "
              >
                <div className="w-full flex items-center relative justify-center">
                  {/* <div>{item.icon}</div> */}
                  <span className="text-[1.5rem] flex justify-center h-full gap-3 items-center max-sm:text-3xl  w-full text-center max-md:text-[0.8rem]">
                    <item.icon  /> {item.title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="fixed bottom-0 mx-auto sm:px-7  w-full lg:pr-[80px] flex sm:flex-row flex-col  justify-center items-center sm:justify-between ">
        <span className="font-playwrite   text-[1.2rem] max-sm:text-[1rem] font-medium">
          Adnankhan
        </span>
        <span className="font-DMSANS text-gray-400">
          ©️ {year} All Right Reserved
        </span>
      </div>
    </footer>
  );
}
