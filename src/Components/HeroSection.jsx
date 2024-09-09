// import HeroImage from "../Utils/HeroImage.png";
import { FaWhatsapp } from "react-icons/fa";
import MyImage from "../Utils/MyImage - Copy.jpg";
const HeroSection = () => {
  return (
    <main className="flex flex-row relative  text-white max-lg:flex-col  w-full justify-between mb-[1rem] max-w-[75rem]  ">
      <div className="w-[100%]  ">
        <div className="flex justify-center max-lg:justify-start    z-[100]  items-center   ">
          <img
            src={MyImage}
            className=" z-[-10]  top-[0px]  h-[35rem]  w-[30rem] max-min-tab:h-[30rem] max-min-tab:w-[25rem] max-phone:h-[25rem] max-phone:w-[22rem] "
            alt=""
          />
        </div>
      </div>
      <div className="w-[100%] mt-[2rem]  font-montserrat  flex flex-col max-lg:ml-[2rem] max-sm:mr-[2rem] ">
        <h1 className="bg-gradient-to-tr from-[#2cf8ff]  to-[#18ffb0] bg-clip-text text-transparent text-[.875rem] ">
          FRONT END DEVELOPER & PROGRAMMER
        </h1>
        <p className="font-spaceGrotesk text-[3.8rem] max-lg:text-[3rem] max-sm:text-[2.25rem] max-sm-phone:text-[2.15rem] max-sm:leading-tight w-[100%]  p-[20px_21px_0px_0px]   border-white font-semibold leading-[3.8rem]">
          Ambitious Front End Developer Ready to Bring Ideas to Life
        </p>
        <p className="text-gray-300 text-[1.1rem] font-medium mt-[20px] w-[75%] max-md:w-[90%] max-phone:w-[87%] max-phone:text-[1rem] leading-[1.4rem]">
          My mission is to design and develop a website that you and your
          audience love .
        </p>
        <a
          className=" bg-background-gradient  mt-[54px] 
        transition-[all_.5s] w-[21rem] hover:bg-[#0a4641] text-[1.15rem] rounded-[3.75rem] 
        p-[.5rem_.5rem_.5rem_2rem] text-[#c6ffec] flex flex-row cursor-pointer justify-between items-center 
        hover:bg-[linear-gradient(98deg_#02b09b61_#02b09b33)] hover:translate-y-[-1px]
         hover:shadow-[0_20px_40px_#2db58633]  max-lg:py-[.6rem] max-phone:w-[18rem] max-phone:py-[.4rem] border-[1px] border-[#ffffff1f]"
        >
          <div className="font-[400] max-phone:text-[0.9rem] ">
            Let's Chat On WhatsApp
          </div>
          <span
            className="rounded-[50%] bg-[#18ffb0] max text-black flex justify-center items-center text-[2.2rem]  
          h-[3.2rem] w-[3.2rem] max-phone:h-[3rem] max-phone:w-[3rem]"
          >
            <FaWhatsapp />
          </span>{" "}
        </a>
      </div>
    </main>
  );
};

export default HeroSection;
