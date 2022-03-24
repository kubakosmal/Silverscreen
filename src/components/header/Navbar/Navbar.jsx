import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../SearchComponent/SearchComponent";

export default function Navbar() {
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

        <Link to={"/user"}>
          <div className="mx-1">
            <p>USER</p>
          </div>
        </Link>
      </div>

      <Link to={"/login"}>
        <div className="font-bold">
          <p>LOG IN</p>
        </div>
      </Link>
    </>
  );
}
