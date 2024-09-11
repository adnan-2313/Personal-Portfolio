import { education } from "../Utils/constant";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const EducationSection = () => {
  return (
    <section className="z-[2] bg-black pt-24 w-full p-[2.5rem] max-tablet:p-[1.5rem]  font-DMSANS  overflow-hidden relative ">
      <div className="w-1/2 max-md:w-3/4 flex mx-auto flex-col items-center justify-center ">
        <h1 className="text-[6.9rem] text-white text-center  font-spaceGrotesk">
          Education
        </h1>
        <p className="font-DMSANS    bg-gradient-to-tr from-[#dff2f3] to-[#f3f5f4] bg-clip-text text-transparent text-[1.25rem]  text-center">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div
        id="education"
        className="flex flex-col    justify-center items-center mt-[20px] px-[10rem] max-tablet:px-[5rem] "
      >
        {education.map((item, index) => {
          return (
            <>
              <TimelineItem>
                <TimelineContent sx={{ py: "7px", px: 2 }}>
                  <div
                    key={item.id}
                    className="w-[40.625rem]  max-md:w-[18.75rem] max-md:p-[10px] max-md:gap-[8px] transition-all duration-[0.5s] hover:transition-all hover:duration-[0.5s] 
              hover:translate-y-[-10px] cursor-default  z-[50]  border-[rgba(89,91,115,0.5)]  
              bg-[rgba(89,91,115,0.1)]  backdrop-blur-[40px] shadow-[0px_-2px_10px_rgba(0,0,0,0.5)] rounded-[10px] p-[20px_12px_18px_18px] flex flex-col 
              justify-between items-center gap-[12px]"
                  >
                    <div className="flex flex-row w-full  gap-[12px] justify-between">
                      <div className="">
                        <img
                          src={item.img}
                          className="h-[70px] rounded-xl max-md:h-[40px]"
                          alt=""
                        />
                      </div>
                      <div className="w-full flex flex-col font-montserrat ">
                        <h1 className="text-[1.3rem] max-md:text-[0.875rem] font-spaceGrotesk  font-semibold justify-center leading-tight  text-white">
                          {item.school}
                        </h1>
                        <h2 className="text-[1rem] max-md:text-[0.75rem]  font-[500] text-white justify-center">
                          {item.degree}
                        </h2>
                        <h3 className="text-[14px] max-md:text-[0.625rem] font-[400] text-white justify-center">
                          {item.date}
                        </h3>
                      </div>
                    </div>
                    <div className="w-full text-[1rem] font-montserrat font-[400] max-md:text-[0.75rem] text-white mb-[10px]">
                      <span className="">{item.desc}</span>
                    </div>
                  </div>
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {index !== 2 && (
                    <TimelineConnector style={{ background: "#18aaff" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            </>
          );
        })}
      </div>
      <div className="z-[1] bg-[#18ffb0]  blur-[120px] rounded-[50%] w-[35rem] h-[20rem]  block absolute inset-[20%_0%_0%_-10%]  opacity-[.4]"></div>
      <div className="z-[-1] bg-[#18aaff]   blur-[120px] rounded-[50%] w-[30rem] h-[30rem]  absolute  opacity-[.4]   inset-[30%_0%_0%_60%]"></div>
      <div className="w-full h-[5rem]   z-[1] bg-gradient-to-r from-[#18ffb0] to-[#18aaff] blur-[120px]  absolute  opacity-[0.4] inset-[auto_0%_0%_auto]"></div>
    </section>
  );
};

export default EducationSection;
