// import HeroImage from "../Utils/HeroImage.png";
import { FaWhatsapp } from "react-icons/fa";
import MyImage from "../Utils/MyProfileImage.jpg";
import img from "./../Utils/web logo.png";
import logo from "./../Utils/A_logo-transformed.png";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="flex flex-row relative mt-20  pt-0  text-white max-lg:flex-col  w-full justify-between mb-[1rem] max-w-[75rem]  "
    >
      <div className="w-[100%] p-0  ">
        <div className="flex p-[0]  max-lg:justify-start     z-[100]     ">
          <img
            src={MyImage}
            loading="lazy"
            className="z-[-20] top-[-5rem]   h-[35rem]  w-[35rem] max-min-tab:h-[30rem] max-min-tab:w-[25rem] max-phone:h-[25rem] max-phone:w-[25rem] "
            alt=""
          />
        </div>
        <div
          className="absolute  overflow-hidden border-[1px] 
      backdrop-filter-[40px]
       bg-black
        border-gray-700 p-[10px]   left-[0rem] max-xl:left-[0.5rem]   font-montserrat text-white bottom-[2rem] max-lg:bottom-[23rem]  text-xl rounded-[50%] "
        >
          <img
            src={img}
            alt=""
            loading="lazy"
            className="w-[7.125rem] max-phone:w-[5.125rem]  top-0 animate-[spin_10s_linear_infinite]"
          />
          <img
            loading="lazy"
            src={logo}
            className="absolute  w-[2.2rem] max-phone:w-[1.8rem] max-phone:top-[2.2rem]  max-phone:left-[2.4rem]  top-[2.9rem] left-[3rem] "
          />
          {/* <span className="absolute left-[2.5rem] text-[0.8rem] top-[3.4rem]">HIRE ME</span> */}
          <div className="bg-[#2cf8ff] blur-[40px] top-[2rem] left-[2rem] opacity-50 absolute rounded-[50%] w-[5.25rem] h-[5.25rem] z-1 "></div>
        </div>
      </div>
      <div className="w-[100%] mt-[4rem]  font-montserrat  flex flex-col max-lg:ml-[2rem] max-sm:mr-[2rem] ">
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
          <div className="font-[400] w-[235px]  max-phone:text-[0.9rem] ">
            Let's Chat On WhatsApp
          </div>
          <span
            className="rounded-[50%] bg-[#18ffb0] max text-black flex justify-center items-center text-[35px]  
          h-[51.2px] w-[52.2px] max-phone:h-[3rem] max-phone:w-[3rem]"
          >
            <FaWhatsapp />
          </span>{" "}
        </a>
      </div>
    </main>
  );
};

export default HeroSection;
