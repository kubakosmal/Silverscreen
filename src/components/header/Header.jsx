import AppLogo from "./logos/AppLogo";
import Navbar from "./Navbar/Navbar";
import Hamburger from "./Hamburger/Hamburger";
import { useState, useEffect } from "react";
import LogInRegisterButtons from "./LogInRegisterButtons/LogInRegisterButtons";
import SearchComponent from "../SearchComponent/SearchComponent";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  return (
    <div
      className={`text-gray-200 border border-red-pigment w-full ${
        props.noBackdrop ? "bg-black" : "absolute"
      }`}
    >
      <div className="border max-w-5xl mx-auto flex justify-between items-center">
        <a href="/">
          <div className="">
            <p>App logo</p>
          </div>
        </a>

        <div className="border">
          <SearchComponent></SearchComponent>
        </div>
        <div className="flex border">
          <p>Films</p>
          <p>Tv Shows</p>
          <p>option 3</p>
          <p>option 4</p>
        </div>
        <div className="flex border">
          <p>Log In</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
