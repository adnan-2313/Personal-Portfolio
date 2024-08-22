const menuItems = [
  {
    name: "HOME",
    link: "/",
    customStyle: "bg-gradient-to-tr from-[#2cf8ff] to-[#18ffb0] bg-clip-text text-transparent",
    width: "11rem",
  },
  { name: "SKILLS", link: "#skills" },
  { name: "PROJECTS", link: "#projects" },
  { name: "EDUCATION", link: "#education" },
  { name: "CERTIFICATION", link: "#certificates" },
];

const Navbar = () => {
  return (
    <div className="max-w-[60rem] z-[100]  w-[50rem] mb-[18rem] mx-auto sticky top-[2rem] bottom-[-8rem]">
      <nav className="backdrop-blur-[30px] w-[100%] bg-[rgba(4,19,14,0.5)]  mt-[10px] bg-opacity-50 p-[20px_10px] max-lg:hidden 
      flex rounded-[50px]  border-gray-700 border-[0.1px] ">
        <ul className="text-white flex flex-row font-[450] items-center text-[0.9rem] font-DMSANS">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex justify-start   p-[1.5px_45px]  cursor-pointer hover:bg-gradient-to-tr from-[#2cf8ff] to-[#18ffb0] bg-clip-text hover:text-transparent ${
                item.customStyle || ""
              } ${index !== menuItems.length - 1 ? "border-r-[1px] border-gray-500" : ""}`}
            >
              <a href={item.link}  className="active:border-b-[1px] border-green-400">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
