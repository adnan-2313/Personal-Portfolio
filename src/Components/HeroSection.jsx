// import HeroImage from "../Utils/HeroImage.png";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="flex flex-row relative text-white  w-full justify-between mb-[1rem] max-w-[70rem]  ">
      <div className="w-[100%] py-[40px]">
        <div className="flex  justify-center rotate-[-45deg] z-[100]  items-center   h-[25rem] w-[25rem] ">
          <img
            className=" z-[-10] rotate-[-45deg] top-[0px] left-[10rem]  w-[25rem]"
            alt=""
          />
        </div>
      </div>
      <div className="w-[100%] font-montserrat flex flex-col">
        <h1 className="bg-gradient-to-tr from-[#2cf8ff] to-[#18ffb0] bg-clip-text text-transparent text-[.875rem] ">
          FRONT END DEVELOPER & PROGRAMMER
        </h1>
        <p className="font-spaceGrotesk text-[3.5rem] p-[20px_70px_0px_0px] font-semibold leading-[3.3rem]">
          Entry-Level front end development services at low rates
        </p>
        <p className="text-gray-300 text-[1rem] font-medium mt-[20px] w-[75%] leading-[1.2rem]">
          My mission is to design and develop a website that you and your
          audience love .
        </p>
        <a
          className=" bg-background-gradient  mt-[40px] 
        transition-[all_.5s] w-[60%] hover:bg-[#0a4641] text-[1.15rem] rounded-[3.75rem] 
        p-[.5rem_.5rem_.5rem_2rem] text-[#c6ffec] flex flex-row cursor-pointer justify-between items-center hover:bg-[linear-gradient(98deg_#02b09b61_#02b09b33)] hover:translate-y-[-1px] hover:shadow-[0_20px_40px_#2db58633]"
        >
          <div className="">Let's Chat On Whatsapp</div>
          <span className="rounded-[50%] bg-[#18ffb0] text-black flex justify-center items-center text-[2.2rem]  h-[3.2rem] w-[3.2rem]">
            <FaWhatsapp />
          </span>{" "}
        </a>
      </div>
    </main>
  );
};

export default HeroSection;
