import AppLogo from "./logos/AppLogo";
import Navbar from "./Navbar/Navbar";
import Hamburger from "./Hamburger/Hamburger";
import { useState, useEffect } from "react";
import LogInRegisterButtons from "./LogInRegisterButtons/LogInRegisterButtons";
import SearchComponent from "../SearchComponent/SearchComponent";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";

const Header = (props) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  return (
    <div
      className={`text-gray-200 w-full font-lato ${
        props.noBackdrop
          ? "bg-slate-1100 border-b-4 border-slate-1100"
          : "absolute"
      }`}
    >
      <div className="lg:py-5 mx-4 lg:text-sm py-2 md:py-3 max-w-5xl lg:mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div className="bg-clip-text bg-gradient-to-tr from-teal-500 to-purple-700 text-md lg:text-3xl flex items-center justify-center">
            <Atropos shadow={false} highlight={false}>
              <div className="lg:w-9 lg:h-9 w-6 h-6 text-gray-200 border-white lg:mr-1 rounded-lg flex items-center font-bold justify-center bg-gradient-to-tr from-red-500 to-purple-700">
                S
              </div>
            </Atropos>
            <div className="font-bold">ILVERSCREEN</div>
          </div>
        </Link>
        {screenSize > 900 ? <Navbar /> : <Hamburger />}
      </div>
    </div>
  );
};

export default Header;
