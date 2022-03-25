import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../SearchComponent/SearchComponent";
import { LoggedContext } from "../../Context/Context";

export default function Navbar() {
  const authContext = useContext(LoggedContext);
  const isUserLoggedIn = authContext.isLogged;
  const userName = authContext.userName;
  const userProfilePath = authContext.userProfilePath;
  return (
    <>
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
      </div>

      {isUserLoggedIn ? (
        <Link to={"/user"}>
          <div className="mx-1 flex items-center">
            <div>
              <div className="rounded-full mx-1 border-2 border-crayola">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={userProfilePath}
                ></img>
              </div>
            </div>

            <p className="font-bold">{userName.toUpperCase()}</p>
          </div>
        </Link>
      ) : (
        <Link to={"/login"}>
          <div className="font-bold">
            <p>LOG IN</p>
          </div>
        </Link>
      )}
    </>
  );
}
