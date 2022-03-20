import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons/lib";

const HamburgerSpans = () => {
  return (
    <div className="space-y-1">
      <span className="block h-0.5 w-5 animate-pulse bg-white"></span>
      <span className="block h-0.5 w-5 animate-pulse bg-white"></span>
      <span className="block h-0.5 w-5 animate-pulse bg-white"></span>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="text-gray-300 text-sm font-ibm absolute right-1 top-2 flex flex-col w-1/2 bg-neutral-900 rounded-md p-1 px-3">
      <div className="self-end">X</div>
      <div className="flex justify-between items-center border-b border-gray-300 my-1">
        <p>FILMS</p>
        <IconContext.Provider value={{ color: "white" }}>
          <MdOutlineKeyboardArrowRight className="w-6 h-6" />
        </IconContext.Provider>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 my-1">
        <p>SHOWS</p>
        <IconContext.Provider value={{ color: "white" }}>
          <MdOutlineKeyboardArrowRight className="w-6 h-6" />
        </IconContext.Provider>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 my-1">
        <p>PEOPLE</p>
        <IconContext.Provider value={{ color: "white" }}>
          <MdOutlineKeyboardArrowRight className="w-6 h-6" />
        </IconContext.Provider>
      </div>
      <div className="flex justify-between items-center my-1">
        <p>LOG IN</p>
        <IconContext.Provider value={{ color: "white" }}>
          <MdOutlineKeyboardArrowRight className="w-6 h-6" />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default function Hamburger() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  return (
    <div
      className=""
      onClick={() => {
        setIsHamburgerActive((currentState) => !currentState);
      }}
    >
      {isHamburgerActive ? <Menu /> : <HamburgerSpans />}
    </div>
  );
}
