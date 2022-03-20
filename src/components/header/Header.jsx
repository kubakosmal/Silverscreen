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
      <div className="py-5 max-w-5xl mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div className="bg-clip-text bg-gradient-to-tr from-teal-500 to-purple-700 text-3xl flex items-center justify-center">
            <Atropos shadow={false} highlight={false}>
              <div className="w-9 mr-1 rounded-lg h-9 flex items-center font-bold justify-center bg-gradient-to-tr from-red-500 to-purple-700 text-gray-200">
                S
              </div>
            </Atropos>

            <div className="font-bold">ILVERSCREEN</div>
          </div>
        </Link>

        <div className="w-1/3">
          <SearchComponent></SearchComponent>
        </div>
        <div className="flex text-md font-lato font-bold">
          <Link to={"/films"}>
            <div className="mx-1">
              <p>FILMS</p>
            </div>
          </Link>

          <Link to={"/shows"}>
            <div className="mx-1">
              <p>SHOWS</p>
            </div>
          </Link>

          <Link to={"/people"}>
            <div className="mx-1">
              <p>PEOPLE</p>
            </div>
          </Link>

          <Link to={"/films"}>
            <div className="mx-1">
              <p>DISCOVER</p>
            </div>
          </Link>
        </div>
        <div className="font-bold">
          <p>LOG IN</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
