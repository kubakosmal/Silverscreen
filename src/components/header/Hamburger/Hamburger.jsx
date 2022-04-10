import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

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
    <div className="z-10 text-gray-100 text-sm font-ibm absolute right-2 top-1 flex flex-col w-1/2 bg-neutral-900 rounded-md">
      <div className="relative rounded-md">
        <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
        <div className="relative font-lato bg-neutral-900 rounded-md flex flex-col">
          <div className="w-full border-b-2 border-neutral-700 py-1 flex flex-col">
            <div className="self-end mr-4 b font-bold">X</div>
          </div>
          <ul className="">
            <li className="odd:bg-slate-1000 px-3">
              <Link to={"/films"}>
                <div className="flex justify-between items-center py-1">
                  <p className="font-bold text-white">FILMS</p>
                  <IconContext.Provider value={{ color: "white" }}>
                    <MdOutlineKeyboardArrowRight className="w-6 h-6" />
                  </IconContext.Provider>
                </div>
              </Link>
            </li>

            <li className="odd:bg-slate-1000 px-3">
              <Link to={"/shows"}>
                <div className="flex justify-between items-center border-gray-300 py-1">
                  <p className="font-bold text-white">SHOWS</p>
                  <IconContext.Provider value={{ color: "white" }}>
                    <MdOutlineKeyboardArrowRight className="w-6 h-6" />
                  </IconContext.Provider>
                </div>
              </Link>
            </li>

            <li className="odd:bg-slate-1000 px-3">
              <Link to={"/people"}>
                <div className="flex justify-between items-center border-gray-300 py-1">
                  <p className="font-bold text-white">PEOPLE</p>
                  <IconContext.Provider value={{ color: "white" }}>
                    <MdOutlineKeyboardArrowRight className="w-6 h-6" />
                  </IconContext.Provider>
                </div>
              </Link>
            </li>

            <li className="odd:bg-slate-1000 px-3">
              <Link to={"/login"}>
                <div className="flex justify-between items-center py-1">
                  <p className="font-bold text-crayola">LOG IN</p>
                  <IconContext.Provider value={{ color: "#FFE66D" }}>
                    <MdOutlineKeyboardArrowRight className="w-6 h-6" />
                  </IconContext.Provider>
                </div>
              </Link>
            </li>
          </ul>
        </div>
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
