// import HeroImage from "../Utils/HeroImage.png";
import Header from "./Header";
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
    <div className="relative  bg-custom-hsla  z-[10] bg-complex-gradient flex flex-col justify-center items-center gap-10  p-[20px_30px] ">
      <Header />
      <main className="flex flex-row relative w-full justify-between items-center  max-w-[1100px] ">
        <div className="w-[100%]  py-[40px]">
          <div className="flex justify-center items-center  bg-[#14e9b3]  h-[24rem] w-[24rem]  rotate-[45deg]">
            <img
              className="z-[-10] rotate-[-45deg] top-[0px] left-[10rem]  w-[25rem]"
              alt=""
            />
          </div>
        </div>
        <div className="w-[100%] font-montserrat flex flex-col p-[40px_20px]  ">
          <h1 className="text-[#14e9b3] ">FRONT END DEVELOPER & PROGRAMMER</h1>
          <p className="text-white font-spaceGrotesk text-[3rem] p-[30px_50px_0px_0px] font-semibold leading-[3.3rem]">
            Entry-Level front end development services at low rates
          </p>
          <p className="text-gray-300 text-[1rem] mt-[20px] w-[75%] leading-[1.2rem]">
            My mission is to design and develop a website that you and your
            audience love
          </p>
          <div className="bg-gradient-to-r from-[#048276] to-[#011f1c]   text-[#7ed1ae] mt-[20px]   hover:bg-[#0a4641] w-[60%] rounded-[40px]  flex flex-row items-center">
            <p className="m-[16px_0px_16px_28px]  w-[70%]">
              Contact me on <span className="text-[#0a66c2]">Linkedin</span>
            </p>
            <span className="bg-[#19ffb3] rounded-[50%]   mx-[10px] h-[2.8rem] w-[2.8rem]"></span>{" "}
          </div>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default HeroSection;
