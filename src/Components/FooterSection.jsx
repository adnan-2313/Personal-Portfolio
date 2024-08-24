import Marquee from "react-fast-marquee";
import { socialMedia } from "../Utils/constant";

const date = new Date();
const year = date.getFullYear();
export default function FooterSection() {
  return (
    <footer className="fixed overflow-hidden z-[-1] w-full top-[0vh] h-[100vh] bg-black text-white">
      <div className="w-full h-[3rem] z-[50] bg-[#41ffd6] blur-[120px]    opacity-[1] inset-[50%_0%_0%_50%]"></div>
      <Marquee speed={190}>
        <div className="w-full overflow-y-hidden">
          <h1 className="text-[18.75rem] w-full whitespace-nowrap leading-[.8] flex-[1] block font-spaceGrotesk font-semibold">
            LET'S TALK -{" "}
          </h1>
        </div>
      </Marquee>
      <div className="px-[2.5rem] mt-[7rem]">
        <div className="border-[1px] font-DMSANS uppercase border-[#fff3] flex flex-row rounded-[999rem] items-center overflow-hidden">
          {socialMedia.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                className="w-[30%] cursor-pointer  hover:bg-[#1df7ff1a] hover:transition-all transition-all border-r-[1px] border-[#fff3] py-[1.5rem] relative flex justify-center items-center "
              >
                <div className="w-full flex items-center relative justify-center">
                  {/* <div>{item.icon}</div> */}
                  <span className="text-[1rem]  w-full text-center">
                    {item.title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-[50px] flex flex-row justify-between">
          <span className="font-playwrite  text-[1.2rem] font-medium">
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
