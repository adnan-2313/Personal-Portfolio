import { education } from "../Utils/constant";
const EducationSection = () => {
  return (
    <section
      id="education"
      className="z-[2] bg-black pt-24 w-full p-[2.5rem] max-tablet:p-[1.5rem]  font-DMSANS  overflow-hidden relative "
    >
      <div className="w-1/2 max-md:w-3/4 flex mx-auto flex-col items-center justify-center ">
        <h1 className="text-[6.9rem] text-white text-center  font-spaceGrotesk">
          Education
        </h1>
        <p className="font-DMSANS    bg-gradient-to-tr from-[#dff2f3] to-[#f3f5f4] bg-clip-text text-transparent text-[1.25rem]  text-center">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[20px] px-[10rem] max-tablet:px-[5rem]  gap-[1rem]">
        {education.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[40.625rem] max-sm:w-[38rem] transition-all duration-[0.5s] hover:transition-all hover:duration-[0.5s] 
              hover:translate-y-[-10px] cursor-default  z-[50]  border-[rgba(89,91,115,0.5)]  
              bg-[rgba(36,70,47,0.05)]  backdrop-blur-[40px] shadow-[0px_-2px_10px_rgba(0,0,0,0.5)] rounded-[10px] p-[12px_16px] flex flex-col 
              justify-between items-center gap-[12px]"
            >
              <div className="flex flex-row w-full  gap-[12px] justify-between">
                <div className="">
                  <img src={item.img} className="h-[70px] rounded-xl" alt="" />
                </div>
                <div className="w-full flex flex-col">
                  <h1 className="text-[1.5rem]  font-semibold justify-center leading-tight  text-white">
                    {item.school}
                  </h1>
                  <h2 className="text-[1rem] font-[500] text-white justify-center">
                    {item.degree}
                  </h2>
                  <h3 className="text-[14px] font-[400] text-white justify-center">
                    {item.date}
                  </h3>
                </div>
              </div>
              <div className="w-full text-[16px] font-[400] text-white mb-[10px]">
                <span className="">{item.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-[1] bg-[#18ffb0] blur-[120px] rounded-[50%] w-[35rem] h-[20rem]  block absolute inset-[20%_0%_0%_-10%]  opacity-[.7]"></div>
      <div className="z-[-1] bg-[#18aaff] blur-[120px] rounded-[50%] w-[30rem] h-[30rem]  absolute  opacity-[.56]   inset-[30%_0%_0%_60%]"></div>
      <div className="w-full h-[5rem] z-[1] bg-gradient-to-r from-[#18ffb0] to-[#18aaff] blur-[120px]  absolute  opacity-[0.5] inset-[auto_0%_0%_auto]"></div>
    </section>
  );
};

export default EducationSection;
