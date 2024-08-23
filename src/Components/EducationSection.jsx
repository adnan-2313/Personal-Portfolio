const EducationSection = () => {
  return (
    <section id="education" className="z-[2] bg-black pt-24 w-full">
      <div className="w-1/2 mx-auto">
        <h1 className="text-[6.9rem] text-white text-center font-spaceGrotesk">
          Education
        </h1>
        <p className="font-DMSANS    bg-gradient-to-tr from-[#dff2f3] to-[#f3f5f4] bg-clip-text text-transparent text-[1.25rem]  text-center">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div className="bg-[#ffffff26]  justify-center items-start w-[1px] flex relative">
        <div
          className="bg-[linear-gradient(to_bottom_#0000,##2cf8ff_45%,#0000)] w-[2px] flex absolute justify-center items-center"
          style={{ willChange: "width", height: "28.142%" }}
        ></div>
      </div>
      <div className="flex flex-col">
        <div className="w-[40.625rem] rounded-[10px] p-[12px_16px]  "></div>
      </div>
    </section>
  );
};

export default EducationSection;
