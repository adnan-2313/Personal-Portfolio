import { projects } from "../Utils/constant";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ProjectSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false, 
    });
  }, []);
  return (
    <section
      id="projects"
      className="w-full  flex flex-col pb-[5rem] justify-center  
      max-w-[90rem] px-[2.5rem] max-phone:px-[1.5rem] max-sm-phone:px-[0.8rem] backdrop-blur-[200px] bg-[#000000] font-DMSANS"
    >
      <div className="w-[60%] mx-auto my-[2rem] max-xl:w-[80%] max-tablet:w-[100%] ">
        <h1 className="font-spaceGrotesk text-center text-[6.9rem] text-white max-tablet:text-[6rem] max-sm:text-[4rem] max-phone:text-[3rem] ">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 max-xl:justify-center ">
        {projects.map((project, index) => {
          return (
            <div
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              key={project.id}
              className="bg-[#121212] group  flex flex-col  w-[24.7rem] gap-2 p-[1rem] rounded-[.75rem] transition-all 
              duration-[0.5s] hover:duration-[0.5s] shadow-xl hover:bg-[#050505] hover:transition-all hover:translate-y-[-10px] "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  className="rounded-[.5rem] border-[1px] border-[#1b1b1b]  aspect-[16/9]  max-w-full inline-block w-full h-auto"
                />
              </div>
              <div
                className="rounded-[.5rem] flex flex-col justify-center  w-full p-[1.125rem_1.25rem]  transition-all duration-200 hover:transition-all 
              hover:duration-200 bg-[#202020] shadow-md group-hover:bg-[#141313]"
              >
                <div className=" w-full flex flex-wrap">
                  {project.tags.map((items) => {
                    return (
                      <span
                        key={items}
                        className="text-[1rem] bg-[#443f3f6c] group-hover:bg-[#1b19196c] p-[3px_5px] rounded-lg text-gray-400 m-[4px_3px]"
                      >
                        {items}
                      </span>
                    );
                  })}
                </div>
                <h2 className="text-white text-[1.4rem]  w-[100%]">
                  {project.title}
                </h2>
                <h3 className="text-[.9rem] text-[rgba(177,178,179,0.5)] leading-3">
                  {project.date}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
