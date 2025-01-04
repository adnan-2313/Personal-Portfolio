import { skills } from "../Utils/constant";
const SkillsSection = () => {
  return (
    <>
      <section
        className="mt-[25rem] overflow-hidden  pb-[5rem]  w-full relative z-[-1] 
    bg-[#0d101c80]
    "
      >
        <div
          className="w-full flex max-sm:px-8 flex-col justify-center mt-14"
          id="skills"
        >
          <h1 className="text-[6.9rem] max-sm:text-[4rem] text-white text-center font-spaceGrotesk">
            Skills
          </h1>
          <p
            className="font-DMSANS  bg-gradient-to-tr from-[#2cf8ff] to-[#18ffb0] bg-clip-text text-transparent 
        text-[1.25rem] max-sm:text-[1rem]  text-center"
          >
            Here are some of the skills I have been working on for the past
            couple of years.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 p-[50px] max-sm:px-[10px] justify-center items-center  font-DMSANS">
          {skills.map((items, index) => {
            return (
              <div
                className="z-[4] bg-[rgba(89,91,115,0.1)] backdrop-blur-3xl rounded-[1.25rem] border-[1px] border-[rgba(89,91,115,0.5)]  
             text-white w-[25rem] max-sm:w-[20rem]"
                key={index}
              >
                <div className=" flex flex-col justify-center  p-[40px_30px] max-sm:p-[25px_20px]  ">
                  <h3 className="text-[1.5rem]  text-center  font-spaceGrotesk">
                    {items.title}
                  </h3>
                  <div className="flex flex-wrap gap-5 max-sm-phone:gap-3  justify-center mt-[20px] max-sm-phone:mt-[15px] w-full ">
                    {items.skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="flex text-[1.15rem] backdrop-blur-3xl max-sm:text-[1rem] border-[1px] rounded-[1rem] border-[#bfe6d559] p-[10px_15px]  
                      items-center gap-2"
                        >
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="size-8 max-sm-phone:size-6"
                          ></img>
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="absolute w-full h-[2rem] max-md:h-[6.3rem] z-[1] bg-[#2cf8ff] blur-[120px]  
        opacity-[0.5] inset-[100%_0%_0%_auto]"></div> */}
        </div>
        <div
          className="z-[1] bg-[#18ffb0] blur-[120px] rounded-[50%] w-[30rem] h-[20rem] block absolute  opacity-[.7]  
       inset-[20%_auto_auto_10%] max-lg:w-[40rem] max-lg:h-[30rem] max-min-tab:h-[20rem] max-min-tab:w-[15rem]"
        ></div>
        <div
          className="z-[1] bg-[#2cf8ff] blur-[120px] rounded-[50%] w-[20rem] h-[20rem] absolute 
      opacity-[.56]   inset-[60%_0%_0%_80%] max-lg:inset-[75%_0%_0%_30%] max-lg:w-[30rem] max-lg:h-[30rem] max-min-tab:h-[15rem] max-min-tab:w-[15rem]"
        ></div>
      </section>
    </>
  );
};

export default SkillsSection;
