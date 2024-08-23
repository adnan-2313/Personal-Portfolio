const LogoBox = ({ className, style, src, alt }) => (
  <div className={`home-experience_box-logo ${className} flex justify-center`} style={style}>
    <span className="text-[1.1rem] flex justify-center tex-center font-medium font-spaceGrotesk uppercase">Soft Skill</span>
  </div>
);
const AboutSection = () => {
  return (
    <section className="px-[2.5rem] relative">
      <div className="w-full max-w-[73.75rem] mx-[auto_!important]">
        <div className="text-white flex flex-col  justify-center items-center max-w-none mx-auto relative text-[6.25rem] top-0 leading-1 font-semibold font-spaceGrotesk ">
          <div className="home-experience_text-wrapper">
            <LogoBox
              className="z-[5] bottom-[66%] left-[27%] inset-[auto_auto_10%_-9%]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 1.7604rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              src="https://cdn.prod.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccffe_logo-webflow.svg"
              alt="webflow logo"
            />

            <LogoBox
              className="bottom-[26%] left-[12%] inset-[auto_auto_40%_-9%]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(1.29906rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              src="https://cdn.prod.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160cd055_client-first.svg"
              alt=""
            />

            <LogoBox
              className="inset-[33%_-9%_auto_auto] right-[10%]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(-2.7278rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              src="https://cdn.prod.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160cd060_logos-Attributes%20(1).svg"
              alt=""
            />

            <LogoBox
              className="inset-[auto_18%_-10%_auto]"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(-3.01288rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              src="https://cdn.prod.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccfff_logo-figma.svg"
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
              src="https://cdn.prod.website-files.com/65aa727d2cba3ce6160ccfb1/65aa727d2cba3ce6160ccff3_logo-finsweet.svg"
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
              <div className="text-[5rem] ">Hi, I am</div>
              <div className="text-[5rem]">Adnan Khan</div>
              <div className="text-[4rem]">Software Developer</div>
            </div>
          </div>
          <div className="z-[2] flex justify-center items-center relative">
            <div
              className="z-[50] opacity-100 border-[1px] border-[#fff9] rounded-[50%] w-[23rem] h-[22rem] block absolute rotate-0"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(117.659deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                willChange: "transform;",
              }}
            >
              <div className="">
              </div>
            </div>
            <div className="absolute opacity-[0.3] border-dashed border-[1px] border-white w-[20rem] h-[20rem] rounded-[50%]"></div>
            <div className="absolute opacity-[0.3] border-dashed border-[1px] border-white w-[32rem] h-[32rem] rounded-[50%]"></div>
            <div className="z-[5] bg-[#2cf8ff] blur-[100px] rounded-[50%] w-[25rem] h-[7.5rem]  absolute"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
