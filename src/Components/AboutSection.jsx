import { CiGlobe } from "react-icons/ci";

const LogoBox = ({ className, style, title }) => (
  <div
    className={`home-experience_box-logo   ${className} flex justify-center`}
    style={style}
  >
    <span className="text-[1.1rem] max-sm-phone:text-[0.8rem]   flex justify-center tex-center font-medium font-spaceGrotesk uppercase">
      {title}
    </span>
  </div>
);

const AboutSection = () => {
  return (
    <section className="px-[2.5rem] relative mt-96" >
      <div className="w-full max-w-[73.75rem] mx-[auto_!important]">
        <div className="text-white flex flex-col  justify-center items-center max-w-none mx-auto relative  text-[6.25rem] top-0 leading-1 font-semibold font-spaceGrotesk ">
          <div className="home-experience_text-wrapper  max-lg:w-[50rem]  max-md:w-[40rem] max-phone:w-[33rem] max-phone:py-[1rem] max-sm-phone:py-[3rem]">
            <LogoBox
              className="z-[5]  bottom-[66%] left-[27%] inset-[auto_auto_10%_-9%] max-md:left-[10%]  max-md:bottom-[75%] max-sm-phone:left-[15%] max-sm-phone:bottom-[90%]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 1.7604rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              title="Adaptability"
              alt="webflow logo"
            />

            <LogoBox
              className="bottom-[26%] left-[12%] inset-[auto_auto_40%_-9%] max-md:bottom-[20%] max-min-tablet:left-[5%] max-sm-phone:bottom-[0%] max-sm-phone:left-[20%]"
              id="about"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(1.29906rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              title="Communication"
              alt=""
            />

            <LogoBox
              className="inset-[33%_-9%_auto_auto] right-[10%] max-md:inset-[23%_-2%_auto_auto]  max-min-tab:right-[5%] max-min-tab:top-[20%]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(-2.7278rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              title="Creativity"
              alt=""
            />

            <LogoBox
              className="inset-[auto_18%_-10%_auto] "
              style={{
                willChange: "transform",
                transform:
                  "translate3d(-3.01288rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              title="Reliability"
              alt="figma logo"
            />

            <LogoBox
              className="inset-[-12%_23%_auto_auto]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 1.3307rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              title="Resilience"
              alt="finsweet logo"
            />

            <div
              className="z-[1]  flex  flex-col items-center justify-center mx-auto relative uppercase leading-[7rem]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(0.957891, 0.957891, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-[5rem] max-min-tab:text-[4rem] max-sm-phone:text-[3rem] max-min-tab:leading-snug">
                Hi, I am
              </div>
              <div className="text-[5rem] max-min-tab:text-[4rem] max-sm-phone:text-[3.2rem] max-min-tab:leading-snug ">
                Adnan Khan
              </div>
              <div className="text-[4rem] max-md:hidden ">
                Software Developer
              </div>
              <div className="text-[5rem] md:hidden max-min-tab:text-[4rem] max-sm-phone:text-[3rem] leading-tight">
                Software
              </div>
              <div className="text-[5rem] md:hidden max-min-tab:text-[4rem] max-sm-phone:text-[3rem]   leading-tight">
                Developer
              </div>
            </div>
          </div>
          <div className="z-[2] flex justify-center items-center relative">
            <div
              className="z-[50] opacity-100  border-[#fff9] rounded-[50%] w-[23rem] h-[22rem] block absolute rotate-0"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(117.659deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                willChange: "transform;",
              }}
            ></div>
            <div
              className="absolute opacity-[0.3] border-dashed border-[2px] border-white w-[20rem] h-[20rem] max-min-tab:w-[18rem] 
            max-min-tab:h-[18rem] max-sm-phone:w-[15rem] max-sm-phone:h-[15rem]   rounded-[50%]"
            ></div>
            <div
              className="absolute opacity-[0.3] border-dashed border-[2px] border-white w-[32rem]   h-[32rem] max-min-tab:w-[30rem] 
            max-min-tab:h-[30rem] max-phone:w-[25rem] max-phone:h-[25rem] max-sm-phone:w-[22rem] max-sm-phone:h-[22rem] rounded-[50%]"
            ></div>
            <div
              className="absolute   border-white w-[32rem]  animate-[spin_15s_linear_infinite] h-[32rem] max-min-tab:w-[30rem] 
            max-min-tab:h-[30rem] max-phone:w-[25rem] max-phone:h-[25rem] max-sm-phone:w-[22rem] max-sm-phone:h-[22rem] rounded-[50%]"
            >
              <div className=" flex justify-center items-center animate-[spin_20s_linear_infinite]  font-bold text-black text-[1.8rem] w-[40px] absolute right-[20rem]  max-phone:right-[16rem] max-sm-phone:right-[15rem] rounded-[50%] h-[40px] bg-[#13dee6]">
                <CiGlobe />
              </div>
            </div>
            <div className="z-[5] bg-[#2cf8ff] blur-[100px] rounded-[50%] w-[25rem] h-[7.5rem]  absolute"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
